// All site copy and business details live here so they can be edited in one place.

export const SITE = {
	name: 'Yellowbrick',
	tagline: 'Design. Build. Make.',
	description:
		'Yellowbrick is an independent creative technology studio in Schenectady, NY. We design brands, build websites, and set up systems that cut out manual work.',
	url: 'https://yellowbrick.studio',
	email: 'hello@yellowbrick.studio',
	phone: '(518) 870-4581',
	phoneHref: 'tel:+15188704581',
	location: 'Schenectady, NY',
	locationNote: 'Working everywhere',
	social: [
		// TODO: replace with the real profile links before launch.
		{ label: 'Instagram', href: 'https://instagram.com/' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/' },
		{ label: 'GitHub', href: 'https://github.com/' }
	]
};

export type Category = 'Web Design' | 'Branding' | 'Systems' | '3D & Products';

export type Service = {
	slug: string;
	number: string;
	pillar: string;
	title: string;
	category: Category;
	short: string;
	summary: string;
	from: number;
	/** The matching option in the contact form's "What do you need?" list. */
	need: string;
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
		need: 'Website / Web application',
		category: 'Web Design',
		short: 'Websites, applications, interfaces.',
		summary: 'Clear, fast websites that turn visitors into inquiries.',
		from: 399,
		includes: [
			'Custom design that fits your brand',
			'Phone, tablet, and desktop layouts',
			'An inquiry form that goes to your inbox',
			'Basic SEO setup and analytics',
			'Fast, secure hosting setup',
			'A walkthrough so you can update it yourself'
		],
		idealFor: [
			'Local businesses that need a site people trust',
			'Old sites that no longer match the business',
			'Launching a new product, service, or event'
		],
		timeline: 'Typically 2–4 weeks',
		faqs: [
			{
				q: 'What does “from $399” include?',
				a: 'A focused site of a few pages with a working contact form. Larger sites, online stores, and custom features are quoted after a short discovery call.'
			},
			{
				q: 'Do I need to provide the writing and photos?',
				a: 'It helps, but it’s not required. We can write the copy with you and source or create images as part of the project.'
			},
			{
				q: 'Can I update the site myself?',
				a: 'Yes. We set it up so routine changes are simple. If you’d rather not, we offer ongoing support.'
			}
		]
	},
	{
		slug: 'branding',
		number: '01',
		pillar: 'Design',
		title: 'Branding',
		need: 'Branding / Graphic design',
		category: 'Branding',
		short: 'Branding, identity, visual design.',
		summary: 'A logo and identity that look professional everywhere.',
		from: 199,
		includes: [
			'Logo design with primary and compact versions',
			'Color palette and typography',
			'A short brand guide to share with your team',
			'Files ready for print and web',
			'Social and business card graphics'
		],
		idealFor: [
			'New businesses that need a professional first impression',
			'Businesses that outgrew a DIY logo',
			'Teams that want one consistent look everywhere'
		],
		timeline: 'Typically 1–3 weeks',
		faqs: [
			{
				q: 'How many logo concepts will I see?',
				a: 'We start with a few distinct directions, then refine the one you like best. A few focused rounds beat a long list of options.'
			},
			{
				q: 'Do I own the final files?',
				a: 'Yes. Once the project is paid in full, the artwork and files are yours.'
			}
		]
	},
	{
		slug: 'automation',
		number: '03',
		pillar: 'Systems',
		title: 'Automation',
		need: 'Automation / Dashboard',
		category: 'Systems',
		short: 'Automation, dashboards, workflows.',
		summary: 'Workflows and dashboards that cut manual work.',
		from: 299,
		includes: [
			'A review of how the work gets done today',
			'Automations that remove repetitive steps',
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
				a: 'Usually not. We connect the tools you already use and only suggest changes that clearly pay off.'
			},
			{
				q: 'What if something breaks later?',
				a: 'Everything is documented. For systems that need ongoing care, we offer support plans.'
			}
		]
	},
	{
		slug: '3d-products',
		number: '04',
		pillar: 'Make',
		title: '3D & Products',
		need: '3D / Custom product',
		category: '3D & Products',
		short: '3D, objects, experiments, products.',
		summary: 'Models, prototypes, and custom objects.',
		from: 99,
		includes: [
			'3D modeling from sketches, photos, or ideas',
			'3D-printed prototypes and small runs',
			'Custom signage, displays, and objects',
			'Files ready for printing or manufacturing'
		],
		idealFor: [
			'Testing a product idea before paying for production',
			'Custom pieces for a storefront, event, or gift',
			'Replacement parts and one-off objects'
		],
		timeline: 'Depends on size and complexity',
		faqs: [
			{
				q: 'What materials can you print in?',
				a: 'Common plastics for prototypes, display pieces, and working parts. We’ll recommend the right one for your use.'
			}
		]
	}
];

/** Display order for the "What we do" pillars: Design, Build, Systems, Make. */
export const PILLARS = [...SERVICES].sort((a, b) => a.number.localeCompare(b.number));

export const PROCESS: { number: string; title: string; short: string; detail: string }[] = [
	{
		number: '01',
		title: 'Discover',
		short: 'We learn about your business and goals.',
		detail:
			'A short call about what you need, who it’s for, and what a good result looks like. No jargon, no pressure.'
	},
	{
		number: '02',
		title: 'Plan',
		short: 'We define the scope and create a plan.',
		detail:
			'You get a written proposal with scope, timeline, and price before any work begins. No surprises.'
	},
	{
		number: '03',
		title: 'Design',
		short: 'We design around what you actually need.',
		detail:
			'We share designs early and refine them with you, so the direction is settled before we build.'
	},
	{
		number: '04',
		title: 'Build',
		short: 'We build, test, and refine everything.',
		detail:
			'We build, add content, and test on every device. You get updates and a preview link as we go.'
	},
	{
		number: '05',
		title: 'Deliver',
		short: 'We launch and stay available after.',
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
			'Weekly review without the copy and paste'
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
			'Every inquiry gets an instant reply',
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
