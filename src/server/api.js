const miscRoutes = (app) => {
  app.get('/api/now', (req, res) => {
    res.json({ now: Date.now(), appName: 'COFFEE' });
  });

  app.post('/api/kickoff', async (req, res) => {
    const { message, index } = req.body;
    try {
      req.app.get('socketIoServer').emit('H2C', JSON.stringify({screen0:1}));
      res.json({ message, index });
    }
    catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  });

};

module.exports = miscRoutes;
