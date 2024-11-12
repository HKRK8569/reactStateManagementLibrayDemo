import { atom } from "jotai";

export type Todo = {
  id: string;
  state: boolean;
  name: string;
  isEdit: boolean;
};

const todoAtom = atom<Todo[]>([
  {
    id: "9b4ab02c-c641-7d1c-2f11-de64d8cdac77",
    state: false,
    name: "テストテスト",
    isEdit: false,
  },
]);

export default todoAtom;
