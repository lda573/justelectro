import { Routes } from '@angular/router';

export const PORTOFOLIU_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/portofoliu-page/portofoliu-page.component').then(
        m => m.PortofoliuPageComponent
      ),
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./pages/portofoliu-detail-page/portofoliu-detail-page.component').then(
        m => m.PortofoliuDetailPageComponent
      ),
  },
];
