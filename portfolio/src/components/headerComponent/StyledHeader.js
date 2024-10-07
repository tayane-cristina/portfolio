import styled from "styled-components";

export const StyledNavbar = styled.nav `
    width: 100%;
    box-shadow: 10px 5px 5px  rgb(207, 206, 206);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;

    ul {
        width: 40%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around
        align-items: center;
        background-color: blue;
    }

    li {
        list-style: none;
        padding: 10px;
        cursor: pointer;
    }

    a {
        color: black;
        text-decoration: none;
        font-size: 17px;
        padding: 10px;
        border-radius: 5px;
        transition: 0.5s;
        
        &:hover {
            background-color: rgb(228, 223, 223);
        }
    }

    /* Estilos para desktops */
    @media (min-width: 1024px) {
        width: 100%;
        box-shadow: 10px 5px 5px  rgb(207, 206, 206);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: end;
        align-items: center;

        ul {
            width: 40%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around
            align-items: center;
        }

        li {
            list-style: none;
            padding: 10px;
            cursor: pointer;
        }

        a {
            color: black;
            text-decoration: none;
            font-size: 17px;
            padding: 10px;
            border-radius: 5px;
            transition: 0.5s;
        
            &:hover {
                background-color: rgb(228, 223, 223);
            }
        }
    }
`

export const StyledIconSocialMedia = styled.img`
    widht: 40px;
    height: 40px;

`;