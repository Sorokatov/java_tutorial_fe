import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DepartmentsRoutingModule} from './departments-routing.module';
import {DepartmentsComponent} from './components/departments/departments.component';
import {AddDepartmentComponent} from './components/modals/add-department/add-department.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    DepartmentsComponent,
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    AddDepartmentComponent
  ]
})
export class DepartmentsModule { }
