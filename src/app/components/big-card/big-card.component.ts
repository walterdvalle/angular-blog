import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  imagem: string = '';
  @Input()
  titulo: string = '';
  @Input()
  manchete: string = '';

  /*
    ngOnInit(): void {
    this.destaque = new Noticia(
      'https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg',
      'Lançado novo filme do Homem de Ferro',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel consectetur mauris. Proin elit sem, dignissim dapibus
        nibh sed, porttitor posuere leo. Nulla a facilisis magna. Maecenas vel leo velit. Sed vel varius purus. Nullam porttitor
        varius venenatis`
    );
  }

  */
}
