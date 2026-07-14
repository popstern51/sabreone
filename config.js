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
// Local LLM brain (OpenAI-compatible). LM Studio serves Qwen 3.5 9B here.
const PRO_BACKEND = "http://localhost:1234/v1/chat/completions";
// Local Supabase-shaped REST (PostgREST) for persistent chat history.
const PRO_DB = "http://localhost:3000/chat_history";
