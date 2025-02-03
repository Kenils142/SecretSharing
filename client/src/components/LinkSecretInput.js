import React from "react";
import { FaLink } from "react-icons/fa";

function LinkSecretInput({ onSecretCreated }) {
    const [link, setLink] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSecretCreated();
    };

    return (
        <form onSubmit={handleSubmit} className="my-4">
            <div className="flex items-center mb-4 bg-secondary text-black border-borders border-2 rounded-sm">
                <FaLink size={30} className="mx-2" />
                <input
                    type="url"
                    placeholder='https://example.com'
                    id="linkSecret"
                    name="linkSecret"
                    value={link}
                    onChange={(event) => setLink(event.target.value)}
                    required
                    className="bg-secondary text-xl w-full p-3  focus:outline-none placeholder-gray-700"
                />
            </div>
            <div className='flex justify-end'>
                <button className="text-xl px-3 py-2 font-bold rounded-md bg-primary text-white"
                    type="submit">
                    Create secret
                </button>
            </div>
        </form>
    );
}

export default LinkSecretInput;