import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {

  private cadena = [] ;
  title = 'Add shipping';
  shippingForm: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.cadena = [''];
    this.cadena = this.getCadena();
   }

  ngOnInit() {

    this.shippingForm = this.fb.group({  
      descripcion: ['', Validators.required],
      cli: ['', Validators.required],
      tmstmp: ['', ]
    });
  }

  public getCadena(){
    return [
      { id: '1', name: 'order 1' },
      { id: '2', name: 'order 2' },
      { id: '3', name: 'order 3' },
      { id: '4', name: 'order 4' }
    ];
  }
  public setCadena(c: string){
    c = c.toUpperCase();
    this.cadena.push(c);
  }
  submit() {
    console.log(this.shippingForm.value);
  }
/*
iconstructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'api/SampleData/Producto').subscribe(result => {
        this.forecasts = result.json() as Producto[];
    }, error => console.error(error));
}
interfaz  Producto {
  dateFormatted :  string ;
  temperatureC :  número ;
  temperatureF :  número ;
  resumen :  cadena ;
}
}*/
}
