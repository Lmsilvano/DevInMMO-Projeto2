import styled from 'styled-components'


export const StyledDivInputGames = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px auto;
    width: 50%;
    gap: 10px;
    @media (max-width: 548px) {
           width: 90%;
         }
    input{
        width: 100%;
        height: 30px;
        border: none;
        border-radius: 8px;
        padding: 3px;
        font-size: larger;
        letter-spacing: 1px;
        box-shadow: rgb(0 0 0 / 25%) 0px 2px 7px;
        :focus{
            transition: 250ms;
            box-shadow: rgb(0 0 0 / 35%) 0px 4px 12px;
            
        }
    }
    h3{
        font-weight: 560;
        letter-spacing: 1px;
        transition: 250ms;
    }


`

export const StyledDivContainerGames = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: baseline;
    justify-content: center;
    flex-wrap: wrap;
    h3{
            font-weight: 500;
            letter-spacing: 1px;
        }

    
    `
export const StyledDivCardsGames = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 23%;
    height: 465px;
    margin: 10px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 35%) 0px 4px 12px;
    @media (max-width: 1372px) {
            width: 35%;
         }
    @media (max-width: 932px) {
            width: 75%;
         }         
    .cardIMGame {
        width: 250px;
        border-radius: 10px;
        flex:1;
        @media (max-width: 1430px) {
            width: 95%;
         }
         
    }
    .cardContentGame {
        display: flex;
        flex-direction: column;
        margin: 20px;
        flex:2;
        align-content: center;
        justify-content: center;
        align-items: center;
        text-align: justify;
        box-sizing: border-box;
        width: 100% ;
        
        h3{
            font-weight: 500;
            letter-spacing: 1px;
            width: 80%;
        }
        p{
            color:black;
            margin-top: 10px;
            overflow: hidden; 
            text-overflow: ellipsis; 
            display: -webkit-box;
            -webkit-line-clamp: 5; 
            -webkit-box-orient: vertical;
            @media (max-width: 1270px) {
                -webkit-line-clamp: 3; 
            
         } 
        }
    }
    a{
        text-decoration: none;
        color: white;
        border: 1px solid rgba(0,0,0,0.1);
        background: #24193d;
        padding: 5px;
        border-radius: 8px;
        font-weight: 500;
        :hover{
            transition: 450ms;
            background: none;
            color: #24193d;
            font-weight: bold;
        }
    }
    

    
    `