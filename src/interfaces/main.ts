import { IconType } from "react-icons/lib";

export interface Metadata {
  [key: string]: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// navbar
export interface NavItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

export interface SubItem {
  icon: IconType;
  label: string;
  href: string;
}

export interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface TextAreaProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface NumberInputProps {
  value?: string;
  onChange: (value: string) => void;
}

// buttons
export interface ButtonProps {
  className?: string;
  text?: string;
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
  disabled?: boolean;
}

// services
export interface ServiceCardProps {
  image: string;
  title: string;
  text: string;
}

export interface ServiceItems {
  icon: IconType;
  label: string;
  href: string;
}
export interface ServiceMenuProps {
  subItems?: SubItem[];
}

// portfolio
export interface PortfolioProps {
  title: string;
  image: string;
  url: string;
  category: string;
}

// icons
export interface IconProps {
  src: string;
  className: string;
}

// contact form
export interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}
export interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface Skill {
  name: string;
  image: string;
  category: string;
}
