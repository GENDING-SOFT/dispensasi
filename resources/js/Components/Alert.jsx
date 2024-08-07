import React from 'react';

export const Alert = ({ showModal, setShowModal, handleOutsideClick, children }) => {
    if (!showModal) return null;

    return (
        <div
            className="flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 md:h-full modal-overlay"
            onClick={handleOutsideClick}
        >
            <div className="p-4 w-full max-w-md h-full md:h-auto">

                <div className="p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                    </button>
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                        <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{children}</p>
                    <button
                        className="rounded-md bg-blue-600 py-1.5 px-6 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export const AlertQuestion = ({ showModal, setShowModal, handleOutsideClick, children, onYesClick, onNoClick }) => {
    if (!showModal) return null;

    return (
        <div
            className="flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 md:h-full modal-overlay"
            onClick={handleOutsideClick}
        >
            <div className="p-4 w-full max-w-md h-full md:h-auto">

                <div className="p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                    </button>
                    <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                        <svg aria-hidden="true" className="w-8 h-8 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-9a1 1 0 011 1v3a1 1 0 01-2 0V8a1 1 0 011-1zm0 6a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{children}</p>
                    <div className="flex justify-center space-x-4">
                        <button
                            className="rounded-md bg-green-600 py-1.5 px-6 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            onClick={onYesClick}
                        >
                            Yes
                        </button>
                        <button
                            className="rounded-md bg-red-600 py-1.5 px-6 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            onClick={onNoClick}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
