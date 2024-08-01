import "../../public/assets/css/style.css";
import Script from "next/script";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="nk-body" data-menu-collapse="lg">     
        {children}
        
        {/* Use beforeInteractive if scripts need to be available earlier */}
        <Script src="/assets/js/scripts.js?v1.0.0" strategy="lazyOnload" />
        <Script src="/assets/js/bundle.js?v1.0.0" strategy="lazyOnload" />
      </body>
    </html>
  );
}
