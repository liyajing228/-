const path=require("path");
module.exports={
    devServer:{
        proxy:{
            "./api":{
                target:"http://39.97.33.178",
                changeOrigin:true,
            }
        }
    },
    configureWebpack:{
        alias: {
            "@":path.join(__dirname,"./src"),
            "api":path.join(__dirname,"./src/api"),
            "views":path.join(__dirname,"./src/views"),
            "common":path.join(__dirname,"./src/common"),
            "utils":path.join(__dirname,"./src/utils"),
            "components":path.join(__dirname,"./src/components"),
            "store":path.join(__dirname,"./src/store"),
            "router":path.join(__dirname,"./src/router"),
        }
    }
}