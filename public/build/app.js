(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive \\.(j|t)sx?$":
/*!**********************************************!*\
  !*** ./assets/controllers/ sync \.(j|t)sx?$ ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dashboard_controller.js": "./assets/controllers/dashboard_controller.js",
	"./hello_controller.js": "./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-chartjs--chart': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-chartjs/dist/controller.js */ "./node_modules/@symfony/ux-chartjs/dist/controller.js")),
  'symfony--ux-swup--swup': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-swup/dist/controller.js */ "./node_modules/@symfony/ux-swup/dist/controller.js")),
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive \\.(j|t)sx?$"));

/***/ }),

/***/ "./assets/components/archivarius.js":
/*!******************************************!*\
  !*** ./assets/components/archivarius.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);












function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return {
    download: function download(archiveIds) {
      var fakeFormHtmlFragment = "<form style='display: none;' method='POST' action='/doc/archive'>";

      var _iterator = _createForOfIteratorHelper(archiveIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          fakeFormHtmlFragment += "<input type='hidden' name='id[]' value='" + i + "'>";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      fakeFormHtmlFragment += "</form>";
      var $fakeFormDom = jquery__WEBPACK_IMPORTED_MODULE_11___default()(fakeFormHtmlFragment);
      jquery__WEBPACK_IMPORTED_MODULE_11___default()("body").append($fakeFormDom);
      $fakeFormDom.submit();
    }
  };
}

/***/ }),

/***/ "./assets/components/create-button.js":
/*!********************************************!*\
  !*** ./assets/components/create-button.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _documents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents */ "./assets/components/documents.js");


var $createBtn;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return {
    init: function init() {
      $createBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.create-btn');
      $createBtn.off('click').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          url: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('href')
        }).done(function (archiveRecord) {
          (0,_documents__WEBPACK_IMPORTED_MODULE_1__.default)().addRecord(archiveRecord);
        });
      });
    },
    destroy: function destroy() {
      $createBtn.off('click');
    }
  };
}

/***/ }),

/***/ "./assets/components/documents.js":
/*!****************************************!*\
  !*** ./assets/components/documents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_record__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-record */ "./assets/components/edit-record.js");





var $container, $spinner, $foundCount, $foundCountCnt, $table, netTable, activeRow, $foundFloatVals, totalFloatVal;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return {
    init: function init() {
      $container = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.documents-table');
      $spinner = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.spinner-border', $container);
      $foundCount = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.found-count', $container);
      $foundCountCnt = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cnt', $foundCount);
      $foundFloatVals = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.amount-fv');
      $table = jquery__WEBPACK_IMPORTED_MODULE_2___default()('table', $container);
    },
    loadTable: function loadTable(data) {
      $spinner.hide();
      $foundCountCnt.text(data.count);
      $foundCount.show();
      totalFloatVal = 0;

      for (var i in data.documents) {
        if (!data.documents.hasOwnProperty(i)) {
          continue;
        }

        totalFloatVal += data.documents[i].floatVal;
      }

      $foundFloatVals.text(totalFloatVal.toFixed(2));

      if (!netTable) {
        netTable = $table.DataTable({
          paging: false,
          searching: false,
          ordering: false,
          select: true,
          autoWidth: true,
          info: false,
          language: {
            emptyTable: $table.data('text')
          },
          columns: [{
            data: 'title'
          }, {
            data: 'tags'
          }, {
            data: 'floatVal'
          }],
          data: data.documents
        });
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('tbody', $table).on('click', 'tr', function () {
          activeRow = netTable.row(this);
          var data = activeRow.data();

          if (data) {
            (0,_edit_record__WEBPACK_IMPORTED_MODULE_4__.default)().openEditForm(data);
          }
        });
        $table.show();
      } else {
        netTable.clear().draw();
        netTable.rows.add(data.documents);
        netTable.draw();
        activeRow = null;
      }
    },
    addRow: function addRow(archiveRecord) {
      // total count
      var countVal = parseInt($foundCountCnt.text());
      $foundCountCnt.text(++countVal); // total value

      totalFloatVal += archiveRecord.floatVal;
      $foundFloatVals.text(totalFloatVal.toFixed(2));
      activeRow = netTable.row.add(archiveRecord);
      activeRow.draw();
    },
    addRecord: function addRecord(archiveRecord) {
      this.addRow(archiveRecord);
      (0,_edit_record__WEBPACK_IMPORTED_MODULE_4__.default)().openEditForm(archiveRecord);
    },
    removeActiveRow: function removeActiveRow() {
      var countVal = parseInt($foundCountCnt.text());
      $foundCountCnt.text(--countVal);
      totalFloatVal -= activeRow.data().floatVal;
      $foundFloatVals.text(totalFloatVal.toFixed(2));
      activeRow.remove().draw();
    },
    destroy: function destroy() {
      $spinner.show();
      $foundCount.hide();
      $foundCountCnt.text('0');
      $table.hide();
      $foundFloatVals.text('0');
    }
  };
}

/***/ }),

/***/ "./assets/components/donut.js":
/*!************************************!*\
  !*** ./assets/components/donut.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var $chartBtn, $container;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return {
    init: function init() {
      $chartBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.chart-btn');
      $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.chart-modal');
      $chartBtn.off('click').on('click', function () {
        $container.modal();
      });
    },
    destroy: function destroy() {
      $chartBtn.off('click');
    }
  };
}

/***/ }),

/***/ "./assets/components/dropzone.js":
/*!***************************************!*\
  !*** ./assets/components/dropzone.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dropzone/dist/dropzone.css */ "./node_modules/dropzone/dist/dropzone.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

(dropzone__WEBPACK_IMPORTED_MODULE_0___default().autoDiscover) = false;

var dz,
    state = false;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return {
    init: function init(onAdded) {
      if (!state) {
        var $el = $('#src-media');
        var formEl = document.querySelector('.dropzone');

        if (!formEl) {
          return;
        }

        dz = new (dropzone__WEBPACK_IMPORTED_MODULE_0___default())(formEl, {
          dictDefaultMessage: $el.data('text'),
          params: {
            id: $el.data('id')
          }
        });
        dz.on('error', function (f, r) {
          console.log(f, r);
        });
        dz.on('success', function (f, r) {
          // redirect to new r if already not there
          onAdded(r);
        });
        state = true;
      }
    },
    destroy: function destroy() {
      dz.destroy();
      state = false;
    }
  };
}

/***/ }),

/***/ "./assets/components/edit-media.js":
/*!*****************************************!*\
  !*** ./assets/components/edit-media.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var $container,
    $title,
    $download,
    $remove,
    $origName,
    deleteOnClose,
    $save,
    addOnClose = false;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return {
    init: function init() {
      $container = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.file-modal');
      $title = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.src-title', $container);
      $origName = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.src-id', $container);
      $download = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.load-media', $container);
      $remove = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.delete-media', $container);
      $save = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.save-media', $container);
      deleteOnClose = false;
    },
    show: function show(archiveId, media, onClose) {
      $title.val(media.docTitle);
      $origName.text(media.docOrigName);
      $container.off('hidden.bs.modal').on('hidden.bs.modal', function () {
        var actionOnClose = deleteOnClose === true ? 'delete' : null;

        if (addOnClose) {
          actionOnClose = 'update';
        }

        onClose(actionOnClose, addOnClose);
        deleteOnClose = false;
        addOnClose = false;
      }).modal();
      $download.off('click').on('click', function () {
        var fakeFormHtmlFragment = "<form style='display: none;' method='POST' action='/doc/get_media'>";
        fakeFormHtmlFragment += "<input type='hidden' name='id' value='" + archiveId + "'>";
        fakeFormHtmlFragment += "<input type='hidden' name='path' value='" + media.docPath.replace("\\", "\\\\").replace("'", "\'") + "'>";
        fakeFormHtmlFragment += "</form>";
        var $fakeFormDom = jquery__WEBPACK_IMPORTED_MODULE_2___default()(fakeFormHtmlFragment);
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("body").append($fakeFormDom);
        $fakeFormDom.submit();
      });
      $remove.off('click').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax('/doc/media', {
          method: 'DELETE',
          data: {
            id: archiveId,
            path: media.docPath
          }
        }).done(function () {
          deleteOnClose = true;
          $container.modal('hide');
        });
      });
      $save.off('click').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax('/doc/media', {
          method: 'PUT',
          data: {
            id: archiveId,
            path: media.docPath,
            title: $title.val()
          }
        }).done(function (docInfo) {
          addOnClose = docInfo;
          $container.modal('hide');
        });
      });
    },
    destroy: function destroy() {
      $title.val('');
      $origName.text('');
      $download.data('path', '');
      $remove.data('path', '');
      addOnClose = false;
      deleteOnClose = false;
    }
  };
}

/***/ }),

/***/ "./assets/components/edit-record.js":
/*!******************************************!*\
  !*** ./assets/components/edit-record.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropzone */ "./assets/components/dropzone.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _edit_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-media */ "./assets/components/edit-media.js");
/* harmony import */ var _documents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documents */ "./assets/components/documents.js");
/* harmony import */ var _archivarius__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./archivarius */ "./assets/components/archivarius.js");









var $container, $title, $id, $dropzoneForm, $files, $fileTable, netTable, $deleteBtn, $saveBtn, activeRow, $floatVal, $description;
var $dateUpdated, $dateCreated, $loadArchiveBtn;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var selectTags = function selectTags(tags) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tag-item', $container).each(function () {
      var $el = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this);
      $el.prop('checked', false);

      if (jquery__WEBPACK_IMPORTED_MODULE_4___default().inArray($el.val(), tags) !== -1) {
        $el.prop('checked', true);
      }
    });
  };

  return {
    init: function init() {
      $container = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.src-modal');
      $id = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.src-id', $container);
      $deleteBtn = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.delete', $container);
      $saveBtn = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.save', $container);
      $title = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.src-title', $container);
      $dropzoneForm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#src-media');
      $files = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.document-list', $container);
      $fileTable = jquery__WEBPACK_IMPORTED_MODULE_4___default()('table', $files);
      $floatVal = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.src-float', $container);
      $description = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.src-text', $container);
      $dateCreated = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.date-created', $container);
      $dateUpdated = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.date-updated', $container);
      $loadArchiveBtn = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.load-archive', $container);
      (0,_dropzone__WEBPACK_IMPORTED_MODULE_3__.default)().init();
      (0,_edit_media__WEBPACK_IMPORTED_MODULE_6__.default)().init();
    },
    openEditForm: function openEditForm(archiveRecord) {
      (0,_dropzone__WEBPACK_IMPORTED_MODULE_3__.default)().destroy();
      $dropzoneForm.data('id', archiveRecord.id);
      (0,_dropzone__WEBPACK_IMPORTED_MODULE_3__.default)().init();
      $id.text(archiveRecord.id);
      $title.val(archiveRecord.title);
      $description.val(archiveRecord.description);
      $floatVal.val(parseFloat(archiveRecord.floatVal));
      $dateCreated.text(archiveRecord.createdAt);
      $dateUpdated.text(archiveRecord.updatedAt);
      $loadArchiveBtn.off('click').on('click', function () {
        (0,_archivarius__WEBPACK_IMPORTED_MODULE_8__.default)().download([archiveRecord.id]);
      });
      selectTags(archiveRecord.tags);
      $container.modal();
      $deleteBtn.off('click').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default().ajax('/doc/' + archiveRecord.id, {
          method: 'DELETE'
        }).done(function () {
          (0,_documents__WEBPACK_IMPORTED_MODULE_7__.default)().removeActiveRow();
          $container.modal('hide');
        });
      });
      $saveBtn.off('click').on('click', function () {
        var tags = [];
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tag-item:checkbox:checked', $container).each(function (i) {
          tags[i] = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).val();
        });
        jquery__WEBPACK_IMPORTED_MODULE_4___default().ajax('/doc/' + archiveRecord.id, {
          method: 'PUT',
          data: {
            title: $title.val(),
            description: $description.val(),
            floatVal: $floatVal.val(),
            tags: tags
          }
        }).done(function (archiveRecord) {
          (0,_documents__WEBPACK_IMPORTED_MODULE_7__.default)().removeActiveRow();
          (0,_documents__WEBPACK_IMPORTED_MODULE_7__.default)().addRow(archiveRecord);
          $container.modal('hide');
        });
      });

      if (netTable) {
        netTable.destroy();
      }

      netTable = $fileTable.DataTable({
        paging: false,
        searching: false,
        ordering: false,
        select: true,
        autoWidth: true,
        info: false,
        language: {
          emptyTable: $fileTable.data('text')
        },
        columns: [{
          data: 'docTitle'
        }, {
          data: 'docOrigName'
        }],
        data: archiveRecord.documents
      });
      (0,_dropzone__WEBPACK_IMPORTED_MODULE_3__.default)().destroy();
      $dropzoneForm.data('id', archiveRecord.id);
      (0,_dropzone__WEBPACK_IMPORTED_MODULE_3__.default)().init(function (docInfo) {
        activeRow = netTable.row.add(docInfo);
        activeRow.draw();
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('tbody', $fileTable).off('click').on('click', 'tr', function () {
        activeRow = netTable.row(this);
        var data = activeRow.data();

        if (!data || !data.hasOwnProperty('docTitle')) {
          return;
        }

        $container.modal('hide');
        (0,_edit_media__WEBPACK_IMPORTED_MODULE_6__.default)().show(archiveRecord.id, data, function (action, data) {
          $container.modal();

          if (action === 'delete') {
            activeRow.remove().draw();
          } else if (action === 'update') {
            activeRow.remove();
            activeRow = netTable.row.add(data);
            activeRow.draw();
          } else {
            activeRow = null;
          }
        });
      });
    },
    destroy: function destroy() {
      (0,_edit_media__WEBPACK_IMPORTED_MODULE_6__.default)().destroy();
      (0,_dropzone__WEBPACK_IMPORTED_MODULE_3__.default)().destroy();
      $id.text('');
      $title.val('');
      $saveBtn.off('click');
      $deleteBtn.off('click');
      $dateUpdated.text('');
      $dateCreated.text('');
    }
  };
}

/***/ }),

/***/ "./assets/components/search-chart.js":
/*!*******************************************!*\
  !*** ./assets/components/search-chart.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-tag */ "./assets/components/settings-tag.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




var myChart,
    config,
    $total,
    $isUniqueCheck,
    curData = [];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var updateTotal = function updateTotal(total) {
    $total.text(total.toFixed(2));
  };

  var getTagColor = function getTagColor(tagName) {
    var tags = (0,_settings_tag__WEBPACK_IMPORTED_MODULE_3__.default)().getTags();

    for (var i in tags) {
      if (!tags.hasOwnProperty(i)) {
        continue;
      }

      if (tags[i].title === tagName) {
        return tags[i].color;
      }
    }

    return '#000';
  };

  var reloadChart = function reloadChart(data) {
    var total = 0;
    var isUniqueValueForTag = $isUniqueCheck.is(':checked');
    config.data.datasets = [];
    config.data.labels = [];
    var tags = {};
    var docs = data['documents'];

    for (var i in docs) {
      if (!docs.hasOwnProperty(i)) {
        continue;
      }

      var currentDoc = docs[i];
      var tagList = currentDoc.tags;

      for (var tagKey in tagList) {
        if (!tagList.hasOwnProperty(tagKey)) {
          continue;
        }

        var tagName = tagList[tagKey];

        if (!tags.hasOwnProperty(tagName)) {
          tags[tagName] = {
            floatVal: parseFloat(currentDoc.floatVal),
            title: tagName,
            color: getTagColor(tagName)
          };
        } else {
          var res = parseFloat(tags[tagName].floatVal) + parseFloat(currentDoc.floatVal);
          tags[tagName].floatVal = res.toFixed(2);
        }

        total += currentDoc.floatVal;

        if (isUniqueValueForTag) {
          break;
        }
      }
    }

    updateTotal(total);
    var dataset = {
      label: 'Dataset',
      data: [],
      backgroundColor: []
    };

    for (var _i in tags) {
      if (!tags.hasOwnProperty(_i)) {
        continue;
      }

      var currentTag = tags[_i];
      config.data.labels.push(currentTag.title);
      dataset.data.push(currentTag.floatVal);
      dataset.backgroundColor.push(currentTag.color);
    }

    config.data.datasets.push(dataset);
    myChart.update();
  };

  return {
    init: function init() {
      $total = $('.total-floatvals');
      $isUniqueCheck = $('.aggregate-floatval');
      $isUniqueCheck.change(function () {
        reloadChart(curData);
      });
      var ctx = document.getElementById('searchTagChart').getContext('2d');
      var $ctx = $('#searchTagChart');
      config = {
        type: 'doughnut',
        data: {
          datasets: [],
          labels: []
        },
        options: {
          responsive: true,
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: $ctx.data('text')
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };
      myChart = new Chart(ctx, config);
    },
    updateChart: function updateChart(data) {
      curData = data;
      reloadChart(data);
    },
    destroy: function destroy() {
      config.data.datasets.splice(0, 1);
      myChart.update();
      $isUniqueCheck.off('click');
      updateTotal(0);
    }
  };
}

/***/ }),

/***/ "./assets/components/seeker.js":
/*!*************************************!*\
  !*** ./assets/components/seeker.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _documents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./documents */ "./assets/components/documents.js");
/* harmony import */ var _search_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search-chart */ "./assets/components/search-chart.js");
/* harmony import */ var _archivarius__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./archivarius */ "./assets/components/archivarius.js");












function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var $seekerGroup, $seekerInput, $seekerTags, $searchBtn, $downloadBtn;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var runSeeker = function runSeeker(done) {
    var tags = [];
    jquery__WEBPACK_IMPORTED_MODULE_11___default()($seekerTags).each(function (i) {
      if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).prop('checked')) {
        tags.push(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).val());
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_11___default().ajax($seekerInput.data('url'), {
      method: 'POST',
      data: {
        q: $seekerInput.val(),
        tags: tags
      }
    }).done(function (response) {
      (0,_documents__WEBPACK_IMPORTED_MODULE_12__.default)().loadTable(response);
      (0,_search_chart__WEBPACK_IMPORTED_MODULE_13__.default)().updateChart(response);

      if (done) {
        done(response);
      }
    });
  };

  return {
    init: function init() {
      (0,_documents__WEBPACK_IMPORTED_MODULE_12__.default)().init();
      $seekerGroup = jquery__WEBPACK_IMPORTED_MODULE_11___default()('.seeker-group');
      $seekerInput = jquery__WEBPACK_IMPORTED_MODULE_11___default()('.seeker', $seekerGroup);
      $searchBtn = jquery__WEBPACK_IMPORTED_MODULE_11___default()('.search-btn', $seekerGroup);
      $downloadBtn = jquery__WEBPACK_IMPORTED_MODULE_11___default()('.download-search-results', $seekerGroup);
      $seekerTags = jquery__WEBPACK_IMPORTED_MODULE_11___default()('.tag-item', $seekerGroup);
      $seekerInput.off('keypress').on('keypress', function (e) {
        if (e.which === 13) {
          runSeeker();
        }
      });
      $seekerTags.off('click').on('click', function () {
        runSeeker();
      });
      $searchBtn.off('click').on('click', function () {
        runSeeker();
      });
      $downloadBtn.off('click').on('click', function () {
        runSeeker(function (resources) {
          var ids = [];

          var _iterator = _createForOfIteratorHelper(resources.documents),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var archiveRecord = _step.value;
              ids.push(archiveRecord.id);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (ids.length) {
            (0,_archivarius__WEBPACK_IMPORTED_MODULE_14__.default)().download(ids);
          }
        });
      });
      runSeeker();
    },
    destroy: function destroy() {
      $seekerInput.off('keypress');
      $searchBtn.off('click');
      $seekerTags.off('click');
      (0,_documents__WEBPACK_IMPORTED_MODULE_12__.default)().destroy();
    }
  };
}

/***/ }),

/***/ "./assets/components/settings-config.js":
/*!**********************************************!*\
  !*** ./assets/components/settings-config.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./assets/components/settings.js");


var $container, $projectCheckbox, $usersCheckbox, $settingsContainer;
var $usersTabBtn, $projectsTabBtn;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var sendSettings = function sendSettings() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax('/settings', {
      method: 'PUT',
      data: {
        projects: $projectCheckbox.is(':checked'),
        users: $usersCheckbox.is(':checked')
      }
    }).done(function () {
      (0,_settings__WEBPACK_IMPORTED_MODULE_1__.default)().setReloadOnClose();
    });
  };

  return {
    init: function init() {
      $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.config-settings');
      $projectCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#projects-checkbox', $container);
      $usersCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#users-checkbox', $container);
      $settingsContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.settings-modal');
      $usersTabBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.setting-users-btn', $settingsContainer).closest('.nav-item');
      $projectsTabBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.setting-projects-btn', $settingsContainer).closest('.nav-item');
      $projectCheckbox.off('change').on('change', function () {
        var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':checked');

        if (isActive) {
          $projectsTabBtn.show();
        } else {
          $projectsTabBtn.hide();
        }

        sendSettings();
      });
      $usersCheckbox.off('change').on('change', function () {
        var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':checked');

        if (isActive) {
          $usersTabBtn.show();
        } else {
          $usersTabBtn.hide();
        }

        sendSettings();
      });
    },
    destroy: function destroy() {
      $projectCheckbox.off('change');
      $usersCheckbox.off('change');
    }
  };
}

/***/ }),

/***/ "./assets/components/settings-projects.js":
/*!************************************************!*\
  !*** ./assets/components/settings-projects.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var $container, $addForm;
var $addBtn,
    $color,
    $title,
    $type,
    $isPrimary,
    currentType = 'finance',
    $typeListGroup;
var $listGroup, $tabContent;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var addProjectList = function addProjectList(project) {
    var $a = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<a>');
    $a.addClass('list-group-item');
    $a.addClass('list-group-item-action');
    $a.attr('id', "list-".concat(project.id));
    $a.data('toggle', 'list');
    $a.attr('role', 'tab');
    $a.attr('aria-controls', project.id);
    $a.text(project.title);
    $a.on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.list-group-item-action.active', $listGroup).removeClass('.active');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.tab-pane.show', $tabContent).removeClass('.show');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.tab-pane.active', $tabContent).removeClass('.active');
      var $content = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#".concat(project.id));
      $content.addClass('show');
      $content.addClass('active');
    });
    $a.prependTo($listGroup);
  };

  var addProjectContent = function addProjectContent(project) {
    var $div = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div>');
    $div.addClass('tab-pane');
    $div.addClass('fade');
    $div.attr('id', project.id);
    $div.attr('role', 'tabpanel');
    $div.attr('aria-labelledby', "list-".concat(project.id));
    $div.text('test');
    $div.appendTo($tabContent);
  };

  var addProject = function addProject(project) {
    addProjectList(project);
    addProjectContent(project);
  };

  var loadProjects = function loadProjects() {
    jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax('/projects', {
      method: 'GET'
    }).done(function (response) {
      response.projects.forEach(function (project) {
        addProject(project);
      });
    });
  };

  var createProject = function createProject() {
    jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax('/projects', {
      method: 'POST',
      data: {
        color: $color.val(),
        title: $title.val(),
        type: currentType,
        primary: $isPrimary.is(':checked') ? 1 : 0
      }
    }).done(function (response) {
      console.log(response);
    });
  };

  var attachAddForm = function attachAddForm() {
    $addBtn = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.button-add', $addForm);
    $addBtn.off('click').on('click', function () {
      createProject();
    });
    $color = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.color', $addForm);
    $title = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.title', $addForm);
    $type = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.type', $addForm);
    $typeListGroup = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.list-group-item', $type);
    $typeListGroup.off('click').on('click', function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.list-group-item', $type).removeClass('active');
      var $el = jquery__WEBPACK_IMPORTED_MODULE_2___default()(e.target);
      $el.addClass('active');
      currentType = $el.hasClass('finance') ? 'finance' : 'documents';
    });
    $isPrimary = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.primary', $addForm);
  };

  var detachAddForm = function detachAddForm() {
    $addBtn.off('click');
    $typeListGroup.off('click');
  };

  var attachAddList = function attachAddList() {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#list-new-project').off('click').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.list-group-item-action.active', $listGroup).removeClass('.active');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.tab-pane.show', $tabContent).removeClass('.show');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.tab-pane.active', $tabContent).removeClass('.active');
      var $content = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#new-project");
      $content.addClass('show');
      $content.addClass('active');
    });
  };

  var initAddProject = function initAddProject() {
    attachAddList();
    attachAddForm();
  };

  return {
    init: function init() {
      $container = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.projects-tab');
      $addForm = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.add-form', $container);
      $listGroup = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.projects-list-group', $container);
      $tabContent = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.projects-tab-content', $container);
      initAddProject();
      loadProjects();
    },
    destroy: function destroy() {
      detachAddForm();
    }
  };
}

/***/ }),

/***/ "./assets/components/settings-tag.js":
/*!*******************************************!*\
  !*** ./assets/components/settings-tag.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./assets/components/settings.js");



var $container, $title, $table, $save, $color, netTable, $tagsList;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var addToTable = function addToTable(tag) {
    var activeRow = netTable.row.add(tag);
    activeRow.draw();
  };

  var addTag = function addTag() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax('/tags', {
      method: 'POST',
      data: {
        title: $title.val(),
        color: $color.val()
      }
    }).done(function (tag) {
      (0,_settings__WEBPACK_IMPORTED_MODULE_2__.default)().setReloadOnClose();
      addToTable(tag);
      $title.val('');
    });
  };

  var loadTable = function loadTable() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax('/tags', {
      method: 'GET'
    }).done(function (resp) {
      if (!netTable) {
        console.log(resp);
        netTable = $table.DataTable({
          paging: false,
          searching: false,
          ordering: false,
          select: true,
          autoWidth: true,
          info: false,
          language: {
            emptyTable: $table.data('text')
          },
          columns: [{
            data: 'title'
          }, {
            data: 'color'
          }, {
            render: function render(data, type, row, meta) {
              return "<span style=\"color: ".concat(row.color, "\">&block;</span>");
            }
          }],
          data: resp.tags
        });
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('tbody', $table).on('click', 'tr', function () {
        var activeRow = netTable.row(this);
        var data = activeRow.data();

        if (data && confirm($table.data('delete'))) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax('/tags', {
            method: 'DELETE',
            data: {
              'title': data.title
            }
          }).done(function () {
            (0,_settings__WEBPACK_IMPORTED_MODULE_2__.default)().setReloadOnClose();
            activeRow.remove().draw();
          });
        }
      });
      $save.off('click').on('click', function () {
        addTag();
      });
    });
  };

  return {
    init: function init() {
      $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.add-tag-form');
      $title = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tag-name', $container);
      $color = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.color', $container);
      $save = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.button-add-tag', $container);
      $tagsList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tags-list');
      $table = jquery__WEBPACK_IMPORTED_MODULE_0___default()('table', $tagsList);
      loadTable();
    },
    getTags: function getTags() {
      return netTable.data();
    },
    destroy: function destroy() {
      $title.val('');
      $color.val('');
      $table.hide();
      $save.off('click');
    }
  };
}

/***/ }),

/***/ "./assets/components/settings.js":
/*!***************************************!*\
  !*** ./assets/components/settings.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-config */ "./assets/components/settings-config.js");
/* harmony import */ var _settings_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-projects */ "./assets/components/settings-projects.js");



var $btn, $container;
var $tagsTabBtn, $usersTabBtn, $projectsTabBtn, $configTabBtn;
var $tagsSection, $usersSection, $projectsSection, $configSection;
var requireReload = false;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var setActiveTab = function setActiveTab(tabName) {
    $tagsTabBtn.removeClass('active');
    $usersTabBtn.removeClass('active');
    $projectsTabBtn.removeClass('active');
    $configTabBtn.removeClass('active');
    $tagsSection.hide();
    $usersSection.hide();
    $projectsSection.hide();
    $configSection.hide();

    switch (tabName) {
      case 'tags':
        $tagsTabBtn.addClass('active');
        $tagsSection.show();
        break;

      case 'users':
        $usersTabBtn.addClass('active');
        $usersSection.show();
        break;

      case 'projects':
        $projectsTabBtn.addClass('active');
        $projectsSection.show();
        break;

      case 'config':
        $configTabBtn.addClass('active');
        $configSection.show();
    }
  };

  return {
    init: function init() {
      $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.settings');
      $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.settings-modal');
      $container.on('hide.bs.modal', function () {
        if (requireReload) {
          location.reload();
        }
      });
      $btn.off('click').on('click', function () {
        $container.modal();
      });
      $tagsSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tag-settings', $container);
      $usersSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.users-settings', $container);
      $projectsSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.project-settings', $container);
      $configSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.config-settings', $container);
      $tagsTabBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.setting-tags-btn', $container);
      $tagsTabBtn.off('click').on('click', function () {
        setActiveTab('tags');
      });
      $usersTabBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.setting-users-btn', $container);
      $usersTabBtn.off('click').on('click', function () {
        setActiveTab('users');
      });
      $projectsTabBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.setting-projects-btn', $container);
      $projectsTabBtn.off('click').on('click', function () {
        setActiveTab('projects');
      });
      $configTabBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.setting-config-btn', $container);
      $configTabBtn.off('click').on('click', function () {
        setActiveTab('config');
      });
      setActiveTab('tags');
      (0,_settings_config__WEBPACK_IMPORTED_MODULE_1__.default)().init();
      (0,_settings_projects__WEBPACK_IMPORTED_MODULE_2__.default)().init();
    },
    setReloadOnClose: function setReloadOnClose() {
      requireReload = true;
    },
    destroy: function destroy() {
      $btn.off('click');
      setActiveTab('tags');
      $projectsTabBtn.off('click');
      $usersTabBtn.off('click');
      $tagsTabBtn.off('click');
      (0,_settings_config__WEBPACK_IMPORTED_MODULE_1__.default)().destroy();
      (0,_settings_projects__WEBPACK_IMPORTED_MODULE_2__.default)().destroy();
    }
  };
}

/***/ }),

/***/ "./assets/controllers/dashboard_controller.js":
/*!****************************************************!*\
  !*** ./assets/controllers/dashboard_controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_seeker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/seeker */ "./assets/components/seeker.js");
/* harmony import */ var _components_create_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/create-button */ "./assets/components/create-button.js");
/* harmony import */ var _components_edit_record__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/edit-record */ "./assets/components/edit-record.js");
/* harmony import */ var _components_settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/settings */ "./assets/components/settings.js");
/* harmony import */ var _components_search_chart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/search-chart */ "./assets/components/search-chart.js");
/* harmony import */ var _components_settings_tag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/settings-tag */ "./assets/components/settings-tag.js");
/* harmony import */ var _components_donut__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/donut */ "./assets/components/donut.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      (0,_components_settings_tag__WEBPACK_IMPORTED_MODULE_20__.default)().init();
      (0,_components_settings__WEBPACK_IMPORTED_MODULE_18__.default)().init();
      (0,_components_edit_record__WEBPACK_IMPORTED_MODULE_17__.default)().init();
      (0,_components_seeker__WEBPACK_IMPORTED_MODULE_15__.default)().init();
      (0,_components_create_button__WEBPACK_IMPORTED_MODULE_16__.default)().init();
      (0,_components_search_chart__WEBPACK_IMPORTED_MODULE_19__.default)().init();
      (0,_components_donut__WEBPACK_IMPORTED_MODULE_21__.default)().init();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      (0,_components_settings_tag__WEBPACK_IMPORTED_MODULE_20__.default)().destroy();
      (0,_components_settings__WEBPACK_IMPORTED_MODULE_18__.default)().destroy();
      (0,_components_edit_record__WEBPACK_IMPORTED_MODULE_17__.default)().destroy();
      (0,_components_seeker__WEBPACK_IMPORTED_MODULE_15__.default)().destroy();
      (0,_components_create_button__WEBPACK_IMPORTED_MODULE_16__.default)().destroy();
      (0,_components_search_chart__WEBPACK_IMPORTED_MODULE_19__.default)().destroy();
      (0,_components_donut__WEBPACK_IMPORTED_MODULE_21__.default)().destroy();
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/controllers/hello_controller.js":
/*!************************************************!*\
  !*** ./assets/controllers/hello_controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-chartjs_di-330e73"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL3Zhci93d3cvaHRtbC9hc3NldHMvY29udHJvbGxlcnN8c3luY3wvXFwuKGp8dClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXJjaGl2YXJpdXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY3JlYXRlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9kb2N1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZG9udXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZHJvcHpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZWRpdC1tZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9lZGl0LXJlY29yZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zZWFyY2gtY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvc2Vla2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3NldHRpbmdzLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zZXR0aW5ncy1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zZXR0aW5ncy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Rhc2hib2FyZF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy92YXIvd3d3L2h0bWwvbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGV8c3luY3wvXlxcLlxcLy4qJC8iXSwibmFtZXMiOlsiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiLCJkb3dubG9hZCIsImFyY2hpdmVJZHMiLCJmYWtlRm9ybUh0bWxGcmFnbWVudCIsImkiLCIkZmFrZUZvcm1Eb20iLCIkIiwiYXBwZW5kIiwic3VibWl0IiwiJGNyZWF0ZUJ0biIsImluaXQiLCJvZmYiLCJvbiIsInVybCIsImRhdGEiLCJkb25lIiwiYXJjaGl2ZVJlY29yZCIsImRvY3VtZW50cyIsImFkZFJlY29yZCIsImRlc3Ryb3kiLCIkY29udGFpbmVyIiwiJHNwaW5uZXIiLCIkZm91bmRDb3VudCIsIiRmb3VuZENvdW50Q250IiwiJHRhYmxlIiwibmV0VGFibGUiLCJhY3RpdmVSb3ciLCIkZm91bmRGbG9hdFZhbHMiLCJ0b3RhbEZsb2F0VmFsIiwibG9hZFRhYmxlIiwiaGlkZSIsInRleHQiLCJjb3VudCIsInNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsImZsb2F0VmFsIiwidG9GaXhlZCIsIkRhdGFUYWJsZSIsInBhZ2luZyIsInNlYXJjaGluZyIsIm9yZGVyaW5nIiwic2VsZWN0IiwiYXV0b1dpZHRoIiwiaW5mbyIsImxhbmd1YWdlIiwiZW1wdHlUYWJsZSIsImNvbHVtbnMiLCJyb3ciLCJlZGl0UmVjb3JkIiwib3BlbkVkaXRGb3JtIiwiY2xlYXIiLCJkcmF3Iiwicm93cyIsImFkZCIsImFkZFJvdyIsImNvdW50VmFsIiwicGFyc2VJbnQiLCJyZW1vdmVBY3RpdmVSb3ciLCJyZW1vdmUiLCIkY2hhcnRCdG4iLCJtb2RhbCIsIkRyb3B6b25lIiwiZHoiLCJzdGF0ZSIsIm9uQWRkZWQiLCIkZWwiLCJmb3JtRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaWN0RGVmYXVsdE1lc3NhZ2UiLCJwYXJhbXMiLCJpZCIsImYiLCJyIiwiY29uc29sZSIsImxvZyIsIiR0aXRsZSIsIiRkb3dubG9hZCIsIiRyZW1vdmUiLCIkb3JpZ05hbWUiLCJkZWxldGVPbkNsb3NlIiwiJHNhdmUiLCJhZGRPbkNsb3NlIiwiYXJjaGl2ZUlkIiwibWVkaWEiLCJvbkNsb3NlIiwidmFsIiwiZG9jVGl0bGUiLCJkb2NPcmlnTmFtZSIsImFjdGlvbk9uQ2xvc2UiLCJkb2NQYXRoIiwicmVwbGFjZSIsIm1ldGhvZCIsInBhdGgiLCJ0aXRsZSIsImRvY0luZm8iLCIkaWQiLCIkZHJvcHpvbmVGb3JtIiwiJGZpbGVzIiwiJGZpbGVUYWJsZSIsIiRkZWxldGVCdG4iLCIkc2F2ZUJ0biIsIiRmbG9hdFZhbCIsIiRkZXNjcmlwdGlvbiIsIiRkYXRlVXBkYXRlZCIsIiRkYXRlQ3JlYXRlZCIsIiRsb2FkQXJjaGl2ZUJ0biIsInNlbGVjdFRhZ3MiLCJ0YWdzIiwiZWFjaCIsInByb3AiLCJkcm9wem9uZSIsImVkaXRNZWRpYSIsImRlc2NyaXB0aW9uIiwicGFyc2VGbG9hdCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImFyY2hpdmFyaXVzIiwiYWN0aW9uIiwibXlDaGFydCIsImNvbmZpZyIsIiR0b3RhbCIsIiRpc1VuaXF1ZUNoZWNrIiwiY3VyRGF0YSIsInVwZGF0ZVRvdGFsIiwidG90YWwiLCJnZXRUYWdDb2xvciIsInRhZ05hbWUiLCJ0YWdTZXR0aW5ncyIsImdldFRhZ3MiLCJjb2xvciIsInJlbG9hZENoYXJ0IiwiaXNVbmlxdWVWYWx1ZUZvclRhZyIsImlzIiwiZGF0YXNldHMiLCJsYWJlbHMiLCJkb2NzIiwiY3VycmVudERvYyIsInRhZ0xpc3QiLCJ0YWdLZXkiLCJyZXMiLCJkYXRhc2V0IiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJyZW50VGFnIiwicHVzaCIsInVwZGF0ZSIsImNoYW5nZSIsImN0eCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIiRjdHgiLCJ0eXBlIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJhbmltYXRlU2NhbGUiLCJhbmltYXRlUm90YXRlIiwiQ2hhcnQiLCJ1cGRhdGVDaGFydCIsInNwbGljZSIsIiRzZWVrZXJHcm91cCIsIiRzZWVrZXJJbnB1dCIsIiRzZWVrZXJUYWdzIiwiJHNlYXJjaEJ0biIsIiRkb3dubG9hZEJ0biIsInJ1blNlZWtlciIsInEiLCJyZXNwb25zZSIsInNlYXJjaENoYXJ0IiwiZSIsIndoaWNoIiwicmVzb3VyY2VzIiwiaWRzIiwibGVuZ3RoIiwiJHByb2plY3RDaGVja2JveCIsIiR1c2Vyc0NoZWNrYm94IiwiJHNldHRpbmdzQ29udGFpbmVyIiwiJHVzZXJzVGFiQnRuIiwiJHByb2plY3RzVGFiQnRuIiwic2VuZFNldHRpbmdzIiwicHJvamVjdHMiLCJ1c2VycyIsInNldHRpbmdzIiwic2V0UmVsb2FkT25DbG9zZSIsImNsb3Nlc3QiLCJpc0FjdGl2ZSIsIiRhZGRGb3JtIiwiJGFkZEJ0biIsIiRjb2xvciIsIiR0eXBlIiwiJGlzUHJpbWFyeSIsImN1cnJlbnRUeXBlIiwiJHR5cGVMaXN0R3JvdXAiLCIkbGlzdEdyb3VwIiwiJHRhYkNvbnRlbnQiLCJhZGRQcm9qZWN0TGlzdCIsInByb2plY3QiLCIkYSIsImFkZENsYXNzIiwiYXR0ciIsInJlbW92ZUNsYXNzIiwiJGNvbnRlbnQiLCJwcmVwZW5kVG8iLCJhZGRQcm9qZWN0Q29udGVudCIsIiRkaXYiLCJhcHBlbmRUbyIsImFkZFByb2plY3QiLCJsb2FkUHJvamVjdHMiLCJmb3JFYWNoIiwiY3JlYXRlUHJvamVjdCIsInByaW1hcnkiLCJhdHRhY2hBZGRGb3JtIiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJkZXRhY2hBZGRGb3JtIiwiYXR0YWNoQWRkTGlzdCIsImluaXRBZGRQcm9qZWN0IiwiJHRhZ3NMaXN0IiwiYWRkVG9UYWJsZSIsInRhZyIsImFkZFRhZyIsInJlc3AiLCJyZW5kZXIiLCJtZXRhIiwiY29uZmlybSIsIiRidG4iLCIkdGFnc1RhYkJ0biIsIiRjb25maWdUYWJCdG4iLCIkdGFnc1NlY3Rpb24iLCIkdXNlcnNTZWN0aW9uIiwiJHByb2plY3RzU2VjdGlvbiIsIiRjb25maWdTZWN0aW9uIiwicmVxdWlyZVJlbG9hZCIsInNldEFjdGl2ZVRhYiIsInRhYk5hbWUiLCJsb2NhdGlvbiIsInJlbG9hZCIsInNldHRpbmdzQ29uZmlnIiwic2V0dGluZ3NQcm9qZWN0cyIsInNlZWtlciIsImNyZWF0ZUJ0biIsImRvbnV0IiwiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkEsaUVBQWU7QUFDZixnQ0FBZ0MsaU1BQTJFO0FBQzNHLDRCQUE0QiwyTEFBd0U7QUFDcEcsQ0FBQyxFOzs7Ozs7Ozs7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ1JBOztBQUNPLElBQU1BLEdBQUcsR0FBR0MsMEVBQWdCLENBQUNDLHVFQUFELENBQTVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBRUEsNkJBQWUsc0NBQVk7QUFDdkIsU0FBTztBQUNIQyxZQUFRLEVBQUUsa0JBQVVDLFVBQVYsRUFBc0I7QUFDNUIsVUFBSUMsb0JBQW9CLEdBQUcsbUVBQTNCOztBQUQ0QixpREFFZEQsVUFGYztBQUFBOztBQUFBO0FBRTVCLDREQUEwQjtBQUFBLGNBQWpCRSxDQUFpQjtBQUN0QkQsOEJBQW9CLElBQUksNkNBQTZDQyxDQUE3QyxHQUFpRCxJQUF6RTtBQUNIO0FBSjJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9kYXNoYm9hcmRfY29udHJvbGxlci5qc1wiOiBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzL2Rhc2hib2FyZF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWNoYXJ0anMtLWNoYXJ0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LWNoYXJ0anMvZGlzdC9jb250cm9sbGVyLmpzJyksXG4gICdzeW1mb255LS11eC1zd3VwLS1zd3VwJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXN3dXAvZGlzdC9jb250cm9sbGVyLmpzJyksXG59OyIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KCcuL2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRvd25sb2FkOiBmdW5jdGlvbiAoYXJjaGl2ZUlkcykge1xuICAgICAgICAgICAgbGV0IGZha2VGb3JtSHRtbEZyYWdtZW50ID0gXCI8Zm9ybSBzdHlsZT0nZGlzcGxheTogbm9uZTsnIG1ldGhvZD0nUE9TVCcgYWN0aW9uPScvZG9jL2FyY2hpdmUnPlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBvZiBhcmNoaXZlSWRzKSB7XG4gICAgICAgICAgICAgICAgZmFrZUZvcm1IdG1sRnJhZ21lbnQgKz0gXCI8aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPSdpZFtdJyB2YWx1ZT0nXCIgKyBpICsgXCInPlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmFrZUZvcm1IdG1sRnJhZ21lbnQgKz0gXCI8L2Zvcm0+XCI7XG4gICAgICAgICAgICBjb25zdCAkZmFrZUZvcm1Eb20gPSAkKGZha2VGb3JtSHRtbEZyYWdtZW50KTtcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmFwcGVuZCgkZmFrZUZvcm1Eb20pO1xuICAgICAgICAgICAgJGZha2VGb3JtRG9tLnN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn0iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGRvY3VtZW50cyBmcm9tIFwiLi9kb2N1bWVudHNcIjtcblxubGV0ICRjcmVhdGVCdG47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRjcmVhdGVCdG4gPSAkKCcuY3JlYXRlLWJ0bicpO1xuICAgICAgICAgICAgJGNyZWF0ZUJ0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJCh0aGlzKS5kYXRhKCdocmVmJylcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChhcmNoaXZlUmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50cygpLmFkZFJlY29yZChhcmNoaXZlUmVjb3JkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkY3JlYXRlQnRuLm9mZignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1iczQnO1xuaW1wb3J0IGVkaXRSZWNvcmQgZnJvbSAnLi9lZGl0LXJlY29yZCc7XG5cbmxldCAkY29udGFpbmVyLCAkc3Bpbm5lciwgJGZvdW5kQ291bnQsICRmb3VuZENvdW50Q250LCAkdGFibGUsIG5ldFRhYmxlLCBhY3RpdmVSb3csICRmb3VuZEZsb2F0VmFscywgdG90YWxGbG9hdFZhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRjb250YWluZXIgPSAkKCcuZG9jdW1lbnRzLXRhYmxlJyk7XG4gICAgICAgICAgICAkc3Bpbm5lciA9ICQoJy5zcGlubmVyLWJvcmRlcicsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJGZvdW5kQ291bnQgPSAkKCcuZm91bmQtY291bnQnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRmb3VuZENvdW50Q250ID0gJCgnLmNudCcsICRmb3VuZENvdW50KTtcbiAgICAgICAgICAgICRmb3VuZEZsb2F0VmFscyA9ICQoJy5hbW91bnQtZnYnKTtcbiAgICAgICAgICAgICR0YWJsZSA9ICQoJ3RhYmxlJywgJGNvbnRhaW5lcik7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRUYWJsZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICRzcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgICRmb3VuZENvdW50Q250LnRleHQoZGF0YS5jb3VudCk7XG4gICAgICAgICAgICAkZm91bmRDb3VudC5zaG93KCk7XG5cbiAgICAgICAgICAgIHRvdGFsRmxvYXRWYWwgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhLmRvY3VtZW50cykge1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5kb2N1bWVudHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvdGFsRmxvYXRWYWwgKz0gZGF0YS5kb2N1bWVudHNbaV0uZmxvYXRWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkZm91bmRGbG9hdFZhbHMudGV4dCh0b3RhbEZsb2F0VmFsLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgaWYgKCFuZXRUYWJsZSkge1xuICAgICAgICAgICAgICAgIG5ldFRhYmxlID0gJHRhYmxlLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGluZm86IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlUYWJsZTogJHRhYmxlLmRhdGEoJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YTogJ3RpdGxlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YTogJ3RhZ3MnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhOiAnZmxvYXRWYWwnfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YS5kb2N1bWVudHMsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCd0Ym9keScsICR0YWJsZSkub24oJ2NsaWNrJywgJ3RyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVSb3cgPSBuZXRUYWJsZS5yb3codGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3RpdmVSb3cuZGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFJlY29yZCgpLm9wZW5FZGl0Rm9ybShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHRhYmxlLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV0VGFibGUuY2xlYXIoKS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgbmV0VGFibGUucm93cy5hZGQoZGF0YS5kb2N1bWVudHMpO1xuICAgICAgICAgICAgICAgIG5ldFRhYmxlLmRyYXcoKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVSb3cgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhZGRSb3c6IGZ1bmN0aW9uKGFyY2hpdmVSZWNvcmQpIHtcbiAgICAgICAgICAgIC8vIHRvdGFsIGNvdW50XG4gICAgICAgICAgICBsZXQgY291bnRWYWwgPSBwYXJzZUludCgkZm91bmRDb3VudENudC50ZXh0KCkpO1xuICAgICAgICAgICAgJGZvdW5kQ291bnRDbnQudGV4dCgrK2NvdW50VmFsKTtcbiAgICAgICAgICAgIC8vIHRvdGFsIHZhbHVlXG4gICAgICAgICAgICB0b3RhbEZsb2F0VmFsICs9IGFyY2hpdmVSZWNvcmQuZmxvYXRWYWw7XG4gICAgICAgICAgICAkZm91bmRGbG9hdFZhbHMudGV4dCh0b3RhbEZsb2F0VmFsLnRvRml4ZWQoMikpO1xuXG4gICAgICAgICAgICBhY3RpdmVSb3cgPSBuZXRUYWJsZS5yb3cuYWRkKCBhcmNoaXZlUmVjb3JkICk7XG4gICAgICAgICAgICBhY3RpdmVSb3cuZHJhdygpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRSZWNvcmQ6IGZ1bmN0aW9uKGFyY2hpdmVSZWNvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUm93KGFyY2hpdmVSZWNvcmQpO1xuICAgICAgICAgICAgZWRpdFJlY29yZCgpLm9wZW5FZGl0Rm9ybShhcmNoaXZlUmVjb3JkKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQWN0aXZlUm93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgY291bnRWYWwgPSBwYXJzZUludCgkZm91bmRDb3VudENudC50ZXh0KCkpO1xuICAgICAgICAgICAgJGZvdW5kQ291bnRDbnQudGV4dCgtLWNvdW50VmFsKTtcblxuICAgICAgICAgICAgdG90YWxGbG9hdFZhbCAtPSBhY3RpdmVSb3cuZGF0YSgpLmZsb2F0VmFsO1xuICAgICAgICAgICAgJGZvdW5kRmxvYXRWYWxzLnRleHQodG90YWxGbG9hdFZhbC50b0ZpeGVkKDIpKTtcblxuICAgICAgICAgICAgYWN0aXZlUm93LnJlbW92ZSgpLmRyYXcoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHNwaW5uZXIuc2hvdygpO1xuICAgICAgICAgICAgJGZvdW5kQ291bnQuaGlkZSgpO1xuICAgICAgICAgICAgJGZvdW5kQ291bnRDbnQudGV4dCgnMCcpO1xuICAgICAgICAgICAgJHRhYmxlLmhpZGUoKTtcbiAgICAgICAgICAgICRmb3VuZEZsb2F0VmFscy50ZXh0KCcwJylcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxubGV0ICRjaGFydEJ0biwgJGNvbnRhaW5lcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRjaGFydEJ0biA9ICQoJy5jaGFydC1idG4nKTtcclxuICAgICAgICAgICAgJGNvbnRhaW5lciA9ICQoJy5jaGFydC1tb2RhbCcpO1xyXG4gICAgICAgICAgICAkY2hhcnRCdG4ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIubW9kYWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRjaGFydEJ0bi5vZmYoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XG5Ecm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcbmltcG9ydCAnZHJvcHpvbmUvZGlzdC9kcm9wem9uZS5jc3MnXG5cbmxldCBkeiwgc3RhdGUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKG9uQWRkZWQpIHtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSAkKCcjc3JjLW1lZGlhJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3B6b25lJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFmb3JtRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkeiA9IG5ldyBEcm9wem9uZShmb3JtRWwsIHtcbiAgICAgICAgICAgICAgICAgICAgZGljdERlZmF1bHRNZXNzYWdlOiAkZWwuZGF0YSgndGV4dCcpLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkZWwuZGF0YSgnaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGR6Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChmLCByKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGYsIHIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGR6Lm9uKCdzdWNjZXNzJywgZnVuY3Rpb24gKGYsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVkaXJlY3QgdG8gbmV3IHIgaWYgYWxyZWFkeSBub3QgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgb25BZGRlZChyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZHouZGVzdHJveSgpO1xuICAgICAgICAgICAgc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxubGV0ICRjb250YWluZXIsICR0aXRsZSwgJGRvd25sb2FkLCAkcmVtb3ZlLCAkb3JpZ05hbWUsIGRlbGV0ZU9uQ2xvc2UsICRzYXZlLCBhZGRPbkNsb3NlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRjb250YWluZXIgPSAkKCcuZmlsZS1tb2RhbCcpO1xuICAgICAgICAgICAgJHRpdGxlID0gJCgnLnNyYy10aXRsZScsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJG9yaWdOYW1lID0gJCgnLnNyYy1pZCcsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJGRvd25sb2FkID0gJCgnLmxvYWQtbWVkaWEnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRyZW1vdmUgPSAkKCcuZGVsZXRlLW1lZGlhJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkc2F2ZSA9ICQoJy5zYXZlLW1lZGlhJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICBkZWxldGVPbkNsb3NlID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChhcmNoaXZlSWQsIG1lZGlhLCBvbkNsb3NlKSB7XG4gICAgICAgICAgICAkdGl0bGUudmFsKG1lZGlhLmRvY1RpdGxlKTtcbiAgICAgICAgICAgICRvcmlnTmFtZS50ZXh0KG1lZGlhLmRvY09yaWdOYW1lKTtcbiAgICAgICAgICAgICRjb250YWluZXJcbiAgICAgICAgICAgICAgICAub2ZmKCdoaWRkZW4uYnMubW9kYWwnKVxuICAgICAgICAgICAgICAgIC5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uT25DbG9zZSA9IGRlbGV0ZU9uQ2xvc2UgPT09IHRydWUgPyAnZGVsZXRlJyA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGRPbkNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25PbkNsb3NlID0gJ3VwZGF0ZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZShhY3Rpb25PbkNsb3NlLCBhZGRPbkNsb3NlKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlT25DbG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBhZGRPbkNsb3NlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubW9kYWwoKTtcbiAgICAgICAgICAgICRkb3dubG9hZFxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrJylcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmFrZUZvcm1IdG1sRnJhZ21lbnQgPSBcIjxmb3JtIHN0eWxlPSdkaXNwbGF5OiBub25lOycgbWV0aG9kPSdQT1NUJyBhY3Rpb249Jy9kb2MvZ2V0X21lZGlhJz5cIjtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUZvcm1IdG1sRnJhZ21lbnQgKz0gXCI8aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPSdpZCcgdmFsdWU9J1wiK2FyY2hpdmVJZCtcIic+XCI7XG4gICAgICAgICAgICAgICAgICAgIGZha2VGb3JtSHRtbEZyYWdtZW50ICs9IFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0ncGF0aCcgdmFsdWU9J1wiK21lZGlhLmRvY1BhdGgucmVwbGFjZShcIlxcXFxcIiwgXCJcXFxcXFxcXFwiKS5yZXBsYWNlKFwiJ1wiLCBcIlxcJ1wiKStcIic+XCI7XG4gICAgICAgICAgICAgICAgICAgIGZha2VGb3JtSHRtbEZyYWdtZW50ICs9IFwiPC9mb3JtPlwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZmFrZUZvcm1Eb20gPSAkKGZha2VGb3JtSHRtbEZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgJChcImJvZHlcIikuYXBwZW5kKCRmYWtlRm9ybURvbSk7XG4gICAgICAgICAgICAgICAgICAgICRmYWtlRm9ybURvbS5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRyZW1vdmVcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljaycpXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KCcvZG9jL21lZGlhJyx7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhcmNoaXZlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogbWVkaWEuZG9jUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVPbkNsb3NlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250YWluZXIubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkc2F2ZVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrJylcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoJy9kb2MvbWVkaWEnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhcmNoaXZlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogbWVkaWEuZG9jUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJHRpdGxlLnZhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRvY0luZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE9uQ2xvc2UgPSBkb2NJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICR0aXRsZS52YWwoJycpO1xuICAgICAgICAgICAgJG9yaWdOYW1lLnRleHQoJycpO1xuICAgICAgICAgICAgJGRvd25sb2FkLmRhdGEoJ3BhdGgnLCAnJyk7XG4gICAgICAgICAgICAkcmVtb3ZlLmRhdGEoJ3BhdGgnLCAnJyk7XG4gICAgICAgICAgICBhZGRPbkNsb3NlID0gZmFsc2U7XG4gICAgICAgICAgICBkZWxldGVPbkNsb3NlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IGRyb3B6b25lIGZyb20gXCIuL2Ryb3B6b25lXCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0LWJzNCc7XG5pbXBvcnQgZWRpdE1lZGlhIGZyb20gJy4vZWRpdC1tZWRpYSdcbmltcG9ydCBkb2N1bWVudHMgZnJvbSBcIi4vZG9jdW1lbnRzXCI7XG5pbXBvcnQgYXJjaGl2YXJpdXMgZnJvbSBcIi4vYXJjaGl2YXJpdXNcIjtcblxubGV0ICRjb250YWluZXIsICR0aXRsZSwgJGlkLCAkZHJvcHpvbmVGb3JtLCAkZmlsZXMsICRmaWxlVGFibGUsIG5ldFRhYmxlLCAkZGVsZXRlQnRuLCAkc2F2ZUJ0biwgYWN0aXZlUm93LCAkZmxvYXRWYWwsICRkZXNjcmlwdGlvbjtcbmxldCAkZGF0ZVVwZGF0ZWQsICRkYXRlQ3JlYXRlZCwgJGxvYWRBcmNoaXZlQnRuO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHNlbGVjdFRhZ3MgPSBmdW5jdGlvbiAodGFncykge1xuXG4gICAgICAgICQoJy50YWctaXRlbScsICRjb250YWluZXIpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAkZWwucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICgkLmluQXJyYXkoJGVsLnZhbCgpLCB0YWdzKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkZWwucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkY29udGFpbmVyID0gJCgnLnNyYy1tb2RhbCcpO1xuICAgICAgICAgICAgJGlkID0gJCgnLnNyYy1pZCcsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJGRlbGV0ZUJ0biA9ICQoJy5kZWxldGUnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRzYXZlQnRuID0gJCgnLnNhdmUnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICR0aXRsZSA9ICQoJy5zcmMtdGl0bGUnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRkcm9wem9uZUZvcm0gPSAkKCcjc3JjLW1lZGlhJyk7XG4gICAgICAgICAgICAkZmlsZXMgPSAkKCcuZG9jdW1lbnQtbGlzdCcsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJGZpbGVUYWJsZSA9ICQoJ3RhYmxlJywgJGZpbGVzKTtcbiAgICAgICAgICAgICRmbG9hdFZhbCA9ICQoJy5zcmMtZmxvYXQnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRkZXNjcmlwdGlvbiA9ICQoJy5zcmMtdGV4dCcsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJGRhdGVDcmVhdGVkID0gJCgnLmRhdGUtY3JlYXRlZCcsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJGRhdGVVcGRhdGVkID0gJCgnLmRhdGUtdXBkYXRlZCcsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJGxvYWRBcmNoaXZlQnRuID0gJCgnLmxvYWQtYXJjaGl2ZScsICRjb250YWluZXIpO1xuICAgICAgICAgICAgZHJvcHpvbmUoKS5pbml0KCk7XG4gICAgICAgICAgICBlZGl0TWVkaWEoKS5pbml0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5FZGl0Rm9ybTogZnVuY3Rpb24gKGFyY2hpdmVSZWNvcmQpIHtcbiAgICAgICAgICAgIGRyb3B6b25lKCkuZGVzdHJveSgpO1xuICAgICAgICAgICAgJGRyb3B6b25lRm9ybS5kYXRhKCdpZCcsIGFyY2hpdmVSZWNvcmQuaWQpO1xuICAgICAgICAgICAgZHJvcHpvbmUoKS5pbml0KCk7XG4gICAgICAgICAgICAkaWQudGV4dChhcmNoaXZlUmVjb3JkLmlkKTtcbiAgICAgICAgICAgICR0aXRsZS52YWwoYXJjaGl2ZVJlY29yZC50aXRsZSk7XG4gICAgICAgICAgICAkZGVzY3JpcHRpb24udmFsKGFyY2hpdmVSZWNvcmQuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgJGZsb2F0VmFsLnZhbChwYXJzZUZsb2F0KGFyY2hpdmVSZWNvcmQuZmxvYXRWYWwpKTtcbiAgICAgICAgICAgICRkYXRlQ3JlYXRlZC50ZXh0KGFyY2hpdmVSZWNvcmQuY3JlYXRlZEF0KTtcbiAgICAgICAgICAgICRkYXRlVXBkYXRlZC50ZXh0KGFyY2hpdmVSZWNvcmQudXBkYXRlZEF0KTtcblxuICAgICAgICAgICAgJGxvYWRBcmNoaXZlQnRuLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXJjaGl2YXJpdXMoKS5kb3dubG9hZChbYXJjaGl2ZVJlY29yZC5pZF0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNlbGVjdFRhZ3MoYXJjaGl2ZVJlY29yZC50YWdzKTtcblxuICAgICAgICAgICAgJGNvbnRhaW5lci5tb2RhbCgpO1xuXG4gICAgICAgICAgICAkZGVsZXRlQnRuLm9mZignY2xpY2snKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJC5hamF4KCcvZG9jLycgKyBhcmNoaXZlUmVjb3JkLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRzKCkucmVtb3ZlQWN0aXZlUm93KCk7XG4gICAgICAgICAgICAgICAgICAgICRjb250YWluZXIubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkc2F2ZUJ0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IFtdO1xuICAgICAgICAgICAgICAgICQoJy50YWctaXRlbTpjaGVja2JveDpjaGVja2VkJywgJGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbihpKXtcbiAgICAgICAgICAgICAgICAgICAgdGFnc1tpXSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkLmFqYXgoJy9kb2MvJyArIGFyY2hpdmVSZWNvcmQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICR0aXRsZS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24udmFsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdFZhbDogJGZsb2F0VmFsLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogdGFnc1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGFyY2hpdmVSZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRzKCkucmVtb3ZlQWN0aXZlUm93KCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50cygpLmFkZFJvdyhhcmNoaXZlUmVjb3JkKVxuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG5ldFRhYmxlKSB7XG4gICAgICAgICAgICAgICAgbmV0VGFibGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXRUYWJsZSA9ICRmaWxlVGFibGUuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgICAgICBwYWdpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlYXJjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgb3JkZXJpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5mbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlUYWJsZTogJGZpbGVUYWJsZS5kYXRhKCd0ZXh0JylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge2RhdGE6ICdkb2NUaXRsZSd9LFxuICAgICAgICAgICAgICAgICAgICB7ZGF0YTogJ2RvY09yaWdOYW1lJ30sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmNoaXZlUmVjb3JkLmRvY3VtZW50cyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkcm9wem9uZSgpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICRkcm9wem9uZUZvcm0uZGF0YSgnaWQnLCBhcmNoaXZlUmVjb3JkLmlkKTtcbiAgICAgICAgICAgIGRyb3B6b25lKCkuaW5pdChmdW5jdGlvbiAoZG9jSW5mbykge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVJvdyA9IG5ldFRhYmxlLnJvdy5hZGQoZG9jSW5mbyk7XG4gICAgICAgICAgICAgICAgYWN0aXZlUm93LmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCd0Ym9keScsICRmaWxlVGFibGUpLm9mZignY2xpY2snKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlUm93ID0gbmV0VGFibGUucm93KHRoaXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3RpdmVSb3cuZGF0YSgpO1xuICAgICAgICAgICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZG9jVGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRjb250YWluZXIubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBlZGl0TWVkaWEoKS5zaG93KGFyY2hpdmVSZWNvcmQuaWQsIGRhdGEsIGZ1bmN0aW9uIChhY3Rpb24sIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5tb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUm93LnJlbW92ZSgpLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICd1cGRhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVSb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVSb3cgPSBuZXRUYWJsZS5yb3cuYWRkKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUm93LmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVJvdyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlZGl0TWVkaWEoKS5kZXN0cm95KCk7XG4gICAgICAgICAgICBkcm9wem9uZSgpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICRpZC50ZXh0KCcnKTtcbiAgICAgICAgICAgICR0aXRsZS52YWwoJycpO1xuICAgICAgICAgICAgJHNhdmVCdG4ub2ZmKCdjbGljaycpO1xuICAgICAgICAgICAgJGRlbGV0ZUJ0bi5vZmYoJ2NsaWNrJyk7XG4gICAgICAgICAgICAkZGF0ZVVwZGF0ZWQudGV4dCgnJyk7XG4gICAgICAgICAgICAkZGF0ZUNyZWF0ZWQudGV4dCgnJyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHRhZ1NldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MtdGFnJztcblxubGV0IG15Q2hhcnQsIGNvbmZpZywgJHRvdGFsLCAkaXNVbmlxdWVDaGVjaywgY3VyRGF0YSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCB1cGRhdGVUb3RhbCA9IGZ1bmN0aW9uICh0b3RhbCkge1xuICAgICAgICAkdG90YWwudGV4dCh0b3RhbC50b0ZpeGVkKDIpKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYWdDb2xvciA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSB0YWdTZXR0aW5ncygpLmdldFRhZ3MoKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0YWdzKSB7XG4gICAgICAgICAgICBpZiAoIXRhZ3MuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YWdzW2ldLnRpdGxlID09PSB0YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhZ3NbaV0uY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcjMDAwJztcbiAgICB9XG5cbiAgICBjb25zdCByZWxvYWRDaGFydCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG5cbiAgICAgICAgY29uc3QgaXNVbmlxdWVWYWx1ZUZvclRhZyA9ICRpc1VuaXF1ZUNoZWNrLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICBjb25maWcuZGF0YS5kYXRhc2V0cyA9IFtdO1xuICAgICAgICBjb25maWcuZGF0YS5sYWJlbHMgPSBbXTtcblxuICAgICAgICBjb25zdCB0YWdzID0ge307XG4gICAgICAgIGNvbnN0IGRvY3MgPSBkYXRhWydkb2N1bWVudHMnXTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBkb2NzKSB7XG4gICAgICAgICAgICBpZiAoIWRvY3MuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudERvYyA9IGRvY3NbaV07XG4gICAgICAgICAgICBjb25zdCB0YWdMaXN0ID0gY3VycmVudERvYy50YWdzO1xuICAgICAgICAgICAgZm9yIChsZXQgdGFnS2V5IGluIHRhZ0xpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhZ0xpc3QuaGFzT3duUHJvcGVydHkodGFnS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnTGlzdFt0YWdLZXldO1xuICAgICAgICAgICAgICAgIGlmICghdGFncy5oYXNPd25Qcm9wZXJ0eSh0YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0YWdzW3RhZ05hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRWYWw6IHBhcnNlRmxvYXQoY3VycmVudERvYy5mbG9hdFZhbCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGFnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBnZXRUYWdDb2xvcih0YWdOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBwYXJzZUZsb2F0KHRhZ3NbdGFnTmFtZV0uZmxvYXRWYWwpICsgcGFyc2VGbG9hdChjdXJyZW50RG9jLmZsb2F0VmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdGFnc1t0YWdOYW1lXS5mbG9hdFZhbCA9IHJlcy50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b3RhbCArPSBjdXJyZW50RG9jLmZsb2F0VmFsO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVW5pcXVlVmFsdWVGb3JUYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVG90YWwodG90YWwpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSB7XG4gICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQnLFxuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpIGluIHRhZ3MpIHtcbiAgICAgICAgICAgIGlmICghdGFncy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhZyA9IHRhZ3NbaV07XG4gICAgICAgICAgICBjb25maWcuZGF0YS5sYWJlbHMucHVzaChjdXJyZW50VGFnLnRpdGxlKTtcbiAgICAgICAgICAgIGRhdGFzZXQuZGF0YS5wdXNoKGN1cnJlbnRUYWcuZmxvYXRWYWwpO1xuICAgICAgICAgICAgZGF0YXNldC5iYWNrZ3JvdW5kQ29sb3IucHVzaChjdXJyZW50VGFnLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcuZGF0YS5kYXRhc2V0cy5wdXNoKGRhdGFzZXQpXG5cbiAgICAgICAgbXlDaGFydC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkdG90YWwgPSAkKCcudG90YWwtZmxvYXR2YWxzJyk7XG4gICAgICAgICAgICAkaXNVbmlxdWVDaGVjayA9ICQoJy5hZ2dyZWdhdGUtZmxvYXR2YWwnKTtcbiAgICAgICAgICAgICRpc1VuaXF1ZUNoZWNrLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVsb2FkQ2hhcnQoY3VyRGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFRhZ0NoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGNvbnN0ICRjdHggPSAkKCcjc2VhcmNoVGFnQ2hhcnQnKTtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IFtdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY3R4LmRhdGEoJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVTY2FsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUNoYXJ0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY3VyRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICByZWxvYWRDaGFydChkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uZmlnLmRhdGEuZGF0YXNldHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgbXlDaGFydC51cGRhdGUoKTtcbiAgICAgICAgICAgICRpc1VuaXF1ZUNoZWNrLm9mZignY2xpY2snKTtcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsKDApO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgZG9jdW1lbnRzIGZyb20gXCIuL2RvY3VtZW50c1wiO1xuaW1wb3J0IHNlYXJjaENoYXJ0IGZyb20gXCIuL3NlYXJjaC1jaGFydFwiO1xuaW1wb3J0IGFyY2hpdmFyaXVzIGZyb20gXCIuL2FyY2hpdmFyaXVzXCI7XG5cbmxldCAkc2Vla2VyR3JvdXAsICRzZWVrZXJJbnB1dCwgJHNlZWtlclRhZ3MsICRzZWFyY2hCdG4sICRkb3dubG9hZEJ0bjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBydW5TZWVrZXIgPSBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICBjb25zdCB0YWdzID0gW107XG4gICAgICAgICQoJHNlZWtlclRhZ3MpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICB0YWdzLnB1c2goJCh0aGlzKS52YWwoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQuYWpheCgkc2Vla2VySW5wdXQuZGF0YSgndXJsJyksIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHE6ICRzZWVrZXJJbnB1dC52YWwoKSxcbiAgICAgICAgICAgICAgICB0YWdzOiB0YWdzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkb2N1bWVudHMoKS5sb2FkVGFibGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgc2VhcmNoQ2hhcnQoKS51cGRhdGVDaGFydChyZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIGRvbmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50cygpLmluaXQoKTtcblxuICAgICAgICAgICAgJHNlZWtlckdyb3VwID0gJCgnLnNlZWtlci1ncm91cCcpO1xuICAgICAgICAgICAgJHNlZWtlcklucHV0ID0gJCgnLnNlZWtlcicsICRzZWVrZXJHcm91cCk7XG4gICAgICAgICAgICAkc2VhcmNoQnRuID0gJCgnLnNlYXJjaC1idG4nLCAkc2Vla2VyR3JvdXApO1xuICAgICAgICAgICAgJGRvd25sb2FkQnRuID0gJCgnLmRvd25sb2FkLXNlYXJjaC1yZXN1bHRzJywgJHNlZWtlckdyb3VwKTtcbiAgICAgICAgICAgICRzZWVrZXJUYWdzID0gJCgnLnRhZy1pdGVtJywgJHNlZWtlckdyb3VwKTtcblxuICAgICAgICAgICAgJHNlZWtlcklucHV0Lm9mZigna2V5cHJlc3MnKS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICBydW5TZWVrZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAkc2Vla2VyVGFncy5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1blNlZWtlcigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRzZWFyY2hCdG4ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5TZWVrZXIoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkZG93bmxvYWRCdG4ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5TZWVrZXIoZnVuY3Rpb24gKHJlc291cmNlcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgYXJjaGl2ZVJlY29yZCBvZiByZXNvdXJjZXMuZG9jdW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHMucHVzaChhcmNoaXZlUmVjb3JkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJjaGl2YXJpdXMoKS5kb3dubG9hZChpZHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBydW5TZWVrZXIoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkc2Vla2VySW5wdXQub2ZmKCdrZXlwcmVzcycpO1xuICAgICAgICAgICAgJHNlYXJjaEJ0bi5vZmYoJ2NsaWNrJyk7XG4gICAgICAgICAgICAkc2Vla2VyVGFncy5vZmYoJ2NsaWNrJyk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50cygpLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBzZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5sZXQgJGNvbnRhaW5lciwgJHByb2plY3RDaGVja2JveCwgJHVzZXJzQ2hlY2tib3gsICRzZXR0aW5nc0NvbnRhaW5lcjtcbmxldCAkdXNlcnNUYWJCdG4sICRwcm9qZWN0c1RhYkJ0bjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBzZW5kU2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQuYWpheCgnL3NldHRpbmdzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0czogJHByb2plY3RDaGVja2JveC5pcygnOmNoZWNrZWQnKSxcbiAgICAgICAgICAgICAgICB1c2VyczogJHVzZXJzQ2hlY2tib3guaXMoJzpjaGVja2VkJyksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0dGluZ3MoKS5zZXRSZWxvYWRPbkNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkY29udGFpbmVyID0gJCgnLmNvbmZpZy1zZXR0aW5ncycpO1xuICAgICAgICAgICAgJHByb2plY3RDaGVja2JveCA9ICQoJyNwcm9qZWN0cy1jaGVja2JveCcsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJHVzZXJzQ2hlY2tib3ggPSAkKCcjdXNlcnMtY2hlY2tib3gnLCAkY29udGFpbmVyKTtcblxuICAgICAgICAgICAgJHNldHRpbmdzQ29udGFpbmVyID0gJCgnLnNldHRpbmdzLW1vZGFsJyk7XG4gICAgICAgICAgICAkdXNlcnNUYWJCdG4gPSAkKCcuc2V0dGluZy11c2Vycy1idG4nLCAkc2V0dGluZ3NDb250YWluZXIpLmNsb3Nlc3QoJy5uYXYtaXRlbScpO1xuICAgICAgICAgICAgJHByb2plY3RzVGFiQnRuID0gJCgnLnNldHRpbmctcHJvamVjdHMtYnRuJywgJHNldHRpbmdzQ29udGFpbmVyKS5jbG9zZXN0KCcubmF2LWl0ZW0nKTtcblxuICAgICAgICAgICAgJHByb2plY3RDaGVja2JveC5vZmYoJ2NoYW5nZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAkcHJvamVjdHNUYWJCdG4uc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRwcm9qZWN0c1RhYkJ0bi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbmRTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkdXNlcnNDaGVja2JveC5vZmYoJ2NoYW5nZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAkdXNlcnNUYWJCdG4uc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR1c2Vyc1RhYkJ0bi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbmRTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRwcm9qZWN0Q2hlY2tib3gub2ZmKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICR1c2Vyc0NoZWNrYm94Lm9mZignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5sZXQgJGNvbnRhaW5lciwgJGFkZEZvcm07XG5sZXQgJGFkZEJ0biwgJGNvbG9yLCAkdGl0bGUsICR0eXBlLCAkaXNQcmltYXJ5LCBjdXJyZW50VHlwZSA9ICdmaW5hbmNlJywgJHR5cGVMaXN0R3JvdXA7XG5sZXQgJGxpc3RHcm91cCwgJHRhYkNvbnRlbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgYWRkUHJvamVjdExpc3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICBjb25zdCAkYSA9ICQoJzxhPicpO1xuICAgICAgICAkYS5hZGRDbGFzcygnbGlzdC1ncm91cC1pdGVtJyk7XG4gICAgICAgICRhLmFkZENsYXNzKCdsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uJyk7XG4gICAgICAgICRhLmF0dHIoJ2lkJywgYGxpc3QtJHtwcm9qZWN0LmlkfWApO1xuICAgICAgICAkYS5kYXRhKCd0b2dnbGUnLCAnbGlzdCcpO1xuICAgICAgICAkYS5hdHRyKCdyb2xlJywgJ3RhYicpO1xuICAgICAgICAkYS5hdHRyKCdhcmlhLWNvbnRyb2xzJywgcHJvamVjdC5pZCk7XG4gICAgICAgICRhLnRleHQocHJvamVjdC50aXRsZSk7XG4gICAgICAgICRhLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uLmFjdGl2ZScsICRsaXN0R3JvdXApLnJlbW92ZUNsYXNzKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcudGFiLXBhbmUuc2hvdycsICR0YWJDb250ZW50KS5yZW1vdmVDbGFzcygnLnNob3cnKTtcbiAgICAgICAgICAgICQoJy50YWItcGFuZS5hY3RpdmUnLCAkdGFiQ29udGVudCkucmVtb3ZlQ2xhc3MoJy5hY3RpdmUnKTtcblxuXG4gICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICQoYCMke3Byb2plY3QuaWR9YCk7XG4gICAgICAgICAgICAkY29udGVudC5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAkYS5wcmVwZW5kVG8oJGxpc3RHcm91cCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRlbnQgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICBjb25zdCAkZGl2ID0gJCgnPGRpdj4nKTtcbiAgICAgICAgJGRpdi5hZGRDbGFzcygndGFiLXBhbmUnKTtcbiAgICAgICAgJGRpdi5hZGRDbGFzcygnZmFkZScpO1xuICAgICAgICAkZGl2LmF0dHIoJ2lkJywgcHJvamVjdC5pZCk7XG4gICAgICAgICRkaXYuYXR0cigncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgICAkZGl2LmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIGBsaXN0LSR7cHJvamVjdC5pZH1gKTtcbiAgICAgICAgJGRpdi50ZXh0KCd0ZXN0JylcbiAgICAgICAgJGRpdi5hcHBlbmRUbygkdGFiQ29udGVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgIGFkZFByb2plY3RMaXN0KHByb2plY3QpO1xuICAgICAgICBhZGRQcm9qZWN0Q29udGVudChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQuYWpheCgnL3Byb2plY3RzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzcG9uc2UucHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQuYWpheCgnL3Byb2plY3RzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci52YWwoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogJHRpdGxlLnZhbCgpLFxuICAgICAgICAgICAgICAgIHR5cGU6IGN1cnJlbnRUeXBlLFxuICAgICAgICAgICAgICAgIHByaW1hcnk6ICRpc1ByaW1hcnkuaXMoJzpjaGVja2VkJykgPyAxIDogMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hBZGRGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkYWRkQnRuID0gJCgnLmJ1dHRvbi1hZGQnLCAkYWRkRm9ybSk7XG4gICAgICAgICRhZGRCdG5cbiAgICAgICAgICAgIC5vZmYoJ2NsaWNrJylcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgJGNvbG9yID0gJCgnLmNvbG9yJywgJGFkZEZvcm0pO1xuICAgICAgICAkdGl0bGUgPSAkKCcudGl0bGUnLCAkYWRkRm9ybSk7XG4gICAgICAgICR0eXBlID0gJCgnLnR5cGUnLCAkYWRkRm9ybSk7XG4gICAgICAgICR0eXBlTGlzdEdyb3VwID0gJCgnLmxpc3QtZ3JvdXAtaXRlbScsICR0eXBlKTtcbiAgICAgICAgJHR5cGVMaXN0R3JvdXBcbiAgICAgICAgICAgIC5vZmYoJ2NsaWNrJylcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICQoJy5saXN0LWdyb3VwLWl0ZW0nLCAkdHlwZSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICRlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudFR5cGUgPSAkZWwuaGFzQ2xhc3MoJ2ZpbmFuY2UnKSA/ICdmaW5hbmNlJyA6ICdkb2N1bWVudHMnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgJGlzUHJpbWFyeSA9ICQoJy5wcmltYXJ5JywgJGFkZEZvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRldGFjaEFkZEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRhZGRCdG4ub2ZmKCdjbGljaycpO1xuICAgICAgICAkdHlwZUxpc3RHcm91cC5vZmYoJ2NsaWNrJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoQWRkTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2xpc3QtbmV3LXByb2plY3QnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24uYWN0aXZlJywgJGxpc3RHcm91cCkucmVtb3ZlQ2xhc3MoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy50YWItcGFuZS5zaG93JywgJHRhYkNvbnRlbnQpLnJlbW92ZUNsYXNzKCcuc2hvdycpO1xuICAgICAgICAgICAgJCgnLnRhYi1wYW5lLmFjdGl2ZScsICR0YWJDb250ZW50KS5yZW1vdmVDbGFzcygnLmFjdGl2ZScpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJChgI25ldy1wcm9qZWN0YCk7XG4gICAgICAgICAgICAkY29udGVudC5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGluaXRBZGRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBhdHRhY2hBZGRMaXN0KCk7XG4gICAgICAgIGF0dGFjaEFkZEZvcm0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkY29udGFpbmVyID0gJCgnLnByb2plY3RzLXRhYicpO1xuICAgICAgICAgICAgJGFkZEZvcm0gPSAkKCcuYWRkLWZvcm0nLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRsaXN0R3JvdXAgPSAkKCcucHJvamVjdHMtbGlzdC1ncm91cCcsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJHRhYkNvbnRlbnQgPSAkKCcucHJvamVjdHMtdGFiLWNvbnRlbnQnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgIGluaXRBZGRQcm9qZWN0KCk7XG4gICAgICAgICAgICBsb2FkUHJvamVjdHMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGV0YWNoQWRkRm9ybSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCAnZGF0YXRhYmxlcy5uZXQtYnM0JztcbmltcG9ydCBzZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5sZXQgJGNvbnRhaW5lciwgJHRpdGxlLCAkdGFibGUsICRzYXZlLCAkY29sb3IsIG5ldFRhYmxlLCAkdGFnc0xpc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgYWRkVG9UYWJsZSA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlUm93ID0gbmV0VGFibGUucm93LmFkZCggdGFnICk7XG4gICAgICAgIGFjdGl2ZVJvdy5kcmF3KCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkLmFqYXgoJy90YWdzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICR0aXRsZS52YWwoKSxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLnZhbCgpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgIHNldHRpbmdzKCkuc2V0UmVsb2FkT25DbG9zZSgpO1xuICAgICAgICAgICAgYWRkVG9UYWJsZSh0YWcpO1xuICAgICAgICAgICAgJHRpdGxlLnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFRhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkLmFqYXgoJy90YWdzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgaWYgKCFuZXRUYWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApXG4gICAgICAgICAgICAgICAgbmV0VGFibGUgPSAkdGFibGUuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5mbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eVRhYmxlOiAkdGFibGUuZGF0YSgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YTogJ3RpdGxlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBkYXRhOiAnY29sb3InIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlbmRlcjogKGRhdGEsIHR5cGUsIHJvdywgbWV0YSkgPT4gYDxzcGFuIHN0eWxlPVwiY29sb3I6ICR7cm93LmNvbG9yfVwiPiZibG9jazs8L3NwYW4+YCB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3AudGFncyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgndGJvZHknLCAkdGFibGUpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVSb3cgPSBuZXRUYWJsZS5yb3coIHRoaXMgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aXZlUm93LmRhdGEoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBjb25maXJtKCR0YWJsZS5kYXRhKCdkZWxldGUnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KCcvdGFncycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncygpLnNldFJlbG9hZE9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVJvdy5yZW1vdmUoKS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgICAgICAkc2F2ZS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFkZFRhZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRjb250YWluZXIgPSAkKCcuYWRkLXRhZy1mb3JtJyk7XG4gICAgICAgICAgICAkdGl0bGUgPSAkKCcudGFnLW5hbWUnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRjb2xvciA9ICQoJy5jb2xvcicsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJHNhdmUgPSAkKCcuYnV0dG9uLWFkZC10YWcnLCAkY29udGFpbmVyKTtcblxuICAgICAgICAgICAgJHRhZ3NMaXN0ID0gJCgnLnRhZ3MtbGlzdCcpO1xuICAgICAgICAgICAgJHRhYmxlID0gJCgndGFibGUnLCAkdGFnc0xpc3QpO1xuICAgICAgICAgICAgbG9hZFRhYmxlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRhZ3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldFRhYmxlLmRhdGEoKVxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkdGl0bGUudmFsKCcnKTtcbiAgICAgICAgICAgICRjb2xvci52YWwoJycpO1xuICAgICAgICAgICAgJHRhYmxlLmhpZGUoKTtcbiAgICAgICAgICAgICRzYXZlLm9mZignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHNldHRpbmdzQ29uZmlnIGZyb20gJy4vc2V0dGluZ3MtY29uZmlnJztcbmltcG9ydCBzZXR0aW5nc1Byb2plY3RzIGZyb20gJy4vc2V0dGluZ3MtcHJvamVjdHMnO1xuXG5sZXQgJGJ0biwgJGNvbnRhaW5lcjtcbmxldCAkdGFnc1RhYkJ0biwgJHVzZXJzVGFiQnRuLCAkcHJvamVjdHNUYWJCdG4sICRjb25maWdUYWJCdG47XG5sZXQgJHRhZ3NTZWN0aW9uLCAkdXNlcnNTZWN0aW9uLCAkcHJvamVjdHNTZWN0aW9uLCAkY29uZmlnU2VjdGlvbjtcbmxldCByZXF1aXJlUmVsb2FkID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IHNldEFjdGl2ZVRhYiA9IGZ1bmN0aW9uICh0YWJOYW1lKSB7XG4gICAgICAgICR0YWdzVGFiQnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJHVzZXJzVGFiQnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJHByb2plY3RzVGFiQnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJGNvbmZpZ1RhYkJ0bi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICR0YWdzU2VjdGlvbi5oaWRlKCk7XG4gICAgICAgICR1c2Vyc1NlY3Rpb24uaGlkZSgpO1xuICAgICAgICAkcHJvamVjdHNTZWN0aW9uLmhpZGUoKTtcbiAgICAgICAgJGNvbmZpZ1NlY3Rpb24uaGlkZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodGFiTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAndGFncyc6XG4gICAgICAgICAgICAgICAgJHRhZ3NUYWJCdG4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0YWdzU2VjdGlvbi5zaG93KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1c2Vycyc6XG4gICAgICAgICAgICAgICAgJHVzZXJzVGFiQnRuLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkdXNlcnNTZWN0aW9uLnNob3coKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3RzJzpcbiAgICAgICAgICAgICAgICAkcHJvamVjdHNUYWJCdG4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICRwcm9qZWN0c1NlY3Rpb24uc2hvdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcbiAgICAgICAgICAgICAgICAkY29uZmlnVGFiQnRuLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkY29uZmlnU2VjdGlvbi5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkYnRuID0gJCgnLnNldHRpbmdzJyk7XG4gICAgICAgICAgICAkY29udGFpbmVyID0gJCgnLnNldHRpbmdzLW1vZGFsJyk7XG4gICAgICAgICAgICAkY29udGFpbmVyLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlUmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGJ0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRjb250YWluZXIubW9kYWwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkdGFnc1NlY3Rpb24gPSAkKCcudGFnLXNldHRpbmdzJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkdXNlcnNTZWN0aW9uID0gJCgnLnVzZXJzLXNldHRpbmdzJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkcHJvamVjdHNTZWN0aW9uID0gJCgnLnByb2plY3Qtc2V0dGluZ3MnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRjb25maWdTZWN0aW9uID0gJCgnLmNvbmZpZy1zZXR0aW5ncycsICRjb250YWluZXIpO1xuXG4gICAgICAgICAgICAkdGFnc1RhYkJ0biA9ICQoJy5zZXR0aW5nLXRhZ3MtYnRuJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkdGFnc1RhYkJ0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVRhYigndGFncycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkdXNlcnNUYWJCdG4gPSAkKCcuc2V0dGluZy11c2Vycy1idG4nLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICR1c2Vyc1RhYkJ0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVRhYigndXNlcnMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJHByb2plY3RzVGFiQnRuID0gJCgnLnNldHRpbmctcHJvamVjdHMtYnRuJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkcHJvamVjdHNUYWJCdG4ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVUYWIoJ3Byb2plY3RzJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRjb25maWdUYWJCdG4gPSAkKCcuc2V0dGluZy1jb25maWctYnRuJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkY29uZmlnVGFiQnRuLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlVGFiKCdjb25maWcnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRBY3RpdmVUYWIoJ3RhZ3MnKTtcblxuICAgICAgICAgICAgc2V0dGluZ3NDb25maWcoKS5pbml0KCk7XG4gICAgICAgICAgICBzZXR0aW5nc1Byb2plY3RzKCkuaW5pdCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFJlbG9hZE9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlcXVpcmVSZWxvYWQgPSB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRidG4ub2ZmKCdjbGljaycpO1xuICAgICAgICAgICAgc2V0QWN0aXZlVGFiKCd0YWdzJyk7XG4gICAgICAgICAgICAkcHJvamVjdHNUYWJCdG4ub2ZmKCdjbGljaycpO1xuICAgICAgICAgICAgJHVzZXJzVGFiQnRuLm9mZignY2xpY2snKTtcbiAgICAgICAgICAgICR0YWdzVGFiQnRuLm9mZignY2xpY2snKTtcblxuICAgICAgICAgICAgc2V0dGluZ3NDb25maWcoKS5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZXR0aW5nc1Byb2plY3RzKCkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0IHNlZWtlciBmcm9tICcuLi9jb21wb25lbnRzL3NlZWtlcic7XG5pbXBvcnQgY3JlYXRlQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL2NyZWF0ZS1idXR0b25cIjtcbmltcG9ydCBlZGl0UmVjb3JkIGZyb20gJy4uL2NvbXBvbmVudHMvZWRpdC1yZWNvcmQnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuLi9jb21wb25lbnRzL3NldHRpbmdzXCI7XG5pbXBvcnQgc2VhcmNoQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VhcmNoLWNoYXJ0XCI7XG5pbXBvcnQgdGFnU2V0dGluZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2V0dGluZ3MtdGFnXCI7XG5pbXBvcnQgZG9udXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG9udXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0YWdTZXR0aW5ncygpLmluaXQoKTtcbiAgICAgICAgc2V0dGluZ3MoKS5pbml0KCk7XG4gICAgICAgIGVkaXRSZWNvcmQoKS5pbml0KCk7XG4gICAgICAgIHNlZWtlcigpLmluaXQoKTtcbiAgICAgICAgY3JlYXRlQnRuKCkuaW5pdCgpO1xuICAgICAgICBzZWFyY2hDaGFydCgpLmluaXQoKTtcbiAgICAgICAgZG9udXQoKS5pbml0KCk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGFnU2V0dGluZ3MoKS5kZXN0cm95KCk7XG4gICAgICAgIHNldHRpbmdzKCkuZGVzdHJveSgpO1xuICAgICAgICBlZGl0UmVjb3JkKCkuZGVzdHJveSgpO1xuICAgICAgICBzZWVrZXIoKS5kZXN0cm95KCk7XG4gICAgICAgIGNyZWF0ZUJ0bigpLmRlc3Ryb3koKTtcbiAgICAgICAgc2VhcmNoQ2hhcnQoKS5kZXN0cm95KCk7XG4gICAgICAgIGRvbnV0KCkuZGVzdHJveSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4tYmRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi1iZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1zZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VuLXNnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLW14XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtbXguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9