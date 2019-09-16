import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomersComponent} from './components/customers/customers.component';
import {CustomersRoutingModule} from './customers-routing.module';
import {AddCustomerComponent} from './components/modals/add-customer/add-customer.component';
import {EditCustomerComponent} from './components/modals/edit-customer/edit-customer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomersRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    AddCustomerComponent,
    EditCustomerComponent
  ]
})
export class CustomersModule { }
