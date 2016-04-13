/**
 * Created by guolei on 16/4/13.
 */
import {Helper,ResourceManager}from '../../utility/imports';
import  res from '../../resources'
let StoneAtlas = (()=> {
  let that = {};
  that.type = 0;
  that.node = new PIXI.Container();
  that.height = 89;
  that.speed = 2;

  that.initWithData = ((data)=> {
    if (data===1) {
      ResourceManager.load(res.png_jineng_0, ()=> {
        let sprite = Helper.createSprite(res.png_jineng_0);
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        that.node.addChild(sprite);
      });
    }
  });

  that.bomb = (()=> {
    that.node.visible = false;
  });

  that.update = function (dt) {
    that.node.position.y += that.speed;
  };


  return that;
});
export default StoneAtlas;