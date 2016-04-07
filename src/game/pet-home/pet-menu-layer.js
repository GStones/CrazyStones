/**
 * Created by guolei on 16/4/7.
 */
import {Inherited,BaseLayer}from '../../utility/imports'
import petHomeUI from '../../ui/pet-home-ui'
import gameDefine from '../../game-defines'
const PetMenuLayer = function () {
  let that = Inherited(BaseLayer(petHomeUI, gameDefine.gameTheme));
  that.inheritOn('init', function () {

  });
  return that;
}