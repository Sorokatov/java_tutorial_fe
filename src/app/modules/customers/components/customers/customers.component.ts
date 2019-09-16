import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../../services/customer.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AddCustomerComponent} from '../modals/add-customer/add-customer.component';
import {Customer} from '../../../../models/customer';
import {EditCustomerComponent} from '../modals/edit-customer/edit-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
  private customers: Customer[];
  private activeCustomer: Customer;
  public bsModalRef: BsModalRef;
  constructor(private customerService: CustomerService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.customerService.getCustomers();
    this.customerService.customers$.subscribe(data => this.customers = data);
  }

  openAddCustomerPopup() {
    this.bsModalRef = this.modalService.show(AddCustomerComponent);
  }

  openEditCustomerPopup() {
    const initialState = {
      customer: this.activeCustomer
    };
    this.bsModalRef = this.modalService.show(EditCustomerComponent, {initialState});
  }

  deleteActiveCustomer() {
    this.customerService.deleteCustomer(this.activeCustomer.id).subscribe(
      () => this.customerService.getCustomers()
    );
  }

  setActiveCustomer(customer: Customer) {
    this.activeCustomer = customer.id === (this.activeCustomer && this.activeCustomer.id) ? null : customer;
  }
}
