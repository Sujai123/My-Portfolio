import mountainDesktop from "./mountain-desktop.jpg";
import mountainMobile from "./mountain-mobile.jpg";
import rentlySVG from "./rently.png";
import upArrowSVG from "./up-arrow.svg";

const images = {
  "mountain-desktop": mountainDesktop,
  "mountain-mobile": mountainMobile,
  "rently-svg": rentlySVG,
  "up-arrow-svg": upArrowSVG,
};

export type ImagesType = keyof typeof images

export default images;
