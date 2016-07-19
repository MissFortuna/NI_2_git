import { Component } from '@angular/core';
export class Item{
    name: string;
    itemPrice: number;
    quantity: number;
    url: string;
}

 const ITEMS: Item[]= [
 {name: 'Wacom Cintiq 22HD Touch', itemPrice:74975, quantity:2,url: 'http://i2.rozetka.ua/goods/11561/Wacom_Cintiq_22HD_Touch_images_11561250.jpg'},
 {name: 'Wacom Cintiq 25HD Touch', itemPrice:80000, quantity:1,url: 'http://i2.rozetka.ua/goods/11561/Wacom_Cintiq_22HD_Touch_images_11561250.jpg'},
 {name: 'Wacom Cintiq 10HD Touch', itemPrice:60000, quantity:23, url: 'http://i2.rozetka.ua/goods/11561/Wacom_Cintiq_22HD_Touch_images_11561250.jpg'}
    ];

