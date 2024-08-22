module.exports = (req, res) => {
  res.status(405).json({ error: '405 Not Allowed nginx' });
};
