import {Component, Inject, OnInit} from '@angular/core';
import {AuthState} from "./store/auth/auth-state.service";
import {Store} from "@ngxs/store";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchService} from "./services/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'incoma-test';

  bookmarkList$ = this.store.select(AuthState.bookmarksList);
  form: FormGroup = this.fb.group({
    query: [''],
  });

  constructor(private store: Store,
              private searchService: SearchService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(res => this.searchService.setSearchQuery(res.query));
  }
}
