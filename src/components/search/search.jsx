import { useState, forwardRef, useRef, createContext, useContext } from 'react';
import { cn } from '@/utilities/functions';
import { Search } from 'lucide-react';
import Loader from '../loader';
import {
	textSizeClassNames,
	variantClassNames,
	hoverClassNames,
	focusClassNames,
	disabledClassNames,
	baseClassNames,
	sizeClassNames,
	IconClasses
} from './styles';
import { autoUpdate, flip, FloatingPortal, offset, size, useDismiss, useFloating, useInteractions } from '@floating-ui/react';

const SizeContext = createContext();

const useSize = () => {
	return useContext(SizeContext);
};

const SearchBox = forwardRef(({ className, dimension = 'sm', open = false, onOpenChange = () => { }, ...props }, ref) => {
	const [width, setWidth] = useState(0);
	const inputRef = useRef(null);

	const { refs, floatingStyles, context } = useFloating({
		open: open,
		onOpenChange: onOpenChange,
		placement: 'bottom-start',
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(5),
			flip({ padding: 10 }),
			size({
				apply({ rects, elements, availableHeight }) {
					Object.assign(elements.floating.style, {
						maxHeight: `240px`,
						width: `${inputRef.current?.clientWidth || 0}px`, // Set the width to match the input
						fontFamily: window.getComputedStyle(elements.reference).fontFamily, // Retain parent's font family
					});
				},
				padding: 10,
			}),
		],
	});

	// const measureWidth = () => {
	// 	const newWidth = inputRef.current.clientWidth;
	// 	setWidth(newWidth);
	// 	console.log(newWidth);
	// }
	const dismiss = useDismiss(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([
		dismiss,
	]);

	return (
		<SizeContext.Provider value={{ dimension, open, onOpenChange, refs, floatingStyles, context, width, getReferenceProps, getFloatingProps }}>
			<div
				className={cn('searchbox-wrapper relative w-full', className)}
				{...props}
				ref={inputRef}
			/>
		</SizeContext.Provider>
	);
});
SearchBox.displayName = 'SearchBox';

const SearchBoxInput = forwardRef(({
	className,
	type = "text",
	placeholder = 'Search...',
	variant = 'primary',
	disabled = false,
	value,
	defaultValue,
	onChange,
	...props
}, ref) => {
	const [internalValue, setInternalValue] = useState(defaultValue || '');
	const isControlled = useRef(value !== undefined);
	const { dimension, open, onOpenChange, refs, getReferenceProps } = useSize();

	const handleChange = (event) => {
		const newValue = event.target.value;
		if (!isControlled.current) {
			setInternalValue(newValue);
		}
		onChange?.(newValue, event);
		if (typeof onOpenChange === 'function') {
			if (newValue.trim()) {
				onOpenChange(true); // Open the dropdown
			} else {
				onOpenChange(false); // Close the dropdown
			}
		}
	};

	// const handleWidth = () => {
	// 	measureWidth();
	// }	

	const inputValue = isControlled.current ? value : internalValue;

	return (
		<div
			ref={refs.setReference}
			className={cn("w-full group relative flex justify-center items-center gap-2 focus-within:z-10",
				baseClassNames,
				variantClassNames[variant],
				sizeClassNames[dimension],
				textSizeClassNames[dimension],
				disabled ? hoverClassNames.disabled : hoverClassNames.enabled,
				disabled ? disabledClassNames : '',
				focusClassNames,
			)

			}
			{...getReferenceProps}
		>
			<span
				className={cn(textSizeClassNames[dimension], IconClasses, "flex justify-center items-center")}>
				<Search />
			</span>
			<input
				type={type}
				ref={ref}
				className={cn(
					textSizeClassNames[dimension],
					'flex-grow bg-transparent border-none outline-none border-transparent focus:ring-0',
					disabled && disabledClassNames,

					className
				)}
				disabled={disabled}
				value={inputValue}
				onChange={handleChange}
				placeholder={placeholder}
				{...props}
				// onFocus={handleWidth}
			/>
			<span
				className={cn(
					textSizeClassNames[dimension],
					IconClasses,
					'bg-background-primary border border-solid border-border-subtle',
					dimension === 'sm'
						? 'px-2 py-0.5'
						: dimension === 'md'
							? 'px-3 py-1'
							: 'px-3.5 py-1'
				)}
			>
				/
			</span>

		</div >
	);
});
SearchBoxInput.displayName = 'SearchBoxInput';

const SearchBoxContent = forwardRef(({
	className,
	dropdownPortalRoot = null, // Root element where the dropdown will be rendered.
	dropdownPortalId = '', // Id of the dropdown portal where the dropdown will be rendered.
	children, ...props
}, ref) => {
	const { dimension, open, refs, floatingStyles, context, width, getFloatingProps } = useContext(SizeContext);

	if (!open) return null;

	return (
		<FloatingPortal id={dropdownPortalId} root={dropdownPortalRoot}>
			<div
				ref={refs.setFloating}
				style={{
					...floatingStyles
				}}
				className={cn(
					'bg-background-primary rounded-md p-2 border-border-strong shadow-lg overflow-y-auto',
					className
				)}
				{...getFloatingProps}
				{...props}
			>
				{children}
			</div>
		</FloatingPortal>
	);
});

SearchBoxContent.displayName = 'SearchBoxContent';

const SearchBoxLoading = ({ loadingIcon = <Loader /> }) => {
	const { dimension } = useContext(SizeContext);
	return (
		<div className={cn("justify-center p-4", textSizeClassNames[dimension])}>
		{loadingIcon}
	</div>
	)
};

const SearchBoxResults = forwardRef(({ className, children, ...props }, ref) => (
	<div ref={ref} className={cn('space-y-1', className)} {...props}>
		{children}
	</div>
));
SearchBoxResults.displayName = 'SearchBoxResults';

const SearchBoxResultTitle = forwardRef(({ className, children, ...props }, ref) => {
	const { dimension } = useSize();

	return (
		<div
			ref={ref}
			className={cn(
				'flex p-1',
				className
			)}
			{...props}
		>
			<label className={cn("w-full text-text-secondary", textSizeClassNames[dimension])}>{children}</label>
		</div>
	)
});
SearchBoxResultTitle.displayName = 'SearchBoxResultTitle';

const SearchBoxResultItem = forwardRef(({ className, children, icon, ...props }, ref) => {
	const { dimension } = useSize();
	return (<div
		ref={ref}
		className={cn(
			'flex items-center gap-2 p-1 hover:bg-gray-200 cursor-pointer',
			textSizeClassNames[dimension],
			!icon && "pl-4",
			className
		)}
		{...props}
	>
		{icon}
		<label className={cn("w-full text-text-secondary", textSizeClassNames[dimension])}>{children}</label>
	</div>)
});
SearchBoxResultItem.displayName = 'SearchBoxResultItem';

const SearchBoxSeparator = forwardRef(({ className, ...props }, ref) => (
	<hr ref={ref} className={cn('w-full text-text-tertiary', className)} {...props} />
));
SearchBoxSeparator.displayName = 'SearchBoxSeparator';

export {
	SearchBox,
	SearchBoxInput,
	SearchBoxContent,
	SearchBoxLoading,
	SearchBoxResults,
	SearchBoxResultTitle,
	SearchBoxResultItem,
	SearchBoxSeparator,
};