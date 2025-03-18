import { LuChevronUp } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navbar } from '../../layout';
import ListFallback from '../List/ListFallback';
import 'swiper/css';

function SwipeContent() {
  return (
    <div className="absolute flex size-full flex-col">
      <ListFallback num={6} />
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
        <SwiperSlide className="bg-[#ac72b2]">
          <div className="flex h-screen flex-col items-center justify-around">
            <p className="text-4xl text-white">seping.</p>
            <div className="animate-spark cursor-pointer text-[#553858]">
              <LuChevronUp size="80" />
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
