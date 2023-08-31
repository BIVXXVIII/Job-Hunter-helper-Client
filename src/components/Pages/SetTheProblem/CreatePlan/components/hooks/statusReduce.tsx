import { ContextStatus } from "@/assets/types&props/types"

export const statusReduce = (arr: ContextStatus[]): ContextStatus => {
    const reducer = (prev: ContextStatus, curr: ContextStatus) => {
        const prevValue = contextValue.find(context => context.status === prev)!.value
        const currValue = contextValue.find(context => context.status === curr)!.value
        if (currValue === 0) return 'unset'
        const calc = ((currValue + prevValue) / 2).toFixed(0)
        return contextValue.find(context => context.value == Number(calc))!.status
    }
    return arr.reduce(reducer)
}

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