import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 
  id='';
  ngOnInit(): void {
    
    setTimeout(() => {
      this.usuarios=[{
        nombre: 'Yael',
        Fechadenacimiento: new Date(),
        salario :1400.99
      }, {
        nombre: 'Alejandra',
        Fechadenacimiento: new Date(),
        salario :1400.99
      },{
        nombre: 'Daniel',
        Fechadenacimiento: new Date(),
        salario :1400.99
      },{
        nombre: 'Carlos',
        Fechadenacimiento: new Date(),
        salario :1400.99
      }]
    },500);
    //throw new Error('Method not implemented.');
  }
  title = 'front-end';
  usuarios;
  duplicarNumero(valor: number): number{
    return valor *2
  }
  
 
}

