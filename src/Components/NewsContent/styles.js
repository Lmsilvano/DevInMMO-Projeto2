import styled from 'styled-components'



export const StyledDivInputNews = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px auto;
    width: 50%;
    gap: 10px;
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

export const StyledDivContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    h3{
            font-weight: 500;
            letter-spacing: 1px;
        }

    
    `
export const StyledDivCards = styled.article`
    margin-top: 10px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: auto;
    padding: 10px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 35%) 0px 4px 12px;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    .cardIMG {
        height: 150px;
        width: 218px;
        border-radius: 10px;
        //flex:1;
    }
    .cardContent {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        flex:2;
        h3{
            font-weight: 700;
            letter-spacing: 1px;
        }
        p{
            color:black;
            margin-top: 10px;
        }
        a{
        margin: 10px auto;
        width: 20%;
        text-align: center;
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
    }
    

    
    `