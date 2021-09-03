/* API/HOME, AND MODULE EXPORT */
exports.home = async (req, res) => {
    res.json({
        path_name: "Home",
        url: "/api"
    })
};

/* API/TEST, AND MODULE EXPORT */
exports.test = async (req, res) => {
    res.json({
        path_name: "Test",
        url: "/api/test"
    })
};