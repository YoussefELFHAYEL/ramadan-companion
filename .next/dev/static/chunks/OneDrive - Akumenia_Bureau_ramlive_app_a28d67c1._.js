(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// ========================================
// COMPACT HERO SEARCH (Collapsible)
// ========================================
const SmartSearch = ({ onSubmit, savedCity, hasCity })=>{
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(savedCity || '');
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Cache: { prefix: [results] } - stores full list for each 3-char prefix
    const prefixCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const currentPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const fullResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getPrefix = (q)=>q?.toLowerCase().trim().substring(0, 3) || '';
    // ========================================
    // LOCAL FILTERING
    // ========================================
    const filterLocally = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SmartSearch.useCallback[filterLocally]": (searchQuery)=>{
            if (!fullResults.current.length) return [];
            const lowerQuery = searchQuery.toLowerCase().trim();
            return fullResults.current.filter({
                "SmartSearch.useCallback[filterLocally]": (item)=>item.city.toLowerCase().includes(lowerQuery) || item.country.toLowerCase().includes(lowerQuery) || item.formatted.toLowerCase().includes(lowerQuery)
            }["SmartSearch.useCallback[filterLocally]"]);
        }
    }["SmartSearch.useCallback[filterLocally]"], []);
    // ========================================
    // FETCH FROM BACKEND (only for new prefix)
    // ========================================
    const fetchSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SmartSearch.useCallback[fetchSuggestions]": async (searchQuery)=>{
            const prefix = getPrefix(searchQuery);
            if (prefixCache.current[prefix]) {
                fullResults.current = prefixCache.current[prefix];
                currentPrefix.current = prefix;
                const filtered = filterLocally(searchQuery);
                setSuggestions(filtered);
                setIsOpen(filtered.length > 0);
                return;
            }
            if (abortRef.current) abortRef.current.abort();
            abortRef.current = new AbortController();
            setIsLoading(true);
            try {
                const res = await fetch(`/api/suggestions?q=${encodeURIComponent(searchQuery)}`, {
                    signal: abortRef.current.signal
                });
                const data = await res.json();
                const results = data.results || [];
                prefixCache.current[prefix] = results;
                fullResults.current = results;
                currentPrefix.current = prefix;
                const filtered = filterLocally(searchQuery);
                setSuggestions(filtered);
                setIsOpen(filtered.length > 0);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setSuggestions([]);
                }
            } finally{
                setIsLoading(false);
            }
        }
    }["SmartSearch.useCallback[fetchSuggestions]"], [
        filterLocally
    ]);
    // ========================================
    // SMART INPUT HANDLER
    // ========================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmartSearch.useEffect": ()=>{
            if (debounceRef.current) clearTimeout(debounceRef.current);
            if (query.length < 3) {
                setSuggestions([]);
                setIsOpen(false);
                return;
            }
            const prefix = getPrefix(query);
            if (prefix === currentPrefix.current && fullResults.current.length > 0) {
                const filtered = filterLocally(query);
                setSuggestions(filtered);
                setIsOpen(filtered.length > 0);
                return;
            }
            if (prefixCache.current[prefix]) {
                fullResults.current = prefixCache.current[prefix];
                currentPrefix.current = prefix;
                const filtered = filterLocally(query);
                setSuggestions(filtered);
                setIsOpen(filtered.length > 0);
                return;
            }
            debounceRef.current = setTimeout({
                "SmartSearch.useEffect": ()=>{
                    fetchSuggestions(query);
                }
            }["SmartSearch.useEffect"], 400);
            return ({
                "SmartSearch.useEffect": ()=>{
                    if (debounceRef.current) clearTimeout(debounceRef.current);
                }
            })["SmartSearch.useEffect"];
        }
    }["SmartSearch.useEffect"], [
        query,
        fetchSuggestions,
        filterLocally
    ]);
    // ========================================
    // CLICK OUTSIDE TO CLOSE
    // ========================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmartSearch.useEffect": ()=>{
            const handleClickOutside = {
                "SmartSearch.useEffect.handleClickOutside": (e)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(e.target) && inputRef.current && !inputRef.current.contains(e.target)) {
                        setIsOpen(false);
                    }
                }
            }["SmartSearch.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "SmartSearch.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["SmartSearch.useEffect"];
        }
    }["SmartSearch.useEffect"], []);
    // ========================================
    // KEYBOARD NAVIGATION
    // ========================================
    const handleKeyDown = (e)=>{
        if (!isOpen || suggestions.length === 0) {
            if (e.key === 'Enter' && query.trim()) handleManualSubmit();
            return;
        }
        switch(e.key){
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex((prev)=>prev < suggestions.length - 1 ? prev + 1 : prev);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex((prev)=>prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0) handleSelectCity(suggestions[selectedIndex]);
                else if (query.trim()) handleManualSubmit();
                break;
            case 'Escape':
                setIsOpen(false);
                setSelectedIndex(-1);
                break;
        }
    };
    const handleSelectCity = (suggestion)=>{
        setQuery(suggestion.city);
        setIsOpen(false);
        setSelectedIndex(-1);
        setSuggestions([]);
        onSubmit(suggestion.city, suggestion.country);
    };
    const handleManualSubmit = ()=>{
        if (query.trim()) {
            setIsOpen(false);
            onSubmit(query.trim(), '');
        }
    };
    const handleInputChange = (e)=>{
        setQuery(e.target.value);
        setSelectedIndex(-1);
    };
    const highlightMatch = (text, searchQuery)=>{
        if (!searchQuery.trim() || !text) return text;
        const escaped = searchQuery.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escaped})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i)=>regex.test(part) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-emerald-400 font-semibold",
                children: part
            }, i, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                lineNumber: 195,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : part);
    };
    const popularCities = [
        {
            city: 'Mecca',
            country: 'Saudi Arabia'
        },
        {
            city: 'Casablanca',
            country: 'Morocco'
        },
        {
            city: 'Cairo',
            country: 'Egypt'
        },
        {
            city: 'Istanbul',
            country: 'Turkey'
        },
        {
            city: 'Dubai',
            country: 'United Arab Emirates'
        },
        {
            city: 'London',
            country: 'United Kingdom'
        }
    ];
    // ========================================
    // COLLAPSED VIEW (city already selected)
    // ========================================
    if (hasCity) {
        return null; // Header handles display when city is selected
    }
    // ========================================
    // EXPANDED HERO (no city yet / first visit)
    // ========================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-16 pb-10 px-4 relative z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.8
            },
            className: "text-center max-w-xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.5,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        duration: 0.6,
                        type: 'spring'
                    },
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-7xl",
                        children: "🌙"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                        lineNumber: 234,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                    lineNumber: 228,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 bg-clip-text text-transparent",
                    children: "Ramadan Companion"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                    lineNumber: 237,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-lg md:text-xl mb-10",
                    children: "Your spiritual guide for the blessed month"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                    lineNumber: 241,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.3,
                                duration: 0.5
                            },
                            className: "glass-card-elevated p-2 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-5 h-5 text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                        lineNumber: 254,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                    lineNumber: 253,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: inputRef,
                                    type: "text",
                                    value: query,
                                    onChange: handleInputChange,
                                    onFocus: ()=>suggestions.length > 0 && setIsOpen(true),
                                    onKeyDown: handleKeyDown,
                                    placeholder: "Search for your city...",
                                    className: "flex-1 bg-transparent border-none outline-none text-lg text-white placeholder-gray-500 py-3",
                                    autoComplete: "off"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                    lineNumber: 256,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-5 h-5 text-emerald-400 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                    lineNumber: 267,
                                    columnNumber: 39
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleManualSubmit,
                                    className: "btn-primary flex items-center gap-2 m-1 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                            lineNumber: 273,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Search"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                            lineNumber: 274,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                    lineNumber: 268,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                            lineNumber: 247,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isOpen && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                ref: dropdownRef,
                                initial: {
                                    opacity: 0,
                                    y: -10,
                                    scale: 0.98
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10,
                                    scale: 0.98
                                },
                                transition: {
                                    duration: 0.2
                                },
                                className: "absolute top-full left-0 right-0 mt-3 rounded-2xl overflow-hidden z-50 max-h-80 overflow-y-auto",
                                style: {
                                    background: 'rgba(15, 23, 42, 0.95)',
                                    backdropFilter: 'blur(24px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)'
                                },
                                children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleSelectCity(suggestion),
                                        className: `flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-all duration-150 border-b border-white/5 last:border-b-0 ${index === selectedIndex ? 'bg-emerald-500/20 text-white' : 'hover:bg-white/5 text-gray-300'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: `w-4 h-4 flex-shrink-0 ${index === selectedIndex ? 'text-emerald-400' : 'text-gray-500'}`
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                                lineNumber: 304,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium truncate",
                                                        children: highlightMatch(suggestion.city, query)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                                        lineNumber: 307,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 truncate",
                                                        children: suggestion.country
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                                        lineNumber: 310,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                                lineNumber: 306,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            index === selectedIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 flex-shrink-0",
                                                children: "Enter ↵"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                                lineNumber: 315,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, `${suggestion.city}-${suggestion.country}-${index}`, true, {
                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                        lineNumber: 296,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                lineNumber: 281,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                            lineNumber: 279,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                    lineNumber: 246,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm mt-6",
                    children: "Type at least 3 characters · Use ↑↓ to navigate · Enter to select"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                    lineNumber: 324,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.5,
                        duration: 0.6
                    },
                    className: "mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm mb-4",
                            children: "Popular cities"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                            lineNumber: 335,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-3",
                            children: popularCities.map((cityData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.6 + index * 0.05
                                    },
                                    whileHover: {
                                        y: -3,
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    onClick: ()=>{
                                        setQuery(cityData.city);
                                        onSubmit(cityData.city, cityData.country);
                                    },
                                    className: "group relative px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 transition-all duration-300 border border-white/10 hover:border-emerald-500/50 hover:text-white",
                                    style: {
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(8px)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                            style: {
                                                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(13, 148, 136, 0.1) 100%)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                            lineNumber: 355,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-3.5 h-3.5 text-gray-500 group-hover:text-emerald-400 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                                    lineNumber: 362,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                cityData.city
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                            lineNumber: 361,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, cityData.city, true, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                                    lineNumber: 338,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                            lineNumber: 336,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                    lineNumber: 329,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 0.5
                    },
                    transition: {
                        delay: 1.2,
                        duration: 0.6
                    },
                    className: "mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-xs",
                        children: "↓ Scroll down for prayer times ↓"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                        lineNumber: 377,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
                    lineNumber: 371,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
            lineNumber: 221,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx",
        lineNumber: 220,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SmartSearch, "cgmjn2Ax+iC4l5AI0onMLKnfxjk=");
_c = SmartSearch;
const __TURBOPACK__default__export__ = SmartSearch;
var _c;
__turbopack_context__.k.register(_c, "SmartSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/FastingProgressBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const FastingProgressBar = ({ prayerTimes })=>{
    _s();
    const progressData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FastingProgressBar.useMemo[progressData]": ()=>{
            if (!prayerTimes) return null;
            const now = new Date();
            // Parse times
            const [fajrH, fajrM] = prayerTimes.Fajr.split(':').map(Number);
            const [maghribH, maghribM] = prayerTimes.Maghrib.split(':').map(Number);
            const fajr = new Date();
            fajr.setHours(fajrH, fajrM, 0, 0);
            const maghrib = new Date();
            maghrib.setHours(maghribH, maghribM, 0, 0);
            // Check if currently fasting
            const isFasting = now >= fajr && now < maghrib;
            if (!isFasting) {
                return {
                    progress: 0,
                    isFasting: false
                };
            }
            // Calculate progress
            const totalFastMs = maghrib - fajr;
            const elapsedMs = now - fajr;
            const progress = Math.min(100, Math.max(0, elapsedMs / totalFastMs * 100));
            return {
                progress,
                isFasting: true
            };
        }
    }["FastingProgressBar.useMemo[progressData]"], [
        prayerTimes
    ]);
    if (!progressData || !progressData.isFasting) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: -10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: 0.2
        },
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-500 uppercase tracking-wider",
                        children: "Fasting Progress"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/FastingProgressBar.jsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-emerald-400 font-medium",
                        children: [
                            Math.round(progressData.progress),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/FastingProgressBar.jsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/FastingProgressBar.jsx",
                lineNumber: 46,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-bar-track h-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: `${progressData.progress}%`
                    },
                    transition: {
                        duration: 1.5,
                        ease: 'easeOut'
                    },
                    className: "progress-bar-fill h-full"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/FastingProgressBar.jsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/FastingProgressBar.jsx",
                lineNumber: 52,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/FastingProgressBar.jsx",
        lineNumber: 40,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FastingProgressBar, "HBeIsleB43cdcDvMNSeFLlMaqUI=");
_c = FastingProgressBar;
const __TURBOPACK__default__export__ = FastingProgressBar;
var _c;
__turbopack_context__.k.register(_c, "FastingProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/Skeleton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Skeleton = ({ className = '', variant = 'text' })=>{
    const variants = {
        text: 'h-4 w-full',
        title: 'h-8 w-3/4',
        circle: 'h-12 w-12 rounded-full',
        card: 'h-32 w-full',
        time: 'h-6 w-20'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `skeleton ${variants[variant]} ${className}`,
        "aria-label": "Loading..."
    }, void 0, false, {
        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/Skeleton.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Skeleton;
const __TURBOPACK__default__export__ = Skeleton;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sunset$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/sunset.js [app-client] (ecmascript) <export default as Sunset>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/Skeleton.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const CountdownTimer = ({ prayerTimes, loading })=>{
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountdownTimer.useEffect": ()=>{
            const timer = setInterval({
                "CountdownTimer.useEffect.timer": ()=>setNow(new Date())
            }["CountdownTimer.useEffect.timer"], 1000);
            return ({
                "CountdownTimer.useEffect": ()=>clearInterval(timer)
            })["CountdownTimer.useEffect"];
        }
    }["CountdownTimer.useEffect"], []);
    const parseTime = (timeStr, addDays = 0)=>{
        if (!timeStr) return null;
        const [hours, minutes] = timeStr.split(':').map(Number);
        const date = new Date();
        date.setDate(date.getDate() + addDays);
        date.setHours(hours, minutes, 0, 0);
        return date;
    };
    const countdownData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CountdownTimer.useMemo[countdownData]": ()=>{
            if (!prayerTimes) return null;
            const fajrToday = parseTime(prayerTimes.Fajr);
            const maghribToday = parseTime(prayerTimes.Maghrib);
            const fajrTomorrow = parseTime(prayerTimes.Fajr, 1);
            let mode, target, label, icon;
            if (now >= fajrToday && now < maghribToday) {
                mode = 'iftar';
                target = maghribToday;
                label = 'until Iftar';
                icon = 'sun';
            } else if (now >= maghribToday) {
                mode = 'suhoor';
                target = fajrTomorrow;
                label = 'until Suhoor';
                icon = 'moon';
            } else {
                mode = 'suhoor';
                target = fajrToday;
                label = 'until Suhoor';
                icon = 'moon';
            }
            const diff = target - now;
            const hours = Math.max(0, Math.floor(diff / (1000 * 60 * 60)));
            const minutes = Math.max(0, Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.max(0, Math.floor(diff % (1000 * 60) / 1000));
            const fastingDuration = (maghribToday - fajrToday) / (1000 * 60 * 60);
            const fastingHours = Math.floor(fastingDuration);
            const fastingMinutes = Math.round((fastingDuration - fastingHours) * 60);
            return {
                mode,
                label,
                icon,
                hours,
                minutes,
                seconds,
                fastingHours,
                fastingMinutes
            };
        }
    }["CountdownTimer.useMemo[countdownData]"], [
        now,
        prayerTimes
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "h-32 w-96 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "h-6 w-48 mx-auto"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
            lineNumber: 65,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!countdownData) return null;
    const IconComponent = countdownData.icon === 'sun' ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"] : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"];
    const iconColor = countdownData.icon === 'sun' ? 'text-amber-400' : 'text-blue-300';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8
        },
        className: "text-center py-8 md:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.8,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    delay: 0.2
                },
                className: "flex items-center justify-center gap-2 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                        className: `w-6 h-6 ${iconColor}`
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    countdownData.icon === 'sun' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sunset$3e$__["Sunset"], {
                        className: "w-5 h-5 text-orange-400/70"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                lineNumber: 85,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-baseline gap-1 md:gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            opacity: 0.5
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "countdown-number text-8xl md:text-[10rem] lg:text-[12rem]",
                        children: String(countdownData.hours).padStart(2, '0')
                    }, `h-${countdownData.hours}`, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-5xl md:text-7xl text-white/20 font-thin",
                        children: ":"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            opacity: 0.5
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "countdown-number text-8xl md:text-[10rem] lg:text-[12rem]",
                        children: String(countdownData.minutes).padStart(2, '0')
                    }, `m-${countdownData.minutes}`, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-5xl md:text-7xl text-white/20 font-thin",
                        children: ":"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            opacity: 0.7,
                            scale: 0.98
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.15
                        },
                        className: "countdown-number text-8xl md:text-[10rem] lg:text-[12rem]",
                        children: String(countdownData.seconds).padStart(2, '0')
                    }, `s-${countdownData.seconds}`, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                lineNumber: 98,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg md:text-xl text-gray-400 font-light tracking-wide mb-8",
                children: countdownData.label
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                lineNumber: 136,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.5
                },
                className: "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Today's fast"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-emerald-400 font-medium",
                        children: [
                            countdownData.fastingHours,
                            "h ",
                            countdownData.fastingMinutes,
                            "m"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
                lineNumber: 141,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx",
        lineNumber: 78,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CountdownTimer, "48PvNg9rH6vjirXxOHZ+rs5Ur4g=");
_c = CountdownTimer;
const __TURBOPACK__default__export__ = CountdownTimer;
var _c;
__turbopack_context__.k.register(_c, "CountdownTimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/Skeleton.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const AsmaAlHusna = ({ name, loading, error, onRefresh })=>{
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card p-10 text-center h-full flex flex-col justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "h-6 w-36 mx-auto mb-8"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "h-24 w-64 mx-auto mb-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "h-5 w-44 mx-auto mb-3"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "h-4 w-52 mx-auto"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
            lineNumber: 10,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card p-10 text-center h-full flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-400 mb-6",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onRefresh,
                    className: "btn-primary text-sm px-6 py-3",
                    children: "Try Again"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
            lineNumber: 21,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!name) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: 0.15
        },
        className: "glass-card p-8 md:p-10 text-center h-full relative overflow-hidden flex flex-col justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                lineNumber: 40,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-between mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                className: "w-5 h-5 text-amber-400 fill-amber-400/50"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-medium text-gray-400",
                                children: "Name of the Day"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: onRefresh,
                        className: "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 border border-white/10 hover:border-emerald-500/40",
                        style: {
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(8px)'
                        },
                        title: "Learn another name",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "New Name"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                lineNumber: 45,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.5
                },
                className: "relative mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "arabic-font arabic-golden text-7xl md:text-8xl font-bold leading-relaxed",
                        children: name.name
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "absolute -top-3 -right-1 w-5 h-5 text-amber-400/30"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, name.name, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-amber-500/5 border border-amber-500/10 text-amber-400/80 text-sm mb-6 mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: [
                            "#",
                            name.number
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-amber-400/40",
                        children: "of 99"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                lineNumber: 81,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl md:text-2xl text-emerald-400/90 font-medium mb-4",
                children: name.transliteration
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                lineNumber: 87,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-lg font-light italic",
                children: [
                    '"',
                    name.meaning,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
                lineNumber: 92,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx",
        lineNumber: 33,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AsmaAlHusna;
const __TURBOPACK__default__export__ = AsmaAlHusna;
var _c;
__turbopack_context__.k.register(_c, "AsmaAlHusna");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunrise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sunrise$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/sunrise.js [app-client] (ecmascript) <export default as Sunrise>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudSun$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/cloud-sun.js [app-client] (ecmascript) <export default as CloudSun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sunset$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/sunset.js [app-client] (ecmascript) <export default as Sunset>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/Skeleton.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const PrayerTimesGrid = ({ prayerTimes, loading })=>{
    _s();
    const [currentPrayerIndex, setCurrentPrayerIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const prayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PrayerTimesGrid.useMemo[prayers]": ()=>{
            if (!prayerTimes) return [];
            return [
                {
                    name: 'Fajr',
                    time: prayerTimes.Fajr,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
                    color: 'text-blue-400'
                },
                {
                    name: 'Sunrise',
                    time: prayerTimes.Sunrise,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunrise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sunrise$3e$__["Sunrise"],
                    color: 'text-orange-300'
                },
                {
                    name: 'Dhuhr',
                    time: prayerTimes.Dhuhr,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
                    color: 'text-yellow-400'
                },
                {
                    name: 'Asr',
                    time: prayerTimes.Asr,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudSun$3e$__["CloudSun"],
                    color: 'text-amber-400'
                },
                {
                    name: 'Maghrib',
                    time: prayerTimes.Maghrib,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sunset$3e$__["Sunset"],
                    color: 'text-orange-500'
                },
                {
                    name: 'Isha',
                    time: prayerTimes.Isha,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
                    color: 'text-indigo-400'
                }
            ];
        }
    }["PrayerTimesGrid.useMemo[prayers]"], [
        prayerTimes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrayerTimesGrid.useEffect": ()=>{
            if (!prayerTimes) return;
            const updateCurrentPrayer = {
                "PrayerTimesGrid.useEffect.updateCurrentPrayer": ()=>{
                    const now = new Date();
                    const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();
                    const prayerList = [
                        prayerTimes.Fajr,
                        prayerTimes.Sunrise,
                        prayerTimes.Dhuhr,
                        prayerTimes.Asr,
                        prayerTimes.Maghrib,
                        prayerTimes.Isha
                    ];
                    for(let i = prayerList.length - 1; i >= 0; i--){
                        const [hours, minutes] = prayerList[i].split(':').map(Number);
                        const prayerMinutes = hours * 60 + minutes;
                        if (currentTimeMinutes >= prayerMinutes) {
                            setCurrentPrayerIndex(i === prayerList.length - 1 ? 0 : i + 1);
                            return;
                        }
                    }
                    setCurrentPrayerIndex(0);
                }
            }["PrayerTimesGrid.useEffect.updateCurrentPrayer"];
            updateCurrentPrayer();
            const interval = setInterval(updateCurrentPrayer, 60000);
            return ({
                "PrayerTimesGrid.useEffect": ()=>clearInterval(interval)
            })["PrayerTimesGrid.useEffect"];
        }
    }["PrayerTimesGrid.useEffect"], [
        prayerTimes
    ]);
    const formatTime = (time24)=>{
        if (!time24) return '';
        const [hours, minutes] = time24.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12;
        return `${hours12}:${String(minutes).padStart(2, '0')} ${period}`;
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "h-6 w-32 mb-8"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-6",
                    children: [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-10 w-10 mx-auto mb-4 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-4 w-16 mx-auto mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                                    lineNumber: 71,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-6 w-20 mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                                    lineNumber: 72,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                            lineNumber: 69,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
            lineNumber: 65,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!prayerTimes) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: 0.1
        },
        className: "glass-card p-8 md:p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-gray-200 mb-1",
                                children: "Prayer Times"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                                lineNumber: 92,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            prayerTimes.hijri && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-emerald-400/70",
                                children: [
                                    prayerTimes.hijri.day,
                                    " ",
                                    prayerTimes.hijri.month.en,
                                    " ",
                                    prayerTimes.hijri.year,
                                    " AH"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                                lineNumber: 94,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    prayerTimes.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: prayerTimes.date
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                        lineNumber: 100,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                lineNumber: 90,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
                children: prayers.map((prayer, index)=>{
                    const IconComponent = prayer.icon;
                    const isActive = index === currentPrayerIndex;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.4,
                            delay: index * 0.05
                        },
                        className: `rounded-2xl p-6 md:p-8 text-center transition-all duration-500 ${isActive ? 'prayer-active' : 'prayer-card'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                className: `w-10 h-10 mx-auto mb-4 transition-colors ${isActive ? 'text-amber-400' : prayer.color}`
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                                lineNumber: 119,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `font-medium text-sm mb-2 tracking-wide uppercase transition-colors ${isActive ? 'text-amber-300' : 'text-gray-500'}`,
                                children: prayer.name
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                                lineNumber: 123,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-2xl font-light transition-colors ${isActive ? 'text-white' : 'text-gray-300'}`,
                                children: formatTime(prayer.time)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                                lineNumber: 127,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    opacity: 0,
                                    y: 5
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "inline-block mt-4 text-xs px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 font-medium",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                                lineNumber: 132,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, prayer.name, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                        lineNumber: 111,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx",
        lineNumber: 83,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PrayerTimesGrid, "NPP/b2eicP+FBf7PBgnThKLGDfA=");
_c = PrayerTimesGrid;
const __TURBOPACK__default__export__ = PrayerTimesGrid;
var _c;
__turbopack_context__.k.register(_c, "PrayerTimesGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const adkarList = [
    {
        arabic: 'اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',
        transliteration: 'Allahumma inni laka sumtu, wa bika aamantu, wa ala rizqika aftartu',
        translation: 'O Allah, I fasted for You, believed in You, and I break my fast with Your provision.',
        context: 'Dua for Breaking Fast'
    },
    {
        arabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
        transliteration: "Dhahaba al-zama' wa abtallatil-'urooq wa thabata al-ajru in sha Allah",
        translation: 'The thirst is gone, the veins are moistened and the reward is established, if Allah wills.',
        context: 'After Breaking Fast'
    },
    {
        arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ',
        transliteration: "Rabbana taqabbal minna innaka anta as-Sami'ul 'Aleem",
        translation: 'Our Lord, accept from us. Indeed, You are the All-Hearing, the All-Knowing.',
        context: 'Dua for Acceptance'
    },
    {
        arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
        transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni",
        translation: 'O Allah, You are Forgiving and love forgiveness, so forgive me.',
        context: 'Laylatul Qadr Dua'
    },
    {
        arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِي رَجَبٍ وَشَعْبَانَ وَبَلِّغْنَا رَمَضَانَ',
        transliteration: "Allahumma barik lana fi Rajab wa Sha'ban, wa ballighna Ramadan",
        translation: 'O Allah, bless us in Rajab and Sha\'ban, and let us reach Ramadan.',
        context: 'Welcoming Ramadan'
    }
];
const AdkarSection = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdkarSection.useEffect": ()=>{
            const timer = setInterval({
                "AdkarSection.useEffect.timer": ()=>{
                    setDirection(1);
                    setCurrentIndex({
                        "AdkarSection.useEffect.timer": (prev)=>(prev + 1) % adkarList.length
                    }["AdkarSection.useEffect.timer"]);
                }
            }["AdkarSection.useEffect.timer"], 15000);
            return ({
                "AdkarSection.useEffect": ()=>clearInterval(timer)
            })["AdkarSection.useEffect"];
        }
    }["AdkarSection.useEffect"], []);
    const handleNext = ()=>{
        setDirection(1);
        setCurrentIndex((prev)=>(prev + 1) % adkarList.length);
    };
    const handlePrev = ()=>{
        setDirection(-1);
        setCurrentIndex((prev)=>(prev - 1 + adkarList.length) % adkarList.length);
    };
    const currentDhikr = adkarList[currentIndex];
    const variants = {
        enter: (direction)=>({
                x: direction > 0 ? 60 : -60,
                opacity: 0
            }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction)=>({
                x: direction < 0 ? 60 : -60,
                opacity: 0
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: 0.2
        },
        className: "glass-card p-8 md:p-10 h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-5 h-5 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-medium text-gray-400",
                                children: "Ramadan Adkar"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePrev,
                                className: "p-2.5 rounded-full bg-white/3 hover:bg-white/8 transition-colors border border-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-4 h-4 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500 w-10 text-center",
                                children: [
                                    currentIndex + 1,
                                    "/",
                                    adkarList.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNext,
                                className: "p-2.5 rounded-full bg-white/3 hover:bg-white/8 transition-colors border border-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-4 h-4 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                lineNumber: 78,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col justify-center overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    custom: direction,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        custom: direction,
                        variants: variants,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        transition: {
                            duration: 0.35,
                            ease: 'easeInOut'
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400/80 text-sm mb-8",
                                children: currentDhikr.context
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "arabic-font adkar-arabic text-gray-100/90 mb-6 leading-loose",
                                dir: "rtl",
                                children: currentDhikr.arabic
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                lineNumber: 121,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-400/70 text-center text-sm md:text-base mb-4 font-medium tracking-wide",
                                children: currentDhikr.transliteration
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                lineNumber: 129,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "adkar-translation text-base font-light max-w-md mx-auto",
                                children: [
                                    '"',
                                    currentDhikr.translation,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                                lineNumber: 134,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, currentIndex, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                lineNumber: 103,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-2 mt-8",
                children: adkarList.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        },
                        className: `h-1 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-emerald-400/80 w-6' : 'bg-white/10 w-1.5 hover:bg-white/20'}`
                    }, index, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
                lineNumber: 142,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx",
        lineNumber: 71,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdkarSection, "B3Xaw+zPh75fsN8tVB/ufahnQKU=");
_c = AdkarSection;
const __TURBOPACK__default__export__ = AdkarSection;
var _c;
__turbopack_context__.k.register(_c, "AdkarSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/Skeleton.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DailyAyah = ()=>{
    _s();
    const [ayah, setAyah] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showTranslation, setShowTranslation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch daily ayah
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DailyAyah.useEffect": ()=>{
            const fetchAyah = {
                "DailyAyah.useEffect.fetchAyah": async ()=>{
                    try {
                        const res = await fetch('/api/daily-ayah');
                        const data = await res.json();
                        if (data.error) throw new Error(data.error);
                        setAyah(data.ayah);
                    } catch (err) {
                        setError(err.message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["DailyAyah.useEffect.fetchAyah"];
            fetchAyah();
        }
    }["DailyAyah.useEffect"], []);
    // Audio event handlers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DailyAyah.useEffect": ()=>{
            if (!audioRef.current) return;
            const audio = audioRef.current;
            const handleTimeUpdate = {
                "DailyAyah.useEffect.handleTimeUpdate": ()=>{
                    if (audio.duration) {
                        setProgress(audio.currentTime / audio.duration * 100);
                    }
                }
            }["DailyAyah.useEffect.handleTimeUpdate"];
            const handleEnded = {
                "DailyAyah.useEffect.handleEnded": ()=>{
                    setIsPlaying(false);
                    setProgress(0);
                }
            }["DailyAyah.useEffect.handleEnded"];
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleEnded);
            return ({
                "DailyAyah.useEffect": ()=>{
                    audio.removeEventListener('timeupdate', handleTimeUpdate);
                    audio.removeEventListener('ended', handleEnded);
                }
            })["DailyAyah.useEffect"];
        }
    }["DailyAyah.useEffect"], [
        ayah
    ]);
    const togglePlay = ()=>{
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const resetAudio = ()=>{
        if (!audioRef.current) return;
        audioRef.current.currentTime = 0;
        setProgress(0);
        setIsPlaying(false);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card p-8 md:p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "h-5 w-5 rounded"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "h-5 w-32"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "h-20 w-full mb-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$Skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "h-4 w-48 mx-auto"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
            lineNumber: 81,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card p-8 md:p-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "w-8 h-8 text-gray-500 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-400",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                    lineNumber: 96,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
            lineNumber: 94,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!ayah) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: 0.2
        },
        className: "glass-card p-8 md:p-10 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                lineNumber: 111,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-between mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-5 h-5 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-medium text-gray-400",
                                children: "Verse of the Day"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>setShowTranslation(!showTranslation),
                        className: `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${showTranslation ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'}`,
                        style: {
                            backdropFilter: 'blur(8px)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                                lineNumber: 133,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: showTranslation ? 'Arabic' : 'English'
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                                lineNumber: 134,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                lineNumber: 116,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.3
                },
                className: "relative mb-8",
                children: showTranslation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg md:text-xl text-gray-300 leading-relaxed text-center italic font-light",
                    children: [
                        '"',
                        ayah.translation,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                    lineNumber: 147,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "arabic-font text-3xl md:text-4xl lg:text-5xl text-center leading-loose text-white/90 arabic-golden",
                    children: ayah.arabic
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                    lineNumber: 151,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, showTranslation ? 'translation' : 'arabic', false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                lineNumber: 139,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                        ref: audioRef,
                        src: ayah.audioUrl,
                        preload: "none"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                        lineNumber: 159,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: togglePlay,
                        className: "flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
                        style: {
                            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(13, 148, 136, 0.2) 100%)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            boxShadow: isPlaying ? '0 0 30px rgba(16, 185, 129, 0.3)' : 'none'
                        },
                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                            className: "w-6 h-6 text-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                            lineNumber: 174,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            className: "w-6 h-6 text-emerald-400 ml-1"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                            lineNumber: 176,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                        lineNumber: 162,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    progress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: resetAudio,
                        className: "p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                            className: "w-4 h-4 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                            lineNumber: 190,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                        lineNumber: 182,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                lineNumber: 158,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            (isPlaying || progress > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "h-1 bg-white/10 rounded-full overflow-hidden mb-8 max-w-md mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full",
                    style: {
                        width: `${progress}%`
                    },
                    transition: {
                        duration: 0.1
                    }
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                    lineNumber: 202,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                lineNumber: 197,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-400/80",
                                children: ayah.surah.englishName
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                                lineNumber: 213,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mx-2",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                                lineNumber: 214,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    ayah.surah.number,
                                    ":",
                                    ayah.numberInSurah
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                                lineNumber: 215,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                        lineNumber: 212,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600 mt-1",
                        children: ayah.surah.englishNameTranslation
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                        lineNumber: 217,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
                lineNumber: 211,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx",
        lineNumber: 104,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DailyAyah, "WEdZ8zjp0TsnjCec9eFsCUVVVeo=");
_c = DailyAyah;
const __TURBOPACK__default__export__ = DailyAyah;
var _c;
__turbopack_context__.k.register(_c, "DailyAyah");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/hooks/usePrayerTimes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>usePrayerTimes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
// ========================================
// CONSTANTS
// ========================================
const DEBOUNCE_MS = 300;
const SKELETON_DELAY_MS = 150;
const CACHE_KEY_PREFIX = 'rc-prayer-';
// ========================================
// HELPERS
// ========================================
const getTodayIndex = ()=>new Date().getDate() - 1;
const filterTodayTimings = (monthData)=>{
    if (!Array.isArray(monthData) || !monthData.length) return null;
    const dayData = monthData[getTodayIndex()];
    if (!dayData?.timings) return null;
    return {
        ...cleanTimings(dayData.timings),
        date: dayData.date?.readable,
        hijri: dayData.date?.hijri
    };
};
const cleanTimings = (timings)=>{
    const cleaned = {};
    for(const key in timings){
        cleaned[key] = typeof timings[key] === 'string' ? timings[key].replace(/\s*\([^)]*\)$/, '') : timings[key];
    }
    return cleaned;
};
const getCacheKey = (city, country)=>`${CACHE_KEY_PREFIX}${city.toLowerCase()}-${(country || '').toLowerCase()}-${new Date().getMonth() + 1}`;
// ========================================
// LOCAL STORAGE CACHE
// ========================================
const getLocalCache = (city, country)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const cached = localStorage.getItem(getCacheKey(city, country));
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < 30 * 60 * 1000) return data;
        }
    } catch  {}
    return null;
};
const setLocalCache = (city, country, data)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(getCacheKey(city, country), JSON.stringify({
            data,
            timestamp: Date.now()
        }));
    } catch  {}
};
function usePrayerTimes(city, country = '') {
    _s();
    const [prayerTimes, setPrayerTimes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [monthlyData, setMonthlyData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSkeleton, setShowSkeleton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const skeletonTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const hasCachedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Check for cached data on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrayerTimes.useEffect": ()=>{
            if (city) {
                const cached = getLocalCache(city, country);
                if (cached) {
                    const todayTimings = filterTodayTimings(cached);
                    if (todayTimings) {
                        setMonthlyData(cached);
                        setPrayerTimes(todayTimings);
                        hasCachedData.current = true;
                    }
                }
            }
        }
    }["usePrayerTimes.useEffect"], []); // Only on mount
    const fetchPrayerTimes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePrayerTimes.useCallback[fetchPrayerTimes]": async (cityName, countryName)=>{
            if (!cityName) {
                setPrayerTimes(null);
                setMonthlyData(null);
                setError(null);
                setLoading(false);
                setShowSkeleton(false);
                return;
            }
            // Check localStorage cache first
            const localData = getLocalCache(cityName, countryName);
            if (localData) {
                const todayTimings = filterTodayTimings(localData);
                if (todayTimings) {
                    setMonthlyData(localData);
                    setPrayerTimes(todayTimings);
                    setError(null);
                    hasCachedData.current = true;
                }
            }
            if (abortRef.current) abortRef.current.abort();
            abortRef.current = new AbortController();
            setLoading(true);
            setError(null);
            // Skeleton delay - only show if we don't have cached data
            if (skeletonTimerRef.current) clearTimeout(skeletonTimerRef.current);
            if (!hasCachedData.current) {
                skeletonTimerRef.current = setTimeout({
                    "usePrayerTimes.useCallback[fetchPrayerTimes]": ()=>setShowSkeleton(true)
                }["usePrayerTimes.useCallback[fetchPrayerTimes]"], SKELETON_DELAY_MS);
            }
            try {
                const params = new URLSearchParams({
                    city: cityName,
                    ...countryName && {
                        country: countryName
                    },
                    method: '2'
                });
                const res = await fetch(`/api/prayer-times?${params}`, {
                    signal: abortRef.current.signal
                });
                if (skeletonTimerRef.current) {
                    clearTimeout(skeletonTimerRef.current);
                    skeletonTimerRef.current = null;
                }
                if (!res.ok) {
                    const errData = await res.json().catch({
                        "usePrayerTimes.useCallback[fetchPrayerTimes]": ()=>({})
                    }["usePrayerTimes.useCallback[fetchPrayerTimes]"]);
                    throw new Error(errData.error || `HTTP ${res.status}`);
                }
                const result = await res.json();
                if (!result.data) throw new Error('No data received');
                const todayTimings = filterTodayTimings(result.data);
                if (!todayTimings) throw new Error('No prayer times for today');
                setMonthlyData(result.data);
                setPrayerTimes(todayTimings);
                setLocalCache(cityName, countryName, result.data);
                hasCachedData.current = true;
            } catch (err) {
                if (err.name === 'AbortError') return;
                setError(err.message);
            } finally{
                setLoading(false);
                setShowSkeleton(false);
                if (skeletonTimerRef.current) {
                    clearTimeout(skeletonTimerRef.current);
                    skeletonTimerRef.current = null;
                }
            }
        }
    }["usePrayerTimes.useCallback[fetchPrayerTimes]"], []); // No dependencies - stable function
    // Fetch on city/country change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrayerTimes.useEffect": ()=>{
            if (debounceRef.current) clearTimeout(debounceRef.current);
            // No debounce on initial mount
            if (isInitialMount.current) {
                isInitialMount.current = false;
                if (city) fetchPrayerTimes(city, country);
                return;
            }
            // Debounce subsequent changes
            if (city) {
                debounceRef.current = setTimeout({
                    "usePrayerTimes.useEffect": ()=>{
                        fetchPrayerTimes(city, country);
                    }
                }["usePrayerTimes.useEffect"], DEBOUNCE_MS);
            } else {
                fetchPrayerTimes('', '');
            }
            return ({
                "usePrayerTimes.useEffect": ()=>{
                    if (debounceRef.current) clearTimeout(debounceRef.current);
                    if (abortRef.current) abortRef.current.abort();
                    if (skeletonTimerRef.current) clearTimeout(skeletonTimerRef.current);
                }
            })["usePrayerTimes.useEffect"];
        }
    }["usePrayerTimes.useEffect"], [
        city,
        country,
        fetchPrayerTimes
    ]);
    // Midnight update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrayerTimes.useEffect": ()=>{
            if (!monthlyData) return;
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 5, 0);
            const timeout = setTimeout({
                "usePrayerTimes.useEffect.timeout": ()=>{
                    const todayTimings = filterTodayTimings(monthlyData);
                    if (todayTimings) setPrayerTimes(todayTimings);
                }
            }["usePrayerTimes.useEffect.timeout"], tomorrow - now);
            return ({
                "usePrayerTimes.useEffect": ()=>clearTimeout(timeout)
            })["usePrayerTimes.useEffect"];
        }
    }["usePrayerTimes.useEffect"], [
        monthlyData
    ]);
    return {
        prayerTimes,
        monthlyData,
        loading: showSkeleton,
        error,
        refetch: ()=>fetchPrayerTimes(city, country)
    };
}
_s(usePrayerTimes, "dxvaxuVcgLZ4CfmCfphCt/UvMls=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/hooks/useAsmaAlHusna.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useAsmaAlHusna",
    ()=>useAsmaAlHusna
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
// Cache for session - instant on refresh button
let cachedNames = null;
const useAsmaAlHusna = ()=>{
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAsmaAlHusna.useCallback[fetchName]": async (forceNew = false)=>{
            // Use cached if available and not forcing new
            if (!forceNew && cachedNames) {
                const randomIndex = Math.floor(Math.random() * cachedNames.length);
                const nameData = cachedNames[randomIndex];
                setName({
                    number: nameData.number,
                    name: nameData.name,
                    transliteration: nameData.transliteration,
                    meaning: nameData.en.meaning
                });
                return;
            }
            setLoading(true);
            setError(null);
            try {
                // Fetch ALL names once (faster than individual requests)
                const res = await fetch('https://api.aladhan.com/v1/asmaAlHusna');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                if (data.code === 200 && data.data?.length > 0) {
                    cachedNames = data.data;
                    const randomIndex = Math.floor(Math.random() * cachedNames.length);
                    const nameData = cachedNames[randomIndex];
                    setName({
                        number: nameData.number,
                        name: nameData.name,
                        transliteration: nameData.transliteration,
                        meaning: nameData.en.meaning
                    });
                } else {
                    throw new Error('Invalid response');
                }
            } catch (err) {
                setError('Failed to load Name of Allah');
            } finally{
                setLoading(false);
            }
        }
    }["useAsmaAlHusna.useCallback[fetchName]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAsmaAlHusna.useEffect": ()=>{
            fetchName();
        }
    }["useAsmaAlHusna.useEffect"], [
        fetchName
    ]);
    const refresh = ()=>{
        // Just pick new random from cache (instant!)
        if (cachedNames) {
            const randomIndex = Math.floor(Math.random() * cachedNames.length);
            const nameData = cachedNames[randomIndex];
            setName({
                number: nameData.number,
                name: nameData.name,
                transliteration: nameData.transliteration,
                meaning: nameData.en.meaning
            });
        } else {
            fetchName(true);
        }
    };
    return {
        name,
        loading,
        error,
        refresh
    };
};
_s(useAsmaAlHusna, "sWcr/qfrGVNKPT6ffCHZs5TTY/A=");
const __TURBOPACK__default__export__ = useAsmaAlHusna;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$SmartSearch$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/SmartSearch.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$FastingProgressBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/FastingProgressBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$CountdownTimer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/CountdownTimer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$AsmaAlHusna$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AsmaAlHusna.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$PrayerTimesGrid$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/PrayerTimesGrid.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$AdkarSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/AdkarSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$DailyAyah$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/components/DailyAyah.jsx [app-client] (ecmascript)");
// Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$hooks$2f$usePrayerTimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/hooks/usePrayerTimes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$hooks$2f$useAsmaAlHusna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/app/hooks/useAsmaAlHusna.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
// Default city for first-time visitors
const DEFAULT_CITY = 'Mecca';
const DEFAULT_COUNTRY = 'Saudi Arabia';
function Home() {
    _s();
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasUserChosen, setHasUserChosen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Inline search state (for header search bar)
    const [headerQuery, setHeaderQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [headerSuggestions, setHeaderSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [headerOpen, setHeaderOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [headerLoading, setHeaderLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [headerSelectedIndex, setHeaderSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const headerInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerDebounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerAbortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerPrefixCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const headerFullResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const headerCurrentPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    // Load saved city from localStorage on client
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setIsClient(true);
            const savedCity = localStorage.getItem('ramadan-companion-city') || '';
            const savedCountry = localStorage.getItem('ramadan-companion-country') || '';
            if (savedCity) {
                setCity(savedCity);
                setCountry(savedCountry);
                setHasUserChosen(true);
            } else {
                // First visit: load default city
                setCity(DEFAULT_CITY);
                setCountry(DEFAULT_COUNTRY);
                setHasUserChosen(false);
            }
        }
    }["Home.useEffect"], []);
    const { prayerTimes, loading: prayerLoading, error: prayerError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$hooks$2f$usePrayerTimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(city, country);
    const { name: asmaName, loading: asmaLoading, error: asmaError, refresh: refreshAsma } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$hooks$2f$useAsmaAlHusna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // Save city to localStorage when user explicitly chooses
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (city && hasUserChosen) {
                localStorage.setItem('ramadan-companion-city', city);
                localStorage.setItem('ramadan-companion-country', country);
            }
        }
    }["Home.useEffect"], [
        city,
        country,
        hasUserChosen
    ]);
    const handleCitySubmit = (selectedCity, selectedCountry = '')=>{
        setCity(selectedCity);
        setCountry(selectedCountry);
        setHasUserChosen(true);
        setHeaderQuery('');
        setHeaderOpen(false);
        setHeaderSuggestions([]);
    };
    // ========================================
    // HEADER INLINE SEARCH LOGIC
    // ========================================
    const getPrefix = (q)=>q?.toLowerCase().trim().substring(0, 3) || '';
    const filterLocally = (searchQuery)=>{
        if (!headerFullResults.current.length) return [];
        const lowerQuery = searchQuery.toLowerCase().trim();
        return headerFullResults.current.filter((item)=>item.city.toLowerCase().includes(lowerQuery) || item.country.toLowerCase().includes(lowerQuery) || item.formatted.toLowerCase().includes(lowerQuery));
    };
    const fetchHeaderSuggestions = async (searchQuery)=>{
        const prefix = getPrefix(searchQuery);
        if (headerPrefixCache.current[prefix]) {
            headerFullResults.current = headerPrefixCache.current[prefix];
            headerCurrentPrefix.current = prefix;
            const filtered = filterLocally(searchQuery);
            setHeaderSuggestions(filtered);
            setHeaderOpen(filtered.length > 0);
            return;
        }
        if (headerAbortRef.current) headerAbortRef.current.abort();
        headerAbortRef.current = new AbortController();
        setHeaderLoading(true);
        try {
            const res = await fetch(`/api/suggestions?q=${encodeURIComponent(searchQuery)}`, {
                signal: headerAbortRef.current.signal
            });
            const data = await res.json();
            const results = data.results || [];
            headerPrefixCache.current[prefix] = results;
            headerFullResults.current = results;
            headerCurrentPrefix.current = prefix;
            const filtered = filterLocally(searchQuery);
            setHeaderSuggestions(filtered);
            setHeaderOpen(filtered.length > 0);
        } catch (err) {
            if (err.name !== 'AbortError') setHeaderSuggestions([]);
        } finally{
            setHeaderLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (headerDebounceRef.current) clearTimeout(headerDebounceRef.current);
            if (headerQuery.length < 3) {
                setHeaderSuggestions([]);
                setHeaderOpen(false);
                return;
            }
            const prefix = getPrefix(headerQuery);
            if (prefix === headerCurrentPrefix.current && headerFullResults.current.length > 0) {
                const filtered = filterLocally(headerQuery);
                setHeaderSuggestions(filtered);
                setHeaderOpen(filtered.length > 0);
                return;
            }
            if (headerPrefixCache.current[prefix]) {
                headerFullResults.current = headerPrefixCache.current[prefix];
                headerCurrentPrefix.current = prefix;
                const filtered = filterLocally(headerQuery);
                setHeaderSuggestions(filtered);
                setHeaderOpen(filtered.length > 0);
                return;
            }
            headerDebounceRef.current = setTimeout({
                "Home.useEffect": ()=>{
                    fetchHeaderSuggestions(headerQuery);
                }
            }["Home.useEffect"], 400);
            return ({
                "Home.useEffect": ()=>{
                    if (headerDebounceRef.current) clearTimeout(headerDebounceRef.current);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        headerQuery
    ]);
    // Click outside to close header dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleClickOutside = {
                "Home.useEffect.handleClickOutside": (e)=>{
                    if (headerDropdownRef.current && !headerDropdownRef.current.contains(e.target) && headerInputRef.current && !headerInputRef.current.contains(e.target)) {
                        setHeaderOpen(false);
                    }
                }
            }["Home.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Home.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const handleHeaderKeyDown = (e)=>{
        if (!headerOpen || headerSuggestions.length === 0) {
            if (e.key === 'Enter' && headerQuery.trim()) {
                handleCitySubmit(headerQuery.trim(), '');
            }
            return;
        }
        switch(e.key){
            case 'ArrowDown':
                e.preventDefault();
                setHeaderSelectedIndex((prev)=>prev < headerSuggestions.length - 1 ? prev + 1 : prev);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHeaderSelectedIndex((prev)=>prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (headerSelectedIndex >= 0) {
                    const s = headerSuggestions[headerSelectedIndex];
                    handleCitySubmit(s.city, s.country);
                } else if (headerQuery.trim()) {
                    handleCitySubmit(headerQuery.trim(), '');
                }
                break;
            case 'Escape':
                setHeaderOpen(false);
                setHeaderSelectedIndex(-1);
                break;
        }
    };
    // Prevent hydration mismatch
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-mesh min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-xl",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                lineNumber: 221,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
            lineNumber: 220,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-mesh min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: !hasUserChosen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        height: 0,
                        marginBottom: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$SmartSearch$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onSubmit: handleCitySubmit,
                        savedCity: city,
                        hasCity: hasUserChosen
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                        lineNumber: 238,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                    lineNumber: 233,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                lineNumber: 231,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app-container py-10 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-4xl",
                                            children: "🌙"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                            lineNumber: 262,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent",
                                                    children: "Ramadan Companion"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                    lineNumber: 264,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 text-gray-500 text-sm mt-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                            lineNumber: 268,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                city,
                                                                country ? `, ${country}` : ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                            lineNumber: 269,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                    lineNumber: 267,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                            lineNumber: 263,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                    lineNumber: 261,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full sm:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 hover:border-emerald-500/30 transition-all duration-300",
                                            style: {
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                backdropFilter: 'blur(12px)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-4 h-4 text-emerald-400 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                    lineNumber: 283,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: headerInputRef,
                                                    type: "text",
                                                    value: headerQuery,
                                                    onChange: (e)=>{
                                                        setHeaderQuery(e.target.value);
                                                        setHeaderSelectedIndex(-1);
                                                    },
                                                    onKeyDown: handleHeaderKeyDown,
                                                    placeholder: "Change city…",
                                                    className: "bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-32 sm:w-40 focus:w-48 transition-all",
                                                    autoComplete: "off"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                    lineNumber: 284,
                                                    columnNumber: 33
                                                }, this),
                                                headerLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-4 h-4 text-emerald-400 animate-spin flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                    lineNumber: 298,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                            lineNumber: 276,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: headerOpen && headerSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                ref: headerDropdownRef,
                                                initial: {
                                                    opacity: 0,
                                                    y: -8,
                                                    scale: 0.98
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -8,
                                                    scale: 0.98
                                                },
                                                transition: {
                                                    duration: 0.15
                                                },
                                                className: "absolute top-full right-0 mt-2 w-72 rounded-2xl overflow-hidden z-50 max-h-60 overflow-y-auto",
                                                style: {
                                                    background: 'rgba(15, 23, 42, 0.95)',
                                                    backdropFilter: 'blur(24px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4)'
                                                },
                                                children: headerSuggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>handleCitySubmit(suggestion.city, suggestion.country),
                                                        className: `flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-150 border-b border-white/5 last:border-b-0 ${index === headerSelectedIndex ? 'bg-emerald-500/20 text-white' : 'hover:bg-white/5 text-gray-300'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: `w-3.5 h-3.5 flex-shrink-0 ${index === headerSelectedIndex ? 'text-emerald-400' : 'text-gray-500'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                                lineNumber: 328,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium truncate",
                                                                        children: suggestion.city
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                                        lineNumber: 331,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 truncate",
                                                                        children: suggestion.country
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                                        lineNumber: 332,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                                lineNumber: 330,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, `${suggestion.city}-${suggestion.country}-${index}`, true, {
                                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                        lineNumber: 320,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                                lineNumber: 305,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                            lineNumber: 303,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                    lineNumber: 275,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                            lineNumber: 259,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                        lineNumber: 253,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: [
                            prayerError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: -10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "glass-card p-5 flex items-center gap-4 border-red-500/15 bg-red-500/5 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-5 h-5 text-red-400 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                        lineNumber: 352,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-300 font-light",
                                        children: prayerError
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                        lineNumber: 353,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                lineNumber: 347,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$FastingProgressBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    prayerTimes: prayerTimes
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                    lineNumber: 359,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                lineNumber: 358,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$CountdownTimer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    prayerTimes: prayerTimes,
                                    loading: prayerLoading
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                    lineNumber: 364,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                lineNumber: 363,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 mb-12 relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$PrayerTimesGrid$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    prayerTimes: prayerTimes,
                                    loading: prayerLoading
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                    lineNumber: 369,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                lineNumber: 368,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$AsmaAlHusna$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: asmaName,
                                        loading: asmaLoading,
                                        error: asmaError,
                                        onRefresh: refreshAsma
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                        lineNumber: 374,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$AdkarSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                        lineNumber: 380,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                lineNumber: 373,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$components$2f$DailyAyah$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                    lineNumber: 385,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                lineNumber: 384,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                        lineNumber: 344,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-20 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 font-light",
                                children: "May Allah accept your fasting and prayers 🤲"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                lineNumber: 391,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-gray-600/60 text-sm",
                                children: "Ramadan Companion • Made with ❤️ for the Ummah"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                                lineNumber: 392,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                        lineNumber: 390,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
                lineNumber: 250,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - Akumenia/Bureau/ramlive/app/page.js",
        lineNumber: 227,
        columnNumber: 9
    }, this);
}
_s(Home, "9qtJtsPVSk+CX1OFOuE27IwTu/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$hooks$2f$usePrayerTimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$app$2f$hooks$2f$useAsmaAlHusna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive%20-%20Akumenia_Bureau_ramlive_app_a28d67c1._.js.map