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
    deleted: boolean;
    created_at?: Date;
    updated_at?: Date;
  };
  
