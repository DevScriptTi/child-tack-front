'use server'

import { Queue, CreateQueueRequest, QueueErrorResponse } from '@/lib/server/types/queue/queue'
import axiosInstance from '@/lib/server/tools/axios'
import { revalidatePath } from 'next/cache'

export async function createQueue(queueData: CreateQueueRequest): Promise<Queue | QueueErrorResponse> {
    try {
        const { data } = await axiosInstance.post<Queue>(
            `/queues`,
            queueData
        )
        revalidatePath('/dashboard/queues')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as QueueErrorResponse
        }
        throw error
    }
}

export async function updateQueue(id: number, queueData: Partial<CreateQueueRequest>): Promise<Queue | QueueErrorResponse> {
    try {
        const { data } = await axiosInstance.put<Queue>(
            `/queues/${id}`,
            queueData
        )
        revalidatePath('/dashboard/queues')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as QueueErrorResponse
        }
        throw error
    }
}

export async function deleteQueue(id: number): Promise<{ success: boolean }> {
    try {
        await axiosInstance.delete(`/queues/${id}`)
        revalidatePath('/dashboard/queues')
        return { success: true }
    } catch (error) {
        console.error('Error deleting queue:', error)
        throw error
    }
}

export async function createQueueKey(id: number): Promise<{ success: boolean; key?: string }> {
    try {
        await axiosInstance.post<{ key: string }>(`/queues/${id}/generate-key`)
        revalidatePath('/dashboard/queues')
        return { success: true }
    } catch (error: any) {
        console.error('Error creating queue key:', error.response?.data)
        throw error
    }
} 