/**
 * Created by guolei on 16/4/13.
 */
const StonesRow = (()=> {
  let that = {};
  let _row_list = [];

  that.addStone = ((stone)=> {
    _row_list.push(stone);
  });

  that.checkBomb = (()=> {
    for (let i = 0; i < _row_list.length; i++) {
      let stone = _row_list[i];
      if (stone.type !== 0) {
          //return _row_list[i-1];
      }
    }
  });

  that.update = ((dt)=> {
    for (let i = 0; i < _row_list.length; i++) {
      _row_list[i].update(dt);
    }
  });


  return that;
});
export default StonesRow;