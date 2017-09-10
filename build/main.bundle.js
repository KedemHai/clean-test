/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _usersController = __webpack_require__(8);

	var _usersService = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = _angular2.default.module('myCheckApp', []);

	(0, _usersController.UsersController)(app);
	(0, _usersService.usersService)(app);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = angular;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var UsersController = function UsersController(app) {

		app.controller('UsersController', ['usersService', function (usersService) {
			var vm = this;

			usersService.getAllUsers().then(function (users) {
				vm.users = users;
			}).catch(function (error) {
				vm.error = error;
			});
		}]);
	};

	exports.UsersController = UsersController;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.usersService = undefined;

	var _user = __webpack_require__(10);

	var usersService = function usersService(app) {

		app.factory('usersService', function ($http) {
			var publicAPI = {};
			var usersUrl = 'https://jsonplaceholder.typicode.com/users';
			var errorMessage = 'Something went wrong with getting the data...';

			publicAPI.getAllUsers = function () {
				return $http.get(usersUrl).then(function (response) {
					return response.data.map(function (user) {
						return new _user.User(user);
					});
				}).catch(function (error) {
					throw { errorMessage: errorMessage, error: error };
				});
			};

			return publicAPI;
		});
	};

	exports.usersService = usersService;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var User = function () {
		function User(user) {
			_classCallCheck(this, User);

			this.name = user.name;
			this.username = user.username;
			this.website = user.website;
		}

		_createClass(User, [{
			key: 'title',
			get: function get() {
				var titleMatch = this.name.match(titleRegex);

				if (titleMatch) {
					return titleMatch[1];
				}

				return undefined;
			}
		}, {
			key: 'firstName',
			get: function get() {
				var splittedName = this.name.split(' ');

				if (hasTitle(this)) {
					// removes the title and returns the substring that after the title (first name)
					return splittedName.slice(1)[0];
				}

				return splittedName[0];
			}
		}, {
			key: 'lastName',
			get: function get() {
				var splittedName = this.name.split(' ');

				if (hasTitle(this)) {
					return splittedName.slice(2).join(' ');
				}

				return splittedName.slice(1).join(' ');
			}
		}]);

		return User;
	}();

	var titleRegex = /(Mr(s)?\.)/;

	var hasTitle = function hasTitle(user) {
		return titleRegex.test(user.name);
	};

	exports.User = User;

/***/ })
/******/ ]);