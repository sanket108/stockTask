type Product = {
    sku: string;
    qty: number;
};
type Message = {
    message: string;
};
type ProductFetcher = (sku: string) => Promise<Product | Message>;
declare class StockService {
    calculateCurrentStock: ProductFetcher;
}
export default StockService;
