const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
var server_port = process.env.PORT || 5000;
var server_host = '0.0.0.0';


module.exports={
 entry:'./src/index.js',
 output:{
     filename:"main.js",
     path:path.resolve(__dirname,"dist")
 },
 devServer: {
    disableHostCheck: true,
    contentBase: './dist',
    compress: true,
    inline: true,
    port:server_port,
    host:server_host 
   },
 plugins:[new HtmlWebpackPlugin({template:'./src/template.html'})],
 module:{
     rules:[{
         test:/\.css$/,
         use:['style-loader',
              'css-loader']
     },
     {test:/\.html$/,
      use:['html-loader'] },
     {test:/\.(svg|jpg|gif|png)$/,
      use:{
          loader:"file-loader",
          options:{name:"[name].[hash].[ext]",
                   outputPath:"Images"}
      }}]
 }

}