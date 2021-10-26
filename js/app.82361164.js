(function (e) {
    function t(t) {
        for (var r, i, o = t[0], s = t[1], u = t[2], f = 0, d = []; f < o.length; f++) i = o[f], Object.prototype.hasOwnProperty.call(a, i) && a[i] && d.push(a[i][0]), a[i] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        l && l(t);
        while (d.length) d.shift()();
        return c.push.apply(c, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < c.length; t++) {
            for (var n = c[t], r = !0, o = 1; o < n.length; o++) {
                var s = n[o];
                0 !== a[s] && (r = !1)
            }
            r && (c.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
        a = {
            app: 0
        },
        c = [];

    function i(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = r, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var u = 0; u < o.length; u++) t(o[u]);
    var l = s;
    c.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("cd49")
    },
    "0565": function (e, t, n) {
        "use strict";
        (function (e) {
            var r = n("1da1"),
                a = (n("96cf"), n("99af"), n("b0c0"), n("7327")),
                c = n("731b"),
                i = n("25f1"),
                o = n("eaa5"),
                s = n("73ec");
            t["a"] = {
                name: "FileSelector",
                data: function () {
                    return {
                        task_all: 0,
                        task_finished: 0,
                        queue: new s["a"],
                        parallel: !1
                    }
                },
                computed: {
                    progress_value: function () {
                        return this.task_all ? this.task_finished / this.task_all * 100 : 0
                    },
                    progress_show: function () {
                        return this.task_all !== this.task_finished
                    }
                },
                mounted: function () {
                    window.Worker && "file:" !== window.location.protocol ? (console.log("Using Worker Pool"), this.queue = Object(a["a"])((function () {
                        return Object(c["a"])(new i["a"](e))
                    }), navigator.hardwareConcurrency || 1), this.parallel = !0) : console.log("Using Queue in Main Thread")
                },
                methods: {
                    progress_string: function () {
                        return "".concat(this.task_finished, " / ").concat(this.task_all)
                    },
                    addFile: function (e) {
                        var t = this;
                        return Object(r["a"])(regeneratorRuntime.mark((function n() {
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        t.task_all++, t.queue.queue(Object(r["a"])(regeneratorRuntime.mark((function n() {
                                            var r, a = arguments;
                                            return regeneratorRuntime.wrap((function (n) {
                                                while (1) switch (n.prev = n.next) {
                                                    case 0:
                                                        return r = a.length > 0 && void 0 !== a[0] ? a[0] : o["a"], console.log("start handling", e.name), n.prev = 2, n.t0 = t, n.next = 6, r(e);
                                                    case 6:
                                                        n.t1 = n.sent, n.t0.$emit.call(n.t0, "success", n.t1), n.next = 14;
                                                        break;
                                                    case 10:
                                                        n.prev = 10, n.t2 = n["catch"](2), console.error(n.t2), t.$emit("error", n.t2, e.name);
                                                    case 14:
                                                        return n.prev = 14, t.task_finished++, n.finish(14);
                                                    case 17:
                                                    case "end":
                                                        return n.stop()
                                                }
                                            }), n, null, [
                                                [2, 10, 14, 17]
                                            ])
                                        }))));
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }
                }
            }
        }).call(this, n("2e83"))
    },
    1: function (e, t) {},
    2: function (e, t) {},
    "2e83": function (e, t, n) {
        e.exports = n.p + "js/0.6576d7b0.worker.js"
    },
    3: function (e, t) {},
    3349: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return f
        })), n.d(t, "d", (function () {
            return d
        })), n.d(t, "b", (function () {
            return b
        })), n.d(t, "c", (function () {
            return m
        }));
        n("159b"), n("ace4"), n("d3b7"), n("5cc6"), n("9a8c"), n("a975"), n("735e"), n("c1ac"), n("d139"), n("3a7b"), n("d5d6"), n("82f8"), n("e91f"), n("60bd"), n("5f96"), n("3280"), n("3fcc"), n("ca91"), n("25a1"), n("cd26"), n("3c5d"), n("2954"), n("649e"), n("219c"), n("170b"), n("b39a"), n("72f7"), n("a630"), n("3ca3"), n("fb6a"), n("b64b"), n("a9e3"), n("99af");
        var r = n("cc74"),
            a = [79, 103, 103, 83, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 1, 30, 1, 118, 111, 114, 98, 105, 115, 0, 0, 0, 0, 2, 68, 172, 0, 0, 0, 0, 0, 0, 0, 238, 2, 0, 0, 0, 0, 0, 184, 1, 79, 103, 103, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 255, 255, 255, 255],
            c = [3, 118, 111, 114, 98, 105, 115, 44, 0, 0, 0, 88, 105, 112, 104, 46, 79, 114, 103, 32, 108, 105, 98, 86, 111, 114, 98, 105, 115, 32, 73, 32, 50, 48, 49, 53, 48, 49, 48, 53, 32, 40, 226, 155, 132, 226, 155, 132, 226, 155, 132, 226, 155, 132, 41, 255, 0, 0, 0, 255, 0, 0, 0, 84, 73, 84, 76, 69, 61],
            i = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0],
            o = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 3, 3, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3],
            s = [222, 81, 250, 195, 74, 214, 202, 144, 126, 103, 94, 247, 213, 82, 132, 216, 71, 149, 187, 161, 170, 198, 102, 35, 146, 98, 243, 116, 161, 159, 244, 160, 29, 63, 91, 240, 19, 14, 9, 61, 249, 188, 0, 17],
            u = [],
            l = [];
        (function () {
            for (var e = 0; e < 128; e++) {
                var t = (e * e + 27) % 256;
                t in u ? u[t].push(e) : u[t] = [e]
            }
            var n = 0;
            u.forEach((function (e) {
                e.forEach((function (e) {
                    l[e] = n
                })), n++
            }))
        })();
        var f = function () {
            function e(e) {
                if (e instanceof Uint8Array && (e = Array.from(e)), 44 === e.length) this.Matrix128 = this._generate128(e);
                else {
                    if (128 !== e.length) throw Error("invalid mask length");
                    this.Matrix128 = e
                }
            }
            return e.prototype.getMatrix128 = function () {
                return this.Matrix128
            }, e.prototype.getMatrix44 = function () {
                var e = this,
                    t = [],
                    n = 0;
                return u.forEach((function (r) {
                    for (var a = r.length, c = 1; c < a; c++)
                        if (e.Matrix128[r[0]] !== e.Matrix128[r[c]]) throw "decode mask-128 to mask-44 failed";
                    t[n] = e.Matrix128[r[0]], n++
                })), t
            }, e.prototype.Decrypt = function (e) {
                if (!this.Matrix128) throw Error("bad call sequence");
                for (var t = e.slice(0), n = -1, r = -1, a = 0; a < e.length; a++) n++, r++, (32768 === n || n > 32768 && (n + 1) % 32768 === 0) && (n++, r++), r >= 128 && (r -= 128), t[a] ^= this.Matrix128[r];
                return t
            }, e.prototype._generate128 = function (e) {
                var t = [],
                    n = 0;
                return u.forEach((function (r) {
                    r.forEach((function (r) {
                        t[r] = e[n]
                    })), n++
                })), t
            }, e
        }();

        function d() {
            return new f(s)
        }

        function b(e) {
            for (var t = Math.min(32768, e.length), n = 0; n < t; n += 128) try {
                var a = new f(e.slice(n, n + 128));
                if (Object(r["b"])(a.Decrypt(e.slice(0, r["c"].length)), r["c"])) return a
            } catch (c) {}
        }

        function m(e) {
            if (!(e.length < 256)) {
                for (var t = {}, n = 0; n < 44; n++) t[n] = {};
                for (var c = e[84] ^ e[12] ^ a[12], i = h(c), o = v(c), s = 0; s < i.length; s++)
                    if (0 !== o[s]) {
                        var u = l[s % 128],
                            d = e[s] ^ i[s],
                            b = o[s];
                        d in t[u] ? t[u][d] += b : t[u][d] = b
                    } var m = [];
                try {
                    for (n = 0; n < 44; n++) m[n] = p(t[n])
                } catch (g) {
                    return
                }
                var w = new f(m);
                return Object(r["b"])(w.Decrypt(e.slice(0, r["h"].length)), r["h"]) ? w : void 0
            }
        }

        function p(e) {
            var t = Object.keys(e).length;
            if (0 === t) throw "can not match at least one key";
            t > 1 && console.warn("There are 2 potential value for the mask!");
            var n = "",
                r = 0;
            for (var a in e) e[a] > r && (n = a, r = e[a]);
            return Number(n)
        }

        function h(e) {
            for (var t = [e, 255], n = 2; n < e; n++) t.push(255);
            return t.push(255), a.concat(t, c)
        }

        function v(e) {
            for (var t = [6, 0], n = 2; n < e; n++) t.push(4);
            return t.push(0), i.concat(t, o)
        }
    },
    "5c0b": function (e, t, n) {
        "use strict";
        n("9c0c")
    },
    "73ec": function (e, t, n) {
        "use strict";
        n.d(t, "e", (function () {
            return r
        })), n.d(t, "d", (function () {
            return c
        })), n.d(t, "b", (function () {
            return o
        })), n.d(t, "c", (function () {
            return s
        })), n.d(t, "f", (function () {
            return u
        })), n.d(t, "a", (function () {
            return l
        }));
        n("d3b7"), n("3ca3"), n("ddb0"), n("2b3d"), n("9861"), n("2ca0");
        var r, a = n("9ab4");
        (function (e) {
            e[e["ArtistAndTitle"] = 0] = "ArtistAndTitle", e[e["TitleOnly"] = 1] = "TitleOnly", e[e["TitleAndArtist"] = 2] = "TitleAndArtist", e[e["SameAsOriginal"] = 3] = "SameAsOriginal"
        })(r || (r = {}));
        var c = [{
            key: r.ArtistAndTitle,
            text: "歌手-歌曲名"
        }, {
            key: r.TitleOnly,
            text: "歌曲名"
        }, {
            key: r.TitleAndArtist,
            text: "歌曲名-歌手"
        }, {
            key: r.SameAsOriginal,
            text: "同源文件名"
        }];

        function i(e, t) {
            switch (t) {
                case r.TitleOnly:
                    return e.title + "." + e.ext;
                case r.TitleAndArtist:
                    return e.title + " - " + e.artist + "." + e.ext;
                case r.SameAsOriginal:
                    return e.rawFilename + "." + e.ext;
                default:
                case r.ArtistAndTitle:
                    return e.artist + " - " + e.title + "." + e.ext
            }
        }

        function o(e, t, n) {
            return Object(a["a"])(this, void 0, void 0, (function () {
                var r, c, o;
                return Object(a["b"])(this, (function (a) {
                    switch (a.label) {
                        case 0:
                            r = i(e, t), a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, n.getFileHandle(r)];
                        case 2:
                            return a.sent(), r = (new Date).getTime() + " - " + r, [3, 4];
                        case 3:
                            return a.sent(), [3, 4];
                        case 4:
                            return [4, n.getFileHandle(r, {
                                create: !0
                            })];
                        case 5:
                            return c = a.sent(), [4, c.createWritable()];
                        case 6:
                            return o = a.sent(), [4, o.write(e.blob)];
                        case 7:
                            return a.sent(), [4, o.close()];
                        case 8:
                            return a.sent(), [2]
                    }
                }))
            }))
        }

        function s(e, t) {
            var n = document.createElement("a");
            n.href = e.file, n.download = i(e, t), document.body.append(n), n.click(), n.remove()
        }

        function u(e) {
            var t;
            URL.revokeObjectURL(e.file), (null === (t = e.picture) || void 0 === t ? void 0 : t.startsWith("blob:")) && URL.revokeObjectURL(e.picture)
        }
        var l = function () {
            function e() {
                this.pending = []
            }
            return e.prototype.queue = function (e) {
                this.pending.push(e), this.consume()
            }, e.prototype.consume = function () {
                var e = this,
                    t = this.pending.shift();
                t && t().then((function () {
                    return e.consume
                })).catch(console.error)
            }, e
        }()
    },
    8850: function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "b", (function () {
                return f
            })), n.d(t, "a", (function () {
                return d
            }));
            n("d3b7"), n("ace4"), n("5cc6"), n("9a8c"), n("a975"), n("735e"), n("c1ac"), n("d139"), n("3a7b"), n("d5d6"), n("82f8"), n("e91f"), n("60bd"), n("5f96"), n("3280"), n("3fcc"), n("ca91"), n("25a1"), n("cd26"), n("3c5d"), n("2954"), n("649e"), n("219c"), n("170b"), n("b39a"), n("72f7"), n("fb6a"), n("ac1f"), n("1276"), n("3ca3"), n("ddb0"), n("2b3d"), n("9861");
            var r = n("9ab4"),
                a = n("3349"),
                c = n("1fb5"),
                i = n("cc74"),
                o = n("cb96"),
                s = n("acf9"),
                u = n.n(s),
                l = n("97e5"),
                f = {
                    mgg: {
                        handler: a["c"],
                        ext: "ogg",
                        detect: !0
                    },
                    mflac: {
                        handler: a["b"],
                        ext: "flac",
                        detect: !0
                    },
                    "mgg.cache": {
                        handler: a["c"],
                        ext: "ogg",
                        detect: !1
                    },
                    "mflac.cache": {
                        handler: a["b"],
                        ext: "flac",
                        detect: !1
                    },
                    qmc0: {
                        handler: a["d"],
                        ext: "mp3",
                        detect: !1
                    },
                    qmc2: {
                        handler: a["d"],
                        ext: "ogg",
                        detect: !1
                    },
                    qmc3: {
                        handler: a["d"],
                        ext: "mp3",
                        detect: !1
                    },
                    qmcogg: {
                        handler: a["d"],
                        ext: "ogg",
                        detect: !1
                    },
                    qmcflac: {
                        handler: a["d"],
                        ext: "flac",
                        detect: !1
                    },
                    bkcmp3: {
                        handler: a["d"],
                        ext: "mp3",
                        detect: !1
                    },
                    bkcflac: {
                        handler: a["d"],
                        ext: "flac",
                        detect: !1
                    },
                    tkm: {
                        handler: a["d"],
                        ext: "m4a",
                        detect: !1
                    },
                    "666c6163": {
                        handler: a["d"],
                        ext: "flac",
                        detect: !1
                    },
                    "6d7033": {
                        handler: a["d"],
                        ext: "mp3",
                        detect: !1
                    },
                    "6f6767": {
                        handler: a["d"],
                        ext: "ogg",
                        detect: !1
                    },
                    "6d3461": {
                        handler: a["d"],
                        ext: "m4a",
                        detect: !1
                    },
                    776176: {
                        handler: a["d"],
                        ext: "wav",
                        detect: !1
                    }
                };

            function d(t, n, a) {
                var c, s, d, p;
                return Object(r["a"])(this, void 0, Promise, (function () {
                    var h, v, w, g, y, O, j, x, k, _, A, T, U, P, S, E, B, R;
                    return Object(r["b"])(this, (function (r) {
                        switch (r.label) {
                            case 0:
                                if (!(a in f)) throw "Qmc cannot handle type: " + a;
                                return h = f[a], w = Uint8Array.bind, [4, Object(i["d"])(t)];
                            case 1:
                                return v = new(w.apply(Uint8Array, [void 0, r.sent()])), h.detect ? (j = new DataView(v.slice(v.length - 4).buffer).getUint32(0, !0), x = v.length - 4 - j, g = v.slice(0, x), y = h.handler(g), O = v.slice(x, x + j), y ? [3, 3] : [4, b(O, n, a)]) : [3, 4];
                            case 2:
                                y = r.sent(), r.label = 3;
                            case 3:
                                if (!y) throw a + "格式仅提供实验性支持";
                                return [3, 5];
                            case 4:
                                if (g = v, y = h.handler(g), !y) throw a + "格式仅提供实验性支持";
                                r.label = 5;
                            case 5:
                                return k = y.Decrypt(g), _ = Object(i["i"])(k, h.ext), A = i["a"][_], T = new Blob([k], {
                                    type: A
                                }), [4, Object(o["parseBlob"])(T)];
                            case 6:
                                for (P in U = r.sent(), U.native) U.native.hasOwnProperty(P) && U.native[P].some((function (e) {
                                    return "TCON" === e.id && "(12)" === e.value
                                })) && (console.warn("try using gbk encoding to decode meta"), U.common.artist = u.a.decode(new e(null !== (c = U.common.artist) && void 0 !== c ? c : ""), "gbk"), U.common.title = u.a.decode(new e(null !== (s = U.common.title) && void 0 !== s ? s : ""), "gbk"), U.common.album = u.a.decode(new e(null !== (d = U.common.album) && void 0 !== d ? d : ""), "gbk"));
                                return S = Object(i["g"])(n, U.common.title, U.common.artist), O && Object(l["d"])(O, y.getMatrix128(), n, a, S.title, S.artist, U.common.album).then().catch(), E = Object(i["e"])(U), E ? [3, 9] : [4, m(S.title, S.artist, U.common.album)];
                            case 7:
                                return E = r.sent(), E ? [4, Object(i["f"])(E)] : [3, 9];
                            case 8:
                                if (B = r.sent(), B) {
                                    E = B.url;
                                    try {
                                        R = {
                                            picture: B.buffer,
                                            title: S.title,
                                            artists: null === (p = S.artist) || void 0 === p ? void 0 : p.split(" _ ")
                                        }, "mp3" === _ ? (k = Object(i["l"])(e.from(k), R, U), T = new Blob([k], {
                                            type: A
                                        })) : "flac" === _ ? (k = Object(i["k"])(e.from(k), R, U), T = new Blob([k], {
                                            type: A
                                        })) : console.info("writing metadata for " + _ + " is not being supported for now")
                                    } catch (D) {
                                        console.warn("Error while appending cover image to file " + D)
                                    }
                                }
                                r.label = 9;
                            case 9:
                                return [2, {
                                    title: S.title,
                                    artist: S.artist,
                                    ext: _,
                                    album: U.common.album,
                                    picture: E,
                                    file: URL.createObjectURL(T),
                                    blob: T,
                                    mime: A
                                }]
                        }
                    }))
                }))
            }

            function b(e, t, n) {
                return Object(r["a"])(this, void 0, Promise, (function () {
                    var i, o;
                    return Object(r["b"])(this, (function (r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(l["c"])(e, t, n)];
                            case 1:
                                return i = r.sent(), [2, new a["a"](Object(c["toByteArray"])(i.Matrix44))];
                            case 2:
                                return o = r.sent(), console.warn(o), [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }

            function m(e, t, n) {
                return Object(r["a"])(this, void 0, Promise, (function () {
                    var a, c, i;
                    return Object(r["b"])(this, (function (r) {
                        switch (r.label) {
                            case 0:
                                a = "https://stats.ixarea.com/apis/music/qq-cover", r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, Object(l["b"])(e, t, n)];
                            case 2:
                                return c = r.sent(), [2, a + "/" + c.Type + "/" + c.Id];
                            case 3:
                                return i = r.sent(), console.warn(i), [3, 4];
                            case 4:
                                return [2, ""]
                        }
                    }))
                }))
            }
        }).call(this, n("1c35").Buffer)
    },
    9224: function (e) {
        e.exports = JSON.parse('{"name":"unlock-music","version":"v1.9.1","updateInfo":"新增写入本地文件系统; 优化.kwm解锁; 支持.acc嗅探; 使用Typescript重构","license":"MIT","description":"Unlock encrypted music file in browser.","repository":{"type":"git","url":"https://github.com/ix64/unlock-music"},"private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","fix-compatibility":"node ./src/fix-compatibility.js","make-extension":"node ./make-extension.js"},"dependencies":{"base64-js":"^1.5.1","browser-id3-writer":"^4.4.0","core-js":"^3.16.0","crypto-js":"^4.1.1","element-ui":"^2.15.5","iconv-lite":"^0.6.3","jimp":"^0.16.1","metaflac-js":"^1.0.5","music-metadata":"7.9.0","music-metadata-browser":"2.2.7","register-service-worker":"^1.7.2","threads":"^1.6.5","vue":"^2.6.14"},"devDependencies":{"@types/crypto-js":"^4.0.2","@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-pwa":"^4.5.13","@vue/cli-plugin-typescript":"^4.5.13","@vue/cli-service":"^4.5.13","babel-plugin-component":"^1.1.1","sass":"^1.38.1","sass-loader":"^10.2.0","semver":"^7.3.5","threads-plugin":"^1.4.0","typescript":"~4.1.6","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.14"}}')
    },
    "97e5": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        })), n.d(t, "d", (function () {
            return o
        })), n.d(t, "c", (function () {
            return s
        })), n.d(t, "b", (function () {
            return u
        }));
        n("d3b7"), n("ace4"), n("5cc6"), n("9a8c"), n("a975"), n("735e"), n("c1ac"), n("d139"), n("3a7b"), n("d5d6"), n("82f8"), n("e91f"), n("60bd"), n("5f96"), n("3280"), n("3fcc"), n("ca91"), n("25a1"), n("cd26"), n("3c5d"), n("2954"), n("649e"), n("219c"), n("170b"), n("b39a"), n("72f7"), n("3ca3"), n("ddb0"), n("9861"), n("25f0");
        var r = n("9ab4"),
            a = n("1fb5"),
            c = "https://um-api.ixarea.com";

        function i(e) {
            return Object(r["a"])(this, void 0, Promise, (function () {
                var t;
                return Object(r["b"])(this, (function (n) {
                    switch (n.label) {
                        case 0:
                            return [4, fetch(c + "/music/app-version", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    Version: e
                                })
                            })];
                        case 1:
                            return t = n.sent(), [4, t.json()];
                        case 2:
                            return [2, n.sent()]
                    }
                }))
            }))
        }

        function o(e, t, n, r, i, o, s) {
            return fetch(c + "/qmcmask/usage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Mask: Object(a["fromByteArray"])(new Uint8Array(t)),
                    Key: Object(a["fromByteArray"])(e),
                    Artist: o,
                    Title: i,
                    Album: s,
                    Filename: n,
                    Format: r
                })
            })
        }

        function s(e, t, n) {
            return Object(r["a"])(this, void 0, Promise, (function () {
                var i;
                return Object(r["b"])(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return [4, fetch(c + "/qmcmask/query", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    Format: n,
                                    Key: Object(a["fromByteArray"])(e),
                                    Filename: t,
                                    Type: 44
                                })
                            })];
                        case 1:
                            return i = r.sent(), [4, i.json()];
                        case 2:
                            return [2, r.sent()]
                    }
                }))
            }))
        }

        function u(e, t, n) {
            return Object(r["a"])(this, void 0, Promise, (function () {
                var a, i, o;
                return Object(r["b"])(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return a = c + "/music/qq-cover", i = new URLSearchParams([
                                ["Title", e],
                                ["Artist", null !== t && void 0 !== t ? t : ""],
                                ["Album", null !== n && void 0 !== n ? n : ""]
                            ]), [4, fetch(a + "?" + i.toString())];
                        case 1:
                            return o = r.sent(), [4, o.json()];
                        case 2:
                            return [2, r.sent()]
                    }
                }))
            }))
        }
    },
    "9c0c": function (e, t, n) {},
    cc74: function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "c", (function () {
                return s
            })), n.d(t, "h", (function () {
                return l
            })), n.d(t, "a", (function () {
                return h
            })), n.d(t, "b", (function () {
                return v
            })), n.d(t, "i", (function () {
                return w
            })), n.d(t, "d", (function () {
                return g
            })), n.d(t, "e", (function () {
                return y
            })), n.d(t, "g", (function () {
                return O
            })), n.d(t, "f", (function () {
                return j
            })), n.d(t, "l", (function () {
                return x
            })), n.d(t, "k", (function () {
                return k
            })), n.d(t, "j", (function () {
                return _
            }));
            n("fb6a"), n("d3b7"), n("3ca3"), n("ddb0"), n("2b3d"), n("9861"), n("ac1f"), n("1276"), n("498a"), n("2ca0"), n("159b");
            var r = n("9ab4"),
                a = n("7907"),
                c = n.n(a),
                i = n("b686"),
                o = n.n(i),
                s = [102, 76, 97, 67],
                u = [73, 68, 51],
                l = [79, 103, 103, 83],
                f = [102, 116, 121, 112],
                d = [48, 38, 178, 117, 142, 102, 207, 17, 166, 217, 0, 170, 0, 98, 206, 108],
                b = [82, 73, 70, 70],
                m = [255, 241],
                p = [70, 82, 77, 56],
                h = {
                    mp3: "audio/mpeg",
                    flac: "audio/flac",
                    m4a: "audio/mp4",
                    ogg: "audio/ogg",
                    wma: "audio/x-ms-wma",
                    wav: "audio/x-wav",
                    dff: "audio/x-dff"
                };

            function v(e, t) {
                return !(t.length > e.length) && t.every((function (t, n) {
                    return t === e[n]
                }))
            }

            function w(e, t) {
                return void 0 === t && (t = "mp3"), v(e, u) ? "mp3" : v(e, s) ? "flac" : v(e, l) ? "ogg" : e.length >= 4 + f.length && v(e.slice(4), f) ? "m4a" : v(e, b) ? "wav" : v(e, d) ? "wma" : v(e, m) ? "aac" : v(e, p) ? "dff" : t
            }

            function g(e) {
                return e.arrayBuffer ? e.arrayBuffer() : new Promise((function (t, n) {
                    var r = new FileReader;
                    r.onload = function (e) {
                        var r, a = null === (r = e.target) || void 0 === r ? void 0 : r.result;
                        a ? t(a) : n("read file failed")
                    }, r.readAsArrayBuffer(e)
                }))
            }

            function y(e) {
                var t;
                return (null === (t = e.common) || void 0 === t ? void 0 : t.picture) && e.common.picture.length > 0 ? URL.createObjectURL(new Blob([e.common.picture[0].data], {
                    type: e.common.picture[0].format
                })) : ""
            }

            function O(e, t, n, r) {
                void 0 === r && (r = "-");
                var a = {
                        title: null !== t && void 0 !== t ? t : "",
                        artist: n
                    },
                    c = e.split(r);
                return c.length > 1 ? (a.artist || (a.artist = c[0].trim()), a.title || (a.title = c[1].trim())) : 1 === c.length && (a.title || (a.title = c[0].trim())), a
            }

            function j(e) {
                return Object(r["a"])(this, void 0, Promise, (function () {
                    var t, n, a, c, i;
                    return Object(r["b"])(this, (function (r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 4, , 5]), [4, fetch(e)];
                            case 1:
                                return t = r.sent(), n = t.headers.get("Content-Type"), (null === n || void 0 === n ? void 0 : n.startsWith("image/")) ? [4, t.arrayBuffer()] : [3, 3];
                            case 2:
                                return a = r.sent(), c = URL.createObjectURL(new Blob([a], {
                                    type: n
                                })), [2, {
                                    buffer: a,
                                    url: c,
                                    mime: n
                                }];
                            case 3:
                                return [3, 5];
                            case 4:
                                return i = r.sent(), console.warn(i), [3, 5];
                            case 5:
                                return [2]
                        }
                    }))
                }))
            }

            function x(e, t, n) {
                var r = new c.a(e),
                    a = n.native["ID3v2.4"] || n.native["ID3v2.3"] || n.native["ID3v2.2"] || [];
                a.forEach((function (e) {
                    if ("TPE1" !== e.id && "TIT2" !== e.id && "TALB" !== e.id) try {
                        r.setFrame(e.id, e.value)
                    } catch (t) {}
                }));
                var i = n.common;
                return r.setFrame("TPE1", (null === i || void 0 === i ? void 0 : i.artists) || t.artists || []).setFrame("TIT2", (null === i || void 0 === i ? void 0 : i.title) || t.title).setFrame("TALB", (null === i || void 0 === i ? void 0 : i.album) || t.album || ""), t.picture && r.setFrame("APIC", {
                    type: 3,
                    data: t.picture,
                    description: t.picture_desc || "Cover"
                }), r.addTag()
            }

            function k(t, n, r) {
                var a = new o.a(t),
                    c = r.common;
                return c.title || c.album || !c.artists || (a.setTag("TITLE=" + n.title), a.setTag("ALBUM=" + n.album), n.artists && (a.removeTag("ARTIST"), n.artists.forEach((function (e) {
                    return a.setTag("ARTIST=" + e)
                })))), n.picture && a.importPictureFromBuffer(e.from(n.picture)), a.save()
            }

            function _(e) {
                var t = e.lastIndexOf(".");
                return {
                    ext: e.substring(t + 1).toLowerCase(),
                    name: e.substring(0, t)
                }
            }
        }).call(this, n("1c35").Buffer)
    },
    cd49: function (e, t, n) {
        "use strict";
        n.r(t);
        n("9e1f"), n("450d");
        var r = n("6ed5"),
            a = n.n(r),
            c = (n("46a1"), n("e5f2")),
            i = n.n(c),
            o = (n("6b30"), n("c284")),
            s = n.n(o),
            u = (n("0c67"), n("299c")),
            l = n.n(u),
            f = (n("b5d8"), n("f494")),
            d = n.n(f),
            b = (n("560b"), n("dcdc")),
            m = n.n(b),
            p = (n("f225"), n("89a9")),
            h = n.n(p),
            v = (n("f4f9"), n("c2cc")),
            w = n.n(v),
            g = (n("7a0f"), n("0f6c")),
            y = n.n(g),
            O = (n("aaa5"), n("a578")),
            j = n.n(O),
            x = (n("adec"), n("3d2d")),
            k = n.n(x),
            _ = (n("bdc7"), n("aa2f")),
            A = n.n(_),
            T = (n("a673"), n("7b31")),
            U = n.n(T),
            P = (n("de31"), n("c69e")),
            S = n.n(P),
            E = (n("5466"), n("ecdf")),
            B = n.n(E),
            R = (n("38a0"), n("ad41")),
            D = n.n(R),
            L = (n("1951"), n("eedf")),
            F = n.n(L),
            M = (n("acb6"), n("c673")),
            q = n.n(M),
            C = (n("fd71"), n("a447")),
            I = n.n(C),
            $ = (n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("2b0e")),
            N = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("el-container", {
                    attrs: {
                        id: "app"
                    }
                }, [n("el-main", [n("Home")], 1)], 1)], 1)
            },
            H = [],
            W = n("1da1"),
            J = (n("96cf"), n("99af"), function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("el-upload", {
                    attrs: {
                        "auto-upload": !1,
                        "on-change": e.addFile,
                        "show-file-list": !1,
                        action: "",
                        drag: "",
                        multiple: ""
                    }
                }, [n("i", {
                    staticClass: "el-icon-upload"
                }), n("div", {
                    staticClass: "el-upload__text"
                }, [e._v("将文件拖到此处，或"), n("em", [e._v("点击选择")])]), n("div", {
                    staticClass: "el-upload__tip",
                    attrs: {
                        slot: "tip"
                    },
                    slot: "tip"
                }, [n("div", [e._v(" 仅在浏览器内对文件进行解锁，无需消耗流量 "), n("el-tooltip", {
                    attrs: {
                        effect: "dark",
                        placement: "top-start"
                    }
                }, [n("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [e._v(" 算法在源代码中已经提供，所有运算都发生在本地 ")]), n("i", {
                    staticClass: "el-icon-info",
                    staticStyle: {
                        "font-size": "12px"
                    }
                })])], 1), n("div", [e._v(" 工作模式: " + e._s(e.parallel ? "多线程 Worker" : "单线程 Queue") + " "), n("el-tooltip", {
                    attrs: {
                        effect: "dark",
                        placement: "top-start"
                    }
                }, [n("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [e._v(" 将此工具部署在HTTPS环境下，可以启用Web Worker特性，"), n("br"), e._v(" 从而更快的利用并行处理完成解锁 ")]), n("i", {
                    staticClass: "el-icon-info",
                    staticStyle: {
                        "font-size": "12px"
                    }
                })])], 1)]), n("transition", {
                    attrs: {
                        name: "el-fade-in"
                    }
                }, [n("el-progress", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.progress_show,
                        expression: "progress_show"
                    }],
                    staticStyle: {
                        margin: "16px 6px 0 6px"
                    },
                    attrs: {
                        format: e.progress_string,
                        percentage: e.progress_value,
                        "stroke-width": 16,
                        "text-inside": !0
                    }
                })], 1)], 1)
            }),
            V = [],
            Q = n("0565"),
            K = Q["a"],
            z = n("2877"),
            G = Object(z["a"])(K, J, V, !1, null, null, null),
            X = G.exports,
            Y = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("el-table", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        data: e.tableData
                    }
                }, [n("el-table-column", {
                    attrs: {
                        label: "封面"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function (t) {
                            return [n("el-image", {
                                staticStyle: {
                                    width: "100px",
                                    height: "100px"
                                },
                                attrs: {
                                    src: t.row.picture
                                }
                            }, [n("div", {
                                staticClass: "image-slot el-image__error",
                                attrs: {
                                    slot: "error"
                                },
                                slot: "error"
                            }, [e._v(" 暂无封面 ")])])]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {
                        label: "歌曲"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function (t) {
                            return [n("span", [e._v(e._s(t.row.title))])]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {
                        label: "歌手"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function (t) {
                            return [n("p", [e._v(e._s(t.row.artist))])]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {
                        label: "专辑"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function (t) {
                            return [n("p", [e._v(e._s(t.row.album))])]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {
                        label: "操作"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function (t) {
                            return [n("el-button", {
                                attrs: {
                                    circle: "",
                                    icon: "el-icon-video-play",
                                    type: "success"
                                },
                                on: {
                                    click: function (n) {
                                        return e.handlePlay(t.$index, t.row)
                                    }
                                }
                            }), n("el-button", {
                                attrs: {
                                    circle: "",
                                    icon: "el-icon-download"
                                },
                                on: {
                                    click: function (n) {
                                        return e.handleDownload(t.row)
                                    }
                                }
                            }), n("el-button", {
                                attrs: {
                                    circle: "",
                                    icon: "el-icon-delete",
                                    type: "danger"
                                },
                                on: {
                                    click: function (n) {
                                        return e.handleDelete(t.$index, t.row)
                                    }
                                }
                            })]
                        }
                    }])
                })], 1)
            },
            Z = [],
            ee = (n("a9e3"), n("a434"), n("73ec")),
            te = {
                name: "PreviewTable",
                props: {
                    tableData: {
                        type: Array,
                        required: !0
                    },
                    policy: {
                        type: Number,
                        required: !0
                    }
                },
                methods: {
                    handlePlay: function (e, t) {
                        this.$emit("play", t.file)
                    },
                    handleDelete: function (e, t) {
                        Object(ee["f"])(t), this.tableData.splice(e, 1)
                    },
                    handleDownload: function (e) {
                        this.$emit("download", e)
                    }
                }
            },
            ne = te,
            re = Object(z["a"])(ne, Y, Z, !1, null, "1458a804", null),
            ae = re.exports,
            ce = n("9224"),
            ie = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("file-selector", {
                    on: {
                        error: e.showFail,
                        success: e.showSuccess
                    }
                }), n("div", {
                    attrs: {
                        id: "app-control"
                    }
                }, [n("el-row", {
                    staticClass: "mb-3"
                }, [n("span", [e._v("歌曲命名格式：")]), e._l(e.FilenamePolicies, (function (t) {
                    return n("el-radio", {
                        key: t.key,
                        attrs: {
                            label: t.key
                        },
                        model: {
                            value: e.filename_policy,
                            callback: function (t) {
                                e.filename_policy = t
                            },
                            expression: "filename_policy"
                        }
                    }, [e._v(" " + e._s(t.text) + " ")])
                }))], 2), n("el-row", [n("el-button", {
                    attrs: {
                        icon: "el-icon-download",
                        plain: ""
                    },
                    on: {
                        click: e.handleDownloadAll
                    }
                }, [e._v("下载全部")]), n("el-button", {
                    attrs: {
                        icon: "el-icon-delete",
                        plain: "",
                        type: "danger"
                    },
                    on: {
                        click: e.handleDeleteAll
                    }
                }, [e._v("清除全部")]), n("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        effect: "dark",
                        placement: "top-start"
                    }
                }, [n("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [e.instant_save ? n("span", [e._v("工作模式: " + e._s(e.dir ? "写入本地文件系统" : "调用浏览器下载"))]) : n("span", [e._v(" 当您使用此工具进行大量文件解锁的时候，建议开启此选项。"), n("br"), e._v(" 开启后，解锁结果将不会存留于浏览器中，防止内存不足。 ")])]), n("el-checkbox", {
                    staticClass: "ml-2",
                    attrs: {
                        border: ""
                    },
                    model: {
                        value: e.instant_save,
                        callback: function (t) {
                            e.instant_save = t
                        },
                        expression: "instant_save"
                    }
                }, [e._v("立即保存")])], 1)], 1)], 1), n("audio", {
                    attrs: {
                        autoplay: e.playing_auto,
                        src: e.playing_url,
                        controls: ""
                    }
                }), n("PreviewTable", {
                    attrs: {
                        policy: e.filename_policy,
                        "table-data": e.tableData
                    },
                    on: {
                        download: e.saveFile,
                        play: e.changePlaying
                    }
                })], 1)
            },
            oe = [],
            se = (n("159b"), {
                name: "Home",
                components: {
                    FileSelector: X,
                    PreviewTable: ae
                },
                data: function () {
                    return {
                        tableData: [],
                        playing_url: "",
                        playing_auto: !1,
                        filename_policy: ee["e"].ArtistAndTitle,
                        instant_save: !1,
                        FilenamePolicies: ee["d"],
                        dir: null
                    }
                },
                watch: {
                    instant_save: function (e) {
                        e && this.showDirectlySave()
                    }
                },
                methods: {
                    showSuccess: function (e) {
                        var t = this;
                        return Object(W["a"])(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        if (!t.instant_save) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.next = 3, t.saveFile(e);
                                    case 3:
                                        Object(ee["f"])(e), n.next = 8;
                                        break;
                                    case 6:
                                        t.tableData.push(e), t.$notify.success({
                                            title: "解锁成功",
                                            message: "成功解锁 " + e.title,
                                            duration: 3e3
                                        });
                                    case 8:
                                        r = [e.title, e.artist, e.album], window._paq.push(["trackEvent", "Unlock", e.rawExt + "," + e.mime, JSON.stringify(r)]);
                                    case 9:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    showFail: function (e, t) {
                        console.error(e, t), this.$notify.error({
                            title: "出现问题",
                            message: e + "，" + t + '，参考<a href="/">使用提示</a>',
                            dangerouslyUseHTMLString: !0,
                            duration: 6e3
                        }), window._paq.push(["trackEvent", "Error", String(e), t])
                    },
                    changePlaying: function (e) {
                        this.playing_url = e, this.playing_auto = !0
                    },
                    handleDeleteAll: function () {
                        this.tableData.forEach((function (e) {
                            Object(ee["f"])(e)
                        })), this.tableData = []
                    },
                    handleDownloadAll: function () {
                        var e = this,
                            t = 0,
                            n = setInterval((function () {
                                t < e.tableData.length ? (e.saveFile(e.tableData[t]), t++) : clearInterval(n)
                            }), 300)
                    },
                    saveFile: function (e) {
                        var t = this;
                        return Object(W["a"])(regeneratorRuntime.mark((function n() {
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        if (!t.dir) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.next = 3, Object(ee["b"])(e, t.filename_policy, t.dir);
                                    case 3:
                                        t.$notify({
                                            title: "保存成功",
                                            message: e.title,
                                            position: "top-left",
                                            type: "success",
                                            duration: 3e3
                                        }), n.next = 7;
                                        break;
                                    case 6:
                                        Object(ee["c"])(e, t.filename_policy);
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    showDirectlySave: function () {
                        var e = this;
                        return Object(W["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (window.showDirectoryPicker) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return t.prev = 2, t.next = 5, e.$confirm("您的浏览器支持文件直接保存到磁盘，是否使用？", "新特性提示", {
                                            confirmButtonText: "使用",
                                            cancelButtonText: "不使用",
                                            type: "warning",
                                            center: !0
                                        });
                                    case 5:
                                        t.next = 11;
                                        break;
                                    case 7:
                                        return t.prev = 7, t.t0 = t["catch"](2), console.log(t.t0), t.abrupt("return");
                                    case 11:
                                        return t.prev = 11, t.next = 14, window.showDirectoryPicker();
                                    case 14:
                                        return e.dir = t.sent, n = "__unlock_music_write_test.txt", t.next = 18, e.dir.getFileHandle(n, {
                                            create: !0
                                        });
                                    case 18:
                                        return t.next = 20, e.dir.removeEntry(n);
                                    case 20:
                                        t.next = 25;
                                        break;
                                    case 22:
                                        t.prev = 22, t.t1 = t["catch"](11), console.error(t.t1);
                                    case 25:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 7],
                                [11, 22]
                            ])
                        })))()
                    }
                }
            }),
            ue = se,
            le = Object(z["a"])(ue, ie, oe, !1, null, null, null),
            fe = le.exports,
            de = n("97e5"),
            be = {
                name: "app",
                components: {
                    FileSelector: X,
                    PreviewTable: ae,
                    Home: fe
                },
                data: function () {
                    return {
                        version: ce.version
                    }
                },
                created: function () {
                    var e = this;
                    this.$nextTick((function () {
                        return e.finishLoad()
                    }))
                },
                methods: {
                    finishLoad: function () {
                        var e = this;
                        return Object(W["a"])(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return n = document.getElementById("loader-mask"), n && n.remove(), t.prev = 2, t.next = 5, Object(de["a"])(e.version);
                                    case 5:
                                        r = t.sent, t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](2), console.warn("check version info failed", t.t0);
                                    case 11:
                                        r && (r.HttpsFound || r.Found && "https:" !== window.location.protocol) ? e.$notify.warning({
                                            title: "发现更新",
                                            message: "发现新版本 v".concat(r.Version, "<br/>更新详情：").concat(r.Detail, '<br/> <a target="_blank" href="').concat(r.URL, '">获取更新</a>'),
                                            dangerouslyUseHTMLString: !0,
                                            duration: 15e3,
                                            position: "top-left"
                                        }) : e.$notify.info({
                                            title: "离线使用",
                                            message: "我们使用PWA技术，无网络也能使用<br/>最近更新：".concat(ce.updateInfo, '<br/><a href="/">使用提示</a>'),
                                            dangerouslyUseHTMLString: !0,
                                            duration: 1e4,
                                            position: "top-left"
                                        });
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 8]
                            ])
                        })))()
                    }
                }
            },
            me = be,
            pe = (n("5c0b"), Object(z["a"])(me, N, H, !1, null, null, null)),
            he = pe.exports,
            ve = n("9483");
        "https:" === window.location.protocol && Object(ve["a"])("".concat("", "service-worker.js"), {
            ready: function () {
                console.log("App is being served from cache by a service worker.")
            },
            registered: function () {
                console.log("Service worker has been registered.")
            },
            cached: function () {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function () {
                console.log("New content is downloading.")
            },
            updated: function () {
                console.log("New content is available."), window.location.reload()
            },
            offline: function () {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function (e) {
                console.error("Error during service worker registration:", e)
            }
        }), $["default"].use(I.a), $["default"].use(q.a), $["default"].use(F.a), $["default"].use(D.a), $["default"].use(B.a), $["default"].use(S.a), $["default"].use(U.a), $["default"].use(A.a), $["default"].use(k.a), $["default"].use(j.a), $["default"].use(y.a), $["default"].use(w.a), $["default"].use(h.a), $["default"].use(m.a), $["default"].use(d.a), $["default"].use(l.a), $["default"].use(s.a), $["default"].prototype.$notify = i.a, $["default"].prototype.$confirm = a.a.confirm, $["default"].config.productionTip = !1, new $["default"]({
            render: function (e) {
                return e(he)
            }
        }).$mount("#app")
    },
    eaa5: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return P
        }));
        n("d3b7"), n("b0c0");
        var r = n("9ab4"),
            a = (n("ace4"), n("5cc6"), n("9a8c"), n("a975"), n("735e"), n("c1ac"), n("d139"), n("3a7b"), n("d5d6"), n("82f8"), n("e91f"), n("60bd"), n("5f96"), n("3280"), n("3fcc"), n("ca91"), n("25a1"), n("cd26"), n("3c5d"), n("2954"), n("649e"), n("219c"), n("170b"), n("b39a"), n("72f7"), n("fb6a"), n("3ca3"), n("ddb0"), n("2b3d"), n("9861"), n("cc74")),
            c = n("cb96");

        function i(e, t, n, i) {
            return void 0 === i && (i = !0), Object(r["a"])(this, void 0, Promise, (function () {
                var o, s, u, l, f, d, b;
                return Object(r["b"])(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return o = n, i ? (u = Uint8Array.bind, [4, Object(a["d"])(e)]) : [3, 2];
                        case 1:
                            s = new(u.apply(Uint8Array, [void 0, r.sent()])), o = Object(a["i"])(s, n), o !== n && (e = new Blob([s], {
                                type: a["a"][o]
                            })), r.label = 2;
                        case 2:
                            return [4, Object(c["parseBlob"])(e)];
                        case 3:
                            return l = r.sent(), f = Object(a["g"])(t, l.common.title, l.common.artist), d = f.title, b = f.artist, [2, {
                                title: d,
                                artist: b,
                                ext: o,
                                album: l.common.album,
                                picture: Object(a["e"])(l),
                                file: URL.createObjectURL(e),
                                blob: e,
                                mime: a["a"][o]
                            }]
                    }
                }))
            }))
        }
        var o = [105, 102, 109, 116],
            s = [254, 254, 254, 254],
            u = {
                " WAV": ".wav",
                FLAC: ".flac",
                " MP3": ".mp3",
                " A4M": ".m4a"
            };

        function l(e, t, n) {
            return Object(r["a"])(this, void 0, Promise, (function () {
                var l, f, d, b, m, p, h, v, w, g, y, O, j, x, k;
                return Object(r["b"])(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return f = Uint8Array.bind, [4, Object(a["d"])(e)];
                        case 1:
                            if (l = new(f.apply(Uint8Array, [void 0, r.sent()])), Object(a["b"])(l, o) && Object(a["b"])(l.slice(8, 12), s)) return [3, 4];
                            if ("xm" !== n) return [3, 2];
                            throw Error("此xm文件已损坏");
                        case 2:
                            return [4, i(e, t, n, !0)];
                        case 3:
                            return [2, r.sent()];
                        case 4:
                            if (d = (new TextDecoder).decode(l.slice(4, 8)), !u.hasOwnProperty(d)) throw Error("未知的.xm文件类型");
                            for (b = l[15], m = l[12] | l[13] << 8 | l[14] << 16, p = l.slice(16), h = p.length, v = m; v < h; ++v) p[v] = p[v] - b ^ 255;
                            return w = u[d], g = a["a"][w], y = new Blob([p], {
                                type: g
                            }), [4, Object(c["parseBlob"])(y)];
                        case 5:
                            return O = r.sent(), "wav" === w && (console.info(O.common), O.common.album = "", O.common.artist = "", O.common.title = ""), j = Object(a["g"])(t, O.common.title, O.common.artist, -1 === t.indexOf("_") ? "-" : "_"), x = j.title, k = j.artist, [2, {
                                title: x,
                                artist: k,
                                ext: w,
                                mime: g,
                                album: O.common.album,
                                picture: Object(a["e"])(O),
                                file: URL.createObjectURL(y),
                                blob: y,
                                rawExt: "xm"
                            }]
                    }
                }))
            }))
        }
        var f = n("8850");

        function d(e, t, n) {
            return Object(r["a"])(this, void 0, Promise, (function () {
                var n, i, o, s, u, l, d, b, m, p, h;
                return Object(r["b"])(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return i = Uint8Array.bind, [4, Object(a["d"])(e)];
                        case 1:
                            for (n = new(i.apply(Uint8Array, [void 0, r.sent()])), o = n.length, s = 0; s < o; s++) n[s] ^= 244, n[s] <= 63 ? n[s] = 4 * n[s] : n[s] <= 127 ? n[s] = 4 * (n[s] - 64) + 1 : n[s] <= 191 ? n[s] = 4 * (n[s] - 128) + 2 : n[s] = 4 * (n[s] - 192) + 3;
                            if (u = Object(a["i"])(n, ""), l = Object(a["j"])(t), "" === u && "mp3" !== l.ext) {
                                if (l.ext in f["b"]) return d = new Blob([n], {
                                    type: "application/octet-stream"
                                }), [2, Object(f["a"])(d, l.name, l.ext)];
                                throw "不支持的QQ音乐缓存格式"
                            }
                            return d = new Blob([n], {
                                type: a["a"][u]
                            }), [4, Object(c["parseBlob"])(d)];
                        case 2:
                            return b = r.sent(), m = Object(a["g"])(t, b.common.title, b.common.artist), p = m.title, h = m.artist, [2, {
                                title: p,
                                artist: h,
                                ext: u,
                                album: b.common.album,
                                picture: Object(a["e"])(b),
                                file: URL.createObjectURL(d),
                                blob: d,
                                mime: a["a"][u]
                            }]
                    }
                }))
            }))
        }
        var b = n("9224"),
            m = [5, 40, 188, 150, 233, 228, 90, 67, 145, 170, 189, 208, 122, 245, 54, 49],
            p = [124, 213, 50, 235, 134, 2, 127, 75, 168, 175, 166, 142, 15, 255, 153, 20],
            h = [37, 223, 232, 166, 117, 30, 117, 14, 47, 128, 243, 45, 184, 182, 227, 17, 0];

        function v(e, t, n) {
            return Object(r["a"])(this, void 0, Promise, (function () {
                var i, o, s, u, l, f, d, b, v, O, j, x, k, _, A, T, U;
                return Object(r["b"])(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return o = Uint8Array.bind, [4, Object(a["d"])(e)];
                        case 1:
                            if (i = new(o.apply(Uint8Array, [void 0, r.sent()])), "vpr" === n) {
                                if (!Object(a["b"])(i, m)) throw Error("Not a valid vpr file!")
                            } else if (!Object(a["b"])(i, p)) throw Error("Not a valid kgm(a) file!");
                            if (s = new DataView(i.slice(16, 20).buffer), u = s.getUint32(0, !0), l = i.slice(u), f = l.length, l.byteLength > 1 << 26) throw Error("文件过大，请使用 <a target='_blank' href='https://github.com/unlock-music/cli'>CLI版本</a> 进行解锁");
                            return d = new Uint8Array(17), d.set(i.slice(28, 44), 0), 0 !== g.length ? [3, 3] : [4, y()];
                        case 2:
                            if (!r.sent()) throw Error("加载Kgm/Vpr Mask数据失败");
                            r.label = 3;
                        case 3:
                            for (O = 0; O < f; O++) b = d[O % 17] ^ l[O], b ^= (15 & b) << 4, v = w(O), v ^= (15 & v) << 4, l[O] = b ^ v;
                            if ("vpr" === n)
                                for (O = 0; O < f; O++) l[O] ^= h[O % 17];
                            return j = Object(a["i"])(l), x = a["a"][j], k = new Blob([l], {
                                type: x
                            }), [4, Object(c["parseBlob"])(k)];
                        case 4:
                            return _ = r.sent(), A = Object(a["g"])(t, _.common.title, _.common.artist), T = A.title, U = A.artist, [2, {
                                album: _.common.album,
                                picture: Object(a["e"])(_),
                                file: URL.createObjectURL(k),
                                blob: k,
                                ext: j,
                                mime: x,
                                title: T,
                                artist: U
                            }]
                    }
                }))
            }))
        }

        function w(e) {
            return O[e % 272] ^ g[e >> 4]
        }
        var g = new Uint8Array(0);

        function y() {
            return Object(r["a"])(this, void 0, Promise, (function () {
                var e, t, n, a;
                return Object(r["b"])(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            e = "https://cdn.jsdelivr.net/gh/unlock-music/unlock-music@" + b.version + "/public/static/kgm.mask", ["http:", "https:"].some((function (e) {
                                return e == self.location.protocol
                            })) && (e = self.document ? "./static/kgm.mask" : "../static/kgm.mask"), r.label = 1;
                        case 1:
                            return r.trys.push([1, 4, , 5]), [4, fetch(e, {
                                method: "GET"
                            })];
                        case 2:
                            return t = r.sent(), n = Uint8Array.bind, [4, t.arrayBuffer()];
                        case 3:
                            return g = new(n.apply(Uint8Array, [void 0, r.sent()])), [2, !0];
                        case 4:
                            return a = r.sent(), console.error(a), [2, !1];
                        case 5:
                            return [2]
                    }
                }))
            }))
        }
        var O = [184, 213, 61, 178, 233, 175, 120, 140, 131, 51, 113, 81, 118, 160, 205, 55, 47, 62, 53, 141, 169, 190, 152, 183, 231, 140, 34, 206, 90, 97, 223, 104, 105, 137, 254, 165, 182, 222, 169, 119, 252, 200, 189, 189, 229, 109, 62, 90, 54, 239, 105, 78, 190, 225, 233, 102, 28, 243, 217, 2, 182, 242, 18, 155, 68, 208, 111, 185, 53, 137, 182, 70, 109, 115, 130, 6, 105, 193, 237, 215, 133, 194, 48, 223, 162, 98, 190, 121, 45, 98, 98, 61, 13, 126, 190, 72, 137, 35, 2, 160, 228, 213, 117, 81, 50, 2, 83, 253, 22, 58, 33, 59, 22, 15, 195, 178, 187, 179, 226, 186, 58, 61, 19, 236, 246, 1, 69, 132, 165, 112, 15, 147, 73, 12, 100, 205, 49, 213, 204, 76, 7, 1, 158, 0, 26, 35, 144, 191, 136, 30, 59, 171, 166, 62, 196, 115, 71, 16, 126, 59, 94, 188, 227, 0, 132, 255, 9, 212, 224, 137, 15, 91, 88, 112, 79, 251, 101, 216, 92, 83, 27, 211, 200, 198, 191, 239, 152, 176, 80, 79, 15, 234, 229, 131, 88, 140, 40, 44, 132, 103, 205, 208, 158, 71, 219, 39, 80, 202, 244, 99, 99, 232, 151, 127, 27, 75, 12, 194, 193, 33, 76, 204, 88, 245, 148, 82, 163, 243, 211, 224, 104, 244, 0, 35, 243, 94, 10, 123, 147, 221, 171, 18, 178, 19, 232, 132, 215, 167, 159, 15, 50, 76, 85, 29, 4, 54, 82, 220, 3, 243, 249, 78, 66, 233, 61, 97, 239, 124, 182, 179, 147, 80],
            j = (n("25f0"), n("843c"), [121, 101, 101, 108, 105, 111, 110, 45, 107, 117, 119, 111, 45, 116, 109, 101]),
            x = "MoOtOiTvINGwd2E6n0E1i7L5t2IoOoNk";

        function k(e, t, n) {
            return Object(r["a"])(this, void 0, Promise, (function () {
                var n, o, s, u, l, f, d, b, m, p, h, v, w, g;
                return Object(r["b"])(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return o = Uint8Array.bind, [4, Object(a["d"])(e)];
                        case 1:
                            return n = new(o.apply(Uint8Array, [void 0, r.sent()])), Object(a["b"])(n, j) ? [3, 4] : "aac" !== Object(a["i"])(n) ? [3, 3] : [4, i(e, t, "aac", !1)];
                        case 2:
                            return [2, r.sent()];
                        case 3:
                            throw Error("not a valid kwm file");
                        case 4:
                            for (s = n.slice(24, 32), u = _(s), l = n.slice(1024), f = l.length, d = 0; d < f; ++d) l[d] ^= u[d % 32];
                            return b = Object(a["i"])(l), m = a["a"][b], p = new Blob([l], {
                                type: m
                            }), [4, Object(c["parseBlob"])(p)];
                        case 5:
                            return h = r.sent(), v = Object(a["g"])(t, h.common.title, h.common.artist), w = v.title, g = v.artist, [2, {
                                album: h.common.album,
                                picture: Object(a["e"])(h),
                                file: URL.createObjectURL(p),
                                blob: p,
                                mime: m,
                                title: w,
                                artist: g,
                                ext: b
                            }]
                    }
                }))
            }))
        }

        function _(e) {
            for (var t = new DataView(e.buffer), n = t.getBigUint64(0, !0).toString(), r = A(n), a = new Uint8Array(32), c = 0; c < 32; c++) a[c] = x.charCodeAt(c) ^ r.charCodeAt(c);
            return a
        }

        function A(e) {
            var t = e.length,
                n = e;
            return t > 32 ? n = e.slice(0, 32) : t < 32 && (n = e.padEnd(32, e)), n
        }
        var T = [0, 0, 0, 32, 102, 116, 121, 112];

        function U(e, t) {
            return Object(r["a"])(this, void 0, Promise, (function () {
                var n, c, o, s;
                return Object(r["b"])(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return c = Uint8Array.bind, [4, Object(a["d"])(e)];
                        case 1:
                            for (n = new(c.apply(Uint8Array, [void 0, r.sent()])), o = 0; o < 8; ++o) n[o] = T[o];
                            return s = new Blob([n], {
                                type: "audio/mp4"
                            }), [4, i(s, t, "m4a", !1)];
                        case 2:
                            return [2, r.sent()]
                    }
                }))
            }))
        }

        function P(e) {
            return Object(r["a"])(this, void 0, Promise, (function () {
                var t, n, c;
                return Object(r["b"])(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            switch (t = Object(a["j"])(e.name), c = t.ext, c) {
                                case "kwm":
                                    return [3, 1];
                                case "xm":
                                    return [3, 3];
                                case "wav":
                                    return [3, 3];
                                case "mp3":
                                    return [3, 3];
                                case "flac":
                                    return [3, 3];
                                case "m4a":
                                    return [3, 3];
                                case "ogg":
                                    return [3, 5];
                                case "tm0":
                                    return [3, 7];
                                case "tm3":
                                    return [3, 7];
                                case "qmc3":
                                    return [3, 9];
                                case "qmc2":
                                    return [3, 9];
                                case "qmc0":
                                    return [3, 9];
                                case "qmcflac":
                                    return [3, 9];
                                case "qmcogg":
                                    return [3, 9];
                                case "tkm":
                                    return [3, 9];
                                case "bkcmp3":
                                    return [3, 9];
                                case "bkcflac":
                                    return [3, 9];
                                case "mflac":
                                    return [3, 9];
                                case "mgg":
                                    return [3, 9];
                                case "666c6163":
                                    return [3, 9];
                                case "6d7033":
                                    return [3, 9];
                                case "6f6767":
                                    return [3, 9];
                                case "6d3461":
                                    return [3, 9];
                                case "776176":
                                    return [3, 9];
                                case "tm2":
                                    return [3, 11];
                                case "tm6":
                                    return [3, 11];
                                case "cache":
                                    return [3, 13];
                                case "vpr":
                                    return [3, 15];
                                case "kgm":
                                    return [3, 15];
                                case "kgma":
                                    return [3, 15]
                            }
                            return [3, 17];
                        case 1:
                            return [4, k(e.raw, t.name, t.ext)];
                        case 2:
                            return n = r.sent(), [3, 18];
                        case 3:
                            return [4, l(e.raw, t.name, t.ext)];
                        case 4:
                            return n = r.sent(), [3, 18];
                        case 5:
                            return [4, i(e.raw, t.name, t.ext)];
                        case 6:
                            return n = r.sent(), [3, 18];
                        case 7:
                            return [4, i(e.raw, t.name, "mp3")];
                        case 8:
                            return n = r.sent(), [3, 18];
                        case 9:
                            return [4, Object(f["a"])(e.raw, t.name, t.ext)];
                        case 10:
                            return n = r.sent(), [3, 18];
                        case 11:
                            return [4, U(e.raw, t.name)];
                        case 12:
                            return n = r.sent(), [3, 18];
                        case 13:
                            return [4, d(e.raw, t.name, t.ext)];
                        case 14:
                            return n = r.sent(), [3, 18];
                        case 15:
                            return [4, v(e.raw, t.name, t.ext)];
                        case 16:
                            return n = r.sent(), [3, 18];
                        case 17:
                            throw "不支持此文件格式";
                        case 18:
                            return n.rawExt || (n.rawExt = t.ext), n.rawFilename || (n.rawFilename = t.name), console.log(n), [2, n]
                    }
                }))
            }))
        }
    }
});