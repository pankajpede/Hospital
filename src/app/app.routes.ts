import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { MeettheteamComponent } from './pages/meettheteam/meettheteam.component'; 
import { OurjourneyComponent } from './pages/ourjourney/ourjourney.component'; 
import { CareerComponent } from './pages/career/career.component'; 
import { ServiceSeoComponent } from './pages/services/service-seo/service-seo.component';
import { ServicePpcComponent } from './pages/services/service-ppc/service-ppc.component';
import { ServiceSmmComponent } from './pages/services/service-smm/service-smm.component';
import { ServiceContentMarketingComponent } from './pages/services/service-content-marketing/service-content-marketing.component';
import { ServiceWebdevComponent } from './pages/services/service-webdev/service-webdev.component';
import { ServiceAnalyticsComponent } from './pages/services/service-analytics/service-analytics.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SuccessStoriesComponent } from './pages/success-stories/success-stories.component';
import { ECommerceComponent } from './pages/industries-we-Serve/e-commerce/e-commerce.component';
import { EducationComponent } from './pages/industries-we-Serve/education/education.component';
import { HealthcareComponent } from './pages/industries-we-Serve/healthcare/healthcare.component';
import { HospitalityComponent } from './pages/industries-we-Serve/hospitality/hospitality.component';
import { RealEstateComponent } from './pages/industries-we-Serve/real-estate/real-estate.component';
import { JobApplyComponent } from './pages/job-apply/job-apply.component';
import { ReferenceComponent } from './pages/reference/reference.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '*', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent },
    { path: 'about', component: AboutusComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'team', component: MeettheteamComponent },
    { path: 'our-journey', component: OurjourneyComponent },
    { path: 'career', component: CareerComponent },
    { path: 'job-apply', component: JobApplyComponent },
    { path: 'service-seo', component: ServiceSeoComponent },
    { path: 'service-ppc', component: ServicePpcComponent },
    { path: 'service-smm', component: ServiceSmmComponent },
    { path: 'service-content-marketing', component: ServiceContentMarketingComponent },
    { path: 'service-webdev', component: ServiceWebdevComponent },
    { path: 'service-analytics', component: ServiceAnalyticsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'terms' , component: TermsComponent },
    { path: 'privacy-policy' , component: PrivacyPolicyComponent},
    { path: 'success-stories' , component: SuccessStoriesComponent },
    { path: 'e-commerce' , component: ECommerceComponent },
    { path: 'education' , component: EducationComponent },
    { path: 'healthcare' , component: HealthcareComponent },
    { path: 'hospitality' , component: HospitalityComponent },
    { path: 'real-estate' , component: RealEstateComponent },
    {path: 'reference', component: ReferenceComponent},
];
