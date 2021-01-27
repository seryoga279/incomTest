import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { BookmarksStateInterface } from './bookmarks.interface';
import { Bookmarks } from './bookmarks.actions';


@State<BookmarksStateInterface>({
  name: 'bookMarks',
  defaults: {
    videos: []
  },
})
@Injectable()
export class BookmarksState {

  @Selector()
  static bookmarksList(state: BookmarksStateInterface): string[] {
    return state.videos;
  }

  constructor() {}

  @Action(Bookmarks.AddToBookmarks)
  public addBookmark({ setState, getState }: StateContext<BookmarksStateInterface>, action: Bookmarks.AddToBookmarks): void {
    setState({
      videos: [...getState().videos, action.payload],
    });
  }

  @Action(Bookmarks.ChangeBookmarks)
  public changeBookmark({ setState }: StateContext<BookmarksStateInterface>, action: Bookmarks.ChangeBookmarks): void {
    setState({
      videos: action.payload ? JSON.parse(action.payload) : [],
    });
  }

  @Action(Bookmarks.RemoveFromBookmarks)
  public removeBookmark({ setState, getState }: StateContext<BookmarksStateInterface>, action: Bookmarks.AddToBookmarks): void {
    setState({
      videos: [...getState().videos.filter((id: string) => id !== action.payload)],
    });
  }
}
