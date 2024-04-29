import { Link } from "react-router-dom";
import { toast } from "react-toastify"

import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";

import { FaEdit } from "react-icons/fa";



const UpdateProfile = () => {

	const { user } = useContext(AuthContext);
	const [displayName, setDisplayName] = useState('');
	const [photoURL, setPhotoURL] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			if (!user) {
				throw new Error('User not found');
			}

			const profileUpdates = {
				displayName: displayName || user.displayName,
				photoURL: photoURL || user.photoURL
			};

			await updateProfile(user, profileUpdates);

			setError('');
			toast.success('Profile updated successfully!')
			setTimeout(() => {
				window.location.reload();
			}, 1000);

		} catch (err) {
			setError(err.message);
		}
	};





const handleBack = () => {
	window.location.reload();
};


	



	return (
		<div className=" mx-3">

<div className='sm:max-w-md  py-4 lg:py-5 flex-col sm:space-x-6 relative  md:min-h-72 mx-auto border-2 my-5 lg:my-8 rounded-3xl flex items-center justify-center shadow-md'>
				<Link onClick={() => document.getElementById('my_modal_5').showModal()} className="absolute top-0 right-0 rounded-full border-2 px-3 py-1 flex items-center gap-1 m-3 hover:dark:text-violet-600"><FaEdit />Edit</Link>
<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-96  xl:w-64 border-2 shadow-md">
	
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={user.photoURL} />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">{user.displayName}</p>
					<p className="text-sm text-start">User Id : {user.uid.slice(0,9)}</p>
					<p  className="text-sm text-start">Creation Date : {user.metadata.creationTime.slice(0,17)}</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className=" hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="0 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
							<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className=" hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="GitHub" className=" hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
						</svg>
					</a>
				</div>
			</div>
			
		</div>


			<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box flex flex-col m-5  border">
					<h3 className="font-bold text-lg text-black  flex my-2">Update Profile!</h3>
					<form method="dialog" onSubmit={handleSubmit}>
						<div className="flex flex-col ">
							<div className="relative w-full text-black font-bold">
								<input
									type="text"
									id="displayName"
									value={displayName}
									onChange={(e) => setDisplayName(e.target.value)}
									className="peer mb-2 bg-gray-200 w-full text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
									placeholder=" " /><label
										className="flex w-full  select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
									Full Name
								</label>
							</div>
							<div className="relative w-full text-black font-bold">
								<input
									type="text"
									id="photoURL"
									value={photoURL}
									onChange={(e) => setPhotoURL(e.target.value)}
									className="peer mb-2 bg-gray-200 w-full  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-purple-500"
									placeholder=" " /><label
										className="flex  w-full  select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-purple-500 before:border-blue-gray-200 peer-focus:before:!border-purple-500 after:border-blue-gray-200 peer-focus:after:!border-purple-500">
									Photo URL
								</label>
							</div>


						</div>
						<div className="flex justify-between">
						<button className="btn m-2 btn-sm bg-green-500 text-white">Save</button>


						<Link onClick={handleBack}  className="btn btn-sm bg-orange-200">Close</Link>
						</div>
					</form>

				</div>
			</dialog>
















		</div>
	);
};

export default UpdateProfile;