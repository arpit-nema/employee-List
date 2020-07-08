import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {
employeeList: any = [];
  constructor() {
    // initialized default values for employee list
    this.employeeList = [{name: 'arpit', email: 'arpit@gmail.com', phone: '9876543210'} ];
   }

  /**
   * @method - getEmployee
   * @desc - to return employee list
   */
  getEmployee() {
    return this.employeeList;
  }

  /**
   * @method - addEmployee
   * @desc - to add employee to the list
   */
  addEmployee(data) {
    this.employeeList.push(data);
  }

  /**
   * @method - deleteEmployee
   * @desc - to remove employee from list
   */
  deleteEmployee(data) {
    this.employeeList.splice(this.employeeList.indexOf(data), 1);
  }
}
