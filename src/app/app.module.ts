import {NgModule, Pipe} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import {SafeurlPipe} from './pipes/safeurl.pipe';
import {PipesModule} from './pipes/pipes.module';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {File} from '@ionic-native/file/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';
import {CameraPreview} from '@ionic-native/camera-preview/ngx';
import {CommonModule} from '@angular/common';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@NgModule({
    declarations: [
        AppComponent,
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot({
            hardwareBackButton: false,
        }),
        AppRoutingModule,
        ComponentsModule,
        CommonModule,
        NgxQRCodeModule,
        PipesModule,
    ],
    providers: [
        QRScanner,
        StatusBar,
        SplashScreen,
        FileOpener,
        File,
        FileTransfer,
        UniqueDeviceID,
        CameraPreview,
        ScreenOrientation,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
