'use server'

import { Patient, CreatePatientRequest, PatientErrorResponse } from '@/app/[locale]/(Dashboard)/dashboard/(users)/patients/page'
import axiosInstance from '@/lib/server/tools/axios'
import { revalidatePath } from 'next/cache'

export async function createPatient(patientData: CreatePatientRequest): Promise<Patient | PatientErrorResponse> {
    try {
        const { data } = await axiosInstance.post<Patient>(
            `/patients`,
            patientData
        )
        revalidatePath('/dashboard/patients')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as PatientErrorResponse
        }
        throw error
    }
}

export async function updatePatient(id: number, patientData: Partial<CreatePatientRequest>): Promise<Patient | PatientErrorResponse> {
    try {
        const { data } = await axiosInstance.put<Patient>(
            `/patients/${id}`,
            patientData
        )
        revalidatePath('/dashboard/patients')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as PatientErrorResponse
        }
        throw error
    }
}

export async function deletePatient(id: number): Promise<{ success: boolean }> {
    try {
        await axiosInstance.delete(`/patients/${id}`)
        revalidatePath('/dashboard/patients')
        return { success: true }
    } catch (error) {
        console.error('Error deleting patient:', error)
        throw error
    }
}

export async function createPatientKey(id: number): Promise<{ success: boolean; key?: string }> {
    try {
        await axiosInstance.post<{ key: string }>(`/patients/${id}/generate-key`)
        revalidatePath('/dashboard/patients')
        return { success: true }
    } catch (error: any) {
        console.error('Error creating patient key:', error.response?.data)
        throw error
    }
} 