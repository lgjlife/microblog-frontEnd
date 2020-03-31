<template>
    <div id="share-container">

      <el-col :span="12">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">分享<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            
            <!-- 新浪微博 -->
            <el-dropdown-item >
                <img  @click="shareToSinaWB"  src="@/assets/icon/share/o_img_xlwb.png" />
            </el-dropdown-item>
            <!-- 百度贴吧 -->
            <el-dropdown-item >
                <img @click="shareToTieba" src="@/assets/icon/share/o_img_bdtb.png" />
            </el-dropdown-item>
            <!-- 豆瓣  -->
            <el-dropdown-item >
                <img  @click="shareToDouban" src="@/assets/icon/share/o_img_db.png" />
            </el-dropdown-item>
            <!-- QQ好友  -->
            <el-dropdown-item >
                <img  @click="shareToqq" src="@/assets/icon/share/o_img_qq.png" />
            </el-dropdown-item>
            <!-- QQ空间 QQ空间  -->
            <el-dropdown-item >
                <img  @click="shareToQzone" src="@/assets/icon/share/o_img_zone.png"/>
            </el-dropdown-item>
            <!-- 微信 -->
            <el-dropdown-item>
                <img  @click="" src="@/assets/icon/share/o_img_wechat.png" />
            </el-dropdown-item>
        
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>  

    </div>
    
</template>

<script>

var _title= "";   
var _source= "";
var _sourceUrl= "";
var _pic= "";
var _showcount= "";
var _desc= "";
var _summary= "";
var _site= "";
var _url= 'http://www.newsucai.cn';
var _pic= 'http://www.newsucai.cn/static/home/images/jpg/__header.jpg';




export default {
    
    data() {

        
        return{
            
        }
    },
  methods: {

    //分享到新浪微博   
    shareToSinaWB(event){
        event.preventDefault();
        var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?title="123"';     //真实的appkey，必选参数
        _shareUrl += '&url='+ encodeURIComponent(_url||document.location);     //参数url设置分享的内容链接|默认当前页location，可选参数
        _shareUrl += '&title=' + encodeURIComponent(_title||document.title);    //参数title设置分享的标题|默认当前页标题，可选参数
        _shareUrl += '&source=' + encodeURIComponent(_source||'');
        _shareUrl += '&sourceUrl=' + encodeURIComponent(_sourceUrl||'');
        _shareUrl += '&content=' + 'utf-8';   //参数content设置页面编码gb2312|utf-8，可选参数
        _shareUrl += '&pic=' + encodeURIComponent(_pic||'');  //参数pic设置图片链接|默认为空，可选参数
        window.open(_shareUrl,'_blank');
    },
    //分享到QQ空间
    shareToQzone(event){
        event.preventDefault();
        var _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
            _shareUrl += 'url=' + encodeURIComponent(_url||document.location);   //参数url设置分享的内容链接|默认当前页location
            _shareUrl += '&showcount=' + _showcount||0;      //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
            _shareUrl += '&desc=' + encodeURIComponent(_desc||'分享的描述');    //参数desc设置分享的描述，可选参数
            _shareUrl += '&summary=' + encodeURIComponent(_summary||'分享摘要');    //参数summary设置分享摘要，可选参数
            _shareUrl += '&title=' + encodeURIComponent(_title||document.title);    //参数title设置分享标题，可选参数
            _shareUrl += '&site=' + encodeURIComponent(_site||'');   //参数site设置分享来源，可选参数
            _shareUrl += '&pics=' + encodeURIComponent(_pic||'');   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
            window.open(_shareUrl,'_blank');
    },
    //分享到百度贴吧
    shareToTieba(event){
        event.preventDefault();
        var _shareUrl = 'http://tieba.baidu.com/f/commit/share/openShareApi?';
            _shareUrl += 'title=' + encodeURIComponent(_title||document.title);  //分享的标题
            _shareUrl += '&url=' + encodeURIComponent(_url||document.location);  //分享的链接
            _shareUrl += '&pic=' + encodeURIComponent(_pic||'');    //分享的图片
        window.open(_shareUrl,'_blank');
    },
    //分享到豆瓣
    shareToDouban(event){
        event.preventDefault();
        var _shareUrl = 'http://shuo.douban.com/!service/share?';
            _shareUrl += 'href=' + encodeURIComponent(_url||location.href);    //分享的链接
            _shareUrl += '&name=' + encodeURIComponent(_title||document.title);    //分享的标题
            _shareUrl += '&image=' + encodeURIComponent(_pic||'');    //分享的图片
            window.open(_shareUrl,'_blank');
    },
    //分享到qq
    shareToqq(event){
        event.preventDefault();
        var _shareUrl = 'https://connect.qq.com/widget/shareqq/iframe_index.html?';
            _shareUrl += 'url=' + encodeURIComponent(_url||location.href);   //分享的链接
            _shareUrl += '&title=' + encodeURIComponent(_title||document.title);     //分享的标题
        window.open(_shareUrl,'_blank');
    }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
    width: 20px;
    height: 20px;
}

        
</style>



