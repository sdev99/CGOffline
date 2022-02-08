import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy, RouterOutlet } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent, HttpLoaderFactory } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { ModalsModule } from "./modals/modals.module";
import { QRScanner } from "@ionic-native/qr-scanner/ngx";
import { Badge } from "@ionic-native/badge/ngx";
import { PipesModule } from "./pipes/pipes.module";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";
import { CameraPreview } from "@ionic-native/camera-preview/ngx";
import { CommonModule } from "@angular/common";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { DirectivesModule } from "./directives/directives.module";
import { HTTP } from "@ionic-native/http/ngx";
import { Zip } from "@ionic-native/zip/ngx";

import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from "@angular/common/http";
import { HttpConfigInterceptor } from "./helpers/httpConfig.interceptor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Camera } from "@ionic-native/camera/ngx";
import { MediaCapture } from "@ionic-native/media-capture/ngx";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { TemplateDropdownComponent } from "./components/template-dropdown/template-dropdown.component";
import { SQLite } from "@ionic-native/sqlite/ngx";
import { Base64 } from "@ionic-native/base64/ngx";
import { Device } from "@ionic-native/device/ngx";
import { Insomnia } from "@ionic-native/insomnia/ngx";
import { DiskCheckPlugin } from "./custom-plugin-ngx/disk-check-plugin/ngx";
import { CheckoktaenablePage } from "./pages/checkoktaenable/checkoktaenable.page";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@NgModule({
  declarations: [AppComponent, TemplateDropdownComponent, CheckoktaenablePage],
  entryComponents: [TemplateDropdownComponent, CheckoktaenablePage],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot({
      hardwareBackButton: false,
      mode: "ios",
    }),
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    ComponentsModule,
    ModalsModule,
    CommonModule,
    PipesModule,
    DirectivesModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [
    QRScanner,
    StatusBar,
    FileOpener,
    Base64,
    File,
    Device,
    Zip,
    FileTransfer,
    UniqueDeviceID,
    CameraPreview,
    Camera,
    Badge,
    MediaCapture,
    ScreenOrientation,
    Insomnia,
    HTTP,
    SQLite,
    RouterOutlet,
    DiskCheckPlugin,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
