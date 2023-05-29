"use client"

import { useState,useEffect } from 'react';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Layout from 'app/layout'


function App({ Component,pageProps }) {
  

  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: { myLightColor:"white" }, // optional
    }
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: { myDarkColor:"black" }, // optional
      
    }
  })

  return (  
    <ThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
      </NextUIProvider>

    </ThemesProvider>
          
    )
}

export default App
