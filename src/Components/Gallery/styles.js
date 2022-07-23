import styled from 'styled-components'


export const StyledDivGallery = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 5px;
    flex-direction: column; 
    align-content: center;
    align-items: baseline;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap; 
    align-items: center;
    .MainIMG{
        display: flex;
        align-items: center;
        gap: 2px;
        svg{
            color: #24193d;
            font-size: 150%;
            cursor: pointer;
        }
        img{
            max-width: 950px;
        }
    }
    .SecondaryIMG{
        @media (max-width: 886px) {
           display: none;
         }
        display: flex;
        width: 90%;
        justify-content: center;
        align-items: center;
        margin: 10px;
        gap: 8px;
        img{
            max-width: 300px;
            
        }

    }
    `




