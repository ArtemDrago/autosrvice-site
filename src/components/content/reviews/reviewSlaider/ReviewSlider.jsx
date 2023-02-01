import { Carousel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './styleReviewSlider.scss'
import { reviews } from '../../../../data/data';
import { useMemo } from 'react';
import left from '../../../../sorce/icons//review/left.svg'
import rigth from '../../../../sorce/icons/review/rigth.svg'

function ReviewSlaider() {
   const [index, setIndex] = useState(0);
   const [imgLeng, setImgLeng] = useState([])
   const [userReview, setUserReview] = useState([])

   const userContent = () => {
      const curArr = reviews.filter(el =>
         el.id == index + 1
      )
      setUserReview(curArr)
   }

   useEffect(() => {
      userContent()
      setImgLeng(reviews.length)
   }, [])

   useMemo(() => {
      userContent()
   }, [index])

   const next = () => {
      if (index + 1 > imgLeng - 1) {
         setIndex(0)
      } else {
         setIndex(index + 1)
      }
   }
   const prev = () => {
      if (index === 0) {
         setIndex(imgLeng - 1)
      } else {
         setIndex(index - 1)
      }
   }
   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   return (
      <div className="reviewSlider-container">
         <div className='reviewSlider-content'>
            <div className="reviewSlider-control">
               <div className="reviewSlider-userSlide">
                  {userReview.length !== 0 ?
                     <>
                        <div className="reviewSlider-userImg">
                           <img src={userReview[0].user} alt="" />
                        </div>
                        <div className='user-info'>
                           <div className="reviewSlider-inform">
                              <div className="reviewSlider-userName">
                                 {userReview[0].autor}
                              </div>
                              <div className="reviewSlider-rewiewData">
                                 {userReview[0].data}
                              </div>
                              <div className="reviewSlider-stars">
                                 <img src={userReview[0].star} alt="" />
                              </div>
                           </div>
                        </div>
                     </>
                     :
                     <div>not inform</div>
                  }
               </div>
               <div className='reviewSlider-btns'>
                  <button
                     onClick={prev}
                     className='reviewSlider-btn'
                  >
                     <img src={left} alt="" style={{ color: 'white' }} />
                  </button>
                  <button
                     onClick={next}
                     className='reviewSlider-btn'
                  >
                     <img src={rigth} alt="" style={{ color: 'white' }} />
                  </button>
               </div>
            </div>
            <Carousel
               interval={null}
               indicators={false}
               controls={false}
               activeIndex={index}
               onSelect={handleSelect}
            >
               {reviews.map(el =>
                  <Carousel.Item
                     key={el.id}
                     className="review-text"
                  >
                     {el.text}

                  </Carousel.Item>
               )}
            </Carousel>
         </div>
      </div>
   );
}
export default ReviewSlaider;