import { Component, OnInit } from '@angular/core';
import { NgServiceService } from './ng-service.service';

@Component({
  selector: 'app-ng-service',
  templateUrl: './ng-service.component.html',
  styleUrls: ['./ng-service.component.css']
})
export class NgServiceComponent implements OnInit {

  name: string
  birthday: string
  email: string
  link: string
  constructor(private service: NgServiceService) {
    // this.service.getData().subscribe(data => {
    //   console.log(data)
    // })
    this.service.getData().forEach((data: any) => {
      this.name = data.name;
      this.birthday = data.birthday
      this.email = data.email
      this.link = data.link
    })
  }

  ngOnInit(): void {
  }

}
