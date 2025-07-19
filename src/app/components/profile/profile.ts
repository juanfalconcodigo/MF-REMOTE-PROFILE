import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  public textTitle: FormControl = new FormControl('',[]);
  public counter = 0;

  constructor() {
    window.addEventListener("controlMfeProfile", () => {
      this.handleCounter();
    });
  }
  handleCounter() {
    this.counter += 1;
  }

  handleChangeShellText() {
    const customEvent = new CustomEvent("controlShellText", { detail: this.textTitle.value });
    window.dispatchEvent(customEvent);
  }

}
