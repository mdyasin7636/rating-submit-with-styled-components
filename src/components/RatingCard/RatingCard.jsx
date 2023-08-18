import { H1, RatingCardWrapper, RatingIconBox } from "./ratingCardStyle";
import Star from "../../assets/star.svg";

const RatingCard = () => {
  return (
    <RatingCardWrapper>
      <RatingIconBox>
        <img src={Star} alt="" />
      </RatingIconBox>
      <H1>How did we do?</H1>
    </RatingCardWrapper>
  );
};

export default RatingCard;
