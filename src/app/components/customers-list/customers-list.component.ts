import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../../models/customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  private customers$: Observable<Customer[]>;
  private activeCustomer: Customer;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customers$ = this.customerService.getCustomers();
    this.customerService.activeCustomer$.subscribe(data => this.activeCustomer = data);
  }

  setActiveCustomer(customer: Customer) {
    this.customerService.setActiveCustomer(customer);
  }
}
