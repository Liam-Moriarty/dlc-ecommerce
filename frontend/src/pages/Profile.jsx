import React from "react";
import ClientInformationForm from "../components/ClientInformationForm";
import ChangePasswordForm from "../components/ChangePasswordForm";

const Profile = () => {
  return (
    <div className="bg-primary w-full h-auto px-10 py-5">
      <div className="bg-primary w-full h-auto rounded-3xl flex flex-col gap-4">
        <ClientInformationForm />
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default Profile;
