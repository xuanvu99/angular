import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-pipes',
  templateUrl: './ng-pipes.component.html',
  styleUrls: ['./ng-pipes.component.css']
})
export class NgPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  birthday = new Date(1999, 9, 14)
  ten = 'Dao Xuan Vu'
}
