import { Component, HostListener, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeComponent } from '../shared/component/unsubscribe/unsubscribe.component';
import { Store } from '@ngxs/store';
import { Videos } from '../store/videos/videos.actions';
import { VideosState } from '../store/videos/videos.service';
import { BookmarksState } from '../store/bookmarks/bookmarks.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends UnsubscribeComponent implements OnInit {

  videoList$ = this.store.select(VideosState.videosList);
  bookMarksList: string[];

  @HostListener('window:scroll', []) public onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.getVideos();
    }
  }

  constructor(private youtubeService: YoutubeService,
              private searchService: SearchService,
              public store: Store) {
    super();
  }

  private updateVideoList(res: any): void {
    this.store.dispatch(new Videos.AddVideos(res));
  }

  ngOnInit(): void {
    if (!this.store.selectSnapshot(VideosState.videoState).videos.length) {
      this.getVideos();
    }

    this.searchService.getSearchQuery().pipe(takeUntil(this.unsubscribe)).subscribe((query: string) => {
      this.store.dispatch(new Videos.RemoveVideos());
      if (!query || query === '') {
        this.getVideos();
      } else {
        this.searchVideo(query);
      }
    });
    this.store.select(BookmarksState.bookmarksList)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((bookmarksList: string[]) => this.bookMarksList = bookmarksList);
  }

  getVideos(): void {
    const videoListSnapshot = this.store.selectSnapshot(VideosState.videoState);
    this.youtubeService.getTopVideos(videoListSnapshot.nexPageToken)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((res: any) => this.updateVideoList(res));
  }

  searchVideo(query: string, nextPage?: string): void {
    this.youtubeService.searchByQuery(query, nextPage).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => this.updateVideoList(res));
  }

}
