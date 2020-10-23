var minhaVariavel = "Minha variavel";
function minhaFuncao(x, y) {
    return x + y;
}
// ES6 ou ES 2015
var numeros = 2;
var P_I = 3.14;
var numbers = [1, 2, 3];
numbers.map(function (value) {
    return value * 2;
});
numbers.map(function (value) { return value * 2; }); //ES 2015
var matematic = /** @class */ (function () {
    function matematic() {
    }
    matematic.prototype.soma = function (x, y) {
        return x + y;
    };
    return matematic;
}());
var n_1 = "aaa";
n_1 = 4;
