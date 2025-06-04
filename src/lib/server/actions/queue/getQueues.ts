'use server'

import { QueueResponse } from '@/lib/server/types/queue/queue'
import axiosInstance from '@/lib/server/tools/axios'
import { AllQueuesResponse } from '@/lib/ui/components/local/Welcom page/Reservation/util/type'

export async function getQueues(page: number = 1): Promise<QueueResponse> {
    try {
        const { data } = await axiosInstance.get<QueueResponse>(`/queues/doctor-index/all?page=${page}`)
        return data
    } catch (error) {
        console.error('Error fetching queues:', error.response.data)
        throw error.response.data
    }
} 

export async function getAllQueue(): Promise<AllQueuesResponse> {
    try {
        const { data } = await axiosInstance.get<AllQueuesResponse>(`/queues/landing`)
        return data
    } catch (error) {
        console.error('Error fetching queue:', error.response.data)
        throw error.response.data
    }
}