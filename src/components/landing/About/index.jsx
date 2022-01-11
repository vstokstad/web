import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button, Container } from '../../common';
import contact from '../../../assets/illustrations/contact.svg';
import { Details, Recipe, SkillsWrapper, Thumbnail, Wrapper, Grid, Item } from './styles';


export const About = () => (
		<Wrapper id='about'>
			<SkillsWrapper as={Container}>
				<Details>
					<h1>About</h1>
					<p className='maintext'>
						I am a game programmer currently studying at Future Games and I am looking for an internship from May through
						December 2022!
					</p>
					<p className='more'>
						<div>
							I do most parts of game dev, but I am especially interested in Gameplay, AI and general Engine work.
							I really enjoy most aspects of making games, but I have noticed that I tend to get quite involved in
							gameplay
							systems and AI.
							I guess I like having structure but also making code structured.
						</div>
						<br/>
						<div>
							Before studying programming, I was a freelance documentary photographer / visual storyteller. Other than covering general news in
							Sweden I was reporting from countries such as Syria, Myanmar, Indonesia, Iraq.
							If you are interested, some of my photographic work can be <a className='link' href='https://visura.co/stokstad'>seen here.</a>
						</div>
					</p>
					<Grid>
						<Item>
							<Recipe>
								<div className='h'>
									My interests and skills are:<br />
								</div>
								<br />
								<ul>
									<li>C++ & C#</li>
									<li>Gameplay</li>
									<li>AI & Behaviour</li>
									<li>Systems</li>
									<li>Network</li>
									<li>Engines</li>
									<li>Rendering</li>
								</ul>
							</Recipe>
						</Item>
						<Item>
							<Thumbnail>
								<img src={contact} alt='Vilhelm Stokstad' />
							</Thumbnail>
						</Item>
					</Grid>
					{//
						// <Button as={AnchorLink} href='#contact'>
						//	Contact
						//</Button>
					}
				</Details>

			</SkillsWrapper>
		</Wrapper>
	)
;