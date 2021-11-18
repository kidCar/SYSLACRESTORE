import { Component, OnInit } from '@angular/core';
import { EquipmentDetailService } from '../services/equipment-detail.service';
import { NgForm } from '@angular/forms';
import { EquipmentDetail } from '../services/equipment-detail.model';

@Component({
  selector: 'app-personal-control',
  templateUrl: './personal-control.component.html',
  styleUrls: ['./personal-control.component.css']
})
export class PersonalControlComponent implements OnInit {

    constructor(public service: EquipmentDetailService) {}
  
    ngOnInit(): void {
      this.service.refreshList();
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
    resetForm(form: NgForm) {
      form.form.reset();
      this.service.formData = new EquipmentDetail();
    }
    onSubmit(form: NgForm) {
      if (this.service.formData.equipmentId ==0)// pude ser null o 0
        this.insertRecord(form);
      else
        this.updateRecord(form);
    }
    
    updateRecord(form: NgForm) {
      this.service.putPaymentDetail().subscribe(
        res => {
          this.resetForm(form);
          this.service.refreshList();
        },
        err => {
          console.log(err);
        }
      )
    }
    
    insertRecord(form: NgForm) {
      this.service.postUserAsigment().subscribe(
        res => {
          this.resetForm(form);
          this.service.refreshList();
        },
        err => { console.log(err); }
      )
      console.table(form.value)
    }
    //
    onDelete(id:number) {
      if (confirm('Are you sure to delete this record ?')) {
        this.service.deletePaymentDetail(id)
          .subscribe(res => {
            this.service.refreshList();
          },
          err => { console.log(err); })
      }
    }
    populateForm(selectedRecord) {
      this.service.formData = Object.assign({}, selectedRecord);
    }

    //Mostrar y ocultar tablas
    mostrarRegistros(): void {
      document.getElementById('Muestra').style.display = 'block';
      document.getElementById('tabla').style.display = 'none';
    }
    mostrarLista(): void {
      document.getElementById('tabla').style.display = 'block';
      document.getElementById('Muestra').style.display = 'none';
    }
  }