import { useEffect } from "react"

export default function Home(){

    useEffect(function(){
        document.title = 'Home';
    },[]);

    return (
        <section className="section">
        
        <h1 className="section-title">Home Page</h1>
        <p className="section-description">Hello this is my website</p>
        
        </section>
    )
}