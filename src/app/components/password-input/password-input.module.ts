import { NgModule } from "@angular/core";
import { PasswordInputComponent } from "./password-input.component";
import { CommonModule } from "@angular/common";
import { AppInputModule } from "../input/input.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PasswordInputComponent
  ],
  imports: [CommonModule, FormsModule,ReactiveFormsModule,
    AppInputModule],
  providers: [],
  exports: [PasswordInputComponent]
})
export class PasswordInputModule { }
