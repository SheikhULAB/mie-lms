import React from "react";

interface TaskComponentProps {
  taskTitle: string;
  taskText: string;
  taskFile: File | null;
  onTextChange: (text: string) => void;
  onFileChange: (file: File | null) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = ({
  taskTitle,
  taskText,
  taskFile,
  onTextChange,
  onFileChange,
}) => (
  <div className="p-8 bg-white rounded-lg shadow-md">
    <h2 className="mb-4 text-2xl font-bold text-gray-700">{taskTitle}</h2>
    <textarea
      rows={taskTitle === "Task 1: Writing Report" ? 8 : 10}
      className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={taskText}
      onChange={(e) => onTextChange(e.target.value)}
    />

    <div className="mb-6 text-center text-gray-700">OR</div>

    <input
      type="file"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
      onChange={(e) => onFileChange(e.target.files ? e.target.files[0] : null)}
    />
  </div>
);

export default TaskComponent;
