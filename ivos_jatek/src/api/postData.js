import { MongoClient } from "mongodb";

export async function postPath(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://cluster0.8cvqk.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority");

        const db = client.db();

        const usersCollection = db.collection("Users");

        const result = await usersCollection.insertOne(data);
        console.log(result)

        client.close();

        res.status(201).json({ message: "Inserted" })
    }
}
