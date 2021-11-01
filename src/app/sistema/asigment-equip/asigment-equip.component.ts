import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EquipmentDetail } from '../services/equipment-detail.model';
import { EquipmentDetailService } from '../services/equipment-detail.service';

@Component({
  selector: 'app-asigment-equip',
  templateUrl: './asigment-equip.component.html',
  styleUrls: ['./asigment-equip.component.css']
})
export class AsigmentEquipComponent implements OnInit {

  constructor(public service: EquipmentDetailService) { }
  mostrarDAtos:Boolean;
  ngOnInit(): void {
    const btn = document.querySelector('#menu-btn');
    const menu = document.querySelector('#sidemenu');
    btn.addEventListener('click', (e) => {
      menu.classList.toggle('menu-expanded');
      menu.classList.toggle('menu-collapsed');
      document.querySelector('body').classList.toggle('body-expanded');
    });
    this.service.refreshList(); 
  }
  resetForm(form: NgForm) {
    console.table(form.value);
    form.form.reset();
    this.service.formData = new EquipmentDetail();
    
  }
  onSubmit(form: NgForm) {
    if (this.service.formDataU.dni == 0)
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
    )  ;  
  }
  
  insertRecord(form: NgForm) {       
    this.service.postUserAsigment().subscribe(
      res => {
        this.resetForm(form);
       
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
    console.table(form.value)    
  }
  //
  onDelete(id: number) {
    if (confirm('Desea eliminar/cultar el equipo?')) {
      this.service.deletePaymentDetail(id)
        .subscribe(res => {
          this.service.refreshList();          
        },
        err => { console.log(err); })
    }
  }
  populateForm(pd:EquipmentDetail) {
    this.service.formData = Object.assign({}, pd);
    console.table(pd)
  }
  activarEdicion(){  
    this.mostrarDAtos=true;//directiva *ngIf
   }  
}
