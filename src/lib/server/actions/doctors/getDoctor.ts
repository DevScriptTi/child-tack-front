'use server'

import { Doctor } from '../../types/doctor/doctor'; 
import axiosInstance from '@/lib/server/tools/axios'

interface GetDoctorResponse {
    message: string;
    doctor: Doctor;
}

export async function getDoctor(id: number): Promise<Doctor> {
    try {
        const { data } = await axiosInstance.get<GetDoctorResponse>(
            `/doctors/${id}`
        )
        return data.doctor
    } catch (error) {
        console.error('Error fetching doctor:', error)
        throw error
    }
} 