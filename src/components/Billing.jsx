import { img042 } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
    <section id="products" className={`${layout.sectionReverse} `}>
      <div className={layout.sectionImgReverse}>
        <img src={img042} alt="billing" className="w-[100%] h-[100%]  relative z-[5] rounded" />
      </div>

      <div className={layout.sectionInfo}>
      <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Diamond
            </h2>
            <p className={`${styles.paragraph} mt-5 text-black`}>
                160x200 ortopedik yatak <br/>
                1-Torba yay sistemi (pocket spring)<br/>
                2-28 cm yüksəklik<br/>
                3-25 danste 6x16 cm yan dəstək sünger takozu <br/>
                4-25 danste üst və alt list sünger<br/>
                5-280 gr. Örmə kumaş<br/>
                6- 2.1  cm kapitonen sünger<br/>
                7-120 gr elyaf<br/>
                8-Özəl diamond deseni<br/>
                9-Oval hava kapsülleri<br/>
                10-yaılı yan kulplar<br/>
            </p>
        </div>
      </div>
    </section>
);

export default Billing;