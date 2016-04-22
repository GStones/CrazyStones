/**
 * Created by guolei on 16/4/13.
 */
import {Inherited,BaseWorld,ResourceManager,Helper}from '../../utility/imports';
import res from '../../resources';
import define from '../../game-defines'
import StoneAtlas from './stone-atlas'
import StonesLine from  './stones-line'

const CrazyStone = (()=> {
  let that = Inherited(BaseWorld());


  let _guard_line = 200;

  let _all_stone_list = [];
  let _graphics = new PIXI.Graphics();
  let drawPot = (pos=> {
    _graphics.beginFill('red', 1);
    _graphics.drawCircle(pos.x/Helper.scale, pos.y/Helper.scale, 10);
    _graphics.endFill();
  });
  that.inheritOn('init', ()=> {

    drawBac();

    for (let i = 0; i < 9; i++) {
      initStones();
    }
    that.node.interactive = true;


    let touchFire = event=> {
      for (let i = 0; i < _all_stone_list.length; i++) {

        let row = checkClickRow(event.data.global.x/Helper.scale);

        drawPot(event.data.global);
        let stoneLine = _all_stone_list[i];
        if (!stoneLine.checkBomb(row)) {
          break;
        }
        _all_stone_list.shift();

        initStones();
        i--;
      }
    };
    that.node.on('touchmove',touchFire)
              .on('mousedown',touchFire);

    that.node.alpha = 0.5;
    that.node.addChild(_graphics);
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


    _graphics.beginFill(0xF5F5DC, 1);
    _graphics.drawRect(0, 0, define.Canvas.width, define.Canvas.height);
    _graphics.endFill();

    _graphics.beginFill(0x8B8378, 1);
    _graphics.drawRect(define.Canvas.width / 4, 0, define.Canvas.width / 4, define.Canvas.height);
    _graphics.endFill();

    _graphics.beginFill(0x8B8378, 1);
    _graphics.drawRect(define.Canvas.width / 4 * 3, 0, define.Canvas.width / 4, define.Canvas.height);
    _graphics.endFill();

    _graphics.beginFill(0xFF0000, 1);
    _graphics.drawRect(0, _guard_line, define.Canvas.width, 10);
    _graphics.endFill();


  });
  return that;

});
export default CrazyStone;