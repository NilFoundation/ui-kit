import { IPriceLine, PriceLineOptions } from "lightweight-charts";

export type PriceLineProps = {
  price: number;
  options?: Omit<Partial<PriceLineOptions>, "price">;
  onInit?: (priceLine: IPriceLine) => void;
};

export type PriceLineApiRef = {
  _priceLine: IPriceLine | null;
  api: () => IPriceLine | null;
  clear: () => void;
};
