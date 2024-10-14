"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "flowbite-react";

const Users = () => {
  const { data = {}, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios.get("https://66b46dac9f9169621ea2dbd1.mockapi.io/users"),
  });
  const { data: users = [] } = data;

  if (isLoading) return <Spinner aria-label="user-loading" />;

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Created At
          </th>
          <th scope="col" className="px-6 py-3">
            Job Title
          </th>
          <th scope="col" className="px-6 py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, name, email, createdAt, avatar, job_title }) => (
          <tr
            key={id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {name}
            </td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4">{createdAt}</td>
            <td className="px-6 py-4">{job_title}</td>
            <td className="px-6 py-4">Edit</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
