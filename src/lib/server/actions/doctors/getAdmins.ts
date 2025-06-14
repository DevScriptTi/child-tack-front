'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { AdminResponse } from '../../type/admin/admin'

export async function getAdmins(page: number = 1): Promise<AdminResponse> {
    try {
        const { data } = await axiosInstance.get<AdminResponse>(`/admins?page=${page}`)
        return data
    } catch (error: any) {
        console.error('Error fetching admins:', error.response?.data)
        throw error.response?.data
    }
} 