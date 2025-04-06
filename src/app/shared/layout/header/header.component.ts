import { Component } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective,
} from '@spartan-ng/ui-sheet-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignJustify, lucideChevronRight, lucideShoppingCart } from '@ng-icons/lucide';
@Component({
  selector: 'app-header',
  imports: [ HlmIconDirective,  HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetDescriptionDirective,
 NgIcon,
    HlmSheetHeaderComponent,
    HlmSheetTitleDirective,
    BrnSheetContentDirective, BrnSheetTriggerDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

  providers: [provideIcons({ lucideChevronRight,lucideAlignJustify,lucideShoppingCart })],
})
export class HeaderComponent {

}
