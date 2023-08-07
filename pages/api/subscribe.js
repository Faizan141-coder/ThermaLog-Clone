// pages/api/subscribe.js
import fs from 'fs';
import Cors from 'cors'

// Initialize the cors middleware
const cors = Cors({
  origin: 'https://embedaiot.vercel.app/', // Replace with your Next.js app's domain
  methods: ['POST'], // Allow only POST requests
});

// Helper method to handle the cors middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {

  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const { email } = req.body;

    // Validate the email (you can add more validation if needed)
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    // Load existing emails from JSON file
    let existingEmails = [];
    try {
      const data = fs.readFileSync('emails.json', 'utf8');
      existingEmails = JSON.parse(data);
    } catch (error) {
      // If the file doesn't exist, it will be created when we save the first email.
    }

    // Check if the email already exists
    if (existingEmails.includes(email)) {
      return res.status(409).json({ error: 'Email already subscribed', message: 'You are already subscribed to this newsletter' });
    }

    // Add the new email to the existing list
    existingEmails.push(email);

    // Save the updated email list to the JSON file
    fs.writeFileSync('emails.json', JSON.stringify(existingEmails));

    return res.status(200).json({ message: 'You are subscribed to this newsletter' });
  }

  return res.status(405).end(); // Method Not Allowed
}
