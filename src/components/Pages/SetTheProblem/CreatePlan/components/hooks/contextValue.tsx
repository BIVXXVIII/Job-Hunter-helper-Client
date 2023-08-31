import { ContextStatus } from "@/assets/types&props/types"

export const contextValue: {
    status: ContextStatus,
    value: number
}[] = [
        {
            status: 'ready',
            value: 5
        },
        {
            status: `think I'm ready`,
            value: 4
        },
        {
            status: 'averadge',
            value: 3,
        },
        {
            status: `think I'm not ready`,
            value: 2
        },
        {
            status: 'not-ready',
            value: 1
        },
        {
            status: 'unset',
            value: 0
        }
    ]


