import * as data from '../data/products.json';

export class ReportService {

    reports: any[] = [];

    async getReports(): Promise<any[]> {
        if (data) {
            this.reports = (data as any)['default']
                .filter((report: any) => !report.confirmed)
                .sort((a: any, b: any) => {
                    return a.sales_ranking < b.sales_ranking ? -1 : a.sales_ranking > b.sales_ranking ? 1 : 0; // ternary operator for Firefox and related browsers
                });
        }
        return this.reports;
    }

    markConfirmed(code: number): void {
        if (code) {
            let report = this.reports.find(rep => rep.code === code);
            report['confirmed'] = true;
        }
    }

}


