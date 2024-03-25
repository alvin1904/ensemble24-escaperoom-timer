import { cn } from "@/lib/utils";
import { ChildrenProps } from "@/types/common.types";

type Props = {
  onClick: () => void;
  className?: string;
} & ChildrenProps;

const Button = (props: Props) => {
  return (
    <button
      className={cn(
        "bg-gray-500 text-white text-lg px-9 py-2 hover:bg-gray-600 duration-200 ease-in-out rounded-md",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
