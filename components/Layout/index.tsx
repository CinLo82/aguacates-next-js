import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

type Props = {
    children: React.ReactNode;
  }

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar  />
            {children}
            <Footer />
        </div>
    )
}
 export default Layout