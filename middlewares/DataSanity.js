const checkIsIdPresent = (req, res, next) => {
    const { id } = req.body;
    if (id) {
        return res.status(400).json({ data: null, errors: "Id is not required" });
    }
    next();
}

module.exports = { checkIsIdPresent };