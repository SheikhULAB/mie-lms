// components/ResourceManagement.tsx
"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';

interface Resource {
  id: number;
  name: string;
  type: string;
  quantity: number;
}

const ResourceManagement: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [resourceName, setResourceName] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [resourceQuantity, setResourceQuantity] = useState(1);

  const handleAddResource = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newResource: Resource = {
      id: Date.now(),
      name: resourceName,
      type: resourceType,
      quantity: resourceQuantity,
    };
    setResources((prevResources) => [...prevResources, newResource]);
    setResourceName('');
    setResourceType('');
    setResourceQuantity(1);
  };

  const handleDeleteResource = (id: number) => {
    setResources((prevResources) => prevResources.filter((resource) => resource.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-gray-800">Resource Management</h1>
        <form onSubmit={handleAddResource} className="mt-4 space-y-4">
          <div>
            <label htmlFor="resource-name" className="block text-gray-700">Resource Name:</label>
            <input
              id="resource-name"
              type="text"
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="resource-type" className="block text-gray-700">Resource Type:</label>
            <input
              id="resource-type"
              type="text"
              value={resourceType}
              onChange={(e) => setResourceType(e.target.value)}
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="resource-quantity" className="block text-gray-700">Quantity:</label>
            <input
              id="resource-quantity"
              type="number"
              value={resourceQuantity}
              onChange={(e) => setResourceQuantity(Number(e.target.value))}
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              min="1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Resource
          </button>
        </form>

        {/* Resource List */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Resources</h2>
          {resources.length === 0 ? (
            <p className="mt-4 text-gray-600">No resources added yet.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {resources.map((resource) => (
                <li key={resource.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold">{resource.name}</h3>
                    <p className="text-gray-600">Type: {resource.type} | Quantity: {resource.quantity}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteResource(resource.id)}
                    className="text-red-600 hover:text-red-500"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceManagement;
