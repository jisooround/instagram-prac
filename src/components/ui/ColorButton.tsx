interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function ColorButton({ text, onClick }: ButtonProps) {
  return (
    <div className="rounded-md  text-white bg-orange-500 px-3 py-2 hover:bg-gradient-to-tr from-orange-600 to-blue-400">
      <button className="" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
