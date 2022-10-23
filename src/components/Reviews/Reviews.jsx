import { Box } from 'components/Box';
import { getReviewsById } from 'components/services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReview] = useState(null);
  useEffect(() => {
    async function getReviews() {
      const reviews = await getReviewsById(movieId);
      setReview(reviews);
    }
    getReviews();
  }, [movieId]);
  if (!reviews) {
    return null;
  }
  console.log(reviews);
  return reviews.length > 0 ? (
    <Box>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </Box>
  ) : (
    <p>No Reviews</p>
  );
};
