const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');



module.exports={
 entry:'./src/index.js',
 output:{
     filename:"main.js",
     path:path.resolve(__dirname,"dist")
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