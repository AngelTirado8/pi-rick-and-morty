import React from "react";
import styles from './About.module.css'




const About =() => {
    return (
        <div className={styles.divContainer}>
            <div className={styles.sobremi}>
                <h1 className={styles.about}>
                Hola soy 
                <br />
                    <b>Angel Tirado</b>
                </h1>
                <p>
                Futuro Desarollador full stack, gracias por tomarte el tiempo de ver
                mi pagina web y espero te haya gustado nos vemos en el M4{" "}
            </p>

            {/* <img src={fotoAngel} alt="" /> */}
            </div>
        </div>
    )
}

export default About;