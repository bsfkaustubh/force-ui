import { Check, Info, AlertTriangle, Trash2 } from 'lucide-react';
import { cn } from '../../utilities/functions';
import { Button } from '../button/index';
import { isValidElement } from 'react';

const DEFAULT_THEME = 'light';
const DEFAULT_VARIANT = 'neutral';
const DEFAULT_ACTION_TYPE = 'button';

export const getIcon = ({
	icon = null,
	theme = DEFAULT_THEME,
	variant = DEFAULT_VARIANT,
}) => {
	const commonClasses = '[&>svg]:h-5 [&>svg]:w-5';
	let nColor =
		theme === 'light' ? 'text-icon-secondary' : 'text-icon-inverse';
	if (icon && isValidElement(icon)) {
		const updatedIcon = React.cloneElement(icon, {
			className: cn(commonClasses, nColor, icon.props.className),
		});
		return { updatedIcon };
	}

	switch (variant) {
		case 'neutral':
			return <Info className={cn(commonClasses, nColor)} />;
		case 'info':
			let iColor =
				theme === 'light'
					? 'text-support-info'
					: 'text-support-info-inverse';
			return <Info className={cn(commonClasses, iColor)} />;
		case 'success':
			let sColor =
				theme === 'light'
					? 'text-support-success'
					: 'text-support-success-inverse';
			return <Check className={cn(commonClasses, sColor)} />;
		case 'warning':
			let wColor =
				theme === 'light'
					? 'text-support-warning'
					: 'text-support-warning-inverse';
			return <AlertTriangle className={cn(commonClasses, wColor)} />;
		case 'error':
			let dColor =
				theme === 'light'
					? 'text-support-error'
					: 'text-support-error-inverse';
			return <Trash2 className={cn(commonClasses, dColor)} />;
		default:
			return null;
	}
};

export const getAction = ({
	actionType = DEFAULT_ACTION_TYPE,
	onAction = () => {},
	actionLabel = '',
}) => {
	switch (actionType) {
		case 'button':
			return (
				<Button variant="outline" size="sm" onClick={onAction}>
					{actionLabel}
				</Button>
			);
		case 'link':
			return (
				<Button variant="link" size="sm" onClick={onAction}>
					{actionLabel}
				</Button>
			);
	}
};

export const getTitle = ({ theme = DEFAULT_THEME, title = '' }) => {
    if (!title && isNaN(title)) {
        return null;
    }
	const titleClasses = {
		light: 'text-text-primary',
		dark: 'text-text-inverse',
	};
	return (
		<span className={cn('block', titleClasses[theme], 'text-sm leading-5 font-semibold')}>
			{title}
		</span>
	);
};

export const getContent = ({ theme = DEFAULT_THEME, content = '' }) => {
    if (! content && isNaN(content)) {
        return null;
    }
	const contentClasses = {
		light: 'text-text-primary',
		dark: 'text-text-inverse',
	};
	return (
		<span
			className={cn(contentClasses[theme], 'block [&_*]:text-sm [&_*]:leading-5 font-normal')}
		>
            {content}
        </span>
	);
};
