import { NgModule } from "@angular/core";
import { RegistrationPasswordComponent } from "./registration-password.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordInputModule } from "../password-input/password-input.module";
import { AppInputModule } from "../input/input.module";

@NgModule({
  declarations: [
    RegistrationPasswordComponent
  ],
  imports: [CommonModule,ReactiveFormsModule ,FormsModule,AppInputModule,PasswordInputModule],
  providers: [],
  exports: [RegistrationPasswordComponent]
})
export class RegistrationPasswordModule {}
