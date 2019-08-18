// Only thing edited from the original script is the default primary color
// when the page loads. We added a note inline where that happens; search
// for "Change default primary color".
// - Kuali Co.

var f;

var aa = function (a) {
  var b = 0;
  return function () {
    return b < a.length ? {done: !1, value: a[b++]} : {done: !0};
  };
};

var v = function () {
  window.Symbol();
  var a = window.Symbol.iterator;
  a || (a = window.Symbol.iterator = window.Symbol("iterator"));
  "function" != typeof Array.prototype[a] &&
  Object.defineProperty(Array.prototype, a, {
    configurable: !0,
    writable: !0,
    value: function () {
      return da(aa(this));
    }
  });
  v = function () {
  };
};

var da = function (a) {
  v();
  a = {next: a};
  a[window.Symbol.iterator] = function () {
    return this;
  };
  return a;
};

var w = function (a) {
  var b =
    "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : {next: aa(a)};
};

var ea = function (a) {
  if (!(a instanceof Array)) {
    a = w(a);
    for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
    a = c;
  }
  return a;
};

var x = function (a, b) {
  a.prototype = Object.create(b.prototype);
  a.prototype.constructor = a;
  Object.setPrototypeOf(a, b);
  a.Gc = b.prototype;
};

var ra = (2147483648 * Math.random()) | 0;

var minMax = function (a, b, c) {
  return Math.min(Math.max(a, b), c);
};
/*

Copyright 2016 Google Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR minMax PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
var B = function (a) {
  this.a = a = void 0 === a ? {} : a;
};
B.prototype.tb = function () {
};
window.Object.defineProperties(B, {
  H: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return {};
    }
  },
  c: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return {};
    }
  },
  ba: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return {};
    }
  },
  hb: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return {};
    }
  }
});
var C = function (a, b, c) {
  for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
  this.C = a;
  ea(d);
  this.wa = void 0 === b ? this.ob() : b;
  this.wa.tb();
  this.ub();
};
C.prototype.ob = function () {
  throw Error(
    "Subclasses must override getDefaultFoundation to return a properly configured foundation class"
  );
};
C.prototype.ub = function () {
};
var sa = {
  Nb: "mdc-ripple-upgraded",
  Na: "mdc-ripple-upgraded--unbounded",
  Ka: "mdc-ripple-upgraded--background-focused",
  La: "mdc-ripple-upgraded--foreground-activation",
  Ma: "mdc-ripple-upgraded--foreground-deactivation"
};

var ta = {
  Tb: "--mdc-ripple-left",
  Ub: "--mdc-ripple-top",
  Qb: "--mdc-ripple-fg-size",
  Pb: "--mdc-ripple-fg-scale",
  Sb: "--mdc-ripple-fg-translate-start",
  Rb: "--mdc-ripple-fg-translate-end"
};

var ua = {Mb: 10, Lb: 0.6, Jb: 225, Kb: 150, Ob: 300};
var va,
  wa,
  D = function () {
    var a = void 0 === a ? window : a;
    if (void 0 === wa) {
      var b = !1;
      try {
        a.document.addEventListener("test", null, {
          get passive() {
            return (b = !0);
          }
        });
      } catch (c) {
      }
      wa = b;
    }
    return wa ? {passive: !0} : !1;
  },
  xa = function () {
    for (
      var a = HTMLElement.prototype,
        b = ["matches", "webkitMatchesSelector", "msMatchesSelector"],
        c = "matches",
        d = 0;
      d < b.length;
      d++
    ) {
      var e = b[d];
      if (e in a) {
        c = e;
        break;
      }
    }
    return c;
  };
var ya = ["touchstart", "pointerdown", "mousedown", "keydown"];
var za = ["touchend", "pointerup", "mouseup", "contextmenu"];
var Aa = [];
var E = function (a) {
  B.call(this, Object.assign(E.hb, a));
  var b = this;
  this.na = 0;
  this.m = {width: 0, height: 0};
  this.D = Ba();
  this.wb = this.A = 0;
  this.$b = function (a) {
    return Ca(b, a);
  };
  this.ja = function () {
    return Da(b);
  };
  this.oc = function () {
    return Ea(b);
  };
  this.dc = function () {
    return Fa(b);
  };
  this.wc = function () {
    return b.ma();
  };
  this.Ia = {left: 0, top: 0};
  this.lb = this.Wa = this.mb = 0;
  this.ta = !1;
  this.ac = function () {
    b.ta = !0;
    Ga(b);
  };
};

x(E, B);
var Ba = function () {
  return {la: !1, qb: !1, qa: !1, I: !1, ua: void 0, xa: !1};
};
E.prototype.tb = function () {
  var a = this,
    b = this.a.Za();
  Ha(this, b);
  if (b) {
    b = E.H;
    var c = b.Nb,
      d = b.Na;
    requestAnimationFrame(function () {
      a.a.J(c);
      a.a.R() && (a.a.J(d), Ia(a));
    });
  }
};
var Ha = function (a, b) {
    b &&
    (ya.forEach(function (b) {
      a.a.da(b, a.$b);
    }),
    a.a.R() && a.a.Bb(a.wc));
    a.a.da("focus", a.oc);
    a.a.da("blur", a.dc);
  },
  Ja = function (a, b) {
    "keydown" === b.type
      ? a.a.da("keyup", a.ja)
      : za.forEach(function (b) {
        a.a.Ab(b, a.ja);
      });
  },
  Ka = function (a) {
    a.a.jb("keyup", a.ja);
    za.forEach(function (b) {
      a.a.ib(b, a.ja);
    });
  },
  Ca = function (a, b) {
    if (!a.a.vb()) {
      var c = a.D;
      if (!c.la) {
        var d = a.zb;
        (d && void 0 !== b && d.type !== b.type) ||
        ((c.la = !0),
          (c.xa = void 0 === b),
          (c.ua = b),
          (c.qa = c.xa
            ? !1
            : void 0 !== b &&
            ("mousedown" === b.type ||
              "touchstart" === b.type ||
              "pointerdown" === b.type)),
          void 0 !== b &&
          0 < Aa.length &&
          Aa.some(function (b) {
            return a.a.cb(b);
          })
            ? La(a)
            : (void 0 !== b && (Aa.push(b.target), Ja(a, b)),
              (c.I = void 0 !== b && "keydown" === b.type ? a.a.za() : !0),
            c.I && Ma(a),
              requestAnimationFrame(function () {
                Aa = [];
                c.I ||
                void 0 === b ||
                (" " !== b.key && 32 !== b.keyCode) ||
                ((c.I = void 0 !== b && "keydown" === b.type ? a.a.za() : !0),
                c.I && Ma(a));
                c.I || (a.D = Ba());
              })));
      }
    }
  },
  Ma = function (a) {
    var b = E.c,
      c = b.Sb;
    b = b.Rb;
    var d = E.H,
      e = d.Ma;
    d = d.La;
    var g = E.ba.Jb;
    Ia(a);
    var h = "",
      k = "";
    a.a.R() ||
    ((k = Na(a)),
      (h = k.Cc),
      (k = k.lc),
      (h = h.x + "px, " + h.y + "px"),
      (k = k.x + "px, " + k.y + "px"));
    a.a.N(c, h);
    a.a.N(b, k);
    clearTimeout(a.Wa);
    clearTimeout(a.lb);
    Oa(a);
    a.a.V(e);
    a.a.X();
    a.a.J(d);
    a.Wa = setTimeout(function () {
      return a.ac();
    }, g);
  },
  Na = function (a) {
    var b = a.D,
      c = b.ua;
    if (b.qa) {
      var d = a.a.pb(),
        e = a.a.X();
      b = d.x + e.left;
      d = d.y + e.top;
      "touchstart" === c.type
        ? ((b = c.changedTouches[0].pageX - b),
          (c = c.changedTouches[0].pageY - d))
        : ((b = c.pageX - b), (c = c.pageY - d));
      c = {x: b, y: c};
    } else c = {x: a.m.width / 2, y: a.m.height / 2};
    c = {x: c.x - a.A / 2, y: c.y - a.A / 2};
    return {
      Cc: c,
      lc: {x: a.m.width / 2 - a.A / 2, y: a.m.height / 2 - a.A / 2}
    };
  },
  Ga = function (a) {
    var b = E.H.Ma,
      c = a.D,
      d = c.la;
    (!c.qb && d) ||
    !a.ta ||
    (Oa(a),
      a.a.J(b),
      (a.lb = setTimeout(function () {
        a.a.V(b);
      }, ua.Kb)));
  },
  Oa = function (a) {
    a.a.V(E.H.La);
    a.ta = !1;
    a.a.X();
  },
  La = function (a) {
    a.zb = a.D.ua;
    a.D = Ba();
    setTimeout(function () {
      return (a.zb = void 0);
    }, E.ba.Ob);
  },
  Da = function (a) {
    var b = a.D;
    if (b.la) {
      var c = Object.assign({}, b);
      b.xa
        ? (requestAnimationFrame(function () {
          var b = c.I;
          (c.qa || b) && Ga(a);
        }),
          La(a))
        : (Ka(a),
          requestAnimationFrame(function () {
            a.D.qb = !0;
            var b = c.I;
            (c.qa || b) && Ga(a);
            La(a);
          }));
    }
  };
E.prototype.ma = function () {
  var a = this;
  this.na && cancelAnimationFrame(this.na);
  this.na = requestAnimationFrame(function () {
    Ia(a);
    a.na = 0;
  });
};
var Ia = function (a) {
    a.m = a.a.X();
    var b = Math.max(a.m.height, a.m.width);
    a.wb = a.a.R()
      ? b
      : Math.sqrt(Math.pow(a.m.width, 2) + Math.pow(a.m.height, 2)) + E.ba.Mb;
    a.A = Math.floor(b * E.ba.Lb);
    a.mb = a.wb / a.A;
    b = E.c;
    var c = b.Tb,
      d = b.Ub,
      e = b.Pb;
    a.a.N(b.Qb, a.A + "px");
    a.a.N(e, a.mb);
    a.a.R() &&
    ((a.Ia = {
      left: Math.round(a.m.width / 2 - a.A / 2),
      top: Math.round(a.m.height / 2 - a.A / 2)
    }),
      a.a.N(c, a.Ia.left + "px"),
      a.a.N(d, a.Ia.top + "px"));
  },
  Ea = function (a) {
    requestAnimationFrame(function () {
      return a.a.J(E.H.Ka);
    });
  },
  Fa = function (a) {
    requestAnimationFrame(function () {
      return a.a.V(E.H.Ka);
    });
  };
window.Object.defineProperties(E, {
  H: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return sa;
    }
  },
  c: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return ta;
    }
  },
  ba: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return ua;
    }
  },
  hb: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return {
        Za: function () {
        },
        R: function () {
        },
        za: function () {
        },
        vb: function () {
        },
        J: function () {
        },
        V: function () {
        },
        cb: function () {
        },
        da: function () {
        },
        jb: function () {
        },
        Ab: function () {
        },
        ib: function () {
        },
        Bb: function () {
        },
        jc: function () {
        },
        N: function () {
        },
        X: function () {
        },
        pb: function () {
        }
      };
    }
  }
});
var F = function (a) {
  for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
  C.apply(this, ea(b));
  this.disabled = !1;
};
x(F, C);
var Pa = function (a) {
  var b = xa();
  return {
    Za: function () {
      var a = window;
      var b = void 0 === b ? !1 : b;
      var e = va;
      if ("boolean" !== typeof va || b)
        if (a.CSS && "function" === typeof a.CSS.supports) {
          e = a.CSS.supports("--css-vars", "yes");
          var g =
            a.CSS.supports("(--css-vars: yes)") &&
            a.CSS.supports("color", "#00000000");
          e || g
            ? ((g = a.document),
              (e = g.createElement("div")),
              (e.className = "mdc-ripple-surface--test-edge-var-bug"),
              g.body.appendChild(e),
              (a = a.getComputedStyle(e)),
              (a = null !== a && "solid" === a.borderTopStyle),
              e.remove(),
              (a = !a))
            : (a = !1);
          e = a;
          b || (va = e);
          b = e;
        } else b = void 0;
      else b = e;
      return b;
    },
    R: function () {
      return a.Hb;
    },
    za: function () {
      return a.C[b](":active");
    },
    vb: function () {
      return a.disabled;
    },
    J: function (b) {
      return a.C.classList.add(b);
    },
    V: function (b) {
      return a.C.classList.remove(b);
    },
    cb: function (b) {
      return a.C.contains(b);
    },
    da: function (b, d) {
      return a.C.addEventListener(b, d, D());
    },
    jb: function (b, d) {
      return a.C.removeEventListener(b, d, D());
    },
    Ab: function (a, b) {
      return document.documentElement.addEventListener(a, b, D());
    },
    ib: function (a, b) {
      return document.documentElement.removeEventListener(a, b, D());
    },
    Bb: function (a) {
      return window.addEventListener("resize", a);
    },
    jc: function (a) {
      return window.removeEventListener("resize", a);
    },
    N: function (b, d) {
      return a.C.style.setProperty(b, d);
    },
    X: function () {
      return a.C.getBoundingClientRect();
    },
    pb: function () {
      return {x: window.pageXOffset, y: window.pageYOffset};
    }
  };
};
F.prototype.ma = function () {
  this.wa.ma();
};
F.prototype.ob = function () {
  return new E(Pa(this));
};
F.prototype.ub = function () {
  this.Hb = "mdcRippleIsUnbounded" in this.C.dataset;
};
window.Object.defineProperties(F.prototype, {
  Hb: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return this.Ib;
    },
    set: function (a) {
      this.Ib = !!a;
      a = this.wa;
      var b = E.H.Na;
      this.Ib ? a.a.J(b) : a.a.V(b);
    }
  }
});
/*
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR minMax PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
*/
/*

 Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at
 http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at
 http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at
 http://polymer.github.io/PATENTS.txt
*/
var Qa = new Map(),
  Ta = function (a, b) {
    var c = Ra;
    c = void 0 === c ? Sa : c;
    this.c = a;
    this.values = b;
    this.type = "html";
    this.Da = c;
  };

function Ua(a) {
  var b = Qa.get(a.type);
  void 0 === b && ((b = new Map()), Qa.set(a.type, b));
  var c = b.get(a.c);
  if (void 0 === c) {
    c = document.createElement("template");
    for (var d = a.c.length - 1, e = "", g = !0, h = 0; h < d; h++) {
      var k = a.c[h];
      e += k;
      var l = k.lastIndexOf(">");
      l = -1 < k.indexOf("<", l + 1) ? k.length : l;
      g = -1 < l ? l < k.length : g;
      e += g ? Va : G;
    }
    e += a.c[d];
    c.innerHTML = e;
    c = new Wa(a, c);
    b.set(a.c, c);
  }
  return c;
}

var G = "{{lit-" + String(Math.random()).slice(2) + "}}",
  Va = "\x3c!--" + G + "--\x3e",
  Xa = new RegExp(G + "|" + Va),
  Ya = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/,
  Za = function (a, b, c, d, e) {
    this.type = a;
    this.index = b;
    this.name = c;
    this.Ea = d;
    this.c = e;
  },
  Wa = function (a, b) {
    this.oa = [];
    this.element = b;
    b = document.createTreeWalker(this.element.content, 133, null, !1);
    for (var c = -1, d = 0, e = [], g, h; b.nextNode();) {
      c++;
      g = h;
      var k = (h = b.currentNode);
      if (1 === k.nodeType) {
        if (k.hasAttributes()) {
          g = k.attributes;
          for (var l = 0, m = 0; m < g.length; m++)
            0 <= g[m].value.indexOf(G) && l++;
          for (; 0 < l--;) {
            m = Ya.exec(a.c[d])[1];
            var q = g.getNamedItem(m),
              t = q.value.split(Xa);
            this.oa.push(new Za("attribute", c, q.name, m, t));
            k.removeAttribute(q.name);
            d += t.length - 1;
          }
        }
      } else if (3 === k.nodeType) {
        if (((l = k.nodeValue), !(0 > l.indexOf(G)))) {
          g = k.parentNode;
          l = l.split(Xa);
          m = l.length - 1;
          d += m;
          for (q = 0; q < m; q++)
            g.insertBefore(
              "" === l[q]
                ? document.createComment("")
                : document.createTextNode(l[q]),
              k
            ),
              this.oa.push(new Za("node", c++));
          g.insertBefore(
            "" === l[m]
              ? document.createComment("")
              : document.createTextNode(l[m]),
            k
          );
          e.push(k);
        }
      } else
        8 === k.nodeType &&
        k.nodeValue === G &&
        ((h = k.parentNode),
          (l = k.previousSibling),
          null === l || l !== g || l.nodeType !== Node.TEXT_NODE
            ? h.insertBefore(document.createComment(""), k)
            : c--,
          this.oa.push(new Za("node", c++)),
          e.push(k),
          null === k.nextSibling
            ? h.insertBefore(document.createComment(""), k)
            : c--,
          (h = g),
          d++);
    }
    a = w(e);
    for (b = a.next(); !b.done; b = a.next())
      (b = b.value), b.parentNode.removeChild(b);
  },
  J = function (a, b) {
    return "function" === typeof b && !0 === b.Vb
      ? (b(a), I)
      : null === b
        ? void 0
        : b;
  },
  $a = function (a) {
    a.Vb = !0;
    return a;
  },
  I = {},
  ab = function (a) {
    return null === a || !("object" === typeof a || "function" === typeof a);
  },
  K = function (a, b, c, d) {
    this.aa = a;
    this.element = b;
    this.name = c;
    this.c = d;
    this.size = d.length - 1;
    this.ra = [];
  };
K.prototype.Sa = function (a, b) {
  for (var c = this.c, d = c.length - 1, e = "", g = 0; g < d; g++) {
    e += c[g];
    var h = J(this, a[b + g]);
    window.Symbol();
    v();
    if (
      h &&
      h !== I &&
      (Array.isArray(h) || ("string" !== typeof h && h[Symbol.iterator]))
    ) {
      h = w(h);
      for (var k = h.next(); !k.done; k = h.next()) e += k.value;
    } else e += h;
  }
  return e + c[d];
};
K.prototype.Pa = function (a, b) {
  for (var c = b; c < b + this.size; c++)
    if (this.ra[c] !== a[c] || !ab(a[c])) return !1;
  return !0;
};
K.prototype.o = function (a, b) {
  if (!this.Pa(a, b)) {
    var c = this.c;
    2 === c.length && "" === c[0] && "" === c[1]
      ? ((b = J(this, a[b])), Array.isArray(b) && (b = b.join("")))
      : (b = this.Sa(a, b));
    b !== I && this.element.setAttribute(this.name, b);
    this.ra = a;
  }
};
var bb = function (a, b, c) {
  this.aa = a;
  this.W = b;
  this.l = c;
  this.g = void 0;
};
f = bb.prototype;
f.o = function (a) {
  a = J(this, a);
  a !== I &&
  (ab(a)
    ? a !== this.g && this.Va(a)
    : a instanceof Ta
      ? this.Zb(a)
      : (window.Symbol(),
        v(),
        Array.isArray(a) || a[Symbol.iterator]
          ? this.Xb(a)
          : a instanceof Node
          ? this.sa(a)
          : void 0 !== a.then
            ? this.Yb(a)
            : this.Va(a)));
};
f.Ra = function (a) {
  this.l.parentNode.insertBefore(a, this.l);
};
f.sa = function (a) {
  this.g !== a && (this.clear(), this.Ra(a), (this.g = a));
};
f.Va = function (a) {
  var b = this.W.nextSibling;
  a = void 0 === a ? "" : a;
  b === this.l.previousSibling && b.nodeType === Node.TEXT_NODE
    ? (b.textContent = a)
    : this.sa(document.createTextNode(a));
  this.g = a;
};
f.Zb = function (a) {
  var b = this.aa.Qa(a);
  this.g && this.g.pa === b
    ? (b = this.g)
    : ((b = new cb(b, a.Da, this.aa.Qa)), this.sa(b.Oa()), (this.g = b));
  b.update(a.values);
};
f.Xb = function (a) {
  Array.isArray(this.g) || (this.clear(), (this.g = []));
  var b = this.g,
    c = 0;
  a = w(a);
  for (var d = a.next(); !d.done; d = a.next()) {
    d = d.value;
    var e = b[c];
    void 0 === e &&
    ((e = this.W),
    0 < c && ((e = b[c - 1].l = document.createTextNode("")), this.Ra(e)),
      (e = new bb(this.aa, e, this.l)),
      b.push(e));
    e.o(d);
    c++;
  }
  0 === c
    ? (this.clear(), (this.g = void 0))
    : c < b.length &&
    ((a = b[c - 1]),
      (b.length = c),
      this.clear(a.l.previousSibling),
      (a.l = this.l));
};
f.Yb = function (a) {
  var b = this;
  this.g = a;
  a.then(function (c) {
    b.g === a && b.o(c);
  });
};
f.clear = function (a) {
  a = void 0 === a ? this.W : a;
  db(this.W.parentNode, a.nextSibling, this.l);
};
var Sa = function (a, b, c) {
    if ("attribute" === b.type) return new K(a, c, b.name, b.c);
    if ("node" === b.type) return new bb(a, c, c.nextSibling);
    throw Error("Unknown part type " + b.type);
  },
  cb = function (a, b, c) {
    this.Ua = [];
    this.pa = a;
    this.Ta = b;
    this.Qa = c;
  };
cb.prototype.update = function (a) {
  for (var b = 0, c = w(this.Ua), d = c.next(); !d.done; d = c.next())
    (d = d.value)
      ? void 0 === d.size
      ? (d.o(a[b]), b++)
      : (d.o(a, b), (b += d.size))
      : b++;
};
cb.prototype.Oa = function () {
  var a = this.pa.element.content.cloneNode(!0),
    b = this.pa.oa;
  if (0 < b.length)
    for (
      var c = document.createTreeWalker(a, 133, null, !1), d = -1, e = 0;
      e < b.length;
      e++
    ) {
      var g = b[e],
        h = -1 !== g.index;
      if (h) for (; d < g.index;) d++, c.nextNode();
      this.Ua.push(h ? this.Ta(this, g, c.currentNode) : void 0);
    }
  return a;
};
var db = function (a, b, c) {
  for (c = void 0 === c ? null : c; b !== c;) {
    var d = b.nextSibling;
    a.removeChild(b);
    b = d;
  }
};
var L = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    return new Ta(a, c);
  },
  Ra = function (a, b, c) {
    if ("attribute" === b.type) {
      if ("on-" === b.Ea.substr(0, 3)) return new eb(a, c, b.Ea.slice(3));
      var d = b.name.substr(b.name.length - 1);
      return "$" === d
        ? new K(a, c, b.name.slice(0, -1), b.c)
        : "?" === d
          ? new fb(a, c, b.name.slice(0, -1), b.c)
          : new gb(a, c, b.Ea, b.c);
    }
    return Sa(a, b, c);
  },
  fb = function (a) {
    K.apply(this, arguments);
  };
x(fb, K);
fb.prototype.o = function (a, b) {
  var c = this.c;
  if (2 === c.length && "" === c[0] && "" === c[1])
    (a = J(this, a[b])),
    a !== I &&
    (a
      ? this.element.setAttribute(this.name, "")
      : this.element.removeAttribute(this.name));
  else throw Error("boolean attributes can only contain a single expression");
};
var gb = function (a) {
  K.apply(this, arguments);
};
x(gb, K);
gb.prototype.o = function (a, b) {
  var c = this.c;
  this.Pa(a, b) ||
  ((b =
    2 === c.length && "" === c[0] && "" === c[1]
      ? J(this, a[b])
      : this.Sa(a, b)),
  b !== I && (this.element[this.name] = b),
    (this.ra = a));
};
var eb = function (a, b, c) {
  this.aa = a;
  this.element = b;
  this.kb = c;
};
eb.prototype.o = function (a) {
  a = J(this, a);
  a !== this.O &&
  (null == a
    ? this.element.removeEventListener(this.kb, this)
    : null == this.O && this.element.addEventListener(this.kb, this),
    (this.O = a));
};
eb.prototype.handleEvent = function (a) {
  "function" === typeof this.O
    ? this.O.call(this.element, a)
    : "function" === typeof this.O.handleEvent && this.O.handleEvent(a);
};


function checkRange(value, maxValue, label) {
  if (isNaN(value) || 0 > value || value > maxValue)
    throw new RangeError(value + " for " + label + " is not between 0 and " + maxValue);
}

var ACCURACY = Math.pow(2, -16);

var RGBColor = function (red, green, blue, alpha = 1) {
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.alpha = alpha;
  checkRange(red, 1, "red");
  checkRange(green, 1, "green");
  checkRange(blue, 1, "blue");
  checkRange(alpha, 1, "alpha");
};

RGBColor.prototype.toCSSValue = function () {
  return (
    "rgba(" +
    100 * this.red +
    "%, " +
    100 * this.green +
    "%, " +
    (100 * this.blue + "%, " + this.alpha + ")")
  );
};

var rgb2hex = function (rgbColor) {
  return (
    decimal2hex(Math.round(255 * rgbColor.red)) +
    decimal2hex(Math.round(255 * rgbColor.green)) +
    decimal2hex(Math.round(255 * rgbColor.blue)) +
    (1 > rgbColor.alpha ? decimal2hex(Math.round(255 * rgbColor.alpha)) : "")
  );
};

RGBColor.prototype.equals = function (rgbColor) {
  return (
    Math.abs(this.red - rgbColor.red) < ACCURACY &&
    Math.abs(this.green - rgbColor.green) < ACCURACY &&
    Math.abs(this.blue - rgbColor.blue) < ACCURACY &&
    Math.abs(this.alpha - rgbColor.alpha) < ACCURACY
  );
};

var normalizeRGB = function (rgbColor) {
  return 1 - rgbColor.alpha < ACCURACY ? rgbColor : new RGBColor(rgbColor.red, rgbColor.green, rgbColor.blue);
};

var contrastRatio = function (rgbColor1, rgbColor2) {
  var c = normalizeRGB(rgbColor2);
  if (!(1 - rgbColor1.alpha < ACCURACY)) {
    var d = c.alpha * (1 - rgbColor1.alpha);
    rgbColor1 = new RGBColor(
      rgbColor1.red * rgbColor1.alpha + c.red * d,
      rgbColor1.green * rgbColor1.alpha + c.green * d,
      rgbColor1.blue * rgbColor1.alpha + c.blue * d,
      rgbColor1.alpha + d
    );
  }
  rgbColor1 = 0.2126 * rgb2xyz(rgbColor1.red) + 0.7152 * rgb2xyz(rgbColor1.green) + 0.0722 * rgb2xyz(rgbColor1.blue);
  rgbColor2 = 0.2126 * rgb2xyz(rgbColor2.red) + 0.7152 * rgb2xyz(rgbColor2.green) + 0.0722 * rgb2xyz(rgbColor2.blue);
  return rgbColor1 >= rgbColor2 ? (rgbColor1 + 0.05) / (rgbColor2 + 0.05) : (rgbColor2 + 0.05) / (rgbColor1 + 0.05);
};

var kb = function (a, b, c, d) {
  var e = d,
    g = d;
  a = (a % 360) / 60;
  var h = c * (1 - Math.abs((a % 2) - 1));
  switch (Math.floor(a)) {
    case 0:
      e += c;
      g += h;
      break;
    case 1:
      e += h;
      g += c;
      break;
    case 2:
      g += c;
      d += h;
      break;
    case 3:
      g += h;
      d += c;
      break;
    case 4:
      e += h;
      d += c;
      break;
    case 5:
      (e += c), (d += h);
  }
  return new RGBColor(e, g, d, b);
};

var hsl2rgb = function (hslColor) {
  var b = (1 - Math.abs(2 * hslColor.lightness - 1)) * hslColor.saturation;
  return kb(hslColor.hue, hslColor.alpha, b, Math.max(0, hslColor.lightness - b / 2));
};

var hsb2rgb = function (hsbColor) {
  var b = hsbColor.value * hsbColor.saturation;
  return kb(hsbColor.hue, hsbColor.alpha, b, Math.max(0, hsbColor.value - b));
};

var hex2rgb = function (hexColor) {
  if (!/^[a-fA-F0-9]{3,8}$/.test(hexColor))
    throw Error("Invalid hex color string: " + hexColor);
  if (3 === hexColor.length || 4 === hexColor.length)
    var b = /^(.)(.)(.)(.)?$/
      .exec(hexColor)
      .slice(1, 5)
      .map(function (a) {
        return a ? a + a : "ff";
      });
  else if (6 === hexColor.length || 8 === hexColor.length)
    (b = /^(..)(..)(..)(..)?$/.exec(hexColor).slice(1, 5)),
    void 0 === b[3] && (b[3] = "ff");
  else throw Error("Invalid hex color string: " + hexColor);

  var red = hex2decimal(b[0]) / 255;
  var green = hex2decimal(b[1]) / 255;
  var blue = hex2decimal(b[2]) / 255;
  var alpha = hex2decimal(b[3]) / 255;

  return new RGBColor(red, green, blue, alpha);
};

var WHITE_COLOR = new RGBColor(1, 1, 1);
var BLACK_COLOR = new RGBColor(0, 0, 0);

function hex2decimal(hexColor) {
  if (!/^[a-fA-F0-9]+$/.test(hexColor)) throw Error("Invalid hex string: " + hexColor);
  return parseInt(hexColor, 16);
}

function decimal2hex(decimal) {
  decimal = decimal.toString(16);
  return 2 <= decimal.length ? decimal : "0" + decimal;
}

var HSLColor = function (hue, saturation, lightness, alpha = 1) {
  this.hue = hue;
  this.saturation = saturation;
  this.lightness = lightness;
  this.alpha = alpha;
  checkRange(hue, 360, "hue");
  checkRange(saturation, 1, "saturation");
  checkRange(lightness, 1, "lightness");
  checkRange(alpha, 1, "alpha");
};

HSLColor.prototype.toCSSValue = function () {
  return (
    "hsla(" +
    this.hue +
    ", " +
    100 * this.saturation +
    "%, " +
    (100 * this.lightness + "%, " + this.alpha + ")")
  );
};

var normalizeHSL = function (a) {
  return {
    hue: a.hue.toFixed(0),
    saturation: String(Math.round(1e4 * a.saturation) / 100),
    lightness: String(Math.round(1e4 * a.lightness) / 100),
    alpha: String(Math.round(1e4 * a.alpha) / 100)
  };
};

HSLColor.prototype.rotate = function (hueAdjustment) {
  return new HSLColor((this.hue + hueAdjustment + 360) % 360, this.saturation, this.lightness, this.alpha);
};

var rgb2hsl = function (rgbColor) {
  var b = Math.max(rgbColor.red, rgbColor.green, rgbColor.blue),
    c = Math.min(rgbColor.red, rgbColor.green, rgbColor.blue),
    d = 0,
    e = 0,
    g = minMax(0.5 * (b + c), 0, 1);
  b - c > ACCURACY &&
  (b === rgbColor.red
    ? (d = (60 * (rgbColor.green - rgbColor.blue)) / (b - c))
    : b === rgbColor.green
      ? (d = (60 * (rgbColor.blue - rgbColor.red)) / (b - c) + 120)
      : b === rgbColor.blue && (d = (60 * (rgbColor.red - rgbColor.green)) / (b - c) + 240),
    (e =
      0 < g && 0.5 >= g
        ? minMax((b - c) / (2 * g), 0, 1)
        : minMax((b - c) / (2 - 2 * g), 0, 1)));
  d = Math.round(d + 360) % 360;
  return new HSLColor(d, e, g, rgbColor.alpha);
};

var hsb2hsl = function (hsbColor) {
  var b = minMax(((2 - hsbColor.saturation) * hsbColor.value) / 2, 0, 1),
    c = 0;
  0 < b &&
  1 > b &&
  (c = (hsbColor.saturation * hsbColor.value) / (0.5 > b ? 2 * b : 2 - 2 * b));
  c = minMax(c, 0, 1);
  return new HSLColor(hsbColor.hue, c, b, hsbColor.alpha);
};

var HSBColor = function (hue, saturation, brightness, alpha = 1) {
  this.hue = hue;
  this.saturation = saturation;
  this.value = brightness;
  this.alpha = alpha;
  checkRange(hue, 360, "hue");
  checkRange(saturation, 1, "saturation");
  checkRange(brightness, 1, "value");
  checkRange(alpha, 1, "alpha");
};

var rgb2hsb = function (rgbColor) {
  var b = Math.max(rgbColor.red, rgbColor.green, rgbColor.blue);
  var c = Math.min(rgbColor.red, rgbColor.green, rgbColor.blue);
  var d = 0;
  var e = 0;

  b - c > ACCURACY &&
  ((e = (b - c) / b),
    b === rgbColor.red
      ? (d = (60 * (rgbColor.green - rgbColor.blue)) / (b - c))
      : b === rgbColor.green
      ? (d = (60 * (rgbColor.blue - rgbColor.red)) / (b - c) + 120)
      : b === rgbColor.blue && (d = (60 * (rgbColor.red - rgbColor.green)) / (b - c) + 240));
  d = Math.round(d + 360) % 360;
  return new HSBColor(d, e, b, rgbColor.alpha);
};

var hsl2hsb = function (hslColor) {
  var b = hslColor.saturation * (0.5 > hslColor.lightness ? hslColor.lightness : 1 - hslColor.lightness),
    c = minMax(hslColor.lightness + b, 0, 1);
  return new HSBColor(hslColor.hue, minMax(0 < c ? (2 * b) / c : 0, 0, 1), c, hslColor.alpha);
};

var LABColor = function (lightness, a, b, alpha = 1) {
  this.lightness = lightness;
  this.a = a;
  this.b = b;
  this.alpha = alpha;
  checkRange(lightness, Number.MAX_VALUE, "lightness");
  checkRange(alpha, 1, "alpha");
};

LABColor.prototype.equals = function (a) {
  return (
    1e-4 > Math.abs(this.lightness - a.lightness) &&
    1e-4 > Math.abs(this.a - a.a) &&
    1e-4 > Math.abs(this.b - a.b) &&
    Math.abs(this.alpha - a.alpha) < ACCURACY
  );
};

var rgb2hcl = function (rgbColor) {
  var red = rgb2xyz(rgbColor.red);
  var green = rgb2xyz(rgbColor.green);
  var blue = rgb2xyz(rgbColor.blue);
  var e = 0.2126729 * red + 0.7151522 * green + 0.072175 * blue;

  return new LABColor(
    116 * xyz2lab(e) - 16,
    500 *
    (xyz2lab((0.4124564 * red + 0.3575761 * green + 0.1804375 * blue) / 0.95047) - xyz2lab(e)),
    200 *
    (xyz2lab(e) - xyz2lab((0.0193339 * red + 0.119192 * green + 0.9503041 * blue) / 1.08883)),
    rgbColor.alpha
  );
};

var LCHColor = function (lightness, chroma, hue, alpha = 1) {
  this.lightness = lightness;
  this.chroma = chroma;
  this.hue = hue;
  this.alpha = alpha;
  checkRange(lightness, Number.MAX_VALUE, "lightness");
  checkRange(chroma, Number.MAX_VALUE, "chroma");
  checkRange(hue, 360, "hue");
  checkRange(alpha, 1, "alpha");
};

LCHColor.prototype.equals = function (a) {
  return (
    1e-4 > Math.abs(this.lightness - a.lightness) &&
    1e-4 > Math.abs(this.chroma - a.chroma) &&
    1e-4 > Math.abs(this.hue - a.hue) &&
    Math.abs(this.alpha - a.alpha) < ACCURACY
  );
};

var lab2lch = function (labColor) {
  return new LCHColor(
    labColor.lightness,
    Math.sqrt(Math.pow(labColor.a, 2) + Math.pow(labColor.b, 2)),
    ((180 * Math.atan2(labColor.b, labColor.a)) / Math.PI + 360) % 360,
    labColor.alpha
  );
};

function rgb2xyz(x) {
  return 0.04045 >= x ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function xyz2rgb(a) {
  return 0.0031308 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - 0.055;
}

function xyz2lab(t) {
  const t0 = 4 / 29;
  const t1 = 6 / 29;
  const t2 = 3 * Math.pow(t1, 2);
  const t3 = Math.pow(t1, 3);
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  const t0 = 4 / 29;
  const t1 = 6 / 29;
  const t2 = 3 * Math.pow(t1, 2);
  return t > t1 ? Math.pow(t, 3) : t2 * (t - t0);
}

var lab2hue = function (a, b) {
  if (1e-4 > Math.abs(a) && 1e-4 > Math.abs(b)) return 0;
  a = (180 * Math.atan2(a, b)) / Math.PI;
  return 0 <= a ? a : a + 360;
};

var GOLDEN_PALETTES = [
  [
    new LABColor(94.67497003305085, 7.266715066863771, 1.000743882272359),
    new LABColor(86.7897416761699, 18.370736761658012, 4.23637133971424),
    new LABColor(72.0939162832561, 31.7948058298117, 13.2972443996896),
    new LABColor(61.79353370051851, 44.129498163764545, 20.721477326799608),
    new LABColor(57.194195398949574, 59.6450006197361, 34.999830012940194),
    new LABColor(55.603951071861374, 66.01287384845483, 47.67169313982772),
    new LABColor(51.66348502954747, 64.7487785020625, 43.244876694855286),
    new LABColor(47.09455666350969, 62.29836039074277, 40.67775424698388),
    new LABColor(43.77122063388739, 60.28633509183384, 40.31444686692952),
    new LABColor(39.555187078007386, 58.703681355389975, 41.66495027798629)
  ],
  [
    new LABColor(92.68053776327665, 9.515385232804263, -0.8994072969754852),
    new LABColor(81.86756643628922, 25.05688089723257, -1.9475235115390621),
    new LABColor(70.90987389545768, 42.21705257720526, -1.095154624057959),
    new LABColor(61.08140805216186, 58.871233307587204, 2.1008764804626434),
    new LABColor(54.97970219986448, 68.56530938366889, 7.327430728560569),
    new LABColor(50.872250340749176, 74.60459195925529, 15.353576256896073),
    new LABColor(47.27738650144558, 70.77855776427805, 11.70434273264508),
    new LABColor(42.58424189486517, 65.5411953138309, 7.595596439803797),
    new LABColor(37.977492407254836, 60.74362621842075, 2.9847124951453474),
    new LABColor(29.699290034849604, 51.90485023721311, -4.830186634107636)
  ],
  [
    new LABColor(92.4362655169016, 7.542927467702299, -6.039842848605881),
    new LABColor(81.07399776904751, 19.563870217805036, -15.719625491986044),
    new LABColor(68.71394717711831, 33.79992812490556, -26.49539972339321),
    new LABColor(56.596161226236305, 47.5856631835152, -36.480816605410915),
    new LABColor(48.002791217624434, 57.30866443934879, -43.2561127152548),
    new LABColor(40.66211534692161, 64.01910773818436, -48.05930162591041),
    new LABColor(37.690702208992185, 61.13762767732481, -49.384803274243026),
    new LABColor(33.56291870731981, 57.637381239254104, -51.39557249855828),
    new LABColor(29.865391314234515, 54.29737439901333, -52.6601973712463),
    new LABColor(23.16724235420436, 48.51764437280498, -55.16267949015293)
  ],
  [
    new LABColor(92.49103426017201, 4.712320025752947, -6.532868071709763),
    new LABColor(81.24668319505597, 11.50642734909485, -16.666600637245367),
    new LABColor(68.61488216554629, 20.395329051982824, -28.522018851715416),
    new LABColor(55.60369793053023, 30.933537768905005, -41.16439122358484),
    new LABColor(45.834566190969426, 39.28806272235674, -50.523322052772635),
    new LABColor(36.608620229358664, 47.29686002828143, -59.111766586186846),
    new LABColor(34.189791237562616, 46.60426065139123, -59.53961627676729),
    new LABColor(30.52713367338361, 46.01498224754519, -60.19975052509064),
    new LABColor(27.44585524877222, 44.96180431854785, -60.46395810756433),
    new LABColor(21.98627670328218, 44.29296076245473, -60.93653655172098)
  ],
  [
    new LABColor(92.86314411983918, 1.5318147061061937, -6.025243528950552),
    new LABColor(81.8348073705298, 4.460934955458907, -15.873561009736136),
    new LABColor(69.7796913795672, 7.9043652558912765, -26.3170846346932),
    new LABColor(57.48786519938736, 12.681019504822533, -37.23202012914528),
    new LABColor(47.74592578811101, 18.520799302452374, -46.47540679000397),
    new LABColor(38.334403614455404, 25.57700668170812, -55.28224153299287),
    new LABColor(35.15116453901552, 26.231812080381168, -54.53700978785404),
    new LABColor(31.080429988007957, 27.07394930110124, -53.97505274579958),
    new LABColor(27.026672080454922, 28.165266427558983, -53.28987325482218),
    new LABColor(19.751201587921678, 30.60784576895101, -52.13866519297474)
  ],
  [
    new LABColor(94.70682457348717, -2.835484735987326, -6.978044694792707),
    new LABColor(86.8839842970016, -5.16908728759552, -17.88561192754956),
    new LABColor(79.0451532401558, -6.817753527015746, -28.968537490432176),
    new LABColor(71.15083697242613, -5.994763756850707, -39.72549451158927),
    new LABColor(65.48106058907833, -2.735745792537936, -48.15471238926561),
    new LABColor(60.43009440850862, 2.079928897321559, -55.10935847069616),
    new LABColor(55.62267676922188, 4.998684384486918, -55.02164729429915),
    new LABColor(49.27006645904875, 8.470398370314381, -54.494796838457546),
    new LABColor(43.16828856394358, 11.968483076143844, -53.972567377977974),
    new LABColor(32.17757793894193, 18.96054990229354, -53.45146365049088)
  ],
  [
    new LABColor(95.35713467762652, -4.797149155388203, -6.550002550504308),
    new LABColor(88.27942649540043, -10.836006614583892, -16.359361821940375),
    new LABColor(81.10009044900976, -15.323054522981716, -26.419121191320947),
    new LABColor(74.44713958259777, -16.664432625362547, -35.19702686900037),
    new LABColor(69.87836465637318, -14.291515332054693, -41.827430329755174),
    new LABColor(65.68851259178913, -9.612635721963692, -47.34091616039191),
    new LABColor(60.88357994308973, -7.252819027184943, -46.67753731595634),
    new LABColor(54.26166495426166, -3.8141836897908066, -45.97939475762498),
    new LABColor(48.10661895072673, -1.378998784464347, -44.34466750206778),
    new LABColor(36.34401147057282, 5.067812404713545, -43.11786257561915)
  ],
  [
    new LABColor(95.69295154599753, -6.898716127301141, -3.994284229654421),
    new LABColor(89.52842524059004, -16.412398289601725, -9.260466069266693),
    new LABColor(83.32031214655748, -24.83036840728098, -14.568673583304603),
    new LABColor(77.35338313752958, -30.201708572215104, -18.92358284721101),
    new LABColor(73.45322093857781, -31.88590390189383, -21.130459992513686),
    new LABColor(69.97638465064783, -30.679850324547953, -23.186685661136707),
    new LABColor(64.44491716553777, -29.08337434584457, -21.154935769156214),
    new LABColor(56.99816432961103, -27.31081477279451, -17.86988815767443),
    new LABColor(49.75464182255671, -25.335383503694242, -15.024722591662787),
    new LABColor(36.52725894264432, -22.129641744194515, -9.176159146894303)
  ],
  [
    new LABColor(94.18453941589918, -6.08351703428972, -1.5488916051161983),
    new LABColor(85.68177077414457, -15.333179440298606, -2.8519825761476048),
    new LABColor(76.85067847190405, -24.844059173189713, -3.8750785132192656),
    new LABColor(68.02762242570138, -32.566861154120716, -4.015231084407134),
    new LABColor(61.667257304525464, -36.06752603289354, -3.4734046401753815),
    new LABColor(55.67310397390196, -36.66069960626328, -2.125617915169653),
    new LABColor(51.059149495197715, -34.65019160301408, -1.3910484300432513),
    new LABColor(45.269081019218405, -32.13244775422941, -0.4526371852697775),
    new LABColor(39.36899076059384, -29.25264468583161, -0.03562564673170732),
    new LABColor(28.58363043701477, -24.585465516136413, 1.8037402162492389)
  ],
  [
    new LABColor(95.30530183565223, -6.430415645739263, 4.292950594459599),
    new LABColor(88.49014579152143, -15.23147744952702, 10.848261177683138),
    new LABColor(81.22616870575376, -24.993886168551583, 18.144696803330884),
    new LABColor(74.30361721558802, -35.56088696067356, 26.781515251907727),
    new LABColor(69.0430995277442, -42.61556126595995, 33.17109563126665),
    new LABColor(63.977421814072926, -48.54292673319982, 39.73241526342939),
    new LABColor(58.777960853461366, -46.1153692478013, 37.838910745225576),
    new LABColor(52.41108688974904, -43.21761792485762, 35.62250659009424),
    new LABColor(46.2813873076426, -40.25816227675361, 33.32343229338761),
    new LABColor(34.685655305814514, -34.75343878510312, 28.866739034359767)
  ],
  [
    new LABColor(96.70518169355954, -4.929987845095463, 6.397084523168894),
    new LABColor(91.66416061199438, -12.057032041945693, 16.054604579275143),
    new LABColor(86.2244395865449, -19.613646834080622, 26.384906423454236),
    new LABColor(80.83404879636919, -27.080171840756893, 37.378493742021334),
    new LABColor(76.79543725108964, -32.76659719736752, 45.912190572444445),
    new LABColor(72.90025297028019, -37.549139223927384, 53.51959496103027),
    new LABColor(67.21532310272079, -36.56304870773486, 50.49629051268894),
    new LABColor(59.91051142210195, -35.77011466063357, 46.56465847976187),
    new LABColor(52.51015841084511, -34.47903440699235, 42.20723868724268),
    new LABColor(39.41191983353878, -32.80460974352642, 35.255490585630014)
  ],
  [
    new LABColor(97.99506057883428, -4.059632482741494, 9.355797602381521),
    new LABColor(94.80926235976536, -9.237091467352855, 23.230650064824985),
    new LABColor(91.85205843526167, -15.053917327011114, 38.86115182206598),
    new LABColor(88.75812142080242, -19.542900400164097, 53.71785675783709),
    new LABColor(86.27404180729515, -22.173992891121596, 63.978639065232514),
    new LABColor(84.20566835376492, -24.270643520989342, 72.79624067033038),
    new LABColor(78.27915100603997, -21.181850056402496, 68.82763412297965),
    new LABColor(70.82385811892824, -17.788148932525672, 64.00327817988128),
    new LABColor(62.936867012868035, -13.697412111684903, 58.513000509287835),
    new LABColor(49.498610881452535, -6.485230564384715, 49.67432722833751)
  ],
  [
    new LABColor(98.93885129752759, -3.0098470288543178, 10.765736833790008),
    new LABColor(97.22689784824074, -6.174599368734491, 26.22932417355146),
    new LABColor(95.58092947828766, -8.907132848473886, 43.56297291446567),
    new LABColor(94.09009515702486, -10.509628942710735, 60.20019514231188),
    new LABColor(93.06546746683087, -11.008558476013008, 71.76500826005477),
    new LABColor(92.12975017760128, -10.830023094868302, 80.9090559640089),
    new LABColor(87.12188349168609, -2.3764300099239355, 78.14868195373407),
    new LABColor(80.96200442419905, 8.849333792729064, 75.05050700092679),
    new LABColor(75.00342770718086, 20.340173566879283, 72.24841925958934),
    new LABColor(65.48207757431567, 39.647064970476094, 68.34872841768654)
  ],
  [
    new LABColor(97.5642392074337, -1.445525639405032, 11.881254316297674),
    new LABColor(93.67057953749456, -1.8693096862072434, 30.02888670415651),
    new LABColor(89.94571492804107, -1.0224503814769692, 49.649542361642276),
    new LABColor(86.71009164153801, 1.0496066396428194, 68.77377342409739),
    new LABColor(83.78773993319211, 5.248231820098425, 78.92920457852716),
    new LABColor(81.52191382080228, 9.403655370707199, 82.69257112982746),
    new LABColor(78.17240973804697, 16.628512886531887, 81.09358318806208),
    new LABColor(73.80899654381052, 26.53614315250874, 78.21754052181723),
    new LABColor(70.1134511665764, 35.3007623359744, 75.87510992138593),
    new LABColor(63.86460405565717, 50.94648214505959, 72.17815682124423)
  ],
  [
    new LABColor(96.30459517801387, 0.923151172282477, 10.598439446083074),
    new LABColor(90.68320082865087, 4.103774964681062, 26.485793721916128),
    new LABColor(85.00055287186233, 9.047181758866651, 44.51407622580792),
    new LABColor(79.42428495742953, 16.452610724439875, 62.08721739074201),
    new LABColor(75.47792699289774, 23.395742928451867, 72.64347611236501),
    new LABColor(72.04246561548388, 30.681921012382098, 77.08579298904603),
    new LABColor(68.94724338946975, 35.22014778433863, 74.88425044595111),
    new LABColor(64.83017495535229, 40.91200730099703, 71.9596053545428),
    new LABColor(60.8534207471871, 46.41483590510681, 69.18061963415211),
    new LABColor(54.77571742962287, 55.282751019360035, 65.10193403547922)
  ],
  [
    new LABColor(93.69219844671957, 5.763979334358293, 3.1700162796469034),
    new LABColor(86.04629434276428, 15.750843803958192, 14.828476927090994),
    new LABColor(77.54010042938336, 27.90113842540043, 25.99645229289065),
    new LABColor(69.74095456707857, 41.14487377552256, 39.443320178900024),
    new LABColor(64.37085344539341, 51.890379620443575, 50.81312471046415),
    new LABColor(60.06780837277435, 61.65258736118817, 61.54771829165221),
    new LABColor(57.28707915232363, 60.3250664308812, 60.07341536376447),
    new LABColor(53.810052616293845, 58.36760943780162, 58.19586806694884),
    new LABColor(50.301352405105874, 56.40104898089937, 55.924141992404344),
    new LABColor(43.86477994548343, 52.970887703910726, 52.30067989225532)
  ],
  [
    new LABColor(93.29864888069987, 0.9915456090475727, 1.442353076378411),
    new LABColor(82.80884359004081, 3.116221903342209, 3.3523059451463055),
    new LABColor(70.95493047668185, 5.469742193344784, 5.449009494553492),
    new LABColor(58.712934619103066, 7.990991075363385, 8.352488495367627),
    new LABColor(49.150208552875895, 10.570984981000397, 10.831440151197924),
    new LABColor(39.63200151837749, 13.138881961627241, 13.531574711511885),
    new LABColor(35.600996682015754, 12.40352847757295, 12.10432183902449),
    new LABColor(30.084271265759952, 11.317148149878081, 10.547484304296217),
    new LABColor(24.555014696416578, 10.816613316782464, 8.506555306791984),
    new LABColor(18.35055226514404, 10.225725550338765, 7.058582769882571)
  ],
  [
    new LABColor(98.27202740980219, -1.6418393644634932e-5, 6.567357457853973e-6),
    new LABColor(96.53749336548567, -1.616917905122861e-5, 6.467671598286984e-6),
    new LABColor(94.0978378987781, -1.581865383126768e-5, 6.327461532507073e-6),
    new LABColor(89.17728373493613, -1.511167768697419e-5, 6.044671074789676e-6),
    new LABColor(76.61119902231323, -1.330620591488696e-5, 5.322482343750323e-6),
    new LABColor(65.11424774127516, -1.1654345155598378e-5, 4.661738062239351e-6),
    new LABColor(49.238989620828065, -9.373417431124409e-6, 3.7493669724497636e-6),
    new LABColor(41.14266843804848, -8.210152946386273e-6, 3.2840611896567395e-6),
    new LABColor(27.974857206003705, -6.318226192236764e-6, 2.5272904768947058e-6),
    new LABColor(12.740011331302725, -4.129311698131133e-6, 1.6517246792524531e-6)
  ],
  [
    new LABColor(94.27665212516236, -0.637571046109342, -1.313515378996688),
    new LABColor(85.77788001492097, -2.2777811084512822, -3.0177758416151557),
    new LABColor(76.12296325015231, -3.401502988883809, -5.16867892977908),
    new LABColor(66.16340108908365, -4.819627183079045, -7.520697631614404),
    new LABColor(58.35752478513645, -5.7195089100892105, -9.165988916613488),
    new LABColor(50.70748082202715, -6.837992965799455, -10.956055112409357),
    new LABColor(44.85917867647632, -6.411990559239578, -9.74511982878765),
    new LABColor(36.92458930566504, -5.319878610845596, -8.341943474561553),
    new LABColor(29.115334784637618, -4.168907828645069, -6.8629962199973304),
    new LABColor(19.958338450799914, -3.3116721453186617, -5.4486142104736786)
  ]
];

var Cb = [
  2.048875457,
  5.124792061,
  8.751659557,
  12.07628774,
  13.91449542,
  15.92738893,
  15.46585818,
  15.09779227,
  15.13738673,
  15.09818372
];

var Db = [
  1.762442714,
  4.213532634,
  7.395827458,
  11.07174158,
  13.89634504,
  16.37591477,
  16.27071136,
  16.54160806,
  17.35916727,
  19.88410864
];

var lightTextEmphasis = {
  HIGH: new RGBColor(1, 1, 1, 1),
  MEDIUM: new RGBColor(1, 1, 1, 0.6),
  DISABLED: new RGBColor(1, 1, 1, 0.38),
};

var darkTextEmphasis = {
  HIGH: new RGBColor(0, 0, 0, 0.87),
  MEDIUM: new RGBColor(0, 0, 0, 0.6),
  DISABLED: new RGBColor(0, 0, 0, 0.38)
};

function Ob(a) {
  var MIN_CONTRAST = 4.5;

  var c = contrastRatio(WHITE_COLOR, a);
  if (c >= MIN_CONTRAST) return 0;
  a = contrastRatio(BLACK_COLOR, a);
  return a >= MIN_CONTRAST ? 1 : c > a ? 0 : 1;
}

function Pb(a) {
  var b = 0 === Ob(a) ? lightTextEmphasis.HIGH : darkTextEmphasis.HIGH,
    c = b.alpha;
  var d = void 0 === d ? 1 : d;
  a = normalizeRGB(a);
  for (var e = c - 0.01, g = d; 0.01 < g - e;) {
    var h = (e + g) / 2;
    4.5 >
    contrastRatio(Math.abs(b.alpha - h) < ACCURACY ? b : new RGBColor(b.red, b.green, b.blue, h), a)
      ? (e = h)
      : (g = h);
  }
  return new RGBColor(b.red, b.green, b.blue, minMax(g, c, d));
}

function X(a) {
  var b = void 0 === b ? GOLDEN_PALETTES : b;
  var c = rgb2hcl(a),
    d = Qb(c, b);
  b = d.fc;
  d = d.ec;
  var e = b[d],
    g = lab2lch(e),
    h = lab2lch(c),
    k = 30 > lab2lch(b[5]).chroma,
    l = g.lightness - h.lightness,
    m = g.chroma - h.chroma,
    q = g.hue - h.hue,
    t = Cb[d],
    n = Db[d],
    r = 100;
  return b.map(function (b, c) {
    if (b === e) return (r = Math.max(h.lightness - 1.7, 0)), a;
    b = lab2lch(b);
    var d = b.lightness - (Cb[c] / t) * l;
    d = Math.min(d, r);
    c = new LCHColor(
      minMax(d, 0, 100),
      Math.max(0, k ? b.chroma - m : b.chroma - m * Math.min(Db[c] / n, 1.25)),
      (b.hue - q + 360) % 360
    );
    r = Math.max(c.lightness - 1.7, 0);
    b = (c.hue * Math.PI) / 180;
    c = new LABColor(c.lightness, c.chroma * Math.cos(b), c.chroma * Math.sin(b), c.alpha);
    var g = (c.lightness + 16) / 116;
    b = 0.95047 * lab2xyz(g + c.a / 500);
    d = 1 * lab2xyz(g);
    g = 1.08883 * lab2xyz(g - c.b / 200);
    return new RGBColor(
      minMax(xyz2rgb(3.2404542 * b + -1.5371385 * d + -0.4985314 * g), 0, 1),
      minMax(xyz2rgb(-0.969266 * b + 1.8760108 * d + 0.041556 * g), 0, 1),
      minMax(xyz2rgb(0.0556434 * b + -0.2040259 * d + 1.0572252 * g), 0, 1),
      c.alpha
    );
  });
}

function Qb(a, b) {
  b = void 0 === b ? GOLDEN_PALETTES : b;
  if (!b.length || !b[0].length) throw Error("Invalid golden palettes");
  for (var c = Infinity, d = b[0], e = -1, g = 0; g < b.length; g++)
    for (var h = 0; h < b[g].length && 0 < c; h++) {
      var k = b[g][h],
        l = (k.lightness + a.lightness) / 2,
        m = Math.sqrt(Math.pow(k.a, 2) + Math.pow(k.b, 2)),
        q = Math.sqrt(Math.pow(a.a, 2) + Math.pow(a.b, 2)),
        t = (m + q) / 2;
      t =
        0.5 *
        (1 - Math.sqrt(Math.pow(t, 7) / (Math.pow(t, 7) + Math.pow(25, 7))));
      var n = k.a * (1 + t),
        r = a.a * (1 + t),
        N = Math.sqrt(Math.pow(n, 2) + Math.pow(k.b, 2)),
        H = Math.sqrt(Math.pow(r, 2) + Math.pow(a.b, 2));
      t = H - N;
      var ja = (N + H) / 2;
      n = lab2hue(k.b, n);
      r = lab2hue(a.b, r);
      N =
        2 *
        Math.sqrt(N * H) *
        Math.sin(
          (((1e-4 > Math.abs(m) || 1e-4 > Math.abs(q)
            ? 0
            : 180 >= Math.abs(r - n)
              ? r - n
              : r <= n
                ? r - n + 360
                : r - n - 360) /
            2) *
            Math.PI) /
          180
        );
      m =
        1e-4 > Math.abs(m) || 1e-4 > Math.abs(q)
          ? 0
          : 180 >= Math.abs(r - n)
          ? (n + r) / 2
          : 360 > n + r
            ? (n + r + 360) / 2
            : (n + r - 360) / 2;
      q = 1 + 0.045 * ja;
      H =
        1 +
        0.015 *
        ja *
        (1 -
          0.17 * Math.cos(((m - 30) * Math.PI) / 180) +
          0.24 * Math.cos((2 * m * Math.PI) / 180) +
          0.32 * Math.cos(((3 * m + 6) * Math.PI) / 180) -
          0.2 * Math.cos(((4 * m - 63) * Math.PI) / 180));
      k = Math.sqrt(
        Math.pow(
          (a.lightness - k.lightness) /
          (1 +
            (0.015 * Math.pow(l - 50, 2)) /
            Math.sqrt(20 + Math.pow(l - 50, 2))),
          2
        ) +
        Math.pow(t / (1 * q), 2) +
        Math.pow(N / (1 * H), 2) +
        (t / (1 * q)) *
        Math.sqrt(Math.pow(ja, 7) / (Math.pow(ja, 7) + Math.pow(25, 7))) *
        Math.sin(
          (60 * Math.exp(-Math.pow((m - 275) / 25, 2)) * Math.PI) / 180
        ) *
        -2 *
        (N / (1 * H))
      );
      k < c && ((c = k), (d = b[g]), (e = h));
    }
  return {fc: d, ec: e};
}

X(WHITE_COLOR);

function Rb(a) {
  for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
  return b
    .reduce(function (a, b) {
      return "string" === typeof b
        ? a.concat(b)
        : b && b[1]
          ? a.concat(b[0])
          : a;
    }, [])
    .join(" ");
}

var Sb = function (a) {
  this.app = a;
};
var Tb = function (a, b) {
    this.T = a;
    this.ca = b;
    this.ha = !1;
  },
  Ub = function (a) {
    a.ha ||
    (document.addEventListener("mousemove", a.T),
      document.addEventListener("mouseup", a.ca),
      (a.ha = !0));
  };
Tb.prototype.detach = function () {
  this.ha &&
  (document.removeEventListener("mousemove", this.T),
    document.removeEventListener("mouseup", this.ca),
    (this.ha = !1));
};
var Vb = function (a, b) {
  a.preventDefault();
  var c = a.clientX,
    d = a.clientY,
    e = function (a) {
      if (c !== a.clientX || d !== a.clientY)
        (c = a.clientX), (d = a.clientY), b.T(a.clientX, a.clientY);
    };
  var g = new Tb(e, function (a) {
    e(a);
    g.detach();
    b.ca();
  });
  Ub(g);
  b.T(a.clientX, a.clientY);
  return g;
};

function Wb(a, b) {
  return $a(function (c) {
    void 0 !== b
      ? c.element.setAttribute(a, String(b))
      : c.element.removeAttribute(a);
  });
}

var Xb = '\n    <input type="text"\n        class$=";"\n        data-maxlength$=";"\n        data-aria-label$=";"\n        value-updater$=";"\n        on-input=";"\n        on-change=";"\n        on-keydown=";"\n        autocorrect="off"\n        autocomplete="off"\n        spellcheck="false">\n  '.split(
  ";"
);
Xb.raw = '\n    <input type="text"\n        class$=";"\n        data-maxlength$=";"\n        data-aria-label$=";"\n        value-updater$=";"\n        on-input=";"\n        on-change=";"\n        on-keydown=";"\n        autocorrect="off"\n        autocomplete="off"\n        spellcheck="false">\n  '.split(
  ";"
);

function Yb(a) {
  var b = a,
    c = b.value;
  return L(
    Xb,
    b.G,
    Wb("maxlength", b.maxLength),
    Wb("aria-label", b.ga),
    $a(function (a) {
      a = a.element;
      return c !== a.value ? (a.value = c) : c;
    }),
    b.L,
    b.S,
    b.Ca
  );
}

var Zb = [
  '\n    <div class$="',
  '" style$="',
  '">\n      <div class$="',
  '" style$="',
  '"></div>\n    </div>\n  '
];
Zb.raw = [
  '\n    <div class$="',
  '" style$="',
  '">\n      <div class$="',
  '" style$="',
  '"></div>\n    </div>\n  '
];
var $b = [
  '\n      <input class="text-field color-picker-inputs__hsl-label"\n          type="text"\n          aria-hidden="true"\n          disabled="disabled"\n          value="',
  '"/>\n  '
];
$b.raw = [
  '\n      <input class="text-field color-picker-inputs__hsl-label"\n          type="text"\n          aria-hidden="true"\n          disabled="disabled"\n          value="',
  '"/>\n  '
];
var ac = '\n        <div class="text-field color-picker-inputs__hsl\n            color-picker-inputs__hsl--hue\n            color-picker-inputs__hsl--first">\n          ;\n          ;\n        </div>\n        <div class="text-field color-picker-inputs__hsl">\n          ;\n          ;\n        </div>\n        <div class="text-field color-picker-inputs__hsl\n            color-picker-inputs__hsl--last">\n          ;\n          ;\n        </div>\n      '.split(
  ";"
);
ac.raw = '\n        <div class="text-field color-picker-inputs__hsl\n            color-picker-inputs__hsl--hue\n            color-picker-inputs__hsl--first">\n          ;\n          ;\n        </div>\n        <div class="text-field color-picker-inputs__hsl">\n          ;\n          ;\n        </div>\n        <div class="text-field color-picker-inputs__hsl\n            color-picker-inputs__hsl--last">\n          ;\n          ;\n        </div>\n      '.split(
  ";"
);
var bc = '\n      <div class="color-picker">\n        <div class="color-picker-satval" on-mousedown=";">\n          <div class="color-picker-satval__mask">\n            <div class="color-picker-satval__fill" style$=";"></div>\n            <div class="color-picker-satval__saturation"></div>\n            <div class="color-picker-satval__value"></div>\n          </div>\n          ;\n        </div>\n\n        <div class="color-picker-hue" on-mousedown=";">\n          <div class="color-picker-hue__gradient"></div>\n          ;\n        </div>\n\n        <div class="color-picker-inputs">\n          ;\n        </div>\n      </div>\n    '.split(
  ";"
);
bc.raw = '\n      <div class="color-picker">\n        <div class="color-picker-satval" on-mousedown=";">\n          <div class="color-picker-satval__mask">\n            <div class="color-picker-satval__fill" style$=";"></div>\n            <div class="color-picker-satval__saturation"></div>\n            <div class="color-picker-satval__value"></div>\n          </div>\n          ;\n        </div>\n\n        <div class="color-picker-hue" on-mousedown=";">\n          <div class="color-picker-hue__gradient"></div>\n          ;\n        </div>\n\n        <div class="color-picker-inputs">\n          ;\n        </div>\n      </div>\n    '.split(
  ";"
);
var cc = function (a) {
  Sb.apply(this, arguments);
};
x(cc, Sb);
var dc = function (a, b, c) {
    a.K && a.K.detach();
    var d = b.currentTarget;
    a.K = Vb(b, {
      T: function (b, g) {
        var e = d.getBoundingClientRect();
        b = new HSBColor(
          c.hue,
          minMax((b - e.left) / e.width, 0, 1),
          1 - minMax((g - e.top) / e.height, 0, 1),
          c.alpha
        );
        a.fb(b);
      },
      ca: function () {
        a.K = void 0;
        a.eb();
      }
    });
  },
  ec = function (a, b, c) {
    a.K && a.K.detach();
    var d = b.currentTarget;
    a.K = Vb(b, {
      T: function (b) {
        var e = d.getBoundingClientRect();
        b = new HSBColor(
          360 * minMax((b - e.left) / e.width, 0, 1),
          c.saturation,
          c.value,
          c.alpha
        );
        a.fb(b);
      },
      ca: function () {
        a.K = void 0;
        a.eb();
      }
    });
  };
cc.prototype.u = function (a) {
  var b = this,
    c = a.color,
    d = a.L;
  this.eb = a.S;
  this.fb = d;
  d = (c.hue / 360) * 100;
  var e = 100 * c.saturation,
    g = 100 - 100 * c.value,
    h = hsb2rgb(new HSBColor(c.hue, 1, 1)),
    k = hsb2rgb(c);
  return L(
    bc,
    function (a) {
      return dc(b, a, c);
    },
    "background-color: hsl(" + c.hue + ", 100%, 50%);",
    fc({G: "color-picker-satval__thumb", color: k, Ba: e, Ha: g}),
    function (a) {
      return ec(b, a, c);
    },
    fc({G: "color-picker-hue__thumb", color: h, Ba: d, Ha: 50}),
    gc(a)
  );
};
var gc = function (a) {
  var b = a.color,
    c = a.rb,
    d = a.Ec,
    e = a.rc,
    g = a.hueText,
    h = a.saturationText,
    k = a.lightnessText,
    l = a.sc,
    m = a.Fc,
    q = a.L,
    t = hsb2rgb(b);
  t = Yb({
    value: void 0 !== c ? c : rgb2hex(t),
    G: "text-field color-picker-inputs__hex",
    maxLength: 7,
    ga: "Hex code",
    L:
      e &&
      function (a) {
        e(a.target.value);
      },
    S: d
  });
  var n = hsb2hsl(b),
    r = normalizeHSL(n);
  c = Yb({
    value: void 0 !== g ? g : r.hue,
    G: "text-field color-picker-inputs__hsl-input",
    ga: "Hue",
    L:
      l &&
      function (a) {
        l(a.target.value, h, k);
      },
    S: m,
    Ca: function (a) {
      a = hc(a);
      a = 0 > a ? Math.floor(a) : Math.ceil(a);
      a = new HSBColor(minMax(b.hue + a, 0, 360), b.saturation, b.value, b.alpha);
      q(a);
    }
  });
  d = Yb({
    value: void 0 !== h ? h : r.saturation,
    G: "text-field color-picker-inputs__hsl-input",
    ga: "Saturation",
    L:
      l &&
      function (a) {
        l(g, a.target.value, k);
      },
    S: m,
    Ca: function (a) {
      a = hsl2hsb(
        new HSLColor(n.hue, minMax(100 * n.saturation + hc(a), 0, 100) / 100, n.lightness, n.alpha)
      );
      q(a);
    }
  });
  m = Yb({
    value: void 0 !== k ? k : r.lightness,
    G: "text-field color-picker-inputs__hsl-input",
    ga: "Lightness",
    L:
      l &&
      function (a) {
        l(g, h, a.target.value);
      },
    S: m,
    Ca: function (a) {
      a = hsl2hsb(
        new HSLColor(n.hue, n.saturation, minMax(100 * n.lightness + hc(a), 0, 100) / 100, n.alpha)
      );
      q(a);
    }
  });
  t = [t];
  a.Dc || t.push(L(ac, c, L($b, "H"), d, L($b, "hsb2rgb"), m, L($b, "L")));
  return t;
};

function hc(a) {
  var b = a.keyCode,
    c = a.altKey,
    d = 1;
  a.shiftKey && (d *= 10);
  c && (d *= 0.1);
  return 38 === b ? 1 * d : 40 === b ? -1 * d : 0;
}

function fc(a) {
  var b = a,
    c = b.G;
  return L(
    Zb,
    c,
    "left: " + b.Ba + "%; top: " + b.Ha + "%;",
    c + "__inner",
    "background-color: " + b.color.toCSSValue() + ";"
  );
}

var ic = [
  '\n      <div class="color-palette-picker__cell"\n          title="',
  '"\n          style$=',
  '\n          on-click="',
  '">\n        ',
  "\n      </div>\n    "
];
ic.raw = [
  '\n      <div class="color-palette-picker__cell"\n          title="',
  '"\n          style$=',
  '\n          on-click="',
  '">\n        ',
  "\n      </div>\n    "
];
var jc = [
  '\n    <div class="color-palette-picker__row">\n      ',
  "\n    </div>\n  "
];
jc.raw = [
  '\n    <div class="color-palette-picker__row">\n      ',
  "\n    </div>\n  "
];

function kc(a) {
  var b = a,
    c = b.tc,
    d = b.uc,
    e = b.selectedColor,
    g = b.qc;
  b = c
    .map(function (a, b) {
      var h = void 0 !== e && a.equals(e);
      if (0 > b || 9 < b)
        throw new RangeError("colorIndex must be between 0 and 9, inclusive");
      return lc(a, h, 0 === b ? 50 : 100 * b, d, function () {
        return g(c, b);
      });
    })
    .reverse();
  return L(jc, b);
}

function lc(a, b, c, d, e) {
  var g = {G: "color-palette-picker__thumb", color: a, Ba: 50, Ha: 50};
  return L(
    ic,
    d + " " + c,
    "background-color: " + a.toCSSValue() + ";",
    e,
    b ? fc(g) : void 0
  );
}

var mc = function (a, b, c, d) {
  var e = this;
  this.bb = a;
  this.hc = b;
  this.store = c;
  this.vc = d;
  this.kc = this.ya = !1;
  c.subscribe(function () {
    var a = e.store.getState();
    a !== e.pc && ((e.pc = a), e.u());
  });
};
mc.prototype.u = function () {
  var a = this;
  this.ya &&
  console.warn("render() called during a render(). This is probably a bug.");
  return this.fa
    ? this.fa
    : (this.fa = Promise.resolve().then(function () {
      if (!a.kc)
        try {
          a.ya = !0;
          try {
            var b = a.hc.u(a.store.getState()),
              c = a.bb;
            var d = void 0 === d ? Ua : d;
            var e = d(b),
              g = c.Wb;
            if (void 0 !== g && g.pa === e && g.Ta === b.Da)
              g.update(b.values);
            else {
              g = new cb(e, b.Da, d);
              c.Wb = g;
              var h = g.Oa();
              g.update(b.values);
              db(c, c.firstChild);
              c.appendChild(h);
            }
          } catch (k) {
            window.__materialGlobalErrorHandler(k);
          } finally {
            a.ya = !1;
          }
          a.vc(a.bb);
        } finally {
          a.fa = void 0;
        }
    }));
};

function nc(a) {
  return function () {
    return function (b) {
      return oc(b, a);
    };
  };
}

function oc(a, b) {
  return function (c) {
    var d = a(c);
    b(c);
    return d;
  };
}

var Application = function (a, b, c, d) {
  var e = this;
  this.Z = d;
  this.Aa = {width: 0, height: 0};
  this.zc = new a(pc(this));
  this.store = this.createStore(c);
  this.Db = new mc(b, this.zc, this.store, function (a) {
    if (a.scrollWidth !== e.Aa.width || a.scrollHeight !== e.Aa.height)
      (a = {width: a.scrollWidth, height: a.scrollHeight}),
        e.Z.panelSizeChanged(a),
        (e.Aa = a);
  });
};

Application.prototype.start = function () {
  this.Z.stateChanged(this.store.getState());
  return this.u();
};
Application.prototype.u = function () {
  return this.Db.u();
};

Application.prototype.createStore = function (a) {
  var b = this,
    c = Redux.applyMiddleware(
      nc(function (a) {
        b.Z.actionDispatched(a);
      })
    ),
    d = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose,
    e = this.getInitialState(),
    g = Redux.createStore(a, e, d(c));
  g.subscribe(function () {
    return b.Z.stateChanged(g.getState());
  });
  return g;
};
Application.prototype.getInitialState = function () {
  return this.Z.getInitialState();
};
var pc = function (a) {
  return {
    dispatch: function (b) {
      b = w(Array.isArray(b) ? b : [b]);
      for (var c = b.next(); !c.done; c = b.next()) a.store.dispatch(c.value);
    },
    u: function () {
      a.Db.u();
    }
  };
};

function setPrimaryColor(color) {
  return {type: "SET_PRIMARY_COLOR", primaryColor: color};
}

function setSecondaryColor(color) {
  return {type: "SET_SECONDARY_COLOR", secondaryColor: color};
}

function copyToClipboard(color) {
  return {type: "COPY_TO_CLIPBOARD", selectedColor: color};
}

function tc(a) {
  return {type: "EXPAND_COLOR_MENU", openColorMenu: a};
}

var HEX_REGEX = /^[a-fA-F0-9]{3,6}$/;

function vc(a, b, c) {
  var d = {type: "SET_COLOR_HEX", hex: a};
  a.startsWith("#") && (a = a.slice(1));
  return !HEX_REGEX.test(a) || (3 !== a.length && 6 !== a.length)
    ? [d]
    : ((a = hex2rgb(a)), [c(a, b), d]);
}

function wc(a, b, c) {
  var d = {
      type: "SET_COLOR_HSL_TEXT",
      hueText: a.hue,
      saturationText: a.saturation,
      lightnessText: a.lightness
    },
    e = xc(a.hue),
    g = xc(a.saturation);
  a = xc(a.lightness);
  return 0 <= e && 360 >= e && 0 <= g && 100 >= g && 0 <= a && 100 >= a
    ? ((e = new HSLColor(e, g / 100, a / 100)), [c(e, b), d])
    : [d];
}

function xc(a) {
  a = a.trim();
  return a.length ? Number(a) : NaN;
}

var yc = [
  '\n      <div id="',
  '" class$="',
  '"\n          on-transitionend="',
  '">\n        ',
  "\n      </div>\n    "
];
yc.raw = [
  '\n      <div id="',
  '" class$="',
  '"\n          on-transitionend="',
  '">\n        ',
  "\n      </div>\n    "
];
var zc = function () {
};

function Ac(a) {
  var b = "goog_" + ra++,
    c = zc,
    d = function (d) {
      var e = d.target;
      e.id === b && (a.xb && a.xb(d), e.classList.contains(a.sb) && c());
    };
  return function (e) {
    var g = $a(function (a) {
        var b = a.W.nextSibling === a.l;
        e
          ? ((c = zc), a.o(e))
          : b ||
          ((b = new Promise(function (a) {
            c = function () {
              a(e);
            };
          })),
            a.o(b));
      }),
      h = Rb(a.ic, [a.Gb || "", !!a.Gb && !!e], [a.sb, !e]);
    return L(yc, b, h, d, g);
  };
}

var Bc = rgb2hsb(hex2rgb("6202EE"));

function Cc(a, b) {
  var c = a.Ja;
  c = void 0 === c ? Dc : c;
  c =
    "EXPAND_COLOR_MENU" === b.type
      ? Object.assign({}, c, {P: b.openColorMenu})
      : "INITIAL_LOAD" === b.type
      ? Object.assign({}, c, {P: !0})
      : c;
  var d = a.$a;
  d = void 0 === d ? Ec : d;
  d =
    "COPY_TO_CLIPBOARD" === b.type
      ? Object.assign({}, d, {ab: b.selectedColor})
      : d;
  return {Ja: c, $a: d, colors: reducer(a.colors, b)};
}

var Dc = {P: !1};
var Ec = {ab: ""};

var defaultState = {
  primaryColor: new HSBColor(155, 0.55, 0.69), // HSB HSBColor
  secondaryColor: void 0,
  s: 0,
  h: void 0
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "INITIAL_LOAD":
      return {primaryColor: Bc, secondaryColor: void 0, s: 0, h: void 0};
    case "SHOW_COLOR_PICKER":
      return Object.assign({}, state, {
        s: action.isPrimaryColor ? 1 : 2,
        h: Hc(
          action.isPrimaryColor ? state.primaryColor : state.secondaryColor || new HSBColor(0, 0, 1)
        )
      });
    case "HIDE_COLOR_PICKER":
      return Object.assign({}, state, {s: 0, h: void 0});
    case "SET_PRIMARY_COLOR":
      return Object.assign({}, state, {
        primaryColor: action.primaryColor,
        h: 1 === state.s ? Hc(action.primaryColor) : state.h
      });
    case "SET_SECONDARY_COLOR":
      return Object.assign({}, state, {
        secondaryColor: action.secondaryColor,
        h: 2 === state.s ? Hc(action.secondaryColor) : state.h
      });
    case "REMOVE_SECONDARY_COLOR":
      return Object.assign({}, state, {
        secondaryColor: void 0,
        h: 2 === state.s ? void 0 : state.h
      });
    default:
      if (void 0 !== state.h) {
        a: {
          var c = state.h;
          switch (action.type) {
            case "SET_COLOR_HEX":
              action = Object.assign({}, c, {rb: action.hex});
              break a;
            case "SET_COLOR_HSL_TEXT":
              action = Object.assign({}, c, {
                hueText: action.hueText,
                saturationText: action.saturationText,
                lightnessText: action.lightnessText
              });
              break a;
          }
          action = c;
        }
        if (action !== state.h) return Object.assign({}, state, {h: action});
      }
      return state;
  }
}

function Hc(a) {
  var b = void 0 === b ? hsb2rgb(a) : b;
  var c = normalizeHSL(hsb2hsl(a));
  return {
    rb: rgb2hex(b),
    hueText: c.hue,
    saturationText: c.saturation,
    lightnessText: c.lightness,
    color: a
  };
}

function Ic(a, b) {
  return $a(function (c) {
    c.o(a);
    for (var d = c.W.nextSibling; d && d !== c.l;) {
      if (d instanceof Element && !d.classList.contains("mdc-ripple-surface")) {
        d.classList.add("mdc-ripple-surface");
        var e = new F(d);
        b && b(e);
      }
      d = d.nextSibling;
    }
  });
}

var Jc = '\n      <input type="text" id="clipboardcopy" readonly="true">\n      <div class="color-tool" on-click=";">\n        <div class="tool-title">HSBColor palettes</div>\n        ;\n        ;\n        ;\n        ;\n      </div>\n      <div class="mobile-message">\n        <div class="mobile-message__logo-container">\n          <div class="mobile-message__logo"></div>\n        </div>\n        <div class="mobile-message__title">\n          <a class="mobile-message__title-icon material-icons">info_outline</a>\n          <span class="mobile-message__title-message">\n            Demos only available at larger screen size\n          </span>\n        </div>\n      </div>\n    '.split(
  ";"
);
Jc.raw = '\n      <input type="text" id="clipboardcopy" readonly="true">\n      <div class="color-tool" on-click=";">\n        <div class="tool-title">HSBColor palettes</div>\n        ;\n        ;\n        ;\n        ;\n      </div>\n      <div class="mobile-message">\n        <div class="mobile-message__logo-container">\n          <div class="mobile-message__logo"></div>\n        </div>\n        <div class="mobile-message__title">\n          <a class="mobile-message__title-icon material-icons">info_outline</a>\n          <span class="mobile-message__title-message">\n            Demos only available at larger screen size\n          </span>\n        </div>\n      </div>\n    '.split(
  ";"
);
var Kc = [
  '<div class$="clipboard-confirmation ',
  '" on-animationend="',
  '">Color copied to clipboard</div>'
];
Kc.raw = [
  '<div class$="clipboard-confirmation ',
  '" on-animationend="',
  '">Color copied to clipboard</div>'
];
var Lc = [
  '\n      <div class="color-picker-panel__remove">\n        ',
  "\n      </div>\n    "
];
Lc.raw = [
  '\n      <div class="color-picker-panel__remove">\n        ',
  "\n      </div>\n    "
];
var Mc = '\n          <button class="color-picker-panel__remove-button"\n              data-disabled$=";"\n              data-g-category$=;\n              data-g-action$=;\n              data-g-label$="; - remove"\n              on-click=";">\n            <a class="material-icons">format_color_reset</a>\n            <span>Remove color</span>\n          </button>\n        '.split(
  ";"
);
Mc.raw = '\n          <button class="color-picker-panel__remove-button"\n              data-disabled$=";"\n              data-g-category$=;\n              data-g-action$=;\n              data-g-label$="; - remove"\n              on-click=";">\n            <a class="material-icons">format_color_reset</a>\n            <span>Remove color</span>\n          </button>\n        '.split(
  ";"
);
var Nc = [
  '\n        <div class="color-picker-panel__label">',
  '</div>\n        <div class="color-picker-panel__swatch-selector">\n          ',
  "\n        </div>\n        ",
  "\n        ",
  "\n      </div>\n      "
];
Nc.raw = [
  '\n        <div class="color-picker-panel__label">',
  '</div>\n        <div class="color-picker-panel__swatch-selector">\n          ',
  "\n        </div>\n        ",
  "\n        ",
  "\n      </div>\n      "
];
var Oc = '\n    <div class$=";">\n      <div class="utility-panel__label" on-click=";"\n          data-g-category$=;\n          data-g-action$=;\n          data-g-label$=;>\n        Colors <a class="utility-panel__label-icon material-icons">remove</a></div>\n      <div class="content__color">\n        <div class="color-row">\n          ;\n          ;\n        </div>\n      </div>\n      <div class="content__info">\n        <a class="external__link" href=";" target="_blank"\n          data-g-category$=;\n          data-g-action$=;\n          data-g-label$="open external color tool">\n          <span class="external__logo">View in color tool</span>\n          <a class="external__link--open material-icons">open_in_new</a>\n        </a>\n        <div class="external-copy">\n          See selected colors applied to UI and check accessibility.\n        </div>\n      </div>\n    </div>\n    '.split(
  ";"
);
Oc.raw = '\n    <div class$=";">\n      <div class="utility-panel__label" on-click=";"\n          data-g-category$=;\n          data-g-action$=;\n          data-g-label$=;>\n        Colors <a class="utility-panel__label-icon material-icons">remove</a></div>\n      <div class="content__color">\n        <div class="color-row">\n          ;\n          ;\n        </div>\n      </div>\n      <div class="content__info">\n        <a class="external__link" href=";" target="_blank"\n          data-g-category$=;\n          data-g-action$=;\n          data-g-label$="open external color tool">\n          <span class="external__logo">View in color tool</span>\n          <a class="external__link--open material-icons">open_in_new</a>\n        </a>\n        <div class="external-copy">\n          See selected colors applied to UI and check accessibility.\n        </div>\n      </div>\n    </div>\n    '.split(
  ";"
);
var Pc = '\n      <div class$="utility-panel__color-entry ;"\n          style$=";"\n          on-click=";">\n        <div class="utility-panel__large-letter"\n            style$="color: ;">;</div>\n        <div class="utility-panel__subtitle"\n            style$="color: ;">;</div>\n        ;\n      </div>\n    '.split(
  ";"
);
Pc.raw = '\n      <div class$="utility-panel__color-entry ;"\n          style$=";"\n          on-click=";">\n        <div class="utility-panel__large-letter"\n            style$="color: ;">;</div>\n        <div class="utility-panel__subtitle"\n            style$="color: ;">;</div>\n        ;\n      </div>\n    '.split(
  ";"
);
var Qc = [
  '<div class="utility-panel__ripple"\n            data-g-category$=',
  "\n            data-g-action$=",
  '\n            data-g-label$="open ',
  '"></div>'
];
Qc.raw = [
  '<div class="utility-panel__ripple"\n            data-g-category$=',
  "\n            data-g-action$=",
  '\n            data-g-label$="open ',
  '"></div>'
];
var Rc = ["", ""];
Rc.raw = ["", ""];
var Sc = ["", ""];
Sc.raw = ["", ""];
var Tc = ['<div class="color-palette__color-weight-label">', "</div>"];
Tc.raw = ['<div class="color-palette__color-weight-label">', "</div>"];
var Uc = ['<div class="color-palette__label">', "</div>"];
Uc.raw = ['<div class="color-palette__label">', "</div>"];
var Vc = [
  '\n      <div class="color-palette__row">\n        ',
  "\n      </div>\n    "
];
Vc.raw = [
  '\n      <div class="color-palette__row">\n        ',
  "\n      </div>\n    "
];
var Wc = '\n      <div\n        class$="color-palette__cell , ,"\n        style$="background-color: ,; color: ,"\n        on-click=",">\n        <span class="color-palette__swatch-label">,</span>\n        <div class="color-palette__cell-hex-value">#,</div>\n        ,\n      </div>\n    '.split(
  ","
);
Wc.raw = '\n      <div\n        class$="color-palette__cell , ,"\n        style$="background-color: ,; color: ,"\n        on-click=",">\n        <span class="color-palette__swatch-label">,</span>\n        <div class="color-palette__cell-hex-value">#,</div>\n        ,\n      </div>\n    '.split(
  ","
);
var Xc = [
  '<div class="color-palette__ripple"\n          data-g-category$=',
  "\n          data-g-action$=",
  '\n          data-g-label="copy"></div>'
];
Xc.raw = [
  '<div class="color-palette__ripple"\n          data-g-category$=',
  "\n          data-g-action$=",
  '\n          data-g-label="copy"></div>'
];
var shades = "900 800 700 600 500 400 300 200 100 50".split(" ");

var Zc = function (a) {
  this.app = a;
  var b = this;
  this.Cb = Ac({
    ic: "color-picker-panel",
    sb: "color-picker-panel--hide",
    Gb: "color-picker-panel--show",
    xb: function () {
      b.gb && b.gb.ma();
    }
  });
  this.gc = new cc(a);
};

x(Zc, Sb);

var $c = function (a, b, c, d) {
  var e = b ? "color-palette__cell--selected" : "";
  d = b && d ? d.charAt(0) : "";
  b = b ? (a ? Pb(a).toCSSValue() : "rgba(255, 255, 255, 0.6)") : "";
  var g = 0 === Ob(a) ? "ripple-white" : "";
  return L(
    Wc,
    e,
    g,
    a.toCSSValue(),
    b,
    c,
    d,
    rgb2hex(a),
    Ic(L(Xc, "inline color tool", "copy color"))
  );
};

var ad = function (a, b, c, d) {
  var e = a.map(function (e, h) {
    var g = c.some(function (a) {
      return e.equals(a);
    });
    return $c(
      e,
      g,
      function () {
        return b(a, h);
      },
      d
    );
  });
  e.reverse();
  return L(Vc, e);
};

var Z = function (a, b, c, d, e) {
  var g = [];
  g.push(L(Uc, b));
  c.reduce(function (b, c) {
    b.push(
      ad(
        c,
        function (b, c) {
          b = "#" + rgb2hex(b[c]);
          if ((c = document.querySelector("#clipboardcopy")))
            (c.value = b),
              c.select(),
              document.execCommand("copy"),
              a.app.dispatch(copyToClipboard(b));
        },
        d,
        e
      )
    );
    return b;
  }, g);

  shades.reduce(function (a, b) {
    a.push(L(Tc, b));
    return a;
  }, g);

  return g;
};

var bd = function (a) {
  var b = [],
    c = [];
  a = w(a);
  for (var d = a.next(); !d.done; d = a.next())
    (d = hsl2rgb(d.value)), b.push(d), c.push(X(d));
  return {Eb: b, yb: c};
};

var cd = function (a, b) {
  var c = [];
  c.push(Z(a, "Primary", [X(b)], [b], "PRIMARY"));
  return L(Sc, c);
};

var dd = function (a, b, c) {
  c || (c = new RGBColor(1, 1, 1));
  var d = [];
  d.push(Z(a, "Primary", [X(b)], [b], "PRIMARY"));
  return L(Rc, d);
};

var ed = function (a, b, c, d, e) {
  var g = e ? (0 === Ob(e) ? "ripple-white" : "") : "",
    h = e ? "background-color: " + e.toCSSValue() + ";" : "";
  e = e ? Pb(e).toCSSValue() : "rgba(255, 255, 255, 0.6)";
  return L(
    Pc,
    g,
    h,
    function () {
      a.app.dispatch({type: "SHOW_COLOR_PICKER", isPrimaryColor: d});
    },
    e,
    c,
    e,
    b,
    Ic(L(Qc, "inline color tool", "color panel", d ? "primary" : "secondary"))
  );
};

var fd = function (a, b, c) {
  var d = c.secondaryColor,
    e = hsb2rgb(c.primaryColor),
    g = d && hsb2rgb(d);
  d =
    "/tools/color/#!/?view.left=0&view.right=0&primary.color=" +
    rgb2hex(e) +
    (g ? "&secondary.color=" + rgb2hex(g) : "");
  e = ed(a, "Primary", "P", !0, e);
  g = ed(a, "Secondary", "hsb2rgb", !1, g);
  var h = Rb("utility-panel");
  return L(
    Oc,
    h,
    function () {
      0 === c.s && a.app.dispatch(tc(!b.P));
    },
    "inline color tool",
    "color panel",
    b.P ? "expand" : "expand",
    e,
    g,
    d,
    "inline color tool",
    "color panel"
  );
};

var hd = function (a, b, c, d) {
  var e = hsb2rgb(c.color),
    g = b ? setPrimaryColor : setSecondaryColor,
    h = function (b) {
      a.app.dispatch(g(b));
    },
    k = X(e),
    l = b ? "Primary" : "Secondary";
  c = a.gc.u(
    Object.assign({}, c, {
      L: h,
      S: function () {
      },
      rc: function (c) {
        a.app.dispatch(
          vc(c, b, function (a) {
            return g(rgb2hsb(a));
          })
        );
      },
      sc: function (c, d, e) {
        a.app.dispatch(
          wc({hue: c, saturation: d, lightness: e}, b, function (a) {
            return g(hsl2hsb(a));
          })
        );
      }
    })
  );
  e = kc({
    uc: b ? "Primary" : "Secondary",
    tc: k,
    qc: function (a, b) {
      h(rgb2hsb(a[b]));
    },
    selectedColor: e
  });
  return a.Cb(L(Nc, l, e, c, gd(a, b, !d)));
};

var gd = function (a, b, c) {
  if (!b)
    return L(
      Lc,
      Ic(
        L(
          Mc,
          Wb("disabled", c ? !0 : void 0),
          "inline color tool",
          "color picker",
          b ? "primary" : "secondary",
          function () {
            a.app.dispatch({type: "REMOVE_SECONDARY_COLOR"});
            a.app.dispatch({type: "HIDE_COLOR_PICKER"});
          }
        ),
        function (b) {
          a.gb = b;
        }
      )
    );
};

Zc.prototype.u = function (state) {
  var context = this;
  var c = hsb2rgb(state.colors.primaryColor);

  c = cd(this, c);

  d =
    0 !== state.colors.s
      ? hd(this, 1 === state.colors.s, state.colors.h, !!state.colors.secondaryColor)
      : this.Cb();

  var e = L(Kc, state.$a.ab ? "clipboard-confirmation--visible" : "", function () {
      context.app.dispatch(copyToClipboard(""));
    }),
    g = fd(this, state.Ja, state.colors);

  return L(
    Jc,
    function (c) {
      var d = c.target;
      c = c.currentTarget;
      id(d, c, "color-picker-panel") ||
      id(d, c, "utility-panel") ||
      (0 !== state.colors.s
        ? context.app.dispatch({type: "HIDE_COLOR_PICKER"})
        : state.Ja.P && context.app.dispatch(tc(!1)));
    },
    c,
    g,
    d,
    e
  );
};

function id(a, b, c) {
  if (b.classList.contains(c)) return !0;
  for (; a && a !== b;) {
    if (a.classList.contains(c)) return !0;
    a = a.parentElement;
  }
  return !1;
}

var initApp = function (container, defaults) {
  Application.call(this, Zc, container, Cc, defaults);
};

x(initApp, Application);

function getDefaults() {
  return {
    getInitialState: function () {
      return {};
    },
    actionDispatched: function () {
    },
    panelSizeChanged: function () {
    },
    stateChanged: function () {
    }
  };
}

var rootContainer = document.querySelector("#root-container");

if (rootContainer) {
  var appInstance = new initApp(rootContainer, getDefaults());
  appInstance.start();
}
