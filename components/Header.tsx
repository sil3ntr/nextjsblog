import { StyledHeader, NavStyle, Logo } from "../styles/Header.Styled"
import { ContainerStyle, ContainerLeft, ContainerRight } from "../styles/ContainerStyled"


export default function Header () {
    return (
        <>
            <StyledHeader>
                    <ContainerStyle>
                            <NavStyle>
                                <ContainerLeft>
                                    <Logo> 
                                        <img src='./images/linettedevigan.png' alt='Linette Devigan Logo'/> 
                                    </Logo>
                                </ContainerLeft>
                                <ContainerRight>
                                    <ul>
                                        <li>BLOG</li>
                                    </ul>
                                    <ul>
                                        <li>CV</li>
                                    </ul>
                                </ContainerRight>
                            </NavStyle>
                    </ContainerStyle>
            </StyledHeader>
        </>
    )
}