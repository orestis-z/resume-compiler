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

const factor = 0.77

resumeCompiler({
  cv,
  profile,
  fonts,
  lineHeight: 0.92,
  mainTitleSize: 22,
  subtitleSize: 10,
  headerSize: 12.4,
  fontSize: 8.75,
  pageMargins: [60 * factor, 60 * factor, 60 * factor, 60 * factor],
  unbreakableChildren: true,
  google: true,
});
