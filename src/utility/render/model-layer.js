/**
 * Created by wizard on 16/3/31.
 */

import Inherited from "../inherited.js"
import BaseLayer from "./base-layer.js"

const ModelLayer = function (layout, theme) {
    let that = Inherited(BaseLayer(layout, theme));

    that.inheritOn('add2World', function (world) {
        world.lock2Layer(that);
        return true;
    });

    that.removeFromWorld = function () {
        that.owner.unlock2Layer(that);
        that.owner.node.removeChild(that.node);
        that.owner = null;
    };

    return that;
}
export default ModelLayer