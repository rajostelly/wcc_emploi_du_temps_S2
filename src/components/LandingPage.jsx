import React, { useState } from "react";
import '../css/landingPage.css'
import { connect } from "react-redux";
import { updateTimetable } from "../redux/actions/actions";
import { generateTimetable} from '../utils/timetableUtils'
import horloge from '../assets/lhorloge.png'
import fleche from '../assets/fleche-droite.png'
import time from '../assets/prime-time.png'

function LandingPage({ timetable, updateTimetable }) {
    const [subjects, setSubjects] = useState([
      { value: 'SGBD', duration: 2 },
      { value: 'Admin système et réseau', duration: 2 },
      { value: 'Développement WEB', duration: 2 },
      { value: 'Algorithme', duration: 2 },
      { value: 'Communication', duration: 2 },
      { value: 'Anglais', duration: 2 }
    ]);
  
    const handleDurationChange = (subjectIndex, duration) => {
      const updatedSubjects = [...subjects];
      updatedSubjects[subjectIndex].duration = parseInt(duration);
      setSubjects(updatedSubjects);
    };
  
    const handleGenerateTimetable = (e) => {
        e.preventDefault();
      const generatedTimetable = generateTimetable(subjects);
      updateTimetable(generatedTimetable);
    };
  
    const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  
    return (
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
                <form onSubmit={handleGenerateTimetable}>
                    <p>Entrez le nombre d'heure par matière</p>
                    <div>
                        {subjects.map((subject, index) => (
                            <div className="select" key={index}>
                                <label className="label">{subject.value} Duration:</label>
                                <select 
                                    value={subject.duration} 
                                    onChange={(e)=> handleDurationChange(index, e.target.value)
                                }>
                                    <option value="2">2 heures</option>
                                    <option value="4">4 heures</option>
                                    <option value="6">6 heures</option>
                                </select>
                            </div>
                        ))}
                    </div>
                    
                    
                    <button type="submit"> GENERER </button>
                </form>
            </div>
        </div>

        <article>
            <h2 className="titleTable">Votre emploi du temps de la semaine</h2>
            <div class='tab'>
                <table border='0' cellpadding='0' cellspacing='0'>
                    <thead>
                        <tr class='days'>
                            <th className="time">Jour \ Heure</th>
                            <th className="time">08h-10h</th>
                            <th className="time">10h-12h</th>
                            <th className="time">14h-16h</th>
                            <th className="time">16h-18h</th>
                        </tr>
                    </thead>

                    <tbody>
                        {timetable.map((row, index) => (
                            <tr key={index}>
                                <th className="time">{joursSemaine[index]}</th>
                                {row.map((subject, colIndex) => (
                                    <td key={colIndex}>{subject}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

               </table>
            </div>

        </article>      
    </>
    );
  }
  
const mapStateToProps = (state) => {
    return {
      timetable: state.timetable
    };
};
  
const mapDispatchToProps = {
    updateTimetable
};
  
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
  


