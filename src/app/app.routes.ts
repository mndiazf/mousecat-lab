import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { EcommerceComponent } from './layouts/services/ecommerce/ecommerce.component';
import { IntegrationSystemsComponent } from './layouts/services/integration-systems/integration-systems.component';
import { CustomSoftwareComponent } from './layouts/services/custom-software/custom-software.component';
import { MobileAppsComponent } from './layouts/services/mobile-apps/mobile-apps.component';
import { CloudSolutionsDesignComponent } from './layouts/services/cloud-solutions-design/cloud-solutions-design.component';
import { InfrastructureDeploymentComponent } from './layouts/services/infrastructure-deployment/infrastructure-deployment.component';
import { CloudMaintenanceSupportComponent } from './layouts/services/cloud-maintenance-support/cloud-maintenance-support.component';
import { CloudConsultingComponent } from './layouts/services/cloud-consulting/cloud-consulting.component';
import { ITConsultingComponent } from './layouts/services/it-consulting/it-consulting.component';
import { SoftwareSupportMaintenanceComponent } from './layouts/services/software-support-maintenance/software-support-maintenance.component';
import { WebDesignComponent } from './layouts/services/web-development/web-design.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services/web-design', component: WebDesignComponent },
  { path: 'services/ecommerce', component: EcommerceComponent },
  { path: 'services/integration-systems', component: IntegrationSystemsComponent },
  { path: 'services/custom-software', component: CustomSoftwareComponent },
  { path: 'services/mobile-apps', component: MobileAppsComponent },
  { path: 'services/cloud-solutions-design', component: CloudSolutionsDesignComponent },
  { path: 'services/infrastructure-deployment', component: InfrastructureDeploymentComponent },
  { path: 'services/cloud-maintenance-support', component: CloudMaintenanceSupportComponent },
  { path: 'services/cloud-consulting', component: CloudConsultingComponent },
  { path: 'services/it-consulting', component: ITConsultingComponent },
  { path: 'services/software-support-maintenance', component: SoftwareSupportMaintenanceComponent }
];
