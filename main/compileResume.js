import resumeCompiler from "../index.js";
import cv, { profile } from "./cv.js";

const fonts = {
  defaultFont: {
    // normal: "example/fonts/SalvoSans-Light2.ttf",
    // italics: "example/fonts/SalvoSans-Light-Italic.ttf",
    // bold: "example/fonts/SalvoSans-Medium2.ttf",
    normal: "example/fonts/OpenSans-Regular.ttf",
    italics: "example/fonts/OpenSans-Italic.ttf",
    bold: "example/fonts/OpenSans-Bold.ttf",
  },
  childTitleFont: {
    bold: "example/fonts/Roboto-Bold.ttf",
  },
  headerFont: {
    bold: "example/fonts/Roboto-Bold.ttf",
    bolditalics: "example/fonts/Roboto-BoldItalic.ttf",
  },
};

const factor = 0.95

resumeCompiler({
  cv,
  profile,
  fonts,
//   lineHeight: 1.05,
  lineHeight: 1.1,
  mainTitleSize: 18,
  subtitleSize: 9.5,
  headerSize: 13.5,
  fontSize: 8.7,
//   paragraphFactor: 1.32,
  paragraphFactor: 0.8,
  pageMargins: [60 * factor, 68 * factor, 60 * factor, 68 * factor],
  unbreakableChildren: true,
  google: true,
  separator: " · ",
});
