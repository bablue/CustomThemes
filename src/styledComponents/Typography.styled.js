import styled, { css } from "styled-components";

export const Typography = styled.div`
    font-family:'Montserrat', sans-serif;
    color:${({ theme }) => theme.colors.body};

    ${({ heading }) => heading && css`
        font-size: 32px;
        margin: 1em 0;
    `}
    ${({ subHeading }) => subHeading && css`
        font-size: 24px;
        margin: 0.5em 0;
    `}

`