import { ChevronRight, X } from 'lucide-react';
import {
	ProgressSteps,
	Topbar,
	Button,
	RadioButton,
	Label,
} from '@/components';
import { Icons } from '@/globals/icons/icons';

export default {
	title: 'Templates/Onboarding/Import',
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			description: 'Content to render inside the OnboardingImport.',
			control: { type: 'none' },
		},
	},
};

const Template = ( args ) => {
	return (
		<div
			{ ...args }
			className="bg-background-secondary min-h-screen w-full pb-10"
		>
			<Topbar className="bg-background-secondary">
				<Topbar.Left>
					<Topbar.Item>
						<Icons.SureRankLogo />
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle>
					<Topbar.Item>
						<ProgressSteps currentStep={ 2 }>
							<ProgressSteps.Step labelText="Connect" />
							<ProgressSteps.Step labelText="Import" />
							<ProgressSteps.Step labelText="Profile" />
							<ProgressSteps.Step labelText="Social" />
						</ProgressSteps>
					</Topbar.Item>
				</Topbar.Middle>
				<Topbar.Right>
					<Topbar.Item>
						<X />
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<div className="md:w-[41rem] mx-auto p-8 mt-10 border-border-subtle bg-background-primary rounded-md">
				<div>
					<Label size="md" className="font-semibold">
						Import Data From Your Current Plugins
					</Label>
					<Label className="text-text-secondary mt-1 text-sm max-w-[520px]">
						We have deducted few SEO plugins installed on your
						website. Select the plugin from which you want to import
					</Label>
				</div>
				<div className="py-6">
					<RadioButton.Group vertical={ true }>
						<RadioButton.Button
							value="seoPress"
							label={ {
								heading: `SEOPress`,
							} }
							borderOn={ true }
						/>
						<RadioButton.Button
							value="aioSeo"
							label={ {
								heading: `AIO SEO`,
							} }
							borderOn={ true }
						/>
						<RadioButton.Button
							value="youstSeo"
							label={ {
								heading: `Yoast SEO`,
							} }
							borderOn={ true }
						/>
					</RadioButton.Group>
				</div>
				<div className="flex justify-end items-center gap-3 mt-6">
					<Button variant="ghost">Skip</Button>
					<Button className="flex items-center gap-2">
						Next <ChevronRight />
					</Button>
				</div>
			</div>
		</div>
	);
};

export const OnboardingImport = Template.bind( {} );
OnboardingImport.args = {};

OnboardingImport.storyName = 'OnboardingImport';
