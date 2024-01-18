import { NgModule } from '@angular/core';
import { BrowserModule,Meta  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
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
import {SupportSectionComponent} from "./components/support-section/support-section.component";
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { LegalInformationComponent } from './pages/legal-information/legal-information.component';
import { PrivacyAndPolicyComponent } from './pages/privacy-and-policy/privacy-and-policy.component';
import { SecurityPolicyComponent } from './pages/security-policy/security-policy.component';
import { DataDepletionPolicyComponent } from './pages/data-depletion-policy/data-depletion-policy.component';
import { NgxHotjarRouterModule, NgxHotjarModule } from 'ngx-hotjar';
import { CallingEritraComponent } from './pages/knowledge-base/blog/calling-eritra/calling-eritra.component';
import { BestInternationalCallingAppComponent } from './pages/knowledge-base/blog/best-international-calling-app/best-international-calling-app.component';
import { VinotaTermsAndConditionsComponent } from './pages/vinota-terms-and-conditions/vinota-terms-and-conditions.component';
import { VinotaSecurityPolicyComponent } from './pages/vinota-security-policy/vinota-security-policy.component';
import { VinotaPrivacyAndPolicyComponent } from './pages/vinota-privacy-and-policy/vinota-privacy-and-policy.component'
import { VinotaDataDepletionPolicyComponent } from './pages/vinota-data-depletion-policy/vinota-data-depletion-policy.component'
import { VinotaLegalInformationComponent } from './pages/vinota-legal-information/vinota-legal-information.component'

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
    FilterByLetter,
    TermsAndConditionsComponent,
    LegalInformationComponent,
    PrivacyAndPolicyComponent,
    SecurityPolicyComponent,
    DataDepletionPolicyComponent,
    CallingEritraComponent,
    BestInternationalCallingAppComponent,
    VinotaTermsAndConditionsComponent,
    VinotaSecurityPolicyComponent,
    VinotaPrivacyAndPolicyComponent,
    VinotaDataDepletionPolicyComponent,
    VinotaLegalInformationComponent
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
    TopDestinationsComponent,
    SupportSectionComponent,
    CommonModule
  ],
  bootstrap: [AppComponent],
  providers: [
    ScreenTrackingService,UserTrackingService,Meta
  ]
})
export class AppModule { }
