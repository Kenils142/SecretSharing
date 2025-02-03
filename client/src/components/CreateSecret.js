import React, { useState } from 'react';
import TextSecretInput from './TextSecretInput';
import FileSecretInput from './FileSecretInput';
import LinkSecretInput from './LinkSecretInput';
import TextSecretLink from './TextSecretLink';
import FeatureNotAvailable from './FeatureNotAvailable';
import Header from './Header';

function CreateSecret() {
  const [option, setOption] = useState('text');
  const [link, setLink] = useState(null);
  const [featureNotAvailable, setFeatureNotAvailable] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleOptionChange = (option) => {
    setOption(option);
    setLink(null);
    setFeatureNotAvailable(false);
  };

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 400);
  }

  const handleSecretCreated = (link) => {
    setLink(link);
  };

  const handleFeatureNotAvailable = () => {
    setFeatureNotAvailable(true);
  };

  return (
    <div>
      <Header />
      <main>
        <h2 className='text-6xl font-bold text-primary my-4 '>Share a secret</h2>
        <p className='text-3xl text-black'>.…with a link that only works one time
          and then self-destructs.</p>
      </main>
      <section>
        {link ? (
          <TextSecretLink link={link} onCreateNew={() => setLink(null)} />
        ) : featureNotAvailable ? (
          <FeatureNotAvailable onCreateNew={() => handleOptionChange('text')} />
        ) : (
          <div className="bg-tertiary mt-6 py-2 px-6 rounded-md shadow-lg">
            <nav>
              <button className={`text-xl px-3 py-2 font-bold rounded-lg
                ${option === 'text' && clicked ? 'animate-clickSpread' : ''}  
                ${option === 'text' ? 'text-primary' : 'text-white'}`}
                onClick={() => { handleOptionChange('text'); handleButtonClick(); }}>
                Text
              </button>
              <button className={`text-xl px-3 py-2 font-bold rounded-lg
                ${option === 'file' && clicked ? 'animate-clickSpread' : ''}
                ${option === 'file' ? 'text-primary' : 'text-white'}`}
                onClick={() => { handleOptionChange('file'); handleButtonClick(); }}>
                File
              </button>
              <button className={`text-xl px-3 py-2 font-bold rounded-lg
                ${option === 'link' && clicked ? 'animate-clickSpread' : ''}
                ${option === 'link' ? 'text-primary' : 'text-white'}`}
                onClick={() => { handleOptionChange('link'); handleButtonClick(); }}>
                  Link
                  </button>
            </nav>
            <div>
              {option === 'text' && <TextSecretInput onSecretCreated={handleSecretCreated} />}
              {option === 'file' && <FileSecretInput onSecretCreated={handleFeatureNotAvailable} />}
              {option === 'link' && <LinkSecretInput onSecretCreated={handleFeatureNotAvailable} />}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default CreateSecret;