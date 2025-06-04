'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { PharmacyResponse } from '@/lib/server/types/pharmacy/pharmacy'


export async function getPharmacys(page: number = 1): Promise<PharmacyResponse> {
    try {
        const { data } = await axiosInstance.get<PharmacyResponse>(`/pharmacies?page=${page}`)
        return data
    } catch (error: any) {
        console.error('Error fetching pharmacys:', error.response?.data)
        throw error.response?.data
    }
} 