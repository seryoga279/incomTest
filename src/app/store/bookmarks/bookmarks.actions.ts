export namespace Bookmarks {

  export class AddToBookmarks {
    static readonly type = '[BookMarks] Add';
    constructor(public payload: string) {}
  }

  export class ChangeBookmarks {
    static readonly type = '[BookMarks] Update';
    constructor(public payload: string) {}
  }

  export class RemoveFromBookmarks {
    static readonly type = '[BookMarks] Remove';
    constructor(public payload: string) {}
  }
}
