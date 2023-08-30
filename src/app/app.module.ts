import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WhyVinotaComponent } from './pages/why-vinota/why-vinota.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import {CallRatesComponent, FilterByLetter} from './pages/call-rates/call-rates.component';
import { KnowledgeBaseComponent } from './pages/knowledge-base/knowledge-base.component';
import { AboutCountryComponent } from './pages/about-country/about-country.component';
import { AppsComponent } from './pages/apps/apps.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {getAuth, provideAuth} from "@angular/fire/auth";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/header/header.component";
import {FloatingBarComponent} from "./components/floating-bar/floating-bar.component";
import {TopDestinationsComponent} from "./components/top-destinations/top-destinations.component";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutUsComponent,
    WhyVinotaComponent,
    ContactUsComponent,
    FaqComponent,
    CallRatesComponent,
    KnowledgeBaseComponent,
    AboutCountryComponent,
    AppsComponent,
    FilterByLetter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FloatingBarComponent,
    TopDestinationsComponent
  ],
  // providers: [],
  // providers: [{provide: APP_BASE_HREF, useValue: '/dist/vinota-v2-angular/'}],
  bootstrap: [AppComponent],
  providers: [
    ScreenTrackingService,UserTrackingService
  ]
})
export class AppModule { }
