import { Request, NextFunction, Response } from "express";

export function mentorListGet(
    _req: Request,
    res: Response,
    _next: NextFunction,
) {
    res.json([{
        name: "Вася",
    }]);
}