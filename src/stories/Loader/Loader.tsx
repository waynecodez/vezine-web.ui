import './loader.css';
import cn from 'classnames';

interface LoaderProps {
	/**
	 * How large should the loader be?
	 */
	type?: 'pill' | 'spinner';
	/**
	 * What color do you want the loader to be?
	 * Note: Does not apply to the pill loader
	 */
	color?: string;
	/**
	 * What size do you want the loader to be?
	 * Note: Does not apply to the pill loader
	 */
	size?: 'sm' | 'md' | 'lg';
	/**
	 *
	 */
	onClick?: () => void;
}

export const Loader = ({ type = 'pill', color = 'white', size = 'sm', onClick }: LoaderProps) => {
	const Pill = () => (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%,-50%)'
			}}
			data-testid='loading-pill'>
			<div className='opacity-60 bg-white flex space-x-2 pt-3 pb-2 px-2 rounded-full justify-center items-center'>
				<div className='bg-blue-500 p-2  w-4 h-4 rounded-full animate-bounce blue-circle'></div>
				<div className='bg-green-400 p-2 w-4 h-4 rounded-full animate-bounce green-circle'></div>
				<div className='bg-red-600 p-2  w-4 h-4 rounded-full animate-bounce red-circle'></div>
			</div>
		</div>
	);

	const Spinner = () => {
		const getSpinnerSize = (): string => {
			switch (size) {
				case 'sm':
					return 'w-4 h-4';
				case 'md':
					return 'w-10 h-10';
				case 'lg':
					return 'w-14 h-14';
				default:
					return '';
			}
		};
		const getSpinnerColor = (): string => {
			switch (color) {
				case 'brand':
					return 'border-indigo-500';
				case 'accent':
					return 'border-yellow-500';
				case 'white':
					return 'border-white-500 dark:border-red-500';
				case 'black':
					return 'border-black';
				default:
					return 'dark:border-white-500 border-red-500';
			}
		};

		return (
			<div className='flex items-center justify-center'>
				<div
					className={`${getSpinnerSize()} ${getSpinnerColor()} border-b-2 rounded-full animate-spin mr-3 `}
					onClick={onClick}
				/>
			</div>
		);
	};

	const Content = () => {
		switch (type) {
			case 'pill':
				return <Pill />;
			case 'spinner':
				return <Spinner />;
			default:
				return null;
		}
	};

	return <Content />;
};
