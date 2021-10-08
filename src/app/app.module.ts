import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelprincipalComponent } from './sistema/panelprincipal/panelprincipal.component';
import { LoginComponent } from './sistema/login/login.component';
//Rutas
import { app_routing } from './app.routes';
import { RegistroEquipoComponent } from './sistema/registro-equipo/registro-equipo.component';
//import { EquipmentDetailsComponent } from './sistema/equipment-details/equipment-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipmentDetailsComponent } from './sistema/equipment-details/equipment-details.component';
import { PersonalControlComponent } from './sistema/personal-control/personal-control.component';



@NgModule({
  declarations: [
    AppComponent,
    PanelprincipalComponent,
    LoginComponent,
    RegistroEquipoComponent,
    EquipmentDetailsComponent,
    PersonalControlComponent,   
    //EquipmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
