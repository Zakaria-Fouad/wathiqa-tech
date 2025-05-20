import React from "react";
import HeaderC from "../components/headers/HeaderC";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <HeaderC />
      {/* Main content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-md p-8 flex flex-col">
          <h1 className="text-2xl font-bold text-indigo-700 text-center mb-2">WathiqaTech</h1>
          <h2 className="text-lg font-bold text-gray-900 text-center mb-6 tracking-widest">SE CONNECTER</h2>
          <div className="text-center text-sm mb-8">
            VOUS N'AVEZ PAS DE COMPTE ?
            <a href="#" className="ml-2 text-sky-500 font-semibold hover:underline">SIGN UP</a>
          </div>
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-base font-bold text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="Entrez votre email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200" />
            </div>
            <div>
              <label className="block text-base font-bold text-gray-700 mb-1 ">Mot de passe</label>
              <input type="password" placeholder="Entrez votre mot de passe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200" />
            </div>
            <div className="text-right text-xs text-gray-500 mb-2">
              <a href="#" className="hover:underline">MOT DE PASSE OUBLIÉ ?</a>
            </div>
            <Button type="submit" className="w-full">Se Connecter</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
