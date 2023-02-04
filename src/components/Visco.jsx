import { visco2 } from "../assets";
import styles, { layout } from "../style";

const Visco = () => (
    <section id="products" className={`${layout.sectionReverse} `}>
        <div className={layout.sectionImgReverse}>
            <img src={visco2} alt="billing" className="w-[100%]  relative z-[5] rounded" />
        </div>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Visco Lux
            </h2>
            <p className={`${styles.paragraph} mt-5 text-black`}>
                160x200 visco love döşek<br />
                Torba paket yay sistemi<br />
                25 dans alt List süngeri<br />
                25 dans yan destek takoz süngerleri<br />
                5 cm 50 dans memory visco<br />
                380 Gr özel dokuma elastiki kumaş<br />
                2 sm kapitone kumaş süngeri<br />
                120 Gr elyaf sintepon                Ped<br />
                Özel hava kapsülleri<br />
                Kulp tutacaklar<br />
                30 cm hündürlük<br />
            </p>
        </div>

    </section>
);

export default Visco;