import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const Title = styled.h2`
    margin-bottom: 20px;
`
export const GoBack = styled.p`
    border: 1px solid orangered;
    border-radius: 3px;
    height: 20px;
    width: 100px;
    padding: 2px 5px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        background-color: orangered;
        color: white;
    }
`