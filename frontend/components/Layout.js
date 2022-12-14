import Header from'./Header'
import styles from'../styles/Layout.module.css'
import Footer from'./Footer'

const Layout = ({children}) => {
    return (
        <>
            <div className={styles.container}>
                    <main className={styles.main }>
                    <Header />
                        {children}
                    </main>
                <Footer />
            </div>
        </>    
    )
}

export default Layout