// tickerService.ts
import axios from 'axios'

export interface TickerInfo {
    timestamp: number
    market_cap: number
    pe_ratio: number
    roe: number
    debt_to_equity: number
    current_ratio: number
    operating_margin: number
    free_cash_flow: number
    trailing_peg_ratio: number
    earning_growth: number
    revenue_growth: number
    ebitda_margin: number
    price_to_book: number
    held_percent_institution: number
}

export interface TickerData {
    Date: number
    Open: number
    High: number
    Low: number
    Close: number
    Volume: number
    Dividends: number
}


const fetchTickerInfo = async (ticker: string): Promise<TickerInfo> => {
    try {
        const response = await axios.get<TickerInfo>(`/data/ticker_info/${ticker}_ticker_info.json`) // Fetch the JSON file
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
