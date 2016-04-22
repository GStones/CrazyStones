/**
 * Created by hewenlong on 16-3-18.
 */

const ResourceManager = ResourceManager || (()=> {
    let that = {};

    let _loadingMap = {};
    that.resource = {};

    let _loadingUIMap = {};
    that.uiLoaded = {};

    let resourcePath = '';
    that.setResPath = function (path) {
      resourcePath = path;
    };

    that.loadUI = function (name, cb) {
      if (that.uiLoaded[name]) {
        console.log(" res has load, call back", name);
        cb();
        return;
      }

      var cbList = _loadingUIMap[name];
      if (!cbList) {
        //var path = _cfg[name];
        //console.log('res cfg :' + JSON.stringify(path));
        //if (!path) {
        //    console.log('error no path for res: ' + name);
        //    return;
        //}

        cbList = [];
        _loadingUIMap[name] = cbList;
        cbList.push(cb);
        EZGUI.Theme.load([resourcePath+name], function () {
          that.uiLoaded[name] = true;
          for (var i = 0; i < cbList.length; ++i) {
            console.log("res load: " + name);
            cbList[i].call(this)
          }
          delete _loadingUIMap[name];
        });
      }
      else {
        cbList.push(cb);
      }
    }


    that.load = function (name, cb) {
      if (that.resource[name]) {
        console.log(" res has load, call back", name);
        cb(that.resource[name]);
        return;
      }

      var cbList = _loadingMap[name];
      if (!cbList) {
        //var path = _cfg[name];
        //if (!path) {
        //    console.log('error no path for res: ' + name);
        //    return;
        //}

        cbList = [];
        _loadingMap[name] = cbList;
        cbList.push(cb);
        console.log('loadMap',resourcePath+name);


        PIXI.loader.add(name, resourcePath+name).load(function (loader, res) {
          that.resource[name] = res[name];
          for (var i = 0; i < cbList.length; ++i) {
            console.log("res load: " + name);
            cbList[i].call(this, that.resource[name], name)
          }
          delete _loadingMap[name];
        });
      }
      else {
        cbList.push(cb);
      }
    }

    that.loadList = function (resList, cb) {
      var loadedCnt = 0;
      var checkEndFunc = function () {
        loadedCnt++;
        if (loadedCnt == resList.length) {
          if (cb) {
            cb.call(this);
          }
        }
      };

      for (var i = 0; i < resList.length; ++i) {
        that.load(resList[i], checkEndFunc);
      }

    };

    return that;
  })();

export default ResourceManager;