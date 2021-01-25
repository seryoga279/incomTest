import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Bookmarks} from "../../../store/auth/auth-state.actions";
import {AuthState} from "../../../store/auth/auth-state.service";
import {UnsubscribeComponent} from "../unsubscribe/unsubscribe.component";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent extends UnsubscribeComponent implements OnInit {

  @Input() video: any;
  bookmarkList$ = this.store.select(AuthState.bookmarksList)
      .pipe(takeUntil(this.unsubscribe));

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
  }

  addToBookmarks(id: string) {
    this.store.dispatch(new Bookmarks.AddToBookmarks(id));
  }

  removeFromBookmarks(id: string) {
    this.store.dispatch(new Bookmarks.RemoveFromBookmarks(id));
  }

}
