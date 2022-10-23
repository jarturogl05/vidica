import { Report } from "./Report";

export interface User {
    name: string;
    accountType?: 'Debito' | 'Credito';
    amountAvailable?: number;
    reportsRaised?: Report[];
}