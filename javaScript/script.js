window.onload = function () {
  
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
          [' 好',' 好吧' ,' 好哇',] ,
          
          '12. 吃中餐时，一般先上凉菜， 上热菜，最后上主食。': 
          [' 以后 ',' 后来 ',' 然后',] ,
          
          '13. 《舌尖上的中国》是一部有关美食的纪录片，将人物故事与各地美食联系 ，讲述了中国人对美食和美好生活的追求。': 
          [' 上来 ',' 起来 ',' 过来',], 
          
          '14. 春天是一个充满欢乐与希望的季节。朱自清写过《春》,里面有一句:“树叶却绿___发亮,小草也青得逼你 眼。” ':
          [' 的 地 ',' 得 地 ',' 得 的',] ,
        
          '15. 公共场所有很多提示牌，提醒大家应该注意的事情。下面这个牌子想告诉大家 。': 
          [' 慢慢地滑动 ',' 地面很干净 ',' 走路要小心',],
            
          
          '16. 甲：听说你妈妈也会说汉语？ 乙：没错儿！ 妈妈的影响，我从小就对汉语和中国文化感兴趣。':
          [' 对 ',' 被 ',' 受',] ,
          
          '17. 2008 年北京推出的汽车限号政策， 大大减轻了交通负担， 有效提高了空气质量。':  
          ['虽然……但是…… ','不但……而且…… ','不是……而是……',] ,
          
          '18. 下列哪个成语的意思是“嘴上说的是一套，心里想的是一套”？': 
          [' 口口声声 ',' 心直口快 ',' 口是心非',],
          
          '19. 成语“一衣带水”的意思是像一条衣带那样狭窄的水，常用来比喻两地的距离 。': 
          ['很近 ',' 很远 ',' 很长',], 
          
          '20. “老王辛勤工作了三十年，现在已经桃李满天下了”。这句话告诉我们，老王的职业是 。': 
          [' 农民 ',' 教师 ',' 作家',],
          
          '21. 下列三组词语中，加点的汉字读音相同的一组是？':
          [' 声调 调查 ',' 声乐 乐观 ',' 似乎 似的',] ,
          
          '22. 有个学生问老师：“足尊”是什么意思?老师听了很奇怪,因为汉语中没有这个词语。原来,“足”和“尊(zūn)”是一个字的两部分，合起来是“蹲（dūn）”。请问你知道“蹲”是什么字吗？ ':
          ['象形字 ','形声字 ','独体字',],
          
          '23. 关于汉字偏旁部首的说法，下面哪一项是不正确的 。': 
          ['带有“木”的汉字都和“树”有关系 ','带有“氵”的汉字都和“水”有关系 ','带有“月”的汉字都和“月亮”有关系',], 
          
          '24. 大卫这个学期在咱们班学习汉语,我准备带他去超市买点儿生活_______品。': 
          [' 必须 ',' 必需 ',' 必要',], 
          
          '25. 疫情期间,学校的课程都从线下转到了线上。上网课我也同样能_______到学习的乐 趣。 ':
          ['感想 ','感受 ','感动',],
          
          '26.到国外留学后,我格外_______家乡的一草一木。': 
          ['缅怀 ','纪念 ','想念',], 
          
          '27.甲：这本小说有四百多页，你 一天就看完了？ 乙：是，虽然比较厚，但是写得很有趣，所以看起来很快。 ':
          [' 既然 ',' 竟然 ','仍然 ',],
          
          '28.甲：上星期你们没在家，去哪儿了 乙.' :  
          ['我们去了旅游 ','我们去旅游了 ','我们旅游了去 ',],
          
          '29.在中国，经常听到大家说“吃早点”。请问这里的“早点”是什么意思？': 
          ['起早 ','早餐 ','午餐 ',],
          
          '30.汉语里有些成语和动物有关。请问下列和“马”有关的四字词语中，哪个不是成语？': 
          ['指鹿为马 ','骏马奔驰 ','马到成功',] ,
            
        };
        
    function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      var question = Object.keys(allQuestions)[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(curr) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function
    
      var answers = allQuestions[Object.keys(allQuestions)[curr]];
      
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
    
    
    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);
    
  };
