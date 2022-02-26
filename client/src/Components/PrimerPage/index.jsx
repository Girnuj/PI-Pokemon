import React from 'react'
import { Link } from 'react-router-dom'
import Video from '../Video/Video.mp4'
import { Container, Bg, VideoBg, Content, H1, P, Btn  } from './PrimerPage'
import './PrimerPage.css'



const PrimerPage = () => {
   
    
    
    return (
        <>
        <Container>
            <Bg>
                <VideoBg autoPlay loop muted src={Video}  type='video/mp4' />
            </Bg>
            <Content>
          <H1>Poke Api</H1>
          <P>
            Ven a duscubrir tu Pokemon favorito 
          </P>
          <Btn>
            
          
          {/* <NavBtnLink
            to="/pokemons"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
          >
           Go
          </NavBtnLink> */}
            {/* <NavLink>
            to='/pokemons'
            <button>Hover me</button>
            </NavLink> */}
             <Link to='/home'>
             <button>Go</button>
             </Link>
             

          </Btn>
        </Content>
        </Container>
       
        </>
    )
}

export default PrimerPage