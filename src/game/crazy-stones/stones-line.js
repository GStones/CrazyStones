/**
 * Created by guolei on 16/4/14.
 */
import StoneAtlas from './stone-atlas'
import define from '../../game-defines'
import {Helper}from '../../utility/imports'

const StoneLine = (()=> {
  let that = {};
  let _line_list = [];
  that.node = new PIXI.Container();
  that.speed = 5;

  that.randomLineStone = ((level)=> {
    let stoneArray = [level, level, level, level];
    let randomNum = Helper.randomInt(0, 4);
    stoneArray[randomNum] = 0;

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
      playBomb();
      return true;
    }
    return false;
  });

  const playBomb = (()=> {
    for (let i = 0; i < _line_list.length; i++) {
      let stone = _line_list[i];
      stone.bomb();
    }
  });


  that.update = ((dt)=> {
    that.node.position.y += that.speed;
  });


  return that;
});
export  default StoneLine;