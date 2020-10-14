import React, { useState, useEffect } from 'react';

/*
Kept for reference, first I prepared static data to test UI components, then moved it to DB

const reviewData = [
    { 
        _id: "1",
        "name": "John Smith",
        "feedback": [
            { 
                "employee_id": 1,
                "score": 10,
                "comment": "Great dev!"
            },{ 
                "employee_id": 2,
                "score": 6,
                "comment": "Not bad!"
            },{ 
                "employee_id": 3,
                "score": 10,
                "comment": "Keep up the good work!"
            }
        ],
        "assigned": [ 1, 2, 3 ]
    },
    { 
        _id: "2",
        "name": "Anna Smith",
        "feedback": [
            { 
                "employee_id": 1,
                "score": 10,
                "comment": "Great dev!"
            },{ 
                "employee_id": 2,
                "score": 9,
                "comment": "Not bad!"
            },{ 
                "employee_id": 3,
                "score": 8,
                "comment": "Keep up the good work!"
            }
        ],
        "assigned": [ 1, 2, 3, 4, 5 ]
    },
    { 
        _id: "3",
        "name": "Adam Spencer",
        "feedback": [
            { 
                "employee_id": 1,
                "score": 8,
                "comment": "Great dev!"
            },{ 
                "employee_id": 2,
                "score": 9,
                "comment": "Not bad!"
            },{ 
                "employee_id": 3,
                "score": 10,
                "comment": "Keep up the good work!"
            }
        ],
        "assigned": [ 1, 2, 3, 4 ]
    },

];*/



const Reviews = (props) =>  {

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8001/reviews')
            .then(response => response.json())
            .then(data => setReviews(data));

    }, []);

    //no error states, empty states etc
    //mocked data where it was possible
    //I would prepare components for table and pagination if there would be more time
    
    return (
        <div className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
            <h1 className="text-2xl text-blue-700 leading-tight mb-3 w-full">Reviews</h1>

            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 mb-10 w-full">
                    <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                        <div className="flex justify-between">
                            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                                <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                    <div className="flex">
                                        <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                            <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                    <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Review</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Feedback / Assigned</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Avg Score</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {reviews && reviews.map((review, i) => {
                                    return <ReviewRow review={review} key={'rr'+i} />
                                })}
                            </tbody>
                        </table>

                        <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                            <div>
                                <p className="text-sm leading-5 text-blue-700">
                                    Showing
                                    <span className="font-medium pl-1 pr-1">1</span>
                                    to
                                    <span className="font-medium pl-1 pr-1">200</span>
                                    of
                                    <span className="font-medium pl-1 pr-1">2000</span>
                                    results
                                </p>
                            </div>
                            <div className="mb-4">
                                <nav className="relative z-0 inline-flex shadow-sm">
                                    <div>
                                        <span className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            1
                                        </span>
                                        <span className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            2
                                        </span>
                                        <span className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            3
                                        </span>
                                    </div>
                                    <div>
                                        <span className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </nav>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ReviewRow = (props) => {

    //a bit more error handling needed here, empty arrays etc...

    let scores = props.review.feedback.map(item => item.score);
    let totalScore = scores.reduce((total, score) => { return total + score;  }, 0);
    let avgScore = '-';
    if(props.review.feedback && props.review.feedback.length !== 0) {
        avgScore = totalScore / props.review.feedback.length;
    }

    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-blue-900">{props.review.name}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{props.review.feedback.length} / {props.review.assigned.length}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                {avgScore.toFixed(2)}
            </td>

            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
            </td>
        </tr>
    )

} ;

export default Reviews;