import Image from "next/image";
import styles from "./home.module.css"


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Speed Up your Contract Analysis by the Power of AI</h1>
        <p className={styles.description}>
          This product is designed and serviced by the TJU International Contracting Team. 
          For more information, please see contact page.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImage} />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImage} />
      </div>

    </div>
  )
};

export default Home;