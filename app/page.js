"use client"

import  Image  from 'next/image'
import logo from 'images/companyLogo.svg'
import shoesOne from 'images/shoes.webp'
import shoesTwo from 'images/shoes2.webp'
import shoesThree from 'images/shoes3.webp'
import shoesFour from 'images/shoes4.webp'
import boardOne from 'images/board.png'
import boardTwo from 'images/board2.png'
import boardThree from 'images/board3.png'
import boardFour from 'images/board4.png'
import css from 'styles/spa.module.css'
import Section from 'components/Section'
import NavBar from 'components/NavBar'
import { Context } from 'app/layout'
import { useContext,useEffect,useState,useRef } from 'react'
import { Card, Tooltip, Popover, Button, Text, Loading, Modal, Row, Input, Avatar, styled } from '@nextui-org/react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

library.add(faUserAstronaut)

export default function Home() {

    /* 
    Please check whats happening with context!
    */

    const ctx = useContext(Context)
    
    const boardImages =  useRef([["John Donahoe",boardOne.src],
    ["Matthew Friend (CFO)",boardTwo.src],
    ["Andrew Campion (COO)",boardThree.src],
    ["Dirk Van Hameren (CMO)",boardFour.src]])

    const boardProfiles =  useRef(["https://www.linkedin.com/in/john-donahoe-8b591452/",
    "https://www.linkedin.com/in/matthew-friend-166a27a/",
    "https://www.linkedin.com/in/andrew-campion-69069b4/",
    "https://www.linkedin.com/in/dj-van-hameren/"
    ])

    const [header, setHeader] = useState("We are the AIR company")

    const [titleOne, setTitleOne] = useState("The Air Jordans Originals,")
    const [titleTwo, setTitleTwo] = useState("Our Air Jordans Retro 6,")
    const [titleThree, setTitleThree] = useState("The Air Jordans XXXVII Low,")
    const [titleFour, setTitleFour] = useState("The Air Jordans Why Not 6,")

    const lastSection = useRef(null)

    const [difference, setDifference] = useState(false)
    const [interest, setInterest] = useState(false)
    const [redirectClient, setRedirectClient] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [boardClicked, setBoardClicked] = useState(false);

    const HeaderRegular = styled(Text, {
      fontFamily: "Foldit, cursive",
      fontWeight: 400,
      color: "black"
    })

    const HeaderBold = styled(Text, {
      fontFamily: "Foldit, cursive",
      fontWeight: 500,
      color: "black"
    })

    const HeaderXBold = styled(Text, {
      fontFamily: "Foldit, cursive",
      fontWeight: 600,
      color: "black"
    })

    const TextRegular = styled(Text, {
      fontFamily: "Unica One, cursive",
      fontWeight: 400,
      color: "black"
    })
   
    useEffect(() => {

      if(boardClicked !== false)
        setTimeout(()=>{
         
          window.location = boardProfiles.current[boardClicked]
        },2000)

    },[boardClicked])

    useEffect(() => {

      if(redirectClient === "whatsapp"){

        setTimeout(()=>{

          try{

            window.location = "https://api.whatsapp.com/send?phone=542615005051&text=Hello%20%F0%9F%99%8C%20I%27d%20like%20to%20know%20more%20about%20your%20products/services!"

          }catch(error){

            ctx.setStatus({status:"error",error:error})
          }

        },3000)

      }else if(redirectClient === "store"){

        setTimeout(()=>{

          try{

            window.location = "https://www.nike.com/w/jordan-37eef"

          }catch(error){

            ctx.setStatus({status:"error",error:error})
          }

        },3000)

      }else if(redirectClient === "later"){

        setIsModalVisible(true) 

      }
        

    },[redirectClient])

    useEffect(()=>{

      try{

        if(interest)
          window.scrollBy({
            top: document.body.scrollHeight,
            left: 0,
            behaviour: 'smooth'
          })
          

      }catch(error){

        ctx.setStatus({status:"warn",error:error})
      }
      

    },[interest])
    
    useEffect(()=>{

      switch (difference) {
        
        case "changes":
          
          setHeader("Our business is CHANGE")  
          setTitleOne(status => status.split(",")[0]+", changed the GAME")
          setTitleTwo(status => status.split(",")[0]+", dared to be BOLD RED")
          setTitleThree(status => status.split(",")[0]+", straight outta SPACE TIME")
          setTitleFour(status => status.split(",")[0]+", comes with a ZIP YES")

          break;
      
        case "simplicity":
          
          setHeader("One should live OFF THE LAND")  
          setTitleOne(status => status.split(",")[0]+", the same but not THE SAME")
          setTitleTwo(status => status.split(",")[0]+", is a new SIMPLE REMINDER")
          setTitleThree(status => status.split(",")[0]+", three colors NO MORE")
          setTitleFour(status => status.split(",")[0]+", a glove BUT FOR FEET")

          break;
        
        case "integrity":
          
          setHeader("If we do the RIGHT THINGS, money will come")  
          setTitleOne(status => status.split(",")[0]+", made for THE PLAYER")
          setTitleTwo(status => status.split(",")[0]+", shouts comfortable FIRST")
          setTitleThree(status => status.split(",")[0]+", lowest of lows HIGHEST OF HIGHS")
          setTitleFour(status => status.split(",")[0]+", fast and control FIRST")

          break;

        default:
          break;
      }
      
    },[difference])


    return(
        <>
        <NavBar type="absolute" position="top">
          <Button css={{
            background: "#ffffffee",
            color: "black",
            whiteSpace:"normal",
            padding: "2rem",
            margin: "auto",
            width: "95vw",
            borderColor: "transparent",
            boxShadow: "rgb(220, 220, 220) 0px 3px 13px 0px"
            }}
            rounded bordered>

            <Image 
              src={logo.src}
              width={60}
              height={60}
            />
            <TextRegular size={25} color="black" transform="full-width" css={{lineHeight:"2rem"}}>The Air Company</TextRegular>

          </Button>
        </NavBar>

        <NavBar>
        <Button.Group size="xl" css={{marginTop:"80vh",maxWidth:"90vw",overflow: "auto",boxShadow: "rgb(220, 220, 220) 0px 3px 13px 0px"}} vertical>
            
            <Button css={{

              background: "#ffffffee",
              color: "black",
              borderColor: "transparent",
              whiteSpace:"normal",
              padding: "1.5rem",
              margin: "auto",
              width: "100%",
              '&:active': {
                background: "#FF556DAA",
              }
            }}
              onClick={()=>{

                setDifference("changes")
              }}
            >
                <TextRegular size={20} color="black" transform="full-width" css={{lineHeight:"2rem"}}>Changes</TextRegular>
            </Button>


            <Button css={{

              background: "#ffffffee",
              color: "black",
              borderColor: "transparent",
              whiteSpace:"normal",
              padding: "1.5rem",
              margin: "auto",
              width: "100%",
              '&:active': {
                background: "#FF556DAA",
              }
              }}
              onClick={()=>{

                setDifference("simplicity")
              }}
            >
              <TextRegular size={20} color="black" transform="full-width" css={{lineHeight:"2rem"}}>Simplicity</TextRegular>
            </Button>

            
            <Button css={{
              background: "#ffffffee",
              color: "black",
              borderColor: "transparent",
              whiteSpace:"normal",
              padding: "1.5rem",
              margin: "auto",
              width: "100%",
              '&:active': {
                background: "#FF556DAA",
              }
              }}
              onClick={()=>{

                setDifference("integrity")
              }}
            >
              <TextRegular size={20} transform="full-width" css={{lineHeight:"2rem"}}>Integrity</TextRegular>
            </Button>

        </Button.Group>
        </NavBar>

        <Section backgroundColor="linear-gradient(180deg, #1A237E77 0%, #FF556DAA 49%, #FEC141BB 100%)">
          <HeaderRegular className="bounceInDown" size={60} css={{textAlign:"center",margin:"auto",textGradient: "180deg, #000000 70%, #FEC141 100%"}}> 
            {header}
          </HeaderRegular>
        </Section> 
        <Section backgroundColor="linear-gradient(0deg, #1A237E77 0%, #FF556DAA 49%, #FEC141BB 100%)">

          <Tooltip hideArrow trigger="click" placement="bottom"
            content={
              <TextRegular size={20} color="black" onClick={()=> setInterest("onText")}>Interested? Click here!</TextRegular>
          }>
            { !difference  ? 
            
            <TextRegular size={60} color="black" transform="full-width" css={{textGradient: "180deg, black 50%, transparent 100%",textAlign:"center"}}>
              {titleOne.substring(0, titleOne.length - 1)}
            </TextRegular>   
              : 
            <TextRegular className="flashIn" size={60} color="black" transform="full-width" css={{textGradient: "180deg, black 50%, transparent 100%",textAlign:"center"}}>
              {titleOne}
            </TextRegular>        
            }
          </Tooltip>

          <Tooltip hideArrow trigger="click" 
            content={
              <TextRegular size={20} color="black" onClick={()=> setInterest("onImage")}>Interested? Click here!</TextRegular>
          }>
          <Card isHoverable variant="bordered" css={{background:"linear-gradient(180deg, whitesmoke 90%, transparent 100%)", padding:".5rem", maxWidth:"700px", borderRadius:30}}>
            <Card.Image
              src={shoesOne.src}
              objectFit="cover"
              width="100%"
              alt="Air Jordans Originals"
              css={{background:"linear-gradient(180deg, white 92%, transparent 100%)"}}
              />
          </Card>
          </Tooltip>

        </Section>

        <Section backgroundColor="linear-gradient(180deg, #1A237E77 0%, #FF556DAA 49%, #FEC141BB 100%)">

         <Tooltip hideArrow trigger="click" placement="bottom"
            content={
              <TextRegular size={20} color="black" onClick={()=> setInterest("onImage")}>Interested? Click here!</TextRegular>
          }>
          <Card isHoverable variant="bordered" css={{background:"linear-gradient(180deg, whitesmoke 90%, transparent 100%)", padding:".5rem", maxWidth:"700px", borderRadius:30}}>
            <Card.Image
              src={shoesTwo.src}
              objectFit="cover"
              width="100%"
              alt="Air Jordans Retro 6"
              css={{background:"linear-gradient(180deg, white 92%, transparent 100%)"}}
              />
          </Card>
          </Tooltip>

          <Tooltip hideArrow trigger="click" 
            content={
              <TextRegular size={20} color="black" onClick={()=> setInterest("onImage")}>Interested? Click here!</TextRegular>
          }>
            { !difference  ? 
            
            <TextRegular size={60} color="black" transform="full-width" css={{textGradient: "180deg, black 50%, transparent 100%",textAlign:"center"}}>
              {titleTwo.substring(0, titleTwo.length - 1)}
            </TextRegular>   
              : 
            <TextRegular className="flashIn" size={60} color="black" transform="full-width" css={{textGradient: "180deg, black 50%, transparent 100%",textAlign:"center"}}>
              {titleTwo}
            </TextRegular>        
            }
          </Tooltip>

        </Section>

        <Section backgroundColor="linear-gradient(0deg, #1A237E77 0%, #FF556DAA 49%, #FEC141BB 100%)">


          <Tooltip hideArrow trigger="click" placement="bottom"
            content={
              <TextRegular size={20} color="black" onClick={()=> setInterest("onImage")}>Interested? Click here!</TextRegular>
          }>
            { !difference  ? 
            
            <TextRegular size={60} color="black" transform="full-width" css={{textGradient: "180deg, black 50%, transparent 100%",textAlign:"center"}}>
              {titleThree.substring(0, titleThree.length - 1)}
            </TextRegular>   
              : 
            <TextRegular className="flashIn" size={60} color="black" transform="full-width" css={{textGradient: "180deg, black 50%, transparent 100%",textAlign:"center"}}>
              {titleThree}
            </TextRegular>        
            }
          </Tooltip>

          <Tooltip hideArrow trigger="click"
            content={
              <TextRegular size={20} color="black" onClick={()=> setInterest("onImage")}>Interested? Click here!</TextRegular>
          }>
            <Card isHoverable variant="bordered" css={{background:"linear-gradient(180deg, whitesmoke 90%, transparent 100%)", padding:".5rem", maxWidth:"700px", borderRadius:30}}>
              <Card.Image
                src={shoesThree.src}
                objectFit="cover"
                width="100%"
                alt="The Air Jordans XXXVII Low"
                css={{background:"linear-gradient(180deg, white 92%, transparent 100%)"}}
                />
            </Card>
          </Tooltip>

        </Section>

        <Section backgroundColor="linear-gradient(180deg, #1A237E77 0%, #FF556DAA 49%, #FEC141BB 100%)">

          <Tooltip hideArrow trigger="click" placement="bottom"
            content={
              <TextRegular size={20} color="black" onClick={()=> setInterest("onImage")}>Interested? Click here!</TextRegular>
          }>
            { !difference  ? 
            
            <TextRegular size={60} color="black" transform="full-width" css={{textGradient: "180deg, black 50%, transparent 100%",textAlign:"center"}}>
              {titleFour.substring(0, titleFour.length - 1)}
            </TextRegular>   
              : 
            <TextRegular className="flashIn" size={60} color="black" transform="full-width" css={{textGradient: "180deg, black 50%, transparent 100%",textAlign:"center"}}>
              {titleFour}
            </TextRegular>        
            }
          </Tooltip>

          <Tooltip hideArrow trigger="click"
            content={
              <TextRegular size={20} color="black" onClick={()=> setInterest("onImage")}>Interested? Click here!</TextRegular>
          }>
          <Card isHoverable variant="bordered" css={{background:"linear-gradient(180deg, whitesmoke 90%, transparent 100%)", padding:".5rem", maxWidth:"700px", borderRadius:30}}>
            <Card.Image
              src={shoesFour.src}
              objectFit="cover"
              width="100%"
              alt="The Air Jordans Why Not 6"
              css={{background:"linear-gradient(180deg, white 92%, transparent 100%)"}}
              />
          </Card>
          </Tooltip>
        </Section>

        <div ref={lastSection}>
        <Section backgroundColor="linear-gradient(0deg, #1A237E77 0%, #FF556DAA 49%, #FEC141BB 100%)">
         
          <HeaderRegular className="flashIn" color="black" size={60} css={{textAlign:"center",margin:"auto",textGradient: "180deg, #000000 70%, #1A237E77 100%"}}> 
            Are you interested? If not, we have an option for that also...
          </HeaderRegular>

          <Button.Group size="xl" css={{maxWidth:"90vw",overflow: "auto",boxShadow: "rgb(220, 220, 220) 0px 3px 13px 0px"}} vertical>
            
            <Button css={{

              background: "#ffffffee",
              color: "black",
              borderColor: "transparent",
              whiteSpace:"normal",
              padding: "1.5rem",
              margin: "auto",
              width: "100%",
              '&:active': {
                background: "#FF556DAA",
              }
            }}
              onClick={()=>{

                setRedirectClient("whatsapp")
              }}
            >
                {redirectClient === "whatsapp" ? 
                  <>
                    <TextRegular size={30} color="black" transform="full-width" css={{lineHeight:"2rem"}}>Opening WhatsApp</TextRegular>
                    <Loading type="spinner" color="currentColor" size="lg" css={{marginLeft:"0.5rem !important"}} />
                  </>
                :
                  <TextRegular size={30} color="black" transform="full-width" css={{lineHeight:"2rem"}}>Send us a WhatsApp</TextRegular>
                }
            </Button>


            <Button css={{

              background: "#ffffffee",
              color: "black",
              borderColor: "transparent",
              whiteSpace:"normal",
              padding: "1.5rem",
              margin: "auto",
              width: "100%",
              '&:active': {
                background: "#FF556DAA",
              }
              }}
              onClick={()=>{

                setRedirectClient("store")
              }}
            >
               {redirectClient === "store" ? 
                  <>
                    <TextRegular size={30} color="black" transform="full-width" css={{lineHeight:"2rem"}}>Opening Store</TextRegular>
                    <Loading type="spinner" color="currentColor" size="lg" css={{marginLeft:"0.5rem !important"}} />
                  </>
                :
                  <TextRegular size={30} color="black" transform="full-width" css={{lineHeight:"2rem"}}>Go to our Store</TextRegular>
                }
            </Button>

            <Button css={{
              background: "#ffffffee",
              color: "black",
              borderColor: "transparent",
              whiteSpace:"normal",
              padding: "1.5rem",
              margin: "auto",
              width: "100%",
              '&:active': {
                background: "#FF556DAA",
              }
              }}
              onClick={()=>{

                setRedirectClient("later")
              }}
            >

                <TextRegular size={30} color="black" transform="full-width" css={{lineHeight:"2rem"}}>Maybe later</TextRegular>

            </Button>
            

          </Button.Group>

          <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={isModalVisible}
            onClose={() => setIsModalVisible(false)}
          >
          <Modal.Header>
            <TextRegular size={30} color="black" transform="full-width" css={{lineHeight:"2rem"}}>Drop your data, will contact you later</TextRegular>
          </Modal.Header>
          <Modal.Body>
            
            <Input clearable contentLeft={<FontAwesomeIcon size='xl' color='gray' icon="fa-solid fa-user-astronaut" />} size="xl" labelPlaceholder={<TextRegular size={20} color="black" transform="full-width">Phone, Mail or NeuraLink :D</TextRegular>} status="default" />

          </Modal.Body>
          <Modal.Footer>
            <Button css={{
              background: "#1A237E77",
              color: "black",
              borderColor: "transparent",
              whiteSpace:"normal",
              padding: "1.5rem",
              margin: "auto",
              width: "100%",
              boxShadow: "rgb(220, 220, 220) 0px 3px 13px 0px",
              '&:active': {
                background: "#FF556DAA",
              }
              }}
              onPress={()=> setIsModalVisible(false)}
            >
              <TextRegular size={20} color="white" transform="full-width">SEND IT...</TextRegular>

            </Button>
          </Modal.Footer>
        </Modal>

        </Section>
        </div>

        <Section backgroundColor="linear-gradient(180deg, #1A237E77 0%, #FF556DAA 49%, #FEC141BB 100%)">

          <TextRegular className="flashIn" size={35} color="black" transform="full-width" 
            css={{textGradient: "180deg, black, black",textAlign:"center"}}
            grid={{all:{xs:12,sm:12,md:12,lg:12,xl:12}}}
          >
            We champion continual progress for athletes and sport by taking action to help athletes reach their potential. Every job at NIKE, Inc. is grounded in a team-first mindset, cultivating a culture of innovation and a shared purpose to leave an enduring impact.
          </TextRegular>
          <Avatar.Group count={10} 
            grid={{all:{xs:12,sm:12,md:12,lg:12,xl:12}}}
          >
          
            {boardImages.current.map((url, index) => (
    
              <Popover placement="top">
                <Popover.Trigger>
                    <Avatar
                      key={index}
                      size="xl"
                      src={url[1]}
                      color="gradient"
                      pointer
                      stacked
                      zoomed
                      bordered
                      squared
                      css={{position:"relative",minWidth:"fit-content",minHeight:"20vw"}}
                      //onClick={()=>setBoardClicked(index)}
                  />
                </Popover.Trigger>
                <Popover.Content>
                  <Button css={{
                    background: "#1A237E77",
                    color: "black",
                    borderColor: "transparent",
                    whiteSpace:"normal",
                    padding: ".25rem",
                    margin: "auto",
                    boxShadow: "rgb(220, 220, 220) 0px 3px 13px 0px",
                    '&:active': {
                      background: "#FF556DAA",
                    }
                    }}
                    onPress={()=> setBoardClicked(index)}
                  >
                    <TextRegular size={15} color="white" transform="full-width">{`LinkedIn: ${url[0]}`}</TextRegular>
                  </Button>
                </Popover.Content>
              </Popover>
              
              
            ))}

          </Avatar.Group>
        </Section>

      </>
    )
}