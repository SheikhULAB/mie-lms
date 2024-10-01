import { FC } from "react";

interface SubmitButtonProps {
  handleSubmit: (e: React.FormEvent) => void;
}

const SubmitButton: FC<SubmitButtonProps> = ({ handleSubmit }) => (
  <div className="flex justify-center mt-8">
    <button
      onClick={handleSubmit}
      className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Submit Test
    </button>
  </div>
);

export default SubmitButton;
