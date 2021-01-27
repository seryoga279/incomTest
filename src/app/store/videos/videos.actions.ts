export namespace Videos {

  export class AddVideos {
    static readonly type = '[Videos] Add';
    constructor(public payload: any) {}
  }

  export class RemoveVideos {
    static readonly type = '[Videos] Remove';
  }
}
