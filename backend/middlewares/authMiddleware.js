

export function ensureAuth(req, res, next) {
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
  