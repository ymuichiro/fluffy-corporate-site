import { MetadataRoute } from "next";

// http://localhost:3000/manifest.webmanifest
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "loose and fluffy",
    short_name: "loose and fluffy",
    theme_color: "#b32af9",
    background_color: "#000000",
    display: "fullscreen",
    scope: "/",
    start_url: "/",
    description: "loose and fluffy",
    icons: [
      {
        src: "/maskable_icon_x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/maskable_icon_x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
