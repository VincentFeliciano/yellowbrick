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
			'Social and business card graphics',
			'Packaging, labels, and display cards',
			'Shirt, sticker, and merchandise graphics'
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
	kind: 'website' | 'dashboard' | 'automation' | 'product' | 'app';
	summary: string;
	client: string;
	problem: string;
	approach: string;
	solution: string;
	results: string[];
	deliverables: string[];
	/** A photo of the finished work, for projects without a recording. A file in static/; 1200×750. */
	cover?: { src: string; alt: string; /** A 1200×300 strip for short, wide boxes. */ wide?: string };
	/** A short recording of the finished site. Paths are files in static/. */
	video?: { src: string; poster: string; address: string; alt: string };
	/** Pictures for the project page; the first two are shown. */
	images?: { src: string; alt: string; paper?: string; width?: number; height?: number }[];
	/**
	 * For a page that shows a type of work rather than one job: every piece, two to a screen.
	 * Paths are files in static/; 1200×750 unless a size is given.
	 */
	gallery?: {
		title: string;
		note: string;
		src: string;
		alt: string;
		paper?: string;
		width?: number;
		height?: number;
		live?: string;
	}[];
	/** Address of the live site or app. */
	live?: string;
};

// Real work first, then demonstration projects (their client line starts with 'Demo').
export const PROJECTS: Project[] = [
	{
		slug: 'websites',
		title: 'Websites & Apps',
		category: 'Web Design',
		kind: 'website',
		summary: 'Websites, online tools, and custom interfaces, designed and built by hand.',
		client: 'Selected work',
		problem:
			'A site has a job: sell a piece of furniture, take an order, show what a system is doing. We start from that job, not from a template.',
		approach:
			'We design the screens and write the code ourselves, so what you approve is what gets built. Every page is made for phones first and loads fast.',
		solution:
			'Shops and catalogues, product builders that let a customer design their own order, quote and order forms, and control panels for the systems behind a business.',
		results: [
			'An online shop and archive for a furniture studio',
			'A product builder and a silks designer for a gift shop',
			'A quote sheet that works on a phone at the counter',
			'A live control panel for an AI agent'
		],
		deliverables: ['Website design', 'Development', 'Online tools', 'Custom interfaces'],
		video: {
			src: 'images/work/obj52/gallery.mp4',
			poster: 'images/work/obj52/gallery-poster.webp',
			address: 'OBJ.52',
			alt: 'A furniture studio’s archive page: photos of chairs, tables, and cabinets drifting slowly up a white page.'
		},
		gallery: [
			{
				title: 'Shop and catalogue',
				note: 'A furniture studio’s catalogue as a row of cards to flip through, with a cart and checkout.',
				src: 'images/work/obj52/catalogue.webp',
				alt: 'A catalogue page: a row of cards, each with a piece of furniture, its name, status, and price.',
				live: 'https://vincentfeliciano.github.io/OBJ/'
			},
			{
				title: 'Contact and requests',
				note: 'Forms for questions and restoration requests, from the same site.',
				src: 'images/work/obj52/contact.webp',
				alt: 'A dark contact page with contact details on the left and a message form on the right.',
				paper: '#0a0a0a'
			},
			{
				title: 'AI agent control panel',
				note: 'A custom interface for an AI agent: what it is doing, what failed, and what it costs, live.',
				src: 'images/work/alan/cover.webp',
				alt: 'A dark control panel with an activity feed on the left, a map of connected tools in the middle, and provider, execution, and usage figures on the right.',
				paper: '#0b0b0b'
			},
			{
				title: 'Tool and session map',
				note: 'Sessions and the tools they use, drawn as a live map.',
				src: 'images/work/alan/topology.webp',
				alt: 'A map of sessions as yellow circles and tools as blue ones, joined by dotted yellow lines.',
				paper: '#0b0b0b'
			},
			{
				title: 'Custom silks designer',
				note: 'Pick a zone on the jockey, choose colours and patterns, and download an order sheet.',
				src: 'images/work/silks/designer.webp',
				alt: 'A silks designer: zone buttons and colour pickers on the left, a jockey figure in red, blue, and white in the middle, a preview and order form on the right.'
			},
			{
				title: 'Product builder',
				note: 'Customers build their own lawn jockey on screen before they order.',
				src: 'images/work/lawn-jockey/designer.webp',
				alt: 'An online jockey builder showing a jockey figure with colour choices for each part.',
				paper: '#1b203f',
				width: 900,
				height: 1070
			},
			{
				title: 'Quote sheet',
				note: 'A quote form for the shop counter that adds up options and prints or sends the result.',
				src: 'images/work/quote-sheet/sheet.webp',
				alt: 'A quote sheet with customer details, options, and a running total.',
				live: 'https://vincentfeliciano.github.io/jockey-quote-sheet/'
			},
			{
				title: 'Made for the phone',
				note: 'The same quote sheet in the hand.',
				src: 'images/work/quote-sheet/phone.webp',
				alt: 'The quote sheet on a phone screen.',
				width: 780,
				height: 927
			}
		],
		live: 'https://vincentfeliciano.github.io/OBJ/'
	},
	{
		slug: 'graphic-design',
		title: 'Graphic Design & Logos',
		category: 'Branding',
		kind: 'product',
		summary: 'Logos, brand kits, packaging, and artwork for shirts, stickers, and signs.',
		client: 'Selected work',
		problem:
			'A business is seen long before anyone talks to it: on a truck door, a shirt, a label, a phone screen. The artwork has to hold up in all of those places.',
		approach:
			'We draw a mark in one colour first. If it works in black it works everywhere. Then we build out the pieces around it, ready for the print shop.',
		solution:
			'Logos and one-colour versions, business cards and signs, packaging and labels, and print-ready graphics for shirts, stickers, and pins.',
		results: [
			'Logos for small businesses',
			'Full brand kits, from the card to the sticker',
			'Packaging, labels, and counter displays',
			'Shirt graphics, badges, and an enamel pin'
		],
		deliverables: ['Logos', 'Brand kits', 'Packaging and labels', 'Shirt and sticker art'],
		cover: {
			src: 'images/work/marks/cover.webp',
			wide: 'images/work/marks/cover-wide.webp',
			alt: 'Six logos: a tree service, a cloud with a skull face, a nail artist, an outfitter, a horseshoe monogram, and a vulture in a ruff.'
		},
		gallery: [
			{
				title: 'Logos',
				note: 'Marks for a tree service, a nail artist, an outfitter, and more.',
				src: 'images/work/marks/cover.webp',
				alt: 'Six logos: Anna Tree Service, Cloud Cranium, Ybonita Nail Art, ADKs Outfitters, an SB horseshoe monogram, and Vintage Vulture.'
			},
			{
				title: 'One colour and full colour',
				note: 'The name on a two-man saw under a line of pines, in black and in green.',
				src: 'images/work/marks/anna.webp',
				alt: 'A tree service logo in black and in green.'
			},
			{
				title: 'Brand identity',
				note: 'A detailer’s logo under the city skyline, as a logo and as a sticker.',
				src: 'images/work/cityline/cover.webp',
				alt: 'A script wordmark in sky blue under a city skyline, shown on white and as a sticker on navy.'
			},
			{
				title: 'Choosing the lettering',
				note: 'Twenty scripts tried for one name before settling on one.',
				src: 'images/work/cityline/type.webp',
				alt: 'Twenty numbered tests of one word in different script typefaces.'
			},
			{
				title: 'A name in brackets',
				note: 'A 3D print shop’s logo, set like a dictionary entry with its pronunciation.',
				src: 'images/work/plymr/cover.webp',
				alt: 'The PLYMR logo in yellow brackets on black with the line pronounced paa-luh-mer, beside a red bracketed P icon.'
			},
			{
				title: 'Brand kit',
				note: 'Sticker, bottle label, wallpaper, card, one-colour logo, and an alternate mark.',
				src: 'images/work/plymr/kit.webp',
				alt: 'Six pieces of a brand kit in yellow, black, and white.'
			},
			{
				title: 'Shirt graphics',
				note: 'Souvenir designs for a racing town.',
				src: 'images/work/souvenirs/cover.webp',
				alt: 'Three shirt graphics with racehorses, a sunrise, and a mountain camp, in green and gold, red and orange, and gold on green.'
			},
			{
				title: 'A whole rack',
				note: 'More than a dozen designs, most in three colourways.',
				src: 'images/work/souvenirs/tees.webp',
				alt: 'Eight shirt graphics with horses, jockeys, and lettering.'
			},
			{
				title: 'Badges and wordmarks',
				note: 'For stickers, patches, and chest prints.',
				src: 'images/work/souvenirs/badges.webp',
				alt: 'Six badges and wordmarks for Saratoga Springs.'
			},
			{
				title: 'Packaging',
				note: 'A backer card, a counter display, and an edition label for a line of miniatures.',
				src: 'images/work/packaging/cover.webp',
				alt: 'A tall backer card with a racetrack scene, a counter display with a jockey holding a lantern, and a black and white edition label.',
				paper: '#12303d'
			},
			{
				title: 'On the shelf',
				note: 'The finished piece in its box, with the backer card behind it.',
				src: 'images/work/packaging/boxed.webp',
				alt: 'A painted jockey miniature on green felt inside a clear box with an illustrated card behind him.',
				paper: '#e9e7e4',
				width: 900,
				height: 1165
			},
			{
				title: 'Counter display',
				note: 'Tells shoppers what they are looking at without a salesperson.',
				src: 'images/work/packaging/display.webp',
				alt: 'A counter display reading Bring home a piece of Saratoga tradition, with a jockey in red silks holding a lantern.',
				paper: '#12303d',
				width: 900,
				height: 1165
			},
			{
				title: 'Enamel pin',
				note: 'A track post as a pin, with its backing card.',
				src: 'images/work/marks/pin.webp',
				alt: 'An enamel pin of a red and white track post with a gold ball on top, on its backing card and on its own.'
			},
			{
				title: 'On a shirt',
				note: 'The same logo in one colour, and over a retro sunset.',
				src: 'images/work/cityline/system.webp',
				alt: 'A one-colour logo beside a shirt graphic with the logo over a retro sunset.'
			}
		]
	},
	{
		slug: 'cad-product-design',
		title: 'CAD & Product Design',
		category: '3D & Products',
		kind: 'product',
		summary: 'Products worked out in CAD: every panel, hinge, and drawer, drawn to size and rendered.',
		client: 'Selected work',
		problem:
			'A product idea is only a sketch until the parts fit together. Someone has to decide how the lid opens, where the latch goes, and how thick the wall is.',
		approach:
			'We model the product in CAD as it would be made, part by part and to real dimensions. The same model gives the views, the renders, and the files for a prototype.',
		solution:
			'A full mechanical model of the product, flat views from every side, renders in each colour for the pitch, and files ready for printing or a manufacturer.',
		results: [
			'An outdoor pantry case modeled part by part',
			'Front, side, top, and back views from the same model',
			'Shown closed, open, and loaded',
			'Rendered in five colours for a sell sheet'
		],
		deliverables: ['CAD modeling', 'Mechanical design', 'Product renders', 'Files for prototyping'],
		cover: {
			src: 'images/work/dustbox/cover.webp',
			wide: 'images/work/dustbox/cover-wide.webp',
			alt: 'A 3D render of a green hard case with a yellow and black badge, sitting on a dry lake bed.'
		},
		gallery: [
			{
				title: 'Product concept',
				note: 'An outdoor pantry case, designed in CAD and rendered for a pitch.',
				src: 'images/work/dustbox/cover.webp',
				alt: 'A green hard case with a yellow and black badge on a dry lake bed.'
			},
			{
				title: 'From every side',
				note: 'Front, side, top, and back, straight from the CAD model.',
				src: 'images/work/dustbox/views.webp',
				alt: 'Four flat views of a dark green case: front with its badge and red latches, side with a handle, top with orange cord laced across the lid, and back.'
			},
			{
				title: 'The whole case',
				note: 'Handles, latches, cord tie-downs, and feet, all modeled as separate parts.',
				src: 'images/work/dustbox/angle.webp',
				alt: 'The green case from a corner above, showing the laced lid, a side handle, and the latches.'
			},
			{
				title: 'Opened up',
				note: 'Every drawer, shelf, and holder worked out in the model.',
				src: 'images/work/dustbox/open.webp',
				alt: 'The case opened: knives and glasses held in the lid, bottles and plates in the top, yellow drawers behind the fold-out front.'
			},
			{
				title: 'Loaded',
				note: 'The white version with both lids up, bottles and rolls in place, and the front shelf folded down.',
				src: 'images/work/dustbox/white.webp',
				alt: 'A white case with two lids raised, showing bottles, rolled towels, drawers, and a fold-down shelf.'
			},
			{
				title: 'Colourways',
				note: 'The same model in blue, yellow, and white, with its badge.',
				src: 'images/work/dustbox/colours.webp',
				alt: 'The case in three colours beside its badge.'
			}
		]
	},
	{
		slug: 'characters-and-models',
		title: 'Characters & Models',
		category: '3D & Products',
		kind: 'product',
		summary: 'Characters and miniatures: scanned or sculpted, then printed or rendered.',
		client: 'Selected work',
		problem:
			'A character or a keepsake has to have some life in it. It is judged by eye, in the hand or on the screen, not by a ruler.',
		approach:
			'We scan what already exists and sculpt what does not, then clean the model up until it prints well or renders well.',
		solution:
			'Scans of real objects turned into printable models, printed and painted miniatures, and characters posed and rendered for pictures.',
		results: [
			'A full-size lawn jockey scanned and reprinted as a miniature',
			'Printed miniatures, painted and boxed',
			'A mascot character as a posed figure and as a cartoon scene',
			'A cartoon dinosaur modeled for printing'
		],
		deliverables: ['3D scanning', '3D sculpting and modeling', 'Printed miniatures', 'Character renders'],
		cover: {
			src: 'images/work/lawn-jockey/cover.webp',
			wide: 'images/work/lawn-jockey/cover-wide.webp',
			alt: 'Three printed lawn jockey miniatures: one in blue and white checks, one in red silks with a lantern, one in a pewter finish.'
		},
		gallery: [
			{
				title: 'Character figure',
				note: 'Iris, a one-eyed help desk mascot, as a posed figure on a base, front and back.',
				src: 'images/work/characters/iris-figure.webp',
				alt: 'A cartoon girl with one large eye, cat ears, and orange hair, in a teal polo and jeans, waving from a round base. Shown from the front and from behind.'
			},
			{
				title: 'Character scene',
				note: 'The same character modeled at her desk and drawn with outlines, like a cartoon frame.',
				src: 'images/work/characters/iris-desk.webp',
				alt: 'The one-eyed girl typing at a yellow desk with a laptop, a monitor, a name plate reading Iris E., and a framed drawing on the wall.'
			},
			{
				title: 'Dinosaur',
				note: 'A cartoon dinosaur with a saddle, modeled for printing.',
				src: 'images/work/characters/dino.webp',
				alt: 'A grey model of a smiling cartoon dinosaur with spikes down its back, standing on a round pedestal, from two sides.',
				paper: '#ecebe8'
			},
			{
				title: 'Scan to miniature',
				note: 'A real lawn jockey, scanned, modeled, printed small, and painted.',
				src: 'images/work/lawn-jockey/cover.webp',
				alt: 'Three printed lawn jockey miniatures: one in blue and white checks, one in red silks with a lantern, one in a pewter finish.'
			},
			{
				title: 'The model',
				note: 'The scan cleaned up into a model that prints.',
				src: 'images/work/lawn-jockey/model.webp',
				alt: 'A grey 3D model of a lawn jockey, shown from several sides.'
			},
			{
				title: 'Printed statue',
				note: 'A park statue as a resin print a few inches tall.',
				src: 'images/work/plymr/print.webp',
				alt: 'A 3D-printed miniature of a winged statue holding a bowl, beside a black and yellow card.',
				paper: '#d9d9d9',
				width: 900,
				height: 1200
			},
		]
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
