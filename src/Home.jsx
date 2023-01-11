import { Link } from "react-router-dom";


function Home(){
    return (
        <div>
            <h1>React Hooks Examples</h1>
            <Link to="/use-state">Use State</Link>
            <br/>
            <Link to="/use-effect">Use Effect</Link>
            <br/>
            <Link to="/use-context">Use Context</Link>
            <br/>
            <Link to="/use-reducer">Use Reducer</Link>
        </div>
    )
}

export default Home;