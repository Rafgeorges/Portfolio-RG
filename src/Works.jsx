
import ReactModal from "react-modal"
import { useState } from "react"
import Contact from "./Contact";
ReactModal.setAppElement('#root');

import kasa_thumbnail from '../public/assets/WORKS/Kasa/thumbnail.jpg'
import work1_img_1 from '../public/assets/WORKS/Kasa/kasa_img_1.jpg'
import work1_img_2 from '../public/assets/WORKS/Kasa/kasa_img_2.jpg'
import work1_img_3 from '../public/assets/WORKS/Kasa/kasa_img_3.jpg'
import work1_img_4 from '../public/assets/WORKS/Kasa/kasa_img_4.jpg'


export default function Works(){

//Modale ouverture / fermeture - 1
    const [modalState1, setModalState1] = useState(false);
   function Openmodale1(){
        setModalState1((modalState1 === false)? true : false)
   }
 function CloseModal1(){
        setModalState1((modalState1 === true)? false : true)
   }


//Modale ouverture / fermeture - 2
const [modalState2, setModalState2] = useState(false);
   function Openmodale2(){
        setModalState2((modalState2 === false)? true : false)
   }
   function CloseModal2(){
        setModalState2((modalState2 === true)? false : true)
   }

  //Modale ouverture / fermeture - 3
const [modalState3, setModalState3] = useState(false);
function Openmodale3(){
     setModalState3((modalState3 === false)? true : false)
}
function CloseModal3(){
     setModalState3((modalState3 === true)? false : true)
}

//Modale ouverture / fermeture - 4
const [modalState4, setModalState4] = useState(false);
   function Openmodale4(){
        setModalState4((modalState4 === false)? true : false)
   }
   function CloseModal4(){
        setModalState4((modalState4 === true)? false : true)
   }


   
return <section className="works_section">
               
            <h2>MES TRAVAUX</h2>
            <div className="work_container">
                
{/* WORK 1 */}
                <div>
                        <div className="work_tags">
                                <ul>
                                        <li className="li_dev">Développement</li>
                                        <li className="li_webdes">Web Design</li>

                                </ul>  
                        </div>
                        <div className="work_thumbnail work1" onClick={Openmodale1}></div>
                        <ReactModal                       
                                isOpen={modalState1} 
                                onRequestClose={CloseModal1}
                                shouldCloseOnOverlayClick={true}
                                shouldFocusAfterRender={true}
                                shouldReturnFocusAfterClose={true}
                                preventScroll={true}
                                shouldCloseOnEsc={true}
                                bodyOpenClassName={"no_scroll"}
                                >
                                        <div className="modal_container">
                                                <img className='modal_works_samples' src={kasa_thumbnail} alt='work1_thumbnail'/>
                                                <div className="modal_container_topright">
                                                        <div className="modal_description">
                                                                <div className="modal_titles">
                                                                        <h3>Projet 1</h3> <h3>2023</h3>
                                                                </div>   
                                                                        <p>Projet d’étude dans le cadre de ma formation avec React. Création du front end d'un site de location type AirBNB. Fait entièrement en React avec intégration d'une base de donnée.
                                                                                <br></br>Intégration d'un système de notation dynamique, de tags, d'animations CSS, d'un carroussel ainsi que gestion des routes React et des erreurs.
                                                                        </p>
                                                                <ul>
                                                                        <li className="li_dev">React</li>
                                                                        <li className="li_dev">Javascript</li>
                                                                        <li className="li_webdes">CSS</li>
                                                                        <li className="li_webdes">SCSS / SASS</li>
                                                                </ul>              
                                                        </div>
                                                </div>
                                                <div className="modal_works_samples">
                                                        <img src={work1_img_1} alt='work1_img_1'/>
                                                </div>   

                                                <div className="modal_works_samples">
                                                        <img src={work1_img_2} alt='work1_img_2'/>
                                                </div>     

                                                <div className="modal_works_samples">
                                                        <img src={work1_img_3} alt='work1_img_3'/>
                                                </div>     

                                                <div className="modal_works_samples">
                                                        <img src={work1_img_4} alt='work1_img_4'/>

                                                </div>                                  
                                        </div>  



                                
                        </ReactModal>
                        
                </div>
                        
{/* WORK 2 */}
<div>
                        <div className="work_tags">
                                <ul>
                                        <li className="li_dev">Développement</li>
                                        <li className="li_webdes">Web Design</li>
                                        <li className="li_graph">Dir. Artistique</li>

                                </ul>  
                        </div>
                        <div className="work_thumbnail work2" onClick={Openmodale2}></div>
                        <ReactModal                       
                                isOpen={modalState2} 
                                onRequestClose={CloseModal2}
                                shouldCloseOnOverlayClick={true}
                                shouldFocusAfterRender={true}
                                shouldReturnFocusAfterClose={true}
                                preventScroll={true}
                                shouldCloseOnEsc={true}
                                bodyOpenClassName={"no_scroll"}
                                >
                                        <div className="modal_container">
                                                <img className='modal_works_samples' src="src/assets/WORKS/Galat/galat_thumbnail.jpg"/>
                                                <div className="modal_container_topright">
                                                        <div className="modal_description">
                                                                <div className="modal_titles">
                                                                        <h3>Voyages Galatée</h3> 
                                                                        <h3>2022</h3>
                                                                </div>   
                                                                        <p>Site réalisé dans le cadre d'une activité de tourisme culturel axé autour de la Belle époque en Europe.
                                                                        <br></br> Réalisation du site avec Wordpress et Elementor Pro, avec des ajouts. </p>
                                                                        <p> L'objectif principal du site est de donner le goût du voyage, un engouement pour la découverte cutlurelle du continent. Il contient des descriptions de séjours culturels, des informations sur les déroulements, conditions d'utilisations, moyens de contacter,
                                                                        le tout dans un esthétisme soigné qui évoque l'Art, l'Histoire et l'Architecture.
                                                                        </p>
                                                                <ul>
                                                                        <li className="li_dev">HTML</li>
                                                                        <li className="li_webdes">CSS</li>
                                                                        <li className="li_dev">Wordpress</li>
                                                                        <li className="li_webdes">Elementor</li>
                                                                        <li className="li_graph">Photoshop</li>
                                                                        <li className="li_graph">Illustrator</li>
                                                                </ul>              
                                                        </div>
                                                </div>
                                                <div className="modal_works_samples">
                                                        <img src="src/assets/WORKS/Galat/galat_img_1.jpg"/>
                                                </div>   

                                                <div className="modal_works_samples">
                                                        <img src="src/assets/WORKS/Galat/galat_img_2.jpg"/>
                                                </div>     

                                                <div className="modal_works_samples">
                                                        <img src="src/assets/WORKS/Galat/galat_img_3.jpg"/>
                                                </div>     

                                                <div className="modal_works_samples">
                                                        <img src="src/assets/WORKS/Galat/galat_img_4.jpg"/>
                                                </div>        

                                                <div className="modal_works_samples_wide">
                                                        <img src="src/assets/WORKS/Galat/Artboard 3.png"/>
                                                </div>     

                                                 <div className="modal_works_samples_wide">
                                                        <img src="src/assets/WORKS/Galat/Artboard 5 copie.png"/>
                                                </div>  

                                                 <div className="modal_works_samples_wide">
                                                        <img src="src/assets/WORKS/Galat/Artboard 5.png"/>
                                                </div>  

                                                 <div className="modal_works_samples_wide">
                                                        <img src="src/assets/WORKS/Galat/Artboard 7.png"/>
                                                </div>    

                                                 <div className="modal_works_samples_wide">
                                                        <img src="src/assets/WORKS/Galat/Artboard 10.png"/>
                                                </div> 

                                                 <div className="modal_works_samples_wide">
                                                        <img src="src/assets/WORKS/Galat/Artboard 9.png"/>
                                                </div>                    
                                        </div>  



                                
                        </ReactModal>
                        
</div>




{/* WORK 3 */}
<div>
                        <div className="work_tags">
                                <ul>
                                        <li className="li_dev">Développement</li>
                                </ul>  
                        </div>
                        <div className="work_thumbnail work3" onClick={Openmodale3}></div>
                        <ReactModal                       
                                isOpen={modalState3} 
                                onRequestClose={CloseModal3}
                                shouldCloseOnOverlayClick={true}
                                shouldFocusAfterRender={true}
                                shouldReturnFocusAfterClose={true}
                                preventScroll={true}
                                shouldCloseOnEsc={true}
                                bodyOpenClassName={"no_scroll"}
                                >
                                        <div className="modal_container">
                                                <img className='modal_works_samples' src="src/assets/WORKS/Grim/grim_img_1.jpg"/>
                                                <div className="modal_container_topright">
                                                        <div className="modal_description">
                                                                <div className="modal_titles">
                                                                        <h3>Mon vieux grimoire</h3> 
                                                                        <h3>2023</h3>
                                                                </div>   
                                                                        <p>Site web de notation de livre, réalisé dans le cadre d'un projet d'apprentissage back-end avec node.js, mongoDB et express.
                                                                        <br></br> Réalisation de toute la partie back-end, de l'API REST, avec création de compte, cryptage de mot de passe et authentification. </p>
                                                                        <p> L'utilisateur peut donc poster des livres, les noter, poster une image, mais également les modifier, les supprimer, le tout en étant authentifié. Le site permet également un système de notation de moyenne.
                                                                        </p>
                                                                <ul>
                                                                        <li className="li_dev">Node.js</li>
                                                                        <li className="li_dev">Javascript</li>
                                                                        <li className="li_dev">MongoDB</li>
                                                                        <li className="li_dev">Express</li>
                                                                        
                                                                </ul>              
                                                        </div>
                                                </div>
                                                <div className="modal_works_samples">
                                                        <img src="src/assets/WORKS/Grim/grim_img_2.jpg"/>
                                                </div>   

                                                <div className="modal_works_samples">
                                                        <img src="src/assets/WORKS/Grim/grim_img_3.jpg"/>
                                                </div>     

                                                <div className="modal_works_samples">
                                                        <img src="src/assets/WORKS/Grim/grim_img_4.jpg"/>
                                                </div>     

                                                <div className="modal_works_samples">
                                                        <img src="src/assets/WORKS/Grim/grim_img_5.jpg"/>

                                                </div>                                  
                                        </div>  



                                
                        </ReactModal>
                        
</div>

 {/* WORK 4 */}              
 <div>
                        <div className="work_tags">
                                <ul>
                                        <li className="li_dev">Développement</li>
                                </ul>  
                        </div>
                        <div className="work_thumbnail work4" onClick={Openmodale4}></div>
                        <ReactModal                       
                                isOpen={modalState4} 
                                onRequestClose={CloseModal4}
                                shouldCloseOnOverlayClick={true}
                                shouldFocusAfterRender={true}
                                shouldReturnFocusAfterClose={true}
                                preventScroll={true}
                                shouldCloseOnEsc={true}
                                bodyOpenClassName={"no_scroll"}
                                >
                                        <div className="modal_container">
                                                <img className='modal_works_samples' src="src/assets/WORKS/Blue/bluel_img_1.jpg"/>
                                                <div className="modal_container_topright">
                                                        <div className="modal_description">
                                                                <div className="modal_titles">
                                                                        <h3>Portfolio Sophie Bluel</h3> 
                                                                        <h3>2023</h3>
                                                                </div>   
                                                                        <p>Portfolio d'une designer d'espace, réalisé dans le cadre d'un projet d'apprentissage de Javascript.
                                                                        <br></br> Réalisation de toute la partie front-end, gérée dynamiquement avec le javascript. Les filtres mettent à jour automatiquement la page sans recharger le HTML.</p>
                                                                        <p> L'utilisateur peut se connecter, consulter les travaux, en ajouter et en supprimer.</p>
                                                                <ul>
                                                                        <li className="li_dev">Javascript</li>
                                                                        <li className="li_webdes">CSS</li>
                                                                        <li className="li_dev">HTML</li>
                                                                </ul>              
                                                        </div>
                                                </div>
                                                <div className="modal_works_samples">
                                                        <img src="src/assets/WORKS/Blue/bluel_img_2.jpg"/>
                                                </div>   

                                                <div className="modal_works_samples">
                                                        <img src="src/assets/WORKS/Blue/bluel_img_3.jpg"/>
                                                </div>     
      
                                        </div>  



                                
                        </ReactModal>
                        
</div>

 <div className="contact_thumbnail" >
        <Contact/>  
 </div>               
               
                
                
                






        </div>
    </section>
    
}
 
 