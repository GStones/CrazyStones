/**
 * Created by wizard on 16/3/14.
 */

var defines = {};

if(__DEV__) {
  defines.rootPath = "./";
  defines.resPath = "./assets/";
}
else {
  defines.rootPath = "games/test_ui/";
  defines.resPath = "games/test_ui/assets/";
}

const Width = 480, Height = 754;
defines.Canvas = {
  width: Width,
  height: Height,
  posX_center: Width * 0.5,
  posY_center: Height * 0.5

};
defines.gameTheme = 'kenney';

defines.gameURL = "http://120.131.69.135:18888/";

export default defines;