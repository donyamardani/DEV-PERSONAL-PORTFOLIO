import { ArrowUpRight } from 'lucide-react';
import React, { Children } from 'react'
import { FaGithub } from 'react-icons/fa';
import AnimatedBorderButton from '../Components/AnimatedBorderButton';

export default function Projects() {
 const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization and portfolio management.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind", "NodeJS", "MongoDB"],
    link: "https://www.loom.com/share/36b5b771f1194fe4928375525f6b4de1",
    github: "https://github.com/donyamardani/admin-dashbord-base",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, seamless checkout, and payment processing.",
    image: "/projects/project2.png",
    tags: ["React", "Redux", "MongoDB", "Tailwind"],
    link: "https://www.loom.com/share/bfafcdb37256411883a39727c5d3d23c",
    github: "https://github.com/donyamardani/phone-shop",
  },
  {
    title: "Modern Fashion Store",
    description:
      "A stylish clothing store with category filtering, shopping cart state management, and custom UI components.",
    image: "/projects/project3.png",
    tags: ["React", "Redux", "MUI", "MongoDB"],
    link: "https://www.loom.com/share/191771fbea3343e9aecac57b31b56945",
    github: "https://github.com/donyamardani/shopping-site-reaact-project",
  },
  {
    title: "Interactive Developer Portfolio",
    description:
      "A clean, responsive personal portfolio showcasing modern Web Development projects with interactive UI elements.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind"],
    link: "#",
    github: "https://github.com/donyamardani/DEV-PERSONAL-PORTFOLIO",
  },
];
  return (
    <section id="projects" className='py-32 relative overflow-hidden '>
      {/* Bg glows */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'/>
        <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'/>
          <div className='container mx-auto px-6 relative z-10'>
            {/* Section Header */}
            <div className='text-center max-w-3xl mb-16 mx-auto'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in '>
                 Featured Work
              </span>
              <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
                Projects that
                <span className='font-serif italic font-normal text-white '>
                  {" "}
                  make an impact.
                </span>
              </h2>
              <p className='text-muted-foreground animate-fade-in animation-delay-200'>
                 A selection of my recent work, from complex web applications to
                 innovative tools that solve real-world problems.
              </p>

            </div>
             {/* Projects Grid */}
             <div className='grid md:grid-cols-2 gap-8' >
              {projects.map((project,index)=>(
              <div key={index} className='group rounded-2xl glass overflow-hidden animate-fade-in md:row-span-1 ' style={{animationDelay:`${(index+1)*100}ms`}}>
                {/* image */}
                <div className='relative overflow-hidden aspect-video'>
                   <img className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ' src={project.image} alt={project.title} />
               
                <div className=' absolute inset-0 bg-linear-to-t from-card via-card/5 to-transparent opacity-60'/>

                {/* overlay links */}
                <div className={'absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
                  <a href={project.link} target='_blank' className='glass p-3 rounded-full  hover:bg-primary/70 hover:text-primary-foreground transition-all'>
                    <ArrowUpRight className='w-5 h-5'/>
                  </a>
                  <a href={project.github} target='_blank' className='glass p-3 rounded-full  hover:bg-primary/70 hover:text-primary-foreground transition-all'>
                    <FaGithub className='w-5 h-5'/>
                  </a>
                </div>
                 </div> 
                {/* content */}
                <div className='p-6 space-y-4'>
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                     {project.title}
                    </h3>
                     <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className=" flex flex-wrap gap-2">
                     {
                     project.tags.map((tag,index)=>
                     (<span key={index} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                        {tag}
                     </span>))
                     }
                  </div>
                </div>
              </div>
               ))}
             </div>
          
          {/* view all CTA */}
          <div className="text-center mt-12 animated-fade-in animation-delay-500">
             <AnimatedBorderButton>
               View All Projects
               <ArrowUpRight className='w-5 h-5'/>
             </AnimatedBorderButton>
          </div>
        </div>
      
    </section>
  )
}
