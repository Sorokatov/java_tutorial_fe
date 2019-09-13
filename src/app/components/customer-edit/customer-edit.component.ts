import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../models/customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  @Input()
  customer: Customer;

  constructor() { }

  ngOnInit() {
  }
}
