import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =[
    {"id":1, "category": "bikes", "caption": " Bike ", "url":"assets/img/bike_1.jpg"},
    {"id":2, "category": "bikes", "caption": "Bike", "url":"assets/img/bike_2.jpg"},
    {"id":3, "category": "bikes", "caption": "Bike", "url":"assets/img/bike_3.jpg"},
    {"id":4, "category": "bikes", "caption": "Bike", "url":"assets/img/bike_4.jpg"},
    {"id":5, "category": "bikes", "caption": "Bike", "url":"assets/img/bike_5.jpg"},
    {"id":6, "category": "cars", "caption": "Car", "url":"assets/img/car_1.jpg"},
    {"id":7, "category": "cars", "caption": "Car", "url":"assets/img/car_2.jpg"},
    {"id":8, "category": "cars", "caption": "Car", "url":"assets/img/car_3.jpg"},
    {"id":9, "category": "cars", "caption": "Car", "url":"assets/img/car_4.jpg"},
    {"id":10, "category": "cars", "caption": "Car", "url":"assets/img/car_5.jpg"},
    {"id":11, "category": "cars", "caption": "Car", "url":"assets/img/car_6.jpg"},
    {"id":12, "category": "cars", "caption": "Car", "url":"assets/img/car_7.jpg"},
    {"id":13, "category": "others", "caption": "Helmet", "url":"assets/img/helmet_1.jpg"},
    {"id":14, "category": "others", "caption": "Gloves", "url":"assets/img/gloves.jpg"},
    {"id":15, "category": "others", "caption": "goggles", "url":"assets/img/goggles.jpg"},
    {"id":16, "category": "others", "caption": "towel", "url":"assets/img/towel.jpg"},
    {"id":17, "category": "others", "caption": "wheel", "url":"assets/img/wheel.jpg"}
]
