import { connectDatabase, insertDocument } from '../../lib/dbUtils';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name || !message) {
      res.status(400).json({ message: 'Invalid input' });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Database connection failed' });
      return;
    }

    try {
      await insertDocument(client, 'contacts', newMessage);
      client.close();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Database write operation failed' });
      return;
    }

    res.status(201).json({ message: 'contact added ' + email });
  }
}
