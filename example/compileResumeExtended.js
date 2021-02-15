import pdf2pic from "pdf2pic";
import mergeImg from "merge-img";
import "./compileResume.js";

const SCALE = 0.4;
const name = "Resume_Orestis_Zambounis";
const options = {
  density: 300,
  saveFilename: name,
  savePath: "output/",
  format: "png",
  width: 2480 * SCALE,
  height: 3508 * SCALE,
};
pdf2pic.fromPath(`output/${name}.pdf`, options).bulk(-1);
const imgPath = `output/${name}.png`;
mergeImg([`output/${name}.1.png`, `output/${name}.2.png`])
  .then(img => img.write(imgPath, () => console.log(`Saved to ${imgPath}`)))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
