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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL3Zhci93d3cvaHRtbC9hc3NldHMvY29udHJvbGxlcnN8c3luY3wvXFwuKGp8dClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXJjaGl2YXJpdXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY3JlYXRlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9kb2N1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZHJvcHpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZWRpdC1tZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9lZGl0LXJlY29yZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zZWFyY2gtY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvc2Vla2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3NldHRpbmdzLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zZXR0aW5ncy1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zZXR0aW5ncy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Rhc2hib2FyZF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy92YXIvd3d3L2h0bWwvbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGV8c3luY3wvXlxcLlxcLy4qJC8iXSwibmFtZXMiOlsiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiLCJkb3dubG9hZCIsImFyY2hpdmVJZHMiLCJmYWtlRm9ybUh0bWxGcmFnbWVudCIsImkiLCIkZmFrZUZvcm1Eb20iLCIkIiwiYXBwZW5kIiwic3VibWl0IiwiJGNyZWF0ZUJ0biIsImluaXQiLCJvZmYiLCJvbiIsInVybCIsImRhdGEiLCJkb25lIiwiYXJjaGl2ZVJlY29yZCIsImRvY3VtZW50cyIsImFkZFJlY29yZCIsImRlc3Ryb3kiLCIkY29udGFpbmVyIiwiJHNwaW5uZXIiLCIkZm91bmRDb3VudCIsIiRmb3VuZENvdW50Q250IiwiJHRhYmxlIiwibmV0VGFibGUiLCJhY3RpdmVSb3ciLCIkZm91bmRGbG9hdFZhbHMiLCJ0b3RhbEZsb2F0VmFsIiwibG9hZFRhYmxlIiwiaGlkZSIsInRleHQiLCJjb3VudCIsInNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsImZsb2F0VmFsIiwidG9GaXhlZCIsIkRhdGFUYWJsZSIsInBhZ2luZyIsInNlYXJjaGluZyIsIm9yZGVyaW5nIiwic2VsZWN0IiwiYXV0b1dpZHRoIiwiaW5mbyIsImxhbmd1YWdlIiwiZW1wdHlUYWJsZSIsImNvbHVtbnMiLCJyb3ciLCJlZGl0UmVjb3JkIiwib3BlbkVkaXRGb3JtIiwiY2xlYXIiLCJkcmF3Iiwicm93cyIsImFkZCIsImFkZFJvdyIsImNvdW50VmFsIiwicGFyc2VJbnQiLCJyZW1vdmVBY3RpdmVSb3ciLCJyZW1vdmUiLCJEcm9wem9uZSIsImR6Iiwic3RhdGUiLCJvbkFkZGVkIiwiJGVsIiwiZm9ybUVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGljdERlZmF1bHRNZXNzYWdlIiwicGFyYW1zIiwiaWQiLCJmIiwiciIsImNvbnNvbGUiLCJsb2ciLCIkdGl0bGUiLCIkZG93bmxvYWQiLCIkcmVtb3ZlIiwiJG9yaWdOYW1lIiwiZGVsZXRlT25DbG9zZSIsIiRzYXZlIiwiYWRkT25DbG9zZSIsImFyY2hpdmVJZCIsIm1lZGlhIiwib25DbG9zZSIsInZhbCIsImRvY1RpdGxlIiwiZG9jT3JpZ05hbWUiLCJhY3Rpb25PbkNsb3NlIiwibW9kYWwiLCJkb2NQYXRoIiwicmVwbGFjZSIsIm1ldGhvZCIsInBhdGgiLCJ0aXRsZSIsImRvY0luZm8iLCIkaWQiLCIkZHJvcHpvbmVGb3JtIiwiJGZpbGVzIiwiJGZpbGVUYWJsZSIsIiRkZWxldGVCdG4iLCIkc2F2ZUJ0biIsIiRmbG9hdFZhbCIsIiRkZXNjcmlwdGlvbiIsIiRkYXRlVXBkYXRlZCIsIiRkYXRlQ3JlYXRlZCIsIiRsb2FkQXJjaGl2ZUJ0biIsInNlbGVjdFRhZ3MiLCJ0YWdzIiwiZWFjaCIsInByb3AiLCJkcm9wem9uZSIsImVkaXRNZWRpYSIsImRlc2NyaXB0aW9uIiwicGFyc2VGbG9hdCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImFyY2hpdmFyaXVzIiwiYWN0aW9uIiwibXlDaGFydCIsImNvbmZpZyIsIiR0b3RhbCIsIiRpc1VuaXF1ZUNoZWNrIiwiY3VyRGF0YSIsInVwZGF0ZVRvdGFsIiwidG90YWwiLCJnZXRUYWdDb2xvciIsInRhZ05hbWUiLCJ0YWdTZXR0aW5ncyIsImdldFRhZ3MiLCJjb2xvciIsInJlbG9hZENoYXJ0IiwiaXNVbmlxdWVWYWx1ZUZvclRhZyIsImlzIiwiZGF0YXNldHMiLCJsYWJlbHMiLCJkb2NzIiwiY3VycmVudERvYyIsInRhZ0xpc3QiLCJ0YWdLZXkiLCJyZXMiLCJkYXRhc2V0IiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJyZW50VGFnIiwicHVzaCIsInVwZGF0ZSIsImNoYW5nZSIsImN0eCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIiRjdHgiLCJ0eXBlIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJhbmltYXRlU2NhbGUiLCJhbmltYXRlUm90YXRlIiwiQ2hhcnQiLCJ1cGRhdGVDaGFydCIsInNwbGljZSIsIiRzZWVrZXJHcm91cCIsIiRzZWVrZXJJbnB1dCIsIiRzZWVrZXJUYWdzIiwiJHNlYXJjaEJ0biIsIiRkb3dubG9hZEJ0biIsInJ1blNlZWtlciIsInEiLCJyZXNwb25zZSIsInNlYXJjaENoYXJ0IiwiZSIsIndoaWNoIiwicmVzb3VyY2VzIiwiaWRzIiwibGVuZ3RoIiwiJHByb2plY3RDaGVja2JveCIsIiR1c2Vyc0NoZWNrYm94IiwiJHNldHRpbmdzQ29udGFpbmVyIiwiJHVzZXJzVGFiQnRuIiwiJHByb2plY3RzVGFiQnRuIiwic2VuZFNldHRpbmdzIiwicHJvamVjdHMiLCJ1c2VycyIsInNldHRpbmdzIiwic2V0UmVsb2FkT25DbG9zZSIsImNsb3Nlc3QiLCJpc0FjdGl2ZSIsIiRhZGRGb3JtIiwiJGFkZEJ0biIsIiRjb2xvciIsIiR0eXBlIiwiJGlzUHJpbWFyeSIsImN1cnJlbnRUeXBlIiwiJHR5cGVMaXN0R3JvdXAiLCIkbGlzdEdyb3VwIiwiJHRhYkNvbnRlbnQiLCJhZGRQcm9qZWN0TGlzdCIsInByb2plY3QiLCIkYSIsImFkZENsYXNzIiwiYXR0ciIsInJlbW92ZUNsYXNzIiwiJGNvbnRlbnQiLCJwcmVwZW5kVG8iLCJhZGRQcm9qZWN0Q29udGVudCIsIiRkaXYiLCJhcHBlbmRUbyIsImFkZFByb2plY3QiLCJsb2FkUHJvamVjdHMiLCJmb3JFYWNoIiwiY3JlYXRlUHJvamVjdCIsInByaW1hcnkiLCJhdHRhY2hBZGRGb3JtIiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJkZXRhY2hBZGRGb3JtIiwiYXR0YWNoQWRkTGlzdCIsImluaXRBZGRQcm9qZWN0IiwiJHRhZ3NMaXN0IiwiYWRkVG9UYWJsZSIsInRhZyIsImFkZFRhZyIsInJlc3AiLCJjb25maXJtIiwiJGJ0biIsIiR0YWdzVGFiQnRuIiwiJGNvbmZpZ1RhYkJ0biIsIiR0YWdzU2VjdGlvbiIsIiR1c2Vyc1NlY3Rpb24iLCIkcHJvamVjdHNTZWN0aW9uIiwiJGNvbmZpZ1NlY3Rpb24iLCJyZXF1aXJlUmVsb2FkIiwic2V0QWN0aXZlVGFiIiwidGFiTmFtZSIsImxvY2F0aW9uIiwicmVsb2FkIiwic2V0dGluZ3NDb25maWciLCJzZXR0aW5nc1Byb2plY3RzIiwic2Vla2VyIiwiY3JlYXRlQnRuIiwiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkEsaUVBQWU7QUFDZixnQ0FBZ0MsaU1BQTJFO0FBQzNHLDRCQUE0QiwyTEFBd0U7QUFDcEcsQ0FBQyxFOzs7Ozs7Ozs7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ1JBOztBQUNPLElBQU1BLEdBQUcsR0FBR0MsMEVBQWdCLENBQUNDLHVFQUFELENBQTVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBRUEsNkJBQWUsc0NBQVk7QUFDdkIsU0FBTztBQUNIQyxZQUFRLEVBQUUsa0JBQVVDLFVBQVYsRUFBc0I7QUFDNUIsVUFBSUMsb0JBQW9CLEdBQUcsbUVBQTNCOztBQUQ0QixpREFFZEQsVUFGYztBQUFBOztBQUFBO0FBRTVCLDREQUEwQjtBQUFBLGNBQWpCRSxDQUFpQjtBQUN0QkQsOEJBQW9CLElBQUksNkNBQTZDQyxDQUE3QyxHQUFpRCxJQUF6RTtBQUNIO0FBSjJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSzVCRCwwQkFBb0IsSUFBSSxTQUF4QjtBQUNBLFVBQU1FLFlBQVksR0FBR0MsOENBQUMsQ0FBQ0gsb0JBQUQsQ0FBdEI7QUFDQUcs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7V0FFSSxtQkFBVTtBQUNOLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixHQUEyQixtRUFBM0I7QUFDSDs7OztFQUh3QkYsaUQ7Ozs7Ozs7Ozs7Ozs7O0FDWDdCOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZGFzaGJvYXJkX2NvbnRyb2xsZXIuanNcIjogXCIuL2Fzc2V0cy9jb250cm9sbGVycy9kYXNoYm9hcmRfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1jaGFydGpzLS1jaGFydCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1jaGFydGpzL2Rpc3QvY29udHJvbGxlci5qcycpLFxuICAnc3ltZm9ueS0tdXgtc3d1cC0tc3d1cCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1zd3VwL2Rpc3QvY29udHJvbGxlci5qcycpLFxufTsiLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dCgnLi9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkb3dubG9hZDogZnVuY3Rpb24gKGFyY2hpdmVJZHMpIHtcbiAgICAgICAgICAgIGxldCBmYWtlRm9ybUh0bWxGcmFnbWVudCA9IFwiPGZvcm0gc3R5bGU9J2Rpc3BsYXk6IG5vbmU7JyBtZXRob2Q9J1BPU1QnIGFjdGlvbj0nL2RvYy9hcmNoaXZlJz5cIjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgb2YgYXJjaGl2ZUlkcykge1xuICAgICAgICAgICAgICAgIGZha2VGb3JtSHRtbEZyYWdtZW50ICs9IFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0naWRbXScgdmFsdWU9J1wiICsgaSArIFwiJz5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZha2VGb3JtSHRtbEZyYWdtZW50ICs9IFwiPC9mb3JtPlwiO1xuICAgICAgICAgICAgY29uc3QgJGZha2VGb3JtRG9tID0gJChmYWtlRm9ybUh0bWxGcmFnbWVudCk7XG4gICAgICAgICAgICAkKFwiYm9keVwiKS5hcHBlbmQoJGZha2VGb3JtRG9tKTtcbiAgICAgICAgICAgICRmYWtlRm9ybURvbS5zdWJtaXQoKTtcbiAgICAgICAgfVxuICAgIH07XG59IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBkb2N1bWVudHMgZnJvbSBcIi4vZG9jdW1lbnRzXCI7XG5cbmxldCAkY3JlYXRlQnRuO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkY3JlYXRlQnRuID0gJCgnLmNyZWF0ZS1idG4nKTtcbiAgICAgICAgICAgICRjcmVhdGVCdG4ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICQodGhpcykuZGF0YSgnaHJlZicpXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoYXJjaGl2ZVJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudHMoKS5hZGRSZWNvcmQoYXJjaGl2ZVJlY29yZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGNyZWF0ZUJ0bi5vZmYoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnZGF0YXRhYmxlcy5uZXQtYnM0JztcbmltcG9ydCBlZGl0UmVjb3JkIGZyb20gJy4vZWRpdC1yZWNvcmQnO1xuXG5sZXQgJGNvbnRhaW5lciwgJHNwaW5uZXIsICRmb3VuZENvdW50LCAkZm91bmRDb3VudENudCwgJHRhYmxlLCBuZXRUYWJsZSwgYWN0aXZlUm93LCAkZm91bmRGbG9hdFZhbHMsIHRvdGFsRmxvYXRWYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkY29udGFpbmVyID0gJCgnLmRvY3VtZW50cy10YWJsZScpO1xuICAgICAgICAgICAgJHNwaW5uZXIgPSAkKCcuc3Bpbm5lci1ib3JkZXInLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRmb3VuZENvdW50ID0gJCgnLmZvdW5kLWNvdW50JywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkZm91bmRDb3VudENudCA9ICQoJy5jbnQnLCAkZm91bmRDb3VudCk7XG4gICAgICAgICAgICAkZm91bmRGbG9hdFZhbHMgPSAkKCcuYW1vdW50LWZ2Jyk7XG4gICAgICAgICAgICAkdGFibGUgPSAkKCd0YWJsZScsICRjb250YWluZXIpO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkVGFibGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgICAkZm91bmRDb3VudENudC50ZXh0KGRhdGEuY291bnQpO1xuICAgICAgICAgICAgJGZvdW5kQ291bnQuc2hvdygpO1xuXG4gICAgICAgICAgICB0b3RhbEZsb2F0VmFsID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YS5kb2N1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZG9jdW1lbnRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b3RhbEZsb2F0VmFsICs9IGRhdGEuZG9jdW1lbnRzW2ldLmZsb2F0VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGZvdW5kRmxvYXRWYWxzLnRleHQodG90YWxGbG9hdFZhbC50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIGlmICghbmV0VGFibGUpIHtcbiAgICAgICAgICAgICAgICBuZXRUYWJsZSA9ICR0YWJsZS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgICAgICAgICBwYWdpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbmZvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5VGFibGU6ICR0YWJsZS5kYXRhKCd0ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE6ICd0aXRsZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE6ICd0YWdzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YTogJ2Zsb2F0VmFsJ30sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEuZG9jdW1lbnRzLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgndGJvZHknLCAkdGFibGUpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlUm93ID0gbmV0VGFibGUucm93KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aXZlUm93LmRhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRSZWNvcmQoKS5vcGVuRWRpdEZvcm0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICR0YWJsZS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ldFRhYmxlLmNsZWFyKCkuZHJhdygpO1xuICAgICAgICAgICAgICAgIG5ldFRhYmxlLnJvd3MuYWRkKGRhdGEuZG9jdW1lbnRzKTtcbiAgICAgICAgICAgICAgICBuZXRUYWJsZS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgYWN0aXZlUm93ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWRkUm93OiBmdW5jdGlvbihhcmNoaXZlUmVjb3JkKSB7XG4gICAgICAgICAgICAvLyB0b3RhbCBjb3VudFxuICAgICAgICAgICAgbGV0IGNvdW50VmFsID0gcGFyc2VJbnQoJGZvdW5kQ291bnRDbnQudGV4dCgpKTtcbiAgICAgICAgICAgICRmb3VuZENvdW50Q250LnRleHQoKytjb3VudFZhbCk7XG4gICAgICAgICAgICAvLyB0b3RhbCB2YWx1ZVxuICAgICAgICAgICAgdG90YWxGbG9hdFZhbCArPSBhcmNoaXZlUmVjb3JkLmZsb2F0VmFsO1xuICAgICAgICAgICAgJGZvdW5kRmxvYXRWYWxzLnRleHQodG90YWxGbG9hdFZhbC50b0ZpeGVkKDIpKTtcblxuICAgICAgICAgICAgYWN0aXZlUm93ID0gbmV0VGFibGUucm93LmFkZCggYXJjaGl2ZVJlY29yZCApO1xuICAgICAgICAgICAgYWN0aXZlUm93LmRyYXcoKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkUmVjb3JkOiBmdW5jdGlvbihhcmNoaXZlUmVjb3JkKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFJvdyhhcmNoaXZlUmVjb3JkKTtcbiAgICAgICAgICAgIGVkaXRSZWNvcmQoKS5vcGVuRWRpdEZvcm0oYXJjaGl2ZVJlY29yZCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUFjdGl2ZVJvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGNvdW50VmFsID0gcGFyc2VJbnQoJGZvdW5kQ291bnRDbnQudGV4dCgpKTtcbiAgICAgICAgICAgICRmb3VuZENvdW50Q250LnRleHQoLS1jb3VudFZhbCk7XG5cbiAgICAgICAgICAgIHRvdGFsRmxvYXRWYWwgLT0gYWN0aXZlUm93LmRhdGEoKS5mbG9hdFZhbDtcbiAgICAgICAgICAgICRmb3VuZEZsb2F0VmFscy50ZXh0KHRvdGFsRmxvYXRWYWwudG9GaXhlZCgyKSk7XG5cbiAgICAgICAgICAgIGFjdGl2ZVJvdy5yZW1vdmUoKS5kcmF3KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRzcGlubmVyLnNob3coKTtcbiAgICAgICAgICAgICRmb3VuZENvdW50LmhpZGUoKTtcbiAgICAgICAgICAgICRmb3VuZENvdW50Q250LnRleHQoJzAnKTtcbiAgICAgICAgICAgICR0YWJsZS5oaWRlKCk7XG4gICAgICAgICAgICAkZm91bmRGbG9hdFZhbHMudGV4dCgnMCcpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcbkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xuaW1wb3J0ICdkcm9wem9uZS9kaXN0L2Ryb3B6b25lLmNzcydcblxubGV0IGR6LCBzdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAob25BZGRlZCkge1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoJyNzcmMtbWVkaWEnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcHpvbmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZvcm1FbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGR6ID0gbmV3IERyb3B6b25lKGZvcm1FbCwge1xuICAgICAgICAgICAgICAgICAgICBkaWN0RGVmYXVsdE1lc3NhZ2U6ICRlbC5kYXRhKCd0ZXh0JyksXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICRlbC5kYXRhKCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZHoub24oJ2Vycm9yJywgZnVuY3Rpb24gKGYsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZiwgcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZHoub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbiAoZiwgcikge1xuICAgICAgICAgICAgICAgICAgICAvLyByZWRpcmVjdCB0byBuZXcgciBpZiBhbHJlYWR5IG5vdCB0aGVyZVxuICAgICAgICAgICAgICAgICAgICBvbkFkZGVkKHIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkei5kZXN0cm95KCk7XG4gICAgICAgICAgICBzdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5sZXQgJGNvbnRhaW5lciwgJHRpdGxlLCAkZG93bmxvYWQsICRyZW1vdmUsICRvcmlnTmFtZSwgZGVsZXRlT25DbG9zZSwgJHNhdmUsIGFkZE9uQ2xvc2UgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGNvbnRhaW5lciA9ICQoJy5maWxlLW1vZGFsJyk7XG4gICAgICAgICAgICAkdGl0bGUgPSAkKCcuc3JjLXRpdGxlJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkb3JpZ05hbWUgPSAkKCcuc3JjLWlkJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkZG93bmxvYWQgPSAkKCcubG9hZC1tZWRpYScsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJHJlbW92ZSA9ICQoJy5kZWxldGUtbWVkaWEnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRzYXZlID0gJCgnLnNhdmUtbWVkaWEnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgIGRlbGV0ZU9uQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gKGFyY2hpdmVJZCwgbWVkaWEsIG9uQ2xvc2UpIHtcbiAgICAgICAgICAgICR0aXRsZS52YWwobWVkaWEuZG9jVGl0bGUpO1xuICAgICAgICAgICAgJG9yaWdOYW1lLnRleHQobWVkaWEuZG9jT3JpZ05hbWUpO1xuICAgICAgICAgICAgJGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIC5vZmYoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb25PbkNsb3NlID0gZGVsZXRlT25DbG9zZSA9PT0gdHJ1ZSA/ICdkZWxldGUnIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkZE9uQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbk9uQ2xvc2UgPSAndXBkYXRlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlKGFjdGlvbk9uQ2xvc2UsIGFkZE9uQ2xvc2UpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVPbkNsb3NlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGFkZE9uQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tb2RhbCgpO1xuICAgICAgICAgICAgJGRvd25sb2FkXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snKVxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmYWtlRm9ybUh0bWxGcmFnbWVudCA9IFwiPGZvcm0gc3R5bGU9J2Rpc3BsYXk6IG5vbmU7JyBtZXRob2Q9J1BPU1QnIGFjdGlvbj0nL2RvYy9nZXRfbWVkaWEnPlwiO1xuICAgICAgICAgICAgICAgICAgICBmYWtlRm9ybUh0bWxGcmFnbWVudCArPSBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J2lkJyB2YWx1ZT0nXCIrYXJjaGl2ZUlkK1wiJz5cIjtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUZvcm1IdG1sRnJhZ21lbnQgKz0gXCI8aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPSdwYXRoJyB2YWx1ZT0nXCIrbWVkaWEuZG9jUGF0aC5yZXBsYWNlKFwiXFxcXFwiLCBcIlxcXFxcXFxcXCIpLnJlcGxhY2UoXCInXCIsIFwiXFwnXCIpK1wiJz5cIjtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUZvcm1IdG1sRnJhZ21lbnQgKz0gXCI8L2Zvcm0+XCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRmYWtlRm9ybURvbSA9ICQoZmFrZUZvcm1IdG1sRnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiYm9keVwiKS5hcHBlbmQoJGZha2VGb3JtRG9tKTtcbiAgICAgICAgICAgICAgICAgICAgJGZha2VGb3JtRG9tLnN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJHJlbW92ZVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrJylcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoJy9kb2MvbWVkaWEnLHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGFyY2hpdmVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBtZWRpYS5kb2NQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU9uQ2xvc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRzYXZlXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snKVxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQuYWpheCgnL2RvYy9tZWRpYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGFyY2hpdmVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBtZWRpYS5kb2NQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAkdGl0bGUudmFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZG9jSW5mbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkT25DbG9zZSA9IGRvY0luZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250YWluZXIubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHRpdGxlLnZhbCgnJyk7XG4gICAgICAgICAgICAkb3JpZ05hbWUudGV4dCgnJyk7XG4gICAgICAgICAgICAkZG93bmxvYWQuZGF0YSgncGF0aCcsICcnKTtcbiAgICAgICAgICAgICRyZW1vdmUuZGF0YSgncGF0aCcsICcnKTtcbiAgICAgICAgICAgIGFkZE9uQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGRlbGV0ZU9uQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgZHJvcHpvbmUgZnJvbSBcIi4vZHJvcHpvbmVcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCAnZGF0YXRhYmxlcy5uZXQtYnM0JztcbmltcG9ydCBlZGl0TWVkaWEgZnJvbSAnLi9lZGl0LW1lZGlhJ1xuaW1wb3J0IGRvY3VtZW50cyBmcm9tIFwiLi9kb2N1bWVudHNcIjtcbmltcG9ydCBhcmNoaXZhcml1cyBmcm9tIFwiLi9hcmNoaXZhcml1c1wiO1xuXG5sZXQgJGNvbnRhaW5lciwgJHRpdGxlLCAkaWQsICRkcm9wem9uZUZvcm0sICRmaWxlcywgJGZpbGVUYWJsZSwgbmV0VGFibGUsICRkZWxldGVCdG4sICRzYXZlQnRuLCBhY3RpdmVSb3csICRmbG9hdFZhbCwgJGRlc2NyaXB0aW9uO1xubGV0ICRkYXRlVXBkYXRlZCwgJGRhdGVDcmVhdGVkLCAkbG9hZEFyY2hpdmVCdG47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3Qgc2VsZWN0VGFncyA9IGZ1bmN0aW9uICh0YWdzKSB7XG5cbiAgICAgICAgJCgnLnRhZy1pdGVtJywgJGNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICRlbC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKCQuaW5BcnJheSgkZWwudmFsKCksIHRhZ3MpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICRlbC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRjb250YWluZXIgPSAkKCcuc3JjLW1vZGFsJyk7XG4gICAgICAgICAgICAkaWQgPSAkKCcuc3JjLWlkJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkZGVsZXRlQnRuID0gJCgnLmRlbGV0ZScsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJHNhdmVCdG4gPSAkKCcuc2F2ZScsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJHRpdGxlID0gJCgnLnNyYy10aXRsZScsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJGRyb3B6b25lRm9ybSA9ICQoJyNzcmMtbWVkaWEnKTtcbiAgICAgICAgICAgICRmaWxlcyA9ICQoJy5kb2N1bWVudC1saXN0JywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkZmlsZVRhYmxlID0gJCgndGFibGUnLCAkZmlsZXMpO1xuICAgICAgICAgICAgJGZsb2F0VmFsID0gJCgnLnNyYy1mbG9hdCcsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJGRlc2NyaXB0aW9uID0gJCgnLnNyYy10ZXh0JywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkZGF0ZUNyZWF0ZWQgPSAkKCcuZGF0ZS1jcmVhdGVkJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkZGF0ZVVwZGF0ZWQgPSAkKCcuZGF0ZS11cGRhdGVkJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkbG9hZEFyY2hpdmVCdG4gPSAkKCcubG9hZC1hcmNoaXZlJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICBkcm9wem9uZSgpLmluaXQoKTtcbiAgICAgICAgICAgIGVkaXRNZWRpYSgpLmluaXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbkVkaXRGb3JtOiBmdW5jdGlvbiAoYXJjaGl2ZVJlY29yZCkge1xuICAgICAgICAgICAgZHJvcHpvbmUoKS5kZXN0cm95KCk7XG4gICAgICAgICAgICAkZHJvcHpvbmVGb3JtLmRhdGEoJ2lkJywgYXJjaGl2ZVJlY29yZC5pZCk7XG4gICAgICAgICAgICBkcm9wem9uZSgpLmluaXQoKTtcbiAgICAgICAgICAgICRpZC50ZXh0KGFyY2hpdmVSZWNvcmQuaWQpO1xuICAgICAgICAgICAgJHRpdGxlLnZhbChhcmNoaXZlUmVjb3JkLnRpdGxlKTtcbiAgICAgICAgICAgICRkZXNjcmlwdGlvbi52YWwoYXJjaGl2ZVJlY29yZC5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAkZmxvYXRWYWwudmFsKHBhcnNlRmxvYXQoYXJjaGl2ZVJlY29yZC5mbG9hdFZhbCkpO1xuICAgICAgICAgICAgJGRhdGVDcmVhdGVkLnRleHQoYXJjaGl2ZVJlY29yZC5jcmVhdGVkQXQpO1xuICAgICAgICAgICAgJGRhdGVVcGRhdGVkLnRleHQoYXJjaGl2ZVJlY29yZC51cGRhdGVkQXQpO1xuXG4gICAgICAgICAgICAkbG9hZEFyY2hpdmVCdG4ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhcmNoaXZhcml1cygpLmRvd25sb2FkKFthcmNoaXZlUmVjb3JkLmlkXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2VsZWN0VGFncyhhcmNoaXZlUmVjb3JkLnRhZ3MpO1xuXG4gICAgICAgICAgICAkY29udGFpbmVyLm1vZGFsKCk7XG5cbiAgICAgICAgICAgICRkZWxldGVCdG4ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoJy9kb2MvJyArIGFyY2hpdmVSZWNvcmQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudHMoKS5yZW1vdmVBY3RpdmVSb3coKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRzYXZlQnRuLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YWdzID0gW107XG4gICAgICAgICAgICAgICAgJCgnLnRhZy1pdGVtOmNoZWNrYm94OmNoZWNrZWQnLCAkY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKGkpe1xuICAgICAgICAgICAgICAgICAgICB0YWdzW2ldID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQuYWpheCgnL2RvYy8nICsgYXJjaGl2ZVJlY29yZC5pZCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJHRpdGxlLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbi52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0VmFsOiAkZmxvYXRWYWwudmFsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiB0YWdzXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoYXJjaGl2ZVJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudHMoKS5yZW1vdmVBY3RpdmVSb3coKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRzKCkuYWRkUm93KGFyY2hpdmVSZWNvcmQpXG4gICAgICAgICAgICAgICAgICAgICRjb250YWluZXIubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobmV0VGFibGUpIHtcbiAgICAgICAgICAgICAgICBuZXRUYWJsZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ldFRhYmxlID0gJGZpbGVUYWJsZS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgICAgIHBhZ2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcmRlcmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbmZvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICAgICAgICAgICAgICBlbXB0eVRhYmxlOiAkZmlsZVRhYmxlLmRhdGEoJ3RleHQnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICB7ZGF0YTogJ2RvY1RpdGxlJ30sXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhOiAnZG9jT3JpZ05hbWUnfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGRhdGE6IGFyY2hpdmVSZWNvcmQuZG9jdW1lbnRzLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRyb3B6b25lKCkuZGVzdHJveSgpO1xuICAgICAgICAgICAgJGRyb3B6b25lRm9ybS5kYXRhKCdpZCcsIGFyY2hpdmVSZWNvcmQuaWQpO1xuICAgICAgICAgICAgZHJvcHpvbmUoKS5pbml0KGZ1bmN0aW9uIChkb2NJbmZvKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlUm93ID0gbmV0VGFibGUucm93LmFkZChkb2NJbmZvKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVSb3cuZHJhdygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ3Rib2R5JywgJGZpbGVUYWJsZSkub2ZmKCdjbGljaycpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVSb3cgPSBuZXRUYWJsZS5yb3codGhpcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGl2ZVJvdy5kYXRhKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmhhc093blByb3BlcnR5KCdkb2NUaXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGVkaXRNZWRpYSgpLnNob3coYXJjaGl2ZVJlY29yZC5pZCwgZGF0YSwgZnVuY3Rpb24gKGFjdGlvbiwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLm1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVSb3cucmVtb3ZlKCkuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVJvdyA9IG5ldFRhYmxlLnJvdy5hZGQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVSb3cuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUm93ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVkaXRNZWRpYSgpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGRyb3B6b25lKCkuZGVzdHJveSgpO1xuICAgICAgICAgICAgJGlkLnRleHQoJycpO1xuICAgICAgICAgICAgJHRpdGxlLnZhbCgnJyk7XG4gICAgICAgICAgICAkc2F2ZUJ0bi5vZmYoJ2NsaWNrJyk7XG4gICAgICAgICAgICAkZGVsZXRlQnRuLm9mZignY2xpY2snKTtcbiAgICAgICAgICAgICRkYXRlVXBkYXRlZC50ZXh0KCcnKTtcbiAgICAgICAgICAgICRkYXRlQ3JlYXRlZC50ZXh0KCcnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgdGFnU2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncy10YWcnO1xuXG5sZXQgbXlDaGFydCwgY29uZmlnLCAkdG90YWwsICRpc1VuaXF1ZUNoZWNrLCBjdXJEYXRhID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IHVwZGF0ZVRvdGFsID0gZnVuY3Rpb24gKHRvdGFsKSB7XG4gICAgICAgICR0b3RhbC50ZXh0KHRvdGFsLnRvRml4ZWQoMikpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRhZ0NvbG9yID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICAgICAgY29uc3QgdGFncyA9IHRhZ1NldHRpbmdzKCkuZ2V0VGFncygpO1xuICAgICAgICBmb3IgKGxldCBpIGluIHRhZ3MpIHtcbiAgICAgICAgICAgIGlmICghdGFncy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhZ3NbaV0udGl0bGUgPT09IHRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFnc1tpXS5jb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyMwMDAnO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbG9hZENoYXJ0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcblxuICAgICAgICBjb25zdCBpc1VuaXF1ZVZhbHVlRm9yVGFnID0gJGlzVW5pcXVlQ2hlY2suaXMoJzpjaGVja2VkJyk7XG4gICAgICAgIGNvbmZpZy5kYXRhLmRhdGFzZXRzID0gW107XG4gICAgICAgIGNvbmZpZy5kYXRhLmxhYmVscyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHRhZ3MgPSB7fTtcbiAgICAgICAgY29uc3QgZG9jcyA9IGRhdGFbJ2RvY3VtZW50cyddO1xuICAgICAgICBmb3IgKGxldCBpIGluIGRvY3MpIHtcbiAgICAgICAgICAgIGlmICghZG9jcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RG9jID0gZG9jc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ0xpc3QgPSBjdXJyZW50RG9jLnRhZ3M7XG4gICAgICAgICAgICBmb3IgKGxldCB0YWdLZXkgaW4gdGFnTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmICghdGFnTGlzdC5oYXNPd25Qcm9wZXJ0eSh0YWdLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdMaXN0W3RhZ0tleV07XG4gICAgICAgICAgICAgICAgaWYgKCF0YWdzLmhhc093blByb3BlcnR5KHRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3NbdGFnTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdFZhbDogcGFyc2VGbG9hdChjdXJyZW50RG9jLmZsb2F0VmFsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0YWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdldFRhZ0NvbG9yKHRhZ05hbWUpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHBhcnNlRmxvYXQodGFnc1t0YWdOYW1lXS5mbG9hdFZhbCkgKyBwYXJzZUZsb2F0KGN1cnJlbnREb2MuZmxvYXRWYWwpO1xuICAgICAgICAgICAgICAgICAgICB0YWdzW3RhZ05hbWVdLmZsb2F0VmFsID0gcmVzLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvdGFsICs9IGN1cnJlbnREb2MuZmxvYXRWYWw7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNVbmlxdWVWYWx1ZUZvclRhZykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUb3RhbCh0b3RhbCk7XG5cbiAgICAgICAgY29uc3QgZGF0YXNldCA9IHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCcsXG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW10sXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGFncykge1xuICAgICAgICAgICAgaWYgKCF0YWdzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFnID0gdGFnc1tpXTtcbiAgICAgICAgICAgIGNvbmZpZy5kYXRhLmxhYmVscy5wdXNoKGN1cnJlbnRUYWcudGl0bGUpO1xuICAgICAgICAgICAgZGF0YXNldC5kYXRhLnB1c2goY3VycmVudFRhZy5mbG9hdFZhbCk7XG4gICAgICAgICAgICBkYXRhc2V0LmJhY2tncm91bmRDb2xvci5wdXNoKGN1cnJlbnRUYWcuY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5kYXRhLmRhdGFzZXRzLnB1c2goZGF0YXNldClcblxuICAgICAgICBteUNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICR0b3RhbCA9ICQoJy50b3RhbC1mbG9hdHZhbHMnKTtcbiAgICAgICAgICAgICRpc1VuaXF1ZUNoZWNrID0gJCgnLmFnZ3JlZ2F0ZS1mbG9hdHZhbCcpO1xuICAgICAgICAgICAgJGlzVW5pcXVlQ2hlY2suY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZWxvYWRDaGFydChjdXJEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoVGFnQ2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgY29uc3QgJGN0eCA9ICQoJyNzZWFyY2hUYWdDaGFydCcpO1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW10sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogW10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICRjdHguZGF0YSgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVJvdGF0ZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ2hhcnQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjdXJEYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHJlbG9hZENoYXJ0KGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25maWcuZGF0YS5kYXRhc2V0cy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBteUNoYXJ0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgJGlzVW5pcXVlQ2hlY2sub2ZmKCdjbGljaycpO1xuICAgICAgICAgICAgdXBkYXRlVG90YWwoMCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBkb2N1bWVudHMgZnJvbSBcIi4vZG9jdW1lbnRzXCI7XG5pbXBvcnQgc2VhcmNoQ2hhcnQgZnJvbSBcIi4vc2VhcmNoLWNoYXJ0XCI7XG5pbXBvcnQgYXJjaGl2YXJpdXMgZnJvbSBcIi4vYXJjaGl2YXJpdXNcIjtcblxubGV0ICRzZWVrZXJHcm91cCwgJHNlZWtlcklucHV0LCAkc2Vla2VyVGFncywgJHNlYXJjaEJ0biwgJGRvd25sb2FkQnRuO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHJ1blNlZWtlciA9IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSBbXTtcbiAgICAgICAgJCgkc2Vla2VyVGFncykuZWFjaChmdW5jdGlvbihpKXtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgIHRhZ3MucHVzaCgkKHRoaXMpLnZhbCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJC5hamF4KCRzZWVrZXJJbnB1dC5kYXRhKCd1cmwnKSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcTogJHNlZWtlcklucHV0LnZhbCgpLFxuICAgICAgICAgICAgICAgIHRhZ3M6IHRhZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRvY3VtZW50cygpLmxvYWRUYWJsZShyZXNwb25zZSk7XG4gICAgICAgICAgICBzZWFyY2hDaGFydCgpLnVwZGF0ZUNoYXJ0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgZG9uZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgZG9jdW1lbnRzKCkuaW5pdCgpO1xuXG4gICAgICAgICAgICAkc2Vla2VyR3JvdXAgPSAkKCcuc2Vla2VyLWdyb3VwJyk7XG4gICAgICAgICAgICAkc2Vla2VySW5wdXQgPSAkKCcuc2Vla2VyJywgJHNlZWtlckdyb3VwKTtcbiAgICAgICAgICAgICRzZWFyY2hCdG4gPSAkKCcuc2VhcmNoLWJ0bicsICRzZWVrZXJHcm91cCk7XG4gICAgICAgICAgICAkZG93bmxvYWRCdG4gPSAkKCcuZG93bmxvYWQtc2VhcmNoLXJlc3VsdHMnLCAkc2Vla2VyR3JvdXApO1xuICAgICAgICAgICAgJHNlZWtlclRhZ3MgPSAkKCcudGFnLWl0ZW0nLCAkc2Vla2VyR3JvdXApO1xuXG4gICAgICAgICAgICAkc2Vla2VySW5wdXQub2ZmKCdrZXlwcmVzcycpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1blNlZWtlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICRzZWVrZXJUYWdzLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuU2Vla2VyKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHNlYXJjaEJ0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1blNlZWtlcigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRkb3dubG9hZEJ0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1blNlZWtlcihmdW5jdGlvbiAocmVzb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBhcmNoaXZlUmVjb3JkIG9mIHJlc291cmNlcy5kb2N1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkcy5wdXNoKGFyY2hpdmVSZWNvcmQuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmNoaXZhcml1cygpLmRvd25sb2FkKGlkcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJ1blNlZWtlcigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRzZWVrZXJJbnB1dC5vZmYoJ2tleXByZXNzJyk7XG4gICAgICAgICAgICAkc2VhcmNoQnRuLm9mZignY2xpY2snKTtcbiAgICAgICAgICAgICRzZWVrZXJUYWdzLm9mZignY2xpY2snKTtcblxuICAgICAgICAgICAgZG9jdW1lbnRzKCkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmxldCAkY29udGFpbmVyLCAkcHJvamVjdENoZWNrYm94LCAkdXNlcnNDaGVja2JveCwgJHNldHRpbmdzQ29udGFpbmVyO1xubGV0ICR1c2Vyc1RhYkJ0biwgJHByb2plY3RzVGFiQnRuO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHNlbmRTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJC5hamF4KCcvc2V0dGluZ3MnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHByb2plY3RzOiAkcHJvamVjdENoZWNrYm94LmlzKCc6Y2hlY2tlZCcpLFxuICAgICAgICAgICAgICAgIHVzZXJzOiAkdXNlcnNDaGVja2JveC5pcygnOmNoZWNrZWQnKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXR0aW5ncygpLnNldFJlbG9hZE9uQ2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRjb250YWluZXIgPSAkKCcuY29uZmlnLXNldHRpbmdzJyk7XG4gICAgICAgICAgICAkcHJvamVjdENoZWNrYm94ID0gJCgnI3Byb2plY3RzLWNoZWNrYm94JywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkdXNlcnNDaGVja2JveCA9ICQoJyN1c2Vycy1jaGVja2JveCcsICRjb250YWluZXIpO1xuXG4gICAgICAgICAgICAkc2V0dGluZ3NDb250YWluZXIgPSAkKCcuc2V0dGluZ3MtbW9kYWwnKTtcbiAgICAgICAgICAgICR1c2Vyc1RhYkJ0biA9ICQoJy5zZXR0aW5nLXVzZXJzLWJ0bicsICRzZXR0aW5nc0NvbnRhaW5lcikuY2xvc2VzdCgnLm5hdi1pdGVtJyk7XG4gICAgICAgICAgICAkcHJvamVjdHNUYWJCdG4gPSAkKCcuc2V0dGluZy1wcm9qZWN0cy1idG4nLCAkc2V0dGluZ3NDb250YWluZXIpLmNsb3Nlc3QoJy5uYXYtaXRlbScpO1xuXG4gICAgICAgICAgICAkcHJvamVjdENoZWNrYm94Lm9mZignY2hhbmdlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICRwcm9qZWN0c1RhYkJ0bi5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHByb2plY3RzVGFiQnRuLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VuZFNldHRpbmdzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICR1c2Vyc0NoZWNrYm94Lm9mZignY2hhbmdlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICR1c2Vyc1RhYkJ0bi5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJzVGFiQnRuLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VuZFNldHRpbmdzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHByb2plY3RDaGVja2JveC5vZmYoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJHVzZXJzQ2hlY2tib3gub2ZmKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmxldCAkY29udGFpbmVyLCAkYWRkRm9ybTtcbmxldCAkYWRkQnRuLCAkY29sb3IsICR0aXRsZSwgJHR5cGUsICRpc1ByaW1hcnksIGN1cnJlbnRUeXBlID0gJ2ZpbmFuY2UnLCAkdHlwZUxpc3RHcm91cDtcbmxldCAkbGlzdEdyb3VwLCAkdGFiQ29udGVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0TGlzdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0ICRhID0gJCgnPGE+Jyk7XG4gICAgICAgICRhLmFkZENsYXNzKCdsaXN0LWdyb3VwLWl0ZW0nKTtcbiAgICAgICAgJGEuYWRkQ2xhc3MoJ2xpc3QtZ3JvdXAtaXRlbS1hY3Rpb24nKTtcbiAgICAgICAgJGEuYXR0cignaWQnLCBgbGlzdC0ke3Byb2plY3QuaWR9YCk7XG4gICAgICAgICRhLmRhdGEoJ3RvZ2dsZScsICdsaXN0Jyk7XG4gICAgICAgICRhLmF0dHIoJ3JvbGUnLCAndGFiJyk7XG4gICAgICAgICRhLmF0dHIoJ2FyaWEtY29udHJvbHMnLCBwcm9qZWN0LmlkKTtcbiAgICAgICAgJGEudGV4dChwcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgJGEub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24uYWN0aXZlJywgJGxpc3RHcm91cCkucmVtb3ZlQ2xhc3MoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy50YWItcGFuZS5zaG93JywgJHRhYkNvbnRlbnQpLnJlbW92ZUNsYXNzKCcuc2hvdycpO1xuICAgICAgICAgICAgJCgnLnRhYi1wYW5lLmFjdGl2ZScsICR0YWJDb250ZW50KS5yZW1vdmVDbGFzcygnLmFjdGl2ZScpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJChgIyR7cHJvamVjdC5pZH1gKTtcbiAgICAgICAgICAgICRjb250ZW50LmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICAkY29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgICRhLnByZXBlbmRUbygkbGlzdEdyb3VwKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGVudCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0ICRkaXYgPSAkKCc8ZGl2PicpO1xuICAgICAgICAkZGl2LmFkZENsYXNzKCd0YWItcGFuZScpO1xuICAgICAgICAkZGl2LmFkZENsYXNzKCdmYWRlJyk7XG4gICAgICAgICRkaXYuYXR0cignaWQnLCBwcm9qZWN0LmlkKTtcbiAgICAgICAgJGRpdi5hdHRyKCdyb2xlJywgJ3RhYnBhbmVsJyk7XG4gICAgICAgICRkaXYuYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgYGxpc3QtJHtwcm9qZWN0LmlkfWApO1xuICAgICAgICAkZGl2LnRleHQoJ3Rlc3QnKVxuICAgICAgICAkZGl2LmFwcGVuZFRvKCR0YWJDb250ZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgYWRkUHJvamVjdExpc3QocHJvamVjdCk7XG4gICAgICAgIGFkZFByb2plY3RDb250ZW50KHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJC5hamF4KCcvcHJvamVjdHMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXNwb25zZS5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJC5hamF4KCcvcHJvamVjdHMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLnZhbCgpLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAkdGl0bGUudmFsKCksXG4gICAgICAgICAgICAgICAgdHlwZTogY3VycmVudFR5cGUsXG4gICAgICAgICAgICAgICAgcHJpbWFyeTogJGlzUHJpbWFyeS5pcygnOmNoZWNrZWQnKSA/IDEgOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaEFkZEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRhZGRCdG4gPSAkKCcuYnV0dG9uLWFkZCcsICRhZGRGb3JtKTtcbiAgICAgICAgJGFkZEJ0blxuICAgICAgICAgICAgLm9mZignY2xpY2snKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAkY29sb3IgPSAkKCcuY29sb3InLCAkYWRkRm9ybSk7XG4gICAgICAgICR0aXRsZSA9ICQoJy50aXRsZScsICRhZGRGb3JtKTtcbiAgICAgICAgJHR5cGUgPSAkKCcudHlwZScsICRhZGRGb3JtKTtcbiAgICAgICAgJHR5cGVMaXN0R3JvdXAgPSAkKCcubGlzdC1ncm91cC1pdGVtJywgJHR5cGUpO1xuICAgICAgICAkdHlwZUxpc3RHcm91cFxuICAgICAgICAgICAgLm9mZignY2xpY2snKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgJCgnLmxpc3QtZ3JvdXAtaXRlbScsICR0eXBlKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGVsID0gJChlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgJGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VHlwZSA9ICRlbC5oYXNDbGFzcygnZmluYW5jZScpID8gJ2ZpbmFuY2UnIDogJ2RvY3VtZW50cyc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAkaXNQcmltYXJ5ID0gJCgnLnByaW1hcnknLCAkYWRkRm9ybSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGV0YWNoQWRkRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGFkZEJ0bi5vZmYoJ2NsaWNrJyk7XG4gICAgICAgICR0eXBlTGlzdEdyb3VwLm9mZignY2xpY2snKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hBZGRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjbGlzdC1uZXctcHJvamVjdCcpLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUnLCAkbGlzdEdyb3VwKS5yZW1vdmVDbGFzcygnLmFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLnRhYi1wYW5lLnNob3cnLCAkdGFiQ29udGVudCkucmVtb3ZlQ2xhc3MoJy5zaG93Jyk7XG4gICAgICAgICAgICAkKCcudGFiLXBhbmUuYWN0aXZlJywgJHRhYkNvbnRlbnQpLnJlbW92ZUNsYXNzKCcuYWN0aXZlJyk7XG5cblxuICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKGAjbmV3LXByb2plY3RgKTtcbiAgICAgICAgICAgICRjb250ZW50LmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICAkY29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaW5pdEFkZFByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF0dGFjaEFkZExpc3QoKTtcbiAgICAgICAgYXR0YWNoQWRkRm9ybSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRjb250YWluZXIgPSAkKCcucHJvamVjdHMtdGFiJyk7XG4gICAgICAgICAgICAkYWRkRm9ybSA9ICQoJy5hZGQtZm9ybScsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJGxpc3RHcm91cCA9ICQoJy5wcm9qZWN0cy1saXN0LWdyb3VwJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkdGFiQ29udGVudCA9ICQoJy5wcm9qZWN0cy10YWItY29udGVudCcsICRjb250YWluZXIpO1xuICAgICAgICAgICAgaW5pdEFkZFByb2plY3QoKTtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZXRhY2hBZGRGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1iczQnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmxldCAkY29udGFpbmVyLCAkdGl0bGUsICR0YWJsZSwgJHNhdmUsICRjb2xvciwgbmV0VGFibGUsICR0YWdzTGlzdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBhZGRUb1RhYmxlID0gZnVuY3Rpb24gKHRhZykge1xuICAgICAgICBjb25zdCBhY3RpdmVSb3cgPSBuZXRUYWJsZS5yb3cuYWRkKCB0YWcgKTtcbiAgICAgICAgYWN0aXZlUm93LmRyYXcoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQuYWpheCgnL3RhZ3MnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJHRpdGxlLnZhbCgpLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3IudmFsKCksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgc2V0dGluZ3MoKS5zZXRSZWxvYWRPbkNsb3NlKCk7XG4gICAgICAgICAgICBhZGRUb1RhYmxlKHRhZyk7XG4gICAgICAgICAgICAkdGl0bGUudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkVGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQuYWpheCgnL3RhZ3MnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICBpZiAoIW5ldFRhYmxlKSB7XG4gICAgICAgICAgICAgICAgbmV0VGFibGUgPSAkdGFibGUuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5mbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eVRhYmxlOiAkdGFibGUuZGF0YSgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YTogJ3RpdGxlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBkYXRhOiAnY29sb3InIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3AudGFncyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgndGJvZHknLCAkdGFibGUpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVSb3cgPSBuZXRUYWJsZS5yb3coIHRoaXMgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aXZlUm93LmRhdGEoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBjb25maXJtKCR0YWJsZS5kYXRhKCdkZWxldGUnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KCcvdGFncycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncygpLnNldFJlbG9hZE9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVJvdy5yZW1vdmUoKS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgICAgICAkc2F2ZS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFkZFRhZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRjb250YWluZXIgPSAkKCcuYWRkLXRhZy1mb3JtJyk7XG4gICAgICAgICAgICAkdGl0bGUgPSAkKCcudGFnLW5hbWUnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRjb2xvciA9ICQoJy5jb2xvcicsICRjb250YWluZXIpO1xuICAgICAgICAgICAgJHNhdmUgPSAkKCcuYnV0dG9uLWFkZC10YWcnLCAkY29udGFpbmVyKTtcblxuICAgICAgICAgICAgJHRhZ3NMaXN0ID0gJCgnLnRhZ3MtbGlzdCcpO1xuICAgICAgICAgICAgJHRhYmxlID0gJCgndGFibGUnLCAkdGFnc0xpc3QpO1xuICAgICAgICAgICAgbG9hZFRhYmxlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRhZ3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldFRhYmxlLmRhdGEoKVxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkdGl0bGUudmFsKCcnKTtcbiAgICAgICAgICAgICRjb2xvci52YWwoJycpO1xuICAgICAgICAgICAgJHRhYmxlLmhpZGUoKTtcbiAgICAgICAgICAgICRzYXZlLm9mZignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHNldHRpbmdzQ29uZmlnIGZyb20gJy4vc2V0dGluZ3MtY29uZmlnJztcbmltcG9ydCBzZXR0aW5nc1Byb2plY3RzIGZyb20gJy4vc2V0dGluZ3MtcHJvamVjdHMnO1xuXG5sZXQgJGJ0biwgJGNvbnRhaW5lcjtcbmxldCAkdGFnc1RhYkJ0biwgJHVzZXJzVGFiQnRuLCAkcHJvamVjdHNUYWJCdG4sICRjb25maWdUYWJCdG47XG5sZXQgJHRhZ3NTZWN0aW9uLCAkdXNlcnNTZWN0aW9uLCAkcHJvamVjdHNTZWN0aW9uLCAkY29uZmlnU2VjdGlvbjtcbmxldCByZXF1aXJlUmVsb2FkID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IHNldEFjdGl2ZVRhYiA9IGZ1bmN0aW9uICh0YWJOYW1lKSB7XG4gICAgICAgICR0YWdzVGFiQnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJHVzZXJzVGFiQnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJHByb2plY3RzVGFiQnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJGNvbmZpZ1RhYkJ0bi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICR0YWdzU2VjdGlvbi5oaWRlKCk7XG4gICAgICAgICR1c2Vyc1NlY3Rpb24uaGlkZSgpO1xuICAgICAgICAkcHJvamVjdHNTZWN0aW9uLmhpZGUoKTtcbiAgICAgICAgJGNvbmZpZ1NlY3Rpb24uaGlkZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodGFiTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAndGFncyc6XG4gICAgICAgICAgICAgICAgJHRhZ3NUYWJCdG4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0YWdzU2VjdGlvbi5zaG93KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1c2Vycyc6XG4gICAgICAgICAgICAgICAgJHVzZXJzVGFiQnRuLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkdXNlcnNTZWN0aW9uLnNob3coKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3RzJzpcbiAgICAgICAgICAgICAgICAkcHJvamVjdHNUYWJCdG4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICRwcm9qZWN0c1NlY3Rpb24uc2hvdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcbiAgICAgICAgICAgICAgICAkY29uZmlnVGFiQnRuLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkY29uZmlnU2VjdGlvbi5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkYnRuID0gJCgnLnNldHRpbmdzJyk7XG4gICAgICAgICAgICAkY29udGFpbmVyID0gJCgnLnNldHRpbmdzLW1vZGFsJyk7XG4gICAgICAgICAgICAkY29udGFpbmVyLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlUmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGJ0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRjb250YWluZXIubW9kYWwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkdGFnc1NlY3Rpb24gPSAkKCcudGFnLXNldHRpbmdzJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkdXNlcnNTZWN0aW9uID0gJCgnLnVzZXJzLXNldHRpbmdzJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkcHJvamVjdHNTZWN0aW9uID0gJCgnLnByb2plY3Qtc2V0dGluZ3MnLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICRjb25maWdTZWN0aW9uID0gJCgnLmNvbmZpZy1zZXR0aW5ncycsICRjb250YWluZXIpO1xuXG4gICAgICAgICAgICAkdGFnc1RhYkJ0biA9ICQoJy5zZXR0aW5nLXRhZ3MtYnRuJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkdGFnc1RhYkJ0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVRhYigndGFncycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkdXNlcnNUYWJCdG4gPSAkKCcuc2V0dGluZy11c2Vycy1idG4nLCAkY29udGFpbmVyKTtcbiAgICAgICAgICAgICR1c2Vyc1RhYkJ0bi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVRhYigndXNlcnMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJHByb2plY3RzVGFiQnRuID0gJCgnLnNldHRpbmctcHJvamVjdHMtYnRuJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkcHJvamVjdHNUYWJCdG4ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVUYWIoJ3Byb2plY3RzJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRjb25maWdUYWJCdG4gPSAkKCcuc2V0dGluZy1jb25maWctYnRuJywgJGNvbnRhaW5lcik7XG4gICAgICAgICAgICAkY29uZmlnVGFiQnRuLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlVGFiKCdjb25maWcnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRBY3RpdmVUYWIoJ3RhZ3MnKTtcblxuICAgICAgICAgICAgc2V0dGluZ3NDb25maWcoKS5pbml0KCk7XG4gICAgICAgICAgICBzZXR0aW5nc1Byb2plY3RzKCkuaW5pdCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFJlbG9hZE9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlcXVpcmVSZWxvYWQgPSB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRidG4ub2ZmKCdjbGljaycpO1xuICAgICAgICAgICAgc2V0QWN0aXZlVGFiKCd0YWdzJyk7XG4gICAgICAgICAgICAkcHJvamVjdHNUYWJCdG4ub2ZmKCdjbGljaycpO1xuICAgICAgICAgICAgJHVzZXJzVGFiQnRuLm9mZignY2xpY2snKTtcbiAgICAgICAgICAgICR0YWdzVGFiQnRuLm9mZignY2xpY2snKTtcblxuICAgICAgICAgICAgc2V0dGluZ3NDb25maWcoKS5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZXR0aW5nc1Byb2plY3RzKCkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0IHNlZWtlciBmcm9tICcuLi9jb21wb25lbnRzL3NlZWtlcic7XG5pbXBvcnQgY3JlYXRlQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL2NyZWF0ZS1idXR0b25cIjtcbmltcG9ydCBlZGl0UmVjb3JkIGZyb20gJy4uL2NvbXBvbmVudHMvZWRpdC1yZWNvcmQnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuLi9jb21wb25lbnRzL3NldHRpbmdzXCI7XG5pbXBvcnQgc2VhcmNoQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VhcmNoLWNoYXJ0XCI7XG5pbXBvcnQgdGFnU2V0dGluZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2V0dGluZ3MtdGFnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGFnU2V0dGluZ3MoKS5pbml0KCk7XG4gICAgICAgIHNldHRpbmdzKCkuaW5pdCgpO1xuICAgICAgICBlZGl0UmVjb3JkKCkuaW5pdCgpO1xuICAgICAgICBzZWVrZXIoKS5pbml0KCk7XG4gICAgICAgIGNyZWF0ZUJ0bigpLmluaXQoKTtcbiAgICAgICAgc2VhcmNoQ2hhcnQoKS5pbml0KCk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGFnU2V0dGluZ3MoKS5kZXN0cm95KCk7XG4gICAgICAgIHNldHRpbmdzKCkuZGVzdHJveSgpO1xuICAgICAgICBlZGl0UmVjb3JkKCkuZGVzdHJveSgpO1xuICAgICAgICBzZWVrZXIoKS5kZXN0cm95KCk7XG4gICAgICAgIGNyZWF0ZUJ0bigpLmRlc3Ryb3koKTtcbiAgICAgICAgc2VhcmNoQ2hhcnQoKS5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi1iZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLWJkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLXNnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW4tc2cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtbXhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy1teC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZmlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWRldmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tZGV2YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL29jLWxuY1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9vYy1sbmMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1tb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLW1vLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=