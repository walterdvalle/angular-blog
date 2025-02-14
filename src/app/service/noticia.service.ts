import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticia';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  getDestaque(): Noticia {
    return new Noticia(
      '876',
      'https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg',
      'Lançado novo filme do Homem de Ferro',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel consectetur mauris. Proin elit sem, dignissim dapibus
        nibh sed, porttitor posuere leo. Nulla a facilisis magna. Maecenas vel leo velit. Sed vel varius purus. Nullam porttitor
        varius venenatis`
    );
  }
  getUltimasNoticias(): Noticia[] {
    let noticias: Noticia[] = [];
    noticias.push(
      new Noticia(
        '1',
        'https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg',
        'Nova Temporada de Stranger Things Garante Emoção e Mistério em Sua Retorno à Netflix',
        ''
      )
    );
    noticias.push(
      new Noticia(
        '2',
        'https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg',
        'Sucesso de The Last of Us Revoluciona o Universo dos Games na TV e Conquista a Crítica',
        ''
      )
    );
    noticias.push(
      new Noticia(
        '3',
        'https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg',
        'Série The Bear Eleva a Qualidade da Comédia Dramática, Confirmando-se como um Fenômeno do Ano',
        ''
      )
    );
    return noticias;
  }

  getNoticiaById(id: string): Noticia {
    return this.getUltimasNoticias().find((x) => x.id === id)!;
  }
}
