import { app } from "./app";

const PORT = 6004;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});