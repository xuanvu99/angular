import { Component, OnInit } from '@angular/core';
import { NgServiceService } from './ng-service.service';

@Component({
  selector: 'app-ng-service',
  templateUrl: './ng-service.component.html',
  styleUrls: ['./ng-service.component.css']
})
export class NgServiceComponent implements OnInit {

  constructor(private service: NgServiceService) {
    this.service.getData().subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
