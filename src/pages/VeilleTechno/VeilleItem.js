import React from 'react';

const VeilleItem = ({ titre, date, descriptionLongue, lien }) => {
    return (
        <div className="veille-item bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-xl font-bold mb-2">{titre}</h3>
            {date && (
                <p className="text-sm text-gray-500 mb-2">Date: {date}</p>
            )}
            <p className="text-gray-700 mb-4">{descriptionLongue}</p>
            <a
                href={lien}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:text-blue-700 transition-colors"
            >
                Lire plus
            </a>
        </div>
    );
};

export default VeilleItem;
