import { cn } from '@/lib/utils';

interface Props {
  className: string;
  children: React.ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
  return (
    <div className={cn('max-w-[900px] mx-auto', className)}>{children}</div>
  );
};

export default Wrapper;
