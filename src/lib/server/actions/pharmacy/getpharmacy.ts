'use server'


import axiosInstance from '@/lib/server/tools/axios'
import { Pharmacy } from '../../types/pharmacy/pharmacy';

interface GetPharmacyResponse {
    message: string;
    pharmacy: Pharmacy;
}

export async function getPharmacy(id: number): Promise<Pharmacy> {
    try {
        const { data } = await axiosInstance.get<GetPharmacyResponse>(
            `/pharmacies/${id}`
        )
        return data.pharmacy
    } catch (error) {
        console.error('Error fetching pharmacy:', error)
        throw error
    }
} 