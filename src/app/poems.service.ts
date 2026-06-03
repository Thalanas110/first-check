import { Injectable } from '@angular/core';

export interface Poem {
  id: number;
  title: string;
  author: string;
  excerpt: string[];
  lines: string[];
  mood: string;
  accentColor: string;
}

export interface PoemContext {
  poem: Poem;
  prev: Poem | null;
  next: Poem | null;
  stanzas: string[][];
}

@Injectable({ providedIn: 'root' })
export class PoemsService {
  private readonly poems: ReadonlyArray<Poem> = [
    {
      id: 1,
      title: 'An Barkong Nag-abot',
      author: 'Benedict Ellie A. Lowell | BSCS 3-A',
      excerpt: ['Sa tahaw kan gabing puno nin kadikloman,', 'May barkong nag-abot sa tahimik na baybayan;'],
      mood: 'Reflective',
      accentColor: '#2E8B57',
      lines: [
        'Sa tahaw kan gabing puno nin kadikloman,',
        'May barkong nag-abot sa tahimik na baybayan;',
        'Nagdanay ako sa harani kan pantalan,',
        'Dai aram kun biyaya o panibagong kasakitan.',
        '',
        'Dakol nang bagyo an nag-agi sa karagatan,',
        'Dakol nang saad an tinabunan nin kalipatan;',
        'Dakol nang pusong ginadan nin kasalanan,',
        'Asin dakol nang mata an napuno nin kalungkutan.',
        '',
        'Nung marungog ko an saimong dating kaagihan,',
        'Napuno ako nin dakulang pagduduman;',
        'Ta may mga taong naglalaro sa paglaoman,',
        'Asin nag-iiwan nin bakas na dai malipatan.',
        '',
        'Kaya ako nagdanay sa tahaw kan pantalan,',
        'Dai nagdadalagan sa bagong kapalaran;',
        'Mas marhay nang magbantay sa kalayuan,',
        'Kaysa mahulog naman sa dating kasakitan.',
        '',
        'Pero bako an hangin an nagpoon nin kahadean,',
        'Bako man an alon sa tahaw kan baybayan;',
        'Sa gabing tahimik asin puno nin kahiloman,',
        'Ikaw an nagtao kan pinakaunang kahadean.',
        '',
        'Sarong simpleng pagbati na may kalambingan,',
        'Wara nin pilit, wara nin kapalaluan;',
        'Pero sa puso kong puno nin pagduduman,',
        'Nagtanom iyan nin munting paglaoman.',
        '',
        'Ipinahiling ko saimo an sakuyang mga gibuhon,',
        'Mga proyekto, obligasyon, asin mga handumon;',
        'Patunay na dai ako basta nawawara sa panahon,',
        'Kundi nakikipaglaban sa sakuyang mga pangitngiton.',
        '',
        'Asin habang ako nagkukwento kan mga pasanon,',
        'Ikaw nagdangog na may dakulang pagdangogon;',
        'An mga sugat na tago sa sakuyang kabubut-on,',
        'Nasasabutan mo maski wara pang pagtaramon.',
        '',
        'Duman naghinay an dating mabagsik na alon,',
        'Asin naglinaw an madiklom na panahon;',
        'Ta minsan palan, an tunay na pagbangon,',
        'Nagtitikang sa pusong may dakulang pagdangogon.',
        '',
        'Kaya kun may maghapot kun sain nagpoon an rason,',
        'Dai sa matam-is na saad o mga tataramon;',
        'Kundi sa barkong nag-abot sa tahaw kan alon,',
        'Asin sa sarong "hello" na nagin sakuyang paglaomon.'
      ]
    },
    {
      id: 2,
      title: 'That One Night We Talked',
      author: 'Benedict Ellie A. Lowell | BSCS 3-A',
      excerpt: ['Sa gabing tahimik asin may kahiloman,', 'Nag-istoryahan kita na may kaluwasan;'],
      mood: 'Introspective',
      accentColor: '#4F7CAC',
      lines: [
        'Sa gabing tahimik asin may kahiloman,',
        'Nag-istoryahan kita na may kaluwasan;',
        'Dai sindaing magpakusog o magpanggaran,',
        'Kundi duwang kaluluwang may kakulangan.',
        '',
        'May gutom sa puso na dai maibitaran,',
        'May handom na piglalaban sa kahiditan;',
        'Nagtaram kita na wara nang pag-iingatan,',
        'Siring baga kita nagkilala na nin kaidtoan.',
        '',
        'An sakuyang pader mataas na hararoman,',
        'Tinukod nin taon nin pagkapirdihan;',
        'Bawat tipak may bakas nin kasakitan,',
        'Asin bawat bato may ngaran na kapalpakan.',
        '',
        'Dakol nang nagtingin sa sakuyang hararoman,',
        'Dakol man an nagsubok nin pagsulod duman;',
        'Pero nagbalik sinda sa parehong kadiklanan,',
        'Na wara man sana nin nabag-o sa sakuyang kamugtakan.',
        '',
        'Pero sa gabing may tahimik na kahadean,',
        'Dai mo ginpusol an pader sa pakikigbaan;',
        'Sarong taram mo sana na may katotoohan,',
        'Asin an hararoman nagkaigwa nin bitakan.',
        '',
        'Habang pigdadangog ko an saimong kaagihan,',
        'Nabati ko an tagong lungkot sa kada tataramon;',
        'May ngisi sa imo pero may kahiditan,',
        'Na tinatago sa likod kan saimong katatawanan.',
        '',
        'Pig-istorya mo an mga suliran sa harong nindoan,',
        'An mga gabing puno nin pag-aalitan;',
        'An mga taram na nagdudulot nin kasakitan,',
        'Asin an paglaom na pirming sinusubukan.',
        '',
        'Asin sa lambang detalye kan saimong istoryahan,',
        'Nabati ko an saimong pagkapagal asin kahinaan;',
        'Dai bilang kapalpakan o kakulangan,',
        'Kundi bilang pusong may dakulang pinasanan.',
        '',
        'Duman ko nasabutan an saimong kalagayan,',
        'Na sa likod kan kusog may nakatagong kalungkutan;',
        'Asin sa likod kan ngisi may pag-uusisa man,',
        'Kun may matitirang tawo na dai magpapabayaan.',
        '',
        'Kaya an gabing yaon dai ko malilipatan,',
        'Ta dai sana kita nagkaigwa nin istoryahan;',
        'Duwang pusong gutom sa pag-intindihan,',
        'An nag-abot asin nagkaigwa nin kahadean.'
      ]
    },
    {
      id: 3,
      title: 'An Tulay sa Kadikloman',
      author: 'Adriaan M. Dimate | BSCS 4-A',
      excerpt: ['Nag-abot an aldaw nin dakulang pagsubok,', 'An mga pultahan pinasara sa pagdali;'],
      mood: 'Hopeful',
      accentColor: '#6A1B9A',
      lines: [
        'Nag-abot an aldaw nin dakulang pagsubok,',
        'An mga pultahan pinasara sa pagdali;',
        'An mga dalan pinutol nin kahiditan,',
        'Asin an paglaom pigsubok sa kahiloman.',
        '',
        'Duwang puso an pinalayo nin kapalaran,',
        'Duwang ngaran an pig-ulang sa kahadean;',
        'An mga taram na dating madaling abuton,',
        'Nagin bihira sa lambang panahon.',
        '',
        'Sa sarong kisapmata nagbago an sitwasyon,',
        'An mga oras nagin puno nin paghulaton;',
        'An dating kasanayan nagin alaala lamang,',
        'Asin an kada minuto may kabug-atan.',
        '',
        'May mga nagsiring na tapos na an lakaw,',
        'Na an barkong naglayag mapapara sa dagat;',
        'Na an bagyo sapat na para magpahingalo,',
        'Asin an kahadean dai na magduro.',
        '',
        'Pero dai ninda aram an katotoohan,',
        'Na may mga pusong dai basta sumusuko;',
        'Na kun sarhan man ninda an sarong dalan,',
        'May matutukod na bago sa kadikloman.',
        '',
        'Habang an iba nagtutukod nin harangon,',
        'May iba man na nagtutukod nin tulayon;',
        'Tahimik sana, wara nin paghambogon,',
        'Pero puno nin kusog asin katuyuhan.',
        '',
        'Sa tahaw kan gabing puno nin kahiditan,',
        'Nagkaigwa nin mga kamot na handang magbulig;',
        'Mga kaibigang nagtindog sa kahadean,',
        'Asin nagtao nin liwanag sa kadikloman.',
        '',
        'May mga mensaheng dai dapat mawara,',
        'May mga pangungusap na dapat maabot pa;',
        'Ta an puso dai man sinusukat nin distansya,',
        'Kundi sa pagpadagos kan saiyang paglaom.',
        '',
        'Asin sa kada tulay na naitukod duman,',
        'May bagong kusog na pigtao kan panahon;',
        'Na bako palan gabos nadadaog nin harangon,',
        'Kun an katuyuan puno nin katotoohan.',
        '',
        'Nahiling ko man an kusog sa saimong puso,',
        'Maski pigpapasan mo an sadiring bagyo;',
        'Maski pigpipilit ka kan mga pagsubok,',
        'Nagpapadagos ka gihapon sa pag-abot.',
        '',
        'Asin sa lambang aldaw nin paghulaton,',
        'Mas lalo kong nasabutan an kahulugan;',
        'Na an tunay na koneksyon sa duwang kaluluwa,',
        'Dai basta napuputol nin simpleng problema.',
        '',
        'Ta may mga butang na lampas sa harangon,',
        'Lampas sa kadikloman asin kalayuan;',
        'Mga bagay na nabubuhay sa paglaom,',
        'Asin nagtitinindog sa tahaw kan panahon.',
        '',
        'Kaya kun may maghapot kun pano ini nabuhay,',
        'Kun pano ini nagduro maski may kadikloman;',
        'Masasabi ko sana sa tahaw kan buhay—',
        'Pigsarad ninda an mga pultahan,',
        'Pero an mga puso nakahanap nin tulayon.'
      ]
    },
    {
      id: 4,
      title: 'Kun Magduro an Panahon',
      author: 'Adriaan M. Dimate | BSCS 4-A',
      excerpt: ['May siyudad na tinukod sa karagatan,', 'Napapalibutan nin bakal na harangan;'],
      mood: 'Resolute',
      accentColor: '#2C3E50',
      lines: [
        'May siyudad na tinukod sa karagatan,',
        'Napapalibutan nin bakal na harangan;',
        'Dakol nang hukbo an nag-abot sa atubangan,',
        'Pero gabos nagbalik sa kadikloman.',
        '',
        'Nagngalitngit an langit sa kahiloman,',
        'Naglinog an daga sa kapatagan;',
        'An mga bandera naglayog sa kalangitan,',
        'Siring tanda nin dakulang gerahan.',
        '',
        'Dakol an pamangkot sa atubangan,',
        'Dakol man an paghusgar sa kahimtangan;',
        'Pig-uukian an lambang katuyuhan,',
        'Asin pigsusukol an katibayan.',
        '',
        'An mga tore nagtindog sa kalayuan,',
        'An mga pader makusog sa katibayan;',
        'Pigbantayan ini nin dating kasakitan,',
        'Asin pinatibay nin pagduduman.',
        '',
        'Dakol nang alon sa karagatan,',
        'Dakol nang bagyo sa kalangitan;',
        'Pero an siyudad nagdanay sa katindugan,',
        'Maski pig-uuran nin kahaditan.',
        '',
        'An mga agi sa tahaw kan kapatagan,',
        'Napuno nin usok asin kadikloman;',
        'Pig-uukian an lambang pundasyon,',
        'Para masukol an tunay na katibayan.',
        '',
        'Asin sa tunga kan maingay na gerahan,',
        'May tahimik na hagad sa kalayuan;',
        'Dai ini kulog kan karagatan,',
        'Kundi hagakgak nin kabubut-an.',
        '',
        'Ta sa likod kan mga katatawanan,',
        'May tagong bakas nin kalungkutan;',
        'Sa likod kan mga simpleng tataramon,',
        'May pusong puno nin pagduduman.',
        '',
        'Nag-abot an tigsik nin panahon,',
        'Siring amihan sa tahaw kan kabubut-on;',
        'May pamangkot na dai lubos na nagtataramon,',
        'Pero mababati sa tahaw kan kahiloman.',
        '',
        'Siring an bulan sa tahaw kan karagatan,',
        'Na pirming natatabunan nin kadikloman;',
        'May kahadlok na magin sarong alaalon,',
        'Na madara sana nin panahon.',
        '',
        'May pantalan sa tahaw kan baybayon,',
        'Na pirming naghuhulat nin pagbalikon;',
        'Dai ini nagdadalagan sa direksyon,',
        'Dai man napapaurag sa panahon.',
        '',
        'An mga parola sa tahaw kan baybayon,',
        'Pirming may sindi sa lambang kahiloman;',
        'Dai ninda gin-aapura an mga layagon,',
        'Kundi piggigiya sinda sa paroroonan.',
        '',
        'Asin sa tunga kan usok kan gerahan,',
        'May tahimik na saad na nabuoan;',
        'Dai bilang kulog sa kalangitan,',
        'Kundi siring bituing may katindugan.',
        '',
        'Ta an tunay na paglaom may katibayan,',
        'Dai basta nalulusaw sa kahaditan;',
        'Maski magngalitngit an kalangitan,',
        'Nagpupundo giraray sa kabubut-an.',
        '',
        'An siyudad nagtinindog sa kadagaan,',
        'An mga pader nakaabot sa katapusan;',
        'Pero may sarong butang na lampas sa husgaran,',
        'Na dai masukol nin ano mang sukolan.',
        '',
        'Kaya sa tahaw kan gabing may kahiloman,',
        'Sa tunga kan bagyo asin gerahan;',
        'May sarong puso na nagpili nin pag-antayan,',
        'Maski magduro pa an panahonan.'
      ]
    },
    {
      id: 5,
      title: 'The Girl Who Spoke Like Rain',
      author: 'Adriaan M. Dimate | BSCS 4-A',
      excerpt: ['Some flowers arrive with thunder and flame,', 'Demanding the world to remember their name;'],
      mood: 'Tender',
      accentColor: '#C0829D',
      lines: [
        'Some flowers arrive with thunder and flame,',
        'Demanding the world to remember their name;',
        'But you were the hush at the close of the day,',
        'A soft little star that refused to fade away.',
        '',
        'You entered my life without banners unfurled,',
        'Without any wish to astonish the world;',
        'Yet somehow the silence you carried with grace,',
        'Left traces of light in every place.',
        '',
        'The first time I heard your voice through the air,',
        'I forgot every burden and every despair;',
        'It floated so gently through distance and time,',
        'Like a hymn that had wandered from Heaven sublime.',
        '',
        'I listened again, then listened once more,',
        'As though it were waves on a faraway shore;',
        'For every soft syllable fell from above,',
        'Like rain teaching deserts the meaning of love.',
        '',
        'There was sweetness concealed in the way that you spoke,',
        'In the pauses between every word that awoke;',
        'And even your shyness, reluctant to stay,',
        'Made my guarded old heart slowly drift your way.',
        '',
        'For behind every smile there lingered a fear,',
        'A shadow that quietly followed you near;',
        'A wound that reminded your spirit each day,',
        'That not every person is destined to stay.',
        '',
        'I noticed it there in the things left unsaid,',
        'In the caution that walked where your confidence tread;',
        'Yet somehow those fragments made you more real,',
        'A portrait no painter could perfectly reveal.',
        '',
        'You never pretended to shine like the sun,',
        'Or claimed to be flawless before anyone;',
        'Yet the honesty woven through all that you are,',
        'Made you brighter than many who tried to shine far.',
        '',
        'And every small detail I happened to see,',
        'Became unexpectedly precious to me;',
        'The things you called ordinary, simple, or slight,',
        'Somehow transformed into sources of light.',
        '',
        'Your laughter was gentle, your manner was kind,',
        'Leaving echoes that lingered long after in mind;',
        'Like pages revisited time after time,',
        'Still beautiful long after reading each line.',
        '',
        'Then one day you trusted me just enough,',
        'To share little pieces of yourself and your love;',
        'A glimpse through a window carefully drawn,',
        'A portrait illuminated by dawn.',
        '',
        'And when those photographs finally came through,',
        'The world seemed determined to pause for a view;',
        'I saved every image before I could think,',
        'Afraid that a moment might vanish in a blink.',
        '',
        'Not because beauty was all that I saw,',
        'Nor because perfection inspired me with awe;',
        'But because every picture carried your name,',
        'And knowing their owner made them impossible to tame.',
        '',
        'There are sunsets more brilliant than gold in the sky,',
        'And wonders that travelers journey to find;',
        'Yet none of them ever persuaded my heart,',
        'To linger the way you did from the start.',
        '',
        'For beauty alone is a fleeting delight,',
        'A candle that flickers away in the night;',
        'But kindness and softness endure through the years,',
        'Remaining through triumphs and remaining through tears.',
        '',
        'And so when I think of the path that began,',
        'I remember no grand or remarkable plan;',
        'Only a shy little voice reaching over the sea,',
        'And somehow finding its way directly to me.',
        '',
        'If anyone asks what first captured my eyes,',
        'It wasn\'t mere beauty beneath distant skies;',
        'It was a gentle soul learning slowly to trust,',
        'And a quiet young heart that I treasure because it is just... you.'
      ]
    },
    {
      id: 6,
      title: 'Amber Sky',
      author: 'Anonymous',
      excerpt: ['Bathed in amber, everything is warm,', 'The world turns gold the moment you arrive—'],
      mood: 'Warm',
      accentColor: '#E67E22',
      lines: [
        'Bathed in amber, everything is warm,',
        'The world turns gold the moment you arrive,',
        'And every coldness and each blustering storm',
        'Becomes a distant dream I just survived.',
        '',
        'The amber pours across the rippling sea,',
        'And gilds the ordinary into grace,',
        'The same way loving you has gilded me',
        'With light and purpose, warmth, and living space.',
        '',
        'I want to stay inside this amber hour,',
        'Where everything is soft and lit and bright,',
        'Where you are near and golden is your power',
        'To turn the ordinary into light.',
        '',
        'Stay with me beneath the amber sky,',
        'Where ordinary moments learn to fly.'
      ]
    },
    {
      id: 7,
      title: 'Written in Sand',
      author: 'Anonymous',
      excerpt: ['They said that love written in sand would fade,', 'The tide would claim each letter, each bright line—'],
      mood: 'Longing',
      accentColor: '#A0835C',
      lines: [
        'They said that love written in sand would fade,',
        'The tide would claim each letter, each bright line,',
        'But what the tide has washed away has made',
        'A deeper channel, yours and also mine.',
        '',
        'We wrote our names where no one dared to stand,',
        'Where every wave came crashing in to play,',
        'The sea erased them, took them from the sand,',
        'But left our love more permanent to stay.',
        '',
        'For love is not the letters or the name,',
        'It is the choosing, standing, daring still,',
        'To write again into the foamy claim',
        'Of time that robs but cannot break our will.',
        '',
        'So write my name in sand and watch it go,',
        'Our love is what the sea can never know.'
      ]
    },
    {
      id: 8,
      title: 'Salt and Stars',
      author: 'Anonymous',
      excerpt: ['When the sun surrendered to the night,', 'We lay beneath a universe of light—'],
      mood: 'Dreamy',
      accentColor: '#6C3483',
      lines: [
        'When the sun surrendered to the night,',
        'We lay beneath a universe of light,',
        'The salt of sea still perfuming the air,',
        'And stars emerging, one by one, up there.',
        '',
        'You pointed out the constellations known',
        'And traced them with your finger in the dark,',
        'As if the sky were yours and yours alone',
        'To give to me, a navigating spark.',
        '',
        'I have been lost in many kinds of night,',
        'The kind that has no stars, no sea, no you,',
        'But here with salt and stars, I find my light',
        'Reflecting in the depths of the ocean blue.',
        '',
        'Keep me in this salt-and-starlit space',
        'Where you and sky and sea share a single face.'
      ]
    },
    {
      id: 9,
      title: 'The Tide Returns',
      author: 'Anonymous',
      excerpt: ['No matter how far the tide retreats,', 'It always finds its way back to the shore—'],
      mood: 'Devoted',
      accentColor: '#1A8754',
      lines: [
        'No matter how far the tide retreats,',
        'It always finds its way back to the shore,',
        'And so my love, through all its dark defeats,',
        'Finds you and beats and swells and loves you more.',
        '',
        'The moon commands the ocean\'s endless pull,',
        'And you, somehow, command the pull of me,',
        'A gravity complete and beautiful',
        'That draws me always back across the sea.',
        '',
        'I have been a tide that tried to flee,',
        'That tried to break the pattern, find the end,',
        'But every wave comes home to where you\'d be,',
        'And I will always, always come back, friend.',
        '',
        'The tide returns — it\'s nature, it\'s the law,',
        'My heart returns to you, forever more.'
      ]
    },
    {
      id: 10,
      title: 'Burning Clouds',
      author: 'Anonymous',
      excerpt: ['The clouds were burning when I found your hand,', 'The sky a canvas no one else could paint—'],
      mood: 'Magical',
      accentColor: '#C2185B',
      lines: [
        'The clouds were burning when I found your hand,',
        'The sky a canvas no one else could paint,',
        'As if the universe had somehow planned',
        'This moment, holy, breathless, like a saint.',
        '',
        'They burned in violet, orange, pink, and rose,',
        'As though reflecting all the warmth we\'d share,',
        'The kind of beauty only heaven knows',
        'Unfolded in the evening ocean air.',
        '',
        'I could have watched the burning clouds all night',
        'But you were there and brighter than the sky,',
        'Your eyes held every color of that light',
        'And told me truths that words could not supply.',
        '',
        'The clouds burned out but I still hold your hand,',
        'The fire in my heart needs no command.'
      ]
    },
    {
      id: 11,
      title: 'Ocean Devotion',
      author: 'Anonymous',
      excerpt: ['As deep as the fathomless ocean floor,', 'As wide as the horizon in full bloom—'],
      mood: 'Eternal',
      accentColor: '#1A5276',
      lines: [
        'As deep as the fathomless ocean floor,',
        'As wide as the horizon in full bloom,',
        'My love for you grows deeper, ever more,',
        'From waking dawn to silver midnight\'s room.',
        '',
        'The ocean holds its mysteries below,',
        'In trenches where no sunlight dares to fall,',
        'And I hold secrets only you would know',
        'In depths that only you would dare to call.',
        '',
        'I am the sea: I rage, I calm, I roar,',
        'I carry ships and drown the careless soul,',
        'But you are what I\'ve always beaten for,',
        'The distant shore that makes the ocean whole.',
        '',
        'Devoted as the tides are to the moon,',
        'I love you now, forever, and too soon.'
      ]
    }
  ];

  getAllPoems(): ReadonlyArray<Poem> {
    return this.poems;
  }

  getPoem(id: number): Poem | undefined {
    return this.poems.find((poem) => poem.id === id);
  }

  getAdjacentPoems(id: number): { prev: Poem | null; next: Poem | null } {
    const idx = this.poems.findIndex((poem) => poem.id === id);

    if (idx === -1) {
      return { prev: null, next: null };
    }

    return {
      prev: idx > 0 ? this.poems[idx - 1] : null,
      next: idx < this.poems.length - 1 ? this.poems[idx + 1] : null
    };
  }

  getPoemContext(id: number): PoemContext | undefined {
    const poem = this.getPoem(id);

    if (!poem) {
      return undefined;
    }

    const { prev, next } = this.getAdjacentPoems(id);
    return {
      poem,
      prev,
      next,
      stanzas: this.buildStanzas(poem.lines)
    };
  }

  private buildStanzas(lines: ReadonlyArray<string>): string[][] {
    const stanzas: string[][] = [];
    let currentStanza: string[] = [];

    for (const line of lines) {
      if (line === '') {
        if (currentStanza.length > 0) {
          stanzas.push(currentStanza);
          currentStanza = [];
        }

        continue;
      }

      currentStanza.push(line);
    }

    if (currentStanza.length > 0) {
      stanzas.push(currentStanza);
    }

    return stanzas;
  }
}
