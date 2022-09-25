import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    declarations: [

    ],
    imports: [
        MatCardModule,
        MatDividerModule,
        MatProgressBarModule,
    ],
    exports: [
        MatCardModule,
        MatDividerModule,
        MatProgressBarModule,
    ]
})
export class MaterialModule { }
