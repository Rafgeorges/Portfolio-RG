import contact_clock from '/assets/picture_contact.png'


export default function Contact(){
    return <div className="contact_container" id="contact_container">
                <div className="contact_column">
                    <h2>CONTACT</h2>
                    <p>Prenez le temps de m'écrire un petit mail !</p>
                    <a href= "mailto:raf.georges.dev@gmail.com"><button >Écrire</button> </a>  
                </div>
                <img src={contact_clock} alt='contact_clock' />
            </div>
        

 }