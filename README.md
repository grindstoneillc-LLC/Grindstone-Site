# Grindstone Industries LLC Website

This is a static multi-page website that can be uploaded to GitHub and deployed free on Vercel.

## Files
- `index.html` = homepage
- `services.html` = services page
- `projects.html` = projects page
- `service-areas.html` = service areas page
- `contact.html` = contact / estimate page
- `styles.css` = site-wide styling
- `script.js` = mobile menu + estimate form email behavior
- `assets/images/branding/logo.png` = main logo
- `assets/images/projects/` = project images

## Fast edits
### Change phone number or email
Search all HTML files for:
- `509-342-4909`
- `Grindstoneillc@gmail.com`

### Change business hours
Search for:
- `7:30 AM`
- `9:30 AM`

### Change project photos
Replace the matching file inside `assets/images/projects/` and keep the same file name.

### Change project descriptions
Open `projects.html` and edit the text inside each project block.

## Estimate form behavior
The estimate form currently opens the visitor's email app with the project details pre-filled.
This avoids needing a paid backend to start.

Later, if you want fully server-side submissions, you can connect the form to a service like Formspree, Resend, or a Vercel serverless function.

## Deploy to Vercel
1. Create a GitHub repository.
2. Upload all files from this folder.
3. Sign in to Vercel.
4. Import the GitHub repository.
5. Deploy.
6. Connect your domain and follow the DNS steps Vercel gives you.
