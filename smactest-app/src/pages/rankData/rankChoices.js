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
        'Flat & Safe Fist',
        'Safety Fist',
        'Peaceful Fist',
        'I do not know'
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
        '8',
        '16',
        '20',
        '24'
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
        '...a dance with blocks and punches',
        'How to fight many opponents',
        'How to turn 90°, 180°, and 270°',
        'To generate power in the 3 directions'
      ],
      [
        'Eagle',
        'Praying Mantis',
        'Monkey',
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
        'Basic Kung-Fu Boxing',
        'Five Painful Positions',
        'Five Stances Boxing',
        'Crouching Tiger, Hidden Dragon'
      ],
      [
        'The Instep & Blade of the foot',
        'The Arch & Ankle of the foot',
        'The Ball & Bridge of the foot',
        'Neither, just sides of the shin'
      ],
      [
        'It is the first form of Shaolin Kung-fu',
        'Develops strength, agility, & flexibility',
        'Develops power, speed, & balance',
        'All of the above'
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
        'A chance to hurt people using Gong-Fu',
        'Organized play-fighting for fun',
        'A Chinese fusion of Kickboxing & Gongfu',
        'An all-out fight with few rules'
      ],
      [
        'A chance to hurt someone using Gong-Fu',
        'Applications based on real-life scenarios',
        'An exercise in skilled paranoia',
        'A different way to combine basics'
      ],
      [
        'The Heel',
        'The Side Blade of the foot',
        'The "Ball" of the foot',
        'The Top or "Bridge" of the foot'
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
        'Vale Tudo & Sambo',
        'Judo & Ninjutsu',
        'MMA & Brazilian Jujutsu'
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
        '18 Shaolin Basic Defense Combos',
        '18 Shaolin Fundamental Drills',
        '18 Ancient Shaolin Practices',
        '18 Shaolin Fighting Drills'
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
        'The "Ball" of the foot',
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
        'Guns, Knives, Bats, Chains',
        'Striking, Kicking, Blocking, Evading',
        'Running, Walking, Hiding, Crawling',
        'Striking, Kicking, Grappling, Throwing'
      ],
      [
        'Upward, Downward, Front/Back',
        'Inside, Outside, Center',
        'Spin, Shuffle, Cross-step',
        'Long, Middle, Close'
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
        'Unbreakable Chain Boxing',
        'Joined Looping Fist',
        'Linked Rings Boxing',
        'Not quite sure, I didn\'t read the book'
      ],
      [
        '22 changes, 8 steps',
        '16 changes, 12 steps',
        '12 changes, 6 steps',
        '34 changes, 16 steps'
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
        'Sonny Gascon',
        'Walter Godin',
        'Sijo Emperado',
        'David Kalamini'
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
        'Left, Right, Center',
        'Sliding, Shuffling, Skipping',
        'Up-Down, Side-Side, Front-Back',
        'High, Low, Middle'
      ],
      [
        'They can be slow.',
        'They can be off-balance',
        'They can leave big openings',
        'All of the above'
      ],
      [
        'To lead with a fake kick or punch',
        'To turn your back as fast as possible',
        'Start the kick as he attacks',
        'To wait until he is in range'
      ],
      [
        'Scare away your opponents',
        'Show you understand martial arts',
        'Show how tough you are',
        'Influence the outcome of the fight'
      ],
      [
        'Helps with visualization',
        'What your eyes see, the mind focuses on',
        'Gives movements clarity and power',
        'All of the above'
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
        'Feet, Hands, Head',
        'Leg Power, Waist Power, Shoulder Power',
        'Knee, Hips, Spine',
        'Abdoment, Solar plexus, Thorax'
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
        'Crane on a Rock',
        'Rohai',
        'Stature of the White Crane',
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
        'Nine Pieces of 8',
        '8 Chains Fighting',
        '8 Step Linked Ring Boxing',
        'Eight Section Fist'
      ],
      [
        'YingZhua Quan & Fangzi Quan',
        'Hong Quan & Nan Quan',
        'Cha Quan & Tanlang Quan',
        'Shaolin Quan & Meihua Quan'
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
        'Sections 1-4',
        'Sections 1-6',
        'Sections 1-8',
        'Sections 1-10'
      ],
      [
        'Umbrella Exhibition',
        'Three Palm Sets',
        '10 Blocks',
        'Three Battles'
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
        'Small Forest Effort Boxing',
        'Small Forest Rooster Boxing',
        'Small Forest Skilled Boxing',
        'Small Forest Palace Clothes Boxing'
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
        'Small Forest Total Boxing',
        'Small Forest Labour Boxing',
        'Small Forest Public Boxing',
        'Small Forest Power Boxing'
      ],
      [
        'Meihua Quan (Plum Flower Fist)',
        'Nan Quan (Southern Fist)',
        'Chang Quan (Long Fist)',
        'Fan-Zi Quan (Rotating / Tumbling Fist)'
      ],
      [
        'That it uses mustical Qi energy to fight',
        'That it is a highly methodical, logical, and gradual practice',
        'That it uses only explosive power',
        'That it rapidly progresses one\'s fighting skills over a short period of time'
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