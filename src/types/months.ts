export type IMonth = string[]

export interface IAllMonths {
    [key: number]: {
        [key: number]: IMonth
    }
}