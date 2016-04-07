/**
 * Created by chuhaoyuan on 16/4/1.
 */

export  default function SkillButton (data){
  var that = new PIXI.Sprite(data.texture);
  var _name = data.name;
  that.interactive = true;
  that.addListener = function(callBack) {
    that.on('mousedown',function(){
     // console.log('00000');
      callBack(that);
    })
    that.on('touchend',function(){
      callBack(that);
    });
  }
  that.getName = function(){
    return _name;
  }
  return that;
}