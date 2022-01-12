import React, { useState } from 'react';
import { Content, Description, Item, MoreItem, MoreSection, ShowMoreBtn, Stats, Thumbnail } from '../styles';
import { Card } from '../../../common';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();


export const Project = ({ code, project, key }) => {


	const [more, setMore] = useState('less');

	let thumbnail;
	if (project.video !== null) {
		thumbnail = <div className='videoContainer'>
			<iframe
				className='video'
				title={project.title}
				src={project.video}
				frameBorder='0'
				allow='autoplay; picture-in-picture' />
		</div>;
	} else {
		thumbnail = <div className='video'>
			<img src={project.img} alt={project.title} />
		</div>;
	}

	return (
		<>
			<Item>
				<Card>
					<Content>
						<h3>{project.title}</h3>
						<Thumbnail>
							{thumbnail}
						</Thumbnail>

						<Description>
							<p>{project.description}</p>
							{project.link != null ? <><a className='link'
							                             href={project?.link}>{'Download Game [windows]'}</a> </> : <></>}
						</Description>
						<Stats>
							<div><b>Team size:</b> <span>{project.teamSize}</span> <br /></div>
							<div><b>Project time:</b> <span>{project.projectTime}</span> <br /></div>
							<div><b>Engine:</b> <span>{project.engine}</span> <br /></div>
							<div><b>Role:</b> <span>{project.role}</span> <br /></div>
						</Stats>

						<MoreSection className={more}>

							<MoreItem>
								<b>My Work:</b>
								<span>{project.myWork}</span>
							</MoreItem>
							<MoreItem>
								<b>Lessons Learned:</b>
								<span>{project.lessons}</span>
								<br />
							</MoreItem>
							{project.hasCode === true ?
								<MoreItem>
									<b>Code:</b>
										<div dangerouslySetInnerHTML={{ __html: code }} />
									<br />
								</MoreItem> : <></>

							}

						</MoreSection>


						<ShowMoreBtn onClick={() => more === 'more' ? setMore('less') : setMore('more')}>
							{more === 'less' ?
								<h5>show more</h5> :
								<h5>hide</h5>}
						</ShowMoreBtn>
					</Content>

				</Card>
			</Item>
		</>
	)
		;

};