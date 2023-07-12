import { Component } from '@angular/core';
//creo un tipo de dato personalizado para la lista
type Product = {
    name: string;
    cost: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    show: boolean = true;
    hideShow: string = 'Hide List';
    products: Product [] = [	
      {name: 'Tv', cost: '85456' },
      {name: 'Laptop', cost: '465120' },
      {name: 'Mobile', cost: '234234' },
      {name: 'Tablet', cost: '345345' },
      {name: 'Desktop', cost: '934234' }
    ];

    showHideList(){
      this.show = !this.show;
      this.show? this.hideShow = 'Hide List': this.hideShow = 'Show List';
    }
}

