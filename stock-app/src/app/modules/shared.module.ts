import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "../components/shared/card/card.component";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule {

}
