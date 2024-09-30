"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

// Define interfaces for event data
interface Event {
  name: string;
  details: string;
  startDate: string;
  endDate: string;
  picture?: File | null;
  link?: string;
}

const EventDetailsDashboard: React.FC = () => {
  // State to manage events
  const [events, setEvents] = useState<Event[]>([
    {
      name: "Event Name Example",
      details: "Event details go here...",
      startDate: "2024-09-25",
      endDate: "2024-09-30",
    },
  ]);

  // State to manage form inputs
  const [newEvent, setNewEvent] = useState<Event>({
    name: "",
    details: "",
    startDate: "",
    endDate: "",
    picture: null,
    link: "",
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Safely access the first file if files exist
    if (file) {
      setNewEvent((prev) => ({ ...prev, picture: file }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add new event to the list
    setEvents((prev) => [...prev, newEvent]);
    // Reset form
    setNewEvent({
      name: "",
      details: "",
      startDate: "",
      endDate: "",
      picture: null,
      link: "",
    });
  };

  // Handle delete event
  const handleDelete = (index: number) => {
    setEvents((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar positioned on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 p-6 space-y-6 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        {/* Event List Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Posted Events</h2>
          <div className="mt-4">
            <ul className="space-y-4">
              {events.map((event, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start justify-between p-4 bg-gray-100 rounded-lg shadow-md md:flex-row"
                >
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800">{event.name}</h3>
                    <p className="text-sm text-gray-600">{event.details}</p>
                    <p className="text-sm text-gray-600">
                      Date: {event.startDate} to {event.endDate}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                      Modify
                    </button>
                    <button
                      className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Create New Event Section */}
        <section className="p-4 bg-white rounded-lg shadow-lg md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">Create New Event</h2>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            {/* Event Name */}
            <div>
              <label className="block text-gray-700">Event Name</label>
              <input
                type="text"
                name="name"
                value={newEvent.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter event name"
                required
              />
            </div>

            {/* Event Details */}
            <div>
              <label className="block text-gray-700">Event Details</label>
              <textarea
                name="details"
                value={newEvent.details}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                rows={4}
                placeholder="Enter event details"
                required
              />
            </div>

            {/* Event Picture Upload */}
            <div>
              <label className="block text-gray-700">Event Picture</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            {/* Event Link Upload */}
            <div>
              <label className="block text-gray-700">Event Link</label>
              <input
                type="url"
                name="link"
                value={newEvent.link}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter event link"
              />
            </div>

            {/* Event Dates */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={newEvent.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={newEvent.endDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
            </div>

            {/* Publish Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-800"
              >
                Publish Event
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EventDetailsDashboard;
