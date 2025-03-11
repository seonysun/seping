import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { likeSlice } from '../../redux/Slice/likeSlice';

function FavoriteButton({ id }) {
  const dispatch = useDispatch();

  const isLike = useSelector((state) => state.like.includes(id));

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isLike ? likeSlice.actions.unLike(id) : likeSlice.actions.addLike(id),
        );
      }}
    >
      {isLike ? (
        <IoHeart color="red" size="28" />
      ) : (
        <IoHeartOutline color="red" size="28" />
      )}
    </button>
  );
}

export default FavoriteButton;
