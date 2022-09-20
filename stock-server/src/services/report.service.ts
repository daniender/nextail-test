import * as data from '../data/products.json';

export class ReportService {

    async getReports() {
        if (data) {
            console.log(data);
            return (data as any)['default'];
        }
    }

}


