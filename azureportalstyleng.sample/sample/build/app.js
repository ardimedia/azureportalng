webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular = __webpack_require__(1);
	var app_module_1 = __webpack_require__(2);
	console.log('app.bootstrap');
	angular.bootstrap(document.body, ['app'], { strictDi: true });
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = { app: app_module_1.default };


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular = __webpack_require__(1);
	var shell_controller_1 = __webpack_require__(3);
	console.log('app.module');
	var app = angular.module('app', []) // 'ng-dialog', 'azureportalng'
	    .controller('ShellController', shell_controller_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = app;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var azureportalng = __webpack_require__(4);
	var ShellController = (function () {
	    function ShellController() {
	        console.log('ShellController');
	        this.vm.portalService = new azureportalng.PortalService(null);
	        this.vm.portalService.panorama.isVisible = true;
	        this.vm.title = 'Jabba';
	    }
	    return ShellController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ShellController;


/***/ }
]);