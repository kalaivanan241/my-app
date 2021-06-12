import React, { useState } from "react";
import { db } from "../configs/db";

export interface DocumentID {
  id: string;
}

function useFirebaseServices<T extends DocumentID>(documentName: string) {
  const [loading, setLoading] = useState<boolean>(false);
  async function getData(): Promise<T[]> {
    setLoading(true);
    const todos = await db.collection(documentName).limit(50).get();
    const data: T[] = todos.docs.map((doc) => ({
      ...(doc.data() as T),
      id: doc.id,
    }));
    setLoading(false);
    return data;
  }

  async function addData(todoObj: T): Promise<T> {
    setLoading(true);
    const data: any = await db.collection(documentName).add({
      ...todoObj,
    });
    setLoading(false);
    return { ...data, id: data.id } as T;
  }

  async function updateData(todoObj: T) {
    setLoading(true);
    await db
      .collection(documentName)
      .doc(todoObj.id)
      .set({
        ...todoObj,
      });
    setLoading(false);
  }

  async function deleteData(todoObj: T) {
    setLoading(true);
    await db.collection(documentName).doc(todoObj.id).delete();
    setLoading(false);
  }

  return { getData, addData, updateData, deleteData, loading };
}

export default useFirebaseServices;
