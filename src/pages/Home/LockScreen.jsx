import { LuChevronUp } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Header, Navbar } from '../../layout';
import ListFallBack from '../List/ListFallback';
import 'swiper/css';

function SwipeContent() {
  return (
    <div className="flex h-svh flex-col">
      <Header />
      <ListFallBack num={6} />
      <Navbar />
    </div>
  );
}

function LockScreen() {
  const navigate = useNavigate();

  return (
    <Swiper
      direction="vertical"
      // allowSlidePrev={false}
      onReachEnd={() => navigate('home')}
      threshold={50}
      style={{ height: '100vh' }}
    >
      <SwiperSlide className="flex flex-col items-center justify-around bg-[#ac72b2]">
        <p className="text-4xl text-white">seping.</p>
        <div className="animate-spark text-[#553858]">
          <LuChevronUp size="80" />
          <p className="text-xl">시작하기</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <SwipeContent />
      </SwiperSlide>
    </Swiper>
  );
}

export default LockScreen;
