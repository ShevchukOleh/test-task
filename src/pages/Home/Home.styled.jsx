import styled from "@emotion/styled";

export const SideBar = styled.div`
    padding: 10px 20px;
    min-width: 180px;
    border-right: 1px solid orange;
    border-bottom: 1px solid orange;
`
export const Title = styled.h2`
    margin-bottom: 20px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const Input = styled.input`
    appearance: none;
`;
export const Label = styled.label`
    cursor: pointer;
    &:hover{
        color: orange;
    }
`;