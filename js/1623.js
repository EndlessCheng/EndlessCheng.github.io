// Copyrights C-EGG inc.
(function() {
    var aa = "\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split("")
      , ba = "\u9580\u524d\u6e05\u81ea\u6478\u548c;\u7acb\u76f4;\u4e00\u767c;\u69cd\u69d3;\u5dba\u4e0a\u958b\u82b1;\u6d77\u5e95\u6478\u6708;\u6cb3\u5e95\u6488\u9b5a;\u5e73\u548c;\u65b7\u4e48\u4e5d;\u4e00\u76c3\u53e3;\u81ea\u98a8 \u6771;\u81ea\u98a8 \u5357;\u81ea\u98a8 \u897f;\u81ea\u98a8 \u5317;\u5834\u98a8 \u6771;\u5834\u98a8 \u5357;\u5834\u98a8 \u897f;\u5834\u98a8 \u5317;\u5f79\u724c \u767d;\u5f79\u724c \u767c;\u5f79\u724c \u4e2d;\u5169\u7acb\u76f4;\u4e03\u5c0d\u5b50;\u6df7\u5168\u5e36\u4e48\u4e5d;\u4e00\u6c23\u901a\u8cab;\u4e09\u8272\u540c\u9806;\u4e09\u8272\u540c\u523b;\u4e09\u69d3\u5b50;\u5c0d\u5c0d\u548c;\u4e09\u6697\u523b;\u5c0f\u4e09\u5143;\u6df7\u8001\u982d;\u4e8c\u76c3\u53e3;\u7d14\u5168\u5e36\u4e48\u4e5d;\u6df7\u4e00\u8272;\u6e05\u4e00\u8272;\u4eba\u548c;\u5929\u548c;\u5730\u548c;\u5927\u4e09\u5143;\u56db\u6697\u523b;\u56db\u6697\u523b\u55ae\u9a0e;\u5b57\u4e00\u8272;\u7da0\u4e00\u8272;\u6e05\u8001\u982d;\u4e5d\u84ee\u5bf6\u71c8;\u7d14\u6b63\u4e5d\u84ee\u5bf6\u71c8;\u570b\u58eb\u7121\u96d9;\u570b\u58eb\u7121\u96d913\u9762;\u5927\u56db\u559c;\u5c0f\u56db\u559c;\u56db\u69d3\u5b50;\u30c9\u30e9;\u88cf\u30c9\u30e9;\u8d64\u30c9\u30e9".split(";")
      , da = " \u30dd\u30f3 \u30ab\u30f3 \u30c1\u30fc \u30ab\u30f3 \u30ab\u30f3 \u30ed\u30f3 \u30c4\u30e2 \u30ea\u30fc\u30c1  \u30ad\u30bf \u30d1\u30aa".split(" ")
      , ga = "\u65b0\u4eba \uff19\u7d1a \uff18\u7d1a \uff17\u7d1a \uff16\u7d1a \uff15\u7d1a \uff14\u7d1a \uff13\u7d1a \uff12\u7d1a \uff11\u7d1a \u521d\u6bb5 \u4e8c\u6bb5 \u4e09\u6bb5 \u56db\u6bb5 \u4e94\u6bb5 \u516d\u6bb5 \u4e03\u6bb5 \u516b\u6bb5 \u4e5d\u6bb5 \u5341\u6bb5 \u5929\u9cf3".split(" ")
      , ha = " \u6eff\u8cab \u8df3\u6eff \u500d\u6eff \u4e09\u500d\u6eff \u5f79\u6eff".split(" ")
      , ia = {
        kaze4: "\u56db\u98a8\u9023\u6253",
        yao9: "\u4e5d\u7a2e\u4e5d\u724c",
        ron3: "\u4e09\u5bb6\u548c\u4e86",
        reach4: "\u56db\u5bb6\u7acb\u76f4",
        kan4: "\u56db\u69d3\u6563\u4e86",
        nm: "\u6d41\u5c40\u6eff\u8cab"
    }
      , ja = [{
        800: "300-500",
        1100: "400-700",
        1200: "400-800",
        1500: "500-1000",
        1800: "600-1200",
        2E3: "700-1300",
        2300: "800-1500",
        2400: "800-1600",
        2700: "900-1800",
        3E3: "1000-2000",
        3500: "1200-2300",
        3900: "1300-2600",
        4400: "1500-2900",
        4800: "1600-3200",
        5400: "1800-3600",
        5900: "2000-3900",
        6E3: "2000-4000",
        9E3: "3000-6000",
        12E3: "4000-8000",
        18E3: "6000-12000",
        24E3: "8000-16000",
        48E3: "16000-32000",
        72E3: "24000-48000"
    }, {
        1E3: 500,
        1400: 700,
        1600: 800,
        2E3: 1E3,
        2400: 1200,
        2600: 1300,
        3E3: 1500,
        3200: 1600,
        3600: 1800,
        4E3: 2E3,
        4600: 2300,
        5200: 2600,
        5800: 2900,
        6400: 3200,
        7200: 3600,
        7800: 3900,
        8E3: 4E3,
        12E3: 6E3,
        16E3: 8E3,
        24E3: 12E3,
        32E3: 16E3,
        64E3: 32E3,
        96E3: 48E3
    }, {
        1100: "300-500",
        1500: "400-700",
        1600: "400-800",
        2E3: "500-1000",
        2400: "600-1200",
        2700: "700-1300",
        3100: "800-1500",
        3200: "800-1600",
        3600: "900-1800",
        4E3: "1000-2000",
        4700: "1200-2300",
        5200: "1300-2600",
        5900: "1500-2900",
        6400: "1600-3200",
        7200: "1800-3600",
        7900: "2000-3900",
        8E3: "2000-4000",
        12E3: "3000-6000",
        16E3: "4000-8000",
        24E3: "6000-12000",
        32E3: "8000-16000",
        64E3: "16000-32000",
        96E3: "24000-48000"
    }, {
        1500: 500,
        2100: 700,
        2400: 800,
        3E3: 1E3,
        3600: 1200,
        3900: 1300,
        4500: 1500,
        4800: 1600,
        5400: 1800,
        6E3: 2E3,
        6900: 2300,
        7800: 2600,
        8700: 2900,
        9600: 3200,
        10800: 3600,
        11700: 3900,
        12E3: 4E3,
        18E3: 6E3,
        24E3: 8E3,
        36E3: 12E3,
        48E3: 16E3,
        96E3: 32E3,
        144E3: 48E3
    }]
      , ka = {
        1001: "\u30d7\u30ec\u30fc\u30e4\u540d\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093\u3002\u30d7\u30ec\u30fc\u30e4\u540d\u306b\u306f\u4f7f\u7528\u3067\u304d\u306a\u3044\u6587\u5b57\u304c\u3042\u308a\u307e\u3059\u3002",
        1002: '\u3053\u306e\u30d7\u30ec\u30fc\u30e4\u540d\u3092\u4f7f\u7528\u3059\u308b\u306b\u306fID\u3067\u5165\u5834\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059<br>\u25a0ID\u306e\u518d\u767a\u884c\u65b9\u6cd5\u306f\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044<br><a href="https://tenhou.net/support.html" target=_blank>https://tenhou.net/support.html</a>',
        1003: 'ID\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093<br>\u25a0ID\u306e\u518d\u767a\u884c\u65b9\u6cd5\u306f\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044<br><a href="https://tenhou.net/support.html" target=_blank>https://tenhou.net/support.html</a><br>180\u65e5\u4ee5\u4e0a\u5bfe\u6226\u3092\u884c\u3063\u3066\u3044\u306a\u3044ID\u306f\u505c\u6b62\u307e\u305f\u306f\u524a\u9664\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u4e03\u6bb5\u4ee5\u4e0a\u3067\u6709\u6599\u7248\u306e\u6c7a\u6e08\u60c5\u5831\u304c\u78ba\u8a8d\u3067\u304d\u308b\u5834\u5408\u306b\u306fID\u306e\u5fa9\u5143\u304c\u53ef\u80fd\u3067\u3059\u3002\u304a\u65e9\u3081\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002',
        1004: "\u3053\u306e\u30d7\u30ec\u30fc\u30e4\u306f\u65e2\u306b\u63a5\u7d9a\u6e08\u307f\u3067\u3059\u3002\u3057\u3070\u3089\u304f\u7d4c\u3063\u3066\u304b\u3089\u63a5\u7d9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
        1005: "\u3053\u306e\u30d7\u30ec\u30fc\u30e4\u306f\u65e2\u306b\u767b\u9332\u6e08\u307f\u3067\u3059\u3002\u540c\u3058\u30d7\u30ec\u30fc\u30e4\u540d\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",
        1006: "\u3053\u306e\u63a5\u7d9a\u5143\u304b\u3089\u306e\u65b0\u898f\u767b\u9332\u306f\u7d04\uff17\u65e5\u9593\u884c\u306a\u3048\u307e\u305b\u3093",
        1007: "\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f",
        1008: "\u3053\u306e\u63a5\u7d9a\u5143\u304b\u3089\u306f\u4e00\u5b9a\u671f\u9593\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093<br><br>\u591a\u304f\u306e\u30d7\u30ec\u30fc\u30e4\u304b\u3089\u4e0d\u6b63/\u8ff7\u60d1\u884c\u70ba\u306e\u901a\u5831\u304c\u5bc4\u305b\u3089\u308c\u305f\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002<br>\u30a2\u30af\u30bb\u30b9\u89e3\u9664\u306f\u554f\u3044\u5408\u308f\u305b\u3092\u9802\u3044\u3066\u3082\u884c\u306a\u3048\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002<br>\u5065\u5168\u306a\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306e\u904b\u55b6\u306b\u4f55\u5352\u3054\u7406\u89e3\u3054\u5354\u529b\u3092\u3044\u305f\u3060\u304d\u307e\u3059\u3088\u3046<br>\u3088\u308d\u3057\u304f\u304a\u9858\u3044\u7533\u3057\u4e0a\u3052\u307e\u3059\u3002",
        1009: "\u901a\u5831\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f",
        1010: "\u3053\u306e\u6a5f\u80fd\u306f\u500b\u5ba4\u3067\u306f\u5229\u7528\u3067\u304d\u307e\u305b\u3093<br>\u30e9\u30f3\u30ad\u30f3\u30b0\u6226\u30ed\u30d3\u30fc\u306b\u79fb\u52d5\u3057\u3066\u304f\u3060\u3055\u3044",
        1011: "\u901a\u5831\u306b\u5931\u6557\u3057\u307e\u3057\u305f",
        1012: "\u767b\u9332\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002ID\u3092\u7d1b\u5931\u3057\u306a\u3044\u3088\u3046\u306b\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002<small class=gray>(\u203b180\u65e5\u4ee5\u4e0a\u5bfe\u6226\u3092\u884c\u3063\u3066\u3044\u306a\u3044ID\u306f\u524a\u9664\u3055\u308c\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044)</small>",
        1013: "\u89b3\u6226\u53ef\u80fd\u306a\u5bfe\u6226\u306f\u73fe\u5728\u3042\u308a\u307e\u305b\u3093",
        1014: "\u89b3\u6226\u60c5\u5831\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f<br>\u3053\u306e\u5bfe\u6226\u306f\u65e2\u306b\u7d42\u4e86\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059",
        1015: "\u5927\u4f1a\u30ed\u30d3\u30fc\u306e\u4f5c\u6210\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f",
        1016: "\u5927\u4f1a\u30ed\u30d3\u30fc\u306e\u4f5c\u6210\u306b\u5931\u6557\u3057\u307e\u3057\u305f",
        1017: "\u4e88\u7d04\u4e2d\u306f\u724c\u8b5c\u3092\u95b2\u89a7\u3067\u304d\u307e\u305b\u3093",
        1018: "\u4e88\u7d04\u4e2d\u306f\u89b3\u6226\u3067\u304d\u307e\u305b\u3093",
        1019: "\u5927\u4f1a\u30ed\u30d3\u30fc\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002",
        1020: "\u5fc5\u8981\u306a\u6709\u52b9\u671f\u9650\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059<br><br>\u4eca\u3059\u3050\u8cfc\u5165\u3057\u307e\u3059\u304b\uff1f",
        1021: "\u5916\u90e8\u30ed\u30b0\u30a4\u30f3\u30b5\u30fc\u30d0\u304b\u3089\u306e\u5fdc\u7b54\u304c\u3042\u308a\u307e\u305b\u3093",
        1022: "ID\u4e92\u63db\u306e\u306a\u3044\u30ed\u30d3\u30fc\u3078\u306f\u79fb\u52d5\u3067\u304d\u307e\u305b\u3093",
        1023: "\u4e00\u6642\u7684\u306b\u4f7f\u7528\u3057\u3066\u3044\u308b\u5916\u90e8ID\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u307e\u3057\u305f",
        1024: "\u53c2\u52a0\u306b\u5fc5\u8981\u306a\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u307e\u305b\u3093",
        1025: "\u5916\u90e8ID\u3067\u306f\u5229\u7528\u3067\u304d\u307e\u305b\u3093",
        1026: "\u3053\u306e\u30ed\u30d3\u30fc\u3067\u306f\u53c2\u52a0\u767b\u9332\u306f\u884c\u3048\u307e\u305b\u3093",
        1027: "\u53c2\u52a0\u767b\u9332\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f",
        1028: "\u3059\u3067\u306b\u53c2\u52a0\u767b\u9332\u304c\u5b8c\u4e86\u3057\u3066\u3044\u307e\u3059",
        1100: "\u3053\u306e\u30eb\u30fc\u30eb\u3078\u306e\u4e88\u7d04\u306f\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
        1101: "\u6bb5\u4f4d\u6226\u306e\u4e0a\u7d1a/\u7279\u4e0a\u5353\u3067\u306f\u3001\u4e0d\u6b63\u9632\u6b62\u306e\u305f\u3081\u5bfe\u6226\u4eba\u6570\u304c100\u4eba\u672a\u6e80\u306e\u30eb\u30fc\u30eb\u3092\u4e88\u7d04\u3059\u308b\u306b\u306f\u6709\u6599\u4f1a\u54e1\u306e\u6709\u52b9\u671f\u9650\u306e\u6b8b\u308a\u304c91\u65e5\u4ee5\u4e0a\u5fc5\u8981\u3067\u3059",
        1102: "\u63a5\u7d9a\u6570\u304c8000\u4eba\u4ee5\u4e0b\u306e\u5834\u5408\u306e\u307f\u4e88\u7d04\u304c\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u3059",
        1200: "\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u4f7f\u7528\u3059\u308b\u306b\u306fID\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059\u3002\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u300c\u65b0\u898fID\u300d\u304b\u3089ID\u3092\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044",
        2003: "\u724c\u8b5c\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002<br>\u30d7\u30ec\u30a4\u4e2d\u306e\u724c\u8b5c\u306f\u30b2\u30fc\u30e0\u7d42\u4e86\u5f8c\u306b\u95b2\u89a7\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059"
    };
    function la(a, f) {
        return 0 != (0 == a ? 0 != (f & 1536) ? ~f & 8 : f & 64 : f & 64)
    }
    function ma(a) {
        return (a & 32) >> 4 | (a & 128) >> 7
    }
    function na(a) {
        return (a & 16 ? "\u4e09" : "\u56db") + "\u822c\u4e0a\u7279\u9cf3\u82e5\u9280\u7425\u5b54".substr(ma(a) + 4 * (0 != (a & 1536)), 1) + (a & 8 ? "\u5357" : "\u6771") + (0 != (a & 1536) ? (a & 8 ? "" : "\u901f") + (~a & 512 ? "\u795d\uff10" : a & 1024 ? "\u795d\uff15" : "\u795d\uff12") : (a & 4 ? "" : "\u55b0") + (a & 2 ? "" : "\u8d64") + (a & 64 ? "\u901f" : "") + (a & 256 ? "\u6697" : "") + (a & 512 ? "\u795d" : ""))
    }
    var oa = [0, 0, 0, 0, 0, 0, 0, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, 0]
      , ra = [20, 20, 20, 20, 40, 60, 80, 100, 100, 100, 400, 800, 1200, 1600, 2E3, 2400, 2800, 3200, 3600, 4E3, 0]
      , sa = [1, 3, 0, 7, 9, 11, 0, 15, 65, 0, 0, 0, 73, 0, 0, 0, 129, 131, 0, 135, 137, 139, 0, 143, 193, 0, 0, 0, 201, 0, 0, 0, 33, 35, 0, 39, 41, 43, 0, 47, 97, 0, 0, 0, 105, 0, 0, 0, 161, 163, 0, 167, 169, 171, 0, 175, 225, 0, 0, 0, 233, 0, 0, 0, 17, 25, 145, 153, 49, 57, 177, 185, 81, 89, 209, 217, 113, 121, 241, 249, 1025, 1033, 513, 521, 1537, 1545, 1553, 1561, 1153, 1161, 641, 649, 1665, 1673, 1681, 1689, 1057, 1065, 545, 553, 1569, 1577, 1585, 1593, 1185, 1193, 673, 681, 1697, 1705, 1713, 1721, 2113];
    function xa(a, f, c) {
        a.addEventListener(f, c, !1);
        return a
    }
    function za(a, f) {
        for (var c in f)
            a.addEventListener(c, f[c], !1);
        return a
    }
    function Aa(a, f) {
        for (var c in f)
            a[c] = f[c];
        return a
    }
    function Ba(a) {
        a.sort(function(a, c) {
            return a - c
        })
    }
    function Ca(a, f) {
        a.sort(function(a, b) {
            return (f[a] << 8 | a) - (f[b] << 8 | b)
        })
    }
    function q(a, f) {
        if (void 0 === a || "" === a)
            return [];
        f = f || 1;
        a.split && (a = a.split(","));
        for (var c = 0; c < a.length; ++c)
            a[c] = 1 != f && "" == a[c] ? void 0 : f * ~~a[c];
        return a
    }
    function Qa(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function Ra(a) {
        a = a.split("&");
        var f = {}, c;
        for (c in a)
            if (a[c].length) {
                var b = a[c].split("=");
                f[b.shift()] = decodeURIComponent(b.join("="))
            }
        return f
    }
    function Ta(a) {
        for (var f = a.length - 1; 0 < f; --f) {
            var c = Math.floor(Math.random() * (f + 1))
              , b = a[f];
            a[f] = a[c];
            a[c] = b
        }
        return a
    }
    function Va(a, f, c) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            200 == this.status ? f(this.response) : c && c(this)
        }
        ;
        b.onerror = function() {
            c && c(this)
        }
        ;
        b.open("GET", a, !0);
        b.send()
    }
    function Wa(a, f) {
        var c;
        return function() {
            clearTimeout(c);
            c = setTimeout(function() {
                c = null;
                a()
            }, f)
        }
    }
    function Xa(a, f) {
        return ("000" + f).slice(-a)
    }
    function Ya(a) {
        return (0 < a ? "+" : "") + a
    }
    var $a = 1
      , r = window
      , cb = document
      , db = cb.body
      , eb = 0
      , fb = 0
      , gb = 0
      , hb = navigator.userAgent;
    hb.match(/iP(hone|od|ad)/) && hb.match(/OS (\d+)_(\d+)/) && (eb = RegExp.$1 + "." + RegExp.$2);
    hb.match(/Android (\d\.\d)/) && (fb = parseFloat(RegExp.$1));
    var gb = 4.4 > fb && 0 < hb.indexOf(" Chrome/") && 0 < hb.indexOf(" Version/")
      , ib = "ontouchstart"in cb.documentElement && !r.navigator.msPointerEnabled
      , kb = !!r.cordova
      , lb = kb || "standalone"in navigator && navigator.standalone
      , mb = !1
      , t = r.devicePixelRatio || 1
      , u = Ra(location.search.substr(1));
    u.TW = u.tw = ~~u.tw % 4;
    u.ab = !(!u.wg && !u.log);
    u.jb = !1;
    u.Dc = function(a) {
        function f(c, b) {
            var g = a.match(c);
            return g ? g[1] : b
        }
        u.log = f(/\?log=([^&]*)/, "");
        u.TW = u.tw = ~~f(/&tw=(\d)/, 0);
        u.ts = ~~f(/&ts=(\d+)/, 0);
        u.wg = f(/\?wg=([^&]*)/, "");
        (u.log || u.wg) && v.ka(11)
    }
    ;
    function A(a, f, c, b, g) {
        a = cb.createElement(a);
        c && (a.className = c);
        Aa(a, b);
        Aa(a.style, g);
        return f ? f.insertBefore(a, null) : a
    }
    function nb(a) {
        for (var f = 1; f < arguments.length; ++f) {
            var c = arguments[f];
            if (0 === c)
                Array.prototype.push.apply(arguments, "regid clearid idcont cfg uname sx mvlb ok".split(" "));
            else if (1 === c)
                Array.prototype.push.apply(arguments, "testplay haifu kansen openurl help hairi purchase".split(" "));
            else if (2 === c)
                Array.prototype.push.apply(arguments, ["iap", "storePurchase", "exit"]);
            else if (3 === c)
                Array.prototype.push.apply(arguments, ["rule", "join", "cancel", "logout"]);
            else
                for (var c = cb.getElementsByName(c), b = 0; b < c.length; ++b) {
                    var g = c[b];
                    g && (g.disabled = a)
                }
        }
    }
    function ob(a) {
        if (!a)
            return !1;
        a = a.replace(/\?.*$/, "");
        return a.match(/^https?:\/\/(?:[\w-]+\.)+[\w-]+(?:\/[\w-]+)+\.(?:jpg|png|gif)$/)
    }
    var pb = function() {
        var a = []
          , f = new XMLHttpRequest;
        f.onload = function() {
            a.length && 1 != f.readyState && (f.open("POST", "http://tenhou.net/3/err.cgi", !0),
            f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            f.send(a.shift()))
        }
        ;
        return function() {
            for (var c = arguments[0], b = 1; b < arguments.length; ++b)
                c += " " + arguments[b];
            a.push(c);
            f.onload()
        }
    }()
      , qb = "";
    r.onerror = function(a, f, c) {
        a = a + " " + f + ":" + c;
        qb != a && pb(a);
        qb = a
    }
    ;
    var rb = document.createElement("style");
    rb.innerHTML = "@font-face{font-family:cwTeX-Q-Kai-T;src: url(http://tenhou.net/3/font/cwTeXQKaiT-Medium.ttf) format('truetype');}@font-face{font-family:icons2;src: url(http://tenhou.net/3/font/icons1004.ttf) format('truetype');}*{-webkit-tap-highlight-color:rgba(0,0,0,0);line-height:1;}:focus{outline:0;}HTML{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}HTML{touch-action:pan-y;}BODY{font-family:sans-serif;overflow-x:hidden;-webkit-text-size-adjust:100%;}HR{border-color:#444;border-width:1px 0 0 0;border-style:solid;margin:0.5em 0;}TEXTAREA{margin:0px;word-break:break-all;}SELECT{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0.6em;}SELECT::-ms-expand{display:none;}BUTTON,SELECT,INPUT,.bth{height:2em;font-size:175%;margin:0;}BUTTON,SELECT,INPUT[type=checkbox]+LABEL,A.bt3{padding:0 0.5em;color:inherit;border:solid 1px #444;}BUTTON,SELECT,INPUT[type=checkbox]+LABEL{background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(167,147,127,0.4) 50%,rgba(31,31,31,0.4) 51%,rgba(0,0,0,0.4) 100%);}A.bt3{display:block;width:100%;height:100%;padding:0 1em;border:solid 1px #444;background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(47,47,47,0.4) 100%);}A.bt3:hover,SELECT:hover{background-color:#030;}SELECT:disabled,BUTTON:disabled{color:#888;background:#444;pointer-events:none;}OPTION{background-color:#FFF;color:#000;}BUTTON *{pointer-events:none;}.notxt{font-size:0px;}.sscl{-webkit-overflow-scrolling:touch;}.rot000{position:absolute;}.rot090{position:absolute;transform:rotate( 90deg);-webkit-transform:rotate( 90deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);}.rot180{position:absolute;transform:rotate(180deg);-webkit-transform:rotate(180deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);}.rot270{position:absolute;transform:rotate(270deg);-webkit-transform:rotate(270deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);}.ts0,sblink{text-shadow:#000 -1px 0px 0px, #000 1px 0px 0px, #000 1px 1px 1px,#000 -1px -1px 1px;}.tsv{text-shadow:#000 -1px -1px 0px, #000 0px 1px 0px, #000 3px 3px 0px;}.nosel{-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;}.tbl{display:table;}.tbc{display:table-cell;}.nobr{word-break:keep-all;white-space:nowrap;}.gray{color:#666;}.bgb40{background-color:rgba(0,0,0,0.4);}.bgb60{background-color:rgba(0,0,0,0.6);}.bgb80{background-color:rgba(0,0,0,0.8);}.bgb{background-color:#000;}.ra0{border-radius:0.6em;}.ra1{border-radius:0.6em 0 0 0.6em;}.ra2{border-radius:0 0.6em 0.6em 0;}.dan18,.dan19,.dan20{font-weight:bold;}.n2r{display:inline-block;width:2em;text-align:right;}SELECT{padding-right:1em;}.select-wrapper{position:relative;display:inline-block;}.select-wrapper:after{content:'';position:absolute;right:0.5em;top:45%;width:0;height:0;border-left:0.3em solid transparent;border-right:0.3em solid transparent;border-top: 0.3em solid #FFF;pointer-events:none;}.select-wrapper>BUTTON:first-child{padding-right:1em;border-radius:0.6em;}.fixed-select{min-width:10em;max-width:90vw;max-height:85vh;overflow-y:auto;}.fixed-select .A{font-size:150%;color:#000;padding:0.5em;text-decoration:none;display:block;}.fixed-select .A{border-bottom:1px solid #DDD;cursor:pointer;}.fixed-select .A:nth-child(1){border-top:1px solid #DDD;}.fixed-select .A:hover{background-color:#CCC}.fixed-select .A DIV.desc{color:#666;font-size:50%;}.fixed-select .A *{pointer-events:none;}.vscl::-webkit-scrollbar{background:#CCC;width:0.5em;}.vscl::-webkit-scrollbar-thumb{background:#AAA;}INPUT[type=checkbox]{display:none;}INPUT[type=checkbox]+LABEL{position:relative;cursor:pointer;display:inline-block;border-radius:0.6em;}INPUT[type=checkbox]+LABEL{padding:0.5em 0.5em 0.5em 1.8em;}INPUT[type=checkbox]+LABEL::before{font-family:icons2;content:'\ue802';position:absolute;left:0.5em;top:25%;}INPUT[type=checkbox]:checked+LABEL::before{content:'\ue803';}INPUT[type=checkbox]:disabled+LABEL{color:#888;background:#444;pointer-events:none;}.bblink{animation: _bblink 0.5s ease 0s infinite alternate;}@keyframes _bblink{0%{background-color:rgba(255,255,255,0.3);}30%{background-color:rgba(0,0,0,0.3);}100%{background-color:rgba(0,0,0,0.3);}}.cblink{animation: _cblink 1.75s linear 0s infinite alternate;}@keyframes _cblink{0%{color:#FFF;}80%{color:#FFF;}100%{color:#666;}}.sblink{animation: _sblink 0.5s linear 0s infinite alternate;position:absolute;bottom:0;right:0.25em;color:#888;font-size:300%;pointer-events:none;}@keyframes _sblink{0%{color:transparent;}30%{color:#888;}100%{color:#888;}}.fadeinqs{animation:_fadein 0.25s ease 0s 1 normal;}.fadein2s{animation:_fadein 2s ease 0s 1 normal;}@keyframes _fadein{0%{opacity:0;}100%{opacity:1;}}.flip{perspective:100px;opacity:0;transform:rotateX(-90deg);transition:all 0.5s cubic-bezier(.36,-0.64,.34,1.76);}.flip.show{opacity:1;transform:none;transition:all 0.5s cubic-bezier(.36,-0.64,.34,1.76);}.flipinqs{animation:_flipin 0.25s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}.flipinhs{animation:_flipin 0.5s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}.flipin1s{animation:_flipin 1s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}@keyframes _flipin{0%{opacity:0;transform:rotateX(-90deg);}100%{opacity:1;transform:none;}}.flipinqs.hide{animation:_flipout 0.25s cubic-bezier(0.600, 0, 0.735, 0.045) 0s 1 normal;}.flipinhs.hide{animation:_flipout 0.5s cubic-bezier(0.600, 0, 0.735, 0.045) 0s 1 normal;}@keyframes _flipout{0%{opacity:1;transform:none;}100%{opacity:0;transform:rotateX(-90deg);}}.arrow-box-left,.arrow-box-right{position:relative;background:#FFF;color:#000;border-radius:0.2em;padding:0.5em;}.arrow-box-left:after{right:100%;top:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255, 255, 255, 0);border-right-color:#FFF;border-width:0.5em;margin-top:-0.5em;}.arrow-box-right:after {left:100%;top:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255, 255, 255, 0);border-left-color:#FFF;border-width:0.5em;margin-top:-0.5em;}#pftab TD,#rnktab TD{padding-top:0.35em;}.trtab TD{padding:0.5em 0.25em;}";
    db.appendChild(rb);
    function B(a) {
        return "<span class=gray>" + a + "</span>"
    }
    function sb(a) {
        return "<span class=nobr>" + a + "</span>"
    }
    A("SPAN", db, "", {
        innerHTML: "FontLoader&#xe800;"
    }, {
        position: "absolute",
        fontFamily: "cwTeX-Q-Kai-T,icons2",
        visibility: "hidden"
    });
    setInterval(function() {
        for (var a = cb.getElementsByClassName("sblink"), f = 0; f < a.length; ++f) {
            var c = a[f]
              , b = c.previousSibling;
            c.style.visibility = b.scrollTop + b.offsetHeight < b.scrollHeight - .25 * c.offsetHeight ? "" : "hidden"
        }
    }, 1E3);
    var tb = function() {
        function a(b) {
            var a = b & 7
              , d = 0
              , c = 0;
            1 == a || 4 == a ? d = c = 1 : 2 == a && (d = c = 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 != a && 3 != a)
                return !1;
            a = (b >> 3 & 7) - c;
            return 0 == a || 3 == a
        }
        function f(b, c) {
            if (0 == b) {
                if (128 <= (c & 448) && a(c - 128) || 65536 <= (c & 229376) && a(c - 65536) || 33554432 <= (c & 117440512) && a(c - 33554432))
                    return !0
            } else if (1 == b) {
                if (16 <= (c & 56) && a(c - 16) || 8192 <= (c & 28672) && a(c - 8192) || 4194304 <= (c & 14680064) && a(c - 4194304))
                    return !0
            } else if (2 == b && (2 <= (c & 7) && a(c - 2) || 1024 <= (c & 3584) && a(c - 1024) || 524288 <= (c & 1835008) && a(c - 524288)))
                return !0;
            return !1
        }
        function c(a, c) {
            return a[c + 0] << 0 | a[c + 1] << 3 | a[c + 2] << 6 | a[c + 3] << 9 | a[c + 4] << 12 | a[c + 5] << 15 | a[c + 6] << 18 | a[c + 7] << 21 | a[c + 8] << 24
        }
        return {
            Ab: function(b) {
                var g = 1 << b[27] | 1 << b[28] | 1 << b[29] | 1 << b[30] | 1 << b[31] | 1 << b[32] | 1 << b[33];
                if (16 <= g)
                    return !1;
                if (2 == (g & 3) && 2 == b[0] * b[8] * b[9] * b[17] * b[18] * b[26] * b[27] * b[28] * b[29] * b[30] * b[31] * b[32] * b[33] || !(g & 10) && 7 == (2 == b[0]) + (2 == b[1]) + (2 == b[2]) + (2 == b[3]) + (2 == b[4]) + (2 == b[5]) + (2 == b[6]) + (2 == b[7]) + (2 == b[8]) + (2 == b[9]) + (2 == b[10]) + (2 == b[11]) + (2 == b[12]) + (2 == b[13]) + (2 == b[14]) + (2 == b[15]) + (2 == b[16]) + (2 == b[17]) + (2 == b[18]) + (2 == b[19]) + (2 == b[20]) + (2 == b[21]) + (2 == b[22]) + (2 == b[23]) + (2 == b[24]) + (2 == b[25]) + (2 == b[26]) + (2 == b[27]) + (2 == b[28]) + (2 == b[29]) + (2 == b[30]) + (2 == b[31]) + (2 == b[32]) + (2 == b[33]))
                    return !0;
                if (g & 2)
                    return !1;
                var d = b[0] + b[3] + b[6]
                  , l = b[1] + b[4] + b[7]
                  , p = b[9] + b[12] + b[15]
                  , n = b[10] + b[13] + b[16]
                  , k = b[18] + b[21] + b[24]
                  , h = b[19] + b[22] + b[25]
                  , m = (d + l + (b[2] + b[5] + b[8])) % 3;
                if (1 == m)
                    return !1;
                var y = (p + n + (b[11] + b[14] + b[17])) % 3;
                if (1 == y)
                    return !1;
                var F = (k + h + (b[20] + b[23] + b[26])) % 3;
                if (1 == F || 1 != (2 == m) + (2 == y) + (2 == F) + (2 == b[27]) + (2 == b[28]) + (2 == b[29]) + (2 == b[30]) + (2 == b[31]) + (2 == b[32]) + (2 == b[33]))
                    return !1;
                d = (1 * d + 2 * l) % 3;
                l = c(b, 0);
                p = (1 * p + 2 * n) % 3;
                n = c(b, 9);
                k = (1 * k + 2 * h) % 3;
                b = c(b, 18);
                return g & 4 ? !(m | d | y | p | F | k) && a(l) && a(n) && a(b) : 2 == m ? !(y | p | F | k) && a(n) && a(b) && f(d, l) : 2 == y ? !(F | k | m | d) && a(b) && a(l) && f(p, n) : 2 == F ? !(m | d | y | p) && a(l) && a(n) && f(k, b) : !1
            },
            eb: function(a) {
                var c = []
                  , b = 0;
                if (12 <= (0 !== a[0]) + (0 !== a[8]) + (0 !== a[9]) + (0 !== a[17]) + (0 !== a[18]) + (0 !== a[26]) + (0 !== a[27]) + (0 !== a[28]) + (0 !== a[29]) + (0 !== a[30]) + (0 !== a[31]) + (0 !== a[32]) + (0 !== a[33]))
                    for (; 34 > b; ++b)
                        3 >= a[b] && (++a[b],
                        tb.Ab(a) && c.push(b),
                        --a[b]);
                else {
                    for (; 27 > b; ++b)
                        3 >= a[b] && (a[b] || 0 < b % 9 && a[b - 1] || 8 > b % 9 && a[b + 1]) && (++a[b],
                        tb.Ab(a) && c.push(b),
                        --a[b]);
                    for (; 34 > b; ++b)
                        3 >= a[b] && a[b] && (++a[b],
                        tb.Ab(a) && c.push(b),
                        --a[b])
                }
                return c
            },
            wc: function(a) {
                for (var b = {}, c = 0; 34 > c; ++c)
                    a[c] && (--a[c],
                    b[c] = tb.eb(a),
                    ++a[c]);
                return b
            }
        }
    }();
    var C = function() {
        function a(a) {
            c && c[a] && 0 == c[a](f) || !f || (f.parentNode.removeChild(f),
            f = null)
        }
        var f, c;
        return {
            l: function(b, g, d, l) {
                1 == arguments.length && (g = 1);
                c = [l, d];
                var p = f = A("DIV", db, "tbl fadeinqs", {}, {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.75)"
                });
                setTimeout(function() {
                    g || xa(p, "click", function() {
                        a(0)
                    });
                    p = A("DIV", p, "tbc", {}, {
                        textAlign: "center",
                        verticalAlign: "middle"
                    });
                    p = A("DIV", p, "", {}, {
                        display: "inline-block",
                        background: "#FFF",
                        color: "#000",
                        borderRadius: "0.6em",
                        maxWidth: "90vw",
                        padding: "1em"
                    });
                    p.innerHTML = '<div style="position:relative;font-size:150%;' + (g ? "padding:1em 0;" : "") + '">' + b + '</div><button style="width:6em;">CANCEL</button><button style="width:6em;">OK</button>';
                    var c = p.getElementsByTagName("BUTTON");
                    c[0].onclick = function() {
                        a(0)
                    }
                    ;
                    c[0].style.display = g & 2 ? "" : "none";
                    c[1].onclick = function() {
                        a(1)
                    }
                    ;
                    c[1].style.display = g & 1 ? "" : "none";
                    c = p.getElementsByTagName("INPUT");
                    if (fb && kb)
                        for (var k = 0; k < c.length; ++k)
                            za(c[k], {
                                focus: function() {
                                    wb(1)
                                },
                                blur: function() {
                                    wb()
                                }
                            });
                    c.length && c[0].focus()
                }, 1)
            },
            ha: function(a, c, d, f, p) {
                return C.l('<div class="fixed-select sscl" style="position:relative;' + (c || "") + '">' + a + '</div><div class=sblink style="visibility:hidden;">\u25bc</div>', d, f, p)
            },
            Za: function() {
                return !!f
            }
        }
    }();
    xa(r, "click", function(a) {
        var f = a.target;
        if (f.classList.contains("A") && f.id && f.parentNode.classList.contains("fixed-select"))
            if ("A" == f.tagName && a.preventDefault(),
            a = f.id.split("-"),
            H.b && H[a[0]])
                H[a[0]](a[0], a[1]);
            else
                switch (a[0]) {
                case "#tw":
                    3 == I.a ? xb.sb(a[0], a[1]) : 2 == I.a && yb.sb(a[0], a[1]);
                    break;
                case "#ts":
                    xb.Tb(a[0], a[1]);
                    break;
                case "#tj":
                    xb.Ub(a[0], a[1])
                }
    });
    function zb(a) {
        if ("254" == a)
            return "a";
        if ("255" == a)
            return "r";
        if ("136" == a)
            return "0z";
        var f = a >> 2;
        return (27 > f && 16 == a % 36 ? "0" : f % 9 + 1) + "mpsz".substr(f / 9, 1)
    }
    function Ab(a) {
        for (var f = "", c = 0; c < a.length; ++c)
            f += zb(a[c]);
        return f.replace(/\d(m|p|s|z)(\d\1)*/g, "$&:").replace(/(m|p|s|z)([^:])/g, "$2").replace(/:/g, "")
    }
    function Bb(a) {
        return a.replace(/(\d)(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{8})(m|p|s|z)/g, "$1$9$2$9$3$9$4$9$5$9$6$9$7$9$8$9").replace(/(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)(\d)(\d)(m|p|s|z)/g, "$1$9$2$9$3$9$4$9$5$9$6$9$7$9$8$9").replace(/(m|p|s|z)(m|p|s|z)+/g, "$1").replace(/([^0-9]|^)[mpsz](\d[mpsz\d]*)/g, "$1$2")
    }
    function Fb(a) {
        if (!a)
            return "";
        for (var f = [], c = 0; 34 > c; ++c)
            f[c] = 0;
        return Bb(a).replace(/r/g, "255,").replace(/a/g, "254,").replace(/(\d)([mpsz])(?![mpsz])/g, function(a, c, d) {
            c = ~~c;
            if ("z" == d && 0 == c)
                return "136,";
            a = "m" == d ? 0 : "p" == d ? 1 : "s" == d ? 2 : 3;
            return c ? 36 * a + 4 * (c - 1) + ++f[9 * a + (c - 1)] % 4 + "," : 4 * (9 * a + 4) + 0 + ","
        }).replace(/,$/, "")
    }
    ;var M;
    (function() {
        try {
            M = r.localStorage,
            M.setItem("a", 1),
            M.removeItem("a")
        } catch (g) {
            M = {
                removeItem: function(a) {
                    delete M[a]
                }
            },
            navigator.userAgent.match(/TwitterAndroid/) ? C.l("Twitter\u306e\u5c02\u7528\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u3001\u8a2d\u5b9a\u306e\u4fdd\u5b58(\u724c\u8b5c\u306e\u8a18\u9332/ID\u306e\u4fdd\u5b58/\u306a\u3069)\u304c\u884c\u3048\u307e\u305b\u3093\u3002\u30e1\u30cb\u30e5\u30fc\u306e\u300c\u30d6\u30e9\u30a6\u30b6\u3067\u958b\u304f\u300d\u304b\u3089\u901a\u5e38\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u958b\u3044\u3066\u304f\u3060\u3055\u3044\u3002") : C.l("\u3053\u306e\u30d6\u30e9\u30a6\u30b6\u74b0\u5883(\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30d6\u30e9\u30a6\u30ba\u306a\u3069)\u3067\u306f\u3001\u724c\u8b5c\u306e\u8a18\u9332\u3084ID\u306e\u4fdd\u5b58\u306a\u3069\u304c\u884c\u3048\u307e\u305b\u3093\u3002")
        }
        var a = M.scro;
        if (kb && r.screen && r.screen.orientation && r.screen.orientation.lock) {
            var f = screen.orientation
              , c = f.type;
            if (eb && ("landscape-primary" == c || "landscape-secondary" == c)) {
                var b = cb.getElementById("loading");
                b && (b.style.display = "none");
                r.StatusBar.overlaysWebView(!0);
                r.StatusBar.hide();
                f.lock("portrait");
                "landscape-primary" == c ? f.lock("landscape-secondary") : "landscape-secondary" == c && f.lock("landscape-primary");
                b && setTimeout(function() {
                    b.style.display = "table"
                }, 1E3)
            }
            eb && 2 == a ? f.lock("landscape-primary" == c ? "landscape-secondary" : "landscape-secondary" == c ? "landscape-primary" : "landscape") : f.lock(1 == a ? "portrait" : 2 == a ? "landscape" : "any")
        }
    }
    )();
    function Gb(a, f, c) {
        f != c ? M.setItem(a, f) : M.removeItem(a)
    }
    (function() {
        function a(f) {
            mb = "mousedown" == f.type;
            f = M.desktop;
            1 != f && 2 != f && (Gb("desktop", mb ? 3 : 0, 0),
            f !== M.desktop && Hb());
            r.removeEventListener("touchstart", a, !1);
            r.removeEventListener("mousedown", a, !1)
        }
        za(r, {
            touchstart: a,
            mousedown: a
        })
    }
    )();
    var Ib = 108
      , Jb = A("DIV", db, "nosel", {}, {
        display: "none",
        color: "#CCC",
        backgroundColor: "#444",
        height: Ib + "px"
    })
      , Kb = A("DIV", db, "", {}, {
        display: "none",
        overflow: "hidden",
        position: "absolute"
    })
      , Lb = A("DIV", db, "", {}, {
        position: "absolute"
    });
    ib && !lb ? Jb.innerHTML = '<div style="width:100%;height:100%;display:table;pointer-events:none;"><div style="display:table-cell;text-align:center;vertical-align:middle;">\u4e0a\u306b\u3086\u3063\u304f\u308a\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044</div></div>' : (Jb.style.height = Ib = 0,
    db.style.overflow = "hidden");
    function Mb() {
        function a() {
            c = null;
            var a = cb.documentElement.clientWidth
              , l = r.innerHeight
              , g = b[0];
            ib && ((r.orientation + 360) % 180 && (g = b[1]),
            a < g[0] && (a = g[0]),
            l < g[1] && (l = g[1]));
            a == parseInt(Kb.style.width) && l == parseInt(Kb.style.height) ? (g[0] = a,
            g[1] = l,
            db.style.height = parseInt(Jb.style.height) + l + "px",
            Kb.style.display = Jb.style.display = "",
            Hb()) : (f(),
            wb(),
            r.scrollTo(0, parseInt(Jb.style.height)),
            Kb.style.width = a + "px",
            Kb.style.height = l + "px")
        }
        function f(b) {
            eb && (Kb.style.display = Jb.style.display = "none");
            b && "resize" == b.type || (db.style.height = 2 * r.innerHeight + "px");
            clearTimeout(c);
            c = setTimeout(a, eb ? 250 : fb ? 600 : 250)
        }
        var c, b = [[0, 0], [0, 0]], g = r.orientation;
        xa(r, "orientationchange", eb ? f : function() {
            (g + r.orientation + 360) / 90 & 1 && (Kb.style.display = Jb.style.display = "none");
            g = r.orientation
        }
        );
        xa(r, "resize", f);
        f()
    }
    function Nb(a, f, c) {
        var b = f / t + "px"
          , g = c / t + "px";
        if (a.width != f || a.height != c)
            a.width = f,
            a.height = c;
        a = a.style;
        if (a.width != b || a.height != g)
            a.width = b,
            a.height = g
    }
    function Ob() {
        N.a = 2;
        N.a = 3 == I.a ? M.check & 24 ? 3 : ~~M.yama : ~~M.yama;
        0 == N.a && M.desktop && (N.a = 1);
        Pb();
        O.Ac();
        var a = Qb
          , f = Rb;
        db.parentNode.style.fontSize = ~~((a - 2 * Q[1]) / t / 30) + "px";
        Sb.style.width = (a + (3 == I.a && Kb.offsetHeight < Kb.offsetWidth ? (a - 2 * Q[1]) / 8 : 0)) / t + "px";
        Sb.style.height = f / t + "px";
        Nb(Tb.J.canvas, a, f);
        Nb(Ub.J.canvas, a, f);
        Nb(Vb.J.canvas, a, f);
        Wb.da();
        R.O();
        Xb.O();
        Yb.style.left = ~~(R[80] / t) + "px";
        Yb.style.top = ~~(R[81] / t) + "px";
        a = Zb.J.canvas;
        a.style.marginLeft = ~~(R[32] / t) + "px";
        a.style.marginTop = ~~(R[33] / t) + "px";
        Nb(a, R[34], R[35]);
        Tb.R();
        Zb.R();
        Ub.tb();
        S.O();
        v.O();
        H.O();
        $b.O();
        Lb.style.top = Sb.offsetHeight + S.b.offsetHeight + "px";
        (a = cb.getElementById("loading")) && a.parentNode.removeChild(a)
    }
    function Hb() {
        Hb = Ob;
        v.ka(11, r.tenhouEventInfo && !cb.referrer.match(/^https?:\/\/tenhou.net/))
    }
    function wb(a) {
        var f = r.StatusBar;
        if (f) {
            kb && fb && f.backgroundColorByHexString("#000");
            var c = cb.documentElement.clientWidth
              , b = r.innerHeight;
            !a && b < c ? (f.overlaysWebView(!0),
            f.hide()) : (f.overlaysWebView(!1),
            f.show())
        }
    }
    kb && xa(cb, "resume", Wa(function() {
        Tb.R();
        Zb.R();
        Ub.tb();
        var a = Vb.J;
        a.clearRect(0, 0, a.canvas.width + 1, a.canvas.height + 1)
    }, 1));
    var Sb = A("DIV", Kb, "nosel tbl", {}, {
        margin: "0 auto",
        position: "relative"
    });
    function ac(a, f) {
        var c = arguments;
        a.beginPath();
        a.moveTo(c[2], c[3]);
        for (var b = 4; b < c.length; )
            switch (c[b++]) {
            case 0:
                b += 2;
                break;
            case 1:
                a.lineTo(c[b++], c[b++]);
                break;
            case 2:
                a.arcTo(c[b++], c[b++], c[b + 1], c[b + 2], f)
            }
        a.closePath()
    }
    function bc(a, f, c, b, g) {
        var d = ~~(.5 * T[0]);
        ac(a, d, f + d, c + g, 2, f + b, c + g, 2, f + b, c, 2, f, c, 2, f, c + g, 0, f + b, c + g + .01)
    }
    var Tb = function() {
        function a(a, c, b, g, d) {
            d && (a.fillStyle = d,
            a.fillText(c, 1, b + 0),
            a.fillText(c, -1, b + 0),
            a.fillText(c, 0, b + 1),
            a.fillText(c, 0, b - 1),
            a.fillText(c, 1, b + 1),
            a.fillText(c, -1, b + 1),
            a.fillText(c, 1, b - 1),
            a.fillText(c, -1, b - 1));
            g && (a.fillStyle = g,
            a.fillText(c, 0, b))
        }
        return {
            J: A("CANVAS", Sb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            R: Wa(function() {
                var f = Tb.J;
                if (f && (f.setTransform(1, 0, 0, 1, 0, 0),
                f.clearRect(0, 0, f.canvas.width + 1, f.canvas.height + 1),
                O.cb.complete && O.cb.height && f.drawImage(O.cb, 0, 0),
                -1 != I.fa)) {
                    var c = R[16]
                      , b = R[17]
                      , g = R[18]
                      , d = R[19]
                      , l = T[0]
                      , p = ~~(.5 * l);
                    f.fillStyle = "#000";
                    bc(f, c, b, g, d);
                    f.globalAlpha = .2;
                    f.fill();
                    f.globalAlpha = 1;
                    var n = 3 * Q[1]
                      , k = 3 * U[0]
                      , h = [f];
                    h.push(p, c, b + d);
                    I.v[0] && h.push(2, c, b + d + k, 2, c + g + n, b + d + k, 2, c + g + n, b + d + l, 1, c + g, b + d + l);
                    h.push(1, c + g, b + d);
                    I.v[1] && h.push(2, c + g + n, b + d, 2, c + g + n, b - k, 2, c + g + l, b - k, 1, c + g + l, b);
                    h.push(1, c + g, b);
                    I.v[2] && h.push(2, c + g, b - k, 2, c - n, b - k, 2, c - n, b - l, 1, c, b - l);
                    h.push(1, c, b);
                    I.v[3] && h.push(2, c - n, b, 2, c - n, b + d + k, 2, c - l, b + d + k, 1, c - l, b + d);
                    ac.apply(this, h);
                    f.globalAlpha = .15;
                    f.fill();
                    f.globalAlpha = 1;
                    for (c = 0; 4 > c; ++c)
                        I.v[c] && (f.setTransform(1, 0, 0, 1, 0, 0),
                        f.fillStyle = "#000",
                        g = 48 + 4 * c,
                        b = f,
                        bc(b, R[g + 0], R[g + 1], R[g + 2], R[g + 3]),
                        b.globalAlpha = .15,
                        b.fill(),
                        b.globalAlpha = 1,
                        b = Math.min(R[g + 2] / 2, R[g + 3] / 2),
                        f.textAlign = "center",
                        f.textBaseline = "middle",
                        f.setTransform(1, 0, 0, 1, R[g + 0] + ~~(R[g + 2] / 2), R[g + 1] + ~~(R[g + 3] / 2)),
                        f.rotate(270 * c * Math.PI / 180),
                        g = 0 == c || 3 == c ? "rgba(255,255,255,0.25)" : "rgba(191,191,191,0.25)",
                        d = void 0,
                        u.jb || (g = 0 == c || 3 == c ? "rgba(255,255,255,0.80)" : "rgba(191,191,191,0.80)",
                        d = "rgba(0,0,0,0.50)"),
                        l = -.1,
                        1800 <= I.Qa[c] && (f.font = "normal " + .3 * b + "px sans-serif",
                        a(f, "R" + ~~I.Qa[c], -.55 * b, g, d),
                        l = 0),
                        f.font = "normal " + .9 * b + "px cwTeX-Q-Kai-T,icons2,serif",
                        a(f, ga[I.Ua[c]], b * l, g, d),
                        f.font = "normal " + .25 * b + "px sans-serif",
                        a(f, I.v[c], b * (.55 + l), g, d));
                    f.fillStyle = "#000";
                    f.setTransform(1, 0, 0, 1, 0, 0);
                    for (c = 0; 4 > c; ++c)
                        I.v[c] && (b = R[80 + 2 * c],
                        g = R[81 + 2 * c],
                        d = R[96 + 2 * c],
                        l = R[97 + 2 * c],
                        0 == c && (ty0 = R[97]),
                        p = f,
                        bc(p, Math.min(b, d), Math.min(g, l), Math.abs(b - d) + Q[c], Math.abs(g - l) + U[c] + T[c]),
                        p.globalAlpha = .2,
                        p.fill(),
                        p.globalAlpha = 1)
                }
            })
        }
    }();
    var Ub = function() {
        function a(a, c, b, d) {
            if (b && d) {
                var k = Ub.J;
                k.clearRect(a, c, b, d);
                b = a + b;
                d = c + d;
                for (var h, f = 0; h = R.qa[f]; ++f) {
                    var g = h.i;
                    if (void 0 !== g && 0 !== h.s && g.wa.complete && g.wa.height) {
                        var l = h.sa.c + g.offsetX
                          , n = h.sa.h - h.sa.Aa + g.offsetY;
                        if (!(b <= l || d <= n)) {
                            var p = l + g.ia;
                            if (!(p <= a)) {
                                var D = n + g.ta;
                                if (!(D <= c)) {
                                    var ca = a - l;
                                    0 < ca ? l = a : ca = 0;
                                    b < p && (p = b);
                                    var p = p - l
                                      , ua = c - n;
                                    0 < ua ? n = c : ua = 0;
                                    d < D && (D = d);
                                    D -= n;
                                    k.globalAlpha = h.s;
                                    k.drawImage(g.wa, g.Xa + ca, g.Ya + ua, p, D, l, n, p, D);
                                    h.Z && (g = h.ja,
                                    k.globalAlpha = h.Z,
                                    k.drawImage(g.wa, g.Xa + ca, g.Ya + ua, p, D, l, n, p, D))
                                }
                            }
                        }
                    }
                }
                k.globalAlpha = 1
            }
        }
        function f(a, c, k, h) {
            d && l ? (a < b ? (d += b - a,
            b = a) : k += a - b,
            d < k && (d = k),
            c < g ? (l += g - c,
            g = c) : h += c - g,
            l < h && (l = h)) : (b = a,
            g = c,
            d = k,
            l = h)
        }
        var c = Wa(function() {
            var c = Ub.J;
            c.clearRect(0, 0, c.canvas.width + 1, c.canvas.height + 1);
            for (var b, k = 0; b = R.qa[k]; ++k) {
                var d = b.i;
                if (void 0 !== d && 0 !== b.s && d.wa.complete && d.wa.height) {
                    var m = b.sa.c + d.offsetX
                      , f = b.sa.h - b.sa.Aa + d.offsetY;
                    c.globalAlpha = b.s;
                    c.drawImage(d.wa, d.Xa, d.Ya, d.ia, d.ta, m, f, d.ia, d.ta);
                    if (b.Z) {
                        var g = b.ja;
                        c.globalAlpha = b.Z;
                        c.drawImage(g.wa, g.Xa, g.Ya, d.ia, d.ta, m, f, d.ia, d.ta)
                    }
                }
            }
            Ub.Ja = a
        }, 1), b, g, d, l;
        return {
            J: A("CANVAS", Sb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            tb: function() {
                (Ub.Ja = c)()
            },
            ya: function() {
                b = g = d = l = 0;
                Ub.Ja = f
            },
            za: function() {
                a(b, g, d, l);
                Ub.Ja = a
            },
            Ja: a
        }
    }();
    var Zb = function() {
        function a(a, c) {
            for (var b = Zb.J, d = [], g = 2; g < arguments.length; g += 5) {
                b.font = arguments[g + 0];
                var k = b.measureText(arguments[g + 3]).width;
                d.push(k);
                a -= k / 2
            }
            for (g = 2; g < arguments.length; g += 5)
                b.font = arguments[g + 0],
                b.fillStyle = f[arguments[g + 1]],
                (k = f[arguments[g + 2]]) ? (b.shadowBlur = 2 * t,
                b.shadowColor = k,
                b.shadowOffsetX = 1 * t,
                b.shadowOffsetY = 1 * t) : (b.shadowBlur = 0,
                b.shadowColor = "#000",
                b.shadowOffsetX = 0,
                b.shadowOffsetY = 0),
                k = d.shift(),
                b.fillText(arguments[g + 3], a + k / 2, c + arguments[g + 4]),
                a += k
        }
        var f = "#FFF #666 #000 #00F #F00 #AAA".split(" ")
          , c = 0
          , b = 0;
        return {
            J: A("CANVAS", Sb, "", {}, {
                position: "absolute",
                display: "none"
            }).getContext("2d"),
            R: function(f, d) {
                void 0 !== f && (c = f);
                void 0 !== d && (b = d);
                var g = Zb.J
                  , p = g.canvas.width
                  , n = g.canvas.height
                  , k = Math.min(.18 * p, .18 * n);
                if (1 == N.a || 3 == N.a)
                    k *= .9;
                g.save();
                g.setTransform(1, 0, 0, 1, 0, 0);
                g.clearRect(0, 0, p + 1, n + 1);
                bc(g, 1, 1, p - 2, n - 2);
                u.jb ? (g.fillStyle = "#222",
                g.fill()) : (g.globalAlpha = .75,
                g.fillStyle = "#222",
                g.fill(),
                g.globalAlpha = 1);
                g.strokeStyle = "#111";
                g.lineWidth = 1;
                g.stroke();
                var h = b
                  , m = .15 * k
                  , y = Zb.J
                  , F = y.canvas.width
                  , w = y.canvas.height
                  , z = y.createLinearGradient(0, 0, h & 1 ? 0 : F, h & 1 ? w : 0);
                z.addColorStop(0, "rgba(0,127,0,0)");
                z.addColorStop(.2, "rgba(0,127,0,255)");
                z.addColorStop(.8, "rgba(0,127,0,255)");
                z.addColorStop(1, "rgba(0,127,0,0)");
                y.fillStyle = z;
                switch (h) {
                case 0:
                    y.fillRect(0, w - m - 0, F, m);
                    break;
                case 1:
                    y.fillRect(F - m - 0, 0, m, w);
                    break;
                case 2:
                    y.fillRect(0, 0, F, m);
                    break;
                case 3:
                    y.fillRect(0, 0, m, w)
                }
                h = "normal " + 1.2 * k + "px cwTeX-Q-Kai-T,icons2,serif";
                m = "normal " + .8 * k + "px cwTeX-Q-Kai-T,icons2,serif";
                y = .15 * k;
                g.textAlign = "center";
                g.textBaseline = "middle";
                g.setTransform(1, 0, 0, 1, p / 2, n / 2);
                F = [[0, n / 2 - .7 * k], [0, p / 2 - .7 * k], [0, n / 2 - .7 * k], [0, p / 2 - .7 * k]];
                if (3 != c)
                    if (0 == c)
                        for (w = 0; 4 > w; ++w)
                            F[w].push(h, (4 + w - I.fa) % 4 ? 1 : 0, -1, I.gb[w] + " ", 0, h, I.connected & 1 << w ? 0 : 4, 2, void 0 === I.ma[w] ? "-" : I.ma[w] / 100, 0, m, 1, -1, "00", y);
                    else if (F[0].push(h, 0, 2, I.gb[0] + " ", 0, h, 0, 2, void 0 === I.ma[0] ? "" : I.ma[0] / 100, 0),
                    F[1].push(h, 0, 2, void 0 === I.ma[1] ? "" : Ya((I.ma[1] - I.ma[0]) / 100), 0),
                    F[2].push(h, 0, 2, void 0 === I.ma[2] ? "" : Ya((I.ma[2] - I.ma[0]) / 100), 0),
                    F[3].push(h, 0, 2, void 0 === I.ma[3] ? "" : Ya((I.ma[3] - I.ma[0]) / 100), 0),
                    ~I.I & 512)
                        F[0].push(m, 1, -1, "00", y);
                    else
                        for (w = 0; 4 > w; ++w)
                            F[w].push(h, 0, 2, " " + I.Kb[w], 0);
                I.v[0] && a.apply(this, F[0]);
                g.rotate(270 * Math.PI / 180);
                I.v[1] && a.apply(this, F[1]);
                g.rotate(270 * Math.PI / 180);
                I.v[2] && a.apply(this, F[2]);
                g.rotate(270 * Math.PI / 180);
                I.v[3] && a.apply(this, F[3]);
                3 == c ? (g.setTransform(1, 0, 0, 1, p / 2, n / 2),
                g.fillStyle = "#FFF",
                a(0, 0, h, 0, 2, "\u5929\u9cf3", 0)) : 0 == c ? (g.setTransform(1, 0, 0, 1, p / 2, n / 2 - .75 * k / 2),
                g.fillStyle = "#FFF",
                h = "normal " + 1.7 * k + "px cwTeX-Q-Kai-T,icons2,serif",
                m = I.xa[0],
                a(0, 0, h, 0, ~~(m / 4) & 1 ? 4 : 3, "\u6771\u5357\u897f\u5317".substr(~~(m / 4), 1), 0, h, 0, m % 4 == (I.I & 16 ? 2 : 3) ? 4 : 2, m % 4 + 1, 0, h, 1, -1, "\u5c40", 0),
                w = (p - 2.8 * k) / 2,
                g.beginPath(),
                g.moveTo(-w, .75 * +k),
                g.lineTo(+w, .75 * +k),
                h = g.createLinearGradient(-w, 0, +w, 0),
                h.addColorStop("0.0", "rgba(15,15,15,0)"),
                h.addColorStop("0.5", "rgba(15,15,15,1)"),
                h.addColorStop("1.0", "rgba(15,15,15,0)"),
                g.strokeStyle = h,
                g.lineWidth = 1,
                g.stroke(),
                g.setTransform(1, 0, 0, 1, p / 2, n / 2 + 1.7 * k / 2 - .75 * k / 2 + .3 * k),
                h = "normal " + .75 * k + "px cwTeX-Q-Kai-T,icons2,serif",
                m = "normal " + .5 * k + "px cwTeX-Q-Kai-T,icons2,serif",
                y = .12 * k,
                p = N.Rb(b),
                a(0, 0, h, 0, p < (I.I & 16 ? 6 : 8) ? 4 : 2, p + " ", 0, m, 5, -1, "\ue805", y, h, 0, 2, I.xa[1], 0, m, 5, -1, "\ue804", y, h, 0, 2, I.xa[2], 0)) : (h = "normal bold " + .75 * k + "px sans-serif",
                g.setTransform(1, 0, 0, 1, p / 2, n / 2),
                g.fillStyle = "#FFF",
                a(0, 0, h, 0, 2, 4 == I.a ? "\u5929\u9cf3" : na(I.I), 0));
                g.restore()
            },
            ka: function() {}
        }
    }();
    (function() {
        function a(a, f) {
            Zb.R(f || 1);
            if (c) {
                var b = c;
                delete cc()[b];
                c = void 0
            }
        }
        function f() {
            a(0, 2);
            c = dc(function() {
                c = void 0;
                Zb.R(0)
            }, 2E3)
        }
        var c = void 0;
        za(Zb.J.canvas, {
            touchstart: function() {
                Zb.R(1)
            },
            touchend: f,
            touchcancel: function() {
                Zb.R(0)
            },
            mouseover: a,
            mouseout: f
        })
    }
    )();
    var Vb = function() {
        function a(a) {
            var n = Vb.J;
            0 < d && 0 < l && n.clearRect(b, g, d, l);
            var k = b = g = d = l = 0, h;
            for (h in f) {
                var m = f[h];
                if (0 > m.t)
                    m.t += a;
                else if (m.t < m.na) {
                    var y = m.i
                      , p = ~~(m.Sa + (m.uc - m.Sa) * m.t / m.na)
                      , w = ~~(m.wb + (m.vc - m.wb) * m.t / m.na)
                      , z = y.ia
                      , x = y.ta;
                    y.wa.complete && y.wa.height && (n.globalAlpha = m.s,
                    n.drawImage(y.wa, y.Xa, y.Ya, z, x, p, w, z, x));
                    m.t += a;
                    d && l ? (p < b ? (d += b - p,
                    b = p) : z += p - b,
                    d < z && (d = z),
                    w < g ? (l += g - w,
                    g = w) : x += w - g,
                    l < x && (l = x)) : (b = p,
                    g = w,
                    d = z,
                    l = x)
                } else
                    m.ob && m.ob.ga(m.lc),
                    delete f[h];
                ++k
            }
            n.globalAlpha = 1;
            k || (ec(),
            c && c.length && (c.shift()(),
            ++k));
            return k
        }
        var f, c, b, g, d, l;
        return {
            J: A("CANVAS", Sb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            aa: !1,
            oa: function() {
                c = [];
                f = {};
                b = g = d = l = 0;
                var a = Vb.J;
                a.clearRect(0, 0, a.canvas.width + 1, a.canvas.height + 1)
            },
            L: function(b, d, k, g, m, y, l, w, z, x) {
                if (Vb.aa)
                    return b instanceof Function ? b() : d instanceof fc ? d.ga(k) : z && z.ga(x),
                    0;
                var h = cc();
                h.mc || (h.mc = a);
                if (b instanceof Function)
                    return c.push(b),
                    0;
                h = f[$a++] = {};
                h.t = -b;
                d instanceof fc ? (z = d,
                x = k,
                h.na = 0) : (h.s = w,
                h.i = l,
                void 0 === l && pb("animation src undefined"),
                h.Sa = d,
                h.wb = k,
                h.uc = g,
                h.vc = m,
                0 < y ? (d = g - d,
                k = m - k,
                h.na = ~~(Math.sqrt(d * d + k * k) / (Q[0] * y))) : h.na = -y);
                z && (h.ob = z,
                h.lc = x);
                return b + h.na
            },
            Da: function() {
                for (; a(1E4); )
                    ;
            }
        }
    }();
    var Xb = function() {
        for (var a = [], f = 0; 4 > f; ++f)
            a[f] = A("DIV", Sb, "nosel tbl ts0 rot" + Xa(3, 270 * f % 360), {}, {
                fontSize: "55%",
                pointerEvents: "none",
                textAlign: "right",
                display: "none"
            });
        return {
            oa: function() {
                for (var c = 0; 4 > c; ++c)
                    a[c].style.display = "none"
            },
            Bc: function(c, b) {
                var f = a[c];
                f.style.display = "";
                f.innerHTML = '<div class=tbc style="vertical-align:bottom;">x' + b + "</div>"
            },
            O: function() {
                for (var c = 0; 4 > c; ++c) {
                    var b = a[c].style;
                    b.width = b.height = ~~(Math.min(Q[c], U[c]) / t) + "px";
                    var f = -(0 == c ? Q[0] : gc[c]);
                    b.left = ~~((R[96 + 2 * c] + -(1 == c ? U[1] : hc[c])) / t) + "px";
                    b.top = ~~((R[97 + 2 * c] + f) / t) + "px"
                }
            }
        }
    }()
      , kc = function() {
        function a() {
            return '<span style="pointer-events:none;vertical-align:middle;">\u69d3</span>'
        }
        function f() {
            for (var a in v)
                if (!(~a & 262144) && (v[a].parentNode.style.visibility = c[a] ? "" : "hidden",
                c[a] && 2 === c[a].length)) {
                    var f = c[a][0]
                      , d = c[a][1];
                    O.Na(v[a], "", 4, .8, f, d);
                    c[2098693] = c[a] = {
                        tag: "N",
                        type: f >> 2 == d >> 2 ? 1 : 3,
                        hai0: f,
                        hai1: d
                    }
                }
        }
        var c = {};
        return {
            pc: function(b, g) {
                if (1 == I.a || 4 == I.a) {
                    var d = 0;
                    c = {};
                    b & 32 && (c[2359814] = {
                        tag: "REACH"
                    });
                    b & 16 && (c[2359816] = {
                        tag: "N",
                        type: 7
                    });
                    b & 64 && (c[2359815] = {
                        tag: "N",
                        type: 9
                    });
                    b & 128 && (c[2098693] = c[401412] = {
                        tag: "N",
                        type: 10
                    },
                    ++d);
                    0 < N.Rb(0) && 4 > N.bb - V[16] - V[17] - V[18] - V[19] && (b |= 2);
                    var l = [];
                    if (b & 2)
                        for (var p, n = (I.I & 16 ? 16 : 17) - 1; p = R[2048 | n]; --n)
                            if (void 0 !== p.Ga.fb) {
                                for (var k = 0; k < V[32].length && V[32][k] != p.Ga.fb; ++k)
                                    ;
                                k < V[32].length && l.push({
                                    tag: "N",
                                    type: 5,
                                    hai: V[32][k]
                                })
                            }
                    if (b & 2)
                        if (p = V[48],
                        V[64])
                            n = "" + V[64],
                            k = g >> 2,
                            4 == p[k] && (p[k] -= 4,
                            "" + tb.eb(p) == n && l.push({
                                tag: "N",
                                type: 4,
                                hai: 4 * k
                            }),
                            p[k] += 4);
                        else
                            for (k = 0; 34 > k; ++k)
                                4 > p[k] || l.push({
                                    tag: "N",
                                    type: 4,
                                    hai: 4 * k
                                });
                    l.length || (b &= -3);
                    l.length && (c[2098693] = c[401414] = l[0],
                    O.Na(v[401414], a() + " ", 4, .8, l[0].hai),
                    l.shift(),
                    ++d);
                    l.length && (c[2098693] = c[401418] = l[0],
                    O.Na(v[401418], a() + " ", 4, .8, l[0].hai),
                    l.shift(),
                    ++d);
                    l.length && (c[2098693] = c[401417] = l[0],
                    O.Na(v[401417], a() + " ", 4, .8, l[0].hai),
                    l.shift(),
                    ++d);
                    f();
                    v.S(512);
                    v[2098693].parentNode.style.visibility = 1 == d ? "" : "hidden";
                    v[3670533].parentNode.style.visibility = 1 < d ? "" : "hidden";
                    1 == d && (v[2098693].innerHTML = b & 128 ? "\u62d4\u304d" : b & 2 ? "\u30ab\u30f3" : "?");
                    b && ic(8, 0, 0);
                    return b
                }
            },
            nc: function(b, g) {
                if (1 == I.a || 4 == I.a) {
                    for (var d = ~~(g / 4 / 9), l = ~~(g / 4) % 9, p = {}, n = 0; n < V[32].length; ++n) {
                        var k = V[32][n]
                          , h = ~~(k / 4);
                        if (3 > d && 2 <= l && h == 9 * d + l - 2 || 3 > d && 1 <= l && h == 9 * d + l - 1 || h == 9 * d + l || 3 > d && 7 >= l && h == 9 * d + l + 1 || 3 > d && 6 >= l && h == 9 * d + l + 2)
                            h |= N.pb(k) << 8,
                            p[h] ? p[h].push(k) : p[h] = [k]
                    }
                    n = 0;
                    c = {
                        2360326: {
                            tag: "N"
                        }
                    };
                    b & 8 && (c[2360328] = {
                        tag: "N",
                        type: 6
                    });
                    k = p[0 | 9 * d + l] || [];
                    h = p[256 | 9 * d + l] || [];
                    b & 2 && 3 == k.length + h.length && (O.Na(v[409604], a() + " ", 4, .8, (h.length ? h : k)[0]),
                    c[2098693] = c[409604] = {
                        tag: "N",
                        type: 2
                    },
                    ++n);
                    b & 1 && (1 == h.length && 2 == k.length ? (c[409606] = [k[0], k[1]],
                    c[409607] = [h[0], k[0]],
                    n += 2) : 2 <= k.length ? (c[409607] = [k[0], k[1]],
                    ++n) : 1 == h.length && 1 == k.length && (c[409607] = [h[0], k[0]],
                    ++n));
                    if (b & 4)
                        for (var m = 0; 3 > m; ++m) {
                            var y = (m & 1) << 8
                              , F = (m & 2) << 7;
                            (k = p[y | 9 * d + l - 2]) && (h = p[F | 9 * d + l - 1]) && (c[m ? 409614 : 409610] = [k[0], h[0]],
                            ++n);
                            (k = p[y | 9 * d + l - 1]) && (h = p[F | 9 * d + l + 1]) && (c[m ? 409613 : 409609] = [k[0], h[0]],
                            ++n);
                            (k = p[y | 9 * d + l + 1]) && (h = p[F | 9 * d + l + 2]) && (c[m ? 409612 : 409608] = [k[0], h[0]],
                            ++n)
                        }
                    c[409607] && !c[409606] && (c[409606] = c[409607],
                    delete c[409607]);
                    c[409614] && !c[409610] && (c[409610] = c[409614],
                    delete c[409614]);
                    c[409613] && !c[409609] && (c[409609] = c[409613],
                    delete c[409613]);
                    c[409612] && !c[409608] && (c[409608] = c[409612],
                    delete c[409612]);
                    f();
                    v.S(1024);
                    $b.l(0, v[2360326]);
                    v[2098693].parentNode.style.visibility = 1 == n ? "" : "hidden";
                    v[3671045].parentNode.style.visibility = 1 < n ? "" : "hidden";
                    1 == n && (v[2098693].innerHTML = b & 4 ? "\u30c1\u30fc" : b & 1 ? "\u30dd\u30f3" : b & 2 ? "\u30ab\u30f3" : "?");
                    b && ic(8, 0, 0)
                }
            },
            oc: function(a) {
                if (1 == I.a || 4 == I.a)
                    c = {
                        2360326: {
                            tag: "N"
                        }
                    },
                    a & 8 && (c[2360328] = {
                        tag: "N",
                        type: 6
                    }),
                    f(),
                    v.S(1024),
                    $b.l(0, v[2360326]),
                    v[2098693].parentNode.style.visibility = v[3671045].parentNode.style.visibility = "hidden",
                    a && ic(8, 0, 0)
            },
            K: function(a) {
                $b.ea();
                v.S(256);
                jc();
                4 == I.a ? H.Vb(c[a]) : Y.K(c[a])
            }
        }
    }();
    function lc(a) {
        var f = ~~a.m, c = f & 3, b;
        if (f & 4) {
            a[2] = 3;
            b = (f & 64512) >> 10;
            var g = b % 3;
            b = ~~(b / 3);
            b = 4 * (9 * ~~(b / 7) + b % 7);
            b = [b + 0 + ((f & 24) >> 3), b + 4 + ((f & 96) >> 5), b + 8 + ((f & 384) >> 7)];
            b.splice(0, 0, b.splice(g, 1)[0])
        } else
            f & 24 ? (a[2] = f & 16 ? 5 : 1,
            a[4] = (f & 96) >> 5,
            b = (f & 65024) >> 9,
            g = b % 3,
            b = 4 * ~~(b / 3),
            b = [b + 0, b + 1, b + 2, b + 3],
            a[4] = b.splice(a[4], 1)[0],
            b.splice(c ^ 3, 0, b.splice(g, 1)[0]),
            f & 16 && (b = [a[4]])) : f & 32 ? (a[2] = 10,
            b = [(f & 65280) >> 8]) : 0 == c ? (a[2] = 4,
            b = (f & 65280) >> 8 & -4,
            b = [b + 2, b + 0, b + 1, b + 3]) : (a[2] = 2,
            f = (f & 65280) >> 8,
            b = f & -4,
            b = [b + 0, b + 1, b + 2, b + 3],
            b.splice(f & 3, 1),
            b.splice(1 == c ? 3 : c ^ 3, 0, f));
        a[3] = c;
        a[0] = b
    }
    ;for (var v = function() {
        function a(a, c, b) {
            var d = v[a];
            b ? d.innerHTML = '<span class=nobr style="pointer-events:none;' + (v.o[a] ? "" : "color:#888;") + '">' + (v.o[a] ? "\ue803" : "\ue802") + c + "</span>" : (d.innerHTML = '<span style="pointer-events:none;' + (v.o[a] ? "" : "color:#888;") + '">' + c + "<br>" + (v.o[a] ? "\ue803" : "\ue802") + "</span>",
            d.parentNode.style.fontSize = "85%")
        }
        function f(c) {
            c && (v.o[c] = !v.o[c]);
            var b = M.desktop & 1;
            a(1183749, "\u9cf4\u304d\u306a\u3057", b);
            a(1183750, "\u81ea\u52d5\u7406\u724c", b);
            a(1183751, "\u4e0d\u8074\u5ba3\u8a00", b);
            a(1183752, "\u81ea\u52d5\u548c\u4e86", b);
            a(1183753, "\u30c4\u30e2\u5207\u308a", b);
            1183750 == c && v.o[1183750] && (V.vb(0),
            V.qb(0),
            V.kb())
        }
        function c(c) {
            c && (v.o[c] = !v.o[c]);
            a(1277961, "\u30c4\u30e2\u5207\u308a");
            a(1277957, "\u5f85\u3061");
            a(1277960, "\u624b\u724c");
            a(1212429, "\u724c\u5c71");
            M.check = M.check & -32 | (v.o[1277961] ? 0 : 1) | (v.o[1277957] ? 0 : 2) | (v.o[1277960] ? 0 : 4) | (v.o[1212429] ? 24 : 0);
            1212429 == c && (N.a = M.check & 24 ? 3 : ~~M.yama,
            0 == N.a && M.desktop && (N.a = 1),
            Hb());
            c && (3 == I.a && xb.Ia(0),
            2 == I.a && yb.sb())
        }
        function b(a) {
            for (var c = 1; c < arguments.length; ++c)
                arguments[c].parentNode.style.visibility = a
        }
        return {
            b: A("DIV", Kb, "nosel", {}, {
                position: "absolute",
                display: "none",
                color: "#FFF",
                fontFamily: "icons2,sans-serif",
                fontSize: "140%"
            }),
            a: 0,
            o: {},
            S: function(a) {
                v.a = 126976 == a ? v.a & 3840 : a & 126976 ? a | v.a & 3840 : a | v.a & 102400;
                a = v.a & 126976 ? v.a & 126976 : v.a & 3840;
                256 == a && 3 == I.a && (a = 2048);
                for (var d in v)
                    if (1572868 != d) {
                        var g = v[d];
                        g != v.b && g.tagName && (g.parentNode != v.b && (g = g.parentNode),
                        g.style.display = !a || ~d & a ? "none" : "")
                    }
                v[1572868].parentNode.style.display = v.a & 126976 ? "none" : "";
                d = M.desktop & 1;
                if (4096 == a || d)
                    f(),
                    b(1 == I.a && ~I.I & 1 ? "" : "hidden", v[495623]),
                    b("hidden", v[1183751]);
                32768 == a || 65536 == a ? (b(!kb && u.ab ? "hidden" : "", v[495623]),
                c()) : 256 == a && b("hidden", v[2360326]);
                mc.Ra && mc.Ra();
                if (1 == I.a && d) {
                    v[1572868].parentNode.style.display = "none";
                    a = [v[495623], v[1183749], v[1183750], v[1183752], v[1183753]];
                    for (d = 0; d < a.length; ++d)
                        a[d].parentNode.style.display = "";
                    f()
                }
            },
            O: function() {
                v.b.style.left = Sb.offsetLeft + "px";
                v.b.style.top = Sb.offsetTop + "px";
                var a = ~~(R[82] / t)
                  , c = ~~(R[81] / t)
                  , b = ~~((R[82] - R[86] - Q[1]) / 4 / t)
                  , f = ~~((R[81] - R[33]) / 3 / t);
                3 == I.a && (Kb.offsetHeight < Kb.offsetWidth ? a = ~~(Qb / t) + ~~(.5 * b) : c = ~~(Rb / t) + f);
                var n = M.desktop & 1, k;
                for (k in v) {
                    var h = v[k];
                    if (h != v.b && h.parentNode) {
                        var m = h.style;
                        h.parentNode.parentNode == v.b && (m = h.parentNode.style);
                        var y = ((k & 3) >> 0) + 1
                          , F = (k & 12) >> 2;
                        n && 2360326 == k && (y = 1);
                        m.left = a - b * y + "px";
                        m.top = c - f * F + "px";
                        m.width = b + "px";
                        m.height = f + "px";
                        m.fontSize = "";
                        h.style.border = "solid 1px " + (k & 131072 ? "#222" : "rgba(0,0,0,0.25)");
                        k & 131072 ? (h.classList.remove("ts0"),
                        h.classList.add("bgb")) : (h.classList.remove("bgb"),
                        h.classList.add("ts0"))
                    }
                }
                if (1 == I.a) {
                    if (k = [v[1183749], v[1183753], v[1183752], v[1183751], v[1183750], v[495623]],
                    n)
                        for (b = ~~(Qb / t / 8),
                        f = ~~(U[1] / t),
                        a = (R[80] + 13 * Q[4]) / t,
                        c = Sb.offsetHeight - 1 * f,
                        n = 0; n < k.length; ++n)
                            m = k[n].parentNode.style,
                            m.left = a - b * (n + 1) + "px",
                            m.top = c + "px",
                            m.width = b + "px",
                            m.height = f + "px",
                            m.fontSize = "50%",
                            k[n].classList.remove("bgb"),
                            k[n].classList.add("ts0"),
                            k[n].style.borderStyle = "none"
                } else
                    3 == I.a && (v[1574918].style.borderColor = v[1574917].style.borderColor = v[1572868].style.borderColor = 3 == I.a ? "#444" : "rgba(0,0,0,0.25)",
                    Kb.offsetHeight < Kb.offsetWidth && (n = ~~(1.5 * f),
                    b = ~~(.5 * b),
                    Kb.offsetWidth < a && (a = ~~Kb.offsetWidth,
                    b = Kb.offsetWidth - ~~(Qb / t)),
                    m = v[1574918].parentNode.style,
                    m.width = b + "px",
                    m.height = n + "px",
                    m.left = a - 1 * b + "px",
                    m.top = c - f - 2 * n + "px",
                    m = v[1574917].parentNode.style,
                    m.width = b + "px",
                    m.height = n + "px",
                    m.left = a - 1 * b + "px",
                    m.top = c - f - 1 * n + "px",
                    m = v[1572868].parentNode.style,
                    m.width = b + "px",
                    m.height = f + "px",
                    m.left = a - 1 * b + "px",
                    m.top = c - f - 0 * n + "px"))
            },
            ka: function(a, b) {
                switch (a) {
                case 2360326:
                    $b.Jb();
                    break;
                case 409606:
                case 409607:
                case 409604:
                case 409610:
                case 409609:
                case 409608:
                case 409614:
                case 409613:
                case 409612:
                case 401414:
                case 401418:
                case 401417:
                case 401412:
                case 2359815:
                case 2360328:
                case 2359816:
                case 2359814:
                case 2098693:
                    kc.K(a);
                    break;
                case 3670533:
                    v.S(8192);
                    break;
                case 3671045:
                    v.S(16384);
                    break;
                case 1572868:
                    4 == I.a ? H.Hb(1) : v.S(3 == I.a ? 32768 : 2 == I.a ? 65536 : 4096);
                    break;
                case 3678213:
                case 3686405:
                case 1675268:
                    v.S(126976);
                    break;
                case 1574917:
                    xb.Ia(1);
                    break;
                case 1574918:
                    xb.Ia(-1);
                    break;
                case 1802246:
                    v.S(126976);
                    for (var d = "", g = 0; 4 > g; ++g)
                        I.v[g] && (d += '<div class=A id="#tw-' + g + '"><span class=dan' + ~~I.Ua[g] + ">" + ga[~~I.Ua[g]] + "</span>" + (1800 < I.Qa[g] ? "R" + ~~I.Qa[g] : "") + " " + I.v[g] + "</div>");
                    !1 === v.o[14] && (d += '<div class=A id="#tw-4">(\u533f\u540d\u8868\u793a ON)</div>');
                    !0 === v.o[14] && (d += '<div class=A id="#tw-4">(\u533f\u540d\u8868\u793a OFF)</div>');
                    C.ha(d, "font-size:75%;text-align:left;", 0);
                    break;
                case 1736718:
                    v.S(126976);
                    xb.Ub();
                    break;
                case 1736714:
                    v.S(126976);
                    xb.Tb();
                    break;
                case 1183749:
                case 1183750:
                case 1183751:
                case 1183752:
                case 1183753:
                    f(a);
                    break;
                case 1277961:
                case 1277957:
                case 1277960:
                case 1212429:
                    c(a);
                    break;
                case 425995:
                    switch (I.a) {
                    case 3:
                        C.l('<div style="text-align:left;font-size:75%;">' + (mb ? "- \u53f3/\u5de6\u30af\u30ea\u30c3\u30af \u2026 \u9032\u3080/\u623b\u308b<br>" : "") + "- \u30dc\u30bf\u30f3/\u30af\u30ea\u30c3\u30af\u9577\u62bc\u3057 \u2026 \u30aa\u30fc\u30c8\u30ea\u30d4\u30fc\u30c8<br>- \u30bb\u30f3\u30bf\u30fc\u30d1\u30cd\u30eb \u2026 \u5f97\u70b9\u5dee\u8868\u793a<br></div>")
                    }
                    break;
                case 495623:
                    if (u.ab) {
                        history.back();
                        break
                    }
                case 11:
                    v.S(126976),
                    -1 != I.fa && (u.ab || (delete u.log,
                    delete u.wg),
                    xb.da(),
                    yb.da(),
                    I.da()),
                    v.o[14] = !1,
                    I.a = 0,
                    u.log ? (I.a = 3,
                    Y.ea()) : u.wg ? I.a = 2 : (v.b.style.display = "none",
                    I.a = 1),
                    Hb(),
                    b ? H.l({
                        tag: "SPLASH"
                    }) : u.log ? (xb.kc(u.log),
                    v.O(),
                    S.O()) : u.wg ? (Y.nb(),
                    Y.K({
                        tag: "HELO",
                        name: "NoName",
                        sx: "M"
                    })) : (Y.nb(),
                    H.l({
                        tag: 495623 == a ? "AUTOLOGIN" : "LOGIN"
                    }))
                }
            }
        }
    }(), nc = [2360326, "&times;", 2098693, "", 3670533, "\ue800 \u9cf4\u304d", 3671045, "\ue800 \u9cf4\u304d", 1572868, "", 3678213, "&times;", 3686405, "&times;", 1675268, "&times;", 2359816, "\u30c4\u30e2", 2360328, "\u30ed\u30f3", 2359814, "\u30ea\u30fc\u30c1", 401412, "\u62d4\u304d", 2359815, "\u6d41\u5c40", 401414, "", 401418, "", 401417, "", 409610, "", 409609, "", 409608, "", 409614, "", 409613, "", 409612, "", 409606, "", 409607, "", 409604, "\u30ab\u30f3", 1574918, "\ue806", 1574917, "\ue807", 425995, "\uff1f", 495623, "\u7d42\u4e86", 1183749, "", 1183750, "", 1183751, "", 1183752, "", 1183753, "", 1277961, "", 1277957, "", 1277960, "", 1212429, "", 1802246, '\u8996 <span style="font-size:25%;vertical-align:50%;">\u25bc</span>', 1736714, '\u5c40 <span style="font-size:25%;vertical-align:50%;">\u25bc</span>', 1736718, '\u5de1 <span style="font-size:25%;vertical-align:50%;">\u25bc</span>'], oc = 0; oc < nc.length; oc += 2) {
        var pc = nc[oc + 0]
          , qc = A("DIV", v.b, "tbl", {}, {
            position: "absolute"
        });
        v[pc] = A("DIV", qc, "tbc " + (pc & 2097152 ? " bblink" : ""), {
            id: "m" + pc,
            innerHTML: nc[oc + 1]
        }, {
            textAlign: "center",
            verticalAlign: "middle",
            pointerEvents: "none"
        });
        pc & 262144 && (qc.style.display = "none");
        pc & 524288 && (v[pc].style.borderRadius = "0.6em")
    }
    var rc = M.check;
    v.o[1277961] = !(rc & 1);
    v.o[1277957] = !(rc & 2);
    v.o[1277960] = !(rc & 4);
    v.o[1212429] = !!(rc & 24);
    v[1572868].classList.add("cblink");
    var $b = function() {
        var a, f, c, b, g, d, l = A("DIV", null, "nosel tbl ts0", {}, {
            position: "absolute",
            pointerEvents: "none",
            fontFamily: "sans-serif",
            textAlign: "right"
        });
        l.innerHTML = '<div class=tbc style="vertical-align:bottom;padding:0 0.1em;"></div>';
        return {
            zc: function(a) {
                f = c = a
            },
            l: function(c, n, k) {
                l.firstChild.innerHTML = "";
                n || (n = Z.ok);
                $b.O(n, k);
                1 == I.a && (("BUTTON" == d.tagName ? d.parentNode : d instanceof fc ? Sb : d).appendChild(l),
                a = 0 > c ? -c + 1E3 : (c || (la(I.hb, I.I) ? 3E3 : 5E3)) + f + 1E3,
                g = a - 1E3,
                b = a - 1E3,
                cc().count = function(d) {
                    if (0 > b)
                        return $b.ea(),
                        !1;
                    a -= d;
                    if (~~(1 + b / 1E3) == ~~(1 + a / 1E3))
                        return !0;
                    b = a;
                    0 <= a ? (0 > c ? ic(1E3 > a ? 0 : 3, 0, 0) : 3E3 > a && ic(7, 0, 0),
                    l.firstChild.innerText = ~~(a / 1E3)) : $b.Jb();
                    return !0
                }
                )
            },
            O: function(a, c) {
                a && (d = a);
                d instanceof fc && ~d.Y & 1 && (d = void 0);
                if (!d)
                    for (var b = 13; (d = R[1024 | b]) && !(d.s && R[1024 | b].Y & 1); --b)
                        ;
                d && (b = l.style,
                b.fontSize = db.style.fontSize,
                d instanceof fc ? (b.left = ~~((c ? d.c : d.B) / t) + "px",
                b.top = ~~((c ? d.h : d.H) / t) + "px",
                b.width = ~~(Q[4] / t) + "px",
                b.height = ~~((U[4] + T[4]) / t) + "px") : (b.left = d.offsetLeft + "px",
                b.top = d.offsetTop + "px",
                b.width = (d.offsetWidth || parseInt(d.parentNode.style.width)) + "px",
                b.height = (d.offsetHeight || parseInt(d.parentNode.style.height)) + "px"))
            },
            Jb: function() {
                if (d instanceof fc)
                    I.Fb(d.X);
                else if (d && d.name) {
                    if (!d.disabled)
                        H[d.name]()
                } else
                    $b.ea(),
                    kc.K(2360326)
            },
            Sb: function() {
                f < c && (f += 1E3)
            },
            yc: function() {
                return d
            },
            ea: function() {
                l.parentNode && (a < f && (f = 1E3 * ~~(0 > a ? 0 : a / 1E3)),
                g < a && $b.Sb(),
                b = -1,
                l.parentNode.removeChild(l),
                d = void 0)
            }
        }
    }();
    for (var S = {
        b: A("DIV", Sb, "", {}, {
            position: "absolute"
        }),
        O: function() {
            var a = S.b.style
              , f = Q[4] / t
              , c = ~~Math.min(~~(2 * f), (Kb.offsetHeight - Rb / t) / 2);
            3 == I.a && (c = 0);
            if (mb || c < f || M.desktop & 1)
                S.b.style.display = "none";
            else
                switch (a.top = Sb.offsetTop + (R[81] + U[4] + T[4]) / t + "px",
                a.display = "",
                ~~M.cptype) {
                default:
                case 1:
                    var b = Math.min(2.25 * c, Kb.offsetHeight - Sb.offsetHeight);
                    a.width = Sb.offsetWidth + "px";
                    a.height = b + "px";
                    a.background = "linear-gradient(to bottom, rgba(0,0,0,1.0) 0%,rgba(0,0,0,1.0) 50%,rgba(24,24,24,1.0) 100%)";
                    a.borderTop = a.borderBottom = "solid 1px #222";
                    for (var g = 0; 13 >= g; ++g)
                        S[g].style.display = "none";
                    for (g = 20; 28 >= g; ++g)
                        a = S[g].style,
                        a.top = "0px",
                        a.width = 3 * f + "px",
                        a.height = b - c + "px",
                        a.display = "";
                    S.Cb(0);
                    S[30].style.display = S[31].style.display = "none";
                    a = S[30].style;
                    a.width = "50%";
                    a.height = 1 * c + "px";
                    a.display = "";
                    a.marginTop = b - c + "px";
                    a = S[31].style;
                    a.width = "50%";
                    a.height = 1 * c + "px";
                    a.display = "";
                    a.marginTop = b - c + "px";
                    S[30].innerHTML = "&#12296;";
                    S[31].innerHTML = "&#12297;";
                    S[30].name = "CP_L";
                    S[31].name = "CP_R";
                    break;
                case 2:
                    b = 2 * f;
                    a.width = 7.5 * b + 1 + "px";
                    a.height = 2 * c + 1 + "px";
                    a.background = "";
                    a.borderTop = a.borderBottom = "none";
                    for (var d = V[32], d = d && d.length ? 3 * ~~(d.length / 3) + 1 : 13, g = 20; 28 >= g; ++g)
                        S[g].style.display = "none";
                    for (g = 0; 13 >= g; ++g)
                        a = S[g].style,
                        a.width = b + 1 + "px",
                        a.height = c + 1 + "px",
                        a.top = c * (g & 1) + "px",
                        a.left = R[80] / t + f * g + "px",
                        a.display = g < d ? "" : "none";
                    S[30].style.display = S[31].style.display = "none"
                }
        },
        Ta: function(a, f, c) {
            var b = R[1024 | a];
            if (b && (b.la(f, c, !0),
            !(b.Y & 8))) {
                c = !!(b.Y & 1) && b.s;
                if (!S[20].style.display) {
                    var g = Q[4] / t;
                    b.Y & 6 && S.Gb(R[80] / t + g * (a + .5))
                }
                g = "";
                b.Y & 4 ? (c && $b.O(b),
                g = c ? "#060" : "#600") : b.Y & 2 && (g = c ? "#030" : "#300");
                !g && f & 6 || (S[0 + a].style.backgroundColor = S[24].style.backgroundColor = g)
            }
        },
        Gb: function(a) {
            var f = Q[4] / t;
            a < R[80] / t + 0 * f && (a += 3 * f);
            R[80] / t + 14 * f < a && (a -= 3 * f);
            a = (~~((a - R[80] / t) / f) + .5) * f + R[80] / t;
            for (var c = 20; 28 >= c; ++c)
                S[c].style.left = ~~(a + 3 * f * (c - 24 - .5)) + "px";
            return a
        },
        Cb: function(a) {
            S.Gb(~~(S[24].offsetLeft + S[24].offsetWidth / 2 + Q[4] / t * a))
        }
    }, sc = 0; 13 >= sc; ++sc)
        S[sc] = A("DIV", S.b, "", {}, {
            position: "absolute",
            border: "solid 1px #333",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.15) 100%)"
        }),
        A("DIV", S[sc], "", {}, {
            width: "50%",
            height: sc & 1 ? "25%" : "20%",
            backgroundColor: sc & 1 ? "#333" : "#555",
            pointerEvents: "none"
        });
    S[13].parentNode.removeChild(S[13]);
    for (sc = 20; 28 >= sc; ++sc)
        S[sc] = A("DIV", S.b, "", {}, {
            position: "absolute",
            borderLeftStyle: "none",
            borderLeft: "solid 1px #333",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.10) 100%)"
        }),
        A("DIV", S[sc], "", {}, {
            position: "absolute",
            marginLeft: "50%",
            width: "1px",
            height: "50%",
            pointerEvents: "none",
            background: "linear-gradient(to bottom, rgba(195,0,0,1.0) 0%,rgba(255,0,0,1.0) 10%,rgba(0,0,0,0) 100%)"
        });
    S[28].style.borderRight = "solid 1px #333";
    S[30] = A("BUTTON", S.b, "gray", {
        name: "CPda"
    }, {
        background: "none"
    });
    S[31] = A("BUTTON", S.b, "gray", {
        name: "CPok"
    }, {
        background: "none"
    });
    S[30].style.borderRight = "none";
    function ic() {}
    var ec = function() {
        var a = {};
        return function(f, c, b) {
            if (arguments.length) {
                for (var g in a)
                    if (a[g] == f && b - .008 < g && g < b + .008)
                        return;
                a[b] = f;
                ic(f, c, b)
            } else
                a = {}
        }
    }();
    r.AudioContext = r.AudioContext || r.webkitAudioContext;
    (function() {
        function a(a) {
            function c() {
                this.removeEventListener("touchend", c, !1);
                this.removeEventListener("mousedown", c, !1);
                a()
            }
            xa(cb, "touchend", c);
            xa(cb, "mousedown", c)
        }
        if (AudioContext) {
            var f = new AudioContext, c, b, g = {}, d = function() {
                ic = function(a, b, d) {
                    !M.nose && !Vb.aa && 0 != a && c && g[a] && (b = f.createBufferSource(),
                    b.buffer = g[a],
                    b.connect(c),
                    b.start ? b.start(f.currentTime + d) : b.noteOn(f.currentTime + d))
                }
            }, l = 0, p = function(a, c) {
                var b = new XMLHttpRequest;
                b.open("GET", a, !0);
                b.responseType = "arraybuffer";
                b.onload = function() {
                    200 == this.status && f.decodeAudioData(this.response, function(a) {
                        g[c] = a;
                        --l || d()
                    })
                }
                ;
                b.send()
            };
            eb && A("AUDIO", db, "", {}, {
                position: "absolute",
                display: "none"
            });
            a(function() {
                c = f.createGain ? f.createGain() : f.createGainNode();
                c.connect(f.destination);
                c.gain.value = .5;
                b = f.createGain ? f.createGain() : f.createGainNode();
                b.connect(f.destination);
                b.gain.value = 0
            });
            for (var n = 1; 25 > n; ++n)
                2 != n && (++l,
                p("http://tenhou.net/3/snd/" + Xa(2, n) + ".wav", n))
        } else {
            var k = {};
            k[1] = k[8] = k[9] = k[10] = k[12] = k[13] = k[14] = k[15] = k[16] = k[17] = k[18] = k[19] = k[20] = k[21] = k[22] = k[23] = k[24] = 1;
            for (var h = 5, p = function() {
                this.currentTime && (this.removeEventListener("timeupdate", arguments.callee, !1),
                this.pause(),
                xa(this, "timeupdate", function() {
                    this.endTime < this.currentTime && (this.pause(),
                    this.Eb = 0)
                }),
                --h || (ic = function(a, c, b) {
                    M.nose || Vb.aa || 0 == a || setTimeout(function() {
                        for (var c = 0; 5 > c && (h = (h + 1) % 5,
                        !m[h].paused && k[m[h].Eb] && !k[a]); ++c)
                            ;
                        5 != c && (c = m[h],
                        c.paused || c.pause(),
                        c.currentTime = 2 * a,
                        c.endTime = 2 * a + (1 == a ? 3 : 1),
                        c.Eb = a,
                        c.play())
                    }, 1E3 * b)
                }
                ))
            }, m = [], n = 0; 5 > n; ++n)
                m[n] = A("AUDIO", db, "", {
                    src: "/3/snd/se.m4a"
                }, {
                    position: "absolute",
                    display: "none"
                }),
                m[n].endTime = 0,
                m[n].Eb = 0,
                m[n].volume = .7,
                xa(m[n], "timeupdate", p);
            a(function() {
                for (var a = 0; a < m.length; ++a)
                    m[a].play()
            })
        }
    }
    )();
    if (r.gr && r.gr.eworx && r.gr.eworx.AVAudioSessionAdapter) {
        var tc = gr.eworx.AVAudioSessionAdapter;
        (new tc).setCategoryWithOptions(tc.Categories.PLAYBACK, tc.CategoryOptions.MIX_WITH_OTHERS, function() {}, function() {})
    }
    ;var Wb = function() {
        var a = {
            M: [0, 12, 14, 16, 14, 14, 20, 22, 18, 0, 9, 0],
            F: [0, 13, 15, 17, 15, 15, 21, 23, 19, 0, 9, 0]
        };
        a[""] = a.C = a.M;
        var f = {};
        return {
            b: A("DIV", Kb, "", {}, {
                position: "absolute",
                pointerEvents: "none",
                top: "0px"
            }),
            L: function(c, b, g) {
                if (!Vb.aa) {
                    var d = da[b];
                    if (d) {
                        var l = 10 * -c
                          , p = A("SPAN", Wb.b, "tsv nosel", {
                            innerHTML: d
                        }, {
                            position: "absolute",
                            fontWeight: "bold",
                            color: "#FFF",
                            opacity: 0,
                            whiteSpace: "nowrap"
                        })
                          , n = Sb.offsetWidth / 40
                          , k = ~~(R[64 + 2 * c] / t) + Sb.offsetLeft
                          , h = ~~(R[65 + 2 * c] / t) + Sb.offsetTop
                          , m = p.style
                          , y = $a++;
                        g & 1 && (f[y] = !0);
                        ~g & 2 && (m.display = "none");
                        cc()[y] = function(d) {
                            if (!p.parentNode)
                                return 0;
                            if (0 > l)
                                return l += d,
                                0 < l && (l = 0),
                                1;
                            0 == l && g & 4 && (ic(a[I.Sa[c]][b], c, 0),
                            ++l);
                            l += d;
                            if (250 > l)
                                return m.opacity = l / 250,
                                m.fontSize = n * (4 + (250 - l) / 250 * 4) + "px",
                                m.left = k - p.offsetWidth / 2 + "px",
                                m.top = h - p.offsetHeight / 2 + "px",
                                1;
                            if (750 > l) {
                                if (1 == m.opacity)
                                    return 1;
                                m.opacity = 1;
                                m.fontSize = 4 * n + "px";
                                m.left = k - p.offsetWidth / 2 + "px";
                                m.top = h - p.offsetHeight / 2 + "px";
                                return 1
                            }
                            return f[y] ? (l -= d,
                            1) : 1250 > l ? (m.opacity = (1250 - l) / 500,
                            1) : (p.parentNode.removeChild(p),
                            0)
                        }
                    }
                }
            },
            da: function() {
                for (; Wb.b.firstChild; )
                    Wb.b.removeChild(Wb.b.firstChild)
            },
            zb: function() {
                f = {}
            }
        }
    }();
    var uc = function() {
        function a() {
            f = 0
        }
        var f = 0, c;
        za(r, {
            touchstart: a,
            touchend: a,
            touchcancel: a,
            mousedown: a,
            mouseup: a,
            mouseover: a,
            mouseout: a,
            keydown: a,
            blur: a
        });
        return {
            Fc: function(a) {
                f || (f = a);
                a = 18E5 - (a - f);
                0 > a && (location.reload(),
                f = a = 0);
                2E4 > a ? (c || (c = A("DIV", Sb, "ts0", {}, {
                    position: "absolute",
                    left: "0px",
                    top: "0px"
                })),
                c.innerText = "ENTERING POWERSAVING MODE " + ~~(a / 1E3)) : c && (c.parentNode.removeChild(c),
                c = null)
            }
        }
    }();
    var xb = function() {
        function a(c) {
            if (c) {
                var b = /<([a-zA-Z0-9]+)[^>]*>|[^<]+|<\/(.*)>/g
                  , d = b.exec(c);
                if (d) {
                    var k = {};
                    k.tag = d[1];
                    for (var f = / ([a-zA-Z0-9]+)="([^"]*)"/g, g; g = f.exec(d[0]); )
                        k[g[1]] = g[2];
                    for (; (d = b.exec(c)) && !d[2]; )
                        k.childNodes || (k.childNodes = []),
                        k.childNodes.push(d[1] ? a(d[0]) : ~~d[0]);
                    return k
                }
            }
        }
        function f(a) {
            for (var c = -1, b = l; 0 <= --b; ) {
                switch (g[b].tag) {
                case "INIT":
                    return b + 1;
                case "N":
                    a = g[b][2];
                    if (2 == a || 4 == a || 5 == a)
                        c = -1;
                    break;
                case "D":
                case "E":
                case "F":
                case "G":
                    if (-1 != c)
                        return c;
                    break;
                case "T":
                case "U":
                case "V":
                case "W":
                    a || (c = b)
                }
                a = !1
            }
            return -1
        }
        function c(c, b) {
            b && (g = a(b).childNodes);
            if (b && g) {
                for (var k = !1, f = 0; 40 > f; ++f) {
                    var h = M["log" + f];
                    try {
                        h = JSON.parse(h)
                    } catch (ua) {
                        continue
                    }
                    if (h.log == c) {
                        k = !0;
                        break
                    }
                }
                k || (v.o[14] = void 0);
                for (var n, f = 0; f < g.length; ++f) {
                    switch (g[f].tag) {
                    case "SHUFFLE":
                        n = N.tc(g[f].seed);
                        break;
                    case "GO":
                        Y.pa(g[f])
                    }
                    if ("UN" == g[f].tag)
                        break
                }
                for (d = []; f < g.length; ++f) {
                    var h = g[f]
                      , p = [0, 0, 0, 0]
                      , x = f;
                    switch (h.tag) {
                    case "INIT":
                        d.push(f);
                        break;
                    case "RYUUKYOKU":
                        if ("ron3" == h.type)
                            for (k = 0; 4 > k; ++k)
                                h["hai" + k] && (p[k] = 6);
                        break;
                    case "AGARI":
                        for (; h = g[f],
                        p[~~h.who] = h.who == h.fromWho ? 7 : 6,
                        h.paoWho && (p[~~h.paoWho] = 11),
                        f + 1 < g.length && "AGARI" == g[f + 1].tag; ++f)
                            ;
                        break;
                    case "N":
                        lc(h);
                        p[~~h.who] = h[2];
                        break;
                    default:
                        xb.lb(h)
                    }
                    if (p[0] || p[1] || p[2] || p[3])
                        g.splice(x, 0, {
                            tag: "VOICE",
                            type: p
                        }),
                        ++f
                }
                if (n)
                    for (f = 0; f < d.length; ++f) {
                        var h = g[d[f]], k = q(h.seed), k = 6 == k[3] && 0 == k[4], J;
                        n && (J = h[5] = n(~~h.oya, k));
                        if (J)
                            if (k) {
                                if (I.I & 16)
                                    for (D = 0; 6 > D; ++D)
                                        J[D] |= 1280;
                                for (k = 0; k < (I.I & 16 ? 3 : 4); ++k) {
                                    for (D = 0; 4 > D; ++D)
                                        J[34 * k + D] |= 1280;
                                    for (; 34 > D; ++D)
                                        J[34 * k + D] |= k + 1 << 8
                                }
                                for (var p = 0, D = d[f] + 1; D < g.length && "INIT" != g[D].tag; ++D)
                                    h = g[D],
                                    "N" != h.tag || 4 != h[2] && 2 != h[2] && 5 != h[2] && 10 != h[2] || (k = ~~h.who,
                                    J[p / 4 * 34 + p % 4 ^ 1] |= k + 1 << 8,
                                    ++p)
                            } else {
                                for (var ca = !1, x = 13 * (I.I & 16 ? 3 : 4), p = 0, k = -1, D = d[f] + 1; D < g.length && "INIT" != g[D].tag; ++D)
                                    switch (h = g[D],
                                    h.tag) {
                                    case "N":
                                        ca = 4 == h[2] || 2 == h[2] || 5 == h[2] || 10 == h[2];
                                        break;
                                    case "T":
                                    case "U":
                                    case "V":
                                    case "W":
                                        k = h.tag.charCodeAt(0) - 84,
                                        J[ca ? p++ ^ 1 : J.length - 1 - x++] |= k + 1 << 8,
                                        ca = !1
                                    }
                                for (h = I.I & 16 ? 3 : 4; x < J.length - 14 - p; ++x)
                                    k = (k + 1) % h,
                                    J[J.length - 1 - x] |= k + 1 << 8;
                                for (; x < J.length; ++x)
                                    J[J.length - 1 - x] |= 1280
                            }
                    }
                for (f = 0; f < g.length; ++f)
                    yb.rb(u.tw, g[f]);
                for (f = 0; "INIT" != g[f].tag; ++f)
                    switch (g[f].tag) {
                    case "BYE":
                    case "SHUFFLE":
                    case "GO":
                        break;
                    case "UN":
                    case "TAIKYOKU":
                        Y.pa(g[f]);
                        break;
                    default:
                        throw console.log(f, g[f]);
                    }
                l = d[~~u.ts];
                delete u.ts
            } else
                C.l(ka[2003], 1, function() {
                    u.ab ? history.back() : delete u.log
                })
        }
        function b(a) {
            var c = a.split("-");
            if (4 != c.length)
                return a;
            if (120 == c[3].charCodeAt(0)) {
                a = parseInt(c[3].substr(1, 4), 16);
                var b = parseInt(c[3].substr(5, 4), 16)
                  , d = parseInt(c[3].substr(9, 4), 16)
                  , f = 0;
                "2010041111gm" <= c[0] && (f = ~~("3" + c[0].substr(4, 6)) % (34 - ~~c[0].substr(9, 1) - 1));
                c[3] = Xa(4, (a ^ b ^ n[f + 0]).toString(16)) + Xa(4, (b ^ n[f + 0] ^ d ^ n[f + 1]).toString(16))
            }
            return c.join("-")
        }
        var g, d, l, p = {
            D: !0,
            E: !0,
            F: !0,
            G: !0,
            T: !0,
            U: !0,
            V: !0,
            W: !0,
            N: !0,
            RYUUKYOKU: !0,
            VOICE: !0
        }, n = [22136, 52719, 55146, 42104, 59591, 46934, 9248, 28891, 49597, 52974, 62844, 4015, 18311, 50730, 43056, 17939, 64838, 38145, 27008, 39128, 35652, 63407, 65535, 23473, 35164, 55230, 27536, 4386, 64920, 29075, 42617, 17294, 18868, 2081];
        return {
            lb: function(a) {
                var c = a.tag;
                if (1 < c.length) {
                    var b = a.tag.charCodeAt(1);
                    48 <= b && 57 >= b && (a[0] = ~~c.substr(1),
                    a.tag = c.substr(0, 1))
                }
                return a
            },
            kc: function(a) {
                a = b(a);
                Va("https://tenhou.net/3/mjlog2xml.cgi?" + a, function(b) {
                    c(a, b)
                }, function() {
                    c(a)
                })
            },
            Ia: function(a) {
                if (g) {
                    if (0 == arguments.length) {
                        for (var c = l; 0 <= c && "INIT" != g[c].tag; --c)
                            ;
                        if (0 <= c)
                            return xb.Lb(g, c, l - c)
                    } else if (0 >= a) {
                        var b = f(0 > a);
                        if (-1 == b)
                            return;
                        if (0 > a && l == b + 1)
                            for (b = b - 1 == d[0] ? g.length - 1 : b - 2; "AGARI" == g[b - 1].tag; --b)
                                ;
                        for (var k = [], c = 0; c < d.length && !(b < d[c]); ++c)
                            ;
                        for (var n = d[c - 1], c = n; c < b; ++c)
                            k.push(g[c]);
                        Y.pa(xb.Lb(g, n, b - n));
                        l = b;
                        1 == b - n && vc.set()
                    } else if (Z.ok && !Z.ok.disabled) {
                        H.ok();
                        return
                    }
                    if (!(g.length <= l))
                        for (Vb.Da(),
                        c = !1; !c && l < g.length; ++l) {
                            switch (g[l].tag) {
                            case "REACH":
                                2 != g[l].step && (c = !0);
                                break;
                            case "AGARI":
                                l + 1 < g.length && "AGARI" != g[l + 1].tag && (c = !0);
                                break;
                            default:
                                p[g[l].tag] && (c = !0)
                            }
                            Y.pa(g[l])
                        }
                }
            },
            da: function() {
                l = 0;
                g = void 0
            },
            Ub: function(a, c) {
                if (g && g.length)
                    if (a)
                        l = ~~c + 1,
                        xb.Ia(0);
                    else {
                        for (var b = -1, d = l; 0 <= d && (-1 == b && "T" == g[d].tag && (b = d),
                        "INIT" != g[d].tag); --d)
                            ;
                        if (!(0 > d)) {
                            var f = ""
                              , k = 0;
                            for (++d; d < g.length; ++d) {
                                json = g[d];
                                if ("INIT" == json.tag)
                                    break;
                                "T" == json.tag && (f += '<div class=A id="#tj-' + d + '"><span style="position:relative;">' + (d == b ? '<div class=gray style="position:absolute;font-size:75%;top:25%;left:-1.25em;">&#8594;</div>' : "") + ++k + "\u5de1\u76ee</span></div>")
                            }
                            C.ha(f, "", 0)
                        }
                    }
            },
            Tb: function(a, c) {
                if (g && g.length)
                    if (a)
                        l = ~~c + 1,
                        xb.Ia(0);
                    else {
                        for (var b = "", d = -1, f = "", k = 0; k < g.length; ++k) {
                            var h = g[k];
                            switch (h.tag) {
                            case "INIT":
                                d = q(h.seed);
                                f = d[0];
                                f = "\u6771\u5357\u897f\u5317".substr(~~(f / 4), 1) + (f % 4 + 1) + "\u5c40" + d[1] + "\u672c\u5834";
                                d = k;
                                break;
                            case "RYUUKYOKU":
                                var n = ia[h.type]
                                  , b = b + ('<div class=A id="#ts-' + d + '">' + f + "<br>\u6d41\u5c40" + (n ? " " + n : "") + "</div>");
                                break;
                            case "AGARI":
                                var n = ~~h.who
                                  , p = ~~h.fromWho
                                  , h = q(h.ten)
                                  , b = b + ('<div class=A id="#ts-' + d + '">' + f + "<br>" + B(n == p ? "\u30c4\u30e2:" : "\u30ed\u30f3:") + I.v[n] + " " + h[1] + (n != p ? "<br>" + B("\u653e\u9283:") + I.v[p] : "") + "</div>")
                            }
                        }
                        C.ha(b, "font-size:70%;text-align:left;", 0)
                    }
            },
            sb: function(a, c) {
                var b = ~~c;
                if (4 == b)
                    v.o[14] = !v.o[14];
                else if (4 > b) {
                    for (var d = 0; d < g.length; ++d)
                        yb.rb(b, g[d]);
                    u.tw = (u.tw + b) % 4
                }
                for (d = 0; d < g.length; ++d)
                    if ("UN" == g[d].tag) {
                        Y.pa(g[d]);
                        Tb.R();
                        xb.Ia(0);
                        break
                    }
            },
            Lb: function(a, c, b) {
                var d = a[c];
                if ("INIT" != d.tag)
                    return null;
                for (var f = [], k = q(d.hai0); k.length; )
                    f[k.pop()] = 1;
                for (k = q(d.hai1); k.length; )
                    f[k.pop()] = 2;
                for (k = q(d.hai2); k.length; )
                    f[k.pop()] = 3;
                for (k = q(d.hai3); k.length; )
                    f[k.pop()] = 4;
                for (var h = q(d.seed), g = q(d.ten), k = q(d.chip), m = ~~d.oya, n = d[5], l = [[], [], [], []], p = [[], [], [], []], Za = -1; c < a.length && b; ++c,
                --b)
                    switch (d = a[c],
                    d.tag) {
                    case "D":
                    case "E":
                    case "F":
                    case "G":
                        var L = d.tag.charCodeAt(0) - 68
                          , Da = d[0] == Za
                          , Za = d[0];
                        f[Za] = 0;
                        Da && p[L].push(254);
                        p[L].push(Za);
                        break;
                    case "T":
                    case "U":
                    case "V":
                    case "W":
                        L = d.tag.charCodeAt(0) - 84;
                        Za = d[0];
                        f[Za] = L + 1;
                        break;
                    case "N":
                        for (var Za = -1, L = ~~d.who, Da = ~~d.m, jb = d[3], Cb = d[0], Ua = 0; Ua < Cb.length; ++Ua)
                            f[Cb[Ua]] = 0;
                        5 != d[2] && 4 != d[2] && 10 != d[2] && (jb = p[(L + jb) % 4],
                        jb.pop(),
                        254 == jb[jb.length - 1] && jb.pop());
                        if (5 == d[2]) {
                            for (Ua = 0; Ua < l[L].length && l[L][Ua] != (Da ^ 24); ++Ua)
                                ;
                            if (Ua == l[L].length)
                                throw console.log("Log2ReiniXML INVALID KAKAN");
                            l[L][Ua] = Da
                        } else
                            l[L].unshift(Da);
                        break;
                    case "REACH":
                        L = ~~d.who;
                        Da = ~~d.step;
                        2 == Da ? (d = q(d.ten),
                        d.length ? g = d : g[L] -= 10) : (1 == Da ? p[L].push(255) : (p[L].push(255),
                        g[L] -= 10),
                        ++h[2]);
                        break;
                    case "DORA":
                        h.push(~~d.hai)
                    }
                a = {
                    tag: "REINIT",
                    seed: "" + h,
                    ten: "" + g,
                    oya: m,
                    hai0: [],
                    hai1: [],
                    hai2: [],
                    hai3: []
                };
                for (c = 0; 136 > c; ++c)
                    f[c] && a["hai" + (f[c] - 1 & 3)].push(c);
                n && (a[5] = n);
                k.length && (a.chip = k);
                for (L = 0; 4 > L; ++L)
                    l[L].length && (a["m" + L] = l[L]);
                for (L = 0; 4 > L; ++L)
                    p[L].length && (a["kawa" + L] = p[L]);
                return a
            }
        }
    }();
    var wc = {}
      , O = function() {
        function a(a, c) {
            var d;
            if (2 == a && 99 == c)
                return O[4195];
            var f = O[4096 | 100 * a + c];
            f || (f = O[4096 | 100 * a + c] = xa(new Image, "load", Ub.tb));
            d = d || (99 == c ? "" : b);
            var k = Q[a];
            1 == a && 99 == c && (k = Q[0]);
            8 == a && 99 == c && (k = Q[0]);
            d = "http://p.mjv.jp/5/img/vieww" + a + Xa(2, c) + Xa(3, k) + d + ".png";
            f.src != d && (f.src = d);
            return f
        }
        function f(a, c, b) {
            for (var d = 3; d < arguments.length; ++d) {
                var f = arguments[d]
                  , h = f >> 8 & 7;
                O[f] = Aa(O[f] || {}, {
                    wa: a,
                    Xa: c % 10 * Q[h],
                    Ya: (U[h] + T[h]) * ~~(c / 10),
                    ia: Q[h],
                    ta: U[h] + T[h],
                    offsetX: 0,
                    offsetY: 0,
                    Mb: b
                });
                if (5 == h || 7 == h)
                    O[f].offsetY += U[h % 4] + T[h % 4] - (U[h] + T[h]);
                5 == h && (O[f].offsetX += Q[h % 4] - Q[h])
            }
        }
        function c(a, c, b, f, k) {
            for (var d = 5; d < arguments.length; ++d) {
                var g = arguments[d]
                  , n = g >> 8 & 7;
                wc[g] = Aa(wc[g] || {}, {
                    wa: a,
                    Xa: c,
                    Ya: b,
                    ia: f,
                    ta: k,
                    offsetX: xc[n],
                    offsetY: U[n] + T[n] - k
                });
                if (5 == n || 7 == n)
                    wc[g].offsetY += U[n % 4] + T[n % 4] - (U[n] + T[n]);
                5 == n && (wc[g].offsetX += Q[n % 4] - Q[n])
            }
        }
        var b, g;
        return {
            cb: xa(new Image, "load", Tb.R),
            Ac: function() {
                b = "000000ffffff000000";
                g = "000100070";
                ob(M.backgroundImage) ? (u.jb = !1,
                Tb.J.canvas.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.2) 100%),url('" + M.backgroundImage + "') center center /cover no-repeat") : (M.backgroundImage && M.backgroundImage.match(/^([0-9]{9})$/) && (g = M.backgroundImage),
                u.jb = !0,
                Tb.J.canvas.style.background = "");
                M.msk && M.msk.match(/^([0-9a-f]{6})$/) && (b = RegExp.$1 + b.substr(6));
                var d = "http://p.mjv.jp/3/img/bg" + (u.jb ? 0 : 9) + Xa(4, ~~Qb) + Xa(4, ~~Rb) + g + ".png";
                O.cb.src != d && (O.cb.src = d);
                f(a(5, 48), 0, -1, 1328);
                f(a(7, 48), 0, -1, 1840);
                for (var l = 0; 4 >= l; ++l) {
                    for (var d = a(l, 0), p = 0; 34 > p; ++p) {
                        var n = 10 * (~~(p / 9) + 1) + p % 9 + 1;
                        f(d, n - 10, p, l << 8 | n)
                    }
                    f(d, 0, 4, l << 8 | 51);
                    f(d, 10, 13, l << 8 | 52);
                    f(d, 20, 22, l << 8 | 53)
                }
                d = O[4096];
                f(d, 30, -1, 48, 560);
                f(d, 38, -1, 49, 561);
                f(d, 39, -1, 50, 562);
                d = O[4196];
                f(d, 30, -1, 304, 816);
                f(d, 38, -1, 305, 817);
                f(d, 39, -1, 306, 818);
                d = O[4296];
                f(d, 30, -1, 1584);
                f(d, 38, -1, 60, 572);
                d = O[4396];
                f(d, 38, -1, 316, 828);
                d = O[4496];
                f(d, 30, -1, 1084);
                f(d, 38, -1, 1073);
                f(d, 39, -1, 1074);
                for (l = 0; 8 > l; l += 2) {
                    d = a(l, 99);
                    p = Q[l] + T[l];
                    n = 0;
                    if (0 == l || 2 == l)
                        n = ~~(47 * p / 43);
                    if (4 == l || 6 == l)
                        n = ~~(24 * p / 43);
                    var k = ~~(T[l] / 12 * 5);
                    c(d, 0, 0, p - xc[l], n, l << 8 | 0);
                    c(d, 0, n - k, 2 * k, k, l << 8 | 3, l << 8 | 2)
                }
                var l = U[1] + T[1], p = 2 * ~~(47 * (Q[0] + T[0]) / 43), n = T[0] / 12, k = T[0] + ~~(5 * n), h, d = a(8, 99);
                h = 0;
                c(d, 0, h + p - U[0], k, U[0], 1, 513);
                c(d, 0, h + ~~(17 * n), k, U[0], 5, 517);
                c(d, 0, h, k, U[0] + ~~(12 * n), 4, 516);
                c(d, 0, h + p - U[1], k, U[1], 257, 769, 1281, 1793);
                c(d, 0, h + ~~(17 * n), k, U[1], 261, 773, 1285, 1797);
                c(d, 0, h, k, U[1] + ~~(12 * n), 260, 772, 1284, 1796);
                d = a(1, 99);
                h = 0;
                c(d, 0, h, k, l, 256, 768, 1280, 1792);
                c(d, 0, h + l - ~~(5 * n), 2 * ~~(5 * n), ~~(5 * n), 259, 771, 1283, 1795, 258, 770, 1282, 1794)
            },
            Na: function(a, c, b, f) {
                var d = O[4096 | 100 * b];
                if (d.complete || !d.height) {
                    var h = Q[b]
                      , g = U[b] + T[b]
                      , n = h * (arguments.length - 4)
                      , l = 1 * g;
                    a.innerHTML = c + "<canvas width=" + n + " height=" + l + ' style="width:' + n / t + "px;height:" + l / t + 'px;pointer-events:none;vertical-align:middle;"></canvas>';
                    n = a.getElementsByTagName("CANVAS")[0].getContext("2d");
                    n.clearRect(0, 0, n.canvas.width + 1, n.canvas.height + 1);
                    n.globalAlpha = f;
                    for (l = 4; l < arguments.length; ++l) {
                        var p = arguments[l], z;
                        N.pb(p) ? (z = 0,
                        p = ~~(p / 4 / 9)) : (p = N.Wa[p],
                        48 == p && (p = 40),
                        z = p % 10,
                        p = ~~(p / 10) - 1);
                        n.drawImage(d, z * h, p * g, h, g, h * (l - 4), 0, h, g)
                    }
                }
            }
        }
    }();
    var yb = function() {
        function a(a, c) {
            var b = c.split(",");
            8 == b.length ? b = [b[(0 + a) % 4 * 2 + 0], b[(0 + a) % 4 * 2 + 1], b[(1 + a) % 4 * 2 + 0], b[(1 + a) % 4 * 2 + 1], b[(2 + a) % 4 * 2 + 0], b[(2 + a) % 4 * 2 + 1], b[(3 + a) % 4 * 2 + 0], b[(3 + a) % 4 * 2 + 1]] : 16 == b.length && (b = [b[(0 + a) % 4 * 2 + 0], b[(0 + a) % 4 * 2 + 1], b[(1 + a) % 4 * 2 + 0], b[(1 + a) % 4 * 2 + 1], b[(2 + a) % 4 * 2 + 0], b[(2 + a) % 4 * 2 + 1], b[(3 + a) % 4 * 2 + 0], b[(3 + a) % 4 * 2 + 1], b[(0 + a) % 4 * 2 + 8], b[(0 + a) % 4 * 2 + 9], b[(1 + a) % 4 * 2 + 8], b[(1 + a) % 4 * 2 + 9], b[(2 + a) % 4 * 2 + 8], b[(2 + a) % 4 * 2 + 9], b[(3 + a) % 4 * 2 + 8], b[(3 + a) % 4 * 2 + 9]]);
            return b.join(",")
        }
        function f(a) {
            if (!g.length)
                return 0;
            c += a;
            if (c < b)
                return 1;
            a = g.shift();
            a.tag ? Y.pa(a) : b += a;
            return 1
        }
        var c, b, g = [], d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], l = ["", "", "", ""], p = ["", "", "", ""];
        return {
            rb: function(c, b) {
                if (!c)
                    return b;
                var d = b.tag
                  , f = d.charCodeAt(1);
                if (1 == d.length || 48 <= f && 57 >= f)
                    f = d.charCodeAt(0),
                    78 == f ? b.who = (4 + ~~b.who - c) % 4 : 68 <= f && 71 >= f ? b.tag = "DEFG".substr((4 + (f - 68) - c) % 4, 1) + d.substr(1) : 84 <= f && 87 >= f && (b.tag = "TUVW".substr((4 + (f - 84) - c) % 4, 1) + d.substr(1));
                else
                    switch (d) {
                    case "UN":
                        d = [b.n0, b.n1, b.n2, b.n3];
                        b.n0 = d[(c + 0) % 4];
                        b.n1 = d[(c + 1) % 4];
                        b.n2 = d[(c + 2) % 4];
                        b.n3 = d[(c + 3) % 4];
                        b.dan && (d = b.dan.split(","),
                        b.dan = d.concat(d.splice(0, c)).join(","));
                        b.rate && (d = b.rate.split(","),
                        b.rate = d.concat(d.splice(0, c)).join(","));
                        b.sx && (d = b.sx.split(","),
                        b.sx = d.concat(d.splice(0, c)).join(","));
                        b.rc && (d = b.rc.split(","),
                        b.rc = d.concat(d.splice(0, c)).join(","));
                        b.gold && (d = b.gold.split(","),
                        b.gold = d.concat(d.splice(0, c)).join(","));
                        break;
                    case "TAIKYOKU":
                    case "KANSEN":
                        b.oya = (4 + ~~b.oya - c) % 4;
                        break;
                    case "REINIT":
                        d = [b.m0, b.m1, b.m2, b.m3],
                        b.m0 = d[(c + 0) % 4],
                        b.m1 = d[(c + 1) % 4],
                        b.m2 = d[(c + 2) % 4],
                        b.m3 = d[(c + 3) % 4],
                        d = [b.kawa0, b.kawa1, b.kawa2, b.kawa3],
                        b.kawa0 = d[(c + 0) % 4],
                        b.kawa1 = d[(c + 1) % 4],
                        b.kawa2 = d[(c + 2) % 4],
                        b.kawa3 = d[(c + 3) % 4];
                    case "INIT":
                        b.oya = (4 + ~~b.oya - c) % 4;
                        d = [b.hai0, b.hai1, b.hai2, b.hai3];
                        b.hai0 = d[(c + 0) % 4];
                        b.hai1 = d[(c + 1) % 4];
                        b.hai2 = d[(c + 2) % 4];
                        b.hai3 = d[(c + 3) % 4];
                        d = b.ten.split(",");
                        b.ten = d.concat(d.splice(0, c)).join(",");
                        void 0 != b.chip && (d = b.chip.split(","),
                        b.chip = d.concat(d.splice(0, c)).join(","));
                        break;
                    case "REACH":
                        b.who = (4 + ~~b.who - c) % 4;
                        b.ten && (d = b.ten.split(","),
                        b.ten = d.concat(d.splice(0, c)).join(","));
                        break;
                    case "RYUUKYOKU":
                        d = [b.hai0, b.hai1, b.hai2, b.hai3];
                        b.hai0 = d[(c + 0) % 4];
                        b.hai1 = d[(c + 1) % 4];
                        b.hai2 = d[(c + 2) % 4];
                        b.hai3 = d[(c + 3) % 4];
                        b.sc = a(c, b.sc);
                        void 0 != b.owari && (b.owari = a(c, b.owari));
                        break;
                    case "AGARI":
                        b.who = (4 + ~~b.who - c) % 4;
                        b.fromWho = (4 + ~~b.fromWho - c) % 4;
                        void 0 != b.paoWho && (b.paoWho = (4 + ~~b.paoWho - c) % 4);
                        b.sc = a(c, b.sc);
                        void 0 != b.owari && (b.owari = a(c, b.owari));
                        break;
                    case "VOICE":
                        d = b.type;
                        b.type = d.concat(d.splice(0, c));
                        break;
                    case "BYE":
                        b.who = (4 + ~~b.who - c) % 4
                    }
                if (b.childNodes)
                    for (d = b.childNodes,
                    f = 0; f < d.length; ++f)
                        d[f].tag && yb.rb(c, d[f]);
                return b
            },
            ec: function(a) {
                if (a = a.childNodes) {
                    Vb.aa = !0;
                    for (var b = 0; b < a.length; ++b)
                        Y.pa(xb.lb(a[b]));
                    Y.pa({
                        tag: "INITBYLOG"
                    })
                } else
                    Vb.aa = !1;
                return 1
            },
            jc: function(a) {
                cc().Kc || (c = b = 0,
                cc().Kc = f);
                a = a.childNodes;
                for (var d = 0; d < a.length; ++d)
                    a[d].tag && xb.lb(a[d]);
                Array.prototype.push.apply(g, a);
                return 1
            },
            qc: function() {
                for (var a = 0; a < d.length; ++a)
                    d[a] = 0;
                for (a = 0; 4 > a; ++a)
                    p[a] = l[a] = ""
            },
            da: function() {
                for (; g.length; )
                    g.pop()
            },
            sb: function(a, b) {
                if (a) {
                    var c = ~~b;
                    4 == c ? v.o[14] = !v.o[14] : 4 > c && (u.tw = (u.tw + c) % 4)
                }
                yb.da();
                I.da();
                Y.nb();
                Y.K({
                    tag: "HELO",
                    name: "NoName",
                    sx: "M"
                })
            },
            Zb: function(a) {
                var b = "" + V[48 | a];
                if (p[a] != b && (p[a] = b,
                V[64 | a] = tb.eb(V[48 | a]),
                b = "" + V[64 | a],
                l[a] != b)) {
                    l[a] = b;
                    for (a = 0; a < d.length; ++a)
                        d[a] = 0;
                    for (b = 0; 4 > b; ++b)
                        if (V[64 | b])
                            for (a = 0; a < V[64 | b].length; ++a)
                                d[V[64 | b][a]] = 1;
                    for (a = 0; a < R.qa.length; ++a)
                        b = R.qa[a],
                        b.i && b.la && b.la(-1025, d[b.i.Mb] ? 1024 : 0, !0)
                }
            },
            Jc: function(a) {
                a.i && a.la && a.la(-1025, d[a.i.Mb] ? 1024 : 0, !0)
            }
        }
    }();
    var Z = {};
    function yc(a, f) {
        for (var c = [a], b = f || {}; c.length; ) {
            a = c.pop();
            for (var g = 0; g < a.childNodes.length; ++g)
                c.push(a.childNodes[g]);
            a.id ? b[a.id] = a : a.name && (b[a.name] = a)
        }
        Z = b
    }
    var H = function() {
        var a, f = [], c = {
            SPLASH: 1,
            LOGIN: 1,
            LOBBY: 1,
            STORE: 1
        };
        return {
            b: null,
            l: function(b) {
                H.b ? "RYUUKYOKU" == a.tag && "OWARI" == b.tag || "AGARI" == a.tag && "OWARI" == b.tag || "AGARI" == a.tag && "AGARI" == b.tag ? f.push(b) : H.ea(b) : (a = b,
                H.b = A("DIV", Sb, "tbc", {}, {
                    position: "relative",
                    textAlign: "center",
                    verticalAlign: "middle"
                }),
                H.b.innerHTML = '<div style="background-color:rgba(0,0,0,0.85);color:#FFF;border:solid 1px #444;padding:1em 0.5em;"></div>',
                H.O(),
                H[a.tag](a, H.b.firstChild))
            },
            O: function() {
                if (H.b) {
                    var b = ~~(Q[1] / t);
                    if (b) {
                        c[a.tag] && (b = 0);
                        var f = H.b.style;
                        f.paddingLeft = b + "px";
                        f.paddingRight = ~~(Sb.offsetWidth - Qb / t + b) + "px"
                    }
                }
            },
            ea: function(a) {
                function b() {
                    for (var b in Z)
                        delete Z[b];
                    H.b && (H.b.parentNode.removeChild(H.b),
                    H.b = null,
                    Z = {});
                    a instanceof Function ? a() : a && H.l(a);
                    mc.Ra && mc.Ra()
                }
                H.b && "none" != H.b.style.display ? cc().Nc = zc(b) : b()
            },
            da: function() {
                f = []
            },
            nop: function() {},
            ok: function(b) {
                nb(!0, "ok");
                $b.ea();
                f.length ? H.ea(f.shift()) : "TRAINING" == a.tag ? H.Gc(b) : "SPLASH" == a.tag ? v.ka(11) : "LOGIN" == a.tag || "AUTOLOGIN" == a.tag ? (M.gpid ? (Y.K({
                    tag: "HELO",
                    name: M.uname || "NoName",
                    sx: M.sx || "M",
                    gpid: M.gpid
                }),
                M.removeItem("gpid")) : ("ID########-########" != Z.uname.value && Gb("uname", Z.uname.value, "NoName"),
                Y.K({
                    tag: "HELO",
                    name: M.uname || "NoName",
                    sx: M.sx || "M"
                })),
                nb(!0, 0)) : "OWARI" == a.tag ? (2 != I.a || u.ab || delete u.wg,
                v.ka(495623)) : "NINTEI" == a.tag ? H.Bb() : (1 == I.a && Y.K({
                    tag: "NEXTREADY"
                }),
                3 == I.a && xb.Ia(1))
            },
            exit: function() {
                v.ka(495623)
            }
        }
    }();
    Aa(H, function() {
        function a(a, b) {
            return a ? '<span style="color:' + (0 < a ? "#0FF" : "#F00") + ';">' + (0 < a ? "+" : "") + a + (void 0 != b ? b : "") + "</span>" : ""
        }
        function f(b, c, f, g) {
            for (var d = b.sc ? q(b.sc) : [], h = [], m = 0; 4 > m; ++m)
                h[m] = '<span style="font-weight:bold;color:#888;">' + I.gb[m] + "</span> ",
                d.length || (h[m] += ga[I.Ua[m]] + (1800 > I.Qa[m] ? "" : ' <span style="color:#888;">R</span>' + ~~I.Qa[m]) + "<br>"),
                h[m] += '<span style="font-weight:bold;color:#CCC;">' + Qa(I.v[m]) + "</span><br>";
            m = 2.4;
            if (8 == d.length || 16 == d.length)
                h[0] += 100 * d[0] + (d[1] ? " " + a(100 * d[1]) : ""),
                h[1] += 100 * d[2] + (d[3] ? " " + a(100 * d[3]) : ""),
                h[2] += 100 * d[4] + (d[5] ? " " + a(100 * d[5]) : ""),
                h[3] += 100 * d[6] + (d[7] ? " " + a(100 * d[7]) : "");
            16 == d.length && (++m,
            h[0] += "<br>" + d[8] + "\u679a" + (d[9] ? " " + a(d[9], "\u679a") : ""),
            h[1] += "<br>" + d[10] + "\u679a" + (d[9] ? " " + a(d[11], "\u679a") : ""),
            h[2] += "<br>" + d[12] + "\u679a" + (d[9] ? " " + a(d[13], "\u679a") : ""),
            h[3] += "<br>" + d[14] + "\u679a" + (d[9] ? " " + a(d[15], "\u679a") : ""));
            d = "";
            b.ba && (d = q(b.ba),
            d = B("\ue805") + d[0] + " " + B("\ue804") + d[1]);
            return '<table cellpadding=0 cellspacing=0 width=100% style="text-align:center;"><tr><td rowspan=1 style="width:33%;height:' + m / 2 + 'em;font-family:icons2,sans-serif;">' + d + '</td><td rowspan=2 style="width:34%;"><div id=sc2 style="height:' + 1 * m + "em;padding:0.2em 0;" + (I.v[2] ? 'border:solid 1px #222;">' + h[2] : '">') + '</div></td><td rowspan=1 style="width:33%;height:' + m / 2 + 'em;" class=gray>' + na(I.I) + '</td></tr><tr><td rowspan=2><div id=sc3 style="height:' + 1 * m + "em;padding:0.2em 0;" + (I.v[3] ? 'border:solid 1px #222;">' + h[3] : '">') + '</div></td><td rowspan=2><div id=sc1 style="height:' + 1 * m + "em;padding:0.2em 0;" + (I.v[1] ? 'border:solid 1px #222;">' + h[1] : '">') + '</div></td></tr><tr><td rowspan=2><div id=sc0 style="height:' + 1 * m + "em;padding:0.2em 0;" + (I.v[0] ? 'border:solid 1px #222;">' + h[0] : '">') + '</div></td></tr><tr><td rowspan=1 id=info0 style="height:' + m / 2 + 'em;">' + (c || "") + '</td><td rowspan=1 id=info2 style="height:' + m / 2 + 'em;">' + (g || "") + '</td></tr><tr><td></td><td rowspan=1 id=info1 style="position:relative;">' + (f || "") + "</td><td></td></tr></table>"
        }
        function c(b, c) {
            return I.v[c].length ? '<tr><td align=center style="border:solid 1px #222;padding:0.5em;">' + Qa(I.v[c]) + '<table cellpadding=0 cellspacing=0 align=center><tr><td align=right style="width:6em;">' + 100 * b[2 * c + 0] + '</td><td align=right style="width:5em;">' + a(b[2 * c + 1].toFixed(1)) + "</td>" + (16 == b.length ? '<td align=right style="width:4em;">' + a(b[2 * c + 8], "\u679a") + "</td>" : "") + '<td style="width:3em;"></td></tr></table></td></tr>' : ""
        }
        function b(a, b) {
            for (var c, d = 0; c = Z["yaku" + d]; ++d)
                c.childNodes[0].style.opacity = c.childNodes[1].style.opacity = 0;
            Z.sc0.style.opacity = Z.sc1.style.opacity = Z.sc2.style.opacity = Z.sc3.style.opacity = Z.total.style.opacity = 0;
            Z.ok.disabled = !0;
            var f = !!a.doraHaiUra;
            f && (Z.info2.style.opacity = 0);
            var g = !!a.yakuman
              , m = -(g ? 3E3 : 750)
              , l = 0;
            cc().Lc = function(a) {
                if (0 > m)
                    return m += a,
                    0 < m && (m = 0),
                    1;
                0 == m && ic(g && 0 == l ? 1 : 11, 0, 0);
                var c = Math.min(1, m / (g ? 3E3 : 600))
                  , h = Z["yaku" + l];
                h.childNodes[0].style.opacity = h.childNodes[1].style.opacity = c;
                l == d - 1 && (f && (Z.info2.style.opacity = c),
                Z.sc0.style.opacity = Z.sc1.style.opacity = Z.sc2.style.opacity = Z.sc3.style.opacity = Z.total.style.opacity = c);
                m += a;
                1 == c && (l++,
                m = -(f && l == d - 1 ? 1200 : 250));
                return l < d ? 1 : (b(),
                0)
            }
        }
        var g = {
            TAIKYOKU: "\u5c0d\u5c40",
            SAIKAI: "\u518d\u958b",
            KANSEN: "\u89c0\u6230"
        };
        return {
            TAIKYOKU: function(a, b) {
                var c = "TAIKYOKU" == a.tag;
                b.innerHTML = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">' + g[a.tag] + "</div>" + f(a, "", c ? '<button name=ok style="padding:0 2em;">OK</button>' : '<button disabled style="font-size:150%">' + decodeURIComponent(a.msg || "WAIT") + "</button>");
                yc(b);
                c && $b.l(-1E4)
            },
            AGARI: function(a, c) {
                var d = "";
                ic(10, 0, 0);
                a.ten = q(a.ten);
                a.chip = q(a.chip);
                for (var g = a.who != a.fromWho, k = 0, h = 0; h < a.chip.length; h += 2)
                    k += a.chip[h + 1];
                var k = k ? k + B(g ? "\u679a" : "\u679a\u2200") : "", m;
                m = g ? a.ten[1] + B("\u70b9") : ja[(I.I & 16 ? 0 : 2) + (I.fa == a.who ? 1 : 0)][a.ten[1]] + B(I.fa == a.who ? "\u70b9\u2200" : "\u70b9");
                var d = d + '<div id=total style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:250%;">'
                  , l = [];
                if (a.yakuman) {
                    a.yakuman = q(a.yakuman);
                    d += B("\u5f79\u6eff") + m + k;
                    for (h = 0; h < a.yakuman.length; h += 1)
                        l.push([ba[a.yakuman[h]], 2 * h < a.chip.length ? a.chip[2 * h + 1] + B("\u679a") : ""]);
                    for (h *= 2; h < a.chip.length; h += 2)
                        l.push([ba[a.chip[h + 0]], a.chip[h + 1] + B("\u679a")])
                } else {
                    a.yaku = q(a.yaku);
                    for (var F = ha[a.ten[2]], w = 0, h = 0; h < a.yaku.length; h += 2)
                        w += a.yaku[h + 1];
                    if (30 == a.ten[0] && 4 == w || 60 == a.ten[0] && 3 == w)
                        !g && I.I & 16 ? a.ten[1] == (I.fa == a.who ? 8E3 : 6E3) && (F = ha[1]) : a.ten[1] == (I.fa == a.who ? 12E3 : 8E3) && (F = ha[1]);
                    d += (F ? "" : a.ten[0] + B("\u7b26") + w + B("\u98dc")) + B(F) + m + k;
                    for (g = h = 0; h < a.yaku.length; h += 2)
                        k = a.yaku[h + 1] + B("\u98dc"),
                        g < a.chip.length && a.yaku[h + 0] == a.chip[g + 0] && (k += a.chip[g + 1] + B("\u679a"),
                        g += 2),
                        l.push([ba[a.yaku[h + 0]], k])
                }
                d += '</div><table cellpadding=0 cellspacing=0 style="width:100%;font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:150%;"><tr>';
                h = 4 > l.length ? 0 : Math.ceil(l.length / 2);
                for (g = 0; g < l.length; ++g) {
                    if (0 == g || g == h)
                        d += "<td width=50% align=center valign=top><table cellpadding=0 cellspacing=0>";
                    d += "<tr id=yaku" + g + ' style="">';
                    d += '<td align=left style="position:relative;">' + l[g][0] + "</td>";
                    d += '<td align=left style="position:relative;">\u3000' + l[g][1] + "</td>";
                    d += "</tr>";
                    if (g == h - 1 || g == l.length - 1)
                        d += "</table></td>"
                }
                d += "</tr></table>";
                l = q(a.doraHai);
                for (h = a.doraHaiUra ? q(a.doraHaiUra) : []; 5 > l.length; )
                    l.push(136);
                for (; 5 > h.length; )
                    h.push(136);
                d += f(a, "", '<button name=ok style="width:100%;padding:0 1em;">OK</button>', "");
                c.innerHTML = d;
                yc(c);
                O.Na(Z.info0, "", 0, 1, l[0], l[1], l[2], l[3], l[4]);
                O.Na(Z.info2, "", 0, 1, h[0], h[1], h[2], h[3], h[4]);
                3 != I.a && b(a, function() {
                    Z.ok.disabled = !1;
                    a.owari || $b.l(-5E3)
                })
            },
            RYUUKYOKU: function(a, b) {
                b.innerHTML = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">' + (a.type ? ia[a.type] : "\u6d41\u5c40") + "</div>" + f(a) + '<button name=ok style="padding:0 2em;">OK</button>';
                yc(b);
                2 != I.a || a.owari || (Z.ok.disabled = !0);
                a.owari || $b.l(-5E3)
            },
            OWARI: function(a, b) {
                I.da();
                Tb.R();
                var d;
                d = a.sc;
                d = d.split(",");
                for (var f = 0; f < d.length; ++f)
                    d[f] = Number(d[f]);
                var g, f = [0, 1, 2, 3];
                for (g = 1; 4 > g; ++g)
                    if (!(d[2 * f[g - 1] + 1] >= d[2 * f[g] + 1])) {
                        var h = f[g];
                        f[g] = f[g - 1];
                        f[g - 1] = h;
                        g = 0
                    }
                g = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">\u7d42\u5c40</div><table cellpadding=0 cellspacing=0 width=75% align=center style="text-align:center;">' + c(d, f[0]);
                g += c(d, f[1]);
                g += c(d, f[2]);
                g += c(d, f[3]);
                g += "</table>";
                cc().xc = Ac(1500);
                b.innerHTML = g + '<button name=ok style="padding:0 2em;">OK</button>';
                yc(b)
            }
        }
    }());
    H.KANSEN = H.SAIKAI = H.TAIKYOKU;
    Aa(H, function() {
        function a(a) {
            var b = Z.panes.childNodes
              , c = b.length;
            g = (g + a + c) % c;
            for (a = 0; a < c; ++a)
                b[a].style.display = a == g ? "" : "none";
            Z.paneDisp.innerHTML = b[g].firstChild.innerHTML + B(" / \u8a2d\u5b9a")
        }
        function f() {
            N.a = ~~M.yama;
            0 == N.a && M.desktop && (N.a = 1);
            Hb();
            I.da();
            I.connected = 15;
            I.UN({
                tag: "UN",
                n0: "COM",
                n1: "COM",
                n2: "COM",
                n3: "COM",
                sx: ",,,"
            });
            I.oa({
                tag: "REINIT",
                seed: "2,1,1,5,5,57",
                ten: "123,234,345,456",
                oya: "3",
                hai0: "1,3,6,16,21,41,49,53,75,116,117,121,135",
                hai1: "1,3,6,16,21,41,49,53,75,116,117,121,135",
                kawa0: "46,125,82,128,73,94,66,130,131,55",
                kawa1: "108,120,11,74,76,50,42,78,67,70",
                kawa2: "119,32,29,65,2,104,5,126,38,124",
                kawa3: "122,127,4,112,107,77,129,69,109,106,123"
            });
            I.fa = 0;
            M.desktop & 1 ? (v.b.style.display = "",
            v[1572868].innerHTML = "\ue800",
            v.S(126976)) : v.b.style.display = "none"
        }
        function c(a) {
            Gb("hideid", ~~a.target.checked, 0)
        }
        function b(a) {
            Gb("nose", ~~a.target.checked, 0)
        }
        var g = 0
          , d = ["Default", "3TAP", "2TAP"]
          , l = ["\u56de\u8ee2", "\u7e26\u753b\u9762", "\u6a2a\u753b\u9762"]
          , p = ["Default", "\u3042\u308a", "\u306a\u3057"]
          , n = {
            iH: 0,
            iS: 10,
            iV: 7,
            hR: 0,
            hG: 0,
            hB: 0
        };
        return {
            CONFIG: function(d, g) {
                Tb.J.canvas.style.visibility = "";
                f();
                var m;
                m = '<div id=paneDisp style="font-size:125%;pointer-events:none;">\u3000</div><hr><div id=panes style="height:12em;">' + ('<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">\u74b0\u5883</span><div class=select-wrapper><button name=sco></button></div><br>' + B("\u203b\u30a2\u30d7\u30ea\u7248\u3067\u306e\u307f\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u3059<br>") + "<br><input type=checkbox id=cfgSelShowID /><label class=bth for=cfgSelShowID>\u914d\u4fe1ID\u4fdd\u8b77</label><br>" + B("\u203b\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306eID\u5165\u529b\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059<br>") + "</div>");
                m += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">\u74b0\u5883</span><div class=select-wrapper><button name=cpt></button></div><br>' + B("\u203b\u7e26\u753b\u9762\u306e\u307f\u3067\u8868\u793a\u3055\u308c\u307e\u3059<br>") + "<br><input type=checkbox id=cfgNoSE /><label class=bth for=cfgNoSE>SE\u306a\u3057</label><br></div>";
                m += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">\u74b0\u5883</span><div class=select-wrapper><button name=yam></button></div><br><br><br><div class=select-wrapper><button name=dtp></button></div><br>' + B("\u203b\u300c\u9cf4\u304d\u306a\u3057\u300d\u4ed6\u304c\u5e38\u6642\u624b\u724c\u4e0b\u306b\u8868\u793a\u3055\u308c\u307e\u3059<br>") + "</div>";
                m += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">\u5353</span><input type=checkbox id=cfgUseDefaultIMG /><label class=bth for=cfgUseDefaultIMG>\u6a19\u6e96\u306e\u753b\u50cf</label><br><br><br><div id=cfgUseDefaultIMG1><div class=select-wrapper><button name=iH style="width:4em;"></button></div><div class=select-wrapper><button name=iS style="width:4em;"></button></div><div class=select-wrapper><button name=iV style="width:4em;"></button></div><br></div><div id=cfgUseDefaultIMG0>\u753b\u50cfURL:' + B("(.jpg|.png|.gif)") + '<input name=cfgBGIMG style="width:100%;font-size:125%;"/><br></div></div>';
                g.innerHTML = m + '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">\u724c</span><br><div class=bth>\u724c\u80cc\u8272:</div><br><div class=select-wrapper><button name=hR style="width:4em;"></button></div><div class=select-wrapper><button name=hG style="width:4em;"></button></div><div class=select-wrapper><button name=hB style="width:4em;"></button></div><br></div></div><hr><button name=cfgPrev class=ra1 style="width:33%;">&laquo;</button><button name=cfgNext class=ra2 style="width:33%;">&raquo;</button><button name=cfgClose style="width:34%;">CLOSE</button>';
                yc(g);
                Z.cfgSelShowID.checked = !!M.hideid;
                Z.cfgNoSE.checked = !!M.nose;
                Z.sco.disabled = !kb;
                xa(Z.cfgBGIMG, "change", H["#iV"]);
                xa(Z.cfgSelShowID, "change", c);
                xa(Z.cfgNoSE, "change", b);
                xa(Z.cfgUseDefaultIMG, "change", H["#iV"]);
                ob(M.backgroundImage) ? Z.cfgBGIMG.value = M.backgroundImage : Z.cfgUseDefaultIMG.checked = !0;
                H["#sco"]();
                H["#yam"]();
                H["#cpt"]();
                H["#hB"]();
                H["#iV"]();
                H["#dtp"]();
                a(0)
            },
            hB: function(a) {
                for (var b = "iH" == a.name ? 36 : 16, c = "", d = 0; d < b; ++d)
                    c += '<div class=A id="#' + a.name + "-" + d + '">' + d + (d == n[a.name] ? "<div class=desc>(default)</div>" : "") + "</div>";
                C.ha(c, "", 0)
            },
            "#iV": function(a, b) {
                var c = M.backgroundImage
                  , d = "000100070";
                c && c.match(/^\d{9}$/) && (d = c);
                var f = ~~d.substr(0, 3)
                  , g = ~~d.substr(3, 3)
                  , h = ~~d.substr(6, 3);
                if (Z.cfgUseDefaultIMG.checked) {
                    Z.cfgUseDefaultIMG0.style.display = "none";
                    Z.cfgUseDefaultIMG1.style.display = "";
                    if (a)
                        switch (d = 10 * ~~b,
                        a) {
                        case "#iH":
                            f = d;
                            break;
                        case "#iS":
                            g = d;
                            break;
                        case "#iV":
                            h = d
                        }
                    d = Xa(3, f) + Xa(3, g) + Xa(3, h);
                    Gb("backgroundImage", d, "000100070")
                } else
                    Z.cfgUseDefaultIMG0.style.display = "",
                    Z.cfgUseDefaultIMG1.style.display = "none",
                    (d = Z.cfgBGIMG.value) ? ob(d) ? M.backgroundImage = d : e && e.target == Z.cfgBGIMG && C.l("\u6a19\u6e96\u7684\u306a\u753b\u50cfURL\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002") : M.removeItem("backgroundImage");
                c != M.backgroundImage && Hb();
                Z.iH.innerHTML = B("H:") + ~~(f / 10);
                Z.iS.innerHTML = B("S:") + ~~(g / 10);
                Z.iV.innerHTML = B("V:") + ~~(h / 10)
            },
            "#hB": function(a, b) {
                var c = M.msk
                  , d = c || "000000"
                  , f = parseInt(d.substr(0, 2), 16)
                  , g = parseInt(d.substr(2, 2), 16)
                  , h = parseInt(d.substr(4, 2), 16);
                if (a)
                    switch (d = 17 * ~~b,
                    a) {
                    case "#hR":
                        f = d;
                        break;
                    case "#hG":
                        g = d;
                        break;
                    case "#hB":
                        h = d
                    }
                d = Xa(2, f.toString(16)) + Xa(2, g.toString(16)) + Xa(2, h.toString(16));
                Gb("msk", d, "000000");
                Z.hR.innerHTML = B("R:") + ~~(f / 17);
                Z.hG.innerHTML = B("G:") + ~~(g / 17);
                Z.hB.innerHTML = B("B:") + ~~(h / 17);
                c != M.msk && Hb()
            },
            sco: function() {
                C.ha('<div class=A id="#sco-0">' + l[0] + '</div><div class=A id="#sco-1">' + l[1] + '</div><div class=A id="#sco-2">' + l[2] + "</div>", "", 0)
            },
            "#sco": function(a, b) {
                var c = M.scro
                  , c = ~~(a ? b : c);
                Gb("scro", c, 0);
                kb && r.screen.orientation.lock && r.screen.orientation.lock(1 == c ? "portrait" : 2 == c ? "landscape" : "any");
                Z.sco.innerHTML = "\u753b\u9762\u65b9\u5411:" + l[c]
            },
            yam: function() {
                C.ha('<div class=A id="#yam-0">' + p[0] + '</div><div class=A id="#yam-1">' + p[1] + '</div><div class=A id="#yam-2">' + p[2] + "</div>", "", 0)
            },
            "#yam": function(a, b) {
                var c = M.yama
                  , d = ~~(a ? b : c);
                Gb("yama", d, 0);
                Z.yam.innerHTML = "\u724c\u5c71\u8868\u793a:" + p[d];
                c != d && f()
            },
            cpt: function() {
                C.ha('<div class=A id="#cpt-0">' + d[0] + '</div><div class=A id="#cpt-1">' + d[1] + '</div><div class=A id="#cpt-2">' + d[2] + "</div>", "", 0)
            },
            "#cpt": function(a, b) {
                var c = ~~(a ? b : M.cptype);
                Gb("cptype", c, 0);
                S.O();
                Z.cpt.innerHTML = "\u5165\u529b\u88dc\u52a9:" + d[c]
            },
            dtp: function() {
                C.ha('<div class=A id="#dtp-0">' + p[0] + '</div><div class=A id="#dtp-1">' + p[1] + '</div><div class=A id="#dtp-2">' + p[2] + "</div>", "", 0)
            },
            "#dtp": function(a, b) {
                var c = M.desktop;
                3 == c && (c = 0);
                var d = ~~(a ? b : c);
                Z.dtp.innerHTML = "Desktop\u5165\u529b:" + p[d];
                0 == d && mb && (d = 3);
                Gb("desktop", d, 0);
                c != d && f()
            },
            cfgPrev: function() {
                a(-1)
            },
            cfgNext: function() {
                a(1)
            },
            cfgClose: function() {
                v.ka(11)
            }
        }
    }());
    H["#iH"] = H["#iS"] = H["#iV"];
    H.iH = H.iS = H.iV = H.hR = H.hG = H.hB;
    H["#hR"] = H["#hG"] = H["#hB"];
    Aa(H, function() {
        function a(a, b) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c]
                  , f = '<div style="position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;">'
                  , p = "javascript:void(0)"
                  , f = f + "<table cellpadding=0 cellspacing=0 width=100% height=100%><tr>"
                  , f = f + ("<td rowspan=3 class=gray width=6% >" + (c + 1) + ".</td>");
                if (d) {
                    var p = "https://tenhou.net/0/?log=" + d.log + "&tw=" + (4 - ~~d.oya) % 4
                      , f = f + "<td colspan=2>"
                      , f = f + (B("\u724c\u8b5c | ") + d.log.substr(4, 2) + "/" + d.log.substr(6, 2) + B(" | "))
                      , f = f + na(d.type)
                      , n = d.lobby;
                    n && (f += " " + (1E4 > n ? "L" : "C") + Xa(4, n));
                    var f = f + "</td>"
                      , f = f + "</tr><tr>"
                      , n = d.uname
                      , k = ~~d.oya;
                    if (d = d.sc) {
                        for (var d = d.split(","), h = 0; h < d.length; ++h)
                            d[h] = Number(d[h]);
                        for (h = 0; 4 > h; ++h)
                            f += "<td width=47% >",
                            n[h] && (f = h ? f + ("ABCD".substr((h + 4 - k) % 4, 1) + ":") : f + (0 + ~~(n[1] && d[3] > d[1]) + ~~(n[2] && d[5] > d[1]) + ~~(n[3] && d[7] > d[1]) + 1 + "\u4f4d "),
                            f += Qa(n[h]) + "(" + Ya(d[2 * h + 1].toFixed(1)) + ")"),
                            f += "</td>",
                            1 == h && (f += "</tr><tr>")
                    } else if (n)
                        for (h = 0; 4 > h; ++h)
                            f += "<td width=47% >" + Qa(n[h]) + "</td>",
                            1 == h && (f += "</tr><tr>")
                }
                f += "</tr></table>";
                f += "</div>";
                f += '<a href="' + p + '" class=bt3 target=_blank></a>';
                A("DIV", a, "", {
                    innerHTML: f
                }, {
                    height: "3.4em",
                    position: "relative",
                    textAlign: "left"
                }).childNodes[1].onclick = H.logOpen
            }
            A("DIV", a, "gray", {
                innerHTML: '\u25cf\u300c\u9577\u62bc\u3057\u300d\u307e\u305f\u306f\u300c\u53f3\u30af\u30ea\u30c3\u30af\u300d\u304b\u3089\u5225\u30bf\u30d6\u3067\u958b\u304f/URL\u306e\u30b3\u30d4\u30fc\u306a\u3069\u304c\u884c\u3048\u307e\u3059<br><br>\u724c\u8b5c\u306e\u691c\u7d22\u3084\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306f\u3053\u3061\u3089\u304b\u3089\u884c\u3048\u307e\u3059<br><a href="https://tenhou.net/mjlog.html" target=_blank >https://tenhou.net/mjlog.html</a><br>'
            }, {
                fontSize: "75%",
                align: "left",
                padding: "1em 0 6em 0"
            })
        }
        function f(c, b) {
            var f = b.split("\n");
            f[d - 1] || f.pop();
            for (var d = 0; d < f.length; ++d) {
                var l = f[d].split(" ")
                  , p = l[0]
                  , n = ~~l[1];
                f[d] = {
                    type: parseInt(p.split("-")[1], 16),
                    lobby: ~~p.split("-")[2],
                    log: p,
                    oya: (4 - n) % 4,
                    uname: [l[2 + (0 + n) % 4], l[2 + (1 + n) % 4], l[2 + (2 + n) % 4], l[2 + (3 + n) % 4]],
                    sc: [0, l[6 + (0 + n) % 4], 0, l[6 + (1 + n) % 4], 0, l[6 + (2 + n) % 4], 0, l[6 + (3 + n) % 4]].join()
                }
            }
            c.innerHTML = "";
            d = A("DIV", c, "", {
                innerHTML: '<a class=bt3 href="https://tenhou.net/mjlog.html" target=_blank style="padding:1em 0;">\u3053\u306e\u7aef\u672b\u306b\u8a18\u9332\u3055\u308c\u3066\u3044\u308b\u724c\u8b5c\u3092\u8868\u793a</a>'
            }, {
                textAlign: "center"
            });
            d.childNodes[0].onclick = function() {
                H.Xb(c);
                return !1
            }
            ;
            d = A("DIV", c, "bt3", {
                innerHTML: "\u203b\u6709\u6599\u4f1a\u54e1\u306e\u72b6\u614b\u3067\u6253\u3063\u305f\u724c\u8b5c\u306e\u307f\u691c\u7d22\u3067\u304d\u307e\u3059<br>\u203b\uff11\uff10\u65e5\u524d\u307e\u3067\u306e\u724c\u8b5c\u304c\u691c\u7d22\u53ef\u80fd\u3067\u3059"
            }, {
                textAlign: "center",
                padding: "0.5em 0"
            });
            a(c, f.reverse())
        }
        return {
            Xb: function(c) {
                c.innerHTML = "";
                A("DIV", c, "", {
                    innerHTML: '<a class=bt3 href="https://tenhou.net/mjlog.html" target=_blank style="padding:1em 0;">\u3059\u3079\u3066\u306e\u724c\u8b5c\u4e00\u89a7\u3092\u8868\u793a</a>'
                }, {
                    textAlign: "center"
                }).childNodes[0].onclick = function() {
                    c.innerHTML = "<br>L O A D I N G ...";
                    Va("http://tenhou.net/0/log/find.cgi?un=" + M.uname + "&raw=1", function(a) {
                        console.log(a);
                        f(c, a)
                    }, function() {
                        alert("DOWNLOAD ERROR")
                    });
                    return !1
                }
                ;
                for (var b = [], g = ~~M.lognext, d = 0; 40 > d; ++d) {
                    var l = (g + 40 - 1 - d) % 40;
                    try {
                        b.push(JSON.parse(M["log" + l]))
                    } catch (p) {}
                }
                a(c, b)
            },
            logOpen: function(a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey) && (a = a.target,
                a = a.href.split(/\?log=|&tw=/),
                1 != a.length))
                    return u.log = a[1],
                    u.TW = u.tw = ~~a[2],
                    u.ts = 0,
                    v.ka(11),
                    !1
            }
        }
    }());
    Aa(H, function() {
        function a() {
            Z.wgF0.innerText = g & 2 ? "\u56db" : g & 4 ? "\u4e09" : "\uff0d";
            Z.wgF1.innerText = g & 8 ? "\u6771" : g & 16 ? "\u5357" : "\uff0d";
            Z.wgF2.innerText = g & 32 ? "\u96c0" : g & 64 ? "\u7279" : g & 128 ? "\u9cf3" : "\uff0d"
        }
        function f() {
            var a = Z.klist;
            a.innerHTML = "";
            var f = 0;
            if (b)
                for (var p = 0; p < b.length; ++p) {
                    var n = '<div style="position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;">', n = n + "<table cellpadding=0 cellspacing=0 width=100% height=100%>", n = n + ("<tr><td rowspan=3 class=gray width=6%>" + (f + 1) + ".</td>"), k, h = b[p], m = ~~h[3];
                    if (g & 6) {
                        if (~m & 16 && ~g & 2)
                            continue;
                        if (m & 16 && ~g & 4)
                            continue
                    }
                    if (g & 24) {
                        if (~m & 8 && ~g & 8)
                            continue;
                        if (m & 8 && ~g & 16)
                            continue
                    }
                    if (g & 224 && 0 == c) {
                        if (0 != (m & 1536) && ~g & 32)
                            continue;
                        if (!(m & 3584) && 2 == ma(m) && ~g & 64)
                            continue;
                        if (!(m & 3584) && 3 == ma(m) && ~g & 128)
                            continue
                    }
                    k = "https://tenhou.net/0/?wg=" + h[0];
                    for (var y = [h[4], h[7], h[10], h[13]], F = 0; 4 > F; ++F)
                        y[F] && (y[F] = decodeURIComponent(escape(atob(y[F]))));
                    for (var w = [~~h[5], ~~h[8], ~~h[11], ~~h[14]], z = [~~h[6], ~~h[9], ~~h[12], ~~h[15]], n = n + ("<td colspan=2>" + B("\u89b3\u6226 | ") + h[2] + B(" | ") + na(m) + "</td></tr><tr>"), F = 0; 4 > F; ++F)
                        y[F] && (n += "<td width=47%>",
                        n += "<span class=dan" + w[F] + ">" + ga[w[F]] + "</span>" + B("R") + z[F] + B("/") + y[F],
                        n += "</td>",
                        1 == F && (n += "</tr><tr>"));
                    n += "</tr></table>";
                    n += "</div>";
                    n += '<a href="' + k + '" class=bt3 target=_blank></a>';
                    A("DIV", a, "", {
                        innerHTML: n
                    }, {
                        height: "3.4em",
                        position: "relative",
                        textAlign: "left"
                    }).childNodes[1].onclick = H.wgOpen;
                    ++f
                }
            f || (a.innerHTML = "<br>\u89b3\u6226\u53ef\u80fd\u306a\u5bfe\u6226\u306f\u3042\u308a\u307e\u305b\u3093");
            A("DIV", a, "gray", {
                innerHTML: "\u25cf\u300c\u9577\u62bc\u3057\u300d\u307e\u305f\u306f\u300c\u53f3\u30af\u30ea\u30c3\u30af\u300d\u304b\u3089\u5225\u30bf\u30d6\u3067\u958b\u304f/URL\u306e\u30b3\u30d4\u30fc\u306a\u3069\u304c\u884c\u3048\u307e\u3059<br>\u25cf\u89b3\u6226\u306f\uff15\u5206\u9045\u308c<br>"
            }, {
                fontSize: "75%",
                align: "left",
                padding: "1em 0 6em 0"
            })
        }
        var c, b, g = 128;
        return {
            Ic: function(d) {
                c = d;
                Va("http://mjv.jp/0/wg/" + (1E4 > c ? Xa(4, c) : c) + ".js", function(a) {
                    if (b = a.substr(3, a.length - 3 - 2))
                        try {
                            b = JSON.parse(b)
                        } catch (p) {
                            return
                        }
                    if (b)
                        for (a = 0; a < b.length; ++a)
                            b[a] = b[a].split(",");
                    f()
                });
                f();
                a();
                Z.wgF2.style.display = 0 == c ? "" : "none"
            },
            wgF0: function() {
                g = g & -7 | (g & 2 ? 4 : g & 4 ? 0 : 2);
                a();
                f()
            },
            wgF1: function() {
                g = g & -25 | (g & 8 ? 16 : g & 16 ? 0 : 8);
                a();
                f()
            },
            wgF2: function() {
                g = g & -225 | (g & 32 ? 64 : g & 64 ? 128 : g & 128 ? 0 : 32);
                a();
                f()
            },
            wgOpen: function(a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey))
                    return a = a.target,
                    u.wg = a.href.split("?wg=")[1],
                    u.TW = u.tw = 0,
                    v.ka(11),
                    !1
            }
        }
    }());
    var Bc = [1, 65, 9, 73, 17, 81, 25, 89, 129, 193, 137, 201, 145, 209, 153, 217, 33, 97, 41, 105, 49, 113, 57, 121, 161, 225, 169, 233, 177, 241, 185, 249, 1057, 545, 1569, 1065, 553, 1577, 1585, 1593]
      , Cc = [7, 3, 15, 11, 135, 131, 143, 139, 39, 35, 47, 43, 167, 163, 175, 171];
    Aa(H, function() {
        function a() {
            return ("" + (M.rule || "")).split(",")
        }
        function f() {
            function b(a, b) {
                var c = d[a].childNodes[1];
                c.className = "";
                c.innerHTML = b
            }
            function c(a, c, d) {
                b(a, c == d ? "1.00" : (c / d).toFixed(3).substr(1))
            }
            if (Z.pftab) {
                Z.pftab.style.display = "none";
                Z.pftab_.style.display = "";
                for (var d = Z.pftab.getElementsByTagName("TR"), f = 1; f < d.length; ++f)
                    if (!(2 > d[f].childNodes.length)) {
                        var g = d[f];
                        g.style.borderBottom = "1px solid #444";
                        g = d[f].childNodes[0];
                        g.className = "gray";
                        g.style.textAlign = "left";
                        g = d[f].childNodes[1];
                        g.innerHTML = "-";
                        g.className = "gray";
                        g.style.textAlign = "right"
                    }
                d[16].childNodes[0].innerHTML = "";
                if (f = ~~a()[4]) {
                    var m, g = 4, h = 0, k = "";
                    switch (y(f)) {
                    case 4:
                        g = 4;
                        h = 0;
                        m = H[17];
                        k = "\u203b\u6bb5\u4f4d\u6226\uff14\u4eba\u6253\u3061\u5408\u7b97\u6226\u7e3e";
                        break;
                    case 3:
                        g = 3;
                        h = 0;
                        m = H[16];
                        k = "\u203b\u6bb5\u4f4d\u6226\uff13\u4eba\u6253\u3061\u5408\u7b97\u6226\u7e3e";
                        break;
                    case 601:
                        g = 4;
                        h = 0;
                        m = H[18];
                        break;
                    case 602:
                        g = 4;
                        h = 2;
                        m = H[19];
                        break;
                    case 603:
                        g = 4;
                        h = 5;
                        m = H[20];
                        break;
                    case 611:
                        g = 4;
                        h = 0;
                        m = H[21];
                        break;
                    case 612:
                        g = 4;
                        h = 2;
                        m = H[22];
                        break;
                    case 613:
                        g = 4;
                        h = 5;
                        m = H[23];
                        break;
                    case 623:
                        g = 3;
                        h = 5;
                        m = H[24];
                        break;
                    case 633:
                        g = 3,
                        h = 5,
                        m = H[25]
                    }
                    d[16].childNodes[0].innerHTML = k;
                    m && (Z.pftab.style.display = "",
                    Z.pftab_.style.display = "none",
                    k = ~~m[4] + ~~m[5] + ~~m[6] + ~~m[7]) && (c(1, m[4], k),
                    c(2, m[5], k),
                    c(3, m[6], k),
                    4 == g && c(4, m[7], k),
                    c(5, m[8], k),
                    b(6, k),
                    b(7, (0 < m[3] ? "+" : "") + (m[3] / k).toFixed(1)),
                    b(8, ((1 * ~~m[4] + 2 * ~~m[5] + 3 * ~~m[6] + 4 * ~~m[7]) / k).toFixed(2)),
                    0 != (f & 1536) && (f = 1 * m[3] + m[0] * h,
                    b(9, (0 < f ? "+" : "") + (f / k).toFixed(1)),
                    b(10, (~~m[0] / k).toFixed(2))),
                    c(11, m[10], m[9]),
                    c(12, m[11], m[9]),
                    c(13, m[12], m[9]),
                    c(14, m[13], m[9]),
                    b(15, ~~m[2]))
                }
            }
        }
        function c(b) {
            function c(a) {
                for (var b, c = 1; c < arguments.length; ++c)
                    b = m[a].childNodes[c],
                    b.className = "",
                    b.innerHTML = arguments[c]
            }
            function d(a, b, d) {
                c(a, b, (d ? d : "- ") + B("\u4f4d"))
            }
            function f(a, b, d, f) {
                c(a, b == d ? "1.00" : (b / d).toFixed(3).substr(1), (f ? f : "- ") + B("\u4f4d"))
            }
            var g = Z.rnktab;
            if (g) {
                Z.rnktab.style.display = "none";
                Z.rnktab_.style.display = "";
                for (var m = g.getElementsByTagName("TR"), h = 1; h < m.length; ++h) {
                    var g = m[h]
                      , k = g.childNodes;
                    if (!(2 > k.length)) {
                        16 != h && 18 != h && (g.style.borderBottom = "solid 1px #444");
                        k[0].style.textAlign = "left";
                        k[0].className = "gray";
                        for (var l = 1; l < k.length; ++l)
                            g = k[l],
                            g.className = "gray",
                            g.style.textAlign = "right",
                            g.style.paddingLeft = "0.5em",
                            1 != h && 6 != h && (g.innerHTML = "-")
                    }
                }
                c(18, B("- \u6226"));
                g = ~~a()[3];
                Y.Ma != g && (Y.Ma = g,
                Y.K('<PXR V="' + g + '" />'));
                if (g && (Z.rnktab.style.display = "",
                Z.rnktab_.style.display = "none",
                b && (b = b.v2.split(","),
                15 == b.length || 21 == b.length))) {
                    var h = ~~b[0], k = ~~b[1], l = ~~b[2], n = ~~b[3], p = h + k + l + n, J = b[4], w;
                    switch (y(g)) {
                    case 4:
                        w = H[17][2];
                        break;
                    case 3:
                        w = H[16][2];
                        break;
                    case 601:
                        w = H[18][2];
                        break;
                    case 602:
                        w = H[19][2];
                        break;
                    case 603:
                        w = H[20][2];
                        break;
                    case 611:
                        w = H[21][2];
                        break;
                    case 612:
                        w = H[22][2];
                        break;
                    case 613:
                        w = H[23][2];
                        break;
                    case 623:
                        w = H[24][2];
                        break;
                    case 633:
                        w = H[25][2]
                    }
                    var Za = ~~b[6]
                      , z = ~~b[7]
                      , D = ~~b[8]
                      , x = ~~b[9]
                      , F = ~~b[10]
                      , ca = ~~b[11]
                      , ua = ~~b[12]
                      , ea = ~~b[13]
                      , fa = ~~b[14];
                    if (p) {
                        var Sa = g & 16 ? 30 * h + 0 * k + -30 * l : 30 * h + 10 * k + -10 * l + -30 * n
                          , va = g & 16 ? 1 * h + 2 * k + 3 * l : 1 * h + 2 * k + 3 * l + 4 * n
                          , wa = h + k
                          , ta = g & 16 ? l : n;
                        d(2, Ya(J), z);
                        d(7, Ya((J / p).toFixed(1)), D);
                        d(3, Ya(Sa), x);
                        d(8, (va / p).toFixed(2), F);
                        f(11, h, p, ca);
                        ~g & 16 && f(12, wa, p, ua);
                        f(13, ta, p, ea)
                    }
                    if (21 == b.length) {
                        var J = b[15]
                          , ca = b[16]
                          , qa = ~~b[17]
                          , pa = ~~b[18]
                          , ua = ~~b[19]
                          , ea = ~~b[20];
                        d(4, Ya(J), qa);
                        d(9, Ya((J / p).toFixed(1)), pa);
                        d(5, Ya(ca), ua);
                        d(10, Ya((ca / p).toFixed(2)), ea)
                    }
                    J = "-";
                    15 == b.length && D && (J = z + D + x + F);
                    21 == b.length && pa && (J = qa + pa);
                    d(15, ~~w, fa);
                    d(16, J, Za);
                    c(18, h + B(" + ") + k + B(" + ") + l + (g & 16 ? "" : B(" + ") + n) + B(" = ") + p + B(" \u6226"))
                }
            }
        }
        function b(a) {
            a = a.rankingcs.split(",");
            var b = ""
              , c = "\u3053\u306e\u30ed\u30d3\u30fc\u3067\u306f\u4f7f\u7528\u3057\u3066\u3044\u307e\u305b\u3093"
              , d = "\u306a\u3057"
              , f = ""
              , g = "-"
              , m = []
              , h = "- -";
            a[0] = a[0] || x.ranking;
            if ("sc3m" == a[0] || "sc3c0m" == a[0] || "sc3c2m" == a[0] || "sc3c5m" == a[0])
                c = "\u9023\u7d9a3\u6226\u306e\u6700\u5927\u5408\u8a08\u5f97\u70b9",
                "sc3c2m" == a[0] && (d = "\u795d\u51001\u679a2000\u70b9"),
                "sc3c5m" == a[0] && (d = "\u795d\u51001\u679a5000\u70b9"),
                f = "\u3010\u6700\u65b03\u6226\u3011",
                a[8] && (h = a[8]),
                a[6] && (g = Ya(Number(a[6]).toFixed(1))),
                a[3] && m.push(Ya(Number(a[3]).toFixed(1))),
                a[2] && m.push(Ya(Number(a[2]).toFixed(1))),
                a[1] && m.push(Ya(Number(a[1]).toFixed(1))),
                m.length && m.push("= " + Ya((1 * a[1] + 1 * a[2] + 1 * a[3]).toFixed(1)));
            else if ("sc5m" == a[0] || "sc5c0m" == a[0] || "sc5c2m" == a[0] || "sc5c5m" == a[0])
                c = "\u9023\u7d9a5\u6226\u306e\u6700\u5927\u5408\u8a08\u5f97\u70b9",
                "sc5c2m" == a[0] && (d = "\u795d\u51001\u679a2000\u70b9"),
                "sc5c5m" == a[0] && (d = "\u795d\u51001\u679a5000\u70b9"),
                f = "\u3010\u6700\u65b05\u6226\u3011",
                a[9] && (h = a[9]),
                a[7] && (g = Ya(Number(a[7]).toFixed(1))),
                a[5] && m.push(Ya(Number(a[5]).toFixed(1))),
                a[4] && m.push(Ya(Number(a[4]).toFixed(1))),
                a[3] && m.push(Ya(Number(a[3]).toFixed(1))),
                a[2] && m.push(Ya(Number(a[2]).toFixed(1))),
                a[1] && m.push(Ya(Number(a[1]).toFixed(1))),
                m.length && m.push("= " + Ya((1 * a[1] + 1 * a[2] + 1 * a[3] + 1 * a[4] + 1 * a[5]).toFixed(1)));
            m = m.length ? m.join(" ") : "--";
            b += '<div style="display:inline-block;text-align:left;">' + B("\u3010\u30e9\u30f3\u30ad\u30f3\u30b0\u3011") + "\u3000" + c + "<br>" + B("\u3010\u6700\u9ad8\u5f97\u70b9\u3011") + "\u3000" + g + "\u3000" + B("\u3010\u795d\u5100\u3011") + "\u3000" + d + "</div>";
            b = b + ('<div style="font-size:375%;padding:0.1em 0;">' + h + "\u4f4d</div>") + (B(f) + " " + m + "<br>");
            Z.csranking.innerHTML = b
        }
        function g() {
            if (O[4096] && O[4096].complete && O[4196] && O[4196].complete && O[4296] && O[4296].complete && O[4396] && O[4396].complete && O[4496] && O[4496].complete)
                return !0;
            C.l("\u5fc5\u8981\u306a\u753b\u50cf\u30ea\u30bd\u30fc\u30b9\u306e\u8aad\u307f\u8fbc\u307f\u304c\u5b8c\u4e86\u3057\u3066\u3044\u307e\u305b\u3093");
            return !1
        }
        function d(a) {
            var b = Z.panes.childNodes
              , c = b.length;
            ca = (ca - 1 + a + c - 1) % (c - 1) + 1;
            for (a = 1; a < c; ++a)
                b[a].style.display = a == ca ? "" : "none";
            Z.paneDisp.innerHTML = b[ca].firstChild.innerHTML;
            Z.panePrev.innerHTML = 2 > ca ? "&laquo;" : "\u3000";
            Z.paneNext.innerHTML = 2 > ca ? "&raquo;" : "\u3000";
            Z.hdr.style.display = b[ca].classList.contains("nohdr") ? "none" : "";
            b = b[ca].classList;
            b.contains("init_tlist") && (b.remove("init_tlist"),
            H.ac(Z.tlist));
            b.contains("init_hlist") && (b.remove("init_hlist"),
            H.Xb(Z.hlist));
            b.contains("init_klist") && (b.remove("init_klist"),
            H.Ic(z))
        }
        function l(a) {
            return (new Date(a.substr(0, 4),a.substr(4, 2),a.substr(6, 2),a.substr(8, 2),a.substr(10, 2),a.substr(12, 2))).getTime()
        }
        function p(a) {
            return a.replace(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)/, function(a, b, c, d, f, g) {
                return b + "." + c + "." + d + "(" + aa[(new Date(b,c - 1,d)).getDay()] + ") " + f + ":" + g
            })
        }
        function n() {
            var a = H[1];
            Z.expdisp.innerHTML = B("\u6709\u52b9\u671f\u9650:") + (a ? a.replace(/(\d\d\d\d)(\d\d)(\d\d)/, "$1.$2.$3") : "- - - -")
        }
        function k() {
            var a = ~~x.players, b = ~~x.premiumonly, c = ~~x.joinfee, d = x.rule, f = parseInt(d[2], 16), g;
            g = "" + (f & 8 ? "\u6771\u5357" : "\u6771\u98a8") + (f & 16 ? "\u30b5\u30f3\u30de" : "\u6226") + " " + (f & 4 ? "\u55b0\u30ca\u30b7" : "\u55b0\u3042\u308a") + (f & 2 ? "\u8d64\u30ca\u30b7" : "\u8d64\u3042\u308a") + " ";
            la(z, f) && (g += "\u901f");
            f & 256 && (g += "\u6697");
            f & 512 && (g += "\u795d");
            var m = ""
              , h = ~~d[3]
              , k = ~~d[4]
              , l = ~~d[5]
              , n = ~~d[6];
            x.Ba = !!x.join;
            if (x.Ba) {
                var y = (f & 16 ? H[16] : H[17])[0];
                h && k ? x.Ba = h <= y && y <= k : h ? x.Ba = h <= y : k && (x.Ba = y <= k)
            }
            x.Ba && (f = (f & 16 ? H[16] : H[17])[2],
            l && n ? x.Ba = l <= f && f <= n : l ? x.Ba = l <= f : n && (x.Ba = f <= n));
            h && k && h == k ? m += ga[h] + "\u9650\u5b9a" : h && k ? m += ga[h] + "\uff5e" + ga[k] : h ? m += ga[h] + "\u4ee5\u4e0a" : k && (m += ga[k] + "\u4ee5\u4e0b");
            m.length && (l || n) && (m += " & ");
            l && n ? m += "R" + l + "\uff5eR" + n : l ? m += "R" + l + "\u4ee5\u4e0a" : n && (m += "R" + n + "\u4ee5\u4e0b");
            m.length || (m += "\u6bb5\u4f4dR\u6307\u5b9a\u306a\u3057");
            m += "<br>";
            m = c ? m + "\u3060\u308c\u3067\u3082OK" : b ? m + (a ? "\u56fa\u5b9a " + a + " \u540d(\u6709\u52b9\u671f\u96503\u65e5\u4ee5\u4e0a)" : "\u6709\u52b9\u671f\u96503\u65e5\u4ee5\u4e0a") : m + (a ? "\u56fa\u5b9a " + a + " \u540d" : "\u3060\u308c\u3067\u3082OK");
            a = c ? "\u6709\u52b9\u671f\u9650" + c + "\u65e5\u5206" : a ? "- - -" : b ? "\u306a\u3057" : "\u7121\u6599";
            d = "" + ('<div style="font-size:150%;padding-top:0.25em;">' + decodeURIComponent(x.title) + '</div><hr><table cellpadding=0 cellspacing=0 style="margin:0 auto;"><tr><td><div style="display:inline-block;text-align:left;">' + B("\u3010\u958b\u50ac\u671f\u9593\u3011JST") + "<br>\u958b\u59cb " + p(d[0]) + "<br>\u7d42\u4e86 " + p(d[1]) + "<br>" + B("\u3010\u30eb\u30fc\u30eb\u3011") + "<br>" + g + '</div></td><td style="padding:0 0 0 1em;"><div style="display:inline-block;text-align:left;">' + B("\u3010\u53c2\u52a0\u8cbb\u3011") + "<br>" + a + "<br>" + B("\u3010\u53c2\u52a0\u5bfe\u8c61\u3011") + "<br>" + m + "</div></td></tr></table>");
            Z.csmain.innerHTML = d;
            Y.K("<DATE />")
        }
        function h() {
            ua = void 0;
            Z.joincs0 && Y.K("<DATE />")
        }
        function m(a) {
            return '<div style="margin:0.5em 0;"><div class=select-wrapper><button name=rule id=rule' + a + ' style="width:11.5em;text-align:left;"></button></div><button name=join id=join' + a + " disabled>\u4e88\u7d04</button></div>"
        }
        function y(a) {
            if (0 != (a & 1536))
                switch (a) {
                case 1057:
                    return 601;
                case 545:
                    return 602;
                case 1569:
                    return 603;
                case 1065:
                    return 611;
                case 553:
                    return 612;
                case 1577:
                    return 613;
                case 1585:
                    return 623;
                case 1593:
                    return 633
                }
            else
                return a & 16 ? 3 : 4
        }
        function F(a) {
            return a ? (na(a) + "\u3000\u3000\u3000").substr(0, 6) + "&nbsp;&nbsp;" + J[a] : "SELECT GAME"
        }
        function w(a) {
            return a.replace(/,/g, "</td><td>").replace(/\|/g, "</td></tr><tr><td>").replace(/>\(/g, '><table cellpadding=0 cellspacing=0 width=100% style="border-collapse:collapse;"><tr><td>').replace(/\)</g, "</td></tr></table><")
        }
        var z, x, J = {
            n: [],
            $a: [],
            Va: []
        }, D = {}, ca = location.search.match(/^\?(C[0-9]{8})/) ? 2 : 1, ua;
        return {
            Bb: function() {
                D = {};
                location.search.match(/^\?L([1-9][0-9]{3})/) ? (Y.K({
                    tag: "LOBBY",
                    id: RegExp.$1
                }),
                z = ~~RegExp.$1) : location.search.match(/^\?(C[0-9]{8})/) ? (z = ~~("1" + RegExp.$1.substr(1, 4)),
                Y.K({
                    tag: "CS",
                    lobby: RegExp.$1
                })) : (z = 0,
                H.l({
                    tag: "LOBBY"
                }))
            },
            LOBBY: function(a, g) {
                Tb.J.canvas.style.visibility = "";
                Y.Ma = 0;
                var h;
                h = H[17];
                var l = H[16];
                H[2] || h.length || l.length ? (h.length || (h = [0, 0, 1500]),
                l.length || (l = [0, 0, 1500]),
                h = "<tr><td class=gray>\u56db\u9ebb:</td><td>" + ga[h[0]] + "</td><td class=gray>R</td><td>" + ~~h[2] + '</td><td style="padding:0 0 0 0.25em;">' + h[1] + "</td><td class=gray>/</td><td>" + ra[~~h[0]] + "</td><td class=gray>pt</td></tr>",
                l = "<tr><td class=gray>\u4e09\u9ebb:</td><td>" + ga[l[0]] + "</td><td class=gray>R</td><td>" + ~~l[2] + '</td><td style="padding:0 0 0 0.25em;">' + l[1] + "</td><td class=gray>/</td><td>" + ra[~~l[0]] + "</td><td class=gray>pt</td></tr>") : (h = "<tr><td class=gray>\u6bb5\u7d1a\u4f4d\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f<br>\u300c\u65b0\u898fID\u300d\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059</td></tr>",
                l = "");
                h = '<div id=panes style="height:16em;">' + ('<div id=hdr><table cellpadding=0 cellspacing=0 style="width:100%;white-space:nowrap;text-align:right;"><tr><td><table cellpadding=0 cellspacing=0 style="width:100%;"><tr><td style="text-align:left;">' + B("\u63a5\u7d9a:") + "<span id=lnn0>" + ~~J.n[0] + "</span> " + B("\u5f85\u6a5f:") + "<span id=lnn2>" + ~~J.n[2] + "</span> " + B("\u7d42\u5c40:") + "<span id=lnn3>" + ~~J.n[3] + "</span> </td></tr><tr><td><span id=iddisp>" + Qa(H[0]) + '</span> <span id=expdisp></span></td></tr></table></td><td rowspan=2 style="width:1px;padding-left:0.25em;"><table cellpadding=0 cellspacing=0 align=right>' + h + l + '</table></td></tr></table><div style="display:none;"></div><hr></div>');
                h += '<div style="display:none;padding:1em 1em;"><span style="display:none;">\u3000</span><div id=lbinfo style="height:3em;">' + B((kb ? "" : "\u25cf\u30a2\u30c9\u30ec\u30b9\u30d0\u30fc\u3092\u5c0f\u3055\u304f\u3059\u308b\u306b\u306f\u4e0b\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u304b\u3089\u3086\u3063\u304f\u308a\u4e0a\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u307e\u3059(\u6a5f\u7a2e\u4f9d\u5b58\u3042\u308a)") + "\u25cfOK/\u30d1\u30b9/\u30c4\u30e2\u5207\u308a\u306f\u53f3\u30af\u30ea\u30c3\u30af\u307e\u305f\u306f\u4f59\u767d\u3092\u30c0\u30d6\u30eb\u30bf\u30c3\u30d7") + "</div><br><div class=select-wrapper><button name=testplay>\u30c6\u30b9\u30c8\u30d7\u30ec\u30a4</button></div><br><br><br>" + B("\u203b\u4e0b\u306e&laquo;&raquo;\u3067\u30bf\u30d6\u3092\u79fb\u52d5\u3057\u3066\u304f\u3060\u3055\u3044\u3002") + "</div>";
                1E4 > z ? h += '<div style="display:none;padding:0.25em 0;"><span style="display:none;">' + (0 == z ? "\u5bfe\u6226" : "\u500b\u5ba4L" + Xa(4, z)) + "</span>" + m(0) + m(1) + m(2) + "</div>" : 2E4 > z && (h += '<div style="display:none;"><span style="display:none;">\u5927\u4f1aC' + Xa(4, z % 1E4) + '</span><div id=csmain style="height:9em;"></div><span style="font-size:150%;padding:0 1em;">' + B("\u4e88\u7d04") + "<span id=lnj0>" + ~~J.$a[0] + "</span>" + B("\u4eba") + " " + B("\u5bfe\u6226") + "<span id=lng0>" + ~~J.Va[0] + "</span>" + B("\u4eba") + "</span>",
                h += "<button name=join id=joincs0 disabled>\u3000</button></div>");
                1E4 <= z && 2E4 > z && (h += '<div style="display:none;"><span style="display:none;">\u5927\u4f1aC' + Xa(4, z % 1E4) + '</span><div id=csranking style="height:9em;"></div><span style="font-size:150%;padding:0 1em;">' + B("\u4e88\u7d04") + "<span id=lnj1>" + ~~J.$a[0] + "</span>" + B("\u4eba") + " " + B("\u5bfe\u6226") + "<span id=lng1>" + ~~J.Va[0] + "</span>" + B("\u4eba") + "</span>",
                h += "<button name=join id=joincs1 disabled>\u3000</button></div>");
                0 == z ? h += w('<div style="display:none;"><span style="display:none;">\u6708\u9593\u6226\u7e3e</span>' + m(3) + '<table cellpadding=0 cellspacing=0 id=rnktab style="margin:0 auto;"><tr><td valign=top style="min-width:10em;">(,\u901a\u7b97,|\u5f97\u70b9,,|\u9806\u4f4d,,|\u53ce\u652f,,|\u795d\u5100,,)</td><td style="width:0.5em;"></td><td valign=top style="min-width:7em;">(,\u5e73\u5747,|,,|,,|,,|,,)</td><td rowspan=2 style="width:1em;"></td><td rowspan=2 valign=top style="min-width:11em;">(\u30c8\u30c3\u30d7,,|\u9023\u5bfe\u7387,,|\u30e9\u30b9\u7387,,|<div style="border-bottom:1px solid transparent;">&nbsp;</div>|Rate,,|\u7dcf\u5408,,)</td></tr><tr><td colspan=3 align=right style="padding:0;"><table cellpadding=0 cellspacing=0 style="border-collapse:collapse;"><tr><td style="padding-right:0.5em;">\u5bfe\u6226\u6570,</td></tr></table></tr></table><div id=rnktab_><br><br>' + B("\u203b\u8868\u793a\u3059\u308b\u5bfe\u6226\u30eb\u30fc\u30eb\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044") + "</div></div>") : (h += '<div style="display:none;"><span style="display:none;">' + (1E4 > z ? "\u500b\u5ba4L" : "\u5927\u4f1aC") + Xa(4, z % 1E4) + '</span><div style="height:8.5em;border:1px solid #444;text-align:left;margin-bottom:0.5em;position: relative;"><button name=chatInput style="font-size:100%;position:absolute;right:0;top:8.5em;">&middot;&middot;&middot;</button><div id=chat style="height:100%;font-size:75%;overflow-y:scroll;"><div>#ENTER LOBBY ' + z + "</div></div></div>",
                1E4 > z ? h += m(3) : 2E4 > z && (h += '<span style="font-size:150%;padding:0 1em;">' + B("\u4e88\u7d04") + "<span id=lnj2>" + ~~J.$a[0] + "</span>" + B("\u4eba") + " " + B("\u5bfe\u6226") + "<span id=lng2>" + ~~J.Va[0] + "</span>" + B("\u4eba") + "</span><button name=join id=joincs2 disabled>\u3000</button>"),
                h += "</div>");
                0 == z && (h += w('<div style="display:none;"><span style="display:none;">\u901a\u7b97\u6226\u7e3e</span>' + m(4) + '<table cellpadding=0 cellspacing=0 id=pftab style="margin:0 auto;"><tr><td valign=top style="min-width:6.5em;">(\uff11\u4f4d\u7387,|\uff12\u4f4d\u7387,|\uff13\u4f4d\u7387,|\uff14\u4f4d\u7387,|\u98db\u3073\u7387,)</td><td style="width:1em;"></td><td valign=top style="min-width:8em;">(\u5bfe\u6226\u6570,|\u5e73\u5747\u5f97\u70b9,|\u5e73\u5747\u9806\u4f4d,|\u5e73\u5747\u53ce\u652f,|\u5e73\u5747\u795d\u5100,)</td><td style="width:1em;"></td><td valign=top style="min-width:6.5em;">(\u548c\u4e86\u7387,|\u653e\u9283\u7387,|\u526f\u9732\u7387,|\u7acb\u76f4\u7387,|Rate,)</td></tr><tr><td colspan=5 class=gray style="font-size:75%;padding:0.2em;"></td></tr></table><div id=pftab_><br><br>' + B("\u203b\u8868\u793a\u3059\u308b\u5bfe\u6226\u30eb\u30fc\u30eb\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044") + "</div></div>"));
                h += '<div class="nohdr init_hlist" style="display:none;height:100%;"><span style="display:none;">\u724c\u8b5c</span><div style="position:relative;height:100%;"><div class=sscl id=hlist style="position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;"></div><div class=sblink style="visibility:hidden;">\u25bc</div></div></div><div class="nohdr init_klist" style="display:none;height:100%;"><span style="display:none;">\u89b3\u6226</span><div style="position:relative;height:100%;"><div class=sscl id=klist style="position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;"></div><div class=sblink style="visibility:hidden;">\u25bc</div><button name=wgF0 class="ra0 bgb" style="position:absolute;left:0em;bottom:0em;">\uff0d</button><button name=wgF1 class="ra0 bgb" style="position:absolute;left:2em;bottom:0em;">\uff0d</button><button name=wgF2 class="ra0 bgb" style="position:absolute;left:4em;bottom:0em;">\uff0d</button></div></div><div class="nohdr init_tlist" style="display:none;height:100%;"><span style="display:none;">Training\u03b2</span><div style="position:relative;height:100%;"><div class=sscl id=tlist style="position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;"></div><div class=sblink style="visibility:hidden;">\u25bc</div></div></div><div style="display:none;padding:2em 0"><span style="display:none;">Tools</span> <button name=openurl>URL</button> <button name=help>\u30d8\u30eb\u30d7</button> <button name=hairi>\u724c\u7406</button><br><br><button name=purchase>\u6599\u91d1\u306e\u304a\u652f\u6255\u3044</button><br></div>';
                gb && (h += '<div style="display:none;"><span style="display:none;">Caution</span><div style="padding:1em 4em;">---- \u3054\u6ce8\u610f ----<br><br>Android4.4\u3088\u308a\u524d\u306e\u6a19\u6e96\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u3001\u5bfe\u6226\u3092\u884c\u3046\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304c\u3001\u8868\u793a\u306e\u4e71\u308c\u3084\u30c0\u30d6\u30eb\u30bf\u30c3\u30d7\u3067\u610f\u56f3\u3057\u306a\u3044\u62e1\u5927\u304c\u767a\u751f\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002Android4.4\u4ee5\u964d\u306bOS\u3092\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u304b<a href="https://play.google.com/store/apps/details?id=com.android.chrome">Google Chrome Browser</a>\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002</div></div>');
                h += "</div><hr>";
                l = !!Object.keys(D).length;
                g.innerHTML = h + ('<table cellpadding=0 cellspacing=0 style="width:100%;"><tr><td style="position:relative;vertical-align:middle;"><div id=paneDisp style="position:absolute;font-size:300%;width:100%;padding:0.25em 0;pointer-events:none;">\u3000</div><button name=panePrev class=ra1 style="font-size:300%;width:50%;height:1.5em;">\u3000</button><button name=paneNext class=ra2 style="font-size:300%;width:50%;height:1.5em;">\u3000</button></td><td style="width:9.5em;"><button name=cancel style="width:100%;height:2.5em;' + (l ? "" : "display:none;") + '">CANCEL</button><button name=logout style="width:100%;height:2.5em;' + (l ? "display:none;" : "") + '">LOGOUT</button></td></tr></table>');
                yc(g);
                H["#rule0"]();
                f();
                c();
                n();
                d(0);
                1E4 <= z && 2E4 > z && (k(),
                b({
                    rankingcs: ""
                }),
                Y.Ma = -1,
                Y.K('<PXR V="-1" />'));
                u.training && setTimeout(function() {
                    H.l({
                        tag: "TRAINING",
                        file: u.training
                    })
                }, 1)
            },
            fc: function(a) {
                J.n = a.n.split(",");
                J.$a = a.j.split(",");
                J.Va = a.g.split(",");
                Z.lnn0 && (Z.lnn0.innerText = ~~J.n[0],
                Z.lnn2.innerText = ~~J.n[2],
                Z.lnn3.innerText = ~~J.n[3],
                H["#rule0"]());
                for (a = 0; 3 > a; ++a)
                    Z["lnj" + a] && (Z["lnj" + a].innerText = ~~J.$a[0]),
                    Z["lng" + a] && (Z["lng" + a].innerText = ~~J.Va[0]);
                return 1
            },
            bc: function(a) {
                var b = a.lobby;
                b && (4 == b.length ? (z = ~~b,
                H.l({
                    tag: "LOBBY"
                })) : 9 == b.length && (z = ~~("1" + b.substr(1, 4))));
                var b = cb.getElementById("chat")
                  , c = a.text;
                if (b && c && c.length) {
                    c = decodeURIComponent(c);
                    (a = a.uname) && a.length && (c = decodeURIComponent(a) + ": " + c);
                    a = cb.createElement("DIV");
                    a.innerText = c;
                    var c = b.scrollHeight
                      , d = b.scrollTop + b.clientHeight;
                    b.appendChild(a);
                    c <= d && d < b.scrollHeight && (b.scrollTop = b.scrollHeight)
                }
                return 1
            },
            cc: function(a) {
                a && (x = a,
                x.rule = x.rule.split(","),
                x.join = ~~x.join,
                x.joinfee = ~~x.joinfee);
                Z.joincs0 ? k() : H.l({
                    tag: "LOBBY"
                });
                return 1
            },
            dc: function(a) {
                var b = Z.joincs0;
                if (!b)
                    return 1;
                a = l(a.t);
                var c = l(x.rule[0])
                  , d = l(x.rule[1]);
                if (d <= a)
                    b.innerText = "\u7d42\u4e86",
                    b.disabled = !0;
                else if (x.Ba)
                    if (a < c) {
                        var f = (c - a) / 1E3;
                        b.innerText = "\u3042\u3068" + (86400 < f ? (f / 24 / 60 / 60).toFixed(1) + "\u65e5" : 3600 < f ? (f / 60 / 60).toFixed(1) + "\u6642\u9593" : 60 < f ? (f / 60).toFixed(1) + "\u5206" : "\u7d04" + 5 * ~~(f / 5) + "\u79d2");
                        b.disabled = !0
                    } else
                        f = parseInt(x.rule[2], 16),
                        b.innerText = "\u4e88\u7d04",
                        b.disabled = !!D[f];
                else
                    x.joinfee ? (b.innerText = "\u53c2\u52a0\u767b\u9332",
                    b.disabled = !1) : x.premiumonly ? (b.innerText = "\u53c2\u52a0\u4e88\u7d04",
                    b.disabled = !1) : (b.innerText = "\u53c2\u52a0\u4e0d\u53ef",
                    b.disabled = !0);
                Z.joincs1.innerText = Z.joincs2.innerText = b.innerText;
                Z.joincs1.disabled = Z.joincs2.disabled = b.disabled;
                ua || (ua = setTimeout(h, a < c - 6E4 || d < a || c < a && a < d - 3E4 ? 3E4 : 5E3));
                return 1
            },
            hc: c,
            ic: function(a) {
                Z.joincs0 && b(a)
            },
            panePrev: function() {
                d(-1)
            },
            paneNext: function() {
                d(1)
            },
            testplay: function() {
                C.ha('<div class=A id="#testplay-64">' + na(64) + '<div class=desc>(\uff14\u4eba\u6253 \u6771\u98a8 \u55b0\u65ad\u30a2\u30ea \u8d64\u30a2\u30ea \u901f)</div></div><div class=A id="#testplay-0">' + na(0) + '<div class=desc>(\uff14\u4eba\u6253 \u6771\u98a8 \u55b0\u65ad\u30a2\u30ea \u8d64\u30a2\u30ea)</div></div><div class=A id="#testplay-16">' + na(16) + '<div class=desc>(\uff13\u4eba\u6253 \u6771\u98a8 \u55b0\u65ad\u30a2\u30ea \u8d64\u30a2\u30ea)</div></div><div class=A id="#testplay-1536">' + na(1536) + '<div class=desc>(\uff14\u4eba\u6253 \u6771\u98a8 \u55b0\u65ad\u30a2\u30ea \u8d64\u30a2\u30ea \u795d\u5100)</div></div><div class=A id="#testplay-1552">' + na(1552) + "<div class=desc>(\uff13\u4eba\u6253 \u6771\u98a8 \u55b0\u65ad\u30a2\u30ea \u8d64\u30a2\u30ea \u795d\u5100)</div></div>", "font-size:80%;text-align:left;", 0)
            },
            "#testplay": function(a, b) {
                if (g()) {
                    var c = ~~b;
                    nb(!0, 3, 1);
                    Z.cancel.style.display = "";
                    Z.logout.style.display = "none";
                    Y.K({
                        tag: "JOIN",
                        t: z + "," + c
                    })
                }
            },
            rule: function(a) {
                H["#rule0"]("#" + a.id)
            },
            "#rule0": function(b, d) {
                for (var g = 0; g < sa.length; ++g)
                    J[sa[g]] = ~~J.$a[g] + ":<div class=n2r>" + ~~J.Va[g] + "</div>";
                var m = []
                  , h = H[2]
                  , k = H[17]
                  , l = H[16]
                  , n = "";
                b && void 0 === d && (n += '<div class=A id="' + b + '-0">SELECT GAME</div>');
                for (var p = Bc.concat(~~M.swar ? Cc : []), g = 0; g < p.length; ++g) {
                    var y = !0
                      , w = p[g]
                      , x = w & 16 ? l : k;
                    if (!z)
                        switch (ma(w) + 4 * (0 != (w & 1536))) {
                        case 0:
                            y = 13 <= x[0] && 1800 <= x[2] ? !1 : !0;
                            break;
                        case 1:
                            y = 16 <= x[0] && 2E3 <= x[2] ? !1 : 9 <= x[0] || 60 <= h;
                            break;
                        case 2:
                            y = 13 <= x[0] && 1800 <= x[2] ? !0 : !1;
                            break;
                        case 3:
                            y = 16 <= x[0] && 2E3 <= x[2] ? h : !1;
                            break;
                        case 6:
                            y = 13 <= x[0] && 1800 <= x[2] ? h : !1
                        }
                    else if (1E4 > z && ma(w) + 4 * (0 != (w & 1536)))
                        continue;
                    y ? (m[w] = 1,
                    n && (n += '<div class="A nobr"id="' + b + "-" + w + '">' + F(w) + "</div>")) : n && "#rule3" == b && (n += '<div class="A nobr" id="' + b + "-" + w + '">' + na(w) + "</div>")
                }
                b && "#rule3" != b && n && !z && (9 <= k[0] || 60 <= h || (n += '<div class=A id="' + b + '-128">\u203b\u56db\u9ebb\u4e0a\u7d1a\u5353</div>'),
                9 <= l[0] || 60 <= h || (n += '<div class=A id="' + b + '-144">\u203b\u4e09\u9ebb\u4e0a\u7d1a\u5353</div>'),
                13 <= k[0] && 1800 <= k[2] || (n += '<div class=A id="' + b + '-32">\u203b\u56db\u9ebb\u7279\u4e0a\u5353</div>'),
                13 <= l[0] && 1800 <= l[2] || (n += '<div class=A id="' + b + '-48">\u203b\u4e09\u9ebb\u7279\u4e0a\u5353</div>'),
                13 <= k[0] && 1800 <= k[2] && h || (n += '<div class=A id="' + b + '-1056">\u203b\u56db\u9ebb\u96c0\u8358\u6226</div>'),
                13 <= l[0] && 1800 <= l[2] && h || (n += '<div class=A id="' + b + '-1072">\u203b\u4e09\u9ebb\u96c0\u8358\u6226</div>'),
                16 <= k[0] && 2E3 <= k[2] && h || (n += '<div class=A id="' + b + '-160">\u203b\u56db\u9ebb\u9cf3\u51f0\u5353</div>'),
                16 <= l[0] && 2E3 <= l[2] && h || (n += '<div class=A id="' + b + '-176">\u203b\u4e09\u9ebb\u9cf3\u51f0\u5353</div>'));
                b && void 0 === d && (n += '<div class=A id="' + b + '-showall">\u203b\u55b0\u65ad\u30ca\u30b7ON/OFF</div>');
                if (n)
                    C.ha(n, "text-align:left;", 0);
                else if (b && "showall" == d)
                    Gb("swar", ~~!~~M.swar, 0),
                    console.log(M.swar);
                else {
                    h = a();
                    5 > h.length && (h = [1, 9]);
                    if (b) {
                        if (h[~~b.slice(-1)] == d)
                            return;
                        h[~~b.slice(-1)] = ~~d
                    }
                    for (g = 0; 5 > g; ++g)
                        if (Z["rule" + g] && Z["join" + g]) {
                            w = ~~h[g];
                            if (~w & 1) {
                                switch (w) {
                                case 128:
                                case 144:
                                    C.l("\u4e0a\u7d1a\u5353\u306e\u5165\u5834\u6761\u4ef6(\uff11\u7d1a\u4ee5\u4e0a\u307e\u305f\u306f\u6709\u52b9\u671f\u965060\u65e5\u4ee5\u4e0a)\u3092\u6e80\u305f\u3057\u3066\u3044\u307e\u305b\u3093\u203b\u4e03\u6bb5R2000\u4ee5\u4e0a\u306f\u5165\u5834\u3067\u304d\u307e\u305b\u3093");
                                    break;
                                case 32:
                                case 48:
                                    C.l("\u7279\u4e0a\u5353\u306e\u5165\u5834\u6761\u4ef6(\u56db\u6bb5R1800\u4ee5\u4e0a\u3092\u6e80\u305f\u3057\u3066\u3044\u307e\u305b\u3093");
                                    break;
                                case 160:
                                case 176:
                                    C.l("\u9cf3\u51f0\u5353\u306e\u5165\u5834\u6761\u4ef6(\u4e03\u6bb5R2000\u4ee5\u4e0a\u306e\u6709\u6599\u4f1a\u54e1)\u3092\u6e80\u305f\u3057\u3066\u3044\u307e\u305b\u3093");
                                    break;
                                case 1056:
                                case 1072:
                                    C.l("\u96c0\u8358\u6226\u306e\u5165\u5834\u6761\u4ef6(\u56db\u6bb5R1800\u4ee5\u4e0a\u306e\u6709\u6599\u4f1a\u54e1)\u3092\u6e80\u305f\u3057\u3066\u3044\u307e\u305b\u3093")
                                }
                                w = 0
                            }
                            3 == g && w && !m[w] ? (h[g] = w,
                            Z["join" + g].disabled = !0,
                            Z["rule" + g].innerHTML = na(w)) : (m[w] || (w = 0),
                            D[w] || (Z["join" + g].disabled = !w),
                            h[g] = w,
                            Z["rule" + g].innerHTML = F(w))
                        }
                    M.rule = h;
                    "#rule3" == b && c();
                    "#rule4" == b && f()
                }
            },
            join: function(b) {
                if (g()) {
                    var c;
                    if ("joincs0" != b.id && "joincs1" != b.id && "joincs2" != b.id) {
                        var d = a();
                        c = d[~~b.id.slice(-1)];
                        for (b = 0; 5 > b; ++b)
                            c == d[b] && Z["rule" + b] && (Z["rule" + b].disabled = Z["join" + b].disabled = !0)
                    } else if (x.Ba)
                        c = parseInt(x.rule[2], 16),
                        Z.joincs0.disabled = Z.joincs1.disabled = Z.joincs2.disabled = !0;
                    else {
                        if (x.joinfee) {
                            var f = M.uname;
                            if (!f || !f.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/)) {
                                C.l("\u53c2\u52a0\u8cbb\u304c\u6709\u6599\u306e\u5927\u4f1a\u306b\u53c2\u52a0\u3059\u308b\u306b\u306fID\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059\u3002\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u300c\u65b0\u898fID\u300d\u304b\u3089ID\u3092\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044");
                                return
                            }
                            C.l("\u5927\u4f1a\u3078\u306e\u53c2\u52a0\u8cbb\u3068\u3057\u3066\n\n\u6709\u52b9\u671f\u9650" + x.joinfee + "\u65e5\u5206\n\n\u3092\u652f\u6255\u3044\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f", 3, function() {
                                Va("http://b.tenhou.net/csreg?lobby=" + z + "&uname=" + f, function(a) {
                                    a = Ra(a);
                                    I.ERR({
                                        code: a.res
                                    });
                                    1027 == a.res && (H[1] = a.expire,
                                    n(),
                                    H.Bb())
                                })
                            });
                            return
                        }
                        if (x.premiumonly) {
                            f = M.uname;
                            if (!f || !f.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/)) {
                                C.l("\u6709\u6599\u4f1a\u54e1\u5411\u3051\u306e\u5927\u4f1a\u306b\u53c2\u52a0\u3059\u308b\u306b\u306fID\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059\u3002\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u300c\u65b0\u898fID\u300d\u304b\u3089ID\u3092\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044");
                                return
                            }
                            I.ERR({
                                code: 1020
                            });
                            return
                        }
                    }
                    nb(!0, 1);
                    Z.cancel.style.display = "";
                    Z.logout.style.display = "none";
                    Y.K({
                        tag: "JOIN",
                        t: z + "," + c
                    });
                    D[c] = 1
                }
            },
            openurl: function() {
                C.l('\u724c\u8b5c/\u89b3\u6226URL\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044<br><input type=text size=20 value="" style="font-size:100%;" value=""/>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    u.Dc(a.value)
                })
            },
            cancel: function() {
                nb(!1, "rule", "join", 1);
                Z.cancel.style.display = "none";
                Z.logout.style.display = "";
                D = {};
                H["#rule0"]();
                Y.K({
                    tag: "JOIN"
                })
            },
            logout: function() {
                nb(!0, 3, 1);
                v.ka(11)
            },
            purchase: function() {
                var a = M.uname;
                a && a.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? kb ? H.l({
                    tag: "STORE"
                }) : r.open("https://tenhou.net/reg/?ID" + RegExp.$1, "_blank") : C.l("\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u300c\u65b0\u898fID\u300d\u304b\u3089ID\u3092\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044")
            },
            hairi: function() {
                r.open("https://tenhou.net/2/", kb ? "_system" : "_blank")
            },
            help: function() {
                r.open("https://tenhou.net/man/", kb ? "_system" : "_blank")
            },
            chatInput: function() {
                C.l('CHAT:<input type=text size=15 style="font-size:100%;"/>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    (a = a.value) && Y.K({
                        tag: "CHAT",
                        text: a
                    })
                })
            },
            Cc: function(b) {
                if (Z.hdr && !Z.joincs0) {
                    var c = Z.hdr.childNodes;
                    if (c && !(2 > c.length))
                        if (b && "join" == b.name) {
                            b = ~~a()[~~b.id.slice(-1)];
                            var d = ~~H[17][0]
                              , f = ~~H[16][0]
                              , g = "";
                            if (!(b & 3584)) {
                                var h = [0, 0, 0, 0];
                                switch (ma(b)) {
                                case 0:
                                    h[0] = 20;
                                    h[1] = 10;
                                    break;
                                case 1:
                                    h[0] = 40;
                                    h[1] = 10;
                                    break;
                                case 2:
                                    h[0] = 50;
                                    h[1] = 20;
                                    break;
                                case 3:
                                    h[0] = 60,
                                    h[1] = 30
                                }
                                b & 16 ? (h[0] += h[1],
                                h[1] = 0,
                                h[2] = oa[f]) : h[3] = oa[d];
                                b & 8 && (h[0] *= 1.5,
                                h[1] *= 1.5,
                                h[2] *= 1.5,
                                h[3] *= 1.5);
                                g += ga[b & 16 ? f : d] + B("[");
                                g = b & 16 ? g + (B("1\u4f4d") + "+" + h[0] + "   " + B("2\u4f4d") + "+" + h[1] + "   " + B("3\u4f4d") + h[2]) : g + (B("1\u4f4d") + "+" + h[0] + "   " + B("2\u4f4d") + "+" + h[1] + "   " + B("3\u4f4d") + "0   " + B("4\u4f4d") + h[3]);
                                g += B("]") + " "
                            }
                            g += sb((0 != (b & 2048) ? "\uff11\u5c40" : b & 8 ? "\u6771\u5357" : "\u6771\u98a8") + (b & 3584 ? "\u6253\u3061\u5207\u308a" : b & 16 ? "+3\u5c40\u30b5\u30c9\u30f3\u30c7\u30b9" : "+4\u5c40\u30b5\u30c9\u30f3\u30c7\u30b9"));
                            g += " " + sb(B("\u30a6\u30de") + (0 != (b & 2048) ? "\u00d7" : 0 != (b & 1536) ? b & 16 ? "0-30" : "10-30" : b & 16 ? "0-20" : "10-20"));
                            g += " " + sb(B("1\u672c\u5834") + (0 != (b & 2048) ? "--" : 0 != (b & 1536) && ~b & 8 ? b & 16 ? "1000" : "1500" : b & 16 ? "200" : "300"));
                            g += " " + sb(B("\u660e\u69d3\u30c9\u30e9") + (b & 3584 ? "\u5148" : "\u5f8c"));
                            g += " " + sb(B("\u55b0\u65ad") + (b & 4 ? "\u00d7" : "\u25cb"));
                            g += " " + sb(B("\u795d\u5100") + (~b & 512 ? "\u00d7" : b & 1024 ? "1\u679a5000\u70b9" : "1\u679a2000\u70b9"));
                            g += " " + sb(B("\u6771\u897f\u5834") + (0 != (b & 1536) && ~b & 8 ? "\u25cb" : "\u00d7"));
                            g += " " + sb(B("\u548c\u4e86\u6b62\u3081") + "\u25cb");
                            g += " " + sb(B("\u8074\u724c\u6b62\u3081") + "\u25cb");
                            0 != (b & 1536) && (g += " " + sb(B("\u6bb5\u4f4d\u5909\u52d5") + "\u30ca\u30b7"));
                            c[1].innerHTML = g;
                            c[0].style.display = "none";
                            c[1].style.display = ""
                        } else
                            c[1].innerHTML = "",
                            c[0].style.display = "",
                            c[1].style.display = "none"
                }
            },
            Hc: function(b) {
                var c = a();
                c[3] = c[4] = b;
                M.rule = c
            }
        }
    }());
    H["#rule1"] = H["#rule2"] = H["#rule3"] = H["#rule4"] = H["#rule0"];
    Aa(H, function() {
        function a() {
            Z.uname.value = M.uname && 19 == M.uname.length && (~~M.hideid || M.gpid) ? "ID########-########" : M.uname || "NoName"
        }
        return {
            LOGIN: function(f, c) {
                var b = "";
                location.search.match(/^\?(L[1-9][0-9]{3})/) ? b = B("\u500b\u5ba4") + RegExp.$1 : location.search.match(/^\?(C[0-9]{8})/) && (b = B("\u5927\u4f1a") + RegExp.$1.substr(0, 5));
                c.style.border = "";
                var g = 3.683 * Q[1] * 2.3
                  , d = 2.604 * Q[1] * 2.3;
                c.innerHTML = "" + ('<div style="position:relative;"><img src="http://p.mjv.jp/3/img/bglogow' + Xa(4, ~~g) + Xa(4, ~~d) + '.png" width=' + ~~(g / t) + " height=" + ~~(d / t) + ' style="margin:0.5em 0;"/><span style="position:absolute;bottom:2em;">' + b + '</span></div><div id=pane0><table cellpadding=0 cellspacing=0 width=100%><tr><td><input name=uname size=22 style="margin:0;padding:0;color:#fff;background:none;text-align:center;border:solid 1px #444;width:100%;"/></td><td width=1><div class=select-wrapper><button name=sx></button></div></td><td width=1><button name=ok style="padding:0 1em;">OK</button></td></tr></table><button name=clearid>ID\u5909\u66f4</button><button name=cfg>\u8a2d\u5b9a</button><div class=select-wrapper><button name=mvlb>\u30ed\u30d3\u30fc\u306e\u79fb\u52d5</button></div></div><div id=pane1><button name=ok style="width:100%;">\u304a\u8a66\u3057\u30b2\u30b9\u30c8\u30ed\u30b0\u30a4\u30f3</button><button name=regid>\u65b0\u898fID\u767b\u9332</button><button name=idcont>ID\u3067\u7d9a\u304d\u304b\u3089</button><button name=cfg>\u8a2d\u5b9a</button><br></div>');
                yc(c);
                Z.pane0.style.display = Z.pane1.style.display = "none";
                Z["pane" + (M.uname ? 0 : 1)].style.display = "";
                H["#sx"]();
                a();
                fb && kb && za(Z.uname, {
                    focus: function() {
                        wb(1)
                    },
                    blur: function() {
                        wb()
                    }
                });
                "AUTOLOGIN" == f.tag || M.gpid ? (H.b.style.display = "none",
                H.ok()) : Tb.J.canvas.style.visibility = "hidden"
            },
            NINTEI: function(a, c) {
                cc().xc = Ac(3E3);
                c.innerHTML = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">\u8a8d\u5b9a</div><div style="text-align:left;margin:1em 0;display:inline-block;">' + decodeURIComponent(a.nintei).replace(/\n/g, "<br>") + '</div><button name=ok style="padding:0 2em;">OK</button>';
                yc(c)
            },
            clearid: function() {
                C.l("\u5165\u529b\u3057\u3066\u3042\u308bID\u3092\u30af\u30ea\u30a2\u3057\u307e\u3059\u304c\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1fID\u3092\u7d1b\u5931\u3057\u306a\u3044\u3088\u3046\u306b\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 3, function() {
                    M.removeItem("uname");
                    a();
                    Z.pane0.style.display = "none";
                    Z.pane1.style.display = ""
                })
            },
            sx: function() {
                C.ha('<div class=A id="#sx-M">\u7537</div><div class=A id="#sx-F">\u5973</div>', "", 0)
            },
            "#sx": function(a, c) {
                "F" == (a ? c : "F" == M.sx ? "F" : "") ? (Z.sx.innerHTML = "\u5973",
                M.sx = "F") : (Z.sx.innerHTML = "\u7537",
                M.removeItem("sx"))
            },
            cfg: function() {
                H.l({
                    tag: "CONFIG"
                })
            },
            mvlb: function() {
                C.ha('<a class=A href="?L0000">\u30e9\u30f3\u30ad\u30f3\u30b0\u6226<div class=desc>(\u6bb5\u4f4d\u6226\u3001\u96c0\u8358\u6226)</div></a><a class=A href="?C00112233" >\u30a4\u30d9\u30f3\u30c8\u4f1a\u5834\uff11<div class=desc>(\u516c\u5f0f\u30a4\u30d9\u30f3\u30c8\u3067\u4f7f\u7528\u3057\u307e\u3059)</div></a><a class=A href="?C00223344" >\u30a4\u30d9\u30f3\u30c8\u4f1a\u5834\uff12</a><div class=A id="#sellb" >\u305d\u306e\u4ed6<div class=desc>(\u500b\u5ba4\u756a\u53f7\u3092\u6307\u5b9a\u3057\u3066\u30ed\u30d3\u30fc\u3092\u79fb\u52d5\u3057\u307e\u3059)</div></div><a class=A href="https://tenhou.net/make_lobby.html" target=_blank>\u30ed\u30d3\u30fc\u306e\u65b0\u898f\u4f5c\u6210<div class=desc>(\u5929\u9cf3\u30b5\u30a4\u30c8\u306e\u500b\u5ba4\u4f5c\u6210\u30da\u30fc\u30b8\u3092\u958b\u304d\u307e\u3059)</div></a>', "font-size:80%;", 0)
            },
            "#sellb": function() {
                var a = "L0000";
                location.search.match(/^\?(L[1-9][0-9]{3}|C[0-9]{8})/) && (a = RegExp.$1);
                C.l('\u79fb\u52d5\u3059\u308b\u30ed\u30d3\u30fc\u756a\u53f7\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002<br>\u4f8b)L8141, C00112233<br>\u307e\u305f\u306f 8141, 00112233<br><input type=text size=15 value="' + a + '" style="font-size:100%;"/><br>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    a = a.value;
                    a.match(/^L?(\d{4})$/) ? location.href = "?L" + RegExp.$1 : a.match(/^C?(\d{8})$/) && (location.href = "?C" + RegExp.$1)
                })
            },
            regid: function() {
                C.l('\u30d7\u30ec\u30fc\u30e4\u540d\u30928\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044<br><input type=text size=22 style="font-size:100%;"/><br>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    var c = a.value;
                    if (c)
                        return Va("http://b.tenhou.net/regid?q=1&uname=" + encodeURIComponent(c), function(a) {
                            a = Ra(a);
                            0 != a.res ? I.ERR({
                                code: a.res
                            }) : (c = decodeURIComponent(a.uname),
                            C.l(c + "<br><br>\u3053\u306e\u30d7\u30ec\u30fc\u30e4\u540d\u3067\u65b0\u3057\u3044ID\u3092\u4f5c\u6210\u3057\u307e\u3059\u304b\uff1f", 3, function() {
                                Va("http://b.tenhou.net/regid?uname=" + encodeURIComponent(c), function(a) {
                                    a = Ra(a);
                                    1012 != a.res ? I.ERR({
                                        code: a.res
                                    }) : (M.uname = Z.uname.value = a.id,
                                    C.l(ka[1012]),
                                    Z.pane0.style.display = "",
                                    Z.pane1.style.display = "none")
                                })
                            }))
                        }),
                        !0
                })
            },
            idcont: function() {
                C.l('\u30d7\u30ec\u30fc\u30e4ID(\u534a\u89d219\u6587\u5b57)\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044<br><input type=text size=22 value="ID00000000-aabbccdd" style="font-size:100%;margin:0.25em"/><br><div id=info></div><small class=gray>\u203b\u30a2\u30d7\u30ea\u7248\u4ee5\u5916\u3067\u4f5c\u6210\u3057\u305fID\u3082\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002</small>', 3, function(f) {
                    f = f.getElementsByTagName("INPUT")[0];
                    var c = f.value;
                    f = cb.getElementById("info");
                    if ("ID00000000" != c.substr(0, 10) && c.match(/^ID[0-9A-F]{8}\-[0-9a-zA-Z]{8}$/))
                        f.innerHTML = "";
                    else
                        return f.innerHTML = '<span style="font-size:75%;color:#F00">ID\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093</span>',
                        !1;
                    M.uname = c;
                    a();
                    Z.pane0.style.display = "";
                    Z.pane1.style.display = "none";
                    return !0
                })
            }
        }
    }());
    H.AUTOLOGIN = H.LOGIN;
    Aa(H, {
        SPLASH: function(a, f) {
            for (var c = r.tenhouEventInfo, b = 4 > c.length ? 2 : 5, g = .5 > Math.random() ? 0 : 2, d = '<table cellpadding=0 cellspacing=0 align=center width=100% style="font-size:0;"><tr>', l = 0; l < b; ++l) {
                var p = c.splice(Math.floor(Math.random() * c.length), 1)[0]
                  , n = l != g && 5 == b ? 1 : 2
                  , d = d + ("<td rowspan=" + n + " colspan=" + n + " width=" + 25 * n + '% ><a href="https://tenhou.net' + p.href + '" target=_blank><img src="https://tenhou.net' + (p.img ? p.img : p.href + "title.jpg") + '" border=0 style="width:100%;"/></a></td>');
                2 == l && (d += "</tr><tr>");
                c.length < b - l - 1 && c.push(p)
            }
            d += '</tr></table><div style="padding:0.75em 0;"><small>';
            r.trainingInfo && (d += r.trainingInfo + "<br>");
            f.innerHTML = d + '</small></div><button name=ok style="width:8em;">OK</button>';
            yc(f)
        }
    });
    Aa(H, function() {
        var a;
        return {
            STORE: function(f, c) {
                a = -1;
                c.innerHTML = '<div><br><br>\u5546\u54c1\u3092\u9078\u629e\u3057\u3066\u300c\u8cfc\u5165\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002<br>\u91d1\u984d\u306f\u901a\u8ca8\u306b\u3088\u3063\u3066\u306f\u5909\u52d5\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002<br><br><div class=select-wrapper><button name=iap>SELECT PRODUCT</button></div><br><br><button name=storePurchase style="width:8em;">\u8cfc\u5165</button><br></div><br><br><hr><button name=exit style="width:6em;">CLOSE</button>';
                yc(c)
            },
            storePurchase: function() {
                if (-1 != a) {
                    var f = M.uname;
                    f.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) && (f = RegExp.$1,
                    store.order(a).then(function() {
                        nb(!0, 2)
                    }).error(function(a) {
                        nb(!1, 2);
                        C.l("STORE ERROR " + a.code + ": " + a.message)
                    }))
                }
            },
            iap: function() {
                var a = "", c;
                for (c in store.products) {
                    var b = store.products[c];
                    b.valid && (a += '<div class=A id="#iap-' + c + '">' + sb(b.title) + "<br>" + b.price + "</div>")
                }
                C.ha(a, "font-size:75%;", 0)
            },
            "#iap": function(f, c) {
                var b = store.products[~~c];
                a = b.id;
                Z.iap.innerHTML = b.title + " " + b.price
            }
        }
    }());
    kb && xa(cb, "deviceready", function() {
        if (1.3 > (r.storeVersion || 0)) {
            var a = "net.tenhou.catalog20170119.";
            store.register({
                id: a + "ex30",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex60",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex120",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex180",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex300",
                type: store.CONSUMABLE
            })
        } else
            a = "net.tenhou.catalog20170211.",
            store.register({
                id: a + "ex30",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex60",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex120",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex180",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex300",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex600",
                type: store.NON_RENEWING_SUBSCRIPTION
            });
        store.when("product").approved(function(a) {
            M.uname.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? (store.validator = "http://tenhou.net/reg/via_cordova.cgi?id=" + RegExp.$1,
            a.verify()) : a.finish()
        });
        store.when("product").verified(function(a) {
            a.finish()
        });
        store.when("product").finished(function() {
            localStorage.removeItem("sk_receiptForTransaction");
            localStorage.removeItem("sk_receiptForProduct");
            localStorage.removeItem("sk_appStoreReceipt");
            nb(!1, 2)
        });
        store.when("product").cancelled(function() {
            nb(!1, 2)
        });
        store.error(function() {
            nb(!1, 2)
        });
        store.ready(function() {});
        store.refresh()
    });
    Aa(H, function() {
        function a(a) {
            return a.replace(/\s+$/, "")
        }
        function f(a) {
            return Bb(a).replace(/(\d)([mpsz])(?![mpsz])/g, function(a, b, c) {
                a = ("m" == c ? 10 : "p" == c ? 20 : "s" == c ? 30 : 40) + ~~b;
                10 == a && (a = 51);
                20 == a && (a = 52);
                30 == a && (a = 53);
                40 == a && (a = 69);
                b = ~~(.6 * Q[0]);
                return '<img src="http://p.mjv.jp/6/img/edit' + Xa(3, b) + 0 + Xa(2, a) + '.png" style="background:' + (69 == a ? "#444" : "#EEE") + ';vertical-align:middle;" width="' + b / t + 'px" />'
            })
        }
        function c(a) {
            var b = a >> 2;
            return (27 > b && 16 == a % 36 ? "0" : b % 9 + 1) + "mpsz".substr(b / 9, 1)
        }
        function b(a) {
            Z.trtitle.innerHTML = h.title || "\u5929\u9cf3\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0";
            Z.trprogress.innerHTML = '<span class=gray style="float:right;font-weight:bold;">' + (a ? "A" : "Q") + Xa(2, k ? k[0] + 1 : 1) + "/" + Xa(2, k ? k.container.length : 1) + "</span>";
            Z.trmain.innerHTML = f((h[a ? "explanation" : "question"] || "").replace(/\n/g, "<br>"));
            Z.trmain.style.height = (a ? 14 : 8) + "em";
            Z.ok.disabled = !1;
            switch (a) {
            case 0:
                F = !1;
                H.b.classList.remove("hide");
                Z.ok.innerHTML = "OK";
                Y.nb();
                I.da();
                I.connected = 15;
                a = H[17] || "";
                Y.pa({
                    tag: "UN",
                    n0: H[0] || "\u81ea\u5bb6",
                    n1: "\u4e0b\u5bb6",
                    n2: "\u5bfe\u9762",
                    n3: "\u4e0a\u5bb6",
                    dan: ~~a[0] + ",0,0,0",
                    rate: parseFloat(a[2]) + ",0,0,0",
                    sx: ("F" == M.sx ? "F" : "M") + ",M,M,M"
                });
                I.fa = 0;
                Tb.R();
                var b = [q(Fb(h.hai0)), q(Fb(h.hai1)), q(Fb(h.hai2)), q(Fb(h.hai3))];
                a = [];
                h.packet && Array.prototype.push.apply(a, JSON.parse(JSON.stringify(h.packet)));
                2 == b[0].length % 3 && a.push({
                    tag: "T" + b[0].pop()
                });
                var c = (h.seed ? h.seed : "0,0,0,0,0,").split(",");
                h.kyoku && (c[0] = h.kyoku);
                h.honba && (c[1] = h.honba);
                h.nagare && (c[2] = h.nagare);
                h.dora && (c[5] = c[5] = Fb(h.dora));
                Y.pa({
                    tag: "TRAININGINIT",
                    seed: "" + c,
                    ten: h.ten,
                    oya: ~~h.oya,
                    hai0: "" + Ta(b[0]),
                    m0: h.m0,
                    kawa0: Fb(h.kawa0),
                    hai1: "" + Ta(b[1]),
                    m1: h.m1,
                    kawa1: Fb(h.kawa1),
                    hai2: "" + Ta(b[2]),
                    m2: h.m2,
                    kawa2: Fb(h.kawa2),
                    hai3: "" + Ta(b[3]),
                    m3: h.m3,
                    kawa3: Fb(h.kawa3)
                });
                for (b = 0; b < a.length; ++b)
                    Y.pa(xb.lb(a[b]));
                break;
            case 1:
                Z.ok.innerHTML = "NEXT"
            }
            H.Hb(1)
        }
        function g(a) {
            m ? a() : Va("http://tenhou.net/3/tr/auth.cgi?" + M.uname, function(b) {
                m = b;
                a()
            }, function() {
                I.ERR({
                    code: 1200
                })
            })
        }
        function d(a) {
            h = k = void 0;
            y = a.match(/\.json$/) ? a : "free-sample.json";
            Va("http://tenhou.net/3/tr/" + y + "?" + m, function(b) {
                try {
                    h = JSON.parse(b)
                } catch (ca) {
                    alert("JSON\u306b\u4e0d\u5177\u5408\u304c\u3042\u308b\u305f\u3081\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305f\n\n" + ca);
                    return
                }
                if ("membersonly" == h.error || "subscribe" == h.error) {
                    b = M.uname;
                    if (!b || !b.match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/))
                        return I.ERR({
                            code: 1200
                        });
                    "membersonly" == h.error ? C.l("\u3053\u306e\u554f\u984c\u306f\u6709\u6599\u4f1a\u54e1\u306b\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002<br><br>\u4f1a\u8cbb\u306e\u304a\u652f\u6255\u3044\u3092\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002", 3, H.purchase, H.exit) : C.ha('<div style="margin:0.5em;">\u8cfc\u8aad\u671f\u9593\u3068\u6599\u91d1\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002</div><div class=A id="#trs-1">1\u65e5\u9593 - \u6709\u52b9\u671f\u96507\u65e5\u5206</div><div class=A id="#trs-7">7\u65e5\u9593 - \u6709\u52b9\u671f\u96508\u65e5\u5206</div><div class=A id="#trs-21">21\u65e5\u9593 - \u6709\u52b9\u671f\u96509\u65e5\u5206</div>', "", 0)
                } else if (h.container)
                    k = h,
                    H["#trjump"](0, 0);
                else if (u.training) {
                    if (!Z.json)
                        if (60 > H[2])
                            alert("\u7de8\u96c6\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u306b\u306f\u6709\u52b9\u671f\u9650\u306e\u6b8b\u308a\u65e5\u6570\u304c60\u65e5\u4ee5\u4e0a\u5fc5\u8981\u3067\u3059\u3002");
                        else {
                            Jb.style.height = Ib = 0;
                            db.style.overflow = "";
                            for (var c = '<br><hr><br><table class=trtab width=100%><tr><td class=bth width=1>\u8868\u984c</td><td width=100%><input name=title style="width:100%;"></td></tr><tr><td class=bth width=1>\u554f\u984c</td><td width=100%><textarea name=question maxlength=1024 rows=10 style="width:100%;"></textarea></td></tr><tr><td class=bth width=1>\u56de\u7b54</td><td width=100%><input name=answer style="width:100%;"><br>' + B("\u30ab\u30f3\u30de\u533a\u5207 \u4f8b)8m,8p,r2p(\u30ea\u30fc\u30c12p)") + '</td></tr><tr><td class=bth width=1>\u89e3\u8aac</td><td width=100%><textarea name=explanation maxlength=4096 rows=10 style="width:100%;"></textarea></td></tr><tr><td class=bth width=1>\u88dc\u8db3</td><td width=100%><textarea name=comment maxlength=4096 rows=10 style="width:100%;"></textarea></td></tr></table><hr><table class=trtab width=100%><tr><td class=bth width=1>\u5c40</td><td><input name=kyoku><br>' + B("0:\u67711\u5c40 ... 7:\u53574\u5c40") + "</td></tr><tr><td class=bth width=1>\u672c\u5834</td><td><input name=honba></td></tr><tr><td class=bth width=1>\u4f9b\u8a17</td><td><input name=nagare></td></tr><tr><td class=bth width=1>\u30c9\u30e9</td><td><input name=dora></td></tr><tr><td class=bth width=1>\u89aa</td><td><input name=oya><br>" + B("0:\u81ea\u5bb6 1:\u4e0b\u5bb6 2:\u5bfe\u9762 3:\u4e0a\u5bb6") + "</td></tr></table>", d = ["\u81ea\u5bb6", "\u4e0b\u5bb6", "\u5bfe\u9762", "\u4e0a\u5bb6"], f = 0; 4 > f; ++f)
                                c += "<br><hr><br><span class=bth>\u25a0" + d[f] + "</span><br><table class=trtab width=100%><tr><td class=bth width=1>\u70b9\u6570</td><td width=100%><input name=ten" + f + ' style="width:100%;"></td></tr>',
                                f || (c += "<tr><td class=bth width=1>\u624b\u724c</td><td width=100%><input name=hai" + f + ' style="width:100%;"></td></tr>'),
                                c += "<tr><td class=bth width=1>\u526f\u9732</td><td width=100%><input name=m" + f + ' style="width:100%;"></td></tr><tr><td class=bth width=1>\u6cb3</td><td width=100%><input name=kawa' + f + ' style="width:100%;"></td></tr></table>';
                            c = c + "<br><hr><br><div id=verify></div>" + ('<br><hr><br><span class=bth>\u25a0JSON</span><br><textarea name=json maxlength=8192 rows=40 style="width:100%;font-size:75%;">' + JSON.stringify(h, null, "\t") + "</textarea>");
                            Lb.innerHTML = c;
                            c = Lb.getElementsByTagName("TEXTAREA");
                            for (d = 0; d < c.length; ++d)
                                xa(c[d], "change", "json" == c[d].name ? n : p);
                            c = Lb.getElementsByTagName("INPUT");
                            for (d = 0; d < c.length; ++d)
                                xa(c[d], "change", p);
                            yc(Lb, Z)
                        }
                    123 == a.charCodeAt(0) && (b = h,
                    h = JSON.parse(a),
                    h.title = h.title || b.title,
                    h.question = h.question || b.question,
                    h.answer = h.answer || b.answer,
                    h.explanation = h.explanation || b.explanation,
                    h.comment += b.comment,
                    b = JSON.stringify(h));
                    Z.json.value = b;
                    n()
                } else
                    H["#trjump"](0, 0)
            }, function() {
                alert("\u554f\u984c\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305f")
            })
        }
        function l() {
            var a;
            a = "\u25a0\u5408\u8a08\u5f97\u70b9<br>" + ("'" + Z.ten0.value + "' + '" + Z.ten1.value + "' + '" + Z.ten2.value + "' + '" + Z.ten3.value + "' = " + (~~Z.ten0.value + ~~Z.ten1.value + ~~Z.ten2.value + ~~Z.ten3.value) + "<br><br>");
            a += "\u25a0\u4f7f\u7528\u679a\u6570<br>";
            for (var b = Fb(Z.hai0.value), b = b + ("," + Fb(Z.dora.value)), c = 0; 4 > c; ++c) {
                var b = b + ("," + Fb(Z["kawa" + c].value))
                  , d = Z["m" + c].value;
                if (d)
                    for (var d = d.split(","), g = 0; g < d.length; ++g) {
                        var h = {
                            m: d[g]
                        };
                        lc(h);
                        var m = h[0];
                        if (1 == m.length)
                            switch (h[2]) {
                            case 4:
                            case 5:
                            case 2:
                                h = m[0] >> 2,
                                m = [h + 0, h + 1, h + 2, h + 3]
                            }
                        m && (b += "," + m)
                    }
            }
            c = [];
            for (g = 0; 38 > g; ++g)
                c[g] = 0;
            b = b.split(",");
            for (g = 0; g < b.length; ++g)
                h = b[g],
                "" != h && 255 != h && 254 != h && (136 == h ? c[30]++ : 16 == h ? c[0]++ : 52 == h ? c[1]++ : 88 == h ? c[2]++ : c[10 * ~~(h / 4 / 9) + ~~(h / 4) % 9 + 1]++);
            c[30] = "-";
            for (g = 0; 38 > g; ++g)
                a += f(30 == g ? "0z" : zb(36 * ~~(g / 10) + (g % 10 ? g % 10 * 4 - 1 : 16))) + c[g] + " ",
                9 == g % 10 && (a += "<br>");
            Z.verify.innerHTML = a
        }
        function p() {
            if (Z.json) {
                var c = h.packet;
                h = {};
                h.title = a(Z.title.value);
                h.question = a(Z.question.value);
                h.answer = a(Z.answer.value);
                h.explanation = a(Z.explanation.value);
                h.comment = a(Z.comment.value);
                "" == h.comment && delete h.comment;
                var d = "0 0 0 0 0 ".split(" ");
                "0" != Z.kyoku.value && (d[0] = Z.kyoku.value);
                "0" != Z.honba.value && (d[1] = Z.honba.value);
                "0" != Z.nagare.value && (d[2] = Z.nagare.value);
                "" != Z.dora.value && (d[5] = Fb(Z.dora.value));
                h.seed = "" + d;
                h.oya = Z.oya.value;
                h.ten = [Z.ten0.value, Z.ten1.value, Z.ten2.value, Z.ten3.value];
                Z.hai0.value && (h.hai0 = Ab(Fb(Z.hai0.value).split(",")));
                for (d = 0; 4 > d; ++d)
                    "" != h.ten[d] && (h.ten[d] = ~~(h.ten[d] / 100)),
                    Z["m" + d].value && (h["m" + d] = Z["m" + d].value),
                    Z["kawa" + d].value && (h["kawa" + d] = Ab(Fb(Z["kawa" + d].value).split(",")));
                h.ten = "" + h.ten;
                c && (h.packet = c);
                Z.json.value = JSON.stringify(h, null, "\t").replace(/"packet": \[[^\]]*\]/, '"packet": ' + JSON.stringify(c));
                b(0);
                l()
            }
        }
        function n() {
            if (Z.json) {
                try {
                    h = JSON.parse(Z.json.value)
                } catch (x) {
                    alert("JSON\u306b\u4e0d\u5177\u5408\u304c\u3042\u308b\u305f\u3081\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305f\n\n" + x);
                    return
                }
                var a = (h.seed ? h.seed : "0,0,0,0,0,").split(",");
                Z.title.value = h.title || "";
                Z.question.value = h.question || "";
                Z.answer.value = h.answer || "";
                Z.explanation.value = h.explanation || h.description || "";
                Z.comment.value = h.comment || "";
                Z.kyoku.value = h.kyoku || a[0];
                Z.honba.value = h.honba || a[1];
                Z.nagare.value = h.nagare || a[2];
                Z.dora.value = h.dora || Ab(a.slice(5));
                Z.oya.value = h.oya || 0;
                for (var a = (h.ten ? h.ten : ",,,").split(","), c = 0; 4 > c; ++c)
                    Z["ten" + c].value = "" != a[c] ? 100 * a[c] : "",
                    c || (Z["hai" + c].value = h["hai" + c] || ""),
                    Z["m" + c].value = h["m" + c] || "",
                    Z["kawa" + c].value = h["kawa" + c] || "";
                b(0);
                l()
            }
        }
        var k, h, m, y = "", F = !1;
        return {
            TRAINING: function(a, b) {
                I.a = 4;
                Y.ea();
                b.innerHTML = '<div style="width:100%;"><table width=100% cellpadding=0 cellspacing=0><tr><td align=left class=gray id=trtitle></td><td id=trprogress align=right></td></tr></table><hr><div style="position:relative;"><div id=trmain class=vscl style="line-height:1.2em;height:8em;overflow-y:scroll;text-align:left;"><br><br>' + B("<center>\u5de6\u4e0b\u306e\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u7d42\u4e86\u3057\u3066<br><br>\u3082\u3046\u4e00\u5ea6\u958b\u3044\u3066\u304f\u3060\u3055\u3044\u3002</center>") + '</div><div class=sblink style="visibility:hidden;">\u25bc</div></div><hr><table width=100% cellpadding=0 cellspacing=0><tr><td align=left width=1><button name=trmenu style="font-family:cwTeX-Q-Kai-T,icons2,serif;">\ue808</button></td><td class=ra0 style="border:1px solid #444;" width=100%><span class="bt3 ra0" style="color:#444;font-size:150%;">\u5353\u8868\u793a<span></td><td align=right width=1><button name=ok style="width:6em;" disabled>OK</button></td></tr></table></div>';
                yc(b);
                H.b.classList.add("flipinhs");
                g(function() {
                    d(a.file)
                })
            },
            Hb: function(a) {
                nb(!1, "ok");
                H.b.style.display = a ? "" : "none";
                v.b.style.display = a ? "none" : "";
                v[1572868].innerHTML = "\ue800 \u554f\u984c"
            },
            Gc: function(a) {
                a && "NEXT" != Z.ok.innerHTML && !Zb.J.canvas.style.display ? (H.Hb(0),
                2 == V[32].length % 3 && jc({
                    tag: "T"
                }),
                Z.ok.innerHTML = "CLOSE") : (H.b.classList.add("hide"),
                xa(H.b, "animationend", function(a) {
                    this.removeEventListener(a.type, arguments.callee, !1);
                    k && (k[0] = (k[0] + 1) % k.container.length,
                    h = k.container[k[0]]);
                    b(0)
                }))
            },
            Vb: function(a) {
                console.log("sendTrainingAns", a);
                var d;
                switch (a.tag) {
                case "REACH":
                    F = !0;
                    Y.pa({
                        tag: "REACH",
                        who: 0,
                        step: 1
                    });
                    return;
                case "D":
                    d = (F ? "r" : "") + c(a.p);
                    break;
                case "N":
                    d = "N",
                    a.type && (d += "-" + a.type),
                    a.hai0 && (d += "-" + a.hai0),
                    a.hai1 && (d += "-" + a.hai1),
                    a.hai2 && (d += "-" + a.hai2)
                }
                if (d) {
                    a = h.answer.split(",");
                    for (var f = 0; f < a.length && a[f] != d; ++f)
                        ;
                    f < a.length && (d = "")
                }
                setTimeout(function() {
                    if (d)
                        b(1);
                    else {
                        ic(24, 0, 0);
                        var a = A("DIV", Sb, "flipinqs tsv", {
                            innerHTML: "\u25cb"
                        }, {
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            fontSize: "1600%",
                            fontWeight: "bold",
                            pointerEvents: "none",
                            marginTop: "-0.5em",
                            marginLeft: "-0.5em"
                        });
                        setTimeout(function() {
                            a.classList.add("hide");
                            xa(a, "animationend", function() {
                                a.parentNode.removeChild(a);
                                b(1)
                            })
                        }, 1E3)
                    }
                }, 1E3)
            },
            trmenu: function() {
                C.ha('<div class=A id="#trmenu-0">\u4ed6\u306e\u554f\u984c\u306b\u79fb\u52d5</div><div class=A id="#trmenu-1">\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u7d42\u4e86</div>', "", 0)
            },
            "#trmenu": function(a, b) {
                if ("1" == b)
                    u.training ? history.back() : H.exit();
                else {
                    var c = "";
                    if (k)
                        for (var d in k.container)
                            c += '<div class=A id="#trjump-' + d + '">Q' + Xa(2, ~~d + 1) + "</div>";
                    else
                        h.title && (c += '<div class=A id="#trjump-0">' + h.title + "</div>");
                    C.ha(c, "text-align:left;", 0)
                }
            },
            "#trjump": function(a, c) {
                if (k) {
                    var d = ~~c;
                    h = k.container[d];
                    k[0] = d
                }
                b(0)
            },
            "#trs": function(a, b) {
                Va("http://tenhou.net/3/tr/subscribe.cgi?file=" + y + "&auth=" + m + "&type=" + b, function(a) {
                    a = JSON.parse(a);
                    if ("insufficient" == a.error)
                        return I.ERR({
                            code: 1020
                        });
                    "ok" == a.error && d(y)
                })
            },
            ac: function(a, b) {
                if (b) {
                    var c = {}
                      , d = b.subscribing;
                    if (d)
                        for (var f = 0; f < d.length; ++f)
                            c[d[f].file] = d[f].expire;
                    a.innerHTML = "";
                    for (var g = {
                        free: '<span style="color:#088;font-weight:bold;">\u3010\u7121\u6599\u3011</span>',
                        member: '<span style="color:#088;font-weight:bold;">\u3010\u4f1a\u54e1\u7121\u6599\u3011</span>',
                        subscribing: '<span style="color:#880;font-weight:bold;">\u3010\u8cfc\u8aad\u4e2d\u3011</span>'
                    }, d = b.all, f = 0; f < d.length; ++f)
                        d[f].Pb = 1E3 * (d[f].type || "undefined").length + f;
                    d.sort(function(a, b) {
                        return a.Pb - b.Pb
                    });
                    for (f = 0; f < d.length; ++f) {
                        var h = d[f]
                          , m = h.file
                          , k = c[m]
                          , m = "https://tenhou.net/0/?training=" + m
                          , l = '<div style="position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;">'
                          , l = l + ('<div class=nobr style="overflow:hidden;text-overflow:ellipsis;">' + (g[k ? "subscribing" : h.type] || "") + " ");
                        h.tip && (l += '<span style="color:#F00;font-weight:bold;font-size:75%;">' + h.tip + "</span> ");
                        l += h.title + "</div>";
                        l += '<div class=nobr style="color:#CCC;overflow:hidden;text-overflow:ellipsis;font-size:75%;">';
                        l += '<span style="color:#000;background-color:#666;">\u30ec\u30d9\u30eb:' + (h.level || "\u521d\u4e2d") + "</span> ";
                        l += "\u554f\u984c\u6570:" + h.n + " ";
                        h.type && (l += "\u6bce\u6708\uff12\uff5e\uff13\u56de\u66f4\u65b0 ");
                        k && (l += "\u8cfc\u8aad\u7d42\u4e86:" + k + " ");
                        l += "</div>";
                        l += '<div class=nobr style="color:#666;overflow:hidden;text-overflow:ellipsis;">' + (h.memo || "") + "</div>";
                        l += "</div>";
                        l += '<a href="' + m + '" class=bt3 target=_blank></a>';
                        A("DIV", a, "", {
                            innerHTML: l
                        }, {
                            height: "3.4em",
                            position: "relative",
                            textAlign: "left"
                        }).childNodes[1].onclick = H.trOpen
                    }
                    A("DIV", a, "gray", {
                        innerHTML: "\u25cf\u300c\u9577\u62bc\u3057\u300d\u307e\u305f\u306f\u300c\u53f3\u30af\u30ea\u30c3\u30af\u300d\u304b\u3089\u5225\u30bf\u30d6\u3067\u958b\u304f/URL\u306e\u30b3\u30d4\u30fc\u306a\u3069\u304c\u884c\u3048\u307e\u3059"
                    }, {
                        fontSize: "75%",
                        align: "left",
                        padding: "1em 0 6em 0"
                    })
                } else
                    a.innerHTML = B("<br>Loading ..."),
                    c = (c = M.uname) && c.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? RegExp.$1 : "00000000",
                    Va("http://tenhou.net/3/tr/free-index.json?" + c, function(b) {
                        try {
                            b = JSON.parse(b)
                        } catch (Cb) {
                            return
                        }
                        H.ac(a, b)
                    })
            },
            trOpen: function(a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
                    var b = M.uname;
                    if (!b || !b.match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/))
                        return I.ERR({
                            code: 1200
                        }),
                        !1;
                    a = a.target;
                    a = a.href.split(/\?training=/);
                    if (1 != a.length)
                        return H.l({
                            tag: "TRAINING",
                            file: a[1]
                        }),
                        !1
                }
            }
        }
    }());
    var Yb = A("DIV", Sb, "nosel ts0", {
        innerHTML: "\u30d5\u30ea\u30c6\u30f3"
    }, {
        position: "absolute",
        fontSize: "60%",
        pointerEvents: "none",
        display: "none"
    })
      , V = function() {
        var a = 0;
        return {
            oa: function() {
                for (var a = 0; 4 > a; ++a)
                    V[32 | a] = [],
                    V[48 | a] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    V[16 | a] = 0,
                    delete V[64 | a]
            },
            Ec: function(a) {
                for (var c = [], b = 0; b < V[32 | a].length; ++b)
                    c.push(b);
                Ca(c, V[32 | a]);
                for (b = 0; b < V[32 | a].length; ++b)
                    if (c[b] != b) {
                        var f = R[1024 | a << 8 | c[b]]
                          , d = R[1024 | a << 8 | b];
                        Vb.L(0, d, 0);
                        d.Ca(!0, a && !v.o[1277960] ? 136 : V[32 | a][c[b]]);
                        f = Vb.L(0, f.c + d.i.offsetX, f.h + d.i.offsetY, d.c + d.i.offsetX, d.h + d.i.offsetY, .04, d.i, .5, d, 1);
                        a || ec(4, 0, f / 1E3)
                    }
                Ba(V[32 | a])
            },
            Wb: function(a) {
                v.S(256);
                $b.ea();
                if (1 == I.a || !v.o[1277960]) {
                    var c = 0;
                    a & 2 && (c = Math.max(c, V[33].length));
                    a & 4 && (c = Math.max(c, V[34].length));
                    a & 8 && (c = Math.max(c, V[35].length));
                    for (var c = 30 * c, b = 0; b < c; b += 30)
                        ic(4, 0, b / 1E3);
                    var f = 0
                      , b = 0;
                    cc()[$a++] = function(d) {
                        for (b += d; f < b && f < c; f += 30)
                            for (d = 1; 4 > d; ++d)
                                if (!(~a & 1 << d)) {
                                    var g = ~~(f / 30)
                                      , p = R[1024 | d << 8 | g];
                                    p.s && (g = V[32 | d][g],
                                    Ub.ya(),
                                    p.ga(0),
                                    p.u = d,
                                    p.i = O[d << 8 | N.Wa[g]],
                                    p.ga(1),
                                    Ub.za())
                                }
                        return f < c
                    }
                }
            },
            vb: function(f) {
                Ub.ya();
                for (var c = 0, b = V[32 | f], g = 0; 14 > g; ++g) {
                    var d = R[1024 | f << 8 | g];
                    if (d.s) {
                        var l = R[1024 | f << 8 | c];
                        l.Ca(!0, f && !v.o[1277960] ? 136 : b[c]);
                        l.c = d.c;
                        l.h = d.h;
                        l.la(-1025, d.Y & 1024, !1);
                        l.ga(1);
                        ++c;
                        a |= 1 << f
                    } else
                        c < b.length && b.splice(c, 1)
                }
                for (; 14 > c; ++c)
                    d = R[1024 | f << 8 | c],
                    d.s && d.ga(0);
                Ub.za()
            },
            qb: function(f) {
                if ((f || v.o[1183750]) && (!f || v.o[1277960])) {
                    Ub.ya();
                    var c = V[32 | f], b = [], g = [], d = [], l, p = -1;
                    0 == f && (l = $b.yc());
                    for (var n = 0; n < c.length; ++n) {
                        var k = R[1024 | f << 8 | n];
                        d.push({
                            Y: k.Y,
                            c: k.c,
                            h: k.h
                        });
                        g.push(c[n]);
                        b.push(n);
                        0 == f && k == l && (p = n)
                    }
                    Ca(b, g);
                    for (l = 0; l < b.length; ++l)
                        if (c[l] = g[b[l]],
                        k = R[1024 | f << 8 | b[l]],
                        b[l] == l) {
                            if (k.c != k.B || k.h != k.H)
                                a |= 1 << f
                        } else
                            n = R[1024 | f << 8 | l],
                            n.Ca(!0, f && !v.o[1277960] ? 136 : g[b[l]]),
                            k = d[b[l]],
                            n.c = k.c,
                            n.h = k.h,
                            n.la(-1042, k.Y & 1041, !1),
                            n.ga(1),
                            a |= 1 << f;
                    Ub.za();
                    -1 != p && $b.O(R[1024 | f << 8 | b[p]])
                }
            },
            kb: function() {
                for (var f = 0; 4 > f; ++f)
                    if (!(~a & 1 << f)) {
                        for (var c = [], b = 0, g = 0, d = 0; 14 > d; ++d) {
                            var l = R[1024 | f << 8 | d];
                            if (l.s) {
                                var p = l.c - l.B
                                  , n = l.h - l.H;
                                if (0 != p || 0 != n)
                                    c.length && b != p && g != n && (R.Pa(0, 200, c),
                                    c = []),
                                    b = p,
                                    g = n,
                                    c.push(l)
                            }
                        }
                        c.length && R.Pa(0, 200, c)
                    }
                a = 0
            }
        }
    }();
    V.oa();
    function jc(a) {
        if (1 == I.a || 4 == I.a)
            if (!H.b || H.b.style.display) {
                var f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                if (a)
                    if ("REACH" == a.tag)
                        for (var c = tb.wc(V[48]), b = 0; b < V[32].length; ++b) {
                            var g = c[~~(V[32][b] / 4)];
                            f[b] |= g && g.length ? 1 : 16
                        }
                    else if ("T" == a.tag && V[64])
                        for (b = V[32].length - 1,
                        f[b] |= 1,
                        --b; 0 <= b; --b)
                            f[b] |= 16;
                    else if ("N" != a.tag || 3 != a[2] && 1 != a[2])
                        for (b = 0; 14 > b; ++b)
                            f[b] |= 1;
                    else
                        for (c = {},
                        1 == (a[0][2] >> 2) - (a[0][1] >> 2) ? (0 < (a[0][1] >> 2) % 9 && (c[(a[0][1] >> 2) - 1] = 1),
                        8 > (a[0][2] >> 2) % 9 && (c[(a[0][2] >> 2) + 1] = 1)) : c[a[0][0] >> 2] = 1,
                        b = 0; b < V[32].length; ++b)
                            f[b] |= c[V[32][b] >> 2] ? 16 : 1;
                else
                    $b.ea(),
                    v.S(256);
                Ub.ya();
                for (b = 0; 14 > b; ++b)
                    S.Ta(b, -18, f[b]);
                Ub.za();
                a && $b.l(0, void 0, "T" == a.tag)
            }
    }
    ;r.requestAnimationFrame = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame || function(a) {
        setTimeout(a, 1E3 / 60)
    }
    ;
    var cc = function() {
        function a() {}
        var f = {}, c, b = 0, g = 0, d = Date.now(), l = requestAnimationFrame;
        setInterval(function() {
            var f = Date.now();
            b && g && b == g && requestAnimationFrame == l && (requestAnimationFrame = a,
            c(b + f - d),
            requestAnimationFrame = l);
            g = b;
            d = f;
            uc.Fc(f)
        }, 250);
        requestAnimationFrame(function(a) {
            c = a ? function(a) {
                var d = 0, g = 1 >= b ? 0 : a - b, m;
                for (m in f)
                    f[m](g) ? ++d : delete f[m];
                if (!d)
                    for (m in f)
                        ++d;
                d ? (b = a,
                requestAnimationFrame(c)) : b = 0
            }
            : window.performance && window.performance.now ? function() {
                var a = performance.now(), d = 0, g = 1 >= b ? 0 : a - b, m;
                for (m in f)
                    f[m](g) ? ++d : delete f[m];
                if (!d)
                    for (m in f)
                        ++d;
                d ? (b = a,
                requestAnimationFrame(c)) : b = 0
            }
            : function() {
                var a = Date.now(), d = 0, g = 1 >= b ? 0 : a - b, m;
                for (m in f)
                    f[m](g) ? ++d : delete f[m];
                if (!d)
                    for (m in f)
                        ++d;
                d ? (b = a,
                requestAnimationFrame(c)) : b = 0
            }
            ;
            requestAnimationFrame(c)
        });
        return function() {
            !b && c && (requestAnimationFrame(c),
            b = 1);
            return f
        }
    }();
    function dc(a, f) {
        if (0 < f)
            return cc()[$a++] = function(c) {
                return 0 < (f -= c) ? !0 : (a(),
                !1)
            }
            ,
            $a - 1;
        a()
    }
    function Ac(a) {
        var f = H.b.style
          , c = f.opacity = 0;
        return function(b) {
            c += b;
            f.opacity = Math.min(1, c / a);
            if (c < a)
                return 1;
            f.opacity = 1;
            return 0
        }
    }
    function zc(a) {
        var f = H.b
          , c = f.style
          , b = 0;
        return function(g) {
            b += g;
            c.opacity = Math.max(0, 1 - b / 250);
            if (250 > b)
                return 1;
            c.display = "none";
            c.opacity = 1;
            a && a(f);
            return 0
        }
    }
    ;var Q = [0, 0, 0, 0, 0, 0, 0, 0]
      , U = [0, 0, 0, 0, 0, 0, 0, 0]
      , T = [0, 0, 0, 0, 0, 0, 0, 0]
      , xc = [0, 0, 0, 0, 0, 0, 0, 0]
      , Dc = [0, 0, 0, 0, 0]
      , Ec = [0, 0, 0, 0, 0]
      , hc = [0, 0, 0, 0]
      , gc = [0, 0, 0, 0]
      , Fc = [0, 0, 0, 0]
      , Gc = [0, 0, 0, 0]
      , Qb = 0
      , Rb = 0
      , Hc = 0
      , Ic = !1;
    function Pb() {
        var a = Kb.offsetWidth * t
          , f = Kb.offsetHeight * t
          , c = M.desktop & 1;
        function b() {
            g[1] = ~~(2360 * g[0] / 31 / 56);
            l[0] = l[1] = l[4] = Math.min(~~(12 * g[0] / 31), ~~(12 * g[1] / 40));
            d[0] = d[4] = ~~(47 * g[0] / 31) - l[0];
            d[1] = ~~(37 * g[1] / 40) - l[1];
            g[4] != g[0] && (l[4] = ~~(12 * g[4] / 31),
            d[4] = ~~(47 * g[4] / 31) - l[4]);
            g[2] = g[6] = g[0];
            l[2] = l[6] = l[0];
            d[2] = d[6] = d[0];
            g[3] = g[1];
            l[3] = l[1];
            d[3] = d[1];
            g[5] = g[7] = ~~(380 * d[1] / 460);
            l[5] = l[7] = ~~(44 * g[5] / 19) - d[1];
            d[5] = d[7] = d[1];
            var b = 2 * d[1]
              , m = 2 * g[0];
            p = n = 0;
            1 == N.a || 3 == N.a ? (p = Math.max(p, m + 17 * g[0] + 2 * g[1] + m),
            n = Math.max(n, b + 17 * d[1] + 2 * d[0] + l[0] + d[4] + l[4] + (c ? d[1] : 0))) : (p = Math.max(p, m + 3 * g[1] + 6 * g[0] + 3 * g[1] + m),
            n = Math.max(n, b + 3 * d[0] + 6 * d[1] + 3 * d[0] + l[0] + d[4] + l[4] + (c ? d[1] : 0)));
            p = Math.max(p, ~~(14.1 * g[4]) + g[0]);
            Hc = d[7] + l[7] - (d[3] + l[3]);
            n = Math.max(n, ~~(2.1 * d[1]) + Hc + 4 * (2 * d[1] + d[0]) + d[1] + l[1] + d[4] + l[4]);
            n = Math.max(n, d[0] + ~~(2.1 * d[1]) + Hc + 4 * (2 * d[1] + d[0]) + 2 * d[1] + l[1] + (c ? d[1] : 0));
            return p <= a && n <= f
        }
        var g = Q, d = U, l = T, p, n;
        for (g[0] = 99; 10 < g[0]; --g[0]) {
            Ic = !0;
            g[4] = ~~(31 * (2 * d[1] + l[0]) / 47);
            if (b())
                break;
            Ic = !1;
            g[4] = ~~((a - g[0]) / 14.1);
            if (b())
                break
        }
        g[4] = ~~(a / 14.1 + 0);
        for (g[4] = Math.min(g[4], ~~(1.7 * g[0])); 10 < g[4] && !b(); --g[4])
            ;
        for (var k = 0; 8 > k; ++k)
            xc[k] = Q[k] - ~~(5 * T[4 == k ? 4 : 0] / 12);
        f - n < a - p ? n = ~~f : p = ~~a;
        Qb = p;
        Rb = n
    }
    ;function fc(a) {
        Aa(this, a)
    }
    Aa(fc.prototype, {
        Ha: function() {
            if (this.P && !this.Aa)
                if (this.i && 1 == this.s) {
                    var a = 0;
                    this.$ && this.$.i && 1 == this.$.s && this.c + Q[this.u] == this.$.c + Q[this.$.u] && this.h + T[this.u] == this.$.h + U[this.$.u] + T[this.$.u] && (a |= this.$.ua && this.$.ua.i && 1 == this.$.ua.s && this.$.c + Q[this.$.u] == this.$.ua.c && this.$.h == this.$.ua.h ? 0 : 1);
                    this.ua && this.ua.i && 1 == this.ua.s && this.c + Q[this.u] == this.ua.c && this.h + U[this.u] == this.ua.h + U[this.ua.u] && (a |= 2);
                    this.va && this.va.i && 1 == this.va.s && this.c + Q[this.u] == this.va.c + Q[this.va.u] && this.h + U[this.u] + T[this.u] == this.va.h + T[this.va.u] && (a |= 4);
                    wc[this.u << 8 | a] ? (this.P.i = wc[this.u << 8 | a],
                    this.P.s = 1) : (delete this.P.i,
                    this.P.s = 0)
                } else
                    delete this.P.i
        },
        la: function(a, f, c) {
            var b = this.Y
              , b = b & a | f;
            a = this.ja;
            f = this.Z;
            b & 4 ? (this.ja = O[this.u << 8 | (b & 1 ? 60 : 50)],
            this.Z = b & 1 ? .3 : .2) : b & 2 ? (this.ja = O[this.u << 8 | (b & 1 ? 60 : 50)],
            this.Z = b & 1 ? .2 : .1) : b & 16 ? (this.ja = O[this.u << 8 | 49],
            this.Z = .3) : b & 1024 ? (this.ja = O[this.u << 8 | 50],
            this.Z = .2) : b & 2048 ? (this.ja = O[this.u << 8 | 60],
            this.Z = .15) : b & 256 ? (this.ja = O[this.u << 8 | 49],
            this.Z = .3) : b & 512 ? (delete this.ja,
            delete this.Z) : b & 4096 ? (this.ja = O[this.u << 8 | 49],
            this.Z = b & 8192 ? .4 : .15) : (delete this.ja,
            delete this.Z);
            this.Y = b;
            !c || this.ja == a && this.Z == f || this.Qb();
            return this
        },
        ga: function(a) {
            if (!this.i)
                return this;
            var f = 0
              , c = 0;
            this.s && (f = this.P.i ? this.P.i.offsetX + this.P.i.ia : this.i.ia,
            c = this.i.ta);
            this.s = a;
            this.Ha();
            this.$ && this.$.Ha();
            this.va && this.va.Ha();
            this.ib && (this.ib.Ha(),
            this.ib.va && this.ib.va.Ha());
            this.s && (f = this.P.i ? this.P.i.offsetX + this.P.i.ia : f ? f : this.i.ia,
            c = this.i.ta);
            Ub.Ja(this.c + this.i.offsetX, this.h + this.i.offsetY - this.Aa, f, c);
            return this
        },
        Ca: function(a, f) {
            var c = this.u % 4;
            a && (c || (c += 4),
            c && 136 == f && (c += 4));
            this.i = O[c << 8 | N.Wa[f]];
            this.u = c;
            this.i || pb("PH.setImage noimg ", c, f, N.Wa[f]);
            return this
        },
        Qb: function() {
            void 0 !== this.i && 0 !== this.s && Ub.Ja(this.c, this.h - this.Aa, this.i.ia, this.i.ta)
        },
        Ka: function() {
            void 0 !== this.i && 0 !== this.s && Ub.Ja(this.c, this.h - this.Aa, this.P.i ? this.P.i.offsetX + this.P.i.ia : this.i.ia, this.i.ta)
        }
    });
    var R = {
        qa: []
    };
    (function() {
        for (var a = [function(a, b) {
            a.ua = b;
            b.ib = a
        }
        , function(a, b) {
            a.$ = b;
            b.va = a
        }
        , function(a, b) {
            a.ib = b;
            b.ua = a
        }
        , function(a, b) {
            a.va = b;
            b.$ = a
        }
        ], f = [1024, 14, 2048, 34, 3072, 26, 4096, 34, 5120, 5]; f.length; )
            for (var c = f.shift(), b = f.shift(), g = 0; 4 > g; ++g) {
                for (var d = {}, l = 0; l < b; ++l)
                    R.qa.push(R[c | g << 8 | l] = d[l] = new fc({
                        s: 0,
                        u: g,
                        c: 0,
                        h: 0,
                        Aa: 0,
                        B: 0,
                        H: 0
                    })),
                    R.qa.push(d[l].P = {
                        s: 0
                    }),
                    d[l].sa = d[l].P.sa = d[l];
                for (l = 1; l < b; ++l)
                    if (!(2048 == c && 17 == l || 3072 == c && 6 == l || 3072 == c && 12 == l || 4096 == c && 17 == l))
                        a[g](d[l - 1], d[l]);
                if (2048 == c)
                    for (l = 0; 17 > l; ++l)
                        a[(g + 1) % 4](d[l], d[l + 17]),
                        d[l].Ga = d[l + 17];
                if (3072 == c)
                    for (l = 6; 18 > l; ++l)
                        a[(g + 1) % 4](d[l], d[l - 6]);
                if (4096 == c)
                    for (l = 17; 34 > l; ++l)
                        a[(g + 1) % 4](d[l], d[l - 17]);
                if (5120 == c)
                    break
            }
        for (l = 0; a = R[1024 | l]; ++l)
            a.X = l
    }
    )();
    Aa(R, {
        O: function() {
            var a = Aa(Dc, [Q[0], 0, -Q[0], 0, Q[4]])
              , f = Aa(Ec, [0, -U[1], 0, U[1], 0])
              , c = Aa(hc, [0, Q[1], 0, -Q[1]])
              , b = Aa(gc, [U[0], 0, -U[0], 0]);
            Aa(Fc, [0, Q[1] - Q[0], Q[0] - Q[1], 0]);
            Aa(Gc, [U[0] - U[1], U[1] - U[0], 0, 0]);
            var g = 2 * U[1]
              , d = Ub.J.canvas.offsetWidth * t
              , l = Ub.J.canvas.offsetHeight * t
              , p = ~~((d - Qb) / 2)
              , n = ~~((l - Rb) / 2)
              , k = p + Qb
              , h = n + Rb - (M.desktop & 1 ? U[1] : 0)
              , m = 6 * Q[0]
              , y = 6 * U[1]
              , F = p + ~~((k - p - m) / 2)
              , g = n + g + ~~((h - U[4] - T[4] - n - g - (y + T[0])) / 2);
            R[112] = F;
            R[113] = g + y;
            R[114] = F + m;
            R[115] = g + y - U[1];
            R[116] = F + m - Q[0];
            R[117] = g - U[0];
            R[118] = F - Q[1];
            R[119] = g;
            for (var w = 0; 4 > w; ++w)
                R.Yb(w);
            for (var z, x = 0; z = R[5120 | x]; ++x)
                z.c = z.B = F + ~~((m - 5 * Q[0]) / 2) + Q[0] * x,
                z.h = z.H = g;
            if (3 == N.a) {
                w = 17 * Q[0] + 2 * Q[1];
                z = 17 * U[1] + 2 * U[0];
                for (var J = F + ~~((m - w) / 2), D = g + ~~((y - z) / 2), J = [{
                    Ea: J + w - 1 * Q[0],
                    Fa: D + z - 1 * U[0]
                }, {
                    Ea: J + w - 1 * Q[1],
                    Fa: D
                }, {
                    Ea: J,
                    Fa: D
                }, {
                    Ea: J,
                    Fa: D + z - 1 * U[1]
                }], w = 0; 4 > w; ++w)
                    for (x = 0; z = R[4096 | w << 8 | x]; ++x)
                        z.c = z.B = J[w].Ea - a[w] * (16 - x % 17) - (17 > x ? 0 : c[w]),
                        z.h = z.H = J[w].Fa - f[w] * (16 - x % 17) - (17 > x ? 0 : b[w]),
                        z.Aa = 0
            } else if (1 == N.a)
                for (w = 17 * Q[0] + Q[1],
                z = 17 * U[1] + U[0],
                J = F + ~~((m - w) / 2),
                D = g + ~~((y - z + T[0]) / 2),
                J = [{
                    Ea: J + w - Q[0],
                    Fa: D + z - U[0]
                }, {
                    Ea: J + w - Q[1],
                    Fa: D
                }, {
                    Ea: J,
                    Fa: D
                }, {
                    Ea: J,
                    Fa: D + z - U[1]
                }],
                w = 0; 4 > w; ++w)
                    for (x = 0; z = R[4096 | w << 8 | x]; ++x)
                        z.c = z.B = J[w].Ea - a[w] * (16 - x % 17),
                        z.h = z.H = J[w].Fa - f[w] * (16 - x % 17),
                        z.Aa = 17 > x ? 0 : T[w];
            else
                for (w = 0; 4 > w; ++w)
                    for (x = 0; z = R[4096 | w << 8 | x]; ++x)
                        z.c = z.h = z.Aa = 0;
            g += T[0];
            R[16] = F;
            R[17] = g;
            R[18] = m;
            R[19] = y;
            a = 3 * Q[1];
            f = 3 * U[0];
            R[48] = F + m + T[0];
            R[49] = g + y + T[0];
            R[50] = a - T[0];
            R[51] = f - T[0];
            R[52] = F + m + T[0];
            R[53] = g - f;
            R[54] = a - T[0];
            R[55] = f - T[0];
            R[56] = F - a;
            R[57] = g - f;
            R[58] = a - T[0];
            R[59] = f - T[0];
            R[60] = F - a;
            R[61] = g + y + T[0];
            R[62] = a - T[0];
            R[63] = f - T[0];
            D = 1 == N.a || 3 == N.a ? 0 : U[0];
            R[32] = F;
            R[33] = g + D;
            R[34] = m;
            R[35] = y - D - T[0];
            R[80] = k - ~~(14.1 * Q[4]) - Q[0];
            R[81] = h - U[4] - T[4];
            R[82] = R[98] = k - Q[1];
            R[85] = R[101] = n;
            R[86] = R[102] = p;
            R[96] = k - Q[0];
            R[97] = h - T[0] - U[0];
            z = ~~(2.1 * U[1]) + 4 * (2 * U[1] + U[0]) + (I.I & 16 ? U[1] : 0) + Hc;
            D = n;
            ~I.I & 16 && !Ic && (D += U[0]);
            R[99] = D + ~~((h - 2 * U[1] - D - z) / 2);
            R[83] = R[99] + (z - U[1] - T[1]);
            z += T[1];
            R[87] = n + ~~((h - U[4] - T[4] - n - z) / 2);
            R[103] = R[87] + (z - U[1] - T[1]);
            w = ~~(2.1 * Q[0]) + 4 * (2 * Q[0] + Q[1]) + (I.I & 16 ? Q[0] : 0);
            3 == N.a && (w = Math.max(w, 17 * Q[0] + 2 * Q[1]));
            1 == N.a && (w = Math.max(w, 17 * Q[0] + 1 * Q[1]));
            R[100] = F + ~~((m - w) / 2);
            ~I.I & 16 && !Ic && (R[100] = Q[1]);
            I.I & 16 && (I.v[1] || (R[100] += Q[0]),
            I.v[3] || (R[100] = p));
            R[84] = R[100] + w - Q[0];
            for (w = 0; 4 > w; ++w)
                for (R.$b(w),
                x = 0; z = R[1024 | w << 8 | x]; ++x)
                    z.c = z.B,
                    z.h = z.H;
            R[64] = R[68] = ~~(R[16] + R[18] / 2);
            R[67] = R[71] = ~~(R[17] + R[19] / 2);
            R[65] = ~~(R[81] - 1.5 * U[0]);
            R[66] = ~~(R[82] - 1.5 * Q[1]);
            R[69] = ~~(R[85] + 2.5 * U[2]);
            R[70] = ~~(R[86] + 2.5 * Q[3]);
            for (x in R.qa)
                R.qa[x].P && void 0 === R.qa[x].B && console.log(x);
            R.qa.sort(function(a, b) {
                return (a.P ? d * l : 0) + (a.sa.Aa + a.sa.H) * d + a.sa.B - ((b.P ? d * l : 0) + (b.sa.Aa + b.sa.H) * d + b.sa.B)
            })
        },
        da: function() {
            for (var a = 0; a < R.qa.length; ++a) {
                var f = R.qa[a];
                f.s = 0;
                f.P && (void 0 !== f.B && (f.c = f.B),
                void 0 !== f.H && (f.h = f.H),
                f.la(-1, 0, !1),
                delete f.fb)
            }
            for (a = 0; 4 > a; ++a)
                R.ub(a, -2)
        },
        $b: function(a) {
            for (var f, c = 0, b = 16; f = R[2048 | a << 8 | b]; --b)
                c += f.u != a;
            for (var g = 0, d = 0, b = 16; f = R[2048 | a << 8 | b]; --b) {
                f.B = R[96 + 2 * a] - Dc[a] * (16 - b);
                f.H = R[97 + 2 * a] - Ec[a] * (16 - b);
                var l = f.Ga;
                l.B = f.B + Dc[(a + 1) % 4];
                l.H = f.H + Ec[(a + 1) % 4];
                f.u != a && (g += Dc[a] - hc[(a + 1) % 4],
                d += Ec[a] - gc[(a + 1) % 4]);
                f.c = f.B + g;
                f.h = f.H + d;
                l.c = l.B + g;
                l.h = l.H + d;
                f.u != a && (f.c += Fc[a],
                f.h += Gc[a],
                l.c += Fc[a],
                l.h += Gc[a])
            }
            d = g = 0;
            a & 1 ? d = (3 == a ? 1 : -1) * ~~((2 * U[1] + U[0] - 3 * U[1]) * (4 - c) / 2) : 2 == a && (g = -~~((2 * Q[0] + Q[1] - 3 * Q[0]) * (4 - c) / 2));
            for (b = 0; f = R[1024 | a << 8 | b]; ++b)
                f.B = g + R[80 + 2 * a] + Dc[a ? a : 4] * b,
                f.H = d + R[81 + 2 * a] + Ec[a ? a : 4] * b + (3 == a ? Hc : 0)
        },
        Yb: function(a) {
            for (var f = 0, c = 0, b, g = 0; b = R[3072 | a << 8 | g]; ++g)
                if (b.B = R[112 + 2 * a] + Dc[a] * g + (hc[a] - 6 * Dc[a]) * (12 < g ? 2 : ~~(g / 6)) + f,
                b.H = R[113 + 2 * a] + Ec[a] * g + (gc[a] - 6 * Ec[a]) * (12 < g ? 2 : ~~(g / 6)) + c,
                b.u != a && (b.B += Fc[a],
                b.H += Gc[a],
                f = -Dc[a] + hc[(a + 1) % 4],
                c = -Ec[a] + gc[(a + 1) % 4]),
                b.c = b.B,
                b.h = b.H,
                5 == g || 11 == g)
                    f = c = 0
        }
    });
    Aa(R, {
        ub: function(a, f) {
            for (var c, b = 0; c = R[3072 | a << 8 | b]; ++b)
                c.u != a && (c.u = a),
                -1 != f || c.s || (f = b);
            0 <= f && (R[3072 | a << 8 | f].u = (a + 1) % 4);
            R.Yb(a)
        }
    });
    Aa(R, function() {
        function a(a) {
            var b = 0, c;
            for (c in f) {
                var d = f[c];
                if (0 <= d.t) {
                    d.na <= d.t && (d.t = d.na);
                    Ub.ya();
                    var l, p;
                    for (p in d) {
                        var n = d[p]
                          , k = n.ob;
                        if (k) {
                            var h = k.P.i ? k.P.i.offsetX + k.P.i.ia : k.i.ia
                              , m = k.i.ta
                              , y = ~~(k.B + (n.Sa - k.B) * (d.na - d.t) / d.na);
                            y <= k.c ? (h += k.c - y,
                            k.c = y) : (h += y - k.c,
                            l = k.c,
                            k.c = y,
                            y = l);
                            n = ~~(k.H + (n.wb - k.H) * (d.na - d.t) / d.na);
                            n <= k.h ? (m += k.h - n,
                            k.h = n) : (m += n - k.h,
                            l = k.h,
                            k.h = n,
                            n = l);
                            Ub.Ja(y + k.i.offsetX, n + k.i.offsetY, h, m);
                            d.na <= d.t && k.ga(k.s)
                        }
                    }
                    Ub.za()
                }
                d.na <= d.t && delete f[c];
                d.t += a;
                ++b
            }
            0 == b && mc.Ra && mc.Ra();
            return b
        }
        var f = {};
        return {
            Pa: function(c, b, g) {
                if (Vb.aa) {
                    Ub.ya();
                    for (c = 0; c < g.length; ++c)
                        b = g[c],
                        b.Ka(),
                        b.c = b.B,
                        b.h = b.H;
                    for (c = 0; c < g.length; ++c)
                        b = g[c],
                        b.ga(b.s),
                        b.Ka();
                    Ub.za()
                } else {
                    b = f[$a++] = {
                        t: -~~c,
                        na: b
                    };
                    for (c = 0; c < g.length; ++c)
                        b[c] = {
                            ob: g[c],
                            Sa: g[c].c,
                            wb: g[c].h
                        };
                    cc().Pa = a
                }
            }
        }
    }());
    var N = function() {
        function a() {
            return !1
        }
        function f(a) {
            return 16 == a || 52 == a || 88 == a
        }
        function c(a) {
            a = (135 - a + g) % 136;
            return R[4096 | ~~(a / 34) << 8 | (a % 34 >> 1) + 17 * (a & 1)]
        }
        var b, g, d, l;
        return {
            a: 0,
            bb: 0,
            Oa: !1,
            Wa: {
                136: 48
            },
            oa: function(c) {
                for (var n = N.Wa, k = 0; 136 > k; ++k) {
                    var h = ~~(k / 4);
                    n[k] = 10 * (~~(h / 9) + 1) + h % 9 + 1
                }
                I.I & 2 ? N.pb = a : (N.pb = f,
                n[16] = 51,
                n[52] = 52,
                n[88] = 53);
                n = I.fa;
                k = I.xa[3];
                h = I.xa[4];
                d = (4 + n - I.xa[0] % 4) % 4;
                N.Oa = 6 == k && 0 == h;
                g = ((n + (k + 1) + (h + 1) - 1) % 4 * 17 + 17 - 1 - (k + 1) - (h + 1)) % 68 * 2 + 2;
                N.Oa && (g = 34 * (d + 1));
                b = [0, 0, 0, 0];
                N.bb = 0;
                l = null;
                if (c)
                    for (l = [],
                    k = 0; 136 > k; ++k)
                        l[k] = c[135 - k]
            },
            Ib: function(a) {
                if (!N.Oa)
                    return c(b[0]++);
                -1 == a && (a = (d + 3) % 4);
                var f = b[a]++;
                return R[4096 | a << 8 | 33 - (17 * (f & 1) + (f >> 1))]
            },
            La: function(a) {
                if (!N.Oa)
                    return c(135 - a ^ 1);
                var b = (d + (a >> 2)) % 4;
                a %= 4;
                return R[4096 | b << 8 | 17 * (~a & 1) + (a >> 1)]
            },
            Db: function(a, b) {
                return l ? N.Oa ? l[135 - (34 * a + ~~(b % 34 / 17) + b % 17 * 2)] : l[(135 - (34 * a + ~~(b % 34 / 17) + b % 17 * 2) + g) % 136] : 136
            },
            Rb: function(a) {
                if (!b)
                    return 0;
                if (!N.Oa)
                    return 122 - b[0] - N.bb;
                for (var c = 0, d = -1, f = 1; 4 >= f; ++f)
                    I.v[(a + f) % 4] && c < b[(a + f) % 4] && (c = b[(a + f) % 4],
                    d = f);
                return (30 - c) * (I.I & 16 ? 3 : 4) + d - 1
            },
            pb: a
        }
    }();
    N.tc = function(a) {
        function f(a) {
            for (var b = 0; b < a.length; ++b)
                a[b] = (a[b] & 255) << 24 | (a[b] & 65280) << 8 | (a[b] & 16711680) >>> 8 | (a[b] & 4278190080) >>> 24;
            return a
        }
        a = a.split(",");
        if ("mt19937ar-sha512-n288-base64" == a[0]) {
            a = function(a) {
                a = atob(a);
                for (var b = [], c = 0; c < a.length; c += 4)
                    b.push(a.charCodeAt(c + 0) << 0 | a.charCodeAt(c + 1) << 8 | a.charCodeAt(c + 2) << 16 | a.charCodeAt(c + 3) << 24);
                return b
            }(a[1]);
            var c = -1
              , b = new Jc;
            Kc(b, a, a.length);
            var g = new Jc;
            return function(a, l) {
                if (l && c != a) {
                    for (var d = [], n = 0; 624 > n; ++n)
                        d[n] = Lc(b);
                    Kc(g, d, 624)
                }
                c = a;
                for (var k = l ? g : b, d = [], h = [], n = 0; 9 > n; ++n) {
                    for (var m = [], y = 0; 32 > y; ++y)
                        m[y] = Lc(k);
                    Array.prototype.push.apply(h, f(Mc(f(m))))
                }
                for (var n = 0; n < h.length; ++n)
                    h[n] >>>= 0;
                if (I.I & 16)
                    for (n = 0; 136 > n; ++n)
                        (4 > n || 32 <= n) && d.push(n);
                else
                    for (n = 0; 136 > n; ++n)
                        d.push(n);
                y = d.length;
                for (n = 0; n < y - 1; ++n)
                    k = n + h[n] % (y - n),
                    m = d[n],
                    d[n] = d[k],
                    d[k] = m;
                return d
            }
        }
    }
    ;
    var vc = function() {
        function a(a) {
            if (void 0 !== b)
                return 350 < f && 25 < f - c && (b(),
                c = f),
                f += a,
                !0
        }
        var f = 0
          , c = 0
          , b = void 0;
        return {
            set: function(g, d) {
                b = g;
                f = c = 0;
                b ? (d && b(),
                cc().autoRepeat = a) : delete cc().Mc
            }
        }
    }();
    var I = function() {
        function a(a) {
            if (1 == I.a) {
                var b = (~~M.lognext + 40 - 1) % 40
                  , c = M["log" + b];
                if (c) {
                    try {
                        c = JSON.parse(c)
                    } catch (w) {
                        return
                    }
                    c.sc || (c.sc = a,
                    M["log" + b] = JSON.stringify(c))
                }
            }
        }
        function f(a, b, c, d, f, g, h) {
            var m, l, k;
            c instanceof fc ? (m = d.u % 4,
            l = d.c,
            k = d.h,
            d.ga(0),
            d = O[c.u << 8 | N.Wa[f]]) : (m = c,
            c = R[b | m << 8 | d],
            l = c.c,
            k = c.h,
            d = O[m << 8 | 48]);
            switch (b) {
            case 5120:
                k = 0;
                break;
            case 4096:
                0 == m ? k = Rb : 1 == m ? l = Qb : 2 == m ? k = 0 : 3 == m && (l = 0);
                break;
            case 1024:
                var y = n ? N.La(N.bb++) : N.Ib(m);
                1 == N.a || 3 == N.a ? (d = y.i,
                l = y.c,
                k = y.h,
                Vb.L(a, y, 0)) : 0 == m ? k = ~~(Rb / 2) : 1 == m ? l = ~~(Qb / 2) : 2 == m ? k = ~~(Rb / 2) : 3 == m && (l = ~~(Qb / 2));
                n = !1;
                break;
            case 3072:
                c.c = c.B + (Vb.aa ? 0 : ~~(.2 * Dc[m]) + ~~(.15 * hc[m])),
                c.h = c.H + (Vb.aa ? 0 : ~~(.2 * Ec[m]) + ~~(.15 * gc[m]))
            }
            c.Ca(1024 == b, f);
            Vb.L(a + 0, l, k, c.c, c.h, g, d, .06);
            b = Vb.L(a + 10, l, k, c.c, c.h, g, d, .18, c, 1);
            Vb.L(a + 20, l, k, c.c, c.h, g, d, .06);
            0 != h && ec(h, 0, b / 1E3);
            return b
        }
        function c(a) {
            $b.ea();
            v.S(256);
            jc();
            var b = {
                tag: "D",
                p: a
            };
            1 == I.a ? Y.K(b) : 4 == I.a && H.Vb(b);
            b[0] = a;
            Y.pa(b)
        }
        function b() {
            I.Nb = [-1, -1, -1, -1];
            I.gb = ["", "", "", ""];
            for (var a = 0, b = 0; 4 > b; ++b)
                who = (I.fa + b) % 4,
                I.v[who] && (I.Nb[who] = a,
                I.gb[who] = "\u6771\u5357\u897f\u5317".substr(a, 1),
                ++a)
        }
        var g = {
            84: 0,
            85: 1,
            86: 2,
            87: 3,
            116: 0,
            117: 1,
            118: 2,
            119: 3
        }, d = -1, l = -1, p = null, n, k = "", h = !1;
        return {
            a: 0,
            I: 0,
            hb: 0,
            fa: -1,
            Nb: [],
            gb: [],
            xa: [],
            ma: [],
            Kb: [],
            Sa: [],
            Ua: [],
            Qa: [],
            v: [],
            connected: 0,
            da: function() {
                var a = cc(), b;
                for (b in a)
                    "autoRepeat" != b && delete a[b];
                Wb.da();
                Vb.oa();
                Ub.tb();
                for (b = 0; b < R.qa.length; ++b)
                    a = R.qa[b],
                    a.s = 0,
                    a.P && (void 0 !== a.B && (a.c = a.B),
                    void 0 !== a.H && (a.h = a.H),
                    a.la(0, 0, !1),
                    delete a.fb);
                for (b = 0; 4 > b; ++b)
                    R.ub(b, -2);
                p = null;
                l = -1;
                d = I.fa = -1;
                Zb.R(0, -1);
                Xb.oa();
                V.oa();
                Yb.style.display = Zb.J.canvas.style.display = "none";
                $b.ea();
                v.S(256);
                jc();
                S.O();
                H.da()
            },
            oa: function(a) {
                if ("REINIT" == a.tag || 3 == I.a)
                    Vb.aa = !0;
                n = !1;
                d = I.fa = ~~a.oya;
                I.xa = q(a.seed);
                I.ma = q(a.ten, 100);
                I.Kb = q(a.chip);
                b();
                $b.zc(la(I.hb, I.I) ? 5E3 : 1E4);
                N.oa(a[5]);
                Xb.oa();
                V.oa();
                yb.qc();
                h && (ic(1, 0, 0),
                h = !1);
                Zb.R(void 0, -1);
                for (var c = 0; 4 > c; ++c)
                    if (I.v[c])
                        for (var g = 0; 13 > g; ++g)
                            V[32 | c].push(136);
                var m = 0;
                if (1 == N.a) {
                    for (c = 0; 4 > c; ++c)
                        for (g = 0; 34 > g; ++g)
                            R[4096 | c << 8 | g].Z = 0;
                    for (g = 0; 17 > g; ++g)
                        for (c = 0; 4 > c; ++c)
                            Vb.L(f(m, 4096, c, g, 136, .08, 4), R[4096 | c << 8 | g + 17].Ca(!1, 136), 1),
                            m += 12
                } else if (3 == N.a) {
                    for (var l = u.tw + 1, c = 0; 4 > c; ++c)
                        for (g = 0; 34 > g; ++g) {
                            var k = N.Db(c, g)
                              , p = R[4096 | c << 8 | g]
                              , k = (k & 3840) >> 8;
                            k == l ? p.la(-2049, 2048, !1) : 5 == k ? p.la(-12289, 12288, !1) : p.la(-4097, 4096, !1)
                        }
                    for (g = 0; 17 > g; ++g)
                        for (c = 0; 4 > c; ++c)
                            Vb.L(f(m, 4096, c, g, N.Db(c, g) & 255, .08, 4), R[4096 | c << 8 | g + 17].Ca(!1, N.Db(c, g + 17) & 255), 1),
                            m += 12
                } else
                    for (g = 0; 5 > g; ++g)
                        f(m, 5120, 0, g, 136, .08, 4),
                        m += 45;
                Vb.L(function() {
                    Zb.R(void 0, d);
                    for (var a = 5; a < I.xa.length; ++a)
                        I.DORA({
                            hai: I.xa[a],
                            Ob: a - 5
                        });
                    if (N.Oa)
                        for (var b = 0; 4 > b; ++b) {
                            var c = ~~(.1 * Dc[b])
                              , f = ~~(.1 * Ec[b]);
                            Ub.ya();
                            for (a = 0; 34 > a; ++a)
                                if (2 <= a % 17) {
                                    var g = R[4096 | b << 8 | a];
                                    g.Ka();
                                    g.c += c;
                                    g.h += f;
                                    g.Ha();
                                    g.Ka()
                                }
                            for (a = 0; 34 > a; ++a)
                                R[4096 | b << 8 | a].Ha();
                            Ub.za()
                        }
                });
                var D = [0, 0, 0, 0];
                I.v[1] || (D[1] += 28);
                I.v[2] || (D[2] += 28);
                I.v[3] || (D[3] += 28);
                for (c = 0; 4 > c; ++c)
                    for (p = q(a["m" + c]); p.length; )
                        k = p.pop(),
                        I.N({
                            who: c,
                            m: k
                        }),
                        n && (N.La(N.bb).ga(0),
                        ++N.bb,
                        n = !1),
                        ++D[(c + (k & 3)) % 4],
                        --D[c];
                a.hai && (V[32] = q(a.hai));
                a.hai0 && (V[32] = q(a.hai0));
                a.hai1 && (V[33] = q(a.hai1));
                a.hai2 && (V[34] = q(a.hai2));
                a.hai3 && (V[35] = q(a.hai3));
                S.O();
                for (c = 0; 4 > c; ++c)
                    for (I.v[c] && (D[c] += 13 - V[32 | c].length),
                    g = 0; g < V[32 | c].length; ++g)
                        136 > V[32 | c][g] && V[48 | c][V[32 | c][g] >> 2]++;
                g = [q(a.kawa0), q(a.kawa1), q(a.kawa2), q(a.kawa3)];
                for (c = 0; 4 > c; ++c) {
                    Ub.ya();
                    m = 0;
                    for (l = !1; g[c].length; )
                        k = g[c].shift(),
                        255 == k ? (R.ub(c, m),
                        0 == c && (V[64] = tb.eb(V[48]))) : 254 == k ? l = !0 : (p = R[3072 | c << 8 | m],
                        p.Ca(!1, k & 255),
                        p.ga(1),
                        l && (4 == I.mode || 1 != I.a && v.o[1277961]) && p.la(-257, 256, !1),
                        p.Ka(),
                        ++D[c],
                        ++m,
                        l = !1);
                    Ub.za()
                }
                Vb.aa && Ub.ya();
                Vb.L(function() {
                    for (var a = 0; 4 > a; ++a)
                        for (var b = 0; b < D[a]; ++b)
                            N.Ib(a).ga(0);
                    for (var c = 0, d = 0; 52 > d; ++d)
                        a = (48 > d ? ~~(d / 4) : d) % 4,
                        I.v[a] && (b = 48 > d ? 4 * ~~(d / 16) + d % 4 : 12,
                        V[32 | a].length <= b || (f(c, 1024, a, b, a && !v.o[1277960] ? 136 : V[32 | a][b], .08, 4),
                        c += 15 * (3 == d % 4 ? N.a ? 5 : 3 : N.a ? 0 : ~~(2 * Math.random()))));
                    Zb.R()
                });
                Vb.aa && Ub.za();
                Vb.L(function() {
                    for (var a = 0; 4 > a; ++a)
                        Vb.aa && Ub.ya(),
                        V.Ec(a),
                        Vb.aa && Ub.za();
                    if (1 == N.a || 3 == N.a) {
                        Ub.ya();
                        N.La(14).Ka();
                        for (var a = N.La(14).u, b = ~~(.15 * Dc[a]), c = ~~(.15 * Ec[a]), d = 14; 48 > d; ++d) {
                            var f = N.La(d);
                            if (f.u != a)
                                break;
                            f.c += b;
                            f.h += c;
                            f.Ka()
                        }
                        N.La(13).Ha();
                        N.La(15).Ha();
                        Ub.za()
                    }
                });
                Yb.style.display = "none";
                Zb.J.canvas.style.display = "";
                v.o[1183749] = v.o[1183752] = v.o[1183753] = v.o[1183751] = !1;
                v.o[1183750] = !0;
                v.S(256);
                if ((3 == I.a || 2 == I.a) && v.o[1277957])
                    for (c = 0; 4 > c; ++c)
                        yb.Zb(c);
                if ("REINIT" == a.tag || 3 == I.a)
                    Vb.aa = !1;
                Vb.L(Y.Da)
            },
            Fb: function(a) {
                var b = l;
                V[64] || (b = V[32 | d][a]);
                c(b)
            },
            ERR: function(a) {
                var b = ~~a.code;
                a = "(ERR" + b + ")";
                var c = 1;
                switch (b) {
                case 1001:
                case 1002:
                case 1003:
                case 1004:
                case 1005:
                case 1006:
                case 1012:
                case 1019:
                case 1021:
                    H.b.style.display = "";
                    nb(!1, 0);
                    break;
                case 1020:
                    c |= 2;
                    break;
                case 1027:
                    a = "";
                    break;
                case 1100:
                case 1101:
                    H.cancel()
                }
                C.l(ka[b] + a, c, function() {
                    switch (b) {
                    case 1014:
                        delete u.wg;
                        u.ab && history.back();
                        break;
                    case 1019:
                        history.back();
                        break;
                    case 1020:
                        H.purchase()
                    }
                });
                return 1
            },
            HELO: function(a) {
                if (a.closing)
                    return location.reload(),
                    1;
                if (2 == I.a)
                    return Y.K({
                        tag: "WG",
                        id: u.wg,
                        tw: u.tw
                    }),
                    1;
                var b;
                H[17] = a.PF4 ? a.PF4.split(",") : [];
                H[16] = a.PF3 ? a.PF3.split(",") : [];
                H[18] = a.PF601 && a.PF01C ? (b = a.PF601.split(","),
                b.splice(1, 0, 0, a.PF01C.split(",")[1]),
                b) : [];
                H[19] = a.PF602 && a.PF02C ? (b = a.PF602.split(","),
                b.splice(1, 0, 0, a.PF02C.split(",")[1]),
                b) : [];
                H[20] = a.PF603 && a.PF03C ? (b = a.PF603.split(","),
                b.splice(1, 0, 0, a.PF03C.split(",")[1]),
                b) : [];
                H[21] = a.PF611 && a.PF11C ? (b = a.PF611.split(","),
                b.splice(1, 0, 0, a.PF11C.split(",")[1]),
                b) : [];
                H[22] = a.PF612 && a.PF12C ? (b = a.PF612.split(","),
                b.splice(1, 0, 0, a.PF12C.split(",")[1]),
                b) : [];
                H[23] = a.PF613 && a.PF13C ? (b = a.PF613.split(","),
                b.splice(1, 0, 0, a.PF13C.split(",")[1]),
                b) : [];
                H[24] = a.PF623 && a.PF23C ? (b = a.PF623.split(","),
                b.splice(1, 0, 0, a.PF23C.split(",")[1]),
                b) : [];
                H[25] = a.PF633 && a.PF33C ? (b = a.PF633.split(","),
                b.splice(1, 0, 0, a.PF33C.split(",")[1]),
                b) : [];
                H[0] = decodeURIComponent(a.uname);
                H[1] = a.expire;
                H[2] = ~~a.expiredays;
                a.nintei ? (a.tag = "NINTEI",
                H.l(a)) : H.Bb();
                return 1
            },
            REHELO: function() {
                Y.ea();
                return 1
            },
            LN: H.fc,
            REJOIN: function(a) {
                Y.K({
                    tag: "JOIN",
                    t: a.t
                });
                return 1
            },
            CHAT: H.bc,
            CS: H.cc,
            DATE: H.dc,
            RANKING: function(a) {
                a.rankingcs ? H.ic(a) : H.hc(a);
                return 1
            },
            SHUFFLE: function() {
                return 1
            },
            GO: function(a) {
                a.gpid && (M.gpid = a.gpid);
                I.hb = ~~a.lobby;
                I.I = ~~a.type;
                1 != I.a && 2 != I.a || Y.K({
                    tag: "GOK"
                });
                1 == I.a && 0 == I.hb && H.Hc(I.I);
                return 1
            },
            UN: function(a) {
                if (3 <= !!a.n0 + !!a.n1 + !!a.n2 + !!a.n3) {
                    I.v = ["", "", "", ""];
                    for (var b = 0; 4 > b; ++b)
                        I.v[b] = decodeURIComponent(a["n" + b]).replace("\u24c5", "\u24df").replace("\u24c8", "\u24e2");
                    I.Ua = q(a.dan ? a.dan : ",,,");
                    I.Qa = q(a.rate ? a.rate : ",,,");
                    I.Sa = (a.sx ? a.sx : ",,,").split(",");
                    if (!1 !== v.o[14])
                        for (b = 0; 4 > b; ++b) {
                            if (a = I.v[b])
                                (a = I.v[b]) && a.length ? (a = a.charCodeAt(0),
                                a = 9372 <= a && 9397 >= a || 9398 <= a && 9423 >= a || 9424 <= a && 9449 >= a) : a = !1,
                                a = !(a || 20 <= I.Ua[b]);
                            a && (a = (u.tw + b) % 4,
                            I.v[b] = 3 == I.a && a == u.TW ? "\u79c1" : "ABCD".substr(a, 1) + "\u3055\u3093")
                        }
                } else
                    a.n0 && (I.connected |= 1),
                    a.n1 && (I.connected |= 2),
                    a.n2 && (I.connected |= 4),
                    a.n3 && (I.connected |= 8),
                    Zb.R();
                return 1
            },
            BYE: function(a) {
                I.connected &= ~(1 << ~~a.who);
                Zb.R();
                return 1
            },
            TAIKYOKU: function(a) {
                v.b.style.display = "";
                v[1572868].innerHTML = "\ue800";
                v.S(126976);
                Y.Ma = 0;
                h = "SAIKAI" != a.tag && I.I & 1;
                I.fa = ~~a.oya;
                if (1 == I.a && a.log) {
                    k = a.log;
                    var c = ~~M.lognext;
                    M["log" + c] = JSON.stringify({
                        type: I.I,
                        lobby: I.hb,
                        log: k,
                        oya: I.fa,
                        uname: I.v
                    });
                    M.lognext = (c + 1) % 40
                }
                I.connected = 15;
                b();
                R.O();
                Xb.O();
                H.l(a);
                Tb.R();
                return 1
            },
            INIT: function(a) {
                H.ea(function() {
                    I.da();
                    I.oa(a)
                })
            },
            FURITEN: function(a) {
                Yb.style.display = ~~a.show ? "" : "none";
                return 1
            },
            T: function(a) {
                if (-1 == d)
                    return 1;
                if (n || 3 == I.a)
                    V.qb(d),
                    V.kb();
                3 == I.a && Wb.zb();
                p && (R.Pa(0, 120, [p]),
                p = null);
                l = void 0 === a[0] ? 136 : a[0];
                d = g[a.tag.charCodeAt(0)];
                var b = V[32 | d].length;
                V[32 | d].push(l);
                136 > l && V[48 | d][l >> 2]++;
                var h = R[1024 | d << 8 | b];
                h || pb("T d PH_TEHAI who=" + d + " n=" + b + " wg=" + u.wg);
                h.c = h.B + ~~(.1 * Dc[d]);
                h.h = h.H + ~~(.1 * Ec[d]);
                f(0, 1024, d, b, d && !v.o[1277960] ? 136 : l, -120, 5);
                Zb.R(void 0, d);
                1 != I.a && yb.Jc(h);
                var k = ~~a.t;
                Vb.L(function() {
                    3 == I.a || 2 == I.a || d || (k & 16 && v.o[1183752] ? Y.K({
                        tag: "N",
                        type: 7
                    }) : (k = kc.pc(k, l)) || !v.o[1183753] && !V[64] ? jc(a) : ($b.Sb(),
                    c(l)));
                    dc(Y.Da, Vb.aa || 3 == I.a ? 0 : 650)
                })
            },
            D: function(a) {
                if (-1 == d)
                    return 1;
                var b = a.tag.charCodeAt(0)
                  , c = 100 <= b && 103 >= b || l === a[0];
                l = a[0];
                0 < V[48 | d][l >> 2] && V[48 | d][l >> 2]--;
                for (var g = V[32 | d].length, b = 0; b < g && V[32 | d][b] != l; ++b)
                    ;
                b == g && (b = c ? g - 1 : ~~((g - 1) / 2));
                b = R[1024 | d << 8 | b];
                for (g = 0; (p = R[3072 | d << 8 | g]) && p.s; ++g)
                    ;
                2 == I.a || 3 == I.a ? (v.o[1277957] && yb.Zb(d),
                v.o[1277961] && p.la(-1281, (c ? 256 : 0) | b.Y & 1024, !1)) : (I.I & 256 || 4 == I.a) && p.la(-257, c ? 256 : 0, !1);
                f(0, 3072, p, b, l, -120, 6);
                var h = ~~a.t;
                Vb.L(function() {
                    h & 8 && v.o[1183752] ? (ic(8, 0, 0),
                    dc(function() {
                        Y.K({
                            tag: "N",
                            type: 6
                        })
                    }, 1E3)) : ~h & 8 && h && v.o[1183749] ? Y.K({
                        tag: "N"
                    }) : h && kc.nc(h, l);
                    3 == I.a ? (V.vb(d),
                    Y.Da()) : dc(function() {
                        V.vb(d);
                        V.qb(d);
                        V.kb();
                        Y.Da()
                    }, Vb.aa ? 0 : 350)
                })
            },
            N: function(a) {
                $b.ea();
                v.S(256);
                jc();
                if (-1 == d)
                    return 1;
                3 == I.a && (V.qb(d),
                V.kb());
                var b = d = ~~a.who;
                Zb.R(void 0, b);
                a[2] || lc(a);
                var c = a[0]
                  , g = V[32 | b].length
                  , h = []
                  , k = 3 - a[3];
                if (a.tag) {
                    Wb.L(b, a[2], 3 == I.a ? 4 : 6);
                    for (var m = 0; m < c.length; ++m)
                        if (p && c[m] == l)
                            h[m] = p,
                            p = null,
                            k = m;
                        else {
                            for (var D = 0; D < V[32 | b].length && V[32 | b][D] != c[m]; ++D)
                                ;
                            D == V[32 | b].length && (D = --g);
                            h[m] = R[1024 | b << 8 | D];
                            V[48 | b][c[m] >> 2]--
                        }
                } else
                    5 == a[2] && I.N({
                        who: b,
                        m: a.m ^ 24
                    });
                n = !0;
                g = [];
                if (10 == a[2])
                    Xb.Bc(b, ++V[16 | b]),
                    g[0] = R[b << 8 | 2064],
                    g[0].u = b;
                else if (1 == c.length) {
                    for (m = (I.I & 16 ? 16 : 17) - 1; (g[0] = R[2048 | b << 8 | m]) && g[0].s && g[0].Ga.fb != c[0]; --m)
                        ;
                    g[0] && (g[0].Ga.u = (b + 3) % 4,
                    g[0] = g[0].Ga)
                } else {
                    for (m = (I.I & 16 ? 16 : 17) - 1; (g[0] = R[2048 | b << 8 | m]) && g[0].s; --m)
                        ;
                    g.unshift(R[2048 | b << 8 | m - 1]);
                    g.unshift(R[2048 | b << 8 | m - 2]);
                    for (m = 0; m < g.length; ++m)
                        g[m].u = b;
                    3 == k && (k = a[3] ? 2 : 1);
                    4 == c.length ? (g[k].u = g[k].Ga.u = (b + 1) % 4,
                    g[3] = g[2],
                    g[2] = g[k].Ga) : (n = !1,
                    g[k].u = (b + 1) % 4,
                    1 == a[2] && (g[k].Ga.fb = a[4]))
                }
                R.$b(b);
                if (a.tag) {
                    for (m = 0; m < g.length; ++m)
                        k = c[m],
                        4 != c.length || a[3] || 0 != m && 3 != m || (k = 136),
                        f(0, 2048, g[m], h[m], k, .06, 0);
                    V.vb(b);
                    V.kb();
                    b || (S.O(),
                    n || jc(a));
                    var ca = ~~a.t;
                    Vb.L(function() {
                        ca && kc.oc(ca);
                        Y.Da()
                    })
                } else {
                    for (m = 0; m < g.length; ++m)
                        k = c[m],
                        4 != c.length || a[3] || 0 != m && 3 != m || (k = 136),
                        g[m].Ca(!1, k),
                        g[m].ga(1),
                        g[m].Ka();
                    5 != a[2] && 10 != a[2] && V[32 | b].splice(V[32 | b].length - 3, 3)
                }
            },
            DORA: function(a) {
                if (-1 == d)
                    return 1;
                var b = ~~a.hai
                  , c = void 0 === a.Ob ? I.xa.length - 5 : a.Ob
                  , f = (I.I & 16 ? 8 : 4) + 2 * c
                  , g = R[5120 | c];
                if (1 == N.a || 3 == N.a)
                    g = N.La(f);
                g.Ca(!1, b);
                0 == c && 3 == N.a && g.la(-513, 512, !1);
                g.Qb();
                "DORA" == a.tag && I.xa.push(b);
                return 1
            },
            REACH: function(a) {
                if (1 == a.step) {
                    var b = ~~a.who;
                    Wb.L(b, 8, 3 == I.a ? 7 : 6);
                    R.ub(b, -1);
                    0 == b && jc(a);
                    dc(Y.Da, Vb.aa || 3 == I.a ? 0 : 500)
                } else
                    return 2 == a.step && (b = ~~a.who,
                    1 == I.a && 0 == b && (V[64] = tb.eb(V[48])),
                    I.xa[2]++,
                    Zb.R()),
                    a.ten && (I.ma = q(a.ten, 100)),
                    1
            },
            AGARI: function(b) {
                if (-1 == d)
                    return 1;
                3 == I.a && Wb.zb();
                var c = ~~b.who;
                V[32 | c] = q(b.hai);
                V[32 | c].splice(V[32 | c].indexOf(~~b.machi), 1);
                c && c == b.fromWho && R[1024 | c << 8 | V[32 | c].length].ga(0).Ca(!0, ~~b.machi).ga(1);
                p && (R.Pa(0, 120, [p]),
                p = null);
                Wb.L(c, c == b.fromWho ? 7 : 6, 3 == I.a ? 4 : 6);
                b.paoWho && Wb.L(~~b.paoWho, 11, 3 == I.a ? 4 : 6);
                V.Wb(1 << c);
                dc(function() {
                    H.l(b);
                    b.owari && (M.removeItem("gpid"),
                    H.l({
                        tag: "OWARI",
                        sc: b.owari
                    }),
                    a(b.owari))
                }, 3 == I.a ? 0 : 1E3);
                vc.set();
                return 1
            },
            RYUUKYOKU: function(b) {
                if (-1 == d)
                    return 1;
                3 == I.a && Wb.zb();
                b.hai1 && (V[33] = q(b.hai1));
                b.hai2 && (V[34] = q(b.hai2));
                b.hai3 && (V[35] = q(b.hai3));
                if ("ron3" == b.type) {
                    var c = 3 == I.a ? 4 : 6;
                    b.hai0 && Wb.L(0, 6, c);
                    b.hai1 && Wb.L(1, 6, c);
                    b.hai2 && Wb.L(2, 6, c);
                    b.hai3 && Wb.L(3, 6, c)
                }
                p && (R.Pa(0, 120, [p]),
                p = null);
                V.Wb(14);
                dc(function() {
                    H.l(b);
                    b.owari && (M.removeItem("gpid"),
                    H.l({
                        tag: "OWARI",
                        sc: b.owari
                    }),
                    a(b.owari))
                }, 3 == I.a ? 0 : 1E3);
                vc.set();
                return 1
            },
            VOICE: function(a) {
                a = a.type;
                for (var b = 0; 4 > b; ++b)
                    a[b] && Wb.L(b, a[b], 3);
                return 1
            },
            PROF: function() {
                return 1
            },
            INITBYLOG: yb.ec,
            WGC: yb.jc,
            TRAININGINIT: function(a) {
                I.oa(a)
            }
        }
    }();
    I.W = I.V = I.U = I.T;
    I.g = I.f = I.e = I.d = I.G = I.F = I.E = I.D;
    I.KANSEN = I.SAIKAI = I.TAIKYOKU;
    I.REINIT = I.INIT;
    function Jc() {
        this.ca = 624;
        this.mb = 397;
        this.gc = 2567483615;
        this.yb = 2147483648;
        this.xb = 2147483647;
        this.w = Array(this.ca);
        this.ra = this.ca + 1
    }
    function Nc(a, f) {
        a.w[0] = f >>> 0;
        for (a.ra = 1; a.ra < a.ca; a.ra++)
            f = a.w[a.ra - 1] ^ a.w[a.ra - 1] >>> 30,
            a.w[a.ra] = (1812433253 * ((f & 4294901760) >>> 16) << 16) + 1812433253 * (f & 65535) + a.ra,
            a.w[a.ra] >>>= 0
    }
    function Kc(a, f, c) {
        var b, g, d;
        Nc(a, 19650218);
        b = 1;
        g = 0;
        for (d = a.ca > c ? a.ca : c; d; d--) {
            var l = a.w[b - 1] ^ a.w[b - 1] >>> 30;
            a.w[b] = (a.w[b] ^ (1664525 * ((l & 4294901760) >>> 16) << 16) + 1664525 * (l & 65535)) + f[g] + g;
            a.w[b] >>>= 0;
            b++;
            g++;
            b >= a.ca && (a.w[0] = a.w[a.ca - 1],
            b = 1);
            g >= c && (g = 0)
        }
        for (d = a.ca - 1; d; d--)
            l = a.w[b - 1] ^ a.w[b - 1] >>> 30,
            a.w[b] = (a.w[b] ^ (1566083941 * ((l & 4294901760) >>> 16) << 16) + 1566083941 * (l & 65535)) - b,
            a.w[b] >>>= 0,
            b++,
            b >= a.ca && (a.w[0] = a.w[a.ca - 1],
            b = 1);
        a.w[0] = 2147483648
    }
    function Lc(a) {
        var f, c = [0, a.gc];
        if (a.ra >= a.ca) {
            var b;
            a.ra == a.ca + 1 && Nc(a, 5489);
            for (b = 0; b < a.ca - a.mb; b++)
                f = a.w[b] & a.yb | a.w[b + 1] & a.xb,
                a.w[b] = a.w[b + a.mb] ^ f >>> 1 ^ c[f & 1];
            for (; b < a.ca - 1; b++)
                f = a.w[b] & a.yb | a.w[b + 1] & a.xb,
                a.w[b] = a.w[b + (a.mb - a.ca)] ^ f >>> 1 ^ c[f & 1];
            f = a.w[a.ca - 1] & a.yb | a.w[0] & a.xb;
            a.w[a.ca - 1] = a.w[a.mb - 1] ^ f >>> 1 ^ c[f & 1];
            a.ra = 0
        }
        f = a.w[a.ra++];
        f ^= f >>> 11;
        f ^= f << 7 & 2636928640;
        f ^= f << 15 & 4022730752;
        return (f ^ f >>> 18) >>> 0
    }
    Jc.prototype.random = function() {
        return Lc(this) * (1 / 4294967296)
    }
    ;
    var mc = function() {
        function a() {
            v.ka(1574918)
        }
        function f() {
            v.ka(1574917)
        }
        function c() {
            var a = V[32]
              , a = a ? 3 * ~~(a.length / 3) + 1 : 1;
            if (R[1024 | a].s)
                return R[1024 | a]
        }
        function b(a, b) {
            if (a && a.tagName) {
                var c = a.style;
                b ? (c.backgroundColor = m & 4 ? "#050" : "#030",
                c.animationName = "none",
                c.color || (c.color = "#FFF")) : (c.backgroundColor = "",
                c.animationName = "",
                c.color = "")
            }
        }
        function g(a) {
            if (k != a) {
                if (k && k.tagName && (b(k, !1),
                h && !a)) {
                    k = h;
                    return
                }
                h && (~m & 2 || !a || a instanceof fc) && (S.Ta(h.X, -15, 0),
                h = void 0);
                if (!a && h)
                    k = h;
                else {
                    k = a;
                    a instanceof fc && S.Ta(a.X, -15, 2 | (m & 8 ? 8 : 0));
                    if (!a || a instanceof fc)
                        h = a;
                    H.Cc(a);
                    m &= -5;
                    b(k, !0)
                }
            }
        }
        function d(a) {
            if (h) {
                var b = h.X;
                S.Ta(b, -15, 0);
                S.Ta(b + a, -15, 6);
                h = R[1024 | b + a]
            }
        }
        function l(l, n) {
            l && vc.set();
            if (k) {
                l || 3 != I.a || (k == v[1574917] && vc.set(f, !1),
                k == v[1574918] && vc.set(a, !1));
                if (l && !n)
                    m &= -5,
                    k instanceof fc && S.Ta(k.X, -15, 0),
                    k && k != Zb.J.canvas && k.style && ~m & 8 && g();
                else if (!n || ~m & 4)
                    m |= 4,
                    k instanceof fc && S.Ta(k.X, -15, 4 | (m & 8 ? 8 : 0));
                else {
                    if ("CPda" == k.name)
                        g(),
                        k = h;
                    else if ("CPok" == k.name) {
                        var D = c();
                        D && R[1024 | D.X].Y & 1 && D.s ? I.Fb(D.X) : p(Sb, 0, 0, !0, !1)
                    }
                    if (k instanceof fc)
                        R[1024 | k.X].Y & 1 && k.s && (I.Fb(k.X),
                        g());
                    else if (k && k.tagName) {
                        if (!l)
                            return;
                        if (k.name) {
                            if (!k.disabled)
                                if ("CP_L" == k.name)
                                    S.Cb(-1),
                                    d(-1);
                                else if ("CP_R" == k.name)
                                    S.Cb(1),
                                    d(1);
                                else if (H[k.name])
                                    H[k.name](k)
                        } else
                            k == Zb.J.canvas ? Zb.ka() : k.parentNode.parentNode != v.b || k.parentNode.style.visibility || v.ka(~~k.id.substr(1));
                        m & 2 && g()
                    }
                }
                m &= -9;
                b(k, !0)
            }
        }
        function p(a, b, d, f, l, n) {
            "BUTTON" == a.tagName || a.parentNode != S.b || S[20].style.display ? a.parentNode != S.b || S[0].style.display || (d = R[81] / t + 1,
            l || (b = a.offsetLeft + 1)) : (d = R[81] / t + 1,
            m & 2 && !l && (b = S.b.offsetLeft + S[24].offsetLeft + S[24].offsetWidth / 2),
            m &= -3,
            l = !1);
            b *= t;
            d *= t;
            var p;
            if (l && k instanceof fc) {
                if (1 == I.a || 4 == I.a) {
                    for (a = 0; (p = R[1024 | a]) && !(p.B <= b && b < p.B + Q[4]); ++a)
                        ;
                    if (b = p && k != p)
                        if (b = k,
                        d = p,
                        b != d && b.s && d.s) {
                            v.o[1183750] && v.ka(1183750);
                            for (f = [b]; b != d; )
                                a = R[1024 | b.X + (d.X < b.X ? -1 : 1)],
                                n = S[b.X].style.backgroundColor,
                                S[b.X].style.backgroundColor = S[a.X].style.backgroundColor,
                                S[a.X].style.backgroundColor = n,
                                n = V[32][b.X],
                                V[32][b.X] = V[32][a.X],
                                V[32][a.X] = n,
                                n = b.i,
                                b.i = a.i,
                                a.i = n,
                                n = b.s,
                                b.s = a.s,
                                a.s = n,
                                n = b.c,
                                b.c = a.c,
                                a.c = n,
                                n = b.h,
                                b.h = a.h,
                                a.h = n,
                                n = b.Y,
                                b.Y = a.Y,
                                a.Y = n,
                                n = b.ja,
                                b.ja = a.ja,
                                a.ja = n,
                                n = b.Z,
                                b.Z = a.Z,
                                a.Z = n,
                                f.push(b = a);
                            R.Pa(0, 80, f);
                            b = !0
                        } else
                            b = !1;
                    b && (k = h = p,
                    $b.O(p))
                }
            } else if ("BUTTON" == a.tagName)
                g(a.disabled ? null : a);
            else if (a == Zb.J.canvas)
                g(a);
            else if (a.parentNode && a.parentNode == v.b)
                g(("SELECT" == a.tagName ? a.previousSibling : a).firstChild);
            else {
                if (!C.Za()) {
                    if (m & 2) {
                        l = Q[4];
                        var w = U[4] >> 1;
                        for (a = 0; (p = R[1024 | a]) && !(p.s && p.B - l <= b && b < p.B + Q[4] && p.H - w <= d && d < p.H + U[4] + T[4]); ++a)
                            ;
                    } else
                        for (a = 0; (p = R[1024 | a]) && !(p.B <= b && b < p.B + Q[4] && p.H <= d && d < p.H + U[4] + T[4]); ++a)
                            ;
                    p && n && n.preventDefault()
                }
                m &= -9;
                if (!p && f) {
                    if (b / t < S.b.offsetLeft + S[1].offsetLeft && S.b.offsetTop + S[1].offsetTop < d / t && d / t < S.b.offsetTop + S[1].offsetTop + S[1].offsetHeight)
                        p = R[1025];
                    else if (S.b.offsetLeft + S[12].offsetLeft + S[12].offsetWidth < b / t && S.b.offsetTop + S[12].offsetTop < d / t && d / t < S.b.offsetTop + S[12].offsetTop + S[12].offsetHeight)
                        p = R[1036];
                    else if (H.b && !H.b.style.display && Z.ok)
                        p = Z.ok;
                    else if (!v[2360326].parentNode.style.visibility && !v[2360326].parentNode.style.display)
                        p = v[2360326];
                    else if (1 == I.a || 4 == I.a)
                        p = c();
                    p && (m |= 8)
                }
                g(p)
            }
        }
        var n = {
            A: 1,
            IMG: 1,
            INPUT: 1,
            SELECT: 1,
            OPTION: 1,
            LABEL: 1,
            TEXTAREA: 1
        }, k, h, m = 0, y, F, w, z, x;
        za(r, {
            touchstart: function(b) {
                var c = b.target;
                if (!n[c.tagName] && "fixed-select" != c.parentNode.className) {
                    var d = b.changedTouches;
                    if (1 != d.length)
                        g();
                    else if (H.b && !c.name && "scroll" != c.style.overflowY && H.b.firstChild.contains(c))
                        g(),
                        k || -1 == I.fa || (H.b.style.visibility = "hidden");
                    else {
                        y = Date.now();
                        F = d[0].pageX;
                        w = d[0].pageY;
                        var d = F - Sb.offsetLeft
                          , h = w - Ib;
                        "BUTTON" == c.tagName || c.parentNode != S.b || S[20].style.display || S.Gb(c.offsetLeft + c.offsetWidth / 2);
                        m |= 2;
                        p(c, d, h, !C.Za(), !1, b);
                        k && k != Zb.J.canvas && k.style && ~m & 8 && (m |= 4);
                        v.a & 126976 && !v.b.contains(c) || (k == v[1574917] && vc.set(f, !1),
                        k == v[1574918] && vc.set(a, !1))
                    }
                }
            },
            touchmove: function(a) {
                if (k instanceof fc) {
                    var b = a.touches;
                    1 == b.length && (Math.abs(b[0].pageX - F) < 10 * t || p(a.target, b[0].pageX - Sb.offsetLeft, R[81] / t + 1, !1, !0))
                }
            },
            touchend: function(a) {
                vc.set();
                var b = a.target;
                n[b.tagName] || !b.parentNode || n[b.parentNode.tagName] || "fixed-select" == b.parentNode.className || (C.Za() || a.preventDefault(),
                H.b && "hidden" == H.b.style.visibility ? H.b.style.visibility = "" : (a = a.changedTouches,
                1 == a.length && (l(!0, Math.abs(a[0].pageX - F) < 10 * t && Math.abs(a[0].pageY - w) < 10 * t && 1E3 > Date.now() - y),
                v.a & 126976 && !v.b.contains(b) && v.S(126976))))
            },
            touchcancel: function() {
                vc.set()
            },
            mousemove: function(a) {
                var b = a.target;
                if (void 0 !== a.buttons ? 2 != a.buttons : 3 != a.which) {
                    z = a.pageX;
                    x = a.pageY;
                    var c = z - Sb.offsetLeft
                      , d = x - Ib;
                    m &= -3;
                    p(b, c, d, !1, void 0 !== a.buttons ? 1 == a.buttons : 1 == a.which)
                }
            },
            mousedown: function(b) {
                var c = b.target;
                n[c.tagName] || !c.parentNode || n[c.parentNode.tagName] || "fixed-select" == c.parentNode.className || (H.b && !c.name && "scroll" != c.style.overflowY && H.b.firstChild.contains(c) ? k || -1 == I.fa || (H.b.style.visibility = "hidden") : (y = Date.now(),
                F = b.pageX,
                w = b.pageY,
                (void 0 !== b.buttons ? 2 != b.buttons : 3 != b.which) || 1 != I.a && 4 != I.a ? p(c, F - Sb.offsetLeft, w - Ib, !1) : p(Sb, 0, 0, !C.Za()),
                l(!1, !0),
                3 != I.a || v.a & 126976 && !v.b.contains(c) || C.Za() || k || vc.set((void 0 !== b.buttons ? 2 == b.buttons : 3 == b.which) ? a : f, !0)))
            },
            mouseup: function(a) {
                vc.set();
                var b = a.target;
                !n[b.tagName] && b.parentNode && "dropdown" != b.parentNode.className && (H.b && "hidden" == H.b.style.visibility ? H.b.style.visibility = "" : (l(!0, Math.abs(a.pageX - F) < 10 * t && Math.abs(a.pageY - w) < 10 * t && 1E3 > Date.now() - y),
                v.a & 126976 && !v.b.contains(b) && v.S(126976)))
            }
        });
        return {
            Ra: function() {
                if (!(k instanceof fc)) {
                    var a = cb.elementFromPoint(~~(z - r.pageXOffset), ~~(x - r.pageYOffset));
                    a && p(a, z - Sb.offsetLeft, x - Ib, !1)
                }
            }
        }
    }();
    xa(r, "touchstart", function(a) {
        this.removeEventListener(a.type, arguments.callee, !1);
        delete mc.Ra
    });
    xa(r, "keypress", function(a) {
        switch (a.keyCode) {
        case 84:
            if (3 == I.a) {
                a = xb.Ia();
                var f = {
                    comment: "\u3010\u724c\u8b5cURL https://tenhou.net/0/?log=" + u.log + "&tw=" + ~~u.tw + "\u3011\n\n",
                    seed: a.seed,
                    oya: a.oya,
                    ten: a.ten
                };
                f.hai0 = Ab(a.hai0);
                for (var c = 0; 4 > c; ++c)
                    a["m" + c] && (f["m" + c] = "" + a["m" + c]),
                    a["kawa" + c] && (f["kawa" + c] = Ab(a["kawa" + c]));
                r.open("?training=" + encodeURIComponent(JSON.stringify(f)))
            }
        }
    });
    var Oc = "onwheel"in cb ? "wheel" : "onmousewheel"in cb ? "mousewheel" : "DOMMouseScroll";
    xa(cb, Oc, function(a) {
        3 != I.a || C.Za() || (a.preventDefault(),
        v.ka(0 > (a.deltaY ? -a.deltaY : a.wheelDelta ? a.wheelDelta : -a.detail) ? 1574917 : 1574918))
    });
    (function() {
        var a;
        xa(r, "touchstart", function(f) {
            var c = f.target;
            "A" != c.tagName || "auto" != c.parentNode.style.overflowY && "scroll" != c.parentNode.parentNode.style.overflowY || (a = f.touches[0].screenY)
        });
        xa(r, "touchmove", function(f) {
            var c = f.target;
            "A" == c.tagName && ("auto" == c.parentNode.style.overflowY && 0 == c.parentNode.scrollTop || "scroll" == c.parentNode.parentNode.style.overflowY && 0 == c.parentNode.parentNode.scrollTop) && a <= f.touches[0].screenY && f.preventDefault()
        });
        xa(cb, Oc, function(a) {
            var c = a.target
              , b = a.deltaY ? -a.deltaY : a.wheelDelta ? a.wheelDelta : -a.detail;
            "A" == c.tagName && ("auto" == c.parentNode.style.overflowY && 0 == c.parentNode.scrollTop || "scroll" == c.parentNode.parentNode.style.overflowY && 0 == c.parentNode.parentNode.scrollTop) && 0 < b && a.preventDefault()
        })
    }
    )();
    db.oncontextmenu = function(a) {
        if (a.target) {
            a = a.target;
            if ("A" != a.tagName && "INPUT" != a.tagName && "TEXTAREA" != a.tagName)
                return !1;
            if (kb && a.href)
                return r.prompt("Anchor URL as TEXT", a.href),
                !1
        }
    }
    ;
    var Mc = function() {
        var a = [-2147483648, 8388608, 32768, 128]
          , f = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
          , c = [];
        return function(b) {
            var g, d, l, p, n, k, h, m, y, F, w, z, x, J, D, ca, ua, Za = !1, L, Da = 0, jb = 0, Cb = 0, Ua = b.length, Ea, Fa, P, E, K, G, Db, Eb, ub, vb, ab, bb, W, X, ea, fa, Sa;
            g = 1779033703;
            d = 4089235720;
            l = 3144134277;
            p = 2227873595;
            n = 1013904242;
            k = 4271175723;
            h = 2773480762;
            m = 1595750129;
            y = 1359893119;
            F = 2917565137;
            w = 2600822924;
            z = 725511199;
            x = 528734635;
            J = 4215389547;
            D = 1541459225;
            ca = 327033209;
            ua = 0;
            do {
                c[0] = ua;
                c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = c[11] = c[12] = c[13] = c[14] = c[15] = c[16] = c[17] = c[18] = c[19] = c[20] = c[21] = c[22] = c[23] = c[24] = c[25] = c[26] = c[27] = c[28] = c[29] = c[30] = c[31] = c[32] = 0;
                for (L = jb; Da < Ua && 128 > L; ++Da)
                    c[L >> 2] |= b[Da],
                    L += 4;
                Cb += L - jb;
                jb = L - 128;
                Da == Ua && (c[L >> 2] |= a[L & 3],
                ++Da);
                ua = c[32];
                Da > Ua && 112 > L && (c[31] = Cb << 3,
                Za = !0);
                for (L = 32; 160 > L; L += 2)
                    W = c[L - 30],
                    X = c[L - 29],
                    Ea = (W >>> 1 | X << 31) ^ (W >>> 8 | X << 24) ^ W >>> 7,
                    Fa = (X >>> 1 | W << 31) ^ (X >>> 8 | W << 24) ^ (X >>> 7 | W << 25),
                    W = c[L - 4],
                    X = c[L - 3],
                    P = (W >>> 19 | X << 13) ^ (X >>> 29 | W << 3) ^ W >>> 6,
                    E = (X >>> 19 | W << 13) ^ (W >>> 29 | X << 3) ^ (X >>> 6 | W << 26),
                    W = c[L - 32],
                    X = c[L - 31],
                    ea = c[L - 14],
                    fa = c[L - 13],
                    K = (fa & 65535) + (X & 65535) + (Fa & 65535) + (E & 65535),
                    E = (fa >>> 16) + (X >>> 16) + (Fa >>> 16) + (E >>> 16) + (K >>> 16),
                    G = (ea & 65535) + (W & 65535) + (Ea & 65535) + (P & 65535) + (E >>> 16),
                    P = (ea >>> 16) + (W >>> 16) + (Ea >>> 16) + (P >>> 16) + (G >>> 16),
                    c[L] = P << 16 | G & 65535,
                    c[L + 1] = E << 16 | K & 65535;
                var va = g
                  , wa = d
                  , ta = l
                  , qa = p
                  , pa = n
                  , ya = k
                  , Ga = h
                  , Ha = m
                  , Ia = y
                  , Ja = F
                  , Ka = w
                  , La = z
                  , Ma = x
                  , Na = J
                  , Oa = D
                  , Pa = ca;
                ub = ta & pa;
                vb = qa & ya;
                for (L = 0; 160 > L; L += 8)
                    Ea = (va >>> 28 | wa << 4) ^ (wa >>> 2 | va << 30) ^ (wa >>> 7 | va << 25),
                    Fa = (wa >>> 28 | va << 4) ^ (va >>> 2 | wa << 30) ^ (va >>> 7 | wa << 25),
                    P = (Ia >>> 14 | Ja << 18) ^ (Ia >>> 18 | Ja << 14) ^ (Ja >>> 9 | Ia << 23),
                    E = (Ja >>> 14 | Ia << 18) ^ (Ja >>> 18 | Ia << 14) ^ (Ia >>> 9 | Ja << 23),
                    Db = va & ta,
                    Eb = wa & qa,
                    ab = Db ^ va & pa ^ ub,
                    bb = Eb ^ wa & ya ^ vb,
                    Sa = Ia & Ka ^ ~Ia & Ma,
                    G = Ja & La ^ ~Ja & Na,
                    W = c[L],
                    X = c[L + 1],
                    ea = f[L],
                    fa = f[L + 1],
                    K = (fa & 65535) + (X & 65535) + (G & 65535) + (E & 65535) + (Pa & 65535),
                    E = (fa >>> 16) + (X >>> 16) + (G >>> 16) + (E >>> 16) + (Pa >>> 16) + (K >>> 16),
                    G = (ea & 65535) + (W & 65535) + (Sa & 65535) + (P & 65535) + (Oa & 65535) + (E >>> 16),
                    P = (ea >>> 16) + (W >>> 16) + (Sa >>> 16) + (P >>> 16) + (Oa >>> 16) + (G >>> 16),
                    W = P << 16 | G & 65535,
                    X = E << 16 | K & 65535,
                    K = (bb & 65535) + (Fa & 65535),
                    E = (bb >>> 16) + (Fa >>> 16) + (K >>> 16),
                    G = (ab & 65535) + (Ea & 65535) + (E >>> 16),
                    P = (ab >>> 16) + (Ea >>> 16) + (G >>> 16),
                    ea = P << 16 | G & 65535,
                    fa = E << 16 | K & 65535,
                    K = (Ha & 65535) + (X & 65535),
                    E = (Ha >>> 16) + (X >>> 16) + (K >>> 16),
                    G = (Ga & 65535) + (W & 65535) + (E >>> 16),
                    P = (Ga >>> 16) + (W >>> 16) + (G >>> 16),
                    Oa = P << 16 | G & 65535,
                    Pa = E << 16 | K & 65535,
                    K = (fa & 65535) + (X & 65535),
                    E = (fa >>> 16) + (X >>> 16) + (K >>> 16),
                    G = (ea & 65535) + (W & 65535) + (E >>> 16),
                    P = (ea >>> 16) + (W >>> 16) + (G >>> 16),
                    Ga = P << 16 | G & 65535,
                    Ha = E << 16 | K & 65535,
                    Ea = (Ga >>> 28 | Ha << 4) ^ (Ha >>> 2 | Ga << 30) ^ (Ha >>> 7 | Ga << 25),
                    Fa = (Ha >>> 28 | Ga << 4) ^ (Ga >>> 2 | Ha << 30) ^ (Ga >>> 7 | Ha << 25),
                    P = (Oa >>> 14 | Pa << 18) ^ (Oa >>> 18 | Pa << 14) ^ (Pa >>> 9 | Oa << 23),
                    E = (Pa >>> 14 | Oa << 18) ^ (Pa >>> 18 | Oa << 14) ^ (Oa >>> 9 | Pa << 23),
                    ub = Ga & va,
                    vb = Ha & wa,
                    ab = ub ^ Ga & ta ^ Db,
                    bb = vb ^ Ha & qa ^ Eb,
                    Sa = Oa & Ia ^ ~Oa & Ka,
                    G = Pa & Ja ^ ~Pa & La,
                    W = c[L + 2],
                    X = c[L + 3],
                    ea = f[L + 2],
                    fa = f[L + 3],
                    K = (fa & 65535) + (X & 65535) + (G & 65535) + (E & 65535) + (Na & 65535),
                    E = (fa >>> 16) + (X >>> 16) + (G >>> 16) + (E >>> 16) + (Na >>> 16) + (K >>> 16),
                    G = (ea & 65535) + (W & 65535) + (Sa & 65535) + (P & 65535) + (Ma & 65535) + (E >>> 16),
                    P = (ea >>> 16) + (W >>> 16) + (Sa >>> 16) + (P >>> 16) + (Ma >>> 16) + (G >>> 16),
                    W = P << 16 | G & 65535,
                    X = E << 16 | K & 65535,
                    K = (bb & 65535) + (Fa & 65535),
                    E = (bb >>> 16) + (Fa >>> 16) + (K >>> 16),
                    G = (ab & 65535) + (Ea & 65535) + (E >>> 16),
                    P = (ab >>> 16) + (Ea >>> 16) + (G >>> 16),
                    ea = P << 16 | G & 65535,
                    fa = E << 16 | K & 65535,
                    K = (ya & 65535) + (X & 65535),
                    E = (ya >>> 16) + (X >>> 16) + (K >>> 16),
                    G = (pa & 65535) + (W & 65535) + (E >>> 16),
                    P = (pa >>> 16) + (W >>> 16) + (G >>> 16),
                    Ma = P << 16 | G & 65535,
                    Na = E << 16 | K & 65535,
                    K = (fa & 65535) + (X & 65535),
                    E = (fa >>> 16) + (X >>> 16) + (K >>> 16),
                    G = (ea & 65535) + (W & 65535) + (E >>> 16),
                    P = (ea >>> 16) + (W >>> 16) + (G >>> 16),
                    pa = P << 16 | G & 65535,
                    ya = E << 16 | K & 65535,
                    Ea = (pa >>> 28 | ya << 4) ^ (ya >>> 2 | pa << 30) ^ (ya >>> 7 | pa << 25),
                    Fa = (ya >>> 28 | pa << 4) ^ (pa >>> 2 | ya << 30) ^ (pa >>> 7 | ya << 25),
                    P = (Ma >>> 14 | Na << 18) ^ (Ma >>> 18 | Na << 14) ^ (Na >>> 9 | Ma << 23),
                    E = (Na >>> 14 | Ma << 18) ^ (Na >>> 18 | Ma << 14) ^ (Ma >>> 9 | Na << 23),
                    Db = pa & Ga,
                    Eb = ya & Ha,
                    ab = Db ^ pa & va ^ ub,
                    bb = Eb ^ ya & wa ^ vb,
                    Sa = Ma & Oa ^ ~Ma & Ia,
                    G = Na & Pa ^ ~Na & Ja,
                    W = c[L + 4],
                    X = c[L + 5],
                    ea = f[L + 4],
                    fa = f[L + 5],
                    K = (fa & 65535) + (X & 65535) + (G & 65535) + (E & 65535) + (La & 65535),
                    E = (fa >>> 16) + (X >>> 16) + (G >>> 16) + (E >>> 16) + (La >>> 16) + (K >>> 16),
                    G = (ea & 65535) + (W & 65535) + (Sa & 65535) + (P & 65535) + (Ka & 65535) + (E >>> 16),
                    P = (ea >>> 16) + (W >>> 16) + (Sa >>> 16) + (P >>> 16) + (Ka >>> 16) + (G >>> 16),
                    W = P << 16 | G & 65535,
                    X = E << 16 | K & 65535,
                    K = (bb & 65535) + (Fa & 65535),
                    E = (bb >>> 16) + (Fa >>> 16) + (K >>> 16),
                    G = (ab & 65535) + (Ea & 65535) + (E >>> 16),
                    P = (ab >>> 16) + (Ea >>> 16) + (G >>> 16),
                    ea = P << 16 | G & 65535,
                    fa = E << 16 | K & 65535,
                    K = (qa & 65535) + (X & 65535),
                    E = (qa >>> 16) + (X >>> 16) + (K >>> 16),
                    G = (ta & 65535) + (W & 65535) + (E >>> 16),
                    P = (ta >>> 16) + (W >>> 16) + (G >>> 16),
                    Ka = P << 16 | G & 65535,
                    La = E << 16 | K & 65535,
                    K = (fa & 65535) + (X & 65535),
                    E = (fa >>> 16) + (X >>> 16) + (K >>> 16),
                    G = (ea & 65535) + (W & 65535) + (E >>> 16),
                    P = (ea >>> 16) + (W >>> 16) + (G >>> 16),
                    ta = P << 16 | G & 65535,
                    qa = E << 16 | K & 65535,
                    Ea = (ta >>> 28 | qa << 4) ^ (qa >>> 2 | ta << 30) ^ (qa >>> 7 | ta << 25),
                    Fa = (qa >>> 28 | ta << 4) ^ (ta >>> 2 | qa << 30) ^ (ta >>> 7 | qa << 25),
                    P = (Ka >>> 14 | La << 18) ^ (Ka >>> 18 | La << 14) ^ (La >>> 9 | Ka << 23),
                    E = (La >>> 14 | Ka << 18) ^ (La >>> 18 | Ka << 14) ^ (Ka >>> 9 | La << 23),
                    ub = ta & pa,
                    vb = qa & ya,
                    ab = ub ^ ta & Ga ^ Db,
                    bb = vb ^ qa & Ha ^ Eb,
                    Sa = Ka & Ma ^ ~Ka & Oa,
                    G = La & Na ^ ~La & Pa,
                    W = c[L + 6],
                    X = c[L + 7],
                    ea = f[L + 6],
                    fa = f[L + 7],
                    K = (fa & 65535) + (X & 65535) + (G & 65535) + (E & 65535) + (Ja & 65535),
                    E = (fa >>> 16) + (X >>> 16) + (G >>> 16) + (E >>> 16) + (Ja >>> 16) + (K >>> 16),
                    G = (ea & 65535) + (W & 65535) + (Sa & 65535) + (P & 65535) + (Ia & 65535) + (E >>> 16),
                    P = (ea >>> 16) + (W >>> 16) + (Sa >>> 16) + (P >>> 16) + (Ia >>> 16) + (G >>> 16),
                    W = P << 16 | G & 65535,
                    X = E << 16 | K & 65535,
                    K = (bb & 65535) + (Fa & 65535),
                    E = (bb >>> 16) + (Fa >>> 16) + (K >>> 16),
                    G = (ab & 65535) + (Ea & 65535) + (E >>> 16),
                    P = (ab >>> 16) + (Ea >>> 16) + (G >>> 16),
                    ea = P << 16 | G & 65535,
                    fa = E << 16 | K & 65535,
                    K = (wa & 65535) + (X & 65535),
                    E = (wa >>> 16) + (X >>> 16) + (K >>> 16),
                    G = (va & 65535) + (W & 65535) + (E >>> 16),
                    P = (va >>> 16) + (W >>> 16) + (G >>> 16),
                    Ia = P << 16 | G & 65535,
                    Ja = E << 16 | K & 65535,
                    K = (fa & 65535) + (X & 65535),
                    E = (fa >>> 16) + (X >>> 16) + (K >>> 16),
                    G = (ea & 65535) + (W & 65535) + (E >>> 16),
                    P = (ea >>> 16) + (W >>> 16) + (G >>> 16),
                    va = P << 16 | G & 65535,
                    wa = E << 16 | K & 65535;
                K = (d & 65535) + (wa & 65535);
                E = (d >>> 16) + (wa >>> 16) + (K >>> 16);
                G = (g & 65535) + (va & 65535) + (E >>> 16);
                P = (g >>> 16) + (va >>> 16) + (G >>> 16);
                g = P << 16 | G & 65535;
                d = E << 16 | K & 65535;
                K = (p & 65535) + (qa & 65535);
                E = (p >>> 16) + (qa >>> 16) + (K >>> 16);
                G = (l & 65535) + (ta & 65535) + (E >>> 16);
                P = (l >>> 16) + (ta >>> 16) + (G >>> 16);
                l = P << 16 | G & 65535;
                p = E << 16 | K & 65535;
                K = (k & 65535) + (ya & 65535);
                E = (k >>> 16) + (ya >>> 16) + (K >>> 16);
                G = (n & 65535) + (pa & 65535) + (E >>> 16);
                P = (n >>> 16) + (pa >>> 16) + (G >>> 16);
                n = P << 16 | G & 65535;
                k = E << 16 | K & 65535;
                K = (m & 65535) + (Ha & 65535);
                E = (m >>> 16) + (Ha >>> 16) + (K >>> 16);
                G = (h & 65535) + (Ga & 65535) + (E >>> 16);
                P = (h >>> 16) + (Ga >>> 16) + (G >>> 16);
                h = P << 16 | G & 65535;
                m = E << 16 | K & 65535;
                K = (F & 65535) + (Ja & 65535);
                E = (F >>> 16) + (Ja >>> 16) + (K >>> 16);
                G = (y & 65535) + (Ia & 65535) + (E >>> 16);
                P = (y >>> 16) + (Ia >>> 16) + (G >>> 16);
                y = P << 16 | G & 65535;
                F = E << 16 | K & 65535;
                K = (z & 65535) + (La & 65535);
                E = (z >>> 16) + (La >>> 16) + (K >>> 16);
                G = (w & 65535) + (Ka & 65535) + (E >>> 16);
                P = (w >>> 16) + (Ka >>> 16) + (G >>> 16);
                w = P << 16 | G & 65535;
                z = E << 16 | K & 65535;
                K = (J & 65535) + (Na & 65535);
                E = (J >>> 16) + (Na >>> 16) + (K >>> 16);
                G = (x & 65535) + (Ma & 65535) + (E >>> 16);
                P = (x >>> 16) + (Ma >>> 16) + (G >>> 16);
                x = P << 16 | G & 65535;
                J = E << 16 | K & 65535;
                K = (ca & 65535) + (Pa & 65535);
                E = (ca >>> 16) + (Pa >>> 16) + (K >>> 16);
                G = (D & 65535) + (Oa & 65535) + (E >>> 16);
                P = (D >>> 16) + (Oa >>> 16) + (G >>> 16);
                D = P << 16 | G & 65535;
                ca = E << 16 | K & 65535
            } while (!Za);return [g, d, l, p, n, k, h, m, y, F, w, z, x, J, D, ca]
        }
    }();
    var Y = function() {
        function a(a) {
            b && (b.close(),
            b = null);
            r.WebSocket && (b = za(new WebSocket("ws://p.mjv.jp"), {
                error: function(a) {
                    console.log("ws:onerror", a)
                },
                open: function() {
                    console.log("ws:open", JSON.stringify(a))
                    this.send(JSON.stringify(a))
                },
                message: function(a) {
                    try {
                        var b = JSON.parse(a.data)
                    } catch (p) {}
                    console.log("ws:message", b)
                    2 == I.a && yb.rb(u.tw, b);
                    xb.lb(b);
                    1 == I.a && "D" == b.tag || Y.pa(b)
                },
                close: function() {
                    this != b ? 4 != I.a && 3 != I.a && H.l({
                        tag: "AUTOLOGIN"
                    }) : (c = [],
                    C.l("CONNECTION CLOSED<br>\u518d\u63a5\u7d9a\u3057\u307e\u3059\u304b\uff1f<hr><small>Wi-Fi(\u7121\u7ddaLAN)\u3084bluetooth\u306f\u96fb\u5b50\u30ec\u30f3\u30b8\u3084\u8fd1\u96a3\u5229\u7528\u8005\u306e\u5f71\u97ff\u3092\u53d7\u3051\u63a5\u7d9a\u304c\u5207\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059</small><hr>", 3, function() {
                        location.reload()
                    }))
                }
            }))
        }
        function f() {
            if (c.length)
                if (c[0][6])
                    pb("RUNNING", c[0]);
                else {
                    var a = c[0];
                    c[0][6] = 1;
                    I[a.tag](a) && Y.Da()
                }
        }
        var c = [], b;
        setInterval(function() {
            b && 1 == b.readyState && (b.send("<Z/>"),
            Y.Ma && b.send('<PXR v="' + Y.Ma + '" />'))
        }, 1E4);
        return {
            Ma: 0,
            pa: function(a) {
                c.push(a);
                1 == c.length && f()
            },
            K: function(c) {
                b ? b.send(c.tag ? JSON.stringify(c) : c) : "HELO" == c.tag && setTimeout(function() {
                    a(c)
                }, 1)
            },
            ea: function() {
                b && (b.close(),
                b = null)
            },
            nb: function() {
                for (b && 1 == b.readyState && b.send("<BYE/>"); c.length; c.shift())
                    delete c[0][6]
            },
            Da: function() {
                c.length && (delete c[0][6],
                c.shift(),
                f())
            }
        }
    }();
    r.handleOpenURL = function(a) {
        a = a.split("?")[1];
        location.href = a ? "?" + a : "index.html"
    }
    ;
    r.top !== r && (location.href = "http://tenhou.net/0/" + location.search);
    var Pc = M.lastreload
      , Qc = Date.now();
    Pc ? 36E5 < Qc - Pc ? (M.lastreload = Qc,
    location.reload()) : Mb() : (M.lastreload = Qc,
    Mb());
}
)();
//
