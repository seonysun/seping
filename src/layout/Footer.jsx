import { SOCIAL_ICONS } from '../constants/uiData';

function Footer() {
  return (
    <footer className="flex flex-col bg-[#3f3e3e] px-4 py-12 text-white md:px-[10%]">
      <nav className="mb-6 flex w-[160px] justify-between">
        {SOCIAL_ICONS.map((icon) => (
          <img key={icon.alt} src={icon.src} alt={icon.alt} />
        ))}
      </nav>
      <span className="mb-3 text-xl">seping</span>
      <p>
        고객센터: <a href="/">csh99240@naver.com</a>
      </p>
      <p>All rights reserved</p>
    </footer>
  );
}

export default Footer;
