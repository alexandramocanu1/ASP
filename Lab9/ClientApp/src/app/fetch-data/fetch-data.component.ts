import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public response: any = "";


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    // not required if used JwtModule
    //let token = localStorage.getItem('JwtToken');
    //let headers = new HttpHeaders();
    //headers.set('Authorization', 'Bearer ' + token);
    http.get(baseUrl + 'users/check-auth-without-role').subscribe((result:any) => {
      console.log(result);
      this.response = result?.message;
    }, errorResponse => {
      console.error(errorResponse); this.response = errorResponse?.error?.message;
    });
  }
}
