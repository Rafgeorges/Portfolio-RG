import intro_logo from 'public/assets/logo_placeholder.png'


export default function Intro(){
   return <section className='intro_container'>
            <div className="intro_text">
               <h1>Rafaël Georges</h1>
               <p>Développeur web</p> 
               <p>& designer graphique</p>
               <a href="https://drive.google.com/file/d/1lGOEBgx1LaGDyIRW0Cg3-X7a-YPMDoYX/view?usp=drive_link" target="_blank" alt='intro_img'><button>Voir CV</button></a>
            </div>
            <img src={intro_logo} alt='placeholder'/>  
            </section>
}