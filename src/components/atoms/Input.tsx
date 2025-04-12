type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => (
  <input {...props} className="p-2 border border-gray-300 rounded w-full" />
);
