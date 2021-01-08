// your index.js
import WebFontLoader from "webfontloader";

import fonts from "./fonts.json";

export default function LoadFont() {
  WebFontLoader.load({
    google: {
      families: [
        `${fonts.sans.name}:${fonts.sans.weights.join(",")}`,
        `${fonts.serif.name}:${fonts.serif.weights.join(",")}`,
        ...fonts.others.map((item) => `${item.name}:${item.weights.join(",")}`),
      ],
    },
  });
}
