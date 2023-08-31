import { ContextStatus } from "@/assets/types&props/types"
import { contextValue } from "./statusReduce"

export function sortByValue(a: ContextStatus, b: ContextStatus) {
    const aValue = contextValue.find(context => context.status === a)!.value
    const bValue = contextValue.find(context => context.status === b)!.value
    if (aValue > bValue) return -1
    if (aValue < bValue) return 1
    return 0
}