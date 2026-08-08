import React from 'react'
import Button from '../Components/Button'
import AnimatedBorderButton from '../Components/AnimatedBorderButton'

import {
  ArrowRight,
  ChevronDown,
  Download,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";



export default function Hero() {

  
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "mui",
  "bootstrap",
  "sas",
  "Figma",
  "ui,ux",
  "Git",
  "GitHub Actions",
];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg */}
       <div className="absolute inset-0">
        <img
        src="/hero-bg.jpg"
        alt="hero-bg"
        className="w-full h-full object-cover opacity-40"
        />
          <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/70 " />
        </div>
        
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Contact */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* left colum-text content */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
               <span className='w-2 h-2 p-1 bg-primary rounded-full animate-pulse'>
                Software Engineer.React specialist
                </span>  
             </span>  
            </div>
            {/* HeadLine */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100'>Crafting
                Crafting<span className='text-primary glow-text'>digital</span>
                <br />
                experiences white
                <br />
                <span className='font-serif italic font-normal text-white'>
                  precision.
                </span>
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 '>
              Hi, I'm Donya mardani — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>
            {/* CTAs */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size='lg'>
               Contact Me <ArrowRight className='w-5 h-5'/>
              </Button>
             
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* social links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground '>
                Follow Me:
              </span>
              {[
                {icon: FaGithub,href:"https://github.com/donyamardani"},
                {icon:FaLinkedin,href:"https://www.linkedin.com/in/donya-mardani-293705383/"},
                {icon:FaTelegram,href:"https://t.me/Donya_mardaniii"},
                {icon:FaInstagram,href:"https://www.instagram.com/donya__mardaniiii/"}
              ].map((social,index)=>(<a key={index} href={social.href} className='p-2 rounded-full glas hover:bg-primary/10 hover:text-primary transition-all duration-300'>{<social.icon className="w-5 h-5"/>}</a>))}
            </div>
          </div>
          {/* Right column-profile image */}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* profile image */}
            <div className='relative max-w-md mx-auto'>
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse" />
                <div className='relative glass rounded-3xl p-2 glow-border'>
                  <img src="/myprofile-photo.png" alt="donya-mardani" className='w-full object-cover rounded-2xl aspect-4/5' />
                  {/* floting badg */}
                   <div className='absolute bottom-4 right-4 px-4 py-3 rounded-xl animate-float glass'>
                    <div className='flex gap-3 items-center'>
                      <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                      <span className='text-sm font-medium'>
                           Available for work
                      </span>
                    </div>
                   </div>
                   {/* status badg */}
                   <div className='absolute left-4 top-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                    <div className='text-2xl text-primary font-bold'>
                        +2
                    </div>
                    <div className='text-xs text-muted-foreground'>
                     Years Exp
                    </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
         {/* Skills Section */}
         <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='mb-6 text-muted-foreground text-sm text-center'> 
            Technologies I work with
          </p>
          <div className='relative overflow-hidden'>
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
             <div className='flex animate-marquee'>
             {[...skills,...skills].map((skill,index)=>(
              <div key={index} className='px-8 py-4 shrink-0'>
                <span className='text-xl text-muted-foreground/50 font-semibold hover:text-muted-foreground transition-colors'>
                  {skill}
                </span>
              </div>
             ))}

             </div>
          </div>
         </div>

      </div>
      <div className='absolute bottom-8 left-1/2 translate-x-1/2 animate-fade-in animation-delay-800'>
        <a href="#" className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group'>
          <span className='text-xs uppercase tracking-wider'>
            scrool
          </span>
          <ChevronDown className='w-6 h-6 animate-bounce'/>
        </a>
      </div>

    </section>
  )
}
