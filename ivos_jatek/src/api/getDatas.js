import { MongoClient } from "mongodb";

export async function getPath() {
    const client = await MongoClient.connect("mongodb+srv://cluster0.8cvqk.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority");

    const db = client.db();

    const usersCollection = db.collection("Users");

    const users = await usersCollection.find().toArray();

    client.close();

    return {
        users: users.map((user) => ({
            id: user._id.toString(),
            username: user.Username,
            password: user.Password,
            email: user.Email,
            characterName: user.Character.CharacterName,
            characterLevel: user.Character.Level,
        })),
        revalidate: 1,
    }
}
