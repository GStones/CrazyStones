/**
 * Created by hewenlong on 16-4-1.
 */

import {BaseLayer, Inherited,Director, Helper} from "../utility/imports.js"
import {SkillUI, SkillLabel} from "../ui/skill-list-ui.js"
import SkillUpgradeLayer from "./skill-upgrade-layer.js"

const SkillLayer = function (spec) {
  let that = Inherited(BaseLayer(SkillUI, 'kenney'));

  that.inheritOn('init', function () {
    for (let i = 0; i < spec.length; i++) {
      let info = spec[i];
      info.skillName = "宠物技能"+ (i + 1);
      info.description = "宠物技能" + (i+1) +"，造成伤害xxx";
      var skillLabel = EZGUI.create(SkillLabel(info), 'kenney');
      let desText = EZGUI.components.description;
      Helper.wordWrapText(desText.textObj);
      EZGUI.components.btn.on("click", that.btnClick);
      EZGUI.components.skillList.addChild(skillLabel);
    }

    return true;
  });

  that.inheritOn("add2World", function (world) {
    that.btnClick({target: {userData: 0}});
  });

  that.btnClick = function (event) {
    let targetId = event.target.userData;
    let skillUpgradeLayer = SkillUpgradeLayer({id: targetId});
    skillUpgradeLayer.init();
    skillUpgradeLayer.add2World(that.owner);
  };
  return that;
};
export default SkillLayer;