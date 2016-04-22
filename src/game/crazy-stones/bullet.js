/**
 * Created by guolei on 16/4/15.
 */
import define from '../../game-defines'
import  res from '../../resources'
const Bullet = (()=> {
  let that = {};
  that.node = new PIXI.Container();
  let _start_pos = define.Canvas.height + 100;
  let _bullet_sprite = null;
  let _action = null;

  that.init = (()=> {
    _bullet_sprite = new PIXI.Sprite.fromImage(res.png_jineng_1);
    _bullet_sprite.position.y = _start_pos;
    that.node.addChild(_bullet_sprite);
  });

  that.fireInRow = ((row, endPos)=> {
    _bullet_sprite.position.x = define.Canvas.width * ((row + 1) * 2 - 1) * 0.125;
    let pos = {_start_pos};
    _action = EZGUI.Tween(pos);
    _action.to({endPos}, 0.5);
    _action.start();
  });



  return that;
});