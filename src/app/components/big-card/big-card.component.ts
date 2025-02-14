import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  id: string = '';
  @Input()
  imagem: string = '';
  @Input()
  titulo: string = '';
  @Input()
  manchete: string = '';
}
