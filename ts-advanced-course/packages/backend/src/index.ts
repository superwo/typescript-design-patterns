import cors from "cors";
import express from "express";
import { User } from "@course/shared";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/user", (req, res) => {
    const user: User = {
        id: 1,
        email: "test@example.com",
    };

    res.json(user);
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});
