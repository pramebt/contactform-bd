'use client'; 

import React, { useState } from "react";

const Contactform = () => {
  // useState hook to handle form data and errors
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    queryType: "",
    showAlert: false,
    errors: { // To track validation errors
      firstName: false,
      lastName: false,
      email: false,
      message: false,
      queryType: false,
    },
  });

  // handleChange function to update formData on input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target; // Destructuring name and value from input fields
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Update the corresponding field in the state
      errors: { ...prev.errors, [name]: false }, // Reset the error for that field
    }));
  };

  // handleSubmit function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Validation checks for each field
    const errors = {
      firstName: formData.firstName.trim() === "",
      lastName: formData.lastName.trim() === "",
      email: !/\S+@\S+\.\S+/.test(formData.email), // Regex to validate email format
      message: formData.message.trim() === "",
      queryType: formData.queryType === "",
    };

    setFormData((prev) => ({
      ...prev,
      errors, // Set the validation errors in the state
    }));

    // Check if there are any errors
    if (!Object.values(errors).includes(true)) {
      setFormData((prev) => ({
        ...prev,
        showAlert: true, // Show success message if no errors
      }));
      setTimeout(
        () => setFormData((prev) => ({ ...prev, showAlert: false })), // Hide the alert after 3 seconds
        3000
      );
    }
  };

  return (
    <div className="relative w-full">
      {formData.showAlert && (
        <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-md shadow-lg z-50 w-full max-w-md text-center">
          ✅ Message sent successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-[800px] mx-auto p-4 sm:p-10 shadow-2xl rounded-2xl"
      >
        <h1 className="font-bold text-[28px] sm:text-[32px]">Contact Us</h1>

        <div className="flex md:flex-row flex-col gap-4 mt-5">
          <div className="flex-1 relative">
            <p>
              FirstName <span className="text-green-800">*</span>
            </p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="firstname"
              className={`w-full h-12 border rounded-md px-4 mt-2 ${
                formData.errors.firstName ? "border-red-500" : "border-gray-400"
              }`}
            />
            {formData.errors.firstName && (
              <p className="absolute text-red-500 text-sm mt-2 left-0">
                First name is required.
              </p>
            )}
          </div>
          <div className="flex-1 relative">
            <p>
              LastName <span className="text-green-800">*</span>
            </p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="lastname"
              className={`w-full h-12 border rounded-md px-4 mt-2 ${
                formData.errors.lastName ? "border-red-500" : "border-gray-400"
              }`}
            />
            {formData.errors.lastName && (
              <p className="absolute text-red-500 text-sm mt-2 left-0">
                Last name is required.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 relative">
          <p>
            Email <span className="text-green-800">*</span>
          </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className={`w-full h-12 border rounded-md px-4 mt-2 ${
              formData.errors.email ? "border-red-500" : "border-gray-400"
            }`}
          />
          {formData.errors.email && (
            <p className="absolute text-red-500 text-sm mt-2 left-0">
              Please enter a valid email.
            </p>
          )}
        </div>

        <div className="mt-10">
          <p>
            Query Type <span className="text-green-800">*</span>
          </p>
          <div className="flex md:flex-row flex-col gap-4 mt-2">
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="queryType"
                value="general"
                onChange={handleChange}
                className="peer hidden"
              />
              <div className="w-full h-12 flex items-center justify-center border border-gray-400 rounded-md px-4 peer-checked:border-green-500 peer-checked:bg-green-50 transition">
                General
              </div>
            </label>

            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="queryType"
                value="technical"
                onChange={handleChange}
                className="peer hidden"
              />
              <div className="w-full h-12 flex items-center justify-center border border-gray-400 rounded-md px-4 peer-checked:border-green-500 peer-checked:bg-green-50 transition">
                Technical
              </div>
            </label>
          </div>
          {formData.errors.queryType && (
            <p className="text-red-500 text-sm mt-2">Please select a query type.</p>
          )}
        </div>

        <div className="mt-5 relative">
          <p>
            Message <span className="text-green-800">*</span>
          </p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            className={`w-full h-32 border rounded-md px-4 py-2 mt-2 resize-none ${
              formData.errors.message ? "border-red-500" : "border-gray-400"
            }`}
          />
          {formData.errors.message && (
            <p className="absolute text-red-500 text-sm mt-2 left-0">
              Message is required.
            </p>
          )}
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="bg-green-600 text-white w-full h-12 rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
