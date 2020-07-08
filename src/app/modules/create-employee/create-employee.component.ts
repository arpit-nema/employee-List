import { Component, OnInit, Output , EventEmitter, Inject, HostListener} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
createEmployee: FormGroup;
@Output() saved = new EventEmitter();
  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
    this.clearData();
  }
  @HostListener('document:keydown.escape', ['$event'])
    public onKeydownHandler(event: KeyboardEvent) {
      this.clearData();
    }

  /**
   * @method - form
   * @desc - to get form controls
   */
  get form() {
    return this.createEmployee.controls;
  }

  /**
   * @method - createForm
   * @desc - to create the form
   */
  createForm() {
    this.createEmployee = this.fb.group({
      name: [ '' , Validators.required],
      email: [ '', Validators.required],
      phone: [ '', Validators.required]
    });

  }

  /**
   * @method - save
   * @desc - to save the data
   */
  save() {
    this.saved.emit(this.createEmployee.value);
    const ele = this.document.querySelector('.close') as HTMLElement;
    ele.click();
  }

  /**
   * @method - clearData
   * @desc - to clear the data on modal close
   */
  clearData() {
    this.createEmployee.reset();
  }
}
