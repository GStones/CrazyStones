/**
 * Created by guolei on 16/4/15.
 */
import define from '../../game-defines'
import  res from '../../resources'
import {Helper,ResourceManager}from '../../utility/imports';
const Bullet = (()=> {
  let that = {};
  that.node = new PIXI.Container();
  that.node.position.y = define.Canvas.height + 100;
  let _bullet_sprite = null;
  let _action = null;

  that.fire = ((row,callBack)=> {
    _bullet_sprite = Helper.createSprite(res.png_jineng_1);
    _bullet_sprite.anchor.set(0.5);
    that.node.addChild(_bullet_sprite);

    that.node.position.x = define.Canvas.width * ((row + 1) * 2 - 1) * 0.125;
    //that.node.position.y = endPos;
    _action = new EZGUI.Tween(that.node.position)
      .to({y: 0}, 300)
      .onComplete(()=> {
        that.node.visible = false;
        callBack();
      })
      .start();


  });


  return that;
});
export default Bullet;