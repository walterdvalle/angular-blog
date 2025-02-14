import { Component, inject, OnInit } from '@angular/core';
import { Noticia } from '../../model/noticia';
import { NoticiaService } from '../../service/noticia.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private noticiaService = inject(NoticiaService);
  destaque: Noticia;
  noticias: Noticia[] = [];

  constructor() {
    this.destaque = this.noticiaService.getDestaque();
    this.noticias = this.noticiaService.getUltimasNoticias();
  }
}
