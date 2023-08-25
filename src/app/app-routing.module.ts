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

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'call-rates', component: CallRatesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'why-vinota', component: WhyVinotaComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faqs', component: FaqComponent },
  { path: 'knowledge-base', component: KnowledgeBaseComponent },
  { path: 'about-country', component: AboutCountryComponent },
  { path: 'apps', component: AppsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
