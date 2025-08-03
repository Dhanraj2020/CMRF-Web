export const COURSES_OFFERED = [
	{
		sector: "Apparel",
		certifiedBy: "Vishwakarma Skills University",
		data: [
			{
				certificate: "Diploma in Fashion Design",
				duration: "1 year",
				eligible: "12th Pass"
			},
			{
				certificate: "Garment Construction Techniques",
				duration: "6 months",
				eligible: "12th Pass"
			},
		]
	},
	{
		sector: "Hospitality",
		certifiedBy: "Vishwakarma Skills University",
		data: [
			{
				certificate: "Certificate / Diploma in Hospitality Management",
				duration: "3 months / 12 months ",
				eligible: "12th Pass"
			},
			{
				certificate: "Entrepreneurship Course",
				duration: "1 year",
				eligible: "12th Pass"
			},
		]
	},
	{
		sector: "IT/ITeS",
		certifiedBy: "CUTM / Vishwakarma Skills University",
		data: [
			{
				certificate: "Certificate / Diploma in Digital Marketing",
				duration: "2 months / 1 yr  ",
				eligible: "Graduates"
			},
			{
				certificate: "Basic Computer Course with soft skills",
				duration: "3 months",
				eligible: "10th Pass"
			},
			{
				certificate: "Diploma in Computer Application",
				duration: "6 months",
				eligible: "10th Pass"
			},
		]
	},
	{
		sector: "Paramedics & Allied Healthcare",
		certifiedBy: "NIOS/HSSC",
		data: [
			{
				certificate: "Diploma Medical Lab Technology (MLT)",
				duration: "24 months",
				eligible: "12th Pass"
			},
			{
				certificate: "Diploma Radiology",
				duration: "24 months",
				eligible: "12th Pass"
			},
			{
				certificate: "OT Technician (OTT)",
				duration: "12 months",
				eligible: "12th Pass"
			},
			{
				certificate: "Phlebotomy Assistant",
				duration: "3 months",
				eligible: "12th Pass"
			},
		]
	},
	{
		sector: "Electrical Maintenance",
		certifiedBy: "Schneider/Vishwakarma Skills University/Godrej",
		data: [
			{
				certificate: "House Wiring Technician (in partnership with Schneider)",
				duration: "3 months",
				eligible: "10th Pass"
			},
			{
				certificate: "Solar Technician (in partnership with Schneider)",
				duration: "3 months",
				eligible: "10th Pass"
			},
			{
				certificate: "Home Appliance Repair & RAC Mechanic",
				duration: "3 months",
				eligible: "10th Pass"
			},
		]
	},
	{
		sector: "Electric Vechicle Technology",
		certifiedBy: "CUTM",
		data: [
			{
				certificate: "Electrical Vechicle Maintenance Technician",
				duration: "3 months",
				eligible: "10th Pass"
			},
			{
				certificate: "Electrical Vechicle Assembly",
				duration: "6 months",
				eligible: "10th Pass"
			},
		]
	},
]


export const OPERATING_MODEL_PROPOSED = [
	{
		model: "Build",
		desp: "15k sq ft of existing building to be repurposed for a skill center with labs, classrooms & workshops."
	},
	{
		model: "Operate",
		desp: "Institute to be setup as a Section 8 Not for Profit company and management team to be recruited/deployed from CUTM."
	},
	{
		model: "Assist",
		desp: "CUTM to move onto pure advisory role by Yr 3 and provide strategic inputs for new sectors / course introduction."
	},
	{
		model: "Transfer",
		desp: "Trainers, Counselors, Center Heads & Management team to be mentored by CUTM and be independent by Yr 2."
	},

]

export const SUSTAINABLE_DEVELOPMENT_GOALS = [
	{
		goal: 1,
		name: "No Poverty",
		desp: "End poverty in all its forms everywhere.",
		targets: 7,
		events: 119,
		publications: 49,
		actions: 1438
	},
	{
		goal: 2,
		name: "ZERO HUNGER",
		desp: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
		targets: 8,
		events: 104,
		publications: 17,
		actions: 1372
	},
	{
		goal: 3,
		name: "Good Health & well-being",
		desp: "Ensure healthy lives and promote well-being for all at all ages.",
		targets: 13,
		events: 48,
		publications: 47,
		actions: 1288
	},
	{
		goal: 4,
		name: "Quality education",
		desp: "Ensure quality education will get to all the children's.",
		targets: 10,
		events: 60,
		publications: 11,
		actions: 1822
	},
	{
		goal: 5,
		name: "gender equality",
		desp: "Achieve gender equality and empower all   women and girls.",
		targets: 9,
		events: 81,
		publications: 46,
		actions: 1664
	},
	{
		goal: 6,
		name: "affordable and clean energy",
		desp: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
		targets: 5,
		events: 77,
		publications: 45,
		actions: 1047
	},
	{
		goal: 7,
		name: "industry, innovation and infrastructure",
		desp: "Build resilient infrastructure, promote  inclusive and sustainable industrialization and foster innovation.",
		targets: 8,
		events: 104,
		publications: 17,
		actions: 1044
	},
	{
		goal: 8,
		name: "Reduced inequalities",
		desp: "Reduce inequality within and among countries.",
		targets: 10,
		events: 82,
		publications: 14,
		actions: 994
	},
	{
		goal: 9,
		name: "life below water",
		desp: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
		targets: 10,
		events: 102,
		publications: 42,
		actions: 2858
	},
	{
		goal: 10,
		name: "life on land",
		desp: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and...",
		targets: 12,
		events: 47,
		publications: 34,
		actions: 1318
	},
]

export const LANGUAGES_OPTIONS = [
	{ langID: 0, langName: "English" },
	{ langID: 1, langName: "Hindi" },
	{ langID: 2, langName: "Marathi" },
]


export const GOVERNMENT_SCHMES_OPTIONS = [
	{
		schemeID: 1,
		href: "#",
		ariaLabel: "Visit the India Government Site",
		title: "India Government",
		schemeImgSrc: "/assets/images/home/government-schemes/india-gov.svg",
		alt: "India Government"
	},
	{
		schemeID: 2,
		href: "#",
		ariaLabel: "Visit the Maharashtra Government Site",
		title: "Maharashtra Government",
		schemeImgSrc: "/assets/images/home/government-schemes/maharashtra-government.svg",
		alt: "Maharashtra Government"
	},
	{
		schemeID: 3,
		href: "#",
		ariaLabel: "Visit the Mahatma Jyotirao Phule Jan Arogya Yojana Site",
		title: "Mahatma Jyotirao Phule Jan Arogya Yojana",
		schemeImgSrc: "/assets/images/home/government-schemes/mjpjay-icon.svg",
		alt: "Mahatma Jyotirao Phule Jan Arogya Yojana"
	},
	{
		schemeID: 4,
		href: "#",
		ariaLabel: "Visit the Rashtriya Bal Swasthya Karyakram  Site",
		title: "Rashtriya Bal Swasthya Karyakram",
		schemeImgSrc: "/assets/images/home/government-schemes/rbsk-icon.svg",
		alt: "Rashtriya Bal Swasthya Karyakram"
	},
	{
		schemeID: 5,
		href: "#",
		ariaLabel: "Visit the My Government Site",
		title: "My Government",
		schemeImgSrc: "/assets/images/home/government-schemes/my-gov-icon.svg",
		alt: "My Government"
	},
	{
		schemeID: 6,
		href: "#",
		ariaLabel: "Visit the My Government Site",
		title: "My Government",
		schemeImgSrc: "/assets/images/home/government-schemes/my-gov-icon.svg",
		alt: "My Government"
	},
]
export const QUICKLINKS_OPTIONS = [
	{
		quickLinkID: 1,
		href: "#",
		ariaLabel: "Visit the Donate Online Site",
		label: "Donate Online",
		quickLinkIconSrc: "/assets/images/home/quickLinks/donate-online-icon.svg",
		alt: "Donate Online"
	},
	{
		quickLinkID: 2,
		href: "#",
		ariaLabel: "Visit the Donation Status Enquiry Site",
		label: "Donation Status Enquiry",
		quickLinkIconSrc: "/assets/images/home/quickLinks/donation-status-enquiry-icon.svg",
		alt: "Donation Status Enquiry"
	},
	{
		quickLinkID: 3,
		href: "#",
		ariaLabel: "Visit the Gallery",
		label: "Gallery",
		quickLinkIconSrc: "/assets/images/home/quickLinks/gallery-icon.svg",
		alt: "Gallery"
	},
	{
		quickLinkID: 4,
		href: "#",
		ariaLabel: "Visit Criteria and Eligibility",
		label: "Criteria and Eligibility",
		quickLinkIconSrc: "/assets/images/home/quickLinks/criteria-eligibility-icon.svg",
		alt: "Criteria and Eligibility"
	},
	{
		quickLinkID: 5,
		href: "#",
		ariaLabel: "Visit Application Status Enquiry",
		label: "Application Status\nEnquiry",
		quickLinkIconSrc: "/assets/images/home/quickLinks/application-status-icon.svg",
		alt: "Application Status Enquiry"
	},
]

export const TOP_DONORS_OPTIONS = [
	{
		donarID: 1,
		href: "#",
		labelText: "₹ 47,95,928",
		valueText: "PA to SP Buldana"
	},
	{
		donarID: 2,
		href: "#",
		labelText: "₹ 47,95,928",
		valueText: "PA to SP Buldana"
	},
	{
		donarID: 3,
		href: "#",
		labelText: "₹ 47,95,928",
		valueText: "PA to SP Buldana"
	},
	{
		donarID: 4,
		href: "#",
		labelText: "₹ 47,95,928",
		valueText: "PA to SP Buldana"
	},
	{
		donarID: 5,
		href: "#",
		labelText: "₹ 47,95,928",
		valueText: "PA to SP Buldana"
	},
	{
		donarID: 6,
		href: "#",
		labelText: "₹ 47,95,928",
		valueText: "PA to SP Buldana"
	},
	{
		donarID: 7,
		href: "#",
		labelText: "₹ 47,95,928",
		valueText: "PA to SP Buldana"
	},

]