import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSquareMenu } from '@ng-icons/lucide';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HeaderComponent } from "./shared/layout/header/header.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
    providers: [provideIcons({ lucideSquareMenu })],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mercadoAppFront';
}
