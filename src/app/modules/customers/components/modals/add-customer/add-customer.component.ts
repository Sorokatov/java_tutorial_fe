import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {CustomerService} from '../../../../../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html'
})
export class AddCustomerComponent implements OnInit {
  private addCustomerForm;

  constructor(public bsModalRef: BsModalRef,
              private customerService: CustomerService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addCustomerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {
    this.customerService.createCustomer(this.addCustomerForm.value).subscribe(() => {
      this.customerService.getCustomers();
      this.bsModalRef.hide();
    });
  }
}
