import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxSiemaModule } from 'ngx-siema';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SocialLoginModule } from 'angularx-social-login';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ToastrModule } from 'ngx-toastr';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DeviceDetectorModule } from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    Ng2CarouselamosModule,
    Ng4LoadingSpinnerModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSiemaModule.forRoot(),
    Ng2TelInputModule,
    InfiniteScrollModule,
    CarouselModule,
    DeviceDetectorModule.forRoot(),
    NgxCaptchaModule
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
