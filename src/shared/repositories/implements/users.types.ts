import exp from "constants";

export type TUser = {
    id: number;
    name: string;
    email: string;
    password: string;
    document: string;
    postal_code: string;
    phone: string;
    street_number: number;
    is_company: boolean;
    token: string;
    deleted: boolean;
    created_at?: Date;
    updated_at?: Date;
  };

export type TUserUpdate = {
  name: string;
  email: string;
  password: string;
  document: string;
  postal_code: string;
  phone: string;
  street_number: number;
  deleted: boolean;

}

export type TTokenDecoded = {
  document: string;
  email: string;
  iat: number;
  exp: number;
}

  
