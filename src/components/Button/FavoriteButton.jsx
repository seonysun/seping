import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../assets/icons/common/Icon';
import { likeSlice } from '../../redux/Slice/likeSlice';

function FavoriteButton({ id, type = 'heart', size = '26' }) {
  const dispatch = useDispatch();

  const isLike = useSelector((state) => state.like.includes(id));

  const iconMap = {
    heart: {
      active: 'IoHeart',
      inactive: 'IoHeartOutline',
      color: 'red',
    },
    bookmark: {
      active: 'IoBookmarks',
      inactive: 'IoBookmarksOutline',
      color: '#555',
    },
  };
  const { active, inactive, color } = iconMap[type] || iconMap.heart;

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
      <Icon icon={isLike ? active : inactive} color={color} size={size} />
    </button>
  );
}

export default FavoriteButton;
