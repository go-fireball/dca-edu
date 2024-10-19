// Define a grouped structure for markets
import type {TickerItem} from ".";

export interface GroupedTickerItems {
    [market: string]: TickerItem[]
}
