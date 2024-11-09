"use client";

import { Button, Loader, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { Spinner } from "flowbite-react";
import Link from "next/link";

const Users = () => {
  const { data: { data = {} } = {}, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("https://dummyjson.com/users"),
  });
  const { users = [] } = data;

  if (isLoading) return <Loader aria-label="user-loading" />;

  return (
    <>
      <Button>HELLO WORLD</Button>
      <Table>
        <Table.Thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <Table.Tr>
            <Table.Th scope="col" className="px-6 py-3">
              Username
            </Table.Th>
            <Table.Th scope="col" className="px-6 py-3">
              Email
            </Table.Th>
            <Table.Th scope="col" className="px-6 py-3">
              Gender
            </Table.Th>
            <Table.Th scope="col" className="px-6 py-3">
              Phone
            </Table.Th>
            <Table.Th scope="col" className="px-6 py-3">
              Actions
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {users.map(({ id, username, email, gender, phone }) => (
            <Table.Tr
              key={id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <Table.Td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link href={`/users/${id}`}>{username}</Link>
              </Table.Td>
              <Table.Td className="px-6 py-4">{email}</Table.Td>
              <Table.Td className="px-6 py-4">{gender}</Table.Td>
              <Table.Td className="px-6 py-4">{phone}</Table.Td>
              <Table.Td className="px-6 py-4">Edit</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
};

export default Users;
