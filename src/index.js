import { GOLDEN_DARK_PALETTES, GOLDEN_LIGHT_PALETTES, GOLDEN_PALETTES, DEFAULT_LIGHTNESS_TOLERANCE, REDUCED_CHROMA_TOLERANCE, DEFAULT_CHROMA_TOLERANCE } from './variables.js';
import { LCHColor } from './color.js';
import { lab2hue, rgb2lab, lab2lch, lch2rgb } from './util.js';

function findClosestGoldenPalette(labColor, goldenPalettes = GOLDEN_PALETTES) {
  let minEmpfindungDifference = Infinity;
  let closestGoldenPallete = goldenPalettes[0];
  let closestColorIndex = -1;
  for (let paletteIndex = 0; paletteIndex < goldenPalettes.length; paletteIndex++)
    for (let colorIndex = 0; colorIndex < goldenPalettes[paletteIndex].length && 0 < minEmpfindungDifference; colorIndex++) {
      const goldenColor = goldenPalettes[paletteIndex][colorIndex];
      const avgLightness = (goldenColor.lightness + labColor.lightness) / 2;
      const goldenColorChroma = Math.sqrt(Math.pow(goldenColor.a, 2) + Math.pow(goldenColor.b, 2));
      const labColorChroma = Math.sqrt(Math.pow(labColor.a, 2) + Math.pow(labColor.b, 2));
      const avgChroma = (goldenColorChroma + labColorChroma) / 2;

      const G = 0.5 * (1 - Math.sqrt(Math.pow(avgChroma, 7) / (Math.pow(avgChroma, 7) + Math.pow(25, 7))));

      const adjustedGoldenA = goldenColor.a * (1 + G);
      const adjustedLabA = labColor.a * (1 + G);
      const goldenColorAdjustedChroma = Math.sqrt(Math.pow(adjustedGoldenA, 2) + Math.pow(goldenColor.b, 2));
      const labColorAdjustedChroma = Math.sqrt(Math.pow(adjustedLabA, 2) + Math.pow(labColor.b, 2));

      const deltaAdjustedChroma = labColorAdjustedChroma - goldenColorAdjustedChroma;

      const avgAdjustedChroma = (goldenColorAdjustedChroma + labColorAdjustedChroma) / 2;

      const goldenColorModifiedHue = lab2hue(goldenColor.b, adjustedGoldenA);
      const labColorModifiedHue = lab2hue(labColor.b, adjustedLabA);
      const deltaHue = 2 *
        Math.sqrt(goldenColorAdjustedChroma * labColorAdjustedChroma) *
        Math.sin(
          (1e-4 > Math.abs(goldenColorChroma) || 1e-4 > Math.abs(labColorChroma)
            ? 0
            : 180 >= Math.abs(labColorModifiedHue - goldenColorModifiedHue)
              ? labColorModifiedHue - goldenColorModifiedHue
              : labColorModifiedHue <= goldenColorModifiedHue
                ? labColorModifiedHue - goldenColorModifiedHue + 360
                : labColorModifiedHue - goldenColorModifiedHue - 360) / 2 * Math.PI / 180
        );

      const avgHue = 1e-4 > Math.abs(goldenColorChroma) || 1e-4 > Math.abs(labColorChroma)
        ? 0
        : 180 >= Math.abs(labColorModifiedHue - goldenColorModifiedHue)
          ? (goldenColorModifiedHue + labColorModifiedHue) / 2
          : 360 > goldenColorModifiedHue + labColorModifiedHue
            ? (goldenColorModifiedHue + labColorModifiedHue + 360) / 2
            : (goldenColorModifiedHue + labColorModifiedHue - 360) / 2;

      const chromaCompensation = 1 + 0.045 * avgAdjustedChroma;

      const hueCompensation = 1 + 0.015 * avgAdjustedChroma *
        (1 -
          0.17 * Math.cos(((avgHue - 30) * Math.PI) / 180) +
          0.24 * Math.cos((2 * avgHue * Math.PI) / 180) +
          0.32 * Math.cos(((3 * avgHue + 6) * Math.PI) / 180) -
          0.2 * Math.cos(((4 * avgHue - 63) * Math.PI) / 180)
        );

      const lightnessCompensation = 1 + (0.015 * Math.pow(avgLightness - 50, 2)) / Math.sqrt(20 + Math.pow(avgLightness - 50, 2));

      const chromaRotation = 2 * Math.sqrt(Math.pow(avgAdjustedChroma, 7) / (Math.pow(avgAdjustedChroma, 7) + Math.pow(25, 7)));

      const deltaTheta = 30 * Math.exp(-Math.pow((avgHue - 275) / 25, 2));

      const hueRotation = -1 * chromaRotation * Math.sin((2 * deltaTheta * Math.PI) / 180);

      const empfindungDifference = Math.sqrt(
        Math.pow((labColor.lightness - goldenColor.lightness) / (lightnessCompensation), 2) +
        Math.pow(deltaAdjustedChroma / (1 * chromaCompensation), 2) +
        Math.pow(deltaHue / hueCompensation, 2) +
        (deltaAdjustedChroma / chromaCompensation) * hueRotation * (deltaHue / hueCompensation)
      );

      if (empfindungDifference < minEmpfindungDifference) {
        minEmpfindungDifference = empfindungDifference;
        closestGoldenPallete = goldenPalettes[paletteIndex];
        closestColorIndex = colorIndex;
      }
    }
  return { closestGoldenPallete, closestColorIndex };
}

function generatePalette(sourceRgbColor, goldenPalettes = GOLDEN_PALETTES, lightnessTolerance = DEFAULT_LIGHTNESS_TOLERANCE, chromaTolerance = DEFAULT_CHROMA_TOLERANCE) {
  const sourceLabColor = rgb2lab(sourceRgbColor);
  const { closestGoldenPallete, closestColorIndex } = findClosestGoldenPalette(sourceLabColor, goldenPalettes);
  const closestGoldenLabColor = closestGoldenPallete[closestColorIndex];
  const closestGoldenLchColor = lab2lch(closestGoldenLabColor);
  const sourceLchColor = lab2lch(sourceLabColor);
  const isGoldenColorGreyInMiddle = 30 > lab2lch(closestGoldenPallete[5]).chroma;
  const deltaGoldenLightness = closestGoldenLchColor.lightness - sourceLchColor.lightness;
  const deltaGoldenChroma = closestGoldenLchColor.chroma - sourceLchColor.chroma;
  const deltaGoldenHue = closestGoldenLchColor.hue - sourceLchColor.hue;
  const lightnessMinimumStep = 2;
  let lightnessMaximum = 100;

  return closestGoldenPallete.map((goldenLabColor, index) => {
    if (goldenLabColor === closestGoldenLabColor) {
      lightnessMaximum = Math.max(sourceLchColor.lightness - 1.7, 0);
      return sourceRgbColor;
    }

    if (index === 10) {
      lightnessMaximum = 100; // Restart maximum lightness when trasitioning from color 900 to A100
    }

    const goldenLchColor = lab2lch(goldenLabColor);

    const lightness = Math.min(Math.max(
      Math.min(goldenLabColor.lightness - (lightnessTolerance[index] / lightnessTolerance[closestColorIndex]) * deltaGoldenLightness, lightnessMaximum),
      0), 100); // Ensure lightness not lower than 0 and not greater than 100

    const chroma = Math.max(0, isGoldenColorGreyInMiddle ? goldenLchColor.chroma - deltaGoldenChroma : goldenLchColor.chroma - deltaGoldenChroma * Math.min(chromaTolerance[index] / chromaTolerance[closestColorIndex], 1.25));

    const hue = (goldenLchColor.hue - deltaGoldenHue + 360) % 360;

    const lchColor = new LCHColor(lightness, chroma, hue);

    lightnessMaximum = Math.max(lchColor.lightness - lightnessMinimumStep, 0);

    return lch2rgb(lchColor);
  });
}

const generateAccentPalette = (rgbColor) => generatePalette(rgbColor, GOLDEN_PALETTES, DEFAULT_LIGHTNESS_TOLERANCE, DEFAULT_CHROMA_TOLERANCE);

const generateLightPalette = (rgbColor) => generatePalette(rgbColor, GOLDEN_LIGHT_PALETTES, DEFAULT_LIGHTNESS_TOLERANCE, REDUCED_CHROMA_TOLERANCE);

const generateDarkPalette = (rgbColor) => generatePalette(rgbColor, GOLDEN_DARK_PALETTES, DEFAULT_LIGHTNESS_TOLERANCE, DEFAULT_CHROMA_TOLERANCE);

export { generateAccentPalette, generateLightPalette, generateDarkPalette };
