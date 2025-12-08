# EmailJS Setup Instructions

This guide will help you set up EmailJS to receive emails from your contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email address
   - `{{reply_to}}` - Reply-to email (sender's email)

4. Example template:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   You have received a new message from your portfolio contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   Reply-To: {{reply_to}}
   
   Message:
   {{message}}
   ```

5. Save the template and copy your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your dashboard
2. Find your **Public Key** and copy it

## Step 5: Configure Environment Variables

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs and keys from EmailJS

## Step 6: Restart Your Development Server

After adding the environment variables, restart your dev server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox - you should receive the message!

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is active in the dashboard
- Ensure your email template variables match the code (from_name, from_email, message, etc.)

## Security Note

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Your Public Key is safe to use in frontend code (it's designed for client-side use)

