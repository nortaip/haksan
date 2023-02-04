import { bill } from "../assets";
import styles, { layout } from "../style";

const Second = () => (
    <section id="products" className={`${layout.sectionReverse} `}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Lotus
            </h2>
            <p className={`${styles.paragraph} mt-5 text-black`}>
                160x200 ortopedik yatak<br/>
                1- Doşek 24 cm yüksəkliktə<br/>
                2-900 gr sert keçe<br/>
                3-22 danste 6x16 cm yan destek sünger takozlu<br/>
                4-20 danste 9 adet iç 5x15 süngər takozlu<br/>
                5-22 danste list sünger üst və altta<br/>
                6-200 gr.pamuk örnek kumaş<br/>
                7-2.1 cm kapitone süngeri<br/>
                8-Özəl lotus deseni<br/>
                9-Oval hava komsülleri<br/>
                10-Yazılı yan kulplar<br/>
            </p>
        </div>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className="w-[100%] h-[100%]  relative z-[5] rounded" />
        </div>
    </section>
);

export default Second;