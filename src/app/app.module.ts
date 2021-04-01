import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterOutlet } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, HttpLoaderFactory } from './app.component';
import { ComponentsModule } from './components/components.module';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Badge } from '@ionic-native/badge/ngx';
import { PipesModule } from './pipes/pipes.module';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { CommonModule } from '@angular/common';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { DirectivesModule } from './directives/directives.module';
import { HTTP } from '@ionic-native/http/ngx';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './helpers/httpConfig.interceptor';
import { SearchLocationPage } from './modals/search-location/search-location.page';
import { FormsModule } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TemplateDropdownComponent } from './components/template-dropdown/template-dropdown.component';

@NgModule({
	declarations: [AppComponent, SearchLocationPage, TemplateDropdownComponent],
	entryComponents: [TemplateDropdownComponent],
	imports: [
		BrowserModule,
		FormsModule,
		IonicModule.forRoot({
			hardwareBackButton: false,
			mode: 'ios',
		}),
		TranslateModule.forRoot({
			defaultLanguage: 'en',
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		AppRoutingModule,
		ComponentsModule,
		CommonModule,
		PipesModule,
		DirectivesModule,
		HttpClientModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
		}),
	],
	providers: [
		QRScanner,
		StatusBar,
		FileOpener,
		File,
		FileTransfer,
		UniqueDeviceID,
		CameraPreview,
		Camera,
		Badge,
		MediaCapture,
		ScreenOrientation,
		HTTP,
		RouterOutlet,
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
