import React from "react";
import { FaCopy } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";

function TextSecretLink({ link, onCreateNew }) {
    const [copyText, setCopyText] = React.useState('Copy');

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        setCopyText('Copied!');
        setTimeout(() => {
            setCopyText('Copy');
        }, 2000);
    };

    return (
        <div className="bg-tertiary mt-6 py-4 px-6 rounded-md shadow-lg">
            <p className="text-xl mb-4  py-4 px-2 bg-secondary rounded-md">
                {link}
            </p>
            <div className="flex justify-end space-x-4">
                <button onClick={handleCopy} className="flex items-center text-xl px-3 py-2 font-bold rounded-md bg-primary text-white">
                    <FaCopy className="mr-2" /> {copyText}
                </button>
                <button onClick={onCreateNew} className="flex items-center text-xl px-3 py-2 font-bold rounded-md bg-primary text-white">
                    <IoRefresh className="mr-2" /> Create new Secret
                </button>
            </div>
        </div>
    );
}

export default TextSecretLink;