import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from './services/search.service';
import { BookmarksState } from './store/bookmarks/bookmarks.service';
import { Bookmarks } from './store/bookmarks/bookmarks.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private store: Store,
              private searchService: SearchService,
              private fb: FormBuilder) {
  }
  title = 'incoma-test';

  bookmarkList$ = this.store.select(BookmarksState.bookmarksList);
  form: FormGroup = this.fb.group({
    query: [''],
  });

  @HostListener('window:storage', ['$event']) public onScroll(res: any): void {
    if (res.key === 'bookMarks.videos') {
      this.store.dispatch(new Bookmarks.ChangeBookmarks(res.newValue));
    }
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((res: any) => this.searchService.setSearchQuery(res.query));
  }
}
