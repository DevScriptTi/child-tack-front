'use server'

import { Doctor, CreateDoctorRequest, DoctorErrorResponse } from '@/app/[locale]/(Dashboard)/dashboard/(users)/doctors/page'
import axiosInstance from '@/lib/server/tools/axios'
import { revalidatePath } from 'next/cache'

export async function createDoctor(doctorData: CreateDoctorRequest): Promise<Doctor | DoctorErrorResponse> {
    try {
        const { data } = await axiosInstance.post<Doctor>(
            `/doctors`,
            doctorData
        )
        revalidatePath('/dashboard/doctors')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as DoctorErrorResponse
        }
        throw error
    }
}

export async function updateDoctor(id: number, doctorData: Partial<CreateDoctorRequest>): Promise<Doctor | DoctorErrorResponse> {
    try {
        const { data } = await axiosInstance.put<Doctor>(
            `/doctors/${id}`,
            doctorData
        )
        revalidatePath('/dashboard/doctors')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as DoctorErrorResponse
        }
        throw error
    }
}

export async function deleteDoctor(id: number): Promise<{ success: boolean }> {
    try {
        await axiosInstance.delete(`/doctors/${id}`)
        revalidatePath('/dashboard/doctors')
        return { success: true }
    } catch (error) {
        console.error('Error deleting doctor:', error)
        throw error
    }
}

export async function createDoctorKey(id: number): Promise<{ success: boolean; key?: string }> {
    try {
        await axiosInstance.post<{ key: string }>(`/doctors/${id}/generate-key`)
        revalidatePath('/dashboard/doctors')
        return { success: true }
    } catch (error: any) {
        console.error('Error creating doctor key:', error.response?.data)
        throw error
    }
} 