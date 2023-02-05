import { Lotos3 } from "../assets";
import styles, { layout } from "../style";

const LotosA = () => (
    <section id="products" className={`${layout.sectionReverse} `}>

        <div className={layout.sectionImgReverse}>
            <a target={"_blank"} href="https://www.jiedemedical.com/product/110.html">
                <img src={Lotos3} alt="billing" className="w-[100%] h-[100%]  relative z-[5] rounded" />
            </a>
        </div>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                <a target={"_blank"} href="https://www.jiedemedical.com/product/110.html">
                    Lotos-A</a>
            </h2>
            <p className={`${styles.paragraph} mt-5 text-black`}>
                <a target={"_blank"} href="https://www.jiedemedical.com/product/110.html">
                    90x 200, 140x 200,160x200, 180x200 sm ölcüdə  ortopedik yatak, yüksek sertlik
                    1- Doşek 25 cm yüksəkliktə
                    2-900 gr sert keçe
                    3-22 danste 6x16 cm yan destek sünger takozlu,yay karkas sistemi
                    4-20 danste 9 adet iç 5x15 süngər takozlu
                    5-22 danste list sünger üst və altta
                    6-200 gr. hörgülü pamuk örnek kumaş, antibakterial, su keçirmeyen, kenarları zəncirli( asan çıxarıb yiyulması üçün), ləkə asan təmizlənən
                    7-2.1 cm kapitone süngeri
                    8-Özəl lotus deseni
                    9-Oval hava komsülleri
                    10-Yazılı yan kulplar
                </a>
            </p>
        </div>

    </section >
);

export default LotosA;