import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationFormComponent } from './RegistrationFormComponent/registration-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistrationFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormularioHTMLCSS';
}
