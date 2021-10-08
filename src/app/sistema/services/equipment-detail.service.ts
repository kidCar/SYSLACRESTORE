import { Injectable } from '@angular/core';
import { EquipmentDetail } from './equipment-detail.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EquipmentDetailService {
  readonly baseURL = 'https://localhost:44346/api/EquipmentDetail';
  formData: EquipmentDetail = new EquipmentDetail();
  list: EquipmentDetail[];

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
      .then((res) => (this.list = res as EquipmentDetail[]));
  }
}
