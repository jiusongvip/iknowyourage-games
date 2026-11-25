// Prerendered content pages (how-it-works / about / privacy-policy / terms /
// contact), one version per language, linked from every game page.
// Everything stated here is true of the shipped game: it runs entirely in
// the browser, has no accounts, and sends no answers anywhere.
export const CONTENT_SLUGS = ['how-it-works', 'about', 'privacy-policy', 'terms', 'contact'];

export function pagePath(lang, slug) {
  return lang === 'en' ? `/${slug}/` : `/${lang}/${slug}/`;
}

export const PAGES = {
  en: {
    'how-it-works': {
      nav: 'How it works',
      metaTitle: 'How It Works — I Know Your Age',
      metaDesc:
        'How I Know Your Age turns pop-culture memories into an age guess: 297 questions, a probability for every age from 6 to 85, memory strata, and one final guess.',
      h1: 'How I Know Your Age works',
      sections: [
        {
          h: 'It starts with memories, not with questions about you',
          body: [
            'The game never asks your birth year, your school, or anything else about you directly. Instead it shows you things — a game console, a cartoon, a song, an object from the schoolyard — and asks how well you know them: did you use it, see it, only hear the name, or not know it at all?',
            'Every one of the 297 questions is tied to the years when that thing was popular, and to the ages of the people who knew it best. A thing you used every day at age ten says a lot; a thing you have never heard of says something too.',
          ],
        },
        {
          h: 'A probability for every age',
          body: [
            'Behind the scenes, the game keeps a probability for every age from 6 to 85 and updates it after each answer. The confidence meter at the top shows how concentrated those probabilities have become — the narrower the range of likely ages, the higher the percentage.',
            'The next question is always chosen to be the one expected to narrow the range the most. If you answer “Don’t know” several times in a row, the game throws in a broader profile or home-life question to check the basics from another angle.',
          ],
        },
        {
          h: 'Why “Don’t know” helps',
          body: [
            'Not knowing something is evidence, too. Someone who grew up with a thing usually recognises it; someone born twenty years later often does not. Guessing wildly adds noise, while an honest “Don’t know” cleanly rules ages out — which is why honest answers produce a sharper final guess.',
          ],
        },
        {
          h: 'Memory strata and the clincher',
          body: [
            'When the game is confident enough, it stops — somewhere between 12 and 45 questions — and makes its single guess. On the result screen, your answers are grouped by decade into memory strata, from the 1970s to the 2020s. The layer with the most “fossils” (things you knew and used) is usually the decade you grew up in.',
            'One answer is highlighted as the clincher: the single response that narrowed your age range the most. It is often a small thing — the exact first phone, console or messenger you used.',
          ],
        },
        {
          h: 'If the guess is wrong',
          body: [
            'After the reveal you can say whether the game got it right. If it missed, you can enter your real age to see how far off it was. That number is only shown on your own result screen — like everything else in the game, it stays in your browser.',
          ],
        },
      ],
    },
    about: {
      nav: 'About',
      metaTitle: 'About — I Know Your Age',
      metaDesc:
        'I Know Your Age is a free browser game that guesses your age from the pop-culture memories you grew up with: 297 questions, five languages, no sign-up.',
      h1: 'About I Know Your Age',
      sections: [
        {
          h: 'A guessing game built from nostalgia',
          body: [
            'I Know Your Age is a small, free game that runs in your web browser. It asks you about the trends, games, shows, songs and everyday objects you remember — between 12 and 45 questions — and then makes one guess at your exact age, showing you the “memory strata” that gave you away.',
            'There is nothing to install and no account to create. A game takes a couple of minutes, and at the end you can save or share a picture of your result.',
          ],
        },
        {
          h: 'Five languages, one question bank',
          body: [
            'The game is fully translated into English, Japanese, Simplified Chinese, Spanish and Portuguese. Every language plays with the same 297-question bank and the same guessing engine — the memories being tested are identical, only the words change, so a result in one language means the same as a result in another.',
          ],
        },
        {
          h: 'What it is not',
          body: [
            'It is not a test, a measurement, or science. The guess is an entertainment estimate built from your answers: two people of exactly the same age can answer differently and get different results, especially retro fans and people who grew up between two cultures. Treat a hit as a fun party trick — and a miss as a compliment about how young (or old) your memories are.',
          ],
        },
        {
          h: 'The short version',
          list: [
            'Free to play, no sign-up, no download',
            'Runs entirely in your browser',
            '297 questions; 12–45 asked per game, adapting to your answers',
            'One guess at the end, with your memory strata and the clincher answer',
            'Available in English, 日本語， 简体中文， Español and Português',
          ],
        },
      ],
    },
    'privacy-policy': {
      nav: 'Privacy',
      metaTitle: 'Privacy Policy — I Know Your Age',
      metaDesc:
        'The I Know Your Age game runs entirely in your browser: no accounts, no cookies set by the game, and your answers are never sent to a server.',
      h1: 'Privacy Policy',
      sections: [
        {
          h: 'Last updated: November 25, 2026',
          body: [
            'This page explains, in plain words, what happens to your information when you play I Know Your Age on iknowyourage.games.',
          ],
        },
        {
          h: 'The game collects nothing',
          body: [
            'The game runs entirely on your device, in your web browser. There are no accounts and no sign-up forms. Your answers, the age the game guesses, and the real age you may type in after a wrong guess are processed only in your browser — they are not sent to us, and they are not stored on any server.',
            'When you close the page, the game forgets everything. The language you pick is part of the page address (for example /ja/), not a profile stored about you.',
          ],
        },
        {
          h: 'No tracking in the game',
          body: [
            'The game itself sets no cookies and contains no analytics, advertising or social-media trackers.',
          ],
        },
        {
          h: 'Hosting logs',
          body: [
            'Like any website, this site is delivered by a hosting provider (Cloudflare). To serve the pages and protect the site from abuse, the provider may process standard technical information — such as your IP address, browser type and the pages requested — in server logs. We do not use this information to identify players or to build profiles.',
          ],
        },
        {
          h: 'Sharing your result',
          body: [
            'The share card is an image generated in your browser. If you save it, nothing leaves your device. If you post it to a social network or send it to someone, that copy is governed by the policies of the service you used, not by this policy.',
          ],
        },
        {
          h: 'Questions',
          body: ['If you have a question about privacy, see the contact page for how to reach us.'],
        },
      ],
    },
    terms: {
      nav: 'Terms',
      metaTitle: 'Terms of Use — I Know Your Age',
      metaDesc:
        'The simple terms for playing I Know Your Age: a free entertainment game; the guessed age is an estimate for fun, not a verified fact.',
      h1: 'Terms of Use',
      sections: [
        {
          h: 'A game, for fun',
          body: [
            'I Know Your Age is an entertainment game. The age it guesses is an estimate generated from your answers — it is not a measurement, a verification, or proof of anyone’s age, and it must not be used as one (for example for age checks or official documents).',
          ],
        },
        {
          h: 'Free to play',
          body: [
            'The game is free and needs no account. We may update the questions, translations or design at any time, and we do not guarantee that the site will always be available or error-free.',
          ],
        },
        {
          h: 'Acceptable use',
          body: [
            'Play as much as you like. Please do not try to disrupt the site, overload it with automated requests, or present a result image as an official document.',
          ],
        },
        {
          h: 'Content and sharing',
          body: [
            'The questions, text and design of this site belong to the site operator or its licensors. The result images the game generates are yours to save and share for personal, non-commercial use.',
          ],
        },
        {
          h: 'No warranty',
          body: [
            'The site is provided “as is”, without warranties of any kind. To the extent permitted by law, we are not liable for any loss arising from using the site or relying on a guessed age.',
          ],
        },
      ],
    },
    contact: {
      nav: 'Contact',
      metaTitle: 'Contact — I Know Your Age',
      metaDesc: 'How to reach the I Know Your Age team, report a bug or a wrong question, and where to ask about privacy.',
      h1: 'Contact',
      sections: [
        {
          h: 'The best way to reach us',
          body: [
            'This site has no contact form and no support desk — the game collects nothing, so there is no account or result we could look up for you. If your game went wrong, just play again; nothing was saved anywhere.',
          ],
        },
        {
          h: 'Report a bug or a wrong question',
          body: [
            'If you spot a bug, a translation mistake, or a question you think is dated wrong, we want to know. A feedback inbox for this site is being set up and will be listed on this page.',
          ],
          },
        {
          h: 'Privacy questions',
          body: ['For anything about privacy, please read the privacy policy first — it explains what the game does (and does not do) with your answers.'],
        },
      ],
    },
  },
};

PAGES.ja = {
  'how-it-works': {
    nav: '遊び方',
    metaTitle: '遊び方 — あなたの年齢を当てます',
    metaDesc:
      '「あなたの年齢を当てます」が流行りの記憶から年齢を当てる仕組み：297問、各年齢の確率、記憶の地層、そして最後の一度だけの言い当て。',
    h1: '「あなたの年齢を当てます」の仕組み',
    sections: [
      {
        h: 'あなた自身のことではなく、思い出から始まります',
        body: [
          'このゲームは、生まれた年や学校など、あなた自身のことを直接は聞きません。代わりに、ゲーム機、アニメ、曲、学校の校庭にあったものなどを見せて、どれくらい知っているか——使った、見た、名前だけ知っている、まったく知らない——を聞きます。',
          '297問すべてが「それが流行った時期」と「いちばん親しんだ年齢層」に結びついています。10歳のときに毎日使っていたものは大きなヒントになり、まったく聞いたことがないものも、同じくらい雄弁です。',
        ],
      },
      {
        h: 'すべての年齢に確率があります',
        body: [
          '裏側では、6歳から85歳までの各年齢の確率を保持し、答えるたびに更新しています。上の「確信度」は、その確率がどれだけ一点に集まったかを示します——ありそうな年齢の幅が狭まるほど、パーセントが上がります。',
          '次の質問は、常に「最も範囲を絞り込める」と見込まれるものが選ばれます。「知らない」が続くと、別の角度から基本を確認するために、生活や家のことについての広めの質問が割り込むこともあります。',
        ],
      },
      {
        h: '「知らない」が役に立つ理由',
        body: [
          '知らないことも、立派な証拠です。そのものと一緒に育った人はたいていそれと分かり、20年後に生まれた人は知らないことが多いからです。適当に答えるとノイズが増えますが、正直な「知らない」は年齢の候補をきれいに消してくれます——だから正直な答えほど、最後の言い当てが鋭くなります。',
        ],
      },
      {
        h: '記憶の地層と決め手',
        body: [
          '自信が持てたら——12問から45問のどこかで——質問は止まり、一度だけ年齢を言い当てます。結果画面では、あなたの答えが1970年代から2020年代までの「記憶の地層」に年代ごとにまとめられます。「化石」（知っていた・使っていたもの）がいちばん多い層が、だいたいあなたの育った年代です。',
          'そして、年齢の範囲を最も絞り込んだ答えが「決め手」として示されます。最初に使った電話、ゲーム機、メッセンジャーといった、小さなものが決め手になることがよくあります。',
        ],
      },
      {
        h: '外れてしまったら',
        body: [
          '言い当てのあと、当たったかどうかを伝えることができます。外れていたら、本当の年齢を入れて、どれくらいずれていたかを見ることもできます。その数字はあなたの結果画面に表示されるだけで、ゲーム内のすべてと同じく、ブラウザの中にとどまります。',
        ],
      },
    ],
  },
  about: {
    nav: 'このゲームについて',
    metaTitle: 'このゲームについて — あなたの年齢を当てます',
    metaDesc:
      '「あなたの年齢を当てます」は、育ってきた流行りの記憶から年齢を当てる無料のブラウザゲームです。297問、5言語、登録不要。',
    h1: '「あなたの年齢を当てます」について',
    sections: [
      {
        h: '懐かしさでできた年齢当てゲーム',
        body: [
          '「あなたの年齢を当てます」は、ブラウザで遊べる小さな無料ゲームです。流行、ゲーム、番組、曲、日常のあれこれについての思い出を12〜45問聞いて、最後にあなたの年齢を一度だけ言い当て、決め手になった「記憶の地層」を見せてくれます。',
          'インストールも登録も不要です。1ゲームは数分で終わり、最後には結果の画像を保存したりシェアしたりできます。',
        ],
      },
      {
        h: '5言語、ひとつの問題集',
        body: [
          'ゲームは英語、日本語、簡体中文、スペイン語、ポルトガル語に完全翻訳されています。どの言語でも同じ297問の問題集と同じ推測エンジンで遊びます——問われる思い出は同一で、言葉だけが変わるので、どの言語の結果も同じ意味を持ちます。',
        ],
      },
      {
        h: 'これはテストではありません',
        body: [
          'これはテストでも測定でも科学でもありません。言い当てはあなたの答えから作られる娯楽のための推定です。同い年の二人でも答えが違えば結果は変わります。特にレトロ好きな人や、二つの文化のあいだで育った人はそうです。当たったら楽しい手品、外れたら「記憶が若い（あるいは老成している）」褒め言葉として受け取ってください。',
        ],
      },
      {
        h: '短くまとめると',
        list: [
          '無料、登録不要、ダウンロード不要',
          'すべてブラウザの中で動作',
          '全297問、1ゲームで12〜45問、答えに合わせて変化',
          '最後に一度だけ言い当て、記憶の地層と決め手を表示',
          'English、日本語、简体中文、Español、Português に対応',
        ],
      },
    ],
  },
  'privacy-policy': {
    nav: 'プライバシー',
    metaTitle: 'プライバシーポリシー — あなたの年齢を当てます',
    metaDesc:
      '「あなたの年齢を当てます」はすべてブラウザの中で動きます。登録不要、ゲーム自体はCookieを設定せず、答えがサーバーに送られることはありません。',
    h1: 'プライバシーポリシー',
    sections: [
      {
        h: '最終更新：2026年11月25日',
        body: ['このページでは、iknowyourage.games で「あなたの年齢を当てます」を遊ぶとき、あなたの情報がどう扱われるかを、平易な言葉で説明します。'],
      },
      {
        h: 'ゲームは何も集めません',
        body: [
          'ゲームはあなたの端末のブラウザの中で完全に動作します。アカウントも登録フォームもありません。あなたの答え、当てた年齢、外れたときに入力する本当の年齢は、すべてブラウザの中だけで処理され、私たちに送られることも、サーバーに保存されることもありません。',
          'ページを閉じれば、ゲームは何もかも忘れます。選んだ言語はページのアドレスの一部（例：/ja/）であり、あなたについてのプロファイルとして保存されるものではありません。',
        ],
      },
      {
        h: 'ゲーム内にトラッキングはありません',
        body: ['ゲーム自体はCookieを設定せず、解析ツール、広告、SNSのトラッカーも含みません。'],
      },
      {
        h: 'ホスティングのログについて',
        body: [
          'どのウェブサイトとも同様に、このサイトはホスティング事業者（Cloudflare）によって配信されています。ページの配信と不正利用からの保護のために、事業者がIPアドレス、ブラウザの種類、リクエストされたページといった標準的な技術情報をサーバーログで処理する場合があります。私たちはこの情報をプレイヤーの特定やプロファイル作成に使うことはありません。',
        ],
      },
      {
        h: '結果のシェアについて',
        body: [
          'シェア用の画像はブラウザの中で生成されます。保存するだけなら、あなたの端末から何も出ていきません。SNSに投稿したり誰かに送ったりした場合、そのコピーは本ポリシーではなく、利用したサービスのポリシーに従います。',
        ],
      },
      {
        h: 'お問い合わせ',
        body: ['プライバシーについてのご質問は、お問い合わせページをご覧ください。'],
      },
    ],
  },
  terms: {
    nav: '利用規約',
    metaTitle: '利用規約 — あなたの年齢を当てます',
    metaDesc:
      '「あなたの年齢を当てます」のシンプルな利用規約：無料の娯楽ゲームです。当てた年齢は楽しむための推定であり、確認された事実ではありません。',
    h1: '利用規約',
    sections: [
      {
        h: '楽しむためのゲームです',
        body: [
          '「あなたの年齢を当てます」は娯楽のためのゲームです。当てる年齢はあなたの答えから生成される推定であり、測定でも確認でも、誰かの年齢の証明でもありません。年齢確認や公的書類などに使ってはいけません。',
        ],
      },
      {
        h: '無料で遊べます',
        body: [
          'ゲームは無料で、アカウントも不要です。質問、翻訳、デザインはいつでも更新されることがあり、サイトが常に利用可能でエラーがないことは保証されません。',
        ],
      },
      {
        h: 'ご利用にあたって',
        body: [
          '好きなだけ遊んでください。サイトの妨害、自動化された大量のリクエストによる負荷、結果画像を公的書類のように見せかける行為はご遠慮ください。',
        ],
      },
      {
        h: 'コンテンツとシェア',
        body: [
          'このサイトの質問、文章、デザインは、サイト運営者またはそのライセンサーに帰属します。ゲームが生成する結果画像は、個人的かつ非商用の範囲で保存・シェアできます。',
        ],
      },
      {
        h: '無保証',
        body: [
          '本サイトは「現状のまま」で提供され、いかなる保証もありません。法律で許される範囲で、本サイトの利用、または当てた年齢に依拠したことによる損失について責任を負いません。',
        ],
      },
    ],
  },
  contact: {
    nav: 'お問い合わせ',
    metaTitle: 'お問い合わせ — あなたの年齢を当てます',
    metaDesc: '「あなたの年齢を当てます」への連絡方法：不具合や質問の間違いの報告、プライバシーについてのご質問。',
    h1: 'お問い合わせ',
    sections: [
      {
        h: 'いちばん確実な連絡方法',
        body: [
          'このサイトにはお問い合わせフォームもサポート窓口もありません——ゲームは何も集めないので、私たちがあなたの結果を調べることもできません。ゲームがうまくいかなかったら、もう一度遊んでみてください。どこにも何も保存されていません。',
        ],
      },
      {
        h: '不具合や質問の間違いの報告',
        body: [
          '不具合、翻訳の間違い、年代設定がおかしいと思う質問に気づいたら、ぜひ教えてください。このサイト専用のフィードバック窓口は現在準備中で、でき次第このページに掲載します。',
        ],
      },
      {
        h: 'プライバシーについてのご質問',
        body: ['プライバシーについては、まずプライバシーポリシーをご覧ください——ゲームがあなたの答えをどう扱うか（そして扱わないか）を説明しています。'],
      },
    ],
  },
};

PAGES.zh = {
  'how-it-works': {
    nav: '玩法说明',
    metaTitle: '玩法说明 — 我知道你几岁',
    metaDesc:
      '《我知道你几岁》如何把流行记忆变成年龄猜测：297 道题、为 6 到 85 岁的每个年龄维护概率、记忆地层，以及最后的一次猜测。',
    h1: '《我知道你几岁》是怎么猜的',
    sections: [
      {
        h: '从回忆开始，而不是问你本人',
        body: [
          '游戏从不问你的出生年份、学校，或任何直接关于你的问题。它给你看的是一样样东西——一台游戏机、一部动画、一首歌、校园里的一件小物——然后问你有多熟悉它：用过、见过、只听过名字，还是完全不知道？',
          '297 道题每一道都对应着某样东西流行的年份，以及最熟悉它的人的年龄段。十岁时天天用的东西很能说明问题；完全没听过的东西，同样也是线索。',
        ],
      },
      {
        h: '为每个年龄维护一个概率',
        body: [
          '在背后，游戏为 6 到 85 岁的每个年龄维护一个概率，每答一题就更新一次。顶部的“把握度”显示这些概率集中到了什么程度——可能的年龄范围越窄，百分比就越高。',
          '下一道题永远挑预计最能缩小范围的那一道。如果你连续多次选“不知道”，游戏会插入一道更宽泛的画像题或生活题，从另一个角度确认基本情况。',
        ],
      },
      {
        h: '为什么“不知道”也有用',
        body: [
          '不知道某样东西，本身就是证据。和它一起长大的人通常一眼就能认出来；晚出生二十年的人往往根本没见过。乱猜只会增加噪声，而诚实的“不知道”能干净地排除掉一批年龄——所以诚实作答，最后的猜测反而更准。',
        ],
      },
      {
        h: '记忆地层和决定性一手',
        body: [
          '当游戏有足够把握时——在 12 到 45 题之间的某处——它会停下来，只猜一次。在结果页，你的答案会被按年代归入“记忆地层”，从 1970 年代到 2020 年代。“化石”（你知道、用过的东西）最多的那一层，通常就是你长大的年代。',
          '其中一道题会被标为“决定性一手”：最能缩小你年龄范围的那一个回答。它往往是很小的东西——你用的第一部电话、第一台游戏机、第一个聊天软件。',
        ],
      },
      {
        h: '如果猜错了',
        body: [
          '揭示之后，你可以告诉它猜得对不对。如果猜错了，你可以输入自己的真实年龄，看看差了多少。这个数字只会显示在你自己的结果页上——和游戏里的一切一样，它只留在你的浏览器里。',
        ],
      },
    ],
  },
  about: {
    nav: '关于',
    metaTitle: '关于 — 我知道你几岁',
    metaDesc:
      '《我知道你几岁》是一款免费的浏览器游戏，根据你成长过程中的流行记忆猜出你的年龄：297 道题、5 种语言、无需注册。',
    h1: '关于《我知道你几岁》',
    sections: [
      {
        h: '一款用怀旧做成的猜年龄游戏',
        body: [
          '《我知道你几岁》是一款在浏览器里运行的小型免费游戏。它会问你记得的流行、游戏、节目、歌曲和日常用品——一共 12 到 45 道题——然后只猜一次你的确切年龄，并把“出卖”你的记忆地层展示给你看。',
          '不用安装，也不用注册。一局只要几分钟，最后你可以把结果图保存下来或分享出去。',
        ],
      },
      {
        h: '五种语言，同一套题库',
        body: [
          '游戏已完整翻译成英语、日语、简体中文、西班牙语和葡萄牙语。每种语言用的都是同一套 297 题题库和同一个猜测引擎——被问到的回忆完全相同，只是文字不同，所以一种语言下的结果和另一种语言下的结果含义一致。',
        ],
      },
      {
        h: '它不是什么',
        body: [
          '它不是考试，不是测量，更不是科学。猜测是根据你的答案生成的娱乐性估计：两个同龄的人答案不同，结果就可能不同，尤其是怀旧爱好者、或在两种文化之间长大的人。猜中了，就当是个好玩的小把戏；猜错了，就当是在夸你的记忆年轻（或者老成）。',
        ],
      },
      {
        h: '简短版',
        list: [
          '免费游玩，无需注册，无需下载',
          '完全在你的浏览器里运行',
          '题库共 297 题，每局问 12–45 题，随你的答案自适应变化',
          '最后只猜一次，并展示你的记忆地层和决定性一手',
          '支持 English、日本語、简体中文、Español 和 Português',
        ],
      },
    ],
  },
  'privacy-policy': {
    nav: '隐私',
    metaTitle: '隐私政策 — 我知道你几岁',
    metaDesc:
      '《我知道你几岁》完全在你的浏览器里运行：没有账号，游戏本身不设置 Cookie，你的答案永远不会被发送到服务器。',
    h1: '隐私政策',
    sections: [
      {
        h: '最后更新：2026 年 11 月 25 日',
        body: ['本页用平实的话说明：当你在 iknowyourage.games 上玩《我知道你几岁》时，你的信息会被如何处理。'],
      },
      {
        h: '游戏不收集任何东西',
        body: [
          '游戏完全在你的设备上、在你的浏览器里运行。没有账号，也没有注册表单。你的答案、游戏猜出的年龄、以及猜错后你可能输入的真实年龄，都只在你的浏览器里处理——不会发送给我们，也不会保存在任何服务器上。',
          '关掉页面，游戏就忘掉一切。你选择的语言是页面地址的一部分（比如 /zh/），不是一份关于你的存档。',
        ],
      },
      {
        h: '游戏内没有追踪',
        body: ['游戏本身不设置任何 Cookie，也不包含分析、广告或社交媒体追踪器。'],
      },
      {
        h: '托管日志',
        body: [
          '和任何网站一样，本站由托管服务商（Cloudflare）提供访问。为了传送页面、保护网站免受滥用，服务商可能会在服务器日志中处理标准的技术信息——例如你的 IP 地址、浏览器类型和所请求的页面。我们不会用这些信息来识别玩家或建立用户画像。',
        ],
      },
      {
        h: '分享你的结果',
        body: [
          '分享图是在你的浏览器里生成的图片。只保存它的话，什么都不会离开你的设备。如果你把它发到社交网络或发给别人，那份副本受你所用服务的政策约束，而不是本政策。',
        ],
      },
      {
        h: '有问题？',
        body: ['如果你对隐私有疑问，请看联系页，了解如何联系我们。'],
      },
    ],
  },
  terms: {
    nav: '条款',
    metaTitle: '使用条款 — 我知道你几岁',
    metaDesc:
      '玩《我知道你几岁》的简单条款：一款免费的娱乐游戏；猜出的年龄是供娱乐的估计，不是经核实的事实。',
    h1: '使用条款',
    sections: [
      {
        h: '一款供娱乐的游戏',
        body: [
          '《我知道你几岁》是一款娱乐游戏。它猜出的年龄是根据你的答案生成的估计——不是测量，不是核实，更不是任何人年龄的证明，不得用作证明（例如年龄核验或官方文件）。',
        ],
      },
      {
        h: '免费游玩',
        body: [
          '游戏免费，也不需要账号。我们可能随时更新题目、翻译或设计，也不保证网站永远可用或毫无错误。',
        ],
      },
      {
        h: '可接受的使用方式',
        body: ['想玩多久都可以。请不要试图破坏网站、用自动化请求让它过载，或把结果图冒充成官方文件。'],
      },
      {
        h: '内容与分享',
        body: [
          '本站的题目、文字和设计归网站运营者或其授权方所有。游戏生成的结果图可以由你保存，并用于个人、非商业目的的分享。',
        ],
      },
      {
        h: '无担保',
        body: [
          '本网站按“现状”提供，不作任何形式的担保。在法律允许的范围内，我们不对因使用本站或依赖猜测年龄而造成的任何损失负责。',
        ],
      },
    ],
  },
  contact: {
    nav: '联系',
    metaTitle: '联系 — 我知道你几岁',
    metaDesc: '如何联系《我知道你几岁》团队：报告 bug 或题目错误，以及隐私问题的咨询方式。',
    h1: '联系我们',
    sections: [
      {
        h: '最有效的联系方式',
        body: [
          '本站没有联系表单，也没有客服——游戏不收集任何东西，所以我们也没有任何账号或结果可以替你查询。如果一局玩得不对劲，再玩一局就好；任何东西都没有被保存下来。',
        ],
      },
      {
        h: '报告 bug 或题目错误',
        body: [
          '如果你发现了 bug、翻译错误，或觉得某道题的年代标错了，我们很想知道。本站的反馈邮箱正在设置中，设好后会公布在这一页。',
        ],
      },
      {
        h: '隐私相关问题',
        body: ['关于隐私的问题，请先读隐私政策——它说明了游戏对你的答案做了什么（以及没做什么）。'],
      },
    ],
  },
};

PAGES.es = {
  'how-it-works': {
    nav: 'Cómo funciona',
    metaTitle: 'Cómo funciona — Sé Tu Edad',
    metaDesc:
      'Cómo Sé Tu Edad convierte tus recuerdos de la cultura pop en una predicción de edad: 297 preguntas, una probabilidad para cada edad entre 6 y 85 años, estratos de memoria y una única predicción final.',
    h1: 'Cómo funciona Sé Tu Edad',
    sections: [
      {
        h: 'Empieza por los recuerdos, no por preguntas sobre ti',
        body: [
          'El juego nunca te pregunta tu año de nacimiento, tu colegio ni nada sobre ti directamente. En su lugar te muestra cosas —una consola, unos dibujos animados, una canción, un objeto del patio del colegio— y te pregunta cuánto las conoces: ¿lo usaste, lo viste, solo te suena el nombre o no lo conoces en absoluto?',
          'Cada una de las 297 preguntas está ligada a los años en que esa cosa estuvo de moda y a las edades de quienes mejor la conocían. Algo que usabas a diario a los diez años dice mucho; algo de lo que nunca has oído hablar también dice algo.',
        ],
      },
      {
        h: 'Una probabilidad para cada edad',
        body: [
          'Entre bastidores, el juego mantiene una probabilidad para cada edad entre 6 y 85 años y la actualiza después de cada respuesta. El medidor de confianza de la parte superior muestra cuánto se han concentrado esas probabilidades: cuanto más estrecho es el abanico de edades probables, mayor es el porcentaje.',
          'La siguiente pregunta siempre es la que se espera que estreche más el abanico. Si respondes «No lo sé» varias veces seguidas, el juego intercala una pregunta más amplia, de perfil o de vida en casa, para comprobar lo básico desde otro ángulo.',
        ],
      },
      {
        h: 'Por qué «No lo sé» ayuda',
        body: [
          'No conocer algo también es una pista. Quien creció con una cosa suele reconocerla; quien nació veinte años después, a menudo no. Inventarse respuestas añade ruido, mientras que un «No lo sé» honesto descarta edades limpiamente —por eso las respuestas honestas producen una predicción final más afinada.',
        ],
      },
      {
        h: 'Estratos de memoria y la respuesta decisiva',
        body: [
          'Cuando el juego está lo bastante seguro —en algún punto entre las 12 y las 45 preguntas— se detiene y hace su única predicción. En la pantalla de resultados, tus respuestas se agrupan por década en estratos de memoria, desde los años 70 hasta los 2020. La capa con más «fósiles» (cosas que conocías y usabas) suele ser la década en la que creciste.',
          'Una respuesta se destaca como la decisiva: la que más estrechó tu abanico de edad. A menudo es algo pequeño: el primer teléfono, la primera consola o el primer programa de mensajería que usaste.',
        ],
      },
      {
        h: 'Si la predicción falla',
        body: [
          'Después de la revelación puedes decir si el juego acertó. Si falló, puedes introducir tu edad real para ver por cuánto se desvió. Ese número solo se muestra en tu propia pantalla de resultados —como todo lo demás en el juego, se queda en tu navegador.',
        ],
      },
    ],
  },
  about: {
    nav: 'Acerca de',
    metaTitle: 'Acerca de — Sé Tu Edad',
    metaDesc:
      'Sé Tu Edad es un juego gratuito de navegador que adivina tu edad a partir de los recuerdos de cultura pop con los que creciste: 297 preguntas, cinco idiomas, sin registro.',
    h1: 'Acerca de Sé Tu Edad',
    sections: [
      {
        h: 'Un juego de adivinar construido con nostalgia',
        body: [
          'Sé Tu Edad es un pequeño juego gratuito que funciona en tu navegador. Te pregunta por las modas, los juegos, las series, las canciones y los objetos cotidianos que recuerdas —entre 12 y 45 preguntas— y después hace una única predicción de tu edad exacta, enseñándote los «estratos de memoria» que te delataron.',
          'No hay nada que instalar ni ninguna cuenta que crear. Una partida dura un par de minutos y, al final, puedes guardar o compartir una imagen de tu resultado.',
        ],
      },
      {
        h: 'Cinco idiomas, un solo banco de preguntas',
        body: [
          'El juego está traducido por completo al inglés, el japonés, el chino simplificado, el español y el portugués. Todos los idiomas juegan con el mismo banco de 297 preguntas y el mismo motor de predicción —los recuerdos sobre los que se pregunta son idénticos, solo cambian las palabras—, así que un resultado en un idioma significa lo mismo que en otro.',
        ],
      },
      {
        h: 'Lo que no es',
        body: [
          'No es un test, ni una medición, ni ciencia. La predicción es una estimación de entretenimiento construida con tus respuestas: dos personas de exactamente la misma edad pueden responder de forma distinta y obtener resultados distintos, sobre todo los fans de lo retro y quienes crecieron entre dos culturas. Tómate un acierto como un divertido truco de fiesta —y un fallo como un cumplido sobre lo joven (o lo veterana) que es tu memoria.',
        ],
      },
      {
        h: 'La versión corta',
        list: [
          'Gratis, sin registro y sin descargas',
          'Funciona por completo en tu navegador',
          '297 preguntas; entre 12 y 45 por partida, adaptándose a tus respuestas',
          'Una única predicción al final, con tus estratos de memoria y la respuesta decisiva',
          'Disponible en English, 日本語, 简体中文, Español y Português',
        ],
      },
    ],
  },
  'privacy-policy': {
    nav: 'Privacidad',
    metaTitle: 'Política de privacidad — Sé Tu Edad',
    metaDesc:
      'El juego Sé Tu Edad funciona por completo en tu navegador: sin cuentas, sin cookies del propio juego, y tus respuestas nunca se envían a un servidor.',
    h1: 'Política de privacidad',
    sections: [
      {
        h: 'Última actualización: 25 de noviembre de 2026',
        body: ['Esta página explica, con palabras sencillas, qué pasa con tu información cuando juegas a Sé Tu Edad en iknowyourage.games.'],
      },
      {
        h: 'El juego no recoge nada',
        body: [
          'El juego funciona por completo en tu dispositivo, en tu navegador. No hay cuentas ni formularios de registro. Tus respuestas, la edad que el juego predice y la edad real que puedes escribir si falla se procesan solo en tu navegador —no se nos envían ni se guardan en ningún servidor.',
          'Cuando cierras la página, el juego lo olvida todo. El idioma que eliges forma parte de la dirección de la página (por ejemplo /es/), no de un perfil guardado sobre ti.',
        ],
      },
      {
        h: 'Sin rastreo en el juego',
        body: ['El propio juego no establece cookies y no contiene herramientas de analítica, publicidad ni rastreadores de redes sociales.'],
      },
      {
        h: 'Registros del alojamiento',
        body: [
          'Como cualquier sitio web, este sitio lo sirve un proveedor de alojamiento (Cloudflare). Para entregar las páginas y proteger el sitio frente a abusos, el proveedor puede procesar información técnica estándar —como tu dirección IP, el tipo de navegador y las páginas solicitadas— en registros de servidor. No usamos esa información para identificar a los jugadores ni para crear perfiles.',
        ],
      },
      {
        h: 'Compartir tu resultado',
        body: [
          'La tarjeta para compartir es una imagen generada en tu navegador. Si solo la guardas, nada sale de tu dispositivo. Si la publicas en una red social o se la envías a alguien, esa copia se rige por las políticas del servicio que usaste, no por esta política.',
        ],
      },
      {
        h: 'Preguntas',
        body: ['Si tienes alguna pregunta sobre privacidad, consulta la página de contacto para saber cómo escribirnos.'],
      },
    ],
  },
  terms: {
    nav: 'Términos',
    metaTitle: 'Términos de uso — Sé Tu Edad',
    metaDesc:
      'Los términos sencillos para jugar a Sé Tu Edad: un juego de entretenimiento gratuito; la edad predicha es una estimación para divertirse, no un hecho verificado.',
    h1: 'Términos de uso',
    sections: [
      {
        h: 'Un juego, para divertirse',
        body: [
          'Sé Tu Edad es un juego de entretenimiento. La edad que predice es una estimación generada a partir de tus respuestas —no es una medición, ni una verificación, ni una prueba de la edad de nadie, y no debe usarse como tal (por ejemplo, para controles de edad o documentos oficiales).',
        ],
      },
      {
        h: 'Gratis',
        body: [
          'El juego es gratuito y no necesita cuenta. Podemos actualizar las preguntas, las traducciones o el diseño en cualquier momento, y no garantizamos que el sitio esté siempre disponible o libre de errores.',
        ],
      },
      {
        h: 'Uso aceptable',
        body: [
          'Juega todo lo que quieras. Por favor, no intentes interrumpir el sitio, sobrecargarlo con peticiones automatizadas ni presentar una imagen de resultado como si fuera un documento oficial.',
        ],
      },
      {
        h: 'Contenido y compartición',
        body: [
          'Las preguntas, los textos y el diseño de este sitio pertenecen al operador del sitio o a sus licenciantes. Las imágenes de resultado que genera el juego son tuyas para guardarlas y compartirlas con fines personales y no comerciales.',
        ],
      },
      {
        h: 'Sin garantía',
        body: [
          'El sitio se ofrece «tal cual», sin garantías de ningún tipo. En la medida en que lo permita la ley, no somos responsables de ninguna pérdida derivada del uso del sitio o de fiarse de una edad predicha.',
        ],
      },
    ],
  },
  contact: {
    nav: 'Contacto',
    metaTitle: 'Contacto — Sé Tu Edad',
    metaDesc: 'Cómo contactar con el equipo de Sé Tu Edad: informa de un error o de una pregunta incorrecta y consulta tus dudas de privacidad.',
    h1: 'Contacto',
    sections: [
      {
        h: 'La mejor manera de escribirnos',
        body: [
          'Este sitio no tiene formulario de contacto ni servicio de atención —el juego no recoge nada, así que no hay ninguna cuenta ni resultado que podamos consultar por ti. Si una partida salió mal, juega otra; no se guardó nada en ninguna parte.',
        ],
      },
      {
        h: 'Informa de un error o de una pregunta incorrecta',
        body: [
          'Si detectas un error, un fallo de traducción o una pregunta que crees que está mal fechada, queremos saberlo. Estamos preparando un correo de contacto para este sitio y lo publicaremos en esta página.',
        ],
      },
      {
        h: 'Preguntas sobre privacidad',
        body: ['Para cualquier tema de privacidad, lee primero la política de privacidad —explica qué hace el juego (y qué no hace) con tus respuestas.'],
      },
    ],
  },
};

PAGES.pt = {
  'how-it-works': {
    nav: 'Como funciona',
    metaTitle: 'Como funciona — Sei Sua Idade',
    metaDesc:
      'Como o Sei Sua Idade transforma suas lembranças da cultura pop em um palpite de idade: 297 perguntas, uma probabilidade para cada idade de 6 a 85 anos, estratos de memória e um único palpite final.',
    h1: 'Como funciona o Sei Sua Idade',
    sections: [
      {
        h: 'Começa pelas lembranças, não por perguntas sobre você',
        body: [
          'O jogo nunca pergunta seu ano de nascimento, sua escola ou qualquer coisa sobre você diretamente. Em vez disso, ele mostra coisas — um console, um desenho animado, uma música, um objeto do pátio da escola — e pergunta o quanto você as conhece: você usou, viu, só ouviu o nome ou não conhece de jeito nenhum?',
          'Cada uma das 297 perguntas está ligada aos anos em que aquela coisa fez sucesso e às idades de quem melhor a conhecia. Algo que você usava todos os dias aos dez anos diz muito; algo de que você nunca ouviu falar também diz algo.',
        ],
      },
      {
        h: 'Uma probabilidade para cada idade',
        body: [
          'Nos bastidores, o jogo mantém uma probabilidade para cada idade de 6 a 85 anos e a atualiza depois de cada resposta. O medidor de confiança no topo mostra o quanto essas probabilidades se concentraram — quanto mais estreita a faixa de idades prováveis, maior a porcentagem.',
          'A próxima pergunta é sempre escolhida para ser a que mais deve estreitar a faixa. Se você responder “Não sei” várias vezes seguidas, o jogo intercala uma pergunta mais ampla, de perfil ou de vida em casa, para conferir o básico por outro ângulo.',
        ],
      },
      {
        h: 'Por que “Não sei” ajuda',
        body: [
          'Não conhecer algo também é uma pista. Quem cresceu com uma coisa geralmente a reconhece; quem nasceu vinte anos depois, muitas vezes não. Chutar respostas adiciona ruído, enquanto um “Não sei” honesto descarta idades de forma limpa — é por isso que respostas honestas produzem um palpite final mais preciso.',
        ],
      },
      {
        h: 'Estratos de memória e a resposta decisiva',
        body: [
          'Quando o jogo está confiante o bastante — em algum ponto entre 12 e 45 perguntas — ele para e faz seu único palpite. Na tela de resultado, suas respostas são agrupadas por década em estratos de memória, dos anos 1970 aos 2020. A camada com mais “fósseis” (coisas que você conhecia e usava) costuma ser a década em que você cresceu.',
          'Uma resposta é destacada como a decisiva: aquela que mais estreitou sua faixa de idade. Muitas vezes é algo pequeno — o primeiro telefone, console ou mensageiro que você usou.',
        ],
      },
      {
        h: 'Se o palpite errar',
        body: [
          'Depois da revelação, você pode dizer se o jogo acertou. Se ele errou, pode digitar sua idade real para ver por quanto foi o erro. Esse número só aparece na sua própria tela de resultado — como tudo no jogo, fica no seu navegador.',
        ],
      },
    ],
  },
  about: {
    nav: 'Sobre',
    metaTitle: 'Sobre — Sei Sua Idade',
    metaDesc:
      'O Sei Sua Idade é um jogo gratuito de navegador que adivinha sua idade pelas lembranças da cultura pop com que você cresceu: 297 perguntas, cinco idiomas, sem cadastro.',
    h1: 'Sobre o Sei Sua Idade',
    sections: [
      {
        h: 'Um jogo de adivinhação feito de nostalgia',
        body: [
          'O Sei Sua Idade é um joguinho gratuito que roda no seu navegador. Ele pergunta sobre as modas, os jogos, os programas, as músicas e os objetos do dia a dia de que você se lembra — entre 12 e 45 perguntas — e então faz um único palpite da sua idade exata, mostrando os “estratos de memória” que entregaram você.',
          'Não há nada para instalar nem conta para criar. Uma partida leva poucos minutos e, no fim, você pode salvar ou compartilhar uma imagem do seu resultado.',
        ],
      },
      {
        h: 'Cinco idiomas, um único banco de perguntas',
        body: [
          'O jogo está totalmente traduzido para inglês, japonês, chinês simplificado, espanhol e português. Todos os idiomas jogam com o mesmo banco de 297 perguntas e o mesmo motor de palpite — as lembranças testadas são idênticas, só mudam as palavras —, então um resultado em um idioma significa o mesmo que em outro.',
        ],
      },
      {
        h: 'O que ele não é',
        body: [
          'Não é um teste, uma medição ou ciência. O palpite é uma estimativa de entretenimento construída a partir das suas respostas: duas pessoas exatamente da mesma idade podem responder de formas diferentes e obter resultados diferentes, especialmente fãs de coisas retrô e quem cresceu entre duas culturas. Trate um acerto como um truque divertido de festa — e um erro como um elogio ao quanto sua memória é jovem (ou experiente).',
        ],
      },
      {
        h: 'A versão curta',
        list: [
          'Grátis, sem cadastro e sem download',
          'Funciona inteiramente no seu navegador',
          '297 perguntas; de 12 a 45 por partida, adaptando-se às suas respostas',
          'Um único palpite no final, com seus estratos de memória e a resposta decisiva',
          'Disponível em English, 日本語, 简体中文, Español e Português',
        ],
      },
    ],
  },
  'privacy-policy': {
    nav: 'Privacidade',
    metaTitle: 'Política de privacidade — Sei Sua Idade',
    metaDesc:
      'O jogo Sei Sua Idade funciona inteiramente no seu navegador: sem contas, sem cookies do próprio jogo, e suas respostas nunca são enviadas a um servidor.',
    h1: 'Política de privacidade',
    sections: [
      {
        h: 'Última atualização: 25 de novembro de 2026',
        body: ['Esta página explica, em palavras simples, o que acontece com suas informações quando você joga Sei Sua Idade em iknowyourage.games.'],
      },
      {
        h: 'O jogo não coleta nada',
        body: [
          'O jogo funciona inteiramente no seu aparelho, no seu navegador. Não há contas nem formulários de cadastro. Suas respostas, a idade que o jogo adivinha e a idade real que você pode digitar se ele errar são processadas apenas no seu navegador — não são enviadas para nós nem guardadas em nenhum servidor.',
          'Quando você fecha a página, o jogo esquece tudo. O idioma que você escolhe faz parte do endereço da página (por exemplo /pt/), não de um perfil guardado sobre você.',
        ],
      },
      {
        h: 'Sem rastreamento no jogo',
        body: ['O próprio jogo não define cookies e não contém ferramentas de análise, publicidade ou rastreadores de redes sociais.'],
      },
      {
        h: 'Registros da hospedagem',
        body: [
          'Como qualquer site, este site é entregue por um provedor de hospedagem (Cloudflare). Para servir as páginas e proteger o site contra abusos, o provedor pode processar informações técnicas padrão — como seu endereço IP, o tipo de navegador e as páginas solicitadas — em registros de servidor. Não usamos essas informações para identificar jogadores ou criar perfis.',
        ],
      },
      {
        h: 'Compartilhar seu resultado',
        body: [
          'O cartão de compartilhamento é uma imagem gerada no seu navegador. Se você apenas salvá-lo, nada sai do seu aparelho. Se você postá-lo em uma rede social ou enviá-lo a alguém, essa cópia é regida pelas políticas do serviço que você usou, não por esta política.',
        ],
      },
      {
        h: 'Dúvidas',
        body: ['Se você tiver alguma dúvida sobre privacidade, veja a página de contato para saber como falar conosco.'],
      },
    ],
  },
  terms: {
    nav: 'Termos',
    metaTitle: 'Termos de uso — Sei Sua Idade',
    metaDesc:
      'Os termos simples para jogar Sei Sua Idade: um jogo de entretenimento gratuito; a idade adivinhada é uma estimativa para diversão, não um fato verificado.',
    h1: 'Termos de uso',
    sections: [
      {
        h: 'Um jogo, para se divertir',
        body: [
          'O Sei Sua Idade é um jogo de entretenimento. A idade que ele adivinha é uma estimativa gerada a partir das suas respostas — não é uma medição, uma verificação ou prova da idade de ninguém, e não deve ser usada como tal (por exemplo, para verificações de idade ou documentos oficiais).',
        ],
      },
      {
        h: 'Grátis para jogar',
        body: [
          'O jogo é gratuito e não precisa de conta. Podemos atualizar as perguntas, as traduções ou o design a qualquer momento, e não garantimos que o site esteja sempre disponível ou livre de erros.',
        ],
      },
      {
        h: 'Uso aceitável',
        body: [
          'Jogue quanto quiser. Por favor, não tente interromper o site, sobrecarregá-lo com solicitações automatizadas ou apresentar uma imagem de resultado como se fosse um documento oficial.',
        ],
      },
      {
        h: 'Conteúdo e compartilhamento',
        body: [
          'As perguntas, os textos e o design deste site pertencem ao operador do site ou aos seus licenciadores. As imagens de resultado que o jogo gera são suas para salvar e compartilhar para uso pessoal e não comercial.',
        ],
      },
      {
        h: 'Sem garantia',
        body: [
          'O site é fornecido “como está”, sem garantias de qualquer tipo. Na medida permitida por lei, não somos responsáveis por qualquer perda decorrente do uso do site ou de confiar em uma idade adivinhada.',
        ],
      },
    ],
  },
  contact: {
    nav: 'Contato',
    metaTitle: 'Contato — Sei Sua Idade',
    metaDesc: 'Como falar com a equipe do Sei Sua Idade: relate um bug ou uma pergunta errada e tire dúvidas sobre privacidade.',
    h1: 'Contato',
    sections: [
      {
        h: 'A melhor forma de falar conosco',
        body: [
          'Este site não tem formulário de contato nem central de suporte — o jogo não coleta nada, então não há nenhuma conta ou resultado que possamos consultar por você. Se uma partida deu errado, jogue de novo; nada foi guardado em lugar nenhum.',
        ],
      },
      {
        h: 'Relate um bug ou uma pergunta errada',
        body: [
          'Se você encontrar um bug, um erro de tradução ou uma pergunta que acha que está datada errado, queremos saber. Estamos preparando um e-mail de feedback para este site e ele será publicado nesta página.',
        ],
      },
      {
        h: 'Dúvidas sobre privacidade',
        body: ['Para qualquer assunto de privacidade, leia primeiro a política de privacidade — ela explica o que o jogo faz (e não faz) com suas respostas.'],
      },
    ],
  },
};
