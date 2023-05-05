import { NgModule } from "@angular/core";
import { AppInputComponent } from "./input.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppInputComponent
  ],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,MatInputModule,MatIconModule
  ],
  providers: [],
  exports: [AppInputComponent]
})
export class AppInputModule {}
