import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import PdfPrinter from "pdfmake/src/printer.js";
import htmlToPdfmake from "html-to-pdfmake";
import removeMd from "remove-markdown";
import showdown from "showdown";
import jsdom from "jsdom";
import { cvChild } from "./utils.js";

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
  linkColor: "#212121",
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
    separator
  } = { ...DEFAULT_PROPS, ...props };
  if (pageCountOn) pageMargins[3] += 20;

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
        a: { color: linkColor, decoration: null},
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
    // Replace font-weight: normal spans with a special marker
    const processedTitle = title.replace(/<span style=['"]font-weight:\s*normal;?['"]>(.*?)<\/span>/gi, '||NORMAL||$1||/NORMAL||');
    // Wrap the processed title in bold, then restore normal weight parts
    const boldTitle = `<b>${processedTitle}</b>`;
    // Convert markers back to spans that will override the bold
    return boldTitle.replace(/\|\|NORMAL\|\|(.*?)\|\|\/NORMAL\|\|/gi, '</b><span style="font-weight: normal;">$1</span><b>');
  };

  const getChild = (child, mini, last, separator) => [
    {
      unbreakable: unbreakableChildren,
      stack: [
        // child title and subtitles
        {
          unbreakable: true,
          stack: [
            {
              layout,
              margin: [0, 4 * paragraphFactor, 0, 1 * paragraphFactor],
              table: {
                widths: [PAGE_WIDTH - pageMargins[0] - pageMargins[2] - 10],
                body: [
                  [
                    // {
                    //   text: child.date,
                    // },
                    {
                      text: markdownToPdfMake(
                        `<span style="decoration: underline">${child.date}${separator}${processTitle(child.title)}${(child.subtitles ? separator + child.subtitles.join(separator) : "")}</span>${(mini ? " " + child.body : "")}`,
                      ),
                      // bold: true,
                      // font: "childTitleFont",
                      alignment: "left",
                      margin: [0, 0, 0,  mini ? -6 :-2],
                    },
                  ],
                  // ...(child.subtitles
                  //   ? [
                  //       [
                  //         {
                  //           colSpan: 2,
                  //           text: markdownToPdfMakeUnstyledLink(
                  //             child.subtitles.join(" ∙ ")
                  //           ),
                  //         },
                  //         // "",
                  //         "",
                  //       ],
                  //     ]
                  //   : []),
                ],
              },
            },
            // ...(mini
            //   ? [
            //     {
            //       text:
            //         child.subtitles &&
            //         markdownToPdfMake(child.subtitles.join(", ")),
            //       lineHeight: largeLineHeight,
            //       margin: [
            //         0,
            //         0,
            //         0,
            //         (child.subtitles ? -2 : 1) * paragraphFactor,
            //       ],
            //     },
            //   ]
            //   : []),
          ],
        },
        // child body
        ...(mini || !child.body ? [] : [["", markdownToPdfMake(child.body, {
          ul: { margin: [8, 0, 0, 0] },
        })]]),
        {
          text: "",
          margin: [0, 0, 0, (child.meta || last ? 9 : 4) * paragraphFactor],
        },
      ],
    },
  ];

  const docDefinition = {
    content: [
      // title including personal information
      {
        layout,
        table: google
          ? {
            widths: ["*", innerPageWidth / 1.9],
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
                    [markdownToPdfMake(profile.email + (profile.permit ? separator + profile.permit : ""))],

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
                    {
                      text: profile.github,
                      nodeName: "A",
                      color: linkColor,
                      decoration: ["underline"],
                      style: "html-a",
                    },
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
  str = profile.name + "\n"  + profile.email + "\n" + profile.phone + "\n" + profile.address + "\n" + profile.programmingLanguages + "\n\n" + str;
  return removeMd(str, { stripListLeaders: false }).replaceAll("\n* ", "\n- ");
}

export { cvChild, resumeCompilerPlain };
