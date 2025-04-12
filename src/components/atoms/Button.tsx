type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'logout' | 'icon' | 'edit' | 'delete';
  };
  
  export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
    const base = 'transition duration-200 ease-in-out';
    const variants = {
      primary: `${base} bg-white text-(--color-primary) px-4 py-2 rounded hover:bg-gray-300`,
      logout: `${base} bg-red-600 text-white px-4 py-2 rounded hover:bg-gray-300`,
      icon: `px-2.5 py-2.5 rounded-full hover:bg-gray-300`,
      edit: `${base} bg-(--color-primary) text-white px-3 py-1 rounded hover:bg-blue-400`,
      delete: `${base} bg-red-600 text-white px-3 py-1 rounded hover:bg-red-400`,
    };
  
    return (
      <button className={`${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  };
  