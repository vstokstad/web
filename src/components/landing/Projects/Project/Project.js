import React, { useState } from 'react';
import { Content, Description, Item, Stats, Thumbnail } from '../styles';
import { Card } from '../../../common';

export const Project = ({ project }) => {


	const [more, setMore] = useState('more');

	let thumbnail;
	if (project.video !== null) {
		thumbnail = <div className='videoContainer'>
			<iframe
				className='video'
				title={project.title}
				src={project.video}
				frameBorder='0'
				allow='autoplay; picture-in-picture'/>
		</div>;
	} else {
		thumbnail = <div className='videoContainer'>
				<img src={project.img} alt={project.title} />
		</div>;
	}

	return (
		<>
			<Item onClick={() => more === 'more' ? setMore('less') : setMore('more')}>
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
							<div className={more}><b>My Work:</b> <span>{project.myWork}</span> <br /></div>
							<div className={more}><b>Lessons Learned:</b> <span>{project.lessons}</span> <br /></div>
						</Stats>
						{more === 'more' ? <h5>click for more ...</h5> : <></>}
					</Content>

				</Card>
			</Item>
		</>
	);

};