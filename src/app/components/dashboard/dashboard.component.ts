import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private activeCustomer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.activeCustomer$.subscribe(data => this.activeCustomer = data);
  }
}
