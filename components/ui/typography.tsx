import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

interface TypographyProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  heading?: boolean;
}

const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => {
    return <h1 ref={ref} {...props} className={cn('text-xl', {}, className)} />;
  }
);

Typography.displayName = 'Typography';
export { Typography };
