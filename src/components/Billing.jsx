import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="products" className={`${layout.sectionReverse} `}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%]  relative z-[5] rounded" />
    </div>

    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
        Biz müxtəlif yuxu ehtiyaclarına cavab verən geniş çeşiddə döşəklər təklif edirik
      </h2>
      <p className={`${styles.paragraph} mt-5 text-black`}>
        İstər bədəninizə kontur yaradan yaddaş köpüklü döşək,
        istərsə də köpüyün rahatlığını rulonların dəstəyi ilə birləşdirən hibrid döşək axtarırsınızsa,
        biz sizi əhatə etdik.
      </p>
    </div>
  </section>
);

export default Billing;