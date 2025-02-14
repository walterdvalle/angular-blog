import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../../service/noticia.service';
import { Noticia } from '../../model/noticia';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  imagem: string = '';
  titulo: string = '';
  manchete: string = '';

  constructor(
    private route: ActivatedRoute,
    private noticiaService: NoticiaService
  ) {
    let idNoticia = this.route.snapshot.params['id'];
    let noticia: Noticia = this.noticiaService.getNoticiaById(idNoticia);
    this.imagem = noticia.imagem;
    this.titulo = noticia.titulo;
    this.manchete = noticia.manchete;
  }
}
