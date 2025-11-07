# Google Search Console Setup Guide

## 📋 Sitemap Information

**Your Sitemap URL:** `https://www.puntomigrare.it/sitemap.xml`

**Pages Included:**

- Homepage: `https://www.puntomigrare.it/`
- FAQ: `https://www.puntomigrare.it/faq`
- Contatti: `https://www.puntomigrare.it/contatti`
- Privacy Policy: `https://www.puntomigrare.it/privacy-policy`
- Cookie Policy: `https://www.puntomigrare.it/cookie-policy`

**Note:** The `/servizi` page is **not included** because it's currently under maintenance/redesign.

---

## 🚀 How to Submit to Google Search Console

### Step 1: Access Google Search Console

1. Go to: https://search.google.com/search-console/
2. Sign in with your Google account
3. If you haven't added your property yet, click **"Add Property"**

### Step 2: Add Your Website Property

You have two options:

#### Option A: Domain Property (Recommended)

```
Property type: Domain
Domain: puntomigrare.it
```

- Verifies all subdomains and protocols (http/https/www)
- Requires DNS verification (add TXT record in Aruba)

#### Option B: URL Prefix Property

```
Property type: URL prefix
URL: https://www.puntomigrare.it
```

- Verifies specific URL only
- Multiple verification methods available

### Step 3: Verify Ownership

#### Method 1: HTML File Upload (Easiest)

1. Google will give you an HTML file to download (e.g., `google1234567890.html`)
2. Upload it to: `public/google1234567890.html` in your project
3. Commit and push to deploy
4. Click "Verify" in Google Search Console

#### Method 2: HTML Tag (Alternative)

1. Google will provide a meta tag like:
   ```html
   <meta name="google-site-verification" content="your-verification-code" />
   ```
2. Add this to `index.html` in the `<head>` section
3. Commit and push
4. Click "Verify"

#### Method 3: Google Analytics (If Using)

- Already set up! Since you have Google Analytics (G-WKBR407HG3), you can verify through that.

#### Method 4: DNS TXT Record (For Domain Property)

1. Log in to Aruba.it control panel
2. Go to DNS Management
3. Add TXT record:
   ```
   Name: @ (or root)
   Type: TXT
   Value: google-site-verification=YOUR_CODE_HERE
   ```
4. Wait for DNS propagation (a few hours)
5. Click "Verify"

### Step 4: Submit Your Sitemap

Once verified:

1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Under "Add a new sitemap", enter: `sitemap.xml`
3. Click **Submit**
4. Status should change to "Success" within a few minutes

### Step 5: Verify Sitemap is Working

1. Check status in **Sitemaps** section
2. You should see:
   - **Discovered:** 5 URLs
   - **Status:** Success
3. It may take 1-3 days for Google to crawl all pages

---

## ✅ Verification Checklist

Before submitting to Google:

- [x] Sitemap file exists at `public/sitemap.xml`
- [x] Sitemap uses correct domain: `www.puntomigrare.it`
- [x] All active pages included (excluding /servizi)
- [x] Dates updated to current date
- [x] robots.txt references sitemap correctly
- [x] Sitemap follows XML schema standards
- [ ] Website is live and accessible
- [ ] Google Search Console property created
- [ ] Ownership verified
- [ ] Sitemap submitted

---

## 🔧 Maintenance

### When to Update Sitemap:

1. **When you re-enable /servizi page:**

   - Add this entry to sitemap.xml:

   ```xml
   <url>
     <loc>https://www.puntomigrare.it/servizi</loc>
     <lastmod>2025-11-XX</lastmod>
     <changefreq>weekly</changefreq>
     <priority>0.9</priority>
   </url>
   ```

   - Resubmit in Google Search Console

2. **When you add new pages:**

   - Add new `<url>` entries
   - Update lastmod date
   - Resubmit sitemap

3. **After major content updates:**
   - Update `<lastmod>` date for affected pages
   - Google will automatically detect changes

### Automatic Updates (Optional):

If you want automatic sitemap generation, you can use:

- `vite-plugin-sitemap` package
- Generates sitemap.xml automatically during build
- Includes all routes from your React Router

---

## 📊 Expected Results

After successful submission:

### Week 1:

- Google starts crawling your pages
- Pages begin appearing in **Coverage** report
- May see "Discovered - currently not indexed"

### Week 2-4:

- Pages start getting indexed
- Appear in Google search results
- Check with: `site:puntomigrare.it` in Google

### Ongoing:

- Monitor in **Performance** report
- Track clicks, impressions, CTR
- Optimize based on search queries

---

## 🆘 Troubleshooting

### Issue: "Couldn't fetch sitemap"

- **Solution:** Check sitemap is accessible at: https://www.puntomigrare.it/sitemap.xml
- Clear Vercel cache and redeploy

### Issue: "Sitemap is HTML"

- **Solution:** Make sure sitemap.xml has `.xml` extension, not `.html`
- Verify Content-Type is `application/xml`

### Issue: URLs not being indexed

- **Solution:**
  - Wait 2-4 weeks for initial indexing
  - Use **URL Inspection** tool to request indexing manually
  - Ensure pages have quality content and meta descriptions

### Issue: Verification failed

- **Solution:**
  - Double-check verification file is deployed
  - Try alternative verification method
  - Wait for DNS propagation (if using DNS method)

---

## 🎯 Additional SEO Tips

### After Sitemap Submission:

1. **Add Structured Data:**

   - Already implemented in `StructuredData.jsx` ✅
   - Validates at: https://search.google.com/test/rich-results

2. **Optimize Meta Tags:**

   - Already done for all pages ✅
   - Each page has unique title and description

3. **Monitor Performance:**

   - Check Google Search Console weekly
   - Look for crawl errors
   - Fix any issues promptly

4. **Request Indexing:**

   - For important pages, use URL Inspection tool
   - Click "Request Indexing" to speed up process

5. **Submit to Bing:**
   - Also submit to Bing Webmaster Tools
   - URL: https://www.bing.com/webmasters

---

## 📞 Quick Commands

### Test sitemap locally:

```bash
# Check if sitemap is valid XML
curl https://www.puntomigrare.it/sitemap.xml
```

### Validate sitemap:

- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Paste: `https://www.puntomigrare.it/sitemap.xml`

### Check Google's view:

- https://search.google.com/test/mobile-friendly
- Enter: `https://www.puntomigrare.it`

---

**Last Updated:** November 7, 2025  
**Sitemap Last Modified:** November 7, 2025  
**Status:** ✅ Ready for submission
