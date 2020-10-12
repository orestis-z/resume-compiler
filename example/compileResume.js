import resumeCompiler from "../index.js";
import cv, { profile } from "./cv.js";

// const fonts = {
//   defaultFont: {
//     normal: "fonts/SalvoSans-Light2.ttf",
//     italics: "fonts/SalvoSans-Light-Italic.ttf",
//     bold: "fonts/SalvoSans-Medium2.ttf",
//   },
//   childTitleFont: {
//     bold: "fonts/SalvoSans-Bold.ttf",
//   },
//   headerFont: {
//     bold: "fonts/Barlow-Bold.ttf",
//     bolditalics: "fonts/Barlow-Bolditalic.ttf",
//   },
// };

resumeCompiler({
  cv,
  profile,
  // fonts,
  // lineHeight: 0.92,
  // mainTitleSize: 26,
  // subtitleSize: 11,
  // headerSize: 13,
  // fontSize: 9,
});
