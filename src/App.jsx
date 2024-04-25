
import './App.css'

function App() {



const handleForm=(e)=>{
e.preventDefault()

const form= e.target;
const first= form.first.value;
const last= form.last.value;
const email= form.email.value;
const address= form.address.value;
const city= form.city.value;
const state= form.state.value;
const zip= form.zip.value;
const usename= form.usename.value;
const website= form.website.value;

const valuee={first,last,email,address,city,state,zip,usename,website }

console.log(valuee)

}








  return (
    <>
       
      <h1 className='text-4xl'>Coffee Store</h1>
      <section>

      <section className="p-6 ">
	<form noValidate=""  className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">First name</label>
					<input id="firstname" name='first' type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75   " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input id="lastname" name='last' type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75   " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" name='email' type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75   " />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Address</label>
					<input id="address" name='address' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75   " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">City</label>
					<input id="city" name='city' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75   " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">State / Province</label>
					<input id="state" name='state' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75   " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" name='zip' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75   " />
				</div>
			</div>
		</fieldset>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Username</label>
					<input id="username" name='username' type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75   " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">Website</label>
					<input id="website" name='website' type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75   " />
				</div>
			
			</div>
		</fieldset>
    <input onSubmit={handleForm} type="submit" value="Submit" />
	</form>
</section>
        



      </section>
      
    </>
  )
}

export default App
