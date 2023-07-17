import { Component } from '@angular/core';

//creo un tipo de dato personalizado para la lista
type Product = {
  name: string;
  cost: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  show: boolean = true;
  hideShow: string = 'Ocultar Lista';
  products: Product [] = [	
    {name: 'Tv', cost: '85456' },
    {name: 'Laptop', cost: '465120' },
    {name: 'Mobile', cost: '234234' },
    {name: 'Tablet', cost: '345345' },
    {name: 'Desktop', cost: '934234' }
  ];

  showHideList(){
    this.show = !this.show;
    this.show? this.hideShow = 'Ocultar Lista': this.hideShow = 'Mostrar Lista';
  }
}
