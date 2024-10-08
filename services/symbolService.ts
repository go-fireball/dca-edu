// tickerService.ts
import axios from 'axios'
import {onMounted} from "vue";

// Define the structure of a ticker item (assumed to have 'text' and possibly other properties)
export interface TickerItem {
    value: string
    text: string
    market: string

    [key: string]: any // This allows for additional properties in the data
}

// Define a grouped structure for markets
export interface GroupedTickerItems {
    [market: string]: TickerItem[]
}

const fetchSymbols = async (): Promise<TickerItem[]> => {
    try {
        const response = await fetch('/symbols.json') // Fetch the JSON file
        const data: TickerItem[] = await response.json()

        // Sort the data by the 'text' property
        const sortedData = data.sort((a, b) => {
            if (a.text < b.text) return -1
            if (a.text > b.text) return 1
            return 0
        })

        return sortedData // Return sorted data
    } catch (error) {
        console.error('Error fetching ticker data:', error)
        throw error // Re-throw the error so it can be handled in the component
    }
}

const fetchSymbolsByMarket = async (): Promise<GroupedTickerItems> => {
    const tickerItems = await fetchSymbols()

    const groupedData = tickerItems.reduce((acc: GroupedTickerItems, item: TickerItem) => {
        if (!acc[item.market]) {
            acc[item.market] = []
        }
        acc[item.market].push(item)
        return acc
    }, {})

    // Sort the data in each market group by the 'text' property
    Object.keys(groupedData).forEach((market) => {
        groupedData[market].sort((a, b) => {
            if (a.text < b.text) return -1
            if (a.text > b.text) return 1
            return 0
        })
    })
    return groupedData
}


export default {
    fetchSymbols,
    fetchSymbolsByMarket,
}
