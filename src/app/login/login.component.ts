import { Component, OnInit } from '@angular/core'
import { Page } from '@nativescript/core'

@Component({
  selector: 'Login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(page: Page) {
    // Use the component constructor to inject providers.
    page.actionBarHidden = true;
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }
}
