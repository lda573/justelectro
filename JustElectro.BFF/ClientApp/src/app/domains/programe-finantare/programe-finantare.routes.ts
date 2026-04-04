import { Routes } from '@angular/router';

export const PROGRAME_FINANTARE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/programe-finantare-page/programe-finantare-page.component').then(
        m => m.ProgrameFinantarePageComponent
      ),
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./pages/program-detail-page/program-detail-page.component').then(
        m => m.ProgramDetailPageComponent
      ),
  },
];
