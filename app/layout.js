"use client"

import "styles/globals.css"
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { createContext,useState,useEffect } from "react";
import { Analytics } from '@vercel/analytics/react'


export const Context = createContext();

export default function Layout({ children }) {

  const [status,setStatus] = useState("loaded")

  const log = (status) => { 
    
    let message = status.error.stack.split("\n")
    message = message[0]+message[1]
    
    try{

      console[status.status](`Nabla SPA [${status.status}]: ${message}`)

    }catch(error){

      console["error"](`Nabla SPA [${status.status}]: ${message}`)

    }

  }

  useEffect(() => {

    if(status.status == "error" || status.status == "warn"){

      log(status)

    }
  },[status])

  async function getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  return (
    <html lang="en">
      <head>{CssBaseline.flush()}</head>
      <Context.Provider value={{status:status,setStatus:setStatus,shared:{}}}> 
        <body>
          {children}  
          <Analytics/> 
        </body>
      </Context.Provider>
    </html>
  )
}
