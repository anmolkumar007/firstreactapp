import {Link} from 'react-router-dom';
function Home(){
    return(
        <div>
            <h2>HOME</h2>
            <p><Link to='/login'>Login</Link></p>
            <p> <Link to='/medicine/all'>Fetch All Medicine</Link></p>
            <p><Link to='/medicine/add'>Add medicine</Link></p>
            
           
            
        </div>
    )
}

export default Home;