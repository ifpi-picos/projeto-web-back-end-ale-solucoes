export type TProduct = {
    id: number;
    code: string;
    product_name: string;
    value: number;
    unit_of_measurement: string;
    category: string;
    created_at?: Date;
    updated_at?: Date;
    deleted?: boolean;
    created_by?: number;
}

export type TProductUpdate = {
    id?: number;
    code?: string;
    product_name?: string;
    value?: number;
    unit_of_measurement?: string;
    category?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted?: boolean;
    created_by?: number;
};

export type TProductBudget = 
    {
        product_name: string;
        value_unit: number;
        quantity: number;
        value_total: number;
        unit_of_measurement: string;
        category: string;
    }
    