import resumeCompiler from "../index.js";
import cv, { profile } from "./cv.js";

const fonts = {
  defaultFont: {
    normal: "example/fonts/SalvoSans-Light2.ttf",
    italics: "example/fonts/SalvoSans-Light-Italic.ttf",
    bold: "example/fonts/SalvoSans-Medium2.ttf",
  },
  childTitleFont: {
    bold: "example/fonts/SalvoSans-Bold.ttf",
  },
  headerFont: {
    bold: "example/fonts/Barlow-Bold.ttf",
    bolditalics: "example/fonts/Barlow-Bolditalic.ttf",
  },
};

const factor = 0.95

resumeCompiler({
  cv,
  profile,
  fonts,
  lineHeight: 0.94,
  mainTitleSize: 24,
  subtitleSize: 11.3,
  headerSize: 13.5,
  fontSize: 9,
  paragraphFactor: 1.1,
  pageMargins: [60 * factor, 65 * factor, 60 * factor, 65 * factor],
  unbreakableChildren: true,
  google: true,
});
