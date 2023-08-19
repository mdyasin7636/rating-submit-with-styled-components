import { styled } from "styled-components";

export const RatingCardWrapper = styled.div`
border-radius: 20px;
width: 100%;
max-width: 450px;
min-width: 450px;
/* background: white; */
padding: 2.2rem;
background-color: ${({theme}) => theme.mode === 'dark' ? theme.colors.darkBlue : theme.colors.white};
`;

export const RatingIconBox = styled.div`
border-radius: 50%;
width: 50px;
height: 50px;
background-color: hsl(210, 16%, 22%);
display: flex;
justify-content: center;
align-items: center;
`

export const H1 = styled.h1`
color: #fff;
font-size: 1.8rem;
letter-spacing: 1.5px;
margin: 2rem 0 1rem 0;
text-align: left;
`

export const P = styled.p`
color: hsl(217, 12%, 63%);
font-size: 1.1rem;
margin: 1rem 0 2rem 0;
text-align: left;
`

export const StarButton = styled(RatingIconBox)`
display: inline-block;
border: none;
font-size: 1rem;
cursor: pointer;
color: #fff;
font-weight: 700;

&:not(:last-child) {
    margin-right: 1rem;
}

&:hover {
    background-color: hsl(25, 97%, 53%);
    transition: all 0.2s;
}

background-color: ${({selected}) => selected ? 'hsl(25, 97%, 53%)' : 'hsl(210, 16%, 22%)'};

`

export const SubmitButton = styled.button`
border-radius: 25px;
width: 100%;
background-color: hsl(25, 97%, 53%);
color: #fff;
font-size: 1rem;
font-weight: 700;
border: none;
padding: 0.8rem;
margin-top: 2rem;
cursor: pointer;

&:hover {
    background-color: #fff;
    color: hsl(25, 97%, 53%);
    transition: all 0.2s;
}

`