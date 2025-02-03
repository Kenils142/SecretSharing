import React from 'react';
import { IoRefresh } from 'react-icons/io5';

function FeatureNotAvailable({ onCreateNew }) {
    return (
        <div className="bg-tertiary mt-6 py-4 px-6 rounded-md shadow-lg">
            <p className="text-xl mb-4 py-4 px-2 bg-secondary rounded-md">
                Feature not available yet
            </p>
            <div className="flex justify-end">
                <button onClick={onCreateNew} className="flex items-center text-xl px-3 py-2 font-bold rounded-md bg-primary text-white">
                    <IoRefresh className="mr-2" /> Create new Secret
                </button>
            </div>
        </div>
    );
}

export default FeatureNotAvailable;