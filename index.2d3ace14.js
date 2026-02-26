// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ddMC0":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4d94d0802d3ace14";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"4aBH6":[function(require,module,exports) {
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
var _preact = require("preact");
var _app = require("./App");
var _linkGenerator = require("./components/LinkGenerator");
const path = window.location.pathname;
if (path === "/debug") (0, _preact.render)(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _linkGenerator.LinkGenerator), {}, void 0, false, {
    fileName: "src/index.tsx",
    lineNumber: 7,
    columnNumber: 12
}, undefined), document.body);
else (0, _preact.render)(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _app.App), {}, void 0, false, {
    fileName: "src/index.tsx",
    lineNumber: 9,
    columnNumber: 12
}, undefined), document.body);

},{"preact/jsx-dev-runtime":"3mFUL","preact":"26zcy","./App":"7F5Te","./components/LinkGenerator":"S134C"}],"3mFUL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Fragment", ()=>(0, _preact.Fragment));
parcelHelpers.export(exports, "jsx", ()=>o);
parcelHelpers.export(exports, "jsxDEV", ()=>o);
parcelHelpers.export(exports, "jsxs", ()=>o);
var _preact = require("preact");
var _ = 0;
function o(o, e, n, t, f, l) {
    var s, u, a = {};
    for(u in e)"ref" == u ? s = e[u] : a[u] = e[u];
    var i = {
        type: o,
        props: a,
        key: n,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --_,
        __source: f,
        __self: l
    };
    if ("function" == typeof o && (s = o.defaultProps)) for(u in s)void 0 === a[u] && (a[u] = s[u]);
    return (0, _preact.options).vnode && (0, _preact.options).vnode(i), i;
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26zcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>k);
parcelHelpers.export(exports, "Fragment", ()=>_);
parcelHelpers.export(exports, "cloneElement", ()=>E);
parcelHelpers.export(exports, "createContext", ()=>F);
parcelHelpers.export(exports, "createElement", ()=>y);
parcelHelpers.export(exports, "createRef", ()=>d);
parcelHelpers.export(exports, "h", ()=>y);
parcelHelpers.export(exports, "hydrate", ()=>D);
parcelHelpers.export(exports, "isValidElement", ()=>i);
parcelHelpers.export(exports, "options", ()=>l);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "toChildArray", ()=>P);
var n, l, u, i, t, r, o, f, e, c = {}, s = [], a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function v(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
}
function y(l, u, i) {
    var t, r, o, f = {};
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for(o in l.defaultProps)void 0 === f[o] && (f[o] = l.defaultProps[o]);
    return p(l, f, t, r, null);
}
function p(n, i, t, r, o) {
    var f = {
        type: n,
        props: i,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++u : o
    };
    return null == o && null != l.vnode && l.vnode(f), f;
}
function d() {
    return {
        current: null
    };
}
function _(n) {
    return n.children;
}
function k(n, l) {
    this.props = n, this.context = l;
}
function b(n, l) {
    if (null == l) return n.__ ? b(n.__, n.__.__k.indexOf(n) + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? b(n) : null;
}
function g(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return g(n);
    }
}
function m(n) {
    (!n.__d && (n.__d = !0) && t.push(n) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
}
function w() {
    var n, l, u, i, r, o, e, c;
    for(t.sort(f); n = t.shift();)n.__d && (l = t.length, i = void 0, r = void 0, e = (o = (u = n).__v).__e, (c = u.__P) && (i = [], (r = h({}, o)).__v = o.__v + 1, L(c, o, r, u.__n, void 0 !== c.ownerSVGElement, null != o.__h ? [
        e
    ] : null, i, null == e ? b(o) : e, o.__h), M(i, o), o.__e != e && g(o)), t.length > l && t.sort(f));
    w.__r = 0;
}
function x(n, l, u, i, t, r, o, f, e, a) {
    var h, v, y, d, k, g, m, w = i && i.__k || s, x = w.length;
    for(u.__k = [], h = 0; h < l.length; h++)if (null != (d = u.__k[h] = null == (d = l[h]) || "boolean" == typeof d || "function" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? p(null, d, null, null, d) : Array.isArray(d) ? p(_, {
        children: d
    }, null, null, null) : d.__b > 0 ? p(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d)) {
        if (d.__ = u, d.__b = u.__b + 1, null === (y = w[h]) || y && d.key == y.key && d.type === y.type) w[h] = void 0;
        else for(v = 0; v < x; v++){
            if ((y = w[v]) && d.key == y.key && d.type === y.type) {
                w[v] = void 0;
                break;
            }
            y = null;
        }
        L(n, d, y = y || c, t, r, o, f, e, a), k = d.__e, (v = d.ref) && y.ref != v && (m || (m = []), y.ref && m.push(y.ref, null, d), m.push(v, d.__c || k, d)), null != k ? (null == g && (g = k), "function" == typeof d.type && d.__k === y.__k ? d.__d = e = A(d, e, n) : e = C(n, d, y, w, k, e), "function" == typeof u.type && (u.__d = e)) : e && y.__e == e && e.parentNode != n && (e = b(y));
    }
    for(u.__e = g, h = x; h--;)null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = $(i).nextSibling), S(w[h], w[h]));
    if (m) for(h = 0; h < m.length; h++)O(m[h], m[++h], m[++h]);
}
function A(n, l, u) {
    for(var i, t = n.__k, r = 0; t && r < t.length; r++)(i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? A(i, l, u) : C(u, i, i, t, i.__e, l));
    return l;
}
function P(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function(n) {
        P(n, l);
    }) : l.push(n)), l;
}
function C(n, l, u, i, t, r) {
    var o, f, e;
    if (void 0 !== l.__d) o = l.__d, l.__d = void 0;
    else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;
    else {
        for(f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 1)if (f == t) break n;
        n.insertBefore(t, r), o = r;
    }
    return void 0 !== o ? o : t.nextSibling;
}
function $(n) {
    var l, u, i;
    if (null == n.type || "string" == typeof n.type) return n.__e;
    if (n.__k) {
        for(l = n.__k.length - 1; l >= 0; l--)if ((u = n.__k[l]) && (i = $(u))) return i;
    }
    return null;
}
function H(n, l, u, i, t) {
    var r;
    for(r in u)"children" === r || "key" === r || r in l || T(n, r, null, u[r], i);
    for(r in l)t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || T(n, r, l[r], u[r], i);
}
function I(n, l, u) {
    "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a.test(l) ? u : u + "px";
}
function T(n, l, u, i, t) {
    var r;
    n: if ("style" === l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof i && (n.style.cssText = i = ""), i) for(l in i)u && l in u || I(n.style, l, "");
            if (u) for(l in u)i && u[l] === i[l] || I(n.style, l, u[l]);
        }
    } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? z : j, r) : n.removeEventListener(l, r ? z : j, r);
    else if ("dangerouslySetInnerHTML" !== l) {
        if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
}
function j(n) {
    return this.l[n.type + !1](l.event ? l.event(n) : n);
}
function z(n) {
    return this.l[n.type + !0](l.event ? l.event(n) : n);
}
function L(n, u, i, t, r, o, f, e, c) {
    var s, a, v, y, p, d, b, g, m, w, A, P, C, $, H, I = u.type;
    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [
        e
    ]), (s = l.__b) && s(u);
    try {
        n: if ("function" == typeof I) {
            if (g = u.props, m = (s = I.contextType) && t[s.__c], w = s ? m ? m.props.value : s.__ : t, i.__c ? b = (a = u.__c = i.__c).__ = a.__E : ("prototype" in I && I.prototype.render ? u.__c = a = new I(g, w) : (u.__c = a = new k(g, w), a.constructor = I, a.render = q), m && m.sub(a), a.props = g, a.state || (a.state = {}), a.context = w, a.__n = t, v = a.__d = !0, a.__h = [], a._sb = []), null == a.__s && (a.__s = a.state), null != I.getDerivedStateFromProps && (a.__s == a.state && (a.__s = h({}, a.__s)), h(a.__s, I.getDerivedStateFromProps(g, a.__s))), y = a.props, p = a.state, a.__v = u, v) null == I.getDerivedStateFromProps && null != a.componentWillMount && a.componentWillMount(), null != a.componentDidMount && a.__h.push(a.componentDidMount);
            else {
                if (null == I.getDerivedStateFromProps && g !== y && null != a.componentWillReceiveProps && a.componentWillReceiveProps(g, w), !a.__e && null != a.shouldComponentUpdate && !1 === a.shouldComponentUpdate(g, a.__s, w) || u.__v === i.__v) {
                    for(u.__v !== i.__v && (a.props = g, a.state = a.__s, a.__d = !1), a.__e = !1, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function(n) {
                        n && (n.__ = u);
                    }), A = 0; A < a._sb.length; A++)a.__h.push(a._sb[A]);
                    a._sb = [], a.__h.length && f.push(a);
                    break n;
                }
                null != a.componentWillUpdate && a.componentWillUpdate(g, a.__s, w), null != a.componentDidUpdate && a.__h.push(function() {
                    a.componentDidUpdate(y, p, d);
                });
            }
            if (a.context = w, a.props = g, a.__P = n, P = l.__r, C = 0, "prototype" in I && I.prototype.render) {
                for(a.state = a.__s, a.__d = !1, P && P(u), s = a.render(a.props, a.state, a.context), $ = 0; $ < a._sb.length; $++)a.__h.push(a._sb[$]);
                a._sb = [];
            } else do a.__d = !1, P && P(u), s = a.render(a.props, a.state, a.context), a.state = a.__s;
            while (a.__d && ++C < 25);
            a.state = a.__s, null != a.getChildContext && (t = h(h({}, t), a.getChildContext())), v || null == a.getSnapshotBeforeUpdate || (d = a.getSnapshotBeforeUpdate(y, p)), H = null != s && s.type === _ && null == s.key ? s.props.children : s, x(n, Array.isArray(H) ? H : [
                H
            ], u, i, t, r, o, f, e, c), a.base = u.__e, u.__h = null, a.__h.length && f.push(a), b && (a.__E = a.__ = null), a.__e = !1;
        } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = N(i.__e, u, i, t, r, o, f, c);
        (s = l.diffed) && s(u);
    } catch (n) {
        u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l.__e(n, u, i);
    }
}
function M(n, u) {
    l.__c && l.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l.__e(n, u.__v);
        }
    });
}
function N(l, u, i, t, r, o, f, e) {
    var s, a, h, y = i.props, p = u.props, d = u.type, _ = 0;
    if ("svg" === d && (r = !0), null != o) {
        for(; _ < o.length; _++)if ((s = o[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
            l = s, o[_] = null;
            break;
        }
    }
    if (null == l) {
        if (null === d) return document.createTextNode(p);
        l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, e = !1;
    }
    if (null === d) y === p || e && l.data === p || (l.data = p);
    else {
        if (o = o && n.call(l.childNodes), a = (y = i.props || c).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !e) {
            if (null != o) for(y = {}, _ = 0; _ < l.attributes.length; _++)y[l.attributes[_].name] = l.attributes[_].value;
            (h || a) && (h && (a && h.__html == a.__html || h.__html === l.innerHTML) || (l.innerHTML = h && h.__html || ""));
        }
        if (H(l, p, y, r, e), h) u.__k = [];
        else if (_ = u.props.children, x(l, Array.isArray(_) ? _ : [
            _
        ], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && b(i, 0), e), null != o) for(_ = o.length; _--;)null != o[_] && v(o[_]);
        e || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_ || "option" === d && _ !== y.value) && T(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && T(l, "checked", _, y.checked, !1));
    }
    return l;
}
function O(n, u, i) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
        l.__e(n, i);
    }
}
function S(n, u, i) {
    var t, r;
    if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || O(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
            t.componentWillUnmount();
        } catch (n) {
            l.__e(n, u);
        }
        t.base = t.__P = null, n.__c = void 0;
    }
    if (t = n.__k) for(r = 0; r < t.length; r++)t[r] && S(t[r], u, i || "function" != typeof n.type);
    i || null == n.__e || v(n.__e), n.__ = n.__e = n.__d = void 0;
}
function q(n, l, u) {
    return this.constructor(n, u);
}
function B(u, i, t) {
    var r, o, f;
    l.__ && l.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], L(i, u = (!r && t || i).__k = y(_, null, [
        u
    ]), o || c, c, void 0 !== i.ownerSVGElement, !r && t ? [
        t
    ] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), M(f, u);
}
function D(n, l) {
    B(n, l, D);
}
function E(l, u, i) {
    var t, r, o, f = h({}, l.props);
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), p(l.type, f, t || l.key, r || l.ref, null);
}
function F(n, l) {
    var u = {
        __c: l = "__cC" + e++,
        __: n,
        Consumer: function(n, l) {
            return n.children(l);
        },
        Provider: function(n) {
            var u, i;
            return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function() {
                return i;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some(function(n) {
                    n.__e = !0, m(n);
                });
            }, this.sub = function(n) {
                u.push(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u.splice(u.indexOf(n), 1), l && l.call(n);
                };
            }), n.children;
        }
    };
    return u.Provider.__ = u.Consumer.contextType = u;
}
n = s.slice, l = {
    __e: function(n, l, u, i) {
        for(var t, r, o; l = l.__;)if ((t = l.__c) && !t.__) try {
            if ((r = t.constructor) && null != r.getDerivedStateFromError && (t.setState(r.getDerivedStateFromError(n)), o = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), o = t.__d), o) return t.__E = t;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u = 0, i = function(n) {
    return null != n && void 0 === n.constructor;
}, k.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n && (n = n(h({}, u), this.props)), n && h(u, n), null != n && this.__v && (l && this._sb.push(l), m(this));
}, k.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), m(this));
}, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, w.__r = 0, e = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7F5Te":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App);
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
var _hooks = require("preact/hooks");
var _gameSetup = require("./components/GameSetup");
var _giveUpCard = require("./components/GiveUpCard");
var _guess = require("./components/Guess");
var _helpDialog = require("./components/HelpDialog");
var _newGuess = require("./components/NewGuess");
var _victoryCard = require("./components/VictoryCard");
var _hooks1 = require("./lib/hooks");
var _util = require("./lib/util");
function App() {
    const [settings, setSettings] = (0, _hooks1.useGameSettings)();
    // `null` means the game hasn't started yet.
    const [gameState, setGameState] = (0, _hooks.useState)(null);
    const [showHelp, setShowHelp] = (0, _hooks.useState)(false);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        class: "container mx-auto my-5",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "d-flex justify-content-between align-items-center mb-5 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                        children: "Hack.EXE"
                    }, void 0, false, {
                        fileName: "src/App.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            class: "btn btn-info me-2",
                            onClick: ()=>setShowHelp(true),
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                    class: "bi bi-question-circle me-2"
                                }, void 0, false, {
                                    fileName: "src/App.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this),
                                "Help"
                            ]
                        }, void 0, true, {
                            fileName: "src/App.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "src/App.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/App.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            gameState === null && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _gameSetup.GameSetup), {
                settings: settings,
                setSettings: setSettings,
                startGame: setGameState
            }, void 0, false, {
                fileName: "src/App.tsx",
                lineNumber: 33,
                columnNumber: 17
            }, this),
            gameState !== null && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _newGuess.NewGuess), {
                        settings: settings,
                        addGuess: (guess)=>{
                            const guessObj = (0, _util.calculateGuess)(guess, gameState.solution);
                            setGameState({
                                ...gameState,
                                guesses: [
                                    ...gameState.guesses,
                                    guessObj
                                ],
                                ended: guessObj.correct === settings.slots ? "won" : undefined
                            });
                        },
                        giveUp: ()=>{
                            setGameState({
                                ...gameState,
                                ended: "gaveUp"
                            });
                        },
                        disabled: gameState.ended !== undefined,
                        solution: gameState.solution
                    }, void 0, false, {
                        fileName: "src/App.tsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, this),
                    gameState.ended === "won" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _victoryCard.VictoryCard), {
                        newGame: ()=>setGameState(null)
                    }, void 0, false, {
                        fileName: "src/App.tsx",
                        lineNumber: 67,
                        columnNumber: 25
                    }, this),
                    gameState.ended === "gaveUp" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _giveUpCard.GiveUpCard), {
                        solution: gameState.solution,
                        newGame: ()=>setGameState(null)
                    }, void 0, false, {
                        fileName: "src/App.tsx",
                        lineNumber: 70,
                        columnNumber: 25
                    }, this),
                    gameState.guesses.slice().reverse().map((guess, i)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _guess.Guess), {
                            guess: guess,
                            guessNumber: gameState.guesses.length - i,
                            solution: gameState.solution
                        }, i, false, {
                            fileName: "src/App.tsx",
                            lineNumber: 80,
                            columnNumber: 29
                        }, this))
                ]
            }, void 0, true),
            showHelp && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _helpDialog.HelpDialog), {
                close: ()=>setShowHelp(false)
            }, void 0, false, {
                fileName: "src/App.tsx",
                lineNumber: 89,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/App.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}

},{"preact/jsx-dev-runtime":"3mFUL","preact/hooks":"eZN76","./components/GameSetup":"hiBdj","./components/GiveUpCard":"11p2Y","./components/Guess":"8oY9q","./components/HelpDialog":"l0AEt","./components/NewGuess":"8EiTH","./components/VictoryCard":"lCbDS","./lib/hooks":"04C1O","./lib/util":"5AfC6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZN76":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallback", ()=>T);
parcelHelpers.export(exports, "useContext", ()=>q);
parcelHelpers.export(exports, "useDebugValue", ()=>x);
parcelHelpers.export(exports, "useEffect", ()=>p);
parcelHelpers.export(exports, "useErrorBoundary", ()=>P);
parcelHelpers.export(exports, "useId", ()=>V);
parcelHelpers.export(exports, "useImperativeHandle", ()=>A);
parcelHelpers.export(exports, "useLayoutEffect", ()=>y);
parcelHelpers.export(exports, "useMemo", ()=>F);
parcelHelpers.export(exports, "useReducer", ()=>s);
parcelHelpers.export(exports, "useRef", ()=>_);
parcelHelpers.export(exports, "useState", ()=>h);
var _preact = require("preact");
var t, r, u, i, o = 0, f = [], c = [], e = (0, _preact.options).__b, a = (0, _preact.options).__r, v = (0, _preact.options).diffed, l = (0, _preact.options).__c, m = (0, _preact.options).unmount;
function d(t, u) {
    (0, _preact.options).__h && (0, _preact.options).__h(r, t, o || u), o = 0;
    var i = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return t >= i.__.length && i.__.push({
        __V: c
    }), i.__[t];
}
function h(n) {
    return o = 1, s(B, n);
}
function s(n, u, i) {
    var o = d(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : B(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = r, !r.u)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = !1;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
        };
        r.u = !0;
        var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
        r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function p(u, i) {
    var o = d(t++, 3);
    !(0, _preact.options).__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function y(u, i) {
    var o = d(t++, 4);
    !(0, _preact.options).__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
    return o = 5, F(function() {
        return {
            current: n
        };
    }, []);
}
function A(n, t, r) {
    o = 6, y(function() {
        return "function" == typeof n ? (n(t()), function() {
            return n(null);
        }) : n ? (n.current = t(), function() {
            return n.current = null;
        }) : void 0;
    }, null == r ? r : r.concat(n));
}
function F(n, r) {
    var u = d(t++, 7);
    return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
    return o = 8, F(function() {
        return n;
    }, t);
}
function q(n) {
    var u = r.context[n.__c], i = d(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
    (0, _preact.options).useDebugValue && (0, _preact.options).useDebugValue(r ? r(t) : t);
}
function P(n) {
    var u = d(t++, 10), i = h();
    return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function V() {
    var n = d(t++, 11);
    if (!n.__) {
        for(var u = r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function b() {
    for(var t; t = f.shift();)if (t.__P && t.__H) try {
        t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
    } catch (r) {
        t.__H.__h = [], (0, _preact.options).__e(r, t.__v);
    }
}
(0, _preact.options).__b = function(n) {
    r = null, e && e(n);
}, (0, _preact.options).__r = function(n) {
    a && a(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
    })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, (0, _preact.options).diffed = function(t) {
    v && v(t);
    var o = t.__c;
    o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === (0, _preact.options).requestAnimationFrame || ((i = (0, _preact.options).requestAnimationFrame) || j)(b)), o.__H.__.forEach(function(n) {
        n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
    })), u = r = null;
}, (0, _preact.options).__c = function(t, r) {
    r.some(function(t) {
        try {
            t.__h.forEach(k), t.__h = t.__h.filter(function(n) {
                return !n.__ || w(n);
            });
        } catch (u) {
            r.some(function(n) {
                n.__h && (n.__h = []);
            }), r = [], (0, _preact.options).__e(u, t.__v);
        }
    }), l && l(t, r);
}, (0, _preact.options).unmount = function(t) {
    m && m(t);
    var r, u = t.__c;
    u && u.__H && (u.__H.__.forEach(function(n) {
        try {
            k(n);
        } catch (n) {
            r = n;
        }
    }), u.__H = void 0, r && (0, _preact.options).__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
    var t, r = function() {
        clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    g && (t = requestAnimationFrame(r));
}
function k(n) {
    var t = r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
    var t = r;
    n.__c = n.__(), r = t;
}
function z(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function B(n, t) {
    return "function" == typeof t ? t(n) : t;
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiBdj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameSetup", ()=>GameSetup);
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
var _hooks = require("preact/hooks");
var _cryptoUtil = require("../lib/cryptoUtil");
var _data = require("../lib/data");
function GameSetup(props) {
    const [slots, setSlots] = (0, _hooks.useState)(props.settings.slots);
    const [slotMax, setSlotMax] = (0, _hooks.useState)(props.settings.slotMax);
    const [slotsUnique, setSlotsUnique] = (0, _hooks.useState)(props.settings.slotsUnique);
    const [shareLink, setShareLink] = (0, _hooks.useState)("");
    (0, _hooks.useEffect)(()=>{
        const params = new URLSearchParams(window.location.search);
        const encryptedCode = params.get("code");
        if (!encryptedCode) return;
        (0, _cryptoUtil.decryptCodeString)(encryptedCode).then((decoded)=>{
            if (!decoded) return;
            const [digitsPart, slotMaxPart] = decoded.split(":");
            if (!/^[\w ]+$/.test(digitsPart)) return;
            const digits = digitsPart.split("").map(String);
            const slotMax = parseInt(slotMaxPart, 10);
            const slots = digits.length;
            const slotsUnique = new Set(digits).size === slots;
            const settings = {
                slots,
                slotMax,
                slotsUnique
            };
            const errors = (0, _data.validateGameSettings)(settings);
            if (errors.valid) {
                props.setSettings(settings);
                const state = (0, _data.newGameState)(settings);
                state.solution = digits;
                props.startGame(state);
            }
        });
    }, []);
    const validationErrors = (0, _data.validateGameSettings)({
        slots,
        slotMax,
        slotsUnique
    });
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        class: "card",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card-header",
                children: "Game Setup"
            }, void 0, false, {
                fileName: "src/components/GameSetup.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card-body",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "row",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "col-md mb-5",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                        class: "form-label",
                                        for: "code-length",
                                        children: "Code Length"
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                        class: `form-control${validationErrors.slots.length > 0 ? " is-invalid" : ""}`,
                                        type: "number",
                                        id: "code-length",
                                        min: "1",
                                        max: "10",
                                        step: "1",
                                        value: slots,
                                        onInput: (e)=>{
                                            setSlots(parseInt(e.currentTarget.value));
                                        }
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 65,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "form-text",
                                        children: "The number of slots in the code."
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 81,
                                        columnNumber: 25
                                    }, this),
                                    validationErrors.slots.length > 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "invalid-feedback",
                                        children: validationErrors.slots.join(" ")
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/GameSetup.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "col-md mb-5",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                        class: "form-label",
                                        for: "code-max",
                                        children: "Code Number Max"
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                        class: `form-control${validationErrors.slotMax.length > 0 ? " is-invalid" : ""}`,
                                        type: "number",
                                        id: "code-max",
                                        min: "2",
                                        max: "10",
                                        step: "1",
                                        value: slotMax,
                                        onInput: (e)=>{
                                            setSlotMax(parseInt(e.currentTarget.value));
                                        }
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 95,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "form-text",
                                        children: "The maximum number each slot in the code can be."
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 111,
                                        columnNumber: 25
                                    }, this),
                                    validationErrors.slotMax.length > 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "invalid-feedback",
                                        children: validationErrors.slotMax.join(" ")
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 115,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/GameSetup.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "col-md mb-5",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                        class: "form-label",
                                        for: "code-unique",
                                        children: "Code Slots Unique"
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 122,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "col-form-label",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            class: "form-check form-switch",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                    class: "form-check-input",
                                                    type: "checkbox",
                                                    id: "code-unique",
                                                    checked: slotsUnique,
                                                    onChange: (e)=>{
                                                        setSlotsUnique(e.currentTarget.checked);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "src/components/GameSetup.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                                    class: "form-check-label",
                                                    for: "code-unique",
                                                    children: "Unique"
                                                }, void 0, false, {
                                                    fileName: "src/components/GameSetup.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/GameSetup.tsx",
                                            lineNumber: 126,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 125,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "form-text",
                                        children: "Whether each slot in the code must be unique."
                                    }, void 0, false, {
                                        fileName: "src/components/GameSetup.tsx",
                                        lineNumber: 141,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/GameSetup.tsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/GameSetup.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "d-flex justify-content-between align-items-center",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            class: "btn btn-primary btn-lg",
                            onClick: ()=>{
                                props.setSettings({
                                    slots,
                                    slotMax,
                                    slotsUnique
                                });
                                props.startGame((0, _data.newGameState)({
                                    slots,
                                    slotMax,
                                    slotsUnique
                                }));
                            },
                            disabled: !validationErrors.valid,
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                    class: "bi bi-play-circle me-2"
                                }, void 0, false, {
                                    fileName: "src/components/GameSetup.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, this),
                                "Start Game"
                            ]
                        }, void 0, true, {
                            fileName: "src/components/GameSetup.tsx",
                            lineNumber: 148,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "src/components/GameSetup.tsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, this),
                    shareLink && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                class: "form-label",
                                children: "Shareable Game Link"
                            }, void 0, false, {
                                fileName: "src/components/GameSetup.tsx",
                                lineNumber: 165,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                class: "form-control",
                                value: shareLink,
                                readOnly: true,
                                onFocus: (e)=>e.currentTarget.select()
                            }, void 0, false, {
                                fileName: "src/components/GameSetup.tsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/GameSetup.tsx",
                        lineNumber: 164,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/components/GameSetup.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/components/GameSetup.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}

},{"preact/jsx-dev-runtime":"3mFUL","preact/hooks":"eZN76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../lib/data":"12jTj","../lib/cryptoUtil":"gNxRW"}],"12jTj":[function(require,module,exports) {
//#region GameSettings
/** Container for game settings */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Default game settings */ parcelHelpers.export(exports, "initialGameSettings", ()=>initialGameSettings);
/** Returns if the given object is a valid {@link GameSettings} */ parcelHelpers.export(exports, "isGameSettings", ()=>isGameSettings);
/** Returns if the given {@link GameSettings} are valid */ parcelHelpers.export(exports, "validateGameSettings", ()=>validateGameSettings);
/** Creates a new game state */ parcelHelpers.export(exports, "newGameState", ()=>newGameState);
/** Returns a random solution for the given settings */ parcelHelpers.export(exports, "randomSolution", ()=>randomSolution);
parcelHelpers.export(exports, "getFeedback", ()=>getFeedback);
function initialGameSettings() {
    return {
        slots: 4,
        slotMax: 6,
        slotsUnique: true
    };
}
function isGameSettings(settings) {
    return typeof settings === "object" && settings !== null && typeof settings.slots === "number" && typeof settings.slotMax === "number" && typeof settings.slotsUnique === "boolean";
}
function validateGameSettings(settings) {
    const errors = {
        slots: [],
        slotMax: [],
        slotsUnique: [],
        valid: true
    };
    if (settings.slots < 1) {
        errors.valid = false;
        errors.slots.push("Slots count must be at least 1");
    }
    if (settings.slotMax < 1) {
        errors.valid = false;
        errors.slotMax.push("Slot maximum must be at least 1");
    }
    if (settings.slotsUnique && settings.slotMax < settings.slots) {
        errors.valid = false;
        errors.slotMax.push("Slot max must be at least equal to the number of slots, if slots are unique");
    }
    return errors;
}
function newGameState(settings) {
    return {
        solution: randomSolution(settings),
        guess: new Array(settings.slots).fill(0),
        guesses: [],
        ended: undefined
    };
}
function randomSolution(settings) {
    if (settings.slotsUnique) {
        // If unique, generate a range of numbers, shuffle,
        // and take the first n
        const solution = Array.from({
            length: settings.slotMax
        }, (_, i)=>String(i + 1));
        for(let i = solution.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [solution[i], solution[j]] = [
                solution[j],
                solution[i]
            ];
        }
        return solution.slice(0, settings.slots);
    } else {
        // If not unique, generate n random numbers
        const solution = [];
        for(let i = 0; i < settings.slots; i++)solution.push(String(Math.floor(Math.random() * settings.slotMax) + 1));
        return solution;
    }
}
function getFeedback(guess, solution) {
    const feedback = Array(guess.length).fill("absent");
    const used = Array(solution.length).fill(false);
    for(let i = 0; i < guess.length; i++)if (guess[i].toLowerCase() === solution[i].toLowerCase()) {
        feedback[i] = "correct";
        used[i] = true;
    }
    for(let i = 0; i < guess.length; i++){
        if (feedback[i] !== "absent") continue;
        for(let j = 0; j < solution.length; j++)if (!used[j] && guess[i].toLowerCase() === solution[j].toLowerCase()) {
            feedback[i] = "misplaced";
            used[j] = true;
            break;
        }
    }
    return feedback;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gNxRW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encryptCodeString", ()=>encryptCodeString);
parcelHelpers.export(exports, "decryptCodeString", ()=>decryptCodeString);
const keyString = "thisisadndkey123"; // App-only shared key
const encoder = new TextEncoder();
const decoder = new TextDecoder();
async function getKey() {
    return crypto.subtle.importKey("raw", encoder.encode(keyString), {
        name: "AES-CTR"
    }, false, [
        "encrypt",
        "decrypt"
    ]);
}
async function encryptCodeString(code) {
    const key = await getKey();
    const iv = crypto.getRandomValues(new Uint8Array(16));
    const encoded = encoder.encode(code);
    const encrypted = await crypto.subtle.encrypt({
        name: "AES-CTR",
        counter: iv,
        length: 64
    }, key, encoded);
    const full = new Uint8Array(iv.length + encrypted.byteLength);
    full.set(iv);
    full.set(new Uint8Array(encrypted), iv.length);
    return btoa(String.fromCharCode(...full));
}
async function decryptCodeString(encrypted) {
    try {
        const raw = Uint8Array.from(atob(encrypted), (c)=>c.charCodeAt(0));
        const iv = raw.slice(0, 16);
        const data = raw.slice(16);
        const key = await getKey();
        const decrypted = await crypto.subtle.decrypt({
            name: "AES-CTR",
            counter: iv,
            length: 64
        }, key, data);
        return decoder.decode(decrypted);
    } catch  {
        return null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11p2Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GiveUpCard", ()=>GiveUpCard);
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
function GiveUpCard(props) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        class: "card mt-3 border-warning",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card-header",
                children: "Solution"
            }, void 0, false, {
                fileName: "src/components/GiveUpCard.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card-body",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "row",
                        children: props.solution.map((slot, i)=>{
                            return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "col",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    class: "card",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "card-body text-center h1",
                                        children: slot === " " ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            class: "text-muted",
                                            children: "_"
                                        }, void 0, false, {
                                            fileName: "src/components/GiveUpCard.tsx",
                                            lineNumber: 22,
                                            columnNumber: 57
                                        }, this) : slot.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "src/components/GiveUpCard.tsx",
                                        lineNumber: 21,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/components/GiveUpCard.tsx",
                                    lineNumber: 20,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "src/components/GiveUpCard.tsx",
                                lineNumber: 19,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "src/components/GiveUpCard.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "d-flex justify-content-end align-items-center mt-3",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            class: "btn btn-primary btn-lg",
                            onClick: props.newGame,
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                    class: "bi bi-arrow-repeat me-2"
                                }, void 0, false, {
                                    fileName: "src/components/GiveUpCard.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this),
                                "New Game"
                            ]
                        }, void 0, true, {
                            fileName: "src/components/GiveUpCard.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "src/components/GiveUpCard.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/components/GiveUpCard.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/components/GiveUpCard.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}

},{"preact/jsx-dev-runtime":"3mFUL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8oY9q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Guess", ()=>Guess);
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
var _data = require("../lib/data");
function Guess(props) {
    const digits = props.guess.guess;
    const feedback = (0, _data.getFeedback)(props.guess.guess, props.solution);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        class: "card mt-3",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card-header",
                children: [
                    "Guess ",
                    props.guessNumber
                ]
            }, void 0, true, {
                fileName: "src/components/Guess.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card-body",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    class: "row",
                    children: digits.map((slot, i)=>{
                        let bgClass = "bg-dark";
                        if (feedback[i] === "correct") bgClass = "bg-success text-white";
                        else if (feedback[i] === "misplaced") bgClass = "bg-warning text-dark";
                        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            class: "col",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: `card ${bgClass}`,
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    class: "card-body text-center h1",
                                    children: slot === " " ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        class: "text-muted",
                                        children: "_"
                                    }, void 0, false, {
                                        fileName: "src/components/Guess.tsx",
                                        lineNumber: 33,
                                        columnNumber: 57
                                    }, this) : slot
                                }, void 0, false, {
                                    fileName: "src/components/Guess.tsx",
                                    lineNumber: 32,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "src/components/Guess.tsx",
                                lineNumber: 31,
                                columnNumber: 33
                            }, this)
                        }, i, false, {
                            fileName: "src/components/Guess.tsx",
                            lineNumber: 30,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "src/components/Guess.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "src/components/Guess.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/components/Guess.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}

},{"preact/jsx-dev-runtime":"3mFUL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../lib/data":"12jTj"}],"l0AEt":[function(require,module,exports) {
/** Props for HelpDialog component */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HelpDialog", ()=>HelpDialog);
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
function HelpDialog(props) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "modal d-block",
                role: "dialog",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    class: "modal-dialog",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "modal-content",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "modal-header",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        class: "modal-title",
                                        children: "Help"
                                    }, void 0, false, {
                                        fileName: "src/components/HelpDialog.tsx",
                                        lineNumber: 14,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        type: "button",
                                        class: "btn-close",
                                        "aria-label": "Close",
                                        onClick: props.close
                                    }, void 0, false, {
                                        fileName: "src/components/HelpDialog.tsx",
                                        lineNumber: 15,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/HelpDialog.tsx",
                                lineNumber: 13,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "modal-body",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        children: "Hack.EXE is a game where you try to crack a secret password."
                                    }, void 0, false, {
                                        fileName: "src/components/HelpDialog.tsx",
                                        lineNumber: 23,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        children: "The password is made up of a series of characters; each turn you attempt to guess the password. After each guess you will be told:"
                                    }, void 0, false, {
                                        fileName: "src/components/HelpDialog.tsx",
                                        lineNumber: 27,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                        class: "text-success",
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                                class: "bi bi-check-circle me-1"
                                                            }, void 0, false, {
                                                                fileName: "src/components/HelpDialog.tsx",
                                                                lineNumber: 35,
                                                                columnNumber: 41
                                                            }, this),
                                                            "Correct"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/components/HelpDialog.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 37
                                                    }, this),
                                                    ": Highlighted characters are correct and in the correct position."
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/HelpDialog.tsx",
                                                lineNumber: 33,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                        class: "text-warning",
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                                class: "bi bi-exclamation-circle me-1"
                                                            }, void 0, false, {
                                                                fileName: "src/components/HelpDialog.tsx",
                                                                lineNumber: 43,
                                                                columnNumber: 41
                                                            }, this),
                                                            "Misplaced"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/components/HelpDialog.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 37
                                                    }, this),
                                                    ": Highlighted characters are in the password, but in the wrong position."
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/HelpDialog.tsx",
                                                lineNumber: 41,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                                class: "bi bi-x-circle me-1"
                                                            }, void 0, false, {
                                                                fileName: "src/components/HelpDialog.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 41
                                                            }, this),
                                                            "Incorrect"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/components/HelpDialog.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 37
                                                    }, this),
                                                    ": Unhighlighted characters are not in the password."
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/HelpDialog.tsx",
                                                lineNumber: 49,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/HelpDialog.tsx",
                                        lineNumber: 32,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        class: "mb-0",
                                        children: "You win when you guess the whole code."
                                    }, void 0, false, {
                                        fileName: "src/components/HelpDialog.tsx",
                                        lineNumber: 57,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/HelpDialog.tsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/HelpDialog.tsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "src/components/HelpDialog.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "src/components/HelpDialog.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "modal-backdrop fade show"
            }, void 0, false, {
                fileName: "src/components/HelpDialog.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}

},{"preact/jsx-dev-runtime":"3mFUL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8EiTH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NewGuess", ()=>NewGuess);
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
var _hooks = require("preact/hooks");
var _data = require("../lib/data");
function NewGuess(props) {
    const [hasSubmitted, setHasSubmitted] = (0, _hooks.useState)(false);
    const inputRefs = (0, _hooks.useRef)([]);
    const [guess, setGuess] = (0, _hooks.useState)(Array(props.settings.slots).fill(""));
    const handleSubmitGuess = (guess)=>{
        setHasSubmitted(true);
        const allFilled = guess.every((char)=>char.length === 1);
        if (!allFilled) return;
        const feedback = (0, _data.getFeedback)(guess, props.solution);
        props.addGuess(guess);
        const newGuess = guess.map((char, i)=>feedback[i] === "correct" ? char : "");
        setGuess(newGuess);
        requestAnimationFrame(()=>{
            inputRefs.current[0]?.focus();
        });
        console.log("Guess:", guess);
        setHasSubmitted(false);
        return props.addGuess(guess);
    };
    const guessIsUnique = new Set(guess).size === guess.length;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        class: "card",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card-header",
                children: "New Guess"
            }, void 0, false, {
                fileName: "src/components/NewGuess.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card-body",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "row",
                        children: guess.map((slot, i)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "col",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                    class: `form-control form-control-lg text-center" ${hasSubmitted && guess[i] === "" ? "is-invalid" : ""}`,
                                    type: "text",
                                    maxLength: 1,
                                    value: guess[i],
                                    ref: (el)=>inputRefs.current[i] = el,
                                    onKeyDown: (e)=>{
                                        const key = e.key;
                                        if (key === "Enter") {
                                            // Submit if valid and not disabled
                                            const isReady = !props.disabled && (!props.settings.slotsUnique || new Set(guess).size === guess.length) && guess.every((g)=>g.length === 1); // ensure every field is filled
                                            if (isReady) handleSubmitGuess(guess);
                                            return;
                                        }
                                        // Allow navigation keys
                                        if (key === "Backspace") {
                                            const newGuess = [
                                                ...guess
                                            ];
                                            newGuess[i] = "";
                                            setGuess(newGuess);
                                            if (i > 0) inputRefs.current[i - 1]?.focus();
                                            e.preventDefault();
                                        } else if (/^[a-zA-Z0-9 ]$/.test(key)) {
                                            const newGuess = [
                                                ...guess
                                            ];
                                            newGuess[i] = key === " " ? " " : key.toUpperCase();
                                            setGuess(newGuess);
                                            if (i < inputRefs.current.length - 1) requestAnimationFrame(()=>{
                                                inputRefs.current[i + 1]?.focus();
                                            });
                                            e.preventDefault(); // Block the browser's default character insert
                                        }
                                    },
                                    onFocus: (e)=>e.currentTarget.select(),
                                    disabled: props.disabled
                                }, void 0, false, {
                                    fileName: "src/components/NewGuess.tsx",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "src/components/NewGuess.tsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "src/components/NewGuess.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "d-flex justify-content-between align-items-center mt-3",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                class: "text-danger",
                                children: [
                                    props.settings.slotsUnique && !guessIsUnique && hasSubmitted && "Your guess cannot contain duplicate numbers.",
                                    !guess.every((g)=>g.length === 1) && hasSubmitted && "Your guess can't contain null strings."
                                ]
                            }, void 0, true, {
                                fileName: "src/components/NewGuess.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    class: "btn btn-primary btn-lg",
                                    onClick: ()=>handleSubmitGuess(guess),
                                    disabled: props.settings.slotsUnique && !guessIsUnique || props.disabled,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            class: "bi bi-check-circle me-2"
                                        }, void 0, false, {
                                            fileName: "src/components/NewGuess.tsx",
                                            lineNumber: 133,
                                            columnNumber: 29
                                        }, this),
                                        "Guess"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/NewGuess.tsx",
                                    lineNumber: 124,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "src/components/NewGuess.tsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/NewGuess.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/components/NewGuess.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/components/NewGuess.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}

},{"preact/jsx-dev-runtime":"3mFUL","preact/hooks":"eZN76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../lib/data":"12jTj"}],"lCbDS":[function(require,module,exports) {
/** Props for VictoryCard component */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VictoryCard", ()=>VictoryCard);
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
function VictoryCard(props) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        class: "card mt-3 border-success",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card-header",
                children: "Victory!"
            }, void 0, false, {
                fileName: "src/components/VictoryCard.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card-body",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "card-text text-success h1",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                class: "bi bi-trophy me-2"
                            }, void 0, false, {
                                fileName: "src/components/VictoryCard.tsx",
                                lineNumber: 13,
                                columnNumber: 21
                            }, this),
                            "You won!"
                        ]
                    }, void 0, true, {
                        fileName: "src/components/VictoryCard.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "d-flex justify-content-end align-items-center mt-3",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            class: "btn btn-primary btn-lg",
                            onClick: ()=>{
                                const newUrl = window.location.origin + window.location.pathname;
                                window.history.replaceState({}, "", newUrl);
                                props.newGame();
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                    class: "bi bi-arrow-repeat me-2"
                                }, void 0, false, {
                                    fileName: "src/components/VictoryCard.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, this),
                                "New Game"
                            ]
                        }, void 0, true, {
                            fileName: "src/components/VictoryCard.tsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "src/components/VictoryCard.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/components/VictoryCard.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/components/VictoryCard.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}

},{"preact/jsx-dev-runtime":"3mFUL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"04C1O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Wrapper for {@link GameSettings} state, which automatically saves to local storage */ parcelHelpers.export(exports, "useGameSettings", ()=>useGameSettings);
var _hooks = require("preact/hooks");
var _data = require("./data");
function useGameSettings() {
    const [settings, setSettings] = (0, _hooks.useState)(()=>{
        const stored = localStorage.getItem("settings");
        if (stored !== null) try {
            const parsed = JSON.parse(stored);
            if ((0, _data.isGameSettings)(parsed)) return parsed;
        } catch (e) {
            console.warn("Failed to parse stored settings", e);
        }
        return (0, _data.initialGameSettings)();
    });
    (0, _hooks.useEffect)(()=>{
        localStorage.setItem("settings", JSON.stringify(settings));
    }, [
        settings
    ]);
    return [
        settings,
        setSettings
    ];
}

},{"preact/hooks":"eZN76","./data":"12jTj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5AfC6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Calculate a guess object from the given guess number array and game answer */ parcelHelpers.export(exports, "calculateGuess", ()=>calculateGuess);
function calculateGuess(guess, answer) {
    // Keep track of used slots
    const usedSlots = new Set();
    // Calculate the number of correct slots
    const correct = guess.reduce((acc, cur, i)=>{
        if (cur.toLowerCase() === answer[i].toLowerCase()) {
            usedSlots.add(i);
            return acc + 1;
        }
        return acc;
    }, 0);
    // Calculate the number of misplaced slots
    const misplaced = guess.reduce((acc, cur, i)=>{
        for(let j = 0; j < answer.length; j++){
            if (usedSlots.has(j)) continue;
            if (cur.toLowerCase() === answer[j].toLowerCase()) {
                usedSlots.add(j);
                return acc + 1;
            }
        }
        return acc;
    }, 0);
    return {
        guess,
        correct,
        misplaced
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"S134C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LinkGenerator", ()=>LinkGenerator);
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
var _hooks = require("preact/hooks");
var _cryptoUtil = require("../lib/cryptoUtil");
function LinkGenerator() {
    const [codeInput, setCodeInput] = (0, _hooks.useState)("");
    const [link, setLink] = (0, _hooks.useState)(null);
    const [error, setError] = (0, _hooks.useState)(null);
    const handleGenerate = async ()=>{
        if (!/^[\w ]+(:\w)?$/.test(codeInput)) {
            setError("Code must be a string of characters with an optional ':{maxSlots}'(e.g., 1234)");
            setLink(null);
            return;
        }
        const encrypted = await (0, _cryptoUtil.encryptCodeString)(codeInput);
        const fullLink = `${window.location.origin}?code=${encodeURIComponent(encrypted)}`;
        setLink(fullLink);
        setError(null);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        class: "container mx-auto my-5",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "d-flex justify-content-between align-items-center mb-5 flex-wrap",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                    children: "Encode.EXE"
                }, void 0, false, {
                    fileName: "src/components/LinkGenerator.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "src/components/LinkGenerator.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                class: "card mt-4",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "card-header",
                        children: "Generate Shareable Game Link"
                    }, void 0, false, {
                        fileName: "src/components/LinkGenerator.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "card-body",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                class: "form-label",
                                for: "codeInput",
                                children: [
                                    "Enter the secret code (e.g. ",
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("code", {
                                        children: "1234"
                                    }, void 0, false, {
                                        fileName: "src/components/LinkGenerator.tsx",
                                        lineNumber: 31,
                                        columnNumber: 53
                                    }, this),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "src/components/LinkGenerator.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                type: "text",
                                id: "codeInput",
                                class: "form-control mb-2",
                                value: codeInput,
                                onInput: (e)=>setCodeInput(e.currentTarget.value),
                                placeholder: "1234"
                            }, void 0, false, {
                                fileName: "src/components/LinkGenerator.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                class: "btn btn-primary",
                                onClick: handleGenerate,
                                children: "Generate Link"
                            }, void 0, false, {
                                fileName: "src/components/LinkGenerator.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            error && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "alert alert-danger mt-3",
                                children: error
                            }, void 0, false, {
                                fileName: "src/components/LinkGenerator.tsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this),
                            link && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "mt-3",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                        class: "form-label",
                                        children: "Shareable Game Link"
                                    }, void 0, false, {
                                        fileName: "src/components/LinkGenerator.tsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                        class: "form-control",
                                        readOnly: true,
                                        value: link,
                                        onFocus: (e)=>e.currentTarget.select()
                                    }, void 0, false, {
                                        fileName: "src/components/LinkGenerator.tsx",
                                        lineNumber: 52,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/LinkGenerator.tsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/LinkGenerator.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/components/LinkGenerator.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/components/LinkGenerator.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}

},{"preact/jsx-dev-runtime":"3mFUL","preact/hooks":"eZN76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../lib/cryptoUtil":"gNxRW"}]},["ddMC0","4aBH6"], "4aBH6", "parcelRequire1ea7")

//# sourceMappingURL=index.2d3ace14.js.map
