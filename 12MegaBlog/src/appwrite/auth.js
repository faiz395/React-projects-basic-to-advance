import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }


    async createAccount({ name, email, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // call a function to login automatically
                return this.login({ email, password });
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            // try to use Dispatch to mark the value as true
            console.log('login successfull in appwrite');
            
            return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            console.log("Error is Login createEmailSession");

            throw error;
        }

    }

    async getCurrentUser() {
        try {
            const details= await this.account.get()
            // .then(() => { console.log("in FUNC logged in") }).catch((err) => {
            //     console.log("in FUNC Error" + err);
            // }).finally(() => {
            //     console.log("in FUNC FINALLY");
            // });
            console.log("In gettcurrentUser details val is mentioned below ");
            console.log(details);

            return details;
        } catch (error) {
            console.log('error in getCurrentUser function in auth.js: ', error);
        }

        return null;
    }

    async logout() {
        try {
            return this.account.deleteSessions()
        } catch (error) {
            console.log('error in logout function in auth.js: ', error);
        }
    }

}

const authService = new AuthService();

export default authService;
