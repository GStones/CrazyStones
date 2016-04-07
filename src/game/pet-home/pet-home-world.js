/**
 * Created by guolei on 16/4/1.
 */
import {Inherited, BaseWorld, ResourceManager, Director,Helper} from "../../utility/imports.js"
import res from '../../resources.js'
import PetActor from "../../actor/pet-actor.js"
import  GameDefine from '../../game-defines'
import PetHomeUI from '../../ui/pet-home-ui'
const PetHome = function () {
  let that = Inherited(BaseWorld());

  that.inheritOn('init', function () {
    ResourceManager.load(res.png_bj, function () {
      let bac = Helper.createSprite(res.png_bj);
      that.node.addChild(bac);
    });
    ResourceManager.load(res.json_cat_5,function(res){
      let  options = {
        type: "spine",
        spineData: res.spineData
      }
      let cat =PetActor(options);
      cat.init(that.node);
      cat.node.position.x = GameDefine.Canvas.posX_center;
      cat.node.position.y =  550;
      cat.node.zorder = 4;
      Helper.reorderNode(that.node);
    });


    return true;
  });

  that.inheritOn('update', function () {

  });


  return that;
};
export default PetHome;