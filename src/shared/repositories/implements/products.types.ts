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
        id: number;
        code: string;
        product_name: string;
        quantity: number;
        value: number ;
        unit_of_measurement: string;
        category: string;
    }
    