import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import { PlayerProvider } from "../../Context/PlayerProvider";
import { CurrentPlayerProvider } from "../../Context/CurrentPlayerProvider";

const Layout = () => {
    return (
        <div className="container-fluid">
            <PlayerProvider>
                <CurrentPlayerProvider>
                        <Navbar />
                        <Content />
                        <Footer />
                </CurrentPlayerProvider>
            </PlayerProvider>
        </div>
    )
}

export default Layout;