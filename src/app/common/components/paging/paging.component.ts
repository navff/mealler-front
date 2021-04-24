import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageView } from '../../PageView';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  @Input() data: PageView<any>;
  @Output() pageClicked = new EventEmitter<number>();
  activePage: number;

  constructor() {

  }

  ngOnInit(): void {
    this.activePage = this.data.page;
  }

  onPageClick(i: number) {
    this.activePage = i;
    this.pageClicked.emit(i);
  }
}
