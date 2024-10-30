'use server'

import { adminDb } from "@/firebase-admin";
import liveblocks from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server"

export async function createNewDocument(){
    auth().protect();

    const{ sessionClaims } = await auth();
    // Verify if email is available in sessionClaims
    if (!sessionClaims?.email) {
        throw new Error("User email is not available in session claims.");
    }
    const docCollectionRef = adminDb.collection("documents");
    const docRef = await docCollectionRef.add({
        title: "New Doc",

    });
    await adminDb.collection('users').doc(sessionClaims.email)
    .collection('rooms')
    .doc(docRef.id)
    .set({
        userId: sessionClaims.email,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id,
    });
    return {docId:  docRef.id};
}

export async function deleteDocument(roomId: string) {
    auth().protect(); 
    console.log("deleteDocument", roomId);
    try {
        await adminDb.collection("documents").doc(roomId).delete();
        const query = await adminDb.
            collectionGroup("rooms")
            .where("roomId", "==", roomId)
            .get();
        const batch = adminDb.batch();
        query.forEach((doc) => {
            batch.delete(doc.ref);
        });
        await batch.commit();

        await liveblocks.deleteRoom(roomId);
    } catch (error) {
        console.error(error);
        return {success : false, message: "Error deleting document"};
        
    }
    
}

export async function InviteUserToDoc(roomId: string, email: string) {
    auth().protect();
    console.log("inviteUserToDoc", roomId, email);
    
    try { 
        await adminDb
            .collection("users")
            .doc(email)
            .collection("rooms")
                .doc(roomId)
            .set({
                userId: email,
                role: "editor",
                createdAt: new Date(),
                roomId,
            })
        return {success:true}
    } catch (error) {
        console.error(error);
        return  {success : false, message: "Error inviting user"};
        
        
    }
    
}