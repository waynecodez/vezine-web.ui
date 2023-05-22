// import React from 'react';
import { Loader } from '../Loader';
import './button.css';
import { variantProps, VariantPropsOf } from 'classname-variants/react';
interface ButtonProps extends VariantPropsOf<typeof buttonProps> {
	/**
	 * How large should the button be?
	 */
	size?: 'sm' | 'md' | 'lg';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
	/**
	 * Optional loading indicator
	 */
	loading?: boolean;
	/**
	 * Optional loading indicator color
	 */
	spinnerColor?: string;
	/**
	 * Optional loading indicator color
	 */
	disabled?: boolean;
}

const buttonProps = variantProps({
	base: 'rounded-md text-white hover:opacity-90 shadow-sm',
	variants: {
		color: {
			brand: 'bg-indigo-500 disabled:bg-indigo-400',
			accent: 'bg-amber-500 disabled:bg-orange-300'
		},
		size: {
			xs: 'px-3 py-1 text-xs',
			sm: 'px-5 py-2 text-sm',
			md: 'px-6 py-4 text-sm',
			lg: 'px-10 py-5 text-md'
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

/**
 * Primary UI component for user interaction
 */
export const Button = ({ loading = false, spinnerColor, label, ...props }: ButtonProps) => {
	const args = props as ButtonProps;

	const styles = buttonProps(args);

	return (
		<button {...styles}>
			{loading ? (
				<div className={`flex gap gap-2`}>
					<Loader
						type='spinner'
						color={spinnerColor}
					/>
					{label}
				</div>
			) : (
				label
			)}
		</button>
	);
};
