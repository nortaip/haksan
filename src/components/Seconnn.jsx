import { img2, img65 } from "../assets";
import styles, { layout } from "../style";

const Second = () => (
    <section id="products" className={`${layout.sectionReverse} `}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Soprano 
            </h2>
            <p className={`${styles.paragraph} mt-5 text-black`}>
                160x200 ortopedik yatak<br/>
                1- Doşek 28 cm yüksəkliktə<br/>
                2-900 gr sert keçe<br/>
                3-25 danste 6x16 cm yan destek sünger takozlu<br/>
                4-20 danste 17 adet iç 5x15 iç  süngər takozlu<br/>
                5-25 danste list sünger üst və altta<br/>
                6-280 gr.pamuk örnek kumaş <br/>
                7-2.1 cm kapitone süngeri<br/>
                8-Özəl Soprano deseni<br/>
                9-Oval hava komsülleri<br/>
                10-Yazılı yan kulplar<br/>
                11-destek sünger takoz (tam dolu)<br/>
                12-120 gr elyaf<br/>
            </p>
        </div>
        <div className={layout.sectionImgReverse}>
            <img src={img2} alt="billing" className="w-[100%] h-[100%]  relative z-[5] rounded" />
        </div>
    </section>
);

export default Second;