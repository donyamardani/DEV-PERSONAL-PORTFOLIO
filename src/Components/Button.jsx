import React from 'react'

export default function Button({className="",size='default',children,...props}) {
    const baseClass="relative overflow-hidden rounded-full border-2 bg-primary text-primary-foreground font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus:ring-offset-2 hover:bg-primary/90 shadow-lg shadow-primary/25"
    const sizeClasses={
        sm:"px-4 py-2 text-sm",
        default:"px-6 py-3 text-base",
        lg:"px-8 py-4 text-lg",
    }
    const classes=`${baseClass} ${sizeClasses[size]} ${className}`
  return (
    <button className={classes} {...props}>
       <span className='relative flex items-center  justify-center gap-2'>
        {children}
       </span>
    </button>
  )
}
