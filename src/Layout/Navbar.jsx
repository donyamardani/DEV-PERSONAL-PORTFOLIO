import React, { useEffect, useState } from 'react'
import Button from '@/Components/Button'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];
    const [menuOpen,setMenuOpen] =useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll=()=>{
            setIsScrolled(window.scrollY > 50);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll)
        }
    },[])

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50 `}>
        <nav className={"container mx-auto px-6 flex items-center justify-between"}>
            <a className="text-xl font-bold tracking-tight hover:text-primary" href="#">
              PM
              <span className='text-primary'>.</span>
            </a>
            {/* desctop nav */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link,index)=>(
                         <a href={link.href} key={index}
                        className={"px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"}
                        >{link.label}</a>
                    ))}
                </div>
            </div>
               {/* CTA Button */}
            <div  className={"hidden md:block"}>
                <Button  size={"sm"}>Contact ME</Button>
            </div>
            {/* mobile menu button */}
            <button className={"md:hidden p-2 text-foreground cursor-pointer"} onClick={() => setMenuOpen((prev)=>!prev)}>
               {menuOpen ? <X size={24}/> :  <Menu size={24}/>}
            </button>
        </nav>
        {/* mobile menue */}
        {menuOpen && 
        <div className={"md:hidden  glass-strong animate-fade-in"}>
           <div className={"container px-6 py-6 gap-4 flex flex-col"}>
              {navLinks.map((link,index)=>(
                         <a href={link.href} key={index}
                        className={"text-lg text-mouted-foreground hover:text-foreground"}
                        onClick={()=>setMenuOpen(false)}
                        >{link.label}</a>
            ))}
             <Button onClick={()=>setMenuOpen(false)}>Contact ME</Button>
           </div>
        </div>}
    </header>
  )
}
