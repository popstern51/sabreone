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
// ============================================================
//  PRO MODE — two paths (Joseph edits THIS file only)
//  BYOK (default): customer pastes their own Groq key -> they pay their provider, Joseph $0.
//  HOSTED: Joseph pays for a shared Groq key; customer just subscribes $19/$49 (no key needed).
//  Set JOSEPH_PRO_KEY to your Groq key to ENABLE the hosted path. Leave '' to offer BYOK only.
// ============================================================
const PRO_BACKEND = "https://api.groq.com/openai/v1/chat/completions";
// Joseph's hosted Pro key (used ONLY when customer picks "Subscribe" instead of BYOK).
// Get one free at console.groq.com. This is server-side; never shown to customers.
const JOSEPH_PRO_KEY = "";
// Stripe webhook endpoint (EC2). Verifies payment before Pro unlocks. Leave '' to skip verification.
const PRO_WEBHOOK = "http://184.73.61.6:8899/verify";

// ============================================================
//  MODEL HEALTH (self-healing watchdog)
//  If Groq retires/deprecates a model (happened to Llama 4 Scout),
//  the app auto-switches to the next live model on load — no broken chats.
//  ORDER MATTERS: first model in MODEL_ALLOWLIST is the preferred default.
//  To change the default, move a model to the front. All must be FREE on Groq.
// ============================================================
const MODEL_ALLOWLIST = [
  "llama-3.3-70b-versatile",   // preferred (powerful, free)
  "llama-3.1-8b-instant",       // fast fallback
  "qwen/qwen3-32b",             // strong fallback
  "openai/gpt-oss-20b"          // last resort
];
// How often (ms) the in-app watchdog re-checks while the tab stays open. 0 = on load only.
const MODEL_HEALTH_INTERVAL = 0;
