"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/upload").then(({ data }) => {
      setdata(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {user.map((user, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg"
        >
          <img
            src={`http://localhost:8080/images/${user.avatar}`}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 mb-4"
          />
          <h2 className="text-xl font-semibold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600">Yaş: {user.age}</p>
          <p className="text-gray-600">📞 {user.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
