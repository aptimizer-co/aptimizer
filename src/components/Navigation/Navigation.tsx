import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={`${s.container} ${s.navigation}`}>
        <ul className={s.ul}>
          <li className={`${s.li} ${s.active}`}>INTRODUCTION</li>
          <li className={s.li}>VISION</li>
          <li className={s.li}>PERFORMANCE</li>
          <li className={s.li}>PARTNERS</li>
          <li className={s.li}>HISTORY</li>
          <li className={s.li}>LOCATION</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
