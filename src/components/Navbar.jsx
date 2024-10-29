import { FaSquareXTwitter } from "react-icons/fa6"
import logo from "../assets/raviKumarLogo.webp" 

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaSquare } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex items-center flex-shrink-0">
            <a href="/" aria-label="Home">
                <img src={logo}  className="mx-2" width={50} height={33} alt="Logo"/>
            
            </a>
        </div>
        <div className="flex items-center justify-center gap-4 m-8 text-2xl">
            <a href="https://www.linkedin.com/in/sineth-mashenka-113122241/" target="_blank" rel="noopenner noreferrer" aria-label="Linkedin">
                <FaLinkedin/>               
            </a>
            <a href="https://www.linkedin.com/in/sineth-mashenka-113122241/" target="_blank" rel="noopenner noreferrer" aria-label="GitHub">
                <FaGithub/>               
            </a>
            <a href="https://www.linkedin.com/in/sineth-mashenka-113122241/" target="_blank" rel="noopenner noreferrer" aria-label="Instragram">
                <FaInstagram/>               
            </a>
            <a href="https://www.linkedin.com/in/sineth-mashenka-113122241/" target="_blank" rel="noopenner noreferrer" aria-label="Facebook">
                <FaFacebook/>               
            </a>
            <a href="https://www.linkedin.com/in/sineth-mashenka-113122241/" target="_blank" rel="noopenner noreferrer" aria-label="Twitter">
                <FaSquareXTwitter/>               
            </a>
        </div>
    </nav>
  )
}

export default Navbar
