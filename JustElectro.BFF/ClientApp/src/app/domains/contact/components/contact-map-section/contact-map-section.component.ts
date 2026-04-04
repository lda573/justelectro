import { Component } from '@angular/core';
import { TrustUrlPipe } from '../../../../shared/pipes/trust-url.pipe';

@Component({
  selector: 'app-contact-map-section',
  standalone: true,
  imports: [TrustUrlPipe],
  templateUrl: './contact-map-section.component.html',
  styleUrl: './contact-map-section.component.scss'
})
export class ContactMapSectionComponent {
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin';
}
