'use server'

import { Patient } from '@/app/[locale]/(Dashboard)/dashboard/(users)/patients/page'
import axiosInstance from '@/lib/server/tools/axios'

interface GetPatientResponse {
    message: string;
    patient: Patient;
}

export async function getPatient(id: number): Promise<Patient> {
    try {
        const { data } = await axiosInstance.get<GetPatientResponse>(
            `/patients/${id}`
        )
        return data.patient
    } catch (error) {
        console.error('Error fetching patient:', error)
        throw error
    }
} 