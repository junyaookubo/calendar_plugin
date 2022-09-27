/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Calendar.js":
/*!*************************!*\
  !*** ./src/Calendar.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calendar": function() { return /* binding */ Calendar; },
/* harmony export */   "HolidayNumWeekContext": function() { return /* binding */ HolidayNumWeekContext; },
/* harmony export */   "HolidayWeekContext": function() { return /* binding */ HolidayWeekContext; },
/* harmony export */   "MonthContext": function() { return /* binding */ MonthContext; },
/* harmony export */   "TempDayContext": function() { return /* binding */ TempDayContext; },
/* harmony export */   "TempHolidayContext": function() { return /* binding */ TempHolidayContext; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _components_MonthFront__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MonthFront */ "./src/components/MonthFront.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);






const MonthContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const HolidayWeekContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const HolidayNumWeekContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const TempHolidayContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const TempDayContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_util__WEBPACK_IMPORTED_MODULE_2__.getMonth)());
  const [changeMonth, setChangeMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_4___default()());
  const [holiday, setHoliday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [holidayWeek, setHolidayWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [holidayNumWeek, setHolidayNumWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [holidayBoolean, setHolidayBoolean] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [tempDay, setTempDay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [tempHoliday, setTempHoliday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setCurrentMonth((0,_util__WEBPACK_IMPORTED_MODULE_2__.getMonth)(changeMonth));
    fetch(`/wp-json/calendar/v0/holiday/?date=${changeMonth.year()}-${changeMonth.month() + 1}`).then(res => {
      res.json().then(data => {
        setHoliday(data);
      }).catch(error => {
        console.log(error);
      });
    }).catch(error => {
      console.log(error);
    });
  }, [changeMonth]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetch('/wp-json/calendar/v0/holiday-boolean/').then(res => {
      return res.json().then(data => {
        setHolidayBoolean(JSON.parse(data.toLowerCase()));
      });
    }).catch(error => {
      console.log(error);
    });
    fetch('/wp-json/calendar/v0/holiday-week/').then(res => {
      return res.json().then(data => {
        setHolidayWeek([...holidayWeek, ...data]);
      });
    }).catch(error => {
      console.log(error);
    });
    fetch('/wp-json/calendar/v0/holiday-num-week/').then(res => {
      return res.json().then(data => {
        setHolidayNumWeek([...holidayNumWeek, ...data]);
      });
    }).catch(error => {
      console.log(error);
    });
    fetch('/wp-json/calendar/v0/temp-holiday/').then(res => {
      return res.json().then(data => {
        setTempHoliday([...tempHoliday, ...data]);
      });
    }).catch(error => {
      console.log(error);
    });
    fetch('/wp-json/calendar/v0/temp-day/').then(res => {
      return res.json().then(data => {
        setTempDay([...tempDay, ...data]);
      });
    }).catch(error => {
      console.log(error);
    });
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HolidayNumWeekContext.Provider, {
    value: [holidayNumWeek, setHolidayNumWeek]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TempDayContext.Provider, {
    value: [tempDay, setTempDay]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TempHolidayContext.Provider, {
    value: [tempHoliday, setTempHoliday]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MonthContext.Provider, {
    value: [changeMonth, setChangeMonth]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_MonthFront__WEBPACK_IMPORTED_MODULE_3__.MonthFront, {
    month: currentMonth,
    holiday: holiday,
    holidayWeek: holidayWeek,
    holidayBoolean: holidayBoolean
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  MonthContext,
  HolidayWeekContext,
  HolidayNumWeekContext,
  TempHolidayContext,
  TempDayContext
});

/***/ }),

/***/ "./src/components/Day.js":
/*!*******************************!*\
  !*** ./src/components/Day.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Day": function() { return /* binding */ Day; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./src/index.js");




const Day = props => {
  const day = props.day;
  const [changeMonth, setChangeMonth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(___WEBPACK_IMPORTED_MODULE_3__.MonthContext);
  const [holidayNumWeek, setHolidayNumWeek] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(___WEBPACK_IMPORTED_MODULE_3__.HolidayNumWeekContext);
  const [tempHoliday, setTempHoliday] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(___WEBPACK_IMPORTED_MODULE_3__.TempHolidayContext);
  const [tempDay, setTempDay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(___WEBPACK_IMPORTED_MODULE_3__.TempDayContext);
  const holiday = props.holiday;
  const holidayWeek = props.holidayWeek;
  const firstWeek = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(changeMonth).startOf('month');
  const lastWeek = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(changeMonth).endOf('month');
  var checkHoliday = false;
  var checkHolidayWeek = false;
  var checkTempHoliday = false;
  var checkTempDay = false;
  var holidayTitle = ""; // 祝日

  if (holiday && props.holidayBoolean) {
    holiday.map(json => {
      if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(json.date).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(json.date).date()) {
        checkHoliday = true;
        holidayTitle = json.title;
        return;
      }
    });
  } // 第○の○曜日の定休日


  if (holidayNumWeek.length > 0) {
    let n = 0;
    let w = 0;
    holidayNumWeek.map(d => {
      switch (Object.keys(d)[0]) {
        case 'n1':
          n = 0;
          break;

        case 'n2':
          n = 1;
          break;

        case 'n3':
          n = 2;
          break;

        case 'n4':
          n = 3;
          break;

        case 'n5':
          n = 4;
          break;

        case 'n-end':
          n = 5;
          break;
      }

      switch (Object.values(d)[0]) {
        case 'Sun':
          w = 0;
          break;

        case 'Mon':
          w = 1;
          break;

        case 'Tue':
          w = 2;
          break;

        case 'Wed':
          w = 3;
          break;

        case 'Thu':
          w = 4;
          break;

        case 'Fri':
          w = 5;
          break;

        case 'Sat':
          w = 6;
          break;

        default:
      }

      if (n == 5) {
        if (w > lastWeek.day()) {
          let targetDay = lastWeek.subtract(1, 'w').add(w - lastWeek.day(), 'd');

          if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).date()) {
            checkHolidayWeek = true;
          }
        } else if (w == lastWeek.day()) {
          if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(lastWeek).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(lastWeek).date()) {
            checkHolidayWeek = true;
          }
        } else {
          let targetDay = lastWeek.subtract(lastWeek.day() - w, 'd');

          if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).date()) {
            checkHolidayWeek = true;
          }
        }
      } else {
        if (w >= firstWeek.day()) {
          let targetDay = firstWeek.add(w - firstWeek.day(), 'd').add(n, 'w');

          if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).date()) {
            checkHolidayWeek = true;
          }
        } else {
          let targetDay = firstWeek.add(7 - (firstWeek.day() - w), 'd').add(n, 'w');

          if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).date()) {
            checkHolidayWeek = true;
          }
        }
      }
    });
  } // 毎週○曜日の定休日


  if (holidayWeek) {
    let w = "";

    switch (day.day()) {
      case 0:
        w = 'Sun';
        break;

      case 1:
        w = 'Mon';
        break;

      case 2:
        w = 'Tue';
        break;

      case 3:
        w = 'Wed';
        break;

      case 4:
        w = 'Thu';
        break;

      case 5:
        w = 'Fri';
        break;

      case 6:
        w = 'Sat';
        break;

      default:
    }

    if (holidayWeek.includes(w)) {
      checkHolidayWeek = true;
    }
  } // 臨時休業日


  if (tempHoliday) {
    tempHoliday.map(elm => {
      if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(elm).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(elm).date()) {
        checkHoliday = true;
        checkTempHoliday = true;
      }
    });
  } // 臨時営業日


  if (tempDay) {
    tempDay.map(elm => {
      if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(elm).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(elm).date()) {
        checkTempDay = true;
      }
    });
  } // 今月の日付はtrue


  const getCurrentMonth = () => {
    if (day.month() != changeMonth.month()) {
      return true;
    }
  }; // 今日の日付はtrue


  const getCurrentDay = () => {
    if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()().month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()().date()) {
      return true;
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: `${getCurrentDay() ? 'today ' : ''}${getCurrentMonth() ? 'disabled' : ''}${checkHoliday ? ' holiday' : ''}${checkHolidayWeek ? ' holiday-week' : ''}${checkTempDay ? ' temp-day' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, day.format("DD")), checkTempHoliday && !checkTempDay ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "title"
  }, "\u81E8\u6642\u4F11\u696D\u65E5") : "", " ", holidayTitle != "" && !checkTempDay ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "title"
  }, holidayTitle) : ""));
};

/***/ }),

/***/ "./src/components/DayFront.js":
/*!************************************!*\
  !*** ./src/components/DayFront.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayFront": function() { return /* binding */ DayFront; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Calendar */ "./src/Calendar.js");




const DayFront = props => {
  const day = props.day;
  const [changeMonth, setChangeMonth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Calendar__WEBPACK_IMPORTED_MODULE_3__.MonthContext);
  const [holidayNumWeek, setHolidayNumWeek] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Calendar__WEBPACK_IMPORTED_MODULE_3__.HolidayNumWeekContext);
  const [tempHoliday, setTempHoliday] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Calendar__WEBPACK_IMPORTED_MODULE_3__.TempHolidayContext);
  const [tempDay, setTempDay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Calendar__WEBPACK_IMPORTED_MODULE_3__.TempDayContext);
  const holiday = props.holiday;
  const holidayWeek = props.holidayWeek;
  const firstWeek = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(changeMonth).startOf('month');
  const lastWeek = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(changeMonth).endOf('month');
  var checkHoliday = false;
  var checkHolidayWeek = false;
  var checkTempHoliday = false;
  var checkTempDay = false;
  var holidayTitle = ""; // 祝日

  if (holiday && props.holidayBoolean) {
    holiday.map(json => {
      if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(json.date).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(json.date).date()) {
        checkHoliday = true;
        holidayTitle = json.title;
        return;
      }
    });
  } // 第○の○曜日の定休日


  if (holidayNumWeek.length > 0) {
    let n = 0;
    let w = 0;
    holidayNumWeek.map(d => {
      switch (Object.keys(d)[0]) {
        case 'n1':
          n = 0;
          break;

        case 'n2':
          n = 1;
          break;

        case 'n3':
          n = 2;
          break;

        case 'n4':
          n = 3;
          break;

        case 'n5':
          n = 4;
          break;

        case 'n-end':
          n = 5;
          break;
      }

      switch (Object.values(d)[0]) {
        case 'Sun':
          w = 0;
          break;

        case 'Mon':
          w = 1;
          break;

        case 'Tue':
          w = 2;
          break;

        case 'Wed':
          w = 3;
          break;

        case 'Thu':
          w = 4;
          break;

        case 'Fri':
          w = 5;
          break;

        case 'Sat':
          w = 6;
          break;

        default:
      }

      if (n == 5) {
        if (w > lastWeek.day()) {
          let targetDay = lastWeek.subtract(1, 'w').add(w - lastWeek.day(), 'd');

          if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).date()) {
            checkHolidayWeek = true;
          }
        } else if (w == lastWeek.day()) {
          if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(lastWeek).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(lastWeek).date()) {
            checkHolidayWeek = true;
          }
        } else {
          let targetDay = lastWeek.subtract(lastWeek.day() - w, 'd');

          if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).date()) {
            checkHolidayWeek = true;
          }
        }
      } else {
        if (w >= firstWeek.day()) {
          let targetDay = firstWeek.add(w - firstWeek.day(), 'd').add(n, 'w');

          if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).date()) {
            checkHolidayWeek = true;
          }
        } else {
          let targetDay = firstWeek.add(7 - (firstWeek.day() - w), 'd').add(n, 'w');

          if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(targetDay).date()) {
            checkHolidayWeek = true;
          }
        }
      }
    });
  } // 毎週○曜日の定休日


  if (holidayWeek) {
    let w = "";

    switch (day.day()) {
      case 0:
        w = 'Sun';
        break;

      case 1:
        w = 'Mon';
        break;

      case 2:
        w = 'Tue';
        break;

      case 3:
        w = 'Wed';
        break;

      case 4:
        w = 'Thu';
        break;

      case 5:
        w = 'Fri';
        break;

      case 6:
        w = 'Sat';
        break;

      default:
    }

    if (holidayWeek.includes(w)) {
      checkHolidayWeek = true;
    }
  } // 臨時休業日


  if (tempHoliday) {
    tempHoliday.map(elm => {
      if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(elm).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(elm).date()) {
        checkHoliday = true;
        checkTempHoliday = true;
      }
    });
  } // 臨時営業日


  if (tempDay) {
    tempDay.map(elm => {
      if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(elm).month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()(elm).date()) {
        checkTempDay = true;
      }
    });
  } // 今月の日付はtrue


  const getCurrentMonth = () => {
    if (day.month() != changeMonth.month()) {
      return true;
    }
  }; // 今日の日付はtrue


  const getCurrentDay = () => {
    if (day.month() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()().month() && day.date() == dayjs__WEBPACK_IMPORTED_MODULE_1___default()().date()) {
      return true;
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: `${getCurrentDay() ? 'today ' : ''}${getCurrentMonth() ? 'disabled' : ''}${checkHoliday ? ' holiday' : ''}${checkHolidayWeek ? ' holiday-week' : ''}${checkTempDay ? ' temp-day' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, day.format("DD")), checkTempHoliday && !checkTempDay ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "title"
  }, "\u81E8\u6642\u4F11\u696D\u65E5") : "", " ", holidayTitle != "" && !checkTempDay ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "title"
  }, holidayTitle) : ""));
};

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");



const Header = () => {
  const [changeMonth, setChangeMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.MonthContext);

  const handlePrevMonth = () => {
    setChangeMonth(changeMonth.add(-1, 'month'));
  };

  const handleNextMonth = () => {
    setChangeMonth(changeMonth.add(1, 'month'));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cal-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "cal-nav prev",
    onClick: handlePrevMonth
  }, "\u524D\u306E\u6708\u3078"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cal-header-text"
  }, changeMonth.year(), "\u5E74", changeMonth.format('M'), "\u6708"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "cal-nav next",
    onClick: handleNextMonth
  }, "\u6B21\u306E\u6708\u3078")));
};

/***/ }),

/***/ "./src/components/HeaderFront.js":
/*!***************************************!*\
  !*** ./src/components/HeaderFront.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderFront": function() { return /* binding */ HeaderFront; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Calendar */ "./src/Calendar.js");



const HeaderFront = () => {
  const [changeMonth, setChangeMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Calendar__WEBPACK_IMPORTED_MODULE_2__.MonthContext);

  const handlePrevMonth = () => {
    setChangeMonth(changeMonth.add(-1, 'month'));
  };

  const handleNextMonth = () => {
    setChangeMonth(changeMonth.add(1, 'month'));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cal-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "cal-nav prev",
    onClick: handlePrevMonth
  }, "\u524D\u306E\u6708\u3078"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cal-header-text"
  }, changeMonth.year(), "\u5E74", changeMonth.format('M'), "\u6708"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "cal-nav next",
    onClick: handleNextMonth
  }, "\u6B21\u306E\u6708\u3078")));
};

/***/ }),

/***/ "./src/components/Month.js":
/*!*********************************!*\
  !*** ./src/components/Month.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Month": function() { return /* binding */ Month; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Day */ "./src/components/Day.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");




const Month = props => {
  const month = props.month;
  const holiday = props.holiday;
  const holidayWeek = props.holidayWeek;
  const holidayBoolean = props.holidayBoolean;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "calendar-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u6708"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u706B"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u6C34"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u6728"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u91D1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u571F"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, month.map((row, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, row.map((day, idx) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Day__WEBPACK_IMPORTED_MODULE_2__.Day, {
    day: day,
    key: idx,
    holiday: holiday,
    holidayWeek: holidayWeek,
    holidayBoolean: holidayBoolean
  })))))));
};

/***/ }),

/***/ "./src/components/MonthFront.js":
/*!**************************************!*\
  !*** ./src/components/MonthFront.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthFront": function() { return /* binding */ MonthFront; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DayFront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DayFront */ "./src/components/DayFront.js");
/* harmony import */ var _HeaderFront__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderFront */ "./src/components/HeaderFront.js");




const MonthFront = props => {
  const month = props.month;
  const holiday = props.holiday;
  const holidayWeek = props.holidayWeek;
  const holidayBoolean = props.holidayBoolean;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "calendar-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HeaderFront__WEBPACK_IMPORTED_MODULE_3__.HeaderFront, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u6708"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u706B"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u6C34"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u6728"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u91D1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "\u571F"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, month.map((row, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, row.map((day, idx) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DayFront__WEBPACK_IMPORTED_MODULE_2__.DayFront, {
    day: day,
    key: idx,
    holiday: holiday,
    holidayWeek: holidayWeek,
    holidayBoolean: holidayBoolean
  })))))));
};

/***/ }),

/***/ "./src/components/Settings.js":
/*!************************************!*\
  !*** ./src/components/Settings.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": function() { return /* binding */ Settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");



const Settings = props => {
  const [holidayWeek, setHolidayWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.HolidayWeekContext);
  const [holidayNumWeek, setHolidayNumWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.HolidayNumWeekContext);
  const [tempHoliday, setTempHoliday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.TempHolidayContext);
  const [tempDay, setTempDay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.TempDayContext); // 毎週の定休日

  const handleEveryWeekChange = e => {
    if (holidayWeek.includes(e.target.value)) {
      setHolidayWeek(holidayWeek.filter(holiday => holiday !== e.target.value));
    } else {
      setHolidayWeek([...holidayWeek, e.target.value]);
    }
  }; // 第○曜日の定休日


  const addNumWeek = () => {
    setHolidayNumWeek([...holidayNumWeek, {
      'n1': 'Sun'
    }]);
  };

  const deleteNumWeek = i => {
    setHolidayNumWeek(holidayNumWeek.filter((v, index) => index !== i));
  };

  const handleNumWeekChange = (i, value) => {
    let c = holidayNumWeek.map((v, index) => {
      if (index == i) {
        let h = {};
        h[value] = Object.values(v)[0];
        v = h;
      }

      return v;
    });
    setHolidayNumWeek(c);
  };

  const handleWeekChange = (i, value) => {
    let c = holidayNumWeek.map((v, index) => {
      if (index == i) {
        let h = {};
        h[Object.keys(v)[0]] = value;
        v = h;
      }

      return v;
    });
    setHolidayNumWeek(c);
  }; // 臨時休業日


  const addTempHoliday = () => {
    setTempHoliday([...tempHoliday, ""]);
  };

  const changeTempHoliday = (value, i) => {
    setTempHoliday(tempHoliday.map((elm, index) => {
      if (index == i) {
        return elm = value;
      } else {
        return elm;
      }
    }));
  };

  const deleteTempHoliday = i => {
    setTempHoliday(tempHoliday.filter((elm, index) => index !== i));
  }; // 臨時営業日


  const addTempDay = () => {
    setTempDay([...tempDay, ""]);
  };

  const changeTempDay = (value, i) => {
    setTempDay(tempDay.map((elm, index) => {
      if (index == i) {
        return elm = value;
      } else {
        return elm;
      }
    }));
  };

  const deleteTempDay = i => {
    setTempDay(tempDay.filter((elm, index) => index !== i));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "settings-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "\u5B9A\u4F11\u65E5\u306E\u8A2D\u5B9A"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    action: location.href,
    method: "POST",
    enctype: "multipart/form-data"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text"
  }, "\u795D\u65E5\u3092\u66F4\u65B0\u3059\u308B\u5834\u5408\u306Fcsv\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
    target: "_blank"
  }, "\u56FD\u6C11\u306E\u795D\u65E5"), "\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "label-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "holiday-boolean",
    value: "false",
    checked: "true"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "holiday"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    id: "holiday",
    name: "holiday-boolean",
    value: "true",
    onChange: props.onChange,
    checked: props.holidayBoolean
  }), "\u795D\u65E5\u3092\u8868\u793A\u3059\u308B")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "file",
    name: "holiday"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text"
  }, "\u5B9A\u4F11\u65E5\u3068\u3059\u308B\u66DC\u65E5\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "check-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cont",
    id: "week-check"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "week[]"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "week0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "week[]",
    id: "week0",
    value: "Sun",
    onChange: handleEveryWeekChange,
    checked: holidayWeek.includes('Sun')
  }), "\u65E5\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "week1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "week[]",
    id: "week1",
    value: "Mon",
    onChange: handleEveryWeekChange,
    checked: holidayWeek.includes('Mon')
  }), "\u6708\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "week2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "week[]",
    id: "week2",
    value: "Tue",
    onChange: handleEveryWeekChange,
    checked: holidayWeek.includes('Tue')
  }), "\u706B\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "week3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "week[]",
    id: "week3",
    value: "Wed",
    onChange: handleEveryWeekChange,
    checked: holidayWeek.includes('Wed')
  }), "\u6C34\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "week4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "week[]",
    id: "week4",
    value: "Thu",
    onChange: handleEveryWeekChange,
    checked: holidayWeek.includes('Thu')
  }), "\u6728\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "week5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "week[]",
    id: "week5",
    value: "Fri",
    onChange: handleEveryWeekChange,
    checked: holidayWeek.includes('Fri')
  }), "\u91D1\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "week6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "week[]",
    id: "week6",
    value: "Sat",
    onChange: handleEveryWeekChange,
    checked: holidayWeek.includes('Sat')
  }), "\u571F\u66DC\u65E5"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "select-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cont"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "num[]",
    value: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "num-week[]",
    value: ""
  }), holidayNumWeek.map((d, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-select-week",
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "num-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "num[]",
    onChange: e => {
      handleNumWeekChange(index, e.target.value);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "n1",
    selected: Object.keys(d) == 'n1' ? true : false
  }, "\u7B2C1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "n2",
    selected: Object.keys(d) == 'n2' ? true : false
  }, "\u7B2C2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "n3",
    selected: Object.keys(d) == 'n3' ? true : false
  }, "\u7B2C3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "n4",
    selected: Object.keys(d) == 'n4' ? true : false
  }, "\u7B2C4"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "n5",
    selected: Object.keys(d) == 'n5' ? true : false
  }, "\u7B2C5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "n-end",
    selected: Object.keys(d) == 'n-end' ? true : false
  }, "\u6700\u7D42\u9031"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "week-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "num-week[]",
    onChange: e => {
      handleWeekChange(index, e.target.value);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sun",
    selected: Object.values(d) == 'Sun' ? true : false
  }, "\u65E5\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mon",
    selected: Object.values(d) == 'Mon' ? true : false
  }, "\u6708\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tue",
    selected: Object.values(d) == 'Tue' ? true : false
  }, "\u706B\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Wed",
    selected: Object.values(d) == 'Wed' ? true : false
  }, "\u6C34\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Thu",
    selected: Object.values(d) == 'Thu' ? true : false
  }, "\u6728\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Fri",
    selected: Object.values(d) == 'Fri' ? true : false
  }, "\u91D1\u66DC\u65E5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sat",
    selected: Object.values(d) == 'Sat' ? true : false
  }, "\u571F\u66DC\u65E5"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "delete-btn",
    onClick: () => {
      deleteNumWeek(index);
    }
  }, "\u524A\u9664\u3059\u308B"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "add-btn",
    onClick: addNumWeek
  }, "\u66DC\u65E5\u3092\u8FFD\u52A0\u3059\u308B"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-box con-r"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text"
  }, "\u81E8\u6642\u4F11\u696D\u65E5\u306E\u8A2D\u5B9A"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cont"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "temp-holiday[]"
  }), tempHoliday.map((elm, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item",
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "date",
    name: "temp-holiday[]",
    onChange: e => {
      changeTempHoliday(e.target.value, index);
    },
    value: elm
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "delete-btn",
    onClick: () => {
      deleteTempHoliday(index);
    }
  }, "\u524A\u9664\u3059\u308B")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "add-btn",
    onClick: addTempHoliday
  }, "\u65E5\u6642\u3092\u8FFD\u52A0\u3059\u308B")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text"
  }, "\u81E8\u6642\u55B6\u696D\u65E5\u306E\u8A2D\u5B9A"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cont"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "temp-day[]"
  }), tempDay.map((elm, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item",
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "date",
    name: "temp-day[]",
    onChange: e => {
      changeTempDay(e.target.value, index);
    },
    value: elm
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "delete-btn",
    onClick: () => {
      deleteTempDay(index);
    }
  }, "\u524A\u9664\u3059\u308B")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "add-btn",
    onClick: addTempDay
  }, "\u65E5\u6642\u3092\u8FFD\u52A0\u3059\u308B")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "save-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "submit",
    value: "\u8A2D\u5B9A\u3092\u4FDD\u5B58\u3059\u308B"
  }))));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HolidayNumWeekContext": function() { return /* binding */ HolidayNumWeekContext; },
/* harmony export */   "HolidayWeekContext": function() { return /* binding */ HolidayWeekContext; },
/* harmony export */   "MonthContext": function() { return /* binding */ MonthContext; },
/* harmony export */   "TempDayContext": function() { return /* binding */ TempDayContext; },
/* harmony export */   "TempHolidayContext": function() { return /* binding */ TempHolidayContext; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Settings */ "./src/components/Settings.js");
/* harmony import */ var _components_Month__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Month */ "./src/components/Month.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Calendar */ "./src/Calendar.js");








const MonthContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const HolidayWeekContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const HolidayNumWeekContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const TempHolidayContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const TempDayContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

const AdminSettings = () => {
  const [currentMonth, setCurrentMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_util__WEBPACK_IMPORTED_MODULE_2__.getMonth)());
  const [changeMonth, setChangeMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_5___default()());
  const [holiday, setHoliday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [holidayWeek, setHolidayWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [holidayNumWeek, setHolidayNumWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [holidayBoolean, setHolidayBoolean] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [tempDay, setTempDay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [tempHoliday, setTempHoliday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setCurrentMonth((0,_util__WEBPACK_IMPORTED_MODULE_2__.getMonth)(changeMonth));
    fetch(`/wp-json/calendar/v0/holiday/?date=${changeMonth.year()}-${changeMonth.month() + 1}`).then(res => {
      res.json().then(data => {
        setHoliday(data);
      }).catch(error => {
        console.log(error);
      });
    }).catch(error => {
      console.log(error);
    });
  }, [changeMonth]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetch('/wp-json/calendar/v0/holiday-boolean/').then(res => {
      return res.json().then(data => {
        setHolidayBoolean(JSON.parse(data.toLowerCase()));
      });
    }).catch(error => {
      console.log(error);
    });
    fetch('/wp-json/calendar/v0/holiday-week/').then(res => {
      return res.json().then(data => {
        setHolidayWeek([...holidayWeek, ...data]);
      });
    }).catch(error => {
      console.log(error);
    });
    fetch('/wp-json/calendar/v0/holiday-num-week/').then(res => {
      return res.json().then(data => {
        setHolidayNumWeek([...holidayNumWeek, ...data]);
      });
    }).catch(error => {
      console.log(error);
    });
    fetch('/wp-json/calendar/v0/temp-holiday/').then(res => {
      return res.json().then(data => {
        setTempHoliday([...tempHoliday, ...data]);
      });
    }).catch(error => {
      console.log(error);
    });
    fetch('/wp-json/calendar/v0/temp-day/').then(res => {
      return res.json().then(data => {
        setTempDay([...tempDay, ...data]);
      });
    }).catch(error => {
      console.log(error);
    });
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HolidayNumWeekContext.Provider, {
    value: [holidayNumWeek, setHolidayNumWeek]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TempDayContext.Provider, {
    value: [tempDay, setTempDay]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TempHolidayContext.Provider, {
    value: [tempHoliday, setTempHoliday]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HolidayWeekContext.Provider, {
    value: [holidayWeek, setHolidayWeek]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Settings__WEBPACK_IMPORTED_MODULE_3__.Settings, {
    onChange: e => setHolidayBoolean(e.target.checked),
    holidayBoolean: holidayBoolean
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MonthContext.Provider, {
    value: [changeMonth, setChangeMonth]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Month__WEBPACK_IMPORTED_MODULE_4__.Month, {
    month: currentMonth,
    holiday: holiday,
    holidayWeek: holidayWeek,
    holidayBoolean: holidayBoolean
  }))))));
};

window.addEventListener('load', function () {
  if (document.getElementById("calendar-settings")) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AdminSettings, null), document.getElementById("calendar-settings"));
  }

  if (document.getElementById("custom-calendar")) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Calendar__WEBPACK_IMPORTED_MODULE_6__.Calendar, null), document.getElementById("custom-calendar"));
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  MonthContext,
  HolidayWeekContext,
  HolidayNumWeekContext,
  TempHolidayContext,
  TempDayContext
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMonth": function() { return /* binding */ getMonth; }
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/locale/ja */ "./node_modules/dayjs/locale/ja.js");
/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1__);


dayjs__WEBPACK_IMPORTED_MODULE_0___default().locale((dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1___default()));
function getMonth() {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
  const year = data.year();
  const month = data.month();
  const firstDayOfTheMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(new Date(year, month, 1)).day();
  let row = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().endOf('month').date() + firstDayOfTheMonth;
  Math.floor(row / 7) >= 5 ? row = 6 : row = 5;
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(row).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var v=this.$locale().weekStart||0,D=(y<v?y+7:y)-v;return $(r?m-D:m+(6-D),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,v=O.m(this,M);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[v],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/locale/ja.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/locale/ja.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,_){ true?module.exports=_(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js")):0}(this,(function(e){"use strict";function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return t.default.locale(d,null,!0),d}));

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map