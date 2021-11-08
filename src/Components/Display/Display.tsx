import { FC } from "react";

type Props = { value: string } & { x: boolean };

export const Display: FC<Props> = ({ value, x }) => {
  let isDone: boolean = false;
  let list: number[] = [1, 2, 3];
  let a: { prop?: boolean } | null;
  a = { prop: true };
  a = null;
  a = {}; // undefinded (prop?:)
  return <input size={23} disabled={true} value={value} />;
};
