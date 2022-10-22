import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: '8yxa4sfw',
	dataset: 'production',
	apiVersion: '2022-10-20',
	useCdn: true,
	token:
		'skHZiXZeX91EvCPyGDuVc8YeEqFrIMD8mkPJgOYTBFPIfeWWp0AWyGo6tJzDbOW95257vwWWNR6fR1LS0CBLCAXUSD6lWweOAdwtlMUzK51NtymV93nue2RJ8Tsiw48n8HttKKfuYWtVA4gw6NPEy7RWU7MdYVwW5zZaUxuBbXQw4as1gM0b',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
