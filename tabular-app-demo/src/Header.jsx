import React,{Component} from "react";
class Header extends Component
{
    render()
    {
        return(
             <>
             <div className="header-app">
                <div className="call-us">Call Us :(+91 9662725041)</div>
                <div className="search-box">
                    <input type="text" placeholder="Search here .!!" />
                </div>
                <div className="account">
                    <button type="button"><span>Login </span></button>
                    <button type="button" ><span>Sign Up </span></button>
                </div>
             </div>

             </>

        )

    }
    
}
export default Header    