export const greeting = (req, res) => {
  res.status(200).json({
    message: "Hi",
  });
};
