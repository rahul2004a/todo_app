"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "@/app/components/Tasks/Tasks";

const page = () => {
  const { incompleteTasks } = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={incompleteTasks} />;
};

export default page;
