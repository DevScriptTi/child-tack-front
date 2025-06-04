'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { PatientResponse } from '../../types/patient/patient'

export async function getPatients(page: number = 1): Promise<PatientResponse> {
    try {
        const { data } = await axiosInstance.get<PatientResponse>(`/patients?page=${page}`)
        return data
    } catch (error: any) {
        console.error('Error fetching patients:', error.response?.data)
        throw error.response?.data
    }
} 