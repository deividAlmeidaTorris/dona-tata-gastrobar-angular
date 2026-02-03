import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  fotos = [
    '/imagens/frente-loja.webp',
    '/imagens/interior loja.webp',
    '/imagens/comidas.webp',
    '/imagens/choop-gelado.webp',
    '/imagens/telao.webp',
    '/imagens/musica-ao-vivo.webp',
  ];
}
