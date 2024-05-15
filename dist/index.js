import app from "./app.js";
import { connectToDatabase } from "./db/conection.js";
// Connections And Listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT} & Connected To Database`));
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map