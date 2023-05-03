import React from 'react';

const variants = {
	primary: 'text-primary bg-primary border-none',
	success: 'text-success bg-success border-none',
	transparent: 'text-transparent bg-transparent border border-transparent',
};

export type ButtonProps = {
	variant: keyof typeof variants;
	children: React.ReactNode;
	onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
	variant,
	children,
	onClick,
}) => {
	const buttonClass = `rounded-custom text-sm h-custom leading-custom tracking-tight cursor-pointer focus:outline-none px-2 ${variants[variant]}`;
	return (
		<button className={buttonClass} onClick={onClick}>
			{children}
		</button>
	);
};
