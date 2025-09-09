# Annora Global

A multilingual website with role-based Google Forms integration for consumers and producers.

## Features

- **Language Support**: English and Hindi
- **Role Selection**: Consumer and Producer paths
- **Google Forms Integration**: Automatic redirection based on user selection
- **Responsive Design**: Built with Tailwind CSS
- **Modern Stack**: Next.js 15 with TypeScript

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mehak781/annora.global.git
cd annora.global
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Automatic Deployment with Vercel

This project is configured for automatic deployment to Vercel:

1. **Fork or clone this repository**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure deployment

3. **Set up GitHub Actions** (optional for advanced CI/CD):
   - Add these secrets to your GitHub repository:
     - `VERCEL_TOKEN`: Your Vercel token
     - `ORG_ID`: Your Vercel organization ID
     - `PROJECT_ID`: Your Vercel project ID

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── contact/          # Contact page
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page with language/role selection
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
└── vercel.json           # Vercel configuration
```

## Configuration

### Google Forms URLs

Update the Google Forms URLs in `src/app/page.tsx`:

```typescript
const GOOGLE_FORMS = {
  consumer: {
    en: 'YOUR_CONSUMER_FORM_URL',
    hi: 'YOUR_CONSUMER_FORM_URL'
  },
  producer: {
    en: 'YOUR_PRODUCER_FORM_URL', 
    hi: 'YOUR_PRODUCER_FORM_URL'
  }
};
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to your fork
5. Create a pull request

## License

This project is open source and available under the [MIT License](LICENSE).