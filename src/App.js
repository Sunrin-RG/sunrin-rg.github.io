import Introduce from "./components/Introduce";
import Curriculum from "./components/Curriculum";
import Award from "./components/Award";
import Apply from "./components/Apply";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Video from "./components/Video";
import First from "./components/First";

function App() {
    return (
        <div className="App">
            <Header />
            <First />
            <Introduce />
            <Curriculum />
            <Video />
            <Award />
            <Apply />
            <Footer />
        </div>
    );
}

export default App;
