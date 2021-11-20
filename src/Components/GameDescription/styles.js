import styled from 'styled-components'


export const StyledDivGameDesc = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;

    justify-content: center;
    max-width: 70%;
    flex-wrap: wrap;
    .DescHeader{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        box-shadow: rgb(169 114 108 / 35%) 2px 2px 14px 3px;
        padding: 8px;
        border-radius: 10px;
        p{
            font-weight: bold;
            letter-spacing: 1px;
        }

    }
    .DescBody{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-top: 20px;
        max-width: 100%;
        text-align: justify;
        gap: 10px;
        padding: 8px;
    }
    `




