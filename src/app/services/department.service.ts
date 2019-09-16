import {Injectable} from '@angular/core';
import {Department} from '../models/department';
import {RestApiService} from './rest-api.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private API_URL: String = 'departments';

  private _departments$ = new Subject<Department[]>();
  public departments$ = this._departments$.asObservable();

  constructor(private restApiService: RestApiService) { }

  getDepartments() {
    return this.restApiService.get<Department[]>(this.API_URL + '/getAll').subscribe(
      response => this._departments$.next(response)
    );
  }

  createDepartment(department: Department): Observable<Department> {
    return this.restApiService.post(this.API_URL + '/create', department);
  }
}
