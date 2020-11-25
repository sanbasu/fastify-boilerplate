"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.coupon = void 0;
var typeorm_1 = require("typeorm");
var coupon = /** @class */ (function () {
    function coupon() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], coupon.prototype, "cpnid");
    __decorate([
        typeorm_1.Column({ unique: true }),
        __metadata("design:type", String)
    ], coupon.prototype, "cpnname");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], coupon.prototype, "discount");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], coupon.prototype, "location");
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", String)
    ], coupon.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", String)
    ], coupon.prototype, "updatedAt");
    coupon = __decorate([
        typeorm_1.Entity()
    ], coupon);
    return coupon;
}());
exports.coupon = coupon;
