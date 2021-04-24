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

  constructor() {

  }

  get visible(): boolean {
    return (!!this.data && this.data.pagesCount > 1);
  }

  get activePage(): number {
    return this.data ? this.data.page : 1;
  }

  ngOnInit(): void {
  }

  onPageClick(i: number) {
    this.pageClicked.emit(i);
  }
}
