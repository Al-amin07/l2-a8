import { Router } from "express";
import { customerControllers } from "./customer.controller";

const route = Router();

route.post("/", customerControllers.createCustomer);
route.get("/", customerControllers.getAllCustomer);
route.get("/:customerId", customerControllers.getSingleCustomer);
route.put("/:customerId", customerControllers.updateCustomer);
route.delete("/:customerId", customerControllers.deleteCustomer);

export const customerRoute = route;
