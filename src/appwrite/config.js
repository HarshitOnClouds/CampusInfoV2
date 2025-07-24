import { Client,ID,Databases,Storage,Query } from "appwrite"
import conf from '../conf/conf'

export class LocationService{
    client = new Client()
    databases
    bucket

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async addOverview({AuthorId,PlaceName,PlaceDescription,FeaturedImage,Status,Tags}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteOverviewCollectionId,
                ID.unique(),
                {
                    PlaceName,
                    PlaceDescription,
                    FeaturedImage,
                    Tags,
                    Status,
                    AuthorId,
                }
            )
        } catch (error) {
            console.log('error in adding overview',error)
            return false
        }
    }

    async addComment({AuthorId,overviewId,Content,}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCommentsCollectionId,
                ID.unique(),
                {

                    AuthorId,
                    overviewId,
                    Content,
                }
            )
        } catch (error) {
            console.log('error in adding comment',error)
            return false
        }
    }

    async deleteComment(commentId){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCommentsCollectionId,
                commentId,
            )
            return true
        } catch (error) {
            console.log('error in deleting comment', error)
            return false
        }
    }

    async getComments(overviewId){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCommentsCollectionId,
                //again i dont understand this query as of now
                [
                    Query.equal('overviewId', overviewId),
                    Query.select(["*","AuthorId.*","overviewId.*"])
                ]
            )
        } catch (error) {
            console.log('error in getting comments',error)
        }
    }
    
    async deleteOverview(overviewId){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteOverviewCollectionId,
                overviewId
            )
            return true
        } catch (error) {
            console.log('error in deleting overview',error)
            return false
        }
    }
    async updateOverview(overviewId,{PlaceName,PlaceDescription,FeaturedImage,Tags,Status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteOverviewCollectionId,
                overviewId,
                {
                    PlaceName,
                    PlaceDescription,
                    FeaturedImage,
                    Tags,
                    Status,
                }
            )
        } catch (error) {
            console.log('error in updating overview',error)
            return false
        }
    }


    async getOverview(overviewId){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteOverviewCollectionId,
                overviewId,
                //i dont understand this query as of now
                [Query.select(["*","AuthorId.*"])]
            )
        } catch (error) {
            console.log('error in getting overview',error)
            return false
        }
    }

    async getOverviews(queries = [Query.equal('Status',true)]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteOverviewCollectionId,
                [
                    ...queries,
                    Query.select(["*","AuthorId.*"])
                ]
            )
        } catch (error) {
            console.log('error in getting all overviews')
            return false
        }
    }

    async uploadImage(image){
        try {
            return await this.bucket.createFile(
                conf.appwriteImagesBucketId,
                ID.unique(),
                image
            )
        } catch (error) {
            console.log('error in uploading image',error)
            return false
        }
    }

    async deleteImage(imageId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteImagesBucketId,
                imageId
            )
        } catch (error) {
            console.log('error in deleting image',error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteImagesBucketId,
            fileId
        )
    }
}

const LocationService = new LocationService()
export default LocationService
