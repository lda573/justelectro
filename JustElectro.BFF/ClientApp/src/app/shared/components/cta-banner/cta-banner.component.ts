import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss'
})
export class CtaBannerComponent {
  @Input() label = 'contact us';
  @Input() title = 'Ready to get started? Let\'s talk to us today';
  @Input() description = 'Our experts are ready to help you understand how solar can work for your home. Schedule a free, no-obligation consultation to assess your energy needs and potential savings.';
  @Input() buttonText = 'get started';
  @Input() buttonRoute = '/contact';
}
