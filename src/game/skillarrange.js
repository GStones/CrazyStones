/**
 * Created by chuhaoyuan on 16/4/1.
 */
import {Inherited, BaseWorld, ResourceManager, Director, Helper,SRequest} from "../utility/imports.js"
import SkillButton from "./skillbutton.js"
import resources from "../resources.js"
import defines from "../game-defines.js"
export default function  SkillArrange (){
  var that = Inherited(BaseWorld());

  that.inheritOn('init',function(){
   // var resourcesManager = ResourceManager();
  //  var resourcesList = ['chongpaibutton','kaishiyouxi_button','jineng_0','jineng_1','jineng_2','jineng_3','jineng_4','jineng_bg'];
    var resourcesList = [
      resources.png_icon_jineng_0,
      resources.png_icon_jineng_1,
      resources.png_icon_jineng_2,
      resources.png_icon_jineng_3,
      resources.png_icon_jineng_4,
      resources.png_icon_jineng_bg,
      resources.png_icon_kaishiyouxi_button,
      resources.png_icon_da_button,
      resources.png_icon_chongpai_button
    ];
    ResourceManager.loadList(resourcesList,function(res,name){
    that.interactive = true;
      ////button
      ////放一个 reArrangebutton
      var buttonClick = function(button){
        switch (button.getName()){
          case resources.png_icon_chongpai_button:
            console.log('chongpai');
              for (var i = 0 ; i < skillArrangeList.length ; i ++){
                var b = skillArrangeList[i];
                if (b === 'null'){

                }else {
                  b.position.x = b.oldPos.x;
                  b.position.y = b.oldPos.y;
                  skillArrangeList[i] = 'null';
                  b.posState = false;
                }
              }
            break;
          case  resources.png_icon_kaishiyouxi_button :
            console.log('start game');

            var skillNameslist = [];
            for (var i = 0 ; i < skillArrangeList.length ; i ++){
              if (skillArrangeList[i] === 'null'){
                console.log('no already');
                return;
              }
              skillNameslist.push(skillArrangeList[i].getName());
            }
            break;
          case resources.png_icon_da_button:
            console.log('da');
            robPlayer();
            break;
          default:
            break;
        }
      }


      var autoRob = function(){
        ////自动匹配
        var pre = {
          "use_pet_id":30081,
          "range":1,
          "sex":1
        }
        SRequest.get(defines.gameURL,"s/Fight/AutoRob",pre,function(data){
          console.log('autoRob ',data);
        });
      }


      var matchPlayers = function(){




        var pre = {};
        SRequest.get(defines.gameURL,"s/Fight/MatchPlayers",pre,function(data){
          console.log('matchPlayer',data);
        });
      }
      var robPlayer = function(){

        console.log('robplayer');

        var prelist = [];

        for (var i = 0; i < skillArrangeList.length ; i ++){
          if (skillArrangeList[i] === 'null'){
            console.log('no ready');
            return ;
          }
          prelist.push(skillArrangeList[i].getName());
        }

        console.log('prelist = ',prelist);
        var pre = {
          target_id:1000001,
          use_skills_order:prelist,
          use_pet_id:30081
        }

        SRequest.get(defines.gameURL,"s/Fight/RobPlayer",pre,function(data){
          console.log('robPlayer',data);
        });
      }

      var buttonResourcesNames = [
        resources.png_icon_kaishiyouxi_button,
        resources.png_icon_da_button,
        resources.png_icon_chongpai_button
      ];
      for (var i = 0 ; i< buttonResourcesNames.length ; i ++) {
        var rearrangeButton = SkillButton({
          texture: ResourceManager.resource[buttonResourcesNames[i]].texture,
          name: buttonResourcesNames[i]
        })
        rearrangeButton.addListener(buttonClick);
        that.node.addChild(rearrangeButton);
        rearrangeButton.position.x = 0;
        rearrangeButton.position.y = 300 + i * 120;
      }
      //initBg
      var path = resources.png_icon_jineng_bg;
      var skillBg =new PIXI.Sprite(ResourceManager.resource[path].texture);
      that.node.addChild(skillBg);
      skillBg.position.y = 100;
      ////init 5  button
      var skillArrangeList = [];
      var purposePosList = [];
      var clickSkillButton = function(button){
        if (button.posState === false){
          for (var i = 0; i < 5 ; i ++){
            if (skillArrangeList[i] === 'null'){
              button.position.x = purposePosList[i].x;
              button.position.y = purposePosList[i].y;
             // skillArrangeList.push(button);
              skillArrangeList[i] = button;
              button.posState = true;
              return;
            }
          }
        }else if (button.posState){
          button.position.x = button.oldPos.x;
          button.position.y = button.oldPos.y;
          for (var i = 0 ; i < skillArrangeList.length ; i ++){
            if (skillArrangeList[i] === 'null'){

            }else {
              if (skillArrangeList[i].getName() ===  button.getName()){
                skillArrangeList[i] = 'null';
              }
            }
          }
          button.posState = false;
        }
      }
      for (var i = 0 ; i < 5 ; i++){
        var path = resources["png_icon_jineng_"+i];
        var button = SkillButton({
          texture: ResourceManager.resource[path].texture,
          name: 'jineng_' + i
        });
        that.node.addChild(button);
        button.position.x = 16 + 88 * i;
        button.position.y = 220;
        button.oldPos = {
          x: button.position.x,
          y: button.position.y
        }
        purposePosList.push({
          x: button.position.x,
          y: button.position.y -100
        })
        button.posState = false;
        button.addListener(clickSkillButton);
        skillArrangeList.push('null');
      }
    });
    console.log('initskillarrange');
    return true;
  });
  return that;
}