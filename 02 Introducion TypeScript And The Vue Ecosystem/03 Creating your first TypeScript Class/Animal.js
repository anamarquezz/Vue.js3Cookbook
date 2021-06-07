"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.Animal = exports.FoodChainType = void 0;
var FoodChainType;
(function (FoodChainType) {
    FoodChainType["Carnivorous"] = "carnivorous";
    FoodChainType["Herbivorous"] = "herbivorous";
    FoodChainType["Omnivorous"] = "omnivorous";
})(FoodChainType = exports.FoodChainType || (exports.FoodChainType = {}));
var Animal = /** @class */ (function () {
    function Animal(params) {
        this.name = params.name;
        this.sound = params.sound || '';
        this.family = params.family;
        this.foodChainType = params.foodChainType;
    }
    Animal.prototype.whoAmI = function () {
        console.log("I am a " + this.name + ", my family is " + this.family + ". My diet is " + this.foodChainType + ".");
        if (this.sound) {
            console.log(__spreadArray([], Array(2).fill(this.sound)).join(', '));
        }
    };
    Animal.prototype.makeSound = function () {
        console.log(this.sound);
    };
    return Animal;
}());
exports.Animal = Animal;
