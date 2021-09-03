const user = require("../model/User");

/* HOME, AND MODULE EXPORT */
exports.home = async (req, res) => {
    res.json({
        server: "INotebook",
        working: true,
        path_name: "Home",
        url: "/"
    })
};

/* ALL PATHS< AND MODULE EXPORT */
exports.allpaths = async (req, res) => {
    res.json({
        paths: {
            home: '/',
            allpaths: '/allpaths',
            test: '/test',
            api: {
                home: '/api',
                test: '/api/test',
                auth: {
                    home: '/api/auth',
                    test: '/api/auth/test',
                    createuser: '/api/auth/createuser'
                }
            }
        }
    })
};

/* TEST, AND MODULE EXPORT */
exports.test = async (req, res) => {
    const data = await user.find({});
    res.json({
        path_name: "Test",
        url: "/test",
        data: data
    })
};