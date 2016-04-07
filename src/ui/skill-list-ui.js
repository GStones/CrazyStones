/**
 * Created by hewenlong on 16-4-1.
 */

var SkillLabel = function(cfg) {
  var that = {
    id: "skillLabel",
    component: 'Layout',
    image: 'icon_activity_0.png',
    userData: 0,
    position: 'center',
    width: 450,
    height: 120,
    layout: [3, 1],
    children: [
      {
        id: 'skillIcon',
        position: {x: 0, y: 0},
        image: "",
        width: 120,
        height: 120
      },
      {
        component: "Layout",
        width: 200,
        height: 100,
        position: 'center',
        layout: [1, 2],
        children: [
          {
            id: "skillName",
            text: "skill",
            font: {
              size: '30px'
            },
            component: 'Label',
            position: {x: 0, y: 0},
            anchor: {x: 0, y: 0},
            width: 100,
            height: 30
          },
          {
            id: "description",
            text: "技能介绍",
            font: {
              size: '22px',
              family: 'Arial',
              color: 'orange',
              align: 'left',
              wordWrap: true,
              wordWrapWidth: 200
            },
            component: 'Label',
            anchor: {x: 0, y: 0.5},
            position: {x: 0, y: 10},
            width: 200,
            height: 80
          }
        ]
      },
      {
        id: 'btn',
        text: '升级',
        font: {
          size: '22px',
          color: 'green'
        },
        userData: 0,
        component: 'Button',
        skin: 'bluebutton',
        position: {x: 30, y: 30},
        width: 100,
        height: 60
      }
    ]
  };

  (()=> {
    console.log("skill info", JSON.stringify(cfg));
    let id = cfg.id;
    that.userData = id;
    that.children[0].image = "skill_" + (id + 1) + ".png";
    that.children[2].userData = id;
    let skillInfo = that.children[1];
    skillInfo.children[0].text = cfg.skillName;
    skillInfo.children[1].text = cfg.description;
  })();

  return that;
};

var SkillUI = {
  component: 'Window',
  draggable: false,
  padding: 0,
  position: {x: 0, y: 0},
  width: 480,
  height: 754,
  layout: [1, 2],
  children: [
    {
      id: "skillTitle",
      text: '技能列表',
      component: 'Label',
      font: {
        size: '40px',
        color: 'blue',
        align: "center"
      },
      width: 0,
      height: 0,
      position: {x: 240, y: 50}
    },
    {
      id: "skillList",
      component: 'List',
      width: 460,
      height: 650,
      position: {x: 10, y: -290},
      layout: [1, 5],
      children: []
    }
  ]
};

export {
  SkillUI,
  SkillLabel
  }