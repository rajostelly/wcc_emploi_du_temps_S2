import React from "react";
import facebook from '../assets/facebook.png'
import gmail from '../assets/gmail.png'
import github from '../assets/github.png'
import '../css/footer.css'
class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                <div className="icons">
                    <a href="https://example.com" className="button">
                        <img src={facebook} alt="Logo facebook"></img>                       
                    </a>
                    <a href="https://example.com" className="button">
                        <img src={github} alt="Logo facebook"></img>                        
                    </a>
                    <a href="https://example.com" className="button">
                        <img src={gmail} alt="Logo facebook"></img>
                    </a>
                </div>
            </footer>
        );
    }

}
export default Footer;