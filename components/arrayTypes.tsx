type CoinData = {
  id: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
};

interface CoinsProps {
  coins: CoinData[];
  setCoins: React.Dispatch<React.SetStateAction<CoinData[]>>;
}

interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
  keysToRemove?: string[]
}