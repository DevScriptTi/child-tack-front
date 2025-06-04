export interface Wilaya {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Baladiya {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    wilaya_id: number;
    wilaya: Wilaya;
}

export interface PharmacyKey {
    id: number;
    value: string;
    status: "unused" | "used"; // Assuming possible status values
    keyable_type: "pharmacy"; // Specific to pharmacy type
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
}

export interface Pharmacy {
    id: number;
    username: string;
    name: string;
    last: string;
    pharmacy_name: string;
    date_of_birth: string;
    phone: string;
    email: string;
    created_at: string;
    updated_at: string;
    baladiya_id: number;
    baladiya: Baladiya;
    key: PharmacyKey | null;
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

export interface PharmacyResponse {
    current_page: number;
    data: Pharmacy[];
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