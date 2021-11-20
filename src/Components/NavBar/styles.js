import styled from 'styled-components'


export const StyledNav = styled.nav`
    display: flex;
    list-style: none;
    align-content: center;
    align-items: center;
    justify-content: center;
    
        .Nav__Ul{
            display: flex;
            list-style: none;
            align-self: center;
    
        }
        .Nav__Li {
            background: none;
            border: none;
            margin-left: 10px;
            cursor: pointer;

            &:hover{
                svg{
                    color: #D2122E;
                    filter: none;
                }
                .Nav__Link{
                    transition: 375ms;
                    background: white;
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
        .Nav__Link{
            height: 100%;
            width: 100%;
            text-decoration: none;
            color: #fbfbfb;
            background: none;
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
        .active{
            transition: 500ms;
            background: #ff0000ab;
            }
    
    `