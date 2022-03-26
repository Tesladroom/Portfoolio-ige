import { Link, Route, Router, Routes } from 'react-router-dom';
import './Avaleht.css';




function Avaleht() {
    return(<div>
<div className="main-link-list"> 
    <div className="main-link"> 
           <img src='Portofoolio.jpg' /> 
           <p><font size="+2">Tere! Minu nimi on Kristjan ja see on minu esimene oma loodud Portfoolio leht :)</font></p> 
    </div> 
</div> 
                <center>
                <div id="banner">
             <Link to="/Kursused">
             <button><img src='courses.jpg' alt='Kursused' className='kursus'/></button>
             </Link>
             <Link to="/Hobid">
             <button><img src='hobie.jpg' alt='Hobid' className='hobi'/></button>
             </Link>
             <Link to="/Minutööd">
             <button><img src='Töö.jpg' alt='Tööd' className='tööwork'/></button>
             </Link>
             </div>
        </center>
 <div>
     <center>
     <p>

     <font size="+2">Siit alt leiate React koolituse video.</font>



     </p>
 <iframe width="300" height="200" src="https://www.youtube.com/embed/Ke90Tje7VS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className='youtube-button' href="http://youtube.com"/>
          </center>    
     </div>        
        </div> 
        )
   }
   
   export default Avaleht ;