# Punto Migrare - Setup Guide for Custom Domain & Analytics

## 📋 Table of Contents

1. [Custom Domain Setup (Aruba.it)](#custom-domain-setup-arubait)
2. [Google Analytics Setup](#google-analytics-setup)
3. [Cookie Policy Updates](#cookie-policy-updates)
4. [Vercel Deployment Configuration](#vercel-deployment-configuration)
5. [Final Checklist](#final-checklist)

---

## 🌐 Custom Domain Setup (Aruba.it)

### Step 1: Get Your Vercel Deployment Information

1. Go to your Vercel dashboard: https://vercel.com/
2. Select your project: `pmws-last`
3. Go to **Settings** → **Domains**
4. Note down your Vercel deployment URL (e.g., `pmws-last.vercel.app`)

### Step 2: Configure DNS Records in Aruba.it

1. Log in to your Aruba.it control panel
2. Go to **DNS Management** or **Gestione DNS**
3. Find your domain: `puntomigrare.it`
4. Add/Edit the following DNS records:

#### For Root Domain (puntomigrare.it)

**A Record:**

```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600
```

**CNAME Record for www:**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### Alternative: If Aruba doesn't allow A record for root

**CNAME Record (if supported):**

```
Type: CNAME
Name: @ (or leave blank)
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 3: Add Domain to Vercel

1. In Vercel dashboard → **Settings** → **Domains**
2. Click **Add Domain**
3. Enter: `puntomigrare.it`
4. Click **Add**
5. Also add: `www.puntomigrare.it`
6. Vercel will verify DNS records (may take 24-48 hours)

### Step 4: SSL Certificate

- Vercel automatically provisions SSL certificates
- Once DNS propagates, your site will be available via HTTPS
- Check status in Vercel → **Settings** → **Domains**

### Troubleshooting DNS

If domain isn't working after 24 hours:

1. Check DNS propagation: https://dnschecker.org/
2. Verify DNS records in Aruba match exactly
3. Clear browser cache and try incognito mode
4. Check Vercel dashboard for error messages

---

## 📊 Google Analytics Setup

### Step 1: Create Google Analytics Property

1. Go to: https://analytics.google.com/
2. Click **Admin** (gear icon, bottom left)
3. In **Account** column, select or create account
4. In **Property** column, click **Create Property**

### Step 2: Property Configuration

```
Property name: Punto Migrare
Reporting time zone: (GMT+01:00) Rome
Currency: Euro (EUR)
```

### Step 3: Data Stream Setup

1. Click **Data Streams**
2. Click **Add Stream** → **Web**
3. Enter:
   - **Website URL**: `https://puntomigrare.it`
   - **Stream name**: Punto Migrare Website
4. Click **Create Stream**

### Step 4: Get Your Measurement ID

1. After creating stream, you'll see **Measurement ID** (format: `G-XXXXXXXXXX`)
2. **Copy this ID**

### Step 5: Add Measurement ID to Website

1. Open `index.html` in your project
2. Find these two lines (around line 17-19):
   ```html
   gtag('config', 'G-XXXXXXXXXX');
   ```
   and
   ```html
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
   ></script>
   ```
3. Replace **both** `G-XXXXXXXXXX` with your actual Measurement ID
4. Save the file
5. Commit and push:
   ```bash
   git add index.html
   git commit -m "feat: Add Google Analytics Measurement ID"
   git push origin main
   ```

### Step 6: Verify Analytics is Working

1. Visit your website
2. In Google Analytics, go to **Reports** → **Realtime**
3. You should see yourself as an active user
4. Test the cookie consent:
   - First visit: Analytics should be blocked (denied consent)
   - Accept analytics cookies
   - Refresh page
   - Analytics should now track

### Google Analytics with Consent Mode

The website is configured with **Consent Mode V2**:

- Analytics are **blocked by default**
- User must accept analytics cookies
- Consent is stored in localStorage
- Compliant with GDPR/cookie laws

---

## 🍪 Cookie Policy Updates

### What's Already Done

✅ Cookie consent popup created
✅ Consent mode integrated with Google Analytics
✅ Cookie preferences saved in localStorage
✅ Three categories: Necessary, Analytics, Marketing

### What You Need to Update

The **Cookie Policy page** needs to be updated with:

1. **Your Google Analytics Measurement ID**
2. **Data retention period** (you set this in GA4)
3. **Updated effective date**

#### Update Cookie Policy Page

Open `src/pages/CookiePolicyPage.jsx` and update these sections:

**Section: Analytics Cookies**

```jsx
<p>
  Utilizziamo Google Analytics (Measurement ID: G-XXXXXXXXXX) per comprendere
  come i visitatori utilizzano il nostro sito.
</p>
```

**Section: Cookie Table**
Add this row to the analytics cookies table:

```jsx
<tr>
  <td>_ga</td>
  <td>Google Analytics</td>
  <td>Distingue gli utenti</td>
  <td>2 anni</td>
</tr>
<tr>
  <td>_ga_XXXXXXXXXX</td>
  <td>Google Analytics</td>
  <td>Mantiene lo stato della sessione</td>
  <td>2 anni</td>
</tr>
```

**Update Effective Date:**
Change the date at the top of the policy to today's date.

---

## ⚙️ Vercel Deployment Configuration

### Environment Variables (if needed)

If you want to use environment variables for Analytics ID:

1. In Vercel → **Settings** → **Environment Variables**
2. Add:
   ```
   Name: VITE_GA_MEASUREMENT_ID
   Value: G-XXXXXXXXXX
   ```
3. Then in `index.html`, you can reference it (requires build-time injection)

### Vercel Configuration File

Your `vercel.json` should include:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

This file doesn't exist yet. Create it in the root directory if you want these security headers.

---

## ✅ Final Checklist

### Before Going Live

- [ ] **DNS Records**: Added A and CNAME records in Aruba.it
- [ ] **Vercel Domain**: Added puntomigrare.it to Vercel project
- [ ] **SSL Certificate**: Verified SSL is active in Vercel
- [ ] **Google Analytics**: Created property and got Measurement ID
- [ ] **Analytics ID**: Replaced G-XXXXXXXXXX in index.html
- [ ] **Cookie Policy**: Updated with Analytics ID and current date
- [ ] **Testing**: Tested cookie consent popup
- [ ] **Testing**: Verified Analytics tracking in GA4 Realtime
- [ ] **Testing**: Tested /servizi shows maintenance page
- [ ] **Testing**: Tested 404 page for non-existent routes
- [ ] **Testing**: Verified PWA install prompt works
- [ ] **Testing**: Checked all contact links work
- [ ] **Mobile**: Tested responsive design on phone
- [ ] **Performance**: Run Lighthouse audit

### DNS Propagation Timeline

- **Immediate to 1 hour**: Some users may see new site
- **1-4 hours**: Most users see new site
- **24-48 hours**: All users see new site (full propagation)

### After DNS Propagates

1. Update `sitemap.xml` to use puntomigrare.it instead of pmws-last.vercel.app
2. Submit sitemap to Google Search Console
3. Update og:url meta tags to use puntomigrare.it
4. Test all functionality on live domain

---

## 🆘 Support & Troubleshooting

### Common Issues

**Issue: Domain not working after 48 hours**

- Check DNS with: https://dnschecker.org/
- Verify Aruba DNS records match exactly
- Contact Aruba support if records are correct but not propagating

**Issue: Google Analytics not tracking**

- Check browser console for errors
- Verify Measurement ID is correct (no spaces/typos)
- Check GA4 Realtime report
- Ensure cookie consent was accepted
- Try in incognito mode

**Issue: Cookie popup not showing**

- Clear localStorage: `localStorage.clear()`
- Refresh page
- Check browser console for errors

**Issue: /servizi showing 404 instead of maintenance**

- Verify App.jsx has the route commented out
- Clear browser cache
- Check deployment is latest version

### Testing Commands

```bash
# Test build locally
npm run build
npm run preview

# Check for errors
npm run lint

# Generate PWA icons (if needed)
npm run generate-pwa-icons
```

---

## 📞 Next Steps

1. ✅ Set up DNS records in Aruba
2. ✅ Add domain to Vercel
3. ✅ Wait for DNS propagation (24-48h)
4. ✅ Create Google Analytics property
5. ✅ Add Measurement ID to index.html
6. ✅ Update Cookie Policy page
7. ✅ Test everything on live domain
8. ✅ Submit sitemap to Google Search Console

**Important Files to Update with Your Custom Domain:**

- `index.html` - Update og:url meta tags
- `public/sitemap.xml` - Update all URLs
- `public/robots.txt` - Update sitemap URL
- `README.md` - Update deployment URL

Good luck! 🚀
