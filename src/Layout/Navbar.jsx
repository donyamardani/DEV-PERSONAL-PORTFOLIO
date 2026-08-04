import React from 'react'

export default function Navbar() {
    const navlinks = [
        {href: '#home', label: 'Home'},
        {href: '#about', label: 'About'},
        {href: '#experience', label: 'Experience'},
        {href: '#projects', label: 'Projects'},
        {href: '#testimonials', label: 'Testimonials'},
        {href: '#contact', label: 'Contact'},
    ]
  return (
    <header className={"fixed top-0 left-0 right-0  bg-transparent py-5 shadow-md z-50"}>
        <nav className={"container mx-auto px-6 flex items-center justify-between"}>
            <a className={"text-xl font-bold tracking-tight hover:text-primary"} href="#">
              PM<span className='text-primary'>.</span>
            </a>
            {/* desctop nav */}
            <div className={"flex items-center gap-1"}>
                <div className={"glass"}>
                    {navlinks.map((link,index)=>{
                        return <a href={link.href} key={index}>{link.label}</a>
                    })}
                </div>
            </div>
        </nav>
    </header>
  )
}
