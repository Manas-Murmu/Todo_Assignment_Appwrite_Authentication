import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";

import SignIn from "./SignIn";
import TodoList from "../components/TodoList";
import { FaPray } from "react-icons/fa";

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
          <h1 className="font-bold text-center text-3xl">
            Welcome <span className="text-green-500"> {userDetails.name}</span>
          </h1>
          <p className="text-center font-semibold">Create Your Todo and Task</p>
          <TodoForm id={userDetails.$id} />
          <TodoList id={userDetails.$id} />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Profile;
