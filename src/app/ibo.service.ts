import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Ibo } from './ibo';

@Injectable()
export class IboService {

  constructor(private http:Http) { }

  private oauthUrl = "http://127.0.0.1:8000/oauth/token";
  private ibosUrl = "http://127.0.0.1:8000/api/ibo";

  getAccessToken() {
      var headers = new Headers({
          "Content-Type": "application/json",
          "Accept": "application/json"
      });

      let postData = {
          grant_type: "password",
          client_id: 2,
          client_secret: "evK9rBhIjV053VNgcnXblLxKbRm6PKajhmBJ7CPK",
          username: "michaeljavier@gmail.com",
          password: "123456",
          scope: "*"
      }

      return this.http.post(this.oauthUrl, JSON.stringify(postData), {headers: headers})
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getIbos(accessToken: string): Observable<Ibo[]> {
      var headers = new Headers({
          "Accept": "application/json",
          "Authorization": "Bearer " + accessToken,
      });

      return this.http.get(this.ibosUrl, {headers: headers})
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
