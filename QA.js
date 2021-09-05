// ==UserScript==
// @name         1p3a_qa
// @namespace    https://github.com/eagleoflqj/p1a3_script
// @version      124
// @description  1p3a_script的题库
// @author       Liumeo
// @grant        none
// ==/UserScript==

QA = {
    'Apollo 11是哪一年登月的？': '1969',
    'Miami University在哪个城市': 'Oxford, Ohio',
    'Miami University在哪个城市?': 'Oxford, Ohio',
    'Negotiate 工资的时候，哪种做法有利于得到更大的包裹？': '精读地里谈工资宝典，知己知彼，百战不殆',
    'Speak for yourself 是什么意思': '请你不要代表其他人讲话，“那是你自己的看法，我可不这样想”',
    'Which company is the largest single-site employer in the US?': 'Disney World',
    'which state is University of Miami located?': 'Florida',
    '参与讨论时需要遵守哪些规则？': '这些全都要遵守',
    '地里发帖可以隐藏内容。假如要设置200积分以上才可以看到，下面哪个语法正确？': '[hide=200]想要隐藏的内容[/hide]',
    '地里面经数目最多的是哪家公司？': 'Amazon',
    '地里数据科学类职位面经放在在什么版最合理？': '数科面经版',
    '对于有争议性的话题，如何有建设性的讨论？':'这些办法轮流来',
    '给论坛ios或者安卓手机应用留评价如何获取50大米？': '以上步骤都需要',
    '公司之间级别对应，如下哪个是错误的？': 'Facebook L6 = Facebook E6',
    '关于地里积分类型“萝卜”的说法，哪些正确？': '这些都对',
    '关于旧金山市中心描述，下面哪个不正确？': '旧金山创业公司很多，被称为“硅谷”',
    '关于论坛账号的说法，哪些正确？': '这些都不对',
    '关于帖子内容审核，哪种说法是正确的': '这些都正确。',
    '回答别人的私信提问还需要消耗我1鳄梨怎么办？': '除非涉及隐私并且无法”脱敏“处理，否则应该直接在版面回答，这样大家都能看见。',
    '回答别人的私信提问还需要消耗我5大米怎么办？': '直接在版面回答，这样大家都能看见',
    '加州大学有多个分校，下面哪个成立时间最短？': 'UC Merced',
    '论坛鼓励如何发面经？': '以上都正确',
    '美国哪个州具有地中海气候？': '加利福尼亚',
    '美国哪个州没有夏令时？': '亚利桑那州',
    '哪些人群在一亩三分地上不可能存在？': '这些都可能存在，并且尊重其他人文明发言的空间',
    '哪些行为会被禁言和封号？': '这些都会被禁言封号',
    '哪种快速解锁全部论坛权限的姿势是错误的？': '借用/共享朋友的账号（你和朋友都将失去这个账号）',
    '哪种选校策略最合理？': '根据自己下一步职业和学业目标，参考地里数据和成功率，认真斟酌',
    '普通用户参与维护社区文明秩序的方法有哪些': '点楼层内”举报“',
    '普通用户如何参与维护社区文明秩序？': '点楼层内”举报“',
    '求内推如何作死？': '这些都会作死',
    '如果非常希望发表不符合一亩三分地论坛规则或国家法规的言论怎么办?': '这些都可以',
    '如何建设性的讨论有争议的话题？': '这些办法轮流来',
    '如何说服论坛里意见不同的用户改变 TA 的意见？': '从因特网存在开始，就不存在能被别人说服的用户。改变只能来源于自身',
    '如何文明礼貌的表达不同意见？': '这些都可以',
    '使用论坛遇到问题，如何寻求帮助？': '这些都可以',
    '使用一亩三分地遇到奇怪的问题，比如网站和app里内容不一致等，如何处理？': '这些都可以',
    '为什么我们不鼓励用谐音或者各种拐弯抹角的说法来指代公司或者学校名称？比如：“湾区某元音开头和结尾公司”': '写成这样子，别人看不懂，也搜不到。如果别人也这样写，你也看不懂、搜不到。信息没法分享和交流。',
    '为什么一亩三分地除了租房广告、找室友学友飞友工友、本地版聚等少数版块外，其他数板块都不允许拉群？': '以上全都理解并接受',
    '为什么有时候一亩三分地的数据跟我感觉的平均情况相差很大？': '这些都包括',
    '我觉得自己最可以代表哪种群体？': '我只代表自己',
    '下面关于论坛积分（大米）的说法，哪种是错误的？': '抖包袱版看帖，不会消耗积分',
    '下面关于论坛使用的说法，哪种是错误的？': '在手工加分的帖子里，多次回复试图得到重复加分，不会被系统检测到。',
    '下面几个州，哪个离美国首都最远？': 'North Carolina',
    '下面加州哪个地点离墨西哥最近？': '圣迭戈',
    '下面哪部作品是喜剧？': '仲夏夜之梦',
    '下面哪个Ivy League，离东海岸最远？': 'Cornell',
    '下面哪个machine learning的模型不是supervised learning？': 'Clustering',
    '下面哪个城市不是典型的温带海洋性气候？': '波士顿',
    '下面哪个城市没有SUNY（纽约州立大学）校区？': 'Fulton',
    '下面哪个大学不在Virginia/DC附近': 'Washington and Jefferson College',
    '下面哪个大学实际上不存在？': 'University of Michigan, Twin City',
    '下面哪个大学在华盛顿州？': 'University of Washington',
    '下面哪个公司的streaming service不是会员subscription付费模式运营的？': 'Tubi',
    '下面哪个公司的主要收入不是来自广告？': 'Apple',
    '下面哪个公司总部不在湾区？': 'snapchat',
    '下面哪个公司总部在圣地亚哥？': 'Qualcomm',
    '下面哪个情况，不会消耗你的积分？': '看到干货帖子和精华回复，给作者加分！',
    '下面哪个说法错误？': [
        '芝加哥是美国著名的雨城',
        '中国驻纽约领事馆位于法拉盛中国城，周围全是好吃的！'
    ],
    '下面哪个童话故事不是安徒生写的？': '尼尔斯骑鹅旅行记',
    '下面哪个学术会议不是机器学习领域的？': 'ICSE',
    '下面哪个州，对公司友好，所以吸引了美国很多公司注册？': '特拉华',
    '下面哪个州，没有income tax?': 'Nevada',
    '下面哪个州，没有state income tax?': [
        'Alaska',
        'Florida',
        'New Hampshire',
    ],
    '下面哪个州，有state income tax': [
        'Mississippi',
        'North Dakota',
    ],
    '下面哪个州，有state income tax on wages': [
        'Mississippi',
        'North Dakota',
    ],
    '下面哪个州不属于西海岸三州？': '内华达',
    '下面哪个州冬天最暖和？': 'Oklahoma',
    '下面哪个州里有Disney World？': 'Florida',
    '下面哪个州在美国西海岸': 'Washington',
    '下面哪个专业，不是STEM，OPT没法延期？': '教育学',
    '下面哪个作家是英国人？': 'Charles Dickens',
    '下面哪家公司的总部不在西雅图': '波音',
    '下面哪家公司的总部不在西雅图?': '波音',
    '下面哪类版块，可以拉群，而且不会被警告扣分？': '学友工友、找室友或者版聚本地',
    '下面哪类版块可以拉群，而且不会被警告扣分？': '学友工友、找室友或者版聚本地',
    '下面哪所大学所在城市不是波士顿？': [
        'Boston College',
        'MIT',
    ],
    '下面哪所纽约高校的主校区坐落于中央公园附近？': 'Columbia University',
    '下面哪些方式，可以获得积分奖励？': '这些行为都被提倡和鼓励，也可获得积分奖励',
    '下面哪些行为会被扣分？': '这些都会被扣分',
    '下列哪一项首府与州的对应关系是正确的？': '俄克拉何马州 - 俄克拉何马城',
    '下面哪种发帖方式不适合一亩三分地，应该杜绝？': '遇到有权限设置的帖子，我积分不够也不想攒积分，发些“看不到啊”、“积分不够啊”之类的回复，水掉论坛',
    '下面哪种方法，可以妥妥拿到积分？': '这些全都可以',
    '下面哪种画像，最符合论坛大多数用户群体？': '论坛用户是多元的，任何单一画像都无法代表大多数用户',
    '下面哪种情况，管理员会按照你的要求，进行删帖？': '这些情况全都不删帖！',
    '下面哪种行为，在地里会被扣光积分，甚至封号？': '这些全都会',
    '下面哪种行为，在地里会被扣光积分甚至封号？': '这些全都会',
    '想找室友或者当房东，帖子发在哪里？': '租房广告|找室友版',
    '希望你能问一个具体的问题 https://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=130271 这篇置顶帖子讲了什么？': '如果希望最高效的解决自己遇到的问题，建议仔细阅读原贴，公开提问，细化问题->得到答案->付出行动。这样对自己和对别人都是最优解。',
    '休斯敦在美国以什么工业出名?': '宇航',
    '一亩三分地发面经的规则有哪些？': '以上都正确',
    '一亩三分地发帖可以选择内容用hide进行隐藏。正确隐藏语法是：': '两人第一次华山论剑，争的是荣名与[hide=188]《九阴真经》[/hide]；',
    '一亩三分地发帖可以用hide语法隐藏内容。下面哪个写法正确？': '柯南的名字是[hide=200]工藤新一[/hide]',
    '一亩三分地鼓励和提倡哪些发帖方式？': '读一下各个版块的置顶信息，了解网站规则。按规则发帖，与其他论坛用户高效交流',
    '一亩三分地鼓励如何发面经？': '以上都正确',
    '一亩三分地里可以购买VIP通行证，位于网站上方导航栏 -> VIP。关于VIP，下面哪些说法错误？': 'VIP是“免责金牌”，在地里不受规则约束，可以为所欲为',
    '一亩三分地社区文明，应该由谁来维护？': '维护社区文明，人人有责。社区用户可以平心静气讨论，不引战，不恋战，举报不文明行为。',
    '一亩三分地是哪年创立的？': '2009',
    '一亩三分地是谁创立的？': 'Warald',
    '一亩三分地有多个微信公众号，除了主号“一亩三分地Warald”之外，以下哪些也是？': '这些都是',
    '以下哪个不是Linux操作系统？': 'Vue',
    '以下哪个美国城市不靠海？': '亚特兰大',
    '以下哪个神经网络不能处理语音数据？': '以上都可以',
    '以下哪个说法正确？': '一篇一作指的是有一篇第一作者的文章',
    '以下哪所学校不位于南部？': '凯斯西储大学',
    '以下哪所学校是美国第一所研究型大学？': '约翰霍普金斯大学',
    '以下哪些对自己感受的表述，可以代表整个人群？': '每个人的感受，仅能代表自己',
    '以下哪些说法正确？': '全都是错的',
    '以下哪一位名人不是英国人？': 'Louis Pasteur(他发现了巴斯德高温消毒法)',
    '以下哪种不是Modes of dataflow?': 'tcp/ip',
    '以下哪种内容，一亩三分地不允许？':'色情图片和录像',
    '以下哪种内容，一亩三分地没有？': 'Military 军版',
    '以下有哪一个包是pytorch下的？（就是torch.xx）': 'cuda',
    '音乐家贝多芬出生于哪国？': '德国',
    '有的人征友条件也太苛刻了怎么办？': '这些都包括，不然我们上哪里看可爱的小哥哥小姐姐呢？',
    '有的帖子只有某非主流群体才能回答，因此我回帖：“你不该在一亩三分地发这种帖子，没用的！”。为什么这样做没有建设性？': '这些，和其他更多理由',
    '遇到不文明言论，如何合理应对？': '这些都是',
    '遇到跟自己不同的意见怎么办？': '保持开放包容的心态，看看对方内容是否有可取之处。实在不喜欢就叉掉页面看点别的。',
    '在Linkedin上求内推如何作死': '这些都会作死',
    '在国内可以访问一亩三分地吗？': '可以',
    '在论坛发slack群，qq群，微信群，任何站外讨论方式，会如何？': '以上都正确',
    '在论坛发slack群、qq群、微信群等任何站外讨论方式，会如何？': '以上都正确',
    '在什么地方发帖可以不受任何限制？': '这些地方都有各自的社区规则、发帖都有限制。',
    '在下面哪些板块里留微信号等各种联系方式，事后可以要求版主删除？': '绝大多数板块禁止留微信、拉群，如果你非要发出来，那就永远不删。如果需要私聊，建议发站内信。',
    '在一亩三分地发帖，不需要遵守哪些规则？': '世界唯一正确的道德评判标准',
    '在一亩三分地发帖，需要遵守哪些规则？': '以上都需要遵守。',
    '在一亩三分地论坛参与社区讨论需要遵守哪些规则？': '这些全都要遵守',
    '把一亩三分地介绍给朋友的正确姿势不包括什么？':'直接把我的账号密码给朋友用',
};
