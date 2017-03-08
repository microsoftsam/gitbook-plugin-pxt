module.exports = {
    book: {
        assets: './assets',
        css: [
            'style.css'
        ],
        js: [
            'embed-pxt.js'
        ]
    },
    // Extend templating blocks
    hooks: {
        "page:before": function (page) {
            var config = this.config;
            // Variables
            page.content = page.content.replace(/@([^ ]*?)@/m, function (full, name) {
                return config.get(`variables.${name}`, name);
            })
            // Extend common pxt path
            var pxtcommonpath = config.get(`variables.pxtcommonpath`, '');
            page.content = page.content.replace(/{%\s+extendspxtcommon\s+"(.*)"\s+%}/m, function (full, path) {
                return `{% extends "${pxtcommonpath}${path}" %}`;
            });

            return page;
        }
    }
};
