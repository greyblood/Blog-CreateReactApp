import { useEffect } from "react"

export default function Contact(){
    
    useEffect(function(){
        document.title = 'Contact'
    },[])

    return (
        <section className="section">
        <h1 className="section-title">Contact</h1>
        <p className="section-description">You can reach me here</p>
        <ul>
            <li>Whatsapp: 0234482</li>
            <li>Email: JohnDoe@gmail.com</li>
        </ul>

        <p>Social Media</p>
        <ul>
            <li>
                <a href="https://instagram.com">Instagram</a>
            </li>
            <li><a href="https://twitter.com">Twitter</a></li>
        </ul>
        </section>

    )
}