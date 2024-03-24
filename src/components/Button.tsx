import { ChildrenProps } from "@/types/common.types";

type Props = { onClick: () => void } & ChildrenProps;

const Button = (props: Props) => {
  return (
    <button
      className="bg-gray-500 text-white text-lg px-9 py-2 hover:bg-gray-600 duration-200 ease-in-out rounded-md"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
