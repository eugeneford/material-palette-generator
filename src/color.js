import { ACCURACY } from './variables.js';

const checkRange = (value, maxValue, label) => {
  if (isNaN(value) || 0 > value || value > maxValue)
    throw new RangeError(value + ' for ' + label + ' is not between 0 and ' + maxValue);
};

export class HSBColor {
  constructor(hue, saturation, brightness, alpha = 1) {
    this.hue = hue;
    this.saturation = saturation;
    this.value = brightness;
    this.alpha = alpha;
    checkRange(hue, 360, 'hue');
    checkRange(saturation, 1, 'saturation');
    checkRange(brightness, 1, 'value');
    checkRange(alpha, 1, 'alpha');
  };
}

export class HSLColor {
  constructor(hue, saturation, lightness, alpha = 1) {
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.alpha = alpha;
    checkRange(hue, 360, 'hue');
    checkRange(saturation, 1, 'saturation');
    checkRange(lightness, 1, 'lightness');
    checkRange(alpha, 1, 'alpha');
  };

  // rotate() is never be called
  rotate(hueAdjustment) {
    return new HSLColor((this.hue + hueAdjustment + 360) % 360, this.saturation, this.lightness, this.alpha);
  }

  // toCSSValue() is never be called
  toCSSValue() {
    return (
      'hsla(' +
      this.hue + ', ' +
      100 * this.saturation + '%, ' +
      100 * this.lightness + '%, ' + this.alpha +
      ')'
    );
  }
}

export class LABColor {
  constructor(lightness, a, b, alpha = 1) {
    this.lightness = lightness;
    this.a = a;
    this.b = b;
    this.alpha = alpha;
    checkRange(lightness, Number.MAX_VALUE, 'lightness');
    checkRange(alpha, 1, 'alpha');
  }

  // equals() is never be called
  equals(a) {
    return (
      1e-4 > Math.abs(this.lightness - a.lightness) &&
      1e-4 > Math.abs(this.a - a.a) &&
      1e-4 > Math.abs(this.b - a.b) &&
      Math.abs(this.alpha - a.alpha) < ACCURACY
    );
  }
};

export class LCHColor {
  constructor(lightness, chroma, hue, alpha = 1) {
    this.lightness = lightness;
    this.chroma = chroma;
    this.hue = hue;
    this.alpha = alpha;
    checkRange(lightness, Number.MAX_VALUE, 'lightness');
    checkRange(chroma, Number.MAX_VALUE, 'chroma');
    checkRange(hue, 360, 'hue');
    checkRange(alpha, 1, 'alpha');
  };

  // equals() is never be called
  equals(a) {
    return (
      1e-4 > Math.abs(this.lightness - a.lightness) &&
      1e-4 > Math.abs(this.chroma - a.chroma) &&
      1e-4 > Math.abs(this.hue - a.hue) &&
      Math.abs(this.alpha - a.alpha) < ACCURACY
    );
  }
}

export class RGBColor {
  constructor(red, green, blue, alpha = 1) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
    checkRange(red, 1, 'red');
    checkRange(green, 1, 'green');
    checkRange(blue, 1, 'blue');
    checkRange(alpha, 1, 'alpha');
  }

  equals(rgbColor) {
    return (
      Math.abs(this.red - rgbColor.red) < ACCURACY &&
      Math.abs(this.green - rgbColor.green) < ACCURACY &&
      Math.abs(this.blue - rgbColor.blue) < ACCURACY &&
      Math.abs(this.alpha - rgbColor.alpha) < ACCURACY
    );
  }

  // toCSSValue() is never be called
  toCSSValue() {
    return (
      'rgba(' +
      100 * this.red + '%, ' +
      100 * this.green + '%, ' +
      100 * this.blue + '%, ' +
      this.alpha +
      ')'
    );
  }
}

export class XYZColor {
  constructor(x, y, z, alpha = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.alpha = alpha;
  };
}
