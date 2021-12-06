"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(266);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(271);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(651);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
// EXTERNAL MODULE: ./node_modules/next/dist/client/image.js
var client_image = __webpack_require__(917);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(49);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var solid_esm = __webpack_require__(802);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/InfoCard.js






function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex py-7 px-2 pr-4 \r border cursor-pointer\r hover:border-red-100\r hover:opacity-85 \r hover:shadow-xl\r hover:bg-red-50\r transition duration-150 ease-in-out  \r first:mt-2\r rounded-2xl\r mb-5\r active:bg-red-300\r active:scale-95",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ml-5",
      children: /*#__PURE__*/jsx_runtime_.jsx(client_image.default, {
        src: img,
        layout: "fill",
        objectFit: "cover",
        className: "rounded-2xl"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col flex-grow pl-5",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-auto justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* HeartIcon */.h_8, {
          className: "h-10\r text-red-500\r hover:fill-current"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-lg",
          children: location
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-2xl font-semibold font-sans text-red-500",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "border-b w-20 pt-2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "font-semibold pt-2 text-sm text-gray-500 flex-grow",
        children: description
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between items-end pt-5",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(solid_esm/* StarIcon */.r7p, {
            className: "h-5 text-red-400"
          }), star]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-lg lg:text-2xl font-semibold pb-2",
            children: price
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-right font-extralight text-md",
            children: total
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ const components_InfoCard = (InfoCard);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "react-map-gl"
const external_react_map_gl_namespaceObject = require("react-map-gl");
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_namespaceObject);
;// CONCATENATED MODULE: external "geolib/es/getCenter"
const getCenter_namespaceObject = require("geolib/es/getCenter");
var getCenter_default = /*#__PURE__*/__webpack_require__.n(getCenter_namespaceObject);
;// CONCATENATED MODULE: ./components/Map.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Map({
  searchResults
}) {
  const {
    0: selectedLocation,
    1: setSelectedlocation
  } = (0,external_react_.useState)({}); //Transform the search results objext into the 
  //{ latitude: 51.503333, longitude: -0.119722 } object

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }));
  const center = getCenter_default()(coordinates);
  const {
    0: viewport,
    1: setViewport
  } = (0,external_react_.useState)({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 13
  });
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_map_gl_default()), _objectSpread(_objectSpread({
    mapStyle: "mapbox://styles/sanktrex99/ckw3m4s1118mf15o4f40auh4i",
    mapboxApiAccessToken: "pk.eyJ1Ijoic2Fua3RyZXg5OSIsImEiOiJja3czbTMycjUxdG1vMm9ubzRweXNvNmZiIn0.RJ2508stkMKZstARUUBZ6A"
  }, viewport), {}, {
    onViewportChange: nextViewport => setViewport(nextViewport),
    children: searchResults.map(result => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_map_gl_namespaceObject.Marker, {
        longitude: result.long,
        latitude: result.lat,
        offsetTop: -10,
        offsetLeft: -20,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "https://img.icons8.com/ios-glyphs/30/000000/map-pin.png",
          className: "cursor-pointer h-10 animate-pulse hover:animate-bounce",
          onClick: () => setSelectedlocation(result)
        })
      }), selectedLocation.long === result.long ? /*#__PURE__*/jsx_runtime_.jsx(external_react_map_gl_namespaceObject.Popup, {
        onClose: () => setSelectedlocation({}),
        closeOnClick: true,
        latitude: result.lat,
        longitude: result.long,
        className: "flex-auto bg-transparent text-lg text-red-600 font-medium font-mono",
        children: result.title
      }) : false]
    }, result.long))
  }));
}

/* harmony default export */ const components_Map = (Map);
;// CONCATENATED MODULE: ./pages/search.js










function Search({
  searchResults
}) {
  const router = (0,client_router.useRouter)(); //ES6 Destructuring

  const {
    location,
    startDate,
    endDate,
    noOfGuests
  } = router.query;
  const formattedLocation = location.toUpperCase();
  const formattedStartDate = (0,external_date_fns_namespaceObject.format)(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = (0,external_date_fns_namespaceObject.format)(new Date(endDate), "dd MMMM yyyy"); // `` allow us to insert JS into a String aka String Interpolation

  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Airbnb Clone Search Results"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "https://cdn.pixabay.com/photo/2018/05/08/21/28/airbnb-3384008_1280.png"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
      placeholder: `${formattedLocation} | ${range} | ${noOfGuests} Guests`
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "flex",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "flex-grow pt-14 px-6",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-xs",
          children: ["300+ Stays for ", noOfGuests, " Guests from ", range]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "text-3xl font-semibold mt-2 mb-6",
          children: ["Stays in ", formattedLocation]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "hidden lg:inline-flex mb-5 space-x-3 text text-gray-800 \r whitespace-nowrap",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Cancellation Flexibility"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Type of Places"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Prices"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Rooms and Beds"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "More Filters"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-col",
          children: searchResults.map(item => {
            return /*#__PURE__*/jsx_runtime_.jsx(components_InfoCard, {
              img: item.img,
              location: item.location,
              title: item.title,
              description: item.description,
              star: item.star,
              price: item.price,
              total: item.total
            }, item.img);
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "hidden xl:inline-flex xl:min-w-[600px]",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Map, {
          searchResults: searchResults
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
}

/* harmony default export */ const search = (Search);
async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
  return {
    props: {
      searchResults
    }
  };
}

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("react-date-range");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [890,49,674], () => (__webpack_exec__(816)));
module.exports = __webpack_exports__;

})();