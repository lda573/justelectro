import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CatalogGridSectionComponent } from '../../components/catalog-grid-section/catalog-grid-section.component';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CatalogGridSectionComponent,
  ],
  template: `
    <app-header />
    <app-page-header
      title="Catalog"
      [breadcrumbs]="[{ label: 'acasă', route: '/' }, { label: 'catalog' }]"
    />
    <app-catalog-grid-section />
    <app-footer />
  `
})
export class CatalogPageComponent {}
