import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import PdfPrinter from "pdfmake/src/printer.js";
import htmlToPdfmake from "html-to-pdfmake";
import showdown from "showdown";
import jsdom from "jsdom";
import { cvChild } from "./utils.js";

const markdownConverter = new showdown.Converter();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { window } = new jsdom.JSDOM("");

const PAGE_WIDTH = 595.28;
const PAGE_MARGINS = [60, 65, 60, 65];

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
  pageCountOn: true,
  color: "#212121",
  linkColor: "#212121",
  mainTitleSize: 24,
  subtitleSize: 12,
  headerSize: 13,
  fontSize: 10,
  lineHeight: 1,
  pageMargins: PAGE_MARGINS,
  unbreakableChildren: false,
  google: false,
};

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
    pageMargins,
    unbreakableChildren,
    filePath,
    google,
  } = { ...DEFAULT_PROPS, ...props };
  if (pageCountOn) pageMargins[3] += 20;

  const innerPageWidth = PAGE_WIDTH - (pageMargins[0] + pageMargins[2]);
  const largeLineHeight = lineHeight * 1.05;

  const getChild = (child, mini, last) => [
    {
      unbreakable: unbreakableChildren,
      stack: [
        // child title and subtitles
        {
          unbreakable: true,
          stack: [
            {
              layout: "noBorders",
              margin: [0, 2, 0, 0],
              table: {
                widths: [PAGE_WIDTH * 0.6, "*"],
                body: [
                  [
                    {
                      text: child.title,
                      bold: true,
                      font: "childTitleFont",
                      margin: [0, 0, 0, child.meta ? -4 : -2],
                    },
                    {
                      text: child.meta ? child.meta.join(" - ") : "",
                      italics: true,
                      alignment: "right",
                      margin: [0, 0, 0, child.meta ? -4 : -2],
                    },
                  ],
                  ...(child.meta ? [[child.subtitles.join(" · "), ""]] : []),
                ],
              },
            },
            ...(mini
              ? [
                  {
                    text: child.subtitles && child.subtitles.join(", "),
                    lineHeight: largeLineHeight,
                    margin: [0, 0, 0, child.subtitles ? -2 : 1],
                  },
                ]
              : []),
          ],
        },
        // child body
        ...(mini || !child.body
          ? []
          : [
              [
                "",
                htmlToPdfmake(markdownConverter.makeHtml(child.body), {
                  window,
                  defaultStyles: {
                    p: {
                      margin: [0, 0, 0, 0],
                    },
                    ul: { margin: [0, 0, 0, 0] },
                    a: { color: linkColor },
                  },
                }),
              ],
            ]),
        { text: "", margin: [0, 0, 0, child.meta || last ? 9 : 4] },
      ],
    },
  ];

  const docDefinition = {
    content: [
      // title including personal information
      {
        layout: "noBorders",
        table: google
          ? {
              widths: ["*", innerPageWidth / 2],
              body: [
                [
                  {
                    stack: [
                      [{ text: profile.name, style: "title" }],
                      [profile.email],
                      // profile.programmingLanguages,
                    ],
                    lineHeight: largeLineHeight,
                    fontSize: subtitleSize,
                  },
                  {
                    stack: [
                      [
                        {
                          text: profile.github,
                          nodeName: "A",
                          color: linkColor,
                          decoration: ["underline"],
                          style: "html-a",
                          lineHeight: largeLineHeight,
                        },
                      ],
                      [profile.programmingLanguages],
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
                      {
                        text: profile.name,
                        style: "title",
                      },
                      {
                        text: profile.title,
                        style: "subtitle",
                      },
                    ],
                    alignment: "center",
                    margin: [0, -7, 0, 0],
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
        ? [{ text: profile.description, margin: [0, 10, 0, 0] }]
        : []),
      // sections (experience, education, etc.)
      ...cv.map(cvPart => {
        return [
          // ensure that no pagebreak between header and first child
          {
            unbreakable: true,
            stack: [
              { text: cvPart.title, style: "header" },
              // divider
              {
                canvas: [
                  {
                    type: "line",
                    x1: 0,
                    y1: 0,
                    x2: innerPageWidth,
                    y2: 0,
                    lineWidth: 0.8,
                    lineColor: color,
                  },
                ],
              },
              getChild(
                cvPart.children[0],
                cvPart.mini,
                cvPart.children.length == 1
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
                      i == cvPart.children.length - 2
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
          margin: [0, 30, pageMargins[2], 0],
        };
    },
    styles: {
      title: {
        fontSize: mainTitleSize,
        bold: true,
        font: "headerFont",
      },
      subtitle: {
        fontSize: subtitleSize,
      },
      header: {
        fontSize: headerSize,
        margin: [0, 10, 0, 2],
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

export { cvChild };
