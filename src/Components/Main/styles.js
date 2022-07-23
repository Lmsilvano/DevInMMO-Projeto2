import styled from 'styled-components'


export const StyledMain = styled.main`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .mainSection{
        background: white;
        min-height: 80vh;
        width: 80%;
        @media (max-width: 575px) {
           width: 95%;
         }
        background: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.3)
        );
        border-radius: 2rem;
        z-index: 2;
        backdrop-filter: blur(2rem);
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 15px;
        .backLink {
          position: absolute;
          left: 50px;
          max-width: fit-content;
          svg{
            font-size: 290%;
            color: #15052ee6;
            filter: drop-shadow(1px 2px rgba(137,27,27,1));
          }

        }
        .title{
          font-size: 200%;
          color: #15052ee6;
          text-shadow: -1px 1px 0px #891b1b;
        }
       
  }

    `

export const OpAnimation = styled.div`
    opacity:${(props) => props.opacity ? 1 : 0} ;
    transition: 450ms;
`