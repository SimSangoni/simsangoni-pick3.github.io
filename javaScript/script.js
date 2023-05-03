window.onload = function () {
  var incorrectAnswers = [];
  var showIncorrectButton = document.getElementById('show-incorrect');
  showIncorrectButton.addEventListener('click', showIncorrectAnswers);

  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
        
       // An object that holds all the questions + possible answers.
       // In the array --> last digit gives the right answer position
        allQuestions = {       
          '1. “我汉语说得不太好，你得帮帮我。”这句话中两个“得”的发音分别是。' : 
          [ 'de de', 'děi de' ,'de děi', 2],

          '2.“孩子”“孔子”“面子”里的“子”，不读轻声的是。' : 
          [ '孩子', '孔子','面子', 1], 
          
           '3. 甲：这件事已经了了。乙：了了就了了吧。其中乙这句话的正确读音是 。': 
           [ 'Le le jiù le le ba.', 'Le liǎo jiù le liǎo ba.', 'Liǎo le jiù liǎo le ba.', 2], 
          
          ' 4. 我觉得汉语不太______,不过声调想要发______可不太容易。':
          ['难 准', '准 难', '难 淮', 0], 
          
           '5. “月在汉字左边或下边多表示与人或人体器官(包括动物)有关,在右边则多表示时间与天气。“脸、脑、腿、脚”这些字都。': [ '跟身体有关', '跟时间有关',  '跟天气有关', 0], 
          
          '6. 汉语中，有些字的意思是由各个部分组合起来体现的。下列哪个字的意思表示“水大的样子”？': 
          ['冰', '淼',  '法', 1], 
          
           '7. 由于新冠病毒疫情的影响,现在只要出门,我们就要______口罩。': 
           [ '带',   '代',  '戴', 2], 
          
           '8. 中国的名胜古迹虽然各不相同,但有一个共同的__________,就是历史悠久,文化底蕴深厚。': 
           [ '特别',  '特点',  '特殊', 1], 
          
          '9. 学校组织留学生去民族文化村参观，大家不仅看到了舞狮、杂技,还参与互动,场面非常_________。': 
          ['热闹', '激烈', '热情', 0], 
          
          '10. 只要全人类共同努力,就一定能________疫情。' :
          [ '战胜',  '战败',  '备战', 0], 

          '11. 在生活中，如果你同意朋友的建议或要求时，应该说“好的”，最好不要说“ ”，因为后者有时候表示你虽然同意，但是不太情愿。': 
          [' 好',' 好吧' ,' 好哇', 1] ,
          
          '12. 吃中餐时，一般先上凉菜， 上热菜，最后上主食。': 
          [' 以后 ',' 后来 ',' 然后', 2] ,
          
          '13. 《舌尖上的中国》是一部有关美食的纪录片，将人物故事与各地美食联系 ，讲述了中国人对美食和美好生活的追求。': 
          [' 上来 ',' 起来 ',' 过来', 1], 
          
          '14. 春天是一个充满欢乐与希望的季节。朱自清写过《春》,里面有一句:“树叶却绿___发亮,小草也青得逼你 眼。” ':
          [' 的 地 ',' 得 地 ',' 得 的', 2] ,
        
          '15. 公共场所有很多提示牌，提醒大家应该注意的事情。下面这个牌子想告诉大家 。': 
          [' 慢慢地滑动 ',' 地面很干净 ',' 走路要小心', 2],
            
          
          '16. 甲：听说你妈妈也会说汉语？ 乙：没错儿！ 妈妈的影响，我从小就对汉语和中国文化感兴趣。':
          [' 对 ',' 被 ',' 受', 2] ,
          
          '17. 2008 年北京推出的汽车限号政策， 大大减轻了交通负担， 有效提高了空气质量。':  
          ['虽然……但是…… ','不但……而且…… ','不是……而是……', 1] ,
          
          '18. 下列哪个成语的意思是“嘴上说的是一套，心里想的是一套”？': 
          [' 口口声声 ',' 心直口快 ',' 口是心非', 2],
          
          '19. 成语“一衣带水”的意思是像一条衣带那样狭窄的水，常用来比喻两地的距离 。': 
          ['很近 ',' 很远 ',' 很长', 0], 
          
          '20. “老王辛勤工作了三十年，现在已经桃李满天下了”。这句话告诉我们，老王的职业是 。': 
          [' 农民 ',' 教师 ',' 作家', 1],
          
          '21. 下列三组词语中，加点的汉字读音相同的一组是？':
          [' 声调 调查 ',' 声乐 乐观 ',' 似乎 似的', 0] ,
          
          '22. 有个学生问老师：“足尊”是什么意思?老师听了很奇怪,因为汉语中没有这个词语。原来,“足”和“尊(zūn)”是一个字的两部分，合起来是“蹲（dūn）”。请问你知道“蹲”是什么字吗？ ':
          ['象形字 ','形声字 ','独体字', 1],
          
          '23. 关于汉字偏旁部首的说法，下面哪一项是不正确的 。': 
          ['带有“木”的汉字都和“树”有关系 ','带有“氵”的汉字都和“水”有关系 ','带有“月”的汉字都和“月亮”有关系', 2], 
          
          '24. 大卫这个学期在咱们班学习汉语,我准备带他去超市买点儿生活_______品。': 
          [' 必须 ',' 必需 ',' 必要', 1], 
          
          '25. 疫情期间,学校的课程都从线下转到了线上。上网课我也同样能_______到学习的乐 趣。 ':
          ['感想 ','感受 ','感动', 1],
          
          '26.到国外留学后,我格外_______家乡的一草一木。': 
          ['缅怀 ','纪念 ','想念', 2], 
          
          '27.甲：这本小说有四百多页，你 一天就看完了？ 乙：是，虽然比较厚，但是写得很有趣，所以看起来很快。 ':
          [' 既然 ',' 竟然 ','仍然 ', 1],
          
          '28.甲：上星期你们没在家，去哪儿了 乙.' :  
          ['我们去了旅游 ','我们去旅游了 ','我们旅游了去 ', 1],
          
          '29.在中国，经常听到大家说“吃早点”。请问这里的“早点”是什么意思？': 
          ['起早 ','早餐 ','午餐 ', 1],
          
          '30.汉语里有些成语和动物有关。请问下列和“马”有关的四字词语中，哪个不是成语？': 
          ['指鹿为马 ','骏马奔驰 ','马到成功', 1] ,
          
          '31.甲：今天上午的会议有什么重要内容？ 乙:我连开会时间都不知道,_______不用说会议内容了。':
          ['更',' 越',' 还', 0],
          
          '32.为了保护旅游景点，很多国家都关闭了对环境 污染的工厂。':
          ['有', '是', '生', 0],
          
          '33.请猜一猜下面这个图片表示的是哪个成语的意思？': 
          ['丢三落四', ' 挑三拣四',' 朝三暮四', 2],
          
          '34. 下面这些词的拼音有拼写错误的是：':
          ['窗户', '电灯', '优秀 ', '骄傲 ',2],
          
          '35. 下列汉字字义为“水大的样子”的是：':
          [' 淼', ' 森',' 磊',  '众', 0],
          
          '36. 我太紧张了，都出了一 汗！':
          ['次',' 趟',' 滴 ',' 身', 3],
          
          '37. 下列四组词语中，加点汉字读音相同的一组是：': 
          ['艰难 难得 ',' 校长 长沙',' 快乐 乐器',' 出行 行业', 0],
          
          '38. 会议的程序，我们还要再商量。': 
          ['根据 ',' 关于',' 按照 ',' 由于', 1],
          
          '39. “我猜你这部新手机不便宜，应该上千。”其中“上千”的意思是:':
          [' 手机上号到了一千号',' 超过一千块钱',' 前面有一千个人','第一千部手机 ', 1],
          
          '40. 这首歌真好听，我还想听，你再唱一 吧。': 
          [' 个 ',' 趟',' 首 ',' 遍', 3],
          
          '41. 汉字“廿”表示 。':
          [' 十 ',' 二十',' 三十 ',' 四十 ', 1],
          
          '42. 身体健康，我们应该保证按时作息。': 
          [' 把','给 ',' 对 ','为了 ', 3],
          
          '43. “张总是我们公司的一把手。”这句话中的“一把手”意思是：':
          [' 工作能手 ', '清洁工人', '文字秘书 ', ' 最高领导 ', 3],   
          
          '1. 中国迄今为止持续时间最长、参与人数最多、国家支持最大、社会影响最广的志愿服务项目是 。':
          ['红丝带计划', '西部计划', '希望工程', '三支一扶', 1],
          
          '2. _______既是中国最大的内陆湖,同时也是中国最大的咸水湖。':
          ['洞庭湖', '青海湖', '西湖', '鄱阳湖', 1],
          
          '3. 中华人民共和国的国歌是《 》。':
          ['东方红', '黄河颂', '义勇军进行曲', '浏阳河', 2],
          
          '4. 中国人口在地域上的分布特点是_______。':
          ['东多西少', '东少西多', '南多北少', '南少北多', 0],
          
          '5. 近年来中国的电子商务发展迅速。其中 月 日是淘宝商城（天猫）的网络促销日，也是目前中国最大的网购狂欢节。 E-commerce in' :
          ['1 1', '12 12', '9 9', '11 11', 3],
          
          '6. 是中国最主要的粮食作物，是全国 60%以上人口主食的原料。':
          ['小麦', '玉米', '水稻', '高粱', 2],
          
          '7. 中国少数民族最多的省份是________。':
          ['云南', '贵州', '台湾', '广西', 0],
          
          '8. 中国有 55 个少数民族,其中_________是现在中国人口最多的少数民族。':
          ['壮族', '傣族', '藏族', '回族', 0],
          
          '9. 人民币是中国的法定货币，其货币符号是 。2015 年 11 月，国际货币基金组织宣布正式将人民币纳入 SDR(特别提款权）货币篮子。': 
          ['\u00A5', '\u0024', '\u20AC', '\u20BD', 0],
          
          '10. 诞生于 1898 年，初名京师大学堂，是中国近代第一所国立大学，其成立标志着中国近代高等教育的开端。':
          ['清华大学', '北京师范大学', '北京大学', '复旦大学', 2],
          
          '11. 中国于 1988 年设立国家汉语水平考试，简称 。这项考试是为测试母语为非汉语者的汉语水平而设立的中国国家级标准化考试。':
          ['SHK', 'HSK', 'KHS', 'HKS', 1],
          
          '11.中国有四个直辖市：北京、天津、上海、重庆。请问“沪”是哪个直辖市的简称？':
           ['天津', '上海', '重庆', 1],
          
          '12.甲：请问，火警的电话号码是多少？ 乙：是 ，你就记住“要救”就行了。' :
          ['120','119', '110', 1],
          
          '13.______是中国最北边的省份,省会哈尔滨是有名的冰城,一年一度的冰雪大世界吸引着众多中外游客。' :
          ['吉林', '辽宁', '黑龙江', 2],
          
          '14.现行第五套人民币五十元的背面图案是西藏的______。':
          ['桂林山水', '人民大会堂', '布达拉宫',  2],
          
         ' 15.近年来，中国交通拥堵现象越来越严重，为了解决堵车问题，中国政府针对小汽车采取了下面哪项措施？':
          ['限牌令、尾号限行', '共享单车', '拼车服务',  0],
          
          '16.甲：说到扶贫，新闻中常说“两不愁”，那是什么意思？乙：就是让贫困家庭在基本生活的两个方面都不发愁： 和 。':
          ['不愁吃 不愁喝',  '不愁吃 不愁穿', '不愁吃 不愁住', 1],
          
          '17. 长城,又称万里长城,在古代主要用于_________,是中华民族的象征。':
          ['游玩', '军事','祭祀', 1],
          
          '18. 中国十大古都之一，拥有都江堰、武侯祠、杜甫草堂等名胜古迹。请问被称为“蓉 城”“锦城”的是中国哪个城市？':
         ['上海', '杭州', '成都', 2],
          
          '19. 海南岛在中国的最南端，常年鲜花盛开，是中国著名的旅游胜地，尤其是冬天，许 多北方游客都喜欢来这里感受温暖的阳光。这段话主要谈论海南岛 。':
          ['非常热', '有鲜花', '是度假的好地方', 2],
          
          '20.京津冀地区是中国的“首都经济圈”,是中国北方经济规模最大的地区。包括北京、天津和________,三地优势互补、协同发展，将有助于带动中国北方的发展。':
         ['山东', '河北', '山西', 1],
          
          '21.喜欢中国功夫的人们，一般都知道位于 省郑州市的少林寺，因为那里是中国功夫的发源地之一。':
          ['海南' ,'河南' ,'湖南', 1],
          
          '22.你朋友既喜欢爬山,又对中国佛教感兴趣。你可以推荐他去_________旅游。':
          ['华山', '普陀山', '泰山' , 1],
          
          '23.根据《北京市生活垃圾管理条例》，“报纸”和“果皮”对应的是下列哪个选项？':
          ['有机垃圾、无机垃圾', '工业垃圾、农业垃圾', '可回收垃圾、厨余垃圾', 2],
          
          '24.由于水土、气候等条件有利于水果的生长，中国很多地方因水果而闻名。比如莱阳的梨、烟台的苹果和 。':
          ['黑龙江的皮草', '新疆的葡萄', '湖南的辣椒', 1],
          
          '25. 中国功夫巨星 于 2017 年荣获第 89 届奥斯卡终身成就奖。他是首位获此殊荣的华人。':
          ['成龙', '李连杰', '甄子丹',  '吴京',  0],
          
          '26. 歌词“请到天涯海角来，这里四季春常在”中的“天涯海角”位于中国最南端的 ___省。':
          ['广东', '云南', '湖南',  '海南', 3],
          
          '27. 第 29 届夏季奥林匹克运动会，于 2008 年 8 月 8 日在中国 开幕，这是中国首次承办奥运会，此次奥运会的口号是“同一个世界，同一个梦想”。':
          ['上海', '深圳', '北京', '天津', 2],
          
          '28. 中国最大的港口是 ，其吞吐量位居世界第一位。':
          ['连云港', '深圳港', '青岛港', '上海港',  3],
          
          '29. 在中国，“学习雷锋好榜样”是一句广为人知的歌词。雷锋 因其乐于助人，全心全意为他人服务而被人们赞赏。他去世以后，每年 被定为“雷锋日”。':
          ['4 月 5 日', '3 月 5 日','5 月 4 日', '3 月 15 日', 1],
          
          '30. ______ 是中国面积最大的省级行政区，约占中国陆地总面积的六分之 一。':
          ['青海', '西藏','新疆',  '河南', 2],
          
          '31. 中国地形多种多样，各类地形中占 全国陆地面积最大的是_______。':
          ['山地', '沙漠', ' 盆地', '平原', 0],
          
          '32. 改革开放以来，中国的第一个经济 特区是______ 。':
          ['珠海',  '厦门', '深圳', '汕头', 2],
          
          '33. 中国气候的特点是_______,属于大陆性季风气候。':
          ['北暖南寒',  '南暖北寒', '东暖西寒', '西暖冬寒', 1],
          
          '34. 中 国 北 京 市 的 电 话 区 号 是 ________。':
          ['010', '020', '001', '002', 0],
          
          '1. 中国是世界文明古国之一，指南针、 造纸术、印刷术和 ______ 这“ 四大发 明”展现了中国古代灿烂的科技文化。':
          [ '日晷 ',' 地动仪', '火药 ',' 针灸', 2],
          
          '2. 在中国被誉为“瓷 都 ”的 城 市 是 。':
          ['宜兴 ',' 开封',' 景德镇 ',' 佛山',  2],
          
          '3. 中国是世界文明古国，也是人类的发源地之一。 中国境内最早的人类是 距今约 170 万年的_______。':
          ['蓝田人 ',' 元谋人',' 山顶洞人 ',' 北京人',  1],
          
          '4. 登高望远，饮菊花酒，品菊花茶，唐朝孟浩然的诗句 “待到重阳日，还来就菊花 ” 生动再现了中国民间传统 节日______的习俗。':
          ['中秋节 ',' 端午节',' 重阳节 ',' 元宵节 ', 2],
          
          '5. ______是中国古代的一种打击乐 器，由青铜制成。 演员演奏时用小木 锤或长型的棒敲打，声音清脆响亮， 优美动听。':
          ['琵琶 ',' 箜篌',' 编钟 ',' 胡琴', 2],
          
          '6. 欧阳修诗句“去年元夜时,花市灯如昼。月到柳梢头,人约黄昏后”中的“元夜”指的是农历_______ 。':
          [' 三月初三 ',' 八月十五',' 五月初五 ',' 正月十五', 3],
          
          '7. 世界上最早的地震仪器“地动仪”是由东汉时期的科学家_______发明创造的。':
          [' 僧一行 ',' 张衡',' 沈括 ',' 扁鹊 ', 1],
          
          '8. 唐代陆羽编写_______一书,系统 地总结了种茶、饮茶的经验，叙述了茶的历史发展，被后人尊为“茶圣”。':
          ['《茶道》 ','《茶经》',' 《茶艺学》 ',' 《茶语者》',  1],
          
          '9. 截至 2023 年，“汉语桥”世界大学 生中文比赛自 2002 年以来已连续成功举办了_____ 届。来自世界 100 多个国家 的 1500 多名大学生先后来华参加了复 赛、决赛；目前，比赛已成为各国大 学生学习汉语、了解中国的重要平台， 在中国与世界各国青年中间架起了一 座沟通心灵的桥梁。' :
          [' 19 ',' 20',' 22 ',' 21', 2],
          
          '10. “轻似蝉翼白如雪,抖似细绸不闻声”是人们对_______的赞誉。明清以来,许多书画大家都用它来书写作画，它也是非常珍贵的文化遗产。':
          [' 棉 ',' 宣纸',' 麻 ',' 丝绸 ', 1],
          
          '11. 中国人常将女中豪杰称为“巾帼 英雄 ”，“巾帼 ”具体指古代妇女身上的_______ 。':
          [' 上衣 ',' 裙子',' 头饰 ',' 罩袍 ', 2],
          
          '12. 长篇小说《子夜》是中国著名现代作家 _______ 的作品,深刻地反映了20世纪30年代初期旧中国广阔的社会生活,先后被译为英、德、俄、日等十几种文字。': 
          ['老舍', ' 巴金', ' 鲁迅', ' 茅盾', 3],

          '13. 中国古代伟大的思想家和教育家__________被联合国教科文组织列为世界十大文化名人之一。': 
          ['庄子', '老子', '韩非子', '孔子', 3],

          '14. 1974 年，在中国陕西出土的 显示了秦代工匠高超的雕塑艺术水平。': 
          ['唐三彩', ' 陶车', '兵马俑', ' 编钟', 2],

          '15. 明代著名医药学家李时珍编写的____________收集了 1892 种药物和 11096 个药方，是中国古代药物学和植物学巨著。': 
          ['《神农本草经》', '《本草纲目》', '《脉经》', '《素问》', 1],

          '16. “四书”指《大学》《中庸》和《孟子》，是儒家传道、授业的基本教材。': 
          ['《礼记》', '《周易》', '《论语》', '《春秋》', 2],

          '17. 西汉外交家_______两次出使西域,开辟了中国连接西亚、欧洲的“丝绸之路”。': 
          [' 郑和', '张骞', '班超', '晏子', 1],
          
          '18. 中国的地方戏丰富多彩,而且大多数地方戏都有自己的代表剧目。人们熟悉的《梁山伯与祝英台》是________代表剧目。': 
          ['评剧', 'B. 越剧', '粤剧', ' 豫剧', 1],
          
          '19. “满招损,谦受益”是对中华民族影响深远的一句名言,形象地表达了这个古老而悠久的民族所崇尚______的美德。':
          [' 诚实' , '谦虚' , '勤劳' , '勇敢' , 1],
          
          '20. 道教是中国土生土长的宗教,道教的建筑称“宫”或“____”。':
          [ '寺 ',' 观',' 庙',' 庵' , 1],
          
          '21. 中国茶分红、绿、青、黄、黑、白六大类,普洱茶属于_______。':
          [ '绿茶,', '黑茶', '红茶 ',' 黄茶 ', 1],
          
          '22. 位于河南洛阳的______是中国石刻艺术的巅峰,也是多元文化融合的见证。':
          [ '云冈石窟 ',' 莫高窟', '龙门石窟 ','麦积山石窟' ,2],
          
          '23. 唐朝著名僧人玄奘从_______出发,沿着丝绸之路,克服重重险阻到 达印度,带回了650 多部佛经。这就是著名的“唐僧取经”。':
          [ '洛阳 ',' 扬州', '长安 ','成都' , 2],
          
          '24. 唢呐是一种民间吹管乐器，公元 3 世纪由______传入中国。':
          [ '朝鲜 ','印度', '波斯 ',' 日本' , 2],
          
          '25. _______是当今世界上现存最早、保存最完整的古代敞肩石拱桥,位于河北省石家庄市赵县。':
          [ '卢沟桥 ',' 宝带桥',' 洛阳桥 ',' 赵州桥', 3],
          
          '26. 北京的_______是目前世界上最大的木结构建筑群,它金碧辉煌、雄伟壮丽，被联合国教科文组织列为“世界文化遗产”。':
          ['颐和园 ','圆明园', '故宫 ',' 雍和宫' , 2],
          
          '27. 狮子林、沧浪亭、拙政园和_______统称“苏州四大名园”,它们吸收了中国江南园林艺术的精华，是中国优秀的文化遗产。':
          [ '蠡园 ',' 梅园',' 留园 ','网师园' , 2],
          
          '28. 苏轼的词句“但愿人长久，千里共婵娟”表达了对亲人朋友的思念之情和美好祝愿。这里的 “婵娟”指的是______。':
          [ '高山 ',' 月亮, 流水 ','太阳' , 1],
          
          '29. _______是中医学的重要组成部分之一,主要通过经络、穴位的作用，运用“针法”和“灸法”来治疗疾病，深受百姓喜爱。':
          ['针灸 ','拔罐, 推拿 ','刮痧' , 0],
          
          '30. 中国文化与域外文化第一次大规模的交流与融合发生在 时期。':
          ['秦汉 ','汉唐, 宋明 ','明清' , 1],
          
          '31. “那达慕大会”是______族人民一年一度的传统体育竞技活动,多在草绿花红、马壮羊肥的七、八月举行。':
          [ '维吾尔' , '藏' , '苗' , '蒙古' , 3],
          
          '32. 北宋画家______的《清明上河图》生动地描绘了北宋都城汴梁(今开封）商业活动的繁荣景象，是中国古代绘画的杰作。':
          ['张择端' , '顾恺之' , '曹仲达' , '张僧繇答案', 0],
          
          '33. 中国传统文化中,______ 色常常用来代表喜庆。':
          [ '蓝' , '白' , '红' , '黑 ', 2],
          
          '34. 王安石的诗句“爆竹声中一岁除,春风送暖入屠苏”中的“屠苏”指的是_______。':
          [' 柴' , '酒' , '醋 ', '茶' ,1],
          
          '35. _______是藏族人最常用的饮料,逢年过节、结婚、生孩子、迎送亲友，必不可少。': 
          [ '青稞酒' , '马奶子酒' ,'红薯酒' , '杨梅酒答案', 0],
          
          '36. 第一部被介绍到西方去的中国古代戏曲是 ，它是著名的元杂剧四大悲剧之一。': 
          ['《赵氏孤儿》' ,'《窦娥冤》' ,'《汉宫秋》' ,'《梧桐雨》 ', 0],
          
          '37. 中国苗、瑶、侗等民族特别喜爱的一种古老乐器叫_______。':
          ['笛子' ,'芦笙 ','巴乌' ,'葫芦丝 ', 1],
          
          '38.西方人过情人节,中国人过七夕节。七夕节与___________的传说有关。':
          [ '嫦娥和后羿' , '女娲和盘古' , '牛郎和织女  ', 2],
          
          '39.旗袍是中国女性的传统正式服装，优美大方。下列哪一项是中国男士的传统正式服 装？ ':
          [ '西装' , '汉服' , '中山装' , 2],
          
          '40.互送礼物能增进感情，但是礼物也不能随便送。中国朋友过生日的时候，不能送下面 哪一种礼物？':
          [ '钟' , '衣服' , '红包' ,  0],
          
          '41.在很多中国传统年画中都能看到____,它寓意生活富足，每年都有很多余粮和财富。':
          [' 马',' 鱼',' 龙', 1],
          
          '42.北京故宫每个宫殿的门口都有两个水缸，请问这些水缸的用途是什么？': 
          [' 养鱼',' 防火 ','饮用',  1],
          
          '43.请问诗句“忽如一夜春风来，千树万树梨花开”描写的是中国北方哪个季节的景象？': 
          [' 春天',' 秋天 ',' 冬天 ', 2],
          
          '44.“野火烧不尽,春风吹又生。”是唐代诗人白居易写下的著名诗句,这句话极为形象地表现了______顽强的生命力。':
          ['树木 ','小草','鲜花 ', 1],
          
          '45.京剧的角色分为生、旦、净、末、丑五个行当，其中青衣属于 。':
          [' 生',' 旦',' 净 ', 1]
        };

          // An array that holds all the keys of the questions object
      questionKeys = Object.keys(allQuestions),
      
      // Shuffle the keys array using Fisher-Yates shuffle algorithm
      shuffle = function (arr) {
        for (var i = arr.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        return arr;
      },
      shuffledKeys = shuffle(questionKeys),
      
      // A new object that holds the shuffled questions
      shuffledQuestions = {};
      
  // Fill the shuffledQuestions object with the shuffled keys and their values
  shuffledKeys.forEach(function (key) {
    shuffledQuestions[key] = allQuestions[key];
  });
        
    function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      //var question = Object.keys(allQuestions)[curr];
      var question = shuffledKeys[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(curr) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function
    
      //var answers = allQuestions[Object.keys(allQuestions)[curr]];
      var answers = shuffledQuestions[shuffledKeys[curr]];
      
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i, arr) {
      // This is the function that will run, when clicked on one of the answers
      // Check if givenAnswer is sams as the correct one
      // After this, check if it's the last question:
      // If it is: empty the answerArea and let them know it's done.
      
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);             
        } else {
          addChecker(false); 
          incorrectAnswers.push(current);                       
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          questionArea.innerHTML = 'Done';
          answerArea.innerHTML = '';
        }
                                
      };
    }
    
    function addChecker(bool) {
    // This function adds a div element to the page
    // Used to see if it was correct or false
    
      var createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }

    function showIncorrectAnswers() {
      var resultArea = document.getElementsByClassName('result')[0];
      
      // Clear the result area before displaying the new results
      resultArea.innerHTML = '';
      
      for (var i = 0; i < incorrectAnswers.length; i++) {
        var index = incorrectAnswers[i];
        var question = Object.keys(allQuestions)[index];
        var answers = allQuestions[question];
        var correctAnswer = answers[answers.length - 1];
        
        // Create a new element to display the question and its correct answer
        var questionElement = document.createElement('div');
        questionElement.innerHTML = question + '<br>Correct answer: ' + answers[correctAnswer - 1];
        questionElement.className = 'incorrect';
        
        resultArea.appendChild(questionElement);
      }
    }
    
    
    
    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);
    
  };
