import { RatingCardWrapper } from "./ratingCardStyle";
import Star from '../../assets/star.svg'

const RatingCard = () => {
    return (
        <RatingCardWrapper>
           <div>
            <img src={Star} alt="" />
           </div>
        </RatingCardWrapper>
    );
};

export default RatingCard;