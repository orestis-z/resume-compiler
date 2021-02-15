import pdf2pic from "pdf2pic";
import mergeImg from "merge-img";
import "../example/compileResume.js";

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
setTimeout(() => {
  const imgPath = `output/${NAME}.png`;
  mergeImg([`output/${NAME}.1.png`, `output/${NAME}.2.png`])
    .then(img => img.write(imgPath, () => console.log(`Saved to ${imgPath}`)))
    .catch(err => {
      console.error(err.message);
      process.exit(1);
    });
}, 1000);
