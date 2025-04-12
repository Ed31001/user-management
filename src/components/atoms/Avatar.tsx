type AvatarProps = {
    initials: string;
  };
  
  export const Avatar = ({ initials }: AvatarProps) => (
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-(--color-primary) text-2xl text-white font-bold">
      {initials}
    </div>
  );
  