import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
    selector: 'registration-password',
    templateUrl: './registration-password.component.html'
})
export class RegistrationPasswordComponent implements OnInit {
    @Input() newPassword!: FormControl;
    @Input() confirmPassword!: FormControl;
    @Output() newPasswordError = new EventEmitter<ValidationErrors | null>();

    constructor() { }
    ngOnInit(): void {
        this.newPassword.valueChanges.subscribe(() => {
            this.newPasswordError.emit(this.newPassword.errors);
        });
    }



    matchingPasswords(control: FormControl) {
        if (control.get('newPassword')?.value !== control.get('confirmPassword')?.value) {
            return { matchingPasswords: true };
        }
        return null;
    }
}
