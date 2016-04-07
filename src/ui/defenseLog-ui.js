/**
 * Created by John on 16/3/29.
 */
//import {BaseLayer, Inherited, Director, SRequest} from "../utility/imports.js"
//import defenseLogUI from "../ui/defenseLog-ui.js"
import gameGlobal from "../game-global.js"
import defines from "../game-defines.js"

const getItem = function (data) {
    let that = {
        id: 'id'+data.enemy_id,
        text: data.tm+'attacked by'+data.enemy_nickname+'with his pet.lost'+data.loss_gold+'gold',
        font: {size: '26px', color: 'black', align: "left",
            wordWrap: true,
            wordWrapWidth: 480
        },
        component: 'Label',
        position:'left',
        width: 480,
        height: 100
    };

    return that;
};
export default function DefenseLogUI() {
    var that = {};
    that.layout = null;
    that.createUI = function(data) {
        let children = [];
        let row = data.res.length;

        for (var i = 0; i < data.res.length; i++) {
            console.log('getItem-' + i + JSON.stringify(data.res[i]));
            let child = getItem(data.res[i]);
            children.push(child);
        }
        that.layout = {
            id: 'defenseLog',
            component: 'Window',
            header: {id: 'ttl', skin: 'blueheader', position: {x: 0, y: 0}, height: 40, text: 'defense log'},
            padding: 4,
            position: {x: 0, y: 0},
            width: defines.Canvas.width,
            height: defines.Canvas.height/2,
            layout: [1, 1],
            children: [
                {
                    id: 'logList',
                    component: 'List',
                    position: {x: 0, y: 0},
                    width: defines.Canvas.width,
                    height: 100 * row,
                    layout: [1, row],
                    children: children
                }
            ]
        };
    }
    return that;
}