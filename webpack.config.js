const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const PORT=process.env.PORT||5000;

module.exports={
 entry:'./src/index.js',
 output:{
     filename:"main.js",
     path:path.resolve(__dirname,"dist")
 },
 devServer:{
    disableHostCheck:true, 
    contentBase:path.join(__dirname,'dist'),
    compress:true,
    inline:true,
    port:PORT
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