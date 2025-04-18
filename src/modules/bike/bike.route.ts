import { Router } from "express";
import { bikeController } from "./bike.controller";

const route = Router();

route.post("/", bikeController.createBike);
route.get("/", bikeController.getAllBikes);
route.get("/:bikeId", bikeController.getSingleBike);

export const bikeRoute = route;
