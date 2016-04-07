/**
 * Created by John on 16/4/1.
 */
import {BaseLayer, Inherited, Director} from "../utility/imports.js"
//import defenseLogUI from "../ui/defenseLog-ui.js"
import gameGlobal from "../game-global.js"
import defines from "../game-defines.js"

//const getItem = function (data) {
//    let that = {
//        id: 'id'+data.enemy_id,
//        text: data.tm+'attacked by'+data.enemy_nickname+'with his pet.lost'+data.loss_gold+'gold',
//        font: {size: '26px', color: 'black', align: "left",
//            wordWrap: true,
//            wordWrapWidth: 480
//        },
//        component: 'Label',
//        position:'left',
//        width: 480,
//        height: 100
//    };
//
//    return that;
//};
//
//that.createUI = function(data){
//    let that = {};
//    let children = [];
//    let row = data.res.length;
//
//    for (var i = 0; i < data.res.length; i++){
//        console.log('getItem-'+i+JSON.stringify(data.res[i]));
//        let child = getItem(data.res[i]);
//        children.push(child);
//    }
//    that.layout = {
//        id: 'defenseLog',
//        component: 'Window',
//        header: { id: 'ttl', skin: 'blueheader', position: { x: 0, y: 0 }, height: 40, text: 'defense log' },
//        padding: 4,
//        position: {x: 0, y: 0},
//        width: defines.Canvas.width,
//        height: defines.Canvas.height,
//        layout: [1, 1],
//        children: [
//            {
//                id: 'logList',
//                component: 'List',
//                position: {x: 0, y: 0},
//                width: defines.Canvas.width,
//                height: 100*row,
//                layout: [1, row],
//                children: children
//            }
//        ]
//    };
//
//    return that;
//}

//const requestLogData = function(){
//    let logData = {}
//    SRequest().get(defines.gameURL, "s/Info/GetDefendRecords", {"pet_id": 10000}, function (data) {
//        console.log('log-' + JSON.stringify(data));
//        logData = data;
//    });
//    return logData;
//}

export default function DefenseLogLayer(ui) {

    //let data = {"res":[{"enemy_id":100001,"enemy_nickname":"金城武","loss_gold":10,"result":1,"tm":"2016-03-28 16:58"},{"enemy_id":100001,"enemy_nickname":"金城武","loss_gold":10,"result":1,"tm":"2016-03-28 16:58"},{"enemy_id":100001,"enemy_nickname":"金城武","loss_gold":10,"result":1,"tm":"2016-03-28 16:58"}],"status":"ok","tm":1459503584}
    //let that = Inherited(BaseLayer(defenseLogUI, 'kenney') );
    let that = Inherited(BaseLayer(ui, 'kenney') );
    //SRequest().get(defines.gameURL, "s/Info/GetDefendRecords", {"pet_id": 10000}, function (data) {
    //    console.log('log-'+JSON.stringify(data));
    //    let ui = createUI(data);
        //let that = Inherited(BaseLayer(ui.layout, 'kenney') );
        //for(var i = 0; i < data.res.length; i++){
        //    console.log('log-'+i+JSON.stringify(data.res[i]));
        //}
    //});
    //let director = Director.sharedDirector();
    that.inheritOn('init', function () {
        return true;
    });

    return that;
}