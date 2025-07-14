"use client";
import axios from "axios";
import React, { useState } from "react";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", Date.now());
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("age", age);
    formData.append("phoneNumber", phoneNumber);
    if (avatar) {
      formData.append("avatar", avatar);
    }
    axios.post("http://localhost:8080/upload", formData).then(({ data }) => {
      console.log(data);
    });
    setFirstName("");
    setLastName("");
    setAge("");
    setPhoneNumber("");
    setAvatar(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Yeni İstifadəçi Əlavə Et
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Ad:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Adınızı daxil edin"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Soyad:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Soyadınızı daxil edin"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Yaş:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Yaşınızı daxil edin"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Telefon Nömrəsi:
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Telefon nömrənizi daxil edin"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Avatar (Şəkil):
          </label>
          <input
            name="avatar"
            type="file"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
            className="w-full text-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Əlavə et
        </button>
      </form>
    </div>
  );
};

export default AddUser;
