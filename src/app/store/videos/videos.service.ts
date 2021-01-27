import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { VideosStateInterface } from './videos.interface';
import { Videos } from './videos.actions';

@State<VideosStateInterface>({
  name: 'videoList',
  defaults: {
    videos: [],
    nexPageToken: null
  },
})
@Injectable()
export class VideosState {

  @Selector()
  static videoState(state: VideosStateInterface): any {
    return state;
  }

  @Selector()
  static videosList(state: VideosStateInterface): any {
    return state.videos;
  }

  constructor() {}

  @Action(Videos.AddVideos)
  public addVideos({ setState, getState }: StateContext<VideosStateInterface>, action: Videos.AddVideos): void {
    setState({
      ...getState(),
      videos: [...getState().videos, ...action.payload.items],
      nexPageToken: action.payload.nextPageToken
    });
  }

  @Action(Videos.RemoveVideos)
  public removeVideos({ setState }: StateContext<VideosStateInterface>): void {
    setState({
      videos: [],
      nexPageToken: null
    });
  }
}
