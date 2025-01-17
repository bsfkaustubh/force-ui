import React, {
	createContext,
	useContext,
	useState,
	useRef,
	useEffect,
} from 'react';
import { cn } from '@/utilities/functions';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import Tooltip from '../tooltip';
const SidebarContext = createContext();

const Sidebar = ( {
	children,
	className,
	onCollapseChange,
	collapsible = true,
	screenHeight = true,
	borderOn = true,
	...props
} ) => {
	const sideBarRef = useRef( null );
	const [ isCollapsed, setIsCollapsed ] = useState( () => {
		const storedState = localStorage.getItem( 'sidebar-collapsed' );
		const isSmallScreen = window.innerWidth < 1280;
		if ( storedState ) {
			return JSON.parse( storedState );
		}
		return isSmallScreen;
	} );

	useEffect( () => {
		if ( onCollapseChange ) {
			onCollapseChange( isCollapsed );
		}
	}, [ isCollapsed, onCollapseChange ] );

	useEffect( () => {
		const handleScreenResize = () => {
			const isSmallScreen = window.innerWidth < 1280;
			if ( ! collapsible ) {
				setIsCollapsed( false );
				localStorage.removeItem( 'sidebar-collapsed' );
			} else if ( isSmallScreen ) {
				setIsCollapsed( true );
				localStorage.setItem( 'sidebar-collapsed', JSON.stringify( true ) );
			} else {
				const storedState = localStorage.getItem( 'sidebar-collapsed' );
				setIsCollapsed( storedState ? JSON.parse( storedState ) : false );
			}

			if ( sideBarRef.current ) {
				if ( !! screenHeight ) {
					sideBarRef.current.style.height = `${ window.innerHeight }px`;
				} else {
					sideBarRef.current.style.height = 'auto';
				}
			}
		};

		window.addEventListener( 'resize', handleScreenResize );
		handleScreenResize();

		return () => {
			window.removeEventListener( 'resize', handleScreenResize );
		};
	}, [ screenHeight, collapsible ] );

	return (
		<SidebarContext.Provider
			value={ { isCollapsed, setIsCollapsed, collapsible } }
		>
			<div
				ref={ sideBarRef }
				className={ cn(
					'overflow-auto w-72 px-4 py-4 gap-4 flex flex-col bg-background-primary',
					borderOn &&
						'border-0 border-r border-solid border-border-subtle',
					!! screenHeight && 'h-screen',
					'transition-all duration-200',
					isCollapsed && 'w-16 px-2',
					className
				) }
				{ ...props }
			>
				{ children }
			</div>
		</SidebarContext.Provider>
	);
};
Sidebar.displayName = 'Sidebar';

const SidebarHeader = ( { children } ) => {
	return <div className="space-y-2">{ children }</div>;
};
SidebarHeader.displayName = 'Sidebar.Header';

const SidebarBody = ( { children } ) => {
	return <div className={ cn( 'space-y-4 grow items-start' ) }>{ children }</div>;
};
SidebarBody.displayName = 'Sidebar.Body';

const SidebarFooter = ( { children } ) => {
	const { isCollapsed, setIsCollapsed, collapsible } =
		useContext( SidebarContext );
	return (
		<div className="space-y-4">
			{ children }
			{ collapsible && (
				<button
					className={ cn(
						'bg-transparent w-full border-0 p-0 m-0 flex items-center gap-2 text-base cursor-pointer',
						isCollapsed && 'justify-center'
					) }
					onClick={ () => {
						setIsCollapsed( ! isCollapsed );

						localStorage.setItem(
							'sidebar-collapsed',
							JSON.stringify( ! isCollapsed )
						);
					} }
					aria-label={
						isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'
					}
				>
					{ isCollapsed ? (
						<>
							<Tooltip title="Expand" placement="right">
								<PanelLeftOpen className="size-5" />
							</Tooltip>
						</>
					) : (
						<>
							<PanelLeftClose className="size-5" /> Collapse
						</>
					) }
				</button>
			) }
		</div>
	);
};
SidebarFooter.displayName = 'Sidebar.Footer';

const SidebarItem = ( { children, className } ) => {
	return <div className={ cn( 'w-full', className ) }>{ children }</div>;
};
SidebarItem.displayName = 'Sidebar.Item';

export default Object.assign( Sidebar, {
	Header: SidebarHeader,
	Body: SidebarBody,
	Footer: SidebarFooter,
	Item: SidebarItem,
} );
