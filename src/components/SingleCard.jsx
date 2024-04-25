import { removeCart } from '../Hooks/Utils/localStorage';
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";


const SingleCard = ({ cart }) => {
	const navigate = useNavigate();



	const { estate_title, segment_name, price, status, area, location, image_url } = cart;

	const handleRemove = event => {
		removeCart(cart.id);
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	};

	const handleBack = () => {
		navigate('/');

	}


	return (
		<div className='m-3'>
			<div className="flex flex-col lg:w-5/6 mx-auto space-y-4 p-3 sm:p-8 rounded-3xl bg-slate-300 mb-2 lg:mb-5">
				<ul className="flex flex-col divide-y divide-gray-700">
					<li className="flex flex-col  sm:flex-row sm:justify-between">
						<div className="flex w-full space-x-2 sm:space-x-4">
							<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={image_url} alt="Polaroid camera" />
							<div className="flex flex-col justify-between w-full">
								<div className="flex justify-between w-full pb-2 space-x-2">
									<div className="space-y-1">
										<h3 className="text-md lg:text-lg font-semibold leading-snug sm:pr-8">{estate_title}</h3>
										<p className="text-sm text-gray-500">{location}</p>
										<p className='text-md text-gray-600 font-semibold'>{area}</p>
										<p className='text-md text-gray-600 font-semibold'>{segment_name}</p>

									</div>
									<div className="text-right">
										<p className="text-lg font-semibold">{price}</p>
										<p className="text-sm text-gray-600">{status}</p>

									</div>

								</div>
								<div className="flex justify-end text-sm divide-x gap-2">
									<button onClick={handleBack} type="button" className="p-2 border rounded-md border-violet-400 hover:bg-blue-500 hover:text-white">
										<span className=" "> Back to Home</span>
									</button>
									<button onClick={handleRemove} type="button" className="flex items-center p-2  space-x-1 border justify-center gap-1 rounded-lg text-white bg-blue-500 hover:bg-violet-600">
										<MdDelete />

										<span>Remove</span>
									</button>


								</div>
							</div>
						</div>
					</li>

				</ul>

			</div>
		</div>
	);
};

export default SingleCard;