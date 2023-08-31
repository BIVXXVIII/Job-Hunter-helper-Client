import { ContextStatus } from "./types"

type CompareValues = {
    string: ContextStatus,
    value: number
}[]

export const statusCompareValues: CompareValues = [
    { string: `ready`, value: 5 },
    { string: `think I'm ready`, value: 4 },
    { string: `think I'm not ready`, value: 2 },
    { string: 'averadge', value: 3 },
    { string: `not-ready`, value: 1 },
    { string: `unset`, value: 0 },
]