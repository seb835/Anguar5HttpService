import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeesService: EmployeesService) { }

  ngOnInit() {
    this._employeesService.getEmployees().subscribe(
      data => this.employees = data,
      error => this.errorMsg = error
    );
  }

}
