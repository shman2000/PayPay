import React from 'react';
import useForm from './useForm';


//no error handling, but it can be easily added in "useForm"

const AddEmployee = (props) => {

    const create = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: inputs.name, surname: inputs.surname, email: inputs.email, phone: inputs.phone, status: inputs.status })
        };
        fetch('http://localhost:8001/addEmployee', requestOptions)
            .then(response => response.json())
            .then(data => {
                props.setView('employees');
            });

    }

    const { inputs, handleInputChange, handleSubmit } = useForm({name: '', surname: '', email: '', phone: '', status: 'active'}, create);
    
 
    return (
        <div className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
            <h1 className="text-2xl text-blue-700 leading-tight mb-4 w-full">Add Employee</h1>
    
            <form onSubmit={handleSubmit} autoComplete="off" className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="name" onChange={handleInputChange} value={inputs.name} required />
                        </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" name="surname" onChange={handleInputChange} value={inputs.surname} required />
                        </div>
                </div>
                <div className="flex flex-wrap -mx-4 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            E-mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="john.smith@paypay.com" name="email" onChange={handleInputChange} value={inputs.email} required />
                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Phone
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="text" placeholder="080800000" name="phone" onChange={handleInputChange} value={inputs.phone} required />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>


        </div>
    );
    
    
}


export default AddEmployee;