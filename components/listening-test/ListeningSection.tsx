import { FC } from "react";

interface ListeningSectionProps {
  sectionTitle: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { [key: string]: string };
}

const ListeningSection: FC<ListeningSectionProps> = ({ sectionTitle, handleChange, formData }) => (
  <section className="mt-8">
    <h3 className="text-xl font-semibold text-gray-700">{sectionTitle}</h3>
    <p className="mt-4 text-gray-600">Listen and answer the questions below:</p>

    <div className="mt-6">
      <h4 className="font-semibold text-gray-800">Questions 1-5: Multiple Choice</h4>
      <ul className="mt-4 space-y-2 list-decimal list-inside">
        <li>
          What time does the event start?
          <br />
          <label className="block">
            <input
              type="radio"
              name="q1"
              value="A"
              onChange={handleChange}
              className="mr-2"
            />
            A. 10:00 AM
          </label>
          <label className="block">
            <input
              type="radio"
              name="q1"
              value="B"
              onChange={handleChange}
              className="mr-2"
            />
            B. 11:00 AM
          </label>
          <label className="block">
            <input
              type="radio"
              name="q1"
              value="C"
              onChange={handleChange}
              className="mr-2"
            />
            C. 12:00 PM
          </label>
          <label className="block">
            <input
              type="radio"
              name="q1"
              value="D"
              onChange={handleChange}
              className="mr-2"
            />
            D. 1:00 PM
          </label>
        </li>
      </ul>

      <h4 className="mt-6 font-semibold text-gray-800">Form Completion</h4>
      <div className="p-4 mt-4 rounded-lg bg-gray-50">
        <p className="text-gray-700">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-1 ml-2 border rounded"
            placeholder="e.g., John Doe"
          />
        </p>
        <p className="text-gray-700">
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-1 ml-2 border rounded"
            placeholder="e.g., john.doe@example.com"
          />
        </p>
        <p className="text-gray-700">
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-1 ml-2 border rounded"
            placeholder="e.g., 123-456-7890"
          />
        </p>
      </div>
    </div>
  </section>
);

export default ListeningSection;
