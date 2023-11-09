export type TBudget = {
    id: number;
    budget_name: string;
    created_by?: number;
    budget_pdf: string;
    created_at?: Date;
    updated_at?: Date;
    deleted?: boolean;
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