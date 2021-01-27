import { Component, OnInit } from '@angular/core';
import { BookmarksState } from '../store/bookmarks/bookmarks.service';
import { map, mergeMap, takeUntil } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { UnsubscribeComponent } from '../shared/component/unsubscribe/unsubscribe.component';
import { YoutubeService } from '../services/youtube.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent extends UnsubscribeComponent implements OnInit {

  bookmarkList$ = this.store.select(BookmarksState.bookmarksList)
      .pipe(
          mergeMap((videos: string[]) => videos.length ? this.youtubeService.getVideosById(videos).pipe(
              map((res: any) => {
                res.notFoundItems = videos.filter((x: string) => res.items.map((item: any) => item.id).indexOf(x) === -1);
                return res;
              })
          ) : of(videos)),
          takeUntil(this.unsubscribe)
      );

  constructor(private store: Store, private youtubeService: YoutubeService) {
    super();
  }

  ngOnInit(): void {
  }

}
