import Navbar from "../Navbar/Navbar"

type Props = {
    children: React.ReactNode;
  }

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <footer>This is the footer</footer>
        </div>
    )
}
 export default Layout