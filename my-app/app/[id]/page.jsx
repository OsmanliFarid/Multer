"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8080/upload/" + id).then(({ data }) => {
      setdata(data);
    });
  }, [id]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <img
        src={`http://localhost:8080/images/${data.avatar}`}
        alt={`${data.firstName} ${data.lastName}`}
        className="w-32 h-32 rounded-full mx-auto object-cover mb-6 border-2 border-blue-500"
      />
      <h1 className="text-2xl font-bold text-center mb-4">
        {data.firstName} {data.lastName}
      </h1>
      <p className="text-center text-gray-700 mb-2">Yaş: {data.age}</p>
      <p className="text-center text-gray-700 mb-2">📞 {data.phoneNumber}</p>
    </div>
  );
};

export default page;
