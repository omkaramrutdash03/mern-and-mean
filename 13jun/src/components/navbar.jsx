import React, { useContext } from "react";
import {useNavigate,Link} from "react-router-dom";
import SearchContext from "../searchContex";


function Navbar(){
    const navigate= useNavigate
    const {search,updateSearch}=useContext(SearchContext);
    const  handleChange=(e) =>{
        updateSearch(e.target.value);
    };
    const handleSignup =()=>{
        navigate("/signup");
    }
    return  (
        <div>
            <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e)=>handleChange(e)}
            />
            <Link to="/signin">
                <button>Sign in</button>
            </Link>
            <button onClick={handleSignup} >Sign up</button>
        </div>
    );
}
export default Navbar;