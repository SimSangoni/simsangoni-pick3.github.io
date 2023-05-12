// Define your questions and answers
const quizData = {
  文化: [
     {
      question: '1. “我汉语说得不太好,你得帮帮我。”这句话中两个“得”的发音分别是________。',
      options: [ 'de de', 'děi de' ,'de děi'],
      correctAnswer: 2
     },
     {
      question: '2.“孩子”“孔子”“面子”里的“子”,不读轻声的是_______。',
      options:  [ '孩子', '孔子','面子'],
      correctAnswer: 1
     },
     {     
      question:'3. 甲:这件事已经了了。乙:了了就了了吧。其中乙这句话的正确读音是_______。',
      options: [ 'Le le jiù le le ba.', 'Le liǎo jiù le liǎo ba.', 'Liǎo le jiù liǎo le ba.'], 
      correctAnswer: 2
     },
     {
      question: '4. 月在汉字左边或下边多表示与人或人体器官(包括动物)有关,在右边则多表示时间与天气。“脸、脑、腿、脚”这些字都______。', 
      options: ['跟身体有关', '跟时间有关', '跟天气有关'], 
      correctAnswer: 0
      },
      
      {
      question: '5. 汉语中，有些字的意思是由各个部分组合起来体现的。下列哪个字的意思表示“水大的样子”？', 
      options: ['冰', '淼', '法'], 
      correctAnswer: 1
      },
      
      {
      question: '6. 由于新冠病毒疫情的影响,现在只要出门,我们就要______口罩。', 
      options: ['带', '代', '戴'], 
      correctAnswer: 2
      },
      
      {
      question: '7. 中国的名胜古迹虽然各不相同,但有一个共同的__________,就是历史悠久,文化底蕴深厚。', 
      options: ['特别', '特点', '特殊'], 
      correctAnswer: 1
      },
      
      {
      question: '8. 学校组织留学生去民族文化村参观，大家不仅看到了舞狮、杂技,还参与互动,场面非常_________.', 
      options: ['热闹', '激烈', '热情'], 
      correctAnswer: 0
      },
      
      {
      question: '9. 只要全人类共同努力,就一定能________疫情。', 
      options: ['战胜', '战败', '备战'], 
      correctAnswer: 0
      },
      
      {
      question: '10. 在生活中,如果你同意朋友的建议或要求时,应该说“好的”,最好不要说“______”,因为后者有时候表示你虽然同意，但是不太情愿。', 
      options: ['好', '好吧', '好哇'], 
      correctAnswer: 1
      },
      
      {
      question: '11. 吃中餐时,一般先上凉菜,______上热菜,最后上主食。', 
      options: ['以后', '后来', '然后'], 
      correctAnswer: 2
      },
      
      {
      question: '12. 《舌尖上的中国》是一部有关美食的纪录片,将人物故事与各地美食联系______,讲述了中国人对美食和美好生活的追求。', 
      options: ['上来', '起来', '过来'], 
      correctAnswer: 1
      },
     {
      question: '13. 《舌尖上的中国》是一部有关美食的纪录片，将人物故事与各地美食联系，讲述了中国人对美食和美好生活的追求。', 
      options: ['上来', '起来', '过来'], 
      correctAnswer: 1
     },
        
      {
      question: '14. 春天是一个充满欢乐与希望的季节。朱自清写过《春》,里面有一句:“树叶却绿___发亮,小草也青得逼你_____眼。”', 
      options: ['的 地', '得 地', '得 的'], 
      correctAnswer: 2
      },
      
      {
      question: '15. 公共场所有很多提示牌,提醒大家应该注意的事情。下面这个牌子想告诉大家_____。', 
      image: 'images/1.15_question.png',
      options: ['慢慢地滑动', '地面很干净', '走路要小心'], 
      correctAnswer: 2
      },
      {question: '16. 甲:听说你妈妈也会说汉语？乙:没错儿!_______妈妈的影响,我从小就对汉语和中国文化感兴趣。', 
      options: ['对', '被', '受'], 
      correctAnswer: 2},
      
      {
      question: '17. 2008年北京推出的汽车限号政策,________大大减轻了交通负担,_________有效提高了空气质量。', 
      options: ['虽然……但是……', '不但……而且……', '不是……而是……'], 
      correctAnswer: 1
      },
      
      {
      question: '18. 下列哪个成语的意思是“嘴上说的是一套，心里想的是一套”？', 
      options: ['口口声声', '心直口快', '口是心非'], 
      correctAnswer: 2
      },
      
      {
      question: '19. 成语“一衣带水”的意思是像一条衣带那样狭窄的水,常用来比喻两地的距离______。', 
      options: ['很近', '很远', '很长'], 
      correctAnswer: 0
      },
      
      {
      question: '20. “老王辛勤工作了三十年，现在已经桃李满天下了”。这句话告诉我们，老王的职业是。', 
      options: ['农民', '教师', '作家'], 
      correctAnswer: 1
      },
      
      {
      question: '21. 下列三组词语中,加点的汉字读音相同的一组是______?', 
      options: ['声调 调查', '声乐 乐观', '似乎 似的'], 
      correctAnswer: 0
      },
      
      {question: '22. 有个学生问老师：“足尊”是什么意思？老师听了很奇怪，因为汉语中没有这个词语。原来，“足”和“尊(zūn)”是一个字的两部分,合起来是“蹲(dūn)”。请问你知道“蹲”是什么字吗?', 
      options: ['象形字', '形声字', '独体字'], 
      correctAnswer: 1
      },
      
      {
      question: '23. 关于汉字偏旁部首的说法,下面哪一项是不正确的____。', 
      options: ['带有“木”的汉字都和“树”有关系', '带有“氵”的汉字都和“水”有关系', '带有“月”的汉字都和“月亮”有关系'], 
      correctAnswer: 2
      },
      
      {
      question: '24. 大卫这个学期在咱们班学习汉语,我准备带他去超市买点儿生活_____品。', 
      options: ['必须', '必需', '必要'], 
      correctAnswer: 1
      },
     {
      question: '25. 疫情期间,学校的课程都从线下转到了线上。上网课我也同样能_______到学习的乐趣。', 
      options: ['感想', '感受', '感动'], 
      correctAnswer: 1
      },
      
      {
      question: '26. 到国外留学后,我格外_______家乡的一草一木。', 
      options: ['缅怀', '纪念', '想念'], 
      correctAnswer: 2
      },
      
      {
      question: '27. 甲:这本小说有四百多页,你______一天就看完了?乙：是，虽然比较厚，但是写得很有趣，所以看起来很快。', 
      options: ['既然', '竟然', '仍然'], 
      correctAnswer: 1
      },
      
      {
      question: '28. 甲：上星期你们没在家，去哪儿了？乙: ______。', 
      options: ['我们去了旅游', '我们去旅游了', '我们旅游了去'], 
      correctAnswer: 1
      },
      
      {
      question: '29. 在中国，经常听到大家说“吃早点”。请问这里的“早点”是什么意思？', 
      options: ['起早', '早餐', '午餐'], 
      correctAnswer: 1
      },
      
      {
      question: '30. 汉语里有些成语和动物有关。请问下列和“马”有关的四字词语中，哪个不是成语？', 
      options: ['指鹿为马', '骏马奔驰', '马到成功'], 
      correctAnswer: 1
      },
      
      {
      question: '31. 甲：今天上午的会议有什么重要内容？乙:我连开会时间都不知道_______,更不用说会议内容了。', 
      options: ['更', '越', '还'], 
      correctAnswer: 0
      },
      
      {
      question: '32. 为了保护旅游景点,很多国家都关闭了对环境_____污染的工厂。', 
      options: ['有', '是', '生'], 
      correctAnswer: 0
      },
      
      {
      question: '33. 请猜一猜下面这个图片表示的是哪个成语的意思？', 
      images: 'images/1.33_question.png',
      options: ['丢三落四', '挑三拣四', '朝三暮四'], 
      correctAnswer: 2
      },
      
      {
      question: '34. 下面这些词的拼音有拼写错误的是：', 
      options: ['窗户 chuānghu', '电灯 diàndēng', '优秀 yiōuxiòu', '骄傲 jiāo\'ào'], 
      correctAnswer: 2
      },
      
      {
      question: '35. 下列汉字字义为“水大的样子”的是：', 
      options: ['淼', '森', '磊', '众'], 
      correctAnswer: 0
      },
     {
      question: '26. 我太紧张了,都出了一___汗!', 
      options: ['次', '趟', '滴', '身'], 
      correctAnswer: 3
      },
      
      {
      question: '37. 下列四组词语中，加点汉字读音相同的一组是：', 
      options: ['艰难 难得', '校长 长沙', '快乐 乐器', '出行 行业'], 
      correctAnswer: 0
      },
      
      {
      question: '38. _____会议的程序,我们还要再商量。', 
      options: ['根据', '关于', '按照', '由于'], 
      correctAnswer: 1
      },
      
      {question: '39. “我猜你这部新手机不便宜，应该上千。”其中“上千”的意思是:', 
      options: ['手机上号到了一千号', '超过一千块钱', '前面有一千个人', '第一千部手机'], 
      correctAnswer: 1
      },
      
      {
      question: '40. 这首歌真好听,我还想听,你再唱一___吧。', 
      options: ['个', '趟', '首', '遍'], 
      correctAnswer: 3
      },
      
      {
      question: '41. 汉字“廿”表示______:', 
      options: ['十', '二十', '三十', '四十'], 
      correctAnswer: 1
      },
      
      {
      question: '42. ______身体健康,我们应该保证按时作息。', 
      options: ['把', '给', '对', '为了'], 
      correctAnswer: 3
      },
      
      {
      question: '43. “张总是我们公司的一把手。”这句话中的“一把手”意思是:', 
      options: ['工作能手', '清洁工人', '文字秘书', '最高领导'], 
      correctAnswer: 3
      }  
    // Add more questions for 文化 section...
  ],
  国情: [
    {
      question: '1.中国迄今为止持续时间最长、参与人数最多、国家支持最大、社会影响最广的志愿服务项目是？', 
      options: ['红丝带计划', '西部计划', '希望工程', '三支一扶'],
      correctAnswer: 1
      },
      
      {
      question: '2._______既是中国最大的内陆湖，同时也是中国最大的咸水湖。', 
      options: ['洞庭湖', '青海湖', '西湖', '鄱阳湖'], 
      correctAnswer: 1
      },
      
      {
      question: '3.中华人民共和国的国歌是《 》。', 
      options: ['东方红', '黄河颂', '义勇军进行曲', '浏阳河'], 
      correctAnswer: 2
      },
      
      {
      question: '4.中国人口在地域上的分布特点是_______。', 
      options: ['东多西少', '东少西多', '南多北少', '南少北多'], 
      correctAnswer: 0
      },
      
      {
      question: '5.近年来中国的电子商务发展迅速。其中月日是淘宝商城（天猫）的网络促销日，也是目前中国最大的网购狂欢节', 
      options: ['1 1', '12 12', '9 9', '11 11'], 
      correctAnswer: 3
      },
      
      {
      question: '6.___是中国最主要的粮食作物，是全国60%以上人口主食的原料。', 
      options: ['小麦', '玉米', '水稻', '高粱'], 
      correctAnswer: 2
      },
      
      {
      question: '7.中国少数民族最多的省份是________。', 
      options: ['云南', '贵州', '台湾', '广西'], 
      correctAnswer: 0
      },
      
      {
      question: '8.中国有55个少数民族，其中_________是现在中国人口最多的少数民族。', 
      options: ['壮族', '傣族', '藏族', '回族'], 
      correctAnswer: 0
      },
      
      {
      question: '9.人民币是中国的法定货币，其货币符号是 。2015年11月，国际货币基金组织宣布正式将人民币纳入SDR(特别提款权）货币篮子。', 
      options: ['¥', '$', '€', '₽'], 
      correctAnswer: 0
      },
      
      {
      question: '10.诞生于1898年，初名京师大学堂，是中国近代第一所国立大学，其成立标志着中国近代高等教育的开端。', 
      options: ['清华大学', '北京师范大学', '北京大学', '复旦大学'], 
      correctAnswer: 2
      },
     {
      question: '11. 中国有四个直辖市：北京、天津、上海、重庆。请问“沪”是哪个直辖市的简称？',
      options: ['天津', '上海', '重庆'],
      correctAnswer: 1
      },
      {
      question: '12. 甲：请问，火警的电话号码是多少？ 乙：是 ，你就记住“要救”就行了。',
      options: ['120', '119', '110'],
      correctAnswer: 1
      },
      {
      question: '13. 是中国最北边的省份,省会哈尔滨是有名的冰城,一年一度的冰雪大世界吸引着众多中外游客。',
      options: ['吉林', '辽宁', '黑龙江'],
      correctAnswer: 2
      },
      {
      question: '14. 现行第五套人民币五十元的背面图案是西藏的。',
      image:'images/2.14_question.png',
      options: ['桂林山水', '人民大会堂', '布达拉宫'],
      correctAnswer: 2
      },
      {
      question: '15. 近年来，中国交通拥堵现象越来越严重，为了解决堵车问题，中国政府针对小汽车采取了下面哪项措施？',
      options: ['限牌令、尾号限行', '共享单车', '拼车服务'],
      correctAnswer: 0
      },
      {
      question: '16. 甲：说到扶贫，新闻中常说“两不愁”，那是什么意思？乙：就是让贫困家庭在基本生活的两个方面都不发愁： 和 。',
      options: ['不愁吃 不愁喝', '不愁吃 不愁穿', '不愁吃 不愁住'],
      correctAnswer: 1
      },
      {
      question: '17. 长城,又称万里长城,在古代主要用于_________,是中华民族的象征。',
      options: ['游玩', '军事', '祭祀'],
      correctAnswer: 1
      },
      {
      question: '18. 中国十大古都之一，拥有都江堰、武侯祠、杜甫草堂等名胜古迹。请问被称为“蓉城”“锦城”的是中国哪个城市？',
      options: ['上海', '杭州', '成都'],
      correctAnswer: 2
      },
     {
      question: '19. 海南岛在中国的最南端，常年鲜花盛开，是中国著名的旅游胜地，尤其是冬天，许多北方游客都喜欢来这里感受温暖的阳光。这段话主要谈论海南岛 。',
      options: ['非常热', '有鲜花', '是度假的好地方'],
      correctAnswer: 2
      },
      {
      question: '20. 京津冀地区是中国的“首都经济圈”，是中国北方经济规模最大的地区。包括北京、天津和________，三地优势互补、协同发展，将有助于带动中国北方的发展。',
      options: ['山东', '河北', '山西'],
      correctAnswer: 1
      },
     {
      question: '21.喜欢中国功夫的人们，一般都知道位于省郑州市的少林寺，因为那里是中国功夫的发源地之一。',
      options: ['海南', '河南', '湖南'],
      correctAnswer: 1
      },
      {
      question: '22.你朋友既喜欢爬山，又对中国佛教感兴趣。你可以推荐他去_________旅游。',
      options: ['华山', '普陀山', '泰山'],
      correctAnswer: 1
      },
      {
      question: '23.根据《北京市生活垃圾管理条例》，"报纸"和"果皮"对应的是下列哪个选项？',
      options: ['有机垃圾、无机垃圾', '工业垃圾、农业垃圾', '可回收垃圾、厨余垃圾'],
      correctAnswer: 2
      },
      {
      question: '24.由于水土、气候等条件有利于水果的生长，中国很多地方因水果而闻名。比如莱阳的梨、烟台的苹果和 __。',
      options: ['黑龙江的皮草', '新疆的葡萄', '湖南的辣椒'],
      correctAnswer: 1
      },
      {
      question: '25.中国功夫巨星 于 2017 年荣获第 89 届奥斯卡终身成就奖。他是首位获此殊荣的华人。',
      options: ['成龙', '李连杰', '甄子丹', '吴京'],
      correctAnswer: 0
      },
      {
      question: '26.歌词"请到天涯海角来，这里四季春常在"中的"天涯海角"位于中国最南端的 省。',
      options: ['广东', '云南', '湖南', '海南'],
      correctAnswer: 3
      },
      {
      question: '27.第 29 届夏季奥林匹克运动会，于 2008 年 8 月 8 日在中国开幕，这是中国首次承办奥运会，此次奥运会的口号是"同一个世界，同一个梦想"。',
      options: ['上海', '深圳', '北京', '天津'],
      correctAnswer: 2
      },
      {
      question: '28.中国最大的港口是，其吞吐量位居世界第一位。',
      options: ['连云港', '深圳港', '青岛港', '上海港'],
      correctAnswer: 3
      },
     {
      question: '29.在中国，"学习雷锋好榜样"是一句广为人知的歌词。雷锋因其乐于助人，全心全意为他人服务而被人们赞赏。他去世以后，每年被定为"雷锋日"。',
      options: ['4月5日', '3月5日', '5月4日', '3月15日'],
      correctAnswer: 1
      },
      {
      question: '30.______是中国面积最大的省级行政区，约占中国陆地总面积的六分之一。',
      options: ['青海', '西藏', '新疆', '河南'],
      correctAnswer: 2
      },
     {
      question: '31.中国地形多种多样，各类地形中占全国陆地面积最大的是_______。',
      options: ['山地', '沙漠', '盆地', '平原'],
      correctAnswer: 0
      },
      {
      question: '32.改革开放以来，中国的第一个经济特区是______。',
      options: ['珠海', '厦门', '深圳', '汕头'],
      correctAnswer: 2
      },
      {
      question: '33.中国气候的特点是_______,属于大陆性季风气候。',
      options: ['北暖南寒', '南暖北寒', '东暖西寒', '西暖冬寒'],
      correctAnswer: 1
      },
      {
      question: '34.中 国 北 京 市 的 电 话 区 号 是 ________。',
      options: ['010', '020', '001', '002'],
      correctAnswer: 0
      }
  ],
  中文: [
    {
      question: '1.中国是世界文明古国之一，指南针、造纸术、印刷术和 ______ 这“四大发明”展现了中国古代灿烂的科技文化。',
      options: ['日晷', '地动仪', '火药', '针灸'],
      correctAnswer: 2
      },
      {
      question: '2.在中国被誉为“瓷都”的城市是。',
      options: ['宜兴', '开封', '景德镇', '佛山'],
      correctAnswer: 2
      },
      {
      question: '3.中国是世界文明古国，也是人类的发源地之一。中国境内最早的人类是距今约170万年的_______。',
      options: ['蓝田人', '元谋人', '山顶洞人', '北京人'],
      correctAnswer: 1
      },
      {
      question: '4.登高望远，饮菊花酒，品菊花茶，唐朝孟浩然的诗句“待到重阳日，还来就菊花”生动再现了中国民间传统节日______的习俗。',
      options: ['中秋节', '端午节', '重阳节', '元宵节'],
      correctAnswer: 2
      },
      {
      question: '5.是中国古代的一种打击乐器，由青铜制成。演员演奏时用小木锤或长型的棒敲打，声音清脆响亮，优美动听。',
      options: ['琵琶', '箜篌', '编钟', '胡琴'],
      correctAnswer: 2
      },
      {
      question: '6.欧阳修诗句“去年元夜时，花市灯如昼。月到柳梢头，人约黄昏后”中的“元夜”指的是农历_。',
      options: ['三月初三', '八月十五', '五月初五', '正月十五'],
      correctAnswer: 3
      },
      {
      question: '7.世界上最早的地震仪器“地动仪”是由东汉时期的科学家_______发明创造的。',
      options: ['僧一行', '张衡', '沈括', '扁鹊'],
      correctAnswer: 1
      },
      {
      question: '8.唐代陆羽编写_______一书，系统地总结了种茶、饮茶的经验，叙述了茶的历史发展，被后人尊为“茶圣”。',
      options: ['《茶道》', '《茶经》', '《茶艺学》', '《茶语者》'],
      correctAnswer: 1
      },
      {
      question: '9. 截至 2023 年，“汉语桥”世界大学生中文比赛自 2002 年以来已连续成功举办了_____ 届。来自世界 100 多个国家的 1500 多名大学生先后来华参加了复赛、决赛；目前，比赛已成为各国大学生学习汉语、了解中国的重要平台，在中国与世界各国青年中间架起了一座沟通心灵的桥梁。',
      options: ['19', '20', '22', '21'],
      correctAnswer: 2
      },
      {
      question: '10. “轻似蝉翼白如雪，抖似细绸不闻声”是人们对_______的赞誉。明清以来，许多书画大家都用它来书写作画，它也是非常珍贵的文化遗产。',
      options: ['棉', '宣纸', '麻', '丝绸'],
      correctAnswer: 1
      },
      {
      question: '11. 中国人常将女中豪杰称为“巾帼英雄”，“巾帼”具体指古代妇女身上的_______。',
      options: ['上衣', '裙子', '头饰', '罩袍'],
      correctAnswer: 2
      },
      {
      question: '12. 长篇小说《子夜》是中国著名现代作家_______的作品，深刻地反映了20世纪30年代初期旧中国广阔的社会生活，先后被译为英、德、俄、日等十几种文字。',
      options: ['老舍', '巴金', '鲁迅', '茅盾'],
      correctAnswer: 3
      },
      {
      question: '13. 中国古代伟大的思想家和教育家__________被联合国教科文组织列为世界十大文化名人之一。',
      options: ['庄子', '老子', '韩非子', '孔子'],
      correctAnswer: 3
      },
      {
      question: '14. 1974 年，在中国陕西出土的显示了秦代工匠高超的雕塑艺术水平。',
      image:'images/3.14_question.png',
      options: ['唐三彩', '陶车', '兵马俑', '编钟'],
      correctAnswer: 2
      },
     {
      question: '15. 明代著名医药学家李时珍编写的____________收集了 1892 种药物和 11096 个药方，是中国古代药物学和植物学巨著。',
      options: ['《神农本草经》', '《本草纲目》', '《脉经》', '《素问》'],
      correctAnswer: 2
      },
      {
      question: '16. “四书”指《大学》《中庸》和《孟子》，是儒家传道、授业的基本教材。',
      options: ['《礼记》', '《周易》', '《论语》', '《春秋》'],
      correctAnswer: 2
      },
      {
      question: '17. 西汉外交家_______两次出使西域，开辟了中国连接西亚、欧洲的“丝绸之路”。',
      options: ['郑和', '张骞', '班超', '晏子'],
      correctAnswer: 1
      },
      {
      question: '18. 中国的地方戏丰富多彩，而且大多数地方戏都有自己的代表剧目。人们熟悉的《梁山伯与祝英台》是________代表剧目。',
      image: 'images/3.18_question.png',
      options: ['评剧', '越剧', '粤剧', '豫剧'],
      correctAnswer: 1
      },
     {
      question: '19. “满招损，谦受益”是对中华民族影响深远的一句名言，形象地表达了这个古老而悠久的民族所崇尚______的美德。',
      options: ['诚实', '谦虚', '勤劳', '勇敢'],
      correctAnswer: 1
      },
      {
      question: '20. 道教是中国土生土长的宗教，道教的建筑称“宫”或“”。',
      image: 'images/3.20_question.png',
      options: ['寺', '观', '庙', '庵'],
      correctAnswer: 1
      },
      {
      question: '21. 中国茶分红、绿、青、黄、黑、白六大类，普洱茶属于___。',
      options: ['绿茶', '黑茶', '红茶', '黄茶'],
      correctAnswer: 1
      },
      {
      question: '22. 位于河南洛阳的______是中国石刻艺术的巅峰，也是多元文化融合的见证。',
      options: ['云冈石窟', '莫高窟', '龙门石窟', '麦积山石窟'],
      image:'images/3.22_question.png',
      correctAnswer: 2
      },
      {
      question: '23. 唐朝著名僧人玄奘从_______出发，沿着丝绸之路，克服重重险阻到达印度，带回了650多部佛经。这就是著名的“唐僧取经”。',
      options: ['洛阳', '扬州', '长安', '成都'],
      correctAnswer: 2
      },
      {
      question: '24. 唢呐是一种民间吹管乐器，公元3世纪由______传入中国。',
      image: 'images/3.24_question.png',
      options: ['朝鲜', '印度', '波斯', '日本'],
      correctAnswer: 2
      },
      {
      question: '25. _______是当今世界上现存最早、保存最完整的古代敞肩石拱桥，位于河北省石家庄市赵县。',
      image: 'images/3.25_question.png',
      options: ['卢沟桥', '宝带桥', '洛阳桥', '赵州桥'],
      correctAnswer: 3
      },
      {
      question: '26. 北京的_______是目前世界上最大的木结构建筑群，它金碧辉煌、雄伟壮丽，被联合国教科文组织列为“世界文化遗产”。',
      image: 'images/3.26_question.png',
      options: ['颐和园', '圆明园', '故宫', '雍和宫'],
      correctAnswer: 2
      },
     {
      question: '27. 狮子林、沧浪亭、拙政园和_______统称“苏州四大名园”，它们吸收了中国江南园林艺术的精华，是中国优秀的文化遗产。',
      image: 'images/3.27_question.png',
      options: ['蠡园', '梅园', '留园', '网师园'],
      correctAnswer: 2
      },
      {
      question: '28. 苏轼的词句“但愿人长久，千里共婵娟”表达了对亲人朋友的思念之情和美好祝愿。这里的 “婵娟”指的是______。',
      options: ['高山', '月亮', '流水', '太阳'],
      correctAnswer: 1
      },
      {
      question: '29. ______是中医学的重要组成部分之一，主要通过经络、穴位的作用，运用“针法”和“灸法”来治疗疾病，深受百姓喜爱。',
      options: ['针灸', '拔罐', '推拿', '刮痧'],
      correctAnswer: 0
      },
      {
      question: '30. 中国文化与域外文化第一次大规模的交流与融合发生在时期。',
      options: ['秦汉', '汉唐', '宋明', '明清'],
      correctAnswer: 1
      },
      {
      question: '31. “那达慕大会”是______族人民一年一度的传统体育竞技活动，多在草绿花红、马壮羊肥的七、八月举行。',
      image: 'images/3.31_question.png',
      options: ['维吾尔', '藏', '苗', '蒙古'],
      correctAnswer: 3
      },
      {
      question: '32. 北宋画家______的《清明上河图》生动地描绘了北宋都城汴梁（今开封）商业活动的繁荣景象，是中国古代绘画的杰作。',
      image: 'images/3.32_question.png',
      options: ['张择端', '顾恺之', '曹仲达', '张僧繇'],
      correctAnswer: 0
      },
      {
      question: '33. 中国传统文化中，色常常用来代表喜庆。',
      options: ['蓝', '白', '红', '黑'],
      correctAnswer: 2
      },
      {
      question: '34. 王安石的诗句“爆竹声中一岁除，春风送暖入屠苏”中的“屠苏”指的是。',
      options: ['柴', '酒', '醋', '茶'],
      correctAnswer: 1
      },
     {
      question: '35. 是藏族人最常用的饮料，逢年过节、结婚、生孩子、迎送亲友，必不可少。',
      options: ['青稞酒', '马奶子酒', '红薯酒', '杨梅酒'],
      correctAnswer: 0
      },
      {
      question: '36. 第一部被介绍到西方去的中国古代戏曲是，它是著名的元杂剧四大悲剧之一。',
      options: ['《赵氏孤儿》', '《窦娥冤》', '《汉宫秋》', '《梧桐雨》'],
      correctAnswer: 0
      },
      {
      question: '37. 中国苗、瑶、侗等民族特别喜爱的一种古老乐器叫。',
      image: 'images/3.37_question.png',
      options: ['笛子', '芦笙', '巴乌', '葫芦丝'],
      correctAnswer: 1
      },
      {
      question: '38. 西方人过情人节，中国人过七夕节。七夕节与___________的传说有关。',
      options: ['嫦娥和后羿', '女娲和盘古', '牛郎和织女'],
      correctAnswer: 2
      },
      {
      question: '39. 旗袍是中国女性的传统正式服装，优美大方。下列哪一项是中国男士的传统正式服装？',
      image: 'images/3.39_question.png',
      options: ['西装', '汉服', '中山装'],
      correctAnswer: 2
      },
      {
      question: '40. 互送礼物能增进感情，但是礼物也不能随便送。中国朋友过生日的时候，不能送下面哪一种礼物？',
      options: ['钟', '衣服', '红包'],
      correctAnswer: 0
      },
      {
      question: '41. 在很多中国传统年画中都能看到____，它寓意生活富足，每年都有很多余粮和财富。',
      options: ['马', '鱼', '龙'],
      correctAnswer: 1
      },
      {
      question: '42. 北京故宫每个宫殿的门口都有两个水缸，请问这些水缸的用途是什么？',
      options: ['养鱼', '防火', '饮用'],
      correctAnswer: 1
      },
    {
      question: '43. 请问诗句“忽如一夜春风来，千树万树梨花开”描写的是中国北方哪个季节的景象？',
      options: ['春天', '秋天', '冬天'],
      correctAnswer: 0
      },
      {
      question: '44. “野火烧不尽，春风吹又生。”是唐代诗人白居易写下的著名诗句，这句话极为形象地表现了______顽强的生命力。',
      options: ['树木', '小草', '鲜花'],
      correctAnswer: 1
      },
      {
      question: '45. 京剧的角色分为生、旦、净、末、丑五个行当，其中青衣属于______。',
      image: 'images/3.45_question.png',
      options: ['生', '旦', '净'],
      correctAnswer: 1
      },
      {
      question: '46. 是由中国研制，具有完全自主知识产权的标准动车组。该列车在京沪高铁率先实现350公里时速运营。',
      options: ['复兴号', '和谐号', '东方红号', '神州号'],
      correctAnswer: 0
      }
  ]
};

const questionsElement = document.querySelector(".questions");
const answersElement = document.querySelector(".answers");
const resultElement = document.querySelector(".result");
const sectionButtons = document.querySelectorAll(".myButton");

let currentSection = "文化";
let currentQuestion = 0;
let score = 0;
let wrongAnswers = [];

// Function to shuffle the questions within each section
function shuffleQuestions(section) {
  quizData[section] = shuffleArray(quizData[section]);
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to load the current question and its options
function loadQuestion() {
  const currentQuizData = quizData[currentSection][currentQuestion];
  questionsElement.innerHTML = "";

  // Check if the question has an image
  if (currentQuizData.image) {
    const image = document.createElement("img");
    image.src = currentQuizData.image;
    questionsElement.appendChild(image);
  }

  const questionText = document.createElement("p");
  questionText.textContent = currentQuizData.question;
  questionsElement.appendChild(questionText);

  answersElement.innerHTML = "";
  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(index));
    answersElement.appendChild(button);
  });
}

// Function to check the user's answer
function checkAnswer(userAnswer) {
  const currentQuizData = quizData[currentSection][currentQuestion];
  if (userAnswer == currentQuizData.correctAnswer) {
    score++;
  } else {
    // Save the wrong question and correct answer
    wrongAnswers.push({
      question: currentQuizData.question,
      correctAnswer: currentQuizData.options[currentQuizData.correctAnswer]
    });
  }
  currentQuestion++;
  resultElement.textContent = `Your score: ${score} out of ${quizData[currentSection].length}`;

  if (currentQuestion < quizData[currentSection].length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Function to display the wrong answers at the end of each section
function showWrongAnswers() {
  questionsElement.textContent = "Incorrect answers:";
  answersElement.innerHTML = "";
  wrongAnswers.forEach((wrongAnswer) => {
    const questionElement = document.createElement("p");
    questionElement.textContent = wrongAnswer.question;
    answersElement.appendChild(questionElement);

    const answerElement = document.createElement("p");
    answerElement.textContent = `Correct Answer: ${wrongAnswer.correctAnswer}`;
    answersElement.appendChild(answerElement);
  });
}

// Function to display the final score
function showResult() {
  questionsElement.textContent = "Quiz completed!";
  answersElement.innerHTML = "";
  resultElement.textContent = `Your score: ${score} out of ${quizData[currentSection].length}`;

// Display incorrect answers with correct answers
if (wrongAnswers.length > 0) {
  const heading = document.createElement("h2");
  heading.textContent = "Wrong Answers";
  answersElement.appendChild(heading);

  wrongAnswers.forEach((wrongAnswer) => {
    const questionElement = document.createElement("p");
    questionElement.textContent = `Question: ${wrongAnswer.question}`;
    answersElement.appendChild(questionElement);

    const answerElement = document.createElement("p");
    answerElement.textContent = `Correct Answer: ${wrongAnswer.correctAnswer}`;
    answersElement.appendChild(answerElement);
  });
}
  // Clear the wrongAnswers array
  wrongAnswers = [];
}
// Event listener for section buttons
sectionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedSection = event.target.getAttribute("data-button");
    currentSection = selectedSection;
    currentQuestion = 0;
    score = 0;
    wrongAnswers = [];
    shuffleQuestions(currentSection); // Shuffle the questions for the selected section
    loadQuestion();
  });
});
