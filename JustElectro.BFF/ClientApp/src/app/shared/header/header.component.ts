import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService, Language } from '../services/language.service';

interface NavItem {
  labelRo: string;
  labelEn: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  langService = inject(LanguageService);

  phone = '0744 576 486 ,  0771 737 189';
  email = 'office@just-electro.ro';

  socialLinks = [
    { icon: 'fa-brands fa-facebook-f', url: '#' },
    { icon: 'fa-brands fa-twitter', url: '#' },
    { icon: 'fa-brands fa-instagram', url: '#' },
    { icon: 'fa-brands fa-youtube', url: '#' },
    { icon: 'fa-brands fa-linkedin-in', url: '#' },
  ];

  navItems: NavItem[] = [
    { labelRo: 'Acasă',               labelEn: 'Home',               route: '/' },
    { labelRo: 'Despre Noi',          labelEn: 'About Us',           route: '/about' },
    { labelRo: 'Servicii',            labelEn: 'Services',           route: '/services' },
    { labelRo: 'Programe Finanțare',  labelEn: 'Funding Programs',   route: '/programe-finantare' },
    { labelRo: 'Portofoliu',          labelEn: 'Portfolio',          route: '/portofoliu' },
    { labelRo: 'Catalog',             labelEn: 'Catalogue',          route: '/catalog' },
    { labelRo: 'Contact',             labelEn: 'Contact',            route: '/contact' },
  ];

  getLabel(item: NavItem): string {
    return this.langService.currentLang() === 'ro' ? item.labelRo : item.labelEn;
  }

  onSwitchLang(lang: Language): void {
    this.langService.switchTo(lang);
  }
}
