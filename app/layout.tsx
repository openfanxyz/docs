import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import '../styles/globals.css';

export const metadata = {
  description: 'API & SDK documentation for the OpenFan creator economy platform',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    description: 'API & SDK documentation for the OpenFan creator economy platform',
    title: 'OpenFan Documentation',
  },
  title: 'OpenFan Documentation',
};

const navbar = (
  <Navbar
    logo={
      <span style={{ alignItems: 'center', display: 'flex', fontWeight: 700, fontSize: '1.1rem' }}>
        <span style={{ color: '#e11d9e' }}>Open</span>
        <span>Fan</span>
      </span>
    }
    projectLink="https://github.com/openfanxyz"
  >
    <a
      href="https://openfan.xyz"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: '0.875rem',
        fontWeight: 500,
        padding: '0.5rem 1rem',
      }}
    >
      Back to OpenFan
    </a>
  </Navbar>
);

const footer = (
  <Footer>
    &copy; 2026{' '}
    <a href="https://openfan.xyz" target="_blank" rel="noopener noreferrer">
      OpenFan
    </a>
    . AGPL-3.0 Licensed.
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/openfanxyz/openfan-docs/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
