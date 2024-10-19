// tickerService.ts
import axios from 'axios'
import type {TickerInfo} from ".";
import type {TickerData} from ".";


const fetchTickerInfo = async (ticker: string): Promise<TickerInfo[]> => {
    try {
        const response = await axios.get<TickerInfo[]>(`/data/ticker_info/${ticker}_ticker_info.json`) // Fetch the JSON file
        return response.data // Return sorted data
    } catch (error) {
        console.error('Error fetching ticker data:', error)
        throw error // Re-throw the error so it can be handled in the component
    }
}

const fetchTickerData = async (ticker:string): Promise<TickerData[]> =>{
    try {
        const response = await axios.get<TickerData[]>(`/data/${ticker}_1d.json`) // Fetch the JSON file
        return response.data // Return sorted data
    } catch (error) {
        console.error('Error fetching ticker data:', error)
        throw error // Re-throw the error so it can be handled in the component
    }
}

export default {
    fetchTickerInfo,
    fetchTickerData
}
