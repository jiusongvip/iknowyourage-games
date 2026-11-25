// Per-language SEO copy for the prerendered pages.
// Game UI strings themselves come from the original game's language packs
// (public/assets/lang-*.js / UI_EN in the game script); the text below is
// the page copy rendered into the static HTML around the game.
export const LANGS = ['en', 'ja', 'zh', 'es', 'pt'];

export const PATHS = { en: '/', ja: '/ja/', zh: '/zh/', es: '/es/', pt: '/pt/' };
export const HTML_LANG = { en: 'en', ja: 'ja', zh: 'zh-CN', es: 'es', pt: 'pt' };
export const OG_LOCALE = { en: 'en_US', ja: 'ja_JP', zh: 'zh_CN', es: 'es_ES', pt: 'pt_PT' };
export const LANG_NAMES = { en: 'English', ja: '日本語', zh: '简体中文', es: 'Español', pt: 'Português' };

export const SEO = {
  en: {
    metaTitle: 'I Know Your Age — Age Guessing Game from Your Memories',
    metaDesc:
      'Answer questions about the trends, games and everyday things you remember, and this game guesses your exact age. Free, no sign-up, 12–45 questions.',
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
        q: 'How does the game guess my age?',
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
        a: 'No. The game runs in your browser and nothing about who you are is recorded; ages and answers are only ever added up as anonymous counts.',
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
        a: '記録されません。ゲームはブラウザの中で動き、個人が特定される情報は保存されません。年齢や答えは匿名の集計として数えられるだけです。',
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
        a: '不会。游戏在浏览器本地运行，不记录你是谁；年龄和答案只会以匿名方式汇总计数。',
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
        a: 'No. El juego funciona en tu navegador y no registra quién eres; las edades y respuestas solo se suman como conteos anónimos.',
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
        a: 'Não. O jogo funciona no seu navegador e nada sobre quem você é fica registrado; idades e respostas só são somadas como contagens anônimas.',
      },
    ],
    navH: 'Jogar em outro idioma',
  },
};
