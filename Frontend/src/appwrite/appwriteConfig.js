import { Client, Account, Databases } from "appwrite";

const client = new Client();
client.setEndpoint("http://localhost/v1").setProject("63859b56da9071509268");

export const account = new Account(client);

//Database
export const databases = new Databases(client, "63859bdfe549296cd71f");
