'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { Admin } from '../../type/admin/admin';

interface GetAdminResponse {
    message: string;
    admin: Admin;
}

export async function getAdmin(id: number): Promise<Admin> {
    try {
        const { data } = await axiosInstance.get<GetAdminResponse>(
            `/admins/${id}`
        )
        return data.admin
    } catch (error) {
        console.error('Error fetching admin:', error)
        throw error
    }
} 