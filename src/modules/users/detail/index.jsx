"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useParams } from "next/navigation";

const UserDetail = () => {
  const { id } = useParams();

  const {
    data: { data = {} } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user-detail", id],
    queryFn: () => axios.get(`https://dummyjson.com/users/${id}`),
  });
  const { email } = data;

  if (isLoading) return <Spinner aria-label="user-loading" />;
  if (error) return <h1>Internal server error</h1>;

  return (
    <>
      <p>{email}</p>
    </>
  );
};

export default UserDetail;
