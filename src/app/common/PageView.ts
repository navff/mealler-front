export class PageView<T> {
  public items: T[];
  public pagesCount: number;
  public itemsCount: number;
  public page: number;

  public get HasPreviousPage(): boolean {
    return this.page > 1;
  }

  public get HasNextPage(): boolean {
    return this.page < this.pagesCount;
  }
}
