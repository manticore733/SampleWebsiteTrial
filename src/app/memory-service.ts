import { Injectable } from '@angular/core';

export interface Memory {
  id: number;
  src: string;
  caption: string;
  date: string;
  description: string;
  rotation: number;
  tapePos: 'left' | 'right' | 'center';
  storyBlocks: {
    title?: string;
    text: string;
    image?: string;
    imagePos?: 'left' | 'right';
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  private memories: Memory[] = [
    // 1. Beginnings
    { 
      id: 0, 
      src: 'assets/images/Beginnings/mirrorphoto.jpeg', 
      caption: 'The Beginnings💕', 
      date: '10 Oct, 2025',
      description: 'The golden hour when everything feels magical...', 
      rotation: -3, 
      tapePos: 'left',
      storyBlocks: [
        {
          title: 'The Blistering Hot Afternooonn...Sooorrryyyy!!!',
          text: 'It all started on a quiet little walkway — not grand, not dramatic — just a small path that somehow became the beginning of everything.We met there properly for the first time, walking side by side through that semi-garden space, talking about random things that didn’t feel random at all. The world felt calm. Time felt slower. And somewhere between those simple conversations and shared smiles, something beautiful quietly began.',
          image: 'assets/images/Beginnings/walkway.png', 
          imagePos: 'right'
        },
        {
          title: 'The Fated Bench!!',
          text: 'And then there was that bench.The one that didn’t look special to anyone else — but became special to us.That day, we sat there for hours, talking about college, life, dreams, secrets… everything and nothing at the same time. We were calm. Comfortable. Like we had known each other for much longer than we actually had.That bench became oursEvery time we go back, we sit there again — like it’s our little tradition, our quiet corner of the world.And I remember another day… after your ML paper.You were anxious, overthinking everything. We sat on that same bench, with McD in our hands, and I just wanted you to feel okay. I didn’t care about anything else in that moment — just that you felt safe and supported.That bench has seen our beginnings, our worries, our laughs… and somehow, it still feels like home.Sorryy...finding that exact bench waas damnn difficuly voo mapsss mai😣😣',
          image: 'assets/images/Beginnings/bench.png',
          imagePos: 'left'
        },
        {
          title: 'First Restaurant Date!!!',
          text: 'After that, we went to Atrangi.It was bit fancy — but the conversations we had there felt important. We talked about relationships. Casual ones. Serious ones. Situationships and how complicated modern love has become.And somewhere between those discussions, we both admitted something — that we still believed in the old-fashioned kind of love. The slow, intentional, loyal kind. The kind that chooses and stays.I don’t think you realized how happy I was when I found out you were single. I tried to act normal… but inside, I was smiling way too much.And then came my favorite part.When it was time to leave, you agreed to walk with me to the station instead of taking a rickshaw. That small decision meant more to me than you probably knew. It meant a few extra minutes. A little more conversation. A little more us.I was so happy — and yes, you definitely caught me grinning. I couldn’t even hide it properly.And then… for a little while, we walked hand in hand.It was simple. Quiet. But it felt like something out of a love story.That walk to the station wasn’t just a walk.It was the moment I knew — this was becoming something special.',
          image: 'assets/images/Beginnings/food.png',
          imagePos: 'right'
        }
      ]
    },
    // 2. First Offical Outing
    { 
      id: 1, 
      src: 'assets/images/Date1/gussabutbottle.jpeg', 
      caption: 'First Date💕', 
      date: '23 Oct, 2025',
      description: 'Your smile over the gusssaa is my favorite view...', 
      rotation: 2, 
      tapePos: 'right', 
         storyBlocks: [
        {
          title: 'The Date',
          text: 'Our first official date — the first time we met not as “almost,” but as us. We decided to meet at the mall, and I still remember walking in and seeing you there in that pinkish maroon traditional outfit, looking absolutely gorgeous in a way that made me pause for a second just to take you in. I still owe you a proper apology for that day — the trains were running late, and so was I, and I’m really sorry for keeping you waiting, especially on our first date; you deserved better than my panicked train updates. Thank you for waiting for me. We went to YouMee inside the mall and tried Japanese food together, ordering dishes we weren’t even sure we’d like, yet somehow everything tasted surprisingly good — maybe it was the food, or maybe it was just being there with you. That day felt softer, more intentional, different from all the others, because we weren’t just two people spending time together anymore — we were two people who had chosen each other.🤍.',
          image: 'assets/images/Date1/mirrorpic.jpeg', 
          imagePos: 'right'
        },
        {
          title: 'Bit Of Windoww Shopppingss..',
          text: 'After YouMee, we wandered around the mall with no real plan — just window shopping, laughing at random things, and goofing around like two people who didn’t want the day to end. I still remember you picking up that cute, fluffy teddy and holding it in your hands — and somehow you managed to look even more adorable than the toy itself. I don’t know what it was about that moment, but seeing you like that made my heart feel so full. We walked into different shops, pretending to judge outfits, imagining what would suit each other, and then somehow ended up in the Japanese household store, looking at blankets, pillows, and all those cozy little things like we were planning a future home without even saying it out loud. Everything felt light, easy, and warm. Later, we headed to Fort for the movie — and that part had its own little mix of emotions. There were cute moments, soft glances, shared smiles… and maybe a tiny bit of playful anger too. But even those little moments felt special, because they were ours. That day wasn’t just about a mall or a movie — it was about us learning each other in the smallest, sweetest ways. 🤍',
          image: 'assets/images/Date1/tedddy.jpeg',
          imagePos: 'left'
        },
        {
          title: 'Movie Evening',
          text: 'Then we went for the movie, sitting side by side, stealing little glances at each other more than at the screen. There were quiet, lovey-dovey moments — soft smiles, gentle touches, that comfortable closeness that makes everything else fade into the background. It wasn’t just about the film; it was about sharing that space, that warmth, that feeling of being exactly where we were meant to be. After it ended, we took a cab back, and the ride felt peaceful — like we were both silently replaying the entire day in our heads. I dropped you home, and even though the date was technically over, it didn’t feel like an ending. It felt like the beginning of so many more days like that. As I went back, I couldn’t stop smiling, thinking about everything — the food, the laughter, the teddy, the movie, your beautiful pink outfit — just us. It was simple, but it was romantic in the purest way. A day I’ll always hold close to my heart. 🤍',
          image: 'assets/images/Date1/hands.jpeg',
          imagePos: 'right'
        }
      ]
    },
    // 3. Cute Pre Birthday
    { 
      id: 2, 
      src: 'assets/images/prebirthday/goofy.jpeg', 
      caption: 'Cute Pre Birthday 🌸', 
      date: '09 Nov, 2025',
      description: 'Evenings, deserts, and you.', 
      rotation: -1.5, 
      tapePos: 'center', 
            storyBlocks: [
        {
          title: 'Pizza Expressss memoryyy..!!',
          text: 'We met at Pizaa Express to celebrate your pre-birthday since I had office the next day, and even though it wasn’t the exact day, it still felt just as special. The moment I saw you, I couldn’t help but smile — you were wearing that full-sleeve pink outfit, and you looked unbelievably cute in it. But more than the outfit, it was your happiness that stood out. You were smiling the entire time, that bright, excited smile that made it impossible for me not to feel happy too. We sat there talking for hours — about your birthday plans, how you were going to celebrate with your friends, the pretty places you were planning to go, and how you just wanted to enjoy it fully. Listening to you talk so excitedly about everything made me realize how much I love seeing you happy. The food we ordered was delicious, and everything about that evening felt warm and light — just two people sitting across from each other, celebrating not just a birthday, but each other. 🤍',
          image: 'assets/images/prebirthday/us.jpeg', 
          imagePos: 'right'
        },
        {
          title: 'The Dessert',
          text: 'And then came the best part — the dessert. We ordered the Sticky Honey Roast, and the moment it arrived at the table, your eyes lit up like a little kid seeing their favorite treat. When you took the first bite and realized how good it tasted, your whole face just glowed with happiness. You were smiling so much, completely in your element, and I swear that sight alone was sweeter than the dessert itself. I couldn’t resist clicking a picture of you with it — you and that dessert together looked unbelievably cute. I actually melted a little in that moment. The way you smiled the entire time, so genuinely, so brightly… it made everything feel perfect. And when you gave me that tight, tight hug — the kind where you don’t let go immediately — it felt like I had done something right. That hug made the evening unforgettable. It wasn’t just a pre-birthday celebration; it was soft, sweet, full of warmth and love — the kind of memory that stays forever. 🤍✨',
          image: 'assets/images/prebirthday/unddesert.jpeg',
          imagePos: 'left'
        },
        {
          title: 'Birthday Night!!!',
          text: 'On your birthday, you went to BKC with your friends, and when I saw you in that beautiful brown dress, I was honestly stunned. You looked absolutely breathtaking — like a princess walking straight out of a dream. The way the dress fit you, the flowers around, the whole setting — everything just made you glow even more. I couldn’t stop looking at your pictures. You didn’t just look pretty… you looked powerful, confident, radiant. I remember just staring at my phone, thinking, wow… she’s mine. You’ve grown into such a strong, caring, and beautiful woman, and seeing you that day made me so proud of you — not just for how stunning you looked, but for who you are.Later that evening, after office, I came to meet you. Even after a whole day of celebrations, you still had that birthday sparkle in your eyes. We had dessert together, something sweet to end your special day, and just spent quiet time talking and soaking in the moment. It wasn’t loud or grand — just peaceful and meaningful. And when it was finally time to go, that tight hug and that soft kiss felt like the perfect way to seal the night. It was truly a beautiful birthday — not just because of the celebrations, but because I got to witness you shining in every way possible. 🤍✨',
          image: 'assets/images/prebirthday/dress.jpeg',
          imagePos: 'right'
        }
      ]
    },
    // 4. bandra
    { 
      id: 3, 
      src: 'assets/images/bandra/sunset.jpeg', 
      caption: 'Sunset & Much More🌅', 
      date: '15 Nov, 2025',
      description: 'One of the most important days of this journeyy...', 
      rotation: 2.5, 
      tapePos: 'left', 
            storyBlocks: [
        {
          title: 'The Pasta',
          text: 'One of the most important days in our relationship started so beautifully. We went to Juhu, and before anything else, you had prepared pasta for me — tangy, perfectly seasoned, exactly the way I like it. But it wasn’t just the taste that made it special. It was the way you fed me yourself, with that soft smile, like it was the most natural thing in the world. I don’t think you even realize how much that meant to me. It wasn’t just food — it was care, effort, love in its purest form. And yes, it was super, super delicious… but what made it unforgettable was you.After that, we stopped at One8 Commune for lunch, and the whole vibe of the place, the way we were sitting together, talking, laughing — it just felt right. The lunch was amazing, every dish tasting better than the last, but more than the food, it was the feeling of being there with you that made it special. It wasn’t just another outing. It felt like a moment where everything aligned — comfort, happiness, love, and us growing even closer. 🤍✨',
          image: 'assets/images/bandra/ks.jpeg', 
          imagePos: 'right'
        },
        {
          title: 'Pink Kurta',
          text: 'That day in Juhu was more than just an outing. You had this quiet feeling that I was hiding something, that there was something I wanted to tell you but wasn’t saying. And you were right. I was holding back — not because I didn’t trust you, but because I cared too much. You were already dealing with so much at that time… a bad exam experience, stress, so many things weighing on you. I didn’t want my past incident to become another burden on your heart. I thought protecting you from it was the right thing to do. Even then, you stayed patient with me.We walked by the beach, clicked some really beautiful pictures, and I couldn’t stop admiring you. You looked absolutely stunning in that pink kurta — effortless, graceful, glowing in the sunlight. I don’t think I’ve ever told you how hard it was not to just keep staring. You were breathtaking. After lunch at One8 Commune, we decided to head to Bandra Bandstand for the sunset. And somewhere between the sea breeze, the golden sky, and your hand holding onto mine so naturally, I felt something shift inside me. Even when you sensed I wasn’t fully open yet, you didn’t pull away. You held on. And in that moment, it became clear to me — you are someone I want to treasure for my whole life. Someone who stays. Someone who understands without forcing. Someone who feels like home.',
          image: 'assets/images/bandra/selfie.jpeg',
          imagePos: 'left'
        },
        {
          text: 'On the way to Bandra Bandstand, everything changed. You were casually checking my phone, and that’s when you saw the very thing I had been trying to hide. It was never my intention to hide it from you, and it was never meant to hurt you. In my mind, I thought I was protecting you — with everything you were already going through, the stress, the disappointment, the emotional weight you were carrying. I didn’t want my past to become another storm in your life. But instead of protecting you, I hurt you. And maybe the way I tried to “care” ended up causing even more pain. I don’t justify it. I never will. I just know that I am still sorry for that moment.After that, you went quiet. The silence between us on the way there was heavier than anything I’ve ever felt. You didn’t speak until we reached Bandstand and sat on those rocks facing the sea. You were thinking — I could see it in your eyes. Processing. Trying to understand. Trying to decide. And in that moment, I truly realized how wrong I had been. It felt like my world was falling apart right in front of me. I was terrified that after that evening, I would lose you forever. Guilt consumed me. I felt helpless, ashamed, scared… and I broke down.But even while you were hurting, you didn’t walk away. You stayed. You held me tightly.You didn’t let me go.That moment showed me who you truly are. Your maturity. Your emotional intelligence. Your strength. The way you choose to understand before reacting. The way you value what we have, even when it’s difficult. You were hurting, yet you still had the heart to comfort me. That kind of love is rare. That kind of depth is rare. And in that moment, sitting on those rocks with the sea in front of us and uncertainty all around us, I realized something very clearly — you are not just someone I love. You are someone extraordinary. Someone who stays when it’s hard. Someone who feels deeply, thinks deeply, and loves deeply.And that is what it meant to me that you were there for me. It meant everything.',
          image: 'assets/images/bandra/sunsetnu.jpeg',
          imagePos: 'right'
        }
      ]
    },
    // 5. The Official Start
    { 
      id: 4, 
      src: 'assets/images/official/happy.jpeg', 
      caption: 'Officiallyy Started??!!!🌸', 
      date: '03 Dec, 2025',
      description: 'Hand in hand through life.', 
      rotation: -2, 
      tapePos: 'right', 
            storyBlocks: [
        {
          title: 'The Night You Stole My Breath ❤️',
          text: 'That night will always be unforgettable. We had planned our dinner at the beautiful Marriott International, but there was one surprise — I had no idea what you were going to wear. I picked you up with a bouquet in my hands, excited but completely unprepared for what was about to happen next. When you walked down, I froze. You in that red saree — I genuinely forgot how to speak. I was stunned, shocked, completely mesmerized. For a moment, everything else disappeared; it was just you. The way the red wrapped around you so perfectly, the elegance in every step, the grace, the glow on your face — you didn’t just look beautiful, you were the definition of beautiful that night. I couldn’t take my eyes off you no matter how hard I tried, and honestly, I didn’t even want to. You didn’t just light up the evening — you became the evening. And when we reached Marriott, seeing how happy you were, especially knowing it was a place you had once thought about and loved, made it even more special. But no matter how beautiful the place was, nothing compared to you standing beside me in that red saree. That night wasn’t about the dinner or the hotel; it was about you and how effortlessly you made my heart skip beats. I would relive that moment a thousand times just to see you walk down in that red saree again. ❤️',
          image: 'assets/images/official/solooutside.jpeg', 
          imagePos: 'right'
        },
        {
          title: 'A Letter❤️',
          text: 'Later that night, I gave you a small gift I had prepared — not just as a surprise, but as my quiet way of making up for my stupidities. It wasn’t something expensive or grand, but it was the most honest piece of my heart. I wrote you a custom handwritten letter — every word straight from me. In it, I apologized for the times I fell short, I praised you for the incredible person you are, and I simped over you in every possible way, because loving you deserves that kind of energy. I filled it with love quotes, tiny references from our memories, little moments only we would understand, and lines about how deeply I love you and how much I treasure having you in my life. That letter wasn’t just ink on paper — it was my heart folded into pages. And along with it, I gave you a pendant — two dolphins kissing — a small symbol of us, playful, inseparable, and full of love. The way you still wear it to this day, pairing it with your outfits and somehow looking even cuter every time, makes it mean even more to me. It’s not just jewelry; it’s a reminder that a part of me is always with you. And that letter… with the little doodles I made — the cute love pandas and tiny illustrations — wasn’t just decoration. It was me trying to turn my feelings into something you could hold, something that would make you smile on days I’m not around. That entire gift wasn’t about apologizing alone — it was about promising you that my love is real, intentional, and forever choosing you. ❤️',
          image: 'assets/images/official/letter.jpeg',
          imagePos: 'left'
        },
        {
          title: 'The Kulfi❤️',
          text: 'After that, we ordered our food, and it was honestly so delicious — we both loved every bite — but what I loved even more was watching you. You were smiling so much, so genuinely happy just being there with me, and that alone made the night perfect. I knew a part of you was still a little stressed because your final exam results had just come out, and maybe they weren’t exactly what you had expected. But what you don’t see the way I do is how incredibly strong you are. After the kind of tough weeks you had been through, the pressure, the exhaustion, the emotional ups and downs — you still stood tall and did so well. I am, and will always be, most proud of you. Not just for the marks, but for your determination, your resilience, and the way you never give up even when things feel heavy. You inspire me more than you realize. Seeing you push through everything with that quiet strength makes me admire you even more, and honestly, you make me so proud to call you mine. And then came dessert — the malai kulfi — and it was absolutely delicious, but the real sweetness was you. The way you loved it so much, the way your face lit up, smiling like a little kid with pure joy in your eyes while eating it… that moment made my entire day. For those few minutes, it felt like all your stress disappeared, and seeing your sadness melt away, even temporarily, meant everything to me. If happiness had a face that night, it was yours — holding that dessert, smiling, and just being you. ❤️',
          image: 'assets/images/official/kulfi.jpeg',
          imagePos: 'right'
        }
      ]
    },
    // 6. New year
    { 
      id: 5, 
      src: 'assets/images/newyear/coverph.jpeg', 
      caption: 'New Year Beginsss✨', 
      date: '04 Jan, 2026',
      description: 'You are my universe.', 
      rotation: 1.5, 
      tapePos: 'center', 
            storyBlocks: [
        {
          title: 'New Year Starts❤️',
          text: 'After New Year, things didn’t begin perfectly for us. It was a bit of a rough start — a few fights, some misunderstandings, emotions running high — but what mattered most was that we didn’t give up on each other. We chose to sit through it, talk it out, try different approaches, and understand one another better. That’s what I love about us — we choose each other, even when it’s hard. So on the 4th, we decided to meet early in the morning and head to the fort for breakfast, almost like a fresh reset. You were excited about the Nutcracker-themed café, and when we found out the theme wasn’t there anymore, I could see you were a little dejected. But somehow, just nearby, we found the loveliest little café, and it turned out to be perfect in its own way. We had delicious pasta and hazelnut coffee, and it felt warm, comforting — like the universe reminding us that things don’t have to go exactly as planned to still be beautiful. And then, as if the morning wasn’t already perfect, you in that lavender top… you looked absolutely pretty — too cute to handle. I was mesmerized every single second, couldn’t stop staring, couldn’t stop simping. The soft color suited you so perfectly, and the way you carried yourself so effortlessly made my heart calm in ways I can’t even explain. That day wasn’t just about breakfast or movies; it was about us choosing love over ego, understanding over anger, and walking forward together — stronger than before. And seeing you smile again after everything? That was my favorite part. 💜✨',
          image: 'assets/images/newyear/food.jpeg', 
          imagePos: 'right'
        },
        {
          title: 'Movie At Marine Lines❤️',
          text: 'After that, we headed to the theatre at Marine Lines, and somehow that part of the day felt exactly like what we both needed. We had so much pent-up frustration from the past few days, so many emotions we had been carrying quietly, and that afternoon became our reset. No details, no explanations — just us, present with each other. It was one of those rare days where time felt like it slowed down just for us, where the outside world didn’t matter and nothing else could disturb the peace we had created together. We laughed, we relaxed, we let go of everything that had been weighing on us. It wasn’t loud or dramatic — it was simply beautiful. The kind of beautiful that you don’t need to explain to anyone because only the two people living it truly understand it. It became a day we never wanted to end, an afternoon that felt safe, comforting, and completely ours. And when I look back at it, I don’t remember stress or fights — I just remember us choosing each other again and again. Totally, completely worth it. ❤️',
          image: 'assets/images/newyear/theatre.jpeg',
          imagePos: 'left'
        },
        {
          title: 'Lunch Together❤️',
          text: 'Later, we headed for lunch at HyLo, and the fish there was absolutely delicious. We even had kulfi again — and somehow it tasted even better that day. We clicked some really beautiful photos, little frozen memories of a day that already felt special. After we stepped out, though, something shifted. You received a call from Mumma asking you to return home early, and I could see your eyes fill up. That moment scared me. I didn’t fully know how to console you or take away what you were feeling, but I knew one thing — I just wanted to be there for you. I held you close, tried to calm you down, tried everything I could in that moment to make you feel safe and supported. After things settled a little, we finally went to try the soda you had been wanting for so long, and I was so happy we got to tick that off your list. But then I made a mistake. I got a call from home asking me to return early too, and I told you to go home alone. Even now, the guilt of that moment sits heavy in my heart — especially knowing you weren’t feeling your best. I wish I had handled it differently. I’m truly sorry for that. We did end up having a fight when we reached, emotions were high, everything felt messy — but somehow, through it all, we chose to talk again, to understand again, to stay again. And maybe that’s what love really is — not perfection, but two people growing closer even after difficult moments. That day had its highs and lows, but in the end, it made us stronger, softer, and more certain about each other. ❤️',
          image: 'assets/images/newyear/lunch.jpeg',
          imagePos: 'right'
        }
      ]
    },
  ];

  getMemories() { return this.memories; }
  getMemoryById(id: number) { return this.memories.find(m => m.id === id); }
}