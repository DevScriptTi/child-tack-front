'use server'

import { Queue } from '@/lib/server/types/queue/queue'
import axiosInstance from '@/lib/server/tools/axios'

interface GetQueueResponse {
    message: string;
    queue: Queue;
}

export async function getQueue(id: number): Promise<Queue> {
    
    try {
        const { data } = await axiosInstance.get<GetQueueResponse>(
            `/queues/${id}`
        )
        return data.queue
    } catch (error) {
        console.error('Error fetching queue:', error)
        throw error
    }
} 