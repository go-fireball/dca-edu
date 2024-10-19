// Define the structure of a ticker item (assumed to have 'text' and possibly other properties)
export interface TickerItem {
    value: string
    text: string
    market: string

    [key: string]: any // This allows for additional properties in the data
}
