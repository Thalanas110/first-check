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
      title: 'Sunset Kiss',
      author: 'Anonymous',
      excerpt: ['As the sun dips below the horizon,', 'Your lips find mine in the fading glow—'],
      mood: 'Passionate',
      accentColor: '#FF6B35',
      lines: [
        'As the sun dips below the horizon,',
        'Your lips find mine in the fading glow,',
        'The ocean whispers secrets we have spoken',
        'In every wave that ebbs and starts to flow.',
        '',
        'The sky burns orange, crimson, and bright gold,',
        'A canvas painted just for us tonight,',
        'And all the stories we have yet to fold',
        'Unfurl like sails against the amber light.',
        '',
        'Hold me here where day meets tender night,',
        'Where love is all the language that we need,',
        'A single kiss more powerful than flight,',
        'More beautiful than any flower or creed.',
        '',
        'The sunset fades but we remain and glow,',
        'Two hearts entwined where warm tides always flow.'
      ]
    },
    {
      id: 2,
      title: 'The Golden Shore',
      author: 'Anonymous',
      excerpt: ['I found forever in the sand beneath our feet,', 'In golden light that crowned the restless sea—'],
      mood: 'Tender',
      accentColor: '#FFB347',
      lines: [
        'I found forever in the sand beneath our feet,',
        'In golden light that crowned the restless sea,',
        'Where every wave that reached the shore to greet',
        'Carried a word the tides had meant for thee.',
        '',
        'We walked the line where water meets the land,',
        'And wrote our names where footprints dare to stay,',
        'The ocean took them gently from the sand,',
        'But kept our love to carry far away.',
        '',
        'The shore is golden in the dying sun,',
        'And you are gold beside me in the light,',
        'Two searching souls at last become as one',
        'Beneath the vault of this enormous night.',
        '',
        'Return with me to where the warm tides gleam,',
        'That shore of gold where we first dared to dream.'
      ]
    },
    {
      id: 3,
      title: 'Crimson Horizon',
      author: 'Anonymous',
      excerpt: ['Your love is the crimson bleeding through the sky,', 'A fire I never asked to be extinguished—'],
      mood: 'Fierce',
      accentColor: '#C0392B',
      lines: [
        'Your love is the crimson bleeding through the sky,',
        'A fire I never asked to be extinguished,',
        'It burns along the edge of the day\'s goodbye',
        'With colors that no painter could have wished.',
        '',
        'I stood alone on shores I knew too well,',
        'Until your warmth came blazing on the tide,',
        'And broke whatever cold and hollow shell',
        'Had kept the truest self of me inside.',
        '',
        'The crimson deepens as the day grows old,',
        'And in that burning color I see you:',
        'Relentless, beautiful, and bright and bold,',
        'A love that sets the very world on fire anew.',
        '',
        'Let the horizon burn with all we\'ve known,',
        'In crimson light, I am no longer alone.'
      ]
    },
    {
      id: 4,
      title: 'Dance of Waves',
      author: 'Anonymous',
      excerpt: ['We move together like the sea and sand,', 'In rhythms older than the stars above—'],
      mood: 'Playful',
      accentColor: '#2980B9',
      lines: [
        'We move together like the sea and sand,',
        'In rhythms older than the stars above,',
        'You reach for me and I reach out my hand',
        'And call this ancient back-and-forth our love.',
        '',
        'The waves have danced this way since time began,',
        'Pull close, recede, then surge again to shore,',
        'And so do we, in nature\'s endless plan:',
        'Each drawing back just to return once more.',
        '',
        'I love the dance, the ebb and tidal grace,',
        'The way you crash against my waiting arms,',
        'And leave the salt of laughter on my face,',
        'The ocean\'s music and the shore\'s alarms.',
        '',
        'Dance with me forever on this shore,',
        'Two waves that always find each other\'s roar.'
      ]
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
