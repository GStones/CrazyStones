/**
 * Created by guolei on 16/4/7.
 */
import  GameDefine from '../game-defines';
import resource from '../resources'
const PetHomeUI = function () {
  let that = {};
  that.node = {
    id: "skillLabel",
    component: 'Layout',
    position: {x: 0, y: 0},
    width: GameDefine.Canvas.width,
    height: GameDefine.Canvas.height,
    layout: [1, 2],
    children: [
      {
        id: 'btn2',
        text: 'btn',
        font: {
          size: '42px',
          family: 'Skranji',
          color: 'red'
        },
        component: 'Button',
        skin: 'bluebutton',
        position: 'center',
        width: 190,
        height: 80
      },
      {
        id: 'btn2',
        text: 'btn',
        font: {
          size: '42px',
          family: 'Skranji',
          color: 'red'
        },
        component: 'Button',
        skin: 'bluebutton',
        position: 'center',
        width: 190,
        height: 80
      }
    ]
  };

  return that;
};
export default PetHomeUI;