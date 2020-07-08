import { Component, OnInit, Input } from '@angular/core';
import { CommonServicesService } from '../../services/common-services.service'
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  dataList: any;
  constructor(public commonService: CommonServicesService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  /**
   * @method - getEmployeeList
   * @desc - to get employee list form service
   */
  getEmployeeList() {
   this.dataList = this.commonService.getEmployee();
  }

  /**
   * @method - deleteRecord
   * @desc - to delete employee record
   */
  deleteRecord(deleteEmployeedetails) {
    if (confirm('Are you sure to delete the employee with email : ' + deleteEmployeedetails.email + '?')) {
      this.commonService.deleteEmployee(deleteEmployeedetails);
    }
  }

  /**
   * @method - addNewEmployee
   * @desc - to add employee record
   */
  addNewEmployee(newEmployeedetails) {
    this.commonService.addEmployee(newEmployeedetails);
  }

}
