interface ButtonProps {
  text: string;
  onClick: () => void;
  size?: "small" | "big";
}

export default function ColorButton({
  text,
  onClick,
  size = "small",
}: ButtonProps) {
  return (
    <div
      className={`rounded-md  text-white bg-orange-500 hover:bg-gradient-to-tr from-orange-600 to-blue-400
    ${size === "big" ? "p-[1rem]" : "px-3 py-2"}`}
    >
      <button className="" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
