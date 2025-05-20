import React from "react";
import Button from "../components/Button";
import HeaderC from "../components/headers/HeaderC";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <HeaderC />
      <div className="flex flex-1 flex-col items-center justify-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3 mt-8">Vous avez oublié votre mot de passe?</h1>
        <p className="text-base text-gray-600 text-center mb-10 max-w-lg">
          N'ayez crainte. Nous vous enverrons par e-mail les instructions pour réinitialiser votre mot de passe.
        </p>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-md p-8 flex flex-col items-center">
          <form className="w-full flex flex-col gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase text-left">Email</label>
              <input type="email" placeholder="Entrez votre email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200" />
            </div>
            <div className="flex justify-center mt-4">
              <Button type="submit" className="w-full">Envoyer</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
