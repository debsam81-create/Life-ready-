import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import crypto from 'crypto';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// API Endpoint for email signups
app.post('/api/signup', (req, res) => {
  const { email, name, honeypot } = req.body;

  // Spam protection: if honeypot is filled, silently ignore
  if (honeypot) {
    console.log('Honeypot filled, ignoring signup:', email);
    return res.status(200).json({ success: true, message: "You're on the list — we'll be in touch" });
  }

  // Whitelist-sanitize inputs to prevent shell injection
  const sanitize = (s) => (s || '').replace(/[^a-zA-Z0-9@.+ _'-]/g, '').slice(0, 100);
  const safeEmail = sanitize(email);
  const safeName = sanitize(name);

  // Robust email validation
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(safeEmail)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const source = 'website';

  try {
    const sql = `INSERT INTO signups (id, email, name, source, created_at) VALUES ('${id}', '${safeEmail}', '${safeName}', '${source}', '${createdAt}')`;
    
    console.log(`Executing: team-db "${sql}"`);
    execSync(`team-db "${sql}"`);
    
    res.status(200).json({ success: true, message: "You're on the list — we'll be in touch" });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

// Catch-all to serve index.html for React Router
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production server running on port ${PORT}`);
});
