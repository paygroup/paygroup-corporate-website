import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

interface TypographyProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  heading?: boolean;
  lg?: boolean;
}

const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, lg, heading, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(
          'md:text-xl   tracking-wide ',
          {
            'text-2xl md:text-3xl md:leading-[3rem] ': lg,
          },
          className
        )}
      />
    );
  }
);

Typography.displayName = 'Typography';
export { Typography };
