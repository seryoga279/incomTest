import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UnsubscribeComponent } from '../unsubscribe/unsubscribe.component';
import { Bookmarks } from '../../../store/bookmarks/bookmarks.actions';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubePlayerComponent extends UnsubscribeComponent implements OnInit {

  @Input() video: any;
  @Input() bookmarks: boolean;

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
  }

  addToBookmarks(): any {
    this.store.dispatch(new Bookmarks.AddToBookmarks(this.video.id.videoId || this.video.id));
  }

  removeFromBookmarks(): any {
    this.store.dispatch(new Bookmarks.RemoveFromBookmarks(this.video.id.videoId || this.video.id));
  }

}
