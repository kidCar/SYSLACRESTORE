import { Component, OnInit } from '@angular/core';
import { EquipmentDetail } from '../services/equipment-detail.model';
import { NgForm } from '@angular/forms';
import { EquipmentDetailService } from '../services/equipment-detail.service';


@Component({
  selector: 'app-registro-equipo',
  templateUrl: './registro-equipo.component.html',
  styleUrls: ['./registro-equipo.component.css'],
})
export class RegistroEquipoComponent implements OnInit {
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
    if (this.service.formData.equipmentId == 0)
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
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
    
  }
  //
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetail(id)
        .subscribe(res => {
          this.service.refreshList();
          
        },
        err => { console.log(err); })
    }
  }
  populateForm(pd:EquipmentDetail) {
    this.service.formData = Object.assign({}, pd);
  }
  
}
