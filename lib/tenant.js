/**
 * getTenantData — resolves business data + template for a given tenant slug.
 * Replace the stub below with your real data source (DB, CMS, JSON files, etc.)
 */
export async function getTenantData(tenantSlug) {
  // TODO: fetch from your database or CMS
  // Example stub — swap for real lookup:
  return {
    template: 'apex',
    business: {
      name: 'Apex Home Services',
      tagline: 'Premium Work, Honest Pricing, Every Time',
      phone: '555-000-0000',
      email: 'info@apexhomeservices.com',
      address: '123 Main St, Austin, TX 78701',
      services: [
        {
          name: 'Full Home Renovation',
          description: 'Complete interior and exterior renovation services tailored to your vision and budget.',
          price: '$15,000',
          duration: '4–12 weeks',
        },
        {
          name: 'Kitchen Remodeling',
          description: 'Custom kitchen designs from layout to final finishes — cabinets, countertops, and more.',
          price: '$8,000',
          duration: '2–4 weeks',
        },
        {
          name: 'Bathroom Renovation',
          description: 'Transform your bathrooms with premium fixtures, tile work, and custom vanities.',
          price: '$5,000',
          duration: '1–3 weeks',
        },
        {
          name: 'Deck & Outdoor Living',
          description: 'Custom decks, patios, and outdoor entertainment spaces built to last.',
          price: '$4,000',
          duration: '1–2 weeks',
        },
      ],
      testimonials: [
        {
          name: 'Sarah M.',
          location: 'Austin, TX',
          rating: 5,
          text: 'Exceptional work from start to finish. The team was professional, punctual, and the results exceeded every expectation.',
        },
        {
          name: 'James R.',
          location: 'Round Rock, TX',
          rating: 5,
          text: 'Finally a contractor that does what they say. Transparent pricing, no surprises, and outstanding craftsmanship.',
        },
        {
          name: 'Linda K.',
          location: 'Cedar Park, TX',
          rating: 5,
          text: 'They transformed our space beyond imagination. Worth every penny — we get compliments constantly.',
        },
      ],
      stats: {
        projectsCompleted: 847,
        yearsInBusiness: 12,
        rating: 4.9,
        reviewCount: 312,
      },
      team: [
        {
          name: 'Marcus Webb',
          role: 'Founder & Lead Contractor',
          bio: '20+ years of construction experience. Marcus built this company on the belief that quality work speaks for itself.',
        },
        {
          name: 'Dana Torres',
          role: 'Project Manager',
          bio: 'Dana keeps every project on schedule and on budget. Her clients love her direct communication style.',
        },
        {
          name: 'Chris Nguyen',
          role: 'Lead Carpenter',
          bio: 'Master carpenter with a specialty in custom cabinetry and finish work.',
        },
      ],
      story: {
        headline: 'Started With a Handshake, Built on Trust',
        body: 'We started Apex Home Services in 2012 with two trucks and a promise: to treat every client\'s home like our own. Over a decade later, that promise is the foundation of everything we do. 847 projects. Hundreds of families. One standard of excellence.',
      },
      cta: {
        headline: 'Ready to Start Your Project?',
        subtext: 'Get a free, no-obligation estimate. Most responses within 2 hours.',
        buttonText: 'Get a Free Quote',
      },
    },
  };
}
