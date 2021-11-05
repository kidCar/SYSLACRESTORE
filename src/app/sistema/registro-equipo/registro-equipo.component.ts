import { Component, OnInit } from '@angular/core';
import { EquipmentDetail } from '../services/equipment-detail.model';
import { NgForm } from '@angular/forms';
import { EquipmentDetailService } from '../services/equipment-detail.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-registro-equipo',
  templateUrl: './registro-equipo.component.html',
  styleUrls: ['./registro-equipo.component.css'],
})
export class RegistroEquipoComponent implements OnInit {
  public myAngularxQrCode: string = null;
  public fileUrl;
  /* data = [{
    'name': 'John Doe',
    'profile': 'Software Developer',
    'email': 'john@doe.com',
    'hobby': 'coding'
  }]

  dataToString = JSON.stringify(this.data); */
    
  constructor(public service: EquipmentDetailService, 
    private sanitizer: DomSanitizer) {}

  //Codigo QR generado
  mostrarDAtos:Boolean;

  ngOnInit(): void {     
    this.lateralbar();
    //this.downloadPDF();
    this.myAngularxQrCode = 'https://instagram.com/shop_kadamm?utm_medium=copy_link';  
    
    const data = 'https://instagram.com/shop_kadamm?utm_medium=copy_link';      
    const blob = new Blob([data], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
       
    //this.myAngularxQrCode ='you Qr code';    
    //Obtener lista desde el ng
    //this.service.refreshList();  
    //barra lateral ocultar 
    // this.service.ObtenerRegistros()
    // .subscribe((respuesta : HttpResponse<EquipmentDetail[]>) => {
    //   console.log("respuesta: "+ respuesta.body);
    // });
  }
  public downloadPDF(): void {
    const doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    doc.save('hello-world.pdf');
  }
  resetForm(form: NgForm) {
    console.table(form.value);
    form.form.reset(); 
    var post =this.service.formData.equipmentId= (0);
  
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
 lateralbar(){
  const btn = document.querySelector('#menu-btn');
  const menu = document.querySelector('#sidemenu');
  btn.addEventListener('click', (e) => {
    menu.classList.toggle('menu-expanded');
    menu.classList.toggle('menu-collapsed');
    document.querySelector('body').classList.toggle('body-expanded');
  });
  this.service.refreshList();  
 }
 activarEdicion(){  
  this.mostrarDAtos=true;//directiva *ngIf
 }  

  mostrarRegistros(): void{
  document.getElementById('Muestra').style.display ='block';
  document.getElementById('tabla').style.display ='none';
}
mostrarLista(): void{
    document.getElementById('tabla').style.display ='block';
    document.getElementById('Muestra').style.display ='none';
}
 
}
