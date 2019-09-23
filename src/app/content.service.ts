import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) {}

  // faqContentUrl = 'https://acf-console.s3.amazonaws.com/faq.json';
  // userGuideContentUrl = 'https://acf-console.s3.amazonaws.com/user-guide.json';

  faqContentUrl = '../assets/data/faq.json';
  userGuideContentUrl = '../assets/data/user-guide.json';

  getFaq() {
    return this.http.get(this.faqContentUrl);
  }

  getUserGuide() {
    return this.http.get(this.userGuideContentUrl);
  }
}
