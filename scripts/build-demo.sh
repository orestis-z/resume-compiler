#!/bin/bash
set -e
node ./main/compileResume.js
sleep 1
node ./scripts/pdf2png.js
sleep 1
node ./scripts/mergePng.js
sleep 1
cp output/Resume_Orestis_Zambounis.png docs/
cp output/Resume_Orestis_Zambounis.pdf docs/
