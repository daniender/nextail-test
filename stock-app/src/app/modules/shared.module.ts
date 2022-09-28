import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgChartsModule } from "ng2-charts";
import { CardComponent } from "../components/shared/card/card.component";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgChartsModule,
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule {

}
