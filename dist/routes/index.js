"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_route_1 = require("../modules/customer/customer.route");
const bike_route_1 = require("../modules/bike/bike.route");
const bikeService_route_1 = require("../modules/bikeService/bikeService.route");
const route = (0, express_1.Router)();
const modules = [
    { path: "/customers", route: customer_route_1.customerRoute },
    { path: "/bikes", route: bike_route_1.bikeRoute },
    { path: "/services", route: bikeService_route_1.bikeServiceRoutes },
];
modules.forEach((el) => route.use(el.path, el.route));
exports.default = route;
