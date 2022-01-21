import { Injectable } from "@angular/core";
import { Requestor } from "@openid/appauth";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { XhrSettings } from "ionic-appauth/lib/cordova";
import { HTTP } from "@awesome-cordova-plugins/http/ngx";
import { UtilService } from "../services/util.service";
import { environment } from "src/environments/environment";
import { platform } from "os";
import { Platform } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class NgHttpService implements Requestor {
  constructor(
    private http: HttpClient,
    private nativeHttp: HTTP,
    private platform: Platform
  ) {}

  public async xhr<T>(settings: XhrSettings): Promise<T> {
    if (!settings.method) {
      settings.method = "GET";
    }

    switch (settings.method) {
      case "GET":
        return this.http
          .get<T>(settings.url, {
            headers: this.getHeaders(settings.headers),
          })
          .toPromise();
      case "POST":
        if (this.platform.is("capacitor")) {
          return new Promise((resolve, reject) => {
            const dataObject: any = settings.data
              ? UtilService.convertToObject(settings.data)
              : {};
            dataObject.redirect_uri = environment.auth_config.redirect_url;
            this.nativeHttp
              .post(settings.url, dataObject, settings.headers)
              .then((value: any) => {
                resolve(JSON.parse(value.data));
              })
              .catch((error) => {
                reject(error);
              });
          });
        }
        return this.http
          .post<T>(settings.url, settings.data, {
            headers: this.getHeaders(settings.headers),
          })
          .toPromise();
      case "PUT":
        if (this.platform.is("capacitor")) {
          return new Promise((resolve, reject) => {
            const dataObject: any = settings.data
              ? UtilService.convertToObject(settings.data)
              : {};
            dataObject.redirect_uri = environment.auth_config.redirect_url;
            this.nativeHttp
              .put(settings.url, dataObject, settings.headers)
              .then((value: any) => {
                resolve(JSON.parse(value.data));
              })
              .catch((error) => {
                reject(error);
              });
          });
        }
        return this.http
          .put<T>(settings.url, settings.data, {
            headers: this.getHeaders(settings.headers),
          })
          .toPromise();
      case "DELETE":
        return this.http
          .delete<T>(settings.url, {
            headers: this.getHeaders(settings.headers),
          })
          .toPromise();
    }
  }

  private getHeaders(headers: any): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    if (headers !== undefined) {
      Object.keys(headers).forEach((key) => {
        httpHeaders = httpHeaders.append(key, headers[key]);
      });
    }

    return httpHeaders;
  }
}
