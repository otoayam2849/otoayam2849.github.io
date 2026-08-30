export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer site_footer">
      <div className="site_footer_inner">
        <p className="site_footer_copy">
          &copy;{year} TOHYAMA DAIKI Portfolio Site.
        </p>
      </div>
    </footer>
  );
}
