import React from 'react';

interface PageHeaderProps {
  children: React.ReactNode;
}

interface PageHeaderHeadingProps {
  children: React.ReactNode;
}

interface PageHeaderDescriptionProps {
  children: React.ReactNode;
}

const PageHeader = ({ children }: PageHeaderProps) => {
  return <header className="space-y-4">{children}</header>;
};

const PageHeaderHeading = ({ children }: PageHeaderHeadingProps) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};

const PageHeaderDescription = ({ children }: PageHeaderDescriptionProps) => {
  return <p className="text-lg text-gray-600">{children}</p>;
};

export { PageHeader, PageHeaderHeading, PageHeaderDescription };