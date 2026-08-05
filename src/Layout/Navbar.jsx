import React from 'react'
import Button from '@/Components/Button'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const navlinks = [
        {href: '#home', label: 'Home'},
        {href: '#about', label: 'About'},
        {href: '#experience', label: 'Experience'},
        {href: '#projects', label: 'Projects'},
        {href: '#testimonials', label: 'Testimonials'},
        {href: '#contact', label: 'Contact'},
    ]
    const [menuOpen,setMenuOpen] = React.useState(false)
  return (
    <header className={"fixed top-0 left-0 right-0  bg-transparent py-5 shadow-md z-50"}>
        <nav className={"container mx-auto px-6 flex items-center justify-between"}>
            <a className={"text-xl font-bold tracking-tight hover:text-primary"} href="#">
              PM<span className='text-primary'>.</span>
            </a>
            {/* desctop nav */}
            <div className={"hidden md:flex items-center gap-1"}>
                <div className={"glass rounded-full px-2 py-1 flex items-center gap-1"}>
                    {navlinks.map((link,index)=>{
                        return <a href={link.href} key={index}
                        className={"px-4 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground"}
                        >{link.label}</a>
                    })}
                </div>
            </div>
            <div className={"hidden md:block"}>
                <Button size={"sm"}>Contact ME</Button>
            </div>
            {/* mobile menu button */}
            <button className={"md:hidden p-2 text-foreground cursor-pointer"} onClick={(prev) => setMenuOpen(!prev)}>
               {menuOpen ? <X size={24}/> :  <Menu size={24}/>}
            </button>
        </nav>
        {/* mobile menue */}
        {menuOpen && 
        <div className={"md:hidden  glass-strong "}>
           <div className={"container px-6 py-6 gap-4 flex flex-col"}>
              {navlinks.map((link,index)=>{
                        return <a href={link.href} key={index}
                        className={"text-lg text-mouted-foreground hover:text-foreground"}
                        onClick={()=>setMenuOpen(false)}
                        >{link.label}</a>
             })}
             <Button >Contact ME</Button>
           </div>
        </div>}
    </header>
  )
}
