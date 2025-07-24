const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteOverviewCollectionId: String(import.meta.env.VITE_APPWRITE_OVERVIEW_COLLECTION_ID),
    appwriteCommentsCollectionId: String(import.meta.env.VITE_APPWRITE_COMMENTS_COLLECTION_ID),
    appwriteImagesBucketId: String(import.meta.env.VITE_APPWRITE_IMAGES_BUCKET_ID),
}

export default conf