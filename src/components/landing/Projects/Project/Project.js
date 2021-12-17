import React, { useState } from 'react';
import { Content, Item, Stats, Thumbnail } from '../styles';
import { Card } from '../../../common';

export const Project = ({ project }) => {

	const [more, setMore] = useState('more');
	let thumbnail;
	if (project.video !== null) {
		thumbnail = <iframe title={project.title} width='100%' height='315'
		                    src={project.video}
		                    frameBorder='0'
		                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
		                    allowFullScreen />;

	} else {
		thumbnail = <img src={project.img} alt={project.title} />;
	}

	return (
		<>
			<Item onClick={() => more === 'more' ? setMore('less') : setMore('more')}>
				<Card>
					<Content>
						<h3>{project.title}</h3>
						<Thumbnail>
							<div>
								{thumbnail}
							</div>
						</Thumbnail>
						<p>{project.description}</p>
						<Stats>
							<div><b>Team size:</b> <span>{project.teamSize}</span> <br /></div>
							<div><b>Project time:</b> <span>{project.projectTime}</span> <br /></div>
							<div><b>Engine:</b> <span>{project.engine}</span> <br /></div>
							<div><b>Role:</b> <span>{project.role}</span> <br /></div>
							<div className={more}><b>My Work:</b> <span>{project.myWork}</span> <br /></div>
							<div className={more}><b>Lessons Learned:</b> <span>{project.lessons}</span> <br /></div>


						</Stats>
						{more === 'more' ? <h2>...</h2> : <></>}
					</Content>

				</Card>
			</Item>
		</>
	);

};