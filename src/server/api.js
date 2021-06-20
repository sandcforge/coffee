
const miscRoutes = (app) => {
  app.get('/api/now', (req, res) => {
    res.json({ now: Date.now(), appName: 'COFFEE' });
  });
  // Set a cooldown between kicking off the rocket.
  let cooldown = false;
  app.post('/api/kickoff', async (req, res) => {
    const { message } = req.body;

    // Ignore the reqest if still cooling down.
    if (cooldown) {
      res.sendStatus(408);
      return;
    }

    const rocket = req.app.get('rocket');
    const idx = rocket.status.findIndex(i => i == -1);
    if (idx === -1) {
      res.sendStatus(404);
      return;
    }
    rocket.status[idx] = 0;
    rocket.message[idx] = message;
    try {
      req.app.get('socketIoServer').emit('H2C', JSON.stringify(rocket));
      cooldown = true;
      setTimeout(() => {
        cooldown = false;
      }, 5000);
      res.json(rocket);
    }
    catch (e) {
      console.log(e);
      res.sendStatus(404);
    }

  });

  app.post('/api/requpdate', async (req, res) => {
    const { index } = req.body;
    try {
      const rocket = req.app.get('rocket');
      rocket.status[index] = rocket.status[index] + 1;
      if (rocket.status[index] >= req.app.get('totalStatusNumber')) {
        rocket.status[index] = -1;
      }
      req.app.get('socketIoServer').emit('H2C', JSON.stringify(rocket));
      return res.json(rocket);
    }
    catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  });
};

module.exports = miscRoutes;
