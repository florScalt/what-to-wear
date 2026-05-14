const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { connectDB } = require('../lib/mongo');

function getAuthenticatedUser(req) {
  const authHeader = req.headers.authorization || '';
  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token || !process.env.JWT_SECRET) {
    return null;
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

function serializeClothingItem(item) {
  return {
    ...item,
    _id: item._id.toString()
  };
}

module.exports = async function handler(req, res) {
  const user = getAuthenticatedUser(req);

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const db = await connectDB();
    const collection = db.collection('clothes');

    if (req.method === 'GET') {
      const clothes = await collection
        .find({ userId: user.userId })
        .sort({ createdAt: -1 })
        .toArray();

      return res.status(200).json(clothes.map(serializeClothingItem));
    }

    if (req.method === 'POST') {
      const { name, category, color, style, imageUrl, pattern } = req.body || {};

      if (!name || !category || !color || !style || !imageUrl) {
        return res.status(400).json({ error: 'Name, category, color, style and imageUrl are required' });
      }

      const clothingItem = {
        userId: user.userId,
        name: String(name).trim(),
        category,
        color,
        style,
        imageUrl,
        pattern: pattern || 'solid',
        createdAt: new Date()
      };

      const result = await collection.insertOne(clothingItem);
      return res.status(201).json(serializeClothingItem({ _id: result.insertedId, ...clothingItem }));
    }

    if (req.method === 'PUT') {
      const { id } = req.query || {};

      if (!id || !ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Valid clothing id is required' });
      }

      const { name, category, color, style, pattern } = req.body || {};

      if (!name || !category || !color || !style) {
        return res.status(400).json({ error: 'Name, category, color and style are required' });
      }

      const updates = {
        name: String(name).trim(),
        category,
        color,
        style,
        pattern: pattern || 'solid'
      };

      const result = await collection.findOneAndUpdate(
        { _id: new ObjectId(id), userId: user.userId },
        { $set: updates },
        { returnDocument: 'after' }
      );

      if (!result) {
        return res.status(404).json({ error: 'Clothing item not found' });
      }

      return res.status(200).json(serializeClothingItem(result));
    }

    if (req.method === 'DELETE') {
      const { id } = req.query || {};

      if (!id || !ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Valid clothing id is required' });
      }

      const result = await collection.deleteOne({
        _id: new ObjectId(id),
        userId: user.userId
      });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Clothing item not found' });
      }

      return res.status(200).json({ message: 'Clothing item deleted' });
    }

    res.setHeader('Allow', 'GET, POST, PUT, DELETE');
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Could not process clothes request' });
  }
};
