import {Component, OnInit} from '@angular/core';
import {NgServiceService} from './ng-service.service';

@Component({
  selector: 'app-ng-service',
  templateUrl: './ng-service.component.html',
  styleUrls: ['./ng-service.component.css']
})
export class NgServiceComponent implements OnInit {
  id:string
  name:string
  email: string
  birthday:string
  link:string
  constructor(private service: NgServiceService) {
    this.service.getData().subscribe(data => {
      console.log(data)
      // this.id = id
      // this.name = name
      // this.email = email
      // this.birthday = birthday
      // this.link = link
    })
  }

  ngOnInit(): void {
  }

}
