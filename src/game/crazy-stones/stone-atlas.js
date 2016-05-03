/**
 * Created by guolei on 16/4/13.
 */
import {Helper,ResourceManager}from '../../utility/imports';
import  res from '../../resources'
let StoneAtlas = (()=> {
  let that = {};
  that.level = 0;
  that.node = new PIXI.Container();

  that.initWithData = ((level)=> {
    that.level = level;

    ResourceManager.loadList([res.png_jineng_0, res.png_jineng_bg, res.png_jineng_1], ()=> {
      let sprite = Helper.createSprite(res.png_jineng_0);
      sprite.anchor.set(0.5);
      //sprite.tint = 0xFFD700;
      that.node.addChild(sprite);
    });
    if (that.level <= 0) {
      that.node.visible = false;
    }
  });
  that.show = (()=> {
    that.node.visible = true;
  });

  that.bomb = (()=> {
    that.node.visible = false;
    that.level = 0;
  });

  return that;
});
export default StoneAtlas;