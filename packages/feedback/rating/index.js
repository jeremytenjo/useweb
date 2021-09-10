import StarRatings from 'react-stars'

import { defaultProps, propTypes } from './props'

const Ratings = ({
  rating,
  onChange,
  count,
  isSelectable,
  starDimension,
  starSpacing,
  edit,
}) => (
  <StarRatings
    edit={edit}
    changeRating={onChange}
    value={rating}
    numberOfStars={count}
    isSelectable={isSelectable}
    starRatedColor={'yellow'}
    starHoverColor={'yellow'}
    starDimension={starDimension}
    starSpacing={starSpacing}
  />
)

Ratings.defaultProps = defaultProps
Ratings.propTypes = propTypes

export default Ratings
