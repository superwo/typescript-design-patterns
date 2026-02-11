import { useEffect, useState } from "react";
import { type User, isUser } from "@course/shared";

function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetch("http://localhost:3000/user")
            .then((res) => res.json())
            .then((data: unknown) => {
                if (isUser(data)) {
                    setUser(data);
                } else {
                    console.error("Invalid user data");
                }
            });
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User</h1>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default App;
