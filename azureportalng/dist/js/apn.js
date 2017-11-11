/// <reference path="../node_modules/@types/angular/index.d.ts" />
var azurePortalNg; // any should be: angular.IModule
(function () {
    'use strict';
    /** Define Angular module and its dependencies */
    azurePortalNg = angular.module('azureportalng', [
        // Angular modules
        'ngResource',
        'ngDialog'
    ]);
    azurePortalNg.config([function () {
            //Debug.enable('[azureportalng-debug]');
            //Debug.isWithObjects = false;
        }]);
    azurePortalNg.run(function () {
        //Debug.write('[azureportalng-debug] \'azurePortalNg.run\' executing.', [this]);
    });
})();
//#region Make sure console.log is working in any case, even IE9
//if ($('html').hasClass('k-ie9')) {
//    if (typeof console !== 'object') window.console = <any>{};
//    if (typeof console.log !== 'object') window.console.log = function () { };
//}
//#endregion
var AzurePortalNg;
(function (AzurePortalNg) {
    var Debug = /** @class */ (function () {
        //#endregion
        //#region Constructors
        function Debug() {
        }
        //#endregion
        //#region Methods
        Debug.enable = function (key) {
            Debug.isEnabled = true;
            if (key) {
                Debug.keys.push(key);
            }
        };
        Debug.disable = function (key) {
            if (key) {
                var indexToDelete = Debug.keys.indexOf(key);
                Debug.keys.splice(indexToDelete, 1);
            }
            if (Debug.keys.length === 0) {
                Debug.isEnabled = false;
            }
        };
        Debug.write = function (debugLine, objects) {
            if ((Debug.isEnabled && Debug.keys.length === 0)
                || (Debug.isEnabled && Debug.isInKeys(debugLine))) {
                console.log(debugLine);
                if (objects !== undefined && Debug.isWithObjects) {
                    objects.forEach(function (item) {
                        console.log(item);
                    });
                }
                return true;
            }
            return false;
        };
        /** Extract the key (e.g. [azureportal] from a string */
        Debug.extractKey = function (text) {
            var extractKey = '';
            var firstCharacter = text.substring(0, 1);
            if (firstCharacter === '[') {
                // Find closing bracket
                var closingPos = text.indexOf(']');
                if (closingPos > 0) {
                    extractKey = text.substring(0, closingPos + 1);
                }
            }
            return extractKey;
        };
        /** Extract the key (e.g. [azureportal] from a string */
        Debug.isInKeys = function (debugLine) {
            var key = Debug.extractKey(debugLine);
            if (Debug.keys.indexOf(key) != -1) {
                return true;
            }
            return false;
        };
        //#region Properties
        Debug.isEnabled = false;
        Debug.isWithObjects = false;
        Debug.keys = new Array();
        return Debug;
    }());
    AzurePortalNg.Debug = Debug;
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    //#region IException
    //#endregion
    var Exception = /** @class */ (function () {
        function Exception() {
        }
        Exception.convertFromWebApiException = function (ex) {
            //#region Process data to Messages
            ex.Messages = [];
            var i = 1;
            while (ex.Data[i + ''] !== undefined) {
                ex.Messages.push(ex.Data[i + '']);
                i++;
            }
            //#endregion
            //#region Process DbEntityValidationException
            if (ex.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
                ex.Type = 'DbEntityValidationException';
            }
            //#endregion
            //#region Process DbUpdateConcurrencyException
            if (ex.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
                ex.Type = 'DbUpdateConcurrencyException';
            }
            //#endregion
            //#region Process ValidationsException
            // ClassName should by ExceptionType
            if (ex.ClassName.indexOf('ValidationsException') > 0) {
                ex.Type = 'ValidationsException';
            }
            //#endregion
            Exception.onConvertFromWebApiException(ex);
        };
        Exception.onConvertFromWebApiException = function (ex) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Exception.convertFromWebApiException\' not overriden. You could override this.', [this]);
        };
        return Exception;
    }());
    AzurePortalNg.Exception = Exception;
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: UserAccount
    var UserAccount = /** @class */ (function () {
        //#endregion
        //#region Constructors
        function UserAccount(username, firstName, lastName) {
            if (firstName === void 0) { firstName = ''; }
            if (lastName === void 0) { lastName = ''; }
            AzurePortalNg.Debug.write('[azureportalng-debug] \'UserAccount\' constructor called.', [this, username, firstName, lastName]);
            this.userName = username;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Object.defineProperty(UserAccount.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (value) {
                this._firstName = value;
                this._name = (this._firstName || '') + ' ' + (this._lastName || '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserAccount.prototype, "lastName", {
            get: function () {
                return this._lastName;
            },
            set: function (value) {
                this._lastName = value;
                this._name = (this._firstName || '') + ' ' + (this._lastName || '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserAccount.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                throw new Error('[azureportalng.UserAccount] \'name\' is a calculated value from \'firsName\' and \'lastName\'. Assignment not allowed.');
                //this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        return UserAccount;
    }());
    AzurePortalNg.UserAccount = UserAccount;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#endregion
    //#region Class Definition: PortalService
    var PortalService = /** @class */ (function () {
        //#endregion
        //#endregion
        //#region Constructors
        function PortalService($injector) {
            //#region Properties
            this.parameter = { action: 'none', itemId: 0 };
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalService\' constructor called.', [this, $injector]);
            this.$injector = $injector;
            //this.$scope = $scope;
            this.$http = $injector.get('$http');
            this.$httpBackend = $injector.get('$httpBackend');
            this.$q = $injector.get('$q');
            this.$rootScope = $injector.get('$rootScope');
            this.$window = $injector.get('$window');
            this.ngDialog = $injector.get('ngDialog');
            this.ngDialog.openConfirm;
        }
        return PortalService;
    }());
    AzurePortalNg.PortalService = PortalService;
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('azureportalng').service('azurePortalNg.portalService', ['$injector', PortalService]);
    })();
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: AvatarMenu
    var UserControlBase = /** @class */ (function () {
        //#endregion
        //#region Constructors
        function UserControlBase(portalService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'UserControlBase\' constructor called.', [this, portalService]);
            this.portalService = portalService;
        }
        return UserControlBase;
    }());
    AzurePortalNg.UserControlBase = UserControlBase;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: AvatarMenu
    var AvatarMenu = /** @class */ (function (_super) {
        __extends(AvatarMenu, _super);
        //#endregion
        //#region Constructors
        function AvatarMenu(portalService) {
            var _this = _super.call(this, portalService) || this;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'AvatarMenu\' constructor called.', [_this]);
            return _this;
        }
        return AvatarMenu;
    }(AzurePortalNg.UserControlBase));
    AzurePortalNg.AvatarMenu = AvatarMenu;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: Startboard
    var Startboard = /** @class */ (function (_super) {
        __extends(Startboard, _super);
        //#endregion
        //#region Constructors
        function Startboard(portalService) {
            var _this = _super.call(this, portalService) || this;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Startboard\' constructor called.', [_this]);
            _this.tiles = new AzurePortalNg.Tiles();
            return _this;
        }
        return Startboard;
    }(AzurePortalNg.UserControlBase));
    AzurePortalNg.Startboard = Startboard;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: Panorama
    var Panorama = /** @class */ (function (_super) {
        __extends(Panorama, _super);
        //#endregion
        //#region Constructors
        function Panorama(title, portalService) {
            var _this = _super.call(this, portalService) || this;
            _this.isVisible = true;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Panorama\' constructor called.', [_this, title]);
            _this.title = title;
            _this.portalService.panorama = _this;
            _this.avatarMenu = new AzurePortalNg.AvatarMenu(_this.portalService);
            _this.startboard = new AzurePortalNg.Startboard(_this.portalService);
            return _this;
        }
        return Panorama;
    }(AzurePortalNg.UserControlBase));
    AzurePortalNg.Panorama = Panorama;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    //#region Class Definition: Blade
    var Blade = /** @class */ (function (_super) {
        __extends(Blade, _super);
        //#region Constructor
        function Blade(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, portalService) || this;
            _this.title = '';
            _this.subTitle = '';
            _this.width = { 'width': '0' };
            _this.widthStackLayout = { 'width': '50px' };
            _this.isInnerHtml = true;
            _this.statusbar = '';
            _this.statusbarClass = '';
            //#endregion
            //#region Commands
            _this.isCommandBrowse = false;
            _this.commandBrowse = function () { this.onCommandBrowse(); };
            _this.commandBrowseText = '';
            _this.isCommandCancel = false;
            _this.commandCancel = function () { this.onCommandCancel(); };
            _this.commandCancelText = '';
            _this.isCommandCopy = false;
            _this.commandCopy = function () { this.onCommandCopy(); };
            _this.commandCopyText = '';
            _this.isCommandDelete = false;
            _this.commandDelete = function () { this.onCommandDelete(); };
            _this.commandDeleteText = '';
            _this.isCommandDocument = false;
            _this.commandDocument = function () { this.onCommandDocument(); };
            _this.commandDocumentText = '';
            _this.isCommandDocument2 = false;
            _this.commandDocument2 = function () { this.onCommandDocument2(); };
            _this.commandDocument2Text = '';
            _this.isCommandDocument3 = false;
            _this.commandDocument3 = function () { this.onCommandDocument3(); };
            _this.commandDocument3Text = '';
            _this.isCommandDocument4 = false;
            _this.commandDocument4 = function () { this.onCommandDocument4(); };
            _this.commandDocument4Text = '';
            _this.isCommandDocument5 = false;
            _this.commandDocument5 = function () { this.onCommandDocument5(); };
            _this.commandDocument5Text = '';
            _this.isCommandNew = false;
            _this.commandNew = function () { this.onCommandNew(); };
            _this.commandNewText = '';
            _this.isCommandOrder = false;
            _this.commandOrder = function () { this.onCommandOrder(); };
            _this.commandOrderText = '';
            _this.isCommandRestart = false;
            _this.commandRestart = function () { this.onCommandRestart(); };
            _this.commandRestartText = '';
            _this.isCommandSave = false;
            _this.commandSave = function () { this.onCommandSave(); };
            _this.commandSaveText = '';
            _this.isCommandSearch = false;
            _this.commandSearch = function () { this.onCommandSearch(); };
            _this.commandSearchText = '';
            _this.isCommandStart = false;
            _this.commandStart = function () { this.onCommandStart(); };
            _this.commandStartText = '';
            _this.isCommandStop = false;
            _this.commandStop = function () { this.onCommandStop(); };
            _this.commandStopText = '';
            _this.isCommandSwap = false;
            _this.commandSwap = function () { this.onCommandSwap(); };
            _this.commandSwapText = '';
            /** Obsolete */
            _this.navGrid = {
                portalService: null,
                items: [],
                navigateTo: function (path) { }
            };
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade\' constructor called.', [_this, portalService, path, title, subtitle, width]);
            var that = _this;
            _this.blade = _this;
            _this.path = path;
            _this.title = title;
            _this.subTitle = subtitle;
            _this.width.width = width + 'px';
            _this.widthStackLayout.width = width - 50 + 'px';
            _this.navGrid.portalService = portalService;
            if (!portalService) {
                throw new Error('[azureportalng.Blade] constructor parameter \'portalService\' must be provided.');
            }
            if (!path) {
                throw new Error('[azureportalng.Blade] constructor parameter \'path\' must be a string.');
            }
            if (!title && title !== '') {
                throw new Error('[azureportalng.Blade] constructor parameter \'title\' must be a string when provided.');
            }
            if (!subtitle && subtitle !== '') {
                throw new Error('[azureportalng.Blade] constructor parameter \'subtitle\' must be a string when provided.');
            }
            if (!width && width !== 0) {
                throw new Error('[azureportalng.Blade] constructor parameter \'width\' must be a number when provided.');
            }
            if (width < 50) {
                throw new Error('[azureportalng.Blade] constructor parameter \'width\' must be at least 50.');
            }
            //#region Add BladeArea.AddBlade event listener
            /** OBSOLETE: remove when all OBSOLETE code has been removed */
            if (portalService instanceof AzurePortalNg.PortalService == false) {
                return _this;
            }
            /** OBSOLETE: end */
            // Register listener1
            _this.listener1 = that.portalService.$rootScope.$on('BladeArea.AddBlade', function (event, args) {
                AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade\' BladeArea.AddBlade event processing.', [this, event, args]);
                if (args.path === that.blade.path) {
                    that.activate();
                }
            });
            return _this;
            //#endregion
        }
        //#endregion
        //#endregion
        //#region Methods
        //#region Methods
        Blade.prototype.activate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.activate\' called. You could override this, but proably you should call super.activate().', [this]);
            this.onActivate();
        };
        Blade.prototype.onActivate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.onActivate\' not overriden. You could override this.', [this]);
        };
        Blade.prototype.navigateTo = function (arg) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.navigateTo\' called. You should not override this, use onNavigateTo instead.', [this, arg]);
            this.onNavigateTo(arg);
        };
        Blade.prototype.onNavigateTo = function (arg) {
            throw new Error('[azureportalng.Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
        };
        /** close blade. */
        Blade.prototype.close = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.close\' called.', [this]);
            this.listener1(); // Unregister listener1
            if (this.portalService.bladeArea !== undefined) {
                this.portalService.bladeArea.clearPath(this.path);
            }
            else {
                throw new Error('[azureportalng.Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.bladeArea\' available.');
            }
        };
        //#endregion
        //#region Commands
        Blade.prototype.onCommandBrowse = function () {
            throw new Error('[azureportalng.Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandCancel = function () {
            throw new Error('[azureportalng.Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandCopy = function () {
            throw new Error('[azureportalng.Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDelete = function () {
            throw new Error('[azureportalng.Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument = function () {
            throw new Error('[azureportalng.Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument2 = function () {
            throw new Error('[azureportalng.Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument3 = function () {
            throw new Error('[azureportalng.Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument4 = function () {
            throw new Error('[azureportalng.Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument5 = function () {
            throw new Error('[azureportalng.Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandNew = function () {
            throw new Error('[azureportalng.Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandOrder = function () {
            throw new Error('[azureportalng.Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandRestart = function () {
            throw new Error('[azureportalng.Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSave = function () {
            throw new Error('[azureportalng.Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSearch = function () {
            throw new Error('[azureportalng.Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandStart = function () {
            throw new Error('[azureportalng.Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandStop = function () {
            throw new Error('[azureportalng.Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSwap = function () {
            throw new Error('[azureportalng.Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
        };
        //#endregion
        //#region OBSOLETE
        /** Obsolete */
        Blade.prototype.setObsoleteLayoutProperites = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.setObsoleteLayoutProperites\' called.', [this]);
            this.blade.title = this.title;
            this.blade.statusbar = this.statusbar;
            this.blade.statusbarClass = this.statusbarClass;
            this.blade.isCommandBrowse = this.isCommandBrowse;
            this.blade.isCommandCancel = this.isCommandCancel;
            this.blade.isCommandCopy = this.isCommandCopy;
            this.blade.isCommandDelete = this.isCommandDelete;
            this.blade.isCommandDocument = this.isCommandDocument;
            this.blade.isCommandDocument2 = this.isCommandDocument2;
            this.blade.isCommandDocument3 = this.isCommandDocument3;
            this.blade.isCommandDocument4 = this.isCommandDocument4;
            this.blade.isCommandDocument5 = this.isCommandDocument5;
            this.blade.isCommandNew = this.isCommandNew;
            this.blade.isCommandOrder = this.isCommandOrder;
            this.blade.isCommandRestart = this.isCommandRestart;
            this.blade.isCommandSave = this.isCommandSave;
            this.blade.isCommandSearch = this.isCommandSearch;
            this.blade.isCommandStart = this.isCommandStart;
            this.blade.isCommandStop = this.isCommandStop;
            this.blade.isCommandSwap = this.isCommandSwap;
        };
        /** Obsolete */
        Blade.prototype.bladeClose = function () {
            this.close();
        };
        return Blade;
    }(AzurePortalNg.UserControlBase));
    AzurePortalNg.Blade = Blade;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    //#region Class Definition: BladeArea
    var BladeArea = /** @class */ (function (_super) {
        __extends(BladeArea, _super);
        //#endregion
        //#region Constructors
        function BladeArea(portalService) {
            var _this = _super.call(this, portalService) || this;
            _this.blades = new Array();
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea\' constructor called.', [_this, portalService]);
            var that = _this;
            // Set dependencies
            _this.portalService = portalService;
            _this.portalService.bladeArea = _this;
            //#region Add BladeArea.AddBlade event listener
            /** OBSOLETE: remove when all OBSOLETE code has been removed */
            if (portalService instanceof AzurePortalNg.PortalService == false) {
                return _this;
            }
            /** OBSOLETE: end */
            // Register listener1
            _this.listener1 = that.portalService.$rootScope.$on('BladeArea.AddBlade', function (event, args) {
                AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea\' BladeArea.AddBlade event processing.', [this, event, args]);
                that.addBlade(args.path, args.pathSender);
            });
            return _this;
            //#endregion
        }
        //#endregion
        //#region Methods
        BladeArea.prototype.raiseAddBladeEvent = function (args) {
            this.portalService.$rootScope.$broadcast('BladeArea.AddBlade', args);
        };
        BladeArea.prototype.setFirstBlade = function (path) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.setFirstBlade\' called.', [this, path]);
            this.clearAll();
            this.hidePanorama();
            return this.addBlade(path);
        };
        /** obsolete */
        BladeArea.prototype.addBlade = function (path, senderPath) {
            if (senderPath === void 0) { senderPath = ''; }
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.addBlade\' called.', [this, senderPath, path]);
            var that = this;
            //#region Verify
            if (path === undefined || path === '') {
                return;
            }
            if (that.portalService.$window !== undefined) {
                if (that.portalService.$window.document === undefined) {
                    throw new Error('[azureportalng.BladeArea] \'this.$window.document\' undefined.');
                }
                var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
                if (portalcontent === null) {
                    throw new Error('[azureportalng.BladeArea] HTML element with ID [azureportalscroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
                }
            }
            //#endregion
            //#region Clear all children of the parent path
            this.clearChild(senderPath);
            //#endregion
            //#region Make sure the blade is not yet show
            this.blades.forEach(function (blade) {
                if (blade.path === path) {
                    throw new Error('[azureportalng.BladeArea] path: \'' + path + '\' will not be added. It is already added.');
                }
                ;
            });
            //#endregion
            //#region Show the blade
            var blade = new AzurePortalNg.Blade(that.portalService, path, '');
            that.blades.push(blade);
            //#endregion
            //#region Position the blade
            if (that.portalService.$window !== undefined) {
                that.portalService.$window.setTimeout(function () {
                    var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');
                    var i = that.blades.length - 1;
                    // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                    //       So now if it is, the user has to scroll on its own.
                    if (azureportalblades[i] !== undefined && azureportalblades[i].offsetLeft !== undefined) {
                        var sl = azureportalblades[i].offsetLeft - 30;
                        portalcontent.scrollLeft = sl;
                    }
                }, 250);
            }
            //#endregion
            return blade;
        };
        BladeArea.prototype.clearAll = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearAll\' called.', [this]);
            this.blades.length = 0;
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearPath = function (path) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearPath\' called.', [this, path]);
            var that = this;
            var isremoved = that.blades.some(function (blade, index) {
                if (blade.path === path) {
                    AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearPath\' set bladeUrls.length to: ' + index);
                    that.blades.length = index;
                    return true;
                }
            });
            if (!isremoved) {
                AzurePortalNg.Debug.write('>>> bladeUrls:', [that.blades]);
                throw new Error('[azureportalng.BladeArea.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearLevel = function (level) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearLevel\' called.', [this, level]);
            if (this.blades.length < level) {
                //throw new Error('[azureportalng.BladeArea] level: \'' + level + '\' could not be cleard, since only \'' + this.blades.length + '\' available.');
            }
            if (level == 0) {
                level = 1;
            }
            this.blades.length = level - 1;
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearLastLevel = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearLastLevel\' called.', [this]);
            this.clearLevel(this.blades.length);
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearChild = function (path) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearChild\' called.', [this, path]);
            var that = this;
            if (path === '') {
                AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearChild\' path is empty, nothing to clear.');
                return;
            }
            var isremoved = that.blades.some(function (blade, index) {
                if (blade.path === path) {
                    AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearChild\' set bladeUrls.length to: ' + (index + 1));
                    that.blades.length = index + 1;
                    return true;
                }
            });
            if (!isremoved) {
                AzurePortalNg.Debug.write('>>> bladeUrls:', [that.blades]);
                throw new Error('[azureportalng.BladeArea.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
        };
        BladeArea.prototype.showPanoramaIfNoBlades = function () {
            if (this.blades.length === 0) {
                if (this.portalService.panorama !== undefined) {
                    {
                        this.portalService.panorama.isVisible = true;
                    }
                }
            }
        };
        BladeArea.prototype.hidePanorama = function () {
            if (this.portalService.panorama !== undefined) {
                this.portalService.panorama.isVisible = false;
            }
        };
        /** You need to call this when BladeArea is no longer used, otherwise the listener does not get removed. */
        BladeArea.prototype.close = function () {
            this.listener1(); // Unregister listener1
        };
        //#endregion
        //#region OBSOLETE
        BladeArea.prototype.addBladePath = function (path) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.addBladePath\' called.', [this, path]);
            // Fix issue with old code
            if (this.portalService.$window === undefined) {
                this.portalService.$window = this.portalService;
            }
            this.addBlade(path);
            //this.addBladeOld(path);
        };
        BladeArea.prototype.addBladeOld = function (path) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.addBladeOld\' called.', [this, path]);
            var that = this;
            if (path === undefined || path == '') {
                return;
            }
            var blade = new AzurePortalNg.Blade(that.portalService, path, '');
            that.blades.push(blade);
            var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
            that.portalService.$window.setTimeout(function () {
                var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');
                var i = that.blades.length - 1;
                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                if (azureportalblades[i] !== undefined && azureportalblades[i].offsetLeft !== undefined) {
                    var sl = azureportalblades[i].offsetLeft - 30;
                    portalcontent.scrollLeft = sl;
                }
            }, 250);
        };
        return BladeArea;
    }(AzurePortalNg.UserControlBase));
    AzurePortalNg.BladeArea = BladeArea;
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('azureportalng').service('azurePortalNg.bladeArea', ['$window', BladeArea]);
    })();
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    //#region Class Definition: BladeData
    var BladeData = /** @class */ (function (_super) {
        __extends(BladeData, _super);
        //#region Constructor
        function BladeData(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 300; }
            var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData\' constructor called.', [_this, portalService, path, title, subtitle, width]);
            return _this;
        }
        //#endregion
        //#region Methods
        BladeData.prototype.processException = function (data) {
            var that = this;
            that.statusbar = data.Message;
            that.statusbar += ' - ';
            data.Messages.forEach(function (item) {
                that.statusbar += item + ' - ';
            });
        };
        return BladeData;
    }(AzurePortalNg.Blade));
    AzurePortalNg.BladeData = BladeData;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    //#region Class Definition: BladeDetail
    var BladeDetail = /** @class */ (function (_super) {
        __extends(BladeDetail, _super);
        //#endregion
        //#region Constructor
        function BladeDetail(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
            //#region Properties
            _this.item = null;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeDetail\' constructor called.', [_this, portalService, path, title, subtitle, width]);
            _this.isCommandNew = true;
            _this.commandNewText = 'neu';
            _this.isCommandSave = true;
            _this.commandSaveText = 'speichern';
            _this.isCommandDelete = true;
            _this.commandDeleteText = 'löschen';
            _this.isCommandCancel = true;
            _this.commandCancelText = 'abbrechen';
            return _this;
        }
        //#endregion
        //#region Methods
        BladeDetail.prototype.activate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeDetail.activate\' called.', [this]);
            var that = this;
            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';
            var onActivate = that.onActivate();
            if (onActivate === null || onActivate === undefined) {
                that.statusbar = '';
                that.statusbarClass = '';
            }
            else {
                onActivate.success(function (data) {
                    that.item = data;
                    that.statusbar = '';
                    that.statusbarClass = '';
                    that.onActivated();
                }).error(function (data, status, headers, config) {
                    that.item = null;
                    that.statusbar = 'FEHLER: ' + data;
                    that.statusbarClass = 'message-info message-off';
                    that.onActivated();
                });
            }
        };
        BladeDetail.prototype.onActivate = function () {
            throw new Error('[azureportalng.BladeDetail] \'onActivate\' is an abstract function. Define one in the derived class.');
        };
        BladeDetail.prototype.onActivated = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'onActivated\' called. You could override this.');
        };
        BladeDetail.prototype.onCommandCancel = function () {
            this.close();
        };
        return BladeDetail;
    }(AzurePortalNg.BladeData));
    AzurePortalNg.BladeDetail = BladeDetail;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: BladeList
    var BladeList = /** @class */ (function (_super) {
        __extends(BladeList, _super);
        //#endregion
        //#region Constructor
        function BladeList(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
            //#region Properties
            _this.items = [];
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList\' constructor called.', [_this, portalService, path, title, subtitle, width]);
            _this.isCommandNew = true;
            _this.commandNewText = 'neu';
            return _this;
        }
        //#endregion
        //#region Methods
        BladeList.prototype.activate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.activate\' called.', [this]);
            var that = this;
            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';
            var onActivate = that.onActivate();
            if (onActivate === null || onActivate === undefined) {
            }
            else {
                that.loadItems(onActivate);
                //onActivate.success(function (data: any) {
                //    that.items = data;
                //    that.statusbar = '';
                //    that.statusbarClass = '';
                //}).error(function (data: any, status: any, headers: any, config: any) {
                //    that.statusbar = 'FEHLER: ' + data;
                //    that.statusbarClass = 'message-info message-off';
                //});
            }
        };
        BladeList.prototype.onActivate = function () {
            throw new Error('[azureportalng.BladeList] \'onActivate\' is an abstract function. Define one in the derived class.');
        };
        BladeList.prototype.loadItems = function (f) {
            var that = this;
            f.success(function (data) {
                that.items = data;
                that.statusbar = '';
                that.statusbarClass = '';
            }).error(function (data, status, headers, config) {
                that.statusbar = 'FEHLER: ' + data;
                that.statusbarClass = 'message-info message-off';
            });
        };
        //#region Filter
        BladeList.prototype.onFilter = function (actual, expected) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.filter\' called.', [this, actual, expected]);
            //#region Documentation
            // > onFilter will be called for each item in an array
            // > If the item is an native type (string, number), the filter will be called with the native type in the parameter 'actual'
            // > If the item is an object, the filter will be called with each property of the object in the parameter 'actual'
            // > If the item is an object, the filter will also be called with the object in the parameter 'actual'
            //#endregion
            //#region Helper functions
            // Implemenation detail:
            // > We must implement the functions in code, since onFilter is not called within the scope of this class (this. not working).
            // Function to convert 'number' to 'string'
            var convertToString = function (value) {
                return value + ''; // convert to string, so the next statements will process the value as a string
            };
            // Function which figures out, if the 'expected' value is found in the 'actual' value
            var valueFound = function (actual, expected) {
                expectedSplitted.forEach(function (expectedItem, index) {
                    if (actual.toLowerCase().indexOf(expectedItem) > -1) {
                        expectedSplitted[index] = ''; // expected has been found, initialize it now
                    }
                });
            };
            // Function to process an object
            var processObject = function (actual) {
                for (var actualProperty in actual) {
                    if (actual.hasOwnProperty(actualProperty)) {
                        var actualValue = actual[actualProperty];
                        if (typeof actual == 'number') {
                            actualValue = convertToString(actual);
                        }
                        if (typeof actualValue == 'string') {
                            if (actualValue.indexOf('object:') > -1) {
                                continue;
                            }
                            valueFound(actualValue, expected);
                        }
                    }
                    else {
                        // Process inherited properties
                        processObject(actual[actualProperty]);
                    }
                }
            };
            //#endregion
            //#region Initialize
            // Prepare 'expected' value
            expected = expected.toLowerCase();
            // Split the search string into its parts if separated by blanks
            var expectedSplitted = expected.split(' ');
            //#endregion
            //#region Process depending on type
            // Process property, typeof 'object'
            if (typeof actual == 'object') {
                processObject(actual);
            }
            // Process property, typeof 'number'
            if (typeof actual == 'number') {
                actual = convertToString(actual);
            }
            // Process property, typeof 'string'
            if (typeof actual == 'string') {
                valueFound(actual, expected);
            }
            //#endregion
            //#region Verify if all expected has been found
            var foundCount = 0;
            expectedSplitted.forEach(function (expectedItem) {
                if (expectedItem === '') {
                    foundCount++;
                }
            });
            //#endregion
            //#region Return result
            if (foundCount === expectedSplitted.length) {
                return true;
            }
            else {
                return false;
            }
            ;
            //#endregion
        };
        //#endregion
        //#region OBSOLETE
        /** Obsolete */
        BladeList.prototype.setObsoleteLayoutProperites = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.setObsoleteLayoutProperites\' called.', [this]);
            if (this.items.length !== 0) {
                this.blade.navGrid.items = this.items; //--> needed, otherwise nav html pages will no longer work.
            }
            this.blade.isNavGrid = this.isNavGrid;
            _super.prototype.setObsoleteLayoutProperites.call(this);
        };
        return BladeList;
    }(AzurePortalNg.BladeData));
    AzurePortalNg.BladeList = BladeList;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: BladeNav
    var BladeNav = /** @class */ (function (_super) {
        __extends(BladeNav, _super);
        //#endregion
        //#region Constructor
        function BladeNav(portalService, path, title, subtitle, width) {
            if (title === void 0) { title = ''; }
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
            //#region Properties
            _this.navItems = new Array();
            _this.isNav = true;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeNav\' constructor called.', [_this, portalService, path, title, subtitle, width]);
            _super.prototype.onNavigateTo = _this.navigateTo;
            return _this;
        }
        return BladeNav;
    }(AzurePortalNg.BladeData));
    AzurePortalNg.BladeNav = BladeNav;
    //#endregion
    //#region Class Definition: BladeNavItem
    var BladeNavItem = /** @class */ (function () {
        //#region Constructor
        function BladeNavItem(title, bladePath, hrefPath, roles, isVisible, callback, bladeNav) {
            if (title === void 0) { title = ''; }
            if (bladePath === void 0) { bladePath = ''; }
            if (hrefPath === void 0) { hrefPath = ""; }
            if (roles === void 0) { roles = ""; }
            if (isVisible === void 0) { isVisible = true; }
            if (callback === void 0) { callback = null; }
            if (bladeNav === void 0) { bladeNav = null; }
            this.title = title;
            this.bladePath = bladePath;
            this.hrefPath = hrefPath;
            this.roles = roles;
            this.isVisible = isVisible;
            this.callback = callback;
            this.bladeNav = bladeNav;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeNavItem\' constructor called.', [this, title, bladePath, hrefPath, roles, isVisible]);
        }
        //#endregion
        //#region
        BladeNavItem.prototype.onNavItemClick = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeNavItem.onNavItemClick\' called.', [this]);
            if (this.callback != null) {
                this.callback();
            }
        };
        return BladeNavItem;
    }());
    AzurePortalNg.BladeNavItem = BladeNavItem;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Enum Definition: TileSizes
    /** The names are used in CSS for layouting, e.g. style='mini' */
    var TileSizes;
    (function (TileSizes) {
        TileSizes[TileSizes["small"] = 0] = "small";
        TileSizes[TileSizes["mini"] = 1] = "mini";
        TileSizes[TileSizes["normal"] = 2] = "normal";
        TileSizes[TileSizes["herowide"] = 3] = "herowide";
    })(TileSizes = AzurePortalNg.TileSizes || (AzurePortalNg.TileSizes = {}));
    //#endregion
    //#region Class Definition: TileSize
    var TileSize = /** @class */ (function () {
        //#region Constructors
        function TileSize(tileSizes, width, height) {
            this.tileSizes = tileSizes;
            this.width = width;
            this.height = height;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'TileSize\' constructor called.', [this, tileSizes, width, height]);
        }
        //#endregion
        //#region Methods
        TileSize.getTileSizes = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'TileSize.getTileSizes\' called.', [this]);
            var tileSizes = Array();
            tileSizes.push(new TileSize(TileSizes.small, 90, 90));
            tileSizes.push(new TileSize(TileSizes.mini, 180, 90));
            tileSizes.push(new TileSize(TileSizes.normal, 180, 180));
            tileSizes.push(new TileSize(TileSizes.herowide, 540, 360));
            return tileSizes;
        };
        return TileSize;
    }());
    AzurePortalNg.TileSize = TileSize;
    //#endregion
    //#region Class Definition: Tile
    var Tile = /** @class */ (function () {
        //#endregion
        //#region Constructors
        function Tile(title, bladePath, portalService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Tile\' constructor called.', [this, title, bladePath, portalService]);
            this.portalService = portalService;
            this.title = title;
            this.bladePath = bladePath;
            this.tileSize = TileSizes.normal;
        }
        //#endregion
        //#region Methods
        Tile.prototype.clicked = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Tile.clicked\' called.', [this]);
            var blade = this.portalService.bladeArea.setFirstBlade(this.bladePath);
            blade.activate();
        };
        return Tile;
    }());
    AzurePortalNg.Tile = Tile;
    //#endregion
    //#region Class Definition: Tiles
    var Tiles = /** @class */ (function () {
        function Tiles() {
            //#region Properties
            this.showTiles = true;
            this.tiles = new Array();
            this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
            this.tileSizes = TileSize.getTileSizes();
            this.nextLeft = 0;
            this.nextTop = 0;
            this.columnHeightMax = 0;
            //#endregion
        }
        //#endregion
        //#region Methods
        Tiles.prototype.addTile = function (tile) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Tiles.addTile\' called.', [this, tile]);
            var tileSize = this.tileSizes[tile.tileSize];
            tile.size = TileSizes[tile.tileSize]; // Get CSS Name
            tile.top = this.nextTop + 'px';
            tile.left = this.nextLeft + 'px';
            this.nextLeft += tileSize.width;
            if (tileSize.height > this.columnHeightMax) {
                this.columnHeightMax = tileSize.height;
            }
            if (this.nextLeft > 360) {
                this.nextLeft = 0;
                this.nextTop += this.columnHeightMax;
                this.columnHeightMax = 0;
            }
            this.tiles.push(tile);
            return tile;
        };
        return Tiles;
    }());
    AzurePortalNg.Tiles = Tiles;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: PortalShell
    var PortalShell = /** @class */ (function (_super) {
        __extends(PortalShell, _super);
        //#endregion
        //#endregion
        //#region Constructors
        function PortalShell(title, portalService) {
            var _this = _super.call(this, portalService) || this;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell\' constructor called.', [_this, title, portalService]);
            _this.portalService = portalService;
            _this.portalService.portalShell = _this;
            _this.portalService.panorama = new AzurePortalNg.Panorama(title, _this.portalService);
            _this.portalService.bladeArea = new AzurePortalNg.BladeArea(portalService);
            _this.initialize();
            return _this;
        }
        //#endregion
        //#region Methods
        PortalShell.prototype.initialize = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell.initialize\' called.', [this]);
            this.setObsoleteLayoutProperites();
        };
        PortalShell.prototype.setObsoleteLayoutProperites = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell.setObsoleteLayoutProperites\' called.', [this]);
            this.title = this.portalService.panorama.title;
            this.tiles = this.portalService.panorama.startboard.tiles.tiles;
            this.blades = this.portalService.bladeArea.blades;
            //var bladeServiceOLD = <AzurePortalNg.Blade>this.portalService.$injector.get('bladeService');
            //bladeServiceOLD.blades = this.portalService.bladeArea.blades;
            if (this.portalService.panorama.avatarMenu.userAccount != undefined) {
                this.user = {
                    name: this.portalService.panorama.avatarMenu.userAccount.name,
                    emailaddress: this.portalService.panorama.avatarMenu.userAccount.userName
                };
            }
            if (this.portalService.bladeArea != null) {
                this.portalService.bladeArea.blades.forEach(function (blade) {
                    blade.setObsoleteLayoutProperites();
                });
            }
        };
        return PortalShell;
    }(AzurePortalNg.UserControlBase));
    AzurePortalNg.PortalShell = PortalShell;
    //#endregion
})(AzurePortalNg || (AzurePortalNg = {}));
//(function () {
//    'use strict';
//    angular.module('azureportalng').factory('bladeService', ['$http', '$rootScope', '$window', bladeService]);
//    function bladeService($http, $rootScope, $window) {
//        var service = {
//            blades: [],
//            clear: clear,
//            clearLevel: clearLevel,
//            clearLastLevel: clearLastLevel,
//            addBladePath: addBladePath
//        };
//        return service;
//        function addBladePath(path: string) {
//            if (path === undefined || path == '') { return; }
//            service.blades.push({ 'path': path });
//            var portalcontent = $window.document.getElementById('azureportalscroll');
//            $window.setTimeout(function () {
//                var azureportalblades = $window.document.getElementsByClassName('azureportalblade');
//                var i = service.blades.length - 1;
//                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
//                //       So now if it is, the user has to scroll on its own.
//                if (azureportalblades[i] !== undefined && azureportalblades[i].offsetLeft !== undefined) {
//                    var sl = azureportalblades[i].offsetLeft - 30;
//                    portalcontent.scrollLeft = sl;
//                }
//            }, 250);
//        }
//        function clear() {
//            service.blades.length = 0;
//        }
//        function clearLevel(level) {
//            if (level == 0) { level = 1; }
//            service.blades.length = level - 1;
//        }
//        function clearLastLevel() {
//            clearLevel(service.blades.length);
//        }
//    }
//})(); 
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    var DataService = /** @class */ (function () {
        //#region Constructor
        function DataService($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        //#endregion
        //#region Methods
        DataService.prototype.getData = function (url) {
            return this.$http({ method: 'GET', url: url })
                .success(function (data) {
                return data;
            })
                .error(function (error) {
                return error;
            });
        };
        return DataService;
    }());
})(AzurePortalNg || (AzurePortalNg = {}));
(function () {
    'use strict';
    angular.module('azureportalng').directive('azurePortalBlade', ['$window', 'azurePortalNg.portalService', azurePortalBlade]);
    function azurePortalBlade($window, portalService) {
        return {
            transclude: true,
            scope: { vm: '=vm' },
            restrict: 'E',
            templateUrl: '/azureportalng/directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                AzurePortalNg.Debug.write('[azureportalng-debug] \'directive:azurePortalBlade.link\' called.', [this, portalService]);
                //#region the following code makes sure, that a function scope.vm.close is available
                if (scope.vm === undefined) {
                    scope.vm = {};
                }
                if (scope.vm.close === undefined) {
                    scope.vm.close = function () {
                        AzurePortalNg.Debug.write('[azureportalng-debug] \'directive:azurePortalBlade.close\' called.', [this, portalService]);
                        portalService.bladeArea.clearLastLevel();
                    };
                }
                //#endregion
            }
        };
    }
})();
// http://blogs.msdn.com/b/laurieatkinson/archive/2014/08/23/implementing-a-save-warning-in-an-angular-spa.aspx
//'use strict';
//module App.Directives {
//    // USE:
//    // <form name="personForm" azureportal-dirty-flag>
//    interface IDirtyFlag extends ng.IDirective {
//    }
//    interface IDirtyFlagScope extends ng.IScope {
//        personForm: ng.IFormController;
//        vm: any;
//    }
//    class DirtyFlag implements IDirtyFlag {
//        static directiveId: string = 'azureportalDirtyFlag'
//        restrict: string = 'A';
//        personManager: App.Services.IpersonManager;
//        constructor(personManager) {
//            this.personManager = personManager;
//        }
//        link = (scope: IDirtyFlagScope, element, attrs) => {
//            var self = this;
//            // When the directive is first invoked, check if the stored dirty value is true and 
//            // if so set the $dirty flag on the form.
//            if (scope.vm.person && scope.vm.person.isDirty) {
//                scope.personForm.$dirty = true;
//            }
//            // When the user navigates away from this view, check the value of the $dirty flag on this form. 
//            // If it is dirty(indicating unsaved changes), then store the id of the current person as dirty 
//            // using a service named personManger.
//            scope.$on('$locationChangeStart'), function () {
//                if (scope.personForm.$dirty) {
//                    self.personManager.markpersonAsDirty(scope.vm.person.personId);
//                }
//            });
//        }
//    }
//    app.directive(DirtyFlag.directiveId, ['personmanager', (pm) => new DirtyFlag(pm)]);
//} 
(function () {
    'use strict';
    angular.module('azureportalng').directive('azurePortalHome', ['$window', '$interpolate', azurePortalHome]);
    function azurePortalHome($window, $interpolate) {
        return {
            scope: { vm: '=options' },
            templateUrl: '/azureportalng/directives/home/home.html',
            link: function (scope, element, attrs, controller) {
            }
        };
    }
})();
(function () {
    'use strict';
    angular.module('azureportalng').directive('nav', ['$window', nav]);
    function nav($window) {
        return {
            scope: { vm: '=viewModel' },
            templateUrl: '/azureportalng/directives/nav/nav.html',
            link: function (scope, element, attrs, controller) {
                angular.forEach(scope.vm.navItems, function (item) {
                    // Set some default values, depending on existing values
                    if (item.isVisible == undefined) {
                        item.isVisible = true;
                    }
                    if (item.title == undefined || item.title == '') {
                        item.style = { cursor: 'default' };
                    }
                    if (item.bladePath == undefined || item.bladePath == '') {
                        item.style = { cursor: 'default' };
                    }
                });
            }
        };
    }
})();
(function () {
    'use strict';
    angular.module('azureportalng').directive('navGrid', ['$window', navGrid]);
    function navGrid($window) {
        return {
            scope: { vm: '=viewModel' },
            templateUrl: '/azureportalng/directives/navgrid/navgrid.html',
            link: function (scope, element, attrs, controller) {
                angular.forEach(scope.vm.items, function (item) {
                    // Set some default values, depending on existing values
                    if (item.isVisible == undefined) {
                        item.isVisible = true;
                    }
                    if (item.title == undefined || item.title == '') {
                        item.style = { cursor: 'default' };
                    }
                    if (item.bladePath == undefined || item.bladePath == '') {
                        item.style = { cursor: 'default' };
                    }
                });
            }
        };
    }
})();
