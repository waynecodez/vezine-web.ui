// import React from 'react';
import './button.css';
import { variantProps } from 'classname-variants/react';

const buttonProps = variantProps({
	base: 'rounded-md text-white',
	variants: {
		color: {
			brand: 'bg-blue-500 hover:opacity-90 shadow-sm disabled:bg-gray-300',
			accent: 'bg-orange-500 hover:opacity-50 shadow-sm disabled:bg-gray-300'
		},
		size: {
			xs: 'px-3 py-1 text-xs',
			sm: 'px-5 py-2 text-sm',
			md: 'px-7 py-3 text-sm',
			lg: 'px-9 py-4 text-md'
		},
		rounded: {
			true: 'rounded-full'
		}
	},
	defaultVariants: {
		color: 'brand',
		size: 'sm'
	}
});

interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
	const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	return <button {...buttonProps(props)}>{label}</button>;

	return (
		<button
			type='button'
			// className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
			className={['storybook-button bg-orange-600'].join(' ')}
			style={{ backgroundColor }}
			{...props}>
			{label}
		</button>
	);
};
