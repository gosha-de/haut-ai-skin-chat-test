const repoHref = 'https://github.com/gosha-de/haut-ai-skin-chat-test';

export const start = {
  byline: 'Mikhail Solomonov’s test assignment',
  logo: 'Haut.AI',
  title: 'Skin.Chat returning user',
  intro: [
    {
      title: 'Task',
      text: [
        'A shopper talked to Skin.Chat on a brand’s website a few weeks ago and got a skincare routine. Design why and how they come back, what they get when they do, and how they see their progress since the last visit.',
      ],
    },
    {
      title: 'Why people come back',
      text: [
        'We did research showing that in weeks 2–4 most people see no real change in the mirror and start to doubt the routine. So I designed the return to answer their question: “Why is there no change? Is it working at all?” The goal is to clear up the doubt and keep them going.',
      ],
    },
    {
      title: 'How people come back',
      text: [
        'At that moment they’re most likely in front of the mirror, not on the brand’s site or in our chat. So we reach out the classic way—by email.',
      ],
    },
    {
      title: 'What they get and how they see progress',
      text: [
        'There’s most likely no visible change yet, so we help them get past the doubt: check that everything is going as planned, and fix any issues. Progress is in how they feel and the path itself.',
        [
          'We help them notice a change in how their skin feels, with a short questionnaire.',
          'We show where they are on the path, with a progress line.',
          'We compare the old and new photos to show any visible difference.',
          'We suggest corrections to their routine, if needed.',
          'We give them a next step, so they feel on track.',
        ],
      ],
    },
  ],

  open: 'See the prototype',
  openHref: '#/story',
  repo: 'GitHub repo',
  repoHref,

  questions: [
    {
      title: 'How do they come back?',
      text: [
        'I designed the week-3 email. If they ignore it, one follow-up goes 5 days later and says it’s the last one. If they ignore that too, we stop until they come back on their own.',
        'If they check in, we ask again at week 8, with the same rule. Any later email works the same way. Apart from that, emails stop only when they unsubscribe.',
        { title: 'Other ways back I didn’t design' },
        [
          'A card in the box with their routine and a QR code.',
          'A “how does your skin feel?” check a few days after delivery, when a first bad reaction could show.',
          'A refill message, timed per product.',
          'Nudges from the chat button on the order, product or returns page.',
          'Honest advice in the cart when a product doesn’t suit them.',
          '“Add to calendar” for the next check.',
          'The change of season.',
          'WhatsApp, for shoppers who opted in.',
        ],
      ],
    },
    {
      title: 'Which reasons did I consider, and why this one?',
      text: [
        'In weeks 2–4 people see no change in the mirror and start to wonder: “Am I doing it right, or am I doing something wrong?” An honest answer to that is worth coming back for. I picked support in this doubt because it’s a breaking point: this is where their trust in the routine starts to weaken.',
        'There are more potential reasons.',
        { title: 'They come to the chat on purpose' },
        [
          'Just for fun: they enjoyed the face analysis and want to check again, and watching the numbers go up feels good.',
          'How do I use it? Order, morning or night, how much.',
          'Can I add this? A product seen on social media, a gift, a trend: does it fit my routine?',
          'The chat as their own independent dermatologist: a flare, hormones, a new concern, any skin question.',
        ],
        { title: 'They’re on the site for their own business' },
        'They come to the site for the reasons below, and we catch them on the way: the chat helps them do it right there, or fixes a problem before it grows.',
        [
          'Checking an order or delivery.',
          'Refill. They come to buy again.',
          'Buying or looking at a product. They ask the chat about it, it answers, then uses the moment to check in.',
          'Return. The chat on the returns page asks what went wrong and offers a fix: use it less often, pause it, swap it.',
          'Bad review. The chat on the product page offers help first, and they can still post any review anywhere.',
        ],
      ],
    },
    {
      title: 'What if there are no results yet, or they got worse?',
      text: [
        'I designed the “no change” path. The “all good” and “got worse” paths are left out of the prototype.',
        'Thinking about the bad case, I decided never to hide a result, and to compare only with their own start. When it got worse, the chat goes step by step:',
        [
          'Check the analysis: “Was this in similar light, without make-up?” If not, they retake the photo. A small dip is normal between two photos.',
          'Fix the routine: a few questions to find the cause, then one fix, like using a product less often. The chat checks again in about 2 weeks.',
          'See a dermatologist if the fix didn’t help, or right away if it burns or the redness spreads.',
        ],
      ],
    },

    {
      title: 'What did I look at in other products?',
      text: [
        { title: 'Other products' },
        [
          'Skin-score apps: Neutrogena Skin360, La Roche-Posay Spotscan, Barefaced Skin Coach.',
          'Subscriptions and online dermatology: Proven, Curology, Dermatica, Skin+Me.',
          'Refill emails, and chat assistants that remember the shopper.',
        ],
        { title: 'What I looked at in them' },
        [
          'How they bring people back.',
          'How they ask permission to send reminders, and what they do when the shopper says no.',
          'How they show progress.',
          'What they say when nothing changed or it got worse.',
          'Whether anyone already uses my return ideas, like reminders on the site or a printed card in the order.',
        ],
        { title: 'Reviews' },
        [
          'Trustpilot and Reviews.io reviews of Curology, Skin+Me, Dermatica and Proven.',
          '1,338 App Store reviews of 13 similar apps, like Musely, Nolla Derm and Mary Kay Skin Analyzer. The main competitors have no app.',
          'Press tests of AI skin apps, like the one by Which?.',
        ],
        { title: 'Shoppers' },
        [
          'Who they are, and where they buy skincare.',
          'What a routine looks like, and how it changes week by week.',
          'How they decide whether it’s working.',
          'What stops them, and why they don’t come back.',
          'What they fear: wasted money, worse skin, being sold to, trusting AI, sharing their face, a wrong score, being judged.',
          'What makes them stick with a routine.',
          'Their own words, mostly from forums like Mumsnet.',
        ],
      ],
    },
    {
      title: 'Who did I talk to?',
      text: [
        'Two women, in two informal interviews. Neither has used an AI skin check, so neither is exactly our shopper. It was a check on the desk research, not a study.',
        { title: 'What they told me' },
        [
          'They trust a person with their skin, not a scanner: a dermatologist, or a dermatologist-blogger.',
          'Whether a new product suits them is decided in days, by feel. If it doesn’t, it’s given away or dropped quietly, and the brand never hears why.',
          'Once they know a product, they refill when it runs low, with no reminder.',
          'One asks ChatGPT about ingredients and origin before buying.',
          'Their routines are mixed: gifts, bloggers’ picks and other brands.',
        ],
      ],
    },
    {
      title: 'How would we know it works?',
      text: [
        'The week-3 check is there to keep them going. If they come back at week 8, when change usually starts to show, it worked.',
        'But we can check sooner and cheaper. Each step goes ahead only if the last one works:',
        [
          'Talk to a few shoppers 3 weeks into a routine. Nothing is built. This is our cheap test.',
          'Send the week-3 email alone, and count how many tap an answer.',
          'Add the chat. Our metric: of those who got the email, the share who finish the check-in and keep the week-8 check.',
        ],
      ],
    },

    {
      title: 'What can a brand change, and what stays fixed?',
      text: [
        { title: 'A brand changes' },
        [
          'Its name and logo.',
          'One colour. Buttons, soft tints, the chat’s avatar and the page background are made from it.',
          'The font.',
          'The tone of voice, in the lines where it shows: greetings, short replies, the email’s opening.',
          'The catalog: product names, photos and how to use each one.',
        ],
        { title: 'Fixed for every brand' },
        [
          'The layout: skin.chat’s own parts.',
          'The flow: the email, the check-in, the progress view, the next step.',
          'How progress is shown and scored.',
          'The honest handling of bad results.',
          'When messages stop.',
        ],
        'To try it, switch brands with the circles on Maya’s page.',
      ],
    },

    {
      title: 'What did I ask Claude to do?',
      text: [
        'I asked Claude to do everything. But I don’t write big foundational prompts. Instead, I create docs and workflows for Claude to work from. I also don’t keep one long chat: I run several, and start a new one often to keep the context clean.',
        'Here’s what I did with Claude, step by step:',
        [
          'Turned the brief’s requirements into CLAUDE.md, the instructions Claude reads in every chat.',
          'Did user research and a competitor analysis, based on those requirements.',
          'Brainstormed a draft solution from the research.',
          'Turned the draft into user flows.',
          'Turned the user flows into a build plan with the technical requirements.',
          'Built the prototype.',
          'Fixed it together in dialogue, step by step.',
          'Wrote the answers to the brief’s questions on this page.',
        ],
        { text: 'You can see all my docs on {link}.', label: 'GitHub', href: repoHref },
      ],
    },
    {
      title: 'What did I change by hand?',
      text: ['Nothing. Claude did everything, with me in control.'],
    },
    {
      title: 'Where didn’t Claude help?',
      text: [
        'Claude is great at things that are clear and well known. But it struggled with the story of this case, and with making Maya’s flow feel smooth and caring.',
      ],
    },
  ],

  end: 'That’s all, thanks!',

  story: {
    title: 'This is {name}',
    text: [
      'She did a face scan and bought a routine from {brand}.',
      'After about 3 weeks of using it, she sees no real change in the mirror and starts to doubt it.',
      'This is when she gets our email.',
    ],
    open: 'Open email',
    openHref: '#/email',
    back: 'Back to the start',
    backHref: '#/',
    brands: 'Brand',
    closeUp: { file: 'sample.jpg', zoom: 2.3, focus: '50% 46%' },
    alt: '{name}. A sample face, not a real person.',
  },
};

export const demo = {
  notPlayed: 'Not in this demo.',
  playedHint: 'Try “{label}”.',
  skipNote: 'This will help us understand if people are happy with our week 3 check.',
  upsellNote: "Our goal isn't to sell, but we can upsell gently.",
};
