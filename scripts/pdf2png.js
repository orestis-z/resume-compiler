import pdf2pic from "pdf2pic";

const SCALE = 0.4;
const NAME = "Resume_Orestis_Zambounis";
const options = {
  density: 300,
  saveFilename: NAME,
  savePath: "output/",
  format: "png",
  width: 2480 * SCALE,
  height: 3508 * SCALE,
};
pdf2pic.fromPath(`output/${NAME}.pdf`, options).bulk(-1);
