const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin');
const TersePlugin=require('terser-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
var server_port = process.env.PORT || 5000;
var server_host = '0.0.0.0';//in heroku you have to set it this way, because heroku will not recognize localhost


module.exports={
 entry:{main:'./src/index.js',
       about:"./src/about.js"},
 output:{
     filename:"[name].bundle.js",
     path:path.resolve(__dirname,'dist'),
 },
 devServer: {
    disableHostCheck: true,
    contentBase: './dist',
    compress: true,
    inline: true,
    port:server_port,
    host:server_host 
   },
 optimization:{
 minimizer:[new OptimizeCssAssetsPlugin(),
           new TersePlugin()]
 },  
 plugins:[new MiniCssExtractPlugin({filename:"[name].[contentHash].css"}),
     new HtmlWebpackPlugin({template:'./src/template/template.html',
                            filename:'index.html',
                            chunks:['main']}),//match the entry'sname
     new HtmlWebpackPlugin({template:'./src/template/about.html',
                           filename:'p&g/about.html',//putting the route in front of the filename will automatically generate a foler ,in this case, about html is inside p&g folder
                           chunks:['about']}),
    new CleanWebpackPlugin()
],
 module:{
     rules:[{
         test:/\.css$/,
         use:[MiniCssExtractPlugin.loader,
              'css-loader']
     },
     {test:/\.html$/,
      use:['html-loader'] },
     {test:/\.(svg|jpe?g|gif|png)$/,
      use:{
          loader:"file-loader",
          options:{name:"[name].[hash].[ext]",
                   outputPath:"Images"}
      }}]
 }

}
