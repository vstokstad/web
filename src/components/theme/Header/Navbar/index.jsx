import React from 'react';
import { Container } from '../../../common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper} from './styles';
import { Links } from '../../Footer/styles';
import social from '../../Footer/social.json';

const Navbar = () => {


  return (
    <Wrapper as={Container}>

      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
          >
            <img width="20" src={icon} alt={name} />
          </a>
        ))}
      </Links>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;