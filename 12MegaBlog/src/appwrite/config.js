import conf from '../conf/conf'
import { Client, Databases, Storage, ID, Query } from 'appwrite'

// https://appwrite.io/docs/products/auth/quick-start#login
// https://appwrite.io/docs/references/cloud/client-web/storage

export class Service {
    client;
    databases;
    bucket;

    constructor() {
        this.client= new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            console.log(slug);
            console.log(typeof(slug));
            
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, content, featuredImage, status, userId });
            
        } catch (error) {
            console.log('error from createpost func in config.js: ', error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            const response= await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, content, featuredImage, status });
            console.log('response from update post function');
            console.log(response);
            
            return response;
        } catch (error) {
            console.log('error from updatepost func in config.js: ', error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
            return true;
        } catch (error) {
            console.log('error from deletePost func in config.js: ', error);
            return false;
        }
    }

    // 66b6dfff000816d730f7
    async getPost(slug) {
        try {
            const response= await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);

            console.log('response from get post function');
            console.log(response);

            return response;

        } catch (error) {
            console.log('error from getPost func in config.js: ', error);
        }
    }
 
    // issue was here
    // instead of giving getPosts I wrote getPost
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            const response= await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries);
            console.log('response from get posts function');
            console.log(response);

            return response;

        } catch (error) {
            console.log('error from getAllPosts func in config.js: ', error);
            return false;
        }
    }


    // file upload service
    async uploadFile(file) {
        try {
            return this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
        } catch (error) {
            console.log('error from uploadFile func in config.js: ', error);
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log('error from deleteFile func in config.js: ', error);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);

        } catch (error) {
            console.log('error from getFilePreview func in config.js: ', error);
            return false;

        }
    }
}

const service = new Service();

export default service;