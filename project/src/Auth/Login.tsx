import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
    name: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        password: '',
    });
    const [invalidCredentials, setInvalidCredentials] = useState(false);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Check credentials
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData: FormData = JSON.parse(storedUserData);
            if (userData.name === formData.name && userData.password === formData.password) {
                // Navigate to movie list page upon successful login
                navigate("/movieList");


            } else {
                setInvalidCredentials(true);
            }
        } else {
            setInvalidCredentials(true);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-6">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-md border border-gray-400 focus:outline-none focus:ring focus:border-blue-500 focus:z-10 w-full"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-md border border-gray-400 focus:outline-none focus:ring focus:border-blue-500 focus:z-10 w-full"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                {invalidCredentials && (
                    <p className="text-red-500 text-sm mb-4">Invalid credentials. Please try again.</p>
                )}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
