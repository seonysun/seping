import { SOCIAL_ICONS } from '../constants/uiData';

function Footer() {
  return (
    <footer className="flex flex-col bg-[#292929] px-4 pb-16 pt-8 font-light text-white md:px-[10%]">
      <ul className="mb-6 flex w-[160px] justify-between">
        {SOCIAL_ICONS.map((icon) => (
          <li key={icon.alt}>
            <img src={icon.src} alt={icon.alt} />
          </li>
        ))}
      </ul>
      <span className="mb-3 text-xl font-medium">seping.</span>
      <p>
        문의 📨 <a href="/">csh99240@naver.com</a>
      </p>
      <p>All rights reserved.</p>
    </footer>
  );
}

export default Footer;
