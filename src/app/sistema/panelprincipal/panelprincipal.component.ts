import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panelprincipal',
  templateUrl: './panelprincipal.component.html',
  styleUrls: ['./panelprincipal.component.css'],
})
export class PanelprincipalComponent implements OnInit {
  panelprincipal: string;
  constructor(public sanitizer: DomSanitizer) {
    this.panelprincipal = '/assets/stylespanel.css';
  }

  usuarios;
  ngOnInit(): void {
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
  
}
