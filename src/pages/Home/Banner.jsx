function Banner() {
  return (
    <article className="bg-gradient-to-br from-[#D4DDE2] via-[#B7CBD5] to-[#6B8791] px-6 py-[5vh] text-center text-white md:py-[8vh]">
      <h1 className="text-3xl font-extrabold leading-snug md:text-5xl">
        떨리는 말, <br />
        여기에선 괜찮아요
      </h1>
      <p className="mt-6 font-light leading-relaxed sm:text-lg">
        말하기가 두려운 사람들을 위한 <br />
        자유로운 연습 공간 <span className="font-normal">SpeakUp</span>
      </p>
    </article>
  );
}

export default Banner;
