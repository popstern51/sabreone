// ============================================================
//  SabreOne — editable config (Joseph edits THIS file only)
//  No HTML knowledge needed. Just paste between the quotes.
//  After editing: save, then tell SabreJoe to push (or git push).
// ============================================================

// Pro tier checkout URL (Stripe: https://buy.stripe.com/XXXX  |  PayPal: https://paypal.me/yourname/19)
const PAY_LINK_PRO = "https://buy.stripe.com/eVqfZi2CK1UW1Cs8tQbjW02";

// Team tier checkout URL (Stripe: https://buy.stripe.com/YYYY  |  PayPal: https://paypal.me/yourname/49)
const PAY_LINK_TEAM = "https://buy.stripe.com/4gM14ofpwbvwch6dOabjW01";

// Contact email shown on the site (swap to hello@sabreone.com once the domain is registered)
const CONTACT_EMAIL = "jortiz92770@gmail.com";

// ============================================================
//  PRO MODE BACKEND (SabreOne Pro — local stack during bootstrap)
//  Points at Joseph's local Docker stack: LM Studio (Qwen) + PostgREST.
//  Later, swap these to the OCI gateway URL when the cloud backend is live.
//  Joseph: leave as-is unless SabreJoe tells you to change it.
// ============================================================
// Pro mode = BYOK: the CUSTOMER's own API key bills the CUSTOMER. Joseph pays $0 LLM tokens.
// callAIPro() now hits the Groq cloud with the key from user Settings — localhost no longer used.
const PRO_BACKEND = "https://api.groq.com/openai/v1/chat/completions"; // unused default; real key comes from user Settings
const PRO_DB = "http://localhost:3000/chat_history"; // legacy; persistChat disabled
