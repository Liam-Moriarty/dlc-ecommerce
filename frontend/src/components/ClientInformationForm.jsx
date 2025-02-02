import React, { useState } from "react";
import Button from "./Button";
import { useUpdatedProfileMutation } from "../api/profileApi";

const ClientInformationForm = () => {
  const [profileForm, setProfileForm] = useState({
    company: "",
    contacts: "",
    email: "",
    city: "",
  });
  const [error, setError] = useState("");

  const [updatedProfile] = useUpdatedProfileMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // this will remove key value pairs that is empty to avoid sending
      // empty fields in the database
      const payload = Object.fromEntries(
        Object.entries(profileForm).filter(
          ([key, value]) => value.trim() !== ""
        )
      );

      const result = await updatedProfile(payload).unwrap();

      console.log(result);

      setProfileForm({
        company: "",
        contacts: "",
        email: "",
        city: "",
      });
      setError("");
    } catch (error) {
      const errorMessage = error?.data?.message || "Something went wrong";
      setError(errorMessage);
    }
  };

  const handleChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-10 py-6 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
      {/* top side */}
      <div className="flex justify-between items-center w-full h-auto">
        <h1 className="text-lg max-md:text-base font-bold text-black-text capitalize">
          Company Information
        </h1>
      </div>

      {/* form */}
      <form
        className="flex flex-col gap-4 w-full h-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 w-full h-auto">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">
            <div className="flex flex-col">
              <p className="profile-label">Company Name</p>
              <input
                type="text"
                className="profile-input"
                name="company"
                onChange={handleChange}
                value={profileForm.company}
              />
            </div>

            <div className="flex flex-col">
              <p className="profile-label">Contact Information</p>
              <input
                type="text"
                className="profile-input"
                name="contacts"
                onChange={handleChange}
                value={profileForm.contacts}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">
            <div className="flex flex-col">
              <p className="profile-label">Company Email</p>
              <input
                type="text"
                className="profile-input"
                name="email"
                onChange={handleChange}
                value={profileForm.email}
              />
            </div>

            <div className="flex flex-col">
              <p className="profile-label">Company Location</p>
              <input
                type="text"
                className="profile-input"
                name="city"
                onChange={handleChange}
                value={profileForm.city}
              />
            </div>
          </div>

          <p className="text-blue-500 font-semibold text-sm max-md:text-xs text-center mt-3 capitalize">
            For security purposes must relogin to see changes
          </p>

          {error && (
            <p className="text-red-text font-semibold text-sm max-md:text-xs text-center mt-3 capitalize">
              {error}
            </p>
          )}
        </div>

        <div className="my-5">
          <Button
            label="Submit"
            variant="primary"
            submit
            className="max-md:text-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default ClientInformationForm;
