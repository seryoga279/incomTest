import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubj: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  getSearchQuery(): BehaviorSubject<string> {
    return this.searchSubj;
  }

  setSearchQuery(query: string): void {
    this.searchSubj.next(query);
  }

  getSearchField(): string {
    return this.searchSubj.getValue();
  }
}
