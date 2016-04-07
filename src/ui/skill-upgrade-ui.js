/**
 * Created by hewenlong on 16-4-6.
 */

var SkillUpgradeUI = function (cfg) {
  let that = {
    component: 'Window',
    draggable: false,
    padding: 0,
    position: {x: 0, y: 0},
    width: 480,
    height: 754,
    layout: [1, 5],
    children: [
      {
        id : "skillTitle",
        component:"Layout",
        text: '技能升级',
        font: {
          size: "36px",
          color : "purple"
        },
        position: {x: 0, y : 0},
        width: 480,
        height: 80,
        layout: [1, 1],
        children: [
          {
            id : "backBtn",
            component:"Button",
            text: '返回',
            font: {
              size: "22px",
              color : "blue"
            },
            position: {x: 10, y : 10},
            width: 80,
            height: 50
          }
        ]
      },
      {
        id: "skillInfo",
        component: "Layout",
        width: 490,
        height: 250,
        image:  'icon_bloodDown.png',
        position: {x: 0, y: -70},
        layout: [7,1],
        children: [
          {id: "skillIcon", image: 'skill_1.png', position: {x: 0, y: 50}, width: 150, height: 150},
          {id: "skillName", component: 'Label', text: '宠物技能', font: {size: "26px"}, position: {x: 200, y: 0}, width: 50, height: 50},
          {id: 'skillDescription', component: 'Label', text: '宠物技能描述宠物技能描述宠物技能描述',font: {size: '24px', wordWrap: true, wordWrapWidth: 320}, anchor: {x: 0, y: 0.5}, position: {x: 10, y: 90}, width: 50, height: 50},
          {
            component: "Layout",
            width: 240,
            height: 50,
            position: {x: -65, y: 130},
            layout: [8,1],
            children: [
              {id: "icon1", image: 'icon_lifePet_big.png', position: {x: 0, y: 0}, width: 30, height: 30},
              {id: "icon1", image: 'icon_lifePet_big.png', position: {x: 0, y: 0}, width: 30, height: 30},
              {id: "icon1", image: 'icon_lifePet_big.png', position: {x: 0, y: 0}, width: 30, height: 30},
              {id: "icon1", image: 'icon_lifePet_big.png', position: {x: 0, y: 0}, width: 30, height: 30},
              {id: "icon1", image: 'icon_lifePet_big.png', position: {x: 0, y: 0}, width: 30, height: 30},
              {id: "level", component: 'Label', text: '1段5级', font: {size: "22px"}, position: {x: 20, y: 0}, width: 30, height: 30}
            ]
          },
          {
            component: "Layout",
            width: 240,
            height: 100,
            position: {x: -135, y: 180},
            layout: [3,1],
            children: [
              {id: "level", component: 'Label', text: '祝福值', font: {size: "22px"}, position: {x: 20, y: 0}, width: 30, height: 30},
              {id: "downImage", image: 'icon_bloodDown.png', position: {x: 0, y: 0}, width: 200, height: 30, anchor: {x: 0, y: 0.5}},
              {id: "upImage", image: 'icon_bloodRed.png', position: {x: -80, y: 0}, width: 200, height: 30, anchor: {x: 0, y: 0.5}}
            ]
          }
        ]
      }
    ]
  };

  return that;
};

export default SkillUpgradeUI