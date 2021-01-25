import { Component, OnInit } from '@angular/core';
import {AuthState} from "../store/auth/auth-state.service";
import {mergeMap, takeUntil, tap} from "rxjs/operators";
import {Store} from "@ngxs/store";
import {UnsubscribeComponent} from "../shared/component/unsubscribe/unsubscribe.component";
import {YoutubeService} from "../services/youtube.service";
import {EMPTY, of} from "rxjs";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent extends UnsubscribeComponent implements OnInit {

  bookmarkList$ = this.store.select(AuthState.bookmarksList)
      .pipe(
          mergeMap((videos: string[]) => videos.length ? this.youtubeService.getVideosById(videos) : of(videos)),
          takeUntil(this.unsubscribe)
      );

  constructor(private store: Store, private youtubeService: YoutubeService) {
    super();
  }

  ngOnInit(): void {
  }

}
