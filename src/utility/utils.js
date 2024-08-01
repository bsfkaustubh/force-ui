import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export function prefix() {
	return 'force-ui-';
}

/**
 * For Conditional classNames and merging TailwindCSS classes.
 * @param  {...any} classNames 
 * @returns  {string}
 */
export const cn = (...classNames) => twMerge(clsx(...classNames));
