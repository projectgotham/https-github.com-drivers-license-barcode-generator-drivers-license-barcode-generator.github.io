(window.webpackJsonp = window.webpackJsonp || []).push([[4], { 129: function (e, t, a) { 'use strict'; a.r(t); var i = a(0); var r = a.n(i); var s = a(131); var n = a(132); var d = a(149); var l = a(150); var o = a.n(l); var c = function () { return r.a.createElement(s.StaticQuery, { query: '2011440971', render: function (e) { return r.a.createElement(o.a, { fluid: e.placeholderImage.childImageSharp.fluid }) }, data: d }) }; t.default = function () { return r.a.createElement(n.a, null, r.a.createElement('h1', null, 'Hi people'), r.a.createElement('p', null, 'Welcome to your new Gatsby site.'), r.a.createElement('p', null, 'Now go build something great.'), r.a.createElement('div', { style: { maxWidth: '300px', marginBottom: '1.45rem' } }, r.a.createElement(c, null)), r.a.createElement(s.Link, { to: '/page-2/' }, 'Go to page 2')) } }, 149: function (e) { e.exports = { data: { placeholderImage: { childImageSharp: { fluid: { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==', aspectRatio: 1, src: '/drivers-license-barcode-generator/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png', srcSet: '/drivers-license-barcode-generator/static/6d91c86c0fde632ba4cd01062fd9ccfa/0552a/gatsby-astronaut.png 75w,\n/drivers-license-barcode-generator/static/6d91c86c0fde632ba4cd01062fd9ccfa/fc3be/gatsby-astronaut.png 150w,\n/drivers-license-barcode-generator/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png 300w,\n/drivers-license-barcode-generator/static/6d91c86c0fde632ba4cd01062fd9ccfa/24f49/gatsby-astronaut.png 450w,\n/drivers-license-barcode-generator/static/6d91c86c0fde632ba4cd01062fd9ccfa/5497d/gatsby-astronaut.png 600w,\n/drivers-license-barcode-generator/static/6d91c86c0fde632ba4cd01062fd9ccfa/483e1/gatsby-astronaut.png 800w', sizes: '(max-width: 300px) 100vw, 300px' } } } } } }, 150: function (e, t, a) { 'use strict'; var i = a(8); t.__esModule = !0, t.default = void 0; var r; var s = i(a(6)); var n = i(a(46)); var d = i(a(134)); var l = i(a(135)); var o = i(a(0)); var c = i(a(4)); var f = function (e) { var t = (0, l.default)({}, e); return t.resolutions && (t.fixed = t.resolutions, delete t.resolutions), t.sizes && (t.fluid = t.sizes, delete t.sizes), t }; var u = {}; var p = function (e) { var t = f(e); var a = t.fluid ? t.fluid.src : t.fixed.src; return !!u[a] || (u[a] = !0, !1) }; var h = []; var g = function (e, t) { (void 0 === r && typeof window !== 'undefined' && window.IntersectionObserver && (r = new window.IntersectionObserver(function (e) { e.forEach(function (e) { h.forEach(function (t) { t[0] === e.target && (e.isIntersecting || e.intersectionRatio > 0) && (r.unobserve(t[0]), t[1]()) }) }) }, { rootMargin: '200px' })), r).observe(e), h.push([e, t]) }; var b = function (e) { var t = e.src ? 'src="' + e.src + '" ' : 'src="" '; var a = e.sizes ? 'sizes="' + e.sizes + '" ' : ''; var i = e.srcSetWebp ? "<source type='image/webp' srcSet=\"" + e.srcSetWebp + '" ' + a + '/>' : ''; var r = e.srcSet ? '<source srcSet="' + e.srcSet + '" ' + a + '/>' : ''; var s = e.title ? 'title="' + e.title + '" ' : ''; var n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" '; var d = e.width ? 'width="' + e.width + '" ' : ''; var l = e.height ? 'height="' + e.height + '" ' : ''; var o = e.opacity ? e.opacity : '1'; return '<picture>' + i + r + '<img ' + d + l + t + n + s + 'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:' + (e.transitionDelay ? e.transitionDelay : '0.5s') + ';opacity:' + o + ';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>' }; var m = o.default.forwardRef(function (e, t) { var a = e.style; var i = e.onLoad; var r = e.onError; var s = (0, d.default)(e, ['style', 'onLoad', 'onError']); return o.default.createElement('img', (0, l.default)({}, s, { onLoad: i, onError: r, ref: t, style: (0, l.default)({ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }, a) })) }); m.propTypes = { style: c.default.object, onError: c.default.func, onLoad: c.default.func }; var y = (function (e) { function t (t) { var a; a = e.call(this, t) || this; var i = !0; var r = !0; var s = !1; var d = t.fadeIn; var l = p(t); !l && typeof window !== 'undefined' && window.IntersectionObserver && (i = !1, r = !1, s = !0), typeof window === 'undefined' && (i = !1, r = !1), t.critical && (i = !0, r = !1, s = !1); var c = !(a.props.critical && !a.props.fadeIn); return a.state = { isVisible: i, imgLoaded: r, IOSupported: s, fadeIn: d, hasNoScript: c, seenBefore: l }, a.imageRef = o.default.createRef(), a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)((0, n.default)(a))), a.handleRef = a.handleRef.bind((0, n.default)((0, n.default)(a))), a }(0, s.default)(t, e); var a = t.prototype; return a.componentDidMount = function () { if (this.props.critical) { var e = this.imageRef.current; e && e.complete && this.handleImageLoaded() } }, a.handleRef = function (e) { var t = this; this.state.IOSupported && e && g(e, function () { t.setState({ isVisible: !0 }) }) }, a.handleImageLoaded = function () { this.setState({ imgLoaded: !0 }), this.state.seenBefore && this.setState({ fadeIn: !1 }), this.props.onLoad && this.props.onLoad() }, a.render = function () { var e = f(this.props); var t = e.title; var a = e.alt; var i = e.className; var r = e.style; var s = void 0 === r ? {} : r; var n = e.imgStyle; var d = void 0 === n ? {} : n; var c = e.placeholderStyle; var u = void 0 === c ? {} : c; var p = e.placeholderClassName; var h = e.fluid; var g = e.fixed; var y = e.backgroundColor; var S = e.Tag; var v = typeof y === 'boolean' ? 'lightgray' : y; var w = (0, l.default)({ opacity: this.state.imgLoaded ? 0 : 1, transition: 'opacity 0.5s', transitionDelay: this.state.imgLoaded ? '0.5s' : '0.25s' }, d, u); var E = (0, l.default)({ opacity: this.state.imgLoaded || !1 === this.state.fadeIn ? 1 : 0, transition: !0 === this.state.fadeIn ? 'opacity 0.5s' : 'none' }, d); var I = { title: t, alt: this.state.isVisible ? '' : a, style: w, className: p }; if (h) { var R = h; return o.default.createElement(S, { className: (i || '') + ' gatsby-image-wrapper', style: (0, l.default)({ position: 'relative', overflow: 'hidden' }, s), ref: this.handleRef, key: 'fluid-' + JSON.stringify(R.srcSet) }, o.default.createElement(S, { style: { width: '100%', paddingBottom: 100 / R.aspectRatio + '%' } }), R.base64 && o.default.createElement(m, (0, l.default)({ src: R.base64 }, I)), R.tracedSVG && o.default.createElement(m, (0, l.default)({ src: R.tracedSVG }, I)), v && o.default.createElement(S, { title: t, style: { backgroundColor: v, position: 'absolute', top: 0, bottom: 0, opacity: this.state.imgLoaded ? 0 : 1, transitionDelay: '0.35s', right: 0, left: 0 } }), this.state.isVisible && o.default.createElement('picture', null, R.srcSetWebp && o.default.createElement('source', { type: 'image/webp', srcSet: R.srcSetWebp, sizes: R.sizes }), o.default.createElement('source', { srcSet: R.srcSet, sizes: R.sizes }), o.default.createElement(m, { alt: a, title: t, src: R.src, style: E, ref: this.imageRef, onLoad: this.handleImageLoaded, onError: this.props.onError })), this.state.hasNoScript && o.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: b((0, l.default)({ alt: a, title: t }, R)) } })) } if (g) { var A = g; var z = (0, l.default)({ position: 'relative', overflow: 'hidden', display: 'inline-block', width: A.width, height: A.height }, s); return s.display === 'inherit' && delete z.display, o.default.createElement(S, { className: (i || '') + ' gatsby-image-wrapper', style: z, ref: this.handleRef, key: 'fixed-' + JSON.stringify(A.srcSet) }, A.base64 && o.default.createElement(m, (0, l.default)({ src: A.base64 }, I)), A.tracedSVG && o.default.createElement(m, (0, l.default)({ src: A.tracedSVG }, I)), v && o.default.createElement(S, { title: t, style: { backgroundColor: v, width: A.width, opacity: this.state.imgLoaded ? 0 : 1, transitionDelay: '0.25s', height: A.height } }), this.state.isVisible && o.default.createElement('picture', null, A.srcSetWebp && o.default.createElement('source', { type: 'image/webp', srcSet: A.srcSetWebp, sizes: A.sizes }), o.default.createElement('source', { srcSet: A.srcSet, sizes: A.sizes }), o.default.createElement(m, { alt: a, title: t, width: A.width, height: A.height, src: A.src, style: E, ref: this.imageRef, onLoad: this.handleImageLoaded, onError: this.props.onError })), this.state.hasNoScript && o.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: b((0, l.default)({ alt: a, title: t, width: A.width, height: A.height }, A)) } })) } return null }, t }(o.default.Component)); y.defaultProps = { critical: !1, fadeIn: !0, alt: '', Tag: 'div' }; var S = c.default.shape({ width: c.default.number.isRequired, height: c.default.number.isRequired, src: c.default.string.isRequired, srcSet: c.default.string.isRequired, base64: c.default.string, tracedSVG: c.default.string, srcWebp: c.default.string, srcSetWebp: c.default.string }); var v = c.default.shape({ aspectRatio: c.default.number.isRequired, src: c.default.string.isRequired, srcSet: c.default.string.isRequired, sizes: c.default.string.isRequired, base64: c.default.string, tracedSVG: c.default.string, srcWebp: c.default.string, srcSetWebp: c.default.string }); y.propTypes = { resolutions: S, sizes: v, fixed: S, fluid: v, fadeIn: c.default.bool, title: c.default.string, alt: c.default.string, className: c.default.oneOfType([c.default.string, c.default.object]), critical: c.default.bool, style: c.default.object, imgStyle: c.default.object, placeholderStyle: c.default.object, placeholderClassName: c.default.string, backgroundColor: c.default.oneOfType([c.default.string, c.default.bool]), onLoad: c.default.func, onError: c.default.func, Tag: c.default.string }; var w = y; t.default = w } }])
// # sourceMappingURL=component---src-pages-index-js-f837c12887dc1d717ad9.js.map
