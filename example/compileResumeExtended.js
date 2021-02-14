import pdf2pic from "pdf2pic";
import mergeImg from "merge-img";
import "./compileResume.js";

const name = "Resume_Orestis_Zambounis";
const options = {
  density: 300,
  saveFilename: name,
  savePath: "output/",
  format: "png",
  width: 2480 * 0.4,
  height: 3508 * 0.4,
};
pdf2pic.fromPath(`output/${name}.pdf`, options).bulk(-1);
const imgPath = `output/${name}.png`;
mergeImg([`output/${name}.1.png`, `output/${name}.2.png`]).then(img => {
  img.write(imgPath, () => console.log(`Saved to ${imgPath}`));
});
