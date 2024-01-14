import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About pmAGI</h2>
          <h1 className={styles.title}>We create AI tools and agents that will change the way Construction industry.</h1>
          <p className={styles.description}>A 3D model design of the Empire State Building morphing into a basketball net, representing 
            the New York Knicks. The building is detailed, with its iconic Art Deco architecture, and 
            transitions smoothly into the orange and blue colors of the Knicks. The basketball net is made of silver 
            metal, with a hoop that glows in the Knicks colors.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>60+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>80+</h1>
              <p>Countries of practice</p>
            </div>
            <div className={styles.box}>
              <h1>40K+</h1>
              <p>Users</p>
            </div>
          </div>
        </div>
        

        
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img}/>
        </div>
      </div>
    )
  };
  
  export default AboutPage;