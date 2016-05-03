/**
 * Created by guolei on 16/4/14.
 */
import StoneAtlas from './stone-atlas'
import define from '../../game-defines'
import {Helper}from '../../utility/imports'
import Bullet from './bullet'

const StoneLine = (()=> {
  let that = {};
  let _line_list = [];
  let _row_num = 0;
  that.node = new PIXI.Container();
  that.speed = 5;
  that.isDead = false;

  that.randomLineStone = ((level)=> {
    let stoneArray = [level, level, level, level];
    _row_num = Helper.randomInt(0, 4);
    stoneArray[_row_num] = 0;

    for (let i = 0; i < stoneArray.length; i++) {
      let stone = StoneAtlas();
      stone.initWithData(stoneArray[i]);
      stone.node.position.x = define.Canvas.width * ((i + 1) * 2 - 1) * 0.125;
      that.node.addChild(stone.node);
      _line_list.push(stone);
    }

  });


  that.checkBomb = ((row)=> {
    let stone = _line_list[row];
    if (stone.level === 0) {
      that.isDead = true;
      return stone;
    }
    return false;
  });

  let fireBullet = ((callBack)=> {
    let bullet = Bullet();
    bullet.fire(_row_num,callBack);
    that.node.addChild(bullet.node);
  });

  that.playBomb = ((callFunc)=> {

    fireBullet(function(){
      //_line_list[_row_num].show();
      that.node.visible = false;
      if(callFunc){
        callFunc();
      }

    });


    //for (let i = 0; i < _line_list.length; i++) {
    //  let stone = _line_list[i];
    //  stone.bomb();
    //}
  });


  that.update = ((dt)=> {
    that.node.position.y += that.speed;
  });


  return that;
});
export  default StoneLine;