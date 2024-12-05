import React from 'react';

type BreadcrumbsProps = {
  children: React.ReactNode;
  separator?: React.ReactNode;
  'aria-label': string;
  containerClasses?: string;
};

const Breadcrumbs = ({
  children,
  separator = '/',
  'aria-label': ariaLabel,
  containerClasses
}: BreadcrumbsProps) => {
  const items = React.Children.toArray(children).map((child, index) => {
    const isLast = index === React.Children.count(children) - 1;
    return (
      <span key={index} className='flex items-center text-text-xs text-gray-700 font-semibold'>
        {child}
        {!isLast && <span className='mx-[6px]'>{separator}</span>}
      </span>
    );
  });

  return (
    <nav aria-label={ariaLabel} className={`flex items-center text-text-xs text-gray-700 font-semibold ${containerClasses}`}>
      {items}
    </nav>
  );
};

export default Breadcrumbs;