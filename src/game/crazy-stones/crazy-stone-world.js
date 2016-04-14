/**
 * Created by guolei on 16/4/13.
 */
import {Inherited,BaseWorld,ResourceManager,Helper}from '../../utility/imports';
import res from '../../resources';
import define from '../../game-defines'
import StoneAtlas from './stone-atlas'
import StonesRow from './stones-row'
import StonesLine from  './stones-line'

const CrazyStone = (()=> {
  let that = Inherited(BaseWorld());

  let _guard_line = 200;

  let _all_stone_list = [];

  that.inheritOn('init', ()=> {
    drawBac();
    for (let i = 0; i < 9; i++) {
      initStones();
    }
    that.node.interactive = true;
    that.node.on('click', function (event) {
      for (let i = 0; i < _all_stone_list.length; i++) {
        let row = checkClickRow(event.data.global.x);
        let stoneLine = _all_stone_list[i];
        if (!stoneLine.checkBomb(row)) {
          break;
        }
        _all_stone_list.shift();

        initStones();
        i--;
      }
    });
    return true;
  });

  that.inheritOn('update', (dt)=> {
    for (let i = 0; i < _all_stone_list.length; i++) {
      _all_stone_list[i].update(dt);
    }
  });

  const checkClickRow = ((x)=> {
    let row = 0;
    if (x >= 0 && x < define.Canvas.width * 0.25) {
      row = 0;
    } else if (x >= define.Canvas.width * 0.25 && x < define.Canvas.width * 0.5) {
      row = 1;
    } else if (x >= define.Canvas.width * 0.5 && x < define.Canvas.width * 0.75) {
      row = 2;
    } else if (x >= define.Canvas.width * 0.75 && x < define.Canvas.width) {
      row = 3;
    }
    return row;
  });

  const initStones = (()=> {
    let line = StonesLine();
    line.randomLineStone(1);
    if (_all_stone_list.length > 0) {
      line.node.position.y = _all_stone_list[_all_stone_list.length - 1].node.position.y - 89;
    } else {
      line.node.position.y = _guard_line;
    }
    that.node.addChild(line.node);
    _all_stone_list.push(line);
  });

  const drawBac = (()=> {
    let graphics = new PIXI.Graphics();

    graphics.beginFill(0xF5F5DC, 1);
    graphics.drawRect(0, 0, define.Canvas.width, define.Canvas.height);
    graphics.endFill();

    graphics.beginFill(0x8B8378, 1);
    graphics.drawRect(define.Canvas.width / 4, 0, define.Canvas.width / 4, define.Canvas.height);
    graphics.endFill();

    graphics.beginFill(0x8B8378, 1);
    graphics.drawRect(define.Canvas.width / 4 * 3, 0, define.Canvas.width / 4, define.Canvas.height);
    graphics.endFill();

    graphics.beginFill(0xFF0000, 1);
    graphics.drawRect(0, _guard_line, define.Canvas.width, 10);
    graphics.endFill();

    that.node.addChild(graphics);
  });
  return that;

});
export default CrazyStone;