import { Box } from "components/Box";
import {
  AdditionalInfoLink,
  AdditionInfoItem,
  AdditionInfoList,
} from './AdditionalInfo.styled';


export const AdditionalInfo = () => {
    return (
      <Box borderBottom='normal'>
        <h3>Additional Information</h3>
        <AdditionInfoList>
          <AdditionInfoItem>
            <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
          </AdditionInfoItem>
          <AdditionInfoItem>
            <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
          </AdditionInfoItem>
        </AdditionInfoList>
      </Box>
    );
}