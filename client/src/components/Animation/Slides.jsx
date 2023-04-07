import React, { useState } from 'react';
import './Slides.css';
import pic1OfbestSellers from '../../assets/food-menu1.jpg';
import pic2OfbestSellers from '../../assets/food-menu2.jpg';
import pic3OfbestSellers from '../../assets/food-menu3.jpg';

export default function Slides() {


  return (
    <div className="accordian">
    <ul>
      <li>
        <div className="image-title">
          <a href="#">Lemon-Parsley Tilapia</a>
        </div>
        <a href="#">
          <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/03/traditional-korean-food-in-a-restaurant.jpg" />
        </a>
      </li>
      <li>
        <div className="image-title">
          <a href="#">Grilled Chicken and Mango Skewers</a>
        </div>
        <a href="#">
          <img src="https://www.foodiesfeed.com/wp-content/uploads/2022/11/healthy-dinner.jpg" />
        </a>
      </li>
      <li>
        <div className="image-title">
          <a href="#">Spaghetti & Meatball Skillet Supper</a>
        </div>
        <a href="#">
          <img src="https://media.istockphoto.com/id/1460087429/photo/its-more-delicious-with-good-friends.jpg?b=1&s=612x612&w=0&k=20&c=1MLVuMXUH8uLShESOF4GjZiVIi1c05G3DdE-QyQ6RpM=" />
        </a>
      </li>
      <li>
        <div className="image-title">
          <a href="#">Southwestern Pineapple Pork Chops</a>
        </div>
        <a href="#">
          <img src="https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?b=1&s=612x612&w=0&k=20&c=3YJ8cHPcY2-Hxzcbu9ZFPgm_fDegRqL77VZADwD38-A=" />
        </a>
      </li>
      <li>
        <div className="image-title">
          <a href="#">Tilapia Florentine</a>
        </div>
        <a href="#">
          <img src="https://www.foodiesfeed.com/wp-content/uploads/2022/06/feasting-on-fresh-and-healthy-vietnamese-countryside-food.jpg" />
        </a>
      </li>
      <li>
        <div className="image-title">
          <a href="#">Skillet Beef Tamales</a>
        </div>
        <a href="#">
          <img src="https://www.foodiesfeed.com/wp-content/uploads/2021/02/dining-in-an-iranian-restaurant.jpg" />
        </a>
      </li>
      <li>
        <div className="image-title">
          <a href="#">Red Pepper & Parmesan Tilapia</a>
        </div>
        <a href="#">
          <img src="https://www.foodiesfeed.com/wp-content/uploads/2022/06/feasting-on-vietnamese-traditional-food.jpg" />
        </a>
      </li>
      <li>
        <div className="image-title">
          <a href="#">Mediterranean Pork and Orzo</a>
        </div>
        <a href="#">
          <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/08/omelette-with-freshly-baked-pastry-in-a-cafe-1.jpg" />
        </a>
      </li>
      <li>
        <div className="image-title">
          <a href="#">California Burger Wraps</a>
        </div>
        <a href="#">
          <img src="https://www.foodiesfeed.com/wp-content/uploads/2020/07/variety-of-green-vegetables.jpg" />
        </a>
      </li>
      <li>
        <div className="image-title">
          <a href="#">Herbed Balsamic Chicken</a>
        </div>
        <a href="#">
          <img src="https://media.istockphoto.com/id/1186342329/photo/venison-with-apple-and-seasonal-vegetables.jpg?b=1&s=612x612&w=0&k=20&c=Q2etWJ7sdKsb8gz4-oxcodWEq1fOm-cfJejiKuDVk7s=" />
        </a>
      </li>
    </ul>
  </div>
  );
}
