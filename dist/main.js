(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-input-element {\r\n    color: warn;\r\n}\r\n\r\n.save-button {\r\n    float: left;\r\n    color: accent\r\n}\r\n\r\n.cancel-button {\r\n    float: right;\r\n    color: warn\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>\r\n    {{title}}\r\n  </h1>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ETP Mod Team';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_offender_offender_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/offender/offender.component */ "./src/app/offender/offender.component.ts");
/* harmony import */ var _offender_offender_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offender/offender.service */ "./src/app/offender/offender.service.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_offender_offender_component__WEBPACK_IMPORTED_MODULE_7__["OffenderComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _offender_offender_service__WEBPACK_IMPORTED_MODULE_8__["OffenderService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_offender_offender_component__WEBPACK_IMPORTED_MODULE_7__["OffenderComponent"],
            ],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-global-overlay-wrapper {\r\n  height: auto;\r\n}\r\n\r\nmat-dialog-content {\r\n  min-height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"addNew()\">\r\n<h2 mat-dialog-title>Adding {{data.name}} to the Shit List</h2>\r\n<mat-dialog-content>\r\n\r\n  <div class=\"form-group\">\r\n\r\n    <mat-form-field>\r\n      <input matInput\r\n      [formControl]=\"nameCtrl\"\r\n      required\r\n      type=\"text\"\r\n      name=\"name\"\r\n      autocomplete=\"off\"\r\n      [(ngModel)]=\"data.name\"\r\n      placeholder=\"Name\">\r\n      <mat-error *ngIf=\"nameCtrl.invalid\">{{getNameError()}}</mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <mat-select\r\n      [formControl]=\"pointsCtrl\"\r\n      required name=\"points\"\r\n      placeholder=\"Initial Points\"\r\n      [(ngModel)]=\"data.points\"\r\n      name=\"newOffenderPoints\">\r\n        <mat-option *ngFor=\"let num of points\" [value]=\"num.value\">\r\n          {{num.display}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"pointsCtrl.invalid\">{{getScoreError()}}</mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <input\r\n      [formControl]=\"noteCtrl\"\r\n      matInput\r\n      required\r\n      type=\"text\"\r\n      name=\"newNote\"\r\n      autocomplete=\"off\"\r\n      [(ngModel)]=\"newNote\"\r\n      placeholder=\"Notes\">\r\n      <mat-error *ngIf=\"noteCtrl.invalid\">{{getNotesError()}}</mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"form-group\">\r\n\r\n    <mat-dialog-actions>\r\n      <button type=\"button\" color=\"warn\" mat-dialog-close (click)=\"cancelAdd()\">Cancel</button>\r\n      <button type=\"submit\" mat-button color=\"primary\" [disabled]=\"nameCtrl.invalid || pointsCtrl.invalid || noteCtrl.invalid\">Add</button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n</mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_offender_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/offender.model */ "./src/app/shared/offender.model.ts");
/* harmony import */ var _shared_note_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/note.model */ "./src/app/shared/note.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.name = this.data.name;
        this.nameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.pointsCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.noteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.points = new Array();
    }
    DialogComponent.prototype.ngOnInit = function () {
        this.createPoints();
        this.newOffender = new _shared_offender_model__WEBPACK_IMPORTED_MODULE_3__["Offender"]();
    };
    DialogComponent.prototype.createPoints = function () {
        for (var i = 0; i < 10; i++) {
            var point = { "value": i + 1, "display": i + 1 };
            this.points.push(point);
        }
    };
    DialogComponent.prototype.selectPoints = function (pointValue) {
        this.data.points = pointValue;
    };
    DialogComponent.prototype.getNameError = function () {
        if (this.nameCtrl.hasError('required')) {
            return 'Name is required';
        }
    };
    DialogComponent.prototype.getScoreError = function () {
        if (this.pointsCtrl.hasError('required')) {
            return 'Please select a value 1-10';
        }
    };
    DialogComponent.prototype.getNotesError = function () {
        if (this.noteCtrl.hasError('required')) {
            return 'Please add a note about why you are shit-listing ' + this.data.name;
        }
    };
    DialogComponent.prototype.addNew = function () {
        if (this.nameCtrl.valid && this.noteCtrl.valid && this.pointsCtrl.valid) {
            this.newOffender.notes = [];
            var newNote = new _shared_note_model__WEBPACK_IMPORTED_MODULE_4__["Note"](this.newNote, { firstName: "Fake", lastName: "Tester", nickName: "Admin" });
            newNote.isNew = false;
            this.newOffender.notes.push(newNote);
            this.newOffender.name = this.data.name;
            this.newOffender.points = this.data.points;
            this.newOffender.originalPoints = this.data.points;
            this.newOffender.isBanned = false;
            this.newOffender.originalStatus = this.newOffender.isBanned;
            this.newOffender.nickName = this.data.nickName ? this.data.nickName : null;
            this.dialogRef.close(this.newOffender);
        }
    };
    DialogComponent.prototype.cancelAdd = function () {
        this.data = null;
        this.dialogRef.close();
    };
    DialogComponent.prototype.createDropdown = function () {
        for (var i = 0; i > 10; i++) {
            var point = { "value": i + 1, "display": i + 1 };
            this.points.push(point);
        }
        return this.points;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogComponent.prototype, "selectionChange", void 0);
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/offender/offender.component.css":
/*!*************************************************!*\
  !*** ./src/app/offender/offender.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel-header {\r\n    font-size: 20px;\r\n}\r\n\r\nmat-icon {\r\n    color: accent;\r\n}\r\n\r\n.dates {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.date-added{\r\n    font-size: 16px;\r\n}\r\n\r\n.note-btn:after {\r\n    font-family: 'FontAwesome';\r\n    content: \"\\f055\";\r\n    font-size: 3em;\r\n}\r\n\r\n.note-btn.mat-icon-button {\r\n     color: #28a745;\r\n}\r\n\r\n.note-btn:disabled {\r\n    color: rgba(0,0,0,.26);\r\n}\r\n\r\n.banned {\r\n    color: #f44336;\r\n}\r\n\r\n.new-offender, .offenders {\r\n    margin: 20px auto 10px auto;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  padding-left: 1.3em;\r\n}\r\n\r\nli:before {\r\n  font-family: \"FontAwesome\";\r\n  content: \"\\f075\";\r\n  display: inline-block;\r\n  margin-left: -1.3em;\r\n  width: 1.3em;\r\n}\r\n\r\n.changed-item:before {\r\n  font-family: \"FontAwesome\";\r\n  content: \"\\f069\";\r\n  color: #f44336;\r\n  margin-left: -1.3em;\r\n  width: 1.3em;\r\n}"

/***/ }),

/***/ "./src/app/offender/offender.component.html":
/*!**************************************************!*\
  !*** ./src/app/offender/offender.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"openDialog(addedName)\">\r\n    <mat-form-field>\r\n        <button type=\"button\" matPrefix mat-icon-button (click)=\"addedName=''\">\r\n            <mat-icon *ngIf=\"addedName != ''\" class=\"cancelX\">x</mat-icon>\r\n        </button>\r\n        <input name=\"addedName\" autocomplete=\"off\" matInput [(ngModel)]=\"addedName\" placeholder=\"Who is it now?\">\r\n    </mat-form-field>\r\n    <button type=\"submit\" color=\"accent\" mat-raised-button [disabled]=\"addedName == ''\">Add</button>\r\n</form>\r\n\r\n<div class=\"offenders\">\r\n<mat-accordion>\r\n<mat-expansion-panel *ngFor=\"let offender of offenders\">\r\n\r\n    <mat-expansion-panel-header [class.changed-item]=\"offender.changesMade == true\">\r\n        <mat-panel-title>\r\n            {{offender.name}}\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n            <span *ngIf=\"!offender.isBanned && offender.points < 10\">{{offender.points}} Point<span *ngIf=\"offender.points > 1\">s</span></span>\r\n            <span class=\"banned\" *ngIf=\"!offender.isBanned && offender.points == 10\">{{offender.points}} Points</span>\r\n            <span class=\"banned\" *ngIf=\"offender.isBanned\">Banned</span>\r\n        </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n<div class=\"dates\">\r\n    <div class=\"date-added\">First Offense: {{offender.created | date}}</div>\r\n    <div>\r\n        Last Updated:\r\n            {{offender.updated | date}}\r\n            by Admin{{Admin}}\r\n    </div>\r\n</div>\r\n\r\n    <div class=\"form-group points\" [class.changed-item]=\"offender.originalPoints != offender.points\">\r\n        <mat-form-field>\r\n            <mat-select\r\n            placeholder=\"Points\"\r\n            [(value)]=\"offender.points\"\r\n            [disabled]=\"offender.isBanned\"\r\n            [(ngModel)]=\"offender.points\"\r\n            (selectionChange)=\"pointsChanged($event, offender)\"\r\n            name=\"points\">\r\n                <mat-option [value]=1>1</mat-option>\r\n                <mat-option [value]=2>2</mat-option>\r\n                <mat-option [value]=3>3</mat-option>\r\n                <mat-option [value]=4>4</mat-option>\r\n                <mat-option [value]=5>5</mat-option>\r\n                <mat-option [value]=6>6</mat-option>\r\n                <mat-option [value]=7>7</mat-option>\r\n                <mat-option [value]=8>8</mat-option>\r\n                <mat-option [value]=9>9</mat-option>\r\n                <mat-option [value]=10>10</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [class.changed-item]=\"offender.originalStatus != offender.isBanned\">\r\n        <mat-slide-toggle\r\n        color=\"warn\"\r\n        [(ngModel)]=\"offender.isBanned\"\r\n        [checked]=\"offender.isBanned\"\r\n        (change)=\"banStatusChanged($event, offender)\"\r\n        name=\"isBanned\">\r\n            <span *ngIf=\"!offender.isBanned\">Banned?</span>\r\n            <span *ngIf=\"offender.isBanned\">Banned on {{offender.updated | date}} by Admin{{Admin}}</span>\r\n        </mat-slide-toggle>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <form (ngSubmit)=\"addNewNote(offender)\">\r\n            <mat-form-field>\r\n                <button [disabled]=\"newNote == ''\" mat-button matPrefix mat-icon-button (click)=\"newNote=''\">\r\n                    <mat-icon *ngIf=\"newNote != ''\" class=\"cancelX\">x</mat-icon>\r\n                </button>\r\n                <input matInput name=\"newNote\" type=\"text\" autocomplete=\"off\" [(ngModel)]=\"newNote\" placeholder=\"Add comments\" />\r\n            </mat-form-field>\r\n            <button class=\"note-btn\" type=\"submit\" [disabled]=\"newNote == ''\" mat-button matSuffix label=\"Add comment\" mat-icon-button></button>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <h3 class=\"mat-h3\">History</h3>\r\n        <ul *ngFor=\"let note of offender.notes\">\r\n            <li [class.changed-item]=\"note.isNew\">{{note.note}} <em>({{note.created | date}} by {{note.addedBy.nickName}})</em></li>\r\n        </ul>\r\n    </div>\r\n\r\n    <button class=\"save-btn\" float=\"left\" mat-raised-button color=\"primary\" [disabled]=\"!offender.changesMade\" (click)=\"saveChanges(offender)\">Save Changes</button>\r\n    <button class=\"cancel-btn\" float=\"right\" mat-raised-button color=\"warn\" [disabled]=\"!offender.changesMade\" (click)=\"discardChanges(offender)\">Discard Changes</button>\r\n\r\n</mat-expansion-panel>\r\n</mat-accordion>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/offender/offender.component.ts":
/*!************************************************!*\
  !*** ./src/app/offender/offender.component.ts ***!
  \************************************************/
/*! exports provided: OffenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffenderComponent", function() { return OffenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _offender_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offender.service */ "./src/app/offender/offender.service.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OffenderComponent = /** @class */ (function () {
    function OffenderComponent(dialog, offenderService) {
        this.dialog = dialog;
        this.offenderService = offenderService;
        this.newNote = '';
        this.addedName = '';
    }
    OffenderComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    OffenderComponent.prototype.getAll = function () {
        var _this = this;
        return this.offenderService.getAll().subscribe(function (response) {
            _this.offenders = response;
            _this.offenders.forEach(function (offender) {
                offender.originalPoints = offender.points;
                offender.originalStatus = offender.isBanned;
            });
            console.log(_this.offenders);
            return _this.offenders;
        });
    };
    OffenderComponent.prototype.openDialog = function (addedName) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
            data: {
                name: addedName,
                nickName: '',
                note: '',
                points: 0
            }
        });
        this.addedName = '';
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log("after close result", result._id);
        });
        dialogRef.beforeClose().subscribe(function (dialogData) {
            return _this.offenderService.postNew(dialogData).subscribe(function (response) {
                response.originalPoints = response.points;
                response.originalStatus = response.isBanned;
                _this.offenders.push(response);
                console.log("response", response);
            });
        });
    };
    OffenderComponent.prototype.addNewNote = function (offender) {
        var noteToAdd = { note: this.newNote, isNew: true, created: new Date(), addedBy: { firstName: "Fake", lastName: "Tester", nickName: "Admin" } };
        offender.notes.push(noteToAdd);
        offender.notesAdded = true;
        offender.changesMade = true;
        this.newNote = '';
    };
    OffenderComponent.prototype.pointsChanged = function ($event, offender) {
        if (offender.originalPoints == offender.points) {
            offender.pointsChanged = false;
        }
        if (offender.originalPoints != offender.points) {
            offender.changesMade = true;
            offender.pointsChanged = true;
        }
        else if (offender.originalPoints == offender.points
            && offender.originalStatus == offender.isBanned
            && !offender.notesAdded) {
            offender.changesMade = false;
        }
    };
    OffenderComponent.prototype.banStatusChanged = function ($event, offender) {
        if (offender.originalStatus == offender.isBanned) {
            offender.banStatusChanged = false;
        }
        if (offender.originalStatus != offender.isBanned) {
            offender.banStatusChanged = true;
            offender.changesMade = true;
        }
        else if (offender.originalStatus == offender.isBanned
            && offender.originalPoints == offender.points
            && !offender.notesAdded) {
            offender.changesMade = false;
        }
    };
    OffenderComponent.prototype.saveChanges = function (offender) {
        var newNotes = [];
        if (offender.notesAdded) {
            newNotes = [];
            offender.notes.forEach(function (note) {
                if (note.isNew) {
                    note.isNew = false;
                    newNotes.push(note);
                }
            });
        }
        offender.originalPoints = offender.points;
        offender.originalStatus = offender.isBanned;
        offender.changesMade = false;
        offender.updated = new Date();
        this.offenderService.updateStatus({
            _id: offender._id,
            notes: newNotes,
            points: offender.points,
            isBanned: offender.isBanned,
            updated: offender.updated
        }).subscribe();
    };
    OffenderComponent.prototype.discardChanges = function (offender) {
        if (offender.notesAdded) {
            offender.notes.forEach(function (note) {
                if (note.isNew) {
                    var idx = offender.notes.indexOf(note);
                    offender.notes.splice(idx);
                }
                offender.notesAdded = false;
            });
        }
        if (offender.banStatusChanged) {
            offender.isBanned = offender.originalStatus;
        }
        if (offender.pointsChanged) {
            offender.points = offender.originalPoints;
        }
        offender.changesMade = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OffenderComponent.prototype, "selectionChange", void 0);
    OffenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'offenders-component',
            template: __webpack_require__(/*! ./offender.component.html */ "./src/app/offender/offender.component.html"),
            styles: [__webpack_require__(/*! ./offender.component.css */ "./src/app/offender/offender.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _offender_service__WEBPACK_IMPORTED_MODULE_2__["OffenderService"]])
    ], OffenderComponent);
    return OffenderComponent;
}());



/***/ }),

/***/ "./src/app/offender/offender.service.ts":
/*!**********************************************!*\
  !*** ./src/app/offender/offender.service.ts ***!
  \**********************************************/
/*! exports provided: OffenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffenderService", function() { return OffenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OffenderService = /** @class */ (function () {
    function OffenderService(httpClient) {
        this.httpClient = httpClient;
    }
    OffenderService.prototype.getAll = function () {
        return this.httpClient.get('/api/offenders');
    };
    OffenderService.prototype.postNew = function (body) {
        return this.httpClient.post('/api/offender', body);
    };
    OffenderService.prototype.updateStatus = function (body) {
        return this.httpClient.put('/api/update', body);
    };
    OffenderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OffenderService);
    return OffenderService;
}());



/***/ }),

/***/ "./src/app/shared/note.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/note.model.ts ***!
  \**************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
var Note = /** @class */ (function () {
    function Note(note, addedBy) {
        this.created = new Date();
        this.isNew = true; // only used client side
        this.note = note;
        this.addedBy = addedBy;
    }
    ;
    return Note;
}());



/***/ }),

/***/ "./src/app/shared/offender.model.ts":
/*!******************************************!*\
  !*** ./src/app/shared/offender.model.ts ***!
  \******************************************/
/*! exports provided: Offender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offender", function() { return Offender; });
var Offender = /** @class */ (function () {
    function Offender() {
        this.notesAdded = false;
        this.created = new Date();
        this.updated = new Date();
    }
    return Offender;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amberjoy/Projects/etp_mod_team/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map