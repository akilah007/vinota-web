import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WhyVinotaComponent } from './pages/why-vinota/why-vinota.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { KnowledgeBaseComponent } from './pages/knowledge-base/knowledge-base.component';
import { AboutCountryComponent } from './pages/about-country/about-country.component';
import { AppsComponent } from './pages/apps/apps.component';
import { CallRatesComponent } from './pages/call-rates/call-rates.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { LegalInformationComponent } from './pages/legal-information/legal-information.component';
import { PrivacyAndPolicyComponent } from './pages/privacy-and-policy/privacy-and-policy.component';
import { SecurityPolicyComponent } from './pages/security-policy/security-policy.component';
import { DataDepletionPolicyComponent } from './pages/data-depletion-policy/data-depletion-policy.component';
import { CallingEritraComponent } from './pages/knowledge-base/blog/calling-eritra/calling-eritra.component';
import { BestInternationalCallingAppComponent } from './pages/knowledge-base/blog/best-international-calling-app/best-international-calling-app.component';
import {CryptoPaymentsComponent} from "./pages/knowledge-base/blog/crypto-payments/crypto-payments.component";

const routes: Routes = [
  { path: 'best-international-calling-app', component: BestInternationalCallingAppComponent },
  { path: 'calling-eritra', component: CallingEritraComponent },
  { path: 'crypto-payments', component: CryptoPaymentsComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'legal-information/vinota-terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'legal-information', component: LegalInformationComponent },
  { path: 'privacy-policy', component: PrivacyAndPolicyComponent },
  { path: 'legal-information/privacy-policy', component: PrivacyAndPolicyComponent },
  { path: 'security-policy', component: SecurityPolicyComponent },
  { path: 'data-depletion-policy', component: DataDepletionPolicyComponent },
  { path: '', component: IndexComponent },
  { path: 'call-rates', component: CallRatesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'why-vinota', component: WhyVinotaComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'vinota-frquently-asked-questions-faq', component: FaqComponent },
  { path: 'knowledge-base', component: KnowledgeBaseComponent },
  { path: 'call-rates/:id', component: AboutCountryComponent },
  { path: 'get-vinota-apps', component: AppsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
