import { Component, OnInit } from '@angular/core';
import { EquipmentDetailService } from '../services/equipment-detail.service';

@Component({
  selector: 'app-general-report',
  templateUrl: './general-report.component.html',
  styleUrls: ['./general-report.component.css']
})
export class GeneralReportComponent implements OnInit {

  constructor(public service: EquipmentDetailService) { }

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

}
