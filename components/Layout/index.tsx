import Navbar from "../Navbar/Navbar"
import style from './layout.module.css'

type Props = {
    children: React.ReactNode;
  }

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={style.container}>
            <Navbar />
            {children}
            <footer>This is the footer</footer>
        </div>
    )
}
 export default Layout