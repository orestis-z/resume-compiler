import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import PdfPrinter from "pdfmake/src/printer.js";
import htmlToPdfmake from "html-to-pdfmake";
import removeMd from "remove-markdown";
import showdown from "showdown";
import jsdom from "jsdom";
import { cvChild } from "./utils.js";

const require = createRequire(import.meta.url);
const textDecorator = require("pdfmake/src/textDecorator.js");

function groupDecorations(line) {
  var groups = [], currentGroup = null;
  for (var i = 0, l = line.inlines.length; i < l; i++) {
    var inline = line.inlines[i];
    var decoration = inline.decoration;
    if (!decoration) {
      currentGroup = null;
      continue;
    }
    var decorations = Array.isArray(decoration) ? Array.from(new Set(decoration)) : [decoration];
    var color = inline.decorationColor || inline.color || "black";
    var style = inline.decorationStyle || "solid";
    for (var ii = 0, ll = decorations.length; ii < ll; ii++) {
      var decorationItem = decorations[ii];
      if (!currentGroup || decorationItem !== currentGroup.decoration ||
        style !== currentGroup.decorationStyle || color !== currentGroup.decorationColor) {

        currentGroup = {
          line: line,
          decoration: decorationItem,
          decorationColor: color,
          decorationStyle: style,
          inlines: [inline]
        };
        groups.push(currentGroup);
      } else if (currentGroup.inlines[currentGroup.inlines.length - 1] !== inline) {
        currentGroup.inlines.push(inline);
      }
    }
  }

  return groups;
}

function drawDecoration(group, x, y, pdfKitDoc) {
  function maxInline() {
    var max = 0;
    for (var i = 0, l = group.inlines.length; i < l; i++) {
      var inline = group.inlines[i];
      max = inline.fontSize > max ? i : max;
    }
    return group.inlines[max];
  }
  function width() {
    var sum = 0;
    for (var i = 0, l = group.inlines.length; i < l; i++) {
      var justifyShift = (group.inlines[i].justifyShift || 0);
      sum += group.inlines[i].width + justifyShift;
    }
    return sum;
  }
  var firstInline = group.inlines[0],
    biggerInline = maxInline(),
    totalWidth = width(),
    lineAscent = group.line.getAscenderHeight(),
    ascent = biggerInline.font.ascender / 1000 * biggerInline.fontSize,
    height = biggerInline.height,
    descent = height - ascent;

  var lw = 0.5 + Math.floor(Math.max(biggerInline.fontSize - 8, 0) / 2) * 0.12;

  switch (group.decoration) {
    case "underline":
      y += lineAscent + descent * 0.45;
      break;
    case "overline":
      y += lineAscent - (ascent * 0.85);
      break;
    case "lineThrough":
      y += lineAscent - (ascent * 0.25);
      break;
    default:
      throw "Unkown decoration : " + group.decoration;
  }
  pdfKitDoc.save();

  if (group.decorationStyle === "double") {
    var gap = Math.max(0.5, lw * 2);
    pdfKitDoc.fillColor(group.decorationColor)
      .rect(x + firstInline.x, y - lw / 2, totalWidth, lw / 2).fill()
      .rect(x + firstInline.x, y + gap - lw / 2, totalWidth, lw / 2).fill();
  } else if (group.decorationStyle === "dashed") {
    var nbDashes = Math.ceil(totalWidth / (3.96 + 2.84));
    var rdx = x + firstInline.x;
    pdfKitDoc.rect(rdx, y - lw / 2, totalWidth, lw).clip();
    pdfKitDoc.fillColor(group.decorationColor);
    for (var i = 0; i < nbDashes; i++) {
      pdfKitDoc.rect(rdx, y - lw / 2, 3.96, lw).fill();
      rdx += 3.96 + 2.84;
    }
  } else if (group.decorationStyle === "dotted") {
    var dotThickness = Math.max(0.85, lw * 1.7);
    pdfKitDoc.lineWidth(dotThickness);
    pdfKitDoc.lineCap("round");
    pdfKitDoc.dash(0.01, { space: 2.0 });
    pdfKitDoc.strokeColor(group.decorationColor);
    var startX = x + firstInline.x;
    pdfKitDoc.moveTo(startX, y).lineTo(startX + totalWidth, y).stroke();
  } else if (group.decorationStyle === "wavy") {
    var sh = 0.7, sv = 1;
    var nbWaves = Math.ceil(totalWidth / (sh * 2)) + 1;
    var rwx = x + firstInline.x - 1;
    pdfKitDoc.rect(x + firstInline.x, y - sv, totalWidth, y + sv).clip();
    pdfKitDoc.lineWidth(0.24);
    pdfKitDoc.moveTo(rwx, y);
    for (var iii = 0; iii < nbWaves; iii++) {
      pdfKitDoc.bezierCurveTo(rwx + sh, y - sv, rwx + sh * 2, y - sv, rwx + sh * 3, y)
        .bezierCurveTo(rwx + sh * 4, y + sv, rwx + sh * 5, y + sv, rwx + sh * 6, y);
      rwx += sh * 6;
    }
    pdfKitDoc.stroke(group.decorationColor);
  } else {
    pdfKitDoc.fillColor(group.decorationColor)
      .rect(x + firstInline.x, y - lw / 2, totalWidth, lw)
      .fill();
  }
  pdfKitDoc.restore();
}

textDecorator.drawDecorations = function (line, x, y, pdfKitDoc) {
  var groups = groupDecorations(line);
  for (var i = 0, l = groups.length; i < l; i++) {
    drawDecoration(groups[i], x, y, pdfKitDoc);
  }
};

const markdownConverter = new showdown.Converter();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { window } = new jsdom.JSDOM("");

const PAGE_WIDTH = 595.28;
const PAGE_MARGINS = [60, 65, 60, 65];

const DEBUG = false;

const layout = DEBUG ? "line" : "noBorders";

function getAbsPath(filePath) {
  return path.join(__dirname, "default-fonts", filePath);
}

const DEFAULT_FONTS = {
  defaultFont: {
    normal: getAbsPath("Roboto-Regular.ttf"),
    bold: getAbsPath("Roboto-Bold.ttf"),
    italics: getAbsPath("Roboto-Italic.ttf"),
  },
  childTitleFont: {
    bold: getAbsPath("Roboto-Black.ttf"),
  },
  headerFont: {
    bold: getAbsPath("OpenSans-ExtraBold.ttf"),
  },
};

const DEFAULT_PROPS = {
  profile: {},
  cv: [],
  fonts: DEFAULT_FONTS,
  pageCountOn: false,
  color: "#212121",
  linkColor: null,
  linkDecoration: "underline",
  linkDecorationStyle: "dotted",
  mainTitleSize: 24,
  subtitleSize: 12,
  headerSize: 13,
  fontSize: 10,
  lineHeight: 1,
  paragraphFactor: 1,
  pageMargins: PAGE_MARGINS,
  unbreakableChildren: false,
  google: false,
};

const getFullURL = (url) =>
  url.startsWith("https://") ? url : `https://${url}`;

export default function resumeCompiler(props) {
  const {
    profile,
    cv,
    fonts,
    pageCountOn,
    color,
    linkColor,
    linkDecoration,
    linkDecorationStyle,
    mainTitleSize,
    subtitleSize,
    headerSize,
    fontSize,
    lineHeight,
    paragraphFactor,
    pageMargins,
    unbreakableChildren,
    filePath,
    google,
    separator,
    separatorSec,
  } = { ...DEFAULT_PROPS, ...props };
  if (pageCountOn) pageMargins[3] += 20;

  const resolvedLinkColor = linkColor || color;
  const innerPageWidth = PAGE_WIDTH - (pageMargins[0] + pageMargins[2]);
  const largeLineHeight = lineHeight * 1.05;

  const markdownToPdfMake = (markdown, style) => {
    const html = markdownConverter.makeHtml(markdown);
    // console.log(html)
    return htmlToPdfmake(html, {
      window,
      defaultStyles: {
        p: {
          margin: [0, 0, 0, 0],
        },
        ul: { margin: [0, 0, 0, 0] },
        a: {
          color: resolvedLinkColor,
          decoration: linkDecoration,
          decorationStyle: linkDecorationStyle,
        },
        ...style,
      },
    });
  }
  const toLink = (linkText, linkURI, style) =>
    markdownToPdfMake(`[${linkText}](${linkURI})`, style);

  const toLinkUnstyled = (linkText, linkURI) =>
    toLink(linkText, linkURI, {
      a: { color: null, decoration: null },
    });

  const markdownToPdfMakeUnstyledLink = (markdown, style) =>
    markdownToPdfMake(markdown, {
      a: { color: null, decoration: null },
      ...style
    });

  const processTitle = (title) => {
    if (!title) return "";
    // Replace font-weight: normal spans with a special marker
    const processedTitle = title.replace(/<span style=['"]font-weight:\s*normal;?['"]>(.*?)<\/span>/gi, '||NORMAL||$1||/NORMAL||');
    // Wrap the processed title in bold, then restore normal weight parts
    const boldTitle = `<b>${processedTitle}</b>`;
    // Convert markers back to spans that will override the bold
    return boldTitle.replace(/\|\|NORMAL\|\|(.*?)\|\|\/NORMAL\|\|/gi, '</b><span style="font-weight: normal;">$1</span><b>');
  };

  const getChild = (child, mini, last, separator) => {
    const hasLink = child.title && (child.title.includes("](") || child.title.includes("<a"));
    const titleText = processTitle(child.title);
    const subtitlesText = child.subtitles ? separator + child.subtitles.join(separator) : "";
    const headerLine = hasLink
      ? `${titleText}${subtitlesText ? `<span style="decoration: underline">${subtitlesText}</span>` : ""}`
      : `<span style="decoration: underline">${titleText}${subtitlesText}</span>`;

    return [
      {
        unbreakable: unbreakableChildren,
        stack: [
          {
            unbreakable: true,
            stack: [
              {
                layout,
                margin: [0, 4 * paragraphFactor, 0, 1 * paragraphFactor],
                table: {
                  widths: ["*", "auto"],
                  body: [
                    [
                      {
                        text: markdownToPdfMake(
                          `${headerLine}${mini ? ": " + child.body : ""}`
                        ),
                        alignment: "left",
                        margin: [0, 0, 0, mini ? -6 : -2],
                      },
                      {
                        text: "(" + child.date + ")",
                        alignment: "right",
                        margin: [0, 0, 0, mini ? -6 : -2],
                      },
                    ],
                  ],
                },
              },
            ],
          },
        // child body
        ...(mini || !child.body
          ? []
          : [
            [
              "",
              markdownToPdfMake(child.body, {
                ul: { margin: [8, 0, 0, 0] },
              }),
            ],
          ]),
        {
          text: "",
          margin: [0, 0, 0, (child.meta || last ? 9 : 4) * paragraphFactor],
        },
      ],
    },
  ];
};


  const docDefinition = {
    content: [
      // title including personal information
      {
        layout,
        table: google
          ? {
            widths: ["*", innerPageWidth / 2.4],
            body: [
              [
                {
                  stack: [
                    [markdownToPdfMake(profile.name, {
                      p: {
                        fontSize: mainTitleSize,
                        margin: [
                          0,
                          (subtitleSize - mainTitleSize) * 0.22 * paragraphFactor,
                          0,
                          0,
                        ],
                        bold: true,
                        font: "headerFont",
                      }
                    })],
                    [markdownToPdfMake((profile.permit ? profile.permit + separatorSec : "") + profile.email + (profile.phone ? separatorSec + profile.phone : ""))],
                  ],
                  lineHeight: largeLineHeight,
                  fontSize: subtitleSize,
                },
                {
                  stack: [
                    [
                      profile.github &&
                      toLink(profile.github, getFullURL(profile.github)),
                    ],
                    [markdownToPdfMake(profile.programmingLanguages)],
                  ],
                  alignment: "right",
                  fontSize: subtitleSize,
                },
              ],
            ],
          }
          : {
            widths: ["*", innerPageWidth / 2, "*"],
            body: [
              [
                {
                  stack: [
                    profile.address,
                    profile.github ? {
                      text: profile.github,
                      link: getFullURL(profile.github),
                      nodeName: "A",
                      color: resolvedLinkColor,
                      decoration: linkDecoration,
                      decorationStyle: linkDecorationStyle,
                      style: "html-a",
                    } : "",
                    // profile.programmingLanguages,
                  ],
                  lineHeight: largeLineHeight,
                },
                {
                  stack: [
                    markdownToPdfMake(profile.name, {
                      p: {
                        fontSize: mainTitleSize,
                        margin: [
                          0,
                          (subtitleSize - mainTitleSize) * 0.22 * paragraphFactor,
                          0,
                          0,
                        ],
                        bold: true,
                        font: "headerFont",
                      }
                    }),
                    {
                      text: profile.title,
                      style: "subtitle",
                    },
                  ],
                  alignment: "center",
                  margin: [0, -7 * paragraphFactor, 0, 0],
                },
                {
                  stack: [[profile.phone], [profile.email]],
                  alignment: "right",
                  lineHeight: largeLineHeight,
                },
              ],
            ],
          },
      },
      // summary
      ...(profile.summary
        ? [
          {
            text: profile.description,
            margin: [0, 10 * paragraphFactor, 0, 0],
          },
        ]
        : []),
      // sections (experience, education, etc.)
      ...cv.map((cvPart) => {
        return [
          // ensure that no pagebreak between header and first child
          {
            unbreakable: true,
            stack: [
              { text: cvPart.title, style: "header" },
              // divider
              // {
              //   canvas: [
              //     {
              //       type: "line",
              //       x1: 0,
              //       y1: 0,
              //       x2: innerPageWidth,
              //       y2: 0,
              //       lineWidth: 0.8,
              //       lineColor: color,
              //     },
              //   ],
              // },
              getChild(
                cvPart.children[0],
                cvPart.mini,
                cvPart.children.length == 1,
                separator
              ),
            ],
          },
          // rest of children
          ...(cvPart.children.length - 1
            ? [
              cvPart.children
                .slice(1, cvPart.children.length)
                .map((child, i) =>
                  getChild(
                    child,
                    cvPart.mini,
                    i == cvPart.children.length - 2,
                    separator
                  )
                ),
            ]
            : []),
        ];
      }),
    ],
    footer: function (currentPage, pageCount) {
      if (pageCountOn)
        return {
          text: `${currentPage} / ${pageCount}`,
          alignment: "right",
          margin: [0, 30 * paragraphFactor, pageMargins[2], 0],
        };
    },
    styles: {
      title: {
        fontSize: mainTitleSize,
        margin: [
          0,
          (subtitleSize - mainTitleSize) * 0.22 * paragraphFactor,
          0,
          0,
        ],
        bold: true,
        font: "headerFont",
      },
      subtitle: {
        fontSize: subtitleSize,
      },
      header: {
        fontSize: headerSize,
        margin: [0, 10 * paragraphFactor, 0, 2 * paragraphFactor],
        font: "headerFont",
        bold: true,
      },
    },
    defaultStyle: {
      font: "defaultFont",
      fontSize,
      color,
      lineHeight,
    },
    pageMargins,
    pageBreakBefore(currentNode) {
      return currentNode.pageNumbers.length > 1 && currentNode.unbreakable;
    },
  };

  // Create PDF
  const printer = new PdfPrinter(fonts);
  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  const path =
    filePath || `output/Resume_${profile.name.split(" ").join("_")}.pdf`;
  const dir = dirname(path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  pdfDoc.pipe(fs.createWriteStream(path));
  pdfDoc.end();
  console.log(`Saved to ${path}`);
}

function resumeCompilerPlain(cv, profile) {
  let str = cv
    .map((cvPart) => {
      const children = cvPart.children
        .map(
          (child) =>
            `${child.title}\n${(child.subtitles || [])
              .concat([child.date])
              .join(" · ")}\n${child.body}`
        )
        .join("\n\n");
      return `${cvPart.title}\n\n${children}`;
    })
    .join("\n\n");
  str = profile.name + "\n" + profile.email + "\n" + profile.phone + "\n" + profile.address + "\n" + profile.programmingLanguages + "\n\n" + str;
  return removeMd(str, { stripListLeaders: false }).replaceAll("\n* ", "\n- ");
}

export { cvChild, resumeCompilerPlain };
