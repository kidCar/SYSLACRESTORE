import { Injectable } from '@angular/core';
import { EquipmentDetail, UsersUpdate } from './equipment-detail.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipmentDetailService {
  readonly baseURL = 'https://localhost:44346/api/EquipmentDetail';
  formData: EquipmentDetail = new EquipmentDetail();
  formDataU: UsersUpdate = new UsersUpdate();
  list: EquipmentDetail[];
  listU: UsersUpdate[];
  
  constructor(private http: HttpClient) {}

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }
  /*putPaymentDetail() {
    return this.http.put(
      `${this.baseURL}/${this.formData.equipmentDetailId}`, this.formData);
  }*/
  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.equipmentId}`, this.formData);
  }
  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => (this.list = res as EquipmentDetail[],
        console.log(`resultado ${this.list}`)
        )
        
        );

      
  }

  registroslits():EquipmentDetail[]{
   
      return this.list;
  }

  ObtenerRegistros():Observable<any>{
    return this.http.get<EquipmentDetail[]>(this.baseURL);
  }

  //registros de usuarios
  postPaymentDetailUser() {
    return this.http.post(this.baseURL, this.formData);
  }
}
