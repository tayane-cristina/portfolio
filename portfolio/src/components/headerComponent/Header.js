import React from 'react';
import { StyledIconSocialMedia, StyledNavbar } from './StyledHeader';
import { Link } from 'react-router-dom';
import { PrincipalDiv } from '../../generalStyles/GeneralStyles';

const Header = () => {

return(
<PrincipalDiv>
    <StyledNavbar>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
        </ul>

        <ul>
            <li><Link to='/'><StyledIconSocialMedia src='https://img.icons8.com/?size=50&id=12599&format=png' alt='github-icon'></StyledIconSocialMedia></Link></li>
            <li><Link to='/'><StyledIconSocialMedia src='https://img.icons8.com/?size=50&id=8808&format=png' alt='Linkedin'></StyledIconSocialMedia></Link></li>
            <li><Link to='/'><StyledIconSocialMedia src='https://img.icons8.com/?size=50&id=16733&format=png' alt='WhatsApp'></StyledIconSocialMedia></Link></li>
        </ul>
    </StyledNavbar>
</PrincipalDiv>

)
}
export default Header;