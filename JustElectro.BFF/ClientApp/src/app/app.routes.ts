import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./domains/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./domains/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./domains/services/services.routes').then((m) => m.SERVICES_ROUTES),
  },
  // {
  //   path: 'blog',
  //   loadChildren: () =>
  //     import('./domains/blog/blog.routes').then((m) => m.BLOG_ROUTES),
  // },
  // {
  //   path: 'project',
  //   loadChildren: () =>
  //     import('./domains/project/project.routes').then((m) => m.PROJECT_ROUTES),
  // },
  {
    path: 'contact',
    loadChildren: () =>
      import('./domains/contact/contact.routes').then((m) => m.CONTACT_ROUTES),
  },
  {
    path: 'programe-finantare',
    loadChildren: () =>
      import('./domains/programe-finantare/programe-finantare.routes').then(
        m => m.PROGRAME_FINANTARE_ROUTES
      ),
  },
  {
    path: 'portofoliu',
    loadChildren: () =>
      import('./domains/portofoliu/portofoliu.routes').then((m) => m.PORTOFOLIU_ROUTES),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./domains/catalog/catalog.routes').then(
        m => m.CATALOG_ROUTES
      ),
  },
  // {
  //   path: '**',
  //   loadComponent: () =>
  //     import('./domains/not-found/pages/not-found-page/not-found-page.component').then(
  //       (m) => m.NotFoundPageComponent
  //     ),
  // },
];
