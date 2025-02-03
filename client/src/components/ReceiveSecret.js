import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCopy, FaReply } from 'react-icons/fa';
import Header from './Header';

function ReceiveSecret() {
  const { secretId } = useParams();
  const navigate = useNavigate();
  const [secret, setSecret] = React.useState('');
  const [error, setError] = React.useState('');
  const [copyText, setCopyText] = React.useState('Copy');

  const handleReveal = () => {
    const storedSecret = localStorage.getItem(secretId);
    if (storedSecret) {
      setSecret(storedSecret);
      localStorage.removeItem(secretId);
    } else {
      setError('Secret not found or already read.');
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(secret);
    setCopyText('Copied!');
    setTimeout(() => {
      setCopyText('Copy');
    }, 2000);
  }

  const handleReply = () => {
    navigate('/');
  }

  return (
    <div>
      <Header />
      <main>
        <h2 className="text-6xl font-bold text-primary my-4">Knock Knock</h2>
        <p className="text-3xl text-black">You have received a secret</p>
      </main>
      {(secret || error) && (
        <div className="flex justify-start mt-4">
          <button onClick={handleReply} className="flex items-center text px-3 py-2 font-bold bg-transparent text-white">
            <FaReply className="mr-2" /> Reply with a secret
          </button>
        </div>
      )}
      <section className={`bg-tertiary py-4 px-6 rounded-md shadow-lg ${secret || error ? '' :'mt-6'}`}>
        {secret ? (
          <div>
            <p className="text-xl mb-4 py-4 px-2 bg-secondary rounded-md">{secret}</p>
            <div className="flex justify-end space-x-4">
              <button onClick={handleCopy} className="flex items-center text-xl px-3 py-2 font-bold rounded-md bg-primary text-white">
                <FaCopy className="mr-2" /> {copyText}
              </button>
            </div>
          </div>
        ) : error ? (
          <div>
            <p className="text-xl py-2 px-2">{error}</p>
          </div>
        ) : (
          <div>
            <p className="text-xl mb-4 py-4 px-2 bg-secondary rounded-md">The following secret can only be received once</p>
            <div className="flex justify-end space-x-4">
              <button onClick={handleReveal} className="flex items-center text-xl px-3 py-2 font-bold rounded-md bg-primary text-white"> Reveal Secret</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default ReceiveSecret;