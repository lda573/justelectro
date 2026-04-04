import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { PortofoliuGridSectionComponent } from '../../components/portofoliu-grid-section/portofoliu-grid-section.component';

@Component({
  selector: 'app-portofoliu-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    PortofoliuGridSectionComponent,
  ],
  template: `
    <app-header />
    <app-page-header
      title="Portofoliu"
      [breadcrumbs]="[{ label: 'acasă', route: '/' }, { label: 'portofoliu' }]"
    />
    <app-portofoliu-grid-section />
    <app-footer />
  `
})
export class PortofoliuPageComponent {}
