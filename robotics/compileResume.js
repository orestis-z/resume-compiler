import resumeCompiler from "../index.js";
import cv, { profile } from "./cv.js";

const fonts = {
  defaultFont: {
    // normal: "example/fonts/SalvoSans-Light2.ttf",
    // italics: "example/fonts/SalvoSans-Light-Italic.ttf",
    // bold: "example/fonts/SalvoSans-Medium2.ttf",
    normal: "example/fonts/Montserrat-Light.ttf",
    italics: "example/fonts/Montserrat-LightItalic.ttf",
    bold: "example/fonts/Montserrat-SemiBold.ttf",
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
  lineHeight: 1.05,
  mainTitleSize: 24,
  subtitleSize: 11,
  headerSize: 13.5,
  fontSize: 8.7,
  paragraphFactor: 1.32,
  pageMargins: [60 * factor, 68 * factor, 60 * factor, 68 * factor],
  unbreakableChildren: true,
  google: true,
});
