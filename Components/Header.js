import { ContainerStyle } from "../styles/ContainerStyled"
import { HeaderStyle, NavStyle } from "../styles/Header.styled"

export default function Header () {
    return (
        <>
            <HeaderStyle>
                <ContainerStyle>
                    <NavStyle>
                        <ul>
                            <li>Blog</li>
                            <li>CV</li>
                        </ul>
                    </NavStyle>   
                </ContainerStyle>
            </HeaderStyle>
        </>
    )
}