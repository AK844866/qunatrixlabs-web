(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=mergeClasses.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
 //# sourceMappingURL=toKebabCase.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
 //# sourceMappingURL=toCamelCase.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-client] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
 //# sourceMappingURL=toPascalCase.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
 //# sourceMappingURL=hasA11yProp.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LucideProvider",
    ()=>LucideProvider,
    "useLucideContext",
    ()=>useLucideContext
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use strict";
"use client";
;
const LucideContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
function LucideProvider({ children, size, color, strokeWidth, absoluteStrokeWidth, className }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LucideProvider.useMemo[value]": ()=>({
                size,
                color,
                strokeWidth,
                absoluteStrokeWidth,
                className
            })
    }["LucideProvider.useMemo[value]"], [
        size,
        color,
        strokeWidth,
        absoluteStrokeWidth,
        className
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(LucideContext.Provider, {
        value
    }, children);
}
const useLucideContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LucideContext);
;
 //# sourceMappingURL=context.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/Icon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/context.mjs [app-client] (ecmascript)");
"use strict";
"use client";
;
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLucideContext"])() ?? {};
    const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size ?? contextSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].width,
        height: size ?? contextSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", contextClass, className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/Icon.mjs [app-client] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>House
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }
    ],
    [
        "path",
        {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "r6nss1"
        }
    ]
];
const House = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("house", __iconNode);
;
 //# sourceMappingURL=house.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript)");
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Layers
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }
    ],
    [
        "path",
        {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }
    ],
    [
        "path",
        {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }
    ]
];
const Layers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("layers", __iconNode);
;
 //# sourceMappingURL=layers.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript)");
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>BookOpen
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 7v14",
            key: "1akyts"
        }
    ],
    [
        "path",
        {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }
    ]
];
const BookOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("book-open", __iconNode);
;
 //# sourceMappingURL=book-open.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookOpen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript)");
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Users
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript)");
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Mail
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }
    ]
];
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("mail", __iconNode);
;
 //# sourceMappingURL=mail.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript)");
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
]);
/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }
    ],
    [
        "path",
        {
            d: "M20 2v4",
            key: "1rf3ol"
        }
    ],
    [
        "path",
        {
            d: "M22 4h-4",
            key: "gwowj6"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
 //# sourceMappingURL=sparkles.mjs.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript)");
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/react-fast-marquee/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}
Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
___$insertStyle(".rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}");
const Marquee = React.forwardRef(function Marquee({ style = {}, className = "", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = "left", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = "white", gradientWidth = 200, onFinish, onCycleComplete, onMount, children }, ref) {
    // React Hooks
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [marqueeWidth, setMarqueeWidth] = React.useState(0);
    const [multiplier, setMultiplier] = React.useState(1);
    const [isMounted, setIsMounted] = React.useState(false);
    const rootRef = React.useRef(null);
    const containerRef = ref || rootRef;
    const marqueeRef = React.useRef(null);
    // Calculate width of container and marquee and set multiplier
    const calculateWidth = React.useCallback({
        "Marquee.Marquee.useCallback[calculateWidth]": ()=>{
            if (marqueeRef.current && containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const marqueeRect = marqueeRef.current.getBoundingClientRect();
                let containerWidth = containerRect.width;
                let marqueeWidth = marqueeRect.width;
                // Swap width and height if direction is up or down
                if (direction === "up" || direction === "down") {
                    containerWidth = containerRect.height;
                    marqueeWidth = marqueeRect.height;
                }
                if (autoFill && containerWidth && marqueeWidth) {
                    setMultiplier(marqueeWidth < containerWidth ? Math.ceil(containerWidth / marqueeWidth) : 1);
                } else {
                    setMultiplier(1);
                }
                setContainerWidth(containerWidth);
                setMarqueeWidth(marqueeWidth);
            }
        }
    }["Marquee.Marquee.useCallback[calculateWidth]"], [
        autoFill,
        containerRef,
        direction
    ]);
    // Calculate width and multiplier on mount and on window resize
    React.useEffect({
        "Marquee.Marquee.useEffect": ()=>{
            if (!isMounted) return;
            calculateWidth();
            if (marqueeRef.current && containerRef.current) {
                const resizeObserver = new ResizeObserver({
                    "Marquee.Marquee.useEffect": ()=>calculateWidth()
                }["Marquee.Marquee.useEffect"]);
                resizeObserver.observe(containerRef.current);
                resizeObserver.observe(marqueeRef.current);
                return ({
                    "Marquee.Marquee.useEffect": ()=>{
                        if (!resizeObserver) return;
                        resizeObserver.disconnect();
                    }
                })["Marquee.Marquee.useEffect"];
            }
        }
    }["Marquee.Marquee.useEffect"], [
        calculateWidth,
        containerRef,
        isMounted
    ]);
    // Recalculate width when children change
    React.useEffect({
        "Marquee.Marquee.useEffect": ()=>{
            calculateWidth();
        }
    }["Marquee.Marquee.useEffect"], [
        calculateWidth,
        children
    ]);
    React.useEffect({
        "Marquee.Marquee.useEffect": ()=>{
            setIsMounted(true);
        }
    }["Marquee.Marquee.useEffect"], []);
    // Runs the onMount callback, if it is a function, when Marquee is mounted.
    React.useEffect({
        "Marquee.Marquee.useEffect": ()=>{
            if (typeof onMount === "function") {
                onMount();
            }
        }
    }["Marquee.Marquee.useEffect"], []);
    // Animation duration
    const duration = React.useMemo({
        "Marquee.Marquee.useMemo[duration]": ()=>{
            if (autoFill) {
                return marqueeWidth * multiplier / speed;
            } else {
                return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
            }
        }
    }["Marquee.Marquee.useMemo[duration]"], [
        autoFill,
        containerWidth,
        marqueeWidth,
        multiplier,
        speed
    ]);
    const containerStyle = React.useMemo({
        "Marquee.Marquee.useMemo[containerStyle]": ()=>Object.assign(Object.assign({}, style), {
                ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running",
                ["--pause-on-click"]: !play || pauseOnHover && !pauseOnClick || pauseOnClick ? "paused" : "running",
                ["--width"]: direction === "up" || direction === "down" ? `100vh` : "100%",
                ["--transform"]: direction === "up" ? "rotate(-90deg)" : direction === "down" ? "rotate(90deg)" : "none"
            })
    }["Marquee.Marquee.useMemo[containerStyle]"], [
        style,
        play,
        pauseOnHover,
        pauseOnClick,
        direction
    ]);
    const gradientStyle = React.useMemo({
        "Marquee.Marquee.useMemo[gradientStyle]": ()=>({
                ["--gradient-color"]: gradientColor,
                ["--gradient-width"]: typeof gradientWidth === "number" ? `${gradientWidth}px` : gradientWidth
            })
    }["Marquee.Marquee.useMemo[gradientStyle]"], [
        gradientColor,
        gradientWidth
    ]);
    const marqueeStyle = React.useMemo({
        "Marquee.Marquee.useMemo[marqueeStyle]": ()=>({
                ["--play"]: play ? "running" : "paused",
                ["--direction"]: direction === "left" ? "normal" : "reverse",
                ["--duration"]: `${duration}s`,
                ["--delay"]: `${delay}s`,
                ["--iteration-count"]: !!loop ? `${loop}` : "infinite",
                ["--min-width"]: autoFill ? `auto` : "100%"
            })
    }["Marquee.Marquee.useMemo[marqueeStyle]"], [
        play,
        direction,
        duration,
        delay,
        loop,
        autoFill
    ]);
    const childStyle = React.useMemo({
        "Marquee.Marquee.useMemo[childStyle]": ()=>({
                ["--transform"]: direction === "up" ? "rotate(90deg)" : direction === "down" ? "rotate(-90deg)" : "none"
            })
    }["Marquee.Marquee.useMemo[childStyle]"], [
        direction
    ]);
    // Render {multiplier} number of children
    const multiplyChildren = React.useCallback({
        "Marquee.Marquee.useCallback[multiplyChildren]": (multiplier)=>{
            return [
                ...Array(Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0)
            ].map({
                "Marquee.Marquee.useCallback[multiplyChildren]": (_, i)=>React__default['default'].createElement(React.Fragment, {
                        key: i
                    }, React.Children.map(children, {
                        "Marquee.Marquee.useCallback[multiplyChildren]": (child)=>{
                            return React__default['default'].createElement("div", {
                                style: childStyle,
                                className: "rfm-child"
                            }, child);
                        }
                    }["Marquee.Marquee.useCallback[multiplyChildren]"]))
            }["Marquee.Marquee.useCallback[multiplyChildren]"]);
        }
    }["Marquee.Marquee.useCallback[multiplyChildren]"], [
        childStyle,
        children
    ]);
    return !isMounted ? null : React__default['default'].createElement("div", {
        ref: containerRef,
        style: containerStyle,
        className: "rfm-marquee-container " + className
    }, gradient && React__default['default'].createElement("div", {
        style: gradientStyle,
        className: "rfm-overlay"
    }), React__default['default'].createElement("div", {
        className: "rfm-marquee",
        style: marqueeStyle,
        onAnimationIteration: onCycleComplete,
        onAnimationEnd: onFinish
    }, React__default['default'].createElement("div", {
        className: "rfm-initial-child-container",
        ref: marqueeRef
    }, React.Children.map(children, (child)=>{
        return React__default['default'].createElement("div", {
            style: childStyle,
            className: "rfm-child"
        }, child);
    })), multiplyChildren(multiplier - 1)), React__default['default'].createElement("div", {
        className: "rfm-marquee",
        style: marqueeStyle
    }, multiplyChildren(multiplier)));
});
exports.default = Marquee; //# sourceMappingURL=index.js.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), shim = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)");
}
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/zustand/esm/traditional.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWithEqualityFn",
    ()=>createWithEqualityFn,
    "useStoreWithEqualityFn",
    ()=>useStoreWithEqualityFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
;
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const identity = (arg)=>arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
    __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn)=>useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn)=>createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
;
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/suspend-react/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clear",
    ()=>clear,
    "peek",
    ()=>peek,
    "preload",
    ()=>preload,
    "suspend",
    ()=>suspend
]);
const isPromise = (promise)=>typeof promise === 'object' && typeof promise.then === 'function';
const globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b)=>a === b) {
    if (arrA === arrB) return true;
    if (!arrA || !arrB) return false;
    const len = arrA.length;
    if (arrB.length !== len) return false;
    for(let i = 0; i < len; i++)if (!equal(arrA[i], arrB[i])) return false;
    return true;
}
function query(fn, keys = null, preload = false, config = {}) {
    // If no keys were given, the function is the key
    if (keys === null) keys = [
        fn
    ];
    for (const entry of globalCache){
        // Find a match
        if (shallowEqualArrays(keys, entry.keys, entry.equal)) {
            // If we're pre-loading and the element is present, just return
            if (preload) return undefined; // If an error occurred, throw
            if (Object.prototype.hasOwnProperty.call(entry, 'error')) throw entry.error; // If a response was successful, return
            if (Object.prototype.hasOwnProperty.call(entry, 'response')) {
                if (config.lifespan && config.lifespan > 0) {
                    if (entry.timeout) clearTimeout(entry.timeout);
                    entry.timeout = setTimeout(entry.remove, config.lifespan);
                }
                return entry.response;
            } // If the promise is still unresolved, throw
            if (!preload) throw entry.promise;
        }
    } // The request is new or has changed.
    const entry = {
        keys,
        equal: config.equal,
        remove: ()=>{
            const index = globalCache.indexOf(entry);
            if (index !== -1) globalCache.splice(index, 1);
        },
        promise: (isPromise(fn) ? fn : fn(...keys) // When it resolves, store its value
        ).then((response)=>{
            entry.response = response; // Remove the entry in time if a lifespan was given
            if (config.lifespan && config.lifespan > 0) {
                entry.timeout = setTimeout(entry.remove, config.lifespan);
            }
        }) // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound
        .catch((error)=>entry.error = error)
    }; // Register the entry
    globalCache.push(entry); // And throw the promise, this yields control back to React
    if (!preload) throw entry.promise;
    return undefined;
}
const suspend = (fn, keys, config)=>query(fn, keys, false, config);
const preload = (fn, keys, config)=>void query(fn, keys, true, config);
const peek = (keys)=>{
    var _globalCache$find;
    return (_globalCache$find = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal))) == null ? void 0 : _globalCache$find.response;
};
const clear = (keys)=>{
    if (keys === undefined || keys.length === 0) globalCache.splice(0, globalCache.length);
    else {
        const entry = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal));
        if (entry) entry.remove();
    }
};
;
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/fiber/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, requestHostCallback();
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostCallback() {
        isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_continueExecution = function() {
        isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, requestHostCallback());
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_getFirstCallbackNode = function() {
        return peek(taskQueue);
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_pauseExecution = function() {};
    exports.unstable_requestPaint = function() {};
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, requestHostCallback()));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/fiber/node_modules/scheduler/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/fiber/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)");
}
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/fiber/node_modules/its-fine/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FiberProvider",
    ()=>m,
    "traverseFiber",
    ()=>i,
    "useContainer",
    ()=>w,
    "useContextBridge",
    ()=>x,
    "useContextMap",
    ()=>h,
    "useFiber",
    ()=>c,
    "useNearestChild",
    ()=>v,
    "useNearestParent",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const f = /* @__PURE__ */ (()=>{
    var e, t;
    return typeof window != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function i(e, t, r) {
    if (!e) return;
    if (r(e) === !0) return e;
    let n = t ? e.return : e.child;
    for(; n;){
        const u = i(n, t, r);
        if (u) return u;
        n = t ? null : n.sibling;
    }
}
function l(e) {
    try {
        return Object.defineProperties(e, {
            _currentRenderer: {
                get () {
                    return null;
                },
                set () {}
            },
            _currentRenderer2: {
                get () {
                    return null;
                },
                set () {}
            }
        });
    } catch (t) {
        return e;
    }
}
const a = /* @__PURE__ */ l(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null));
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    render() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](a.Provider, {
            value: this._reactInternals
        }, this.props.children);
    }
}
function c() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](a);
    if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "c.useMemo": ()=>{
            for (const n of [
                e,
                e == null ? void 0 : e.alternate
            ]){
                if (!n) continue;
                const u = i(n, !1, {
                    "c.useMemo.u": (d)=>{
                        let s = d.memoizedState;
                        for(; s;){
                            if (s.memoizedState === t) return !0;
                            s = s.next;
                        }
                    }
                }["c.useMemo.u"]);
                if (u) return u;
            }
        }
    }["c.useMemo"], [
        e,
        t
    ]);
}
function w() {
    const e = c(), t = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "w.useMemo[t]": ()=>i(e, !0, {
                "w.useMemo[t]": (r)=>{
                    var n;
                    return ((n = r.stateNode) == null ? void 0 : n.containerInfo) != null;
                }
            }["w.useMemo[t]"])
    }["w.useMemo[t]"], [
        e
    ]);
    return t == null ? void 0 : t.stateNode.containerInfo;
}
function v(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !1, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
function y(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !0, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
const p = Symbol.for("react.context"), b = (e)=>e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
function h() {
    const e = c(), [t] = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "h.useState": ()=>/* @__PURE__ */ new Map()
    }["h.useState"]);
    t.clear();
    let r = e;
    for(; r;){
        const n = r.type;
        b(n) && n !== a && !t.has(n) && t.set(n, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"](l(n))), r = r.return;
    }
    return t;
}
function x() {
    const e = h();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "x.useMemo": ()=>Array.from(e.keys()).reduce({
                "x.useMemo": (t, r)=>({
                        "x.useMemo": (n)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](t, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](r.Provider, {
                                ...n,
                                value: e.get(r)
                            }))
                    })["x.useMemo"]
            }["x.useMemo"], {
                "x.useMemo": (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](m, {
                        ...t
                    })
            }["x.useMemo"])
    }["x.useMemo"], [
        e
    ]);
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function g(n, t) {
    let o;
    return (...i)=>{
        window.clearTimeout(o), o = window.setTimeout(()=>n(...i), t);
    };
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
}) {
    const a = o || (typeof window == "undefined" ? class {
    } : window.ResizeObserver);
    if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    }), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: c,
        orientationHandler: null
    }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(w.current = !0, ()=>void (w.current = !1)));
    const [z, m, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const r = ()=>{
            if (!e.current.element) return;
            const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
                left: y,
                top: C,
                width: H,
                height: O,
                bottom: S,
                right: x,
                x: B,
                y: R
            };
            e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
        };
        return [
            r,
            f ? g(r, f) : r,
            d ? g(r, d) : r
        ];
    }, [
        h,
        i,
        d,
        f
    ]);
    function v() {
        e.current.scrollContainers && (e.current.scrollContainers.forEach((r)=>r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
    }
    function b() {
        e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r)=>r.addEventListener("scroll", s, {
                capture: !0,
                passive: !0
            })), e.current.orientationHandler = ()=>{
            s();
        }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
    }
    const L = (r)=>{
        !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
    };
    return X(s, !!t), W(m), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        v(), b();
    }, [
        t,
        s,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>v, []), [
        L,
        c,
        z
    ];
}
function W(n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = n;
        return window.addEventListener("resize", t), ()=>void window.removeEventListener("resize", t);
    }, [
        n
    ]);
}
function X(n, t) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t) {
            const o = n;
            return window.addEventListener("scroll", o, {
                capture: !0,
                passive: !0
            }), ()=>void window.removeEventListener("scroll", o, !0);
        }
    }, [
        n,
        t
    ]);
}
function E(n) {
    const t = [];
    if (!n || n === document.body) return t;
    const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
    return [
        o,
        i,
        a
    ].some((c)=>c === "auto" || c === "scroll") && t.push(n), [
        ...t,
        ...E(n.parentElement)
    ];
}
const k = [
    "x",
    "y",
    "top",
    "bottom",
    "left",
    "right",
    "width",
    "height"
], D = (n, t)=>k.every((o)=>n[o] === t[o]);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ASCII",
    ()=>eo,
    "Autofocus",
    ()=>ht,
    "Bloom",
    ()=>wt,
    "BrightnessContrast",
    ()=>St,
    "ChromaticAberration",
    ()=>yt,
    "ColorAverage",
    ()=>Pt,
    "ColorDepth",
    ()=>bt,
    "Depth",
    ()=>Et,
    "DepthOfField",
    ()=>ce,
    "DotScreen",
    ()=>Rt,
    "EffectComposer",
    ()=>dt,
    "EffectComposerContext",
    ()=>D,
    "FXAA",
    ()=>Nt,
    "Glitch",
    ()=>Ut,
    "GodRays",
    ()=>Ct,
    "Grid",
    ()=>zt,
    "HueSaturation",
    ()=>Tt,
    "LUT",
    ()=>Zt,
    "LensFlare",
    ()=>gt,
    "LensFlareEffect",
    ()=>fe,
    "N8AO",
    ()=>ao,
    "Noise",
    ()=>At,
    "Outline",
    ()=>Bt,
    "Pixelation",
    ()=>Vt,
    "Ramp",
    ()=>Ot,
    "RampEffect",
    ()=>pe,
    "RampType",
    ()=>ue,
    "SMAA",
    ()=>Lt,
    "SSAO",
    ()=>It,
    "Scanline",
    ()=>Ft,
    "Select",
    ()=>mt,
    "Selection",
    ()=>pt,
    "SelectiveBloom",
    ()=>kt,
    "Sepia",
    ()=>Gt,
    "ShockWave",
    ()=>Ht,
    "Texture",
    ()=>Wt,
    "TiltShift",
    ()=>$t,
    "TiltShift2",
    ()=>Yt,
    "TiltShiftEffect",
    ()=>me,
    "ToneMapping",
    ()=>Xt,
    "Vignette",
    ()=>qt,
    "WaterEffect",
    ()=>oo,
    "WaterEffectImpl",
    ()=>de,
    "resolveRef",
    ()=>k,
    "selectionContext",
    ()=>H,
    "useVector2",
    ()=>Z,
    "wrapEffect",
    ()=>P
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__createPortal$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export o as createPortal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export G as useLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export s as applyProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/postprocessing/node_modules/postprocessing/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$maath$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/postprocessing/node_modules/maath/dist/maath.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$3be59c6d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/postprocessing/node_modules/maath/dist/easing-3be59c6d.esm.js [app-client] (ecmascript) <export e as easing>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$n8ao$2f$dist$2f$N8AO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@react-three/postprocessing/node_modules/n8ao/dist/N8AO.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const H = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function pt({ children: e, enabled: t = !0 }) {
    const [o, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selected: o,
            select: r,
            enabled: t
        }), [
        o,
        r,
        t
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(H.Provider, {
        value: a,
        children: e
    });
}
function mt({ enabled: e = !1, children: t, ...o }) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(H);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (a && e) {
            let n = !1;
            const i = [];
            if (r.current.traverse((s)=>{
                s.type === "Mesh" && i.push(s), a.selected.indexOf(s) === -1 && (n = !0);
            }), n) return a.select((s)=>[
                    ...s,
                    ...i
                ]), ()=>{
                a.select((s)=>s.filter((l)=>!i.includes(l)));
            };
        }
    }, [
        e,
        t,
        a
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("group", {
        ref: r,
        ...o,
        children: t
    });
}
const D = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null), ie = (e)=>(e.getAttributes() & 2) === 2, dt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children: e, camera: t, scene: o, resolutionScale: r, enabled: a = !0, renderPriority: n = 1, autoClear: i = !0, depthBuffer: s, enableNormalPass: l, stencilBuffer: p, multisampling: _ = 8, frameBufferType: S = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"] }, g)=>{
    const { gl: d, scene: m, camera: v, size: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), f = o || m, u = t || v, [c, U, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const C = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"](d, {
            depthBuffer: s,
            stencilBuffer: p,
            multisampling: _,
            frameBufferType: S
        });
        C.addPass(new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderPass"](f, u));
        let R = null, E = null;
        return l && (E = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalPass"](f, u), E.enabled = !1, C.addPass(E), r !== void 0 && (R = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthDownsamplingPass"]({
            normalBuffer: E.texture,
            resolutionScale: r
        }), R.enabled = !1, C.addPass(R))), [
            C,
            E,
            R
        ];
    }, [
        u,
        d,
        s,
        p,
        _,
        S,
        f,
        l,
        r
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>c?.setSize(x.width, x.height), [
        c,
        x
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((C, R)=>{
        if (a) {
            const E = d.autoClear;
            d.autoClear = i, p && !i && d.clearStencil(), c.render(R), d.autoClear = E;
        }
    }, a ? n : 0);
    const F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const C = [], R = F.current.__r3f;
        if (R && c) {
            const E = R.children;
            for(let T = 0; T < E.length; T++){
                const N = E[T].object;
                if (N instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"]) {
                    const q = [
                        N
                    ];
                    if (!ie(N)) {
                        let G = null;
                        for(; (G = E[T + 1]?.object) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] && !ie(G);)q.push(G), T++;
                    }
                    const $ = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectPass"](u, ...q);
                    C.push($);
                } else N instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pass"] && C.push(N);
            }
            for (const T of C)c?.addPass(T);
            U && (U.enabled = !0), b && (b.enabled = !0);
        }
        return ()=>{
            for (const E of C)c?.removePass(E);
            U && (U.enabled = !1), b && (b.enabled = !1);
        };
    }, [
        c,
        e,
        u,
        U,
        b
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const C = d.toneMapping;
        return d.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoToneMapping"], ()=>{
            d.toneMapping = C;
        };
    }, [
        d
    ]);
    const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            composer: c,
            normalPass: U,
            downSamplingPass: b,
            resolutionScale: r,
            camera: u,
            scene: f
        }), [
        c,
        U,
        b,
        r,
        u,
        f
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(g, ()=>c, [
        c
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(D.Provider, {
        value: X,
        children: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("group", {
            ref: F,
            children: e
        })
    });
})), k = (e)=>typeof e == "object" && e != null && "current" in e ? e.current : e;
let vt = 0;
const le = /*@__PURE__*/ new WeakMap, P = (e, t)=>function({ blendFunction: o = t?.blendFunction, opacity: r = t?.opacity, ...a }) {
        let n = le.get(e);
        if (!n) {
            const l = `@react-three/postprocessing/${e.name}-${vt++}`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
                [l]: e
            }), le.set(e, n = l);
        }
        const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((l)=>l.camera), s = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
            "P.useMemo[s]": ()=>[
                    ...t?.args ?? [],
                    ...a.args ?? [
                        {
                            ...t,
                            ...a
                        }
                    ]
                ]
        }["P.useMemo[s]"], [
            JSON.stringify(a)
        ]);
        return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(n, {
            camera: i,
            "blendMode-blendFunction": o,
            "blendMode-opacity-value": r,
            ...a,
            args: s
        });
    }, Z = (e, t)=>{
    const o = e[t];
    return __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Z.useMemo": ()=>typeof o == "number" ? new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](o, o) : o ? new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](...o) : new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]
    }["Z.useMemo"], [
        o
    ]);
}, ce = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ blendFunction: e, worldFocusDistance: t, worldFocusRange: o, focusDistance: r, focusRange: a, focalLength: n, bokehScale: i, resolutionScale: s, resolutionX: l, resolutionY: p, width: _, height: S, target: g, depthTexture: d, ...m }, v) {
    const { camera: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), f = g != null, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthOfFieldEffect"](x, {
            blendFunction: e,
            worldFocusDistance: t,
            worldFocusRange: o,
            focusDistance: r,
            focusRange: a,
            focalLength: n,
            bokehScale: i,
            resolutionScale: s,
            resolutionX: l,
            resolutionY: p,
            width: _,
            height: S
        });
        f && (c.target = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]), d && c.setDepthTexture(d.texture, d.packing);
        const U = c.maskPass;
        return U.maskFunction = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaskFunction"].MULTIPLY_RGB_SET_ALPHA, c;
    }, [
        x,
        e,
        t,
        o,
        r,
        a,
        n,
        i,
        s,
        l,
        p,
        _,
        S,
        f,
        d
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            u.dispose();
        }, [
        u
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ...m,
        ref: v,
        object: u,
        target: g
    });
}), ht = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ target: e = void 0, mouse: t = !1, debug: o = void 0, manual: r = !1, smoothTime: a = .25, ...n }, i)=>{
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ scene: b })=>b), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ pointer: b })=>b), { composer: g, camera: d } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), [m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthPickingPass"]), [v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyPass"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(g.addPass(m), g.addPass(v), ()=>{
            g.removePass(m), g.removePass(v);
        }), [
        g,
        m,
        v
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            m.dispose(), v.dispose();
        }, [
        m,
        v
    ]);
    const [x] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0)), [f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0)), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (b, F)=>(f.x = b, f.y = F, f.z = await m.readDepth(f), f.z = f.z * 2 - 1, 1 - f.z > 1e-7 ? f.unproject(d) : !1), [
        f,
        m,
        d
    ]), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async (b, F = !0)=>{
        if (e) x.set(...e);
        else {
            const { x: X, y: C } = t ? S : {
                x: 0,
                y: 0
            }, R = await u(X, C);
            R && x.copy(R);
        }
        F && s.current?.target && (a > 0 && b > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$3be59c6d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__["easing"].damp3(s.current.target, x, a, b) : s.current.target.copy(x));
    }, [
        e,
        x,
        t,
        u,
        a,
        S
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(async (b, F)=>{
        r || c(F), l.current && l.current.position.copy(x), p.current && s.current?.target && p.current.position.copy(s.current.target);
    });
    const U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            dofRef: s,
            hitpoint: x,
            update: c
        }), [
        x,
        c
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(i, ()=>U, [
        U
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__createPortal$3e$__["createPortal"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("mesh", {
                        ref: l,
                        children: [
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("sphereGeometry", {
                                args: [
                                    o,
                                    16,
                                    16
                                ]
                            }),
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("meshBasicMaterial", {
                                color: "#00ff00",
                                opacity: 1,
                                transparent: !0,
                                depthWrite: !1
                            })
                        ]
                    }),
                    /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("mesh", {
                        ref: p,
                        children: [
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("sphereGeometry", {
                                args: [
                                    o / 2,
                                    16,
                                    16
                                ]
                            }),
                            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("meshBasicMaterial", {
                                color: "#00ff00",
                                opacity: .5,
                                transparent: !0,
                                depthWrite: !1
                            })
                        ]
                    })
                ]
            }), _) : null,
            /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ce, {
                ref: s,
                ...n,
                target: x
            })
        ]
    });
}), _t = {
    fragmentShader: `
    uniform float time;
    uniform vec2 lensPosition;
    uniform vec2 screenRes;
    uniform vec3 colorGain;
    uniform float starPoints;
    uniform float glareSize;
    uniform float flareSize;
    uniform float flareSpeed;
    uniform float flareShape;
    uniform float haloScale;
    uniform float opacity;
    uniform bool animated;
    uniform bool anamorphic;
    uniform bool enabled;
    uniform bool secondaryGhosts;
    uniform bool starBurst;
    uniform float ghostScale;
    uniform bool aditionalStreaks;
    uniform sampler2D lensDirtTexture;
    vec2 vTexCoord;
    
    float rand(float n){return fract(sin(n) * 43758.5453123);}

    float noise(float p){
      float fl = floor(p);
      float fc = fract(p);
      return mix(rand(fl),rand(fl + 1.0), fc);
    }

    vec3 hsv2rgb(vec3 c)
    {
      vec4 k = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + k.xyz) * 6.0 - k.www);
      return c.z * mix(k.xxx, clamp(p - k.xxx, 0.0, 1.0), c.y);
    }

    float saturate(float x)
    {
      return clamp(x, 0.,1.);
    }

    vec2 rotateUV(vec2 uv, float rotation)
    {
      return vec2(
          cos(rotation) * uv.x + sin(rotation) * uv.y,
          cos(rotation) * uv.y - sin(rotation) * uv.x
      );
    }

    // Based on https://www.shadertoy.com/view/XtKfRV
    vec3 drawflare(vec2 p, float intensity, float rnd, float speed, int id)
    {
      float flarehueoffset = (1. / 32.) * float(id) * 0.1;
      float lingrad = distance(vec2(0.), p);
      float expgrad = 1. / exp(lingrad * (fract(rnd) * 0.66 + 0.33));
      vec3 colgrad = hsv2rgb(vec3( fract( (expgrad * 8.) + speed * flareSpeed + flarehueoffset), pow(1.-abs(expgrad*2.-1.), 0.45), 20.0 * expgrad * intensity)); //rainbow spectrum effect

      float internalStarPoints;

      if(anamorphic){
        internalStarPoints = 1.0;
      } else{
        internalStarPoints = starPoints;
      }
      
      float blades = length(p * flareShape * sin(internalStarPoints * atan(p.x, p.y)));
      
      float comp = pow(1.-saturate(blades), ( anamorphic ? 100. : 12.));
      comp += saturate(expgrad-0.9) * 3.;
      comp = pow(comp * expgrad, 8. + (1.-intensity) * 5.);
      
      if(flareSpeed > 0.0){
        return vec3(comp) * colgrad;
      } else{
        return vec3(comp) * flareSize * 15.;
      }
    }

    float dist(vec3 a, vec3 b) { return abs(a.x - b.x) + abs(a.y - b.y) + abs(a.z - b.z); }

    vec3 saturate(vec3 x)
    {
      return clamp(x, vec3(0.0), vec3(1.0));
    }

    // Based on https://www.shadertoy.com/view/XtKfRV
    float glare(vec2 uv, vec2 pos, float size)
    {
      vec2 main;

      if(animated){
        main = rotateUV(uv-pos, time * 0.1);      
      } else{
        main = uv-pos;     
      }
      
      float ang = atan(main.y, main.x) * (anamorphic ? 1.0 : starPoints);
      float dist = length(main); 
      dist = pow(dist, .9);
      
      float f0 = 1.0/(length(uv-pos)*(1.0/size*16.0)+.2);

      return f0+f0*(sin((ang))*.2 +.3);
    }

    float sdHex(vec2 p){
      p = abs(p);
      vec2 q = vec2(p.x*2.0*0.5773503, p.y + p.x*0.5773503);
      return dot(step(q.xy,q.yx), 1.0-q.yx);
    }

    //Based on https://www.shadertoy.com/view/dllSRX
    float fpow(float x, float k){
      return x > k ? pow((x-k)/(1.0-k),2.0) : 0.0;
    }

    vec3 renderhex(vec2 uv, vec2 p, float s, vec3 col){
      uv -= p;
      if (abs(uv.x) < 0.2*s && abs(uv.y) < 0.2*s){
          return mix(vec3(0),mix(vec3(0),col,0.1 + fpow(length(uv/s),0.1)*10.0),smoothstep(0.0,0.1,sdHex(uv*20.0/s)));
      }
      return vec3(0);
    }

    // Based on https://www.shadertoy.com/view/4sX3Rs
    vec3 LensFlare(vec2 uv, vec2 pos)
    {
      vec2 main = uv-pos;
      vec2 uvd = uv*(length(uv));
      
      float ang = atan(main.x,main.y);
      
      float f0 = .3/(length(uv-pos)*16.0+1.0);
      
      f0 = f0*(sin(noise(sin(ang*3.9-(animated ? time : 0.0) * 0.3) * starPoints))*.2 );
      
      float f1 = max(0.01-pow(length(uv+1.2*pos),1.9),.0)*7.0;

      float f2 = max(.9/(10.0+32.0*pow(length(uvd+0.99*pos),2.0)),.0)*0.35;
      float f22 = max(.9/(11.0+32.0*pow(length(uvd+0.85*pos),2.0)),.0)*0.23;
      float f23 = max(.9/(12.0+32.0*pow(length(uvd+0.95*pos),2.0)),.0)*0.6;
      
      vec2 uvx = mix(uv,uvd, 0.1);
      
      float f4 = max(0.01-pow(length(uvx+0.4*pos),2.9),.0)*4.02;
      float f42 = max(0.0-pow(length(uvx+0.45*pos),2.9),.0)*4.1;
      float f43 = max(0.01-pow(length(uvx+0.5*pos),2.9),.0)*4.6;
      
      uvx = mix(uv,uvd,-.4);
      
      float f5 = max(0.01-pow(length(uvx+0.1*pos),5.5),.0)*2.0;
      float f52 = max(0.01-pow(length(uvx+0.2*pos),5.5),.0)*2.0;
      float f53 = max(0.01-pow(length(uvx+0.1*pos),5.5),.0)*2.0;
      
      uvx = mix(uv,uvd, 2.1);
      
      float f6 = max(0.01-pow(length(uvx-0.3*pos),1.61),.0)*3.159;
      float f62 = max(0.01-pow(length(uvx-0.325*pos),1.614),.0)*3.14;
      float f63 = max(0.01-pow(length(uvx-0.389*pos),1.623),.0)*3.12;
      
      vec3 c = vec3(glare(uv,pos, glareSize));

      vec2 prot;

      if(animated){
        prot = rotateUV(uv - pos, (time * 0.1));  
      } else if(anamorphic){
        prot = rotateUV(uv - pos, 1.570796);     
      } else {
        prot = uv - pos;
      }

      c += drawflare(prot, (anamorphic ? flareSize * 10. : flareSize), 0.1, time, 1);
      
      c.r+=f1+f2+f4+f5+f6; c.g+=f1+f22+f42+f52+f62; c.b+=f1+f23+f43+f53+f63;
      c = c*1.3 * vec3(length(uvd)+.09);
      c+=vec3(f0);
      
      return c;
    }

    vec3 cc(vec3 color, float factor,float factor2)
    {
      float w = color.x+color.y+color.z;
      return mix(color,vec3(w)*factor,w*factor2);
    }    

    float rnd(vec2 p)
    {
      float f = fract(sin(dot(p, vec2(12.1234, 72.8392) )*45123.2));
      return f;   
    }

    float rnd(float w)
    {
      float f = fract(sin(w)*1000.);
      return f;   
    }

    float regShape(vec2 p, int N)
    {
      float f;
      
      float a=atan(p.x,p.y)+.2;
      float b=6.28319/float(N);
      f=smoothstep(.5,.51, cos(floor(.5+a/b)*b-a)*length(p.xy)* 2.0  -ghostScale);
          
      return f;
    }

    // Based on https://www.shadertoy.com/view/Xlc3D2
    vec3 circle(vec2 p, float size, float decay, vec3 color, vec3 color2, float dist, vec2 position)
    {
      float l = length(p + position*(dist*2.))+size/2.;
      float l2 = length(p + position*(dist*4.))+size/3.;
      
      float c = max(0.01-pow(length(p + position*dist), size*ghostScale), 0.0)*10.;
      float c1 = max(0.001-pow(l-0.3, 1./40.)+sin(l*20.), 0.0)*3.;
      float c2 =  max(0.09/pow(length(p-position*dist/.5)*1., .95), 0.0)/20.;
      float s = max(0.02-pow(regShape(p*5. + position*dist*5. + decay, 6) , 1.), 0.0)*1.5;
      
      color = cos(vec3(0.44, .24, .2)*16. + dist/8.)*0.5+.5;
      vec3 f = c*color;
      f += c1*color;
      f += c2*color;  
      f +=  s*color;
      return f;
    }

    vec4 getLensColor(float x){
      return vec4(vec3(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(vec3(0., 0., 0.),
        vec3(0., 0., 0.), smoothstep(0.0, 0.063, x)),
        vec3(0., 0., 0.), smoothstep(0.063, 0.125, x)),
        vec3(0.0, 0., 0.), smoothstep(0.125, 0.188, x)),
        vec3(0.188, 0.131, 0.116), smoothstep(0.188, 0.227, x)),
        vec3(0.31, 0.204, 0.537), smoothstep(0.227, 0.251, x)),
        vec3(0.192, 0.106, 0.286), smoothstep(0.251, 0.314, x)),
        vec3(0.102, 0.008, 0.341), smoothstep(0.314, 0.392, x)),
        vec3(0.086, 0.0, 0.141), smoothstep(0.392, 0.502, x)),
        vec3(1.0, 0.31, 0.0), smoothstep(0.502, 0.604, x)),
        vec3(.1, 0.1, 0.1), smoothstep(0.604, 0.643, x)),
        vec3(1.0, 0.929, 0.0), smoothstep(0.643, 0.761, x)),
        vec3(1.0, 0.086, 0.424), smoothstep(0.761, 0.847, x)),
        vec3(1.0, 0.49, 0.0), smoothstep(0.847, 0.89, x)),
        vec3(0.945, 0.275, 0.475), smoothstep(0.89, 0.941, x)),
        vec3(0.251, 0.275, 0.796), smoothstep(0.941, 1.0, x))),
      1.0);
    }

    float dirtNoise(vec2 p){
      vec2 f = fract(p);
      f = (f * f) * (3.0 - (2.0 * f));    
      float n = dot(floor(p), vec2(1.0, 157.0));
      vec4 a = fract(sin(vec4(n + 0.0, n + 1.0, n + 157.0, n + 158.0)) * 43758.5453123);
      return mix(mix(a.x, a.y, f.x), mix(a.z, a.w, f.x), f.y);
    } 

    float fbm(vec2 p){
      const mat2 m = mat2(0.80, -0.60, 0.60, 0.80);
      float f = 0.0;
      f += 0.5000*dirtNoise(p); p = m*p*2.02;
      f += 0.2500*dirtNoise(p); p = m*p*2.03;
      f += 0.1250*dirtNoise(p); p = m*p*2.01;
      f += 0.0625*dirtNoise(p);
      return f/0.9375;
    }

    vec4 getLensStar(vec2 p){
      vec2 pp = (p - vec2(0.5)) * 2.0;
      float a = atan(pp.y, pp.x);
      vec4 cp = vec4(sin(a * 1.0), length(pp), sin(a * 13.0), sin(a * 53.0));
      float d = sin(clamp(pow(length(vec2(0.5) - p) * 0.5 + haloScale /2., 5.0), 0.0, 1.0) * 3.14159);
      vec3 c = vec3(d) * vec3(fbm(cp.xy * 16.0) * fbm(cp.zw * 9.0) * max(max(max(max(0.5, sin(a * 1.0)), sin(a * 3.0) * 0.8), sin(a * 7.0) * 0.8), sin(a * 9.0) * 10.6));
      c *= vec3(mix(2.0, (sin(length(pp.xy) * 256.0) * 0.5) + 0.5, sin((clamp((length(pp.xy) - 0.875) / 0.1, 0.0, 1.0) + 0.0) * 2.0 * 3.14159) * 1.5) + 0.5) * 0.3275;
      return vec4(vec3(c * 1.0), d);	
    }

    vec4 getLensDirt(vec2 p){
      p.xy += vec2(fbm(p.yx * 3.0), fbm(p.yx * 2.0)) * 0.0825;
      vec3 o = vec3(mix(0.125, 0.25, max(max(smoothstep(0.1, 0.0, length(p - vec2(0.25))),
                                            smoothstep(0.4, 0.0, length(p - vec2(0.75)))),
                                            smoothstep(0.8, 0.0, length(p - vec2(0.875, 0.125))))));
      o += vec3(max(fbm(p * 1.0) - 0.5, 0.0)) * 0.5;
      o += vec3(max(fbm(p * 2.0) - 0.5, 0.0)) * 0.5;
      o += vec3(max(fbm(p * 4.0) - 0.5, 0.0)) * 0.25;
      o += vec3(max(fbm(p * 8.0) - 0.75, 0.0)) * 1.0;
      o += vec3(max(fbm(p * 16.0) - 0.75, 0.0)) * 0.75;
      o += vec3(max(fbm(p * 64.0) - 0.75, 0.0)) * 0.5;
      return vec4(clamp(o, vec3(0.15), vec3(1.0)), 1.0);	
    }

    vec4 textureLimited(sampler2D tex, vec2 texCoord){
      if(((texCoord.x < 0.) || (texCoord.y < 0.)) || ((texCoord.x > 1.) || (texCoord.y > 1.))){
        return vec4(0.0);
      }else{
        return texture(tex, texCoord); 
      }
    }

    vec4 textureDistorted(sampler2D tex, vec2 texCoord, vec2 direction, vec3 distortion) {
      return vec4(textureLimited(tex, (texCoord + (direction * distortion.r))).r,
                  textureLimited(tex, (texCoord + (direction * distortion.g))).g,
                  textureLimited(tex, (texCoord + (direction * distortion.b))).b,
                  1.0);
    }

    // Based on https://www.shadertoy.com/view/4sK3W3
    vec4 getStartBurst(){
      vec2 aspectTexCoord = vec2(1.0) - (((vTexCoord - vec2(0.5)) * vec2(1.0)) + vec2(0.5)); 
      vec2 texCoord = vec2(1.0) - vTexCoord; 
      vec2 ghostVec = (vec2(0.5) - texCoord) * 0.3 - lensPosition;
      vec2 ghostVecAspectNormalized = normalize(ghostVec * vec2(1.0)) * vec2(1.0);
      vec2 haloVec = normalize(ghostVec) * 0.6;
      vec2 haloVecAspectNormalized = ghostVecAspectNormalized * 0.6;
      vec2 texelSize = vec2(1.0) / vec2(screenRes.xy);
      vec3 distortion = vec3(-(texelSize.x * 1.5), 0.2, texelSize.x * 1.5);
      vec4 c = vec4(0.0);
      for (int i = 0; i < 8; i++) {
        vec2 offset = texCoord + (ghostVec * float(i));
        c += textureDistorted(lensDirtTexture, offset, ghostVecAspectNormalized, distortion) * pow(max(0.0, 1.0 - (length(vec2(0.5) - offset) / length(vec2(0.5)))), 10.0);
      }                       
      vec2 haloOffset = texCoord + haloVecAspectNormalized; 
      return (c * getLensColor((length(vec2(0.5) - aspectTexCoord) / length(vec2(haloScale))))) + 
            (textureDistorted(lensDirtTexture, haloOffset, ghostVecAspectNormalized, distortion) * pow(max(0.0, 1.0 - (length(vec2(0.5) - haloOffset) / length(vec2(0.5)))), 10.0));
    } 

    void mainImage(vec4 inputColor, vec2 uv, out vec4 outputColor)
    {
      vec2 myUV = uv -0.5;
      myUV.y *= screenRes.y/screenRes.x;
      vec2 finalLensPosition = lensPosition * 0.5;
      finalLensPosition.y *= screenRes.y/screenRes.x;
      
      //First Lens flare pass
      vec3 finalColor = LensFlare(myUV, finalLensPosition) * 20.0 * colorGain / 256.;

      //Aditional streaks
      if(aditionalStreaks){
        vec3 circColor = vec3(0.9, 0.2, 0.1);
        vec3 circColor2 = vec3(0.3, 0.1, 0.9);

        for(float i=0.;i<10.;i++){
          finalColor += circle(myUV, pow(rnd(i*2000.)*2.8, .1)+1.41, 0.0, circColor+i , circColor2+i, rnd(i*20.)*3.+0.2-.5, lensPosition);
        }
      }

      //Alternative ghosts
      if(secondaryGhosts){
        vec3 altGhosts = vec3(0);
        altGhosts += renderhex(myUV, -lensPosition*0.25, ghostScale * 1.4, vec3(0.25,0.35,0));
        altGhosts += renderhex(myUV, lensPosition*0.25, ghostScale * 0.5, vec3(1,0.5,0.5));
        altGhosts += renderhex(myUV, lensPosition*0.1, ghostScale * 1.6, vec3(1,1,1));
        altGhosts += renderhex(myUV, lensPosition*1.8, ghostScale * 2.0, vec3(0,0.5,0.75));
        altGhosts += renderhex(myUV, lensPosition*1.25, ghostScale * 0.8, vec3(1,1,0.5));
        altGhosts += renderhex(myUV, -lensPosition*1.25, ghostScale * 5.0, vec3(0.5,0.5,0.25));
        
        //Circular ghosts
        altGhosts += fpow(1.0 - abs(distance(lensPosition*0.8,myUV) - 0.7),0.985)*colorGain / 2100.;
        finalColor += altGhosts;
      }
      

      //Starburst                     
      if(starBurst){
        vTexCoord = myUV + 0.5;
        vec4 lensMod = getLensDirt(myUV);
        float tooBright = 1.0 - (clamp(0.5, 0.0, 0.5) * 2.0); 
        float tooDark = clamp(0.5 - 0.5, 0.0, 0.5) * 2.0;
        lensMod += mix(lensMod, pow(lensMod * 2.0, vec4(2.0)) * 0.5, tooBright);
        float lensStarRotationAngle = ((myUV.x + myUV.y)) * (1.0 / 6.0);
        vec2 lensStarTexCoord = (mat2(cos(lensStarRotationAngle), -sin(lensStarRotationAngle), sin(lensStarRotationAngle), cos(lensStarRotationAngle)) * vTexCoord);
        lensMod += getLensStar(lensStarTexCoord) * 2.;
        
        finalColor += clamp((lensMod.rgb * getStartBurst().rgb ), 0.01, 1.0);
      }

      //Final composed output
      if(enabled){
        outputColor = vec4(mix(finalColor, vec3(.0), opacity) + inputColor.rgb, inputColor.a);
      } else {
        outputColor = vec4(inputColor);
      }
    }
  `
};
class fe extends __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ blendFunction: t, enabled: o, glareSize: r, lensPosition: a, screenRes: n, starPoints: i, flareSize: s, flareSpeed: l, flareShape: p, animated: _, anamorphic: S, colorGain: g, lensDirtTexture: d, haloScale: m, secondaryGhosts: v, aditionalStreaks: x, ghostScale: f, opacity: u, starBurst: c }){
        super("LensFlareEffect", _t.fragmentShader, {
            blendFunction: t,
            uniforms: /*@__PURE__*/ new Map([
                [
                    "enabled",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](o)
                ],
                [
                    "glareSize",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](r)
                ],
                [
                    "lensPosition",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](a)
                ],
                [
                    "time",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0)
                ],
                [
                    "screenRes",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](n)
                ],
                [
                    "starPoints",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](i)
                ],
                [
                    "flareSize",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](s)
                ],
                [
                    "flareSpeed",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](l)
                ],
                [
                    "flareShape",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](p)
                ],
                [
                    "animated",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](_)
                ],
                [
                    "anamorphic",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](S)
                ],
                [
                    "colorGain",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](g)
                ],
                [
                    "lensDirtTexture",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](d)
                ],
                [
                    "haloScale",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](m)
                ],
                [
                    "secondaryGhosts",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](v)
                ],
                [
                    "aditionalStreaks",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](x)
                ],
                [
                    "ghostScale",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](f)
                ],
                [
                    "starBurst",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](c)
                ],
                [
                    "opacity",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](u)
                ]
            ])
        });
    }
    update(t, o, r) {
        const a = this.uniforms.get("time");
        a && (a.value += r);
    }
}
const xt = /*@__PURE__*/ P(fe), gt = ({ smoothTime: e = .07, blendFunction: t = 23, enabled: o = !0, glareSize: r = .2, lensPosition: a = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-25, 6, -60), screenRes: n = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0), starPoints: i = 6, flareSize: s = .01, flareSpeed: l = .01, flareShape: p = .01, animated: _ = !0, anamorphic: S = !1, colorGain: g = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](20, 20, 20), lensDirtTexture: d = null, haloScale: m = .5, secondaryGhosts: v = !0, aditionalStreaks: x = !0, ghostScale: f = 0, opacity: u = 1, starBurst: c = !1 })=>{
    const U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ viewport: T })=>T), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ raycaster: T })=>T), { scene: F, camera: X } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), [C] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]), [R] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((T, N)=>{
        if (!E?.current) return;
        const q = E.current.uniforms.get("lensPosition"), $ = E.current.uniforms.get("opacity");
        if (!q || !$) return;
        let G = 1;
        if (R.copy(a).project(X), R.z > 1) return;
        q.value.x = R.x, q.value.y = R.y, C.x = R.x, C.y = R.y, b.setFromCamera(C, X);
        const ve = b.intersectObjects(F.children, !0), { object: I } = ve[0] || {};
        I && (I.userData?.lensflare === "no-occlusion" ? G = 0 : I instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] && (I.material.uniforms?._transmission?.value > .2 || I.material._transmission && I.material._transmission > .2 ? G = .2 : I.material.transparent && (G = I.material.opacity))), __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$3be59c6d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__["easing"].damp($, "value", G, e, N);
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!E?.current) return;
        const T = E.current.uniforms.get("screenRes");
        T && (T.value.x = U.width, T.value.y = U.height);
    }, [
        U
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(xt, {
        ref: E,
        blendFunction: t,
        enabled: o,
        glareSize: r,
        lensPosition: a,
        screenRes: n,
        starPoints: i,
        flareSize: s,
        flareSpeed: l,
        flareShape: p,
        animated: _,
        anamorphic: S,
        colorGain: g,
        lensDirtTexture: d,
        haloScale: m,
        secondaryGhosts: v,
        aditionalStreaks: x,
        ghostScale: f,
        opacity: u,
        starBurst: c
    });
}, wt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BloomEffect"], {
    blendFunction: 0
}), St = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrightnessContrastEffect"]), yt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChromaticAberrationEffect"]), Pt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ blendFunction: e = 23 }, t) {
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorAverageEffect"](e), [
        e
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: o,
        dispose: null
    });
}), bt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorDepthEffect"]), Et = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthEffect"]), Rt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotScreenEffect"]), Ut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ active: e = !0, ...t }, o) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((p)=>p.invalidate), a = Z(t, "delay"), n = Z(t, "duration"), i = Z(t, "strength"), s = Z(t, "chromaticAberrationOffset"), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlitchEffect"]({
            ...t,
            delay: a,
            duration: n,
            strength: i,
            chromaticAberrationOffset: s
        }), [
        a,
        n,
        t,
        i,
        s
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        l.mode = e ? t.mode || __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlitchMode"].SPORADIC : __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlitchMode"].DISABLED, r();
    }, [
        e,
        l,
        r,
        t.mode
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            l.dispose?.();
        }, [
        l
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: o,
        object: l,
        dispose: null
    });
}), Ct = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(e, t) {
    const { camera: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GodRaysEffect"](o, k(e.sun), e), [
        o,
        e
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>void (r.lightSource = k(e.sun)), [
        r,
        e.sun
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: r,
        dispose: null
    });
}), zt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ size: e, ...t }, o) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((n)=>n.invalidate), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridEffect"](t), [
        t
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        e && a.setSize(e.width, e.height), r();
    }, [
        a,
        e,
        r
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: o,
        object: a,
        dispose: null
    });
}), Tt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HueSaturationEffect"]), At = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoiseEffect"], {
    blendFunction: 5
}), Bt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ selection: e = [], selectionLayer: t = 10, blendFunction: o, patternTexture: r, edgeStrength: a, pulseSpeed: n, visibleEdgeColor: i, hiddenEdgeColor: s, width: l, height: p, kernelSize: _, blur: S, xRay: g, ...d }, m) {
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((U)=>U.invalidate), { scene: x, camera: f } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutlineEffect"](x, f, {
            blendFunction: o,
            patternTexture: r,
            edgeStrength: a,
            pulseSpeed: n,
            visibleEdgeColor: i,
            hiddenEdgeColor: s,
            width: l,
            height: p,
            kernelSize: _,
            blur: S,
            xRay: g,
            ...d
        }), [
        o,
        S,
        f,
        a,
        p,
        s,
        _,
        r,
        n,
        x,
        i,
        l,
        g
    ]), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(H);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!c && e) return u.selection.set(Array.isArray(e) ? e.map(k) : [
            k(e)
        ]), v(), ()=>{
            u.selection.clear(), v();
        };
    }, [
        u,
        e,
        c,
        v
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        u.selectionLayer = t, v();
    }, [
        u,
        v,
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (c && c.enabled && c.selected?.length) return u.selection.set(c.selected), v(), ()=>{
            u.selection.clear(), v();
        };
    }, [
        c,
        u.selection,
        v
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            u.dispose();
        }, [
        u
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: m,
        object: u
    });
}), Vt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ granularity: e = 5 }, t) {
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PixelationEffect"](e), [
        e
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: o,
        dispose: null
    });
}), Ft = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScanlineEffect"], {
    blendFunction: 24,
    density: 1.25
}), Mt = (e, t)=>e.layers.enable(t.selection.layer), Dt = (e, t)=>e.layers.disable(t.selection.layer), kt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ selection: e = [], selectionLayer: t = 10, lights: o = [], inverted: r = !1, ignoreBackground: a = !1, luminanceThreshold: n, luminanceSmoothing: i, intensity: s, width: l, height: p, kernelSize: _, mipmapBlur: S, ...g }, d) {
    o.length === 0 && console.warn("SelectiveBloom requires lights to work.");
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((c)=>c.invalidate), { scene: v, camera: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectiveBloomEffect"](v, x, {
            blendFunction: 0,
            luminanceThreshold: n,
            luminanceSmoothing: i,
            intensity: s,
            width: l,
            height: p,
            kernelSize: _,
            mipmapBlur: S,
            ...g
        });
        return c.inverted = r, c.ignoreBackground = a, c;
    }, [
        v,
        x,
        n,
        i,
        s,
        l,
        p,
        _,
        S,
        r,
        a,
        g
    ]), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(H);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!u && e) return f.selection.set(Array.isArray(e) ? e.map(k) : [
            k(e)
        ]), m(), ()=>{
            f.selection.clear(), m();
        };
    }, [
        f,
        e,
        u,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        f.selection.layer = t, m();
    }, [
        f,
        m,
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (o && o.length > 0) return o.forEach((c)=>Mt(k(c), f)), m(), ()=>{
            o.forEach((c)=>Dt(k(c), f)), m();
        };
    }, [
        f,
        m,
        o,
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (u && u.enabled && u.selected?.length) return f.selection.set(u.selected), m(), ()=>{
            f.selection.clear(), m();
        };
    }, [
        u,
        f.selection,
        m
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: d,
        object: f,
        dispose: null
    });
}), Gt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SepiaEffect"]), It = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(e, t) {
    const { camera: o, normalPass: r, downSamplingPass: a, resolutionScale: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(D), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>r === null && a === null ? (console.error("Please enable the NormalPass in the EffectComposer in order to use SSAO."), {}) : new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SSAOEffect"](o, r && !a ? r.texture : null, {
            blendFunction: 21,
            samples: 30,
            rings: 4,
            distanceThreshold: 1,
            distanceFalloff: 0,
            rangeThreshold: .5,
            rangeFalloff: .1,
            luminanceInfluence: .9,
            radius: 20,
            bias: .5,
            intensity: 1,
            color: void 0,
            normalDepthBuffer: a ? a.texture : null,
            resolutionScale: n ?? 1,
            depthAwareUpsampling: !0,
            ...e
        }), [
        o,
        a,
        r,
        n
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: t,
        object: i,
        dispose: null
    });
}), Lt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMAAEffect"]), Nt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FXAAEffect"]), jt = {
    fragmentShader: `
    uniform int rampType;

    uniform vec2 rampStart;
    uniform vec2 rampEnd;

    uniform vec4 startColor;
    uniform vec4 endColor;

    uniform float rampBias;
    uniform float rampGain;

    uniform bool rampMask;
    uniform bool rampInvert;

    float getBias(float time, float bias) {
      return time / (((1.0 / bias) - 2.0) * (1.0 - time) + 1.0);
    }

    float getGain(float time, float gain) {
      if (time < 0.5)
        return getBias(time * 2.0, gain) / 2.0;
      else
        return getBias(time * 2.0 - 1.0, 1.0 - gain) / 2.0 + 0.5;
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
      vec2 centerPixel = uv * resolution;
      vec2 startPixel = rampStart * resolution;
      vec2 endPixel = rampEnd * resolution;

      float rampAlpha;

      if (rampType == 1) {
        vec2 fuv = centerPixel / resolution.y;
        vec2 suv = startPixel / resolution.y;
        vec2 euv = endPixel / resolution.y;

        float radius = length(suv - euv);
        float falloff = length(fuv - suv);
        rampAlpha = smoothstep(0.0, radius, falloff);
      } else {
        float radius = length(startPixel - endPixel);
        vec2 direction = normalize(vec2(endPixel.x - startPixel.x, -(startPixel.y - endPixel.y)));

        float fade = dot(centerPixel - startPixel, direction);
        if (rampType == 2) fade = abs(fade);

        rampAlpha = smoothstep(0.0, 1.0, fade / radius);
      }

      rampAlpha = abs((rampInvert ? 1.0 : 0.0) - getBias(rampAlpha, rampBias) * getGain(rampAlpha, rampGain));

      if (rampMask) {
        vec4 inputBuff = texture2D(inputBuffer, uv);
        outputColor = mix(inputBuff, inputColor, rampAlpha);
      } else {
        outputColor = mix(startColor, endColor, rampAlpha);
      }
    }
  `
};
var ue = /*@__PURE__*/ ((e)=>(e[e.Linear = 0] = "Linear", e[e.Radial = 1] = "Radial", e[e.MirroredLinear = 2] = "MirroredLinear", e))(ue || {});
class pe extends __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ rampType: t = 0, rampStart: o = [
        .5,
        .5
    ], rampEnd: r = [
        1,
        1
    ], startColor: a = [
        0,
        0,
        0,
        1
    ], endColor: n = [
        1,
        1,
        1,
        1
    ], rampBias: i = .5, rampGain: s = .5, rampMask: l = !1, rampInvert: p = !1, ..._ } = {}){
        super("RampEffect", jt.fragmentShader, {
            ..._,
            uniforms: /*@__PURE__*/ new Map([
                [
                    "rampType",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](t)
                ],
                [
                    "rampStart",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](o)
                ],
                [
                    "rampEnd",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](r)
                ],
                [
                    "startColor",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](a)
                ],
                [
                    "endColor",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](n)
                ],
                [
                    "rampBias",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](i)
                ],
                [
                    "rampGain",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](s)
                ],
                [
                    "rampMask",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](l)
                ],
                [
                    "rampInvert",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](p)
                ]
            ])
        });
    }
}
const Ot = /*@__PURE__*/ P(pe), Wt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ textureSrc: e, texture: t, opacity: o = 1, ...r }, a) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"], e);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        n.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"], n.wrapS = n.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    }, [
        n
    ]);
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureEffect"]({
            ...r,
            texture: n || t
        }), [
        r,
        n,
        t
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: a,
        object: i,
        "blendMode-opacity-value": o,
        dispose: null
    });
}), Xt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToneMappingEffect"]), qt = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VignetteEffect"]), Ht = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShockWaveEffect"]), Zt = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function({ lut: e, tetrahedralInterpolation: t, ...o }, r) {
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LUT3DEffect"](e, o), [
        e,
        o
    ]), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((i)=>i.invalidate);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        t && (a.tetrahedralInterpolation = t), e && (a.lut = e), n();
    }, [
        a,
        n,
        e,
        t
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: r,
        object: a,
        dispose: null
    });
}), $t = /*@__PURE__*/ P(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiltShiftEffect"], {
    blendFunction: 0
}), Kt = {
    fragmentShader: `

    // original shader by Evan Wallace

    #define MAX_ITERATIONS 100

    uniform float blur;
    uniform float taper;
    uniform vec2 start;
    uniform vec2 end;
    uniform vec2 direction;
    uniform int samples;

    float random(vec3 scale, float seed) {
        /* use the fragment position for a different seed per-pixel */
        return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 color = vec4(0.0);
        float total = 0.0;
        vec2 startPixel = vec2(start.x * resolution.x, start.y * resolution.y);
        vec2 endPixel = vec2(end.x * resolution.x, end.y * resolution.y);
        float f_samples = float(samples);
        float half_samples = f_samples / 2.0;

        // use screen diagonal to normalize blur radii
        float maxScreenDistance = distance(vec2(0.0), resolution); // diagonal distance
        float gradientRadius = taper * (maxScreenDistance);
        float blurRadius = blur * (maxScreenDistance / 16.0);

        /* randomize the lookup values to hide the fixed number of samples */
        float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
        vec2 normal = normalize(vec2(startPixel.y - endPixel.y, endPixel.x - startPixel.x));
        float radius = smoothstep(0.0, 1.0, abs(dot(uv * resolution - startPixel, normal)) / gradientRadius) * blurRadius;

        #pragma unroll_loop_start
        for (int i = 0; i <= MAX_ITERATIONS; i++) {
            if (i >= samples) { break; } // return early if over sample count
            float f_i = float(i);
            float s_i = -half_samples + f_i;
            float percent = (s_i + offset - 0.5) / half_samples;
            float weight = 1.0 - abs(percent);
            vec4 sample_i = texture2D(inputBuffer, uv + normalize(direction) / resolution * percent * radius);
            /* switch to pre-multiplied alpha to correctly blur transparent images */
            sample_i.rgb *= sample_i.a;
            color += sample_i * weight;
            total += weight;
        }
        #pragma unroll_loop_end

        outputColor = color / total;

        /* switch back from pre-multiplied alpha */
        outputColor.rgb /= outputColor.a + 0.00001;
    }
    `
};
class me extends __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ blendFunction: t = 23, blur: o = .15, taper: r = .5, start: a = [
        .5,
        0
    ], end: n = [
        .5,
        1
    ], samples: i = 10, direction: s = [
        1,
        1
    ] } = {}){
        super("TiltShiftEffect", Kt.fragmentShader, {
            blendFunction: t,
            attributes: 2,
            uniforms: /*@__PURE__*/ new Map([
                [
                    "blur",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](o)
                ],
                [
                    "taper",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](r)
                ],
                [
                    "start",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](a)
                ],
                [
                    "end",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](n)
                ],
                [
                    "samples",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](i)
                ],
                [
                    "direction",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](s)
                ]
            ])
        });
    }
}
const Yt = /*@__PURE__*/ P(me, {
    blendFunction: 23
}), Jt = `
uniform sampler2D uCharacters;
uniform float uCharactersCount;
uniform float uCellSize;
uniform bool uInvert;
uniform vec3 uColor;

const vec2 SIZE = vec2(16.);

vec3 greyscale(vec3 color, float strength) {
    float g = dot(color, vec3(0.299, 0.587, 0.114));
    return mix(color, vec3(g), strength);
}

vec3 greyscale(vec3 color) {
    return greyscale(color, 1.0);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 cell = resolution / uCellSize;
    vec2 grid = 1.0 / cell;
    vec2 pixelizedUV = grid * (0.5 + floor(uv / grid));
    vec4 pixelized = texture2D(inputBuffer, pixelizedUV);
    float greyscaled = greyscale(pixelized.rgb).r;

    if (uInvert) {
        greyscaled = 1.0 - greyscaled;
    }

    float characterIndex = floor((uCharactersCount - 1.0) * greyscaled);
    vec2 characterPosition = vec2(mod(characterIndex, SIZE.x), floor(characterIndex / SIZE.y));
    vec2 offset = vec2(characterPosition.x, -characterPosition.y) / SIZE;
    vec2 charUV = mod(uv * (cell / SIZE), 1.0 / SIZE) - vec2(0., 1.0 / SIZE) + offset;
    vec4 asciiCharacter = texture2D(uCharacters, charUV);

    asciiCharacter.rgb = uColor * asciiCharacter.r;
    asciiCharacter.a = pixelized.a;
    outputColor = asciiCharacter;
}
`;
class Qt extends __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ font: t = "arial", characters: o = " .:,'-^=*+?!|0#X%WM@", fontSize: r = 54, cellSize: a = 16, color: n = "#ffffff", invert: i = !1 } = {}){
        const s = /*@__PURE__*/ new Map([
            [
                "uCharacters",
                new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"])
            ],
            [
                "uCellSize",
                new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](a)
            ],
            [
                "uCharactersCount",
                new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](o.length)
            ],
            [
                "uColor",
                new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](n))
            ],
            [
                "uInvert",
                new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](i)
            ]
        ]);
        super("ASCIIEffect", Jt, {
            uniforms: s
        });
        const l = this.uniforms.get("uCharacters");
        l && (l.value = this.createCharactersTexture(o, t, r));
    }
    createCharactersTexture(t, o, r) {
        const a = document.createElement("canvas"), n = 1024, i = 16, s = n / i;
        a.width = a.height = n;
        const l = new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](a, void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"], __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"], __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"]), p = a.getContext("2d");
        if (!p) throw new Error("Context not available");
        p.clearRect(0, 0, n, n), p.font = `${r}px ${o}`, p.textAlign = "center", p.textBaseline = "middle", p.fillStyle = "#fff";
        for(let _ = 0; _ < t.length; _++){
            const S = t[_], g = _ % i, d = Math.floor(_ / i);
            p.fillText(S, g * s + s / 2, d * s + s / 2);
        }
        return l.needsUpdate = !0, l;
    }
}
const eo = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ font: e = "arial", characters: t = " .:,'-^=*+?!|0#X%WM@", fontSize: o = 54, cellSize: r = 16, color: a = "#ffffff", invert: n = !1 }, i)=>{
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Qt({
            characters: t,
            font: e,
            fontSize: o,
            cellSize: r,
            color: a,
            invert: n
        }), [
        t,
        o,
        r,
        a,
        n,
        e
    ]);
    return /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: i,
        object: s
    });
}), to = {
    fragmentShader: `
    uniform float factor;

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
      vec2 vUv = uv;
      float frequency = 6.0 * factor;
      float amplitude = 0.015 * factor;
      float x = vUv.y * frequency + time * 0.7; 
      float y = vUv.x * frequency + time * 0.3;
      vUv.x += cos(x + y) * amplitude * cos(y);
      vUv.y += sin(x - y) * amplitude * cos(y);
      vec4 rgba = texture(inputBuffer, vUv);
      outputColor = rgba;
    }
  `
};
class de extends __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"] {
    constructor({ blendFunction: t = 23, factor: o = 0 } = {}){
        super("WaterEffect", to.fragmentShader, {
            blendFunction: t,
            attributes: 2,
            uniforms: /*@__PURE__*/ new Map([
                [
                    "factor",
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](o)
                ]
            ])
        });
    }
}
const oo = /*@__PURE__*/ P(de, {
    blendFunction: 23
}), ao = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ halfRes: e, screenSpaceRadius: t, quality: o, depthAwareUpsampling: r = !0, aoRadius: a = 5, aoSamples: n = 16, denoiseSamples: i = 4, denoiseRadius: s = 12, distanceFalloff: l = 1, intensity: p = 1, color: _, renderMode: S = 0 }, g)=>{
    const { camera: d, scene: m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$node_modules$2f$n8ao$2f$dist$2f$N8AO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N8AOPostPass"](m, d), [
        d,
        m
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(v.configuration, {
            color: _,
            aoRadius: a,
            distanceFalloff: l,
            intensity: p,
            aoSamples: n,
            denoiseSamples: i,
            denoiseRadius: s,
            screenSpaceRadius: t,
            renderMode: S,
            halfRes: e,
            depthAwareUpsampling: r
        });
    }, [
        t,
        _,
        a,
        l,
        p,
        n,
        i,
        s,
        S,
        e,
        r,
        v
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        o && v.setQualityMode(o.charAt(0).toUpperCase() + o.slice(1));
    }, [
        v,
        o
    ]), /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("primitive", {
        ref: g,
        object: v
    });
});
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=68b0d_0b990138._.js.map