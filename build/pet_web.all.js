/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _imports = __webpack_require__(1);
	
	var _testWorld = __webpack_require__(61);
	
	var _testWorld2 = _interopRequireDefault(_testWorld);
	
	var _test2World = __webpack_require__(69);
	
	var _test2World2 = _interopRequireDefault(_test2World);
	
	var _crusadeWorld = __webpack_require__(75);
	
	var _crusadeWorld2 = _interopRequireDefault(_crusadeWorld);
	
	var _gameGlobal = __webpack_require__(66);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _gameDefines = __webpack_require__(63);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _resources = __webpack_require__(70);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _crazyStoneWorld = __webpack_require__(78);
	
	var _crazyStoneWorld2 = _interopRequireDefault(_crazyStoneWorld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/7.
	 */
	
	//var PIXI = require("pixi.js");
	
	window.onload = function () {
	  // create an new instance of a pixi stage
	
	  var director = _imports.Director.create(_gameDefines2.default.Canvas.width, _gameDefines2.default.Canvas.height);
	  EZGUI.setRenderer(director.renderer);
	
	  _imports.ResourceManager.setResPath(_gameDefines2.default.resPath);
	  _imports.ResourceManager.loadUI(_resources2.default.json_kenney_theme, function () {
	
	    var testWorld = (0, _crazyStoneWorld2.default)();
	    testWorld.init();
	    director.startWorld(testWorld);
	    _imports.Helper.scaleToWindow(director.renderer, director.runningWorld.node);
	
	    window.addEventListener("resize", function (event) {
	      _imports.Helper.scaleToWindow(director.renderer, director.runningWorld.node);
	    });
	  });
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SRequest = exports.Director = exports.ResourceManager = exports.Helper = exports.Inherited = exports.Eventuality = exports.ModelLayer = exports.BaseLayer = exports.BaseWorld = exports.AnimationFactor = undefined;
	
	var _animationFactor = __webpack_require__(2);
	
	var _animationFactor2 = _interopRequireDefault(_animationFactor);
	
	var _helper = __webpack_require__(52);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	var _resourceManager = __webpack_require__(53);
	
	var _resourceManager2 = _interopRequireDefault(_resourceManager);
	
	var _director = __webpack_require__(54);
	
	var _director2 = _interopRequireDefault(_director);
	
	var _simpleRequest = __webpack_require__(55);
	
	var _simpleRequest2 = _interopRequireDefault(_simpleRequest);
	
	var _baseWorld = __webpack_require__(56);
	
	var _baseWorld2 = _interopRequireDefault(_baseWorld);
	
	var _baseLayer = __webpack_require__(57);
	
	var _baseLayer2 = _interopRequireDefault(_baseLayer);
	
	var _modelLayer = __webpack_require__(58);
	
	var _modelLayer2 = _interopRequireDefault(_modelLayer);
	
	var _eventuality = __webpack_require__(60);
	
	var _eventuality2 = _interopRequireDefault(_eventuality);
	
	var _inherited = __webpack_require__(59);
	
	var _inherited2 = _interopRequireDefault(_inherited);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/30.
	 */
	
	exports.AnimationFactor = _animationFactor2.default;
	exports.BaseWorld = _baseWorld2.default;
	exports.BaseLayer = _baseLayer2.default;
	exports.ModelLayer = _modelLayer2.default;
	exports.Eventuality = _eventuality2.default;
	exports.Inherited = _inherited2.default;
	exports.Helper = _helper2.default;
	exports.ResourceManager = _resourceManager2.default;
	exports.Director = _director2.default;
	exports.SRequest = _simpleRequest2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _frameAnimation = __webpack_require__(3);
	
	var _frameAnimation2 = _interopRequireDefault(_frameAnimation);
	
	var _spineAnimation = __webpack_require__(5);
	
	var _spineAnimation2 = _interopRequireDefault(_spineAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/29.
	 */
	
	var animationFactor = function () {
	    var that = {};
	
	    that.createAnimation = function (options) {
	        if (options.type == "spine") {
	            return (0, _spineAnimation2.default)(options);
	        } else {
	            return (0, _frameAnimation2.default)(options);
	        }
	    };
	
	    return that;
	}();
	
	exports.default = animationFactor;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _animationInterface = __webpack_require__(4);
	
	var _animationInterface2 = _interopRequireDefault(_animationInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FrameAnimation = function FrameAnimation(spec) {
	  var that = (0, _animationInterface2.default)();
	
	  that.animates = {};
	
	  that.node = new PIXI.Container();
	
	  var _movieClip = null;
	
	  for (var index in spec.animates) {
	    var oneAnimate = spec.animates[index];
	    var frames = [];
	    for (var i = oneAnimate.start; i <= oneAnimate.end; ++i) {
	      frames.push(oneAnimate.pre + "_" + i + ".png");
	    }
	
	    that.animates[index] = {};
	    that.animates[index].frames = frames;
	    if (spec.animates[index].speed != undefined) {
	      that.animates[index].animationSpeed = spec.animates[index].speed;
	    } else {
	      that.animates[index].animationSpeed = 1;
	    }
	    //console.log("frame animation:" + JSON.stringify(that.animates) );
	  }
	
	  (function () {
	    if (spec.default) {
	      _movieClip = new PIXI.Sprite.fromFrame(spec.default);
	      that.node.addChild(_movieClip);
	      _movieClip.x = -_movieClip.width / 2;
	      _movieClip.y = -_movieClip.height / 2;
	    }
	  })();
	
	  var setupMovieClip = function setupMovieClip(frames, speed, isLoop, cb) {
	
	    if (_movieClip) {
	      that.node.removeChild(_movieClip);
	    }
	
	    _movieClip = new PIXI.extras.MovieClip.fromFrames(frames);
	    _movieClip.animationSpeed = speed;
	    _movieClip.loop = isLoop;
	    _movieClip.gotoAndPlay(0);
	
	    if (!isLoop) {
	      _movieClip.onComplete = function () {
	        if (cb) {
	          cb.call(this);
	        }
	      };
	    }
	
	    that.node.addChild(_movieClip);
	    _movieClip.x = -_movieClip.width / 2;
	    _movieClip.y = -_movieClip.height / 2;
	  };
	
	  that.getAnimationNode = function () {
	    console.log('error: virtual getAnimationNode function');
	  };
	
	  that.stop = function (applyCb) {
	    if (applyCb) {}
	  };
	
	  that.playOnce = function (actionName, cb) {
	    that.playTimes(actionName, 1, cb);
	  };
	
	  that.playTimes = function (actionName, times, cb) {
	
	    if (!that.animates[actionName]) {
	      console.log('error: wrong action name' + actionName);
	      return;
	    }
	
	    var frames = [];
	    for (var i = 0; i < times; ++i) {
	      frames = frames.concat(that.animates[actionName].frames);
	    }
	
	    setupMovieClip(frames, that.animates[actionName].animationSpeed, false, cb);
	  };
	
	  that.playList = function (actionList, cb) {
	    console.log('error: virtual function');
	  };
	
	  that.playLoop = function (actionName) {
	    if (!that.animates[actionName]) {
	      console.log('error: wrong action name' + actionName);
	      return;
	    }
	
	    setupMovieClip(that.animates[actionName].frames, that.animates[actionName].animationSpeed, true);
	  };
	
	  that.reset = function () {
	    console.log('error: virtual reset function');
	  };
	
	  that.setVisible = function (isVisible) {
	    that.node.visible = isVisible;
	  };
	
	  that.turnAround = function (faceTo) {
	    console.log('error: virtual  turnAround function');
	  };
	
	  that.setSlotVisible = function (slotName, isVisible) {
	    console.log('error: virtual setSlotVisible function');
	  };
	
	  that.setTimeScale = function (timeScale) {
	    that.node.animationSpeed = timeScale;
	  };
	
	  that.setSkin = function (name) {
	    console.log('error: virtual setSkin function');
	  };
	
	  return that;
	}; /**
	    * Created by wizard on 16/3/29.
	    */
	
	
	exports.default = FrameAnimation;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by hewenlong on 16-3-15.
	 */
	
	var AnimationInterface = function AnimationInterface(spec) {
	  var that = {};
	
	  that.getAnimationNode = function () {
	    console.log('error: virtual getAnimationNode function');
	  };
	
	  that.stop = function (applyCb) {
	    console.log('error: virtual stop function');
	  };
	
	  that.playOnce = function (actionName, cb) {
	    that.playTimes(actionName, 1, cb);
	  };
	
	  that.playTimes = function (actionName, times, cb) {
	    console.log('error: virtual playTimes function');
	  };
	
	  that.playList = function (actionList, cb) {
	    console.log('error: virtual function');
	  };
	
	  that.playLoop = function (actionName) {
	    console.log('error: virtual playLoop function');
	  };
	
	  that.reset = function () {
	    console.log('error: virtual reset function');
	  };
	
	  that.aimTo = function (direction) {
	    console.log('error: virtual function');
	  };
	
	  that.setVisible = function (isVisible) {
	    console.log('error: virtual setVisible function');
	  };
	
	  that.destroy = function () {
	    console.log('error: virtual destroy function');
	  };
	
	  that.turnAround = function (faceTo) {
	    console.log('error: virtual  turnAround function');
	  };
	
	  that.setSlotVisible = function (slotName, isVisible) {
	    console.log('error: virtual setSlotVisible function');
	  };
	
	  that.setTimeScale = function (timeScale) {
	    console.log('error: virtual setTimeScale function');
	  };
	  that.setSkin = function (name) {
	    console.log('error: virtual setSkin function');
	  };
	  that.setLocalZOrder = function (zOrder) {
	    console.log("error: virtual set local zOrder func");
	  };
	
	  return that;
	};
	
	exports.default = AnimationInterface;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _animationInterface = __webpack_require__(4);
	
	var _animationInterface2 = _interopRequireDefault(_animationInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Spine = __webpack_require__(6).Spine; /**
	                                          * Created by hewenlong on 16-3-15.
	                                          */
	
	var SpineAnimation = function SpineAnimation(spec) {
	    var that = (0, _animationInterface2.default)(spec);
	
	    var _spine = null;
	    var _actionList = [];
	    var _faceTo = 1;
	    that.zOrder = 0;
	    var spineData = spec.spineData;
	
	    that.setSkin = function (skin) {
	        _spine.skeleton.setSkinByName(skin);
	    };
	
	    that.turnAround = function (dir) {
	        var scaleX = _spine.scale.x;
	        _faceTo *= dir;
	        _spine.scale.x = scaleX * _faceTo;
	    };
	
	    that.playLoop = function (action, isSoft) {
	        if (!isSoft) {
	            applyAllCallBack();
	            _spine.skeleton.setToSetupPose();
	            _spine.state.setAnimationByName(0, action, true);
	        } else {
	            _spine.state.addAnimationByName(0, action, true, 0);
	        }
	    };
	
	    var applyAllCallBack = function applyAllCallBack() {
	        while (_actionList.length > 0) {
	            var action = _actionList.shift();
	            if (action.cb) {
	                action.cb();
	            }
	        }
	    };
	
	    that.getAnimationNode = function () {
	        return _spine;
	    };
	
	    that.playTimes = function (action, times, callBack, isSoft) {
	        var list = [];
	        for (var i = 0; i < times; i++) {
	            list.push(action);
	        }
	        that.playList(list, callBack, isSoft);
	    };
	
	    that.playList = function (list, callBack, isSoft) {
	        if (list.length === 0) {
	            if (callBack) {
	                callBack();
	            }
	        }
	        _spine.skeleton.setToSetupPose();
	        var track;
	
	        if (!isSoft) {
	            applyAllCallBack();
	            track = _spine.state.setAnimationByName(0, list[0], false);
	        } else {
	            track = _spine.state.addAnimationByName(0, list[0], false, 0);
	        }
	        if (!track) {
	            if (callBack) {
	                callBack();
	            }
	            return;
	        }
	        for (var i = 1; i < list.length; i++) {
	            _spine.state.addAnimationByName(0, list[i], false, 0);
	        }
	
	        if (callBack) {
	            var data = {
	                waitingCount: list.length,
	                cb: callBack
	            };
	            _actionList.push(data);
	        }
	    };
	
	    that.reset = function () {
	        _spine.skeleton.setBonesToSetupPose();
	        _spine.skeleton.setSlotsToSetupPose();
	        _spine.skeleton.clearTracks();
	        _actionList = [];
	    };
	
	    var _onComplete = function _onComplete() {
	        if (_actionList <= 0) {
	            return;
	        }
	
	        var data = _actionList[0];
	        data.waitingCount--;
	        if (data.waitingCount === 0) {
	            _actionList.shift();
	            data.cb();
	        }
	    };
	
	    var createSpine = function createSpine() {
	        _spine = new Spine(spineData);
	
	        if (spec.dir) {
	            that.turnAround(spec.dir);
	        }
	        if (spec.skin) {
	            that.setSkin(spec.skin);
	        }
	
	        _spine.state.onComplete = _onComplete;
	
	        that.node = _spine;
	    };
	    createSpine();
	
	    return that;
	};
	
	exports.default = SpineAnimation;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @namespace PIXI.spine
	 */
	module.exports = PIXI.spine = {
	    Spine:          __webpack_require__(7),
	    SpineRuntime:   __webpack_require__(8),
	    loaders:        __webpack_require__(50)
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(8);
	var atlasParser = __webpack_require__(48);
	
	/* Esoteric Software SPINE wrapper for pixi.js */
	spine.Bone.yDown = true;
	
	/**
	 * A class that enables the you to import and run your spine animations in pixi.
	 * The Spine animation data needs to be loaded using either the Loader or a SpineLoader before it can be used by this class
	 * See example 12 (http://www.goodboydigital.com/pixijs/examples/12/) to see a working example and check out the source
	 *
	 * ```js
	 * var spineAnimation = new PIXI.Spine(spineData);
	 * ```
	 *
	 * @class
	 * @extends Container
	 * @memberof PIXI.spine
	 * @param spineData {object} The spine data loaded from a spine atlas.
	 */
	function Spine(spineData)
	{
	    PIXI.Container.call(this);
	
	    if (!spineData)
	    {
	        throw new Error('The spineData param is required.');
	    }
	
	    if ((typeof spineData) === "string")
	    {
	        throw new Error('spineData param cant be string. Please use PIXI.spine.Spine.fromAtlas("YOUR_RESOURCE_NAME") from now on.');
	    }
	
	    /**
	     * The spineData object
	     *
	     * @member {object}
	     */
	    this.spineData = spineData;
	
	    /**
	     * A spine Skeleton object
	     *
	     * @member {object}
	     */
	    this.skeleton = new spine.Skeleton(spineData);
	    this.skeleton.updateWorldTransform();
	
	    /**
	     * A spine AnimationStateData object created from the spine data passed in the constructor
	     *
	     * @member {object}
	     */
	    this.stateData = new spine.AnimationStateData(spineData);
	
	    /**
	     * A spine AnimationState object created from the spine AnimationStateData object
	     *
	     * @member {object}
	     */
	    this.state = new spine.AnimationState(this.stateData);
	
	    /**
	     * An array of containers
	     *
	     * @member {Container[]}
	     */
	    this.slotContainers = [];
	
	    for (var i = 0, n = this.skeleton.slots.length; i < n; i++)
	    {
	        var slot = this.skeleton.slots[i];
	        var attachment = slot.attachment;
	        var slotContainer = new PIXI.Container();
	        this.slotContainers.push(slotContainer);
	        this.addChild(slotContainer);
	
	        if (attachment instanceof spine.RegionAttachment)
	        {
	            var spriteName = attachment.rendererObject.name;
	            var sprite = this.createSprite(slot, attachment);
	            slot.currentSprite = sprite;
	            slot.currentSpriteName = spriteName;
	            slotContainer.addChild(sprite);
	        }
	        else if (attachment instanceof spine.MeshAttachment)
	        {
	            var mesh = this.createMesh(slot, attachment);
	            slot.currentMesh = mesh;
	            slot.currentMeshName = attachment.name;
	            slotContainer.addChild(mesh);
	        }
	        else
	        {
	            continue;
	        }
	
	    }
	
	    /**
	     * Should the Spine object update its transforms
	     *
	     * @member {boolean}
	     */
	    this.autoUpdate = true;
	}
	
	Spine.fromAtlas = function(resourceName) {
	    var skeletonData = atlasParser.AnimCache[resourceName];
	
	    if (!skeletonData)
	    {
	        throw new Error('Spine data "' + resourceName + '" does not exist in the animation cache');
	    }
	
	    return new Spine(skeletonData);
	}
	
	Spine.prototype = Object.create(PIXI.Container.prototype);
	Spine.prototype.constructor = Spine;
	module.exports = Spine;
	
	Spine.globalAutoUpdate = true;
	
	Object.defineProperties(Spine.prototype, {
	    /**
	     * If this flag is set to true, the spine animation will be autoupdated every time
	     * the object id drawn. The down side of this approach is that the delta time is
	     * automatically calculated and you could miss out on cool effects like slow motion,
	     * pause, skip ahead and the sorts. Most of these effects can be achieved even with
	     * autoupdate enabled but are harder to achieve.
	     *
	     * @member {boolean}
	     * @memberof Spine#
	     * @default true
	     */
	    autoUpdate: {
	        get: function ()
	        {
	            return (this.updateTransform === Spine.prototype.autoUpdateTransform);
	        },
	
	        set: function (value)
	        {
	            this.updateTransform = value ? Spine.prototype.autoUpdateTransform : PIXI.Container.prototype.updateTransform;
	        }
	    }
	});
	
	/**
	 * Update the spine skeleton and its animations by delta time (dt)
	 *
	 * @param dt {number} Delta time. Time by which the animation should be updated
	 */
	Spine.prototype.update = function (dt)
	{
	    this.state.update(dt);
	    this.state.apply(this.skeleton);
	    this.skeleton.updateWorldTransform();
	
	    var drawOrder = this.skeleton.drawOrder;
	    var slots = this.skeleton.slots;
	
	    for (var i = 0, n = drawOrder.length; i < n; i++)
	    {
	        this.children[i] = this.slotContainers[drawOrder[i]];
	    }
	
	    for (i = 0, n = slots.length; i < n; i++)
	    {
	        var slot = slots[i];
	        var attachment = slot.attachment;
	        var slotContainer = this.slotContainers[i];
	
	        if (!attachment)
	        {
	            slotContainer.visible = false;
	            continue;
	        }
	
	        var type = attachment.type;
	        if (type === spine.AttachmentType.region)
	        {
	            if (attachment.rendererObject)
	            {
	                if (!slot.currentSpriteName || slot.currentSpriteName !== attachment.rendererObject.name)
	                {
	                    var spriteName = attachment.rendererObject.name;
	                    if (slot.currentSprite !== undefined)
	                    {
	                        slot.currentSprite.visible = false;
	                    }
	                    slot.sprites = slot.sprites || {};
	                    if (slot.sprites[spriteName] !== undefined)
	                    {
	                        slot.sprites[spriteName].visible = true;
	                    }
	                    else
	                    {
	                        var sprite = this.createSprite(slot, attachment);
	                        slotContainer.addChild(sprite);
	                    }
	                    slot.currentSprite = slot.sprites[spriteName];
	                    slot.currentSpriteName = spriteName;
	                }
	            }
	
	            if (slotContainer.transform ) {
	                //PIXI v4.0
	                if (!slotContainer.transform._dirtyLocal) {
	                    slotContainer.transform = new PIXI.TransformStatic();
	                }
	                var transform = slotContainer.transform;
	                var lt = transform.localTransform;
	                transform._dirtyParentVersion = -1;
	                transform._dirtyLocal = 1;
	                transform._versionLocal = 1;
	                slot.bone.matrix.copy(lt);
	                lt.tx += slot.bone.skeleton.x;
	                lt.ty += slot.bone.skeleton.y;
	            } else {
	                //PIXI v3
	                var lt = slotContainer.localTransform || new PIXI.Matrix();
	                slot.bone.matrix.copy(lt);
	                lt.tx += slot.bone.skeleton.x;
	                lt.ty += slot.bone.skeleton.y;
	                slotContainer.localTransform = lt;
	                slotContainer.displayObjectUpdateTransform = SlotContainerUpdateTransformV3;
	            }
	
	            slot.currentSprite.blendMode = slot.blendMode;
	            slot.currentSprite.tint = PIXI.utils.rgb2hex([slot.r,slot.g,slot.b]);
	        }
	        else if (type === spine.AttachmentType.skinnedmesh || type === spine.AttachmentType.mesh)
	        {
	            if (!slot.currentMeshName || slot.currentMeshName !== attachment.name)
	            {
	                var meshName = attachment.name;
	                if (slot.currentMesh !== undefined)
	                {
	                    slot.currentMesh.visible = false;
	                }
	
	                slot.meshes = slot.meshes || {};
	
	                if (slot.meshes[meshName] !== undefined)
	                {
	                    slot.meshes[meshName].visible = true;
	                }
	                else
	                {
	                    var mesh = this.createMesh(slot, attachment);
	                    slotContainer.addChild(mesh);
	                }
	
	                slot.currentMesh = slot.meshes[meshName];
	                slot.currentMeshName = meshName;
	            }
	            attachment.computeWorldVertices(slot.bone.skeleton.x, slot.bone.skeleton.y, slot, slot.currentMesh.vertices);
	        }
	        else
	        {
	            slotContainer.visible = false;
	            continue;
	        }
	        slotContainer.visible = true;
	
	        slotContainer.alpha = slot.a;
	    }
	};
	
	/**
	 * When autoupdate is set to yes this function is used as pixi's updateTransform function
	 *
	 * @private
	 */
	Spine.prototype.autoUpdateTransform = function ()
	{
	    if (Spine.globalAutoUpdate) {
	        this.lastTime = this.lastTime || Date.now();
	        var timeDelta = (Date.now() - this.lastTime) * 0.001;
	        this.lastTime = Date.now();
	        this.update(timeDelta);
	    } else {
	        this.lastTime = 0;
	    }
	
	    PIXI.Container.prototype.updateTransform.call(this);
	};
	
	/**
	 * Create a new sprite to be used with spine.RegionAttachment
	 *
	 * @param slot {spine.Slot} The slot to which the attachment is parented
	 * @param attachment {spine.RegionAttachment} The attachment that the sprite will represent
	 * @private
	 */
	Spine.prototype.createSprite = function (slot, attachment)
	{
	    var descriptor = attachment.rendererObject;
	    var baseTexture = descriptor.page.rendererObject;
	    var spriteRect = new PIXI.Rectangle(descriptor.x,
	                                        descriptor.y,
	                                        descriptor.rotate ? descriptor.height : descriptor.width,
	                                        descriptor.rotate ? descriptor.width : descriptor.height);
	    var spriteTexture = new PIXI.Texture(baseTexture, spriteRect);
	    var sprite = new PIXI.Sprite(spriteTexture);
	
	    var baseRotation = descriptor.rotate ? Math.PI * 0.5 : 0.0;
	    sprite.scale.x = attachment.width / descriptor.originalWidth * attachment.scaleX;
	    sprite.scale.y = attachment.height / descriptor.originalHeight * attachment.scaleY;
	    sprite.rotation = -baseRotation + (attachment.rotation * spine.degRad);
	    sprite.anchor.x = (0.5 * descriptor.originalWidth - descriptor.offsetX) / descriptor.width;
	    sprite.anchor.y = 1.0 - ((0.5 * descriptor.originalHeight - descriptor.offsetY) / descriptor.height);
	    sprite.position.x = attachment.x;
	    sprite.position.y = attachment.y;
	    sprite.alpha = attachment.a;
	
	    if (descriptor.rotate) {
	        var x1 = sprite.scale.x;
	        sprite.scale.x = sprite.scale.y;
	        sprite.scale.y = x1;
	    }
	    sprite.scale.y = -sprite.scale.y;
	
	    slot.sprites = slot.sprites || {};
	    slot.sprites[descriptor.name] = sprite;
	    return sprite;
	};
	
	/**
	 * Creates a Strip from the spine data
	 * @param slot {spine.Slot} The slot to which the attachment is parented
	 * @param attachment {spine.RegionAttachment} The attachment that the sprite will represent
	 * @private
	 */
	Spine.prototype.createMesh = function (slot, attachment)
	{
	    var descriptor = attachment.rendererObject;
	    var baseTexture = descriptor.page.rendererObject;
	    var texture = new PIXI.Texture(baseTexture);
	
	    var strip = new PIXI.mesh.Mesh(
	        texture,
	        new Float32Array(attachment.uvs.length),
	        new Float32Array(attachment.uvs),
	        new Uint16Array(attachment.triangles),
	        PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
	
	    strip.canvasPadding = 1.5;
	
	    strip.alpha = attachment.a;
	
	    slot.meshes = slot.meshes || {};
	    slot.meshes[attachment.name] = strip;
	
	    return strip;
	};
	
	function SlotContainerUpdateTransformV3()
	{
	    var pt = this.parent.worldTransform;
	    var wt = this.worldTransform;
	    var lt = this.localTransform;
	    wt.a  = lt.a  * pt.a + lt.b  * pt.c;
	    wt.b  = lt.a  * pt.b + lt.b  * pt.d;
	    wt.c  = lt.c  * pt.a + lt.d  * pt.c;
	    wt.d  = lt.c  * pt.b + lt.d  * pt.d;
	    wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
	    wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
	    this.worldAlpha = this.alpha * this.parent.worldAlpha;
	    this._currentBounds = null;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/******************************************************************************
	 * Spine Runtimes Software License
	 * Version 2.1
	 *
	 * Copyright (c) 2013, Esoteric Software
	 * All rights reserved.
	 *
	 * You are granted a perpetual, non-exclusive, non-sublicensable and
	 * non-transferable license to install, execute and perform the Spine Runtimes
	 * Software (the "Software") solely for internal use. Without the written
	 * permission of Esoteric Software (typically granted by licensing Spine), you
	 * may not (a) modify, translate, adapt or otherwise create derivative works,
	 * improvements of the Software or develop new applications using the Software
	 * or (b) remove, delete, alter or obscure any trademarks or any copyright,
	 * trademark, patent or other intellectual property or proprietary rights
	 * notices on or in the Software, including any copy thereof. Redistributions
	 * in binary or source form must include this license and terms.
	 *
	 * THIS SOFTWARE IS PROVIDED BY ESOTERIC SOFTWARE "AS IS" AND ANY EXPRESS OR
	 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
	 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
	 * EVENT SHALL ESOTERIC SOFTARE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
	 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
	 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
	 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
	 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 *****************************************************************************/
	var spine = __webpack_require__(9);
	spine.Animation = __webpack_require__(10);
	spine.AnimationStateData = __webpack_require__(11);
	spine.AnimationState = __webpack_require__(12);
	spine.AtlasAttachmentParser = __webpack_require__(14);
	spine.Atlas = __webpack_require__(20);
	spine.AtlasPage = __webpack_require__(22);
	spine.AtlasReader = __webpack_require__(21);
	spine.AtlasRegion = __webpack_require__(23);
	spine.AttachmentTimeline = __webpack_require__(25);
	spine.AttachmentType = __webpack_require__(16);
	spine.BoneData = __webpack_require__(27);
	spine.Bone = __webpack_require__(28);
	spine.BoundingBoxAttachment = __webpack_require__(19);
	spine.ColorTimeline = __webpack_require__(29);
	spine.Curves = __webpack_require__(26);
	spine.DrawOrderTimeline = __webpack_require__(30);
	spine.EventData = __webpack_require__(31);
	spine.Event = __webpack_require__(32);
	spine.EventTimeline = __webpack_require__(33);
	spine.FfdTimeline = __webpack_require__(34);
	spine.IkConstraintData = __webpack_require__(35);
	spine.IkConstraint = __webpack_require__(36);
	spine.IkConstraintTimeline = __webpack_require__(37);
	spine.MeshAttachment = __webpack_require__(17);
	spine.RegionAttachment = __webpack_require__(15);
	spine.RotateTimeline = __webpack_require__(38);
	spine.ScaleTimeline = __webpack_require__(39);
	spine.SkeletonBounds = __webpack_require__(40);
	spine.SkeletonData = __webpack_require__(41);
	spine.Skeleton = __webpack_require__(42);
	spine.SkeletonJsonParser = __webpack_require__(44);
	spine.Skin = __webpack_require__(46);
	spine.WeightedMeshAttachment = __webpack_require__(18);
	spine.SlotData = __webpack_require__(45);
	spine.Slot = __webpack_require__(43);
	spine.TrackEntry = __webpack_require__(13);
	spine.TranslateTimeline = __webpack_require__(47);
	module.exports = spine;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	    radDeg: 180 / Math.PI,
	    degRad: Math.PI / 180,
	    temp: [],
	    Float32Array: (typeof(Float32Array) === 'undefined') ? Array : Float32Array,
	    Uint16Array: (typeof(Uint16Array) === 'undefined') ? Array : Uint16Array,
	    signum: function(x) {
	        if (x>0) return 1;
	        if (x<0) return -1;
	        return 0;
	    }
	};
	


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Animation = function (name, timelines, duration)
	{
	    this.name = name;
	    this.timelines = timelines;
	    this.duration = duration;
	};
	spine.Animation.prototype = {
	    apply: function (skeleton, lastTime, time, loop, events)
	    {
	        if (loop && this.duration != 0)
	        {
	            time %= this.duration;
	            lastTime %= this.duration;
	        }
	        var timelines = this.timelines;
	        for (var i = 0, n = timelines.length; i < n; i++)
	            timelines[i].apply(skeleton, lastTime, time, events, 1);
	    },
	    mix: function (skeleton, lastTime, time, loop, events, alpha)
	    {
	        if (loop && this.duration != 0)
	        {
	            time %= this.duration;
	            lastTime %= this.duration;
	        }
	        var timelines = this.timelines;
	        for (var i = 0, n = timelines.length; i < n; i++)
	            timelines[i].apply(skeleton, lastTime, time, events, alpha);
	    }
	};
	spine.Animation.binarySearch = function (values, target, step)
	{
	    var low = 0;
	    var high = Math.floor(values.length / step) - 2;
	    if (!high) return step;
	    var current = high >>> 1;
	    while (true)
	    {
	        if (values[(current + 1) * step] <= target)
	            low = current + 1;
	        else
	            high = current;
	        if (low == high) return (low + 1) * step;
	        current = (low + high) >>> 1;
	    }
	};
	spine.Animation.binarySearch1 = function (values, target)
	{
	    var low = 0;
	    var high = values.length - 2;
	    if (!high) return 1;
	    var current = high >>> 1;
	    while (true)
	    {
	        if (values[current + 1] <= target)
	            low = current + 1;
	        else
	            high = current;
	        if (low == high) return low + 1;
	        current = (low + high) >>> 1;
	    }
	};
	spine.Animation.linearSearch = function (values, target, step)
	{
	    for (var i = 0, last = values.length - step; i <= last; i += step)
	        if (values[i] > target) return i;
	    return -1;
	};
	module.exports = spine.Animation;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.AnimationStateData = function (skeletonData)
	{
	    this.skeletonData = skeletonData;
	    this.animationToMixTime = {};
	};
	spine.AnimationStateData.prototype = {
	    defaultMix: 0,
	    setMixByName: function (fromName, toName, duration)
	    {
	        var from = this.skeletonData.findAnimation(fromName);
	        if (!from) throw "Animation not found: " + fromName;
	        var to = this.skeletonData.findAnimation(toName);
	        if (!to) throw "Animation not found: " + toName;
	        this.setMix(from, to, duration);
	    },
	    setMix: function (from, to, duration)
	    {
	        this.animationToMixTime[from.name + ":" + to.name] = duration;
	    },
	    getMix: function (from, to)
	    {
	        var key = from.name + ":" + to.name;
	        return this.animationToMixTime.hasOwnProperty(key) ? this.animationToMixTime[key] : this.defaultMix;
	    }
	};
	module.exports = spine.AnimationStateData;
	


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.TrackEntry = __webpack_require__(13);
	spine.AnimationState = function (stateData)
	{
	    this.data = stateData;
	    this.tracks = [];
	    this.events = [];
	};
	spine.AnimationState.prototype = {
	    onStart: null,
	    onEnd: null,
	    onComplete: null,
	    onEvent: null,
	    timeScale: 1,
	    update: function (delta)
	    {
	        delta *= this.timeScale;
	        for (var i = 0; i < this.tracks.length; i++)
	        {
	            var current = this.tracks[i];
	            if (!current) continue;
	
	            current.time += delta * current.timeScale;
	            if (current.previous)
	            {
	                var previousDelta = delta * current.previous.timeScale;
	                current.previous.time += previousDelta;
	                current.mixTime += previousDelta;
	            }
	
	            var next = current.next;
	            if (next)
	            {
	                next.time = current.lastTime - next.delay;
	                if (next.time >= 0) this.setCurrent(i, next);
	            } else {
	                // End non-looping animation when it reaches its end time and there is no next entry.
	                if (!current.loop && current.lastTime >= current.endTime) this.clearTrack(i);
	            }
	        }
	    },
	    apply: function (skeleton)
	    {
	        skeleton.resetDrawOrder();
	
	        for (var i = 0; i < this.tracks.length; i++)
	        {
	            var current = this.tracks[i];
	            if (!current) continue;
	
	            this.events.length = 0;
	
	            var time = current.time;
	            var lastTime = current.lastTime;
	            var endTime = current.endTime;
	            var loop = current.loop;
	            if (!loop && time > endTime) time = endTime;
	
	            var previous = current.previous;
	            if (!previous)
	            {
	                if (current.mix == 1)
	                    current.animation.apply(skeleton, current.lastTime, time, loop, this.events);
	                else
	                    current.animation.mix(skeleton, current.lastTime, time, loop, this.events, current.mix);
	            } else {
	                var previousTime = previous.time;
	                if (!previous.loop && previousTime > previous.endTime) previousTime = previous.endTime;
	                previous.animation.apply(skeleton, previousTime, previousTime, previous.loop, null);
	
	                var alpha = current.mixTime / current.mixDuration * current.mix;
	                if (alpha >= 1)
	                {
	                    alpha = 1;
	                    current.previous = null;
	                }
	                current.animation.mix(skeleton, current.lastTime, time, loop, this.events, alpha);
	            }
	
	            for (var ii = 0, nn = this.events.length; ii < nn; ii++)
	            {
	                var event = this.events[ii];
	                if (current.onEvent) current.onEvent(i, event);
	                if (this.onEvent) this.onEvent(i, event);
	            }
	
	            // Check if completed the animation or a loop iteration.
	            if (loop ? (lastTime % endTime > time % endTime) : (lastTime < endTime && time >= endTime))
	            {
	                var count = Math.floor(time / endTime);
	                if (current.onComplete) current.onComplete(i, count);
	                if (this.onComplete) this.onComplete(i, count);
	            }
	
	            current.lastTime = current.time;
	        }
	    },
	    clearTracks: function ()
	    {
	        for (var i = 0, n = this.tracks.length; i < n; i++)
	            this.clearTrack(i);
	        this.tracks.length = 0;
	    },
	    clearTrack: function (trackIndex)
	    {
	        if (trackIndex >= this.tracks.length) return;
	        var current = this.tracks[trackIndex];
	        if (!current) return;
	
	        if (current.onEnd) current.onEnd(trackIndex);
	        if (this.onEnd) this.onEnd(trackIndex);
	
	        this.tracks[trackIndex] = null;
	    },
	    _expandToIndex: function (index)
	    {
	        if (index < this.tracks.length) return this.tracks[index];
	        while (index >= this.tracks.length)
	            this.tracks.push(null);
	        return null;
	    },
	    setCurrent: function (index, entry)
	    {
	        var current = this._expandToIndex(index);
	        if (current)
	        {
	            var previous = current.previous;
	            current.previous = null;
	
	            if (current.onEnd) current.onEnd(index);
	            if (this.onEnd) this.onEnd(index);
	
	            entry.mixDuration = this.data.getMix(current.animation, entry.animation);
	            if (entry.mixDuration > 0)
	            {
	                entry.mixTime = 0;
	                // If a mix is in progress, mix from the closest animation.
	                if (previous && current.mixTime / current.mixDuration < 0.5)
	                    entry.previous = previous;
	                else
	                    entry.previous = current;
	            }
	        }
	
	        this.tracks[index] = entry;
	
	        if (entry.onStart) entry.onStart(index);
	        if (this.onStart) this.onStart(index);
	    },
	    setAnimationByName: function (trackIndex, animationName, loop)
	    {
	        var animation = this.data.skeletonData.findAnimation(animationName);
	        if (!animation) throw "Animation not found: " + animationName;
	        return this.setAnimation(trackIndex, animation, loop);
	    },
	    /** Set the current animation. Any queued animations are cleared. */
	    setAnimation: function (trackIndex, animation, loop)
	    {
	        var entry = new spine.TrackEntry();
	        entry.animation = animation;
	        entry.loop = loop;
	        entry.endTime = animation.duration;
	        this.setCurrent(trackIndex, entry);
	        return entry;
	    },
	    addAnimationByName: function (trackIndex, animationName, loop, delay)
	    {
	        var animation = this.data.skeletonData.findAnimation(animationName);
	        if (!animation) throw "Animation not found: " + animationName;
	        return this.addAnimation(trackIndex, animation, loop, delay);
	    },
	    /** Adds an animation to be played delay seconds after the current or last queued animation.
	     * @param delay May be <= 0 to use duration of previous animation minus any mix duration plus the negative delay. */
	    addAnimation: function (trackIndex, animation, loop, delay)
	    {
	        var entry = new spine.TrackEntry();
	        entry.animation = animation;
	        entry.loop = loop;
	        entry.endTime = animation.duration;
	
	        var last = this._expandToIndex(trackIndex);
	        if (last)
	        {
	            while (last.next)
	                last = last.next;
	            last.next = entry;
	        } else
	            this.tracks[trackIndex] = entry;
	
	        if (delay <= 0)
	        {
	            if (last)
	                delay += last.endTime - this.data.getMix(last.animation, animation);
	            else
	                delay = 0;
	        }
	        entry.delay = delay;
	
	        return entry;
	    },
	    /** May be null. */
	    getCurrent: function (trackIndex)
	    {
	        if (trackIndex >= this.tracks.length) return null;
	        return this.tracks[trackIndex];
	    }
	};
	module.exports = spine.AnimationState;
	


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.TrackEntry = function ()
	{};
	spine.TrackEntry.prototype = {
	    next: null, previous: null,
	    animation: null,
	    loop: false,
	    delay: 0, time: 0, lastTime: -1, endTime: 0,
	    timeScale: 1,
	    mixTime: 0, mixDuration: 0, mix: 1,
	    onStart: null, onEnd: null, onComplete: null, onEvent: null
	};
	module.exports = spine.TrackEntry;
	


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.RegionAttachment = __webpack_require__(15);
	spine.MeshAttachment = __webpack_require__(17);
	spine.WeightedMeshAttachment = __webpack_require__(18);
	spine.BoundingBoxAttachment = __webpack_require__(19);
	spine.AtlasAttachmentParser = function (atlas)
	{
	    this.atlas = atlas;
	};
	spine.AtlasAttachmentParser.prototype = {
	    newRegionAttachment: function (skin, name, path)
	    {
	        var region = this.atlas.findRegion(path);
	        if (!region) throw "Region not found in atlas: " + path + " (region attachment: " + name + ")";
	        var attachment = new spine.RegionAttachment(name);
	        attachment.rendererObject = region;
	        attachment.setUVs(region.u, region.v, region.u2, region.v2, region.rotate);
	        attachment.regionOffsetX = region.offsetX;
	        attachment.regionOffsetY = region.offsetY;
	        attachment.regionWidth = region.width;
	        attachment.regionHeight = region.height;
	        attachment.regionOriginalWidth = region.originalWidth;
	        attachment.regionOriginalHeight = region.originalHeight;
	        return attachment;
	    },
	    newMeshAttachment: function (skin, name, path)
	    {
	        var region = this.atlas.findRegion(path);
	        if (!region) throw "Region not found in atlas: " + path + " (mesh attachment: " + name + ")";
	        var attachment = new spine.MeshAttachment(name);
	        attachment.rendererObject = region;
	        attachment.regionU = region.u;
	        attachment.regionV = region.v;
	        attachment.regionU2 = region.u2;
	        attachment.regionV2 = region.v2;
	        attachment.regionRotate = region.rotate;
	        attachment.regionOffsetX = region.offsetX;
	        attachment.regionOffsetY = region.offsetY;
	        attachment.regionWidth = region.width;
	        attachment.regionHeight = region.height;
	        attachment.regionOriginalWidth = region.originalWidth;
	        attachment.regionOriginalHeight = region.originalHeight;
	        return attachment;
	    },
	    newWeightedMeshAttachment: function (skin, name, path)
	    {
	        var region = this.atlas.findRegion(path);
	        if (!region) throw "Region not found in atlas: " + path + " (skinned mesh attachment: " + name + ")";
	        var attachment = new spine.WeightedMeshAttachment(name);
	        attachment.rendererObject = region;
	        attachment.regionU = region.u;
	        attachment.regionV = region.v;
	        attachment.regionU2 = region.u2;
	        attachment.regionV2 = region.v2;
	        attachment.regionRotate = region.rotate;
	        attachment.regionOffsetX = region.offsetX;
	        attachment.regionOffsetY = region.offsetY;
	        attachment.regionWidth = region.width;
	        attachment.regionHeight = region.height;
	        attachment.regionOriginalWidth = region.originalWidth;
	        attachment.regionOriginalHeight = region.originalHeight;
	        return attachment;
	    },
	    newBoundingBoxAttachment: function (skin, name)
	    {
	        return new spine.BoundingBoxAttachment(name);
	    }
	};
	module.exports = spine.AtlasAttachmentParser;
	


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.AttachmentType = __webpack_require__(16);
	spine.RegionAttachment = function (name)
	{
	    this.name = name;
	    this.offset = [];
	    this.offset.length = 8;
	    this.uvs = [];
	    this.uvs.length = 8;
	};
	spine.RegionAttachment.prototype = {
	    type: spine.AttachmentType.region,
	    x: 0, y: 0,
	    rotation: 0,
	    scaleX: 1, scaleY: 1,
	    width: 0, height: 0,
	    r: 1, g: 1, b: 1, a: 1,
	    path: null,
	    rendererObject: null,
	    regionOffsetX: 0, regionOffsetY: 0,
	    regionWidth: 0, regionHeight: 0,
	    regionOriginalWidth: 0, regionOriginalHeight: 0,
	    setUVs: function (u, v, u2, v2, rotate)
	    {
	        var uvs = this.uvs;
	        if (rotate)
	        {
	            uvs[2/*X2*/] = u;
	            uvs[3/*Y2*/] = v2;
	            uvs[4/*X3*/] = u;
	            uvs[5/*Y3*/] = v;
	            uvs[6/*X4*/] = u2;
	            uvs[7/*Y4*/] = v;
	            uvs[0/*X1*/] = u2;
	            uvs[1/*Y1*/] = v2;
	        } else {
	            uvs[0/*X1*/] = u;
	            uvs[1/*Y1*/] = v2;
	            uvs[2/*X2*/] = u;
	            uvs[3/*Y2*/] = v;
	            uvs[4/*X3*/] = u2;
	            uvs[5/*Y3*/] = v;
	            uvs[6/*X4*/] = u2;
	            uvs[7/*Y4*/] = v2;
	        }
	    },
	    updateOffset: function ()
	    {
	        var regionScaleX = this.width / this.regionOriginalWidth * this.scaleX;
	        var regionScaleY = this.height / this.regionOriginalHeight * this.scaleY;
	        var localX = -this.width / 2 * this.scaleX + this.regionOffsetX * regionScaleX;
	        var localY = -this.height / 2 * this.scaleY + this.regionOffsetY * regionScaleY;
	        var localX2 = localX + this.regionWidth * regionScaleX;
	        var localY2 = localY + this.regionHeight * regionScaleY;
	        var radians = this.rotation * spine.degRad;
	        var cos = Math.cos(radians);
	        var sin = Math.sin(radians);
	        var localXCos = localX * cos + this.x;
	        var localXSin = localX * sin;
	        var localYCos = localY * cos + this.y;
	        var localYSin = localY * sin;
	        var localX2Cos = localX2 * cos + this.x;
	        var localX2Sin = localX2 * sin;
	        var localY2Cos = localY2 * cos + this.y;
	        var localY2Sin = localY2 * sin;
	        var offset = this.offset;
	        offset[0/*X1*/] = localXCos - localYSin;
	        offset[1/*Y1*/] = localYCos + localXSin;
	        offset[2/*X2*/] = localXCos - localY2Sin;
	        offset[3/*Y2*/] = localY2Cos + localXSin;
	        offset[4/*X3*/] = localX2Cos - localY2Sin;
	        offset[5/*Y3*/] = localY2Cos + localX2Sin;
	        offset[6/*X4*/] = localX2Cos - localYSin;
	        offset[7/*Y4*/] = localYCos + localX2Sin;
	    },
	    computeVertices: function (x, y, bone, vertices)
	    {
	        x += bone.worldX;
	        y += bone.worldY;
	        var m00 = bone.matrix.a, m01 = bone.matrix.c, m10 = bone.matrix.b, m11 = bone.matrix.d;
	        var offset = this.offset;
	        vertices[0/*X1*/] = offset[0/*X1*/] * m00 + offset[1/*Y1*/] * m01 + x;
	        vertices[1/*Y1*/] = offset[0/*X1*/] * m10 + offset[1/*Y1*/] * m11 + y;
	        vertices[2/*X2*/] = offset[2/*X2*/] * m00 + offset[3/*Y2*/] * m01 + x;
	        vertices[3/*Y2*/] = offset[2/*X2*/] * m10 + offset[3/*Y2*/] * m11 + y;
	        vertices[4/*X3*/] = offset[4/*X3*/] * m00 + offset[5/*X3*/] * m01 + x;
	        vertices[5/*X3*/] = offset[4/*X3*/] * m10 + offset[5/*X3*/] * m11 + y;
	        vertices[6/*X4*/] = offset[6/*X4*/] * m00 + offset[7/*Y4*/] * m01 + x;
	        vertices[7/*Y4*/] = offset[6/*X4*/] * m10 + offset[7/*Y4*/] * m11 + y;
	    }
	};
	module.exports = spine.RegionAttachment;
	


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.AttachmentType = {
	    region: 0,
	    boundingbox: 1,
	    mesh: 2,
	    weightedmesh : 3,
	    skinnedmesh: 3,
	    linkedmesh: 4,
	    weightedlinkedmesh: 5
	};
	module.exports = spine.AttachmentType;
	


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9) || {};
	spine.AttachmentType = __webpack_require__(16);
	spine.MeshAttachment = function (name)
	{
	    this.name = name;
	};
	spine.MeshAttachment.prototype = {
	    type: spine.AttachmentType.mesh,
	    parentMesh: null,
	    inheritFFD: false,
	    vertices: null,
	    uvs: null,
	    regionUVs: null,
	    triangles: null,
	    hullLength: 0,
	    r: 1, g: 1, b: 1, a: 1,
	    path: null,
	    rendererObject: null,
	    regionU: 0, regionV: 0, regionU2: 0, regionV2: 0, regionRotate: false,
	    regionOffsetX: 0, regionOffsetY: 0,
	    regionWidth: 0, regionHeight: 0,
	    regionOriginalWidth: 0, regionOriginalHeight: 0,
	    edges: null,
	    width: 0, height: 0,
	    updateUVs: function ()
	    {
	        var width = this.regionU2 - this.regionU, height = this.regionV2 - this.regionV;
	        var n = this.regionUVs.length;
	        if (!this.uvs || this.uvs.length != n)
	        {
	            this.uvs = new spine.Float32Array(n);
	        }
	        if (this.regionRotate)
	        {
	            for (var i = 0; i < n; i += 2)
	            {
	                this.uvs[i] = this.regionU + this.regionUVs[i + 1] * width;
	                this.uvs[i + 1] = this.regionV + height - this.regionUVs[i] * height;
	            }
	        } else {
	            for (var i = 0; i < n; i += 2)
	            {
	                this.uvs[i] = this.regionU + this.regionUVs[i] * width;
	                this.uvs[i + 1] = this.regionV + this.regionUVs[i + 1] * height;
	            }
	        }
	    },
	    computeWorldVertices: function (x, y, slot, worldVertices)
	    {
	        var bone = slot.bone;
	        x += bone.worldX;
	        y += bone.worldY;
	        var m00 = bone.matrix.a, m01 = bone.matrix.c, m10 = bone.matrix.b, m11 = bone.matrix.d;
	        var vertices = this.vertices;
	        var verticesCount = vertices.length;
	        if (slot.attachmentVertices.length == verticesCount) vertices = slot.attachmentVertices;
	        for (var i = 0; i < verticesCount; i += 2)
	        {
	            var vx = vertices[i];
	            var vy = vertices[i + 1];
	            worldVertices[i] = vx * m00 + vy * m01 + x;
	            worldVertices[i + 1] = vx * m10 + vy * m11 + y;
	        }
	    },
	    applyFFD: function(sourceAttachment) {
	        return this === sourceAttachment || (this.inheritFFD && parentMesh === sourceAttachment);
	    },
	    setParentMesh: function(parentMesh) {
	        this.parentMesh = parentMesh;
	        if (parentMesh != null) {
	            this.vertices = parentMesh.vertices;
	            this.regionUVs = parentMesh.regionUVs;
	            this.triangles = parentMesh.triangles;
	            this.hullLength = parentMesh.hullLength;
	        }
	    }
	};
	module.exports = spine.MeshAttachment;
	


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9) || {};
	spine.AttachmentType = __webpack_require__(16);
	spine.WeightedMeshAttachment = function (name)
	{
	    this.name = name;
	};
	spine.WeightedMeshAttachment.prototype = {
	    type: spine.AttachmentType.weightedmesh,
	    parentMesh: null,
	    inheritFFD: false,
	    bones: null,
	    weights: null,
	    uvs: null,
	    regionUVs: null,
	    triangles: null,
	    hullLength: 0,
	    r: 1, g: 1, b: 1, a: 1,
	    path: null,
	    rendererObject: null,
	    regionU: 0, regionV: 0, regionU2: 0, regionV2: 0, regionRotate: false,
	    regionOffsetX: 0, regionOffsetY: 0,
	    regionWidth: 0, regionHeight: 0,
	    regionOriginalWidth: 0, regionOriginalHeight: 0,
	    edges: null,
	    width: 0, height: 0,
	    updateUVs: function (u, v, u2, v2, rotate)
	    {
	        var width = this.regionU2 - this.regionU, height = this.regionV2 - this.regionV;
	        var n = this.regionUVs.length;
	        if (!this.uvs || this.uvs.length != n)
	        {
	            this.uvs = new spine.Float32Array(n);
	        }
	        if (this.regionRotate)
	        {
	            for (var i = 0; i < n; i += 2)
	            {
	                this.uvs[i] = this.regionU + this.regionUVs[i + 1] * width;
	                this.uvs[i + 1] = this.regionV + height - this.regionUVs[i] * height;
	            }
	        } else {
	            for (var i = 0; i < n; i += 2)
	            {
	                this.uvs[i] = this.regionU + this.regionUVs[i] * width;
	                this.uvs[i + 1] = this.regionV + this.regionUVs[i + 1] * height;
	            }
	        }
	    },
	    computeWorldVertices: function (x, y, slot, worldVertices)
	    {
	        var skeletonBones = slot.bone.skeleton.bones;
	        var weights = this.weights;
	        var bones = this.bones;
	
	        var w = 0, v = 0, b = 0, f = 0, n = bones.length, nn;
	        var wx, wy, vx, vy, weight;
	        var m;
	        if (!slot.attachmentVertices.length)
	        {
	            for (; v < n; w += 2)
	            {
	                wx = 0;
	                wy = 0;
	                nn = bones[v++] + v;
	                for (; v < nn; v++, b += 3)
	                {
	                    m = skeletonBones[bones[v]].matrix;
	                    vx = weights[b];
	                    vy = weights[b + 1];
	                    weight = weights[b + 2];
	                    wx += (vx * m.a + vy * m.c + m.tx) * weight;
	                    wy += (vx * m.b + vy * m.d + m.ty) * weight;
	                }
	                worldVertices[w] = wx + x;
	                worldVertices[w + 1] = wy + y;
	            }
	        } else {
	            var ffd = slot.attachmentVertices;
	            for (; v < n; w += 2)
	            {
	                wx = 0;
	                wy = 0;
	                nn = bones[v++] + v;
	                for (; v < nn; v++, b += 3, f += 2)
	                {
	                    m = skeletonBones[bones[v]].matrix;
	                    vx = weights[b] + ffd[f];
	                    vy = weights[b + 1] + ffd[f + 1];
	                    weight = weights[b + 2];
	                    wx += (vx * m.a + vy * m.c + m.tx) * weight;
	                    wy += (vx * m.b + vy * m.d + m.ty) * weight;
	                }
	                worldVertices[w] = wx + x;
	                worldVertices[w + 1] = wy + y;
	            }
	        }
	    },
	    applyFFD: function(sourceAttachment) {
	        return this === sourceAttachment || (this.inheritFFD && parentMesh === sourceAttachment);
	    },
	    setParentMesh: function(parentMesh) {
	        this.parentMesh = parentMesh;
	        if (parentMesh != null) {
	            this.bones = parentMesh.bones;
	            this.weights = parentMesh.weights;
	            this.regionUVs = parentMesh.regionUVs;
	            this.triangles = parentMesh.triangles;
	            this.hullLength = parentMesh.hullLength;
	        }
	    }
	};
	module.exports = spine.WeightedMeshAttachment;
	


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.AttachmentType = __webpack_require__(16);
	spine.BoundingBoxAttachment = function (name)
	{
	    this.name = name;
	    this.vertices = [];
	};
	spine.BoundingBoxAttachment.prototype = {
	    type: spine.AttachmentType.boundingbox,
	    computeWorldVertices: function (x, y, bone, worldVertices)
	    {
	        x += bone.worldX;
	        y += bone.worldY;
	        var m00 = bone.a, m01 = bone.c, m10 = bone.b, m11 = bone.d;
	        var vertices = this.vertices;
	        for (var i = 0, n = vertices.length; i < n; i += 2)
	        {
	            var px = vertices[i];
	            var py = vertices[i + 1];
	            worldVertices[i] = px * m00 + py * m01 + x;
	            worldVertices[i + 1] = px * m10 + py * m11 + y;
	        }
	    }
	};
	module.exports = spine.BoundingBoxAttachment;
	


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.AtlasReader = __webpack_require__(21);
	spine.AtlasPage = __webpack_require__(22);
	spine.AtlasRegion = __webpack_require__(23);
	var syncImageLoaderAdapter = __webpack_require__(24)
	
	spine.Atlas = function (atlasText, loaderFunction, callback)
	{
	    //TODO: remove this legacy later
	    if (typeof loaderFunction !== "function") {
	        //old syntax
	        var baseUrl = loaderFunction;
	        var crossOrigin = callback;
	        loaderFunction = syncImageLoaderAdapter(baseUrl, crossOrigin);
	        callback = null;
	    }
	
	    this.pages = [];
	    this.regions = [];
	
	    this.texturesLoading = 0;
	
	    var self = this;
	
	    var reader = new spine.AtlasReader(atlasText);
	    var tuple = [];
	    tuple.length = 4;
	    var page = null;
	
	    iterateParser();
	
	    function iterateParser() {
	        while (true) {
	            var line = reader.readLine();
	            if (line === null) {
	                return callback && callback(self);
	            }
	            line = reader.trim(line);
	            if (!line.length)
	                page = null;
	            else if (!page) {
	                page = new spine.AtlasPage();
	                page.name = line;
	
	                if (reader.readTuple(tuple) == 2) { // size is only optional for an atlas packed with an old TexturePacker.
	                    page.width = parseInt(tuple[0]);
	                    page.height = parseInt(tuple[1]);
	                    reader.readTuple(tuple);
	                } else {
	                    //old format, detect width and height by texture
	                }
	                page.format = spine.Atlas.Format[tuple[0]];
	
	                reader.readTuple(tuple);
	                page.minFilter = spine.Atlas.TextureFilter[tuple[0]];
	                page.magFilter = spine.Atlas.TextureFilter[tuple[1]];
	
	                var direction = reader.readValue();
	                page.uWrap = spine.Atlas.TextureWrap.clampToEdge;
	                page.vWrap = spine.Atlas.TextureWrap.clampToEdge;
	                if (direction == "x")
	                    page.uWrap = spine.Atlas.TextureWrap.repeat;
	                else if (direction == "y")
	                    page.vWrap = spine.Atlas.TextureWrap.repeat;
	                else if (direction == "xy")
	                    page.uWrap = page.vWrap = spine.Atlas.TextureWrap.repeat;
	
	                // @ivanpopelyshev: I so want to use generators and "yield()" here, or at least promises
	                loaderFunction(line, function (texture) {
	                    page.rendererObject = texture;
	                    self.pages.push(page);
	                    if (!page.width || !page.height) {
	                        page.width = texture.width;
	                        page.height = texture.height;
	                        if (!page.width || !page.height) {
	                            console.log("ERROR spine atlas page " + page.name + ": meshes wont work if you dont specify size in atlas (http://www.html5gamedevs.com/topic/18888-pixi-spines-and-meshes/?p=107121)");
	                        }
	                    }
	                    iterateParser();
	                });
	                break;
	            } else {
	                var region = new spine.AtlasRegion();
	                region.name = line;
	                region.page = page;
	
	                region.rotate = reader.readValue() == "true";
	
	                reader.readTuple(tuple);
	                var x = parseInt(tuple[0]);
	                var y = parseInt(tuple[1]);
	
	                reader.readTuple(tuple);
	                var width = parseInt(tuple[0]);
	                var height = parseInt(tuple[1]);
	
	                region.u = x / page.width;
	                region.v = y / page.height;
	                if (region.rotate) {
	                    region.u2 = (x + height) / page.width;
	                    region.v2 = (y + width) / page.height;
	                } else {
	                    region.u2 = (x + width) / page.width;
	                    region.v2 = (y + height) / page.height;
	                }
	                //detected resolution
	                var resolution = page.rendererObject.resolution;
	                region.x = x / resolution;
	                region.y = y / resolution;
	                region.width = Math.abs(width) / resolution;
	                region.height = Math.abs(height) / resolution;
	
	                if (reader.readTuple(tuple) == 4) { // split is optional
	                    region.splits = [parseInt(tuple[0]), parseInt(tuple[1]), parseInt(tuple[2]), parseInt(tuple[3])];
	
	                    if (reader.readTuple(tuple) == 4) { // pad is optional, but only present with splits
	                        region.pads = [parseInt(tuple[0]), parseInt(tuple[1]), parseInt(tuple[2]), parseInt(tuple[3])];
	
	                        reader.readTuple(tuple);
	                    }
	                }
	
	                region.originalWidth = parseInt(tuple[0]) / resolution;
	                region.originalHeight = parseInt(tuple[1]) / resolution;
	
	                reader.readTuple(tuple);
	                region.offsetX = parseInt(tuple[0]) / resolution;
	                region.offsetY = parseInt(tuple[1]) / resolution;
	
	                region.index = parseInt(reader.readValue());
	
	                self.regions.push(region);
	            }
	        }
	    }
	};
	spine.Atlas.prototype = {
	    findRegion: function (name)
	    {
	        var regions = this.regions;
	        for (var i = 0, n = regions.length; i < n; i++)
	            if (regions[i].name == name) return regions[i];
	        return null;
	    },
	    dispose: function ()
	    {
	        var pages = this.pages;
	        for (var i = 0, n = pages.length; i < n; i++)
	            pages[i].rendererObject.destroy(true);
	    },
	    updateUVs: function (page)
	    {
	        var regions = this.regions;
	        for (var i = 0, n = regions.length; i < n; i++)
	        {
	            var region = regions[i];
	            if (region.page != page) continue;
	            region.u = region.x / page.width;
	            region.v = region.y / page.height;
	            if (region.rotate)
	            {
	                region.u2 = (region.x + region.height) / page.width;
	                region.v2 = (region.y + region.width) / page.height;
	            } else {
	                region.u2 = (region.x + region.width) / page.width;
	                region.v2 = (region.y + region.height) / page.height;
	            }
	        }
	    }
	};
	
	spine.Atlas.Format = {
	    alpha: 0,
	    intensity: 1,
	    luminanceAlpha: 2,
	    rgb565: 3,
	    rgba4444: 4,
	    rgb888: 5,
	    rgba8888: 6
	};
	
	spine.Atlas.TextureFilter = {
	    nearest: 0,
	    linear: 1,
	    mipMap: 2,
	    mipMapNearestNearest: 3,
	    mipMapLinearNearest: 4,
	    mipMapNearestLinear: 5,
	    mipMapLinearLinear: 6
	};
	
	spine.Atlas.TextureWrap = {
	    mirroredRepeat: 0,
	    clampToEdge: 1,
	    repeat: 2
	};
	module.exports = spine.Atlas;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.AtlasReader = function (text)
	{
	    this.lines = text.split(/\r\n|\r|\n/);
	};
	spine.AtlasReader.prototype = {
	    index: 0,
	    trim: function (value)
	    {
	        return value.replace(/^\s+|\s+$/g, "");
	    },
	    readLine: function ()
	    {
	        if (this.index >= this.lines.length) return null;
	        return this.lines[this.index++];
	    },
	    readValue: function ()
	    {
	        var line = this.readLine();
	        var colon = line.indexOf(":");
	        if (colon == -1) throw "Invalid line: " + line;
	        return this.trim(line.substring(colon + 1));
	    },
	    /** Returns the number of tuple values read (1, 2 or 4). */
	    readTuple: function (tuple)
	    {
	        var line = this.readLine();
	        var colon = line.indexOf(":");
	        if (colon == -1) throw "Invalid line: " + line;
	        var i = 0, lastMatch = colon + 1;
	        for (; i < 3; i++)
	        {
	            var comma = line.indexOf(",", lastMatch);
	            if (comma == -1) break;
	            tuple[i] = this.trim(line.substr(lastMatch, comma - lastMatch));
	            lastMatch = comma + 1;
	        }
	        tuple[i] = this.trim(line.substring(lastMatch));
	        return i + 1;
	    }
	};
	module.exports = spine.AtlasReader;
	


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.AtlasPage = function ()
	{};
	spine.AtlasPage.prototype = {
	    name: null,
	    format: null,
	    minFilter: null,
	    magFilter: null,
	    uWrap: null,
	    vWrap: null,
	    rendererObject: null,
	    width: 0,
	    height: 0
	};
	module.exports = spine.AtlasPage;
	


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.AtlasRegion = function ()
	{};
	spine.AtlasRegion.prototype = {
	    page: null,
	    name: null,
	    x: 0, y: 0,
	    width: 0, height: 0,
	    u: 0, v: 0, u2: 0, v2: 0,
	    offsetX: 0, offsetY: 0,
	    originalWidth: 0, originalHeight: 0,
	    index: 0,
	    rotate: false,
	    splits: null,
	    pads: null
	};
	module.exports = spine.AtlasRegion;
	


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(8);
	
	module.exports = function (baseUrl, crossOrigin) {
	    if (baseUrl && baseUrl.lastIndexOf('/') !== (baseUrl.length-1))
	    {
	        baseUrl += '/';
	    }
	    return function(line, callback) {
	        callback(PIXI.BaseTexture.fromImage(line, crossOrigin));
	    }
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Curves = __webpack_require__(26);
	spine.Animation = __webpack_require__(10);
	spine.AttachmentTimeline = function (frameCount)
	{
	    this.curves = new spine.Curves(frameCount);
	    this.frames = []; // time, ...
	    this.frames.length = frameCount;
	    this.attachmentNames = [];
	    this.attachmentNames.length = frameCount;
	};
	spine.AttachmentTimeline.prototype = {
	    slotIndex: 0,
	    getFrameCount: function ()
	    {
	        return this.frames.length;
	    },
	    setFrame: function (frameIndex, time, attachmentName)
	    {
	        this.frames[frameIndex] = time;
	        this.attachmentNames[frameIndex] = attachmentName;
	    },
	    apply: function (skeleton, lastTime, time, firedEvents, alpha)
	    {
	        var frames = this.frames;
	        if (time < frames[0])
	        {
	            if (lastTime > time) this.apply(skeleton, lastTime, Number.MAX_VALUE, null, 0);
	            return;
	        } else if (lastTime > time) //
	            lastTime = -1;
	
	        var frameIndex = time >= frames[frames.length - 1] ? frames.length - 1 : spine.Animation.binarySearch1(frames, time) - 1;
	        if (frames[frameIndex] < lastTime) return;
	
	        var attachmentName = this.attachmentNames[frameIndex];
	        skeleton.slots[this.slotIndex].setAttachment(
	            !attachmentName ? null : skeleton.getAttachmentBySlotIndex(this.slotIndex, attachmentName));
	    }
	};
	module.exports = spine.AttachmentTimeline;
	


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Curves = function (frameCount)
	{
	    this.curves = []; // type, x, y, ...
	    //this.curves.length = (frameCount - 1) * 19/*BEZIER_SIZE*/;
	};
	spine.Curves.prototype = {
	    setLinear: function (frameIndex)
	    {
	        this.curves[frameIndex * 19/*BEZIER_SIZE*/] = 0/*LINEAR*/;
	    },
	    setStepped: function (frameIndex)
	    {
	        this.curves[frameIndex * 19/*BEZIER_SIZE*/] = 1/*STEPPED*/;
	    },
	    /** Sets the control handle positions for an interpolation bezier curve used to transition from this keyframe to the next.
	     * cx1 and cx2 are from 0 to 1, representing the percent of time between the two keyframes. cy1 and cy2 are the percent of
	     * the difference between the keyframe's values. */
	    setCurve: function (frameIndex, cx1, cy1, cx2, cy2)
	    {
	        var subdiv1 = 1 / 10/*BEZIER_SEGMENTS*/, subdiv2 = subdiv1 * subdiv1, subdiv3 = subdiv2 * subdiv1;
	        var pre1 = 3 * subdiv1, pre2 = 3 * subdiv2, pre4 = 6 * subdiv2, pre5 = 6 * subdiv3;
	        var tmp1x = -cx1 * 2 + cx2, tmp1y = -cy1 * 2 + cy2, tmp2x = (cx1 - cx2) * 3 + 1, tmp2y = (cy1 - cy2) * 3 + 1;
	        var dfx = cx1 * pre1 + tmp1x * pre2 + tmp2x * subdiv3, dfy = cy1 * pre1 + tmp1y * pre2 + tmp2y * subdiv3;
	        var ddfx = tmp1x * pre4 + tmp2x * pre5, ddfy = tmp1y * pre4 + tmp2y * pre5;
	        var dddfx = tmp2x * pre5, dddfy = tmp2y * pre5;
	
	        var i = frameIndex * 19/*BEZIER_SIZE*/;
	        var curves = this.curves;
	        curves[i++] = 2/*BEZIER*/;
	
	        var x = dfx, y = dfy;
	        for (var n = i + 19/*BEZIER_SIZE*/ - 1; i < n; i += 2)
	        {
	            curves[i] = x;
	            curves[i + 1] = y;
	            dfx += ddfx;
	            dfy += ddfy;
	            ddfx += dddfx;
	            ddfy += dddfy;
	            x += dfx;
	            y += dfy;
	        }
	    },
	    getCurvePercent: function (frameIndex, percent)
	    {
	        percent = percent < 0 ? 0 : (percent > 1 ? 1 : percent);
	        var curves = this.curves;
	        var i = frameIndex * 19/*BEZIER_SIZE*/;
	        var type = curves[i];
	        if (type === 0/*LINEAR*/) return percent;
	        if (type == 1/*STEPPED*/) return 0;
	        i++;
	        var x = 0;
	        for (var start = i, n = i + 19/*BEZIER_SIZE*/ - 1; i < n; i += 2)
	        {
	            x = curves[i];
	            if (x >= percent)
	            {
	                var prevX, prevY;
	                if (i == start)
	                {
	                    prevX = 0;
	                    prevY = 0;
	                } else {
	                    prevX = curves[i - 2];
	                    prevY = curves[i - 1];
	                }
	                return prevY + (curves[i + 1] - prevY) * (percent - prevX) / (x - prevX);
	            }
	        }
	        var y = curves[i - 1];
	        return y + (1 - y) * (percent - x) / (1 - x); // Last point is 1,1.
	    }
	};
	module.exports = spine.Curves;
	


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.BoneData = function (name, parent)
	{
	    this.name = name;
	    this.parent = parent;
	};
	spine.BoneData.prototype = {
	    length: 0,
	    x: 0, y: 0,
	    rotation: 0,
	    scaleX: 1, scaleY: 1,
	    inheritScale: true,
	    inheritRotation: true
	};
	module.exports = spine.BoneData;
	


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Bone = function (boneData, skeleton, parent)
	{
	    this.data = boneData;
	    this.skeleton = skeleton;
	    this.parent = parent;
	    this.matrix = new PIXI.Matrix();
	    this.setToSetupPose();
	};
	spine.Bone.yDown = false;
	spine.Bone.prototype = {
	    x: 0, y: 0,
	    rotation: 0, rotationIK: 0,
	    scaleX: 1, scaleY: 1,
	    flipX: false, flipY: false,
	
	    worldSignX: 1, worldSignY: 1,
	    updateWorldTransform: function() {
	        var rotation = this.rotationIK;
	        var scaleX = this.scaleX;
	        var scaleY = this.scaleY;
	        var x = this.x;
	        var y = this.y;
	
	        var cos = Math.cos(rotation * spine.degRad), sin = Math.sin(rotation * spine.degRad);
	        var la = cos * scaleX, lb = -sin * scaleY, lc = sin * scaleX, ld = cos * scaleY;
	        var parent = this.parent;
	        var m = this.matrix;
	        var skeleton = this.skeleton;
	        if (!parent) { // Root bone.
	            if (skeleton.flipX) {
	                x = -x;
	                la = -la;
	                lb = -lb;
	            }
	            if (skeleton.flipY !== spine.Bone.yDown) {
	                y = -y;
	                lc = -lc;
	                ld = -ld;
	            }
	            m.a = la;
	            m.c = lb;
	            m.b = lc;
	            m.d = ld;
	            m.tx = x;
	            m.ty = y;
	            this.worldSignX = spine.signum(scaleX);
	            this.worldSignY = spine.signum(scaleY);
	            return;
	        }
	
	
	        var pa = parent.matrix.a, pb = parent.matrix.c, pc = parent.matrix.b, pd = parent.matrix.d;
	        m.tx = pa * x + pb * y + parent.matrix.tx;
	        m.ty = pc * x + pd * y + parent.matrix.ty;
	        this.worldSignX = parent.worldSignX * spine.signum(scaleX);
	        this.worldSignY = parent.worldSignY * spine.signum(scaleY);
	        var data = this.data;
	
	        if (data.inheritRotation && data.inheritScale) {
	            m.a = pa * la + pb * lc;
	            m.c = pa * lb + pb * ld;
	            m.b = pc * la + pd * lc;
	            m.d = pc * lb + pd * ld;
	        } else if (data.inheritRotation) { // No scale inheritance.
	            pa = 1;
	            pb = 0;
	            pc = 0;
	            pd = 1;
	            do {
	                cos = Math.cos(parent.rotationIK * spine.degRad);
	                sin = Math.sin(parent.rotationIK * spine.degRad);
	                var temp = pa * cos + pb * sin;
	                pb = pa * -sin + pb * cos;
	                pa = temp;
	                temp = pc * cos + pd * sin;
	                pd = pc * -sin + pd * cos;
	                pc = temp;
	
	                if (!parent.data.inheritRotation) break;
	                parent = parent.parent;
	            } while (parent != null);
	            m.a = pa * la + pb * lc;
	            m.c = pa * lb + pb * ld;
	            m.b = pc * la + pd * lc;
	            m.d = pc * lb + pd * ld;
	            if (skeleton.flipX) {
	                m.a = -m.a;
	                m.c = -m.c;
	            }
	            if (skeleton.flipY !== spine.Bone.yDown) {
	                m.b = -m.b;
	                m.d = -m.d;
	            }
	        } else if (data.inheritScale) { // No rotation inheritance.
	            pa = 1;
	            pb = 0;
	            pc = 0;
	            pd = 1;
	            do {
	                var r = parent.rotation;
	                cos = Math.cos(r * spine.degRad);
	                sin = Math.sin(r * spine.degRad);
	                var psx = parent.scaleX, psy = parent.scaleY;
	                var za = cos * psx, zb = -sin * psy, zc = sin * psx, zd = cos * psy;
	                temp = pa * za + pb * zc;
	                pb = pa * zb + pb * zd;
	                pa = temp;
	                temp = pc * za + pd * zc;
	                pd = pc * zb + pd * zd;
	                pc = temp;
	
	                if (psx < 0) {
	                    r = -r;
	                } else {
	                    sin = -sin;
	                }
	                temp = pa * cos + pb * sin;
	                pb = pa * -sin + pb * cos;
	                pa = temp;
	                temp = pc * cos + pd * sin;
	                pd = pc * -sin + pd * cos;
	                pc = temp;
	
	                if (!parent.data.inheritScale) break;
	                parent = parent.parent;
	            } while (parent != null);
	            m.a = pa * la + pb * lc;
	            m.c = pa * lb + pb * ld;
	            m.b = pc * la + pd * lc;
	            m.d = pc * lb + pd * ld;
	            if (skeleton.flipX) {
	                m.a = -m.a;
	                m.c = -m.c;
	            }
	            if (skeleton.flipY !== spine.Bone.yDown) {
	                m.b = -m.b;
	                m.d = -m.d;
	            }
	        } else {
	            m.a = la;
	            m.c = lb;
	            m.b = lc;
	            m.d = ld;
	        }
	    },
	
	    setToSetupPose: function ()
	    {
	        var data = this.data;
	        this.x = data.x;
	        this.y = data.y;
	        this.rotation = data.rotation;
	        this.rotationIK = this.rotation;
	        this.scaleX = data.scaleX;
	        this.scaleY = data.scaleY;
	    },
	    worldToLocal: function (world)
	    {
	        var m = this.matrix;
	        var dx = world[0] - m.tx, dy = m.ty;
	        var invDet = 1 / (m.a * m.d - m.b * m.c);
	        //Yep, its a bug in original spine. I hope they'll fix it: https://github.com/EsotericSoftware/spine-runtimes/issues/544
	        world[0] = dx * m.a * invDet - dy * m.c * invDet;
	        world[1] = dy * m.d * invDet - dx * m.b * invDet;
	    },
	    localToWorld: function (local)
	    {
	        var localX = local[0], localY = local[1];
	        var m = this.matrix;
	        local[0] = localX * m.a + localY * m.c + m.tx;
	        local[1] = localX * m.b + localY * m.d + m.ty;
	    },
	    getWorldRotationX: function() {
	        return Math.atan2(this.matrix.b, this.matrix.a) * spine.radDeg;
	
	    },
	    getWorldRotationY: function() {
	        return Math.atan2(this.matrix.d, this.matrix.c) * spine.radDeg;
	    },
	    getWorldScaleX: function() {
	        var a = this.matrix.a;
	        var b = this.matrix.b;
	        return Math.sqrt(a*a+b*b);
	    },
	    getWorldScaleY: function() {
	        var c = this.matrix.c;
	        var d = this.matrix.d;
	        return Math.sqrt(c * c + d * d);
	    }
	};
	
	Object.defineProperties(spine.Bone.prototype, {
	    worldX: {
	        get: function() {
	            return this.matrix.tx;
	        }
	    },
	    worldY:  {
	        get: function() {
	            return this.matrix.ty;
	        }
	    }
	});
	
	module.exports = spine.Bone;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Animation = __webpack_require__(10);
	spine.Curves = __webpack_require__(26);
	spine.ColorTimeline = function (frameCount)
	{
	    this.curves = new spine.Curves(frameCount);
	    this.frames = []; // time, r, g, b, a, ...
	    this.frames.length = frameCount * 5;
	};
	spine.ColorTimeline.prototype = {
	    slotIndex: 0,
	    getFrameCount: function ()
	    {
	        return this.frames.length / 5;
	    },
	    setFrame: function (frameIndex, time, r, g, b, a)
	    {
	        frameIndex *= 5;
	        this.frames[frameIndex] = time;
	        this.frames[frameIndex + 1] = r;
	        this.frames[frameIndex + 2] = g;
	        this.frames[frameIndex + 3] = b;
	        this.frames[frameIndex + 4] = a;
	    },
	    apply: function (skeleton, lastTime, time, firedEvents, alpha)
	    {
	        var frames = this.frames;
	        if (time < frames[0]) return; // Time is before first frame.
	
	        var r, g, b, a;
	        if (time >= frames[frames.length - 5])
	        {
	            // Time is after last frame.
	            var i = frames.length - 1;
	            r = frames[i - 3];
	            g = frames[i - 2];
	            b = frames[i - 1];
	            a = frames[i];
	        } else {
	            // Interpolate between the previous frame and the current frame.
	            var frameIndex = spine.Animation.binarySearch(frames, time, 5);
	            var prevFrameR = frames[frameIndex - 4];
	            var prevFrameG = frames[frameIndex - 3];
	            var prevFrameB = frames[frameIndex - 2];
	            var prevFrameA = frames[frameIndex - 1];
	            var frameTime = frames[frameIndex];
	            var percent = 1 - (time - frameTime) / (frames[frameIndex - 5/*PREV_FRAME_TIME*/] - frameTime);
	            percent = this.curves.getCurvePercent(frameIndex / 5 - 1, percent);
	
	            r = prevFrameR + (frames[frameIndex + 1/*FRAME_R*/] - prevFrameR) * percent;
	            g = prevFrameG + (frames[frameIndex + 2/*FRAME_G*/] - prevFrameG) * percent;
	            b = prevFrameB + (frames[frameIndex + 3/*FRAME_B*/] - prevFrameB) * percent;
	            a = prevFrameA + (frames[frameIndex + 4/*FRAME_A*/] - prevFrameA) * percent;
	        }
	        var slot = skeleton.slots[this.slotIndex];
	        if (alpha < 1)
	        {
	            slot.r += (r - slot.r) * alpha;
	            slot.g += (g - slot.g) * alpha;
	            slot.b += (b - slot.b) * alpha;
	            slot.a += (a - slot.a) * alpha;
	        } else {
	            slot.r = r;
	            slot.g = g;
	            slot.b = b;
	            slot.a = a;
	        }
	    }
	};
	module.exports = spine.ColorTimeline;
	


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Animation = __webpack_require__(10);
	spine.DrawOrderTimeline = function (frameCount)
	{
	    this.frames = []; // time, ...
	    this.frames.length = frameCount;
	    this.drawOrders = [];
	    this.drawOrders.length = frameCount;
	};
	spine.DrawOrderTimeline.prototype = {
	    getFrameCount: function ()
	    {
	        return this.frames.length;
	    },
	    setFrame: function (frameIndex, time, drawOrder)
	    {
	        this.frames[frameIndex] = time;
	        this.drawOrders[frameIndex] = drawOrder;
	    },
	    apply: function (skeleton, lastTime, time, firedEvents, alpha)
	    {
	        var frames = this.frames;
	        if (time < frames[0]) return; // Time is before first frame.
	
	        var frameIndex;
	        if (time >= frames[frames.length - 1]) // Time is after last frame.
	            frameIndex = frames.length - 1;
	        else
	            frameIndex = spine.Animation.binarySearch1(frames, time) - 1;
	
	        var drawOrder = skeleton.drawOrder;
	        var slots = skeleton.slots;
	        var drawOrderToSetupIndex = this.drawOrders[frameIndex];
	        if (drawOrderToSetupIndex)
	        {
	            for (var i = 0, n = drawOrderToSetupIndex.length; i < n; i++)
	            {
	                drawOrder[i] = drawOrderToSetupIndex[i];
	            }
	        }
	
	    }
	};
	module.exports = spine.DrawOrderTimeline;
	


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.EventData = function (name)
	{
	    this.name = name;
	};
	spine.EventData.prototype = {
	    intValue: 0,
	    floatValue: 0,
	    stringValue: null
	};
	module.exports = spine.EventData;
	


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Event = function (data)
	{
	    this.data = data;
	};
	spine.Event.prototype = {
	    intValue: 0,
	    floatValue: 0,
	    stringValue: null
	};
	module.exports = spine.Event;
	


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Animation = __webpack_require__(10);
	spine.EventTimeline = function (frameCount)
	{
	    this.frames = []; // time, ...
	    this.frames.length = frameCount;
	    this.events = [];
	    this.events.length = frameCount;
	};
	spine.EventTimeline.prototype = {
	    getFrameCount: function ()
	    {
	        return this.frames.length;
	    },
	    setFrame: function (frameIndex, time, event)
	    {
	        this.frames[frameIndex] = time;
	        this.events[frameIndex] = event;
	    },
	    /** Fires events for frames > lastTime and <= time. */
	    apply: function (skeleton, lastTime, time, firedEvents, alpha)
	    {
	        if (!firedEvents) return;
	
	        var frames = this.frames;
	        var frameCount = frames.length;
	
	        if (lastTime > time)
	        { // Fire events after last time for looped animations.
	            this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha);
	            lastTime = -1;
	        } else if (lastTime >= frames[frameCount - 1]) // Last time is after last frame.
	            return;
	        if (time < frames[0]) return; // Time is before first frame.
	
	        var frameIndex;
	        if (lastTime < frames[0])
	            frameIndex = 0;
	        else
	        {
	            frameIndex = spine.Animation.binarySearch1(frames, lastTime);
	            var frame = frames[frameIndex];
	            while (frameIndex > 0)
	            { // Fire multiple events with the same frame.
	                if (frames[frameIndex - 1] != frame) break;
	                frameIndex--;
	            }
	        }
	        var events = this.events;
	        for (; frameIndex < frameCount && time >= frames[frameIndex]; frameIndex++)
	            firedEvents.push(events[frameIndex]);
	    }
	};
	module.exports = spine.EventTimeline;
	


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Animation = __webpack_require__(10);
	spine.Curves = __webpack_require__(26);
	spine.FfdTimeline = function (frameCount)
	{
	    this.curves = new spine.Curves(frameCount);
	    this.frames = [];
	    this.frames.length = frameCount;
	    this.frameVertices = [];
	    this.frameVertices.length = frameCount;
	};
	spine.FfdTimeline.prototype = {
	    slotIndex: 0,
	    attachment: 0,
	    getFrameCount: function ()
	    {
	        return this.frames.length;
	    },
	    setFrame: function (frameIndex, time, vertices)
	    {
	        this.frames[frameIndex] = time;
	        this.frameVertices[frameIndex] = vertices;
	    },
	    apply: function (skeleton, lastTime, time, firedEvents, alpha)
	    {
	        var slot = skeleton.slots[this.slotIndex];
	        var slotAttachment = slot.attachment;
	        if (!slotAttachment.applyFFD || !slotAttachment.applyFFD(this.attachment)) return;
	
	        var frames = this.frames;
	        if (time < frames[0]) return; // Time is before first frame.
	
	        var frameVertices = this.frameVertices;
	        var vertexCount = frameVertices[0].length;
	
	        var vertices = slot.attachmentVertices;
	        if (vertices.length != vertexCount) {
	            vertices = slot.attachmentVertices = [];
	            for (var k = 0; k < vertexCount; k++) vertices.push(0);
	            // Don't mix from uninitialized slot vertices.
	            alpha = 1;
	        }
	
	        if (time >= frames[frames.length - 1])
	        { // Time is after last frame.
	            var lastVertices = frameVertices[frames.length - 1];
	            if (alpha < 1)
	            {
	                for (var i = 0; i < vertexCount; i++)
	                    vertices[i] += (lastVertices[i] - vertices[i]) * alpha;
	            } else {
	                for (var i = 0; i < vertexCount; i++)
	                    vertices[i] = lastVertices[i];
	            }
	            return;
	        }
	
	        // Interpolate between the previous frame and the current frame.
	        var frameIndex = spine.Animation.binarySearch1(frames, time);
	        var frameTime = frames[frameIndex];
	        var percent = 1 - (time - frameTime) / (frames[frameIndex - 1] - frameTime);
	        percent = this.curves.getCurvePercent(frameIndex - 1, percent < 0 ? 0 : (percent > 1 ? 1 : percent));
	
	        var prevVertices = frameVertices[frameIndex - 1];
	        var nextVertices = frameVertices[frameIndex];
	
	        if (alpha < 1)
	        {
	            for (var i = 0; i < vertexCount; i++)
	            {
	                var prev = prevVertices[i];
	                vertices[i] += (prev + (nextVertices[i] - prev) * percent - vertices[i]) * alpha;
	            }
	        } else {
	            for (var i = 0; i < vertexCount; i++)
	            {
	                var prev = prevVertices[i];
	                vertices[i] = prev + (nextVertices[i] - prev) * percent;
	            }
	        }
	    }
	};
	module.exports = spine.FfdTimeline;
	


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9) || {};
	spine.IkConstraintData = function (name)
	{
	    this.name = name;
	    this.bones = [];
	};
	spine.IkConstraintData.prototype = {
	    target: null,
	    bendDirection: 1,
	    mix: 1
	};
	module.exports = spine.IkConstraintData;
	


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.IkConstraint = function (data, skeleton)
	{
	    this.data = data;
	    this.mix = data.mix;
	    this.bendDirection = data.bendDirection;
	
	    this.bones = [];
	    for (var i = 0, n = data.bones.length; i < n; i++)
	        this.bones.push(skeleton.findBone(data.bones[i].name));
	    this.target = skeleton.findBone(data.target.name);
	};
	spine.IkConstraint.prototype = {
	    apply: function ()
	    {
	        var target = this.target;
	        var bones = this.bones;
	        switch (bones.length)
	        {
	        case 1:
	            spine.IkConstraint.apply1(bones[0], target.worldX, target.worldY, this.mix);
	            break;
	        case 2:
	            spine.IkConstraint.apply2(bones[0], bones[1], target.worldX, target.worldY, this.bendDirection, this.mix);
	            break;
	        }
	    }
	};
	/** Adjusts the bone rotation so the tip is as close to the target position as possible. The target is specified in the world
	 * coordinate system. */
	spine.IkConstraint.apply1 = function (bone, targetX, targetY, alpha)
	{
	    var parentRotation = bone.parent ? bone.parent.getWorldRotationX(): 0;
	    var rotation = bone.rotation;
	    var rotationIK = Math.atan2(targetY - bone.worldY, targetX - bone.worldX) * spine.radDeg - parentRotation;
	    if ((bone.worldSignX != bone.worldSignY) != (bone.skeleton.flipX != (bone.skeleton.flipY != spine.Bone.yDown))) rotationIK = 360 - rotationIK;
	    if (rotationIK > 180)
	        rotationIK -= 360;
	    else if (rotationIK < -180) rotationIK += 360;
	    bone.rotationIK = rotation + (rotationIK - rotation) * alpha;
	};
	/** Adjusts the parent and child bone rotations so the tip of the child is as close to the target position as possible. The
	 * target is specified in the world coordinate system.
	 * @param child Any descendant bone of the parent. */
	spine.IkConstraint.apply2 = function (parent, child, targetX, targetY, bendDir, alpha)
	{
	    if (alpha == 0) return;
	    var px = parent.x, py = parent.y, psx = parent.scaleX, psy = parent.scaleY, csx = child.scaleX, cy = child.y;
	    var offset1, offset2, sign2;
	    if (psx < 0) {
	        psx = -psx;
	        offset1 = 180;
	        sign2 = -1;
	    } else {
	        offset1 = 0;
	        sign2 = 1;
	    }
	    if (psy < 0) {
	        psy = -psy;
	        sign2 = -sign2;
	    }
	    if (csx < 0) {
	        csx = -csx;
	        offset2 = 180;
	    } else
	        offset2 = 0;
	    var pp = parent.parent;
	    var ppm = pp.matrix;
	    var tx, ty, dx, dy;
	    if (pp == null) {
	        tx = targetX - px;
	        ty = targetY - py;
	        dx = child.worldX - px;
	        dy = child.worldY - py;
	    } else {
	        var a = ppm.a, b = ppm.c, c = ppm.b, d = ppm.d, invDet = 1 / (a * d - b * c);
	        var wx = ppm.tx, wy = ppm.ty, x = targetX - wx, y = targetY - wy;
	        tx = (x * d - y * b) * invDet - px;
	        ty = (y * a - x * c) * invDet - py;
	        x = child.worldX - wx;
	        y = child.worldY - wy;
	        dx = (x * d - y * b) * invDet - px;
	        dy = (y * a - x * c) * invDet - py;
	    }
	    var l1 = Math.sqrt(dx * dx + dy * dy), l2 = child.data.length * csx, a1, a2;
	    outer:
	        if (Math.abs(psx - psy) <= 0.0001) {
	            l2 *= psx;
	            var cos = (tx * tx + ty * ty - l1 * l1 - l2 * l2) / (2 * l1 * l2);
	            if (cos < -1)
	                cos = -1;
	            else if (cos > 1) cos = 1;
	            a2 = Math.acos(cos) * bendDir;
	            var a = l1 + l2 * cos, o = l2 * Math.sin(a2);
	            a1 = Math.atan2(ty * a - tx * o, tx * a + ty * o);
	        } else {
	            cy = 0;
	            var a = psx * l2, b = psy * l2, ta = Math.atan2(ty, tx);
	            var aa = a * a, bb = b * b, ll = l1 * l1, dd = tx * tx + ty * ty;
	            var c0 = bb * ll + aa * dd - aa * bb, c1 = -2 * bb * l1, c2 = bb - aa;
	            var d = c1 * c1 - 4 * c2 * c0;
	            if (d >= 0) {
	                var q = Math.sqrt(d);
	                if (c1 < 0) q = -q;
	                q = -(c1 + q) / 2;
	                var r0 = q / c2, r1 = c0 / q;
	                var r = Math.abs(r0) < Math.abs(r1) ? r0 : r1;
	                if (r * r <= dd) {
	                    var y = Math.sqrt(dd - r * r) * bendDir;
	                    a1 = ta - Math.atan2(y, r);
	                    a2 = Math.atan2(y / psy, (r - l1) / psx);
	                    break outer;
	                }
	            }
	            var minAngle = 0, minDist = Infinity, minX = 0, minY = 0;
	            var maxAngle = 0, maxDist = 0, maxX = 0, maxY = 0;
	            var x = l1 + a, dist = x * x;
	            if (dist > maxDist) {
	                maxAngle = 0;
	                maxDist = dist;
	                maxX = x;
	            }
	            x = l1 - a;
	            dist = x * x;
	            if (dist < minDist) {
	                minAngle = Math.PI;
	                minDist = dist;
	                minX = x;
	            }
	            var angle = Math.acos(-a * l1 / (aa - bb));
	            x = a * Math.cos(angle) + l1;
	            var y = b * Math.sin(angle);
	            dist = x * x + y * y;
	            if (dist < minDist) {
	                minAngle = angle;
	                minDist = dist;
	                minX = x;
	                minY = y;
	            }
	            if (dist > maxDist) {
	                maxAngle = angle;
	                maxDist = dist;
	                maxX = x;
	                maxY = y;
	            }
	            if (dd <= (minDist + maxDist) / 2) {
	                a1 = ta - Math.atan2(minY * bendDir, minX);
	                a2 = minAngle * bendDir;
	            } else {
	                a1 = ta - Math.atan2(maxY * bendDir, maxX);
	                a2 = maxAngle * bendDir;
	            }
	        }
	    var offset = Math.atan2(cy, child.x) * sign2;
	    a1 = (a1 - offset) * spine.radDeg + offset1;
	    a2 = (a2 + offset) * spine.radDeg * sign2 + offset2;
	    if (a1 > 180)
	        a1 -= 360;
	    else if (a1 < -180) a1 += 360;
	    if (a2 > 180)
	        a2 -= 360;
	    else if (a2 < -180) a2 += 360;
	    var rotation = parent.rotation;
	    parent.rotationIK = rotation + (a1 - rotation) * alpha;
	    rotation = child.rotation;
	    child.rotationIK = rotation + (a2 - rotation) * alpha;
	};
	module.exports = spine.IkConstraint;
	


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9) || {};
	spine.Animation = __webpack_require__(10);
	spine.Curves = __webpack_require__(26);
	spine.IkConstraintTimeline = function (frameCount)
	{
	    this.curves = new spine.Curves(frameCount);
	    this.frames = []; // time, mix, bendDirection, ...
	    this.frames.length = frameCount * 3;
	};
	spine.IkConstraintTimeline.prototype = {
	    ikConstraintIndex: 0,
	    getFrameCount: function ()
	    {
	        return this.frames.length / 3;
	    },
	    setFrame: function (frameIndex, time, mix, bendDirection)
	    {
	        frameIndex *= 3;
	        this.frames[frameIndex] = time;
	        this.frames[frameIndex + 1] = mix;
	        this.frames[frameIndex + 2] = bendDirection;
	    },
	    apply: function (skeleton, lastTime, time, firedEvents, alpha)
	    {
	        var frames = this.frames;
	        if (time < frames[0]) return; // Time is before first frame.
	
	        var ikConstraint = skeleton.ikConstraints[this.ikConstraintIndex];
	
	        if (time >= frames[frames.length - 3])
	        { // Time is after last frame.
	            ikConstraint.mix += (frames[frames.length - 2] - ikConstraint.mix) * alpha;
	            ikConstraint.bendDirection = frames[frames.length - 1];
	            return;
	        }
	
	        // Interpolate between the previous frame and the current frame.
	        var frameIndex = spine.Animation.binarySearch(frames, time, 3);
	        var prevFrameMix = frames[frameIndex + -2/*PREV_FRAME_MIX*/];
	        var frameTime = frames[frameIndex];
	        var percent = 1 - (time - frameTime) / (frames[frameIndex + -3/*PREV_FRAME_TIME*/] - frameTime);
	        percent = this.curves.getCurvePercent(frameIndex / 3 - 1, percent);
	
	        var mix = prevFrameMix + (frames[frameIndex + 1/*FRAME_MIX*/] - prevFrameMix) * percent;
	        ikConstraint.mix += (mix - ikConstraint.mix) * alpha;
	        ikConstraint.bendDirection = frames[frameIndex + -1/*PREV_FRAME_BEND_DIRECTION*/];
	    }
	};
	module.exports = spine.IkConstraintTimeline;
	


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9) || {};
	spine.Animation = __webpack_require__(10);
	spine.Curves = __webpack_require__(26);
	spine.RotateTimeline = function (frameCount)
	{
	    this.curves = new spine.Curves(frameCount);
	    this.frames = []; // time, angle, ...
	    this.frames.length = frameCount * 2;
	};
	spine.RotateTimeline.prototype = {
	    boneIndex: 0,
	    getFrameCount: function ()
	    {
	        return this.frames.length / 2;
	    },
	    setFrame: function (frameIndex, time, angle)
	    {
	        frameIndex *= 2;
	        this.frames[frameIndex] = time;
	        this.frames[frameIndex + 1] = angle;
	    },
	    apply: function (skeleton, lastTime, time, firedEvents, alpha)
	    {
	        var frames = this.frames;
	        if (time < frames[0]) return; // Time is before first frame.
	
	        var bone = skeleton.bones[this.boneIndex];
	
	        if (time >= frames[frames.length - 2])
	        { // Time is after last frame.
	            var amount = bone.data.rotation + frames[frames.length - 1] - bone.rotation;
	            while (amount > 180)
	                amount -= 360;
	            while (amount < -180)
	                amount += 360;
	            bone.rotation += amount * alpha;
	            return;
	        }
	
	        // Interpolate between the previous frame and the current frame.
	        var frameIndex = spine.Animation.binarySearch(frames, time, 2);
	        var prevFrameValue = frames[frameIndex - 1];
	        var frameTime = frames[frameIndex];
	        var percent = 1 - (time - frameTime) / (frames[frameIndex - 2/*PREV_FRAME_TIME*/] - frameTime);
	        percent = this.curves.getCurvePercent(frameIndex / 2 - 1, percent);
	
	        var amount = frames[frameIndex + 1/*FRAME_VALUE*/] - prevFrameValue;
	        while (amount > 180)
	            amount -= 360;
	        while (amount < -180)
	            amount += 360;
	        amount = bone.data.rotation + (prevFrameValue + amount * percent) - bone.rotation;
	        while (amount > 180)
	            amount -= 360;
	        while (amount < -180)
	            amount += 360;
	        bone.rotation += amount * alpha;
	    }
	};
	module.exports = spine.RotateTimeline;
	


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Animation = __webpack_require__(10);
	spine.Curves = __webpack_require__(26);
	spine.ScaleTimeline = function (frameCount)
	{
	    this.curves = new spine.Curves(frameCount);
	    this.frames = []; // time, x, y, ...
	    this.frames.length = frameCount * 3;
	};
	spine.ScaleTimeline.prototype = {
	    boneIndex: 0,
	    getFrameCount: function ()
	    {
	        return this.frames.length / 3;
	    },
	    setFrame: function (frameIndex, time, x, y)
	    {
	        frameIndex *= 3;
	        this.frames[frameIndex] = time;
	        this.frames[frameIndex + 1] = x;
	        this.frames[frameIndex + 2] = y;
	    },
	    apply: function (skeleton, lastTime, time, firedEvents, alpha)
	    {
	        var frames = this.frames;
	        if (time < frames[0]) return; // Time is before first frame.
	
	        var bone = skeleton.bones[this.boneIndex];
	
	        if (time >= frames[frames.length - 3])
	        { // Time is after last frame.
	            bone.scaleX += (bone.data.scaleX * frames[frames.length - 2] - bone.scaleX) * alpha;
	            bone.scaleY += (bone.data.scaleY * frames[frames.length - 1] - bone.scaleY) * alpha;
	            return;
	        }
	
	        // Interpolate between the previous frame and the current frame.
	        var frameIndex = spine.Animation.binarySearch(frames, time, 3);
	        var prevFrameX = frames[frameIndex - 2];
	        var prevFrameY = frames[frameIndex - 1];
	        var frameTime = frames[frameIndex];
	        var percent = 1 - (time - frameTime) / (frames[frameIndex + -3/*PREV_FRAME_TIME*/] - frameTime);
	        percent = this.curves.getCurvePercent(frameIndex / 3 - 1, percent);
	
	        bone.scaleX += (bone.data.scaleX * (prevFrameX + (frames[frameIndex + 1/*FRAME_X*/] - prevFrameX) * percent) - bone.scaleX) * alpha;
	        bone.scaleY += (bone.data.scaleY * (prevFrameY + (frames[frameIndex + 2/*FRAME_Y*/] - prevFrameY) * percent) - bone.scaleY) * alpha;
	    }
	};
	module.exports = spine.ScaleTimeline;
	


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(8) || {};
	spine.AttachmentType = __webpack_require__(16);
	spine.SkeletonBounds = function ()
	{
	    this.polygonPool = [];
	    this.polygons = [];
	    this.boundingBoxes = [];
	};
	spine.SkeletonBounds.prototype = {
	    minX: 0, minY: 0, maxX: 0, maxY: 0,
	    update: function (skeleton, updateAabb)
	    {
	        var slots = skeleton.slots;
	        var slotCount = slots.length;
	        var x = skeleton.x, y = skeleton.y;
	        var boundingBoxes = this.boundingBoxes;
	        var polygonPool = this.polygonPool;
	        var polygons = this.polygons;
	
	        boundingBoxes.length = 0;
	        for (var i = 0, n = polygons.length; i < n; i++)
	            polygonPool.push(polygons[i]);
	        polygons.length = 0;
	
	        for (var i = 0; i < slotCount; i++)
	        {
	            var slot = slots[i];
	            var boundingBox = slot.attachment;
	            if (boundingBox.type != spine.AttachmentType.boundingbox) continue;
	            boundingBoxes.push(boundingBox);
	
	            var poolCount = polygonPool.length, polygon;
	            if (poolCount > 0)
	            {
	                polygon = polygonPool[poolCount - 1];
	                polygonPool.splice(poolCount - 1, 1);
	            } else
	                polygon = [];
	            polygons.push(polygon);
	
	            polygon.length = boundingBox.vertices.length;
	            boundingBox.computeWorldVertices(x, y, slot.bone, polygon);
	        }
	
	        if (updateAabb) this.aabbCompute();
	    },
	    aabbCompute: function ()
	    {
	        var polygons = this.polygons;
	        var minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = Number.MIN_VALUE, maxY = Number.MIN_VALUE;
	        for (var i = 0, n = polygons.length; i < n; i++)
	        {
	            var vertices = polygons[i];
	            for (var ii = 0, nn = vertices.length; ii < nn; ii += 2)
	            {
	                var x = vertices[ii];
	                var y = vertices[ii + 1];
	                minX = Math.min(minX, x);
	                minY = Math.min(minY, y);
	                maxX = Math.max(maxX, x);
	                maxY = Math.max(maxY, y);
	            }
	        }
	        this.minX = minX;
	        this.minY = minY;
	        this.maxX = maxX;
	        this.maxY = maxY;
	    },
	    /** Returns true if the axis aligned bounding box contains the point. */
	    aabbContainsPoint: function (x, y)
	    {
	        return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
	    },
	    /** Returns true if the axis aligned bounding box intersects the line segment. */
	    aabbIntersectsSegment: function (x1, y1, x2, y2)
	    {
	        var minX = this.minX, minY = this.minY, maxX = this.maxX, maxY = this.maxY;
	        if ((x1 <= minX && x2 <= minX) || (y1 <= minY && y2 <= minY) || (x1 >= maxX && x2 >= maxX) || (y1 >= maxY && y2 >= maxY))
	            return false;
	        var m = (y2 - y1) / (x2 - x1);
	        var y = m * (minX - x1) + y1;
	        if (y > minY && y < maxY) return true;
	        y = m * (maxX - x1) + y1;
	        if (y > minY && y < maxY) return true;
	        var x = (minY - y1) / m + x1;
	        if (x > minX && x < maxX) return true;
	        x = (maxY - y1) / m + x1;
	        if (x > minX && x < maxX) return true;
	        return false;
	    },
	    /** Returns true if the axis aligned bounding box intersects the axis aligned bounding box of the specified bounds. */
	    aabbIntersectsSkeleton: function (bounds)
	    {
	        return this.minX < bounds.maxX && this.maxX > bounds.minX && this.minY < bounds.maxY && this.maxY > bounds.minY;
	    },
	    /** Returns the first bounding box attachment that contains the point, or null. When doing many checks, it is usually more
	     * efficient to only call this method if {@link #aabbContainsPoint(float, float)} returns true. */
	    containsPoint: function (x, y)
	    {
	        var polygons = this.polygons;
	        for (var i = 0, n = polygons.length; i < n; i++)
	            if (this.polygonContainsPoint(polygons[i], x, y)) return this.boundingBoxes[i];
	        return null;
	    },
	    /** Returns the first bounding box attachment that contains the line segment, or null. When doing many checks, it is usually
	     * more efficient to only call this method if {@link #aabbIntersectsSegment(float, float, float, float)} returns true. */
	    intersectsSegment: function (x1, y1, x2, y2)
	    {
	        var polygons = this.polygons;
	        for (var i = 0, n = polygons.length; i < n; i++)
	            if (polygons[i].intersectsSegment(x1, y1, x2, y2)) return this.boundingBoxes[i];
	        return null;
	    },
	    /** Returns true if the polygon contains the point. */
	    polygonContainsPoint: function (polygon, x, y)
	    {
	        var nn = polygon.length;
	        var prevIndex = nn - 2;
	        var inside = false;
	        for (var ii = 0; ii < nn; ii += 2)
	        {
	            var vertexY = polygon[ii + 1];
	            var prevY = polygon[prevIndex + 1];
	            if ((vertexY < y && prevY >= y) || (prevY < y && vertexY >= y))
	            {
	                var vertexX = polygon[ii];
	                if (vertexX + (y - vertexY) / (prevY - vertexY) * (polygon[prevIndex] - vertexX) < x) inside = !inside;
	            }
	            prevIndex = ii;
	        }
	        return inside;
	    },
	    /** Returns true if the polygon contains the line segment. */
	    polygonIntersectsSegment: function (polygon, x1, y1, x2, y2)
	    {
	        var nn = polygon.length;
	        var width12 = x1 - x2, height12 = y1 - y2;
	        var det1 = x1 * y2 - y1 * x2;
	        var x3 = polygon[nn - 2], y3 = polygon[nn - 1];
	        for (var ii = 0; ii < nn; ii += 2)
	        {
	            var x4 = polygon[ii], y4 = polygon[ii + 1];
	            var det2 = x3 * y4 - y3 * x4;
	            var width34 = x3 - x4, height34 = y3 - y4;
	            var det3 = width12 * height34 - height12 * width34;
	            var x = (det1 * width34 - width12 * det2) / det3;
	            if (((x >= x3 && x <= x4) || (x >= x4 && x <= x3)) && ((x >= x1 && x <= x2) || (x >= x2 && x <= x1)))
	            {
	                var y = (det1 * height34 - height12 * det2) / det3;
	                if (((y >= y3 && y <= y4) || (y >= y4 && y <= y3)) && ((y >= y1 && y <= y2) || (y >= y2 && y <= y1))) return true;
	            }
	            x3 = x4;
	            y3 = y4;
	        }
	        return false;
	    },
	    getPolygon: function (attachment)
	    {
	        var index = this.boundingBoxes.indexOf(attachment);
	        return index == -1 ? null : this.polygons[index];
	    },
	    getWidth: function ()
	    {
	        return this.maxX - this.minX;
	    },
	    getHeight: function ()
	    {
	        return this.maxY - this.minY;
	    }
	};
	module.exports = spine.SkeletonBounds;
	


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.SkeletonData = function ()
	{
	    this.bones = [];
	    this.slots = [];
	    this.skins = [];
	    this.events = [];
	    this.animations = [];
	    this.ikConstraints = [];
	};
	spine.SkeletonData.prototype = {
	    name: null,
	    defaultSkin: null,
	    width: 0, height: 0,
	    version: null, hash: null,
	    /** @return May be null. */
	    findBone: function (boneName)
	    {
	        var bones = this.bones;
	        for (var i = 0, n = bones.length; i < n; i++)
	            if (bones[i].name == boneName) return bones[i];
	        return null;
	    },
	    /** @return -1 if the bone was not found. */
	    findBoneIndex: function (boneName)
	    {
	        var bones = this.bones;
	        for (var i = 0, n = bones.length; i < n; i++)
	            if (bones[i].name == boneName) return i;
	        return -1;
	    },
	    /** @return May be null. */
	    findSlot: function (slotName)
	    {
	        var slots = this.slots;
	        for (var i = 0, n = slots.length; i < n; i++)
	        {
	            if (slots[i].name == slotName) return this.slots[i];
	        }
	        return null;
	    },
	    /** @return -1 if the bone was not found. */
	    findSlotIndex: function (slotName)
	    {
	        var slots = this.slots;
	        for (var i = 0, n = slots.length; i < n; i++)
	            if (slots[i].name == slotName) return i;
	        return -1;
	    },
	    /** @return May be null. */
	    findSkin: function (skinName)
	    {
	        var skins = this.skins;
	        for (var i = 0, n = skins.length; i < n; i++)
	            if (skins[i].name == skinName) return skins[i];
	        return null;
	    },
	    /** @return May be null. */
	    findEvent: function (eventName)
	    {
	        var events = this.events;
	        for (var i = 0, n = events.length; i < n; i++)
	            if (events[i].name == eventName) return events[i];
	        return null;
	    },
	    /** @return May be null. */
	    findAnimation: function (animationName)
	    {
	        var animations = this.animations;
	        for (var i = 0, n = animations.length; i < n; i++)
	            if (animations[i].name == animationName) return animations[i];
	        return null;
	    },
	    /** @return May be null. */
	    findIkConstraint: function (ikConstraintName)
	    {
	        var ikConstraints = this.ikConstraints;
	        for (var i = 0, n = ikConstraints.length; i < n; i++)
	            if (ikConstraints[i].name == ikConstraintName) return ikConstraints[i];
	        return null;
	    }
	};
	module.exports = spine.SkeletonData;
	


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Bone = __webpack_require__(28);
	spine.Slot = __webpack_require__(43);
	spine.IkConstraint = __webpack_require__(36);
	spine.Skeleton = function (skeletonData)
	{
	    this.data = skeletonData;
	
	    this.bones = [];
	    for (var i = 0, n = skeletonData.bones.length; i < n; i++)
	    {
	        var boneData = skeletonData.bones[i];
	        var parent = !boneData.parent ? null : this.bones[skeletonData.bones.indexOf(boneData.parent)];
	        this.bones.push(new spine.Bone(boneData, this, parent));
	    }
	
	    this.slots = [];
	    this.drawOrder = [];
	    for (var i = 0, n = skeletonData.slots.length; i < n; i++)
	    {
	        var slotData = skeletonData.slots[i];
	        var bone = this.bones[skeletonData.bones.indexOf(slotData.boneData)];
	        var slot = new spine.Slot(slotData, bone);
	        this.slots.push(slot);
	        this.drawOrder.push(i);
	    }
	
	    this.ikConstraints = [];
	    for (var i = 0, n = skeletonData.ikConstraints.length; i < n; i++)
	        this.ikConstraints.push(new spine.IkConstraint(skeletonData.ikConstraints[i], this));
	
	    this.boneCache = [];
	    this.updateCache();
	};
	spine.Skeleton.prototype = {
	    x: 0, y: 0,
	    skin: null,
	    r: 1, g: 1, b: 1, a: 1,
	    time: 0,
	    flipX: false, flipY: false,
	    /** Caches information about bones and IK constraints. Must be called if bones or IK constraints are added or removed. */
	    updateCache: function ()
	    {
	        var ikConstraints = this.ikConstraints;
	        var ikConstraintsCount = ikConstraints.length;
	
	        var arrayCount = ikConstraintsCount + 1;
	        var boneCache = this.boneCache;
	        if (boneCache.length > arrayCount) boneCache.length = arrayCount;
	        for (var i = 0, n = boneCache.length; i < n; i++)
	            boneCache[i].length = 0;
	        while (boneCache.length < arrayCount)
	            boneCache[boneCache.length] = [];
	
	        var nonIkBones = boneCache[0];
	        var bones = this.bones;
	
	        outer:
	        for (var i = 0, n = bones.length; i < n; i++)
	        {
	            var bone = bones[i];
	            var current = bone;
	            do {
	                for (var ii = 0; ii < ikConstraintsCount; ii++)
	                {
	                    var ikConstraint = ikConstraints[ii];
	                    var parent = ikConstraint.bones[0];
	                    var child= ikConstraint.bones[ikConstraint.bones.length - 1];
	                    while (true)
	                    {
	                        if (current == child)
	                        {
	                            boneCache[ii].push(bone);
	                            boneCache[ii + 1].push(bone);
	                            continue outer;
	                        }
	                        if (child == parent) break;
	                        child = child.parent;
	                    }
	                }
	                current = current.parent;
	            } while (current);
	            nonIkBones[nonIkBones.length] = bone;
	        }
	    },
	    /** Updates the world transform for each bone. */
	    updateWorldTransform: function ()
	    {
	        var bones = this.bones;
	        for (var i = 0, n = bones.length; i < n; i++)
	        {
	            var bone = bones[i];
	            bone.rotationIK = bone.rotation;
	        }
	        var i = 0, last = this.boneCache.length - 1;
	        while (true)
	        {
	            var cacheBones = this.boneCache[i];
	            for (var ii = 0, nn = cacheBones.length; ii < nn; ii++)
	                cacheBones[ii].updateWorldTransform();
	            if (i == last) break;
	            this.ikConstraints[i].apply();
	            i++;
	        }
	    },
	    /** Sets the bones and slots to their setup pose values. */
	    setToSetupPose: function ()
	    {
	        this.setBonesToSetupPose();
	        this.setSlotsToSetupPose();
	    },
	    setBonesToSetupPose: function ()
	    {
	        var bones = this.bones;
	        for (var i = 0, n = bones.length; i < n; i++)
	            bones[i].setToSetupPose();
	
	        var ikConstraints = this.ikConstraints;
	        for (var i = 0, n = ikConstraints.length; i < n; i++)
	        {
	            var ikConstraint = ikConstraints[i];
	            ikConstraint.bendDirection = ikConstraint.data.bendDirection;
	            ikConstraint.mix = ikConstraint.data.mix;
	        }
	    },
	    setSlotsToSetupPose: function ()
	    {
	        var slots = this.slots;
	        for (var i = 0, n = slots.length; i < n; i++)
	        {
	            slots[i].setToSetupPose(i);
	        }
	
	        this.resetDrawOrder();
	    },
	    /** @return May return null. */
	    getRootBone: function ()
	    {
	        return this.bones.length ? this.bones[0] : null;
	    },
	    /** @return May be null. */
	    findBone: function (boneName)
	    {
	        var bones = this.bones;
	        for (var i = 0, n = bones.length; i < n; i++)
	            if (bones[i].data.name == boneName) return bones[i];
	        return null;
	    },
	    /** @return -1 if the bone was not found. */
	    findBoneIndex: function (boneName)
	    {
	        var bones = this.bones;
	        for (var i = 0, n = bones.length; i < n; i++)
	            if (bones[i].data.name == boneName) return i;
	        return -1;
	    },
	    /** @return May be null. */
	    findSlot: function (slotName)
	    {
	        var slots = this.slots;
	        for (var i = 0, n = slots.length; i < n; i++)
	            if (slots[i].data.name == slotName) return slots[i];
	        return null;
	    },
	    /** @return -1 if the bone was not found. */
	    findSlotIndex: function (slotName)
	    {
	        var slots = this.slots;
	        for (var i = 0, n = slots.length; i < n; i++)
	            if (slots[i].data.name == slotName) return i;
	        return -1;
	    },
	    setSkinByName: function (skinName)
	    {
	        var skin = this.data.findSkin(skinName);
	        if (!skin) throw "Skin not found: " + skinName;
	        this.setSkin(skin);
	    },
	    /** Sets the skin used to look up attachments before looking in the {@link SkeletonData#getDefaultSkin() default skin}.
	     * Attachments from the new skin are attached if the corresponding attachment from the old skin was attached. If there was
	     * no old skin, each slot's setup mode attachment is attached from the new skin.
	     * @param newSkin May be null. */
	    setSkin: function (newSkin)
	    {
	        if (newSkin)
	        {
	            if (this.skin)
	                newSkin._attachAll(this, this.skin);
	            else
	            {
	                var slots = this.slots;
	                for (var i = 0, n = slots.length; i < n; i++)
	                {
	                    var slot = slots[i];
	                    var name = slot.data.attachmentName;
	                    if (name)
	                    {
	                        var attachment = newSkin.getAttachment(i, name);
	                        if (attachment) slot.setAttachment(attachment);
	                    }
	                }
	            }
	        }
	        this.skin = newSkin;
	    },
	    /** @return May be null. */
	    getAttachmentBySlotName: function (slotName, attachmentName)
	    {
	        return this.getAttachmentBySlotIndex(this.data.findSlotIndex(slotName), attachmentName);
	    },
	    /** @return May be null. */
	    getAttachmentBySlotIndex: function (slotIndex, attachmentName)
	    {
	        if (this.skin)
	        {
	            var attachment = this.skin.getAttachment(slotIndex, attachmentName);
	            if (attachment) return attachment;
	        }
	        if (this.data.defaultSkin) return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
	        return null;
	    },
	    /** @param attachmentName May be null. */
	    setAttachment: function (slotName, attachmentName)
	    {
	        var slots = this.slots;
	        for (var i = 0, n = slots.length; i < n; i++)
	        {
	            var slot = slots[i];
	            if (slot.data.name == slotName)
	            {
	                var attachment = null;
	                if (attachmentName)
	                {
	                    attachment = this.getAttachmentBySlotIndex(i, attachmentName);
	                    if (!attachment) throw "Attachment not found: " + attachmentName + ", for slot: " + slotName;
	                }
	                slot.setAttachment(attachment);
	                return;
	            }
	        }
	        throw "Slot not found: " + slotName;
	    },
	    /** @return May be null. */
	    findIkConstraint: function (ikConstraintName)
	    {
	        var ikConstraints = this.ikConstraints;
	        for (var i = 0, n = ikConstraints.length; i < n; i++)
	            if (ikConstraints[i].data.name == ikConstraintName) return ikConstraints[i];
	        return null;
	    },
	    update: function (delta)
	    {
	        this.time += delta;
	    },
	    resetDrawOrder: function () {
	        for (var i = 0, n = this.drawOrder.length; i < n; i++)
	        {
	            this.drawOrder[i] = i;
	        }
	    }
	};
	module.exports = spine.Skeleton;
	


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Slot = function (slotData, bone)
	{
	    this.data = slotData;
	    this.bone = bone;
	    this.setToSetupPose();
	};
	spine.Slot.prototype = {
	    r: 1, g: 1, b: 1, a: 1,
	    _attachmentTime: 0,
	    attachment: null,
	    attachmentVertices: [],
	    setAttachment: function (attachment)
	    {
	        this.attachment = attachment;
	        this._attachmentTime = this.bone.skeleton.time;
	        this.attachmentVertices.length = 0;
	    },
	    setAttachmentTime: function (time)
	    {
	        this._attachmentTime = this.bone.skeleton.time - time;
	    },
	    getAttachmentTime: function ()
	    {
	        return this.bone.skeleton.time - this._attachmentTime;
	    },
	    setToSetupPose: function ()
	    {
	        var data = this.data;
	        this.r = data.r;
	        this.g = data.g;
	        this.b = data.b;
	        this.a = data.a;
	        this.blendMode = data.blendMode;
	
	        var slotDatas = this.bone.skeleton.data.slots;
	        for (var i = 0, n = slotDatas.length; i < n; i++)
	        {
	            if (slotDatas[i] == data)
	            {
	                this.setAttachment(!data.attachmentName ? null : this.bone.skeleton.getAttachmentBySlotIndex(i, data.attachmentName));
	                break;
	            }
	        }
	    }
	};
	module.exports = spine.Slot;
	


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.SkeletonData = __webpack_require__(41);
	spine.BoneData = __webpack_require__(27);
	spine.IkConstraintData = __webpack_require__(35);
	spine.SlotData = __webpack_require__(45);
	spine.Skin = __webpack_require__(46);
	spine.EventData = __webpack_require__(31);
	spine.AttachmentType = __webpack_require__(16);
	spine.ColorTimeline = __webpack_require__(29);
	spine.AttachmentTimeline = __webpack_require__(25);
	spine.RotateTimeline = __webpack_require__(38);
	spine.ScaleTimeline = __webpack_require__(39);
	spine.TranslateTimeline = __webpack_require__(47);
	spine.IkConstraintTimeline = __webpack_require__(37);
	spine.FfdTimeline = __webpack_require__(34);
	spine.DrawOrderTimeline = __webpack_require__(30);
	spine.EventTimeline = __webpack_require__(33);
	spine.Event = __webpack_require__(32);
	spine.Animation = __webpack_require__(10);
	
	function LinkedMesh(mesh, skin, slotIndex, parent) {
	    this.mesh = mesh;
	    this.skin = skin;
	    this.slotIndex = slotIndex;
	    this.parent = parent;
	}
	
	spine.SkeletonJsonParser = function (attachmentLoader)
	{
	    this.attachmentLoader = attachmentLoader;
	    this.linkedMeshes = [];
	};
	spine.SkeletonJsonParser.prototype = {
	    scale: 1,
	    readSkeletonData: function (root, name)
	    {
	        var skeletonData = new spine.SkeletonData();
	        skeletonData.name = name;
	
	        // Skeleton.
	        var skeletonMap = root["skeleton"];
	        if (skeletonMap)
	        {
	            skeletonData.hash = skeletonMap["hash"];
	            skeletonData.version = skeletonMap["spine"];
	            skeletonData.width = skeletonMap["width"] || 0;
	            skeletonData.height = skeletonMap["height"] || 0;
	        }
	
	        // Bones.
	        var bones = root["bones"];
	        for (var i = 0, n = bones.length; i < n; i++)
	        {
	            var boneMap = bones[i];
	            var parent = null;
	            if (boneMap["parent"])
	            {
	                parent = skeletonData.findBone(boneMap["parent"]);
	                if (!parent) throw "Parent bone not found: " + boneMap["parent"];
	            }
	            var boneData = new spine.BoneData(boneMap["name"], parent);
	            boneData.length = (boneMap["length"] || 0) * this.scale;
	            boneData.x = (boneMap["x"] || 0) * this.scale;
	            boneData.y = (boneMap["y"] || 0) * this.scale;
	            boneData.rotation = (boneMap["rotation"] || 0);
	            boneData.scaleX = boneMap.hasOwnProperty("scaleX") ? boneMap["scaleX"] : 1;
	            boneData.scaleY = boneMap.hasOwnProperty("scaleY") ? boneMap["scaleY"] : 1;
	            boneData.inheritScale = boneMap.hasOwnProperty("inheritScale") ? boneMap["inheritScale"] : true;
	            boneData.inheritRotation = boneMap.hasOwnProperty("inheritRotation") ? boneMap["inheritRotation"] : true;
	            skeletonData.bones.push(boneData);
	        }
	
	        // IK constraints.
	        var ik = root["ik"];
	        if (ik)
	        {
	            for (var i = 0, n = ik.length; i < n; i++)
	            {
	                var ikMap = ik[i];
	                var ikConstraintData = new spine.IkConstraintData(ikMap["name"]);
	
	                var bones = ikMap["bones"];
	                for (var ii = 0, nn = bones.length; ii < nn; ii++)
	                {
	                    var bone = skeletonData.findBone(bones[ii]);
	                    if (!bone) throw "IK bone not found: " + bones[ii];
	                    ikConstraintData.bones.push(bone);
	                }
	
	                ikConstraintData.target = skeletonData.findBone(ikMap["target"]);
	                if (!ikConstraintData.target) throw "Target bone not found: " + ikMap["target"];
	
	                ikConstraintData.bendDirection = (!ikMap.hasOwnProperty("bendPositive") || ikMap["bendPositive"]) ? 1 : -1;
	                ikConstraintData.mix = ikMap.hasOwnProperty("mix") ? ikMap["mix"] : 1;
	
	                skeletonData.ikConstraints.push(ikConstraintData);
	            }
	        }
	
	        // Slots.
	        var slots = root["slots"];
	        for (var i = 0, n = slots.length; i < n; i++)
	        {
	            var slotMap = slots[i];
	            var boneData = skeletonData.findBone(slotMap["bone"]);
	            if (!boneData) throw "Slot bone not found: " + slotMap["bone"];
	            var slotData = new spine.SlotData(slotMap["name"], boneData);
	
	            var color = slotMap["color"];
	            if (color)
	            {
	                slotData.r = this.toColor(color, 0);
	                slotData.g = this.toColor(color, 1);
	                slotData.b = this.toColor(color, 2);
	                slotData.a = this.toColor(color, 3);
	            }
	
	            slotData.attachmentName = slotMap["attachment"];
	
	
	            slotData.blendMode = slotMap["blend"] && spine.SlotData.PIXI_BLEND_MODE_MAP[slotMap["blend"]] || spine.SlotData.PIXI_BLEND_MODE_MAP['normal'];
	
	            skeletonData.slots.push(slotData);
	        }
	
	        // Skins.
	        var skins = root["skins"];
	        for (var skinName in skins)
	        {
	            if (!skins.hasOwnProperty(skinName)) continue;
	            var skinMap = skins[skinName];
	            var skin = new spine.Skin(skinName);
	            for (var slotName in skinMap)
	            {
	                if (!skinMap.hasOwnProperty(slotName)) continue;
	                var slotIndex = skeletonData.findSlotIndex(slotName);
	                var slotEntry = skinMap[slotName];
	                for (var attachmentName in slotEntry)
	                {
	                    if (!slotEntry.hasOwnProperty(attachmentName)) continue;
	                    var attachment = this.readAttachment(skin, slotIndex, attachmentName, slotEntry[attachmentName]);
	                    if (attachment) skin.addAttachment(slotIndex, attachmentName, attachment);
	                }
	            }
	            skeletonData.skins.push(skin);
	            if (skin.name == "default") skeletonData.defaultSkin = skin;
	        }
	
	        var linkedMeshes = this.linkedMeshes;
	        // Linked meshes.
	        for (var i = 0, n = linkedMeshes.size; i < n; i++) {
	            var linkedMesh = linkedMeshes[i];
	            var skin = linkedMesh.skin ? skeletonData.findSkin(linkedMesh.skin): skeletonData.defaultSkin;
	            var parent = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
	            linkedMesh.mesh.setParentMesh(parent);
	            linkedMesh.mesh.updateUVs();
	        }
	        linkedMeshes.length = 0;
	
	        // Events.
	        var events = root["events"];
	        for (var eventName in events)
	        {
	            if (!events.hasOwnProperty(eventName)) continue;
	            var eventMap = events[eventName];
	            var eventData = new spine.EventData(eventName);
	            eventData.intValue = eventMap["int"] || 0;
	            eventData.floatValue = eventMap["float"] || 0;
	            eventData.stringValue = eventMap["string"] || null;
	            skeletonData.events.push(eventData);
	        }
	
	        // Animations.
	        var animations = root["animations"];
	        for (var animationName in animations)
	        {
	            if (!animations.hasOwnProperty(animationName)) continue;
	            this.readAnimation(animationName, animations[animationName], skeletonData);
	        }
	
	        return skeletonData;
	    },
	    readAttachment: function (skin, slotIndex, name, map)
	    {
	        name = map["name"] || name;
	
	        var type = spine.AttachmentType[map["type"] || "region"];
	        var path = map["path"] || name;
	
	        var scale = this.scale;
	        if (type == spine.AttachmentType.region)
	        {
	            var region = this.attachmentLoader.newRegionAttachment(skin, name, path);
	            if (!region) return null;
	            region.path = path;
	            region.x = (map["x"] || 0) * scale;
	            region.y = (map["y"] || 0) * scale;
	            region.scaleX = map.hasOwnProperty("scaleX") ? map["scaleX"] : 1;
	            region.scaleY = map.hasOwnProperty("scaleY") ? map["scaleY"] : 1;
	            region.rotation = map["rotation"] || 0;
	            region.width = (map["width"] || 0) * scale;
	            region.height = (map["height"] || 0) * scale;
	
	            var color = map["color"];
	            if (color)
	            {
	                region.r = this.toColor(color, 0);
	                region.g = this.toColor(color, 1);
	                region.b = this.toColor(color, 2);
	                region.a = this.toColor(color, 3);
	            }
	
	            region.updateOffset();
	            return region;
	        } else if (type == spine.AttachmentType.boundingbox)
	        {
	            var attachment = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
	            var vertices = map["vertices"];
	            for (var i = 0, n = vertices.length; i < n; i++)
	                attachment.vertices.push(vertices[i] * scale);
	            return attachment;
	        } else if (type == spine.AttachmentType.mesh || type == spine.AttachmentType.linkedmesh)
	        {
	            var mesh = this.attachmentLoader.newMeshAttachment(skin, name, path);
	            if (!mesh) return null;
	            mesh.path = path;
	            color = map["color"];
	            if (color)
	            {
	                mesh.r = this.toColor(color, 0);
	                mesh.g = this.toColor(color, 1);
	                mesh.b = this.toColor(color, 2);
	                mesh.a = this.toColor(color, 3);
	            }
	            mesh.width = (map["width"] || 0) * scale;
	            mesh.height = (map["height"] || 0) * scale;
	
	            var parent = map["parent"];
	            if (!parent) {
	                mesh.vertices = this.getFloatArray(map, "vertices", scale);
	                mesh.triangles = this.getIntArray(map, "triangles");
	                mesh.regionUVs = this.getFloatArray(map, "uvs", 1);
	                mesh.updateUVs();
	                mesh.hullLength = (map["hull"] || 0) * 2;
	                if (map["edges"]) mesh.edges = this.getIntArray(map, "edges");
	            } else {
	                mesh.inheritFFD = !!map["ffd"];
	                this.linkedMeshes.push(new LinkedMesh(mesh, map["skin"] || null, slotIndex, parent));
	            }
	            return mesh;
	        } else if (type == spine.AttachmentType.weightedmesh || type == spine.AttachmentType.weightedlinkedmesh)
	        {
	            var mesh = this.attachmentLoader.newWeightedMeshAttachment(skin, name, path);
	            if (!mesh) return null;
	            mesh.path = path;
	            color = map["color"];
	            if (color)
	            {
	                mesh.r = this.toColor(color, 0);
	                mesh.g = this.toColor(color, 1);
	                mesh.b = this.toColor(color, 2);
	                mesh.a = this.toColor(color, 3);
	            }
	            mesh.width = (map["width"] || 0) * scale;
	            mesh.height = (map["height"] || 0) * scale;
	
	            var parent = map["parent"];
	            if (!parent) {
	                var uvs = this.getFloatArray(map, "uvs", 1);
	                var vertices = this.getFloatArray(map, "vertices", 1);
	                var weights = [];
	                var bones = [];
	                for (var i = 0, n = vertices.length; i < n; )
	                {
	                    var boneCount = vertices[i++] | 0;
	                    bones[bones.length] = boneCount;
	                    for (var nn = i + boneCount * 4; i < nn; )
	                    {
	                        bones[bones.length] = vertices[i];
	                        weights[weights.length] = vertices[i + 1] * scale;
	                        weights[weights.length] = vertices[i + 2] * scale;
	                        weights[weights.length] = vertices[i + 3];
	                        i += 4;
	                    }
	                }
	                mesh.bones = bones;
	                mesh.weights = weights;
	                mesh.triangles = this.getIntArray(map, "triangles");
	                mesh.regionUVs = uvs;
	                mesh.updateUVs();
	
	                mesh.hullLength = (map["hull"] || 0) * 2;
	                if (map["edges"]) mesh.edges = this.getIntArray(map, "edges");
	            } else {
	                mesh.inheritFFD = !!map["ffd"];
	                this.linkedMeshes.push(new LinkedMesh(mesh, map["skin"] || null, slotIndex, parent));
	            }
	            return mesh;
	        }
	        throw "Unknown attachment type: " + type;
	    },
	    readAnimation: function (name, map, skeletonData)
	    {
	        var timelines = [];
	        var duration = 0;
	
	        var slots = map["slots"];
	        for (var slotName in slots)
	        {
	            if (!slots.hasOwnProperty(slotName)) continue;
	            var slotMap = slots[slotName];
	            var slotIndex = skeletonData.findSlotIndex(slotName);
	
	            for (var timelineName in slotMap)
	            {
	                if (!slotMap.hasOwnProperty(timelineName)) continue;
	                var values = slotMap[timelineName];
	                if (timelineName == "color")
	                {
	                    var timeline = new spine.ColorTimeline(values.length);
	                    timeline.slotIndex = slotIndex;
	
	                    var frameIndex = 0;
	                    for (var i = 0, n = values.length; i < n; i++)
	                    {
	                        var valueMap = values[i];
	                        var color = valueMap["color"];
	                        var r = this.toColor(color, 0);
	                        var g = this.toColor(color, 1);
	                        var b = this.toColor(color, 2);
	                        var a = this.toColor(color, 3);
	                        timeline.setFrame(frameIndex, valueMap["time"], r, g, b, a);
	                        this.readCurve(timeline, frameIndex, valueMap);
	                        frameIndex++;
	                    }
	                    timelines.push(timeline);
	                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 5 - 5]);
	
	                } else if (timelineName == "attachment")
	                {
	                    var timeline = new spine.AttachmentTimeline(values.length);
	                    timeline.slotIndex = slotIndex;
	
	                    var frameIndex = 0;
	                    for (var i = 0, n = values.length; i < n; i++)
	                    {
	                        var valueMap = values[i];
	                        timeline.setFrame(frameIndex++, valueMap["time"], valueMap["name"]);
	                    }
	                    timelines.push(timeline);
	                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
	
	                } else
	                    throw "Invalid timeline type for a slot: " + timelineName + " (" + slotName + ")";
	            }
	        }
	
	        var bones = map["bones"];
	        for (var boneName in bones)
	        {
	            if (!bones.hasOwnProperty(boneName)) continue;
	            var boneIndex = skeletonData.findBoneIndex(boneName);
	            if (boneIndex == -1) throw "Bone not found: " + boneName;
	            var boneMap = bones[boneName];
	
	            for (var timelineName in boneMap)
	            {
	                if (!boneMap.hasOwnProperty(timelineName)) continue;
	                var values = boneMap[timelineName];
	                if (timelineName == "rotate")
	                {
	                    var timeline = new spine.RotateTimeline(values.length);
	                    timeline.boneIndex = boneIndex;
	
	                    var frameIndex = 0;
	                    for (var i = 0, n = values.length; i < n; i++)
	                    {
	                        var valueMap = values[i];
	                        timeline.setFrame(frameIndex, valueMap["time"], valueMap["angle"]);
	                        this.readCurve(timeline, frameIndex, valueMap);
	                        frameIndex++;
	                    }
	                    timelines.push(timeline);
	                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 2 - 2]);
	
	                } else if (timelineName == "translate" || timelineName == "scale")
	                {
	                    var timeline;
	                    var timelineScale = 1;
	                    if (timelineName == "scale")
	                        timeline = new spine.ScaleTimeline(values.length);
	                    else
	                    {
	                        timeline = new spine.TranslateTimeline(values.length);
	                        timelineScale = this.scale;
	                    }
	                    timeline.boneIndex = boneIndex;
	
	                    var frameIndex = 0;
	                    for (var i = 0, n = values.length; i < n; i++)
	                    {
	                        var valueMap = values[i];
	                        var x = (valueMap["x"] || 0) * timelineScale;
	                        var y = (valueMap["y"] || 0) * timelineScale;
	                        timeline.setFrame(frameIndex, valueMap["time"], x, y);
	                        this.readCurve(timeline, frameIndex, valueMap);
	                        frameIndex++;
	                    }
	                    timelines.push(timeline);
	                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 3 - 3]);
	
	                } else if (timelineName == "flipX" || timelineName == "flipY")
	                {
	                    throw "flipX and flipY are not supported in spine v3: (" + boneName + ")";
	                } else
	                    throw "Invalid timeline type for a bone: " + timelineName + " (" + boneName + ")";
	            }
	        }
	
	        var ikMap = map["ik"];
	        for (var ikConstraintName in ikMap)
	        {
	            if (!ikMap.hasOwnProperty(ikConstraintName)) continue;
	            var ikConstraint = skeletonData.findIkConstraint(ikConstraintName);
	            var values = ikMap[ikConstraintName];
	            var timeline = new spine.IkConstraintTimeline(values.length);
	            timeline.ikConstraintIndex = skeletonData.ikConstraints.indexOf(ikConstraint);
	            var frameIndex = 0;
	            for (var i = 0, n = values.length; i < n; i++)
	            {
	                var valueMap = values[i];
	                var mix = valueMap.hasOwnProperty("mix") ? valueMap["mix"] : 1;
	                var bendDirection = (!valueMap.hasOwnProperty("bendPositive") || valueMap["bendPositive"]) ? 1 : -1;
	                timeline.setFrame(frameIndex, valueMap["time"], mix, bendDirection);
	                this.readCurve(timeline, frameIndex, valueMap);
	                frameIndex++;
	            }
	            timelines.push(timeline);
	            duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 3 - 3]);
	        }
	
	        var ffd = map["ffd"];
	        for (var skinName in ffd)
	        {
	            var skin = skeletonData.findSkin(skinName);
	            var slotMap = ffd[skinName];
	            for (slotName in slotMap)
	            {
	                var slotIndex = skeletonData.findSlotIndex(slotName);
	                var meshMap = slotMap[slotName];
	                for (var meshName in meshMap)
	                {
	                    var values = meshMap[meshName];
	                    var timeline = new spine.FfdTimeline(values.length);
	                    var attachment = skin.getAttachment(slotIndex, meshName);
	                    if (!attachment) throw "FFD attachment not found: " + meshName;
	                    timeline.slotIndex = slotIndex;
	                    timeline.attachment = attachment;
	
	                    var isMesh = attachment.type == spine.AttachmentType.mesh;
	                    var vertexCount;
	                    if (isMesh)
	                        vertexCount = attachment.vertices.length;
	                    else
	                        vertexCount = attachment.weights.length / 3 * 2;
	
	                    var frameIndex = 0;
	                    for (var i = 0, n = values.length; i < n; i++)
	                    {
	                        var valueMap = values[i];
	                        var vertices;
	                        if (!valueMap["vertices"])
	                        {
	                            if (isMesh)
	                                vertices = attachment.vertices;
	                            else
	                            {
	                                vertices = [];
	                                for (var j = 0; j < vertexCount; ++j) vertices.push(0); //initialize to 0
	                            }
	                        } else {
	                            var verticesValue = valueMap["vertices"];
	                            vertices = [];
	                            for (var j = 0; j < vertexCount; ++j) vertices.push(0); //initialize to 0
	                            var start = valueMap["offset"] || 0;
	                            var nn = verticesValue.length;
	                            if (this.scale == 1)
	                            {
	                                for (var ii = 0; ii < nn; ii++)
	                                    vertices[ii + start] = verticesValue[ii];
	                            } else {
	                                for (var ii = 0; ii < nn; ii++)
	                                    vertices[ii + start] = verticesValue[ii] * this.scale;
	                            }
	                            if (isMesh)
	                            {
	                                var meshVertices = attachment.vertices;
	                                for (var ii = 0, nn = vertices.length; ii < nn; ii++)
	                                    vertices[ii] += meshVertices[ii];
	                            }
	                        }
	
	                        timeline.setFrame(frameIndex, valueMap["time"], vertices);
	                        this.readCurve(timeline, frameIndex, valueMap);
	                        frameIndex++;
	                    }
	                    timelines[timelines.length] = timeline;
	                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
	                }
	            }
	        }
	
	        var drawOrderValues = map["drawOrder"];
	        if (!drawOrderValues) drawOrderValues = map["draworder"];
	        if (drawOrderValues)
	        {
	            var timeline = new spine.DrawOrderTimeline(drawOrderValues.length);
	            var slotCount = skeletonData.slots.length;
	            var frameIndex = 0;
	            for (var i = 0, n = drawOrderValues.length; i < n; i++)
	            {
	                var drawOrderMap = drawOrderValues[i];
	                var drawOrder = null;
	                if (drawOrderMap["offsets"])
	                {
	                    drawOrder = [];
	                    drawOrder.length = slotCount;
	                    for (var ii = slotCount - 1; ii >= 0; ii--)
	                        drawOrder[ii] = -1;
	                    var offsets = drawOrderMap["offsets"];
	                    var unchanged = [];
	                    unchanged.length = slotCount - offsets.length;
	                    var originalIndex = 0, unchangedIndex = 0;
	                    for (var ii = 0, nn = offsets.length; ii < nn; ii++)
	                    {
	                        var offsetMap = offsets[ii];
	                        var slotIndex = skeletonData.findSlotIndex(offsetMap["slot"]);
	                        if (slotIndex == -1) throw "Slot not found: " + offsetMap["slot"];
	                        // Collect unchanged items.
	                        while (originalIndex != slotIndex)
	                            unchanged[unchangedIndex++] = originalIndex++;
	                        // Set changed items.
	                        drawOrder[originalIndex + offsetMap["offset"]] = originalIndex++;
	                    }
	                    // Collect remaining unchanged items.
	                    while (originalIndex < slotCount)
	                        unchanged[unchangedIndex++] = originalIndex++;
	                    // Fill in unchanged items.
	                    for (var ii = slotCount - 1; ii >= 0; ii--)
	                        if (drawOrder[ii] == -1) drawOrder[ii] = unchanged[--unchangedIndex];
	                }
	                timeline.setFrame(frameIndex++, drawOrderMap["time"], drawOrder);
	            }
	            timelines.push(timeline);
	            duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
	        }
	
	        var events = map["events"];
	        if (events)
	        {
	            var timeline = new spine.EventTimeline(events.length);
	            var frameIndex = 0;
	            for (var i = 0, n = events.length; i < n; i++)
	            {
	                var eventMap = events[i];
	                var eventData = skeletonData.findEvent(eventMap["name"]);
	                if (!eventData) throw "Event not found: " + eventMap["name"];
	                var event = new spine.Event(eventData);
	                event.intValue = eventMap.hasOwnProperty("int") ? eventMap["int"] : eventData.intValue;
	                event.floatValue = eventMap.hasOwnProperty("float") ? eventMap["float"] : eventData.floatValue;
	                event.stringValue = eventMap.hasOwnProperty("string") ? eventMap["string"] : eventData.stringValue;
	                timeline.setFrame(frameIndex++, eventMap["time"], event);
	            }
	            timelines.push(timeline);
	            duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
	        }
	
	        skeletonData.animations.push(new spine.Animation(name, timelines, duration));
	    },
	    readCurve: function (timeline, frameIndex, valueMap)
	    {
	        var curve = valueMap["curve"];
	        if (!curve)
	            timeline.curves.setLinear(frameIndex);
	        else if (curve == "stepped")
	            timeline.curves.setStepped(frameIndex);
	        else if (curve instanceof Array)
	            timeline.curves.setCurve(frameIndex, curve[0], curve[1], curve[2], curve[3]);
	    },
	    toColor: function (hexString, colorIndex)
	    {
	        if (hexString.length != 8) throw "Color hexidecimal length must be 8, recieved: " + hexString;
	        return parseInt(hexString.substring(colorIndex * 2, (colorIndex * 2) + 2), 16) / 255;
	    },
	    getFloatArray: function (map, name, scale)
	    {
	        var list = map[name];
	        var values = new spine.Float32Array(list.length);
	        var i = 0, n = list.length;
	        if (scale == 1)
	        {
	            for (; i < n; i++)
	                values[i] = list[i];
	        } else {
	            for (; i < n; i++)
	                values[i] = list[i] * scale;
	        }
	        return values;
	    },
	    getIntArray: function (map, name)
	    {
	        var list = map[name];
	        var values = new spine.Uint16Array(list.length);
	        for (var i = 0, n = list.length; i < n; i++)
	            values[i] = list[i] | 0;
	        return values;
	    }
	};
	module.exports = spine.SkeletonJsonParser;
	


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.SlotData = function (name, boneData)
	{
	    this.name = name;
	    this.boneData = boneData;
	};
	
	spine.SlotData.PIXI_BLEND_MODE_MAP = {
	    'multiply': PIXI.BLEND_MODES.MULTIPLY,
	    'screen': PIXI.BLEND_MODES.SCREEN,
	    'additive': PIXI.BLEND_MODES.ADD,
	    'normal': PIXI.BLEND_MODES.NORMAL
	};
	
	spine.SlotData.prototype = {
	    r: 1, g: 1, b: 1, a: 1,
	    attachmentName: null,
	    blendMode: PIXI.BLEND_MODES.NORMAL
	
	
	};
	
	
	module.exports = spine.SlotData;
	


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Skin = function (name)
	{
	    this.name = name;
	    this.attachments = {};
	};
	spine.Skin.prototype = {
	    addAttachment: function (slotIndex, name, attachment)
	    {
	        this.attachments[slotIndex + ":" + name] = attachment;
	    },
	    getAttachment: function (slotIndex, name)
	    {
	        return this.attachments[slotIndex + ":" + name];
	    },
	    _attachAll: function (skeleton, oldSkin)
	    {
	        for (var key in oldSkin.attachments)
	        {
	            var colon = key.indexOf(":");
	            var slotIndex = parseInt(key.substring(0, colon));
	            var name = key.substring(colon + 1);
	            var slot = skeleton.slots[slotIndex];
	            if (slot.attachment && slot.attachment.name == name)
	            {
	                var attachment = this.getAttachment(slotIndex, name);
	                if (attachment) slot.setAttachment(attachment);
	            }
	        }
	    }
	};
	module.exports = spine.Skin;
	


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(9);
	spine.Animation = __webpack_require__(10);
	spine.Curves = __webpack_require__(26);
	spine.TranslateTimeline = function (frameCount)
	{
	    this.curves = new spine.Curves(frameCount);
	    this.frames = []; // time, x, y, ...
	    this.frames.length = frameCount * 3;
	};
	spine.TranslateTimeline.prototype = {
	    boneIndex: 0,
	    getFrameCount: function ()
	    {
	        return this.frames.length / 3;
	    },
	    setFrame: function (frameIndex, time, x, y)
	    {
	        frameIndex *= 3;
	        this.frames[frameIndex] = time;
	        this.frames[frameIndex + 1] = x;
	        this.frames[frameIndex + 2] = y;
	    },
	    apply: function (skeleton, lastTime, time, firedEvents, alpha)
	    {
	        var frames = this.frames;
	        if (time < frames[0]) return; // Time is before first frame.
	
	        var bone = skeleton.bones[this.boneIndex];
	
	        if (time >= frames[frames.length - 3])
	        { // Time is after last frame.
	            bone.x += (bone.data.x + frames[frames.length - 2] - bone.x) * alpha;
	            bone.y += (bone.data.y + frames[frames.length - 1] - bone.y) * alpha;
	            return;
	        }
	
	        // Interpolate between the previous frame and the current frame.
	        var frameIndex = spine.Animation.binarySearch(frames, time, 3);
	        var prevFrameX = frames[frameIndex - 2];
	        var prevFrameY = frames[frameIndex - 1];
	        var frameTime = frames[frameIndex];
	        var percent = 1 - (time - frameTime) / (frames[frameIndex + -3/*PREV_FRAME_TIME*/] - frameTime);
	        percent = this.curves.getCurvePercent(frameIndex / 3 - 1, percent);
	
	        bone.x += (bone.data.x + prevFrameX + (frames[frameIndex + 1/*FRAME_X*/] - prevFrameX) * percent - bone.x) * alpha;
	        bone.y += (bone.data.y + prevFrameY + (frames[frameIndex + 2/*FRAME_Y*/] - prevFrameY) * percent - bone.y) * alpha;
	    }
	};
	module.exports = spine.TranslateTimeline;
	


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var Resource = PIXI.loaders.Resource,
	    spine = __webpack_require__(8),
	    imageLoaderAdapter = __webpack_require__(49);
	
	var atlasParser = module.exports = function () {
	    return function (resource, next) {
	        // skip if no data, its not json, or it isn't atlas data
	        if (!resource.data || !resource.isJson || !resource.data.bones) {
	            return next();
	        }
	
	        /**
	         * use a bit of hackery to load the atlas file, here we assume that the .json, .atlas and .png files
	         * that correspond to the spine file are in the same base URL and that the .json and .atlas files
	         * have the same name
	         */
	        var atlasPath = resource.url.substr(0, resource.url.lastIndexOf('.')) + '.atlas';
	        var atlasOptions = {
	            crossOrigin: resource.crossOrigin,
	            xhrType: Resource.XHR_RESPONSE_TYPE.TEXT,
	            metadata: resource.metadata.spineMetadata
	        };
	        var imageOptions = {
	            crossOrigin: resource.crossOrigin,
	            metadata: resource.metadata.imageMetadata
	        };
	        var baseUrl = resource.url.substr(0, resource.url.lastIndexOf('/') + 1);
	
	        var adapter = imageLoaderAdapter(this, resource.name + '_atlas_page_', baseUrl, imageOptions);
	        this.add(resource.name + '_atlas', atlasPath, atlasOptions, function (res) {
	            new spine.Atlas(this.xhr.responseText, adapter, function(spineAtlas) {
	                var spineJsonParser = new spine.SkeletonJsonParser(new spine.AtlasAttachmentParser(spineAtlas));
	                var skeletonData = spineJsonParser.readSkeletonData(resource.data);
	
	                resource.spineData = skeletonData;
	                resource.spineAtlas = spineAtlas;
	                if (atlasParser.enableCaching)
	                    atlasParser.AnimCache[resource.name] = resource.spineData;
	
	                next();
	            });
	        });
	    };
	};
	
	atlasParser.AnimCache = {};
	atlasParser.enableCaching = true;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var spine = __webpack_require__(8);
	
	module.exports = function (loader, namePrefix, baseUrl, imageOptions) {
	    if (baseUrl && baseUrl.lastIndexOf('/') !== (baseUrl.length-1))
	    {
	        baseUrl += '/';
	    }
	    return function(line, callback) {
	        var name = namePrefix + line;
	        var url = baseUrl + line;
	        loader.add(name, url, imageOptions, function(resource) {
	            callback(resource.texture.baseTexture);
	        });
	    }
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    atlasParser: __webpack_require__(48),
	    Loader: __webpack_require__(51),
	    syncImageLoaderAdapter: __webpack_require__(24),
	    imageLoaderAdapter: __webpack_require__(49)
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file        Spine resource loader
	 * @author      Ivan Popelyshev <ivan.popelyshev@gmail.com>
	 * @copyright   2013-2015 GoodBoyDigital
	 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
	 */
	
	/**
	 * @namespace PIXI.loaders
	 */
	
	var atlasParser = __webpack_require__(48);
	
	PIXI.loaders.Loader.addPixiMiddleware(atlasParser);
	PIXI.loader.use(atlasParser());


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var helper = helper || {}; /**
	                            * Created by wizard on 16/3/30.
	                            */
	
	helper.scaleToWindow = function (renderer, stage) {
	  var scaleX = window.innerWidth / 480;
	  var scaleY = window.innerHeight / 754;
	  var scale = Math.min(scaleX, scaleY);
	
	  var width = 480 * scale;
	  var height = 754 * scale;
	
	  var canvas = renderer.view;
	  canvas.style.padding = 0;
	  canvas.style.margin = 0;
	
	  var margin = (window.innerWidth - width) / 2;
	  canvas.style.marginLeft = margin + "px";
	  canvas.style.marginRight = margin + "px";
	
	  //canvas.style.transformOrigin = "0 0";
	  //canvas.style.transform = "scale(" + scale + ")";
	
	  //renderer.autoResize = true;
	  renderer.resize(width, height);
	  stage.scale.x = scale;
	  stage.scale.y = scale;
	};
	
	helper.reorderNode = function (node) {
	  var depthCompare = function depthCompare(a, b) {
	    var az = a.zorder;
	    var bz = b.zorder;
	    if (az == undefined) {
	      az = 0;
	    }
	    if (bz == undefined) {
	      bz = 0;
	    }
	    if (az < bz) return -1;
	    if (az > bz) return 1;
	    return 0;
	  };
	
	  node.children.sort(depthCompare);
	};
	
	//only for layout
	helper.copyObject = function (obj, id) {
	  var that = {};
	  for (var i in obj) {
	    that[i] = obj[i];
	  }
	  that.id = id;
	  return that;
	};
	
	helper.createSprite = function (res) {
	  var sprite = new PIXI.Sprite(_imports.ResourceManager.resource[res].texture);
	  return sprite;
	};
	
	helper.wordWrapText = function (textObj, string) {
	  var textString = string ? string : textObj.text;
	  var wordWrap = textObj._style.wordWrap;
	  var wordWrapWidth = textObj._style.wordWrapWidth;
	  var textWidth = textObj.width; //***保留此行 计算宽度
	  if (!wordWrap) {
	    return;
	  };
	  var newStr = "";
	  var wordWrapLeftWidth = wordWrapWidth;
	  for (var i = 0; i < textString.length; i++) {
	    var width = textObj.context.measureText(textString[i]).width;
	    if (wordWrapLeftWidth < width) {
	      wordWrapLeftWidth = wordWrapWidth;
	      newStr = newStr + "\n";
	    }
	    newStr += textString[i];
	    wordWrapLeftWidth -= width;
	  }
	  textObj.text = newStr;
	};
	
	exports.default = helper;

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by hewenlong on 16-3-18.
	 */
	
	var ResourceManager = ResourceManager || function () {
	  var that = {};
	
	  var _loadingMap = {};
	  that.resource = {};
	
	  var _loadingUIMap = {};
	  that.uiLoaded = {};
	
	  var resourcePath = '';
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
	      EZGUI.Theme.load([resourcePath + name], function () {
	        that.uiLoaded[name] = true;
	        for (var i = 0; i < cbList.length; ++i) {
	          console.log("res load: " + name);
	          cbList[i].call(this);
	        }
	        delete _loadingUIMap[name];
	      });
	    } else {
	      cbList.push(cb);
	    }
	  };
	
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
	      console.log('loadMap', resourcePath + name);
	      PIXI.loader.add(name, resourcePath + name).load(function (loader, res) {
	        that.resource[name] = res[name];
	        for (var i = 0; i < cbList.length; ++i) {
	          console.log("res load: " + name);
	          cbList[i].call(this, that.resource[name], name);
	        }
	        delete _loadingMap[name];
	      });
	    } else {
	      cbList.push(cb);
	    }
	  };
	
	  that.loadList = function (resList, cb) {
	    var loadedCnt = 0;
	    var checkEndFunc = function checkEndFunc() {
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
	}();
	
	exports.default = ResourceManager;

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by wizard on 16/3/30.
	 */
	
	var fpsLimits = 1000 / 60;
	
	var Director = function Director(width, height) {
	    var that = {};
	
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
	
	        var stepOnce = function stepOnce(timestamp) {
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
	    };
	
	    return that;
	};
	
	var SharedDirector = SharedDirector || function () {
	    var that = {};
	    var sharedDirector = null;
	    that.create = function (width, height) {
	        sharedDirector = Director(width, height);
	        return sharedDirector;
	    };
	
	    that.sharedDirector = function () {
	        return sharedDirector;
	    };
	
	    return that;
	}();
	
	exports.default = SharedDirector;

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by wizard on 16/4/1.
	 */
	
	var timeoutLimit = 30 * 1000;
	
	var SRequest = SRequest || function () {
	    var that = {};
	
	    that.get = function (baseURL, handlerURL, params, cb) {
	        var xhr = new XMLHttpRequest();
	
	        var paramStr = "";
	        if (params) {
	            var isStart = true;
	            for (var index in params) {
	                if (isStart) {
	                    isStart = false;
	                    paramStr += "?";
	                } else {
	                    paramStr += "&";
	                }
	                paramStr += index + "=" + params[index];
	            }
	        }
	        console.log("get string: " + baseURL + handlerURL + paramStr);
	
	        xhr.open("GET", baseURL + handlerURL + paramStr, true);
	        xhr.timeout = timeoutLimit;
	        xhr.onload = function () {
	            var data = JSON.parse(xhr.responseText);
	            if (cb) {
	                cb.call(this, data);
	            }
	        };
	        xhr.ontimeout = function () {
	            if (cb) {
	                cb.call(this, { timeout: true });
	            }
	        };
	        xhr.send();
	    };
	
	    that.post = function (baseURL, handlerURL, params, cb) {
	
	        var xhr = new XMLHttpRequest(); // new HttpRequest instance
	        xhr.open("POST", baseURL + handlerURL, true);
	        xhr.timeout = timeoutLimit;
	        xhr.onload = function () {
	            var data = JSON.parse(xhr.responseText);
	            if (cb) {
	                cb.call(this, data);
	            }
	        };
	        xhr.ontimeout = function () {
	            if (cb) {
	                cb.call(this, { timeout: true });
	            }
	        };
	        xhr.send(JSON.stringify(params));
	    };
	
	    return that;
	}();
	
	exports.default = SRequest;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helper = __webpack_require__(52);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseWorld = function BaseWorld() {
	  var that = {};
	
	  that.node = null;
	
	  that.init = function () {
	    that.node = new PIXI.Container();
	    return true;
	  };
	
	  that.update = function (dt) {
	    //console.log("update now:" + dt );
	  };
	
	  that.lock2Layer = function (layer) {
	    _helper2.default.reorderNode(that.node);
	
	    for (var i = 0; i < that.node.children.length; ++i) {
	      if (that.node.children[i] == layer.node) {
	        break;
	      }
	      that.node.children[i].interactiveChildren = false;
	    }
	  };
	
	  that.unlock2Layer = function (layer) {
	
	    //that.node.interactiveChildren = true;
	    for (var i = 0; i < that.node.children.length; ++i) {
	      if (that.node.children[i] == layer.node) {
	        break;
	      }
	      that.node.children[i].interactiveChildren = true;
	    }
	
	    that.node.removeChild(layer.node);
	  };
	
	  return that;
	}; /**
	    * Created by wizard on 16/3/30.
	    */
	
	exports.default = BaseWorld;

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/3/30.
	 */
	
	var BaseLayer = function BaseLayer(layout, theme) {
	  var that = {};
	
	  that.node = EZGUI.create(layout, theme);
	  that.node.zorder = 0;
	
	  that.owner = null;
	
	  that.init = function () {
	
	    return true;
	  };
	
	  that.add2World = function (world) {
	    world.node.addChild(that.node);
	    that.owner = world;
	  };
	
	  that.removeFromWorld = function () {
	    that.owner.node.removeChild(that.node);
	    that.owner = null;
	  };
	
	  return that;
	};
	exports.default = BaseLayer;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _inherited = __webpack_require__(59);
	
	var _inherited2 = _interopRequireDefault(_inherited);
	
	var _baseLayer = __webpack_require__(57);
	
	var _baseLayer2 = _interopRequireDefault(_baseLayer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/31.
	 */
	
	var ModelLayer = function ModelLayer(layout, theme) {
	    var that = (0, _inherited2.default)((0, _baseLayer2.default)(layout, theme));
	
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
	};
	exports.default = ModelLayer;

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by wizard on 15/3/3.
	 */
	var Inherited = function Inherited(obj) {
	    var registry = {};
	
	    obj.inheritOn = function (name, handler) {
	
	        if (!obj.hasOwnProperty(name)) {
	            obj[name] = handler;
	            return;
	        }
	
	        if (registry.hasOwnProperty(name)) {
	            registry[name].push(handler);
	        } else {
	            var parentHandler = obj[name];
	            registry[name] = [parentHandler, handler];
	
	            obj[name] = function () {
	                var result = void 0;
	                var handlerList = registry[name];
	                for (var index in handlerList) {
	                    result = handlerList[index].apply(this, arguments);
	                    if (result != undefined && !result) {
	                        return result;
	                    }
	                }
	
	                return result;
	            };
	        }
	    };
	
	    return obj;
	};
	
	exports.default = Inherited;

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Eventuality = function Eventuality(obj) {
	    var registry = {};
	
	    obj.fire = function (event) {
	
	        var handler = null;
	
	        if (registry.hasOwnProperty(event)) {
	            var event_list = registry[event];
	            for (var i = 0; i < event_list.length; ++i) {
	                handler = event_list[i];
	                var args = [];
	
	                //not including event
	                for (var n = 1; n < arguments.length; ++n) {
	                    args.push(arguments[n]);
	                }
	                handler.apply(this, args);
	            }
	        }
	
	        return this;
	    };
	
	    obj.on = function (type, method) {
	        if (registry.hasOwnProperty(type)) {
	            registry[type].push(method);
	        } else {
	            registry[type] = [method];
	        }
	
	        return this;
	    };
	
	    obj.removeListener = function (type, method) {
	        if (!registry.hasOwnProperty(type)) {
	            return false;
	        }
	        var index = registry[type].indexOf(method);
	        if (index >= 0) {
	            registry[type].splice(index, 1);
	        }
	    };
	
	    obj.removeAllListeners = function () {
	        registry = {};
	    };
	    return obj;
	};
	exports.default = Eventuality;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _petActor = __webpack_require__(62);
	
	var _petActor2 = _interopRequireDefault(_petActor);
	
	var _gameDefines = __webpack_require__(63);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _menuLayer = __webpack_require__(64);
	
	var _menuLayer2 = _interopRequireDefault(_menuLayer);
	
	var _test2World = __webpack_require__(69);
	
	var _test2World2 = _interopRequireDefault(_test2World);
	
	var _resources = __webpack_require__(70);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _skillListLayer = __webpack_require__(71);
	
	var _skillListLayer2 = _interopRequireDefault(_skillListLayer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TestWorld = function TestWorld() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseWorld)());
	
	  that.inheritOn('init', function () {
	
	    _imports.ResourceManager.load(_resources2.default.json_cat_5, function (res, name) {
	      var options = {
	        type: "spine",
	        spineData: res.spineData
	      };
	
	      var petActor = (0, _petActor2.default)(options);
	      petActor.init(that.node);
	      petActor.node.position.x = 120;
	      petActor.node.position.y = 750;
	      petActor.node.zorder = 4;
	
	      _imports.Helper.reorderNode(that.node);
	    });
	
	    _imports.ResourceManager.loadList([_resources2.default.json_pet1, _resources2.default.json_pet2, _resources2.default.json_pet3], function () {
	      var options = {
	        type: "frame",
	        animates: {
	          idle: {
	            pre: "stand",
	            start: 1,
	            end: 15,
	            speed: 0.5
	          },
	          upgrade: {
	            pre: "weishi",
	            start: 1,
	            end: 8
	          }
	        }
	      };
	
	      var petActor = (0, _petActor2.default)(options);
	      petActor.init(that.node);
	      petActor.node.position.x = 360;
	      petActor.node.position.y = 750;
	      petActor.node.zorder = 4;
	      _imports.Helper.reorderNode(that.node);
	    });
	
	    var menu = (0, _menuLayer2.default)();
	    menu.init();
	    menu.add2World(that);
	
	    var graphics = new PIXI.Graphics();
	    graphics.beginFill(0xff0000);
	    graphics.lineStyle(10, 0xffd900, 1);
	    graphics.drawCircle(200, 200, 100);
	    graphics.endFill();
	    that.node.addChild(graphics);
	    //ResourceManager.load(resource.skill_ui, function (res, name) {
	    //  var list = [
	    //    {id: 0},
	    //    {id: 1},
	    //    {id: 2},
	    //    {id: 3},
	    //    {id: 4}
	    //  ];
	    //  let skillLayer = SkillLayer(list);
	    //  skillLayer.init();
	    //  skillLayer.add2World(that);
	    //});
	
	    _imports.Helper.reorderNode(that.node);
	
	    return true;
	  });
	
	  that.inheritOn('update', function (dt) {});
	
	  return that;
	}; /**
	    * Created by wizard on 16/3/30.
	    */
	
	exports.default = TestWorld;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _gameDefines = __webpack_require__(63);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _imports = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/15.
	 */
	//var PIXI = require("pixi.js");
	//PIXI.spine = require("pixi-spine");
	
	var PetActor = function PetActor(options) {
	  var that = {};
	
	  that.init = function (container) {
	
	    var ani = _imports.AnimationFactor.createAnimation(options);
	
	    ani.playLoop('idle');
	
	    container.addChild(ani.node);
	
	    ani.node.interactive = true;
	
	    ani.node.on('click', function () {
	      ani.playOnce('upgrade', function () {
	        ani.playLoop("idle");
	      });
	    });
	
	    that.node = ani.node;
	  };
	
	  that.update = function (dt) {};
	
	  return that;
	};
	
	exports.default = PetActor;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/3/14.
	 */
	
	var defines = {};
	
	if (true) {
	  defines.rootPath = "./";
	  defines.resPath = "./assets/";
	} else {
	  defines.rootPath = "games/test_ui/";
	  defines.resPath = "games/test_ui/assets/";
	}
	
	var Width = 480,
	    Height = 754;
	defines.Canvas = {
	  width: Width,
	  height: Height,
	  posX_center: Width * 0.5,
	  posY_center: Height * 0.5
	
	};
	defines.gameTheme = 'kenney';
	
	defines.gameURL = "http://120.131.69.135:18888/";
	
	exports.default = defines;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _mainUi = __webpack_require__(65);
	
	var _mainUi2 = _interopRequireDefault(_mainUi);
	
	var _gameGlobal = __webpack_require__(66);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _infoLayer = __webpack_require__(67);
	
	var _infoLayer2 = _interopRequireDefault(_infoLayer);
	
	var _test2World = __webpack_require__(69);
	
	var _test2World2 = _interopRequireDefault(_test2World);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MenuLayer = function MenuLayer() {
	    var that = (0, _imports.Inherited)((0, _imports.BaseLayer)(_mainUi2.default, 'kenney'));
	    var director = _imports.Director.sharedDirector();
	    that.inheritOn('init', function () {
	
	        EZGUI.components.btn1.on('click', function (event) {
	            //gameGlobal.events.fire("startWorld2");
	
	            var infoLayer = (0, _infoLayer2.default)();
	            infoLayer.init();
	            infoLayer.add2World(that.owner);
	        });
	
	        EZGUI.components.btn2.on('click', function (event) {
	            //gameGlobal.events.fire("startWorld2");
	            var test2World = (0, _test2World2.default)();
	            test2World.init();
	            director.startWorld(test2World);
	        });
	
	        return true;
	    });
	
	    return that;
	}; /**
	    * Created by wizard on 16/3/31.
	    */
	
	exports.default = MenuLayer;
	//module.exports = MenuLayer;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/3/7.
	 */
	
	exports.default = {
	  id: 'main',
	  component: 'Window',
	  header: { id: 'ttl', skin: 'blueheader', position: { x: 0, y: 0 }, height: 40, text: 'Title' },
	  draggable: true,
	  padding: 4,
	  position: { x: 0, y: 0 },
	  width: 600,
	  height: 550,
	  layout: [1, 3],
	  children: [{
	    component: 'Layout',
	    position: { x: 0, y: 0 },
	    width: 500,
	    height: 150,
	    layout: [2, 2],
	    children: [{
	      id: 'btn1',
	      text: 'btn',
	      font: {
	        size: '42px',
	        family: 'Skranji',
	        color: 'red'
	      },
	      component: 'Button',
	      skin: 'bluebutton',
	      position: 'center',
	      width: 190,
	      height: 80
	    }, {
	      id: 'btn2',
	      text: 'btn',
	      font: {
	        size: '42px',
	        family: 'Skranji',
	        color: 'red'
	      },
	      component: 'Button',
	      skin: 'bluebutton',
	      position: 'center',
	      width: 190,
	      height: 80
	    }, {
	      id: 'input',
	      text: '测试',
	      font: {
	        size: '42px',
	        //family: 'Skranji',
	        color: 'red'
	      },
	      component: 'Label',
	      skin: 'bluebutton',
	      position: 'center',
	      width: 190,
	      height: 80
	    }]
	  }]
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var gameGlobal = {
	  events: (0, _imports.Eventuality)({}),
	  director: _imports.Director.sharedDirector()
	}; /**
	    * Created by wizard on 16/3/31.
	    */
	
	
	exports.default = gameGlobal;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _infoDialogUi = __webpack_require__(68);
	
	var _infoDialogUi2 = _interopRequireDefault(_infoDialogUi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/31.
	 */
	
	var InfoLayer = function InfoLayer() {
	  var that = (0, _imports.Inherited)((0, _imports.ModelLayer)(_infoDialogUi2.default, 'kenney'));
	
	  that.inheritOn('init', function () {
	
	    that.node.zorder = 5;
	
	    EZGUI.components.info_btn.on('click', function (event) {
	      that.removeFromWorld();
	    });
	
	    return true;
	  });
	
	  return that;
	};
	
	exports.default = InfoLayer;

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/3/31.
	 */
	
	exports.default = {
	  id: 'info_layer',
	  component: 'Window',
	  header: { id: 'ttl', skin: 'blueheader', position: { x: 0, y: 0 }, height: 40, text: 'Title' },
	  draggable: true,
	  padding: 4,
	  position: { x: 0, y: 0 },
	  width: 600,
	  height: 550,
	  layout: [1, 3],
	  children: [{
	    component: 'Layout',
	    position: { x: 0, y: 0 },
	    width: 500,
	    height: 150,
	    layout: [2, 1],
	    children: [{
	      id: 'info_btn',
	      text: 'btn',
	      font: {
	        size: '42px',
	        family: 'Skranji',
	        color: 'red'
	      },
	      component: 'Button',
	      skin: 'bluebutton',
	      position: 'center',
	      width: 190,
	      height: 80
	    }]
	  }]
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _petActor2 = __webpack_require__(62);
	
	var _petActor3 = _interopRequireDefault(_petActor2);
	
	var _gameDefines = __webpack_require__(63);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _gameGlobal = __webpack_require__(66);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _testWorld = __webpack_require__(61);
	
	var _testWorld2 = _interopRequireDefault(_testWorld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Test2World = function Test2World() {
	    var that = (0, _imports.Inherited)((0, _imports.BaseWorld)());
	    var director = _imports.Director.sharedDirector();
	    var _petActor = null;
	    that.inheritOn('init', function () {
	        var options = {
	            type: "frame",
	            animates: {
	                idle: {
	                    pre: "stand",
	                    start: 1,
	                    end: 15,
	                    speed: 0.5
	                },
	                upgrade: {
	                    pre: "weishi",
	                    start: 1,
	                    end: 8
	                }
	            }
	        };
	
	        _petActor = (0, _petActor3.default)(options);
	        _petActor.init(that.node);
	        _petActor.node.position.x = 240;
	        _petActor.node.position.y = 400;
	
	        _petActor.node.on('touchend', function () {
	            var testWorld = (0, _testWorld2.default)();
	            testWorld.init();
	            director.startWorld(testWorld);
	        }).on('click', function () {
	            var testWorld = (0, _testWorld2.default)();
	            testWorld.init();
	            director.startWorld(testWorld);
	        });
	    });
	
	    that.inheritOn('update', function (dt) {
	        if (_petActor) {
	            _petActor.update(dt);
	        }
	    });
	
	    return that;
	}; /**
	    * Created by wizard on 16/3/30.
	    */
	
	exports.default = Test2World;

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var res = { "png_bomb1": "ui/img/bomb1.png", "png_level_box": "ui/img/level-box.png", "png_bomb3": "ui/img/bomb3.png", "png_bomb2": "ui/img/bomb2.png", "png_btn_blue_corner_bl": "ui/kenney-theme/images/btn-blue-corner-bl.png", "png_radio_blue_check": "ui/kenney-theme/images/radio-blue-check.png", "png_btn_grey_line_b_down": "ui/kenney-theme/images/btn-grey-line-b-down.png", "png_panel_650x400": "ui/img/panel-650x400.png", "png_kaishiyouxi_button": "ui/img/kaishiyouxi_button.png", "png_btn_grey_corner_tr_down": "ui/kenney-theme/images/btn-grey-corner-tr-down.png", "png_bg": "ui/kenney-theme/images/bg.png", "png_sld_grey_corner": "ui/kenney-theme/images/sld-grey-corner.png", "png_btn_grey_line_l": "ui/kenney-theme/images/btn-grey-line-l.png", "png_da": "ui/img/da.png", "png_chk_grey_corner": "ui/kenney-theme/images/chk-grey-corner.png", "png_chk_grey_checkmark": "ui/kenney-theme/images/chk-grey-checkmark.png", "png_btn_grey_line_r_down": "ui/kenney-theme/images/btn-grey-line-r-down.png", "png_btn_blue_corner_br": "ui/kenney-theme/images/btn-blue-corner-br.png", "png_down_grey_slide": "ui/kenney-theme/images/down-grey-slide.png", "fnt_desyrel": "ui/fonts/desyrel.fnt", "png_wnd_grey_bg": "ui/kenney-theme/images/wnd-grey-bg.png", "png_btn_grey_line_t": "ui/kenney-theme/images/btn-grey-line-t.png", "png_btn_blue_corner_br_down": "ui/kenney-theme/images/btn-blue-corner-br-down.png", "json_kenney_theme": "ui/kenney-theme/kenney-theme.json", "png_bomb3_selected": "ui/img/bomb3-selected.png", "png_sld_grey_line": "ui/kenney-theme/images/sld-grey-line.png", "png_bomb1_selected": "ui/img/bomb1-selected.png", "png_btn_grey_corner_br_down": "ui/kenney-theme/images/btn-grey-corner-br-down.png", "png_btn_grey_line_b": "ui/kenney-theme/images/btn-grey-line-b.png", "png_wnd_grey_corner": "ui/kenney-theme/images/wnd-grey-corner.png", "png_btn_blue_line_l": "ui/kenney-theme/images/btn-blue-line-l.png", "png_chongpeibutton": "ui/img/chongpeibutton.png", "png_btn_blue_line_r": "ui/kenney-theme/images/btn-blue-line-r.png", "png_btn_grey_line_l_down": "ui/kenney-theme/images/btn-grey-line-l-down.png", "png_jineng_3": "ui/img/jineng_3.png", "png_sld_grey_bg": "ui/kenney-theme/images/sld-grey-bg.png", "png_btn_blue_line_r_down": "ui/kenney-theme/images/btn-blue-line-r-down.png", "png_btn_grey_line_t_down": "ui/kenney-theme/images/btn-grey-line-t-down.png", "fnt_Skranji_Bold_40": "ui/fonts/Skranji-Bold-40.fnt", "png_btn_blue_corner_tr_down": "ui/kenney-theme/images/btn-blue-corner-tr-down.png", "png_btn_blue_line_t_down": "ui/kenney-theme/images/btn-blue-line-t-down.png", "png_btn_grey_corner_bl": "ui/kenney-theme/images/btn-grey-corner-bl.png", "png_btn_blue_line_b": "ui/kenney-theme/images/btn-blue-line-b.png", "png_btn_grey_corner_tl": "ui/kenney-theme/images/btn-grey-corner-tl.png", "png_Skranji_Bold_40": "ui/fonts/Skranji-Bold-40.png", "png_btn_blue_line_t": "ui/kenney-theme/images/btn-blue-line-t.png", "png_btn_blue_line_b_down": "ui/kenney-theme/images/btn-blue-line-b-down.png", "png_kenney_theme": "ui/kenney-theme/kenney-theme.png", "png_btn_blue_corner_tl_down": "ui/kenney-theme/images/btn-blue-corner-tl-down.png", "png_btn_grey_line_r": "ui/kenney-theme/images/btn-grey-line-r.png", "png_btn_grey_bg": "ui/kenney-theme/images/btn-grey-bg.png", "png_btn_blue_corner_tl": "ui/kenney-theme/images/btn-blue-corner-tl.png", "png_down_grey_slide_down": "ui/kenney-theme/images/down-grey-slide-down.png", "png_lvlcomplete": "ui/img/lvlcomplete.png", "png_orange_btn": "ui/img/orange-btn.png", "png_star2": "ui/img/star2.png", "png_bomb2_selected": "ui/img/bomb2-selected.png", "png_btn_blue_corner_bl_down": "ui/kenney-theme/images/btn-blue-corner-bl-down.png", "json_kenney_atlas": "ui/kenney-theme/kenney-atlas.json", "png_wnd_grey_line": "ui/kenney-theme/images/wnd-grey-line.png", "png_btn_grey_corner_tr": "ui/kenney-theme/images/btn-grey-corner-tr.png", "png_jineng_bg": "ui/img/jineng_bg.png", "png_btn_blue_corner_tr": "ui/kenney-theme/images/btn-blue-corner-tr.png", "png_chk_blue_checkmark": "ui/kenney-theme/images/chk-blue-checkmark.png", "png_btn_blue_line_l_down": "ui/kenney-theme/images/btn-blue-line-l-down.png", "png_btn_grey_bg_down": "ui/kenney-theme/images/btn-grey-bg-down.png", "png_btn_grey_corner_br": "ui/kenney-theme/images/btn-grey-corner-br.png", "png_btn_blue_bg": "ui/kenney-theme/images/btn-blue-bg.png", "png_desyrel": "ui/fonts/desyrel.png", "png_btn_grey_corner_tl_down": "ui/kenney-theme/images/btn-grey-corner-tl-down.png", "png_jineng_0": "ui/img/jineng_0.png", "png_jineng_1": "ui/img/jineng_1.png", "png_jineng_2": "ui/img/jineng_2.png", "png_gamelogo": "ui/img/gamelogo.png", "png_jineng_4": "ui/img/jineng_4.png", "png_btn_grey_corner_bl_down": "ui/kenney-theme/images/btn-grey-corner-bl-down.png", "png_radio_grey_check": "ui/kenney-theme/images/radio-grey-check.png", "png_btn_blue_bg_down": "ui/kenney-theme/images/btn-blue-bg-down.png" };
	exports.default = res;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _skillListUi = __webpack_require__(72);
	
	var _skillUpgradeLayer = __webpack_require__(73);
	
	var _skillUpgradeLayer2 = _interopRequireDefault(_skillUpgradeLayer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SkillLayer = function SkillLayer(spec) {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)(_skillListUi.SkillUI, 'kenney'));
	
	  that.inheritOn('init', function () {
	    for (var i = 0; i < spec.length; i++) {
	      var info = spec[i];
	      info.skillName = "宠物技能" + (i + 1);
	      info.description = "宠物技能" + (i + 1) + "，造成伤害xxx";
	      var skillLabel = EZGUI.create((0, _skillListUi.SkillLabel)(info), 'kenney');
	      var desText = EZGUI.components.description;
	      _imports.Helper.wordWrapText(desText.textObj);
	      EZGUI.components.btn.on("click", that.btnClick);
	      EZGUI.components.skillList.addChild(skillLabel);
	    }
	
	    return true;
	  });
	
	  that.inheritOn("add2World", function (world) {
	    that.btnClick({ target: { userData: 0 } });
	  });
	
	  that.btnClick = function (event) {
	    var targetId = event.target.userData;
	    var skillUpgradeLayer = (0, _skillUpgradeLayer2.default)({ id: targetId });
	    skillUpgradeLayer.init();
	    skillUpgradeLayer.add2World(that.owner);
	  };
	  return that;
	}; /**
	    * Created by hewenlong on 16-4-1.
	    */
	
	exports.default = SkillLayer;

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by hewenlong on 16-4-1.
	 */
	
	var SkillLabel = function SkillLabel(cfg) {
	  var that = {
	    id: "skillLabel",
	    component: 'Layout',
	    image: 'icon_activity_0.png',
	    userData: 0,
	    position: 'center',
	    width: 450,
	    height: 120,
	    layout: [3, 1],
	    children: [{
	      id: 'skillIcon',
	      position: { x: 0, y: 0 },
	      image: "",
	      width: 120,
	      height: 120
	    }, {
	      component: "Layout",
	      width: 200,
	      height: 100,
	      position: 'center',
	      layout: [1, 2],
	      children: [{
	        id: "skillName",
	        text: "skill",
	        font: {
	          size: '30px'
	        },
	        component: 'Label',
	        position: { x: 0, y: 0 },
	        anchor: { x: 0, y: 0 },
	        width: 100,
	        height: 30
	      }, {
	        id: "description",
	        text: "技能介绍",
	        font: {
	          size: '22px',
	          family: 'Arial',
	          color: 'orange',
	          align: 'left',
	          wordWrap: true,
	          wordWrapWidth: 200
	        },
	        component: 'Label',
	        anchor: { x: 0, y: 0.5 },
	        position: { x: 0, y: 10 },
	        width: 200,
	        height: 80
	      }]
	    }, {
	      id: 'btn',
	      text: '升级',
	      font: {
	        size: '22px',
	        color: 'green'
	      },
	      userData: 0,
	      component: 'Button',
	      skin: 'bluebutton',
	      position: { x: 30, y: 30 },
	      width: 100,
	      height: 60
	    }]
	  };
	
	  (function () {
	    console.log("skill info", JSON.stringify(cfg));
	    var id = cfg.id;
	    that.userData = id;
	    that.children[0].image = "skill_" + (id + 1) + ".png";
	    that.children[2].userData = id;
	    var skillInfo = that.children[1];
	    skillInfo.children[0].text = cfg.skillName;
	    skillInfo.children[1].text = cfg.description;
	  })();
	
	  return that;
	};
	
	var SkillUI = {
	  component: 'Window',
	  draggable: false,
	  padding: 0,
	  position: { x: 0, y: 0 },
	  width: 480,
	  height: 754,
	  layout: [1, 2],
	  children: [{
	    id: "skillTitle",
	    text: '技能列表',
	    component: 'Label',
	    font: {
	      size: '40px',
	      color: 'blue',
	      align: "center"
	    },
	    width: 0,
	    height: 0,
	    position: { x: 240, y: 50 }
	  }, {
	    id: "skillList",
	    component: 'List',
	    width: 460,
	    height: 650,
	    position: { x: 10, y: -290 },
	    layout: [1, 5],
	    children: []
	  }]
	};
	
	exports.SkillUI = SkillUI;
	exports.SkillLabel = SkillLabel;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _skillUpgradeUi = __webpack_require__(74);
	
	var _skillUpgradeUi2 = _interopRequireDefault(_skillUpgradeUi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by hewenlong on 16-4-6.
	 */
	
	var SkillUpgradeLayer = function SkillUpgradeLayer(spec) {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)((0, _skillUpgradeUi2.default)(), "kenney"));
	
	  that.inheritOn("init", function () {
	    _imports.Helper.wordWrapText(EZGUI.components.skillDescription.textObj);
	
	    console.log("image width", EZGUI.components.upImage.rootSprite.width);
	    var width = 200 * 0.8;
	    EZGUI.components.upImage.rootSprite.width *= 0.7;
	
	    EZGUI.components.backBtn.on("click", function (event, target) {
	      that.removeFromWorld();
	    });
	    return true;
	  });
	
	  return that;
	};
	
	exports.default = SkillUpgradeLayer;

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by hewenlong on 16-4-6.
	 */
	
	var SkillUpgradeUI = function SkillUpgradeUI(cfg) {
	  var that = {
	    component: 'Window',
	    draggable: false,
	    padding: 0,
	    position: { x: 0, y: 0 },
	    width: 480,
	    height: 754,
	    layout: [1, 5],
	    children: [{
	      id: "skillTitle",
	      component: "Layout",
	      text: '技能升级',
	      font: {
	        size: "36px",
	        color: "purple"
	      },
	      position: { x: 0, y: 0 },
	      width: 480,
	      height: 80,
	      layout: [1, 1],
	      children: [{
	        id: "backBtn",
	        component: "Button",
	        text: '返回',
	        font: {
	          size: "22px",
	          color: "blue"
	        },
	        position: { x: 10, y: 10 },
	        width: 80,
	        height: 50
	      }]
	    }, {
	      id: "skillInfo",
	      component: "Layout",
	      width: 490,
	      height: 250,
	      image: 'icon_bloodDown.png',
	      position: { x: 0, y: -70 },
	      layout: [7, 1],
	      children: [{ id: "skillIcon", image: 'skill_1.png', position: { x: 0, y: 50 }, width: 150, height: 150 }, { id: "skillName", component: 'Label', text: '宠物技能', font: { size: "26px" }, position: { x: 200, y: 0 }, width: 50, height: 50 }, { id: 'skillDescription', component: 'Label', text: '宠物技能描述宠物技能描述宠物技能描述', font: { size: '24px', wordWrap: true, wordWrapWidth: 320 }, anchor: { x: 0, y: 0.5 }, position: { x: 10, y: 90 }, width: 50, height: 50 }, {
	        component: "Layout",
	        width: 240,
	        height: 50,
	        position: { x: -65, y: 130 },
	        layout: [8, 1],
	        children: [{ id: "icon1", image: 'icon_lifePet_big.png', position: { x: 0, y: 0 }, width: 30, height: 30 }, { id: "icon1", image: 'icon_lifePet_big.png', position: { x: 0, y: 0 }, width: 30, height: 30 }, { id: "icon1", image: 'icon_lifePet_big.png', position: { x: 0, y: 0 }, width: 30, height: 30 }, { id: "icon1", image: 'icon_lifePet_big.png', position: { x: 0, y: 0 }, width: 30, height: 30 }, { id: "icon1", image: 'icon_lifePet_big.png', position: { x: 0, y: 0 }, width: 30, height: 30 }, { id: "level", component: 'Label', text: '1段5级', font: { size: "22px" }, position: { x: 20, y: 0 }, width: 30, height: 30 }]
	      }, {
	        component: "Layout",
	        width: 240,
	        height: 100,
	        position: { x: -135, y: 180 },
	        layout: [3, 1],
	        children: [{ id: "level", component: 'Label', text: '祝福值', font: { size: "22px" }, position: { x: 20, y: 0 }, width: 30, height: 30 }, { id: "downImage", image: 'icon_bloodDown.png', position: { x: 0, y: 0 }, width: 200, height: 30, anchor: { x: 0, y: 0.5 } }, { id: "upImage", image: 'icon_bloodRed.png', position: { x: -80, y: 0 }, width: 200, height: 30, anchor: { x: 0, y: 0.5 } }]
	      }]
	    }]
	  };
	
	  return that;
	};
	
	exports.default = SkillUpgradeUI;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = CrusadeWorld;
	
	var _imports = __webpack_require__(1);
	
	var _petActor = __webpack_require__(62);
	
	var _petActor2 = _interopRequireDefault(_petActor);
	
	var _gameDefines = __webpack_require__(63);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _gameGlobal = __webpack_require__(66);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _defenseLogLayer = __webpack_require__(76);
	
	var _defenseLogLayer2 = _interopRequireDefault(_defenseLogLayer);
	
	var _defenseLogUi = __webpack_require__(77);
	
	var _defenseLogUi2 = _interopRequireDefault(_defenseLogUi);
	
	var _resources = __webpack_require__(70);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CrusadeWorld() {
	    var that = (0, _imports.Inherited)((0, _imports.BaseWorld)());
	    var director = _imports.Director.sharedDirector();
	    that.inheritOn('init', function () {
	        _imports.ResourceManager.load(_resources2.default.jpg_crusade_bg, function () {
	            var bg = _imports.Helper.createSprite(_resources2.default.jpg_crusade_bg);
	            bg.zorder = 0;
	            that.node.addChild(bg);
	            _imports.Helper.reorderNode(that.node);
	        });
	
	        //ResourceManager.load(res.json_cat_5, function (res, name) {
	        //    var options = {
	        //        type: "spine",
	        //        spineData: res.spineData
	        //    }
	        //
	        //    var petActor = PetActor(options);
	        //    petActor.init(that.node);
	        //    petActor.node.position.x = 120;
	        //    petActor.node.position.y = 750;
	        //    petActor.node.zorder = 4;
	        //
	        //    Helper.reorderNode(that.node);
	        //});
	
	        _imports.SRequest.get(_gameDefines2.default.gameURL, "s/Info/GetDefendRecords", { "pet_id": 10000 }, function (data) {
	            console.log('log-' + JSON.stringify(data));
	
	            var ui = (0, _defenseLogUi2.default)();
	            ui.createUI(data);
	            var defenseLog = (0, _defenseLogLayer2.default)(ui.layout);
	
	            defenseLog.init();
	            defenseLog.node.zorder = 5;
	            defenseLog.add2World(that);
	
	            _imports.Helper.reorderNode(that.node);
	        });
	
	        return true;
	    });
	
	    that.inheritOn('update', function (dt) {});
	
	    return that;
	} /**
	   * Created by John on 16/4/1.
	   */

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = DefenseLogLayer;
	
	var _imports = __webpack_require__(1);
	
	var _gameGlobal = __webpack_require__(66);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _gameDefines = __webpack_require__(63);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	//import defenseLogUI from "../ui/defenseLog-ui.js"
	function DefenseLogLayer(ui) {
	
	    //let data = {"res":[{"enemy_id":100001,"enemy_nickname":"金城武","loss_gold":10,"result":1,"tm":"2016-03-28 16:58"},{"enemy_id":100001,"enemy_nickname":"金城武","loss_gold":10,"result":1,"tm":"2016-03-28 16:58"},{"enemy_id":100001,"enemy_nickname":"金城武","loss_gold":10,"result":1,"tm":"2016-03-28 16:58"}],"status":"ok","tm":1459503584}
	    //let that = Inherited(BaseLayer(defenseLogUI, 'kenney') );
	    var that = (0, _imports.Inherited)((0, _imports.BaseLayer)(ui, 'kenney'));
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
	} /**
	   * Created by John on 16/4/1.
	   */

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = DefenseLogUI;
	
	var _gameGlobal = __webpack_require__(66);
	
	var _gameGlobal2 = _interopRequireDefault(_gameGlobal);
	
	var _gameDefines = __webpack_require__(63);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by John on 16/3/29.
	 */
	//import {BaseLayer, Inherited, Director, SRequest} from "../utility/imports.js"
	//import defenseLogUI from "../ui/defenseLog-ui.js"
	
	
	var getItem = function getItem(data) {
	    var that = {
	        id: 'id' + data.enemy_id,
	        text: data.tm + 'attacked by' + data.enemy_nickname + 'with his pet.lost' + data.loss_gold + 'gold',
	        font: { size: '26px', color: 'black', align: "left",
	            wordWrap: true,
	            wordWrapWidth: 480
	        },
	        component: 'Label',
	        position: 'left',
	        width: 480,
	        height: 100
	    };
	
	    return that;
	};
	function DefenseLogUI() {
	    var that = {};
	    that.layout = null;
	    that.createUI = function (data) {
	        var children = [];
	        var row = data.res.length;
	
	        for (var i = 0; i < data.res.length; i++) {
	            console.log('getItem-' + i + JSON.stringify(data.res[i]));
	            var child = getItem(data.res[i]);
	            children.push(child);
	        }
	        that.layout = {
	            id: 'defenseLog',
	            component: 'Window',
	            header: { id: 'ttl', skin: 'blueheader', position: { x: 0, y: 0 }, height: 40, text: 'defense log' },
	            padding: 4,
	            position: { x: 0, y: 0 },
	            width: _gameDefines2.default.Canvas.width,
	            height: _gameDefines2.default.Canvas.height / 2,
	            layout: [1, 1],
	            children: [{
	                id: 'logList',
	                component: 'List',
	                position: { x: 0, y: 0 },
	                width: _gameDefines2.default.Canvas.width,
	                height: 100 * row,
	                layout: [1, row],
	                children: children
	            }]
	        };
	    };
	    return that;
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(70);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _gameDefines = __webpack_require__(63);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	var _stoneAtlas = __webpack_require__(79);
	
	var _stoneAtlas2 = _interopRequireDefault(_stoneAtlas);
	
	var _stonesRow = __webpack_require__(80);
	
	var _stonesRow2 = _interopRequireDefault(_stonesRow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CrazyStone = function CrazyStone() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseWorld)());
	
	  var _guard_line = 200;
	  var _stone_init_array = [[0, 1, 1, 1], [1, 0, 1, 1], [1, 1, 0, 1], [1, 1, 1, 0], [1, 1, 0, 1], [1, 0, 1, 1], [0, 1, 1, 1], [1, 0, 1, 1], [1, 1, 0, 1]];
	
	  var StonesRowList = [(0, _stonesRow2.default)(), (0, _stonesRow2.default)(), (0, _stonesRow2.default)(), (0, _stonesRow2.default)()];
	
	  that.inheritOn('init', function () {
	    drawBac();
	    initStones();
	    return true;
	  });
	
	  that.inheritOn('update', function (dt) {
	    for (var i = 0; i < StonesRowList.length; i++) {
	      StonesRowList[i].update(dt);
	    }
	  });
	
	  var initStones = function initStones() {
	    for (var i = 0; i < _stone_init_array.length; i++) {
	      for (var j = 0; j < _stone_init_array[i].length; j++) {
	        var stone = (0, _stoneAtlas2.default)();
	        stone.initWithData(_stone_init_array[i][j]);
	        stone.node.position.x = ((j + 1) * 2 - 1) / 8 * _gameDefines2.default.Canvas.width;
	        stone.node.position.y = i * stone.height - (_gameDefines2.default.Canvas.height - _guard_line);
	        that.node.addChild(stone.node);
	        StonesRowList[j].addStone(stone);
	      }
	    }
	  };
	
	  var drawBac = function drawBac() {
	    var graphics = new PIXI.Graphics();
	
	    graphics.beginFill(0xF5F5DC, 1);
	    graphics.drawRect(0, 0, _gameDefines2.default.Canvas.width, _gameDefines2.default.Canvas.height);
	    graphics.endFill();
	
	    graphics.beginFill(0x8B8378, 1);
	    graphics.drawRect(_gameDefines2.default.Canvas.width / 4, 0, _gameDefines2.default.Canvas.width / 4, _gameDefines2.default.Canvas.height);
	    graphics.endFill();
	
	    graphics.beginFill(0x8B8378, 1);
	    graphics.drawRect(_gameDefines2.default.Canvas.width / 4 * 3, 0, _gameDefines2.default.Canvas.width / 4, _gameDefines2.default.Canvas.height);
	    graphics.endFill();
	
	    graphics.beginFill(0xFF0000, 1);
	    graphics.drawRect(0, _guard_line, _gameDefines2.default.Canvas.width, 10);
	    graphics.endFill();
	
	    that.node.addChild(graphics);
	  };
	  return that;
	}; /**
	    * Created by guolei on 16/4/13.
	    */
	
	exports.default = CrazyStone;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(1);
	
	var _resources = __webpack_require__(70);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by guolei on 16/4/13.
	 */
	
	var StoneAtlas = function StoneAtlas() {
	  var that = {};
	  that.type = 0;
	  that.node = new PIXI.Container();
	  that.height = 89;
	  that.speed = 2;
	
	  that.initWithData = function (data) {
	    if (data === 1) {
	      _imports.ResourceManager.load(_resources2.default.png_jineng_0, function () {
	        var sprite = _imports.Helper.createSprite(_resources2.default.png_jineng_0);
	        sprite.anchor.x = 0.5;
	        sprite.anchor.y = 0.5;
	        that.node.addChild(sprite);
	      });
	    }
	  };
	
	  that.bomb = function () {
	    that.node.visible = false;
	  };
	
	  that.update = function (dt) {
	    that.node.position.y += that.speed;
	  };
	
	  return that;
	};
	exports.default = StoneAtlas;

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by guolei on 16/4/13.
	 */
	var StonesRow = function StonesRow() {
	  var that = {};
	  var _row_list = [];
	
	  that.addStone = function (stone) {
	    _row_list.push(stone);
	  };
	
	  that.checkBomb = function () {
	    for (var i = 0; i < _row_list.length; i++) {
	      var stone = _row_list[i];
	      if (stone.type !== 0) {
	        //return _row_list[i-1];
	      }
	    }
	  };
	
	  that.update = function (dt) {
	    for (var i = 0; i < _row_list.length; i++) {
	      _row_list[i].update(dt);
	    }
	  };
	
	  return that;
	};
	exports.default = StonesRow;

/***/ }
/******/ ]);
//# sourceMappingURL=pet_web.all.js.map