import { Todo } from "@/components/TodoItem";
import { atom } from "jotai";

const todoAtom = atom<Todo[]>([
  {
    id: "9b4ab02c-c641-7d1c-2f11-de64d8cdac77",
    state: false,
    name: "テストテスト",
    isEdit: false,
  },
]);

export default todoAtom;
