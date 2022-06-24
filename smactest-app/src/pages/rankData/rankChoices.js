const rankChoices = {
    White: [
      [
        'The Floor, our Uniform, the Mirror',
        'The Flag, The Great Masters, the Front',
        'The Clock, the Door, the guy next to me',
        'The Belt Display, Myself, my lunch'
      ],
      [
        'Stand and say “Hi!”',
        'Bow and enter the room',
        'Bow and say “Hello, Sir!”',
        'Nod and walk into class'
      ],
      [
        '“Yes, Sir!” or “No, Sir!”',
        '“Yep”',
        '“Uh-huh”',
        '“-‘kay”'
      ],
      [
        'Showing off at work or school',
        'In defense of myself or others',
        'When you are upset',
        'Play fighting with family or friends'
      ],
      [
        '#1 and #2',
        'All of them',
        'None of them',
        'Just the even numbered ones'
      ],
      [
        'Kempo (Quan-Fa)',
        'Shaolin Chan Wu Kung-Fu',
        'Chin-Na & Shuai Jiao',
        'All of the above'
      ],
      [
        'Karate',
        'Kempo Karate',
        'Shaolin Kempo Kung-Fu',
        'Krav Maga'
      ],
      [
        'Toes forward, Heels back',
        'Back straight, Heads up',
        'Fists upside-down, at the sides',
        'Knees bent, down & out'
      ],
      [
        'On the floor in the hall',
        'In the cubbies at the front',
        'Just wear them during class',
        'At the edge of the mats by the door'
      ],
      [
        'Punch, then step',
        'Step, then punch',
        'Punch & step same time',
        'Step half-way, punch with rest of step'
      ]
    ],
    Yellow: [
      [
        'Level 1',
        'Level 2',
        'Basic',
        'Level3/Wu Duan Zhe'
      ],
      [
        'Grandmaster Shi Yong Xin',
        'Grandmaster Villari',
        'Grandmaster Wakefield',
        'Grandmaster Philipman Chow'
      ],
      [
        'The Heel',
        'The Sole',
        'The Ball',
        'The Toe'
      ],
      [
        'Fred Villari',
        'Batou',
        'Po the Dragon Warrior',
        'Jackie Chan'
      ],
      [
        'A deferent gesture of subservience',
        'A requirement of a lesser person',
        'A gesture of mutual respect',
        'A way to find loose change on floor'
      ],
      [
        'Right fist, Left covering',
        'Two fist together in front',
        'Left fist, Right covering',
        'Both hands open, pressed together'
      ],
      [
        'Sabum',
        'Sensei',
        'Shifu',
        'Bob'
      ],
      [
        '12',
        '10',
        '9',
        '7'
      ],
      [
        'Dragon',
        'Praying Mantis',
        'Snake',
        'Leopard'
      ],
      [
        'Chamber, kick, chamber, down',
        'Chamber, kick, drop, land',
        'Step, swing back, soccer kick, down',
        'Raise leg, slap toe out, drop, drag back'
      ]
    ],
    Orange: [
      [
        'Kung-Fu',
        'Karate',
        'Shaolin',
        'Jujutsu'
      ],
      [
        'Aggressiveness & Fearlessness',
        'Attack & Rage',
        'Resilience and Indomitable Spirit',
        'Power & Control'
      ],
      [
        'The Toes',
        'The Sole',
        'The Ball',
        'The Side Blade'
      ],
      [
        'Reaction Hand',
        'Yin/Yang Hands',
        'Push & Pull elbows',
        'All of the above'
      ],
      [
        '6 & 3',
        '6 & 7',
        '7 & 5',
        '2 & 5'
      ],
      [
        'Respect, Self-Control, Self-Discipline',
        'Respect, Etiquette, Honesty',
        'Self-Control, Self-Defense, Integrity',
        'I don’t know'
      ],
      [
        '10',
        '15',
        '20',
        '25'
      ],
      [
        'The Instep & Blade of the foot',
        'The Arch & Ankle of the foot',
        'The Ball & Bridge of the foot',
        'Neither, just sides of the shin'
      ],
      [
        'Eagle',
        'Snake',
        'Monkey',
        'Ocelot'
      ],
      [
        'Top of the front knuckles',
        'Top of large bone of the wrist joint',
        'The Top of the fingers',
        'The Top of the hand'
      ]
    ],
    Purple: [
      [
        'A sophisticated game of Tag',
        'An all-out fight with rules',
        'A chance to hurt someone using Kung-fu',
        'A test of one\'s might as a fighter'
      ],
      [
        'A chance to hurt someone using Karate',
        'Applications based on real-life scenarios',
        'An exercise in skilled paranoia',
        'A different way to combine basics'
      ],
      [
        'The Heel',
        'The Side Blade of the foot',
        'The \'Ball\' of the foot',
        'The Top or \'Bridge\' of the foot'
      ],
      [
        'Front, Crescent, Spear',
        'Round, Rev. Crescent, Hook',
        'Side to Front, Round, Hook',
        'Stepping stool, X-Step, Hook'
      ],
      [
        '1 - 2',
        '1 - 4',
        '1 - 6',
        '1 - 8'
      ],
      [
        'Chin-Na & Shuai Jiao',
        'Judo & Ninjutsu',
        'Brazilian Jujutsu & MMA',
        'All of the above'
      ],
      [
        '7',
        '6',
        '5',
        '4'
      ],
      [
        'An Indian dish of flat bread & rice',
        'A Buddhist monk/warrior from India',
        'The founder of the Shaolin Temple',
        'I don\'t know'
      ],
      [
        'Okinawa',
        'Japan',
        'China',
        'Tibet'
      ],
      [
        'The back of the hand',
        'The bottom two finger knuckles',
        'Tips of first two fingers',
        'The bottom of the hand'
      ]
    ],
    Blue: [
      [
        'Aggresiveness & Fearlessness',
        'Passive',
        'Flexibility',
        'Balance & Control'
      ],
      [
        'Passive',
        'Defensive',
        'Tentative',
        'Offensive'
      ],
      [
        'The Heel of the foot',
        'The Toe of the foot',
        'The \'Ball\' of the foot',
        'The Sole of the foot'
      ],
      [
        'Back foot becomes the front foot',
        'Front foot becomes new front foot',
        'Back-foot steps through and pivots',
        'Jump and turn in place with a Shout!'
      ],
      [
        'Fighting technique',
        'Skill through time and effort',
        'Acrobatic ability',
        'All of the above'
      ],
      [
        'Wrist Lock & Hip Throws',
        'Elbow Locks & Head / Arm Throws',
        'Arm-bars & Leg Sweeps',
        'All of the above'
      ],
      [
        'Respect, Self-Control, Self-Discipline',
        'Peace over Fighting',
        'A readiness to fight',
        'A fancy way to clap your hands'
      ],
      [
        '4',
        '6',
        '8',
        '10'
      ],
      [
        'Measure of one\'s effort in technique',
        'Way to shock opponents',
        'Energetic Breath',
        'All of the above'
      ],
      [
        'Inside edge of hand above the thumb',
        'Side of the fingers',
        'Inside edge of the forearm',
        'The edge of the thumb-knuckle'
      ]
      
    ],
    BlueSt: [
      [
        'Forearm',
        'Shoulder',
        'Bicep / Triceps',
        'Elbow Joint'
      ],
      [
        '5',
        '10',
        '16',
        '20'
      ],
      [
        '10',
        '15',
        '20',
        '25'
      ],
      [
        '4',
        '15',
        '12',
        '18'
      ],
      [
        'Omei-Shan',
        'Ontario',
        'Henan',
        'Shandong'
      ],
      [
        '2',
        '4',
        '6',
        'Shout on everything'
      ],
      [
        '#4',
        '#10',
        '#12',
        '#18'
      ],
      [
        'Blue Dragon & White Crane',
        'Basic Breathing and Lotus Palm',
        '21 Tibetans & The Archer',
        'Eight Strands of the Brocade'
      ],
      [
        'Kicking range',
        'Elbow range',
        'Punching range',
        'Accosting range'
      ],
      [
        'We stand with feet & arms wide apart',
        'We invite opponent to attack',
        'Opponent is in a mirrored stance to us',
        'Standing on a Horse Stance'
      ]
    ],
    Green: [
      [
        'Gichin Funakoshi',
        'Mr. Miyagi',
        'Sakugawa Kanga',
        'Matsumura Sokon'
      ],
      [
        'Taming Savagery',
        'Big Spotted Cat',
        'Strength & Agility',
        'Et Exsiliens Feline Mortis (Leaping Cat of Death)'
      ],
      [
        'Sho Hashi',
        'Anko Itosu',
        'Kushanku',
        'Matsumura Sokon'
      ],
      [
        '12',
        '9',
        '6',
        '3'
      ],
      [
        'Right, Left, & Center twist',
        'Up, Down & Side twist',
        'Front, Back & Side twist',
        'Inside, Outside & Half Twist'
      ],
      [
        'Leg Pin & Collapsing',
        'Leg Reaping & Throwing',
        'Hip Throw, Leg Throw',
        'All of the above'
      ],
      [
        '10, 11',
        '14, 16',
        '17, 19',
        '13, 20'
      ],
      [
        'To show a block and a palm strike',
        'To coordinate breath and motion',
        'To raise the Yin energy',
        'All of the above'
      ],
      [
        'Aggressive',
        'Off Balance',
        'Powerful',
        'Intimidating'
      ],
      [
        'Predict things about yourself',
        'Beat everyone at everything',
        'Be faster, stronger, and wiser',
        'Have all the answers'
      ]
    ],
    GreenSt: [
      [
        'Fighting many opponents',
        'Sparring technique',
        'Flexibility and strength',
        'Stability and body control'
      ],
      [
        'Head, Knees, and Toes',
        'Legs, Waist, and Shoulders',
        'Hips, Spine, and Ankles',
        'None of the above'
      ],
      [
        'They can be slow.',
        'They can be off-balance',
        'They can leave big openings',
        'All of the above'
      ],
      [
        'Lead with a fake kick or punch',
        'Turn your back as fast as possible',
        'Start the kick as he attacks',
        'Wait until he is in range'
      ],
      [
        'Eight Step Fist',
        'Five Step Fist',
        'Chain Linked Fist',
        'I have no Idea'
      ],
      [
        'Shu-Bu',
        'Pu-Bu',
        'Xie-Bu',
        'Ji-Bu'
      ],
      [
        'Deceptive and defensive',
        'Long and slow',
        'Close range and aggressive',
        'None of the above'
      ],
      [
        'One opponent only',
        'Thursdays when there is a full moon',
        'Both sides, against many attacks',
        'Smaller, students than ourselves'
      ],
      [
        'Eyes, Cheek bones, and Throat',
        'Ribs, Kidneys and Gut',
        'Arms, Legs, and Feet',
        'll of the above'
      ],
      [
        'An aggressive attitude',
        'A positive Martial (Fighting) Spirit',
        'A passive attitude',
        'Using distraction techniques'
      ]
    ],
    GreenSt2: [
      [
        'Kushanku',
        'Choki Motobu',
        'Anko Itosu',
        'James Mitose'
      ],
      [
        'Internal power, speed, and accuracy',
        'Deception, fluidity, flexibility',
        'Surprise attack, coiling & wrapping',
        'All of the Above'
      ],
      [
        'A military delegate of the Ming Emperor',
        'A master of Northern Shaolin Quan ',
        'Kushanku',
        'Matsumura Sokon'
      ],
      [
        'It uses Agility & Coordination',
        'It relies on balance & light footwork',
        'It is not a grounded position',
        'All of the above'
      ],
      [
        'Snake & Crane',
        'Crane & Dragon',
        'Dragon & Snake',
        'Leopard & Dragon'
      ],
      [
        'Naihanchi',
        'Rohai',
        'Heian',
        'Tekki Shodan'
      ],
      [
        '10, 11',
        '14, 16',
        '17, 11',
        'All of the Above'
      ],
      [
        'To practice breathing & Crane wrist',
        'To lower or reduce excess Yin energy',
        'To expand & contract with breathing',
        'I do not know'
      ],
      [
        'An opening presents itself',
        'You start an attack',
        'When in a stationary position',
        'Facing multiple opponents'
      ],
      [
        'Take out 3 guys in a fight',
        'Be stronger than others',
        'Say, “I don’t know, please show me”',
        'Tell others what to do all the time.'
      ]
    ],
    Brown: [
      [
        'Adriano Emporado',
        'William KS Chow',
        'James Mitose',
        'Victor ‘Sonny’ Gascon'
      ],
      [
        'Okinawa, Hawaii, Japan, China, USA',
        'Japan, Okinawa, China, Hawaii, Canada',
        'China, Okinawa, Hawaii, USA, Canada',
        'I do not know'
      ],
      [
        '“…a Defensive stance.”',
        '“…an Attacking position”',
        '“…a high stable stance.”',
        '“…a highly mobile stance”'
      ],
      [
        'Palm up',
        'Palm down',
        'Palm vertical',
        'Palm inverted'
      ],
      [
        'Steps 1-4',
        'Steps 1-6',
        'Steps 1-8',
        'All 10 steps'
      ],
      [
        'Heart & Liver',
        'Kidney Stones',
        'Headaches',
        'Leg Cramps'
      ],
      [
        'The ability to lift heavy things',
        'An action with great speed and force',
        'Power is Strength',
        'None of the above'
      ],
      [
        'Downward & Upward Elbow Scoop',
        'Over & Under Elbow Fold-over',
        'Downward & Upward Elbow Wrap',
        'All of the Above'
      ],
      [
        '1, 13, 20',
        '21, 26',
        '22, 24',
        'None'
      ],
      [
        '…at the opponent’s hands & feet',
        '…through the opponent',
        '…straight into the opponent’s eyes',
        '…at the feet only'
      ]
    ],
    BrownSt: [
      [
        'Grandmaster ‘Sonny’ Gascon',
        'Grandmaster Fred Villari',
        'Grandmaster George Pesare',
        'Professor Nick Cerio'
      ],
      [
        'Grandmaster ‘Sonny’ Gascon',
        'Grandmaster Fred Villari',
        'Grandmaster George Pesare',
        'Professor Nick Cerio'
      ],
      [
        'Quartal and Quintal',
        'Upper and Lower',
        'Internal & External',
        'Heaven and Earth'
      ],
      [
        'Ribs, neck, face, armpits & groin',
        'Areas along the spine',
        'Kneecaps, Elbows, Hands & feet',
        'All of the above'
      ],
      [
        '12',
        '6',
        '4',
        'I do not know'
      ],
      [
        'Contacts to the head',
        'Stabilizing breathing',
        'Eliminate disorientation',
        'All of the above'
      ],
      [
        'Just outside of opponent’s reach',
        'Directly in front of the opponent',
        'So they can punch or kick, without getting hit',
        'As close to the opponent as possible'
      ],
      [
        'Something to be ashamed of',
        'Erased through Sparring practice',
        'Something one can learn to live with',
        'Necessary to be a superior fighter'
      ],
      [
        '2, 3, 5, 7, 21, 26',
        '1, 4, 6, 8, 10, 13',
        '9, 11, 14, 15, 17',
        'I am not sure'
      ],
      [
        'They are rigid and solid',
        'Coordinated with balance & coordination',
        'Held with the strong side to the rear',
        'Held in a super low squat'
      ]
    ],
    BrownSt2: [
      [
        'No',
        'Nope',
        'Nah',
        'Nuhuh',
      ],
      [
        'No',
        'Nope',
        'Nah',
        'Nuhuh',
      ],
      [
        'No',
        'Nope',
        'Nah',
        'Nuhuh',
      ],
      [
        'No',
        'Nope',
        'Nah',
        'Nuhuh',
      ],
      [
        'No',
        'Nope',
        'Nah',
        'Nuhuh',
      ],
      [
        'No',
        'Nope',
        'Nah',
        'Nuhuh',
      ],
      [
        'No',
        'Nope',
        'Nah',
        'Nuhuh',
      ],
      [
        'No',
        'Nope',
        'Nah',
        'Nuhuh',
      ],
      [
        'No',
        'Nope',
        'Nah',
        'Nuhuh',
      ],
      [
        'No',
        'Nope',
        'Nah',
        'Nuhuh',
      ]
    ]
}
export default rankChoices