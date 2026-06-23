(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Qunatrix/qunatrixlabs-web/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavBar",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/** Route → lamp colour map */ const routeGlow = {
    "/": "#217AFF",
    "/services": "#A855F7",
    "/case-studies": "#10B981",
    "/about": "#F97316",
    "/contact": "#EF4444"
};
function NavBar({ items, className }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const getActiveFromPath = ()=>{
        const match = items.find((item)=>!item.highlight && item.url === pathname);
        return match ? match.name : items[0].name;
    };
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getActiveFromPath);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBar.useEffect": ()=>{
            setActiveTab(getActiveFromPath());
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["NavBar.useEffect"], [
        pathname
    ]);
    /** Colour for the current route */ const lampColor = routeGlow[pathname] ?? "#217AFF";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-0 sm:top-0 sm:bottom-auto left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-xl shadow-black/40",
            children: items.map((item)=>{
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                if (item.highlight) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.url,
                        onClick: ()=>setActiveTab(item.name),
                        className: "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-all bg-gradient-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] text-white hover:opacity-90 hover:shadow-[0_0_15px_rgba(33,122,255,0.5)] ml-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                                lineNumber: 71,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 18,
                                    strokeWidth: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                                    lineNumber: 73,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                        lineNumber: 65,
                        columnNumber: 15
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.url,
                    onClick: ()=>setActiveTab(item.name),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors", "text-white/70 hover:text-white", isActive && "text-white"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden md:inline",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 18,
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                                lineNumber: 92,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                            lineNumber: 91,
                            columnNumber: 15
                        }, this),
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layoutId: "lamp",
                            className: "absolute inset-0 w-full rounded-full -z-10",
                            style: {
                                backgroundColor: `${lampColor}18`
                            },
                            initial: false,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full",
                                style: {
                                    backgroundColor: lampColor
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-12 h-6 rounded-full blur-md -top-2 -left-2",
                                        style: {
                                            backgroundColor: `${lampColor}50`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                                        lineNumber: 108,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-8 h-6 rounded-full blur-md -top-1",
                                        style: {
                                            backgroundColor: `${lampColor}35`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                                        lineNumber: 112,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-4 h-4 rounded-full blur-sm top-0 left-2",
                                        style: {
                                            backgroundColor: `${lampColor}30`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                                        lineNumber: 116,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                                lineNumber: 104,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                            lineNumber: 96,
                            columnNumber: 17
                        }, this)
                    ]
                }, item.name, true, {
                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
                    lineNumber: 80,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(NavBar, "bm1epINBUT/2xEhDcqB4i/kqYG8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$components$2f$ui$2f$tubelight$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/components/ui/tubelight-navbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navItems = [
    {
        name: "Home",
        url: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        name: "Services",
        url: "/services",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"]
    },
    {
        name: "Case Studies",
        url: "/case-studies",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        name: "About",
        url: "/about",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        name: "Contact",
        url: "/contact",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"]
    },
    {
        name: "Get a Quote",
        url: "/contact",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        highlight: true
    }
];
function Header() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-5 left-6 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center space-x-2 font-bold text-xl tracking-wider text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text font-black",
                            children: "QUNATRIX"
                        }, void 0, false, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white/70 font-light text-xs bg-white/10 px-2 py-0.5 rounded-full border border-white/10",
                            children: "LABS"
                        }, void 0, false, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 right-4 z-50 sm:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setMenuOpen(true),
                    className: "p-2 bg-white/5 border border-white/10 rounded-md text-white hover:bg-white/10 transition",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 22,
                        height: 22,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 6h16M4 12h16M4 18h16"
                        }, void 0, false, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$components$2f$ui$2f$tubelight$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavBar"], {
                items: navItems
            }, void 0, false, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 sm:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`,
                onClick: ()=>setMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 h-full w-64 bg-[#0E0C15] text-white z-50 p-6 transition-transform duration-300 sm:hidden ${menuOpen ? "translate-x-0" : "-translate-x-64"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center space-x-1.5 font-bold text-lg tracking-wider",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text font-black",
                                        children: "QUNATRIX"
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/80 font-light text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full border border-white/10",
                                        children: "LABS"
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMenuOpen(false),
                                "aria-label": "Close menu",
                                className: "p-2 rounded-md bg-white/10 hover:bg-white/20 transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 18,
                                    height: 18,
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 6l-12 12M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col space-y-5 text-white/80",
                        children: navItems.slice(0, 5).map(({ name, url, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: url,
                                onClick: ()=>setMenuOpen(false),
                                className: `flex items-center gap-3 text-sm font-medium transition ${pathname === url ? "text-white" : "hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 17,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    name
                                ]
                            }, name, true, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            onClick: ()=>setMenuOpen(false),
                            className: "block w-full text-center bg-gradient-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] px-4 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition",
                            children: "Get a Quote"
                        }, void 0, false, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "XeKBFCs+x77NsHWouRwtasyFFlw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-10 border-t border-white/10 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "container mx-auto  lg:px-0 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl overflow-hidden bg-cover",
                    style: {
                        backgroundImage: "url('/img/home/call-to-action.png')"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " flex md:flex-row flex-col items-center lg:gap-100 gap-6 lg:p-10 p-4 bg-linear-to-r from-[#2563EB]    ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "lg:text-3xl text-2xl font-semibold ",
                                        children: "Ready to accelerate your next digital venture?"
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                        lineNumber: 14,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "lg:text-base text-sm font-light text-white",
                                        children: "Partner with Qunatrix Labs to engineer custom, robust, and highly scalable software solutions tailored precisely to your operational workflow. Let's build something extraordinary."
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 lg:shrink-0 lg:w-auto w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "px-6 py-3 flex items-center bg-white text-black font-medium rounded-full text-base space-x-2 ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Get in Touch"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: 20,
                                            height: 20,
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 1.5,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    stroke: "none",
                                                    d: "M0 0h24v24H0z",
                                                    fill: "none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M17 7l-10 10"
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8 7l9 0l0 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-5 grid-cols-1 gap-6 py-10  ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center space-x-2 font-bold text-xl tracking-wider text-white mb-4 block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text font-black",
                                            children: "QUNATRIX"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/80 font-light text-xs bg-white/10 px-2 py-0.5 rounded-full border border-white/10",
                                            children: "LABS"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: " text-white/80 font-light",
                                    children: "Qunatrix Labs is a premier IT consulting and development firm specializing in custom enterprise applications, Blockchain & crypto engineering, AI integrations, IoT systems, and bespoke industry software."
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://x.com/Verif_Labs",
                                            target: "blank",
                                            "aria-label": "twitter",
                                            className: "text-white/60 hover:text-[#2563EB] cursor-pointer   transition duration-150",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 20,
                                                height: 20,
                                                fill: "currentColor",
                                                className: "bi bi-twitter",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://t.me/+hPMwQZ-_3AJlNjY1",
                                            target: "blank",
                                            "aria-label": "telegram",
                                            className: "text-white/60 hover:text-[#2563EB] cursor-pointer   transition duration-150",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 20,
                                                height: 20,
                                                fill: "currentColor",
                                                className: "bi bi-telegram",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://www.instagram.com/verifide.labs/?hl=en",
                                            target: "blank",
                                            "aria-label": "instagram",
                                            className: "text-white/60 hover:text-[#2563EB] cursor-pointer   transition duration-150",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 20,
                                                height: 20,
                                                fill: "currentColor",
                                                className: "bi bi-instagram",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://www.linkedin.com/company/verifidelabs/?viewAsMember=true",
                                            target: "blank",
                                            "aria-label": "linkedin",
                                            className: "text-white/60 hover:text-[#2563EB] cursor-pointer   transition duration-150",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: 20,
                                                height: 20,
                                                fill: "currentColor",
                                                className: "bi bi-linkedin",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 lg:border-r border-white/10 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 font-semibold text-white",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-white/80 *:font-light  *:hover:translate-x-1 *:transition-all *:hover:text-blue-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=blockchain",
                                            className: "block",
                                            children: "Blockchain & Crypto"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=enterprise",
                                            className: "block",
                                            children: "Odoo & ERP Next"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=enterprise",
                                            className: "block",
                                            children: "CRM & HRMS"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=blockchain",
                                            className: "block",
                                            children: "AI Solutions"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=integrations",
                                            className: "block",
                                            children: "POS Integrations"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=blockchain",
                                            className: "block",
                                            children: "IoT Device Control"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 lg:border-r border-white/10 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 font-semibold text-white",
                                    children: "Industries"
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-white/80  *:font-light  *:hover:translate-x-1 *:transition-all *:hover:text-blue-400 ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=industries",
                                            className: "block",
                                            children: "Aviation & Ticketing"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=industries",
                                            className: "block",
                                            children: "Fintech Solutions"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=industries",
                                            className: "block",
                                            children: "Hospital & Healthcare"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=industries",
                                            className: "block",
                                            children: "LMS & E-learning"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=industries",
                                            className: "block",
                                            children: "E-commerce Platforms"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services?tab=enterprise",
                                            className: "block",
                                            children: "Manufacturing Workflow"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 lg:border-r border-white/10 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 font-semibold text-white",
                                    children: "Explore"
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-white/80  *:font-light  *:hover:translate-x-1 *:transition-all *:hover:text-blue-400 ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "block",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services",
                                            className: "block",
                                            children: "Our Services"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/case-studies",
                                            className: "block",
                                            children: "Case Studies"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about",
                                            className: "block",
                                            children: "About Us"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "block",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 font-semibold text-white",
                                    children: "Contact Info"
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shrink-0 text-white/80",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: 16,
                                                        height: 16,
                                                        fill: "currentColor",
                                                        className: "bi bi-envelope",
                                                        viewBox: "0 0 16 16",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80",
                                                    children: "Sales@qunatrixlabs.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shrink-0 pt-0.5 text-xs",
                                                    children: "🇮🇳"
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-white/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold text-white/95",
                                                            children: "India Office"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-light mt-0.5 leading-normal",
                                                            children: "5th Floor, Cloud-9, Office no. S-538, Ghaziabad, UP 201010"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-mono text-cyan-400 mt-0.5 font-semibold",
                                                            children: "+91-8448665756"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shrink-0 pt-0.5 text-xs",
                                                    children: "🇺🇸"
                                                }, void 0, false, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-white/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold text-white/95",
                                                            children: "USA Office"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-light mt-0.5 leading-normal",
                                                            children: "1510 clear circle garden, Houston, Texas 77047"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-mono text-cyan-400 mt-0.5 font-semibold",
                                                            children: "+1 (877) 209-6488"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex md:flex-row flex-col gap-4 items-center justify-between py-4 border-t border-white/10 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "© 2026 Qunatrix Labs. All Rights Reserved."
                        }, void 0, false, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white/60 font-light lg:text-left text-center flex flex-wrap gap-2 items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/terms",
                                    className: "hover:text-blue-400 transition-colors",
                                    children: "Terms & Conditions"
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/20",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy",
                                    className: "hover:text-blue-400 transition-colors",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/20",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cookies",
                                    className: "hover:text-blue-400 transition-colors",
                                    children: "Cookie Preferences"
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Qunatrix/qunatrixlabs-web/components/ui/spotlight-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowCard",
    ()=>GlowCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const glowColorMap = {
    blue: {
        hue: 220,
        sat: 100,
        lit: 60
    },
    cyan: {
        hue: 192,
        sat: 100,
        lit: 60
    },
    purple: {
        hue: 270,
        sat: 100,
        lit: 65
    },
    green: {
        hue: 142,
        sat: 80,
        lit: 55
    },
    red: {
        hue: 0,
        sat: 100,
        lit: 60
    },
    orange: {
        hue: 30,
        sat: 100,
        lit: 60
    }
};
const sizeMap = {
    sm: 'w-48 h-64',
    md: 'w-64 h-80',
    lg: 'w-80 h-96'
};
const GlowCard = ({ children, className = '', glowColor = 'blue', size = 'md', width, height, customSize = false })=>{
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { hue, sat, lit } = glowColorMap[glowColor];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlowCard.useEffect": ()=>{
            const card = cardRef.current;
            if (!card) return;
            const onMove = {
                "GlowCard.useEffect.onMove": (e)=>{
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                }
            }["GlowCard.useEffect.onMove"];
            document.addEventListener('mousemove', onMove);
            return ({
                "GlowCard.useEffect": ()=>document.removeEventListener('mousemove', onMove)
            })["GlowCard.useEffect"];
        }
    }["GlowCard.useEffect"], []);
    const spotColor = `hsla(${hue}, ${sat}%, ${lit}%, 0.22)`;
    const borderGlow = `hsla(${hue}, ${sat}%, ${lit}%, 0.55)`;
    const bgColor = `hsla(${hue}, ${sat}%, ${lit}%, 0.06)`;
    const inlineStyle = {
        '--mouse-x': '-999px',
        '--mouse-y': '-999px',
        position: 'relative',
        background: bgColor,
        ...width !== undefined ? {
            width: typeof width === 'number' ? `${width}px` : width
        } : {},
        ...height !== undefined ? {
            height: typeof height === 'number' ? `${height}px` : height
        } : {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        style: inlineStyle,
        className: `
        glow-card
        ${customSize ? '' : sizeMap[size]}
        rounded-2xl
        ${className}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                style: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                    borderRadius: 'inherit',
                    background: `radial-gradient(
            380px circle at var(--mouse-x) var(--mouse-y),
            ${spotColor},
            transparent 65%
          )`
                }
            }, void 0, false, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/spotlight-card.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                style: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                    borderRadius: 'inherit',
                    background: `radial-gradient(
            280px circle at var(--mouse-x) var(--mouse-y),
            ${borderGlow},
            transparent 60%
          ), linear-gradient(to right, hsla(${hue}, ${sat}%, ${lit}%, 0.15), hsla(${hue}, ${sat}%, ${lit}%, 0.15))`,
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                }
            }, void 0, false, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/spotlight-card.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full flex flex-col",
                children: children
            }, void 0, false, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/spotlight-card.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Qunatrix/qunatrixlabs-web/components/ui/spotlight-card.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GlowCard, "6u/bLyT0WzEP0A9aknmDXb+lDH8=");
_c = GlowCard;
;
var _c;
__turbopack_context__.k.register(_c, "GlowCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudiesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$components$2f$ui$2f$spotlight$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/components/ui/spotlight-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldCheck$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@tabler/icons-react/dist/esm/icons/IconShieldCheck.mjs [app-client] (ecmascript) <export default as IconShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-client] (ecmascript) <export default as IconMail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlane$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@tabler/icons-react/dist/esm/icons/IconPlane.mjs [app-client] (ecmascript) <export default as IconPlane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTruck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTruck$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@tabler/icons-react/dist/esm/icons/IconTruck.mjs [app-client] (ecmascript) <export default as IconTruck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconActivity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconActivity$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@tabler/icons-react/dist/esm/icons/IconActivity.mjs [app-client] (ecmascript) <export default as IconActivity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSettings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSettings$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@tabler/icons-react/dist/esm/icons/IconSettings.mjs [app-client] (ecmascript) <export default as IconSettings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDevices$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDevices$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@tabler/icons-react/dist/esm/icons/IconDevices.mjs [app-client] (ecmascript) <export default as IconDevices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrophy$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@tabler/icons-react/dist/esm/icons/IconTrophy.mjs [app-client] (ecmascript) <export default as IconTrophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/@tabler/icons-react/dist/esm/icons/IconExternalLink.mjs [app-client] (ecmascript) <export default as IconExternalLink>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const caseStudies = [
    {
        id: "verified",
        title: "Verified Credentials",
        subtitle: "verified.xyz",
        category: "blockchain",
        url: "https://verified.xyz",
        description: "Decentralized digital credentials passport, identity validation registry, and verifiable startup database using cryptographic security signatures.",
        stack: [
            "Next.js",
            "Solidity",
            "Ethereum",
            "Ethers.js",
            "Web3Auth"
        ],
        highlights: [
            "25,000+ digital identity passports issued",
            "Gas-optimized ERC-721 smart contracts",
            "Secure third-party API verification"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldCheck$3e$__["IconShieldCheck"],
        image: "/img/case-studies/verified.png"
    },
    {
        id: "mailtrail",
        title: "Mailtrail Engine",
        subtitle: "mailtrail.io",
        category: "enterprise",
        url: "https://mailtrail.io",
        description: "High-throughput transaction email delivery backend with real-time log pipelines, SMTP configurations, and analytics trackers.",
        stack: [
            "Go",
            "React",
            "Rust",
            "PostgreSQL",
            "Redis"
        ],
        highlights: [
            "Processes 15M+ transaction emails daily",
            "Under 100ms processing and queueing dispatch",
            "Interactive analytics graphs with CanvasJS"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__["IconMail"],
        image: "/img/case-studies/mailtrail.png"
    },
    {
        id: "kendrag",
        title: "KendraG Aviation Manifest",
        subtitle: "Private Charter Logistics",
        category: "logistics",
        url: "#",
        description: "Specialized aircraft manifest log, private charter fleet coordinator, and pilot roster compliance scheduling application.",
        stack: [
            "Python",
            "Django",
            "React",
            "Tailwind CSS",
            "AWS"
        ],
        highlights: [
            "Optimized manifests for 12 charter fleets",
            "Instant PDF load calculations",
            "FAA audit-ready compliance reporter"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlane$3e$__["IconPlane"],
        image: "/img/case-studies/kendrag.png"
    },
    {
        id: "eliteprime",
        title: "Elite Prime Logistics",
        subtitle: "eliteprime-logistics.com",
        category: "logistics",
        url: "https://www.eliteprime-logistics.com",
        description: "Cross-border logistics tracking database, automated route optimization engine, and dispatcher cargo reservation CRM.",
        stack: [
            "Node.js",
            "React",
            "Google Maps API",
            "PostgreSQL",
            "Docker"
        ],
        highlights: [
            "Dynamic GPS route updates every 3 seconds",
            "Automated broker load match matching",
            "30% reduction in average container dwell time"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTruck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTruck$3e$__["IconTruck"],
        image: "/img/case-studies/eliteprime.png"
    },
    {
        id: "eyision",
        title: "Eyision Clinical Board",
        subtitle: "eyision.com",
        category: "iot",
        url: "https://www.eyision.com",
        description: "Hospital management diagnostics logs, patient health files, real-time doctor dashboards, and medical video streaming.",
        stack: [
            "React",
            "Fastify",
            "MongoDB",
            "WebRTC",
            "HL7 Standards"
        ],
        highlights: [
            "HL7 compliance integration with zero leaks",
            "RTC peer-to-peer clinical teleconsultations",
            "99.99% clinical database uptime"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconActivity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconActivity$3e$__["IconActivity"],
        image: "/img/case-studies/eyision.png"
    },
    {
        id: "diarchgo",
        title: "Diarchgo ERP & Assembly",
        subtitle: "diarchgo.com",
        category: "enterprise",
        url: "https://www.diarchgo.com",
        description: "Modular factory supply workflow automation, Bill of Materials calculation engine, and warehouse inventory scheduler.",
        stack: [
            "Python",
            "Odoo",
            "ERPNext",
            "PostgreSQL",
            "Frappe"
        ],
        highlights: [
            "Real-time supply sync with barcode scanners",
            "Dynamic cost calculation for 5,000+ items",
            "Custom inventory forecasts using simple stats"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSettings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSettings$3e$__["IconSettings"],
        image: "/img/case-studies/diarchgo.png"
    },
    {
        id: "eyeaddon",
        title: "EyeAddon Telemetry",
        subtitle: "eyeaddon.ddns.net",
        category: "iot",
        url: "https://eyeaddon.ddns.net",
        description: "Telemetry data receiver and dynamic device control dashboard with surveillance feed overlays.",
        stack: [
            "Node.js",
            "MQTT",
            "WebSockets",
            "Raspberry Pi",
            "Python"
        ],
        highlights: [
            "MQTT message latency kept under 5ms",
            "Dynamic hardware terminal configuration",
            "Live hardware health telemetry"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDevices$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDevices$3e$__["IconDevices"],
        image: "/img/case-studies/eyeaddon.png"
    },
    {
        id: "dream11",
        title: "Dream11 Sync Engine",
        subtitle: "Fantasy Match Synchronizer",
        category: "blockchain",
        url: "#",
        description: "High-performance match squad synchronizer and live scoring ledger consuming third-party soccer APIs.",
        stack: [
            "Next.js",
            "Spring Boot",
            "Redis",
            "RabbitMQ",
            "PostgreSQL"
        ],
        highlights: [
            "Syncs 1,200+ player states concurrently",
            "Under 1s updates during match highlights",
            "Fully automated fallback match scheduler"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrophy$3e$__["IconTrophy"],
        image: "/img/case-studies/dream11.png"
    }
];
const categories = [
    {
        id: "all",
        label: "All Cases"
    },
    {
        id: "blockchain",
        label: "Blockchain & Web3"
    },
    {
        id: "enterprise",
        label: "Enterprise ERP/CRM"
    },
    {
        id: "logistics",
        label: "Logistics & Transport"
    },
    {
        id: "iot",
        label: "IoT & Healthcare"
    }
];
const categoryGlow = {
    blockchain: 'purple',
    enterprise: 'blue',
    logistics: 'green',
    iot: 'cyan'
};
function CaseStudiesPage() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filteredCases, setFilteredCases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(caseStudies);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CaseStudiesPage.useEffect": ()=>{
            let result = caseStudies;
            if (activeCategory !== "all") {
                result = result.filter({
                    "CaseStudiesPage.useEffect": (item)=>item.category === activeCategory
                }["CaseStudiesPage.useEffect"]);
            }
            if (searchQuery.trim() !== "") {
                result = result.filter({
                    "CaseStudiesPage.useEffect": (item)=>item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase())
                }["CaseStudiesPage.useEffect"]);
            }
            setFilteredCases(result);
        }
    }["CaseStudiesPage.useEffect"], [
        activeCategory,
        searchQuery
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-[#0A0914] min-h-screen text-white pt-28 pb-16 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[15%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[15%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-6 space-y-12 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center max-w-3xl mx-auto space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-6xl font-bold tracking-tight",
                                        children: [
                                            "Our",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text",
                                                children: "Case Studies"
                                            }, void 0, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/70 font-light",
                                        children: "Discover how Qunatrix Labs engineers robust architectures, resolves complex data synchronization pipelines, and designs enterprise workflows."
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 justify-center",
                                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveCategory(cat.id),
                                                className: `px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]" : "bg-white/5 hover:bg-white/10 text-white/80 border border-white/5 hover:text-white"}`,
                                                children: cat.label
                                            }, cat.id, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full md:w-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search case studies...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-white/40 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute right-4 top-1/2 -translate-y-1/2 text-white/40",
                                                children: "🔍"
                                            }, void 0, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "popLayout",
                                    children: filteredCases.map((project)=>{
                                        const IconComponent = project.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layout: true,
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            exit: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$components$2f$ui$2f$spotlight$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlowCard"], {
                                                glowColor: categoryGlow[project.category] ?? 'blue',
                                                customSize: true,
                                                className: "flex flex-col justify-between h-full group overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative h-52 w-full overflow-hidden bg-white/5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: project.image,
                                                                        alt: project.title,
                                                                        fill: true,
                                                                        sizes: "(max-width: 768px) 100vw, 50vw",
                                                                        className: "object-cover transition-transform duration-500 group-hover:scale-105"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 bg-gradient-to-t from-[#0A0914] via-[#0A0914]/20 to-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    project.url !== "#" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: project.url,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "absolute top-4 right-4 z-20 text-white/80 hover:text-cyan-400 transition-colors p-2.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:border-cyan-500/30",
                                                                        title: "Visit Website",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__["IconExternalLink"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                        lineNumber: 258,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute top-4 left-4 z-20 text-[10px] uppercase font-mono tracking-wider bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-cyan-400",
                                                                        children: project.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                        lineNumber: 270,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-8 space-y-6 pt-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300 shrink-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                                    size: 24
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                                    lineNumber: 279,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                                lineNumber: 278,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-0.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                        className: "text-xl font-bold group-hover:text-blue-400 transition-colors duration-300 line-clamp-1",
                                                                                        children: project.title
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                                        lineNumber: 282,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-cyan-400 font-mono tracking-wider font-semibold",
                                                                                        children: project.subtitle
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                                        lineNumber: 283,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                                lineNumber: 281,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                        lineNumber: 277,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-white/70 font-light leading-relaxed min-h-[60px]",
                                                                        children: project.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                        lineNumber: 287,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2 pt-1",
                                                                        children: project.stack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[11px] font-mono bg-white/5 border border-white/5 px-2.5 py-1 rounded text-white/60",
                                                                                children: tech
                                                                            }, tech, false, {
                                                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                                lineNumber: 291,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-8 pb-8",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-6 border-t border-white/5 space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xs font-bold uppercase tracking-wider text-white/40",
                                                                    children: "Key Accomplishments"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2",
                                                                    children: project.highlights.map((highlight, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "text-xs text-white/80 font-light flex items-start space-x-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-cyan-400 font-bold mt-0.5",
                                                                                    children: "✦"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                                    lineNumber: 303,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: highlight
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                                    lineNumber: 304,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, index, true, {
                                                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, this)
                                        }, project.id, false, {
                                            fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            filteredCases.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "text-center py-20 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-5xl block",
                                        children: "🔎"
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold",
                                        children: "No projects matching found"
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 font-light",
                                        children: "Try searching with different terms or reset your category filter."
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center space-y-6 mt-12 relative overflow-hidden shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#0A0914]/40 z-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 space-y-4 max-w-2xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl md:text-3xl font-bold",
                                                children: "Ready to build your success story?"
                                            }, void 0, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/70 font-light text-sm",
                                                children: "Discuss custom software solutions, backend synchronization flows, or hardware terminal setup with our expert engineering team."
                                            }, void 0, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "inline-block bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 rounded-full font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:opacity-90 transition-all",
                                                children: "Start Your Project"
                                            }, void 0, false, {
                                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Qunatrix/qunatrixlabs-web/app/case-studies/page.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CaseStudiesPage, "DkGmvajLHQbMgDO0FwH1PSVuYys=");
_c = CaseStudiesPage;
var _c;
__turbopack_context__.k.register(_c, "CaseStudiesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Qunatrix_qunatrixlabs-web_cd196206._.js.map