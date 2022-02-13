import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contactForm !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createContactForm()
  }

  public createContactForm() {
    this.contactForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "subject": new FormControl(null, Validators.required),
      "message": new FormControl(null, Validators.required)
    })
  }
  onSubmit() {
    console.log('Form Submitted', this.contactForm);
  }

}
