import { Todo } from "@/components/TodoItem";
import { atom } from "recoil";

const todoState = atom<Todo[]>({
  key: "todos",
  default: [
    {
      id: "9b4ab02c-c641-7d1c-2f11-de64d8cdac77",
      state: false,
      title: "テストテスト",
      isEdit: false,
    },
  ],
});

export default todoState;
