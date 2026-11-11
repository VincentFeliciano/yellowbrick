// All site copy and business details live here so they can be edited in one place.

import type { IconName } from './components/Icon.svelte';

export const SITE = {
	name: 'Yellowbrick',
	tagline: 'Design. Build. Make.',
	description:
		'Yellowbrick is an independent creative technology studio in Schenectady, NY. We design brands, build websites, and create digital systems that help businesses move forward.',
	url: 'https://yellowbrick.studio',
	email: 'hello@yellowbrick.studio',
	// TODO: replace with the real business number before launch.
	phone: '(518) 123-4567',
	phoneHref: 'tel:+15181234567',
	location: 'Schenectady, NY',
	locationNote: 'Working everywhere',
	social: [
		{ label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
		{ label: 'GitHub', href: 'https://github.com/', icon: 'github' }
	] satisfies { label: string; href: string; icon: IconName }[]
};

export const NAV = [
	{ label: 'Services', href: '/services' },
	{ label: 'Work', href: '/work' },
	{ label: 'About', href: '/about' },
	{ label: 'Process', href: '/process' },
	{ label: 'Contact', href: '/contact' }
];

export type Category = 'Web Design' | 'Branding' | 'Systems' | '3D & Products';

export type Service = {
	slug: string;
	number: string;
	pillar: string;
	title: string;
	category: Category;
	icon: IconName;
	short: string;
	summary: string;
	from: number;
	/** Short name used in the homepage price strip. */
	priceLabel: string;
	/** Websites, branding, and systems get homepage pricing; Make stays a secondary capability. */
	featured: boolean;
	includes: string[];
	idealFor: string[];
	timeline: string;
	faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
	{
		slug: 'web-design',
		number: '02',
		pillar: 'Build',
		title: 'Web Design',
		priceLabel: 'Websites',
		category: 'Web Design',
		icon: 'browser',
		short: 'Websites, applications, interfaces.',
		summary: 'Modern, responsive websites that look great and convert.',
		from: 399,
		featured: true,
		includes: [
			'Custom design built around your brand',
			'Mobile, tablet, and desktop layouts',
			'Contact or inquiry form wired to your inbox',
			'Basic SEO setup and analytics',
			'Fast, secure hosting setup',
			'A walkthrough so you can make simple updates'
		],
		idealFor: [
			'Local businesses that need a credible online presence',
			'Outdated sites that no longer reflect the business',
			'Launching a new product, service, or event'
		],
		timeline: 'Typically 2–4 weeks',
		faqs: [
			{
				q: 'What does “from $399” include?',
				a: 'A focused, well-built site of a few pages with a working contact form. Larger sites, online stores, and custom features are scoped and quoted after a short discovery call.'
			},
			{
				q: 'Do I need to provide the writing and photos?',
				a: 'It helps, but it is not required. We can shape your copy with you and source or create imagery as part of the project.'
			},
			{
				q: 'Can I update the site myself?',
				a: 'Yes. We set things up so routine changes are simple, and we are available for ongoing support if you would rather not.'
			}
		]
	},
	{
		slug: 'branding',
		number: '01',
		pillar: 'Design',
		title: 'Branding',
		priceLabel: 'Branding',
		category: 'Branding',
		icon: 'pen',
		short: 'Branding, identity, visual design.',
		summary: 'Logos, identity systems, and design that builds trust.',
		from: 199,
		featured: true,
		includes: [
			'Logo design with primary and compact versions',
			'Color palette and typography',
			'Simple brand guide you can share with others',
			'Files prepared for print and web',
			'Social and business card graphics'
		],
		idealFor: [
			'New businesses that need a professional first impression',
			'Brands that have grown past a DIY logo',
			'Organizations that want a consistent look everywhere'
		],
		timeline: 'Typically 1–3 weeks',
		faqs: [
			{
				q: 'How many logo concepts will I see?',
				a: 'We start with a small set of distinct directions, then refine the one you like best. Focused rounds get to a stronger result than a long list of options.'
			},
			{
				q: 'Do I own the final files?',
				a: 'Yes. Once the project is paid in full, the final artwork and files are yours.'
			}
		]
	},
	{
		slug: 'automation',
		number: '03',
		pillar: 'Systems',
		title: 'Automation',
		priceLabel: 'Automation',
		category: 'Systems',
		icon: 'chart',
		short: 'Automation, dashboards, workflows.',
		summary: 'Workflows, dashboards, and systems that save time.',
		from: 299,
		featured: true,
		includes: [
			'A review of how the work gets done today',
			'Automations that remove repetitive manual steps',
			'Dashboards that put key numbers in one place',
			'Connections between the tools you already use',
			'Documentation and a hand-off walkthrough'
		],
		idealFor: [
			'Teams copying data between spreadsheets and apps',
			'Owners who want a clear view of sales or operations',
			'Inquiry, booking, or invoicing steps that eat up hours'
		],
		timeline: 'Typically 1–4 weeks',
		faqs: [
			{
				q: 'Do I have to switch software?',
				a: 'Usually not. We start with the tools you already use and connect them, only recommending changes where they clearly pay off.'
			},
			{
				q: 'What if something breaks later?',
				a: 'Everything is documented, and we offer support plans for systems that need ongoing care.'
			}
		]
	},
	{
		slug: '3d-products',
		number: '04',
		pillar: 'Make',
		title: '3D & Products',
		priceLabel: '3D & Products',
		category: '3D & Products',
		icon: 'cube',
		short: '3D, objects, experiments, products.',
		summary: 'Models, prototypes, and custom-made objects.',
		from: 99,
		featured: false,
		includes: [
			'3D modeling from sketches, photos, or ideas',
			'3D-printed prototypes and small runs',
			'Custom signage, displays, and objects',
			'Files ready for printing or manufacturing'
		],
		idealFor: [
			'Testing a product idea before investing in production',
			'Custom pieces for a storefront, event, or gift',
			'Replacement parts and one-off objects'
		],
		timeline: 'Depends on size and complexity',
		faqs: [
			{
				q: 'What materials can you print in?',
				a: 'Common plastics suited to prototypes, display pieces, and functional parts. We will recommend the right option for your use.'
			}
		]
	}
];

/** Display order for the "What we do" pillars: Design, Build, Systems, Make. */
export const PILLARS = [...SERVICES].sort((a, b) => a.number.localeCompare(b.number));

export const PROCESS: { number: string; title: string; icon: IconName; short: string; detail: string }[] = [
	{
		number: '01',
		title: 'Discover',
		icon: 'search',
		short: 'We learn about your business and goals.',
		detail:
			'A short call to understand what you need, who it is for, and what success looks like. No jargon, no pressure.'
	},
	{
		number: '02',
		title: 'Plan',
		icon: 'clipboard',
		short: 'We define the scope and create a plan.',
		detail:
			'You receive a clear proposal with scope, timeline, and price before any work begins, so there are no surprises.'
	},
	{
		number: '03',
		title: 'Design',
		icon: 'compass',
		short: 'We design solutions that fit your needs.',
		detail:
			'We share designs early and refine them with your feedback, so the direction is settled before we build.'
	},
	{
		number: '04',
		title: 'Build',
		icon: 'wrench',
		short: 'We build, test, and refine everything.',
		detail:
			'Development, content, and testing across devices. You get progress updates and a preview link along the way.'
	},
	{
		number: '05',
		title: 'Deliver',
		icon: 'rocket',
		short: 'We launch and support your success.',
		detail:
			'We launch, walk you through everything, and stay available for questions, updates, and next steps.'
	}
];

export type Project = {
	slug: string;
	title: string;
	category: Category;
	kind: 'website' | 'dashboard' | 'automation';
	summary: string;
	client: string;
	problem: string;
	approach: string;
	solution: string;
	results: string[];
	deliverables: string[];
};

// Demonstration projects for launch. Replace or extend with client work as it comes in.
export const PROJECTS: Project[] = [
	{
		slug: 'local-contractor-website',
		title: 'Local Contractor Website',
		category: 'Web Design',
		kind: 'website',
		summary: 'A fast, mobile-first site that turns local searches into quote requests.',
		client: 'Demo project — residential contractor',
		problem:
			'Most of the contractor’s customers find them on a phone, but their old site was slow, hard to read on mobile, and buried the phone number. Quote requests came in by voicemail with missing details.',
		approach:
			'We built the site around one job: getting a qualified quote request. Services, service area, and recent work are each one tap away, and the call and quote buttons stay in reach on every page.',
		solution:
			'A lightweight multi-page site with a project gallery, service-area pages, and a short quote form that asks for the project type, location, and timing up front.',
		results: [
			'Phone and quote buttons visible on every screen',
			'Quote form collects the details needed to reply in one message',
			'Loads quickly on mobile connections'
		],
		deliverables: ['Website design', 'Development', 'Quote form', 'Basic SEO']
	},
	{
		slug: 'business-dashboard',
		title: 'Business Dashboard',
		category: 'Systems',
		kind: 'dashboard',
		summary: 'One screen for the numbers a small business owner checks every morning.',
		client: 'Demo project — retail shop',
		problem:
			'Sales, inventory, and orders lived in three different apps and a spreadsheet. Answering “how did we do this week?” took an hour of copying and pasting.',
		approach:
			'We listed the handful of questions the owner actually asks, then pulled only the data needed to answer them. Every chart had to earn its place.',
		solution:
			'A dashboard that refreshes automatically with weekly sales, best sellers, low-stock alerts, and open orders, readable on a laptop or phone.',
		results: [
			'Key numbers in one place instead of four',
			'Low-stock items flagged before they run out',
			'Weekly review takes minutes, not an hour'
		],
		deliverables: ['Data connections', 'Dashboard design', 'Automated refresh', 'Documentation']
	},
	{
		slug: 'inquiry-automation',
		title: 'Inquiry Automation System',
		category: 'Systems',
		kind: 'automation',
		summary: 'From web inquiry to booked call without manual copy and paste.',
		client: 'Demo project — service business',
		problem:
			'Every new inquiry meant retyping details into a spreadsheet, writing a reply, and going back and forth to book a call. Leads went cold while they waited.',
		approach:
			'We mapped each step from form submission to booked call and removed the ones a person did not need to do.',
		solution:
			'New inquiries are logged automatically, the customer receives an immediate reply with a booking link, and the owner gets a tidy summary with everything needed to prepare.',
		results: [
			'Every inquiry answered within minutes',
			'No more manual data entry for new leads',
			'A single list of every lead and its status'
		],
		deliverables: ['Workflow mapping', 'Form and CRM integration', 'Email automation', 'Hand-off guide']
	}
];

export const BUDGETS = ['Under $500', '$500–$1,000', '$1,000–$2,500', '$2,500+', 'Not sure yet'];

export const NEEDS = [
	'Website / Web application',
	'Branding / Graphic design',
	'Automation / Dashboard',
	'3D / Custom product',
	'Something else'
];

export const usd = (n: number) => `$${n.toLocaleString('en-US')}`;
