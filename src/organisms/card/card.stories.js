import Container from '../../components/container/container.jsx';
import Switch from '../../components/switch/switch.jsx';
import Badge from '../../components/badge/badge.jsx';
import Button from '../../components/button/button.jsx';
import { ArrowUpRight, LogIn, Instagram, Infinity,  UserPlus, Map, Share2, Ellipsis, Headset, CircleHelp, MessagesSquare, Star } from 'lucide-react';


export const Card = {
    render: () => (
        <div style={ { boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', width: '864px', padding: '16px'} }>
            <div style={ { width: '100%', padding: '4px' } }>
                <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center'} }>
                    <div>Blocks</div>
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

            <div style={ { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '4px', width: '100%', backgroundColor: '#F9FAFB', padding: '4px' } }>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <LogIn />
                        <Badge
                            label={ 'PRO' }
                            icon={ null }
                            variant="inverse"
                            closable={ false }
                            />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <UserPlus />
                        <Badge
                            label={ 'PRO' }
                            icon={ null }
                            variant="inverse"
                            closable={ false }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <Instagram />
                        <Badge
                            label={ 'PRO' }
                            icon={ null }
                            variant="inverse"
                            closable={ false }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px'  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <Infinity />
                        <Badge
                            label={ 'PRO' }
                            icon={ null }
                            variant="inverse"
                            closable={ false }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px'  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <UserPlus />
                        <Switch
                            size="sm"
                            defaultValue={ true }
                            onChange={ ( value ) => {
                                return value;
                            } }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px'  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <UserPlus />
                         <Switch
                            size="sm"
                            defaultValue={ false }
                            onChange={ ( value ) => {
                                return value;
                            } }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px'  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <UserPlus />
                        <Switch
                            size="sm"
                            defaultValue={ true }
                            onChange={ ( value ) => {
                                return value;
                            } }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px'  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <UserPlus />
                        <Switch
                            size="sm"
                            defaultValue={ true }
                            onChange={ ( value ) => {
                                return value;
                            } }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px'  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <UserPlus />
                        <Switch
                            size="sm"
                            defaultValue={ false }
                            onChange={ ( value ) => {
                                return value;
                            } }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px'  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <Map />
                        <Switch
                            size="sm"
                            defaultValue={ true }
                            onChange={ ( value ) => {
                                return value;
                            } }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px'  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <UserPlus />
                        <Switch
                            size="sm"
                            defaultValue={ false }
                            onChange={ ( value ) => {
                                return value;
                            } }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                    <UserPlus />
                        <Switch
                            size="sm"
                            defaultValue={ false }
                            onChange={ ( value ) => {
                                return value;
                            } }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>
            </div>
		</div>
    )
};

export const Card2 = {
    render: () => (
        <div style={ { boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', width: '416px', padding: '16px'} }>
            <div style={ { width: '100%', padding: '4px' } }>
                <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center'} }>
                    <div>Extend Your Website</div>
                    <div>
                        <ArrowUpRight />
                    </div>
                </div>
            </div>

            <div style={ { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '4px', width: '100%', backgroundColor: '#F9FAFB', padding: '4px' } }>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <LogIn />
                        <Badge
                            label={ 'PRO' }
                            icon={ null }
                            variant="inverse"
                            closable={ false }
                            />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <UserPlus />
                        <Badge
                            label={ 'PRO' }
                            icon={ null }
                            variant="inverse"
                            closable={ false }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <Instagram />
                        <Badge
                            label={ 'PRO' }
                            icon={ null }
                            variant="inverse"
                            closable={ false }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

                <div style={ { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#FFFFFF', padding: '8px'  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between' } }> 
                        <Infinity />
                        <Badge
                            label={ 'PRO' }
                            icon={ null }
                            variant="inverse"
                            closable={ false }
                        />
                    </div>
                    <div style={{ padding: '4px'}}>
                        <div>Registration Form</div>
                        <div>Demo</div>
                    </div>
                </div>

            </div>
		</div>
    )
};

export default {
	title: 'Organisms/Cards',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
};