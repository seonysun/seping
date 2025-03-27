/* eslint-disable no-param-reassign */
import { useDispatch } from 'react-redux';
import defaultImage from '../../assets/images/defaultImg.png';
import useLazyImage from '../../hooks/useLazyImage';
import { likeSlice } from '../../redux/Slice/likeSlice';
import Button from '../Button/Button';

function ModalCard({ item }) {
  const dispatch = useDispatch();
  const imgRef = useLazyImage();

  return (
    <section className="flex gap-2 p-2">
      <div className="py-2">
        <img
          ref={imgRef}
          src={defaultImage}
          data-src={item.thumbnail}
          alt={item.title}
          onError={(e) => {
            e.currentTarget.src = defaultImage;
          }}
          className="size-28 md:size-44"
        />
      </div>
      <div className="flex flex-col justify-between py-4">
        <span className="line-clamp-3">{item.title}</span>
        <p className="flex justify-between">
          <span className="text-2xl font-semibold">{`$${item.price.toLocaleString()}`}</span>
          <Button
            text="삭제"
            onClick={() => dispatch(likeSlice.actions.unLike(item.id))}
          />
        </p>
      </div>
    </section>
  );
}

export default ModalCard;
