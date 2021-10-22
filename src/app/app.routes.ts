import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';
import { PanelprincipalComponent } from './sistema/panelprincipal/panelprincipal.component';
import { RegistroEquipoComponent } from './sistema/registro-equipo/registro-equipo.component';
import { EquipmentDetail } from './sistema/services/equipment-detail.model';
import { EquipmentDetailsComponent } from './sistema/equipment-details/equipment-details.component';
import { PersonalControlComponent } from './sistema/personal-control/personal-control.component';
import { GeneralReportComponent } from './sistema/general-report/general-report.component';
import { AsigmentEquipComponent } from './sistema/asigment-equip/asigment-equip.component';

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'panel-principal', component: PanelprincipalComponent },
  { path: 'registro-equipo', component: RegistroEquipoComponent },
  { path: 'asignar-equipo', component: EquipmentDetailsComponent },
  { path: 'personal-control', component: PersonalControlComponent },
  { path: 'reportes-equipo', component: GeneralReportComponent },
  { path: 'asignacion-de-equipo', component: AsigmentEquipComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
export const app_routing = RouterModule.forRoot(app_routes);
