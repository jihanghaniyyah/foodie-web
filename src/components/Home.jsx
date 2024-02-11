import React from 'react';
import Button from '../layouts/Button';

const Home = () => {
	return (
		<div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url("./assets/img/hero.jpg")] bg-cover bg-no-repeat'>
			<div className='w-full lg:w-2/3 space-y-5'>
				<h1 className='text-backgroundColor font-semibold text-6xl'>
					Elevate Your Inner Foodie with Every Bite.
				</h1>
				<p className='text-backgroundColor'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<div className='lg:pl-44'>
					<Button title='Order Now' />
				</div>
			</div>
		</div>
	);
};

export default Home;
