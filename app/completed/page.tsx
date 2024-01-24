"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "@/app/components/Tasks/Tasks";
const Completed = () => {
  const { completedTasks } = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
};

export default Completed;
