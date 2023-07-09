import React from "react";
import '../css/landingPage.css'
import horloge from '../assets/lhorloge.png'
import fleche from '../assets/fleche-droite.png'
import time from '../assets/prime-time.png'



class LandingPage extends React.Component{
    render(){
        return(
            <> 
                <div className="navbar">
                    <nav className="nav">
                        <p className="logo">AR Coding</p>
                        <div className="images">
                            <img src={horloge} alt="Home" />
                        </div>
                    </nav>
                </div>
               
                <div className="landingPage">
                    <div className="title">
                        <h1>Générer facilement un emploi du temps sur notre site web</h1>  
                        <div className="text">
                            <p>Veuillez remplir la formulaire suivant</p>
                            <img src={fleche} alt="fleche d'indication" />
                        </div>  
                        <div className="iconsTime">
                            <img src={time} alt="Time"/>
                            <img src={time} alt="Time"/>
                            <img src={time} alt="Time"/>
                        </div>
                    </div>

                    <div className="forms">
                        <h2>Formulaire :</h2>
                        <form>
                            <p>Entrez le nombre d'heure par matière</p>
                            <div className="select">
                                <label for="sgbd">SGBD :</label>
                                <select name="sgbd" id="sgbd">                         
                                    <option value="1">2h</option>
                                    <option value="2">4h</option>
                                    <option value="3">6h</option>                           
                                </select>
                            </div>
                            <div className="select">
                                <label for="adminSR">Administration système et réseau :</label>
                                <select name="adminSR" id="adminSR">                         
                                    <option value="1">2h</option>
                                    <option value="2">4h</option>
                                    <option value="3">6h</option>                           
                                </select>
                            </div>
                            <div className="select">
                                <label for="devWeb">Développement web :</label>
                                <select name="devWeb" id="devWeb">                         
                                    <option value="1">2h</option>
                                    <option value="2">4h</option>
                                    <option value="3">6h</option>                           
                                </select>
                            </div>
                            <div className="select">
                                <label for="algo">Algorithme :</label>
                                <select name="algo" id="algo">                         
                                    <option value="1">2h</option>
                                    <option value="2">4h</option>
                                    <option value="3">6h</option>                           
                                </select>
                            </div>
                            <div className="select">
                                <label for="commucation">Communication :</label>
                                <select name="communication" id="communication">                         
                                    <option value="1">2h</option>
                                    <option value="2">4h</option>
                                    <option value="3">6h</option>                           
                                </select>
                            </div>
                            <div className="select">
                                <label for="anglais">Anglais :</label>
                                <select name="anglais" id="anglais">                         
                                    <option value="1">2h</option>
                                    <option value="2">4h</option>
                                    <option value="3">6h</option>                           
                                </select>
                            </div>
                            <button type="submit"> GENERER </button>
                        </form>
                    </div>
                </div>

                <article>
                    <h2 className="titleTable">Votre emploi du temps de la semaine</h2>
                    <div class='tab'>
                        <table border='0' cellpadding='0' cellspacing='0'>
                            <tr class='days'>
                                <th></th>
                                <th>Lundi</th>
                                <th>Mardi</th>
                                <th>Mercredi</th>
                                <th>Jeudi</th>
                                <th>Vendredi</th>
                                <th>Samedi</th>
                            </tr>
                            <tr>
                                <td class='time'>08H - 10h</td>
                                <td id='c1' className="">-</td>
                                <td id='c2' className="">-</td>
                                <td id='c3' className="">-</td>
                                <td id='c4' className="">-</td>
                                <td id='c5' className="">-</td>
                                <td id='c6' className="">-</td>
                            </tr>
                            <tr>
                                <td class='time'>10h - 12h</td>
                                <td id='c7'></td>
                                <td id='c8'  className="">-</td>
                                <td id='c9'  className="">-</td>
                                <td id='c10' className="">-</td>
                                <td id='c11' className="">-</td>
                                <td id='c12' className="">-</td>
                            </tr>

                            <tr>
                                <td colSpan={7} className="break-time">PAUSE DEJEUNER</td>
                            </tr>

                            <tr>
                                <td class='time'>14h -16h</td>
                                <td id='c13' className="">-</td>
                                <td id='c14' className="">-</td>
                                <td id='c15' className="">-</td>
                                <td id='c16' className="">-</td>
                                <td id='c17' className="">-</td>
                                <td id='c18' className="">-</td>
                            </tr>
                            <tr>
                                <td class='time'>16h - 18h</td>
                                <td id='c19'></td>
                                <td id='c20' className="">-</td>
                                <td id='c21' className="">-</td>
                                <td id='c22' className="">-</td>
                                <td id='c23' className="">-</td>
                                <td id='c24' className="">-</td>
                            </tr>                           
                       </table>
                    </div>

                </article>
            
  
               

            </>
         
        );
    }
}

export default LandingPage;