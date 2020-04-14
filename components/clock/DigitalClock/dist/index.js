
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * This class will render a working clock which can give the time Hours:Minutes:Seconds
 * The clock has the following props:
 * @props {digits} can be "single" or "double", by default "double"
 * @props {seperator} this is by default ":"
 */
var DigitalClock = /*#__PURE__*/function (_React$Component) {
  _inherits(DigitalClock, _React$Component);

  var _super = _createSuper(DigitalClock);

  function DigitalClock(props) {
    var _this;

    _classCallCheck(this, DigitalClock);

    _this = _super.call(this, props);
    _this.state = {
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
    return _this;
  }
  /**
   * This will happe every tick (1 second)
   * It will overwrite the state to get the accurate time
   */


  _createClass(DigitalClock, [{
    key: "tick",
    value: function tick() {
      var time = new Date();
      this.setState({
        hours: this.getHours(time),
        minutes: this.getMinutes(time),
        seconds: this.getSeconds(time)
      });
    }
    /**
     * This will give the correct hours based on the props.digits
     * @param {Date} time 
     * @return {Mixin} 
     */

  }, {
    key: "getHours",
    value: function getHours(time) {
      var hours = '00';

      if (this.props.digits == "double" || !this.props.digits) {
        if (time.getHours() < 10) {
          hours = '0' + String(time.getHours());
        } else {
          hours = time.getHours();
        }
      } else if (this.props.digits == "single") {
        hours = time.getHours();
      }

      return hours;
    }
    /**
     * This will give the correct minutes based on the props.digits
     * @param {Date} time 
     * @return {Mixin}
     */

  }, {
    key: "getMinutes",
    value: function getMinutes(time) {
      var minutes = '00';

      if (this.props.digits == "double" || !this.props.digits) {
        if (time.getMinutes() < 10) {
          minutes = '0' + String(time.getMinutes());
        } else {
          minutes = time.getMinutes();
        }
      } else if (this.props.digits == "single") {
        minutes = time.getMinutes();
      }

      return minutes;
    }
    /**
     * This will give the correct seconds based on the props.digits
     * @param {Date} time 
     * @return {Mixin}
     */

  }, {
    key: "getSeconds",
    value: function getSeconds(time) {
      var seconds = '00';

      if (this.props.digits == "double" || !this.props.digits) {
        if (time.getSeconds() < 10) {
          seconds = '0' + String(time.getSeconds());
        } else {
          seconds = time.getSeconds();
        }
      } else if (this.props.digits == "single") {
        seconds = time.getSeconds();
      }

      return seconds;
    }
    /**
     * When mounting this component starting the timer and initilizing the time by calling this.tick()
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.tick();
      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
    /**
     * When unmounting unsetting the interval (this.timerID)
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
    /**
     * Rendering the component using JSX
     */

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        "class": "DigitalClock"
      }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("span", {
        id: "hours"
      }, this.state.hours), /*#__PURE__*/_react["default"].createElement("span", {
        "class": "seperator",
        id: "hours-seperator"
      }, this.props.seperator || ":"), /*#__PURE__*/_react["default"].createElement("span", {
        id: "minutes"
      }, this.state.minutes), /*#__PURE__*/_react["default"].createElement("span", {
        "class": "seperator",
        id: "minutes-seperator"
      }, this.props.seperator || ":"), /*#__PURE__*/_react["default"].createElement("span", {
        id: "seconds"
      }, this.state.seconds)));
    }
  }]);

  return DigitalClock;
}(_react["default"].Component);

exports["default"] = DigitalClock;
