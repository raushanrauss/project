import React, { useState } from 'react';

interface FormData {
    name: string;
    password: string;
    email: string;
    phone: string;
    profession: string;
}

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        password: '',
        email: '',
        phone: '',
        profession: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(formData));
        setFormData({
            name: '',
            password: '',
            email: '',
            phone: '',
            profession: '',
        });
        alert('User data stored successfully!');
    };

    return (
        /////
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" value={formData.email} onChange={handleChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" onChange={handleChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number:</label>
                                <input type="number" name="number" placeholder="+91" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Profession:</label>
                                <select
                                    name="profession"
                                    value={formData.profession}
                                    onChange={handleChange}
                                    className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-md border border-gray-400 focus:outline-none focus:ring focus:border-blue-500 focus:z-10 w-full"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="Engineer">Engineer</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>




        ////


        // <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
        //   <h1 className="text-2xl font-semibold mb-6">User Signup</h1>
        //   <form onSubmit={handleSubmit}>
        //     <div className="mb-4">
        //       <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        //       <input
        //         type="text"
        //         name="name"
        //         value={formData.name}
        //         onChange={handleChange}
        //         className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-md border border-gray-400 focus:outline-none focus:ring focus:border-blue-500 focus:z-10 w-full"
        //         placeholder="Enter your name"
        //         required
        //       />
        //     </div>
        //     <div className="mb-4">
        //       <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        //       <input
        //         type="password"
        //         name="password"
        //         value={formData.password}
        //         onChange={handleChange}
        //         className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-md border border-gray-400 focus:outline-none focus:ring focus:border-blue-500 focus:z-10 w-full"
        //         placeholder="Enter your password"
        //         required
        //       />
        //     </div>
        //     <div className="mb-4">
        //       <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        //       <input
        //         type="email"
        //         name="email"
        //         value={formData.email}
        //         onChange={handleChange}
        //         className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-md border border-gray-400 focus:outline-none focus:ring focus:border-blue-500 focus:z-10 w-full"
        //         placeholder="Enter your email"
        //         required
        //       />
        //     </div>
        //     <div className="mb-4">
        //       <label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
        //       <input
        //         type="tel"
        //         name="phone"
        //         value={formData.phone}
        //         onChange={handleChange}
        //         className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-md border border-gray-400 focus:outline-none focus:ring focus:border-blue-500 focus:z-10 w-full"
        //         placeholder="Enter your phone number"
        //         required
        //       />
        //     </div>
        //     <div className="mb-4">
        //       <label className="block text-gray-700 text-sm font-bold mb-2">Profession:</label>
        //       <select
        //         name="profession"
        //         value={formData.profession}
        //         onChange={handleChange}
        //         className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-md border border-gray-400 focus:outline-none focus:ring focus:border-blue-500 focus:z-10 w-full"
        //         required
        //       >
        //         <option value="">Select</option>
        //         <option value="Engineer">Engineer</option>
        //         <option value="Doctor">Doctor</option>
        //         <option value="Teacher">Teacher</option>
        //         <option value="Student">Student</option>
        //       </select>
        //     </div>
        //     <button
        //       type="submit"
        //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        //     >
        //       Submit
        //     </button>
        //   </form>
        // </div>
    );
};

export default SignUp;
