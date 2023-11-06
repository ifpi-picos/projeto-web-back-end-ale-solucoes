export type TUser = {
    id: number;
    email: string;
    company_name: string;
    company_document: string;
    password: string;
    responsible_name: string;
    responsible_document: string;
    birth_date: Date;
    street_name: string;
    street_number: number;
    neighborhood: string;
    city: string;
    state: string;
    postal_code: string;
    phone: string;
    token: string;
    deleted?: boolean;
    created_at: Date;
    updated_at?: Date;
  };

export type TUserUpdate = {
  id?: number;
  company_name?: string;
  company_document?: string;
  password?: string;
  responsible_name?: string;
  responsible_document?: string;
  birth_date?: Date;
  street_name?: string;
  street_number?: number;
  neighborhood?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  phone?: string;
  token?: string;
  deleted?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export type TTokenDecoded = {
  document: string;
  email: string;
  iat: number;
  exp: number;
}

  
