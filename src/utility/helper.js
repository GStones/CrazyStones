/**
 * Created by wizard on 16/3/30.
 */

import {ResourceManager}from './imports';
var helper = helper || {};

helper.scale = 1;

helper.scaleToWindow = function (renderer, stage) {
  var scaleX = window.innerWidth / 480;
  var scaleY = window.innerHeight / 754;
  var scale = Math.min(scaleX, scaleY);
  helper.scale = scale;
  var width = 480 * scale;
  var height = 754 * scale;

  var canvas = renderer.view;
  canvas.style.padding = 0;
  canvas.style.margin = 0;

  var margin = (window.innerWidth - width) / 2;
  canvas.style.marginLeft = margin + "px";
  canvas.style.marginRight = margin + "px";

  //canvas.style.transformOrigin = "0 0";
  //canvas.style.transform = "scale(" + scale + ")";

  //renderer.autoResize = true;
  console.log('scaleToWindow,scale',scale);
  renderer.resize(width, height);
  stage.scale.x = scale;
  stage.scale.y = scale;
};

helper.reorderNode = function (node) {
  var depthCompare = function (a, b) {
    var az = a.zorder;
    var bz = b.zorder;
    if (az == undefined) {
      az = 0;
    }
    if (bz == undefined) {
      bz = 0;
    }
    if (az < bz)
      return -1;
    if (az > bz)
      return 1;
    return 0;
  }

  node.children.sort(depthCompare);
};

//only for layout
helper.copyObject = function (obj, id) {
  let that = {};
  for (let i in obj) {
    that[i] = obj[i];
  }
  that.id = id;
  return that;
};

helper.createSprite = function (res) {
  let sprite = new PIXI.Sprite(ResourceManager.resource[res].texture);
  return sprite;
};

helper.wordWrapText = function (textObj, string) {
  let textString = string ? string : textObj.text;
  let wordWrap = textObj._style.wordWrap;
  let wordWrapWidth = textObj._style.wordWrapWidth;
  let textWidth = textObj.width;//***保留此行 计算宽度
  if (!wordWrap) {
    return;
  }
  let newStr = "";
  let wordWrapLeftWidth = wordWrapWidth;
  for (let i = 0; i < textString.length; i++) {
    let width = textObj.context.measureText(textString[i]).width;
    if (wordWrapLeftWidth < width) {
      wordWrapLeftWidth = wordWrapWidth;
      newStr = newStr + "\n";
    }
    newStr += textString[i];
    wordWrapLeftWidth -= width;
  }
  textObj.text = newStr;
};
helper.randomInt = ((min, max)=> {
  let num = Math.random() * (max - min) + min;
  return Math.floor(num);
});


export default helper;