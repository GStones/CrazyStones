/**
 * Created by guolei on 16/4/13.
 */
import {Inherited,BaseWorld,ResourceManager,Helper}from '../../utility/imports';
import res from '../../resources';
import define from '../../game-defines'
import StoneAtlas from './stone-atlas'
import StonesRow from './stones-row'

const CrazyStone = (()=> {
  let that = Inherited(BaseWorld());

  let _guard_line = 200;
  let _stone_init_array = [
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1]
  ];

  const StonesRowList = [StonesRow(), StonesRow(), StonesRow(), StonesRow()];


  that.inheritOn('init', ()=> {
    drawBac();
    initStones();
    return true;
  });

  that.inheritOn('update', (dt)=> {
    for (let i = 0; i < StonesRowList.length; i++) {
      StonesRowList[i].update(dt);
    }
  });


  const initStones = (()=> {
    for (let i = 0; i < _stone_init_array.length; i++) {
      for (let j = 0; j < _stone_init_array[i].length; j++) {
        let stone = StoneAtlas();
        stone.initWithData(_stone_init_array[i][j]);
        stone.node.position.x = ((j + 1) * 2 - 1) / 8 * define.Canvas.width;
        stone.node.position.y = i * stone.height - (define.Canvas.height - _guard_line);
        that.node.addChild(stone.node);
        StonesRowList[j].addStone(stone);
      }
    }
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