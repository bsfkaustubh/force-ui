import { useState, forwardRef, useRef, createContext, useContext, Children } from 'react';
import { cn } from '@/utilities/functions';
import { Search } from 'lucide-react';
import Loader from '../loader';
import {
	textSizeClassNames,
	variantClassNames,
	disabledClassNames,
	sizeClassNames,
	IconClasses
} from './styles';
import { autoUpdate, flip, FloatingPortal, offset, size, useDismiss, useFloating, useInteractions } from '@floating-ui/react';

const SearchContext = createContext();

const useSearchContext = () => {
	return useContext(SearchContext);
};

const SearchBox = forwardRef(({ className, dimension = 'sm', open = false, onOpenChange = () => { }, ...props }, ref) => {

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
						maxHeight: availableHeight,
						width: `${rects.reference.width}px`,
						fontFamily: window.getComputedStyle(elements.reference).fontFamily, // Retain parent's font family
					});
				},
			}),
		],
	});
	const dismiss = useDismiss(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([
		dismiss,
	]);

	return (
		<SearchContext.Provider value={{ dimension, open, onOpenChange, refs, floatingStyles, context, getReferenceProps, getFloatingProps }}>
			<div
				className={cn('searchbox-wrapper box-border relative w-full', className)}
				{...props}
				ref={inputRef}
			/>
		</SearchContext.Provider>
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
	const { dimension, onOpenChange, refs, getReferenceProps } = useSearchContext();

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

	const inputValue = isControlled.current ? value : internalValue;

	return (
		<div
			tabIndex={0}
			ref={refs.setReference}
			className={cn(
				"w-full group relative flex justify-center items-center gap-1.5 focus-within:z-10 transition-colors ease-in-out duration-150",
				variantClassNames[variant],
				// sizeClassNames[dimension],
				// textSizeClassNames[dimension],
				sizeClassNames.input[dimension],
				disabled ?
					disabledClassNames :
					'focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2 focus-within:border-border-interactive focus-within:hover:border-border-interactive',
			)}
			{...getReferenceProps}
		>
			<span
				className={cn(
					textSizeClassNames[dimension],
					disabled ? 'text-icon-disabled' : IconClasses,
					"flex justify-center items-center",
				)}>
				<Search />
			</span>
			<input
				type={type}
				ref={ref}
				className={cn(
					textSizeClassNames[dimension],
					'flex-grow bg-transparent border-none outline-none border-transparent focus:ring-0',
					disabled ?
						disabledClassNames :
						'text-field-placeholder placeholder:text-field-placeholder group-hover:placeholder:text-field-input group-focus-within:placeholder:text-field-input focus-within:text-field-input group-hover:text-field-input',
					className
				)}
				disabled={disabled}
				value={inputValue}
				onChange={handleChange}
				placeholder={placeholder}
				{...props}
			/>
			<span
				className={cn(
					textSizeClassNames[dimension],
					disabled ? 'text-icon-disabled' : IconClasses,
					'bg-field-secondary-background border border-solid border-field-border',
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
SearchBoxInput.displayName = 'SearchBox.Input';

const SearchBoxContent = forwardRef(({
	className,
	dropdownPortalRoot = null, // Root element where the dropdown will be rendered.
	dropdownPortalId = '', // Id of the dropdown portal where the dropdown will be rendered.
	children, ...props
}, ref) => {
	const { dimension, open, refs, floatingStyles, getFloatingProps } = useSearchContext();

	if (!open) return null;

	return (
		<FloatingPortal id={dropdownPortalId} root={dropdownPortalRoot}>
			<div
				ref={refs.setFloating}
				style={{
					...floatingStyles
				}}
				className={cn(
					'bg-background-primary rounded-md border border-solid border-border-subtle shadow-soft-shadow-lg overflow-y-auto text-wrap',
					sizeClassNames.dialog[dimension],
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
SearchBoxContent.displayName = 'SearchBox.Content';


const SearchBoxLoading = ({ loadingIcon = <Loader /> }) => {
	const { dimension } = useSearchContext();
	return (
		<div className={cn("justify-center p-4", textSizeClassNames[dimension])}>
		{loadingIcon}
	</div>
	)
};
SearchBoxLoading.displayName = 'SearchBox.Loading';


const SearchBoxResults = forwardRef(({ className, children, ...props }, ref) => {
	const { dimension } = useSearchContext();
	const childrenCount = Children.count(children);

	return (
		<div ref={ref} className={cn(
			sizeClassNames.content[dimension],
			className
		)} {...props}
		>

		{children}
			{childrenCount < 2 && (
				<div className={cn('flex justify-center items-center', sizeClassNames.content[dimension], sizeClassNames.item[dimension])}>
					No results found
				</div>
			)}
		</div>
	)
});
SearchBoxResults.displayName = 'SearchBox.Results';


const SearchBoxResultTitle = forwardRef(({ className, children, ...props }, ref) => {
	const { dimension } = useSearchContext();

	return (
		<div
			ref={ref}
			className={cn(
				'flex',
				sizeClassNames.title[dimension],
				className
			)}
			{...props}
		>
			<label className={cn("w-full text-text-secondary", textSizeClassNames[dimension])}>{children}</label>
		</div>
	)
});
SearchBoxResultTitle.displayName = 'SearchBox.ResultTitle';


const SearchBoxResultItem = forwardRef(({ onClick = () => { }, className, children, icon, ...props }, ref) => {
	const { dimension } = useSearchContext();

	return (<div
		tabIndex={0}
		ref={ref}
		className={cn(
			'flex items-center justify-center gap-1 p-1 hover:bg-background-secondary',
			sizeClassNames.item[dimension],
			className
		)}
		onClick={onClick}
		onKeyDown={(e) => {
			if (e.key === 'Enter') {
				onClick();
			}
		}}
		{...props}
	>
		<div className={cn(sizeClassNames.icon[dimension], 'flex items-center justify-center')}>
		{icon}
		</div>
		<label className={cn("w-full text-inherit cursor-pointer", !icon && sizeClassNames.icon[dimension])}>{children}</label>
	</div>)
});
SearchBoxResultItem.displayName = 'SearchBox.ResultItem';


const SearchBoxSeparator = forwardRef(({ className, ...props }, ref) => (
	<hr ref={ref} className={cn('m-0 border border-solid border-border-subtle', className)} {...props} />
));
SearchBoxSeparator.displayName = 'SearchBox.Separator';

SearchBox.Input = SearchBoxInput;
SearchBox.Content = SearchBoxContent;
SearchBox.Loading = SearchBoxLoading;
SearchBox.Results = SearchBoxResults;
SearchBox.ResultTitle = SearchBoxResultTitle;
SearchBox.ResultItem = SearchBoxResultItem;
SearchBox.Separator = SearchBoxSeparator;

export default SearchBox;