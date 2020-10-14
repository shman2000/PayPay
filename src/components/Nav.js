import React from 'react';

//ugly solution for navigation, menu items without proper cursor, etc 

const Nav = (props) => (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">FeedbackApp</span>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <span onClick={() => { props.setRole('admin'); props.setView('employees'); }} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray mr-4">
                    Admin
                </span>
                <span onClick={() => { props.setRole('user'); props.setView('reviews'); }} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                    Employee
                </span>
            </div>

        </div>
    </nav>
);

export default Nav;