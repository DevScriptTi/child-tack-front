'use server'

import { Pharmacy, CreatePharmacyRequest, PharmacyErrorResponse } from '@/app/[locale]/(Dashboard)/dashboard/(users)/pharmacys/page'
import axiosInstance from '@/lib/server/tools/axios'
import { revalidatePath } from 'next/cache'

export async function createPharmacy(pharmacyData: CreatePharmacyRequest): Promise<Pharmacy | PharmacyErrorResponse> {
    try {
        const { data } = await axiosInstance.post<Pharmacy>(
            `/pharmacies`,
            pharmacyData
        )
        revalidatePath('/dashboard/pharmacies')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as PharmacyErrorResponse
        }
        throw error
    }
}

export async function updatePharmacy(id: number, pharmacyData: Partial<CreatePharmacyRequest>): Promise<Pharmacy | PharmacyErrorResponse> {
    try {
        const { data } = await axiosInstance.put<Pharmacy>(
            `/pharmacies/${id}`,
            pharmacyData
        )
        revalidatePath('/dashboard/pharmacies')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as PharmacyErrorResponse
        }
        throw error
    }
}

export async function deletePharmacy(id: number): Promise<{ success: boolean }> {
    try {
        await axiosInstance.delete(`/pharmacies/${id}`)
        revalidatePath('/dashboard/pharmacies')
        return { success: true }
    } catch (error) {
        console.error('Error deleting pharmacy:', error)
        throw error
    }
}

export async function createPharmacyKey(id: number): Promise<{ success: boolean; key?: string }> {
    try {
        await axiosInstance.post<{ key: string }>(`/pharmacies/${id}/generate-key`)
        revalidatePath('/dashboard/pharmacies')
        return { success: true }
    } catch (error: any) {
        console.error('Error creating pharmacy key:', error.response?.data)
        throw error
    }
} 