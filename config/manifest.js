/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    name: "Move The Boxes",
    short_name: "MoveTheBoxes",
    description: "Sokoban like game with a twist",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [
    ],
    apple: {
      statusBarStyle: "black-translucent"
    }
  };
}
