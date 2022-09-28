import * as data from '../data/products.json';

export class ReportService {

    reports: any[]; // store data in memory to act as fake database

    private static _instance: ReportService;

    private constructor() {
        this.reports = (data as any)['default'];
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    getReports(): any[] {
        this.reports = this.reports
            .filter((report: any) => {
                return report.confirmed === undefined || !report.confirmed
            })
            .sort((a: any, b: any) => {
                return a.sales_ranking < b.sales_ranking ? -1 : a.sales_ranking > b.sales_ranking ? 1 : 0; // ternary operator for Firefox and related browsers
            });
        return this.reports;
    }

    markConfirmed(payload: any): void {
        if (payload) {
            let report = this.reports.find(rep => rep.code === payload.code);
            report['confirmed'] = true;
        }
    }

    reload(): any[] {
        this.reports = [...(data as any)['default']];
        this.reports.forEach(report => delete report.confirmed);
        console.log('Reload reports: ', this.reports);
        return this.getReports();
    }

}


