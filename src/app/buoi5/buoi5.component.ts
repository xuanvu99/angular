import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buoi5',
  templateUrl: './buoi5.component.html',
  styleUrls: ['./buoi5.component.css']
})
export class Buoi5Component implements OnInit {
  menus = [{name:'trang chủ', url:'', child: null}, {name:'Hãng sản xuất', url:'', child:[{name:'iphone', url:''}, {name:'macbook', url:''},{name:'ipad', url:''}]}, {name:'Tin tức', url:'', child:null}, {name:'Trợ giúp', url:'', child:null}]

  constructor() { }

  ngOnInit(): void {
  }

}
