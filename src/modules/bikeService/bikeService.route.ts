import { Router } from "express";
import { bikeServiceController } from "./bikeService.controller";

const route = Router();

route.post("/", bikeServiceController.createServices);
route.get("/", bikeServiceController.getAllServices);
route.get("/status", bikeServiceController.getAllServicesByStatus);
route.get("/:serviceId", bikeServiceController.getSingleService);
route.put("/:serviceId/complete", bikeServiceController.updateService);

export const bikeServiceRoutes = route;
