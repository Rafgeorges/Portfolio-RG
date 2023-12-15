import icon from '../public/assets/PU_DSC_9606.jpg'


export default function Header(){
    return (
        <header className='header'>
            <img src={icon} alt='icon'/>
            <nav>
                <ul>
                    <li><a href='#about'>A propos</a></li>
                    <li><a href='#services_section'>Services</a></li>
                    <li><a href='#contact_container'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}