export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, week, miles } = req.body;

    // Placeholder for adding a new log entry
    // This will be replaced with database integration
    const newLog = {
      id: Date.now(),
      name,
      week,
      miles,
    };

    // Respond with the new log entry
    res.status(201).json(newLog);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
