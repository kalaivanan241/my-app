import { db } from "../configs/db";
import { TodoType } from "../views/TodoList/types";

export interface DocumentID {
  id: string;
}

export async function getTodos<T extends DocumentID>(): Promise<T[]> {
  const todos = await db.collection("todos").limit(50).get();
  const data: T[] = todos.docs.map((doc) => ({
    ...(doc.data() as T),
    id: doc.id,
  }));
  return data;
}

export async function addTodo<T extends DocumentID>(todoObj: T): Promise<T> {
  const data: any = await db.collection("todos").add({
    ...todoObj,
  });
  return { ...data, id: data.id } as T;
}

export async function updateTodo<T extends DocumentID>(todoObj: T) {
  await db
    .collection("todos")
    .doc(todoObj.id)
    .set({
      ...todoObj,
    });
}

export async function deleteTodo<T extends DocumentID>(todoObj: T) {
  await db.collection("todos").doc(todoObj.id).delete();
}
