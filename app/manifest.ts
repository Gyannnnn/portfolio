import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gyanranjan Patra Portfolio',
    short_name: 'Gyanranjan Patra',
    description: 'Portfolio of Gyanranjan Patra, a skilled developer and VSSUT Burla graduate specializing in full-stack development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/profile/profile.jpeg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
    categories: ['portfolio', 'developer', 'technology'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}
