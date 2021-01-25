import { NgModule } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

const matModule = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
]


@NgModule({
  imports: matModule,
  exports: matModule,
})
export class MaterialModule { }
