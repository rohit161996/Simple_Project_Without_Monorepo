import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
    const users = await prismaClient.user.findMany();
    res.json({ users });
})

app.post("/", async (req, res) => {

    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })

    res.json({
        "message": "Post Endpoint"
    })

})

app.listen(3000);