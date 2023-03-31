const Result = require("../models/resultModel");

const saveResult = async (req, res) => {
  const { username, phoneNumber, status } = req.body;

  const result = new Result({
    username,
    phoneNumber,
    status,
  });
  try {
    result.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getResults = async (req, res) => {
  try {
    const results = await Result.find({});
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { saveResult, getResults };
