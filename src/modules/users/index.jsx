"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "flowbite-react";
import Link from "next/link";

const Users = () => {
  const { data: { data = {} } = {}, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("https://dummyjson.com/users"),
  });
  const { users = [] } = data;

  if (isLoading) return <Spinner aria-label="user-loading" />;

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Username
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Gender
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
          <th scope="col" className="px-6 py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, username, email, gender, phone }) => (
          <tr
            key={id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <Link href={`/users/${id}`}>{username}</Link>
            </td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4">{gender}</td>
            <td className="px-6 py-4">{phone}</td>
            <td className="px-6 py-4">Edit</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
