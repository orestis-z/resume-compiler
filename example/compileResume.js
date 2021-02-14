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
  // filePath: "output/Resume_Orestis_Zambounis_Google_Software_Eng.pdf",
  // fonts,
  lineHeight: 0.92,
  mainTitleSize: 23,
  // mainTitleSize: 26,
  subtitleSize: 11,
  // subtitleSize: 1,
  headerSize: 13,
  fontSize: 9,
  unbreakableChildren: true,
  google: true,
});
