import "./footerForm.scss";

export default function FooterForm() {
  return (
    <form className="footer-form flex-between-center">
      <input type="text" placeholder="Your email address" />
      <button type="submit">Subscribe</button>
    </form>
  );
}
