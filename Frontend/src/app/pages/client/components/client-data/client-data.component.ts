import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.css']
})
export class ClientDataComponent implements OnInit {

  title = 'Add client';
  clientForm: FormGroup;
  @Output() submitFormNotification = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      nombre: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }


  addClient() {

    if (this.clientForm.valid) {
      this.submitFormNotification.emit(this.clientForm.value);

      console.log('enviando...' + this.clientForm.value);
    }
    this.clientForm.reset();
  }

  cancel() {
    alert('Cancela ?');
    this.router.navigate(['/']);
  }

}
