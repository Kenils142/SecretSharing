import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

function FileSecretInput({ onSecretCreated }) {
    const [file, setFile] = React.useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(file);
        onSecretCreated();
    };

    return (
        <form onSubmit={handleSubmit} className="my-4">
            <div className="flex items-center justify-center mb-4 
            border-light-gray border-2 border-dashed rounded-lg py-6">
                <label htmlFor="fileSecret" 
                className="bg-secondary text-black text-xl p-3 cursor-pointer rounded-md
                flex items-center justify-center space-x-2 border-2 border-borders">
                    <FaCloudUploadAlt size={30} />
                    <span>Select File</span>
                    <input
                        type="file"
                        id="fileSecret"
                        name="fileSecret"
                        onChange={(event) => setFile(event.target.files[0])}
                        required
                        style={{ display: 'none' }}
                    />
                </label>
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

export default FileSecretInput;