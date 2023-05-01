import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Popup = ({ titre, descriptionItems, icon  }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                className="btn btn-primary btn-icon btn-round btn-sm"
                onClick={handleShow}>
                <FontAwesomeIcon icon={['fas', icon]}/>
            </button>

            {show && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            onClick={handleClose}
                        ></div>
                        <div
                            className="bg-white rounded-lg px-4 pt-5 pb-4 sm:p-6 sm:pb-4 transform transition-all scale-95"
                            style={{ animation: 'modal-show 0.3s ease-out forwards' }}
                        >
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                    <h3
                                        className="text-lg leading-6 font-medium text-gray-900"
                                        id="modal-title"
                                    >
                                        {titre}
                                    </h3>
                                    <div className="mt-2">
                                        <ul className="list-disc list-inside text-sm text-gray-500 text-left">
                                            {descriptionItems.map((item, index) => (
                                                <li key={index}>{item.libelle}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:text-sm"
                                    onClick={handleClose}
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
