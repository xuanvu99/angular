import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  @Input() ten:string
  @Input() tuoi:string
  @Output() removeName = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  // arr = ['vũ đẹp trai', 'vũ đz', 'hihi']
  // object = {hoten: 'vũ đẹp trai', tuoi: 21}
  // filterStatus = 'XEM_TAT_CA';
  // newEn = '';
  // newVn = '';
  // isShowForm = true;
  // arrWords = [
  //   { id: 1, en: 'action', vn: 'hành động', memorized: true },
  //   { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
  //   { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
  //   { id: 4, en: 'active', vn: 'chủ động', memorized: true },
  //   { id: 5, en: 'bath', vn: 'tắm', memorized: false },
  //   { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  // ];
  //
  // addWord() {
  //   this.arrWords.unshift({
  //     id: this.arrWords.length + 1,
  //     en: this.newEn,
  //     vn: this.newVn,
  //     memorized: false
  //   });
  //   this.newEn = '';
  //   this.newVn = '';
  //   this.isShowForm = false;
  // }
  //
  // removeWord(id: number) {
  //   const index = this.arrWords.findIndex(e => e.id === id);
  //   this.arrWords.splice(index, 1);
  // }
  //
  // getShowStatus(memorized: boolean) {
  //   const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
  //   const dkXemDaNho = this.filterStatus === 'XEM_DA_NHO' && memorized;
  //   const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;
  //   return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
  // }

  removeTen() {
    this.removeName.emit(this.ten)
  }
}
