
import Links from "./links/Links";
import NavLink from "./links/navLink/navLink";
import styles from "./navbar.module.css"
import Link from "next/link";

const Navbar = () => {
    return (
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>pmAGI</Link>
        <div>
          <Links />       
        </div>

      </div>
    )  
  };
  
  export default Navbar;