import { lili } from "../assets";
import styles, { layout } from "../style";

const Lili = () => (
    <section id="products" className={`${layout.sectionReverse} `}>
        <div className={layout.sectionImgReverse}>
            <img src={lili} alt="billing" className="w-[100%] h-[100%]  relative z-[5] rounded" />
        </div>
        <div className={layout.sectionInfo}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    LİLİ
                </h2>
                <p className={`${styles.paragraph} mt-5 text-black`}>
                    160x200 ortopedik yatak <br />
                    1- 20 cm yeksəklik<br />
                    2- 900 gr sərt keçe<br />
                    3- 20 danste 6x16 cm yan dəstək sünger takozu<br />
                    4- 20 danste 3 adet iç 5x15 iç  süngər takozlu<br />
                    5- 130 gr jakar kumaş<br />
                    6- 1.4 cm kapitone sünger<br />
                    7- Özəl LİLİ çift dikiş deseni<br />
                    8- Hava komsülleri<br />
                    9- ipli yan kulplar<br />
                </p>
            </div>
        </div>
    </section>
);

export default Lili;