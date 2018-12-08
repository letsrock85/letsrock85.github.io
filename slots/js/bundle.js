/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/SlotGame/SlotGame.js":
/*!*************************************!*\
  !*** ./src/js/SlotGame/SlotGame.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Loading */ "./src/js/SlotGame/components/Loading.js");
/* harmony import */ var _screens_GameScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/GameScreen */ "./src/js/SlotGame/screens/GameScreen.js");
/* harmony import */ var _screens_GameOverScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/GameOverScreen */ "./src/js/SlotGame/screens/GameOverScreen.js");
/* harmony import */ var _screens_PaytableScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/PaytableScreen */ "./src/js/SlotGame/screens/PaytableScreen.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ "./src/js/SlotGame/state.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var defaultOptions = {
  // size
  root: '.root',
  reels: 3,
  lines: 3,
  width: 640,
  height: 480,
  // money
  // balance: 10000,
  balance: 1500,
  wager: 100,
  wagerStep: 100,
  maxWager: 500,
  // interface
  spinTime: 1000,
  stopDelay: 200
};

var SlotGame =
/*#__PURE__*/
function () {
  function SlotGame() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SlotGame);

    var config = Object.assign(_state__WEBPACK_IMPORTED_MODULE_5__["default"], defaultOptions, options);
    this.config = config; // bindings

    this.loadScreen = this.loadScreen.bind(this);
    this.onProgressAssets = this.onProgressAssets.bind(this);
    this.onAssetsComplete = this.onAssetsComplete.bind(this); // Loading box

    var loading = new _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]();
    loading.x = (config.width - loading.width) / 2;
    loading.y = (config.height - loading.height) / 2; // Members

    this.screens = {
      game: _screens_GameScreen__WEBPACK_IMPORTED_MODULE_2__["default"],
      gameover: _screens_GameOverScreen__WEBPACK_IMPORTED_MODULE_3__["default"],
      paytable: _screens_PaytableScreen__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    this.currentScreen = null;
    this.app = null;
    this.loader = null;
    this.loading = loading;
    this.state = _state__WEBPACK_IMPORTED_MODULE_5__["default"]; // init

    this.init();
  }

  _createClass(SlotGame, [{
    key: "init",
    value: function init() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = this.config,
          screens = this.screens,
          loading = this.loading,
          onProgressAssets = this.onProgressAssets,
          onAssetsComplete = this.onAssetsComplete; // Update options

      if (options) Object.assign(config, options); // Destroy prev game

      if (this.app) this.destroy(); // create app

      var appOptions = {
        width: config.width,
        height: config.height,
        backgroundColor: 0x1099bb
      };
      var app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"](appOptions);
      document.querySelector(config.root).appendChild(app.view);
      this.app = app; // loader for Screen

      var loader = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["loaders"].Loader();
      this.loader = loader; // Init screens

      Object.entries(screens).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            Screen = _ref2[1];

        var screen = new Screen(_this);
        screen.update = screen.update.bind(screen);
        _this.screens[id] = screen;
      }); // load all assets

      loading.reset();
      app.stage.addChild(loading);
      loader.once('progress', onProgressAssets).load(onAssetsComplete);
    }
  }, {
    key: "loadScreen",
    value: function loadScreen(id, cb) {
      var screens = this.screens,
          app = this.app,
          currentScreen = this.currentScreen;
      var screen = screens[id];
      if (!screen) throw new Error("screen ".concat(id, " not found!")); // change screen

      if (currentScreen !== screen) {
        app.stage.removeChild(currentScreen);
        app.stage.addChild(screen); // ticker

        if (currentScreen) app.ticker.remove(currentScreen.update);
        app.ticker.add(screen.update);
        this.currentScreen = screen;
      }

      if (cb) cb(screen);
    }
  }, {
    key: "onProgressAssets",
    value: function onProgressAssets(loader, resource) {
      this.loading.progress(loader.progress, resource.url);
    }
  }, {
    key: "onAssetsComplete",
    value: function onAssetsComplete() {
      var loading = this.loading,
          app = this.app,
          loadScreen = this.loadScreen;
      this.loading.progress(100);
      app.stage.removeChild(loading); // show main screen

      loadScreen('game'); // loadScreen('paytable');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var app = this.app,
          currentScreen = this.currentScreen,
          loader = this.loader;
      currentScreen.destroy(true);
      app.destroy(true);
      loader.destroy();
      this.currentScreen = null;
      this.app = null;
      Object.values(_state__WEBPACK_IMPORTED_MODULE_5__["default"].sounds).forEach(function (sound) {
        return sound.stop();
      });
      _state__WEBPACK_IMPORTED_MODULE_5__["default"].reset();
    }
  }]);

  return SlotGame;
}();

/* harmony default export */ __webpack_exports__["default"] = (SlotGame);

/***/ }),

/***/ "./src/js/SlotGame/Sound.js":
/*!**********************************!*\
  !*** ./src/js/SlotGame/Sound.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sound; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sound =
/*#__PURE__*/
function () {
  function Sound(audio) {
    _classCallCheck(this, Sound);

    this.audio = audio;
    this.clones = [];
  }

  _createClass(Sound, [{
    key: "play",
    value: function play() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var audio = this.audio;
      audio.pause();
      audio.currentTime = time;
      audio.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      var audio = this.audio;
      audio.pause();
    }
  }, {
    key: "loop",
    value: function loop() {
      var audio = this.audio;
      audio.loop = true;
      audio.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      var audio = this.audio;
      audio.currentTime = 0;
      audio.loop = false;
      audio.pause();
    }
  }, {
    key: "volume",
    value: function volume(value) {
      var audio = this.audio;
      audio.volume = value;
    }
  }]);

  return Sound;
}();



/***/ }),

/***/ "./src/js/SlotGame/components/Button.js":
/*!**********************************************!*\
  !*** ./src/js/SlotGame/components/Button.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/js/SlotGame/state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Button =
/*#__PURE__*/
function (_PIXI$Container) {
  _inherits(Button, _PIXI$Container);

  function Button(value) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this));
    var style = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["TextStyle"]({
      fontSize: 20,
      fontWeight: 'bold',
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 3,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 1
    });
    var button = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](value, style);

    _this.addChild(button); // handlers


    _this.on('pointertap', function () {
      return _state__WEBPACK_IMPORTED_MODULE_1__["default"].sounds.click.play();
    }); // Members


    _this.button = button; // Enabled by default

    _this.enable();

    return _this;
  }

  _createClass(Button, [{
    key: "setFill",
    value: function setFill(fill) {
      var button = this.button;
      button.style.fill = fill;
    }
  }, {
    key: "disable",
    value: function disable() {
      var button = this.button;
      this.buttonMode = false;
      this.interactive = false;
      button.style.fill = ['#ffffff', '#cccccc'];
    }
  }, {
    key: "enable",
    value: function enable() {
      var button = this.button;
      this.buttonMode = true;
      this.interactive = true;
      button.style.fill = ['#ffffff', '#00ff99'];
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return Button;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./src/js/SlotGame/components/Controls.js":
/*!************************************************!*\
  !*** ./src/js/SlotGame/components/Controls.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controls; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/js/SlotGame/components/Button.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/js/SlotGame/helpers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Controls =
/*#__PURE__*/
function (_PIXI$Container) {
  _inherits(Controls, _PIXI$Container);

  function Controls(width, height) {
    var _this;

    _classCallCheck(this, Controls);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Controls).call(this)); // Size

    _this.width = width;
    _this.height = height; // Border

    var border = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
    var borderWidth = 5;
    border.lineStyle(borderWidth, 0xdbeff7);
    border.beginFill(0xc5defd, 0.5);
    border.drawRect(0, 0, width, height);

    _this.addChild(border); // Show paytable button


    var btnPaytable = new _Button__WEBPACK_IMPORTED_MODULE_1__["default"]('Paytable');

    _this.addChild(btnPaytable); // Wager up button


    var btnWagerUp = new _Button__WEBPACK_IMPORTED_MODULE_1__["default"]("UP");

    _this.addChild(btnWagerUp); // Wager down button


    var btnWagerDown = new _Button__WEBPACK_IMPORTED_MODULE_1__["default"]("DOWN");

    _this.addChild(btnWagerDown); // Spin button


    var btnSpin = new _Button__WEBPACK_IMPORTED_MODULE_1__["default"]('Spin');

    _this.addChild(btnSpin); // Auto spin button


    var btnAutoSpin = new _Button__WEBPACK_IMPORTED_MODULE_1__["default"]('Auto');

    _this.addChild(btnAutoSpin); // Cheat spin button


    var btnCheatSpin = new _Button__WEBPACK_IMPORTED_MODULE_1__["default"]('Cheat');

    _this.addChild(btnCheatSpin); // Positions


    var elms = [btnPaytable, btnWagerDown, btnWagerUp, btnSpin, btnAutoSpin, btnCheatSpin];
    _helpers__WEBPACK_IMPORTED_MODULE_2__["spaceAroundX"].apply(void 0, [width, height].concat(elms)); // Members

    _this.btnSpin = btnSpin;
    _this.btnAutoSpin = btnAutoSpin;
    _this.btnCheatSpin = btnCheatSpin;
    _this.btnWagerUp = btnWagerUp;
    _this.btnWagerDown = btnWagerDown;
    _this.btnPaytable = btnPaytable;
    return _this;
  }

  _createClass(Controls, [{
    key: "update",
    value: function update() {}
  }]);

  return Controls;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./src/js/SlotGame/components/Info.js":
/*!********************************************!*\
  !*** ./src/js/SlotGame/components/Info.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label */ "./src/js/SlotGame/components/Label.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/js/SlotGame/helpers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Info =
/*#__PURE__*/
function (_PIXI$Container) {
  _inherits(Info, _PIXI$Container);

  function Info(width, height) {
    var _this;

    _classCallCheck(this, Info);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Info).call(this)); // Size

    _this.width = width;
    _this.height = height; // Border

    var border = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
    var borderWidth = 5;
    border.lineStyle(borderWidth, 0xdbeff7);
    border.beginFill(0xfff000, 0.5);
    border.drawRect(0, 0, width, height);

    _this.addChild(border); // Balance


    var balanceLabel = new _Label__WEBPACK_IMPORTED_MODULE_1__["default"]("Balance: 0");

    _this.addChild(balanceLabel); // Win


    var winLabel = new _Label__WEBPACK_IMPORTED_MODULE_1__["default"]("Win: 0");

    _this.addChild(winLabel); // Wager


    var wagerLabel = new _Label__WEBPACK_IMPORTED_MODULE_1__["default"]("Wager: 0");

    _this.addChild(wagerLabel); // Positions


    var elms = [balanceLabel, wagerLabel, winLabel];
    _helpers__WEBPACK_IMPORTED_MODULE_2__["spaceAroundX"].apply(void 0, [width, height].concat(elms)); // Members

    _this.balanceLabel = balanceLabel;
    _this.winLabel = winLabel;
    _this.wagerLabel = wagerLabel;
    return _this;
  }

  _createClass(Info, [{
    key: "update",
    value: function update() {}
  }]);

  return Info;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./src/js/SlotGame/components/Label.js":
/*!*********************************************!*\
  !*** ./src/js/SlotGame/components/Label.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Label =
/*#__PURE__*/
function (_PIXI$Text) {
  _inherits(Label, _PIXI$Text);

  function Label(value) {
    var _this;

    _classCallCheck(this, Label);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Label).call(this, value));
    var style = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["TextStyle"]({
      fontSize: 18,
      fill: ['#dbeff7', '#a5d9ec'],
      stroke: '#666666',
      strokeThickness: 1,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 2,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 1
    });
    _this.style = style;
    return _this;
  }

  _createClass(Label, [{
    key: "update",
    value: function update() {}
  }]);

  return Label;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"]);



/***/ }),

/***/ "./src/js/SlotGame/components/Loading.js":
/*!***********************************************!*\
  !*** ./src/js/SlotGame/components/Loading.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Loading =
/*#__PURE__*/
function (_PIXI$Container) {
  _inherits(Loading, _PIXI$Container);

  function Loading() {
    var _this;

    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this));
    _this.width = width;
    _this.height = height; // frame

    var frame = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
    frame.beginFill(0xc5defd);
    frame.drawRect(0, 0, width, height);
    frame.endFill();

    _this.addChild(frame); // progress bar container


    var progressContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
    progressContainer.beginFill(0x6897bb);
    progressContainer.drawRect(0, 0, width, 30);
    progressContainer.endFill();
    frame.addChild(progressContainer); // progress bar

    var progressBar = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
    progressBar.beginFill(0x3c627e);
    progressBar.drawRect(0, 0, progressContainer.width, progressContainer.height);
    progressBar.endFill(); // progressBar.position.set(0, 0);

    progressBar.width = 0;
    progressContainer.addChild(progressBar); // progress text

    var progressStyle = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["TextStyle"]({
      fontWeight: 'bold',
      fontSize: progressContainer.height * 0.75,
      lineHeight: progressContainer.height * 0.75,
      fill: '#fff'
    });
    var progressText = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"]('0%', progressStyle);
    progressText.y = (progressContainer.height - progressText.height) / 2;
    progressContainer.addChild(progressText); // current loading asset

    var assetStyle = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["TextStyle"]({
      fontSize: 15,
      wordWrap: true,
      wordWrapWidth: frame.width,
      align: 'center'
    });
    var assetText = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"]('', assetStyle);
    frame.addChild(assetText);
    assetText.x = 0;
    assetText.y = progressContainer.height + 10; // Members

    _this.assetText = assetText;
    _this.progressContainer = progressContainer;
    _this.progressText = progressText;
    _this.progressBar = progressBar;
    return _this;
  }

  _createClass(Loading, [{
    key: "progress",
    value: function progress(percent) {
      var assetName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var assetText = this.assetText,
          progressContainer = this.progressContainer,
          progressBar = this.progressBar,
          progressText = this.progressText;
      assetText.text = "".concat(assetName);
      progressText.text = "".concat(percent.toFixed(), "%");
      progressText.x = (progressContainer.width - progressText.width) / 2;
      progressBar.width = this.progressContainer.width * percent / 100;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.progress(0);
    }
  }]);

  return Loading;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./src/js/SlotGame/components/Paylines.js":
/*!************************************************!*\
  !*** ./src/js/SlotGame/components/Paylines.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paylines; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label */ "./src/js/SlotGame/components/Label.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/js/SlotGame/components/Button.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/js/SlotGame/helpers.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ "./src/js/SlotGame/state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Paylines =
/*#__PURE__*/
function (_PIXI$Container) {
  _inherits(Paylines, _PIXI$Container);

  function Paylines(slotWidth, slotHeight) {
    var _this;

    _classCallCheck(this, Paylines);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Paylines).call(this)); // Size

    var panelHeight = 30;
    _this.width = slotWidth;
    _this.height = slotHeight + panelHeight; // container for paths

    var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
    container.beginFill(0xfff000, 0.01);
    container.drawRect(0, 0, slotWidth, slotHeight);

    _this.addChild(container); // panel


    var panel = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
    panel.width = slotWidth;
    panel.height = panelHeight;
    panel.y = container.y + slotHeight;

    _this.addChild(panel); // Border


    var border = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
    var borderWidth = 5;
    border.lineStyle(borderWidth, 0xdbeff7);
    border.beginFill(0xb7b7ff, 0.5);
    border.drawRect(0, 0, slotWidth, panelHeight);
    panel.addChild(border); // Payline label

    var paylinesLabel = new _Label__WEBPACK_IMPORTED_MODULE_1__["default"]("Paylines:");
    panel.addChild(paylinesLabel); // bindings

    _this.togglePayline = _this.togglePayline.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Members

    _this.container = container;
    _this.panel = panel;
    _this.paths = [];
    _this.buttons = []; // Gen buttons and paths

    _this.generateElements(); // Positions


    var elms = [paylinesLabel].concat(_toConsumableArray(_this.buttons));
    _helpers__WEBPACK_IMPORTED_MODULE_3__["spaceAroundX"].apply(void 0, [slotWidth, panelHeight].concat(_toConsumableArray(elms)));
    return _this;
  }

  _createClass(Paylines, [{
    key: "generateElements",
    value: function generateElements() {
      var _this2 = this;

      var panel = this.panel,
          buttons = this.buttons,
          paths = this.paths;
      _state__WEBPACK_IMPORTED_MODULE_4__["default"].paylines.forEach(function (payline, index) {
        // button
        var btn = new _Button__WEBPACK_IMPORTED_MODULE_2__["default"]("#".concat(index));
        btn.on('pointertap', function () {
          return _this2.togglePayline(index);
        });
        panel.addChild(btn);
        buttons.push(btn); // paths

        var path = _this2.createPathLine(payline);

        paths.push(path);
      });
      this.updatePathAndBottonsStatus();
    }
  }, {
    key: "createPathLine",
    value: function createPathLine(payline) {
      var paths = this.paths,
          container = this.container;
      var reels = _state__WEBPACK_IMPORTED_MODULE_4__["default"].reels,
          lines = _state__WEBPACK_IMPORTED_MODULE_4__["default"].lines;
      var slotWidth = container.width;
      var slotHeight = container.height;
      var tileWidth = slotWidth / reels;
      var tileHeight = slotHeight / lines; // colors path

      var pathColors = [0xff0000, 0x00ff00, 0x0000ff, 0x000000, 0xa821f9, 0xed8b00, 0x75b1d6]; // path

      var path = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"](); // path.beginFill(0xff3300);

      var first = payline[0];
      var startX = tileWidth / 2 - 1;
      var startY = first * tileHeight + tileHeight / 2;
      var color = pathColors[paths.length % pathColors.length];
      path.lineStyle(6, color);
      path.moveTo(startX, startY);
      payline.forEach(function (pos, i) {
        var x = i * tileWidth + tileWidth / 2;
        var y = pos * tileHeight + tileHeight / 2;
        path.lineTo(x, y);
      });
      path.endFill();
      return path;
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "togglePayline",
    value: function togglePayline(index) {
      var activePaylines = _state__WEBPACK_IMPORTED_MODULE_4__["default"].activePaylines;
      var found = activePaylines.findIndex(function (i) {
        return i === index;
      }); // add

      if (found !== -1) activePaylines.splice(found, 1);else activePaylines.push(index);
      this.updatePathAndBottonsStatus();
    }
  }, {
    key: "updatePathAndBottonsStatus",
    value: function updatePathAndBottonsStatus() {
      var paths = this.paths,
          buttons = this.buttons,
          container = this.container;
      var activePaylines = _state__WEBPACK_IMPORTED_MODULE_4__["default"].activePaylines; //

      paths.forEach(function (path, index) {
        var isActive = activePaylines.includes(index);

        if (isActive) {
          container.addChild(path);
          buttons[index].setFill(['#ffffff', '#00ff99']);
        } else {
          container.removeChild(path);
          buttons[index].setFill(['#ffffff', '#cccccc']);
        }
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return Paylines;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./src/js/SlotGame/components/Paytable.js":
/*!************************************************!*\
  !*** ./src/js/SlotGame/components/Paytable.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paytable; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label */ "./src/js/SlotGame/components/Label.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ "./src/js/SlotGame/components/Tile.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/js/SlotGame/state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Paytable =
/*#__PURE__*/
function (_PIXI$Container) {
  _inherits(Paytable, _PIXI$Container);

  function Paytable(width, height) {
    var _this;

    _classCallCheck(this, Paytable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Paytable).call(this));
    var activeMultipliers = _state__WEBPACK_IMPORTED_MODULE_3__["default"].activeMultipliers; // Border

    var border = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
    border.lineStyle(5, 0xdbeff7);
    var padding = 1;
    border.drawRect(0, 0, width * padding, height * padding);

    _this.addChild(border); // create blocks


    var elements = activeMultipliers.map(function (data) {
      return _this.createBlock(data);
    }); // const maxRows = Math.floor(height / elements[0].heigt);

    elements.forEach(function (el, i) {
      el.y = el.height * i % height;
      el.x = Math.floor(el.height * i / height) * (el.width + 40);

      _this.addChild(el);
    });
    return _this;
  } // eslint-disable-next-line class-methods-use-this


  _createClass(Paytable, [{
    key: "createBlock",
    value: function createBlock(_ref) {
      var symbolIndex = _ref.symbolIndex,
          matches = _ref.matches,
          multiplier = _ref.multiplier;
      var symbols = _state__WEBPACK_IMPORTED_MODULE_3__["default"].symbols;
      var width = 30;
      var height = 30;
      var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"](); // tile

      var tileData = _objectSpread({}, symbols[symbolIndex], {
        width: width,
        height: height
      });

      var tile = new _Tile__WEBPACK_IMPORTED_MODULE_2__["default"](tileData);
      container.addChild(tile); // label

      var label = new _Label__WEBPACK_IMPORTED_MODULE_1__["default"](" x ".concat(matches, " \t = wage * ").concat(multiplier));
      label.x = width + 10;
      label.y = (height - label.height) / 2;
      container.addChild(label);
      return container;
    }
  }]);

  return Paytable;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./src/js/SlotGame/components/Reel.js":
/*!********************************************!*\
  !*** ./src/js/SlotGame/components/Reel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reel; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ "./src/js/SlotGame/components/Tile.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/js/SlotGame/state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Reel =
/*#__PURE__*/
function (_PIXI$Container) {
  _inherits(Reel, _PIXI$Container);

  function Reel(options) {
    var _this;

    _classCallCheck(this, Reel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reel).call(this));
    var width = options.width,
        height = options.height,
        lines = options.lines;
    var symbols = _state__WEBPACK_IMPORTED_MODULE_2__["default"].symbols; // validate options

    if (lines < 3) throw new Error("The minimum number of lines is 3");
    if (symbols.length < 3) throw new Error("The minimum number of symbols is 3"); // Border

    var border = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
    border.lineStyle(5, 0xdbeff7);
    var padding = 1;
    border.drawRect(0, 0, width * padding, height * padding);

    _this.addChild(border); // Mask


    var mask = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
    mask.beginFill(0);
    mask.drawRect(0, 0, width, height);
    mask.endFill();

    _this.addChild(mask); // Container with mask


    var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
    container.mask = mask;

    _this.addChild(container); // filter


    var blurFilter = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["filters"].BlurYFilter();
    blurFilter.strength = 0;
    _this.filters = [blurFilter]; // Members

    _this.result = null;
    _this.lines = lines;
    _this.tiles = [];
    _this.tileWidth = width;
    _this.tileHeight = height / lines;
    _this.speed = 20;
    _this.isSpining = false;
    _this.isStopping = false;
    _this.container = container;
    _this.blurFilter = blurFilter;

    _this.createTiles();

    return _this;
  }

  _createClass(Reel, [{
    key: "createTiles",
    value: function createTiles() {
      var lines = this.lines,
          container = this.container,
          tileWidth = this.tileWidth,
          tileHeight = this.tileHeight;
      var symbols = _state__WEBPACK_IMPORTED_MODULE_2__["default"].symbols; // +2 for circular rotation

      for (var i = 0; i < lines + 2; i += 1) {
        // first visible tile has symbol index = 0
        var symbolIndex = Math.abs(i - 1) % lines; // create tile

        var tileData = _objectSpread({}, symbols[symbolIndex], {
          width: tileWidth,
          height: tileHeight
        });

        var tile = new _Tile__WEBPACK_IMPORTED_MODULE_1__["default"](tileData);
        tile.y = i * tileHeight - tileHeight;
        container.addChild(tile);
        this.tiles.push(tile);
      }
    }
  }, {
    key: "spin",
    value: function spin(result) {
      var blurFilter = this.blurFilter;
      console.log("Reel.spin:: result: ".concat(result)); // filter

      blurFilter.strength = 0; // set state

      this.result = result;
      this.isSpining = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isStopping = true;
    }
  }, {
    key: "onSpinComplete",
    value: function onSpinComplete() {
      // filter
      this.blurFilter.strength = 0; // set state

      this.isSpining = false;
      this.isStopping = false;
      this.emit('reelspincomplete', this);
    }
  }, {
    key: "changeTile",
    value: function changeTile(tile) {
      var result = this.result,
          isStopping = this.isStopping;
      var symbols = _state__WEBPACK_IMPORTED_MODULE_2__["default"].symbols; // change to symbol

      var index = isStopping ? result.pop() : Math.floor(Math.random() * symbols.length);
      var nextTile = symbols[index];
      tile.id = nextTile.id;
      tile.sprite.texture = nextTile.texture;
    }
  }, {
    key: "getSpeed",
    value: function getSpeed(delta) {
      var result = this.result,
          container = this.container;
      var speed = delta * this.speed; // correct final position

      if (!result.length) {
        speed = 0 - container.children[0].y;
      }

      return speed;
    }
  }, {
    key: "update",
    value: function update(delta) {
      var _this2 = this;

      var isSpining = this.isSpining,
          tiles = this.tiles,
          lines = this.lines,
          tileHeight = this.tileHeight,
          container = this.container,
          result = this.result;
      if (!isSpining) return; // move tiles

      var speed = this.getSpeed(delta);
      tiles.forEach(function (tile) {
        tile.y += speed;
      }); // if it's final position

      if (!result.length) {
        this.onSpinComplete();
        return;
      } // filter


      this.blurFilter.strength = speed * 0.3; // circular

      var maxY = tileHeight * lines + tileHeight;
      tiles.forEach(function (tile) {
        if (tile.y + container.y > maxY) {
          // move tile to top
          tile.y = container.children[0].y - tileHeight;
          container.addChildAt(tile, 0); // and change

          _this2.changeTile(tile);
        }
      });
    }
  }]);

  return Reel;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./src/js/SlotGame/components/Slot.js":
/*!********************************************!*\
  !*** ./src/js/SlotGame/components/Slot.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slot; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Reel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reel */ "./src/js/SlotGame/components/Reel.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/js/SlotGame/state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Slot =
/*#__PURE__*/
function (_PIXI$Container) {
  _inherits(Slot, _PIXI$Container);

  function Slot(options) {
    var _this;

    _classCallCheck(this, Slot);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slot).call(this));
    var width = options.width,
        height = options.height,
        reels = options.reels,
        lines = options.lines,
        _options$spinTime = options.spinTime,
        spinTime = _options$spinTime === void 0 ? 1500 : _options$spinTime,
        _options$stopDelay = options.stopDelay,
        stopDelay = _options$stopDelay === void 0 ? 400 : _options$stopDelay; // validate options

    if (!width || !height) throw new Error("No width and height specified");
    if (!reels || reels < 3) throw new Error("The minimum number of reels is 3"); // Members

    _this.reels = [];
    _this.currentReel = null;
    _this.result = null;
    _this.isSpining = false;
    _this.spinTime = spinTime;
    _this.stopDelay = stopDelay; // Binding

    _this.onReelSpinComplete = _this.onReelSpinComplete.bind(_assertThisInitialized(_assertThisInitialized(_this))); // create reels

    var reelWidth = width / reels;

    for (var i = 0; i < reels; i += 1) {
      var reel = new _Reel__WEBPACK_IMPORTED_MODULE_1__["default"]({
        width: reelWidth,
        height: height,
        lines: lines
      });
      reel.x = i * reelWidth;

      _this.addChild(reel);

      reel.on('reelspincomplete', _this.onReelSpinComplete);

      _this.reels.push(reel);
    }

    return _this;
  }

  _createClass(Slot, [{
    key: "onReelSpinComplete",
    value: function onReelSpinComplete() {
      var _this2 = this;

      var reels = this.reels,
          result = this.result,
          stopDelay = this.stopDelay;
      this.currentReel += 1;
      _state__WEBPACK_IMPORTED_MODULE_2__["default"].sounds.change.play(); // stop next reel

      if (this.currentReel < reels.length) {
        setTimeout(function () {
          return reels[_this2.currentReel].stop();
        }, stopDelay);
        return;
      } // all reels completed


      this.currentReel = 0;
      this.isSpining = false;
      _state__WEBPACK_IMPORTED_MODULE_2__["default"].sounds.spining.stop();
      this.emit('slotspincomplete', result);
    }
  }, {
    key: "isCorrectResult",
    value: function isCorrectResult(result) {
      var reels = this.reels,
          lines = this.lines;
      var isEqualReels = result.length === reels;
      var isEqualLines = result[0].length === lines;
      return isEqualReels && isEqualLines;
    }
  }, {
    key: "spinReels",
    value: function spinReels(result) {
      var _this3 = this;

      var reels = this.reels,
          spinTime = this.spinTime,
          isSpining = this.isSpining;
      console.log("Slot.spinReels:: result:");
      console.log(result.map(function (line) {
        return "".concat(line.join(), "\n");
      }).join(""));
      if (isSpining) return; // Check result array

      if (this.isCorrectResult(result)) {
        throw new Error("Result array is incorrect");
      } // set states


      this.isSpining = true;
      this.currentReel = 0;
      this.result = result;
      _state__WEBPACK_IMPORTED_MODULE_2__["default"].sounds.spining.volume(0.1);
      _state__WEBPACK_IMPORTED_MODULE_2__["default"].sounds.spining.loop(); // start spin

      reels.forEach(function (reel, i) {
        var reelResult = result.map(function (row) {
          return row[i];
        });
        reel.spin(reelResult);
      });
      this.emit('slotspininit'); // stop

      setTimeout(function () {
        return _this3.stopReels();
      }, spinTime);
    }
  }, {
    key: "stopReels",
    value: function stopReels() {
      var reels = this.reels;
      reels[0].stop();
    }
  }, {
    key: "update",
    value: function update(delta) {
      this.reels.forEach(function (reel) {
        return reel.update(delta);
      });
    }
  }]);

  return Slot;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./src/js/SlotGame/components/Tile.js":
/*!********************************************!*\
  !*** ./src/js/SlotGame/components/Tile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tile; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Tile =
/*#__PURE__*/
function (_PIXI$Container) {
  _inherits(Tile, _PIXI$Container);

  function Tile(options) {
    var _this;

    _classCallCheck(this, Tile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tile).call(this));
    var id = options.id,
        texture = options.texture,
        width = options.width,
        height = options.height; // validate options

    if (!id) throw new Error("id is needed to create a symbol");
    if (!texture) throw new Error("texture is needed to create a symbol");
    if (!width || !height) throw new Error("width and height are needed to create a symbol"); // create sprite

    var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](); // scaling

    var ratio = Math.min(width / texture.orig.width, height / texture.orig.height) * 0.9;
    sprite.scale.set(ratio, ratio);
    sprite.anchor.set(0.5, 0.5);
    sprite.position.set(width * 0.5, height * 0.5);
    sprite.texture = texture;

    _this.addChild(sprite); // Members


    _this.id = id;
    _this.sprite = sprite;
    return _this;
  }

  _createClass(Tile, [{
    key: "update",
    value: function update() {}
  }]);

  return Tile;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./src/js/SlotGame/data/multipliers.json":
/*!***********************************************!*\
  !*** ./src/js/SlotGame/data/multipliers.json ***!
  \***********************************************/
/*! exports provided: tile-0.png, tile-1.png, tile-2.png, tile-3.png, tile-4.png, tile-5.png, tile-6.png, tile-7.png, tile-8.png, tile-9.png, default */
/***/ (function(module) {

module.exports = {"tile-0.png":{"3":10,"4":20,"5":30},"tile-1.png":{"3":1,"4":2,"5":3},"tile-2.png":{"3":2,"4":3,"5":4},"tile-3.png":{"3":3,"4":4,"5":5},"tile-4.png":{"3":4,"4":5,"5":6},"tile-5.png":{"3":5,"4":6,"5":7},"tile-6.png":{"3":6,"4":7,"5":8},"tile-7.png":{"3":7,"4":8,"5":9},"tile-8.png":{"3":8,"4":9,"5":10},"tile-9.png":{"3":9,"4":10,"5":11}};

/***/ }),

/***/ "./src/js/SlotGame/data/paylines.json":
/*!********************************************!*\
  !*** ./src/js/SlotGame/data/paylines.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"reels":3,"lines":3,"paylines":[[0,0,0],[1,1,1],[2,2,2],[0,1,2]]},{"reels":3,"lines":5,"paylines":[[0,0,0],[2,2,2],[4,4,4]]},{"reels":5,"lines":5,"paylines":[[0,0,0,0,0],[2,2,2,2,2],[4,4,4,4,4]]}];

/***/ }),

/***/ "./src/js/SlotGame/helpers.js":
/*!************************************!*\
  !*** ./src/js/SlotGame/helpers.js ***!
  \************************************/
/*! exports provided: spaceAroundX, spaceAroundY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceAroundX", function() { return spaceAroundX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceAroundY", function() { return spaceAroundY; });
function spaceAroundX(width, height) {
  for (var _len = arguments.length, elms = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    elms[_key - 2] = arguments[_key];
  }

  var sumWidth = elms.reduce(function (sum, el) {
    return sum + el.width;
  }, 0);
  var margin = (width - sumWidth) / elms.length; // element positioning

  for (var i = 0, offset = 0; i < elms.length; i += 1) {
    var el = elms[i];
    el.x = offset + margin / 2;
    el.y = (height - el.height) / 2;
    offset += el.width + margin;
  }
}
function spaceAroundY(width, height) {
  for (var _len2 = arguments.length, elms = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    elms[_key2 - 2] = arguments[_key2];
  }

  var sumHeight = elms.reduce(function (sum, el) {
    return sum + el.height;
  }, 0);
  var margin = (height - sumHeight) / elms.length; // element positioning

  for (var i = 0, offset = 0; i < elms.length; i += 1) {
    var el = elms[i];
    el.y = offset + margin / 2;
    el.x = (width - el.width) / 2;
    offset += el.height + margin;
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  spaceAroundX: spaceAroundX,
  spaceAroundY: spaceAroundY
});

/***/ }),

/***/ "./src/js/SlotGame/index.js":
/*!**********************************!*\
  !*** ./src/js/SlotGame/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SlotGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlotGame */ "./src/js/SlotGame/SlotGame.js");

/* harmony default export */ __webpack_exports__["default"] = (_SlotGame__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/SlotGame/screens/GameOverScreen.js":
/*!***************************************************!*\
  !*** ./src/js/SlotGame/screens/GameOverScreen.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameOverScreen; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screen */ "./src/js/SlotGame/screens/Screen.js");
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Label */ "./src/js/SlotGame/components/Label.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./src/js/SlotGame/components/Button.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/js/SlotGame/helpers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var GameOverScreen =
/*#__PURE__*/
function (_Screen) {
  _inherits(GameOverScreen, _Screen);

  function GameOverScreen(ctx) {
    var _this;

    _classCallCheck(this, GameOverScreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameOverScreen).call(this, ctx));

    _this.loader.once('complete', function () {
      return _this.init();
    });

    return _this;
  }

  _createClass(GameOverScreen, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var config = this.config,
          app = this.app;
      var width = 200;
      var height = 100; // frame

      var frame = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      frame.beginFill(0xc5defd);
      frame.drawRect(0, 0, width, height);
      frame.endFill();
      frame.x = (app.screen.width - width) / 2;
      frame.y = (app.screen.height - height) / 2;
      this.addChild(frame); // label

      var label = new _components_Label__WEBPACK_IMPORTED_MODULE_2__["default"]('Game over!');
      label.style.fontSize = 30;
      label.y = (height - label.height) / 2;
      frame.addChild(label); // button

      var button = new _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"]('Restart');
      button.y = (height - button.height) / 2;
      frame.addChild(button); // restart game

      button.on('pointertap', function () {
        _this2.loadScreen('game', function (game) {
          game.balance = config.balance;
        });
      }); // Positions

      var elms = [label, button];
      _helpers__WEBPACK_IMPORTED_MODULE_4__["spaceAroundY"].apply(void 0, [width, height].concat(elms)); // Members

      this.label = label;
      this.button = button;
    }
  }]);

  return GameOverScreen;
}(_Screen__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/js/SlotGame/screens/GameScreen.js":
/*!***********************************************!*\
  !*** ./src/js/SlotGame/screens/GameScreen.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameScreen; });
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screen */ "./src/js/SlotGame/screens/Screen.js");
/* harmony import */ var _components_Slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Slot */ "./src/js/SlotGame/components/Slot.js");
/* harmony import */ var _components_Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Info */ "./src/js/SlotGame/components/Info.js");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Controls */ "./src/js/SlotGame/components/Controls.js");
/* harmony import */ var _components_Paylines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Paylines */ "./src/js/SlotGame/components/Paylines.js");
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sound */ "./src/js/SlotGame/Sound.js");
/* harmony import */ var _data_paylines_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/paylines.json */ "./src/js/SlotGame/data/paylines.json");
var _data_paylines_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/paylines.json */ "./src/js/SlotGame/data/paylines.json", 1);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state */ "./src/js/SlotGame/state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// import * as PIXI from 'pixi.js';









var GameScreen =
/*#__PURE__*/
function (_Screen) {
  _inherits(GameScreen, _Screen);

  function GameScreen(ctx) {
    var _this;

    _classCallCheck(this, GameScreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameScreen).call(this, ctx)); // Members

    _this.autoSpinValue = false;
    _this.balanceValue = null;
    _this.wagerValue = null;
    _this.winValue = null; // Elements

    _this.paylines = null;
    _this.slot = null;
    _this.paylinesPanel = null;
    _this.info = null;
    _this.controls = null; // Binding

    _this.init = _this.init.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.wagerUp = _this.wagerUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.wagerDown = _this.wagerDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.spin = _this.spin.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.spinAuto = _this.spinAuto.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.cheatSpin = _this.cheatSpin.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateButtonStatus = _this.updateButtonStatus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSpinComplete = _this.onSpinComplete.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Load assets
    // PIXI.loader

    _this.loader // add assets
    .add([{
      name: 'click',
      url: 'assets/sounds/click.mp3'
    }, //
    {
      name: 'change',
      url: 'assets/sounds/change.mp3'
    }, {
      name: 'spining',
      url: 'assets/sounds/spining.mp3'
    }, {
      name: 'victory',
      url: 'assets/sounds/victory.mp3'
    }, {
      name: 'gameover',
      url: 'assets/sounds/gameover.mp3'
    }]).add('symbols', 'assets/symbols.json').once('complete', _this.init);

    return _this;
  }

  _createClass(GameScreen, [{
    key: "init",
    value: function init() {
      var config = this.config; // Calc size of elements

      var marginY = 10;
      var marginX = 10;
      var panelWidth = config.width - 20;
      var panelHeight = 40;
      var slotWidth = config.width * 0.69;
      var slotHeight = config.height - panelHeight * 3 - marginY * 7; // Data preparation

      this.initSymbols();
      this.initSounds();
      this.initPaylines();
      this.initMultipliers(); // Create panels

      var slot = this.createSlot(slotWidth, slotHeight);
      var paylines = this.createPaylines(slotWidth, slotHeight);
      var info = this.createInfo(panelWidth, panelHeight);
      var controls = this.createControls(panelWidth, panelHeight); // Positions

      slot.position.set((config.width - slotWidth) / 2, marginY);
      paylines.position.set(slot.x, slot.y); // info.position.set(marginX, paylines.y + paylines.height + marginY);

      info.position.set(marginX, slot.y + slot.height + panelHeight + marginY);
      controls.position.set(marginX, info.y + info.height + marginY); // Members

      this.slot = slot;
      this.paylines = paylines;
      this.info = info;
      this.controls = controls; // set initial values

      this.balance = config.balance;
      this.wager = config.wager;
      this.win = 0;
      this.autoSpinMode = false; // init event

      this.emit('init');
    }
  }, {
    key: "initSymbols",
    value: function initSymbols() {
      // assets
      _state__WEBPACK_IMPORTED_MODULE_7__["default"].symbols = []; // const sheet = PIXI.loader.resources.symbols;

      var sheet = this.loader.resources.symbols; // use textures from assets

      Object.entries(sheet.textures).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            texture = _ref2[1];

        _state__WEBPACK_IMPORTED_MODULE_7__["default"].symbols.push({
          id: id,
          texture: texture
        });
      });
    }
  }, {
    key: "initSounds",
    value: function initSounds() {
      // // use textures from assets
      Object.values(this.loader.resources).filter(function (asset) {
        return asset.isAudio;
      }).forEach(function (asset) {
        _state__WEBPACK_IMPORTED_MODULE_7__["default"].sounds[asset.name] = new _Sound__WEBPACK_IMPORTED_MODULE_5__["default"](asset.data);
      });
    }
  }, {
    key: "initMultipliers",
    value: function initMultipliers() {
      var config = this.config;
      var multipliers = _state__WEBPACK_IMPORTED_MODULE_7__["default"].multipliers,
          symbols = _state__WEBPACK_IMPORTED_MODULE_7__["default"].symbols;
      _state__WEBPACK_IMPORTED_MODULE_7__["default"].activeMultipliers = []; // get actual multipliers

      var actual = [];
      Object.entries(multipliers).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            symbolId = _ref4[0],
            data = _ref4[1];

        var symbolIndex = symbols.findIndex(function (s) {
          return s.id === symbolId;
        });
        var factors = Object.entries(data).filter(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 1),
              matches = _ref6[0];

          return +matches <= config.lines;
        });

        if (factors) {
          factors.forEach(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                matches = _ref8[0],
                multiplier = _ref8[1];

            actual.push({
              symbolIndex: symbolIndex,
              matches: matches,
              multiplier: multiplier
            });
          });
        }
      });
      _state__WEBPACK_IMPORTED_MODULE_7__["default"].activeMultipliers = actual;
    }
  }, {
    key: "initPaylines",
    value: function initPaylines() {
      var _state$paylines;

      var config = this.config;
      _state__WEBPACK_IMPORTED_MODULE_7__["default"].paylines = []; // find paylines for current game size

      var found = _data_paylines_json__WEBPACK_IMPORTED_MODULE_6__.find(function (data) {
        return data.reels === config.reels && data.lines === config.lines;
      });

      if (!found) {
        throw new Error("Paylines for current game size not found");
      }

      (_state$paylines = _state__WEBPACK_IMPORTED_MODULE_7__["default"].paylines).push.apply(_state$paylines, _toConsumableArray(found.paylines));
    }
  }, {
    key: "createSlot",
    value: function createSlot(width, height) {
      var config = this.config,
          onSpinComplete = this.onSpinComplete,
          updateButtonStatus = this.updateButtonStatus;
      var slot = new _components_Slot__WEBPACK_IMPORTED_MODULE_1__["default"](_objectSpread({}, config, {
        width: width,
        height: height
      })); // handlers

      slot.on('slotspincomplete', onSpinComplete);
      slot.on('slotspininit', updateButtonStatus);
      return this.addChild(slot);
    }
  }, {
    key: "createPaylines",
    value: function createPaylines(width, height) {
      var paylines = new _components_Paylines__WEBPACK_IMPORTED_MODULE_4__["default"](width, height);
      return this.addChild(paylines);
    }
  }, {
    key: "createInfo",
    value: function createInfo(width, height) {
      var info = new _components_Info__WEBPACK_IMPORTED_MODULE_2__["default"](width, height);
      return this.addChild(info);
    }
  }, {
    key: "createControls",
    value: function createControls(width, height) {
      var spin = this.spin,
          spinAuto = this.spinAuto,
          cheatSpin = this.cheatSpin,
          wagerUp = this.wagerUp,
          wagerDown = this.wagerDown,
          loadScreen = this.loadScreen;
      var controls = new _components_Controls__WEBPACK_IMPORTED_MODULE_3__["default"](width, height); // handlers

      controls.btnSpin.on('pointertap', spin);
      controls.btnAutoSpin.on('pointertap', spinAuto);
      controls.btnCheatSpin.on('pointertap', cheatSpin);
      controls.btnWagerUp.on('pointertap', wagerUp);
      controls.btnWagerDown.on('pointertap', wagerDown);
      controls.btnPaytable.on('pointertap', function () {
        loadScreen('paytable');
      });
      return this.addChild(controls);
    }
  }, {
    key: "analyseResult",
    value: function analyseResult(result) {
      var wager = this.wager;
      var activePaylines = _state__WEBPACK_IMPORTED_MODULE_7__["default"].activePaylines,
          paylines = _state__WEBPACK_IMPORTED_MODULE_7__["default"].paylines,
          symbols = _state__WEBPACK_IMPORTED_MODULE_7__["default"].symbols,
          multipliers = _state__WEBPACK_IMPORTED_MODULE_7__["default"].multipliers;
      var winPaylines = {};
      activePaylines.forEach(function (paylineIndex) {
        var payline = paylines[paylineIndex];
        if (!payline) return; // number of repetitions per line

        var stats = payline.map(function (pos, i) {
          return result[pos][i];
        }) //
        .reduce(function (res, symbIndex) {
          res[symbIndex] = res[symbIndex] ? res[symbIndex] + 1 : 1;
          return res;
        }, {});
        console.log("\n        payline = ".concat(payline, "\n        stats:: ").concat(Object.entries(stats).join(' | '), "\n        ")); // check win

        Object.entries(stats).forEach(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              symbolIndex = _ref10[0],
              repetitions = _ref10[1];

          //
          var symbolId = symbols[symbolIndex].id;
          var multiplier = multipliers[symbolId][repetitions]; // if win

          if (multiplier) {
            var prevSum = winPaylines[paylineIndex] || 0;
            var win = multiplier * wager;
            winPaylines[paylineIndex] = prevSum + win;
            console.log("win:: symbolId: ".concat(symbolId, ", m: ").concat(multiplier, ", win: ").concat(win, ", prevSum: ").concat(prevSum));
          }
        });
      }); // cacl sum

      var totalWin = 0;
      Object.entries(winPaylines).forEach(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2),

        /* paylineIndex */
        sum = _ref12[1];

        totalWin += sum;
      });
      return totalWin;
    }
  }, {
    key: "onSpinComplete",
    value: function onSpinComplete(result) {
      var autoSpinMode = this.autoSpinMode,
          spin = this.spin; // get win paylines

      console.log("GameScreen.onSpinComplete:: result: ".concat(result));
      var totalWin = this.analyseResult(result);

      if (totalWin) {
        this.win = totalWin;
        _state__WEBPACK_IMPORTED_MODULE_7__["default"].sounds.victory.play();
      }

      this.updateButtonStatus(); // game over

      if (this.balance < this.config.wager) {
        this.loadScreen('gameover');
        _state__WEBPACK_IMPORTED_MODULE_7__["default"].sounds.gameover.play();
        return;
      } // autospin


      if (autoSpinMode) setTimeout(spin, _state__WEBPACK_IMPORTED_MODULE_7__["default"].autoSpinDelay);
    }
  }, {
    key: "genRandomResult",
    value: function genRandomResult() {
      var config = this.config;
      var symbols = _state__WEBPACK_IMPORTED_MODULE_7__["default"].symbols;
      var result = []; // generation of random indexes of symbols array

      for (var i = 0; i < config.lines; i += 1) {
        result[i] = [];

        for (var j = 0; j < config.reels; j += 1) {
          var index = Math.floor(Math.random() * symbols.length);
          result[i][j] = index;
        }
      }

      return result;
    }
  }, {
    key: "genSuccessedResult",
    value: function genSuccessedResult() {
      var config = this.config;
      var symbols = _state__WEBPACK_IMPORTED_MODULE_7__["default"].symbols,
          activePaylines = _state__WEBPACK_IMPORTED_MODULE_7__["default"].activePaylines,
          paylines = _state__WEBPACK_IMPORTED_MODULE_7__["default"].paylines;
      var result = [];
      var activeIndex = Math.floor(Math.random() * activePaylines.length);
      var paylineIndex = activePaylines[activeIndex];
      var winPayline = paylines[paylineIndex] || [];
      var winSymbolIndex = Math.floor(Math.random() * symbols.length);
      console.log("winPayline: ".concat(winPayline)); // gen

      for (var i = 0; i < config.lines; i += 1) {
        result[i] = [];

        for (var j = 0; j < config.reels; j += 1) {
          var index = i === winPayline[j] ? winSymbolIndex : Math.floor(Math.random() * symbols.length);
          result[i][j] = index;
        }
      }

      return result;
    }
  }, {
    key: "spinAuto",
    value: function spinAuto() {
      var slot = this.slot,
          autoSpinMode = this.autoSpinMode;
      this.autoSpinMode = !autoSpinMode; // Run

      if (!slot.isSpining) this.spin();
    }
  }, {
    key: "cheatSpin",
    value: function cheatSpin() {
      var slot = this.slot,
          balance = this.balance,
          wager = this.wager;
      if (slot.isSpining) return;

      if (balance >= wager) {
        this.balance -= this.wager;
        this.win = 0;
        var result = this.genSuccessedResult();
        slot.spinReels(result);
      }
    }
  }, {
    key: "spin",
    value: function spin() {
      var slot = this.slot,
          balance = this.balance,
          wager = this.wager;
      if (slot.isSpining) return;

      if (balance >= wager) {
        this.balance -= this.wager;
        this.win = 0;
        var result = this.genRandomResult();
        slot.spinReels(result);
      }
    }
  }, {
    key: "wagerUp",
    value: function wagerUp() {
      var config = this.config;
      this.wager += config.wagerStep;
    }
  }, {
    key: "wagerDown",
    value: function wagerDown() {
      var config = this.config;
      this.wager -= config.wagerStep;
    }
  }, {
    key: "update",
    value: function update(delta) {
      var slot = this.slot;
      if (slot) slot.update(delta); // if (info) info.update(delta);
      // if (controls) controls.update(delta);
    }
  }, {
    key: "updateButtonStatus",
    value: function updateButtonStatus() {
      var config = this.config,
          balance = this.balance,
          wager = this.wager,
          slot = this.slot,
          controls = this.controls;
      var btnSpin = controls.btnSpin,
          btnCheatSpin = controls.btnCheatSpin,
          btnWagerUp = controls.btnWagerUp,
          btnWagerDown = controls.btnWagerDown; // btnWagerUp availability

      if (slot.isSpining || balance < wager + config.wagerStep || wager === config.maxWager) btnWagerUp.disable();else btnWagerUp.enable(); // btnWagerDown availability

      if (slot.isSpining || balance < wager || wager <= config.wager) btnWagerDown.disable();else btnWagerDown.enable(); // btnSpin availability

      if (slot.isSpining || balance <= 0) btnSpin.disable();else btnSpin.enable(); // btnSpin availability

      if (slot.isSpining || balance <= 0) btnCheatSpin.disable();else btnCheatSpin.enable(); // game over

      if (balance <= 0) {
        this.autoSpinMode = false;
      }
    }
  }, {
    key: "balance",
    get: function get() {
      return this.balanceValue;
    },
    set: function set(value) {
      var config = this.config,
          info = this.info; // set balance

      this.balanceValue = value;
      info.balanceLabel.text = "Balance: ".concat(value); // decrease wager

      if (value < this.wager) {
        this.wager = config.wager;
      }

      this.updateButtonStatus();
    }
  }, {
    key: "wager",
    get: function get() {
      return this.wagerValue;
    },
    set: function set(value) {
      var config = this.config,
          info = this.info,
          balance = this.balance;

      if (value <= balance && value <= config.maxWager && value >= config.wager) {
        this.wagerValue = value;
        info.wagerLabel.text = "Wager: ".concat(value);
      }

      this.updateButtonStatus();
    }
  }, {
    key: "win",
    get: function get() {
      return this.winValue;
    },
    set: function set(value) {
      var info = this.info;
      this.winValue = value;
      this.balance += value;
      info.winLabel.text = "Win: ".concat(value);
    }
  }, {
    key: "autoSpinMode",
    get: function get() {
      return this.autoSpinValue;
    },
    set: function set(value) {
      var controls = this.controls;
      this.autoSpinValue = !!value; // set button fill

      var fill = this.autoSpinValue ? ['#ffffff', '#00ff99'] : ['#ffffff', '#cccccc'];
      controls.btnAutoSpin.setFill(fill);
    }
  }]);

  return GameScreen;
}(_Screen__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/SlotGame/screens/PaytableScreen.js":
/*!***************************************************!*\
  !*** ./src/js/SlotGame/screens/PaytableScreen.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaytableScreen; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screen */ "./src/js/SlotGame/screens/Screen.js");
/* harmony import */ var _components_Paytable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Paytable */ "./src/js/SlotGame/components/Paytable.js");
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Label */ "./src/js/SlotGame/components/Label.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./src/js/SlotGame/components/Button.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./src/js/SlotGame/helpers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var PaytableScreen =
/*#__PURE__*/
function (_Screen) {
  _inherits(PaytableScreen, _Screen);

  function PaytableScreen(ctx) {
    var _this;

    _classCallCheck(this, PaytableScreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaytableScreen).call(this, ctx));

    _this.loader.once('complete', function () {
      return _this.init();
    });

    return _this;
  }

  _createClass(PaytableScreen, [{
    key: "init",
    value: function init() {
      var app = this.app,
          loadScreen = this.loadScreen;
      var height = 50; // frame

      var frame = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      frame.beginFill(0xc5defd);
      frame.drawRect(0, 0, app.screen.width, height);
      frame.endFill();
      this.addChild(frame); // label

      var label = new _components_Label__WEBPACK_IMPORTED_MODULE_3__["default"]('Paytable');
      label.style.fontSize = 30;
      frame.addChild(label); // button

      var button = new _components_Button__WEBPACK_IMPORTED_MODULE_4__["default"]('Back to game');
      frame.addChild(button); // back to game

      button.on('pointertap', function () {
        loadScreen('game');
      }); // Positions

      var elms = [label, button];
      _helpers__WEBPACK_IMPORTED_MODULE_5__["spaceAroundX"].apply(void 0, [app.screen.width, height].concat(elms)); // paylable

      var paylable = new _components_Paytable__WEBPACK_IMPORTED_MODULE_2__["default"](app.screen.width, app.screen.height - height);
      paylable.y = height;
      this.addChild(paylable); // Members

      this.label = label;
      this.button = button;
      this.paylable = paylable;
    }
  }]);

  return PaytableScreen;
}(_Screen__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/js/SlotGame/screens/Screen.js":
/*!*******************************************!*\
  !*** ./src/js/SlotGame/screens/Screen.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Screen; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Screen =
/*#__PURE__*/
function (_PIXI$Container) {
  _inherits(Screen, _PIXI$Container);

  function Screen(ctx) {
    var _this;

    _classCallCheck(this, Screen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Screen).call(this));
    _this.ctx = ctx;
    _this.app = ctx.app;
    _this.config = ctx.config;
    _this.loadScreen = ctx.loadScreen; // this.loader = new PIXI.loaders.Loader();

    _this.loader = ctx.loader; // size

    _this.width = _this.app.screen.width;
    _this.height = _this.app.screen.height; // TODO: resize

    return _this;
  }

  _createClass(Screen, [{
    key: "update",
    value: function update() {}
  }]);

  return Screen;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./src/js/SlotGame/state.js":
/*!**********************************!*\
  !*** ./src/js/SlotGame/state.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_multipliers_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/multipliers.json */ "./src/js/SlotGame/data/multipliers.json");
var _data_multipliers_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/multipliers.json */ "./src/js/SlotGame/data/multipliers.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var initialState = {
  // size
  root: '.root',
  reels: 3,
  lines: 3,
  width: 640,
  height: 480,
  // money
  // balance: 10000,
  balance: 1500,
  wager: 100,
  wagerStep: 100,
  maxWager: 500,
  // interface
  autoSpinDelay: 2000,
  spinTime: 1000,
  stopDelay: 200,
  // data
  activePaylines: [],
  paylines: [],
  multipliers: _data_multipliers_json__WEBPACK_IMPORTED_MODULE_0__,
  activeMultipliers: [],
  // Assets
  sounds: {},
  symbols: []
};

var State =
/*#__PURE__*/
function () {
  function State() {
    _classCallCheck(this, State);

    this.reset();
  }

  _createClass(State, [{
    key: "reset",
    value: function reset() {
      Object.assign(this, initialState);
      this.symbols = [];
      this.activePaylines = [1];
    }
  }]);

  return State;
}();

/* harmony default export */ __webpack_exports__["default"] = (new State());

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SlotGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlotGame */ "./src/js/SlotGame/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


document.addEventListener('DOMContentLoaded', function () {
  // Init game
  var game = new _SlotGame__WEBPACK_IMPORTED_MODULE_0__["default"]({
    root: '.root',
    reels: 3,
    lines: 3
  }); // Generating buttons to create a game of various sizes

  (function genStartGameButtons() {
    for (var _len = arguments.length, sizes = new Array(_len), _key = 0; _key < _len; _key++) {
      sizes[_key] = arguments[_key];
    }

    sizes.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          reels = _ref2[0],
          lines = _ref2[1];

      var button = document.createElement('button');
      button.textContent = "New game ".concat(reels, " x ").concat(lines);
      button.style.margin = "10px"; // Reinit game

      button.addEventListener('click', function () {
        // remove old
        window.game.destroy();
        window.game = null; // create new

        var newGame = new _SlotGame__WEBPACK_IMPORTED_MODULE_0__["default"]({
          root: '.root',
          reels: reels,
          lines: lines
        });
        window.game = newGame;
      });
      document.body.appendChild(button);
    });
  })([3, 3], [3, 5], [5, 5]); // Handlers
  // for debug


  window.game = game;
});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Dropbox\Dropbox\Development\Exercices\gamestudio\SlotsGame\src\js\main.js */"./src/js/main.js");


/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map