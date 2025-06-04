'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { DoctorResponse } from '../../types/doctor/doctor'

export async function getDoctors(page: number = 1): Promise<DoctorResponse> {
    try {
        const { data } = await axiosInstance.get<DoctorResponse>(`/doctors?page=${page}`)
        return data
    } catch (error: any) {
        console.error('Error fetching doctors:', error.response?.data)
        throw error.response?.data
    }
} 