import React from 'react';
import { cn } from '@/utilities/functions';
import { Check } from 'lucide-react';

/**
 * Helper function to create a span element with common classes.
 *
 * @param {string}          classes    - The CSS classes to apply.
 * @param {React.ReactNode} [children] - Optional children to render inside the span.
 * @return {JSX.Element} The span element.
 */
const createSpanContent = ( classes, children = null ) => {
	return <span className={ cn( classes ) }>{ children }</span>;
};

/**
 * Helper function for the 'dot' variant.
 *
 * @param {boolean}            isCompleted - Whether the step is completed.
 * @param {boolean}            isCurrent   - Whether the step is the current step.
 * @param {Object}             sizeClasses - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'} size        - The size of the step indicator.
 * @return {JSX.Element} The step content for the 'dot' variant.
 */
const createDotContent = ( isCompleted, isCurrent, sizeClasses, size ) => {
	if ( isCompleted ) {
		return <Check className={ `w-full h-full rounded-full text-brand-primary-600 transition-colors duration-300` } />;
	}
	return createSpanContent(
		`relative flex items-center rounded-full justify-center ring-1 ${ isCurrent ? 'ring-brand-primary-600' : 'ring-gray-400' } ${ sizeClasses[ size ].ring } transition-colors duration-500`,
		createSpanContent(
			`absolute ${ sizeClasses[ size ].dot } ${ isCurrent ? 'bg-brand-primary-600' : 'bg-gray-400' } rounded-full transition-colors duration-500`
		)
	);
};

/**
 * Helper function for the 'number' variant.
 *
 * @param {boolean}            isCompleted - Whether the step is completed.
 * @param {boolean}            isCurrent   - Whether the step is the current step.
 * @param {Object}             sizeClasses - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'} size        - The size of the step indicator.
 * @param {number}             index       - The index of the step.
 * @return {JSX.Element} The step content for the 'number' variant.
 */
const createNumberContent = ( isCompleted, isCurrent, sizeClasses, size, index ) => {
	if ( isCompleted ) {
		return <Check className={ `w-full h-full text-brand-primary-600 ${ sizeClasses[ size ].numberIcon } transition-colors duration-300` } />;
	}
	return createSpanContent(
		`relative flex items-center rounded-full justify-center ring-1 ${ isCurrent ? 'ring-brand-primary-600' : 'ring-gray-400' } ${ sizeClasses[ size ].ring } transition-colors duration-500`,
		createSpanContent(
			`absolute ${ sizeClasses[ size ].dot } ${ isCurrent ? 'text-brand-primary-600' : 'text-gray-400' } rounded-full flex items-center justify-center transition-colors duration-500`,
			index + 1
		)
	);
};

/**
 * Helper function for the 'icon' variant.
 *
 * @param {boolean}            isCompleted - Whether the step is completed.
 * @param {boolean}            isCurrent   - Whether the step is the current step.
 * @param {Object}             sizeClasses - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'} size        - The size of the step indicator.
 * @param {React.Element}      variantIcon - The custom icon component for the 'icon' variant.
 * @return {JSX.Element} The step content for the 'icon' variant.
 */
const createIconContent = ( isCompleted, isCurrent, sizeClasses, size, variantIcon ) => {
	if ( isCompleted ) {
		return (
			<span className={ `flex items-center rounded-full justify-center text-brand-primary-600 ${ sizeClasses[ size ].icon } transition-colors duration-300` }>
				<Check className="w-full h-full" />
			</span>
		);
	}
	return createSpanContent(
		`relative flex rounded-full items-center justify-center ring-1 ${ isCurrent ? 'ring-brand-primary-600' : 'ring-gray-400' } ${ sizeClasses[ size ].ring } transition-colors duration-500`,
		createSpanContent(
			`absolute ${ isCurrent ? 'text-brand-primary-600' : 'text-gray-400' } flex items-center justify-center transition-colors duration-500`,
			React.cloneElement( variantIcon, { className: 'w-full h-full' } )
		)
	);
};

/**
 * ProgressSteps Component
 *
 * @param {Object}                    props               - Component props.
 * @param {'dot' | 'number' | 'icon'} props.variant       - The type of step indicator.
 * @param {'sm' | 'md' | 'lg'}        props.size          - The size of the step indicator.
 * @param {'inline' | 'stack'}        props.type          - The layout type of the steps.
 * @param {number}                    props.currentStep   - The current active step.
 * @param {React.Element}             [props.variantIcon] - Custom icon for the 'icon' variant.
 * @param {React.ReactNode}           props.children      - The steps to be rendered.
 * @param {string}                    [props.className]   - Additional class names for the component.
 */

const ProgressSteps = ( {
	variant = 'dot',
	size = 'sm',
	type = 'inline',
	currentStep = 1,
	variantIcon,
	children,
	className,
	...props
} ) => {
	const totalSteps = React.Children.count( children );

	const sizeClasses = {
		sm: {
			dot: 'w-2.5 h-2.5',
			ring: 'w-5 h-5',
			numberIcon: 'w-5 h-5 text-[10px]',
			line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-2',
			icon: 'w-5 h-5',
		},
		md: {
			dot: 'w-3 h-3',
			ring: 'w-6 h-6',
			numberIcon: 'w-6 h-6 text-[12px]',
			line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-3',
			icon: 'w-6 h-6',
		},
		lg: {
			dot: 'w-3.5 h-3.5',
			ring: 'w-7 h-7',
			numberIcon: 'w-7 h-7 text-[14px]',
			line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-2',
			icon: 'w-7 h-7',
		},
	};

	const steps = React.Children.toArray( children ).map( ( child, index ) => {
		const isCompleted = index + 1 < currentStep;
		const isCurrent = index + 1 === currentStep;

		let stepContent;
		if ( variant === 'dot' ) {
			stepContent = createDotContent( isCompleted, isCurrent, sizeClasses, size );
		} else if ( variant === 'number' ) {
			stepContent = createNumberContent( isCompleted, isCurrent, sizeClasses, size, index );
		} else if ( variant === 'icon' && variantIcon ) {
			stepContent = createIconContent( isCompleted, isCurrent, sizeClasses, size, variantIcon );
		}

		const stepClasses = cn(
			'relative rounded-full flex items-center justify-center',
			sizeClasses[ size ].ring,
			'transition-colors duration-500',
			isCurrent ? 'ring-brand-primary-600' : 'ring-gray-400'
		);

		return (
			<React.Fragment key={ index }>
				{ React.cloneElement( child, {
					stepContent,
					stepClasses,
					isCurrent,
					isCompleted,
					totalSteps,
					type,
				} ) }
				{ index < totalSteps - 1 && (
					<div
						className={ `flex-1 ${ sizeClasses[ size ].line } transition-colors duration-500 ${
							isCompleted ? 'bg-brand-primary-600' : 'bg-gray-300'
						}` }
					></div>
				) }
			</React.Fragment>
		);
	} );

	return (
		<div className={ cn( 'flex flex-col items-center', className ) } { ...props }>
			<div className="flex w-full items-center justify-between mb-6">
				{ steps }
			</div>
		</div>
	);
};

/**
 * ProgressStep Component
 *
 * @param {Object}             props             - Component props.
 * @param {string}             props.labelText   - The label text for the step.
 * @param {JSX.Element}        props.stepContent - The content for the step.
 * @param {string}             props.stepClasses - The CSS classes for the step.
 * @param {boolean}            props.isCurrent   - Whether the step is the current step.
 * @param {boolean}            props.isCompleted - Whether the step is completed.
 * @param {number}             props.totalSteps  - The total number of steps.
 * @param {string}             [props.className] - Additional class names for the step.
 * @param {'inline' | 'stack'} props.type        - The layout type of the step.
 * @param {number}             props.index       - The index of the step.
 */

const ProgressStep = ( {
	labelText,
	stepContent,
	stepClasses,
	isCurrent,
	isCompleted,
	totalSteps,
	className,
	type,
	index,
	...props
} ) => {
	const labelClasses = cn(
		type === 'stack' ? 'mt-2 text-center' : 'ml-2',
		isCurrent || isCompleted ? 'text-brand-primary-600' : 'text-gray-400'
	);

	return (
		<div className={ cn( 'flex items-center', className, type === 'stack' && 'relative' ) } { ...props }>
			<div className={ cn( 'flex items-center', type === 'stack' ? 'z-10' : '' ) }>
				<div className={ stepClasses }>{ stepContent }</div>
			</div>

			{ labelText && (
				<span
					className={ cn( labelClasses, type === 'stack' && 'absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap' ) }
					style={ type === 'stack' ? { top: 'calc(100% + 8px)' } : {} }
				>
					{ labelText }
				</span>
			) }
		</div>
	);
};

export { ProgressSteps, ProgressStep };
