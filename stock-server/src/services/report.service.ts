import * as data from '../data/products.json';

export class ReportService {

    async getReports() {
        if (data) {
            return (data as any)['default'].sort((a: any, b: any) => {
                return a.sales_ranking < b.sales_ranking ? -1 : a.sales_ranking > b.sales_ranking ? 1 : 0; // ternary operator for Firefox and related browsers
            });
        }
    }

}


