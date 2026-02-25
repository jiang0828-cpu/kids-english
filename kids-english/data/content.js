// KidsEnglish - 学习内容数据

// 字母数据
const alphabetData = [
  { letter: 'A', word: 'Apple', icon: '🍎', pronunciation: '/ˈæp.əl/' },
  { letter: 'B', word: 'Ball', icon: '⚽', pronunciation: '/bɔːl/' },
  { letter: 'C', word: 'Cat', icon: '🐱', pronunciation: '/kæt/' },
  { letter: 'D', word: 'Dog', icon: '🐕', pronunciation: '/dɒɡ/' },
  { letter: 'E', word: 'Elephant', icon: '🐘', pronunciation: '/ˈel.ɪ.fənt/' },
  { letter: 'F', word: 'Fish', icon: '🐟', pronunciation: '/fɪʃ/' },
  { letter: 'G', word: 'Grapes', icon: '🍇', pronunciation: '/ɡreɪps/' },
  { letter: 'H', word: 'House', icon: '🏠', pronunciation: '/haʊs/' },
  { letter: 'I', word: 'Ice cream', icon: '🍦', pronunciation: '/ˈaɪs.kriːm/' },
  { letter: 'J', word: 'Juice', icon: '🧃', pronunciation: '/dʒuːs/' },
  { letter: 'K', word: 'Kite', icon: '🪁', pronunciation: '/kaɪt/' },
  { letter: 'L', word: 'Lion', icon: '🦁', pronunciation: '/ˈlaɪ.ən/' },
  { letter: 'M', word: 'Monkey', icon: '🐒', pronunciation: '/ˈmʌŋ.ki/' },
  { letter: 'N', word: 'Nest', icon: '🪹', pronunciation: '/nest/' },
  { letter: 'O', word: 'Orange', icon: '🍊', pronunciation: '/ˈɒr.ɪndʒ/' },
  { letter: 'P', word: 'Pencil', icon: '✏️', pronunciation: '/ˈpen.səl/' },
  { letter: 'Q', word: 'Queen', icon: '👸', pronunciation: '/kwiːn/' },
  { letter: 'R', word: 'Rabbit', icon: '🐰', pronunciation: '/ˈræb.ɪt/' },
  { letter: 'S', word: 'Sun', icon: '☀️', pronunciation: '/sʌn/' },
  { letter: 'T', word: 'Tiger', icon: '🐯', pronunciation: '/ˈtaɪ.ɡər/' },
  { letter: 'U', word: 'Umbrella', icon: '☂️', pronunciation: '/ʌmˈbrel.ə/' },
  { letter: 'V', word: 'Violin', icon: '🎻', pronunciation: '/ˌvaɪəˈlɪn/' },
  { letter: 'W', word: 'Watermelon', icon: '🍉', pronunciation: '/ˈwɔː.təˌmel.ən/' },
  { letter: 'X', word: 'Xylophone', icon: '🎹', pronunciation: '/ˈzaɪ.lə.fəʊn/' },
  { letter: 'Y', word: 'Yo-yo', icon: '🪀', pronunciation: '/ˈjəʊ.jəʊ/' },
  { letter: 'Z', word: 'Zebra', icon: '🦓', pronunciation: '/ˈzeb.rə/' }
];

// 单词数据
const wordsData = {
  animals: [
    { word: 'Cat', icon: '🐱', pronunciation: '/kæt/', chinese: '猫' },
    { word: 'Dog', icon: '🐕', pronunciation: '/dɒɡ/', chinese: '狗' },
    { word: 'Bird', icon: '🐦', pronunciation: '/bɜːd/', chinese: '鸟' },
    { word: 'Fish', icon: '🐟', pronunciation: '/fɪʃ/', chinese: '鱼' },
    { word: 'Elephant', icon: '🐘', pronunciation: '/ˈel.ɪ.fənt/', chinese: '大象' },
    { word: 'Lion', icon: '🦁', pronunciation: '/ˈlaɪ.ən/', chinese: '狮子' },
    { word: 'Monkey', icon: '🐒', pronunciation: '/ˈmʌŋ.ki/', chinese: '猴子' },
    { word: 'Bear', icon: '🐻', pronunciation: '/beər/', chinese: '熊' }
  ],
  colors: [
    { word: 'Red', icon: '🔴', pronunciation: '/red/', chinese: '红色' },
    { word: 'Blue', icon: '🔵', pronunciation: '/bluː/', chinese: '蓝色' },
    { word: 'Yellow', icon: '🟡', pronunciation: '/ˈjel.əʊ/', chinese: '黄色' },
    { word: 'Green', icon: '🟢', pronunciation: '/ɡriːn/', chinese: '绿色' },
    { word: 'Purple', icon: '🟣', pronunciation: '/ˈpɜː.pəl/', chinese: '紫色' },
    { word: 'Orange', icon: '🟠', pronunciation: '/ˈɒr.ɪndʒ/', chinese: '橙色' },
    { word: 'Pink', icon: '💖', pronunciation: '/pɪŋk/', chinese: '粉色' },
    { word: 'Black', icon: '⚫', pronunciation: '/blæk/', chinese: '黑色' }
  ],
  numbers: [
    { word: 'One', icon: '1️⃣', pronunciation: '/wʌn/', chinese: '一' },
    { word: 'Two', icon: '2️⃣', pronunciation: '/tuː/', chinese: '二' },
    { word: 'Three', icon: '3️⃣', pronunciation: '/θriː/', chinese: '三' },
    { word: 'Four', icon: '4️⃣', pronunciation: '/fɔːr/', chinese: '四' },
    { word: 'Five', icon: '5️⃣', pronunciation: '/faɪv/', chinese: '五' },
    { word: 'Six', icon: '6️⃣', pronunciation: '/sɪks/', chinese: '六' },
    { word: 'Seven', icon: '7️⃣', pronunciation: '/ˈsev.ən/', chinese: '七' },
    { word: 'Eight', icon: '8️⃣', pronunciation: '/eɪt/', chinese: '八' },
    { word: 'Nine', icon: '9️⃣', pronunciation: '/naɪn/', chinese: '九' },
    { word: 'Ten', icon: '🔟', pronunciation: '/ten/', chinese: '十' }
  ],
  fruits: [
    { word: 'Apple', icon: '🍎', pronunciation: '/ˈæp.əl/', chinese: '苹果' },
    { word: 'Banana', icon: '🍌', pronunciation: '/bəˈnɑː.nə/', chinese: '香蕉' },
    { word: 'Orange', icon: '🍊', pronunciation: '/ˈɒr.ɪndʒ/', chinese: '橙子' },
    { word: 'Grape', icon: '🍇', pronunciation: '/ɡreɪp/', chinese: '葡萄' },
    { word: 'Strawberry', icon: '🍓', pronunciation: '/ˈstrɔː.bər.i/', chinese: '草莓' },
    { word: 'Watermelon', icon: '🍉', pronunciation: '/ˈwɔː.təˌmel.ən/', chinese: '西瓜' }
  ],
  body: [
    { word: 'Head', icon: '👤', pronunciation: '/hed/', chinese: '头' },
    { word: 'Eyes', icon: '👀', pronunciation: '/aɪz/', chinese: '眼睛' },
    { word: 'Nose', icon: '👃', pronunciation: '/nəʊz/', chinese: '鼻子' },
    { word: 'Mouth', icon: '👄', pronunciation: '/maʊθ/', chinese: '嘴巴' },
    { word: 'Ears', icon: '👂', pronunciation: '/ɪərz/', chinese: '耳朵' },
    { word: 'Hands', icon: '👋', pronunciation: '/hændz/', chinese: '手' },
    { word: 'Feet', icon: '🦶', pronunciation: '/fiːt/', chinese: '脚' }
  ]
};

// 对话数据
const dialogueData = [
  {
    title: '问候 Greetings',
    icon: '👋',
    lines: [
      { speaker: 'A', icon: '🙂', english: 'Hello!', chinese: '你好！' },
      { speaker: 'B', icon: '😊', english: 'Hi! How are you?', chinese: '嗨！你好吗？' },
      { speaker: 'A', icon: '🙂', english: 'I\'m fine, thank you!', chinese: '我很好，谢谢！' },
      { speaker: 'B', icon: '😊', english: 'Nice to meet you!', chinese: '很高兴认识你！' }
    ]
  },
  {
    title: '自我介绍 Introduction',
    icon: '🎭',
    lines: [
      { speaker: 'A', icon: '👦', english: 'What\'s your name?', chinese: '你叫什么名字？' },
      { speaker: 'B', icon: '👧', english: 'My name is Amy.', chinese: '我叫艾米。' },
      { speaker: 'A', icon: '👦', english: 'How old are you?', chinese: '你几岁了？' },
      { speaker: 'B', icon: '👧', english: 'I\'m five years old.', chinese: '我五岁了。' }
    ]
  },
  {
    title: '感谢 Thanks',
    icon: '🙏',
    lines: [
      { speaker: 'A', icon: '😄', english: 'Thank you!', chinese: '谢谢你！' },
      { speaker: 'B', icon: '😊', english: 'You\'re welcome!', chinese: '不客气！' },
      { speaker: 'A', icon: '😄', english: 'Thank you very much!', chinese: '非常感谢！' },
      { speaker: 'B', icon: '😊', english: 'My pleasure!', chinese: '乐意效劳！' }
    ]
  },
  {
    title: '告别 Goodbye',
    icon: '👋',
    lines: [
      { speaker: 'A', icon: '🙂', english: 'Goodbye!', chinese: '再见！' },
      { speaker: 'B', icon: '😊', english: 'Bye-bye!', chinese: '拜拜！' },
      { speaker: 'A', icon: '🙂', english: 'See you tomorrow!', chinese: '明天见！' },
      { speaker: 'B', icon: '😊', english: 'See you!', chinese: '回头见！' }
    ]
  }
];

// 儿歌数据
const songsData = [
  {
    title: 'Twinkle Twinkle Little Star',
    titleChinese: '小星星',
    duration: '2:15',
    lyrics: [
      'Twinkle, twinkle, little star,',
      'How I wonder what you are!',
      'Up above the world so high,',
      'Like a diamond in the sky.',
      'Twinkle, twinkle, little star,',
      'How I wonder what you are!'
    ]
  },
  {
    title: 'The Alphabet Song',
    titleChinese: '字母歌',
    duration: '1:45',
    lyrics: [
      'A-B-C-D-E-F-G,',
      'H-I-J-K-L-M-N-O-P,',
      'Q-R-S, T-U-V,',
      'W-X, Y and Z,',
      'Now I know my ABCs,',
      'Next time won\'t you sing with me?'
    ]
  },
  {
    title: 'Old MacDonald Had a Farm',
    titleChinese: '老麦克唐纳有个农场',
    duration: '2:30',
    lyrics: [
      'Old MacDonald had a farm, E-I-E-I-O,',
      'And on his farm he had a cow, E-I-E-I-O,',
      'With a moo-moo here and a moo-moo there,',
      'Here a moo, there a moo, everywhere a moo-moo,',
      'Old MacDonald had a farm, E-I-E-I-O!'
    ]
  },
  {
    title: 'Head, Shoulders, Knees and Toes',
    titleChinese: '头、肩膀、膝盖和脚趾',
    duration: '1:30',
    lyrics: [
      'Head, shoulders, knees and toes,',
      'Knees and toes!',
      'Head, shoulders, knees and toes,',
      'Knees and toes!',
      'And eyes, and ears, and mouth, and nose,',
      'Head, shoulders, knees and toes,',
      'Knees and toes!'
    ]
  },
  {
    title: 'If You\'re Happy and You Know It',
    titleChinese: '如果感到幸福你就拍拍手',
    duration: '2:00',
    lyrics: [
      'If you\'re happy and you know it, clap your hands!',
      'If you\'re happy and you know it, clap your hands!',
      'If you\'re happy and you know it,',
      'And you really want to show it,',
      'If you\'re happy and you know it, clap your hands!'
    ]
  }
];

// 游戏数据
const gamesData = {
  memory: {
    title: '记忆翻牌',
    description: '找出相同的单词卡片！',
    icon: '🃏'
  },
  listening: {
    title: '听音选图',
    description: '听到什么就选什么！',
    icon: '👂'
  },
  puzzle: {
    title: '单词拼图',
    description: '把字母拼成正确的单词！',
    icon: '🧩'
  }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    alphabetData,
    wordsData,
    dialogueData,
    songsData,
    gamesData
  };
}
