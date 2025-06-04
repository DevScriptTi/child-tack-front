export interface QueueResponse {
    current_page: number;
    data: Queue[];
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

export interface Queue {
    id: number;
    date: string;
    created_at: string;
    updated_at: string;
    doctor_id: number;
    current_demand_id: number;
    demands_count: number;
    doctor: Doctor;
}

export interface Doctor {
    id: number;
    username: string;
    name: string;
    last: string;
    date_of_birth: string;
    phone: string;
    email: string;
    description: string;
    status: "online" | "offline";
    created_at: string;
    updated_at: string;
    baladiya_id: number;
    speciality_id: number;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface CreateQueueRequest {
    date: string;
}

