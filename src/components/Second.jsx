import { img1 } from "../assets";
import styles, { layout } from "../style";

const Second = () => (
    <section id="products" className={`${layout.sectionReverse} `}>
        <div className={layout.sectionImgReverse}>
            <img src={img1} alt="billing" className="w-[100%] h-[100%]  relative z-[5] rounded" />
        </div>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Lotos
            </h2>
            <p className={`${styles.paragraph} mt-5 text-black`}>
                Orta sərtliyə malik olmalı, bel, kürək, baş-boyun və diz bölgələri dəstəkləeən müstəqil yay karkas sistemi olmalıdır, yatagın tam ortopedik olmasını təmin edən, yüksək sıxlıqlı süngər elementləri olmalı, üzlüyünün parçası - antibakterial, hörgülü pambıq parça. Ortopedik döşəyin ölçüləri - hündürlüyü - 25 sm (±), eni - 90 sm, uzunluq - 200 sm
            </p>
        </div>

    </section>
);

export default Second;