import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {Customer} from '../../../../../models/customer';
import {CustomerService} from '../../../../../services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html'
})
export class EditCustomerComponent implements OnInit {
  private customer: Customer;
  private editCustomerForm;

  constructor(public bsModalRef: BsModalRef,
              private customerService: CustomerService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.editCustomerForm = this.fb.group({
      id: [this.customer.id],
      firstName: [this.customer.firstName, Validators.required],
      lastName: [this.customer.lastName, Validators.required],
    });
  }

  onSubmit() {
    this.customerService.updateCustomer(this.editCustomerForm.value).subscribe(() => {
      this.customerService.getCustomers();
      this.bsModalRef.hide();
    });
  }
}
