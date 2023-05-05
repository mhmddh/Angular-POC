import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {

  newPasswordErrorMessage: string = '';

  newPassword = new FormControl('', [Validators.required,Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);
  onNewPasswordError(errorMessage: any) {
    console.log(errorMessage);
    this.newPasswordErrorMessage = errorMessage;
  }
}
