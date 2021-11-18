import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guard-house',
  templateUrl: './guard-house.component.html',
  styleUrls: ['./guard-house.component.css']
})
export class GuardHouseComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private router: Router) {
    
  }  
  ngOnInit(): void {
    this.desplegarBarra();
    this.activatedRoute.paramMap.subscribe(params => {
      alert(params)
    })
  }
  desplegarBarra(){
    //Obtener lista desde el ng
    //this.service.refreshList();
    //barra lateral ocultar
    const btn = document.querySelector('#menu-btn');
    const menu = document.querySelector('#sidemenu');
    btn.addEventListener('click', (e) => {
      menu.classList.toggle('menu-expanded');
      menu.classList.toggle('menu-collapsed');
      document.querySelector('body').classList.toggle('body-expanded');
    });
  }
  goToRutaGuard(){
    this.router.navigate(['/caseta-vigilancia'])
  }
  //Mostrar Forms
  mostrarRegistros(): void {
    document.getElementById('Muestra').style.display = 'block';
    document.getElementById('tabla').style.display = 'none';
  }
  mostrarLista(): void {
    document.getElementById('tabla').style.display = 'block';
    document.getElementById('Muestra').style.display = 'none';
  }
}