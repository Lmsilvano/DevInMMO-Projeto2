import styled from 'styled-components'


export const StyledSectionHome = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw !important;


        
    
    `


export const StyledNavHome = styled.nav`
    position: fixed;
    //width: 500px;
    //height: 200px;
    top: 50%;
    left: 50%;
    margin-top: -100px; /* Negative half of height. */
    margin-left: -115px; /* Negative half of width. */
    display: flex;
    list-style: none;
    align-content: center;
    align-items: center;
    justify-content: center;
   
        .Nav__UlHome{
            display: flex;
            list-style: none;
            align-self: center;
            width: 100%;
        }
        .Nav__LiHome {
            border: none;
            margin-left: 10px;
            cursor: pointer;
            width: 100%;
            &:hover{
                svg{
                    color: #D2122E;
                    filter: none;
                }
                .Nav__LinkHome{
                    transition: 375ms;
                    background: #15052ee6;
                    color: #D2122E;
                    text-shadow: none;
                    border: 2px solid #D2122E;
                }
            }
            
            svg{
                font-size: 150%;
                filter: drop-shadow(1px 2px rgba(137,27,27,1));
                margin-left: 3px;
                
            }
        }
        .Nav__LinkHome{
            height: 100%;
            width: 100%;
            text-decoration: none;
            color: #fbfbfb;
            background: #15052ee6;
            display:flex;
            align-content: center;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            text-shadow: 0px 2px 3px #891b1b;
            border: 1px solid rgb(0 0 0 / 66%);
            border-radius: 18px;
            padding: 10px;
            letter-spacing: 1px;
            box-shadow: rgb(0 0 0 / 55%) 0px 4px 12px;
            font-size: 15px;

            
        }
`