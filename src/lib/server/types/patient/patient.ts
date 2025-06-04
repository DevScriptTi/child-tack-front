export interface Patient {
    id: number;
    username: string;
    name: string;
    last: string;
    date_of_birth: string;
    phone: string;
    email: string;
    description: string;
    created_at: string;
    updated_at: string;
    baladiya_id: number;
    baladiya: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        wilaya_id: number;
        wilaya: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
        };
    };
    key: {
        id: number;
        value: string;
        status: string;
        keyable_type: string;
        keyable_id: number;
        created_at: string;
        updated_at: string;
        user: {
            id: number;
            email: string;
            email_verified_at: string | null;
            created_at: string;
            updated_at: string;
            key_id: number;
        } | null;
    } | null;
    photo: {
        id: number;
        path: string;
        created_at: string;
        updated_at: string;
    } | null;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PatientResponse {
    current_page: number;
    data: Patient[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}