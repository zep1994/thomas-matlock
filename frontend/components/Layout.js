import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer"; // if you have one

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
