import { TProductBudget } from "./products.types";

export type TBudget = {
    id: number;
    budget_name: string;
    created_by?: number;
    budget_pdf: string;
    created_at?: Date;
    updated_at?: Date;
    deleted?: boolean;
    value_total: number;
    value_discount: number;
    value_with_discount : number;
    products: [TProductBudget];
    client_name: string;
    client_document: string;
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