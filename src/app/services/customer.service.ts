import {Injectable} from '@angular/core';
import {RestApiService} from './rest-api.service';
import {Customer} from '../models/customer';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL: String = 'customers';

  private _customers$ = new Subject<Customer[]>();
  public customers$ = this._customers$.asObservable();

  constructor(private restApiService: RestApiService) {}

  getCustomers() {
    return this.restApiService.get<Customer[]>(this.API_URL + '/getAll').subscribe(
      data => this._customers$.next(data)
    );
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.restApiService.post<Customer>(this.API_URL + '/create', customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.restApiService.delete<Customer>(this.API_URL + '/delete', id);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.restApiService.put<Customer>(this.API_URL + '/update', customer);
  }
}
