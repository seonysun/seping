import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from '../../assets/icons/common/Icon';
import CardSkeleton from '../../components/Card/CardSkeleton';
import { MAX_LIST_LENGTH } from '../../constants/uiData';
import { Navbar } from '../../layout';
import 'swiper/css';

function SwipeContent() {
  return (
    <div className="absolute flex size-full flex-col">
      <CardSkeleton num={MAX_LIST_LENGTH.HOME.LANDING} />
      <Navbar />
    </div>
  );
}

function LockScreen() {
  const navigate = useNavigate();

  return (
    <>
      <SwipeContent />
      <Swiper
        direction="vertical"
        allowSlidePrev={false}
        onReachEnd={() => navigate('home')}
        threshold={50}
        style={{ height: '100vh', zIndex: 50 }}
      >
        <SwiperSlide className="bg-[#B9C3CC]">
          <div className="flex h-screen flex-col items-center justify-around">
            <div className="flex flex-col items-center gap-6">
              <p className="text-4xl text-white">SpeakUp</p>
              <img
                src="/speakUp.png"
                alt="speakup"
                className="h-auto w-[150px]"
              />
            </div>
            <div className="animate-spark cursor-pointer text-[#336380]">
              <Icon icon="LuChevronUp" size="80" />
              <p className="text-xl">시작하기</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide />
      </Swiper>
    </>
  );
}

export default LockScreen;
