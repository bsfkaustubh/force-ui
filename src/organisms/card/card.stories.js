import RadioGroup from '../../components/radio-group/radio-group.jsx';
import Badge from '../../components/badge/badge.jsx';
import Button from '../../components/button/button.jsx';
import { LogIn, Instagram, Infinity, UserPlus, Share2, AppWindow, Keyboard, Map, House, Bell, Settings, Shield, ArrowUpRight, Ellipsis, Headset, CircleHelp, MessagesSquare, Star } from 'lucide-react'; 
import { ReactComponent as AstraLogo} from './assets/Astra.svg';

export default {
  title: 'Organisms/Cards',
  component: RadioGroup.Group,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
};

const spectraBlocks = [
	{
		id: '1',
		value: 'analytics',
		icon: <LogIn />,
		label: 'Login Form',
		description: 'Demo',
		hideSelection: true,
		badgeItem: (
			<Badge
				label={ 'PRO' }
				icon={ null }
				variant="inverse"
				closable={ false }
			/>
		),
	},
	{
		id: '2',
		value: 'notifications',
		icon: <UserPlus />,
		label: 'Registration Form',
		description: 'Demo',
		hideSelection: true,
		toggleLabel: 'Disable',
		badgeItem: (
			<Badge
				label={ 'PRO' }
				icon={ null }
				variant="inverse"
				closable={ false }
			/>
		),
	},
	{
		id: '3',
		value: 'settings',
		icon: <Instagram />,
		label: 'Instagram Feed',
		description: 'Demo',
		toggleLabel: 'Settings',
		hideSelection: true,
		badgeItem: (
			<Badge
				label={ 'PRO' }
				icon={ null }
				variant="inverse"
				closable={ false }
			/>
		),
	},
	{
		id: '4',
		value: 'security',
		icon: <Infinity />,
		label: 'Loop Builder',
		description: 'Demo',
		toggleLabel: 'Security',
		hideSelection: true,
		badgeItem: (
			<Badge
				label={ 'PRO' }
				icon={ null }
				variant="inverse"
				closable={ false }
			/>
		),
	},
	{
		id: '5',
		value: 'advanced-security',
		icon: <AppWindow />,
		label: 'Marketing Button',
		description: 'Demo',
		toggleLabel: 'Advanced Security',
	},
	{
		id: '6',
		value: 'account-security',
		icon: <Keyboard />,
		label: 'Modal',
		description: 'Demo',
		toggleLabel: 'Account Security',
	},
	{
		id: '7',
		value: 'network-security',
		icon: <Share2 />,
		label: 'Social Share',
		description: 'Demo',
		toggleLabel: 'Network Security',
	},
	{
		id: '8',
		value: 'app-settings',
		icon: <Settings />,
		label: 'Blockquote',
		description: 'Demo',
		toggleLabel: 'App Settings',
	},
	{
		id: '9',
		value: 'firewall',
		icon: <Shield />,
		label: 'Content timeline',
		description: 'Demo',
		toggleLabel: 'Firewall',
	},
	{
		id: '10',
		value: 'user-settings',
		icon: <Settings />,
		label: 'Google Maps',
		description: 'Demo',
		toggleLabel: 'User Settings',
		badgeItem: (
			<Badge
				type="pill"
				label={ 'New' }
				icon={ null }
				className="mr-2"
				size="sm"
				variant="green"
				closable={ false }
			/>
		),
	},
	{
		id: '11',
		value: 'data-protection',
		icon: <Shield />,
		label: 'Lottie Animation',
		description: 'Demo',
		toggleLabel: 'Data Protection',
	},
	{
		id: '12',
		value: 'system-settings',
		icon: <Settings />,
		label: 'Animations',
		description: 'Documentation',
		toggleLabel: 'System Settings',
		badgeItem: (
			<Badge
				type="pill"
				label={ 'Enable' }
				icon={ null }
				className="mr-2"
				size="sm"
				variant="yellow"
				closable={ false }
			/>
		),
	},
];

const cardBlocks2 = [
	{
		id: '1',
		value: 'analytics',
		icon: <House />,
		label: 'Login Form',
		description: 'Demo',
		hideSelection: true,
		badgeItem: (
			<Badge
				label={ 'FREE' }
				icon={ null }
				variant="green"
				closable={ false }
			/>
		),
	},
	{
		id: '2',
		value: 'notifications',
		icon: <Bell />,
		label: 'Registration Form',
		description: 'Demo',
		hideSelection: true,
		toggleLabel: 'Disable',
		badgeItem: (
			<Badge
				label={ 'FREE' }
				icon={ null }
				variant="green"
				closable={ false }
			/>
		),
	},
	{
		id: '3',
		value: 'settings',
		icon: <Settings />,
		label: 'Instagram Feed',
		description: 'Demo',
		toggleLabel: 'Settings',
		hideSelection: true,
		badgeItem: (
			<Badge
				label={ 'FREE' }
				icon={ null }
				variant="green"
				closable={ false }
			/>
		),
	},
	{
		id: '4',
		value: 'security',
		icon: <Shield />,
		label: 'Loop Builder',
		description: 'Demo',
		toggleLabel: 'Security',
		hideSelection: true,
		badgeItem: (
			<Badge
				label={ 'FREE' }
				icon={ null }
				variant="green"
				closable={ false }
			/>
		),
	},
];


export const Card = () => (
    <div style={ { boxSizing: 'border-box', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', borderRadius: '12px', gap: '8px', padding: '16px'} }>
        <div style={ { width: '100%', padding: '4px' } }>
            <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center'} }>
                    Blocks
                    <div>
                        <div style={ { display: 'flex', width: '100%', justifyContent: 'end', alignItems: 'center' } }>
                           <Button
                            icon={<ArrowUpRight />}
                            iconPosition="right"
                            variant="ghost"
                            >
                            View All
                            </Button>
                            <Button variant="ghost">
                                <Ellipsis />
                            </Button>
                        </div>
                    </div>
            </div>
        </div>
        <RadioGroup.Group
            as="div"
            defaultValue={`option-${spectraBlocks[0].id}`}
            onChange={(value) => {
            console.log('Selected:', value);
            }}
        >
            {spectraBlocks.map((option) => (
            <RadioGroup.Button
                key={`option-${option.id}`}
                borderOn={true}
                value={option.value}
                hideSelection={option.hideSelection}
                icon={option.icon}
                toggleLabel={option.toggleLabel}
                label={{
                heading: option.label,
                description: option.description,
                }}
                useSwitch={true}
                badgeItem={option.badgeItem}
            />
            ))}
        </RadioGroup.Group>
  </div>
);

export const Card2b = {
    render: () => (
        <div style={ { boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', width: '416px', padding: '12px', backgroundColor: '#FFFFFF', borderRadius: '12px'} }>
            <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px' } }>
                <div>Extend Your Website</div>
                <ArrowUpRight />
            </div>

            <div style={ { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '4px', backgroundColor: '#F9FAFB', borderRadius: '8px', padding: '4px' } }>
                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', borderRadius: '6px', padding: '8px' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <LogIn />
                        <div style={ { display: 'flex', gap: '4px' } }>
                            <Badge
                                label={ 'Free' }
                                icon={ null }
                                variant="green"
                                closable={ false }
                                />
                            <Button variant="link">Install</Button>
                        </div>
                    </div>
                    <div style={{ fontSize: '14px', padding: '4px'}}>
                        <div>Astra Theme</div>
                        <div style={{color: '#9CA3AF'}}>Free WordPress Page Builder Plugin.</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', borderRadius: '6px', padding: '8px' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <UserPlus />
                        <div style={ { display: 'flex', gap: '4px' } }>
                            <Badge
                                label={ 'Free' }
                                icon={ null }
                                variant="green"
                                closable={ false }
                            />
                            <Button variant="link">Active</Button>
                        </div>
                    </div>
                    <div style={{ fontSize: '14px', padding: '4px'}}>
                        <div>Starter Templates</div>
                        <div style={{color: '#9CA3AF'}}>Build your dream website in minutes with AI.</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', borderRadius: '6px', padding: '8px' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <Instagram />
                        <div style={ { display: 'flex', gap: '4px' } }>
                            <Badge
                                label={ 'Free' }
                                icon={ null }
                                variant="green"
                                closable={ false }
                            />
                            <Button variant="link">Install</Button>
                        </div>
                    </div>
                    <div style={{ fontSize: '14px', padding: '4px'}}>
                        <div>SureCart</div>
                        <div style={{color: '#9CA3AF'}}>The new way to sell on WordPress.</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', borderRadius: '6px', padding: '8px'  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <Infinity />
                        <div style={ { display: 'flex', gap: '4px' } }>
                            <Badge
                                label={ 'Free' }
                                icon={ null }
                                variant="green"
                                closable={ false }
                            />
                            <Button variant="link">Install</Button>
                        </div>
                    </div>
                    <div style={{ fontSize: '14px', padding: '4px'}}>
                        <div>Presto Player</div>
                        <div style={{color: '#9CA3AF'}}>Automate your WordPress setup.</div>
                    </div>
                </div>
            </div>
		</div>
    )
};

export const Card3 = () => (
    <div style={ { boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', width: '416px', padding: '12px', backgroundColor: '#FFFFFF', borderRadius: '12px'} }>
        <div style={ { padding: '4px' } }>
            Quick Access
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px', backgroundColor: '#F9FAFB', padding: '4px', borderRadius: '8px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#FFFFFF', padding: '8px', borderRadius: '6px'}}>
                <Headset />
                <div>VIP Support</div>
                <Badge
                    label={ 'PRO' }
                    icon={ null }
                    variant="inverse"
                    closable={ false }
			    />
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#FFFFFF', padding: '8px', borderRadius: '6px'}}>
                <CircleHelp />
                <div>Help Center</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#FFFFFF', padding: '8px', borderRadius: '6px'}}>
                <MessagesSquare />
                <div>Join the Community</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#FFFFFF', padding: '8px', borderRadius: '6px'}}>
                <Star />
                <div>Rate Us</div>
            </div>
        </div>
  </div>
);
