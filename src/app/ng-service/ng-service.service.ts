import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("https://graph.facebook.com/v8.0/me?fields=id%2Cname%2Cbirthday%2Cemail%2Clink&access_token=EAAFLvvTqS6sBACQ7JLEZBrVUtqGvWUvEcMIRlOsL5EE4q5q1aj1HsI1R92iGtIux6ZBbOfYWCPmEE9GGURIidSrMPWJluUhMGSX1enzykrl6x6FgZCBCZCBiYhxFx6MaWxXXdLoo6RmnMS4JALa2pNeMGqCBk3tx4My8zbwqUmBTmLYaIJLNWPEoKR0BnN1YJvr30J4jKmAKzxszxF747TVQ0wrRFblBG5eBYlGhdQw0VCNRLl2o1F5QvxrHL1IZD");
  }

}
