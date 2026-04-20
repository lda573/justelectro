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
  @Input() label = 'Contacteaza-ne';
  @Input() title = 'Ești gata să reduci costurile la energie?';
  @Input() description = 'Discută cu un specialist și află ce soluție ți se potrivește. Îți oferim consultanță gratuită și te ajutăm cu tot procesul de la alegere până la instalare.';
  @Input() buttonText = 'Solicită ofertă';
  @Input() buttonRoute = '/contact';
}
