import React from 'react';

function TextSecretInput({ onSecretCreated }) {
    const [text, setText] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const secretId = Date.now().toString();
        localStorage.setItem(secretId, text);
        const link = `${window.location.origin}/${secretId}`;
        onSecretCreated(link);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea className="bg-secondary text-black text-xl 
            w-full h-40 my-4 rounded-sm p-3 border-borders border-2 resize-none
              focus:outline-none placeholder-gray-700"
                placeholder='Whats your secret?'
                id="textSecret"
                name="textSecret"
                value={text}
                onChange={(event) => setText(event.target.value)}
                required
            ></textarea>
            <div className='flex justify-end'>
                <button className="text-xl px-3 py-2 font-bold rounded-md bg-primary text-white"
                    type="submit">
                    Create secret
                </button>
            </div>
        </form>
    );
}

export default TextSecretInput;