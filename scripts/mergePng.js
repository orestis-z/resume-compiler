import mergeImg from "merge-img";

const NAME = "Resume_Orestis_Zambounis";
const imgPath = `output/${NAME}.png`;
// mergeImg([`output/${NAME}.1.png`, `output/${NAME}.2.png`])
mergeImg([`output/${NAME}.1.png`])
  .then(img => img.write(imgPath, () => console.log(`Saved to ${imgPath}`)))
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });
