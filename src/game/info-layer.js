/**
 * Created by wizard on 16/3/31.
 */

import {ModelLayer, Inherited} from "../utility/imports.js"
import infoUI from "../ui/info-dialog-ui.js"

const InfoLayer = function () {
  let that = Inherited(ModelLayer(infoUI, 'kenney'));

  that.inheritOn('init', function () {

    that.node.zorder = 5;

    EZGUI.components.info_btn.on('click', function (event) {
      that.removeFromWorld();
    });


    return true;
  });

  return that;
};

export default InfoLayer;
