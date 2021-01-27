import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubj: Subject<string> = new Subject<string>();

  constructor() { }

  getSearchQuery(): Observable<string> {
    return this.searchSubj;
  }

  setSearchQuery(query: string): void {
    this.searchSubj.next(query);
  }
}
