
import { createSlice } from '@reduxjs/toolkit'
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import Swal from 'sweetalert2';

export const firestoreReducer = createSlice({
    name: "db",
    initialState: [{
        itemName: "",
        itemDescription: "",
        amount: 0,
        quantity: 0
    }],

    reducers: {
        addItem: async (state, action) => {
            try {
                const docRef = await addDoc(collection(db, "items"), action.payload);
                Swal.fire({
                    icon: 'success',
                    title: 'Added!',
                    text: 'Added successfully.',
                    showConfirmButton: false,
                    timer: 3000
                });
            } catch (err) {
                console.log(err);
            }
        },

        deleteItem: async (state, action) => {
            try {
                const itemDoc = doc(db, "items", action.payload.id);
                await deleteDoc(itemDoc);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'Item has been deleted.',
                    showConfirmButton: false,
                    timer: 3000,
                });
            } catch(err){
                console.log(err)
                alert(err);
            }
        },

        updateItemInFirestore : async (state, action) => {
            try {
                // if (!itemName || !itemDescription || !amount || !quantity) {
                //     return Swal.fire({
                //         icon: 'error',
                //         title: 'Error!',
                //         text: 'All fields are required.',
                //         showConfirmButton: true,
                //         timer: 3000,
                //     });
                // }
        
                // const room = {
                //     id,
                //     itemName,
                //     itemDescription,
                //     amount,
                //     quantity,
                // };
        
                // // await setDoc(doc(db, "rooms", id), {
                // //     ...item
                // // });
        
                // //Success message popup
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Updated!',
                //     text: 'Item has been updated.',
                //     showConfirmButton: false,
                //     timer: 3000,
                // });
            } catch (error){
                console.log("Failed to update: ", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to update.',
                    showConfirmButton: true,
                    timer: 3000,
                });
            }
        }
    }
})

export const { addItem, updateItemInFirestore, deleteItem } = firestoreReducer.actions;
export default firestoreReducer.reducer
