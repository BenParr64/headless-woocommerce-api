import express, { Request, Response } from "express";
import { createCustomer, getCustomer } from "../services/customers/customers";
import { RegistationState } from "./customers.types";

export function customersRoutes(app: express.Application): void {
  // GET /customers
  // Returns a boolean value if the customer exists. Email query paramater must be passed
  app.get("/customers", async (req: Request, res: Response) => {
    const email = req.query.email as string;

    // Call the getCustomer function to get the customer with the specified email
    const customer = await getCustomer(email || "");

    // Return a boolean value indicating whether the customer exists
    res.status(200).json(!!customer);
  });

  // POST /customers
  // Creates a new customer
  app.post("/customers", async (req: Request, res: Response) => {
    const registation: RegistationState = req.body;
    const customer = await createCustomer(registation);
    res.send(customer);
  });

}
