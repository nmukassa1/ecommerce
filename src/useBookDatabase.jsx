function useBookDatabase() {

    const books = {
        fiction: {
            genre: {
                fantasy : [
                    {
                        title: "Twin Crowns",
                        author: ["Katherine Webber", " Catherine Doyle"],
                        synopsis: [
                            "Two sisters. One throne. Who will ultimately rise to power and wear the crown?", "Wren Greenrock has always known that one day she would steal her sister's place in the palace. Trained from birth to avenge her parents' murder and usurp the princess, she will do anything to rise to power and protect the community of witches she loves.", "Princess Rose Valhart knows that with power comes responsibility including marriage into a brutal kingdom. Life outside the palace walls is a place to be feared and she is soon to discover that it's wilder than she ever imagined.", "Twin sisters separated at birth and raised into entirely different worlds are about to get to know each other's lives a whole lot better..."
                        ],
                        number_of_pages: "528",
                        publisher: "HarperCollins Publishers",
                        dimension: "198 x 129 x 33 mm",
                        price: 8.99,
                        img: "https://cdn.waterstones.com/override/v1/large/9780/7555/9780755503643.jpg",
                        key: 9780755503643,
                        quantity: 10
                    },
                    {
                        title: "Piranesi",
                        author: ["Susanna Clarke"],
                        synopsis: [
                            "Piranesi lives in the House. Perhaps he always has. In his notebooks, day after day, he makes a clear and careful record of its wonders: the labyrinth of halls, the thousands upon thousands of statues, the tides which thunder up staircases, the clouds which move in slow procession through the upper halls.",
                            "On Tuesdays and Fridays Piranesi sees his friend, the Other. At other times he brings tributes of food and waterlilies to the Dead. But mostly, he is alone. Messages begin to appear, scratched out in chalk on the pavements. There is someone new in the House. But who are they and what do they want? Are they a friend or do they bring destruction and madness as the Other claims?",
                            "Lost texts must be found; secrets must be uncovered. The world that Piranesi thought he knew is becoming strange and dangerous. The Beauty of the House is immeasurable; its Kindness infinite."
                        ],
                        number_of_pages: "272",
                        publisher: "Bloomsbury Publishing PLC",
                        dimension: "198 x 129 mm",
                        price: 8.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/5266/9781526622433.jpg",
                        key: 9781526622433,
                        quantity: 10
                    },
                    {
                        title: "The Priory of the Orange Tree",
                        author: ["Samantha Shannon"],
                        synopsis: [
                            "A world divided. A queendom without an heir. An ancient enemy awakens.",
                            "The House of Berethnet has ruled Inys for a thousand years. Still unwed, Queen Sabran the Ninth must conceive a daughter to protect her realm from destruction - but assassins are getting closer to her door. Ead Duryan is an outsider at court. Though she has risen to the position of lady-in-waiting, she is loyal to a hidden society of mages. Ead keeps a watchful eye on Sabran, secretly protecting her with forbidden magic. Across the dark sea, Tane has trained to be a dragonrider since she was a child, but is forced to make a choice that could see her life unravel. Meanwhile, the divided East and West refuse to parley, and forces of chaos are rising from their sleep."
                        ],
                        number_of_pages: "848",
                        publisher: "Bloomsbury Publishing PLC",
                        dimension: "198 x 129 mm",
                        price: 8.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408883358.jpg",
                        key: 9781408883358,
                        quantity: 10
                    },
                    {
                        title: "Good Omens",
                        author: ["Neil Gaiman", "Terry Pratchett"],
                        synopsis: [
                            "Armageddon only happens once, you know. They don't let you go around again until you get it right.",
                            "According to the Nice and Accurate Prophecies of Agnes Nutter, Witch - the world's only totally reliable guide to the future, written in 1655, before she exploded - the world will end on a Saturday.",
                            "Next Saturday, in fact. Just after tea...",
                            "People have been predicting the end of the world almost from its very beginning, so it's only natural to be sceptical when a new date is set for Judgement Day.",
                            "This time though, the armies of Good and Evil really do appear to be massing. The four Bikers of the Apocalypse are hitting the road. But both the angels and demons - well, one fast-living demon and a somewhat fussy angel - would quite like the Rapture not to happen.",
                            "Oh, and someone seems to have misplaced the Antichrist..."
                        ],
                        number_of_pages: "416",
                        publisher: "Transworld Publishers Ltd",
                        dimension: "198 x 127 x 26 mm",
                        price: 8.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9780/5521/9780552171892.jpg",
                        key: 9780552171892,
                        quantity: 0
                    },
                    {
                        title: "She Who Became the Sun - The Radiant Emperor",
                        author: ["Shelley Parker-Chan"],
                        synopsis: [
                            "In a famine-stricken village on a dusty plain, a seer shows two children their fates. For a family's eighth-born son, there's greatness. For the second daughter, nothing.",
                            "In 1345, China lies restless under harsh Mongol rule. And when a bandit raid wipes out their home, the two children must somehow survive. Zhu Chongba despairs and gives in. But the girl resolves to overcome her destiny. So she takes her dead brother's identity and begins her journey. Can Zhu escape what's written in the stars, as rebellion sweeps the land? Or can she claim her brother's greatness - and rise as high as she can dream?"
                        ],
                        number_of_pages: "416",
                        publisher: "Pan Macmillan",
                        dimension: "197 x 130 x 26 mm",
                        price: 8.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/5290/9781529043402.jpg",
                        key: 9781529043402,
                        quantity: 10
                    },
                    {
                        title: "Harry Potter and the Philosopher's Stone - 25th Anniversary Edition",
                        author: ["J. K. Rowling"],
                        synopsis: [
                            "Life isn’t much fun at number four Privet Drive, at least not for Harry Potter, living under the stairs in a cupboard full of spiders, but all of that is about to change. On the eve of Harry’s eleventh birthday the letters start arriving; letters written in emerald green ink on yellowing parchment with an unmistakable letter H on purple wax seals. Because Harry Potter is no ordinary boy, he is the boy who lived, the wizard whose name everyone in the magical world knows and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin and life for Harry Potter will never be the same again."
                        ],
                        number_of_pages: "368",
                        publisher: "Bloomsbury Publishing PLC",
                        dimension: "198 x 129 mm",
                        price: 16.99,
                        img: "https://cdn.waterstones.com/override/v1/large/9781/5266/9781526646651.jpg",
                        key: 9781526646651,
                        quantity: 10
                    },
                    {
                        title: "House of Earth and Blood - Crescent City",
                        author: ["Sarah J. Maas"],
                        synopsis: [
                            "Half-Fae, half-human Bryce Quinlan loves her life. Every night is a party and Bryce is going to savour all the pleasures Lunathion - also known as Crescent City - has to offer. But then a brutal murder shakes the very foundations of the city, and brings Bryce's world crashing down. Two years later, Bryce still haunts the city's most notorious nightclubs - but seeking only oblivion now. Then the murderer attacks again. And when an infamous Fallen angel, Hunt Athalar, is assigned to watch her every footstep, Bryce knows she can't forget any longer.",
                            "As Bryce and Hunt fight to unravel the mystery, and their own dark pasts, the threads they tug ripple through the underbelly of the city, across warring continents, and down to the deepest levels of Hel, where things that have been sleeping for millennia are beginning to sti ..."
                        ],
                        number_of_pages: "912",
                        publisher: "Bloomsbury Publishing PLC",
                        dimension: "198 x 129 mm",
                        price: 9.99,
                        img: "https://cdn.waterstones.com/override/v1/large/9781/5266/9781526622884.jpg",
                        key: 9781526622884,
                        quantity: 10
                    },
                    {
                        title: "A Deadly Education",
                        author: ["Naomi Novik"],
                        synopsis: [
                            "Enter a school of magic unlike any you have ever encountered.",
                            "There are no teachers, no holidays, friendships are purely strategic, and the odds of survival are never equal.",
                            "Once you're inside, there are only two ways out: you graduate or you die.",
                            "El Higgins is uniquely prepared for the school's many dangers. She may be without allies, but she possesses a dark power strong enough to level mountains and wipe out untold millions - never mind easily destroy the countless monsters that prowl the school.",
                            "Except, she might accidentally kill all the other students, too. So El is trying her hardest not to use it... that is, unless she has no other choice.",
                            "Wry, witty, endlessly inventive, and mordantly funny - yet with a true depth and fierce justice at its heart - this enchanting novel reminds us that there are far more important things than mere survival."
                        ],
                        number_of_pages: "336",
                        publisher: "Cornerstone",
                        dimension: "198 x 129 x 20 mm",
                        price: 8.49,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/5291/9781529100877.jpg",
                        key: 9781529100877,
                        quantity: 10
                    }
                ],
                romance : [
                    {
                        title: "It Ends With Us",
                        author: ["Colleen Hoover "],
                        synopsis: [
                            "Sometimes the one who loves you is the one who hurts you the most.",
                            "Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town in Maine where she grew up - she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true.",
                            "Ryle is assertive, stubborn, maybe even a little arrogant. He's also sensitive, brilliant, and has a total soft spot for Lily, but Ryle's complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his no dating rule, she can't help but wonder what made him that way in the first place.",
                            "As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan - her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened."
                        ],
                        mumber_of_pages: "384",
                        publisher: "Simon & Schuster Ltd",
                        dimension: "198 x 130 mm",
                        price: 7.49,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/4711/9781471156267.jpg",
                        key: 9781471156267,
                        quantity: 10
                    },
                    {
                        title: "Beautiful World, Where Are You",
                        author: ["Sally Rooney"],
                        synopsis: [
                            "Alice, a novelist, meets Felix, who works in a distribution warehouse, and asks him if he’d like to travel to Rome with her. In Dublin, her best friend Eileen is getting over a break-up, and slips back into flirting with Simon, a man she has known since childhood.",
                            "Alice, Felix, Eileen and Simon are still young—but life is catching up with them. They desire each other, they delude each other, they get together, they break apart. They have sex, they worry about sex, they worry about their friendships and the world they live in. Are they standing in the last lighted room before the darkness, bearing witness to something? Will they find a way to believe in a beautiful world?"
                        ],
                        mumber_of_pages: "352",
                        publisher: "Faber & Faber",
                        dimension: "198 x 129 x 21 mm",
                        price: 7.49,
                        img: "https://cdn.waterstones.com/bookjackets/large/9780/5713/9780571365449.jpg",
                        key: 9780571365449,
                        quantity: 10
                    },
                    {
                        title: "Book Lovers",
                        author: ["Emily Henry"],
                        synopsis: [
                            "One summer. Two rivals. A plot twist they didn't see coming...",
                            "Nora is a cut-throat literary agent at the top of her game. Her whole life is books. Charlie is an editor with a gift for creating bestsellers. And he's Nora's work nemesis.",
                            "Nora has been through enough break-ups to know she's the woman men date before they find their happy-ever-after. That's why Nora's sister has persuaded her to swap her desk in the city for a month's holiday in Sunshine Falls, North Carolina. It's a small town straight out of a romance novel, but instead of meeting sexy lumberjacks, handsome doctors or cute bartenders, Nora keeps bumping into... Charlie.",
                            "She's no heroine. He's no hero. So can they take a page out of an entirely different book?"
                        ],
                        number_of_pages: "384",
                        publisher: "Penguin Books Ltd",
                        dimension: "197 x 128 x 23 mm",
                        price: 7.49,
                        img: "https://cdn.waterstones.com/bookjackets/large/9780/2419/9780241995341.jpg",
                        key:  9780241995341,
                        quantity: 10
                    },
                    {
                        title: "The Love Hypothesis",
                        author: ["Ali Hazelwood"],
                        synopsis: [
                            "When a fake relationship between scientists meets the irresistible force of attraction, it throws one woman's carefully calculated theories on love into chaos.",
                            "As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships but her best friend does, and that's what got her into this situation. Convincing Anh that Olive on her way to a happily ever after was always going to be tough, scientists require proof. So, like any self-respecting woman, Olive panics and kisses the first man she sees.",
                            "That man is none other than Adam Carlsen, a young hotshot professor and well-known ass. Which is why Olive is positively floored when he agrees to keep her charade a secret and be her fake boyfriend. But when a big science conference goes haywire and Adam surprises her again with his unyielding support (and his unyielding abs), their little experiment feels dangerously close to combustion.",
                            "Olive soon discovers that the only thing more complicated than a hypothesis on love is putting her own heart under the microscope."
                        ],
                        mumber_of_pages: "384",
                        publisher: "Little, Brown Book Group",
                        dimension: "196 x 126 x 28 mm",
                        price: 7.49,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/4087/9781408725764.jpg",
                        key:  9781408725764,
                        quantity: 10
                    },
                    {
                        title: "The Notebook",
                        author: ["Nicholas Sparks"],
                        synopsis: [
                            "Noah Calhoun has returned from war and, in an attempt to escape the ghosts of battle, he sets his mind and his body to restoring an old plantation home to its former beauty.",
                            "But he is haunted by memories of the beautiful girl he met there years before. A girl who stole his heart at the funfair, whose parents didn't approve, a girl he wrote to every day for a year.",
                            "When Allie Hamilton shows up on his doorstep, exactly as he has held her in his memory for all these years, Noah has one last chance to win her back. Only this time, it's not just her parents in the way - Allie is engaged and she's not a woman to go back on her promises."
                        ],
                        number_of_pages: "272",
                        publisher: "Little, Brown Book Group",
                        dimension: "196 x 184 x 16 mm",
                        price: 8.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9780/7515/9780751540475.jpg",
                        key:  9780751540475,
                        quantity: 10
                    },
                    {
                        title: "The Great Gatsby",
                        author: ["F. Scott Fitzgerald"],
                        synopsis: [
                            "Enigmatic, intriguing and fabulously wealthy, Jay Gatsby throws lavish parties at his West Egg mansion to impress Daisy Buchanan, the object of his obsession, now married to bullish Tom Buchanan. Over a Long Island summer, his neighbour Nick Carraway, a writer and a cousin to Daisy, looks on as Gatsby and Daisy's affair deepens.",
                            "Tragedy looms in F. Scott Fitzgerald's fictional masterpiece, frequently named among the best novels of the twentieth century."
                        ],
                        number_of_pages: "208",
                        publisher: "Simon & Schuster Ltd",
                        dimension: "198 x 130 x 15 mm",
                        price: 9.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/4711/9781471173936.jpg",
                        key:  9781471173936,
                        quantity: 10
                    },
                    {
                        title: "Call Me By Your Name",
                        author: ["Andre Aciman"],
                        synopsis: [
                            "It’s the mid-1980s; the place is the Italian Riviera. Elio – 17 years old, precocious, the son of an academic – finds himself falling for the older Oliver, a postdoctoral scholar completing his manuscript on Heraclitus at the beautiful home of Elio’s family. Oliver is worldly, handsome, a seductive contrast to Elio’s own naivety. Both are bright and questioning; the hook of desire is soon caught fast."
                        ],
                        number_of_pages: "256",
                        publisher: "Atlantic Books",
                        dimension: "198 x 129 x 18 mm",
                        price: 8.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/7864/9781786495259.jpg",
                        key:  9781786495259,
                        quantity: 10
                    },
                    {
                        title: "Open Water",
                        author: ["Caleb Azumah Nelson"],
                        synopsis: [
                            "Two young people meet at a pub in South East London. Both are Black British, both won scholarships to private schools where they struggled to belong, both are now artists - he a photographer, she a dancer - trying to make their mark in a city that by turns celebrates and rejects them. Tentatively, tenderly, they fall in love. But two people who seem destined to be together can still be torn apart by fear and violence.",
                            "At once an achingly beautiful love story and a potent insight into race and masculinity, Open Water asks what it means to be a person in a world that sees you only as a Black body, to be vulnerable when you are only respected for strength, to find safety in love, only to lose it. With gorgeous, soulful intensity, Caleb Azumah Nelson has written the most essential British debut of recent years."
                        ],
                        number_of_pages: "160",
                        publisher: "Penguin Books Ltd",
                        dimension: "198 x 129 x 12 mm",
                        price: 7.49,
                        img: "https://cdn.waterstones.com/bookjackets/large/9780/2414/9780241448786.jpg",
                        key:  9780241448786,
                        quantity: 10
                    }
                ]
            }
        },
        non_fiction: {
            genre: {
                biography: [
                    {
                        title: "The Escape Artist: The Man Who Broke Out of Auschwitz to Warn the World",
                        author: ["Jonathan Freedland "],
                        synopsis: [
                            "Anne Frank. Primo Levi. Oskar Schindler. Rudolf Vrba.",
                            "In April 1944 nineteen-year-old Rudolf Vrba and fellow inmate Fred Wetzler became the first Jews ever to break out of Auschwitz. Under electrified fences and past armed watchtowers, evading thousands of SS men and slavering dogs, they trekked across marshlands, mountains and rivers to freedom. Vrba's mission: to reveal to the world the truth of the Holocaust.",
                            "In the death factory of Auschwitz, Vrba had become an eyewitness to almost every chilling stage of the Nazis' process of industrialised murder. The more he saw, the more determined he became to warn the Jews of Europe what fate awaited them. A brilliant student of science and mathematics, he committed each detail to memory, risking everything to collect the first data of the Final Solution. After his escape, that information would form a priceless thirty-two-page report that would reach Roosevelt, Churchill and the pope and eventually save over 200,000 lives.",
                            "But the escape from Auschwitz was not his last. After the war, he kept running - from his past, from his home country, from his adopted country, even from his own name. Few knew of the truly extraordinary deed he had done.",
                            "Now, at last, Rudolf Vrba's heroism can be known - and he can take his place alongside those whose stories define history's darkest chapter."
                        ],
                        number_of_pages: "400",
                        publisher: "John Murray Press",
                        dimension: "236 x 162 x 38 mm",
                        price: 17.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/5293/9781529369045.jpg",
                        key: 9781529369045,
                        quantity: 10
                    },
                    {
                        title: "Diddly Squat",
                        author: ["Jeremy Clarkson"],
                        synopsis: [
                            "Welcome to Jeremy's farm. It's an idyllic spot, offering picturesque views across the Cotswolds, bustling hedgerows, woodlands and natural springs. Jeremy always liked the idea being a farmer. But, while he was barrelling around the world having more fun with cars than was entirely reasonable, it seemed obvious that the actual, you know, farming was much better left to someone else.",
                            "Then one day he decided he would do the farming himself.",
                            "After all, how hard could it be?",
                            "Well...",
                            "Faced with suffocating red tape, biblical weather, local objections, a global pandemic and his own frankly staggering ignorance of how to 'do farming', Jeremy soon realises that turning the farm round is going to take more than splashing out on a massive tractor.",
                            "Fortunately, there's help at hand from a large and (mostly) willing team including girlfriend Lisa, Kaleb the Tractor Driver, Cheerful Charlie, Ellen the Shepherd and Gerald, his Head of Security and Dry Stone Waller. Between them they enthusiastically cultivate crops, rear livestock and hens, keep bees, bottle spring water and open a farm shop. But profits remain elusive.",
                            "And yet while the farm may be called Diddly Squat for good reason, Jeremy soon begins to understand that it's worth a whole lot more to him than pounds, shillings and pence..."
                        ],
                        number_of_pages: "224",
                        publisher: "Penguin Books Ltd",
                        dimension: "198 x 129 x 14 mm",
                        price: 7.49,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/4059/9781405946537.jpg",
                        key: 9781405946537,
                        quantity: 10
                    },
                    {
                        title: "The Hong Kong Diaries",
                        author: ["Chris Patten"],
                        synopsis: [
                            "In June 1992 Chris Patten went to Hong Kong as the last British governor, to try to prepare it not (as other British colonies over the decades) for independence, but for handing back in 1997 to the Chinese, from whom most of its territory had been leased 99 years previously. Over the next five years he kept this diary, which describes in detail how Hong Kong was run as a British colony and what happened as the handover approached.",
                            "The book gives unprecedented insights into negotiating with the Chinese, about how the institutions of democracy in Hong Kong were (belatedly) strengthened and how Patten sought to ensure that a strong degree of self-government would continue after 1997.",
                            "Unexpectedly, his opponents included not only the Chinese themselves, but some British businessmen and civil service mandarins upset by Patten's efforts, for whom political freedom and the rule of law in Hong Kong seemed less important than keeping on the right side of Beijing. The book concludes with an account of what has happened in Hong Kong since the handover, a powerful assessment of recent events and Patten's reflections on how to deal with China - then and now."
                        ],
                        number_of_pages: "560",
                        publisher: "Penguin Books Ltd",
                        dimension: "240 x 162 x 38 mm",
                        price: 26.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9780/2415/9780241560495.jpg",
                        key: 9780241560495,
                        quantity: 10
                    },
                    {
                        title: "Conversations on Love",
                        author: ["Natasha Lunn"],
                        synopsis: [
                            "After years of feeling that love was always out of reach, journalist Natasha Lunn set out to understand how relationships work and evolve over a lifetime. She turned to authors and experts to learn about their experiences, as well as drawing on her own, asking: How do we find love? How do we sustain it? And how do we survive when we lose it?"
                        ],
                        number_of_pages: "320",
                        publisher: "Penguin Books Ltd",
                        dimension: "198 x 129 x 19 mm",
                        price: 8.49,
                        img: "https://cdn.waterstones.com/bookjackets/large/9780/2414/9780241448748.jpg",
                        key: 9780241448748,
                        quantity: 10
                    },
                    {
                        title: "This is Not a Pity Memoir",
                        author: ["Abi Morgan"],
                        synopsis: [
                            "An ordinary day. The end of ordinary life.",
                            "One morning in June, Abi had her to-do list - drop the kids to school, get coffee and go to work. Jacob had a bad headache so she added 'pick up steroids'. She returned home and found the man she loved and fought and laughed with for twenty years lying on the bathroom floor. And nothing would ever be the same again.",
                            "But this is not a pity memoir. It's about meeting your person. And crazed late night Google trawls. It's about the things you wished you'd said to the person that matters then wildly over-sharing with the barista who doesn't know you at all. It's about sushi and the wrong shoes and the moments you want to shout 'cut'. It's about the silence when you are lost in space and the importance of family and parties and noise.",
                            "It's the difference between surviving and living. It's a reminder that, even in the worst times, there is light ahead. It's a love story."
                        ],
                        number_of_pages: "304",
                        publisher: "John Murray Press",
                        dimension: "218 x 140 x 32 mm",
                        price: 12.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/5293/9781529388336.jpg",
                        key: 9781529388336,
                        quantity: 10
                    },
                    {
                        title: "Brothers in Arms: One Legendary Tank Regiment's Bloody War from D-Day to VE-Day",
                        author: ["James Holland "],
                        synopsis: [
                            "It took a certain type of courage to serve in a tank in World War Two. Encased in steel, surrounded by highly explosive shells, a big and slow-moving target, every crew member was utterly vulnerable to enemy attack from all sides. Living - and dying - in a tank was a brutal way to fight a war.",
                            "The Sherwood Rangers were one of the great tank regiments. They had learned their trade the hard way, under the burning sun of North Africa, on the battlefields of El Alamein and Alam el Halfa. By the time they landed on Gold Beach on D-Day, they were toughened by experience and ready for combat.",
                            "From that moment on, the Sherwood Rangers were in the thick of the action til the war's end. They and their Sherman tanks covered thousands of miles and endured some of the fiercest fighting in Western Europe. The first British unit to cross into Germany, their engagements stretch from the Normandy beaches, to the bridges at Eindhoven, and the grinding crossing of the Siegfried Line and on into the Nazi heartland.",
                            "Through compelling eye-witness testimony and James Holland's expert analysis of the war in the West, Brothers In Arms brings to vivid life the final bloody scramble across Europe and gives the most powerful account to date of what it was really like to fight in the dying days of World War Two."
                        ],
                        number_of_pages: "704",
                        publisher: "Transworld Publishers Ltd",
                        dimension: "198 x 127 x 30 mm",
                        price: 8.49,
                        img: "https://cdn.waterstones.com/bookjackets/large/9780/5521/9780552177917.jpg",
                        key: 9780552177917,
                        quantity: 10
                    },
                    {
                        title: "When Breath Becomes Air",
                        author: ["Paul Kalanithi"],
                        synopsis: [
                            "An intimate and exquisitely written meditation on the meaning of life by a young neurosurgeon facing terminal cancer. Dr. Paul Kalanithi wrote When Breath Becomes Air in the last 22 months of his life.",
                            "The result is an inspirational account of family, medicine and literature, on publication swiftly finding an audience of booksellers moved by its gradual shift from hope to Kalanithi’s dignified acceptance of life’s end. We strongly recommend the emotional investment to read it.",
                            "At the age of thirty-six, on the verge of completing a decade's training as a neurosurgeon, Paul Kalanithi was diagnosed with inoperable lung cancer.",
                            "One day he was a doctor treating the dying, the next he was a patient struggling to live.",
                            "When Breath Becomes Air chronicles Kalanithi's transformation from a medical student asking what makes a virtuous and meaningful life into a neurosurgeon working in the core of human identity - the brain - and finally into a patient and a new father. What makes life worth living in the face of death? What do you do when when life is catastrophically interrupted? What does it mean to have a child as your own life fades away?",
                            "Paul Kalanithi died while working on this profoundly moving book, yet his words live on as a guide to us all. When Breath Becomes Air is a life-affirming reflection on facing our mortality and on the relationship between doctor and patient, from a gifted writer who became both."
                        ],
                        number_of_pages: "256",
                        publisher: "Vintage Publishing",
                        dimension: "198 x 129 x 16 mm",
                        price: 9.99,
                        img: "https://cdn.waterstones.com/bookjackets/large/9781/7847/9781784701994.jpg",
                        key: 9781784701994,
                        quantity: 10
                    }
                ]
            }
        } 
    }

    return { books };
}

export default useBookDatabase;