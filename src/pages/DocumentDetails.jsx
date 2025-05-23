import ApercuDocument from "../components/ApercuDocument";
import ModalConfirmationSuppression from "../components/ModalConfirmationSuppression";

// Détails d'un document
function DocumentDetails() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative">
      <a
        href="/home"
        className="absolute left-8 top-8 text-indigo-600 hover:underline text-base font-medium"
        style={{ zIndex: 10 }}
      >
        &larr; Retour à l'accueil
      </a>
      <div className="flex flex-col items-center justify-center mt-24 bg-white">
        <ApercuDocument />
      </div>
    </div>
  );
}
export default DocumentDetails;
