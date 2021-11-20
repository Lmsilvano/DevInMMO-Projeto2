import styled from 'styled-components'


export const StyledDivContainerGamesDetail = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 80%;
    flex-wrap: wrap;
    .gameDetailTitle{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .gameTitle{
            font-size: 200%;
            color: #15052ee6;
            text-shadow: -1px 1px 0px #891b1b;
        }
        span{
            font-size: 120%;
            letter-spacing: 1px;
            font-weight: 510;
        }

    }
    `




