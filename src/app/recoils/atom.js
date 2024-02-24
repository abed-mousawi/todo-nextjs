"use client";
import { atom } from "recoil";

export const newTask = atom({
  key: "newTask",
  default: "",
});
