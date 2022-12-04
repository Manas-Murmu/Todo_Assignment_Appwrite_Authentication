import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";

function Profile() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-right py-5 px-14">
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {userDetails ? (
        <div>
          <h1 className="font-bold text-center text-2xl">
            Welcome {userDetails.name.toUpperCase()}
          </h1>
          <Dashboard />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Profile;
