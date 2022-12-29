export interface RegistationState {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  billing: {
    first_name: string;
    last_name: string;
    address_1: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
}
