import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScriptInitializerService } from '../shared/services/script-initializer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class AppComponent implements OnInit {
  private scriptInitializer = inject(ScriptInitializerService);

  ngOnInit(): void {
    this.scriptInitializer.init();
  }
}
