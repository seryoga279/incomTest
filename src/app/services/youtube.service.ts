import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  private apiKey = 'AIzaSyBH4ouSr7KyZVJPCKyGYtUY2TlVVLbRdic';
  private baseUrl = 'https://youtube.googleapis.com/youtube/v3';

  private getVideos(params: HttpParams): Observable<any> {
    return this.http.get(`${this.baseUrl}/videos`, {params});
  }

  private searchVideo(params: HttpParams): Observable<any> {
    return this.http.get(`${this.baseUrl}/search`, {params});
  }

  getTopVideos(nextPage?: string): Observable<any> {
    let params = new HttpParams()
        .append('part', 'snippet,contentDetails,statistics')
        .append('chart', 'mostPopular')
        .append('locale', 'RU')
        .append('regionCode', 'RU')
        .append('key', this.apiKey)
        .append('maxResults', '10');
    if (nextPage) {
      params = params.append('pageToken', nextPage.toString());
    }
    return this.getVideos(params);
  }

  getVideosById(ids: string[]): Observable<any> {
    const params = new HttpParams()
        .append('part', 'snippet,contentDetails,statistics')
        .append('id', ids.toString())
        .append('key', this.apiKey);
    return this.getVideos(params);
  }

  searchByQuery(query: string, nextPage?: string): Observable<any> {
    let params = new HttpParams()
        .append('part', 'snippet')
        .append('maxResults', '10')
        .append('q', query)
        .append('key', this.apiKey);
    if (nextPage) {
      params = params.append('pageToken', nextPage.toString());
    }
    return this.searchVideo(params);
  }
}
