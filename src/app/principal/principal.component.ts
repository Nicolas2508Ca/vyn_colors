import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  marcas = [
    { src: '../../../assets/marca1.jpg', alt: 'marca 1' },
    { src: '../../../assets/marca2.jpg', alt: 'marca 2' },
    { src: '../../../assets/marca3.jpg', alt: 'marca 3' },
    { src: '../../../assets/marca4.jpg', alt: 'marca 4' },
  ];

  usuario = { 
    nombre: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('http://localhost:8080/registro', this.usuario).subscribe(response => {
      console.log(response);
    });
  }
}
