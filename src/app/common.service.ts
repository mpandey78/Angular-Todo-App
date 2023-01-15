import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  post(arg0: string, apireq: { password: any; token: any; }) {
    throw new Error('Method not implemented.');
  }
  toasterSucc //
    (arg0: string) {
      throw new Error('Method not implemented.');
  }
  get(apiReqUrl: any) {
    throw new Error('Method not implemented.');
  }

  // public baseUrl = 'https://node-stromestreet.mobiloitte.com/api/v1/'
  public baseUrl = "https://onjyb.dss.gos.mybluehostin.me/api/" // client domian pointed
  // public baseUrl = "http://172.16.2.19:3027/api/v1/" // harshit system ip
  // public baseUrl = 'http://172.16.2.19:3027/api/v1/'
  // public webUrl = 'http://localhost:4200/'

// public baseUrl ="https://webknight.co.in/"
  // public loginData = new Subject<any>();

  public postData = new BehaviorSubject<any>(0);
  public particularPost = new BehaviorSubject<any>(0);
  public notificationId = new Subject<any>();

  constructor(
    public http: HttpClient,
    public routes: Router
  ) { }
  setNotificationId(id:any) {
    this.notificationId.next(id)
  }
  setPostData(data: any) {
    this.postData.next(data);
  }
  setParticularPostData(data: any) {
    this.particularPost.next(data);
  }

  // ------------ post api -------------- //
  postApi(endPoint:any, data:any, isHeader:any) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        }),
      };
    }
    return this.http.post(this.baseUrl + endPoint, data, httpHeaders);
  }

  deleteApi(endPoint:any, isHeader:any) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        }),
      };
    }
    return this.http.delete(this.baseUrl + endPoint, httpHeaders);
  }
  putApi(endPoint:any , data:any, isHeader:any) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        }),
      };
    }
    return this.http.put(this.baseUrl + endPoint, data, httpHeaders);
  }
  // ----------- get api ---------------- //
  getApi(endPoint:any, isHeader:any) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        }),
      };
    }
    return this.http.get(this.baseUrl + endPoint, httpHeaders);
  }

  //--------- upload image-----------//
  uploadImage(endPoint:any, data:any, isHeader:any) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({}),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          token: `${localStorage.getItem("token")}`,
        }),
      };
    }
    return this.http.post(this.baseUrl + endPoint, data, httpHeaders);
  }

  //  =-=-=-=-=-==- upload file =-=-==-=-=-=-==-=-

  postFormDataApi(endPoint:any, data:any, isHeader:any) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          // "Content-Type": "application/json",
        }),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          // "Content-Type": "application/json",
          token: localStorage.getItem("token")!,
        }),
      };
    }
    return this.http.post(this.baseUrl + endPoint, data, httpHeaders);
  }
  // -----------patch api --------------- //
  patchApi(endPoint:any, data:any, isHeader:any) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          token: localStorage.getItem("token")!,
        }),
      };
    }
    return this.http.patch(this.baseUrl + endPoint, data, httpHeaders);
  }
  // ------------ get local file data ---------- //
  getLocalData(url:any) {
    return this.http.get(url);
  }

  // ------------ get third party api ---------- //
  getThirdPartyApi(url:any) {
    return this.http.get(url, { observe: "response" });
  }

  // ------------ Spinner ------------- //
  // showSpinner() {
  //   this.spinner.show();
  // }

  hideSpinner() {
    // this.spinner.hide();
  }

  // ---------- toaster ----------------- //
  successToast(msg:any) {
    // this.toastr.success(msg);
  }
  errorToast(msg:any) {
    // this.toastr.error(msg);
  }
  infoToast(msg:any) {
    // this.toastr.info(msg);
  }
  warningToast(msg:any) {
    // this.toastr.warning(msg);
  }
  public isLoggedIn(): boolean {
    return localStorage.getItem("token") ? true : false;
  }
  /** Function to restrict character */
  public numberOnly(event:any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  /** Call logout function **/
  logout() {
    localStorage.removeItem("token");
    // localStorage.removeItem("name");
    // localStorage.clear()
    this.routes.navigate(["/homepage"]);
  }
  // thirdparty Api for get location
  public getIPAddress() {
    return this.http.get("https://jsonip.com/?format=json");
  }
  getLocation(url:any) {
    return this.http.get(url);
  }

  public getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  }
  incommingMeassageAudio() {
    var audio = new Audio("assets/gif/iPhone Message Tone.mp3");
    audio.play()
  }

}
