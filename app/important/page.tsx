"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "@/app/components/Tasks/Tasks";

const Important = () => {
  const { importantTasks } = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={importantTasks} />;
};

export default Important;
