import { Component, OnInit } from '@angular/core';
import { EquipmentDetail } from '../services/equipment-detail.model';
import { NgForm } from '@angular/forms';
import { EquipmentDetailService } from '../services/equipment-detail.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-registro-equipo',
  templateUrl: './registro-equipo.component.html',
  styleUrls: ['./registro-equipo.component.css'],
})
export class RegistroEquipoComponent implements OnInit {
  public myAngularxQrCode: string = null;
  public fileUrl;

    lista:string[]=["hola","que","tal","estas"];
  constructor(
    public service: EquipmentDetailService, 
    private sanitizer: DomSanitizer) {}

  //Codigo QR generado
 

  ngOnInit(): void { 
    
    this.myAngularxQrCode = 'ID Equipo';    
    const data = 'ID Equipo';      
    const blob = new Blob([data], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    
    
    const btn = document.querySelector('#menu-btn');
    const menu = document.querySelector('#sidemenu');
    btn.addEventListener('click', (e) => {
      menu.classList.toggle('menu-expanded');
      menu.classList.toggle('menu-collapsed');
      document.querySelector('body').classList.toggle('body-expanded');
    });
    this.service.refreshList();    
    //this.myAngularxQrCode ='you Qr code';    
    //Obtener lista desde el ng
    //this.service.refreshList();  
    //barra lateral ocultar 

    

    // this.service.ObtenerRegistros()
    // .subscribe((respuesta : HttpResponse<EquipmentDetail[]>) => {
    //   console.log("respuesta: "+ respuesta.body);
    // });

    
    
  }
  resetForm(form: NgForm) {
    console.table(form.value);
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
    )  ;  
  }
  
  insertRecord(form: NgForm) { 
      
    this.service.postPaymentDetail().subscribe(
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
 
  
}
