import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";
import { register } from "../services";
import { useState } from "react";

export const Register = () => {

  useTitle("Register");
  const navigate = useNavigate();
  const [ismatch, setIsMatch] = useState(false);
  const [showmatch, setShowMatch] = useState(true);

  function checkPassword() {

    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password == confirm_password) {
      setIsMatch(true);
      setShowMatch(true);
    } else {
      setIsMatch(false);
      setShowMatch(false);
    }
  }

  async function handleRegister(event) {
    event.preventDefault();

    try {
      const authDetails = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        password: event.target.password.value,
        gender: event.target.gender.value,
        DOB: event.target.DOB.value,
        country: event.target.country.value,
        contact: event.target.contact.value
      }
      console.log(authDetails);
      const data = await register(authDetails);
      data.accessToken ? navigate("/products") : toast.error(data);
    } catch (error) {
      toast.error(error.message, { closeOnClick: true });
    }

  }

  return (
    <main>

      <section>
        <p className="text-2xl text-center mr-10 font-semibold dark:text-slate-100 my-6 underline underline-offset-8">Register</p>
      </section>
      <div className=" flex-wrap sm:flex-row justify-items-center w-2/4 p-8 border rounded-lg ml-72 border-gray-300 dark:border-gray-500">
        <form onSubmit={handleRegister}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
              <input type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required={true} />
            </div>
            <div className="w-full">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
              <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required={true} />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required={true} minLength="7" />
            </div>
            <div className="w-full">
              <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input type="password" name="confirm_password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required={true} onKeyUp={checkPassword} />
              <span id="message" className="text-xs  mt-2 px-2 py-0.5  border rounded-md text-white bg-red-600" hidden={showmatch}>{ismatch ? "" : "Passwords Don't Match"}</span>
            </div>

            <div>
              <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
              <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option value="">Please select one…</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-Binary</option>
                <option value="other">Other</option>
                <option value="Prefer not to answer">Perfer not to Answer</option>
              </select>
            </div>
            <div>
              <label htmlFor="DOB" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DOB</label>
              <input type="date" name="DOB" id="DOB" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none " required="" />
            </div>
            <div>
              <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
              <select id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected="">Select country</option>
                <option value="IN">India</option>
                <option value="JP">Japan</option>
                <option value="NP">Nepal</option>
                <option value="RU">Russia</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
              <input type="tel" name="contact" id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none " maxLength="10" required={true} />
            </div>
          </div>
          <button type="submit" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-6 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${ismatch ? "" : "cursor-not-allowed"}`} disabled={ismatch ? "" : "disabled"}> Register</button>
        </form>
      </div>
    </main >
  )
}



{/* <form onSubmit={handleRegister}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
          <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Shubham Sarda" required autoComplete="off" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="shubham@example.com" required autoComplete="off" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
          <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required minLength="7" />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
      </form> */}