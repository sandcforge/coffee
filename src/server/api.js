const miscRoutes = (app) => {
  app.get('/api/now', (req, res) => {
    res.json({ now: Date.now(), appName: 'COFFEE' });
  });

  app.post('/api/requpdate', async (req, res) => {
    const { index, status, message } = req.body;
    try {
      console.log(req.body);
      req.app.get('socketIoServer').emit('H2C', JSON.stringify({ index, status: status + 1, message }));
      res.json({ index, status, message });
    }
    catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  });
};

module.exports = miscRoutes;
