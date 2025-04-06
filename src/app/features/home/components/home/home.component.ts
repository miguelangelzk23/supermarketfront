import { Component } from '@angular/core';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';

import { HlmCarouselComponent, HlmCarouselContentComponent,HlmCarouselItemComponent } from '@spartan-ng/ui-carousel-helm';
export interface Category  {
  Id:number,
  Nombre:string,
  UrlImage:string,
  Descripcion:string
}
@Component({
  selector: 'app-home',
  imports: [  HlmFormFieldModule,
    HlmInputDirective,HlmCarouselComponent, HlmCarouselContentComponent,HlmCarouselItemComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[provideIcons({ lucideChevronRight })]
})
export class HomeComponent {

  Categories :Category []= [
    {
    Id: 1,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner1.png"
  },
  {
    Id: 2,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner2.png"

    },  {
    Id: 3,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner3.png"
  },
  {
    Id: 4,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://bogota.gov.co/sites/default/files/styles/1050px/public/2021-05/puestos-en-las-plazas-de-mercado.jpg"
  }
  ]
}


