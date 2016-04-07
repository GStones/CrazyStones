/**
 * Created by wizard on 16/3/30.
 */

const fpsLimits = 1000 / 60;

const Director = function (width, height) {
    let that = {};

    that.runningWorld = null;

    that.renderer = PIXI.autoDetectRenderer(width, height);
    document.body.appendChild(that.renderer.view);

    that.startWorld = function (newWorld) {
        if (that.runningWorld) {
            newWorld.node.scale.x = that.runningWorld.node.scale.x;
            newWorld.node.scale.y = that.runningWorld.node.scale.y;
            delete that.runningWorld;
            that.runningWorld = newWorld;
            return;
        }

        var stepOnce = function (timestamp) {
            requestAnimationFrame(stepOnce);

            var dt = timestamp - _lastTime;
            if (dt < fpsLimits) {
                return;
            }

            _lastTime = timestamp;
            if (that.runningWorld) {
                that.runningWorld.update(dt);
                that.renderer.render(that.runningWorld.node);
            }
        };

        var _lastTime = performance.now();
        that.runningWorld = newWorld;
        stepOnce(_lastTime);
    }

    return that;
}


let SharedDirector = SharedDirector || (()=> {
        let that = {};
        let sharedDirector = null;
        that.create = function (width, height) {
            sharedDirector = Director(width, height);
            return sharedDirector;
        };

        that.sharedDirector = function () {
            return sharedDirector;
        };

        return that;

    })();

export  default SharedDirector;


