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
	/** Pictures for the project page; the first two are shown. Paths are files in static/; 1200×750 unless a size is given. */
	images?: { src: string; alt: string; paper?: string; width?: number; height?: number }[];
	/** Address of the live site or app. */
	live?: string;
};

// Real work first, then demonstration projects (their client line starts with 'Demo').
export const PROJECTS: Project[] = [
	{
		slug: 'obj52',
		title: 'OBJ.52 Furniture Studio',
		category: 'Web Design',
		kind: 'website',
		summary: 'An online archive and shop for a studio that finds, restores, and rebuilds furniture.',
		client: 'OBJ.52 — furniture studio, Saratoga Springs, NY',
		problem:
			'OBJ.52 sells one-of-a-kind pieces: found, restored, or rebuilt. Each one has a story, and a standard shop template would have flattened them into a product grid.',
		approach:
			'We treated the site like a gallery. The furniture is the page: pieces drift up a white wall on their own, and the catalogue reads like a row of index cards to flip through.',
		solution:
			'A hand-built site with a moving archive, a filterable catalogue, a cart and checkout, and forms for questions and restoration requests.',
		results: [
			'Every piece has its own card with its story, status, and price',
			'Catalogue filters for found, restored, reformatted, and custom pieces',
			'Visitors can ask about a piece or request a restoration from the site'
		],
		deliverables: ['Website design', 'Development', 'Catalogue and cart', 'Contact and restoration forms'],
		video: {
			src: 'images/work/obj52/gallery.mp4',
			poster: 'images/work/obj52/gallery-poster.webp',
			address: 'OBJ.52',
			alt: 'The OBJ.52 archive page: photos of chairs, tables, and cabinets drifting slowly up a white page.'
		},
		images: [
			{
				src: 'images/work/obj52/catalogue.webp',
				alt: 'The OBJ.52 catalogue: a row of cards, each with a piece of furniture, its name, status, and price.'
			},
			{
				src: 'images/work/obj52/contact.webp',
				alt: 'The OBJ.52 contact page: a dark page with contact details on the left and a message form on the right.',
				paper: '#0a0a0a'
			}
		],
		live: 'https://vincentfeliciano.github.io/OBJ/'
	},
	{
		slug: 'alan-agent-panel',
		title: 'Alan Agent Panel',
		category: 'Web Design',
		kind: 'app',
		summary: 'A custom control panel for an AI agent: what it is doing, which tools it is using, what it costs, and a place to talk to it.',
		client: 'Studio project — AI agent interface',
		problem:
			'An AI agent that works on its own is hard to trust when all you can see is a chat window. You cannot tell what it is doing, what failed, or what it is spending.',
		approach:
			'We designed the screen around the questions you ask an agent at work: what are you doing, is anything broken, and what has it cost. Everything updates live and nothing needs a click to read.',
		solution:
			'One dark screen with a live activity feed, a map of the tools and sessions in use, the health of each model provider, the day’s runs and spend, and a chat with voice notes along the bottom.',
		results: [
			'Every tool run shows up as it happens, with failures in red',
			'Provider problems are flagged before they stall the work',
			'Tokens and cost for the day are always in view'
		],
		deliverables: ['Interface design', 'Live dashboard', 'Tool and session map', 'Chat with voice notes'],
		cover: {
			src: 'images/work/alan/cover.webp',
			wide: 'images/work/alan/cover-wide.webp',
			alt: 'The Alan panel: a dark screen with an activity feed on the left, a map of connected tools in the middle, and provider, execution, and usage figures on the right.'
		},
		images: [
			{
				src: 'images/work/alan/topology.webp',
				alt: 'The topology map: sessions as yellow circles and tools as blue ones, joined by dotted yellow lines.',
				paper: '#0b0b0b'
			},
			{
				src: 'images/work/alan/providers.webp',
				alt: 'The providers list with usage bars and red flags reading not configured, rate limited, and unreachable, above the day’s tool runs and success rate.',
				paper: '#0b0b0b',
				width: 680,
				height: 1066
			}
		]
	},
	{
		slug: 'lawn-jockey',
		title: 'Saratoga Lawn Jockey Miniatures',
		category: '3D & Products',
		kind: 'product',
		summary: 'Everything a Saratoga gift shop needed to sell its own lawn jockey: the prototype, the look, and an online jockey builder.',
		client: 'Crafters Gallery — gift shop, Saratoga Springs, NY',
		problem:
			'The lawn jockey is a Saratoga racing icon, and Crafters Gallery wanted a miniature of its own to sell. It had the idea, but no product, nothing to show customers, and no way to take custom orders.',
		approach:
			'We built the whole path from idea to sale. We 3D scanned a full-size lawn jockey, rebuilt the model for printing, and made the first prototypes. Then we designed what the customer sees and uses: the packaging and the online builder.',
		solution:
			'Printed prototypes in painted and pewter-look finishes, from a model that prints at 4 to 10 inches. A brand for the line, The Saratoga Miniatures Company, with its own packaging. And an online jockey builder, where every part can be coloured on screen, from hat to base.',
		results: [
			'An idea became a prototype the shop can put in front of customers',
			'One scan became a line of sizes and finishes',
			'Customers can see a custom jockey in the online builder before it is painted'
		],
		deliverables: ['3D scanning and modeling', 'Printed prototypes', 'Brand and packaging', 'Online jockey builder'],
		cover: {
			src: 'images/work/lawn-jockey/cover.webp',
			wide: 'images/work/lawn-jockey/cover-wide.webp',
			alt: 'Three printed lawn jockeys: a large one in blue and white checkered silks, a small one in pink silks holding a lantern, and one in a pewter finish.'
		},
		images: [
			{
				src: 'images/work/lawn-jockey/model.webp',
				alt: 'Two views of the grey 3D model of the lawn jockey, next to a printed pewter-finish miniature standing about four inches tall beside a ruler.'
			},
			{
				src: 'images/work/lawn-jockey/designer.webp',
				alt: 'The online jockey builder: a drawing of a lawn jockey in red silks on a green base, with a list of parts to colour down the right side.',
				paper: '#1b203f',
				width: 900,
				height: 1070
			}
		]
	},
	{
		slug: 'saratoga-miniatures-packaging',
		title: 'Saratoga Miniatures Packaging',
		category: 'Branding',
		kind: 'product',
		summary: 'A name, a backer card, and a counter display that turn a 3D-printed jockey into a product on a shelf.',
		client: 'Crafters Gallery — gift shop, Saratoga Springs, NY',
		problem:
			'A hand-painted miniature in a plain bag is a trinket. To sell as a Saratoga keepsake it needed a name, a story, and a package that looks at home in a gift shop.',
		approach:
			'We gave the line its own brand, The Saratoga Miniatures Company, and drew it like a vintage racing poster: the grandstand, the track rail, the jockey with his lantern.',
		solution:
			'A backer card for each jockey, a one-colour label with room for the edition number and finish, and a counter display that tells shoppers what they are looking at.',
		results: [
			'The miniatures have a name and a look of their own',
			'Every piece carries the same brand, from card to label',
			'The counter display explains the product without a salesperson'
		],
		deliverables: ['Product name and logo', 'Backer card', 'Edition label', 'Counter display'],
		cover: {
			src: 'images/work/packaging/cover.webp',
			wide: 'images/work/packaging/cover-wide.webp',
			alt: 'Packaging for The Saratoga Miniatures Company: a tall backer card with a racetrack scene, a counter display with a jockey holding a lantern, and a black and white edition label.'
		},
		images: [
			{
				src: 'images/work/packaging/boxed.webp',
				alt: 'A finished jockey in red silks, standing on green felt inside a clear box with the Saratoga Miniatures backer card behind him.',
				paper: '#e9e7e4',
				width: 900,
				height: 1165
			},
			{
				src: 'images/work/packaging/labels.webp',
				alt: 'The backer card, an illustrated racetrack under the Saratoga Miniatures Company logo, beside the one-colour label with blanks for the edition number and a row of stars for the finish.',
				paper: '#f3e6c4'
			},
			{
				src: 'images/work/packaging/display.webp',
				alt: 'The counter display: Bring home a piece of Saratoga tradition, with a jockey in red silks holding a lantern and a list of selling points.',
				paper: '#12303d',
				width: 900,
				height: 1165
			}
		]
	},
	{
		slug: 'saratoga-souvenir-graphics',
		title: 'Saratoga Souvenir Graphics',
		category: 'Branding',
		kind: 'product',
		summary: 'A run of T-shirt and sticker graphics for Saratoga Springs: race days, the Spa City, and a few jokes.',
		client: 'Souvenir apparel — Saratoga Springs, NY',
		problem:
			'Track season fills Saratoga with visitors who want something to take home. Most souvenir shirts say the town name and stop there.',
		approach:
			'We designed each graphic around something people say or remember about the place: the track, the springs, Congress Park, a day at the races. Every design is built in one or two inks so it prints cleanly.',
		solution:
			'A collection of shirt graphics, each in several colourways, with a set of badges and wordmarks that work as stickers, patches, and chest prints.',
		results: [
			'More than a dozen designs, most in three colourways',
			'Print-ready files sized for shirts, stickers, and patches',
			'One look that holds across the whole rack'
		],
		deliverables: ['T-shirt graphics', 'Colourways', 'Badges and wordmarks', 'Print-ready files'],
		cover: {
			src: 'images/work/souvenirs/cover.webp',
			wide: 'images/work/souvenirs/cover-wide.webp',
			alt: 'Three shirt graphics: Belmont at the Spa 2025 with a racehorse in green and gold, Saratoga Springs Spa City in red and orange, and Take Me To ’Toga in gold on green.'
		},
		images: [
			{
				src: 'images/work/souvenirs/tees.webp',
				alt: 'Eight shirt graphics, among them Triple Crown Energy, Trifecta?! I barely knew her!, Talk Derby To Me, Saratoga Summer, an Official Souvenir T-Shirt, and a row of colourful horses.'
			},
			{
				src: 'images/work/souvenirs/badges.webp',
				alt: 'Six Saratoga Springs badges and wordmarks: a vintage sign with a running horse, a red roundel, a 150 years oval, a script wordmark, Congress Park, and a Jockey Academy seal.'
			}
		]
	},
	{
		slug: 'cityline-auto-detailing',
		title: 'Cityline Auto Detailing',
		category: 'Branding',
		kind: 'product',
		summary: 'A logo and a full set of brand pieces for a mobile detailer, built around the Albany skyline.',
		client: 'Cityline Auto Detailing — Capital Region, NY',
		problem:
			'A new detailing business needed to look established on day one: on a shirt, a lawn sign, a business card, and a social page.',
		approach:
			'We tried twenty scripts for the name before settling on one, then set it under the city skyline so the logo says where the business works. Bright blue and pink keep it from looking like every other car wash.',
		solution:
			'A colour logo, a one-colour version for cutting and stamping, a sticker, and the same mark carried through cards, signs, and social graphics.',
		results: [
			'One logo that works in full colour and in a single ink',
			'Matching cards, signs, sticker, and social graphics',
			'Files ready for the print shop'
		],
		deliverables: ['Logo', 'One-colour version', 'Business cards and signs', 'Sticker and social graphics'],
		cover: {
			src: 'images/work/cityline/cover.webp',
			wide: 'images/work/cityline/cover-wide.webp',
			alt: 'The Cityline Auto Detailing logo, a script wordmark in sky blue under a city skyline, shown on white and as a sticker on navy.'
		},
		images: [
			{
				src: 'images/work/cityline/type.webp',
				alt: 'Twenty numbered tests of the word Cityline in different script typefaces.'
			},
			{
				src: 'images/work/cityline/system.webp',
				alt: 'The one-colour version of the Cityline logo beside a shirt graphic with the logo over a retro sunset.'
			}
		]
	},
	{
		slug: 'logos-and-marks',
		title: 'Logos and Marks',
		category: 'Branding',
		kind: 'product',
		summary: 'Logos for small businesses: a tree service, a nail artist, an outfitter, and a few more.',
		client: 'Small businesses — Capital Region, NY',
		problem:
			'A small business usually needs one good mark more than it needs a brand book. It has to read on a truck door, a shirt, and a phone screen.',
		approach:
			'Each logo starts from what the business does and is drawn in one colour first. If it works in black, it works everywhere.',
		solution:
			'Simple marks with a clear idea in each: a saw blade and a tree line, a brush stroke that becomes initials, a horseshoe around a monogram.',
		results: [
			'Marks that hold up small and in one colour',
			'Colour and black versions of each',
			'Files ready for print, signs, and web'
		],
		deliverables: ['Logos', 'One-colour versions', 'Merchandise art', 'Print and web files'],
		cover: {
			src: 'images/work/marks/cover.webp',
			wide: 'images/work/marks/cover-wide.webp',
			alt: 'Six logos: Anna Tree Service, Cloud Cranium, Ybonita Nail Art, ADKs Outfitters, an SB horseshoe monogram, and Vintage Vulture.'
		},
		images: [
			{
				src: 'images/work/marks/anna.webp',
				alt: 'The Anna Tree Service logo, the name on a two-man saw under a line of pines, in black and in green.'
			},
			{
				src: 'images/work/marks/pin.webp',
				alt: 'An enamel pin of a red and white Saratoga track post with a gold ball on top, shown on its backing card and on its own.'
			}
		]
	},
	{
		slug: 'plymr-brand',
		title: 'PLYMR',
		category: 'Branding',
		kind: 'product',
		summary: 'The brand for a 3D printing shop: a name in brackets, a pronunciation guide, and a kit that goes on everything that ships.',
		client: 'PLYMR — 3D printing shop',
		problem:
			'A print shop that sells online is judged by a thumbnail and by what is in the parcel. The name, short for polymer, also needed a hint on how to say it.',
		approach:
			'We set the name in heavy brackets, like a dictionary entry, and put the pronunciation under it: paa-luh-mer. Yellow on black reads at any size, and the bracketed P works alone as an icon.',
		solution:
			'A logo, an icon, a one-colour version, business cards with a QR code, stickers and bottle labels, shop banners, and a thank-you strip for orders.',
		results: [
			'A logo that reads at thumbnail size',
			'One kit across cards, labels, stickers, and the shop page',
			'A card that goes out with every print'
		],
		deliverables: ['Logo and icon', 'Business cards', 'Stickers and labels', 'Shop banners'],
		cover: {
			src: 'images/work/plymr/cover.webp',
			wide: 'images/work/plymr/cover-wide.webp',
			alt: 'The PLYMR logo, the name in yellow brackets on black with the line pronounced paa-luh-mer, beside the icon: a red P in brackets.'
		},
		images: [
			{
				src: 'images/work/plymr/kit.webp',
				alt: 'Pieces of the PLYMR kit: a square sticker, a bottle label, a phone wallpaper, the QR code side of the business card, the one-colour logo, and a spiky alternate logo.'
			},
			{
				src: 'images/work/plymr/print.webp',
				alt: 'A 3D-printed miniature of a winged statue holding a bowl, photographed beside a black and yellow PLYMR card.',
				paper: '#d9d9d9',
				width: 900,
				height: 1200
			}
		]
	},
	{
		slug: 'dustbox-field-hamper',
		title: 'DustBox Field Hamper',
		category: '3D & Products',
		kind: 'product',
		summary: 'A product concept for an outdoor pantry: a rugged case that opens into drawers, shelves, and a prep area.',
		client: 'Studio concept — outdoor gear',
		problem:
			'The cooler gets all the attention on a beach or camping trip. Everything else, the plates, bread, cutlery, and tablecloth, ends up crushed in plastic bags.',
		approach:
			'We took the chuck wagon as the starting point: a box with a fold-out front, pigeon holes, and drawers. We modeled it in 3D, worked out where each thing lives, and gave it a badge that looks at home on outdoor gear.',
		solution:
			'A hard case that opens from the top and the front, with fitted spaces for dishes, glasses, bottles, and knives, bungee cords on the lid, and a range of colours.',
		results: [
			'A full 3D model, closed and open',
			'A logo and five colourways',
			'Renders ready for a sell sheet or a pitch'
		],
		deliverables: ['Product concept', '3D model', 'Logo', 'Colourways and renders'],
		cover: {
			src: 'images/work/dustbox/cover.webp',
			wide: 'images/work/dustbox/cover-wide.webp',
			alt: 'A green hard case with a yellow and black DustBox Field Hamper badge, sitting on a dry lake bed.'
		},
		images: [
			{
				src: 'images/work/dustbox/open.webp',
				alt: 'The case opened: knives and glasses held in the lid, bottles and plates in the top, yellow drawers and shelves behind the fold-out front.'
			},
			{
				src: 'images/work/dustbox/colours.webp',
				alt: 'The case in blue with yellow drawers, in yellow with bungee cords across the lid, and in white, beside the DustBox Field Hamper badge.'
			}
		]
	},
	{
		slug: 'jockey-quote-sheet',
		title: 'Jockey Quote Sheet',
		category: 'Systems',
		kind: 'app',
		summary: 'A phone app for quoting and tracking custom lawn jockey paint jobs, from first quote to finished piece.',
		client: 'Crafters Gallery — gift shop, Saratoga Springs, NY',
		problem:
			'Every custom jockey is different: a colour for each part, lettering on the base, sometimes a restoration first. A quote has a lot to get right, and a lot to keep track of once the work starts.',
		approach:
			'We put the whole job on one sheet that lives on a phone. It works with no signal and no account, because quotes get written at the counter and in the workshop.',
		solution:
			'A web app that installs like a phone app: a price book, a colour for every part of the jockey, photos straight from the camera, progress steps from quoted to complete, and a clean quote to print or save as a PDF.',
		results: [
			'Quote, colours, photos, and progress in one place',
			'Prices come from a price book instead of memory',
			'A printed or PDF quote the customer can keep'
		],
		deliverables: ['App design', 'Development', 'Price book', 'Printable quote'],
		cover: {
			src: 'images/work/quote-sheet/cover.webp',
			wide: 'images/work/quote-sheet/cover-wide.webp',
			alt: 'The Jockey Quote Sheet: the dark phone screen with progress steps from quoted to complete, next to the printed quote with a colour square for each part of the jockey.'
		},
		images: [
			{
				src: 'images/work/quote-sheet/sheet.webp',
				alt: 'The printed quote: hat, jockey, platform, and base colours as squares down the page, with the piece details and custom request beside them.'
			},
			{
				src: 'images/work/quote-sheet/phone.webp',
				alt: 'The app on a phone: work and progress, with stages from quoted to complete and a checklist of prime, stencil, and top coat.',
				paper: '#0b0b0b',
				width: 780,
				height: 927
			}
		],
		live: 'https://vincentfeliciano.github.io/jockey-quote-sheet/'
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
