import { Router } from "express";
import { customerRoute } from "../modules/customer/customer.route";
import { bikeRoute } from "../modules/bike/bike.route";
import { bikeServiceRoutes } from "../modules/bikeService/bikeService.route";

const route = Router();

const modules = [
  { path: "/customers", route: customerRoute },
  { path: "/bikes", route: bikeRoute },
  { path: "/services", route: bikeServiceRoutes },
];

modules.forEach((el) => route.use(el.path, el.route));

export default route;
