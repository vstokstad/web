import React, { useState, useEffect } from 'react';
import { ProgressBar } from './styles';


export const CodeStats = () => {
	const levelFactor = 0.025;
	const get_level = (current_xp) => {
		return (Math.floor(levelFactor * Math.sqrt(current_xp)));
	};
	const get_next_level_xp = (lvl) => {
		return Math.pow(Math.ceil((lvl + 1)) / levelFactor, 2);
	};
	const get_level_progress = (current_xp) => {
		let level = get_level(current_xp);
		let current_lvl_xp = get_next_level_xp(level - 1);
		let next_lvl_xp = get_next_level_xp(level);
		let have_xp = current_xp - current_lvl_xp;
		let needed_xp = next_lvl_xp - current_lvl_xp;
		return Math.round(have_xp / needed_xp * 100);
	};

	const [totalXP, setTotalXP] = useState(0);
	const [cppXP, setCppXP] = useState(0);
	const [csharpXP, setCsharpXP] = useState(0);
	const [javaScriptXP, setJavaScriptXP] = useState(0);
	useEffect(() => {
		fetch('https://codestats.net/api/users/vstokstad').then(response => response.json()).then(resultData => {
			setTotalXP(resultData.total_xp);
			setCppXP(resultData.languages.cpp.xps);
			setCsharpXP(resultData.languages.csharp.xps);
			setJavaScriptXP(resultData.languages.JavaScript.xps)
		});
	});

	return (


		<>
			<ProgressBar>
				<h3>Progression</h3>
				<small>Level {get_level(totalXP)}	| {totalXP} XP
					since 2021
				</small>
				<div className='progress'>
					<a href={'https://codestats.net/users/vstokstad'} referrerPolicy={'no-referrer'}>
						<label form='cpp'>C++ level {get_level(cppXP)}
							<progress id={'cpp'} max={'100'} value={get_level_progress(cppXP)} />
						</label>
					</a>
					<small>{cppXP} XP</small>

				</div>

				<div className='progress'>
					<a href={'https://codestats.net/users/vstokstad'} referrerPolicy={'no-referrer'}>
						<label form='csharp'>C# level {get_level(csharpXP)}
							<progress id='csharp' max='100' value={get_level_progress(csharpXP)} />
						</label>
					</a>
					<small>{csharpXP} XP</small>
				</div>
				<div className='progress'>
					<a href={'https://codestats.net/users/vstokstad'}  referrerPolicy={'no-referrer'}>
						<label form='javascript'>JavaScript level {get_level(javaScriptXP)}
							<progress id='javascript' max='100' value={get_level_progress(javaScriptXP)} />
						</label>
					</a>
					<small>{javaScriptXP} XP</small>
				</div>
				<div className='footer'>
					<small>by: <a href={'https://codestats.net'}>code::stats</a> </small>
				</div>
			</ProgressBar>
		</>

	);
};