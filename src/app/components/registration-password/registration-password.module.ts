import { NgModule } from "@angular/core";
import { RegistrationPasswordComponent } from "./registration-password.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordInputModule } from "../password-input/password-input.module";

@NgModule({
  declarations: [
    RegistrationPasswordComponent
  ],
  imports: [CommonModule,FormsModule,ReactiveFormsModule, PasswordInputModule],
  providers: [],
  exports: [RegistrationPasswordComponent]
})
export class RegistrationPasswordModule {}
