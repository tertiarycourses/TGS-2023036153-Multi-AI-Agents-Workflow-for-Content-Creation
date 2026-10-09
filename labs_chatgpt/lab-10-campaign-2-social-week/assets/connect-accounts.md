# Connect your accounts (Labs 10-12) — optional, about 20 minutes

Every lab works in **dry-run** mode without this. Connect only accounts you
own, and only test pages and channels. Tokens go in .env — never in a prompt.

## LinkedIn (your own profile)
1. linkedin.com/developers -> Create app (needs a LinkedIn Page; a test page
   is fine).
2. Products -> add **Share on LinkedIn** and **Sign In with LinkedIn using
   OpenID Connect**.
3. Auth -> OAuth 2.0 tools -> create a token with scopes openid, profile,
   w_member_social. Paste it into LINKEDIN_ACCESS_TOKEN.
4. Your author URN: call https://api.linkedin.com/v2/userinfo with the token;
   `sub` is your id -> LINKEDIN_AUTHOR_URN=urn:li:person:<sub>.
5. LINKEDIN_VERSION is a month, YYYYMM — use a recent one from LinkedIn's
   docs.

## Facebook Page
1. Create a test Facebook Page you manage.
2. developers.facebook.com -> Create app -> Business.
3. Graph API Explorer -> pick the app -> permissions pages_manage_posts,
   pages_read_engagement -> Generate token -> choose your Page.
4. Use "Get Page Access Token"; put it in FB_PAGE_TOKEN and the Page id in
   FB_PAGE_ID. Check the current Graph API version in Meta's changelog.

## YouTube
1. console.cloud.google.com -> new project -> enable YouTube Data API v3.
2. OAuth consent screen: External, add yourself as a test user.
3. Credentials -> OAuth client ID -> Desktop app. Copy id and secret.
4. Ask Codex for scripts/google-auth.mjs (a one-off local sign-in that
   prints a refresh token for the youtube.upload scope). Put it in
   YOUTUBE_REFRESH_TOKEN.
5. Uploads stay **private** until you make them public in YouTube Studio.
