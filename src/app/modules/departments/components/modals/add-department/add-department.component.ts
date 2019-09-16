import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {DepartmentService} from '../../../../../services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html'
})
export class AddDepartmentComponent implements OnInit {
  private addDepartmentForm;

  constructor(public bsModalRef: BsModalRef,
              private departmentService: DepartmentService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addDepartmentForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    this.departmentService.createDepartment(this.addDepartmentForm.value).subscribe(() => {
      this.bsModalRef.hide();
    });
  }

}
