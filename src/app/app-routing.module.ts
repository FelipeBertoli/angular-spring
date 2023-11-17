import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicComponent } from './pages/medic/medic.component';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientsComponent } from './pages/medic/patients/patients.component';
import { MedicAppointmentsComponent } from './pages/medic/medic-appointments/medic-appointments.component';
import { ManagementComponent } from './pages/medic/management/management.component';
import { RecordComponent } from './pages/medic/record/record.component';
import { RecipeComponent } from './pages/medic/recipe/recipe.component';

const routes: Routes = [
  {
    path: 'medic', 
    component: MedicComponent,
    children: [
      {
        path: 'patients', 
        component: PatientsComponent,
      },
      {
        path: 'appointments', 
        component: MedicAppointmentsComponent,
      },
      {
        path: 'management', 
        component: ManagementComponent,
      },
      {
        path: 'record',
        component: RecordComponent
      },
      {
        path: 'recipe',
        component: RecipeComponent
      }
    ]
  },
  {
    path: 'patient', 
    component: PatientComponent,
    children : [
      {
        path: 'patient', 
        component: PatientComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
