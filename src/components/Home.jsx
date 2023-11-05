import { useState } from "react";
import { NavBar } from "./NavBar"
import { Container } from "./Container"
import { Footer } from "./Footer"

export const Home = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("")
    

    return(
        <div>
            <NavBar setName={setName} setGender={setGender}/>
            <Container name={name} gender={gender}/>
            <Footer />
        </div>
    )
}