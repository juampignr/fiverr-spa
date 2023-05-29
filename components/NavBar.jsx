"use client"

import css from 'styles/spa.module.css'
import { styled } from '@nextui-org/react'
import { useCallback,useEffect,useState,useRef } from 'react';

export default function NavBar({children,hideShowPercentage = 5, position = "bottom", type = "fixed"}){
    
    const navPosition = position == "bottom" ? {bottom:"7vh"} : {top:"2vh"}
    const navType = type == "fixed" || type == "sticky" || type == "static" ? "fixed" : "absolute" 

    const Nav = styled("div", {
        dflex: "center",
        position: navType,
        width: "100%",
        zIndex: "999",
        ...navPosition
    });

    let threshold = window.innerHeight*(hideShowPercentage/100)

    const [className, setClassName] = useState("visible") 

    let navRef = useRef()
    let lastScrollY = useRef(0)
    let lastScrollTime = useRef(0)

    useEffect(() => {

        if(navType == "fixed"){


            const onScroll = () => {
        
                
                if((window.scrollY-lastScrollY.current) > threshold){
        
                    lastScrollTime.current = Math.round(Date.now()/1000)
                    console.log(lastScrollTime.current)

                    setClassName("invisible")
        
                    lastScrollY.current = window.scrollY;
                    
                }else if((lastScrollY.current-window.scrollY) > threshold){
        
                    setClassName("visible")
        
                    lastScrollY.current = window.scrollY;
                }
                             
            }
    
            setInterval(()=> {

                console.log(Math.round(Date.now()/1000)-lastScrollTime.current)

                if((Math.round(Date.now()/1000)-lastScrollTime.current) >= 5)
                    setClassName("invisible")
            
            },2000)

            window.addEventListener('scroll', onScroll);

            return () => {
                window.removeEventListener('scroll', onScroll);
            };
        }
        
    },[]);


    return(
        <Nav className={className} ref={navRef} onAnimationEnd={()=>{

            if(navRef.current.classList.contains("visible")){

                setClassName("invisible")

            }
        }}>
            {children}
        </Nav>
    )
}