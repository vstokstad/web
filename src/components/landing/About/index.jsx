import React from 'react';
import { Card, Container } from '../../common';
import { Details, Recipe, SkillsWrapper, Wrapper, Grid, Item } from './styles';
import { CodeStats } from './CodeStats';

export const About = () => (
		<Wrapper id='about'>
			<SkillsWrapper as={Container}>
				<Details>
					<h1>About</h1>
					<p className='maintext'>
						I am a game programmer currently studying at Future Games and I am looking for an internship from May through
						December 2022!
					</p>
					<div className='more'>
						<div>
							I do most parts of game dev, but I am especially interested in <span
							className='keyword'>Gameplay</span> , <span className='keyword'>AI</span> and general <span
							className='keyword'>Engine</span> work.
							I guess I like having structure but also making code <span className='keyword'>structured</span>. The <span
							className='keyword'>creative</span> aspects of programming really speak to me, one person's way to solve a
							problem will never be the same as another's.
							I value <span className='keyword'>teamwork</span> as one of the most important ingredients to create great
							things but I won't shy away from bashing my head into a problem to solve it, while also being aware of my
							own limitations and asking for help when i need it.
						</div>
						<br />
						<div>
							Before studying programming, I was a freelance documentary photographer / visual storyteller. Other than
							covering general news in
							Sweden I was reporting from countries such as Syria, Myanmar, Indonesia, Iraq.
							If you are interested, some of my photographic work can be <a className='link'
							                                                              href='https://visura.co/stokstad'>seen
							here.</a>
						</div>
						<br />
						<div className='cv'><p>Here is my <a className='link'
						                                     href='https://docs.google.com/document/d/e/2PACX-1vQT-OOXMW_mlcF88uGglZ2Lh73qUfDNe0cnM67uftgwYaSjXpPIWGmZJDMDx90aPM5zSpBJlwrnPauO/pub'>CV.</a>
						</p></div>
					</div>
					<Grid>
						<Item>
							<Card>

							<Recipe>
								<div className='h'>
									Interests and skills
								</div>
								<br />
								<ul>
									<li>Gameplay</li>
									<li>AI & Behaviour</li>
									<li>Systems</li>
									<li>Network</li>
									<li>Engines</li>
									<li>Rendering</li>
								</ul>
							</Recipe>
							</Card>
						</Item>
						<Item>
							<Card>

								<CodeStats />
							</Card>
						</Item>
					</Grid>

				</Details>

			</SkillsWrapper>
		</Wrapper>
	)
;