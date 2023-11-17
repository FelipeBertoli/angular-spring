import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './components/global/menu/menu.component';
import { ButtonComponent } from './components/global/menu/button/button.component';
import { DropdownComponent } from './components/global/menu/dropdown/dropdown.component';
import { MedicComponent } from './pages/medic/medic.component';
import { PatientComponent } from './pages/patient/patient.component';
import { MedicAppointmentsComponent } from './pages/medic/medic-appointments/medic-appointments.component';
import { RecordComponent } from './pages/medic/record/record.component';
import { RecipeComponent } from './pages/medic/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    ButtonComponent,
    DropdownComponent,
    MedicComponent,
    PatientComponent,
    MedicAppointmentsComponent,
    RecordComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
