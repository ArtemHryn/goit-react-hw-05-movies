import { Box } from 'components/Box';
import { getReviewsById } from 'components/services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, ReviewItem, ReviewList } from './Reviews.styled';

const Reviews = () => {
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
  return reviews.length > 0 ? (
    <Box>
      <ReviewList>
        {reviews.map(({ id, author, content }) => (
          <ReviewItem key={id}>
            <Author>Author: {author}</Author>
            <p>{content}</p>
          </ReviewItem>
        ))}
      </ReviewList>
    </Box>
  ) : (
    <p>No Reviews</p>
  );
};

export default Reviews