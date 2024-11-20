try {
  Typekit.load();
} catch (e) {}

const websiteInfo = {
  "url": "https://www.smallwiseone.com",
  "name": "Small Wise One",
  "description": "",
  "@context": "http://schema.org",
  "@type": "WebSite"
};

// Define Static as an object
const Static = {};
Static.COOKIE_BANNER_CAPABLE = true;
                    
function openEmailWindow(event) {
  event.preventDefault();
  const email = document.getElementById('email-yui_3_17_2_1_1552579698432_3881-field').value;
  const subject = 'Newsletter Subscription';
  const body = `Hello, please subscribe me at (${email}) to your newsletter, thanks!`;
  window.location.href = `mailto:hello+newsletter.signup@smallwiseone.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
