!function (n) {
    "use strict";
    function i(n, i, r) {
        r.$validators ? r.$validators[i] = function (i, r) {
            var t = i || r;
            return n.isValid(t) || !t
        } : r.$parsers.unshift(function (t) {
            var e = t.replace(/\D/g, ""), u = n.isValid(e) || !e;
            return r.$setValidity(i, u), u ? t : void 0
        })
    }

    var r = angular.module("ngCpfCnpj", []);
    n.CPF && r.directive("ngCpf", function () {
        return {
            restrict: "A", require: "ngModel", link: function (n, r, t, e) {
                i(CPF, "cpf", e)
            }
        }
    }), n.CNPJ && r.directive("ngCnpj", function () {
        return {
            restrict: "A", require: "ngModel", link: function (n, r, t, e) {
                i(CNPJ, "cnpj", e)
            }
        }
    })
}(this);
