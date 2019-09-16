import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AddDepartmentComponent} from '../modals/add-department/add-department.component';
import {DepartmentService} from '../../../../services/department.service';
import {Department} from '../../../../models/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html'
})
export class DepartmentsComponent implements OnInit {
  public bsModalRef: BsModalRef;
  public departments: Department[];

  constructor(private modalService: BsModalService,
              private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.getDepartments();
    this.departmentService.departments$.subscribe(data => this.departments = data);
  }

  openAddDepartmentPopup() {
    this.bsModalRef = this.modalService.show(AddDepartmentComponent);
  }
}
