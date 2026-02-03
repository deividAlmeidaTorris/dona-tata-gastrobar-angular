import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent {
  itensCardapio = [
    {
      nome: 'Porção de Calabresa',
      descricao: 'Acompanha farofa, limão e molho da casa',
      preco: 'R$ 35,00',
      imagem: '/imagens/porcao calabresa.webp',
    },
    {
      nome: 'Chopp Brahma',
      descricao: 'Chopp gelado 600ml',
      preco: 'R$ 12,00',
      imagem: '/imagens/chopp-brahma-2.jpg',
    },
    {
      nome: 'Heineken',
      descricao: 'Long neck 330ml',
      preco: 'R$ 10,00',
      imagem: '/imagens/foto-heineken.jpg',
    },
    {
      nome: 'Porção de Camarão Imperial',
      descricao:
        'Camarões crocantes servidos com limão e pimenta biquinho, acompanhados de arroz cremoso e salada fresca.',
      preco: 'R$ 89,90',
      imagem: 'imagens/porcao-camarao.webp',
    },
  ];
}
