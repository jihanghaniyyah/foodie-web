import React from 'react';

const ReviewCard = (props) => {
	return (
		<div className='w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 roundend-lg shadow-[rgba(0,_0,_0,_024)_0px_3px_8px]'>
			<div>
				<p className='text-lightText '>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua."
				</p>
			</div>
			<div className='flex flex-row justify-center items-center  mt-4  gap-4'>
				<img className='rounded-full w-1/4' src={props.img} alt='img' />
				<h3 className='font-semibold '>{props.name}</h3>
			</div>
		</div>
	);
};

export default ReviewCard;
