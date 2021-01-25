import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Bookmarks } from './auth-state.actions';
import { BookmarksStateInterface } from './auth-state.interface';

@State<BookmarksStateInterface>({
  name: 'bookMarks',
  defaults: {
    videos: []
  },
})
@Injectable()
export class AuthState {

  @Selector()
  static bookmarksList(state: BookmarksStateInterface): string[] {
    return state.videos;
  }

  constructor() {}

  @Action(Bookmarks.AddToBookmarks)
  public addBookmark({ setState, getState }: StateContext<BookmarksStateInterface>, action: Bookmarks.AddToBookmarks) {
    setState({
      ...getState(),
      videos: [...getState().videos, action.payload],
    });
  }

  @Action(Bookmarks.RemoveFromBookmarks)
  public removeBookmark({ setState, getState }: StateContext<BookmarksStateInterface>, action: Bookmarks.AddToBookmarks) {
    setState({
      ...getState(),
      videos: [...getState().videos.filter(id => id !== action.payload)],
    });
  }
}
