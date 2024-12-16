import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

@Component({
  selector: 'registration-form',
  standalone: true,
  imports: [HeaderComponent, PersonalInfoComponent, AccountTypeComponent, AdditionalInfoComponent, TermsAndConditionsComponent, SubmitButtonComponent],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {

}
