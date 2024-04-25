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


			<div className='sm:max-w-md  p-4 lg:p-5 flex-col sm:space-x-6 relative  md:min-h-72 mx-auto bg-white my-5 lg:my-8 rounded-3xl flex items-center justify-center'>
				<Link onClick={() => document.getElementById('my_modal_5').showModal()} className="absolute top-0 right-0 rounded-full bg-gray-50 p-3 flex items-center gap-1 m-3"><FaEdit />Edit</Link>
				<div className="flex-shrink-0  mb-6 w-28 h-28 md:w-42 md:h-42 ">


					<img src={user.photoURL} alt="" className="object-cover object-center bg-cover mx-auto rounded-full bg-gray-500 " />
				</div>
				<div className="flex flex-col md:space-y-4 ">
					<div>
						<h2 className="text-2xl font-semibold mb-2">{user.displayName}</h2>
						<div className="text-sm">User Id : {user.uid.slice(0,9)}</div>
						<div className="text-sm">Creation Date : {user.metadata.creationTime.slice(0,17)}</div>
					</div>
					<div className="space-y-1 my-3">
						<span className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
								<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
							</svg>
							<span className="">{user.email}</span>
						</span>

					</div>
				</div>
			</div>


			<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box flex flex-col m-5 bg-gray-700 text-white border">
					<h3 className="font-bold text-lg  flex my-2">Update Profile!</h3>
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