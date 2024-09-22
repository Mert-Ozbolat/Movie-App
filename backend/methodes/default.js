const defaultRequest = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "İstek adresi tanımsız" }));
    res.end();
};

module.exports = defaultRequest;