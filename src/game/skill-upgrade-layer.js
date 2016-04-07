/**
 * Created by hewenlong on 16-4-6.
 */

import {BaseLayer, Inherited, Helper} from "../utility/imports.js"
import SkillUpgradeUi from "../ui/skill-upgrade-ui.js"

const SkillUpgradeLayer = function (spec) {
  let that = Inherited(BaseLayer(SkillUpgradeUi(), "kenney"));

  that.inheritOn("init", function () {
    Helper.wordWrapText(EZGUI.components.skillDescription.textObj);


    console.log("image width",EZGUI.components.upImage.rootSprite.width);
    var width = 200 * 0.8;
    EZGUI.components.upImage.rootSprite.width *= 0.7;

    EZGUI.components.backBtn.on("click", function (event, target) {
      that.removeFromWorld();
    });
    return true;
  });

  return that;
};

export default SkillUpgradeLayer