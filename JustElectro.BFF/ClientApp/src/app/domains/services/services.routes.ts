import { Routes } from '@angular/router';

export const SERVICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/services-page/services-page.component').then(
        (m) => m.ServicesPageComponent
      ),
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./pages/service-detail-page/service-detail-page.component').then(
        (m) => m.ServiceDetailPageComponent
      ),
  },
];
