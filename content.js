/* ================================================================
   ADVERTOAST WEBSITE CONTENT: edit this file to update the site.
   ----------------------------------------------------------------
   • Change text between the "quotes". Keep the commas at line ends.
   • Prices are plain numbers (no $ or £ sign).
   • Offers: set  active: true  to show one; it hides itself after "ends".
   • Videos: add YouTube IDs (the part after youtu.be/ or /shorts/).
   • After saving on GitHub, the live site updates in about 1 minute.
   See "HOW TO UPDATE.md" for step-by-step help.
   ================================================================ */
window.CONTENT = {

  /* ---------- contact ---------- */
  contact: {
    email: "advertoast@gmail.com",     // ← your Advertoast email
    instagram: "advertoast",
    youtube: "Advertoast",
    whatsapp: "",                      // optional, e.g. "9198XXXXXXXX" (leave "" to hide)
    bookingUrl: "",                    // optional free Calendly / Cal.com link (leave "" to hide)
    replyTime: "Replies within 3 hours, Monday to Saturday."
  },

  /* ---------- top banner offers (only active + not expired ones show) ---------- */
  offers: [
    { active: true,  text: "🎁 Free 10-second sample video for your business. No card, no commitment.", button: "Claim yours", ends: "2026-12-31" },
    { active: false, text: "🎄 Holiday promo videos: order by Dec 10 for Christmas delivery.", button: "Book now", ends: "2026-12-10" },
    { active: false, text: "🚀 Launch offer: 20% off your first Promo Pro video with code TOAST20.", button: "Get it", ends: "2026-11-30" }
  ],

  /* ---------- hero ---------- */
  hero: {
    eyebrow: "Freshly Baked Marketing",
    title: "Videos that make people <em>stop</em> scrolling.",
    text: "Promo videos, Reels, motion graphics and app launch videos for small businesses and startups in the US, UK and Europe. Send the brief tonight, wake up to the first draft.",
    button: "Get a free sample",
    video: "media/intro-9x16.mp4"       // the phone in the hero plays this
  },

  /* ---------- who it's for (scrolling strip) ---------- */
  niches: ["Cafés", "Restaurants", "Med spas", "Dental clinics", "Gyms & studios", "Salons", "Real estate", "Shopify brands", "Apps & SaaS", "Startups"],

  /* ---------- services ---------- */
  services: [
    { icon: "📱", title: "Reels, TikToks & Shorts", text: "Your photos and clips turned into scroll-stopping vertical videos with motion text, music and your branding." },
    { icon: "🎬", title: "Promo videos", text: "30–60s ads with a script, voiceover, captions and motion graphics, for offers, launches and seasons." },
    { icon: "✨", title: "App & product launch videos", text: "Clean UI-animation promos for apps, SaaS and products. The kind you see on Product Hunt and X." },
    { icon: "🍞", title: "Logo animations", text: "A 5-second animated logo sting for your Reels, YouTube intro and website." }
  ],

  /* ---------- work / portfolio ----------
     type: "youtube" → id: "VIDEO_ID"     (Shorts work too)
     type: "video"   → src: "media/file.mp4" (small files you upload to the site)
     type: "link"    → url: "https://www.instagram.com/reel/…" + image: "media/thumb.jpg"
     tag: "Client" or "Concept" (be honest: concept = made as a demo)          */
  work: [
    { type: "video", src: "media/intro-9x16.mp4", title: "Advertoast intro", tag: "Studio", format: "9x16" },
    { type: "video", src: "media/logo-9x16.mp4",  title: "Logo animation", tag: "Studio", format: "9x16" },
    { type: "link",  url: "https://www.instagram.com/reel/DXepCwhj7WA/", image: "", title: "Kensio Solar · promo Reel", tag: "Client", format: "9x16" },
    { type: "link",  url: "https://www.instagram.com/reel/DQKBfIekv3Q/", image: "", title: "Baleno Delta · car Reel", tag: "Client", format: "9x16" }
  ],

  /* ---------- pricing ---------- */
  currencies: { USD: "$", GBP: "£", EUR: "€" },   // first one is the default
  packages: [
    { name: "Reel Starter", price: { USD: 149, GBP: 119, EUR: 139 }, per: "per video",
      features: ["15–20s Reel / TikTok / Short", "Made from your photos & clips", "Motion text + licensed music", "1 format (9:16)"] },
    { name: "Promo Pro", price: { USD: 349, GBP: 279, EUR: 329 }, per: "per video", popular: true,
      features: ["30–45s promo video", "Script + natural voiceover", "Motion graphics + captions", "3 formats: 9:16, 1:1, 16:9"] },
    { name: "App / Product Promo", price: { USD: 699, GBP: 549, EUR: 649 }, per: "starting from",
      features: ["30–60s UI-animation video", "Launch-ready for Product Hunt, X, App Store", "Script, music & sound design", "16:9 + 9:16 versions"] },
    { name: "Monthly Content", price: { USD: 749, GBP: 599, EUR: 699 }, per: "per month",
      features: ["4 Reels every month", "Consistent brand style", "Captions & hooks written for you", "Cancel anytime"] }
  ],
  addons: "Add-ons: logo animation $99 / £79 / €89 · extra format $29 · rush 48h delivery +30%",
  terms: "✅ 2 revisions included · ⏱️ 3–5 business-day delivery · 50% upfront, 50% when you approve the preview · Pay by card (PayPal) or bank transfer (Wise)",

  /* ---------- process ---------- */
  steps: [
    { title: "Send the brief", text: "Logo, a few photos or clips, and what you're promoting. Email or DM is enough." },
    { title: "Draft by morning", text: "Thanks to the time difference, your first draft is waiting when you wake up." },
    { title: "Two revisions", text: "Change text, music or timing until it feels right." },
    { title: "Post everywhere", text: "Ready-to-post files for Instagram, TikTok, YouTube and your website." }
  ],

  /* ---------- reviews (add real ones as they come in) ---------- */
  reviews: [
    // { quote: "Fast, creative and easy to work with.", name: "Jane D.", business: "Example Café, Brooklyn" }
  ],

  /* ---------- FAQ ---------- */
  faq: [
    { q: "Where are you based?", a: "Advertoast is a remote studio based in India, working with clients in the US, UK and Europe. Everything happens over email or chat, and the time difference means your drafts arrive overnight." },
    { q: "Do I need to shoot anything?", a: "No. We can work from your existing photos, website or Instagram posts. If you have phone clips, even better." },
    { q: "Who owns the video?", a: "You do. Once the balance is paid, you can use the final video anywhere, forever. Music is licensed for social media and web use." },
    { q: "How do I pay?", a: "50% upfront to start, 50% after you approve the watermarked preview. Card via PayPal, or bank transfer in USD, GBP or EUR via Wise." },
    { q: "What's the free sample?", a: "A 10-second concept video made from your public photos, so you can see the style before paying anything. No card required." }
  ],

  /* ---------- footer ---------- */
  footer: {
    location: "Remote studio · Kozhikode, India · Serving the US, UK & Europe",
    privacy: "We only use business contact details that are publicly listed or that you send us, to talk about video projects. We never sell data. Reply \"stop\" to any email or write to us to be removed and have your details deleted."
  }
};
