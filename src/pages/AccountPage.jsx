import React from 'react';
import PrivateLayout from '../layouts/PrivateLayout';
import AccountForm from '../components/AccountForm';

const AccountPage = () => {
  return (
    
      <div className="flex flex-col items-center justify-center bg-white">
        <a href="/home" className="self-start mb-4 text-indigo-600 hover:underline text-base font-medium">
            &larr; Retour à l'accueil
        </a>
        <div className='flex flex-col items-center justify-center mt-24 bg-white'>
          <h1 className="text-2xl font-bold mb-4">Mon Compte</h1>
          <AccountForm />
        </div>
      </div>
    

  );
};

export default AccountPage;
