import { NgModule } from "@angular/core";
import { ChangePasswordComponent } from "./change-password.component";
import { CommonModule } from "@angular/common";
import { RegistrationPasswordModule } from "../registration-password/registration-password.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [CommonModule,        
    FormsModule,
    ReactiveFormsModule,
    RegistrationPasswordModule],
  providers: [],
  exports: [ChangePasswordComponent]
})
export class ChangePasswordModule {}
