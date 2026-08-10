import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SiteSchema from '@/components/SiteSchema';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Organization, WebSite and BreadcrumbList structured data. Rendered
          here so every route carries it — the site previously had schema on
          two pages only. */}
      <SiteSchema />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
