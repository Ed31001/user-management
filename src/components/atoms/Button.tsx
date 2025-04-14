type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'logout' | 'icon' | 'edit' | 'delete' | 'login' | 'password';
  };
  
  export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
    const base = 'transition duration-200 ease-in-out';
    const variants = {
      primary: `${base} bg-white text-(--color-primary) px-4 py-2 rounded hover:bg-gray-300`,
      logout: `${base} bg-red-600 text-white px-4 py-2 rounded hover:bg-gray-300`,
      icon: `px-2.5 py-2.5 rounded-full hover:bg-gray-300`,
      edit: `${base} bg-(--color-primary) text-white px-3 py-1 rounded hover:bg-blue-400`,
      delete: `${base} bg-red-600 text-white px-3 py-1 rounded hover:bg-red-400`,
      login: `${base} w-25 bg-(--color-primary) hover:bg-blue-400 text-white py-2 rounded-md font-semibold`,
      password: `${base} absolute inset-y-0 right-0 flex items-center px-3 text-gray-500`,
    };
  
    return (
      <button className={`${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  };
  