!function (r) {
    var t = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999", "12345678909"], n = function (r) {
        r = r.split("").map(function (r) {
            return parseInt(r, 10)
        });
        var t = r.length + 1, n = r.map(function (r, n) {
            return r * (t - n)
        }), e = n.reduce(function (r, t) {
                return r + t
            }) % 11;
        return 2 > e ? 0 : 11 - e
    }, e = {};
    e.format = function (r) {
        return this.strip(r).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
    }, e.strip = function (r) {
        return (r || "").toString().replace(/[^\d]/g, "")
    }, e.isValid = function (r) {
        var e = this.strip(r);
        if (!e)return !1;
        if (11 !== e.length)return !1;
        if (t.indexOf(e) >= 0)return !1;
        var u = e.substr(0, 9);
        return u += n(u), u += n(u), u.substr(-2) === e.substr(-2)
    }, e.generate = function (r) {
        for (var t = "", e = 0; 9 > e; e++)t += Math.floor(9 * Math.random());
        return t += n(t), t += n(t), r ? this.format(t) : t
    }, r ? module.exports = e : window.CPF = e
}("undefined" != typeof exports);
