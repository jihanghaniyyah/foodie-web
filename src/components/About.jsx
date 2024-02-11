import React from 'react';
import img from '../assets/img/about.png';
import Button from '../layouts/Button';

const About = () => {
	return (
		<div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
			<img src={img} alt='img' />
			<div className='space-y-4 lg:pt-14 '>
				<h1 className='font-semibold text-4xl text-center md:text-start'>Why Choose Us?</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
					ex ea commodo consequat.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<div className='flex justify-center lg:justify-start'>
					<Button title='Learn More' />
				</div>
			</div>
		</div>
	);
};

export default About;
