import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Review() {
  const [reviews, setReviews] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  async function getReviews() {
    const options = {
      url: "https://backend.smartvision4p.com/hotel/public/api/testimonials",
      method: "GET",
    };

    let { data } = await axios.request(options);
    setReviews(data.data);
    console.log(reviews);
  }

  useEffect(() => {
    getReviews();
  }, []);
  return (
    <>
      <div className="bg-slate-200 mt-12 sm:w-full sm:px-6 py-6 rounded-lg">
        <h2 className="text-center text-xl font-bold mb-4 text-cyan-500">
          Good news from far away
        </h2>
        <p className="text-center text-lg">
          Let's see what people think of Chisfis
        </p>
        <div className="carousel w-full">
          {reviews &&
            reviews.map((review) => (
              <div
                id={`item ${review.id}`}
                key={review.id}
                className="carousel-item w-full flex flex-col justify-center items-center"
              >
                <h2 className="mb-4">{review.text}</h2>
                <p className="mb-4">{review.title}</p>
              </div>
            ))}
        </div>

        <div className="flex w-full justify-center  gap-2 py-2">
          {reviews &&
            reviews.map((review) => (
              <a
                href={`#item ${review.id}`}
                onClick={() => {
                  setCurrentSlide(review.id);
                }}
                key={review.id}
              >
                <i className="fa-solid fa-circle text-white"></i>
              </a>
            ))}
        </div>
      </div>
    </>
  );
}
