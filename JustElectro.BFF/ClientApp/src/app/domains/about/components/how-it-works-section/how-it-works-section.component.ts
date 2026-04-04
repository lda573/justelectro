import { Component, signal } from '@angular/core';

interface WorkStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [],
  templateUrl: './how-it-works-section.component.html',
  styleUrl: './how-it-works-section.component.scss'
})
export class HowItWorksSectionComponent {
  activeStep = signal('step1');

  steps: WorkStep[] = [
    { id: 'step1', number: '01', title: 'Consultation', description: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.' },
    { id: 'step2', number: '02', title: 'Site Explore', description: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.' },
    { id: 'step3', number: '03', title: 'Design', description: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.' },
    { id: 'step4', number: '04', title: 'Consultation', description: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.' },
    { id: 'step5', number: '05', title: 'Monitoring', description: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.' },
  ];

  onToggleStep(id: string): void {
    this.activeStep.set(this.activeStep() === id ? '' : id);
  }
}
