/* eslint-env node */
"use strict";

module.exports = function(/* environment, appConfig */) {
  return {
    name: "Move The Boxes",
    short_name: "MoveTheBoxes",
    description: "Sokoban like game with a twist",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        targets: ["manifest"],
      },
      {
        src: "android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        targets: ["manifest"],
      },
      {
        src: "apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        targets: ["apple"],
      },
      {
        src: "mstile-150x150.png",
        element: "square150x150logo",
        type: "image/png",
        targets: ["ms"],
      },
      {
        src: "favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        targets: ["favicon"],
      },
      {
        src: "favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
        targets: ["favicon"],
      },
      {
        src: "favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
        targets: ["favicon"],
      },
    ],

    apple: {
      statusBarStyle: "black-translucent"
    },

    ms: {
      tileColor: "#ffffff"
    },
  };
}
