import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { reviews } from '../../../data/data';
import ReviewSlaider from './reviewSlaider/ReviewSlider';
import './styleReviews.scss'

function Reviews() {
   const [midleRating, setMidleRating] = useState(0)

   useEffect(() => {
      const ratingLength = reviews.length
      let curNumber = 0
      for (let i = 0; i <= ratingLength - 1; i++) {
         curNumber += reviews[i].rating
      }
      const totalRaiting = curNumber / ratingLength
      setMidleRating(totalRaiting.toFixed(1))
   }, [])

   return (
      <section className='review-container container-main'>
         <div className="review-titleBlock">
            <h2 className="titleBlock-title">Отзывы пользователей об Автоцентре</h2>
            <div className="titleBlock-box">
               <div className="titleBlock-rating">{midleRating}</div>
               <div className="titleBlock-text">Средняя оценка</div>
            </div>
         </div>
         <ReviewSlaider />
      </section>
   );
}

export default Reviews;