"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
const Users = () => {
  const [user, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/upload").then(({ data }) => {
      setdata(data);
      console.log(data);
    });
  }, []);
  const DeleteClick = (id) => {
    axios.delete("http://localhost:8080/upload/" + id).then(({ data }) => {
      setdata((prev) => prev.filter((prev) => prev.id !== id));
    });
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {user.map((user, index) => (
        <div
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg"
          key={user.id}
        >
          <Link href={`/${user.id}`}>
            <div className="">
              <img
                src={`http://localhost:8080/images/${user.avatar}`}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 mb-4"
              />
              <h2 className="text-xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-600">Yaş: {user.age}</p>
              <p className="text-gray-600">number: {user.phoneNumber}</p>
            </div>
          </Link>
          <MdDelete
            className="text-2xl mt-10 cursor-pointer"
            onClick={() => DeleteClick(user.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Users;
