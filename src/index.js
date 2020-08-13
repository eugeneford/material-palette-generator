var minMax = function (a, b, c) {
  return Math.min(Math.max(a, b), c);
};

function checkRange(value, maxValue, label) {
  if (isNaN(value) || 0 > value || value > maxValue)
    throw new RangeError(value + ' for ' + label + ' is not between 0 and ' + maxValue);
}

var ACCURACY = Math.pow(2, -16);

var RGBColor = function (red, green, blue, alpha = 1) {
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.alpha = alpha;
  checkRange(red, 1, 'red');
  checkRange(green, 1, 'green');
  checkRange(blue, 1, 'blue');
  checkRange(alpha, 1, 'alpha');
};

RGBColor.prototype.toCSSValue = function () {
  return (
    'rgba(' +
    100 * this.red +
    '%, ' +
    100 * this.green +
    '%, ' +
    (100 * this.blue + '%, ' + this.alpha + ')')
  );
};

export function rgb2hex(rgbColor) {
  return (
    decimal2hex(Math.round(255 * rgbColor.red)) +
    decimal2hex(Math.round(255 * rgbColor.green)) +
    decimal2hex(Math.round(255 * rgbColor.blue)) +
    (1 > rgbColor.alpha ? decimal2hex(Math.round(255 * rgbColor.alpha)) : '')
  );
}

RGBColor.prototype.equals = function (rgbColor) {
  return (
    Math.abs(this.red - rgbColor.red) < ACCURACY &&
    Math.abs(this.green - rgbColor.green) < ACCURACY &&
    Math.abs(this.blue - rgbColor.blue) < ACCURACY &&
    Math.abs(this.alpha - rgbColor.alpha) < ACCURACY
  );
};

var normalizeRGB = function (rgbColor) {
  return 1 - rgbColor.alpha < ACCURACY ? rgbColor : new RGBColor(rgbColor.red, rgbColor.green, rgbColor.blue);
};

var contrastRatio = function (rgbColor1, rgbColor2) {
  var c = normalizeRGB(rgbColor2);
  if (!(1 - rgbColor1.alpha < ACCURACY)) {
    var d = c.alpha * (1 - rgbColor1.alpha);
    rgbColor1 = new RGBColor(
      rgbColor1.red * rgbColor1.alpha + c.red * d,
      rgbColor1.green * rgbColor1.alpha + c.green * d,
      rgbColor1.blue * rgbColor1.alpha + c.blue * d,
      rgbColor1.alpha + d,
    );
  }
  rgbColor1 = 0.2126 * rgb2xyz(rgbColor1.red) + 0.7152 * rgb2xyz(rgbColor1.green) + 0.0722 * rgb2xyz(rgbColor1.blue);
  rgbColor2 = 0.2126 * rgb2xyz(rgbColor2.red) + 0.7152 * rgb2xyz(rgbColor2.green) + 0.0722 * rgb2xyz(rgbColor2.blue);
  return rgbColor1 >= rgbColor2 ? (rgbColor1 + 0.05) / (rgbColor2 + 0.05) : (rgbColor2 + 0.05) / (rgbColor1 + 0.05);
};

var hsx2rgb = function (hue, alpha, chroma, m) {
  var red = m,
    green = m;
  var blue = m;
  var h = (hue % 360) / 60;
  var x = chroma * (1 - Math.abs((h % 2) - 1)); //second largest component of this color
  switch (Math.floor(h)) {
    case 0:
      red += chroma;
      green += x;
      break;
    case 1:
      red += x;
      green += chroma;
      break;
    case 2:
      green += chroma;
      blue += x;
      break;
    case 3:
      green += x;
      blue += chroma;
      break;
    case 4:
      red += x;
      blue += chroma;
      break;
    case 5:
      (red += chroma), (blue += x);
  }
  return new RGBColor(red, green, blue, alpha);
};

export function hsl2rgb(hslColor) {
  var b = (1 - Math.abs(2 * hslColor.lightness - 1)) * hslColor.saturation;
  return hsx2rgb(hslColor.hue, hslColor.alpha, b, Math.max(0, hslColor.lightness - b / 2));
}

export function hsb2rgb(hsbColor) {
  var b = hsbColor.value * hsbColor.saturation;
  return hsx2rgb(hsbColor.hue, hsbColor.alpha, b, Math.max(0, hsbColor.value - b));
}

export function hex2rgb(hexColor) {
  if (!/^[a-fA-F0-9]{3,8}$/.test(hexColor))
    throw Error('Invalid hex color string: ' + hexColor);
  if (3 === hexColor.length || 4 === hexColor.length)
    var b = /^(.)(.)(.)(.)?$/
      .exec(hexColor)
      .slice(1, 5)
      .map(function (a) {
        return a ? a + a : 'ff';
      });
  else if (6 === hexColor.length || 8 === hexColor.length)
    (b = /^(..)(..)(..)(..)?$/.exec(hexColor).slice(1, 5)),
    void 0 === b[3] && (b[3] = 'ff');
  else throw Error('Invalid hex color string: ' + hexColor);

  var red = hex2decimal(b[0]) / 255;
  var green = hex2decimal(b[1]) / 255;
  var blue = hex2decimal(b[2]) / 255;
  var alpha = hex2decimal(b[3]) / 255;

  return new RGBColor(red, green, blue, alpha);
};

var WHITE_COLOR = new RGBColor(1, 1, 1);
var BLACK_COLOR = new RGBColor(0, 0, 0);

function hex2decimal(hexColor) {
  if (!/^[a-fA-F0-9]+$/.test(hexColor)) throw Error('Invalid hex string: ' + hexColor);
  return parseInt(hexColor, 16);
}

function decimal2hex(decimal) {
  decimal = decimal.toString(16);
  return 2 <= decimal.length ? decimal : '0' + decimal;
}

var HSLColor = function (hue, saturation, lightness, alpha = 1) {
  this.hue = hue;
  this.saturation = saturation;
  this.lightness = lightness;
  this.alpha = alpha;
  checkRange(hue, 360, 'hue');
  checkRange(saturation, 1, 'saturation');
  checkRange(lightness, 1, 'lightness');
  checkRange(alpha, 1, 'alpha');
};

HSLColor.prototype.toCSSValue = function () {
  return (
    'hsla(' +
    this.hue +
    ', ' +
    100 * this.saturation +
    '%, ' +
    (100 * this.lightness + '%, ' + this.alpha + ')')
  );
};

HSLColor.prototype.rotate = function (hueAdjustment) {
  return new HSLColor((this.hue + hueAdjustment + 360) % 360, this.saturation, this.lightness, this.alpha);
};

export function rgb2hsl(rgbColor) {
  var b = Math.max(rgbColor.red, rgbColor.green, rgbColor.blue),
    c = Math.min(rgbColor.red, rgbColor.green, rgbColor.blue),
    d = 0,
    e = 0,
    g = minMax(0.5 * (b + c), 0, 1);
  b - c > ACCURACY &&
  (b === rgbColor.red
    ? (d = (60 * (rgbColor.green - rgbColor.blue)) / (b - c))
    : b === rgbColor.green
      ? (d = (60 * (rgbColor.blue - rgbColor.red)) / (b - c) + 120)
      : b === rgbColor.blue && (d = (60 * (rgbColor.red - rgbColor.green)) / (b - c) + 240),
    (e =
      0 < g && 0.5 >= g
        ? minMax((b - c) / (2 * g), 0, 1)
        : minMax((b - c) / (2 - 2 * g), 0, 1)));
  d = Math.round(d + 360) % 360;
  return new HSLColor(d, e, g, rgbColor.alpha);
}

export function hsb2hsl(hsbColor) {
  var b = minMax(((2 - hsbColor.saturation) * hsbColor.value) / 2, 0, 1),
    c = 0;
  0 < b &&
  1 > b &&
  (c = (hsbColor.saturation * hsbColor.value) / (0.5 > b ? 2 * b : 2 - 2 * b));
  c = minMax(c, 0, 1);
  return new HSLColor(hsbColor.hue, c, b, hsbColor.alpha);
}

var HSBColor = function (hue, saturation, brightness, alpha = 1) {
  this.hue = hue;
  this.saturation = saturation;
  this.value = brightness;
  this.alpha = alpha;
  checkRange(hue, 360, 'hue');
  checkRange(saturation, 1, 'saturation');
  checkRange(brightness, 1, 'value');
  checkRange(alpha, 1, 'alpha');
};

export function rgb2hsb(rgbColor) {
  var b = Math.max(rgbColor.red, rgbColor.green, rgbColor.blue);
  var c = Math.min(rgbColor.red, rgbColor.green, rgbColor.blue);
  var d = 0;
  var e = 0;

  b - c > ACCURACY &&
  ((e = (b - c) / b),
    b === rgbColor.red
      ? (d = (60 * (rgbColor.green - rgbColor.blue)) / (b - c))
      : b === rgbColor.green
      ? (d = (60 * (rgbColor.blue - rgbColor.red)) / (b - c) + 120)
      : b === rgbColor.blue && (d = (60 * (rgbColor.red - rgbColor.green)) / (b - c) + 240));
  d = Math.round(d + 360) % 360;
  return new HSBColor(d, e, b, rgbColor.alpha);
};

export function hsl2hsb(hslColor) {
  var b = hslColor.saturation * (0.5 > hslColor.lightness ? hslColor.lightness : 1 - hslColor.lightness),
    c = minMax(hslColor.lightness + b, 0, 1);
  return new HSBColor(hslColor.hue, minMax(0 < c ? (2 * b) / c : 0, 0, 1), c, hslColor.alpha);
};

var LABColor = function (lightness, a, b, alpha = 1) {
  this.lightness = lightness;
  this.a = a;
  this.b = b;
  this.alpha = alpha;
  checkRange(lightness, Number.MAX_VALUE, 'lightness');
  checkRange(alpha, 1, 'alpha');
};

LABColor.prototype.equals = function (a) {
  return (
    1e-4 > Math.abs(this.lightness - a.lightness) &&
    1e-4 > Math.abs(this.a - a.a) &&
    1e-4 > Math.abs(this.b - a.b) &&
    Math.abs(this.alpha - a.alpha) < ACCURACY
  );
};

export function rgb2lab(rgbColor) {
  var red = rgb2xyz(rgbColor.red);
  var green = rgb2xyz(rgbColor.green);
  var blue = rgb2xyz(rgbColor.blue);
  var e = 0.2126729 * red + 0.7151522 * green + 0.072175 * blue;

  return new LABColor(
    116 * xyz2lab(e) - 16,
    500 *
    (xyz2lab((0.4124564 * red + 0.3575761 * green + 0.1804375 * blue) / 0.95047) - xyz2lab(e)),
    200 *
    (xyz2lab(e) - xyz2lab((0.0193339 * red + 0.119192 * green + 0.9503041 * blue) / 1.08883)),
    rgbColor.alpha,
  );
};

var LCHColor = function (lightness, chroma, hue, alpha = 1) {
  this.lightness = lightness;
  this.chroma = chroma;
  this.hue = hue;
  this.alpha = alpha;
  checkRange(lightness, Number.MAX_VALUE, 'lightness');
  checkRange(chroma, Number.MAX_VALUE, 'chroma');
  checkRange(hue, 360, 'hue');
  checkRange(alpha, 1, 'alpha');
};

LCHColor.prototype.equals = function (a) {
  return (
    1e-4 > Math.abs(this.lightness - a.lightness) &&
    1e-4 > Math.abs(this.chroma - a.chroma) &&
    1e-4 > Math.abs(this.hue - a.hue) &&
    Math.abs(this.alpha - a.alpha) < ACCURACY
  );
};

export function lab2lch(labColor) {
  return new LCHColor(
    labColor.lightness,
    Math.sqrt(Math.pow(labColor.a, 2) + Math.pow(labColor.b, 2)),
    ((180 * Math.atan2(labColor.b, labColor.a)) / Math.PI + 360) % 360,
    labColor.alpha,
  );
}

export function lch2lab(lchColor) {
  const hr = lchColor.hue / 360 * 2 * Math.PI;
  const a = lchColor.chroma * Math.cos(hr);
  const b = lchColor.chroma * Math.sin(hr);

  return new LABColor(lchColor.lightness, a, b, lchColor.alpha);
};

function rgb2xyz(x) {
  return 0.04045 >= x ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function xyz2rgb(xyzColor) {
  let r;
  let g;
  let b;

  r = (xyzColor.x * 3.2404542) + (xyzColor.y * -1.5371385) + (xyzColor.z * -0.4985314);
  g = (xyzColor.x * -0.969266) + (xyzColor.y * 1.8760108) + (xyzColor.z * 0.041556);
  b = (xyzColor.x * 0.0556434) + (xyzColor.y * -0.2040259) + (xyzColor.z * 1.0572252);

  // Assume sRGB
  r = r > 0.0031308 ? ((1.055 * (r ** (1.0 / 2.4))) - 0.055) : r * 12.92;

  g = g > 0.0031308 ? ((1.055 * (g ** (1.0 / 2.4))) - 0.055) : g * 12.92;

  b = b > 0.0031308 ? ((1.055 * (b ** (1.0 / 2.4))) - 0.055) : b * 12.92;

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return new RGBColor(r, g, b, xyzColor.alpha);
}

function xyz2lab(t) {
  const t0 = 4 / 29;
  const t1 = 6 / 29;
  const t2 = 3 * Math.pow(t1, 2);
  const t3 = Math.pow(t1, 3);
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

var XYZColor = function (x, y, z, alpha = 1) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.alpha = alpha;
};

function lab2xyz(labColor) {
  let x;
  let y;
  let z;

  y = (labColor.lightness + 16) / 116;
  x = labColor.a / 500 + y;
  z = y - labColor.b / 200;

  const y2 = y ** 3;
  const x2 = x ** 3;
  const z2 = z ** 3;

  y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
  x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
  z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

  x *= 0.95047;
  y *= 1;
  z *= 1.08883;

  return new XYZColor(x, y, z, labColor.alpha);
}

var lab2hue = function (a, b) {
  if (1e-4 > Math.abs(a) && 1e-4 > Math.abs(b)) return 0;
  a = (180 * Math.atan2(a, b)) / Math.PI;
  return 0 <= a ? a : a + 360;
};

var GOLDEN_DARK_PALETTES = [
  [
    rgb2lab(hex2rgb('595959')),
    rgb2lab(hex2rgb('545454')),
    rgb2lab(hex2rgb('4F4F4F')),
    rgb2lab(hex2rgb('474747')),
    rgb2lab(hex2rgb('404040')),
    rgb2lab(hex2rgb('383838')),
    rgb2lab(hex2rgb('303030')),
    rgb2lab(hex2rgb('292929')),
    rgb2lab(hex2rgb('1F1F1F')),
    rgb2lab(hex2rgb('121212')),
  ],
];

var GOLDEN_LIGHT_PALETTES = [
  [
    rgb2lab(hex2rgb('FAFAFA')),
    rgb2lab(hex2rgb('F5F5F5')),
    rgb2lab(hex2rgb('EEEEEE')),
    rgb2lab(hex2rgb('E0E0E0')),
    rgb2lab(hex2rgb('D6D6D6')),
    rgb2lab(hex2rgb('C9C9C9')),
    rgb2lab(hex2rgb('BDBDBD')),
    rgb2lab(hex2rgb('B0B0B0')),
    rgb2lab(hex2rgb('A3A3A3')),
    rgb2lab(hex2rgb('969696')),
  ],
];

var GOLDEN_PALETTES = [
  [
    new LABColor(94.67497003305085, 7.266715066863771, 1.000743882272359),
    new LABColor(86.7897416761699, 18.370736761658012, 4.23637133971424),
    new LABColor(72.0939162832561, 31.7948058298117, 13.2972443996896),
    new LABColor(61.79353370051851, 44.129498163764545, 20.721477326799608),
    new LABColor(57.194195398949574, 59.6450006197361, 34.999830012940194),
    new LABColor(55.603951071861374, 66.01287384845483, 47.67169313982772),
    new LABColor(51.66348502954747, 64.7487785020625, 43.244876694855286),
    new LABColor(47.09455666350969, 62.29836039074277, 40.67775424698388),
    new LABColor(43.77122063388739, 60.28633509183384, 40.31444686692952),
    new LABColor(39.555187078007386, 58.703681355389975, 41.66495027798629),
	rgb2lab(hex2rgb("FF8A80")),
	rgb2lab(hex2rgb("FF5252")),
	rgb2lab(hex2rgb("FF1744")),
	rgb2lab(hex2rgb("D50000")),
  ],
  [
    new LABColor(92.68053776327665, 9.515385232804263, -0.8994072969754852),
    new LABColor(81.86756643628922, 25.05688089723257, -1.9475235115390621),
    new LABColor(70.90987389545768, 42.21705257720526, -1.095154624057959),
    new LABColor(61.08140805216186, 58.871233307587204, 2.1008764804626434),
    new LABColor(54.97970219986448, 68.56530938366889, 7.327430728560569),
    new LABColor(50.872250340749176, 74.60459195925529, 15.353576256896073),
    new LABColor(47.27738650144558, 70.77855776427805, 11.70434273264508),
    new LABColor(42.58424189486517, 65.5411953138309, 7.595596439803797),
    new LABColor(37.977492407254836, 60.74362621842075, 2.9847124951453474),
    new LABColor(29.699290034849604, 51.90485023721311, -4.830186634107636),
	rgb2lab(hex2rgb("FF80AB")),
	rgb2lab(hex2rgb("FF4081")),
	rgb2lab(hex2rgb("F50057")),
	rgb2lab(hex2rgb("C51162"))
  ],
  [
    new LABColor(92.4362655169016, 7.542927467702299, -6.039842848605881),
    new LABColor(81.07399776904751, 19.563870217805036, -15.719625491986044),
    new LABColor(68.71394717711831, 33.79992812490556, -26.49539972339321),
    new LABColor(56.596161226236305, 47.5856631835152, -36.480816605410915),
    new LABColor(48.002791217624434, 57.30866443934879, -43.2561127152548),
    new LABColor(40.66211534692161, 64.01910773818436, -48.05930162591041),
    new LABColor(37.690702208992185, 61.13762767732481, -49.384803274243026),
    new LABColor(33.56291870731981, 57.637381239254104, -51.39557249855828),
    new LABColor(29.865391314234515, 54.29737439901333, -52.6601973712463),
    new LABColor(23.16724235420436, 48.51764437280498, -55.16267949015293),
	rgb2lab(hex2rgb("EA80FC")),
	rgb2lab(hex2rgb("E040FB")),
	rgb2lab(hex2rgb("D500F9")),
	rgb2lab(hex2rgb("AA00FF"))
  ],
  [
    new LABColor(92.49103426017201, 4.712320025752947, -6.532868071709763),
    new LABColor(81.24668319505597, 11.50642734909485, -16.666600637245367),
    new LABColor(68.61488216554629, 20.395329051982824, -28.522018851715416),
    new LABColor(55.60369793053023, 30.933537768905005, -41.16439122358484),
    new LABColor(45.834566190969426, 39.28806272235674, -50.523322052772635),
    new LABColor(36.608620229358664, 47.29686002828143, -59.111766586186846),
    new LABColor(34.189791237562616, 46.60426065139123, -59.53961627676729),
    new LABColor(30.52713367338361, 46.01498224754519, -60.19975052509064),
    new LABColor(27.44585524877222, 44.96180431854785, -60.46395810756433),
    new LABColor(21.98627670328218, 44.29296076245473, -60.93653655172098),
	rgb2lab(hex2rgb("B388FF")),
	rgb2lab(hex2rgb("7C4DFF")),
	rgb2lab(hex2rgb("651FFF")),
	rgb2lab(hex2rgb("6200EA"))
  ],
  [
    new LABColor(92.86314411983918, 1.5318147061061937, -6.025243528950552),
    new LABColor(81.8348073705298, 4.460934955458907, -15.873561009736136),
    new LABColor(69.7796913795672, 7.9043652558912765, -26.3170846346932),
    new LABColor(57.48786519938736, 12.681019504822533, -37.23202012914528),
    new LABColor(47.74592578811101, 18.520799302452374, -46.47540679000397),
    new LABColor(38.334403614455404, 25.57700668170812, -55.28224153299287),
    new LABColor(35.15116453901552, 26.231812080381168, -54.53700978785404),
    new LABColor(31.080429988007957, 27.07394930110124, -53.97505274579958),
    new LABColor(27.026672080454922, 28.165266427558983, -53.28987325482218),
    new LABColor(19.751201587921678, 30.60784576895101, -52.13866519297474),
	rgb2lab(hex2rgb("8C9EFF")),
	rgb2lab(hex2rgb("536DFE")),
	rgb2lab(hex2rgb("3D5AFE")),
	rgb2lab(hex2rgb("304FFE"))
  ],
  [
    new LABColor(94.70682457348717, -2.835484735987326, -6.978044694792707),
    new LABColor(86.8839842970016, -5.16908728759552, -17.88561192754956),
    new LABColor(79.0451532401558, -6.817753527015746, -28.968537490432176),
    new LABColor(71.15083697242613, -5.994763756850707, -39.72549451158927),
    new LABColor(65.48106058907833, -2.735745792537936, -48.15471238926561),
    new LABColor(60.43009440850862, 2.079928897321559, -55.10935847069616),
    new LABColor(55.62267676922188, 4.998684384486918, -55.02164729429915),
    new LABColor(49.27006645904875, 8.470398370314381, -54.494796838457546),
    new LABColor(43.16828856394358, 11.968483076143844, -53.972567377977974),
    new LABColor(32.17757793894193, 18.96054990229354, -53.45146365049088),
	rgb2lab(hex2rgb("82B1FF")),
	rgb2lab(hex2rgb("448AFF")),
	rgb2lab(hex2rgb("2979FF")),
	rgb2lab(hex2rgb("2962FF"))
  ],
  [
    new LABColor(95.35713467762652, -4.797149155388203, -6.550002550504308),
    new LABColor(88.27942649540043, -10.836006614583892, -16.359361821940375),
    new LABColor(81.10009044900976, -15.323054522981716, -26.419121191320947),
    new LABColor(74.44713958259777, -16.664432625362547, -35.19702686900037),
    new LABColor(69.87836465637318, -14.291515332054693, -41.827430329755174),
    new LABColor(65.68851259178913, -9.612635721963692, -47.34091616039191),
    new LABColor(60.88357994308973, -7.252819027184943, -46.67753731595634),
    new LABColor(54.26166495426166, -3.8141836897908066, -45.97939475762498),
    new LABColor(48.10661895072673, -1.378998784464347, -44.34466750206778),
    new LABColor(36.34401147057282, 5.067812404713545, -43.11786257561915),
	rgb2lab(hex2rgb("80D8FF")),
	rgb2lab(hex2rgb("40C4FF")),
	rgb2lab(hex2rgb("00B0FF")),
	rgb2lab(hex2rgb("0091EA"))
  ],
  [
    new LABColor(95.69295154599753, -6.898716127301141, -3.994284229654421),
    new LABColor(89.52842524059004, -16.412398289601725, -9.260466069266693),
    new LABColor(83.32031214655748, -24.83036840728098, -14.568673583304603),
    new LABColor(77.35338313752958, -30.201708572215104, -18.92358284721101),
    new LABColor(73.45322093857781, -31.88590390189383, -21.130459992513686),
    new LABColor(69.97638465064783, -30.679850324547953, -23.186685661136707),
    new LABColor(64.44491716553777, -29.08337434584457, -21.154935769156214),
    new LABColor(56.99816432961103, -27.31081477279451, -17.86988815767443),
    new LABColor(49.75464182255671, -25.335383503694242, -15.024722591662787),
    new LABColor(36.52725894264432, -22.129641744194515, -9.176159146894303),
	rgb2lab(hex2rgb("84FFFF")),
	rgb2lab(hex2rgb("18FFFF")),
	rgb2lab(hex2rgb("00E5FF")),
	rgb2lab(hex2rgb("00B8D4"))
  ],
  [
    new LABColor(94.18453941589918, -6.08351703428972, -1.5488916051161983),
    new LABColor(85.68177077414457, -15.333179440298606, -2.8519825761476048),
    new LABColor(76.85067847190405, -24.844059173189713, -3.8750785132192656),
    new LABColor(68.02762242570138, -32.566861154120716, -4.015231084407134),
    new LABColor(61.667257304525464, -36.06752603289354, -3.4734046401753815),
    new LABColor(55.67310397390196, -36.66069960626328, -2.125617915169653),
    new LABColor(51.059149495197715, -34.65019160301408, -1.3910484300432513),
    new LABColor(45.269081019218405, -32.13244775422941, -0.4526371852697775),
    new LABColor(39.36899076059384, -29.25264468583161, -0.03562564673170732),
    new LABColor(28.58363043701477, -24.585465516136413, 1.8037402162492389),
	rgb2lab(hex2rgb("A7FFEB")),
	rgb2lab(hex2rgb("64FFDA")),
	rgb2lab(hex2rgb("1DE9B6")),
	rgb2lab(hex2rgb("00BFA5"))
  ],
  [
    new LABColor(95.30530183565223, -6.430415645739263, 4.292950594459599),
    new LABColor(88.49014579152143, -15.23147744952702, 10.848261177683138),
    new LABColor(81.22616870575376, -24.993886168551583, 18.144696803330884),
    new LABColor(74.30361721558802, -35.56088696067356, 26.781515251907727),
    new LABColor(69.0430995277442, -42.61556126595995, 33.17109563126665),
    new LABColor(63.977421814072926, -48.54292673319982, 39.73241526342939),
    new LABColor(58.777960853461366, -46.1153692478013, 37.838910745225576),
    new LABColor(52.41108688974904, -43.21761792485762, 35.62250659009424),
    new LABColor(46.2813873076426, -40.25816227675361, 33.32343229338761),
    new LABColor(34.685655305814514, -34.75343878510312, 28.866739034359767),
	rgb2lab(hex2rgb("B9F6CA")),
	rgb2lab(hex2rgb("69F0AE")),
	rgb2lab(hex2rgb("00E676")),
	rgb2lab(hex2rgb("00C853"))
  ],
  [
    new LABColor(96.70518169355954, -4.929987845095463, 6.397084523168894),
    new LABColor(91.66416061199438, -12.057032041945693, 16.054604579275143),
    new LABColor(86.2244395865449, -19.613646834080622, 26.384906423454236),
    new LABColor(80.83404879636919, -27.080171840756893, 37.378493742021334),
    new LABColor(76.79543725108964, -32.76659719736752, 45.912190572444445),
    new LABColor(72.90025297028019, -37.549139223927384, 53.51959496103027),
    new LABColor(67.21532310272079, -36.56304870773486, 50.49629051268894),
    new LABColor(59.91051142210195, -35.77011466063357, 46.56465847976187),
    new LABColor(52.51015841084511, -34.47903440699235, 42.20723868724268),
    new LABColor(39.41191983353878, -32.80460974352642, 35.255490585630014),
	rgb2lab(hex2rgb("CCFF90")),
	rgb2lab(hex2rgb("B2FF59")),
	rgb2lab(hex2rgb("76FF03")),
	rgb2lab(hex2rgb("64DD17"))
  ],
  [
    new LABColor(97.99506057883428, -4.059632482741494, 9.355797602381521),
    new LABColor(94.80926235976536, -9.237091467352855, 23.230650064824985),
    new LABColor(91.85205843526167, -15.053917327011114, 38.86115182206598),
    new LABColor(88.75812142080242, -19.542900400164097, 53.71785675783709),
    new LABColor(86.27404180729515, -22.173992891121596, 63.978639065232514),
    new LABColor(84.20566835376492, -24.270643520989342, 72.79624067033038),
    new LABColor(78.27915100603997, -21.181850056402496, 68.82763412297965),
    new LABColor(70.82385811892824, -17.788148932525672, 64.00327817988128),
    new LABColor(62.936867012868035, -13.697412111684903, 58.513000509287835),
    new LABColor(49.498610881452535, -6.485230564384715, 49.67432722833751),
	rgb2lab(hex2rgb("F4FF81")),
	rgb2lab(hex2rgb("EEFF41")),
	rgb2lab(hex2rgb("C6FF00")),
	rgb2lab(hex2rgb("AEEA00"))
  ],
  [
    new LABColor(98.93885129752759, -3.0098470288543178, 10.765736833790008),
    new LABColor(97.22689784824074, -6.174599368734491, 26.22932417355146),
    new LABColor(95.58092947828766, -8.907132848473886, 43.56297291446567),
    new LABColor(94.09009515702486, -10.509628942710735, 60.20019514231188),
    new LABColor(93.06546746683087, -11.008558476013008, 71.76500826005477),
    new LABColor(92.12975017760128, -10.830023094868302, 80.9090559640089),
    new LABColor(87.12188349168609, -2.3764300099239355, 78.14868195373407),
    new LABColor(80.96200442419905, 8.849333792729064, 75.05050700092679),
    new LABColor(75.00342770718086, 20.340173566879283, 72.24841925958934),
    new LABColor(65.48207757431567, 39.647064970476094, 68.34872841768654),
	rgb2lab(hex2rgb("FFFF8D")),
	rgb2lab(hex2rgb("FFFF00")),
	rgb2lab(hex2rgb("FFEA00")),
	rgb2lab(hex2rgb("FFD600"))
  ],
  [
    new LABColor(97.5642392074337, -1.445525639405032, 11.881254316297674),
    new LABColor(93.67057953749456, -1.8693096862072434, 30.02888670415651),
    new LABColor(89.94571492804107, -1.0224503814769692, 49.649542361642276),
    new LABColor(86.71009164153801, 1.0496066396428194, 68.77377342409739),
    new LABColor(83.78773993319211, 5.248231820098425, 78.92920457852716),
    new LABColor(81.52191382080228, 9.403655370707199, 82.69257112982746),
    new LABColor(78.17240973804697, 16.628512886531887, 81.09358318806208),
    new LABColor(73.80899654381052, 26.53614315250874, 78.21754052181723),
    new LABColor(70.1134511665764, 35.3007623359744, 75.87510992138593),
    new LABColor(63.86460405565717, 50.94648214505959, 72.17815682124423),
	rgb2lab(hex2rgb("FFE57F")),
	rgb2lab(hex2rgb("FFD740")),
	rgb2lab(hex2rgb("FFC400")),
	rgb2lab(hex2rgb("FFAB00"))
  ],
  [
    new LABColor(96.30459517801387, 0.923151172282477, 10.598439446083074),
    new LABColor(90.68320082865087, 4.103774964681062, 26.485793721916128),
    new LABColor(85.00055287186233, 9.047181758866651, 44.51407622580792),
    new LABColor(79.42428495742953, 16.452610724439875, 62.08721739074201),
    new LABColor(75.47792699289774, 23.395742928451867, 72.64347611236501),
    new LABColor(72.04246561548388, 30.681921012382098, 77.08579298904603),
    new LABColor(68.94724338946975, 35.22014778433863, 74.88425044595111),
    new LABColor(64.83017495535229, 40.91200730099703, 71.9596053545428),
    new LABColor(60.8534207471871, 46.41483590510681, 69.18061963415211),
    new LABColor(54.77571742962287, 55.282751019360035, 65.10193403547922),
	rgb2lab(hex2rgb("FFD180")),
	rgb2lab(hex2rgb("FFAB40")),
	rgb2lab(hex2rgb("FF9100")),
	rgb2lab(hex2rgb("FF6D00"))
  ],
  [
    new LABColor(93.69219844671957, 5.763979334358293, 3.1700162796469034),
    new LABColor(86.04629434276428, 15.750843803958192, 14.828476927090994),
    new LABColor(77.54010042938336, 27.90113842540043, 25.99645229289065),
    new LABColor(69.74095456707857, 41.14487377552256, 39.443320178900024),
    new LABColor(64.37085344539341, 51.890379620443575, 50.81312471046415),
    new LABColor(60.06780837277435, 61.65258736118817, 61.54771829165221),
    new LABColor(57.28707915232363, 60.3250664308812, 60.07341536376447),
    new LABColor(53.810052616293845, 58.36760943780162, 58.19586806694884),
    new LABColor(50.301352405105874, 56.40104898089937, 55.924141992404344),
    new LABColor(43.86477994548343, 52.970887703910726, 52.30067989225532),
	rgb2lab(hex2rgb("FF9E80")),
	rgb2lab(hex2rgb("FF6E40")),
	rgb2lab(hex2rgb("FF3D00")),
	rgb2lab(hex2rgb("DD2C00")),
  ],
  [
    new LABColor(93.29864888069987, 0.9915456090475727, 1.442353076378411),
    new LABColor(82.80884359004081, 3.116221903342209, 3.3523059451463055),
    new LABColor(70.95493047668185, 5.469742193344784, 5.449009494553492),
    new LABColor(58.712934619103066, 7.990991075363385, 8.352488495367627),
    new LABColor(49.150208552875895, 10.570984981000397, 10.831440151197924),
    new LABColor(39.63200151837749, 13.138881961627241, 13.531574711511885),
    new LABColor(35.600996682015754, 12.40352847757295, 12.10432183902449),
    new LABColor(30.084271265759952, 11.317148149878081, 10.547484304296217),
    new LABColor(24.555014696416578, 10.816613316782464, 8.506555306791984),
    new LABColor(18.35055226514404, 10.225725550338765, 7.058582769882571),
  ],
  [
    new LABColor(98.27202740980219, -1.6418393644634932e-5, 6.567357457853973e-6),
    new LABColor(96.53749336548567, -1.616917905122861e-5, 6.467671598286984e-6),
    new LABColor(94.0978378987781, -1.581865383126768e-5, 6.327461532507073e-6),
    new LABColor(89.17728373493613, -1.511167768697419e-5, 6.044671074789676e-6),
    new LABColor(76.61119902231323, -1.330620591488696e-5, 5.322482343750323e-6),
    new LABColor(65.11424774127516, -1.1654345155598378e-5, 4.661738062239351e-6),
    new LABColor(49.238989620828065, -9.373417431124409e-6, 3.7493669724497636e-6),
    new LABColor(41.14266843804848, -8.210152946386273e-6, 3.2840611896567395e-6),
    new LABColor(27.974857206003705, -6.318226192236764e-6, 2.5272904768947058e-6),
    new LABColor(12.740011331302725, -4.129311698131133e-6, 1.6517246792524531e-6),
  ],
  [
    new LABColor(94.27665212516236, -0.637571046109342, -1.313515378996688),
    new LABColor(85.77788001492097, -2.2777811084512822, -3.0177758416151557),
    new LABColor(76.12296325015231, -3.401502988883809, -5.16867892977908),
    new LABColor(66.16340108908365, -4.819627183079045, -7.520697631614404),
    new LABColor(58.35752478513645, -5.7195089100892105, -9.165988916613488),
    new LABColor(50.70748082202715, -6.837992965799455, -10.956055112409357),
    new LABColor(44.85917867647632, -6.411990559239578, -9.74511982878765),
    new LABColor(36.92458930566504, -5.319878610845596, -8.341943474561553),
    new LABColor(29.115334784637618, -4.168907828645069, -6.8629962199973304),
    new LABColor(19.958338450799914, -3.3116721453186617, -5.4486142104736786),
  ],
];

var DEFAULT_LIGHTNESS_TOLERANCE = [ //standard deviation for lightness in each tone
  2.048875457,
  5.124792061,
  8.751659557,
  12.07628774,
  13.91449542,
  15.92738893,
  15.46585818,
  15.09779227,
  15.13738673,
  15.09818372,
  12.16800645,
  17.26178879,
  17.87176166,
  16.72047178,
];

var REDUCED_CHROMA_TOLERANCE = [
  1.762442714,
  4.213532634,
  7.395827458,
  8.07174158,
  9.89634504,
  11.37591477,
  12.27071136,
  13.54160806,
  14.35916727,
  16.88410864,
];

var DEFAULT_CHROMA_TOLERANCE = [ //standard deviation for chroma in each tone, apart from 'grey' palletes (brown, grey, blue grey)
  1.762442714,
  4.213532634,
  7.395827458,
  11.07174158,
  13.89634504,
  16.37591477,
  16.27071136,
  16.54160806,
  17.35916727,
  19.88410864,
  12.82357630,
  18.40545289,
  21.71894697,
  23.23753494,
];

var lightTextEmphasis = {
  HIGH: new RGBColor(1, 1, 1, 1),
  MEDIUM: new RGBColor(1, 1, 1, 0.6),
  DISABLED: new RGBColor(1, 1, 1, 0.38),
};

var darkTextEmphasis = {
  HIGH: new RGBColor(0, 0, 0, 0.87),
  MEDIUM: new RGBColor(0, 0, 0, 0.6),
  DISABLED: new RGBColor(0, 0, 0, 0.38),
};

function getTextColor(rgbColor) {
  var MIN_CONTRAST = 4.5;

  var whiteContrast = contrastRatio(WHITE_COLOR, rgbColor);
  if (whiteContrast >= MIN_CONTRAST) return lightTextEmphasis.HIGH;
  var darkContrast = contrastRatio(BLACK_COLOR, rgbColor);

  if (darkContrast >= MIN_CONTRAST) {
    return darkTextEmphasis.HIGH;
  } else {
    if (whiteContrast > darkContrast) {
      return lightTextEmphasis.HIGH;
    } else {
      return darkTextEmphasis.HIGH;
    }
  }
}

function findClosestGoldenPalette(labColor, goldenPalettes = GOLDEN_PALETTES) {
  for (var minEmpfindungDifference = Infinity, closestGoldenPallete = goldenPalettes[0], closestReference = -1, paletteIndex = 0; paletteIndex < goldenPalettes.length; paletteIndex++)
    for (var colorIndex = 0; colorIndex < goldenPalettes[paletteIndex].length && 0 < minEmpfindungDifference; colorIndex++) {
      var goldenColor = goldenPalettes[paletteIndex][colorIndex];
      var avgLightness = (goldenColor.lightness + labColor.lightness) / 2;
      var goldenColorChroma = Math.sqrt(Math.pow(goldenColor.a, 2) + Math.pow(goldenColor.b, 2));
      var labColorChroma = Math.sqrt(Math.pow(labColor.a, 2) + Math.pow(labColor.b, 2));
      var avgChroma = (goldenColorChroma + labColorChroma) / 2;

      var G =
        0.5 *
        (1 - Math.sqrt(Math.pow(avgChroma, 7) / (Math.pow(avgChroma, 7) + Math.pow(25, 7))));

      var adjustedGoldenA = goldenColor.a * (1 + G);
      var adjustedLabA = labColor.a * (1 + G);
      var goldenColorAdjustedChroma = Math.sqrt(Math.pow(adjustedGoldenA, 2) + Math.pow(goldenColor.b, 2));
      var labColorAdjustedChroma = Math.sqrt(Math.pow(adjustedLabA, 2) + Math.pow(labColor.b, 2));

      var deltaAdjustedChroma = labColorAdjustedChroma - goldenColorAdjustedChroma;

      var avgAdjustedChroma = (goldenColorAdjustedChroma + labColorAdjustedChroma) / 2;

      var goldenColorModifiedHue = lab2hue(goldenColor.b, adjustedGoldenA);
      var labColorModifiedHue = lab2hue(labColor.b, adjustedLabA);
      var deltaHue =
        2 *
        Math.sqrt(goldenColorAdjustedChroma * labColorAdjustedChroma) *
        Math.sin(
          (((1e-4 > Math.abs(goldenColorChroma) || 1e-4 > Math.abs(labColorChroma)
            ? 0
            : 180 >= Math.abs(labColorModifiedHue - goldenColorModifiedHue)
              ? labColorModifiedHue - goldenColorModifiedHue
              : labColorModifiedHue <= goldenColorModifiedHue
                ? labColorModifiedHue - goldenColorModifiedHue + 360
                : labColorModifiedHue - goldenColorModifiedHue - 360) /
            2) *
            Math.PI) /
          180,
        );

      avgHue =
        1e-4 > Math.abs(goldenColorChroma) || 1e-4 > Math.abs(labColorChroma)
          ? 0
          : 180 >= Math.abs(labColorModifiedHue - goldenColorModifiedHue)
          ? (goldenColorModifiedHue + labColorModifiedHue) / 2
          : 360 > goldenColorModifiedHue + labColorModifiedHue
            ? (goldenColorModifiedHue + labColorModifiedHue + 360) / 2
            : (goldenColorModifiedHue + labColorModifiedHue - 360) / 2;

      var chromaCompensation = 1 + 0.045 * avgAdjustedChroma;

      var hueCompensation =
        1 +
        0.015 *
        avgAdjustedChroma *
        (1 -
          0.17 * Math.cos(((avgHue - 30) * Math.PI) / 180) +
          0.24 * Math.cos((2 * avgHue * Math.PI) / 180) +
          0.32 * Math.cos(((3 * avgHue + 6) * Math.PI) / 180) -
          0.2 * Math.cos(((4 * avgHue - 63) * Math.PI) / 180));
		  
	  var lightnessCompensation = 1 + (0.015 * Math.pow(avgLightness - 50, 2)) / Math.sqrt(20 + Math.pow(avgLightness - 50, 2));
	  
	  var chromaRotation = 2 * Math.sqrt(Math.pow(avgAdjustedChroma, 7) / (Math.pow(avgAdjustedChroma, 7) + Math.pow(25, 7)));
	  
	  var deltaTheta = 30 * Math.exp(-Math.pow((avgHue - 275) / 25, 2));
	  
	  var hueRotation = -1 * chromaRotation *
        Math.sin(
          (2 * deltaTheta * Math.PI) / 180,
        );

      var empfindungDifference = Math.sqrt(
        Math.pow(
          (labColor.lightness - goldenColor.lightness) /
          (lightnessCompensation),
          2,
        ) +
        Math.pow(deltaAdjustedChroma / (1 * chromaCompensation), 2) +
        Math.pow(deltaHue / (1 * hueCompensation), 2) +
        (deltaAdjustedChroma / (1 * chromaCompensation)) *
        hueRotation *
        (deltaHue / (1 * hueCompensation)),
      );

      empfindungDifference < minEmpfindungDifference && ((minEmpfindungDifference = empfindungDifference), (closestGoldenPallete = goldenPalettes[paletteIndex]), (closestReference = colorIndex));
    }
  return { colors: closestGoldenPallete, closestReference: closestReference };
}

function generatePalette(sourceRgbColor, goldenPalettes = GOLDEN_PALETTES, lightnessTolerance = DEFAULT_LIGHTNESS_TOLERANCE, chromaTolerance = DEFAULT_CHROMA_TOLERANCE) {
  var sourceLabColor = rgb2lab(sourceRgbColor);
  var goldenPalette = findClosestGoldenPalette(sourceLabColor, goldenPalettes);
  var goldenColors = goldenPalette.colors;
  var closestGoldenLabColor = goldenColors[goldenPalette.closestReference];
  var closestGoldenLchColor = lab2lch(closestGoldenLabColor);
  var sourceLchColor = lab2lch(sourceLabColor);
  var isGoldenColorGreyInMiddle = 30 > lab2lch(goldenColors[5]).chroma;
  var deltaGoldenLightness = closestGoldenLchColor.lightness - sourceLchColor.lightness;
  var deltaGoldenChroma = closestGoldenLchColor.chroma - sourceLchColor.chroma;
  var deltaGoldenHue = closestGoldenLchColor.hue - sourceLchColor.hue;
  var lightnessMaximum = 100;
  const lightnessMinimumStep = 2;

  return goldenColors.map(function (goldenLabColor, index) {
    if (goldenLabColor === closestGoldenLabColor) {
      lightnessMaximum = Math.max(sourceLchColor.lightness - 1.7, 0);
      return sourceRgbColor;
    }
	  
    if(index === 10) {
      lightnessMaximum = 100; //restart maximum lightness when trasitioning from color 900 to A100
    }

    var goldenLchColor = lab2lch(goldenLabColor);

    var lightness = goldenLabColor.lightness - (lightnessTolerance[index] / lightnessTolerance[goldenPalette.closestReference]) * deltaGoldenLightness;
    lightness = Math.min(lightness, lightnessMaximum);
    lightness = minMax(lightness, 0, 100);

    var chroma = isGoldenColorGreyInMiddle ? goldenLchColor.chroma - deltaGoldenChroma : goldenLchColor.chroma - deltaGoldenChroma * Math.min(chromaTolerance[index] / chromaTolerance[goldenPalette.closestReference], 1.25);
    chroma = Math.max(0, chroma);

    var hue = (goldenLchColor.hue - deltaGoldenHue + 360) % 360;

    var lchColor = new LCHColor(lightness, chroma, hue);

    lightnessMaximum = Math.max(lchColor.lightness - lightnessMinimumStep, 0);

    return xyz2rgb(lab2xyz(lch2lab(lchColor)));
  });
}

export function generateAccentPalette(rgbColor) {
  return generatePalette(rgbColor, GOLDEN_PALETTES, DEFAULT_LIGHTNESS_TOLERANCE, DEFAULT_CHROMA_TOLERANCE);
}

export function generateLightPalette(rgbColor) {
  return generatePalette(rgbColor, GOLDEN_LIGHT_PALETTES, DEFAULT_LIGHTNESS_TOLERANCE, REDUCED_CHROMA_TOLERANCE);
}

export function generateDarkPalette(rgbColor) {
  return generatePalette(rgbColor, GOLDEN_DARK_PALETTES, DEFAULT_LIGHTNESS_TOLERANCE, DEFAULT_CHROMA_TOLERANCE);
}
