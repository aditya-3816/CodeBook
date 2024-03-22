import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Login.png";
import { getUser } from "../../services";
import { Link } from "react-router-dom";
import { updateUser } from "../../services/";

export const ProfilePage = () => {

    const [user, setUser] = useState({});
    const [showProfile, setShowProfile] = useState(true);

    // const firstName = useRef();
    // const lastName = useRef();
    // const email = useRef();
    // const gender = useRef();
    // const DOB = useRef();
    // const country = useRef();
    // const contact = useRef();

    // function fillDetails() {
    //     firstName.current.value = user.firstName;
    //     lastName.current.value = user.lastName;
    //     email.current.value = user.email;
    //     gender.current.value = user.gender;
    //     DOB.current.value = user.DOB;
    //     country.current.value = user.country;
    //     contact.current.value = user.contact;
    // };

    // const handleChange = (e) => {
    //     console.log(e.target.value);
    // }

    useEffect(() => {

        async function fetchData() {
            try {
                const data = await getUser();
                setUser(data);
            } catch (error) {
                toast.error(error.message, { closeOnClick: true });
            }

        }
        fetchData();
        // fillDetails();

    },);

    async function handleUpdate(event) {
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
            const data = await updateUser(authDetails);
            setUser(data);
        } catch (error) {
            toast.error(error.message, { closeOnClick: true });
        }

    }

    return (
        <main>
            <section>
                <div className="flex justify-center">
                    {/* <div className="w-full mt-4 max-w-sm max-h-96 bg-white border border-white rounded-lg shadow dark:bg-gray-700 "> */}
                    <div className="flex flex-col mt-16 items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Logo} alt="Logged-in Logo" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                        <div className="flex mt-4 md:mt-6">
                            <button onClick={() => setShowProfile(!showProfile)} className="inline-flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill mr-2" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                                </svg>
                                View Profile
                            </button>
                            <Link to="/dashboard" className="inline-flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" className="bi bi-list-ul mr-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                </svg>
                                Dashboard
                            </Link>
                        </div>
                    </div>
                    {/* </div> */}

                    <div className="py-8 px-4 mx-auto ml-16 mt-14 max-w-4xl lg:py-5 border rounded-lg border-gray-300 dark:border-gray-700" hidden={showProfile}>
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">My Profile</h2>
                        <form onSubmit={handleUpdate}>
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="w-full">
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input type="text" value={user.firstName} name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" value={user.lastName} name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" /*onChange={(e) => setUser({ ...user, lastName: e.target.name.value })} */ />
                                </div>
                                <div>
                                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                    <select id="gender" value={user.gender} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" /*onChange={(e) => setUser({ ...user, gender: e.target.name.value })}*/>
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
                                    <input type="date" value={user.DOB} name="DOB" id="DOB" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none " /*onChange={(e) => setUser({ ...user, DOB: e.target.name.value })}*/ />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                                    <input type="email" value={user.email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" /*onChange={(e) => setUser({ ...user, email: e.target.name.value })}*/ />
                                </div>
                                <div>
                                    <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                    <select id="country" value={user.country} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" /*onChange={(e) => setUser({ ...user, country: e.target.name.value })}*/>
                                        <option selected="">Select country</option>
                                        <option value="IN">India</option>
                                        <option value="JP">Japan</option>
                                        <option value="NP">Nepal</option>
                                        <option value="RU">Russia</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                    <input type="number" value={user.contact} name="contact" id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none " /*onChange={(e) => setUser({ ...user, contact: e.target.name.value })} */ />
                                </div>

                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Profile</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}




{/* <section>
                <p className="text-2xl text-center font-mono dark:text-slate-100 my-10 underline underline-offset-8">{`${user.name}'s Profile`}</p>
            </section> */}


{/* <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>

                        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}


