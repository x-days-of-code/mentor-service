import { Router } from "express";
import { mentorListGet } from "./mentor-list.GET";

export const appRouter = Router()
    .get("/mentors", mentorListGet);