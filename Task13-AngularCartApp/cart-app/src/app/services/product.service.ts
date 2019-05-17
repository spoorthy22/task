import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

     products: Product[];

    constructor() {
		  this.products_data();
    }

	
    findAll(): Product[] {
     if(JSON.parse(localStorage.getItem('cart')).length != 0){
		  let cart: any = JSON.parse(localStorage.getItem('cart'));
			  for(var i = 0; i < this.products.length; i++) {
				for (var j = 0; j < cart.length; j++) {
				  let cart_item = JSON.parse(cart[j]);
					if(this.products[i].id == cart_item.product.id ){
						 this.products.splice(i, 1);
						break;
					}
					
				}
			}
     }
       return this.products; 
    }
	
	refresh_product_list(){
		this.products_data();
		if(JSON.parse(localStorage.getItem('cart')).length != 0){
		  let cart: any = JSON.parse(localStorage.getItem('cart'));
			  for(var i = 0; i < this.products.length; i++) {
				for (var j = 0; j < cart.length; j++) {
				  let cart_item = JSON.parse(cart[j]);
					if(this.products[i].id == cart_item.product.id ){
						 this.products.splice(i, 1);
						break;
					}
					
				}
			}
		}
	}

    find(id: number): Product {
        return this.products[this.getSelectedIndex(id)];
    }

     getSelectedIndex(id: number) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }


products_data() {
        this.products = [
							{
								"id": 0,
								"name": "Books",
								"cost": "$990"
							},
							  {
								"id": 1,
								"name": "Python", 
								"cost": "$387"
							  },
							  {
								"id": 2,
								"name": "ReactJS",
								"cost": "$974"
							  },
							  {
								"id": 3,
								"name": "DevTools",
								"cost": "$592"
							  },
							  {
								"id": 4,
								"name": "Objective C",
								"cost": "$940"
							  },
							  {
								"id": 5,
								"name": "HTML",
								"cost": "$385"
							  },
							  {
								"id": 6,
								"name": "Angular",
								"cost": "$364"
							  },
							  {
								"id": 7,
								"name": "Spring",
								"cost": "$545"
							  },
							  {
								"id": 8,
								"name": "C Programming",
								"cost": "$944"
							  },
							  {
								"id": 9,
								"name": "Java",
								"cost": "$881"
                 			  },
							  {
								"id": 10,
								"name": "JavaScript",
								"cost": "$667"
							  },
							  {
								"id": 11,
								"name": "Technology",
								"cost": "$602"
							  },
							  {
								"id": 12,
								"name": "Express",
								"cost": "$869"
							  },
							  {
								"id": 13,
								"name": "Hackathon",
								"cost": "$385"
							  },
							  {
								"id": 14,
								"name": "EBook",
								"cost": "$694"
							  },
							  {
								"id": 15,
								"name": "Email",
								"cost": "$661"
							  },
							  {
								"id": 16,
								"name": "Powerpoint",
								"cost": "$415"
							  },
							  {
								"id": 17,
								"name": "Arduino",
								"cost": "$845"
							  },
							  {
								"id": 18,
								"name": "BootStrap",
								"cost": "$411"
							  },
							  {
								"id": 19,
								"name": "WordPress",
								"cost": "$529"
							  },
							  {
								"id": 20,
								"name": "jQuery",
								"cost": "$627"
							  },
							  {
								"id": 21,
								"name": "Eclipse",
								"cost": "$842"
							  },
							  {
								"id": 22,
								"name": "ZAW",
								"cost": "$880"
							  },
							  {
								"id": 23,
								"name": "C++",
								"cost": "$866"
							  },
							  {
								"id": 24,
								"name": "Zeam",
								"cost": "$936"
							  },
							  {
								"id": 25,
								"name": "Kernel",
								"cost": "$632"
							  },
							  {
								"id": 26,
								"name": "SpringBoot",
								"cost": "$433"
							  },
							  {
								"id": 27,
								"name": "TypeScript",
								"cost": "$933"
							  },
							  {
								"id": 28,
								"name": "Udemy",
								"cost": "$683"
							  },
							  {
								"id": 29,
								"name": "NodeJS",
								"cost": "$307"
							  }
          ]
    }

}