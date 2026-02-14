import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Coupon {
  id: number;
  icon: string;
  title: string;
  description: string;
  isFlipped: boolean;
  isRedeemed: boolean;
}

@Component({
  selector: 'app-love-coupons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './love-coupons-component.html',
  styleUrls: ['./love-coupons-component.css']
})
export class LoveCouponsComponent {
  
  coupons: Coupon[] = [
    { 
      id: 1, icon: '🤗', title: 'One Long Hug', 
      description: 'Redeem for an extra long, uninterrupted hug whenever you need one.', 
      isFlipped: false, isRedeemed: false 
    },
    { 
      id: 2, icon: '🍽️', title: 'Dinner Date Night', 
      description: "I'll cook your favorite meal (or we order in 😏).", 
      isFlipped: false, isRedeemed: false 
    },
    { 
      id: 3, icon: '🎬', title: 'Movie Marathon', 
      description: 'You get to pick the movies and the snacks tonight!', 
      isFlipped: false, isRedeemed: false 
    },
    { 
      id: 4, icon: '😴', title: 'Lazy Day Together', 
      description: 'No chores, no plans. Just us relaxing in bed or on the couch all day.', 
      isFlipped: false, isRedeemed: false 
    },
    { 
      id: 5, icon: '🛍️', title: 'Shopping Spree', 
      description: 'A day out shopping for whatever your heart desires (within reason! 😉).', 
      isFlipped: false, isRedeemed: false 
    },
    { 
      id: 6, icon: '✈️', title: 'Adventure Day', 
      description: 'Let\'s go somewhere new! A road trip, a hike, or exploring a new town.', 
      isFlipped: false, isRedeemed: false 
    },
  ];

  toggleFlip(coupon: Coupon) {
    coupon.isFlipped = !coupon.isFlipped;
  }

  redeemCoupon(coupon: Coupon, event: Event) {
    event.stopPropagation(); // Prevents the card from flipping back when button is clicked
    coupon.isRedeemed = true;
  }
}