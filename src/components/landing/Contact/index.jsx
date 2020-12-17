import React from 'react'
import { Container } from 'components/common'
import skills from 'assets/illustrations/skills.svg'
import { Wrapper, Details, Thumbnail, ContactWrapper } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper id="contact">

  <ContactWrapper as={Container}>
    <Thumbnail>
      <img src={skills} alt="Contact Vilhelm" />
    </Thumbnail>
    <Details>
      <h1>Contact</h1>
      <ContactForm />
    </Details>

  </ContactWrapper>
  </Wrapper>
)