import Link from "next/link";
import style from "./main.module.scss";
import Image from "next/image";
import logoImage from "../../../public/Mido.gif";
const Main = () => {
  return (
    <div className={style.main_container}>
      <div className={style.logo_image}>
        <Image src={logoImage} alt="mido 로고" />
      </div>
      <div className={style.login_container}>
        <h3 className={style.start_message}>3초만에 시작하기</h3>
        <nav className={style.nav_container}>
          <Link href="/home" className={style.nav_item}>K</Link>
          <Link href="/home" className={style.nav_item}>N</Link>
          <Link href="/home" className={style.nav_item}>G</Link>
        </nav>
      </div>
    </div>
  );
};

export default Main;