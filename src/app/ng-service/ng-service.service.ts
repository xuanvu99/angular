import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("https://graph.facebook.com/v8.0/me?fields=id%2Cname%2Cemail%2Cbirthday%2Clink&access_token=EAAFLvvTqS6sBAPmjytBX3D6ZBqLRLnq9DZCAVTNYVjuuaCiPPml0qg99uzwrrLt4OvzKUJ3ZAK8nGZAs3ZCzrlaTWCAYPOXZBeLTkN8rntvhaCIOiUkmeAdSgusDejTeSOtzchOaAmGDN9FbjQritIHU2Ls4j2MO3SeEZBn36aCmIqSGw3BE3r8");
  }

}
