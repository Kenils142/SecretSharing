import React from 'react';
import { FaUserSecret } from 'react-icons/fa';

function Header() {
    return (
        <header className="flex items-center py-3 text-borders">
            <FaUserSecret size={30} />
            <h1 className="text-4xl font-bold ml-4">Secret Sharing</h1>
        </header>
    );
}

export default Header;