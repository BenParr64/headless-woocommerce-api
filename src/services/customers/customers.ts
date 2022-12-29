import { RegistationState } from "../../customers/customers.types";
import { ENDPOINTS } from "../constants";
import { getWoocommerce, postWoocommerce } from "../wooCommerce";
import { Customer } from "./customers.types";

const getCustomer = async (email: string) => {
  const customers = await getWoocommerce<Customer[]>(
    `${ENDPOINTS.JSON_V3}/${ENDPOINTS.CUSTOMERS}?email=${email}`
  );

  return customers[0];
};

const createCustomer = async (registation: RegistationState) => {
  const customer = await postWoocommerce<Customer>(
    `${ENDPOINTS.JSON_V3}/${ENDPOINTS.CUSTOMERS}`,
    registation
  );

  return customer;
};

const authenticateCustomer = async (email: string, password: string) => {
  const token = await postWoocommerce<string>(
    `${ENDPOINTS.JSON_V3}/${ENDPOINTS.AUTH}`,
    { username: email, password }
  );

  console.log(token);
};

export { authenticateCustomer, createCustomer, getCustomer };
