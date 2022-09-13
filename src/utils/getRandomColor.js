/**
 * Return random color in HSL format. Hue component has difference in 50 or more points from color that was generated on a last call.
 * @returns {string} str - The string containing color in HSL format, with lightness component limited from 27% to 55%.
 */
export function getRandomHSLColor() {
  const maxLightness = 55;
  const minLightness = 27;
  const saturation = Math.floor(Math.random() * 100).toString();
  const lightness = Math.floor(
    Math.random() * (maxLightness - minLightness) + minLightness
  ).toString();
  getRandomHSLColor.lastHue ??= 0;
  let hue,
    lastHue = getRandomHSLColor.lastHue;

  do {
    hue = Math.floor(Math.random() * 360);
  } while (Math.abs(hue - lastHue) < 50);
  getRandomHSLColor.lastHue = hue;
  hue = hue.toString();

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
