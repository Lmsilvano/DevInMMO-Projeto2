import styled from 'styled-components'


export const StyledDivGameRequirements = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 70%;
    background: #8c92d580;
    border: 1px solid #6a6ab11f;
    box-shadow: rgb(0 0 0 / 35%) 2px 2px 2px 0px;
    padding: 5px;
    .reqContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        .requirements{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            flex:1;
        }
        .specs{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 5px;
            flex:3;
        }

    }
    `




