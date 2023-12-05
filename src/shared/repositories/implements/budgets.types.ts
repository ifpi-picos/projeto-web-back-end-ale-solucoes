import { TProductBudget } from "./products.types";

export type TBudget = {
    id: number;
    budget_name: string;
    created_by?: number;
    budget_pdf?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted?: boolean;
    value_total: number;
    value_discount: number;
    value_with_discount : number;
    products: [TProductBudget];
    client_name: string;
    client_document: string;
    payment_method: string;
    company_name: string;
    company_document: string;
    company_street: string;
    company_number: number;
    company_city: string;
    company_neiborhood: string;
    company_state: string;
    company_postal_code: string;
}

export type TBudgetUpdate = {
    id?: number;
    budget_name?: string;
    created_by?: number;
    budget_pdf?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted?: boolean;
    };