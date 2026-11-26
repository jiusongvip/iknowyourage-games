// Per-language SEO copy for the prerendered pages.
// Game UI strings themselves come from the original game's language packs
// (public/assets/lang-*.js / UI_EN in the game script); the text below is
// the page copy rendered into the static HTML around the game.
export const LANGS = ['en', 'ja', 'zh', 'es', 'pt', 'ru'];

export const PATHS = { en: '/', ja: '/ja/', zh: '/zh/', es: '/es/', pt: '/pt/', ru: '/ru/' };
export const HTML_LANG = { en: 'en', ja: 'ja', zh: 'zh-CN', es: 'es', pt: 'pt', ru: 'ru' };
export const OG_LOCALE = { en: 'en_US', ja: 'ja_JP', zh: 'zh_CN', es: 'es_ES', pt: 'pt_PT', ru: 'ru_RU' };
export const LANG_NAMES = { en: 'English', ja: '日本語', zh: '简体中文', es: 'Español', pt: 'Português', ru: 'Русский' };

export const SEO = {
  en: {
    metaTitle: 'I Know Your Age — Age Guessing Game from Your Memories',
    metaDesc:
      'I Know Your Age asks about the trends, games and everyday things you remember — then guesses your exact age. Free, no sign-up, 12–45 questions.',
    h1: 'I Know Your Age — the age guessing game',
    intro: [
      'Your memories give you away. The cartoons you watched, the games you played, the things everyone at school had — each one belongs to a moment in time, and together they point to the year you were born.',
      'I Know Your Age asks you about one memory at a time and quietly narrows down your age after every answer. At the end it makes a single guess: your age, in years.',
    ],
    howH: 'How to play',
    steps: [
      'Press Start. You will be shown past trends, school and everyday life, slang and more — one at a time.',
      'For each one, pick how well you know it, or choose the answer that fits you. Quizzes pop up now and then.',
      'If you don’t know or don’t remember something, honestly pick “Don’t know” or “Not sure”. Honest answers make the guess sharper, not weaker.',
      'The questions adapt to your answers and stop when the game is confident — between 12 and 45 questions. Then it names your age, once, and shows you the memories that gave you away.',
    ],
    strataH: 'Your memory strata',
    strata:
      'On the result screen, your answers are drawn as memory strata — layers from the 1970s to the 2020s, like geological strata. The layer packed with the most “fossils” (things you knew and used) is usually the decade you grew up in, and one answer — the clincher — is highlighted as the one that narrowed your age the most.',
    faqH: 'Frequently asked questions',
    faq: [
      {
        q: 'How does the game figure out my age?',
        a: 'Every question is tied to the years when something was popular and the ages of the people who knew it best. The game keeps a probability for every age from 6 to 85 and updates it with each answer, asking next about whatever would narrow it down the most, until it is confident enough to guess.',
      },
      {
        q: 'How many questions does it ask?',
        a: 'Between 12 and 45. If your answers point clearly at one generation it stops early; if they are mixed, it keeps asking. There is only ever one guess, at the very end.',
      },
      {
        q: 'Is I Know Your Age free? Do I need an account?',
        a: 'Yes, it is completely free and there is no sign-up. It runs entirely in your browser.',
      },
      {
        q: 'What happens if I answer “Don’t know” a lot?',
        a: 'That is still useful information — not knowing something is a clue, too. Answering honestly gives a better guess than forcing an answer. If almost everything is unknown, the strata come out blank and the guess will be rough.',
      },
      {
        q: 'Is my age or my answers recorded?',
        a: 'No. The game runs in your browser and nothing about who you are is recorded; your answers and the age it guesses are never sent to a server or stored anywhere.',
      },
    ],
    navH: 'Play in another language',
  },
  ja: {
    metaTitle: 'あなたの年齢を当てます — 流行りの記憶で年齢当てゲーム',
    metaDesc:
      '覚えている流行・ゲーム・日常のあれこれに答えるだけで、あなたの年齢をずばり当てます。無料・登録不要、質問は12〜45問。',
    h1: 'あなたの年齢を当てます — 記憶で当てる年齢当てゲーム',
    intro: [
      '記憶は正直です。夢中になったアニメ、遊んだゲーム、学校でみんなが持っていたもの——そのひとつひとつが時代に結びついていて、集まるとあなたの生まれた頃を指し示します。',
      '「あなたの年齢を当てます」は、思い出をひとつずつ質問しながら、答えるたびに年齢の候補を絞り込んでいきます。最後に当てるのは一度だけ、あなたの年齢です。',
    ],
    howH: '遊び方',
    steps: [
      '「はじめる」を押すと、流行、学校や日常の思い出、流行語などがひとつずつ表示されます。',
      'それぞれについて、どれくらい知っているか、または自分に合う答えを選んでください。ときどきクイズも出ます。',
      '知らないもの・覚えていないものは、正直に「知らない」「わからない」と答えてください。正直な答えのほうが、よく当たります。',
      '質問は答えに合わせて変わり、自信が持てたら終了します（12〜45問）。最後に年齢を一度だけ言い当て、決め手になった思い出も教えてくれます。',
    ],
    strataH: '記憶の地層',
    strata:
      '結果画面では、あなたの答えが「記憶の地層」として描かれます。1970年代から2020年代までの層が地層のように積み重なり、「化石」（知っていた・使っていたもの）がいちばん詰まった層が、だいたいあなたの育った年代です。そして年齢を最も絞り込んだ答えが「決め手」として示されます。',
    faqH: 'よくある質問',
    faq: [
      {
        q: 'どうやって年齢を当てているのですか？',
        a: 'すべての質問は「それが流行った時期」と「いちばん親しんだ年齢層」に結びついています。6歳から85歳までの各年齢の確率を答えるたびに更新し、最も絞り込める次の質問を出し続け、自信が持てたところで言い当てます。',
      },
      {
        q: '質問は何問ありますか？',
        a: '12問から45問です。答えがはっきり一つの世代を指せば早めに終わり、混ざっていれば質問が続きます。当てるのは最後の一度だけです。',
      },
      {
        q: '無料ですか？ 登録は必要ですか？',
        a: '完全無料で、登録も不要です。すべてブラウザの中で動きます。',
      },
      {
        q: '「知らない」ばかり答えたらどうなりますか？',
        a: '「知らない」も大事なヒントになります。無理に答えるより、正直に答えるほうがよく当たります。ほとんど知らない場合は地層が空白になり、当ても大ざっぱになります。',
      },
      {
        q: '年齢や答えは記録されますか？',
        a: '記録されません。ゲームはブラウザの中で動き、個人が特定される情報は保存されません。あなたの答えや当てた年齢がサーバーに送られたり、保存されたりすることはありません。',
      },
    ],
    navH: 'ほかの言語で遊ぶ',
  },
  zh: {
    metaTitle: '我知道你几岁 — 用流行记忆猜年龄的游戏',
    metaDesc:
      '回答你记得的流行、游戏和日常小事，这个游戏就能猜出你的准确年龄。免费、无需注册，12–45 道题。',
    h1: '我知道你几岁 — 用记忆猜年龄的游戏',
    intro: [
      '记忆最诚实。你看过的动画、玩过的游戏、上学时人人都有的东西——每一件都属于某个特定的年代，把它们拼在一起，就能指向你出生的年份。',
      '《我知道你几岁》会一件一件地问你这些回忆，每答一题就悄悄缩小年龄范围。最后它只猜一次：你的年龄。',
    ],
    howH: '怎么玩',
    steps: [
      '点“开始”。屏幕会一件一件地展示过去的流行、校园和日常回忆、流行语等等。',
      '对每一件，选择你有多熟悉它，或者选最符合你的答案。中间还会不时冒出小测验题。',
      '不知道、不记得的东西，就老实选“不知道”或“不确定”。诚实作答反而猜得更准。',
      '题目会根据你的答案自适应变化，有把握时就停下——一共 12 到 45 题。最后它会说出你的年龄，并告诉你是哪几段回忆“出卖”了你。',
    ],
    strataH: '你的记忆地层',
    strata:
      '在结果页，你的答案会被画成“记忆地层”——从 1970 年代到 2020 年代，像地质层一样一层层叠起来。“化石”（你知道、用过的东西）最密集的那一层，通常就是你长大的年代；其中最能缩小年龄范围的那道题，会被标为“决定性一手”。',
    faqH: '常见问题',
    faq: [
      {
        q: '它是怎么猜出我的年龄的？',
        a: '每道题都对应着某样东西流行的年份，以及最熟悉它的年龄段。游戏会为 6 到 85 岁的每个年龄维护一个概率，每答一题就更新一次，并挑最能缩小范围的问题继续问，直到有把握说出答案。',
      },
      {
        q: '一共要答多少题？',
        a: '12 到 45 题。如果你的答案明显指向某一代人，它会提前结束；如果比较混杂，就会继续问。最后只猜一次。',
      },
      {
        q: '免费吗？需要注册吗？',
        a: '完全免费，也不需要注册。整个游戏都在你的浏览器里运行。',
      },
      {
        q: '如果我很多题都选“不知道”会怎样？',
        a: '“不知道”本身也是线索。诚实作答比硬凑一个答案猜得准。如果几乎全都不知道，地层会是空白的，猜测也会比较粗略。',
      },
      {
        q: '我的年龄和答案会被记录吗？',
        a: '不会。游戏在浏览器本地运行，不记录你是谁；你的答案和猜出的年龄不会被发送到服务器，也不会被保存在任何地方。',
      },
    ],
    navH: '用其他语言玩',
  },
  es: {
    metaTitle: 'Sé Tu Edad — El juego que adivina tu edad por tus recuerdos',
    metaDesc:
      'Responde preguntas sobre las modas, los juegos y las cosas de cada día que recuerdas, y este juego adivinará tu edad exacta. Gratis, sin registro, de 12 a 45 preguntas.',
    h1: 'Sé Tu Edad — el juego que adivina tu edad',
    intro: [
      'Tus recuerdos te delatan. Los dibujos que veías, los juegos a los que jugabas, las cosas que todo el mundo tenía en el colegio: cada una pertenece a un momento concreto, y juntas apuntan al año en que naciste.',
      'Sé Tu Edad te pregunta por un recuerdo cada vez y va estrechando tu edad con cada respuesta. Al final hace una única predicción: tu edad, en años.',
    ],
    howH: 'Cómo jugar',
    steps: [
      'Pulsa «Empezar». Verás modas del pasado, recuerdos del colegio y de la vida diaria, expresiones y mucho más, uno a uno.',
      'Para cada uno, elige cuánto lo conoces o la respuesta que encaje contigo. De vez en cuando aparecen preguntas de cuestionario.',
      'Si algo no lo conoces o no lo recuerdas, elige honestamente «No lo sé» o «No estoy seguro». Las respuestas honestas afinan la predicción.',
      'Las preguntas se adaptan a tus respuestas y se detienen cuando el juego está seguro: entre 12 y 45 preguntas. Entonces dice tu edad, una sola vez, y te enseña los recuerdos que te delataron.',
    ],
    strataH: 'Tus estratos de memoria',
    strata:
      'En la pantalla de resultados, tus respuestas se dibujan como estratos de memoria: capas desde los años 70 hasta los 2020, como estratos geológicos. La capa con más «fósiles» (cosas que conocías y usabas) suele ser la década en la que creciste, y una respuesta —la decisiva— se destaca como la que más estrechó tu edad.',
    faqH: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Cómo adivina el juego mi edad?',
        a: 'Cada pregunta está ligada a los años en que algo estuvo de moda y a las edades de quienes mejor lo conocían. El juego mantiene una probabilidad para cada edad entre 6 y 85 años, la actualiza con cada respuesta y pregunta después lo que más la estreche, hasta estar seguro.',
      },
      {
        q: '¿Cuántas preguntas hace?',
        a: 'Entre 12 y 45. Si tus respuestas apuntan claramente a una generación, termina antes; si son mezcladas, sigue preguntando. Solo hay una predicción, al final.',
      },
      {
        q: '¿Es gratis? ¿Necesito una cuenta?',
        a: 'Sí, es totalmente gratis y no hay que registrarse. Funciona por completo en tu navegador.',
      },
      {
        q: '¿Qué pasa si respondo «No lo sé» muchas veces?',
        a: 'También es información útil: no conocer algo es una pista. Responder con honestidad da una mejor predicción que forzar una respuesta. Si casi todo es desconocido, los estratos salen en blanco y la predicción será aproximada.',
      },
      {
        q: '¿Se guarda mi edad o mis respuestas?',
        a: 'No. El juego funciona en tu navegador y no registra quién eres; tus respuestas y la edad que predice nunca se envían a un servidor ni se guardan en ningún sitio.',
      },
    ],
    navH: 'Jugar en otro idioma',
  },
  pt: {
    metaTitle: 'Sei Sua Idade — O jogo que adivinha sua idade pelas suas lembranças',
    metaDesc:
      'Responda perguntas sobre as modas, os jogos e as coisas do dia a dia de que você se lembra, e este jogo adivinha sua idade exata. Grátis, sem cadastro, de 12 a 45 perguntas.',
    h1: 'Sei Sua Idade — o jogo que adivinha sua idade',
    intro: [
      'Suas lembranças entregam você. Os desenhos que você assistia, os jogos que jogava, as coisas que todo mundo tinha na escola — cada uma pertence a um momento no tempo e, juntas, apontam para o ano em que você nasceu.',
      'Sei Sua Idade pergunta sobre uma lembrança de cada vez e vai estreitando sua idade a cada resposta. No fim, faz um único palpite: a sua idade, em anos.',
    ],
    howH: 'Como jogar',
    steps: [
      'Toque em «Começar». Você verá modas do passado, lembranças da escola e do dia a dia, gírias e muito mais, um de cada vez.',
      'Para cada um, escolha o quanto você conhece ou a resposta que combina com você. De vez em quando aparecem perguntas de quiz.',
      'Se você não conhece ou não se lembra de algo, escolha honestamente «Não sei» ou «Não tenho certeza». Respostas honestas deixam o palpite mais preciso.',
      'As perguntas se adaptam às suas respostas e param quando o jogo está confiante — entre 12 e 45 perguntas. Então ele diz a sua idade, uma única vez, e mostra as lembranças que entregaram você.',
    ],
    strataH: 'Seus estratos de memória',
    strata:
      'Na tela de resultado, suas respostas são desenhadas como estratos de memória — camadas dos anos 1970 aos 2020, como estratos geológicos. A camada com mais «fósseis» (coisas que você conhecia e usava) costuma ser a década em que você cresceu, e uma resposta — a decisiva — é destacada como a que mais estreitou sua idade.',
    faqH: 'Perguntas frequentes',
    faq: [
      {
        q: 'Como o jogo adivinha minha idade?',
        a: 'Cada pergunta está ligada aos anos em que algo fez sucesso e às idades de quem melhor conhecia aquilo. O jogo mantém uma probabilidade para cada idade de 6 a 85 anos, atualiza a cada resposta e pergunta em seguida o que mais estreitaria o resultado, até estar confiante.',
      },
      {
        q: 'Quantas perguntas ele faz?',
        a: 'Entre 12 e 45. Se suas respostas apontam claramente para uma geração, ele para mais cedo; se forem misturadas, continua perguntando. Há um único palpite, no final.',
      },
      {
        q: 'É grátis? Preciso de uma conta?',
        a: 'Sim, é totalmente grátis e não precisa de cadastro. Funciona inteiramente no seu navegador.',
      },
      {
        q: 'E se eu responder «Não sei» muitas vezes?',
        a: 'Isso também é informação útil — não conhecer algo é uma pista. Responder honestamente gera um palpite melhor do que forçar uma resposta. Se quase tudo for desconhecido, os estratos ficam em branco e o palpite será aproximado.',
      },
      {
        q: 'Minha idade ou minhas respostas são registradas?',
        a: 'Não. O jogo funciona no seu navegador e nada sobre quem você é fica registrado; suas respostas e a idade que ele adivinha nunca são enviadas a um servidor nem guardadas em lugar nenhum.',
      },
    ],
    navH: 'Jogar em outro idioma',
  },
  ru: {
    metaTitle: 'Я знаю твой возраст — игра, которая угадывает возраст по воспоминаниям',
    metaDesc:
      'Отвечай на вопросы о модах, играх и повседневных вещах, которые помнишь, — и игра угадает твой точный возраст. Бесплатно, без регистрации, от 12 до 45 вопросов.',
    h1: 'Я знаю твой возраст — игра на угадывание возраста',
    intro: [
      'Твои воспоминания выдают тебя. Мультфильмы, которые ты смотрел, игры, в которые играл, вещи, которые были у всех в школе, — каждая принадлежит своему времени, а вместе они указывают на год твоего рождения.',
      '«Я знаю твой возраст» спрашивает об одном воспоминании за раз и с каждым ответом всё точнее определяет твой возраст. В конце — один-единственный ответ: сколько тебе лет.',
    ],
    howH: 'Как играть',
    steps: [
      'Нажми «Начать». Тебе будут показывать тренды прошлых лет, школу и повседневную жизнь, сленг и многое другое — по одному за раз.',
      'По каждому пункту выбирай, насколько хорошо ты это знаешь, или ответ, который подходит именно тебе. Иногда будут попадаться викторины.',
      'Если чего-то не знаешь или не помнишь, честно выбирай «Не знаю» или «Не уверен(а)». Честные ответы делают результат точнее, а не хуже.',
      'Вопросы подстраиваются под твои ответы и заканчиваются, когда игра уверена, — от 12 до 45 вопросов. Затем она один раз называет твой возраст и показывает воспоминания, которые тебя выдали.',
    ],
    strataH: 'Твои слои памяти',
    strata:
      'На экране результата твои ответы нарисованы как слои памяти — пласты с 1970-х по 2020-е, как геологические слои. Слой, где больше всего «окаменелостей» (вещей, которые ты знал и которыми пользовался), — это обычно десятилетие, в котором ты вырос, а один ответ — решающий — выделен как тот, что сильнее всего сузил твой возраст.',
    faqH: 'Частые вопросы',
    faq: [
      {
        q: 'Как игра угадывает мой возраст?',
        a: 'Каждый вопрос привязан к годам, когда что-то было популярно, и к возрасту людей, которые знали это лучше всех. Игра ведёт вероятность для каждого возраста от 6 до 85 лет, обновляет её с каждым ответом и дальше спрашивает о том, что сильнее всего сузит результат, — пока не будет уверена.',
      },
      {
        q: 'Сколько вопросов она задаёт?',
        a: 'От 12 до 45. Если твои ответы ясно указывают на одно поколение, игра остановится раньше; если ответы смешанные, она продолжит спрашивать. Ответ всегда один, в самом конце.',
      },
      {
        q: 'Это бесплатно? Нужна ли регистрация?',
        a: 'Да, игра полностью бесплатна и регистрация не нужна. Она целиком работает в твоём браузере.',
      },
      {
        q: 'Что будет, если я часто отвечаю «Не знаю»?',
        a: 'Это тоже полезная информация — не знать что-то значит получить подсказку. Честные ответы дают лучший результат, чем ответы наугад. Если неизвестно почти всё, слои окажутся пустыми, а ответ — приблизительным.',
      },
      {
        q: 'Мой возраст или ответы где-то записываются?',
        a: 'Нет. Игра работает в твоём браузере, и ничего о тебе не записывается: твои ответы и названный возраст никогда не отправляются на сервер и нигде не хранятся.',
      },
    ],
    navH: 'Играть на другом языке',
  },
};

// Homepage thickening sections (memory categories, an example strata
// reading, language-editions intro, footer note), one set per language.
export const THICK = {
  en: {
    memH: 'What kinds of memories?',
    memIntro:
      'The 297 questions are not about one thing. They roam across everything a generation grows up with — if you lived through it, it can give you away:',
    memCats: [
      { name: 'Games and consoles', ex: 'the cartridge you blew on, the handheld everyone wanted, the first game you were hooked on' },
      { name: 'Cartoons, TV and movies', ex: 'the shows that were on when you got home from school, and the ones you watched much later' },
      { name: 'Music', ex: 'the songs that were everywhere one summer, and the ones your parents played' },
      { name: 'School and everyday life', ex: 'what was in your pencil case, how the class computer sounded, what the phone at home looked like' },
      { name: 'Phones, internet and apps', ex: 'dial-up screeches, first messengers, the first phone you ever owned' },
      { name: 'Slang, memes and viral moments', ex: 'the words everyone said for exactly one year, and the videos the whole internet quoted' },
    ],
    exH: 'Reading a result: an example',
    ex:
      'Say your thickest layer turns out to be the 1990s, packed with fossils like a Game Boy, dial-up internet sounds and Saturday-morning cartoons, while the 2010s and 2020s layers stay almost empty. That pattern — deep knowledge of one decade, blanks on either side — is the classic signature of someone who grew up in the 90s. A layer from before your time can still fill up if you are a retro fan, which is why the game weighs every layer together instead of trusting just one.',
    exList: [
      'Thickest layer in the 1980s: expect fossils like arcade games and the first home consoles.',
      'Thickest layer in the 2000s: flip phones, early social networks and CD-era music are the usual tells.',
      'Thickest layer in the 2020s: short-video apps and the newest slang — a young player, or a very online one.',
    ],
    langIntro:
      'The whole game — all 297 questions, the result screen and the share card — is fully translated. Pick your language; the memories being tested are the same, only the words change:',
    footNote: 'I Know Your Age — a free guessing game that runs entirely in your browser.',
  },
  ja: {
    memH: 'どんな思い出が出てくる？',
    memIntro:
      '297問は、ひとつの分野に偏っていません。ある世代が当たり前に触れてきたものなら何でも、あなたの年代を教えてくれます：',
    memCats: [
      { name: 'ゲームとゲーム機', ex: 'カセットに息を吹きかけたこと、みんなが欲しがった携帯機、初めてハマったゲーム' },
      { name: 'アニメ・テレビ・映画', ex: '学校から帰るとやっていた番組と、ずっと後になって観た作品' },
      { name: '音楽', ex: 'ある夏にどこでも流れていた曲と、親が聴いていた曲' },
      { name: '学校と日常', ex: '筆箱の中身、学校のパソコンの音、家の電話の形' },
      { name: '電話・インターネット・アプリ', ex: 'ダイヤルアップの接続音、最初のメッセンジャー、初めて持った携帯電話' },
      { name: '流行語・ミーム・バズった出来事', ex: 'ちょうど1年だけみんなが言っていた言葉と、ネット中が真似した動画' },
    ],
    exH: '結果の読み方：たとえば',
    ex:
      'たとえば、いちばん厚い地層が1990年代で、ゲームボーイやダイヤルアップの接続音、土曜の朝のアニメといった「化石」がぎっしり詰まり、2010年代と2020年代の層はほぼ空白だったとします。「ある10年間だけ深く知っていて、前後が空白」というこの形は、その年代に育った人の典型的なサインです。生まれる前の地層も、レトロ好きなら厚くなることがあるので、ゲームはひとつの層だけを信じず、すべての層を合わせて判断します。',
    exList: [
      '1980年代の層が最も厚い場合：アーケードゲームや初期の家庭用ゲーム機が化石になりがちです。',
      '2000年代の層が最も厚い場合：折りたたみ携帯、初期のSNS、CDの時代の音楽が目印です。',
      '2020年代の層が最も厚い場合：ショート動画アプリと最新の流行語——若いプレイヤーか、ネットにどっぷり浸かった人です。',
    ],
    langIntro:
      'ゲーム全体——297問すべて、結果画面もシェア画像も——が翻訳されています。言語を選んでください。問われる思い出は同じで、言葉だけが変わります：',
    footNote: 'あなたの年齢を当てます——ブラウザの中だけで動く、無料の年齢当てゲームです。',
  },
  zh: {
    memH: '都会问到哪些回忆？',
    memIntro:
      '297 道题不只问一类东西。一代人成长过程中接触过的一切，都可能“出卖”你的年代：',
    memCats: [
      { name: '游戏和游戏机', ex: '你吹过灰的卡带、人人都想要的掌机、你沉迷的第一款游戏' },
      { name: '动画、电视和电影', ex: '放学回家时正在播的节目，以及你很久以后才补看的作品' },
      { name: '音乐', ex: '某个夏天到处都在放的歌，和你父母那辈听的歌' },
      { name: '校园和日常', ex: '文具盒里有什么、学校电脑开机是什么声音、家里的电话长什么样' },
      { name: '电话、网络和应用', ex: '拨号上网的滋滋声、最早用的聊天软件、你拥有的第一部手机' },
      { name: '流行语、梗和网络热点', ex: '只流行了整整一年的说法，和全网都在模仿的视频' },
    ],
    exH: '怎么看结果：举个例子',
    ex:
      '比如你最厚的一层是 1990 年代，里面塞满了 Game Boy、拨号上网的声音、周六早上的动画这些“化石”，而 2010 年代和 2020 年代的层几乎是空白的。这种“只有一个十年懂得特别深、前后都是空白”的形状，就是在那个年代长大的人的典型特征。你出生之前的地层也可能因为你是个怀旧爱好者而变厚，所以游戏不会只信一层，而是把所有层放在一起判断。',
    exList: [
      '最厚的是 1980 年代：化石多半是街机游戏和最早的家用游戏机。',
      '最厚的是 2000 年代：翻盖手机、早期的社交网络和 CD 时代的音乐是常见线索。',
      '最厚的是 2020 年代：短视频应用和最新的流行语——要么是年轻玩家，要么是重度网民。',
    ],
    langIntro:
      '整个游戏——全部 297 道题、结果页和分享图——都有完整翻译。选你的语言吧；被问到的回忆是同一套，只是文字不同：',
    footNote: '我知道你几岁——一款完全在浏览器里运行的免费猜年龄游戏。',
  },
  es: {
    memH: '¿Qué tipo de recuerdos?',
    memIntro:
      'Las 297 preguntas no van de una sola cosa. Recorren todo aquello con lo que crece una generación; si lo viviste, puede delatarte:',
    memCats: [
      { name: 'Juegos y consolas', ex: 'el cartucho al que soplabas, la portátil que todo el mundo quería, el primer juego que te enganchó' },
      { name: 'Dibujos, televisión y cine', ex: 'lo que echaban cuando llegabas del colegio y lo que viste mucho después' },
      { name: 'Música', ex: 'las canciones que sonaban en todas partes un verano, y las que ponían tus padres' },
      { name: 'Colegio y vida diaria', ex: 'lo que llevabas en el estuche, cómo sonaba el ordenador de clase, cómo era el teléfono de casa' },
      { name: 'Teléfonos, internet y aplicaciones', ex: 'el chirrido del módem, los primeros programas de mensajería, el primer móvil que tuviste' },
      { name: 'Expresiones, memes y momentos virales', ex: 'las palabras que todo el mundo dijo durante exactamente un año, y los vídeos que citaba todo internet' },
    ],
    exH: 'Cómo leer un resultado: un ejemplo',
    ex:
      'Imagina que tu capa más gruesa es la de los años 90, llena de fósiles como una Game Boy, el sonido de la conexión telefónica y los dibujos de los sábados por la mañana, mientras que las capas de los 2010 y los 2020 quedan casi vacías. Ese patrón —conocer a fondo una década y tener huecos a ambos lados— es la firma clásica de quien creció en los 90. Una capa anterior a tu época también puede llenarse si eres un fan de lo retro, por eso el juego valora todas las capas juntas en lugar de fiarse de una sola.',
    exList: [
      'Capa más gruesa en los años 80: espera fósiles como los salones recreativos y las primeras consolas domésticas.',
      'Capa más gruesa en los 2000: los móviles de tapa, las primeras redes sociales y la música de la era del CD son las pistas habituales.',
      'Capa más gruesa en los 2020: aplicaciones de vídeo corto y la jerga más nueva: un jugador joven, o uno muy en línea.',
    ],
    langIntro:
      'El juego completo —las 297 preguntas, la pantalla de resultados y la tarjeta para compartir— está totalmente traducido. Elige tu idioma; los recuerdos sobre los que se pregunta son los mismos, solo cambian las palabras:',
    footNote: 'Sé Tu Edad: un juego gratuito para adivinar tu edad que funciona por completo en tu navegador.',
  },
  pt: {
    memH: 'Que tipos de lembranças?',
    memIntro:
      'As 297 perguntas não são sobre uma coisa só. Elas passeiam por tudo aquilo com que uma geração cresce — se você viveu, pode entregar você:',
    memCats: [
      { name: 'Jogos e consoles', ex: 'o cartucho que você assoprava, o portátil que todo mundo queria, o primeiro jogo que te viciou' },
      { name: 'Desenhos, TV e filmes', ex: 'o que passava quando você chegava da escola, e o que você assistiu muito depois' },
      { name: 'Música', ex: 'as músicas que tocavam em todo lugar em um verão, e as que seus pais ouviam' },
      { name: 'Escola e dia a dia', ex: 'o que havia no seu estojo, o som do computador da escola, como era o telefone de casa' },
      { name: 'Telefones, internet e aplicativos', ex: 'o barulho da internet discada, os primeiros mensageiros, o primeiro celular que você teve' },
      { name: 'Gírias, memes e momentos virais', ex: 'as palavras que todo mundo falou por exatamente um ano, e os vídeos que a internet inteira citava' },
    ],
    exH: 'Lendo um resultado: um exemplo',
    ex:
      'Imagine que sua camada mais espessa é a dos anos 1990, cheia de fósseis como um Game Boy, o som da internet discada e os desenhos das manhãs de sábado, enquanto as camadas de 2010 e 2020 ficam quase vazias. Esse padrão — conhecer a fundo uma década, com brancos dos dois lados — é a assinatura clássica de quem cresceu nos anos 90. Uma camada de antes da sua época também pode se encher se você for fã de coisas retrô, e é por isso que o jogo pesa todas as camadas juntas em vez de confiar em uma só.',
    exList: [
      'Camada mais espessa nos anos 1980: espere fósseis como fliperamas e os primeiros consoles domésticos.',
      'Camada mais espessa nos anos 2000: celulares de flip, as primeiras redes sociais e a música da era do CD são as pistas comuns.',
      'Camada mais espessa nos anos 2020: aplicativos de vídeo curto e as gírias mais novas — um jogador jovem, ou um muito online.',
    ],
    langIntro:
      'O jogo inteiro — todas as 297 perguntas, a tela de resultado e o cartão de compartilhamento — está totalmente traduzido. Escolha seu idioma; as lembranças perguntadas são as mesmas, só mudam as palavras:',
    footNote: 'Sei Sua Idade — um jogo gratuito de adivinhar a idade que funciona inteiramente no seu navegador.',
  },
  ru: {
    memH: 'Какие воспоминания проверяются?',
    memIntro:
      'Вопросы — не об одном и том же. Они проходят по всему, с чем растёт целое поколение: если ты это пережил, оно может тебя выдать. В русской версии к 297 общим вопросам добавлены 60 специальных — про детство в СССР и России:',
    memCats: [
      { name: 'Игры и приставки', ex: 'картридж, на который дули, чтобы заработал, приставка, которую хотели все, первая игра, на которой завис' },
      { name: 'Мультфильмы, ТВ и кино', ex: 'что показывали, когда ты приходил из школы, и что ты пересматривал много лет спустя' },
      { name: 'Музыка', ex: 'песни, которые одно лето играли отовсюду, и те, что слушали твои родители' },
      { name: 'Школа и повседневная жизнь', ex: 'что лежало в твоём пенале, как звучал школьный компьютер, как выглядел домашний телефон' },
      { name: 'Телефоны, интернет и приложения', ex: 'треск dial-up, аська и первые соцсети, первый телефон, который у тебя был' },
      { name: 'Сленг, мемы и вирусные моменты', ex: 'слова, которые все говорили ровно один год, и видео, которые цитировал весь интернет' },
    ],
    exH: 'Как читать результат: пример',
    ex:
      'Представь, что твой самый толстый слой — 1990-е: он набит окаменелостями вроде Dendy, вкладышей Turbo и «Санта-Барбары» по вечерам, а слои 2010-х и 2020-х почти пусты. Такой рисунок — глубоко знать одно десятилетие и почти ничего по обе стороны от него — классический признак человека, выросшего в 90-е. Слой «до твоего времени» тоже может наполниться, если ты любишь ретро, поэтому игра взвешивает все слои вместе, а не доверяет одному.',
    exList: [
      'Самый толстый слой — 1980-е: жди окаменелостей вроде советских мультиков, диафильмов и автоматов с газировкой.',
      'Самый толстый слой — 2000-е: аська, первые соцсети и пиратские диски с играми — обычные улики.',
      'Самый толстый слой — 2020-е: короткие видео и новейший сленг — игрок молодой или очень «в сети».',
    ],
    langIntro:
      'Вся игра — все вопросы, экран результата и карточка, которой делятся с друзьями, — полностью переведена. Выбирай язык; в русской версии, кроме общих воспоминаний, есть и свои, особые:',
    footNote: 'Я знаю твой возраст — бесплатная игра на угадывание возраста, которая работает полностью в твоём браузере.',
  },
};
