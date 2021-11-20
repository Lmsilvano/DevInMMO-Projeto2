import styled from 'styled-components'


export const StyledSectionComments = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 30px auto;
    width: 70%;
    gap: 10px;
    h1{
        font-size: x-large;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
        .mainInput{
            display: flex;
            div{
                display: flex;
                flex-direction: column;
                width: 40%;
                margin-right: 10px;
                padding-left: 5px;
                input{
                    font-family: "Montserrat",sans-serif;
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
                }
            }
        .secondaryInput{
            display: flex;
            flex-direction: column;
            width: 81%;
            padding-left: 5px;
            align-content: center;
            justify-content: center;
            align-items: flex-end;
            margin-bottom: 35px;
            textarea{
                height: 250px;
                border: none;
                border-radius: 8px;
                padding: 3px;
                font-size: larger;
                letter-spacing: 1px;
                width: 100%;
                box-shadow: rgb(0 0 0 / 25%) 0px 2px 7px;
                font-family: "Montserrat",sans-serif;
            }
           button{
                letter-spacing: 1px;
                text-decoration: none;
                color: white;
                border: 1px solid rgba(0,0,0,0.1);
                background: #24193d;
                padding: 5px;
                border-radius: 8px;
                font-weight: 600;
                width: 30%;
                margin-top: 5px;
                font-family: "Montserrat",sans-serif;
                :hover{
                    cursor: pointer;
                    transition: 450ms;
                    background: #07050c;
                    color: white;
                    font-weight: bold;
                    font-size: 80%;
                }
                :disabled{
                    background: #a74040;
                    text-decoration: line-through;
                }
            }
        }
    }



`
export const StyledPFormError = styled.p`
                      
    background: #ff0000ad;
    color: white;
    font-weight: 400;
    margin: 5px auto;
    text-align: center;
    width: 100%;
    border-radius: 5px;
    transition: 700ms;
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 7px;
                   

`

export const StyledDivCardComments = styled.div`
    display: flex;
    width: 82%;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 7px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding: 10px 20px;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    .commentContent{
        display: flex;
        flex-direction: column;
        width: 66%;
        gap: 5px;
        h4{
            font-size: 120%;
            letter-spacing: 1px;
        }
        p{
            text-align: justify;
        }
        
    }
    .likeContent{
        display: flex;
        width: 33%;
        justify-content: center;
        align-content: center;
        align-items: center;
        p{
            color:${(props) => props.setcolor};
            transition: 450ms;
            font-size: larger;
            font-weight: bold;
            letter-spacing: 1px;
            margin: auto 2px;
        }
        .like{
            :hover{
                color: green;
                font-size: 205%;
                transition: 450ms;
            }
        }
        .dislike{
            :hover{
                color: red;
                font-size: 205%;
                transition: 450ms;
            }
        }
        svg{
            cursor: pointer;
            font-size: 200%;
            color: #15052ee6;
            filter: drop-shadow(1px 2px rgba(137,27,27,1));
        }
    }

`