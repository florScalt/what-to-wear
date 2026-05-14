const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectDB } = require('../lib/mongo');

function createToken(user) {
  if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET environment variable');
  }

  return jwt.sign(
    { userId: user._id.toString(), email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

function publicUser(user) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const db = await connectDB();
    const { name, email, password } = req.body || {};
    const normalizedEmail = String(email || '').trim().toLowerCase();

    if (!name || !normalizedEmail || !password) {
      return res.status(400).json({ error: 'Name, email and password are required' });
    }

    const existingUser = await db.collection('users').findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      name: String(name).trim(),
      email: normalizedEmail,
      password: hashedPassword,
      createdAt: new Date()
    };

    const result = await db.collection('users').insertOne(user);
    const createdUser = { ...user, _id: result.insertedId };
    const token = createToken(createdUser);

    return res.status(201).json({
      token,
      user: publicUser(createdUser)
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    console.error(error);
    return res.status(500).json({ error: 'Could not register user' });
  }
};
