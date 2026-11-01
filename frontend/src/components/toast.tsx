import { toaster } from './ui/toaster'

export interface ToastMessage {
    message: string
    type: 'success' | 'error' | 'warning' | 'info'
    duration?: number
}
export const showToast = (
    message: string,
    type: ToastMessage['type'],
    duration = 4000
    ) => {
    toaster.create({ description: message, type, duration })
}