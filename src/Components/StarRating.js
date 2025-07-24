import React from 'react';

function StarRating({ rates }) {
    const fullStars = Math.floor(rates); // Full stars based on whole number part
    const halfStar = rates % 1 !== 0;   // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    return (
        <div className="star-rating">
            {/* Render full stars */}
            {[...Array(fullStars)].map((_, i) => (
                <img key={i} src="../images/fullStar.svg" alt="Full Star" className='starRatings' />
            ))}

            {/* Render half star, if applicable */}
            {halfStar && <img src="../images/halfStar.svg" alt="Half Star" className='starRatings' />}

            {/* Render empty stars */}
            {[...Array(emptyStars)].map((_, i) => (
                <img key={i} src="../images/emptyStar.svg" alt="Empty Star" className='starRatings' />
            ))}
        </div>
    );
}

export default StarRating;
