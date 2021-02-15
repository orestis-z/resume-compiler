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

resumeCompiler({
  cv,
  profile,
  fonts,
  lineHeight: 0.92,
  mainTitleSize: 23,
  subtitleSize: 11,
  headerSize: 13,
  fontSize: 9,
  unbreakableChildren: true,
  google: true,
});
