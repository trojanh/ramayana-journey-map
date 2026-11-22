import { Waypoint } from '../types';

export const journeyWaypoints: Waypoint[] = [
  // ==========================================
  // BALA KANDA
  // ==========================================
  {
    id: 1,
    order: 1,
    ancientName: 'Ayodhya (Kosala Capital)',
    sanskritName: 'अयोध्या (श्री राम जन्मभूमि)',
    modernLocation: 'Ayodhya',
    modernStateOrCountry: 'Uttar Pradesh, India',
    coordinates: [26.7922, 82.1998],
    kanda: 'Bala Kanda',
    title: 'Divine Incarnation & Royal Childhood',
    summary: 'The advent of Lord Rama as the eldest son of King Dasharatha and Queen Kaushalya along the sacred banks of the Sarayu River.',
    detailedNarrative: 'In the illustrious Sun Dynasty (Suryavansha), King Dasharatha performed the Putrakameshti Yajna under Sage Rishyasringa. On the auspicious ninth day of the Chaitra month (Ram Navami), Lord Vishnu incarnated as Rama, accompanied by Bharata (son of Kaikeyi), and the twins Lakshmana and Shatrughna (sons of Sumitra). The four princes mastered Vedic scriptures and the sacred martial sciences under Sage Vashistha.',
    charactersInvolved: ['Sri Rama', 'King Dasharatha', 'Queen Kaushalya', 'Lakshmana', 'Bharata', 'Shatrughna', 'Sage Vashistha'],
    keyEvent: 'Advent of Bhagavan Rama on Chaitra Shukla Navami',
    scripture: {
      valmiki: {
        kanda: 'Bala Kanda',
        sarga: '18',
        shloka: '8-10',
        text: 'ततो यज्ञे समाप्ते तु ऋतूनां षट् समत्ययुः । ततश्च द्वादशे मासे चैत्रे नावमिके तिथौ ॥ नक्षत्रेऽदितिदैवत्ये स्वोच्चसंस्थेषु पञ्चसु । ग्रहेषु कर्कटे लग्ने वाक्पताविन्दुना सह ॥',
        translation: 'Six seasons passed after the yajna, and in the twelfth month, on the ninth lunar day of Chaitra, with Aditi as the presiding deity, when five planets were in their exaltation and Jupiter sat with the Moon in Cancer, Rama was born.'
      },
      tulsidas: {
        kanda: 'Bala Kanda',
        dohaOrChaupai: 'Chaupai 191',
        text: 'भए प्रगट कृपाला दीनदयाला कौसल्या हितकारी । हरषित महतारी मुनि मन हारी अद्भुत रूप बिचारी ॥',
        meaning: 'The benevolent Lord, compassionate to the humble, revealed Himself for the joy of Kaushalya. The mother was filled with bliss beholding His wondrous, divine form.'
      }
    },
    narration: {
      hindi: {
        title: 'श्री राम का प्राकट्य एवं बाल्यकाल',
        text: 'पवित्र सरयू नदी के तट पर बसी धर्मनगरी अयोध्या में, सूर्यवंश के प्रतापी राजा दशरथ के यहाँ चैत्र मास की शुक्ल नवमी तिथि को मर्यादा पुरुषोत्तम भगवान श्री राम का प्राकट्य हुआ। तीनों लोकों में आनंद की वर्षा हुई और देवता पुष्प बरसाने लगे। गुरु वशिष्ठ के संरक्षण में चारों भाइयों ने वेदों और दिव्य अस्त्र-शस्त्रों की शिक्षा प्राप्त की।'
      },
      english: {
        title: 'The Divine Advent & Childhood in Ayodhya',
        text: 'On the sacred banks of the holy Sarayu River, in the glorious ancient capital of Ayodhya, Lord Vishnu manifested as Sri Rama on the ninth day of Chaitra. Celebrated across the three worlds, young Rama and his devoted brothers grew up mastering the sacred Vedas and divine martial sciences under the tutelage of Sage Vashistha.'
      }
    },
    historicalSignificance: 'Capital of Kosala; ground zero of the Treta Yuga divine avatara and symbol of righteous kingship (Rama Rajya).',
    presentDayTempleOrSite: 'Shri Ram Janmabhoomi Teerth Kshetra & Kanak Bhavan, Ayodhya',
    travelMode: 'walking',
    iconType: 'birth'
  },
  {
    id: 2,
    order: 2,
    ancientName: 'Sarayu-Ganga Sangam (Kamashrama)',
    sanskritName: 'सरयू-गङ्गा सङ्गम (कामा श्रम)',
    modernLocation: 'Ballia / Chhapra confluence',
    modernStateOrCountry: 'UP / Bihar border, India',
    coordinates: [25.7500, 84.1500],
    kanda: 'Bala Kanda',
    title: 'Departure with Maharshi Vishwamitra',
    summary: 'Sage Vishwamitra arrives in Ayodhya requesting young Rama and Lakshmana to protect his sacred yajna from marauding demons.',
    detailedNarrative: 'Despite King Dasharatha’s hesitation to send his tender-aged sixteen-year-old son into the wilderness, royal guru Vashistha counselled him to consent. Rama and Lakshmana marched along the southern bank of the Sarayu. At the sacred confluence where Sarayu meets Mother Ganga, Vishwamitra initiated Rama into the esoteric celestial mantras Bala and Atibala, imparting freedom from hunger, fatigue, and weakness.',
    charactersInvolved: ['Sri Rama', 'Lakshmana', 'Maharshi Vishwamitra'],
    keyEvent: 'Bestowal of Bala and Atibala Vidyas',
    scripture: {
      valmiki: {
        kanda: 'Bala Kanda',
        sarga: '22',
        shloka: '13-14',
        text: 'गृहाण वत्सो सलिलं मा भूत् कालस्य पर्ययः । मन्त्रग्रामं गृहाण त्वं बलामतिबलां तथा ॥',
        translation: 'Take this sanctified water, my child; let there be no delay. Receive this cluster of mantras—Bala and Atibala.'
      }
    },
    narration: {
      hindi: {
        title: 'महर्षि विश्वामित्र के साथ गमन एवं दीक्षा',
        text: 'महर्षि विश्वामित्र के यज्ञ की रक्षा के लिए श्री राम और लक्ष्मण जी ने अयोध्या से प्रस्थान किया। सरयू और गंगा जी के पावन संगम पर महर्षि ने दोनों राजकुमारों को बला और अतिबला नामक दिव्य विद्याओं की दीक्षा दी, जिससे उन्हें कभी क्षुधा, तृष्णा या थकावट का अनुभव न हो।'
      },
      english: {
        title: 'Departure with Sage Vishwamitra',
        text: 'Accompanied by Sage Vishwamitra, princes Rama and Lakshmana stepped beyond the comfort of the palace to safeguard the sacred fire yajnas from demonic disruption. At the confluence of rivers Sarayu and Ganga, Vishwamitra initiated them into the mystical mantras of Bala and Atibala, conferring boundless stamina and immunity from fatigue.'
      }
    },
    historicalSignificance: 'Sacred confluence where Lord Shiva burned Kamadeva into ashes; initiation of the princes into divine sciences.',
    presentDayTempleOrSite: 'Bhrigu Ashram, Ballia & Sangameshwar Mahadev',
    travelMode: 'walking',
    iconType: 'water'
  },
  {
    id: 3,
    order: 3,
    ancientName: 'Tataka Vana & Siddhashrama',
    sanskritName: 'ताड़का वन एवं सिद्धाश्रम',
    modernLocation: 'Buxar (Charitravan)',
    modernStateOrCountry: 'Bihar, India',
    coordinates: [25.5647, 83.9777],
    kanda: 'Bala Kanda',
    title: 'Slaying of Tataka & Protection of the Yajna',
    summary: 'Rama neutralizes the ferocious Yakshini Tataka and protects Vishwamitra’s six-day yajna by striking Subahu and Maricha.',
    detailedNarrative: 'Entering the dark, fearsome forest of Tataka, Rama hesitated to strike a female until Vishwamitra instructed him that dharma mandates destroying one who torments living beings. With a single infallible arrow, Rama pierced Tataka’s heart. Pleased beyond measure, Vishwamitra bestowed the divine celestial astras upon Rama. At Siddhashrama, when demons Subahu and Maricha hurled defilements upon the sacrificial fire, Rama sent Maricha flying a hundred yojanas with the Manavastra and slew Subahu.',
    charactersInvolved: ['Sri Rama', 'Lakshmana', 'Maharshi Vishwamitra', 'Tataka', 'Maricha', 'Subahu'],
    keyEvent: 'First victory of Rama over demonic forces; receiving celestial astras',
    scripture: {
      valmiki: {
        kanda: 'Bala Kanda',
        sarga: '30',
        shloka: '15-18',
        text: 'स तेन परमास्त्रेण मानवेन समाहितः । सम्पूर्णं योजनशतं क्षिप्तः सागरसम्प्लवे ॥',
        translation: 'Struck by that supreme Manavastra hurled by Rama, Maricha was thrown a full hundred yojanas away into the roaring sea.'
      }
    },
    narration: {
      hindi: {
        title: 'ताड़का वध एवं सिद्धाश्रम यज्ञ रक्षा',
        text: 'भयभीत कर देने वाले ताड़का वन में पहुँचकर भगवान श्री राम ने गुरु आज्ञा शिरोधार्य कर दुराचारी ताड़का का एक ही बाण में उद्धार कर दिया। सिद्धाश्रम में विश्वामित्र जी के यज्ञ की रक्षा करते हुए प्रभु ने सुबाहु को मार गिराया और मारीच को अपने बाण से सौ योजन दूर समुद्र पार फेंक दिया।'
      },
      english: {
        title: 'Slaying of Tataka & Defence of the Sacred Yajna',
        text: 'Entering the sinister groves of Tataka Vana, Rama acted under the sage’s command to liberate the land from terror, vanquishing the demoness Tataka with a single arrow. At Siddhashrama, Rama defended the holy altars, slaying Subahu and hurling the sorcerer Maricha a hundred leagues across the ocean.'
      }
    },
    historicalSignificance: 'The ancient ashram of Lord Vishnu’s Vamana avatara; consecrated ground where Sage Vishwamitra completed his penance.',
    presentDayTempleOrSite: 'Ram Rekha Ghat and Charitravan, Buxar, Bihar',
    travelMode: 'walking',
    iconType: 'battle'
  },
  {
    id: 4,
    order: 4,
    ancientName: 'Gautama Ashram (Ahilya Sthana)',
    sanskritName: 'गौतमाश्रम (अहल्या उद्धार)',
    modernLocation: 'Ahilya Sthan, Ahiyari (near Darbhanga)',
    modernStateOrCountry: 'Bihar, India',
    coordinates: [26.1542, 85.8918],
    kanda: 'Bala Kanda',
    title: 'Redemption of Devi Ahilya',
    summary: 'Devi Ahilya, turned invisible and cursed by Sage Gautama, is redeemed and restored to her divine splendor by the touch of Rama’s feet.',
    detailedNarrative: 'En route to Mithila, Sage Vishwamitra guided Rama and Lakshmana through an abandoned, celestial hermitage. He narrated the tragic deceit of Indra and how Gautama’s curse caused Ahilya to undergo rigorous penance surviving on air alone. As Rama set foot within the hermitage with reverence, the curse dissolved. Ahilya became visible, radiant like the autumn moon, and worshipped Sri Rama before reuniting with her husband Gautama.',
    charactersInvolved: ['Sri Rama', 'Lakshmana', 'Maharshi Vishwamitra', 'Devi Ahilya', 'Sage Gautama'],
    keyEvent: 'Ahilya Uddhara (Deliverance of Ahilya)',
    scripture: {
      valmiki: {
        kanda: 'Bala Kanda',
        sarga: '49',
        shloka: '15-18',
        text: 'राघवं पूजयामास पाद्येनार्घ्येण चैव हि । प्रतिजग्राह तां पूजां रामो शास्त्रविधानतः ॥',
        translation: 'Ahilya worshipped Raghava offering water for his feet and hospitality, and Rama accepted that worship in accordance with scriptural rites.'
      },
      tulsidas: {
        kanda: 'Bala Kanda',
        dohaOrChaupai: 'Chaupai 210',
        text: 'परसत पद पावन सोक नसावन प्रगट भई तपपुंज सही । देखत रघुनायक जन सुखदायक सनमुख होइ कर जोरि रही ॥',
        meaning: 'At the touch of His holy, sorrow-dispelling feet, she manifested in bodily radiance. Gazing upon the protector of devotees, she stood before Him with folded hands.'
      }
    },
    narration: {
      hindi: {
        title: 'अहल्या उद्धार की पावन गाथा',
        text: 'मिथिला के मार्ग में महर्षि गौतम के तपोवन में प्रभु श्री राम के चरणरज का स्पर्श पाते ही, शापवश पाषाणवत बैठी माता अहल्या का उद्धार हुआ। उनके समस्त संताप मिट गए और वे दिव्य रूप धारण कर भगवान के चरणों में नतमस्तक हो गईं।'
      },
      english: {
        title: 'The Sacred Deliverance of Devi Ahilya',
        text: 'In the tranquil yet abandoned hermitage of Sage Gautama, the sacred touch of Sri Rama’s lotus feet dispelled the agonizing ages-long curse placed upon Devi Ahilya. Restored to her pristine divine brilliance, she bowed in profound devotion to the supreme redeemer.'
      }
    },
    historicalSignificance: 'A cornerstone episode demonstrating the redemptive grace (Kripa) of Sri Rama over karmic retribution.',
    presentDayTempleOrSite: 'Ahilya Sthan Mandir, Ahiyari, Darbhanga, Bihar',
    travelMode: 'walking',
    iconType: 'temple'
  },
  {
    id: 5,
    order: 5,
    ancientName: 'Mithila / Janakpur (Videha Capital)',
    sanskritName: 'जनकपुर (सीता स्वयंवर एवं विवाह)',
    modernLocation: 'Janakpur',
    modernStateOrCountry: 'Madhesh Province, Nepal (bordering Bihar)',
    coordinates: [26.7271, 85.9407],
    kanda: 'Bala Kanda',
    title: 'Sita Swayamvara & Royal Marriage',
    summary: 'Sri Rama effortlessly lifts and breaks Lord Shiva’s Pinaka bow, winning the hand of Princess Sita in the grand court of King Janaka.',
    detailedNarrative: 'King Janaka had proclaimed that only a warrior who could string the mammoth bow of Lord Shiva (Pinaka)—brought to the hall on an eight-wheeled iron carriage by hundreds of men—would marry his daughter Sita. While renowned kings and monarchs failed to even nudge it, young Rama stepped forward upon Vishwamitra’s word, lifted the bow with one hand, and bent it to string it until it snapped with a thunderous crack echoing across all directions. Janaka invited King Dasharatha, and the four brothers were wedded: Rama to Sita, Lakshmana to Urmila, Bharata to Mandavi, and Shatrughna to Shrutakirti.',
    charactersInvolved: ['Sri Rama', 'Devi Sita (Janaki)', 'King Janaka', 'Lakshmana', 'Maharshi Vishwamitra', 'King Dasharatha'],
    keyEvent: 'Breaking of Shiva Dhanush (Pinaka) and Vivaha Mahotsava',
    scripture: {
      valmiki: {
        kanda: 'Bala Kanda',
        sarga: '67',
        shloka: '15-18',
        text: 'आरोपयित्वा मौर्वी च पूरयामास वीर्यवान् । तद्बभञ्ज धनुर्मध्ये नरश्रेष्ठो महायशाः ॥ तस्य शब्दो महानासीन्निर्घातसमनिःस्वनः ।',
        translation: 'Having strung the bowstring, the glorious and valiant hero pulled it back fully. The illustrious foremost among men broke the bow in the middle. A monstrous sound erupted like a crashing thunderbolt!'
      }
    },
    narration: {
      hindi: {
        title: 'शिव धनुष भंजन एवं सीता स्वयंवर',
        text: 'महाराज जनक की सभा में जब कोई भी राजा भगवान शिव के पिनाक धनुष को हिला तक न सका, तब गुरु विश्वामित्र का संकेत पाकर श्री राम ने उस महाधनुष को एक ही हाथ से उठाकर प्रत्यंचा चढ़ाई। धनुष के टूटते ही त्रिभुवन में जय-जयकार गूंज उठी और माता जानकी ने श्री राम के गले में वरमाला डाल दी।'
      },
      english: {
        title: 'Breaking of Shiva’s Bow and Sita Swayamvara',
        text: 'Before the august royal court of King Janaka, where mighty monarchs could not even move Lord Shiva’s celestial bow Pinaka, Sri Rama effortlessly lifted it upon Vishwamitra’s command. As he strung the bowstring, it broke with a deafening crack, and Devi Sita garlanded Rama amidst the jubilant celebrations of Mithila.'
      }
    },
    historicalSignificance: 'Seat of philosopher-king Janaka; holy union of Sri Rama (Narayana) and Sita (Lakshmi).',
    presentDayTempleOrSite: 'Janaki Mandir & Vivah Mandap, Janakpurdham, Nepal',
    travelMode: 'walking',
    iconType: 'temple'
  },
  {
    id: 6,
    order: 6,
    ancientName: 'Return Journey to Ayodhya (Encounter with Parashurama)',
    sanskritName: 'अयोध्या प्रत्यागमन (परशुराम संवाद)',
    modernLocation: 'Northern Plains Route',
    modernStateOrCountry: 'Bihar / Eastern UP border',
    coordinates: [26.4000, 83.5000],
    kanda: 'Bala Kanda',
    title: 'Confrontation with Bhagavan Parashurama',
    summary: 'Furious at the breaking of Shiva’s bow, Sage Parashurama challenges Rama to string the Vaishnava bow, recognizing Rama’s supreme divinity.',
    detailedNarrative: 'As the wedding procession returned toward Ayodhya, fierce winds howled and the earth shook as the dread warrior-sage Parashurama appeared, armed with his battle-axe and Vishnu’s bow (Sharnga). He challenged Rama to draw the bow. Rama took the bow with calm humility, strung it effortlessly, and placed an arrow upon it. Acknowledging that his own avataric mission was complete and that Rama was indeed the supreme Lord of the universe, Parashurama prostrated before Rama and retired to Mount Mahendra for penance.',
    charactersInvolved: ['Sri Rama', 'Bhagavan Parashurama', 'King Dasharatha', 'Lakshmana'],
    keyEvent: 'Transfer of Vaishnava energy from Parashurama to Rama',
    scripture: {
      valmiki: {
        kanda: 'Bala Kanda',
        sarga: '76',
        shloka: '17-20',
        text: 'अक्षयं मधुहन्तारं जानामि त्वां सुरेश्वरम् । धनुषोऽस्य परामर्शात् स्वस्ति तेऽस्तु परन्तप ॥',
        translation: 'By your stringing of this bow, I know you to be the imperishable Slayer of Madhu, the Supreme Lord of the Devas. Hail to you, O vanquisher of foes!'
      }
    },
    narration: {
      hindi: {
        title: 'परशुराम संवाद एवं वैष्णव तेज का मिलन',
        text: 'अयोध्या लौटते समय भगवान परशुराम ने क्रोध में आकर श्री राम को वैष्णव धनुष पर बाण चढ़ाने की चुनौती दी। श्री राम द्वारा सहजता से धनुष चढ़ाने पर परशुराम जी ने पहचान लिया कि यह साक्षात सर्वव्यापी नारायण हैं, और वे श्रद्धापूर्वक नमन कर महेन्द्र पर्वत पर तपस्या हेतु प्रस्थान कर गए।'
      },
      english: {
        title: 'Encounter with Bhagavan Parashurama',
        text: 'En route to Ayodhya, the fearsome warrior-sage Parashurama appeared, challenging Rama to string the celestial Vaishnava bow. When Rama drew it with effortless grace, Parashurama recognized the supreme avataric consciousness before him, yielding his mantle and retiring to Mount Mahendra in deep meditation.'
      }
    },
    historicalSignificance: 'The seamless passing of the divine mantle between two incarnations of Lord Vishnu.',
    presentDayTempleOrSite: 'Parashurama Teertha & historical shrines across Gorakhpur region',
    travelMode: 'walking',
    iconType: 'battle'
  },

  // ==========================================
  // AYODHYA KANDA
  // ==========================================
  {
    id: 7,
    order: 7,
    ancientName: 'Ayodhya Palace (The Exile Decree)',
    sanskritName: 'अयोध्या राजप्रासाद (वनवास आदेश)',
    modernLocation: 'Ayodhya',
    modernStateOrCountry: 'Uttar Pradesh, India',
    coordinates: [26.7950, 82.2020],
    kanda: 'Ayodhya Kanda',
    title: 'The Exile Decree & Renunciation',
    summary: 'On the eve of Rama’s coronation, Queen Kaikeyi, poisoned by hunchback Manthara, invokes two boons: Bharata’s coronation and Rama’s 14-year exile.',
    detailedNarrative: 'King Dasharatha resolved to coronate beloved Rama as Yuvaraja (crown prince). Overwhelmed with envy, the maidservant Manthara poisoned Queen Kaikeyi’s mind. Kaikeyi entered the chamber of wrath (Kopabhavana) and demanded the two boons promised during the ancient Deva-Asura war: Bharata must be anointed King, and Rama must wander the Dandaka forest clad in tree-bark robes for 14 years. To preserve his father’s sacred pledge of truth (Satyam), Rama willingly embraced exile with serene joy. Sita and Lakshmana steadfastly refused to leave his side and joined him.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'King Dasharatha', 'Queen Kaikeyi', 'Manthara'],
    keyEvent: 'Supreme sacrifice for Pitru-Vakya Palana (honoring father’s word)',
    scripture: {
      valmiki: {
        kanda: 'Ayodhya Kanda',
        sarga: '19',
        shloka: '4',
        text: 'न वनं गन्तुकामस्य त्यजतश्च वसुन्धराम् । सर्वलोकातिगस्येव लक्ष्यते चित्तविक्रिया ॥',
        translation: 'Though preparing to depart for the wilderness and relinquishing the entire empire, no perturbation of mind could be discerned in him, who transcended all worldly attachment.'
      }
    },
    narration: {
      hindi: {
        title: 'राज्याभिषेक की पूर्व संध्या और वनवास',
        text: 'अयोध्या में श्री राम के राज्याभिषेक की तैयारियाँ चल रही थीं, परंतु मंथरा की कुटिल मति से प्रभावित होकर रानी कैकेयी ने राजा दशरथ से दो वरदान माँग लिए—भरत को राजगद्दी और राम को चौदह वर्ष का वनवास। पिता के सत्य की रक्षा हेतु श्री राम ने बिना किसी संकोच के वन गमन का निर्णय सहर्ष स्वीकार कर लिया।'
      },
      english: {
        title: 'The Decree of 14-Year Forest Exile',
        text: 'On the eve of Rama’s coronation as crown prince, Queen Kaikeyi, swayed by the malicious counsel of Manthara, demanded two ancient boons: the crown for her son Bharata and fourteen years of forest exile for Rama. Unshaken by sorrow or anger, Rama serene and smiling embraced exile to safeguard his father’s sacred honor.'
      }
    },
    historicalSignificance: 'The supreme demonstration of filial duty, detachment, and adherence to satya and dharma.',
    presentDayTempleOrSite: 'Kopabhavan and Dasharatha Mahal, Ayodhya',
    travelMode: 'walking',
    iconType: 'coronation'
  },
  {
    id: 8,
    order: 8,
    ancientName: 'Tamasa River Banks',
    sanskritName: 'तमसा नदी तट (प्रथम रात्रि विश्राम)',
    modernLocation: 'Near Madhukeshwar, Ayodhya outskirts',
    modernStateOrCountry: 'Uttar Pradesh, India',
    coordinates: [26.6800, 82.2500],
    kanda: 'Ayodhya Kanda',
    title: 'First Night Halt & Leaving the Citizens',
    summary: 'The grieving populace of Ayodhya follows Rama’s chariot; Rama quietly departs while they sleep to save them the pain of wilderness.',
    detailedNarrative: 'Driven by royal charioteer Sumantra, Rama’s chariot halted on the banks of the Tamasa river. Thousands of grieving citizens of Ayodhya, unwilling to live without Rama, slept on the bare ground around him. Recognizing that their love would make exile impossible and cause untold hardship for them, Rama instructed Sumantra to steer the chariot across the river before dawn, masking wheel tracks to give the citizens no choice but to return home.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Sumantra', 'Citizens of Ayodhya'],
    keyEvent: 'Quiet departure at midnight to spare the citizens hardship',
    scripture: {
      valmiki: {
        kanda: 'Ayodhya Kanda',
        sarga: '46',
        shloka: '28-30',
        text: 'एते हि मयि संसक्ता मां कुमार पुराज्जनाः । न त्यजेयुरहं वापि तान् विहाय सुखं वसे ॥',
        translation: 'These citizens are deeply devoted to me. They will not desert me, nor can I live in peace seeing them suffer in the forest.'
      }
    },
    narration: {
      hindi: {
        title: 'तमसा तट पर प्रथम रात्रि और वियोग',
        text: 'अयोध्या के समस्त नागरिक अश्रु बहाते हुए श्री राम के पीछे-पीछे तमसा नदी के तट तक चले आए। प्रजा के अपार कष्ट को देखकर, रात्रि में जब सब निद्रा में थे, प्रभु श्री राम सुमंत्र जी के साथ चुपचाप आगे बढ़ गए, ताकि प्रजाजनों को वन के कठोर कष्ट न झेलने पड़ें।'
      },
      english: {
        title: 'First Night on the Banks of River Tamasa',
        text: 'Grief-stricken citizens of Ayodhya followed Rama’s chariot to the Tamasa river, refusing to return. Seeing their unbearable sorrow, Rama quietly departed before dawn while they rested, sparing the people the harsh rigors of forest life and steering his path deeper into the wilderness.'
      }
    },
    historicalSignificance: 'First night spent outside the royal capital; shows the tender love between Rama and his subjects.',
    presentDayTempleOrSite: 'Tamasa Ashram & Ramchaura temple, Ayodhya district',
    travelMode: 'walking',
    iconType: 'water'
  },
  {
    id: 9,
    order: 9,
    ancientName: 'Shringaverapura (Ganga Crossing)',
    sanskritName: 'शृङ्गवेरपुर (केवट संवाद एवं गङ्गा तरण)',
    modernLocation: 'Singraur (near Prayagraj)',
    modernStateOrCountry: 'Uttar Pradesh, India',
    coordinates: [25.5866, 81.6429],
    kanda: 'Ayodhya Kanda',
    title: 'Meeting King Guha & Kevat’s Devotion',
    summary: 'Nishada King Guha welcomes Rama; Kevat the boatman washes Rama’s feet before ferrying the divine trio across the sacred Ganga.',
    detailedNarrative: 'At Shringaverapura, the boundary of Kosala, Rama was received by his beloved friend Guha, the king of boatmen and forest-dwellers. Rama declined royal food and slept beneath a Shisham tree on a bed of leaves. Here, Rama matted his hair with banyan sap (Vata-Ksheera). The humble boatman Kevat famously washed Rama’s lotus feet, declaring playfully that since the dust of Rama’s feet turned a stone into a woman (Ahilya), he feared his wooden boat might transform into a maiden unless purified! Overjoyed, Kevat rowed them across.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Nishadraj Guha', 'Kevat'],
    keyEvent: 'Kevat washes Rama’s feet; bidding farewell to charioteer Sumantra',
    scripture: {
      tulsidas: {
        kanda: 'Ayodhya Kanda',
        dohaOrChaupai: 'Chaupai 100-101',
        text: 'मागी नाव न केवटु आना । कहइ तुम्हार मरमु मैं जाना ॥ चरन कमल रज कहुं सबु कहई । मानुषीकरनि मूरि कछु अहई ॥ पद नख निरखि देवसरि हरषी । सुनि प्रभु बचन प्रेम रस बरषी ॥',
        meaning: 'When the Lord asked for a boat, Kevat hesitated, saying: "I know your secret! Everyone says the dust of your feet is an herb that turns stone into a woman!" After washing His feet, he rowed them across in pure bliss.'
      }
    },
    narration: {
      hindi: {
        title: 'निषादराज मिलन एवं केवट का अनन्य प्रेम',
        text: 'शृङ्गवेरपुर में बालसखा निषादराज गुह ने श्री राम का भावभीना स्वागत किया। पवित्र गंगा पार कराने के लिए जब नाव माँगी गई, तब भक्त केवट ने प्रभु के चरण धोने की अनोखी हठ की। केवट ने अपने हाथों से प्रभु के चरण धोए और उन्हें भवसागर पार कराने वाले राम को गंगा पार उतारा।'
      },
      english: {
        title: 'Meeting King Guha & Kevat’s Pure Devotion',
        text: 'At Shringaverapura, Nishada chieftain Guha welcomed Rama with open arms. When seeking to cross the holy Ganga, the humble boatman Kevat playfully insisted on washing Rama’s feet first, fearing the miraculous dust that revived Ahilya might turn his wooden boat into a woman! He rowed the divine family across in pure spiritual ecstasy.'
      }
    },
    historicalSignificance: 'Symbolizes the dissolution of social barriers through pure spiritual devotion (Bhakti).',
    presentDayTempleOrSite: 'Shringaverapura Archaeological Site & Ram Shringavera Mandir',
    travelMode: 'boat',
    iconType: 'water'
  },
  {
    id: 10,
    order: 10,
    ancientName: 'Prayaga (Triveni Sangam)',
    sanskritName: 'प्रयागराज (भारद्वाज आश्रम)',
    modernLocation: 'Prayagraj (Allahabad)',
    modernStateOrCountry: 'Uttar Pradesh, India',
    coordinates: [25.4358, 81.8463],
    kanda: 'Ayodhya Kanda',
    title: 'Blessings of Sage Bharadwaja at Triveni Sangam',
    summary: 'Rama visits the ashram of Sage Bharadwaja at the holy confluence of Ganga, Yamuna, and mystical Saraswati, receiving counsel to settle in Chitrakoot.',
    detailedNarrative: 'Reaching the king of pilgrimages (Teertharaja Prayaga), Rama, Sita, and Lakshmana arrived at the grand hermitage of Maharshi Bharadwaja, surrounded by disciples and Vedic chanting. The great seer offered them hospitality and urged them to reside with him. Rama politely explained that being too close to the settlements would draw constant crowds from Ayodhya. Sage Bharadwaja then directed them ten leagues southwest to the sacred, secluded hill of Chitrakoot.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Maharshi Bharadwaja'],
    keyEvent: 'Guidance to make Chitrakoot their abode',
    scripture: {
      valmiki: {
        kanda: 'Ayodhya Kanda',
        sarga: '54',
        shloka: '28-29',
        text: 'दशक्रोश इतस्तात गिरिर्यस्मिन् निवत्स्यसि । महर्षिसेवितः पुण्यः सर्वतः सुखदर्शनः ॥ चित्रकूट इति ख्यातो गन्धमादनसन्निभः ।',
        translation: 'Ten krosas from here, my dear Rama, lies a holy mountain where you may dwell. Revered by great sages, delightful on all sides, it is famed as Chitrakoot, resembling Mount Gandhamadana.'
      }
    },
    narration: {
      hindi: {
        title: 'तीर्थराज प्रयाग एवं महर्षि भारद्वाज आश्रम',
        text: 'गंगा, यमुना और अदृश्य सरस्वती के पावन संगम पर स्थित तीर्थराज प्रयाग में प्रभु श्री राम ने महर्षि भारद्वाज के दर्शन किए। महर्षि के आश्रम में संतों ने प्रभु का सत्कार किया और भारद्वाज जी ने उन्हें शांत और रमणीक चित्रकूट पर्वत पर कुटी बनाकर रहने का परामर्श दिया।'
      },
      english: {
        title: 'Pilgrimage to Triveni Sangam & Bharadwaja Ashram',
        text: 'At the sacred confluence of Ganga, Yamuna, and Saraswati, Rama visited the sprawling hermitage of Maharshi Bharadwaja in Prayaga. Delighted by the royal exiles’ virtue, Sage Bharadwaja guided Rama toward the tranquil, forested slopes of Mount Chitrakoot as the ideal haven for their exile.'
      }
    },
    historicalSignificance: 'The holiest confluence (Triveni) of Sanatana Dharma; Vedic university of Sage Bharadwaja.',
    presentDayTempleOrSite: 'Bharadwaja Ashram & Triveni Sangam, Prayagraj',
    travelMode: 'walking',
    iconType: 'temple'
  },
  {
    id: 11,
    order: 11,
    ancientName: 'Yamuna River Crossing',
    sanskritName: 'कालिन्दी / यमुना तरण',
    modernLocation: 'Near Rajapur / Mau',
    modernStateOrCountry: 'Uttar Pradesh, India',
    coordinates: [25.3200, 81.3500],
    kanda: 'Ayodhya Kanda',
    title: 'Crossing the Dark Waters of the Yamuna',
    summary: 'Lakshmana constructs a sturdy raft of bamboo and reeds; Devi Sita prays to River Yamuna for the safe completion of their vows.',
    detailedNarrative: 'To cross the deep and swift Kalindi (Yamuna), Lakshmana felled wild timber, bamboo, and reed grass, tying them with vines to construct an ingenious raft. Covering it with fragrant leafy boughs, he helped Sita board safely. In the midst of the river, Devi Sita prayed to goddess Yamuna, pledging to offer gifts and prayers upon Rama’s safe, victorious return to Ayodhya. They landed on the southern bank beneath the colossal Shyamavata tree.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana'],
    keyEvent: 'Building the raft and Sita’s solemn vow to Devi Yamuna',
    scripture: {
      valmiki: {
        kanda: 'Ayodhya Kanda',
        sarga: '55',
        shloka: '14-16',
        text: 'ततः संस्तार्य कालिन्दीं प्रहृष्टा तत्र जानकी । पादपैरग्रजस्तूर्णमुदकक्रान्तिमाचरत् ॥',
        translation: 'Rejoicing, Janaki worshipped Kalindi as they crossed over, while the elder brother (Rama) quickly made their crossing across the waters.'
      }
    },
    narration: {
      hindi: {
        title: 'कालिन्दी तरण एवं श्यामावट दर्शन',
        text: 'लक्ष्मण जी ने बांस और काष्ठ की एक सुदृढ़ बेड़ी (नाव) तैयार की, जिस पर बैठकर माता सीता और श्री राम ने श्यामल यमुना जी को पार किया। मध्य धारा में जानकी जी ने यमुना मैया से सकुशल वनवास पूर्ण होने की प्रार्थना की और दक्षिण तट पर विशाल श्यामावट के दर्शन किए।'
      },
      english: {
        title: 'Crossing the Azure Waters of Yamuna',
        text: 'With ingenuity and skill, Lakshmana crafted a sturdy raft of bamboo and wild reeds to ferry Sita and Rama across the swirling currents of Yamuna. Midway across the river, Devi Sita offered heartfelt prayers for Rama’s triumphant return, stepping ashore beside the colossal Shyamavata tree.'
      }
    },
    historicalSignificance: 'Marks the transition from Gangetic plains into the rugged Vindhya hill country.',
    presentDayTempleOrSite: 'Shyamavata Teerth & Yamuna Ghats, Banda/Chitrakoot district',
    travelMode: 'boat',
    iconType: 'water'
  },
  {
    id: 12,
    order: 12,
    ancientName: 'Chitrakoot (Mandakini River & Hermitage)',
    sanskritName: 'चित्रकूट (मन्दाकिनी तट एवं पर्णकुटी)',
    modernLocation: 'Chitrakoot',
    modernStateOrCountry: 'UP / MP border, India',
    coordinates: [25.1764, 80.8655],
    kanda: 'Ayodhya Kanda',
    title: 'Hermitage on Mount Chitrakoot & Sage Valmiki Meeting',
    summary: 'Rama builds a leaf cottage on the forested slopes of Mount Chitrakoot along the pristine Mandakini River, meeting Sage Valmiki.',
    detailedNarrative: 'Enchanted by the singing birds, flowering trees, and crystal streams of Mandakini, Rama chose Chitrakoot as their home. Lakshmana constructed a sacred leaf-thatched hermitage (Parnakuti) following Vastu rites. Here Rama met Sage Valmiki himself, who poetically described the heart of a pure devotee as the true residence of Rama. Meanwhile, in Ayodhya, King Dasharatha died of heartbreak, calling Rama’s name with his final breath.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Maharshi Valmiki'],
    keyEvent: 'Establishment of the idyllic Chitrakoot hermitage',
    scripture: {
      valmiki: {
        kanda: 'Ayodhya Kanda',
        sarga: '56',
        shloka: '35',
        text: 'ऐणेयं मांसमाहृत्य शालां संप्रोक्ष्य राघवः । चकार बलिमुद्दिष्टं सर्वभूतसमन्वितम् ॥',
        translation: 'Performing the purificatory consecrations for the cottage, Raghava offered propitiatory offerings to all elemental spirits.'
      }
    },
    narration: {
      hindi: {
        title: 'चित्रकूट में पर्णकुटी और महर्षि वाल्मीकि संवाद',
        text: 'मन्दाकिनी नदी के रमणीय तट पर कामदगिरि के निकट लक्ष्मण जी ने एक सुंदर पर्णकुटी का निर्माण किया। यहाँ श्री राम की भेंट महर्षि वाल्मीकि से हुई। वाल्मीकि जी ने कहा कि जो राग-द्वेष से मुक्त हैं, उनका हृदय ही आपका सच्चा निवास है। प्रभु ने यहाँ सुखपूर्वक वनवास के प्रारंभिक वर्ष बिताए।'
      },
      english: {
        title: 'The Forest Hermitage of Mount Chitrakoot',
        text: 'Nestled beside the tranquil Mandakini River, Lakshmana built a sacred leaf-thatched hermitage on Mount Chitrakoot. Here Rama met Sage Valmiki, who beautifully proclaimed that the unblemished heart of a pure devotee is the Lord’s true abode.'
      }
    },
    historicalSignificance: 'Where Rama spent nearly twelve serene years of exile; celebrated in Tulsidas’s poetry.',
    presentDayTempleOrSite: 'Ramghat on Mandakini, Kamadgiri Parikrama, and Janaki Kund, Chitrakoot',
    travelMode: 'walking',
    iconType: 'forest'
  },
  {
    id: 13,
    order: 13,
    ancientName: 'Chitrakoot (Bharata Milap)',
    sanskritName: 'चित्रकूट (भरत मिलाप एवं पादुका अर्पण)',
    modernLocation: 'Bharata Milap Mandir, Chitrakoot',
    modernStateOrCountry: 'Madhya Pradesh, India',
    coordinates: [25.1850, 80.8750],
    kanda: 'Ayodhya Kanda',
    title: 'Bharata Milap & The Sacred Padukas',
    summary: 'Prince Bharata refuses the crown, treks to Chitrakoot with the royal mothers, and begs Rama to return; Rama gives his sandals to rule in his name.',
    detailedNarrative: 'Returning from Kekaya, Bharata vehemently condemned his mother Kaikeyi and performed his father’s final rites. He marched to Chitrakoot with the queens, ministers, and army to bring Rama back. The reunion of the two brothers moved even the forest trees to tears. Rama remained steadfast in honoring Dasharatha’s royal word. Bharata vowed to live as an ascetic in Nandigram outside Ayodhya, placing Rama’s gem-studded wooden sandals (Charan Paduka) on the royal throne as the reigning sovereign.',
    charactersInvolved: ['Sri Rama', 'Prince Bharata', 'Lakshmana', 'Shatrughna', 'Queen Kaushalya', 'Queen Sumitra', 'Queen Kaikeyi', 'Sage Vashistha'],
    keyEvent: 'Bestowal of the divine Padukas; Bharata’s vow of Nandigram regency',
    scripture: {
      valmiki: {
        kanda: 'Ayodhya Kanda',
        sarga: '112',
        shloka: '21-22',
        text: 'अधिरोह त्वमेतौ हि पादौ लोकेश्वरोत्तम । पादौ समर्पयामास पादुके चाग्रतो नृपः ॥',
        translation: 'Step upon these wooden sandals, O supreme Lord of the worlds! And the King (Rama) placed his feet upon them and handed them to Bharata.'
      },
      tulsidas: {
        kanda: 'Ayodhya Kanda',
        dohaOrChaupai: 'Chaupai 315',
        text: 'भरत सील गुन बिनय बड़ाई । कहत सुनत सुखु पाइ न थोर । पद नख मनि मनिगन ज्योती । सोहति पादुका रुचिर अनूपी ॥',
        meaning: 'Bharata received the exquisite, peerless sandals, beaming with the lustrous aura of the Lord’s toenails, holding them reverently on his head.'
      }
    },
    narration: {
      hindi: {
        title: 'भरत मिलाप एवं चरण पादुका अर्पण',
        text: 'अयोध्या की सेना और तीनों माताओं के साथ भरत चित्रकूट पहुँचे और प्रभु श्री राम से अयोध्या लौटने का अनुनय किया। भ्रातृ-प्रेम का यह मिलन पाषाणों को भी पिघलाने वाला था। पितृ-वचन की रक्षा के लिए राम अडिग रहे, तब भरत जी ने प्रभु की चरण पादुकाएँ अपने शीश पर धारण कीं और नन्दिग्राम से पादुका-शासन का संकल्प लिया।'
      },
      english: {
        title: 'The Tears of Bharata Milap and the Sacred Sandals',
        text: 'Refusing to usurp the throne, Bharata marched to Chitrakoot with the royal queens and sages, pleading with Rama to return. In a scene of unparalleled brotherly love, Rama remained steadfast in upholding truth, bestowing his sacred wooden sandals upon Bharata, who ruled from Nandigram as Rama’s humble regent.'
      }
    },
    historicalSignificance: 'The ultimate symbol of fraternal selfless love (Bhratri-Prema) in world literature.',
    presentDayTempleOrSite: 'Bharata Milap Mandir and Charan Paduka Sthal, Chitrakoot',
    travelMode: 'walking',
    iconType: 'coronation'
  },

  // ==========================================
  // ARANYA KANDA
  // ==========================================
  {
    id: 14,
    order: 14,
    ancientName: 'Atri-Anasuya Ashram',
    sanskritName: 'अत्रि-अनसूया आश्रम (दण्डकारण्य प्रवेश)',
    modernLocation: 'Sati Anasuya Ashram (Patha Forest, Chitrakoot)',
    modernStateOrCountry: 'Madhya Pradesh, India',
    coordinates: [25.1050, 80.8400],
    kanda: 'Aranya Kanda',
    title: 'Blessings of Sage Atri & Sati Anasuya',
    summary: 'Devi Sita receives unfading celestial silk and divine adornments from Sage Anasuya; the trio enters the deep Dandakaranya wilderness.',
    detailedNarrative: 'Seeking deeper seclusion after the arrival of Ayodhya’s crowds, Rama journeyed south to the hermitage of Maharshi Atri and his celebrated wife Sati Anasuya. Anasuya praised Sita’s steadfast devotion to her husband amidst royal exile. She gifted Sita celestial garments, flower garlands, and fragrant unguents that would never wither, fade, or gather dust. Blessed by the divine couple, Rama plunged into the mysterious primeval forest of Dandakaranya.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Maharshi Atri', 'Mata Anasuya'],
    keyEvent: 'Bestowal of celestial garments upon Devi Sita',
    scripture: {
      valmiki: {
        kanda: 'Aranya Kanda',
        sarga: '1',
        shloka: '1-3',
        text: 'प्रविश्य तु महारण्यं दण्डकारण्यमात्मवान् । रामो ददर्श दुर्धर्षस्तापसाश्रममण्डलम् ॥',
        translation: 'Entering the great wilderness known as Dandakaranya, the self-controlled, invincible Rama beheld a circular cluster of sacred hermitages of ascetics.'
      }
    },
    narration: {
      hindi: {
        title: 'अत्रि-अनसूया आशीर्वाद एवं दण्डकारण्य प्रवेश',
        text: 'चित्रकूट से आगे बढ़कर श्री राम, सीता और लक्ष्मण महर्षि अत्रि और सती अनसूया के पावन आश्रम पहुँचे। माता अनसूया ने जानकी जी को पतिव्रत धर्म की महिमा बताते हुए दिव्य वस्त्र और आभूषण प्रदान किए, जो कभी मलिन नहीं होते। यहीं से प्रभु ने घनघोर दण्डकारण्य वन में प्रवेश किया।'
      },
      english: {
        title: 'Blessings of Sage Atri & Sati Anasuya',
        text: 'Heading south into deeper wilderness, the exiles reached the sacred abode of Sage Atri and Sati Anasuya. Mata Anasuya blessed Devi Sita with celestial silks and fragrant unguents that would never wither or fade, consecrating their journey into the deep primeval forests of Dandakaranya.'
      }
    },
    historicalSignificance: 'The gateway into the ten-year wandering through the Deccan wilderness.',
    presentDayTempleOrSite: 'Sati Anasuya Ashram, Mandakini river source, MP',
    travelMode: 'walking',
    iconType: 'forest'
  },
  {
    id: 15,
    order: 15,
    ancientName: 'Sharabhanga & Sutikshna Ashrams',
    sanskritName: 'शरभङ्ग एवं सुतीक्ष्ण आश्रम (अस्थि संचय दर्शन)',
    modernLocation: 'Satna / Panna Forest region',
    modernStateOrCountry: 'Madhya Pradesh, India',
    coordinates: [24.7500, 80.6000],
    kanda: 'Aranya Kanda',
    title: 'The Solemn Vow to Protect the Sages',
    summary: 'Rama witnesses mountains of bones of slaughtered ascetics, raising his right arm in a thunderous oath to purge the forest of demons.',
    detailedNarrative: 'Sage Sharabhanga, having delayed his ascension to Brahmaloka solely to behold Rama, entered the sacred fire in yogic samadhi before Rama’s eyes. The resident rishis then guided Rama to a clearing, showing him heaps of bones of rishis who had been devoured by Rakshasas while meditating. Heartbroken and enraged, Sri Rama raised his mighty right arm, making the legendary vow: "Nisichar Heen Karahun Mahi" (I shall rid this earth of night-prowling demons).',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Sage Sharabhanga', 'Sage Sutikshna'],
    keyEvent: 'The Great Vow of demon eradication (Nisichar Heen Karahun Mahi)',
    scripture: {
      valmiki: {
        kanda: 'Aranya Kanda',
        sarga: '6',
        shloka: '17-18',
        text: 'एहि पश्य शरीराणि मुनीनां भावितात्मनाम् । हतानां राक्षसैर्घोरैर्बहूनां बहुधोत्सवे ॥',
        translation: 'Come and behold the skeletal remains of pure-souled sages, slaughtered in large numbers in ruthless frenzy by terrifying Rakshasas!'
      },
      tulsidas: {
        kanda: 'Aranya Kanda',
        dohaOrChaupai: 'Chaupai 8',
        text: 'निसिचर हीन करहुं महि भुज उठाइ पन कीन्ह । सकल मुनिन्ह के आश्रमन्हि जाइ जाइ सुख दीन्ह ॥',
        meaning: 'Raising His mighty arm, the Lord took a solemn oath: "I will make this earth devoid of demons!" He visited the hermitage of every sage, bestowing fearless peace.'
      }
    },
    narration: {
      hindi: {
        title: 'अस्थि-समूह दर्शन एवं श्री राम की भीषण प्रतिज्ञा',
        text: 'दण्डकारण्य में मुनियों के आश्रमों के निकट राक्षसों द्वारा खाए गए ऋषियों की हड्डियों के विशाल ढेर देखकर श्री राम का हृदय करुणा और क्रोध से भर गया। प्रभु ने अपनी दाहिनी भुजा उठाकर यह अमर प्रतिज्ञा की: "निसिचर हीन करहुं महि"—अर्थात मैं इस पृथ्वी को निशाचरों से मुक्त कर दूँगा।'
      },
      english: {
        title: 'The Solemn Oath: Ridding the Earth of Demonic Terror',
        text: 'Beholding mounds of bleached bones belonging to holy ascetics devoured by marauding Rakshasas, Rama raised his mighty right arm and took a solemn cosmic oath: to cleanse the earth of demonic oppression and restore peace to the hermitages of the righteous.'
      }
    },
    historicalSignificance: 'The moral and martial turning point of the exile from peaceful seclusion to active divine justice.',
    presentDayTempleOrSite: 'Sharabhanga Ashram and Sutikshna Ashram, Satna district, MP',
    travelMode: 'walking',
    iconType: 'battle'
  },
  {
    id: 16,
    order: 16,
    ancientName: 'Maharshi Agastya Ashram',
    sanskritName: 'अगस्त्याश्रम (दिव्य आयुध प्राप्ति)',
    modernLocation: 'Akole / Agastyashram (near Nashik)',
    modernStateOrCountry: 'Maharashtra, India',
    coordinates: [19.5400, 74.0000],
    kanda: 'Aranya Kanda',
    title: 'Sage Agastya & The Bestowal of Divine Weapons',
    summary: 'The revered Sage Agastya presents Rama with Lord Vishnu’s celestial bow, inexhaustible quivers, and directs him to build an ashram at Panchavati.',
    detailedNarrative: 'After wandering for ten years among various hermitages in Dandakaranya, Rama arrived at the glorious hermitage of Sage Agastya, the master who subdued the Vindhya mountains and drank the oceans. Agastya rejoiced at Rama’s arrival and presented him with the divine bow of Vishnu fashioned by Vishwakarma, the impenetrable golden armor of Indra, two quivers containing inexhaustible celestial arrows, and a golden dagger. Knowing the future, Agastya directed Rama to the tranquil banks of Godavari at Panchavati.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Maharshi Agastya'],
    keyEvent: 'Bestowal of Vishnu’s celestial bow and quivers; advice to dwell at Panchavati',
    scripture: {
      valmiki: {
        kanda: 'Aranya Kanda',
        sarga: '12',
        shloka: '32-34',
        text: 'इदं दिव्यं महच्चापं हेमपृष्ठं दुरासदम् । वैष्णवं पुरुषव्याघ्र निर्मितं विश्वकर्मणा ॥ अमोघाः सूर्यसंकाशाः शराश्चाशीविषोपमाः ।',
        translation: 'This is the divine, formidable Vaishnava bow, coated in gold, crafted by Vishwakarma, O tiger among men! And here are infallible, sun-radiant arrows like venomous serpents.'
      }
    },
    narration: {
      hindi: {
        title: 'अगस्त्य ऋषि से दिव्य वैष्णव धनुष की प्राप्ति',
        text: 'विन्ध्य पर्वत को झुकाने वाले महर्षि अगस्त्य के पावन आश्रम में प्रभु श्री राम का भव्य स्वागत हुआ। महर्षि ने भगवान विष्णु का विश्वकर्मा-निर्मित दिव्य धनुष, कभी रिक्त न होने वाले दो तूणीर और अमोघ बाण श्री राम को सौंपे और उन्हें गोदावरी तट पर पंचवटी में निवास करने का निर्देश दिया।'
      },
      english: {
        title: 'Sage Agastya and Bestowal of Celestial Weapons',
        text: 'At the ashram of Sage Agastya, conqueror of mountains and oceans, Rama was presented with Lord Vishnu’s celestial bow, inexhaustible quivers, and luminous armor crafted by Vishwakarma. Foreseeing the battles ahead, Agastya directed Rama to establish a cottage at Panchavati on the banks of Godavari.'
      }
    },
    historicalSignificance: 'Arming the warrior avatar for the cataclysmic conflict awaiting him.',
    presentDayTempleOrSite: 'Agastya Ashram, Akole, Ahmednagar/Nashik border, Maharashtra',
    travelMode: 'walking',
    iconType: 'temple'
  },
  {
    id: 17,
    order: 17,
    ancientName: 'Panchavati (Godavari River)',
    sanskritName: 'पञ्चवटी (शूर्पणखा नासिका छेदन)',
    modernLocation: 'Nashik (Panchavati)',
    modernStateOrCountry: 'Maharashtra, India',
    coordinates: [19.9975, 73.7898],
    kanda: 'Aranya Kanda',
    title: 'Mutilation of Shurpanakha & Defeat of 14,000 Rakshasas',
    summary: 'Lakshmana builds a cottage amidst five sacred banyan trees; Shurpanakha attacks Sita and is disfigured, igniting the conflict with Ravana.',
    detailedNarrative: 'On the banks of the sacred Godavari, Lakshmana raised a hermitage beneath five revered banyan trees (Panchavati). One day, the demoness Shurpanakha, sister of Ravana, was smitten by Rama’s beauty. Rejected by both Rama and Lakshmana, she lunged furiously to devour Sita. Lakshmana intervened with lightning speed, slicing off her nose and ears. Shurpanakha fled screaming to her brother Khara, viceroy of Janashthana. Khara and Dushana attacked with an army of 14,000 rakshasas; Rama alone vanquished the entire host in seventy-two minutes.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Shurpanakha', 'Khara', 'Dushana', 'Trishira'],
    keyEvent: 'Destruction of Khara-Dushana’s 14,000-strong army',
    scripture: {
      valmiki: {
        kanda: 'Aranya Kanda',
        sarga: '30',
        shloka: '38',
        text: 'तस्मिन् महति सङ्ग्रामे जनस्थाने रघूद्वहः । रराक्षसान् निजघानाशु चतुर्दश सहस्रशः ॥',
        translation: 'In that monumental battle at Janasthana, the descendant of Raghu swiftly annihilated the fourteen thousand Rakshasas.'
      }
    },
    narration: {
      hindi: {
        title: 'पंचवटी में शूर्पणखा प्रसंग और खर-दूषण संहार',
        text: 'गोदावरी तट पर पंचवटी में निवास के दौरान रावण की बहन शूर्पणखा ने सीता जी पर आक्रमण करने का दुस्साहस किया। लक्ष्मण जी ने उसके नाक और कान काट दिए। प्रतिशोध लेने आए खर और दूषण के चौदह हज़ार राक्षसों की सेना को अकेले श्री राम ने अपने गांडीव-समान धनुष से धूल चटा दी।'
      },
      english: {
        title: 'Panchavati: Disfiguring of Shurpanakha and Vanquishing 14,000 Demons',
        text: 'Beside the sacred Godavari at Panchavati, the demoness Shurpanakha attempted to harm Sita and was swiftly disfigured by Lakshmana. When her brothers Khara and Dushana retaliated with a terrifying army of fourteen thousand Rakshasas, Rama alone routed the entire demonic legion in a matter of moments.'
      }
    },
    historicalSignificance: 'The trigger that spurred Ravana to retaliate through deceit.',
    presentDayTempleOrSite: 'Kalaram Temple, Sita Gumpha, and Ramkund, Panchavati, Nashik',
    travelMode: 'walking',
    iconType: 'battle'
  },
  {
    id: 18,
    order: 18,
    ancientName: 'Panchavati (The Golden Deer & Abduction)',
    sanskritName: 'पञ्चवटी (कपट मृग एवं सीता हरण)',
    modernLocation: 'Nashik (Sita Gumpha)',
    modernStateOrCountry: 'Maharashtra, India',
    coordinates: [20.0050, 73.7950],
    kanda: 'Aranya Kanda',
    title: 'The Golden Deer Deception & Abduction of Sita',
    summary: 'Maricha assumes the form of a golden deer; Ravana arrives disguised as a mendicant and abducts Sita, flying south in his aerial chariot.',
    detailedNarrative: 'Ravana enlisted the sorcerer Maricha, who transformed into an irresistible golden deer with jewel-studded antlers to lure Rama far into the woods. Mortally struck by Rama’s arrow, Maricha cried out in Rama’s voice: "Ha Sita! Ha Lakshmana!". Anxious, Sita pleaded with Lakshmana to rush to his brother’s aid. Lakshmana drew a protective boundary (Lakshmana Rekha) and departed reluctantly. Ravana seized the moment, approached in the garb of an ascetic sannyasin, tricked Sita into stepping across the line to give alms, seized her, and flew south across the skies.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Ravana', 'Maricha'],
    keyEvent: 'Abduction of Devi Sita by Dashanana Ravana',
    scripture: {
      valmiki: {
        kanda: 'Aranya Kanda',
        sarga: '49',
        shloka: '16-17',
        text: 'जग्राह रावणः सीतां बुधः खे रोहिणीमिव । वामेन सीतां पद्माक्षीं मूर्धजेषु करेण सः ॥',
        translation: 'Ravana seized Sita as the malefic planet Mars seizes Rohini in the heavens; with his left hand he grasped lotus-eyed Sita by her locks, and with his right by her waist.'
      }
    },
    narration: {
      hindi: {
        title: 'स्वर्ण मृग छल और माता जानकी का हरण',
        text: 'मारीच ने स्वर्ण मृग का कपट रूप धारण कर श्री राम को दूर ले गया। लक्ष्मण जी के जाते ही लंकेश रावण संन्यासी का वेश धरकर आया और छलपूर्वक माता सीता का हरण कर दक्षिण दिशा में आकाश मार्ग से ले उड़ा। संपूर्ण प्रकृति इस दारुण विलाप से कांप उठी।'
      },
      english: {
        title: 'The Golden Deer Illusion and Abduction of Sita',
        text: 'Through the illusion of the golden deer Maricha, Ravana lured Rama and Lakshmana into the deep woods. Disguised as a wandering mendicant, the demon emperor deceived Sita across the threshold, seizing her and fleeing southward across the heavens in his aerial chariot.'
      }
    },
    historicalSignificance: 'The central inciting catastrophe of the epic that set the cosmic war in motion.',
    presentDayTempleOrSite: 'Sita Gumpha (Sita’s Cave), Panchavati, Nashik',
    travelMode: 'walking',
    iconType: 'forest'
  },
  {
    id: 19,
    order: 19,
    ancientName: 'Jatayu Sthana / Sarva Teertham',
    sanskritName: 'जटायु मोक्ष (लेपाक्षी / सर्वतीर्थ)',
    modernLocation: 'Lepakshi (Andhra) / Taked (Maharashtra)',
    modernStateOrCountry: 'Andhra Pradesh / Maharashtra, India',
    coordinates: [14.0336, 77.6083],
    kanda: 'Aranya Kanda',
    title: 'Jatayu’s Valorous Battle & Attainment of Moksha',
    summary: 'The elderly vulture king Jatayu battles Ravana in the sky, sacrificing his life; Rama lovingly performs his funeral rites and grants him liberation.',
    detailedNarrative: 'Hearing Sita’s agonizing cries from the sky, the noble vulture king Jatayu intercepted Ravana’s chariot, smashing his armor, killing his mules, and shattering his bow. Ravana drew the crescent sword Chandrahasa and severed Jatayu’s wings. Falling to the earth, Jatayu clung to life solely to deliver the news to Rama. When Rama and Lakshmana arrived searching frantically, the dying king disclosed that Ravana had taken Sita southward. Rama held Jatayu in his lap, wept as if for King Dasharatha, performed his cremation rites, and granted him immediate Vaikuntha Moksha.',
    charactersInvolved: ['Sri Rama', 'Lakshmana', 'Jatayu', 'Ravana', 'Devi Sita'],
    keyEvent: 'Jatayu’s supreme sacrifice and funeral rites by Sri Rama',
    scripture: {
      valmiki: {
        kanda: 'Aranya Kanda',
        sarga: '68',
        shloka: '29-30',
        text: 'मया त्वं समनुज्ञातो गच्छ लोकाननुत्तमान् । गृध्रराज महाभाग मत्प्रसादाद् गमिष्यसि ॥',
        translation: 'Permitted by Me, ascend to the highest celestial realms! O noble King of Vultures, by My divine grace you shall attain the supreme abode.'
      },
      tulsidas: {
        kanda: 'Aranya Kanda',
        dohaOrChaupai: 'Chaupai 32',
        text: 'परम बिचित्र रूप धरि गीध चला बैकुंठ । राम कृपा तें पावा सो गति जो दुर्लभ मुनिन्हहिं संत ॥',
        meaning: 'Assuming a sublime divine form, the vulture departed for Vaikuntha, attaining by Rama’s grace that transcendent state which even realized sages strive for.'
      }
    },
    narration: {
      hindi: {
        title: 'वीर जटायु का बलिदान एवं परम मोक्ष',
        text: 'आकाश में सीता जी की पुकार सुनकर वृद्ध गीधराज जटायु ने रावण के रथ को ध्वस्त कर भीषण युद्ध किया। रावण ने तलवार से उनके पंख काट दिए। मरणासन्न जटायु ने श्री राम को रावण द्वारा दक्षिण दिशा में ले जाने का समाचार दिया। प्रभु ने पिता समान जटायु का अंतिम संस्कार कर उन्हें सीधे बैकुंठ धाम प्रदान किया।'
      },
      english: {
        title: 'Jatayu’s Supreme Valor and Eternal Salvation',
        text: 'Hearing Sita’s cries in the sky, the aged vulture king Jatayu fought valiantly against Ravana, shattering his chariot before his wings were severed. Clinging to life, Jatayu informed Rama of Sita’s abduction southward. Weeping in gratitude, Rama performed his funeral rites, granting him supreme liberation in Vaikuntha.'
      }
    },
    historicalSignificance: 'Exemplifies supreme devotion, courage, and unconditional grace awarded to bird and beast alike.',
    presentDayTempleOrSite: 'Lepakshi Temple (Jatayu Theme Park & Footprint), Sri Sathya Sai district, AP',
    travelMode: 'walking',
    iconType: 'battle'
  },

  // ==========================================
  // KISHKINDHA KANDA
  // ==========================================
  {
    id: 20,
    order: 20,
    ancientName: 'Pampa Sarovar (Shabari Ashram)',
    sanskritName: 'पम्पा सरोवर (शबरी आश्रम)',
    modernLocation: 'Near Anegundi / Hampi',
    modernStateOrCountry: 'Karnataka, India',
    coordinates: [15.3580, 76.4780],
    kanda: 'Kishkindha Kanda',
    title: 'The Unconditional Devotion of Shabari',
    summary: 'Rama reaches the pristine Lake Pampa and visits the elderly ascetic Shabari, who welcomes him with pure devotion and sweet forest berries.',
    detailedNarrative: 'Directed by the liberated Gandharva Kabandha, Rama and Lakshmana arrived at the lotus-covered Lake Pampa. There lived the aged ascetic Shabari, disciple of Sage Matanga, who had waited decades for Rama’s arrival. In overflowing devotion, she offered Rama sweet wild berries (tasting each one to ensure only the sweetest reached her Lord). Rama accepted them with supreme delight, proclaiming that love and devotion (Navadha Bhakti) alone matter, not caste, lineage, or worldly status. Shabari then directed Rama to Rishyamukha hill to ally with the exiled Vanara prince Sugriva.',
    charactersInvolved: ['Sri Rama', 'Lakshmana', 'Shabari Mata'],
    keyEvent: 'Shabari’s berries and the teaching of Navadha Bhakti (Nine forms of devotion)',
    scripture: {
      valmiki: {
        kanda: 'Aranya Kanda',
        sarga: '74',
        shloka: '32-34',
        text: 'चीराजिनधरा वृद्धा जटाचीराम्बरधरा । पादयोः पतिता मूर्ध्ना रामस्य शुभलक्षणा ॥',
        translation: 'Clad in bark and deer skin, with matted hair, the aged ascetic woman bowed her head and prostrated at the auspicious lotus feet of Rama.'
      },
      tulsidas: {
        kanda: 'Aranya Kanda',
        dohaOrChaupai: 'Chaupai 34-35',
        text: 'कह रघुपति सुनु भामिनि बाता । मानउँ एक भगति कर नाता ॥ जाति पांति कुल धर्म बड़ाई । धन बल परिजन गुन चतुराई ॥ भगति हीन नर सोहइ कैसा । बिनु जल बारिद देखिअ जैसा ॥',
        meaning: 'The Lord said: "Listen, noble lady! I recognize only one relationship—that of pure devotion. Devoid of devotion, a man with status, wealth, and power is like a cloud without rain."'
      }
    },
    narration: {
      hindi: {
        title: 'पम्पा सरोवर एवं माता शबरी की अनन्य भक्ति',
        text: 'पवित्र पम्पा सरोवर के तट पर मतंग ऋषि की शिष्या वृद्धा शबरी वर्षों से प्रभु श्री राम की प्रतीक्षा कर रही थी। शबरी ने प्रेम से चख-चखकर मीठे बेर प्रभु को अर्पित किए। श्री राम ने नवधा भक्ति का उपदेश देते हुए कहा कि वे केवल प्रेम का नाता मानते हैं। शबरी ने प्रभु को सुग्रीव से मित्रता करने का मार्ग दिखाया।'
      },
      english: {
        title: 'The Sublime Devotion of Mother Shabari',
        text: 'Upon reaching the sacred lotus-filled waters of Lake Pampa, Rama visited the humble hermitage of Mother Shabari, who had waited a lifetime for his coming. Tasting wild berries to offer only the sweetest to her Lord, Rama accepted them with profound joy, teaching that pure love transcends all social boundaries.'
      }
    },
    historicalSignificance: 'One of the four sacred lakes (Sarovars) of Hindu tradition; apex of pure Bhakti.',
    presentDayTempleOrSite: 'Shabari Cave & Pampa Sarovar, Anegundi, Koppal/Ballari, Karnataka',
    travelMode: 'walking',
    iconType: 'temple'
  },
  {
    id: 21,
    order: 21,
    ancientName: 'Rishyamukha Parvat',
    sanskritName: 'ऋष्यमूक पर्वत (हनुमत्-सुग्रीव मिलन)',
    modernLocation: 'Hampi (Rishyamukha Hill)',
    modernStateOrCountry: 'Karnataka, India',
    coordinates: [15.3410, 76.4650],
    kanda: 'Kishkindha Kanda',
    title: 'First Meeting with Hanuman & Eternal Pact with Sugriva',
    summary: 'Hanuman approaches Rama disguised as a Brahmin; Rama and Sugriva forge an eternal sacred friendship before consecrated fire.',
    detailedNarrative: 'Terrified by two armed warrior youths approaching his refuge, the exiled Vanara king Sugriva dispatched Hanuman to ascertain their identity. Approaching in the guise of a scholarly Brahmin, Hanuman spoke with such eloquence and flawless grammar that Rama was spellbound. Revealing his true form, Hanuman carried the brothers upon his shoulders up the steep crags of Rishyamukha. In the presence of consecrated Agni, Rama and Sugriva clasped hands, pledging eternal friendship: Rama would liberate Sugriva from his tyrannical brother Vali, and Sugriva would mobilize the Vanara host to search the world for Sita.',
    charactersInvolved: ['Sri Rama', 'Lakshmana', 'Bhagavan Hanuman', 'Sugriva'],
    keyEvent: 'Alliance of Sri Rama and Sugriva before Agni Deva',
    scripture: {
      valmiki: {
        kanda: 'Kishkindha Kanda',
        sarga: '5',
        shloka: '16-17',
        text: 'ततोऽग्निं दीप्यमानं तौ चक्रतुश्च प्रदक्षिणम् । सुग्रीवो राघवश्चैव वयस्यत्वमुपागतौ ॥',
        translation: 'Then Sugriva and Raghava circumambulated the blazing fire and entered into sacred bond of sworn friendship.'
      }
    },
    narration: {
      hindi: {
        title: 'हनुमान जी से प्रथम भेंट एवं सुग्रीव से अग्नि-साक्षी मित्रता',
        text: 'ऋष्यमूक पर्वत पर विप्र रूप धरकर आए पवनपुत्र हनुमान जी की मधुर वाणी सुनकर श्री राम मुग्ध हो गए। हनुमान जी ने प्रभु को अपने कंधों पर बिठाकर सुग्रीव से मिलाया। प्रज्वलित अग्नि के सम्मुख श्री राम और सुग्रीव ने एक-दूसरे के संकट में साथ निभाने की अटूट प्रतिज्ञा की।'
      },
      english: {
        title: 'Meeting Hanuman and the Sacred Alliance with Sugriva',
        text: 'On the crags of Rishyamukha Hill, Hanuman approached disguised as a scholarly ascetic. Enchanted by Hanuman’s eloquence, Rama revealed his identity. Circumambulating the consecrated sacred fire, Rama and the exiled Vanara King Sugriva forged an eternal friendship to overcome Vali and find Sita.'
      }
    },
    historicalSignificance: 'The birth of the immortal master-servant devotion between Sri Rama and Hanuman.',
    presentDayTempleOrSite: 'Anjanadri Hill (Hanuman’s Birthplace) & Rishyamukha, Hampi, Karnataka',
    travelMode: 'walking',
    iconType: 'mountain'
  },
  {
    id: 22,
    order: 22,
    ancientName: 'Kishkindha (Vali Sthala & Prasravana Hill)',
    sanskritName: 'किष्किन्धा (वालि वध एवं प्रवर्षण वास)',
    modernLocation: 'Hampi / Tungabhadra Valley',
    modernStateOrCountry: 'Karnataka, India',
    coordinates: [15.3350, 76.4600],
    kanda: 'Kishkindha Kanda',
    title: 'Vanquishing of Vali & Coronation of Sugriva',
    summary: 'Rama slays Vali from behind trees during a duel with Sugriva; Sugriva is crowned king of Kishkindha, and Rama waits through the monsoons.',
    detailedNarrative: 'Sugriva challenged Vali to single combat. Wearing a flowering Gajapushpi creeper garland placed by Lakshmana to distinguish him from his identical brother, Sugriva battled Vali. As Sugriva faltered, Rama shot a single arrow from behind seven Sala trees, striking Vali down. Vali questioned Rama’s justice, but Rama elucidated the principles of righteous retribution for having usurped Sugriva’s wedded wife Ruma. Enlightened, Vali surrendered his son Angada to Rama’s care. Sugriva was consecrated King of Kishkindha. Rama spent four months of monsoon penance on Mount Prasravana.',
    charactersInvolved: ['Sri Rama', 'Lakshmana', 'Vali', 'Sugriva', 'Angada', 'Tara'],
    keyEvent: 'Vali Vadha and coronation of Sugriva; monsoon encampment',
    scripture: {
      valmiki: {
        kanda: 'Kishkindha Kanda',
        sarga: '18',
        shloka: '18-20',
        text: 'तदेतत् कारणं पश्य यदर्थं त्वं मया हतः । भ्रातुर्वर्तसि भार्यायां त्यक्त्वा धर्मं सनातनम् ॥',
        translation: 'Behold this reason for which you were struck down by Me: forsaking eternal dharma, you cohabited with the wedded wife of your own living brother!'
      }
    },
    narration: {
      hindi: {
        title: 'वालि वध एवं किष्किन्धा का राजतिलक',
        text: 'श्री राम ने अधर्म के निवारण हेतु वालि का एक ही बाण से संहार किया और सुग्रीव का किष्किन्धा के राजा के रूप में राज्याभिषेक करवाया। वर्षा ऋतु के चार महीने प्रभु ने माल्यवान/प्रवर्षण पर्वत पर तपस्या में बिताए, जिसके पश्चात सुग्रीव ने चारों दिशाओं में वानर सेना को माता जानकी की खोज के लिए रवाना किया।'
      },
      english: {
        title: 'Vanquishing Vali and Kishkindha’s Rebirth',
        text: 'Intervening in the fierce duel between brothers, Rama struck down Vali to uphold cosmic dharma, crowning Sugriva as King of Kishkindha. During the four monsoon months on Mount Prasravana, Rama meditated until Sugriva assembled millions of Vanaras to search every corner of the earth.'
      }
    },
    historicalSignificance: 'Restoration of righteous rule in Kishkindha; mobilization of millions of Vanara searchers across the four corners of the world.',
    presentDayTempleOrSite: 'Chintamani Temple, Tara’s Cave, and Prasravana / Malyavanta Hill, Hampi',
    travelMode: 'walking',
    iconType: 'battle'
  },
  {
    id: 23,
    order: 23,
    ancientName: 'Mahendragiri / Southern Shore',
    sanskritName: 'महेन्द्र पर्वत (सम्पाति संवाद एवं सिन्धु तट)',
    modernLocation: 'Mahendragiri / Kanyakumari coastal ridge',
    modernStateOrCountry: 'Tamil Nadu, India',
    coordinates: [8.3800, 77.5000],
    kanda: 'Kishkindha Kanda',
    title: 'Sampati’s Revelation & The Giant Leap Readiness',
    summary: 'The southern search party reaches the vast ocean; vulture king Sampati reveals Sita is held across the sea in Lanka; Jambavan awakens Hanuman’s power.',
    detailedNarrative: 'Led by Prince Angada, Hanuman, and Jambavan, the southern expedition faced starvation after finding no trace of Sita. Contemplating Prayopavesha (fasting unto death), they praised Jatayu’s sacrifice. Hearing his brother Jatayu’s name, the aged, wingless vulture king Sampati emerged from a mountain cave. With his far-reaching telescopic vision, Sampati gazed a hundred yojanas across the southern ocean and announced that Devi Sita was confined in the Ashoka grove of Lanka. Standing before the roaring sea, the Vanaras doubted who could cross it. The wise elder Jambavan reminded Hanuman of his latent divine cosmic strength.',
    charactersInvolved: ['Bhagavan Hanuman', 'Jambavan', 'Prince Angada', 'Sampati'],
    keyEvent: 'Sampati’s revelation; Jambavan awakens Hanuman’s dormant powers',
    scripture: {
      valmiki: {
        kanda: 'Kishkindha Kanda',
        sarga: '65',
        shloka: '1-3',
        text: 'उत्तिष्ठ हरिशार्दूल लङ्घयस्व महोदधिम् । पराक्रमो हि ते वीर सर्वेषामधिको भुवि ॥',
        translation: 'Rise, O tiger among monkeys! Leap across the mighty ocean! For your valor and strength, O hero, surpass all beings upon this earth!'
      }
    },
    narration: {
      hindi: {
        title: 'सम्पाति की दिव्य दृष्टि और हनुमान जी का पौरुष जागरण',
        text: 'दक्षिण समुद्र तट पर पहुंचे निराश वानरों को जटायु के भ्राता सम्पाति ने बताया कि माता सीता सौ योजन दूर लंका के अशोक वाटिका में सुरक्षित हैं। विशाल महासागर को लांघने का संकट जब सम्मुख आया, तब रीछराज जाम्बवन्त ने पवनपुत्र हनुमान जी को उनके असीम बल और शक्ति का स्मरण कराया।'
      },
      english: {
        title: 'Sampati’s Vision and Awakening of Hanuman’s Might',
        text: 'Reaching the vast southern ocean, the Vanara search party learned from Jatayu’s brother Sampati that Sita was imprisoned a hundred leagues across the sea in Lanka. As the warriors wondered who could cross the tempestuous ocean, wise Jambavan awakened Hanuman’s dormant cosmic strength.'
      }
    },
    historicalSignificance: 'The transition from the continental search to the ocean crossing.',
    presentDayTempleOrSite: 'Mahendragiri Range & Suchindram / Kanyakumari shrines',
    travelMode: 'walking',
    iconType: 'mountain'
  },

  // ==========================================
  // SUNDARA KANDA
  // ==========================================
  {
    id: 24,
    order: 24,
    ancientName: 'The Ocean Leap & Lanka Dahana',
    sanskritName: 'समुद्र लङ्घन एवं लङ्का दहन (सुन्दरकाण्ड)',
    modernLocation: 'Across Palk Strait to Ashoka Vatika (Nuwara Eliya / Hakgala)',
    modernStateOrCountry: 'Sri Lanka',
    coordinates: [6.9271, 80.7718],
    kanda: 'Sundara Kanda',
    title: 'Hanuman’s Oceanic Leap, Ashoka Vatika & Burning of Lanka',
    summary: 'Hanuman assumes a colossal cosmic form, leaps across the ocean overcoming Surasa and Simhika, finds Sita in Ashoka Vatika, delivers Rama’s ring, and torches Lanka.',
    detailedNarrative: 'Ascending Mount Mahendra, Hanuman assumed a gargantuan cosmic form and leaped into the sky like a shooting star. He brushed aside Mainaka mountain’s hospitality, outwitted mother of serpents Surasa with yogic shrinking, and tore through the shadow-catching sea demoness Simhika. Landing in Lanka by night, he shrank to the size of a cat and searched the gilded palaces until discovering weeping Devi Sita under a Shimshapa tree in Ashoka Vatika. Waiting for Ravana to leave, Hanuman sang Rama’s praises and dropped the signet ring. He gave Sita courage, received her Chudamani crest-jewel, destroyed the Pramadavana, defeated Prince Akshakumara, and when captured and his tail set aflame with oiled cloth, he leaped across the rooftops, reducing golden Lanka into smoking cinders before leaping back to Rama with the joyful roar: "Drushta Sita!" (Sita has been seen!).',
    charactersInvolved: ['Bhagavan Hanuman', 'Devi Sita', 'Ravana', 'Indrajit', 'Trijata', 'Lankini'],
    keyEvent: 'Hanuman locates Sita, delivers the signet ring, and burns Lanka',
    scripture: {
      valmiki: {
        kanda: 'Sundara Kanda',
        sarga: '36',
        shloka: '1-3',
        text: 'भूय एव महातेजाः प्रवक्तुमुपचक्रमे । वानरोऽहं महाभागे दूतो रामस्य धीमतः ॥ रामनामाङ्कितं चेदं पश्य देव्यङ्गुलीयकम् ।',
        translation: 'The illustrious Hanuman spoke again with reverence: "O blessed lady, I am a Vanara, messenger of the wise Rama! Behold this signet ring, engraved with the name of Rama."'
      },
      tulsidas: {
        kanda: 'Sundara Kanda',
        dohaOrChaupai: 'Chaupai 32',
        text: 'उलटी पलटि लंका सब जारी । कूदि परा पुनि सिंधु मझारी ॥',
        meaning: 'Turning and wheeling across every tower, he reduced all of Lanka into ashes, and then leaped joyously into the ocean to extinguish his tail.'
      }
    },
    narration: {
      hindi: {
        title: 'समुद्र लङ्घन, मुद्रिका अर्पण एवं लंका दहन',
        text: 'विराट रूप धारण कर हनुमान जी ने एक छलांग में समुद्र पार किया। अशोक वाटिका में माता जानकी के दर्शन कर प्रभु श्री राम की मुद्रिका अर्पित की और चूड़ामणि प्राप्त की। रावण की सभा में निर्भीक संदेश देकर, जब उनकी पूंछ में आग लगाई गई, तब मारुतिनंदन ने समूची स्वर्णमयी लंका को भस्म कर अधर्म का दर्प चूर्ण कर दिया।'
      },
      english: {
        title: 'Hanuman’s Epic Flight, Ashoka Vatika and the Burning of Lanka',
        text: 'Assuming a colossal form, Hanuman leaped across the ocean, overcoming sea demons to enter fortress Lanka. Finding Sita in Ashoka Vatika, he delivered Rama’s signet ring, restoring her hope. Captured after confronting Ravana, Hanuman used his ignited tail to set golden Lanka ablaze before returning triumphant to Rama.'
      }
    },
    historicalSignificance: 'The core devotional and spiritual triumph of the entire epic; symbol of hope overcoming darkness.',
    presentDayTempleOrSite: 'Seetha Amman Temple (Ashoka Vatika), Hakgala Botanical Garden, Nuwara Eliya, Sri Lanka',
    travelMode: 'ocean_leap',
    iconType: 'mountain'
  },

  // ==========================================
  // YUDDHA KANDA
  // ==========================================
  {
    id: 25,
    order: 25,
    ancientName: 'Setu Bandha (Ram Setu / Rameshwaram)',
    sanskritName: 'सेतु बन्ध (रामेश्वरम् एवं नल-नील सेतु)',
    modernLocation: 'Dhanushkodi / Rameshwaram',
    modernStateOrCountry: 'Tamil Nadu, India',
    coordinates: [9.2876, 79.3129],
    kanda: 'Yuddha Kanda',
    title: 'Vibhishana Sharanagati & Construction of Ram Setu',
    summary: 'Rama marches the Vanara army to the ocean; Vibhishana takes refuge; engineers Nala and Nila construct the floating stone bridge across the sea.',
    detailedNarrative: 'Marching millions of Vanaras to the southern tip of the subcontinent, Rama camped at the ocean shore. Ravana’s righteous younger brother Vibhishana, banished for urging Sita’s return, flew across the sky and surrendered at Rama’s feet. Rama granted him eternal refuge (Sharanagati) and consecrated him on the beach as the prospective King of Lanka. When Samudra Deva (the Ocean God) yielded to Rama’s fiery Brahmastra, he revealed that Vanara engineers Nala and Nila bore the divine architectural boon from Vishwakarma. Vanaras carried massive boulders and trees carved with the name "RAMA", which floated miraculously on the water. In five days, they built a hundred-yojana bridge (Ram Setu), across which the army marched into Lanka.',
    charactersInvolved: ['Sri Rama', 'Lakshmana', 'Sugriva', 'Hanuman', 'Vibhishana', 'Nala', 'Nila', 'Samudra Deva'],
    keyEvent: 'Building of Ram Setu and the supreme vow of Sharanagati (unconditional refuge)',
    scripture: {
      valmiki: {
        kanda: 'Yuddha Kanda',
        sarga: '18',
        shloka: '33',
        text: 'सकृदेव प्रपन्नाय तवास्मीति च याचते । अभयं सर्वभूतेभ्यो ददाम्येतद् व्रतं मम ॥',
        translation: 'Whoever surrenders unto Me even once, saying "I am Yours", to him I grant fearlessness against all beings—this is My eternal vow!'
      }
    },
    narration: {
      hindi: {
        title: 'विभीषण शरणागति एवं राम सेतु का निर्माण',
        text: 'समुद्र तट पर रावण के त्यागे भाई विभीषण को श्री राम ने अभयदान देकर अपनी शरण में लिया। समुद्र द्वारा मार्ग देने पर नल और नील के निर्देशन में वानरों ने "राम" नाम अंकित पत्थरों से पांच दिनों में महासागर पर अद्भुत सेतु बांध दिया, जिस पर चलकर श्रीराम की सेना लंका पहुँची।'
      },
      english: {
        title: 'The Shelter of Vibhishana and Construction of Ram Setu',
        text: 'On the southern shore, Ravana’s righteous brother Vibhishana surrendered at Rama’s feet and was consecrated future king. Under master architects Nala and Nila, the Vanaras carved the holy name of Rama upon massive boulders that miraculously floated, completing the hundred-league bridge to Lanka in five days.'
      }
    },
    historicalSignificance: 'The legendary bridge linking the mainland with Lanka; establishment of the Ramanathaswamy Jyotirlinga.',
    presentDayTempleOrSite: 'Ramanathaswamy Temple & Ram Setu viewpoint, Dhanushkodi, Rameshwaram',
    travelMode: 'bridge',
    iconType: 'bridge'
  },
  {
    id: 26,
    order: 26,
    ancientName: 'Lanka Citadel (The Great War & Ravana Vadha)',
    sanskritName: 'लङ्का रणभूमि (रावण वध एवं अग्नि परीक्षा)',
    modernLocation: 'Sri Lanka Battlefield (Trikuta Hill)',
    modernStateOrCountry: 'Sri Lanka',
    coordinates: [7.2906, 80.6337],
    kanda: 'Yuddha Kanda',
    title: 'The Great War, Slaying of Ravana & Agni Pariksha',
    summary: 'A titanic clash shakes heaven and earth; Lakshmana slays Indrajit; Rama slays Ravana with the Brahmastra; Sita undergoes the trial by fire.',
    detailedNarrative: 'The Vanara army besieged the four gates of Lanka. Gigantic Kumbhakarna awakened and wrought havoc before Rama severed his limbs and head with celestial arrows. Meghanada (Indrajit), master of illusions who had struck Lakshmana unconscious with the Shakti weapon (restored when Hanuman flew to the Himalayas and brought the entire Dronagiri mountain with Sanjeevani herbs), was slain by Lakshmana in single combat. Finally, Rama and Ravana duelled for days in their celestial chariots. Advised by Sage Agastya via the Aditya Hridaya Stotram, Rama invoked the supreme Brahmastra crafted by Brahma, piercing Ravana’s heart. Vibhishana was crowned King of Lanka. To prove her flawless purity to all three worlds, Devi Sita entered blazing flames; Agni Deva himself emerged bearing Sita unharmed, testifying to her impeccable virtue.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Bhagavan Hanuman', 'Ravana', 'Kumbhakarna', 'Indrajit', 'Vibhishana', 'Agni Deva'],
    keyEvent: 'Annihilation of Ravana, Agni Pariksha, and coronation of Vibhishana',
    scripture: {
      valmiki: {
        kanda: 'Yuddha Kanda',
        sarga: '108',
        shloka: '18-20',
        text: 'स विसृष्टो बलीयस्त्वं गत्वा बाणः सुदारुणः । बिभेद हृदयं तस्य रावणस्य दुरात्मनः ॥',
        translation: 'Released by Rama, that terrifying and all-powerful arrow sped through the air and pierced the heart of the wicked-souled Ravana.'
      }
    },
    narration: {
      hindi: {
        title: 'महाभारत-तुल्य महायुद्ध, रावण वध एवं अग्नि परीक्षा',
        text: 'लंका की रणभूमि में महाबली कुम्भकर्ण और मेघनाद का अंत हुआ। अंततः भगवान श्री राम ने महर्षि अगस्त्य द्वारा उपदेशित आदित्य हृदय स्तोत्र का पाठ कर, ब्रह्मास्त्र के अचूक प्रहार से दशानन रावण का वध किया। तीनों लोकों को अधर्म से मुक्ति मिली और अग्निदेव ने स्वयं प्रकट होकर माता जानकी के पातिव्रत्य की दिव्यता प्रमाणित की।'
      },
      english: {
        title: 'The Great War, Vanquishing Ravana and Trial by Fire',
        text: 'In a battle that shook the heavens, Kumbhakarna and Meghanada fell. Invoking the sun god through the Aditya Hridaya Stotram, Rama unleashed the all-powerful Brahmastra, slaying Ravana and ending an era of darkness. In the presence of all the gods, Agni Deva himself emerged from sacred fire to testify to Sita’s absolute purity.'
      }
    },
    historicalSignificance: 'The ultimate triumph of Satya and Dharma over arrogance and adharma; restoration of universal cosmic order.',
    presentDayTempleOrSite: 'Divurumpola (Agni Pariksha Sthal) & Ravana Ella, Sri Lanka',
    travelMode: 'army_march',
    iconType: 'battle'
  },
  {
    id: 27,
    order: 27,
    ancientName: 'Aerial Return & Ayodhya Pattabhishekam',
    sanskritName: 'पुष्पक विमान प्रत्यागमन एवं पट्टाभिषेक',
    modernLocation: 'Ayodhya',
    modernStateOrCountry: 'Uttar Pradesh, India',
    coordinates: [26.7922, 82.1998],
    kanda: 'Yuddha Kanda',
    title: 'Pushpaka Vimana Flight & Grand Coronation (Pattabhishekam)',
    summary: 'Rama, Sita, Lakshmana, and the Vanaras fly back to Ayodhya aboard the celestial Pushpaka Vimana, culminating in the glorious royal coronation.',
    detailedNarrative: 'With the fourteen-year exile ending to the very day, Rama boarded the flying celestial chariot Pushpaka Vimana with Sita, Lakshmana, Sugriva, Vibhishana, and the Vanara heroes. Soaring northward over the oceans, Kishkindha, Panchavati, Chitrakoot, and Prayaga, Rama pointed out each sacred waypoint to Sita. Landing at Nandigram, Rama was reunited with tearful Bharata, who placed the holy sandals back upon Rama’s feet. Entering Ayodhya adorned with thousands of lamps (celebrated as Deepavali), Sage Vashistha and the royal priests crowned Sri Rama as Emperor of Bharata Varsha amidst the showers of celestial blossoms from the Devas.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lakshmana', 'Bharata', 'Shatrughna', 'Bhagavan Hanuman', 'Sugriva', 'Vibhishana', 'Sage Vashistha'],
    keyEvent: 'Grand Pattabhishekam (Coronation) and dawn of Rama Rajya',
    scripture: {
      valmiki: {
        kanda: 'Yuddha Kanda',
        sarga: '128',
        shloka: '59-62',
        text: 'वसिष्ठो मन्त्रविन् मन्त्रैः सह तैरेव विप्रपैः । काञ्चने मेचके दिव्ये रामं सिंहासने नृपम् ॥ सह सीतया समभ्यषिञ्चन् ॥',
        translation: 'The Vedic master Vashistha, along with other noble sages, consecrated King Rama upon the divine golden throne alongside Sita with sacred Vedic hymns.'
      },
      tulsidas: {
        kanda: 'Uttara Kanda',
        dohaOrChaupai: 'Chaupai 12',
        text: 'राम राज बैठें त्रैलोका । हरषित भए गए सब सोका ॥ दैहिक दैविक भौतिक तापा । राम राज नहिं काहुहि ब्यापा ॥',
        meaning: 'When Rama took His seat upon the throne, all three worlds rejoiced and every sorrow vanished. In Rama Rajya, none suffered from physical, spiritual, or elemental afflictions.'
      }
    },
    narration: {
      hindi: {
        title: 'पुष्पक विमान से अयोध्या वापसी एवं भव्य राज्याभिषेक',
        text: 'दिव्य पुष्पक विमान में बैठकर प्रभु श्री राम माता सीता और वानर-वीरों सहित अयोध्या लौटे। नन्दिग्राम में भरत जी से अश्रुपूर्ण मिलन हुआ। दीपों की पंक्तियों से सजी अयोध्या में गुरु वशिष्ठ ने श्री राम का भव्य राज्याभिषेक किया और समूची पृथ्वी पर न्याय, सत्य और सुख का "राम राज्य" स्थापित हुआ।'
      },
      english: {
        title: 'Aerial Return on Pushpaka Vimana and Grand Coronation',
        text: 'Aboard the celestial flying chariot Pushpaka Vimana, Rama returned northward over the forests, retracing every milestone with Sita. Welcomed with tears of joy by Bharata at Nandigram and greeted by millions of illuminated lamps across Ayodhya, Sri Rama was coronated Emperor of Bharata Varsha, inaugurating the golden age of Rama Rajya.'
      }
    },
    historicalSignificance: 'The realization of the golden ideal of governance—Rama Rajya—where justice, peace, and abundance flourished.',
    presentDayTempleOrSite: 'Kanak Bhavan & Ram Janmabhoomi, Ayodhya',
    travelMode: 'air_divine',
    iconType: 'coronation'
  },

  // ==========================================
  // UTTARA KANDA (SCRIPTURAL CONCLUSION)
  // ==========================================
  {
    id: 28,
    order: 28,
    ancientName: 'Valmiki Ashram & Sarayu Mahaprasthana',
    sanskritName: 'वाल्मीकि आश्रम, लव-कुश एवं सरयू महाप्रस्थान',
    modernLocation: 'Bithoor (Brahmavarta) / Guptar Ghat, Ayodhya',
    modernStateOrCountry: 'Uttar Pradesh, India',
    coordinates: [26.7800, 82.1600],
    kanda: 'Uttara Kanda',
    title: 'The Scriptural Conclusion: Lava-Kusha, Sita’s Bhu-Pravesh & Mahaprasthana',
    summary: 'Sita resides at Valmiki’s ashram giving birth to Lava and Kusha who sing the Ramayana; Sita merges into Mother Earth; Rama concludes the avatara at Sarayu.',
    detailedNarrative: 'To uphold the unblemished sanctity of the royal throne against malicious street gossip, Rama underwent the heartbreaking duty of sending pregnant Sita to Sage Valmiki’s hermitage along the Tamasa/Ganga. There she gave birth to the twins Lava and Kusha, who were trained in the Vedas, archery, and taught the complete Ramayana epic by Sage Valmiki. During Rama’s Ashwamedha Yajna in the Naimisha forest, the young boys sang the epic so exquisitely that Rama discovered they were his sons. Valmiki brought Sita before the royal assembly to attest to her purity. Sita prayed: "If I have never thought of anyone other than Rama, may Mother Earth open and receive me into her womb!" The earth split open, and Goddess Dharani arose upon a golden throne to embrace Sita into eternity. After ruling righteously for eleven thousand years and fulfilling every purpose of the Treta Yuga avatara, Sri Rama, along with the devoted citizens of Ayodhya, walked into the holy Sarayu River at Gopratara (Guptar Ghat), ascending back to His supreme, eternal divine form as Bhagavan Vishnu in Vaikuntha.',
    charactersInvolved: ['Sri Rama', 'Devi Sita', 'Lava', 'Kusha', 'Maharshi Valmiki', 'Mother Earth (Bhu-Devi)', 'Lakshmana', 'Bharata', 'Shatrughna'],
    keyEvent: 'Sita’s Bhu-Pravesh and Sri Rama’s Mahaprasthana (Return to Vaikuntha)',
    scripture: {
      valmiki: {
        kanda: 'Uttara Kanda',
        sarga: '97',
        shloka: '14-16',
        text: 'यथाहं राघवादन्यं मनसापि न चिन्तये । तथा मे माधवी देवी विवरं दातुमर्हति ॥ तन्मुहूर्ते मही तस्य विवरं समपद्यत । प्रादुरासीत् ततो देवी धरणी रूपधारिणी ॥',
        translation: 'Sita prayed: "If in thought I have never pondered anyone other than Raghava, may Goddess Madhavi (Mother Earth) open a chasm to receive me!" In that very moment, the earth opened, and the Goddess of the Earth appeared in radiant splendour upon a divine throne.'
      },
      valmiki_mahaprasthana: {
        kanda: 'Uttara Kanda',
        sarga: '110',
        shloka: '10-12',
        text: 'ततो विष्णुर्महातेजाः सर्वैः सह महात्मभिः । जगाम सरयूतीरं देवैरभिनुतस्तदा ॥',
        translation: 'Then Vishnu, the supreme effulgence, accompanied by all the noble souls, entered the holy waters of Sarayu praised by all the celestial Devas, returning to His eternal abode.'
      }
    },
    narration: {
      hindi: {
        title: 'उत्तरकाण्ड: लव-कुश गान, सीता का भू-प्रवेश एवं सरयू महाप्रस्थान',
        text: 'महर्षि वाल्मीकि के आश्रम में लव और कुश ने रामायण का मधुर गान सीखा। अश्वमेध यज्ञ में माता जानकी ने अपनी सत्यनिष्ठा सिद्ध करते हुए धरती माँ की गोद में समा जाने की प्रार्थना की और माँ धरणी उन्हें सिंहासन पर बैठाकर पाताल ले गईं। अंत में अवतार कार्य पूर्ण होने पर प्रभु श्री राम समस्त अयोध्यावासियों सहित सरयू नदी में प्रवेश कर अपने परम वैकुंठ धाम लौट गए।'
      },
      english: {
        title: 'The Sacred Finale: Lava-Kusha, Sita’s Ascent and Sarayu Mahaprasthana',
        text: 'At Sage Valmiki’s ashram, Sita raised the twin princes Lava and Kusha, who moved the assembly to tears singing the Ramayana. To affirm her eternal purity, Sita merged into the welcoming embrace of Mother Earth. Having fulfilled the divine purpose of the Treta Yuga, Sri Rama walked into the holy Sarayu River, ascending to eternal Vaikuntha.'
      }
    },
    historicalSignificance: 'The philosophical and scriptural culmination of the Ramayana; eternal lesson of dharma, sacrifice, and the soul’s reunion with the divine.',
    presentDayTempleOrSite: 'Guptar Ghat, Ayodhya & Valmiki Ashram, Bithoor, UP',
    travelMode: 'air_divine',
    iconType: 'ascension'
  }
];
