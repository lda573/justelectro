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
    { id: 'step1', number: '01', title: 'Consultanță', description: 'analizăm nevoile și cerințele clientului' },
    { id: 'step2', number: '02', title: 'Proiectare', description: 'dezvoltăm un plan detaliat pentru implementarea soluției' },
    { id: 'step3', number: '03', title: 'Execuție', description: 'implementăm soluția conform planului stabilit' },
    { id: 'step4', number: '04', title: 'Testare', description: 'verificăm funcționalitatea și performanța soluției' },
    { id: 'step5', number: '05', title: 'Mentenanță', description: 'asigurăm suport și întreținere continuă' },
  ];

  onToggleStep(id: string): void {
    this.activeStep.set(this.activeStep() === id ? '' : id);
  }
}
