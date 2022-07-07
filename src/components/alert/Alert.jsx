import React from 'react'

const Alert = ({type, message}) => {

	if(type === 'new'){
		return (
			<div className='sticky top-2 z-10 flex place-content-center mb-4'>
				<div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full inline-flex" role="alert">
					<span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">{type}</span>
					<span className="font-semibold mr-2 text-left flex-auto">{message}</span>
				</div>
			</div>
		)
	}

	if(type === 'error') {
		return (
			<div className='sticky top-2 z-10 flex place-content-center mb-4'>
				<div className="p-2 bg-red-500 items-center text-red-100 leading-none rounded-full inline-flex" role="alert">
					<span className="flex rounded-full bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3">{type}</span>
					<span className="font-semibold mr-2 text-left flex-auto">{message}</span>
				</div>
			</div>
		)
	}

	if(type === 'delete') {
		return (
			<div className='sticky top-2 z-10 flex place-content-center mb-4'>
				<div className="p-2 bg-red-600 items-center text-red-100 leading-none rounded-full inline-flex" role="alert">
					<span className="flex rounded-full bg-red-800 uppercase px-2 py-1 text-xs font-bold mr-3">{type}</span>
					<span className="font-semibold mr-2 text-left flex-auto">{message}</span>
				</div>
			</div>
		)
	}
}

export default Alert