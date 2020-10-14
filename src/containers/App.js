import React, { useState } from 'react';

import Nav from '../components/Nav.js';
import Employees from '../components/Employees.js';
import AddEmployee from '../components/AddEmployee.js';
import Reviews from '../components/Reviews.js';


const App = () => {
    
    const [role, setRole] = useState('admin');
    const [view, setView] = useState('employees');
    
    return (
        <div>
            <Nav view={view} setView={setView} setRole={setRole} />

            {role === 'admin' && <button onClick={() => { setView('employees'); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded">
                Employees
            </button>}

            <button onClick={() => { setView('reviews'); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded">
                Reviews
            </button>

            <div className="mx-auto p-6 bg-gray-100 mt-3 w-full rounded-lg shadow-l">
                
                <div className="ml-2 pt-1">
                    
                    {role === 'admin' && view === 'employees' && <Employees setView={setView} />}
                    {role === 'admin' && view === 'addEmployee' && <AddEmployee setView={setView} />}
                    {view === 'reviews' && <Reviews role={role} />}

                </div>
            </div>
        </div>
   
    )
};

export default App;