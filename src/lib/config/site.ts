import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Hafiz Mahamud',
  subtitle: '',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/profile.jpg',
    name: 'Hafiz Mahamud',
    status: '',
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  themeColor: '#3D4451'
}
