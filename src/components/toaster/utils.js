import { Check, Info, AlertTriangle, Trash2 } from 'lucide-react';
import { cn } from '../../utility/utils';
import { Button } from '../button/index';

export const getIcon = ( { icon, theme, variant } ) => {
    const commonClasses = '[&>svg]:h-5 [&>svg]:w-5';
    let nColor = theme === 'light' ? 'text-icon-secondary' : 'text-icon-inverse';
    if ( icon ) {
        return (
            <span
                className={ cn(
                    commonClasses,
                    nColor
                )}
            >
                {icon}
            </span>
        );
    }

    switch ( variant ) {
        case 'neutral':
            return (
                <span
                    className={ cn(
                        commonClasses,
                        nColor
                    )}
                >
                    <Info />
                </span>
            );
        case 'info':
            let iColor = theme === 'light' ? 'text-support-info' : 'text-support-info-inverse';
            return (
                <span
                    className={ cn(
                        commonClasses,
                        iColor
                    )}
                >
                    <Info />
                </span>
            );
        case 'success':
            let sColor = theme === 'light' ? 'text-support-success' : 'text-support-success-inverse';
            return (
                <span
                    className={ cn(
                        commonClasses,
                        sColor
                    )}
                >
                    <Check />
                </span>
            );
        case 'warning':
            let wColor = theme === 'light' ? 'text-support-warning' : 'text-support-warning-inverse';
            return (
                <span
                    className={ cn(
                        commonClasses,
                        wColor
                    )}
                >
                    <AlertTriangle />
                </span>
            );
        case 'danger':
            let dColor = theme === 'light' ? 'text-support-error' : 'text-support-error-inverse';
            return (
                <span
                    className={ cn(
                        commonClasses,
                        dColor
                    )}
                >
                    <Trash2 />
                </span>
            );
        default:
            return null;
    }
};

export const getAction = ( { actionType, onAction, actionLabel } ) => {
    switch( actionType ) {
        case "button":
            return (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onAction}
                >
                    {actionLabel}
                </Button>
            );
        case "link":
            return (
                <Button
                    variant="link"
                    size="sm"
                    onClick={onAction}
                >
                    {actionLabel}
                </Button>
            );
    }
};

export const getTitle = ( { theme, title } ) => {
    const titleClasses = {
        light: 'text-text-primary',
        dark: 'text-text-inverse',
    };
    return (
        <label
            className={ cn(
                titleClasses[ theme ],
                "text-sm"
            )}
        >
            { title }
        </label>
    );
};

export const getContent = ( { theme, content } ) => {
    const contentClasses = {
        light: 'text-text-primary',
        dark: 'text-text-inverse',
    };
    return (
        <div
            className={ cn(
                contentClasses[ theme ],
                "text-sm [&>*]:text-sm"
            )}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};
