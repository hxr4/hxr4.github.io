import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import SubtleAnimations from "@/components/SubtleAnimations";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Music, Guitar, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const songs = [
  {
    title: "Chahun Main Ya Naa",
    artist: "Arijit Singh",
    album: "Aashiqui 2",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102403/Aashiqui-2-Hindi-2013-500x500_oxo3xp.webp",
    link: "https://open.spotify.com/track/6UgcN95w7vQxkR8sEFmwHG?si=b429f2bd09244394",
    description: "The song that defines heartbreak and longing. Arijit's voice cuts through like a knife."
  },
  {
    title: "Arz Kiya Hai",
    artist: "Anuv Jain",
    album: "Coke Studio Bharat",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102528/Arz-Kiya-Hai-Coke-Studio-Bharat-Hindi-2025-20250818054005-500x500_tyhulq.webp",
    link: "https://open.spotify.com/track/1bMkimTb47umgNP6xCi4A1?si=36f0bf9fbfe847c5",
    description: "Anuv Jain's soulful poetry meets Coke Studio's magic."
  },
  {
    title: "The Night We Met",
    artist: "Lord Huron",
    album: "Strange Trails",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102630/The-Night-We-Met-English-2018-20190120201512-500x500_zaooiw.webp",
    link: "https://open.spotify.com/track/3hRV0jL3vUpRrcy398teAU?si=8de706a04ad64150",
    description: "Nostalgia bottled in 3 minutes. If time travel exists, it sounds like this."
  },
  {
    title: "PILLOWTALK",
    artist: "ZAYN",
    album: "Mind of Mine",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102735/wp7452465_cl5qvy.webp",
    link: "https://open.spotify.com/track/0PDUDa38GO8lMxLCRc4lL1?si=a4424d06cba04351",
    description: "Raw. Sensual. Unapologetic. Zayn's post-1D era started with a bang."
  },
  {
    title: "Nenjukkul Peidhidum",
    artist: "Harris Jayaraj",
    album: "Vaaranam Aayiram",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102816/Vaaranam-Aayiram-2008-500x500_s6xk9t.webp",
    link: "https://open.spotify.com/track/4vlMdXsRpAIXYggwbNHZSv?si=35310f5b25b34861",
    description: "Harris Jayaraj's genius in full display. The melody sneaks into your heart."
  },
  {
    title: "Malare",
    artist: "Vijay Yesudas",
    album: "Premam",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763401794/Premam-Malayalam-2015-500x500_pfyl55.webp",
    link: "https://open.spotify.com/track/4Hvf9xIeJWp5p9FkJerQhN?si=ccc37d155d53421c",
    description: "The sound of first love, captured perfectly."
  },
  {
    title: "Nishani",
    artist: "Rishi Roy & Dabzee",
    album: "Single",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102991/NISHANI-Hindi-2024-20240619115500-500x500_qijjsf.webp",
    link: "https://open.spotify.com/track/7ku3rPm8SXmRRaI6x3GGBa?si=8f182678ad2f43d5",
    description: "Modern indie meets desi vibes."
  },
  {
    title: "Insaanile",
    artist: "Hanan Shah",
    album: "Single",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103077/Insaanile-Malayalam-2025-20250325091554-500x500_t8wo1i.webp",
    link: "https://open.spotify.com/track/1kl8HxZrfUluGnW5rorqzC?si=165f12ab627d4e51",
    description: "Malayalam indie at its finest."
  }
];

const artists = [
  {
    rank: 1,
    name: "Arijit Singh",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103212/wp8923347_nndudj.webp",
    link: "https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw?si=bfe32c2a4ba847af",
    description: "The voice that redefined Bollywood romance. His ability to pour soul into every syllable is unmatched."
  },
  {
    rank: 2,
    name: "Shreya Ghoshal",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103425/137b99913eb39395821f6857da1a089a_gmj7vw.webp",
    link: "https://open.spotify.com/artist/0oOet2f43PA68X5RxKobEy?si=c2e48927248644f3",
    description: "The queen of melody. Shreya's voice is crystal clear perfection."
  },
  {
    rank: 3,
    name: "Haricharan",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103570/Haricharan_500x500_kmmerh.webp",
    link: "https://open.spotify.com/artist/1QvyquqkuuwUzdszyoKIy4?si=NyHutkzBR7KpybafTdcZrg",
    description: "Underrated genius of South Indian music. His versatility is mind-blowing."
  },
  {
    rank: 4,
    name: "Shankar Mahadevan",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103681/shankar-mahadevan-vashi-navi-mumbai-playback-singers-bjdm5_nhzm6c.webp",
    link: "https://open.spotify.com/artist/1SJOL9HJ08YOn92lFcYf8a?si=283d4e65e88c43ff",
    description: "The man who made 'Breathless' a reality. Technically brilliant."
  },
  {
    rank: 5,
    name: "KS Harisankar",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103781/400x400bb_temv95.webp",
    link: "https://open.spotify.com/artist/4JXqxFqi9dxlsiXKZhKvzB?si=0241cc0785544926",
    description: "The soulful voice of Malayalam cinema."
  },
  {
    rank: 6,
    name: "Anuv Jain",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103886/9287775_idva3n.webp",
    link: "https://open.spotify.com/artist/4gdMJYnopf2nEUcanAwstx?si=33316520b8e14c1d",
    description: "The voice of modern indie India. Authentic and vulnerable."
  },
  {
    rank: 7,
    name: "ZAYN",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103988/bf7bd374ea32805789e5cfb855d48301_l3babf.webp",
    link: "https://open.spotify.com/artist/5ZsFI1h6hIdQRw2ti0hz81?si=02cadb6b159c4ae9",
    description: "The rebel who chose artistry over fame."
  },
  {
    rank: 8,
    name: "The Weeknd",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763402110/512px-The_Weeknd_Portrait_by_Brian_Ziff_wzv1wf.webp",
    link: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=64b17abfc3e54fd0",
    description: "The king of dark pop. Creates haunting sonic landscapes."
  }
];

const Spotify = () => {
  const [logoVisible, setLogoVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLogoVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-mesh relative overflow-hidden">
      <AnimatedBackground />
      <SubtleAnimations />
      <Navigation />

      <AnimatePresence>
        {logoVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-600 via-purple-600 to-blue-600"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              <Music className="w-32 h-32 text-white drop-shadow-2xl" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white rounded-full blur-3xl opacity-50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-20 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-green-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              My Sonic Universe
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto mb-8">
              Music is my therapy, my energy, my escape. From Bollywood classics to Western indie, I don't discriminate - if it hits, it hits.
            </p>
            <Button asChild className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
              <a href="https://open.spotify.com/user/31cms34hx7swbmxgc27cxzt53ue4?si=2065f16b9e054bfa" target="_blank" rel="noopener noreferrer">
                <Music className="w-4 h-4 mr-2" />
                Visit My Spotify Profile
              </a>
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20 p-8 rounded-sm border border-border bg-gradient-to-br from-card/50 to-secondary/30 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <Headphones className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl font-bold">Audiophile Confession</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <p className="mb-4">24-bit/96kHz isn't just a spec sheet flex - it's how music should be experienced. I can tell you if the snare drum is slightly off or if the bass is mixed too low.</p>
                <p>My "anatomical ears" pick up nuances most people miss. Every layer, every frequency matters.</p>
              </div>
              <div className="flex items-center gap-4">
                <Guitar className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Guitar Vibes</h3>
                  <p className="text-sm">I don't just listen to music - I create it. My guitar is my second voice.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Top 8 Tracks</h2>
            <p className="text-muted-foreground mb-8">My musical DNA in 8 songs. These aren't just tracks - they're pieces of me.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {songs.map((song, index) => (
                <motion.a key={song.title} href={song.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3, delay: index * 0.05 }} viewport={{ once: true }} className="group">
                  <Card className="overflow-hidden border-border hover:border-foreground transition-all hover:shadow-xl hover:shadow-green-500/20 bg-gradient-to-br from-card to-secondary/50">
                    <div className="relative aspect-square overflow-hidden">
                      <img src={song.cover} alt={song.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <ExternalLink className="absolute top-3 right-3 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm mb-1 line-clamp-1">{song.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{song.artist}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{song.description}</p>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-8 italic">
              My music taste isn't confined to 8 songs. Check out my <a href="https://open.spotify.com/user/31cms34hx7swbmxgc27cxzt53ue4?si=2065f16b9e054bfa" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-green-400 underline">public playlists</a> for the full story.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Top 8 Artists</h2>
            <p className="text-muted-foreground mb-8">The voices that shaped my musical journey.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {artists.map((artist, index) => (
                <motion.a key={artist.name} href={artist.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3, delay: index * 0.05 }} viewport={{ once: true }} className="group">
                  <Card className="overflow-hidden border-border hover:border-foreground transition-all hover:shadow-xl hover:shadow-purple-500/20 bg-gradient-to-br from-card to-secondary/50">
                    <div className="relative aspect-square overflow-hidden">
                      <img src={artist.photo} alt={artist.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full"><span className="text-xs font-bold">#{artist.rank}</span></div>
                      <ExternalLink className="absolute top-3 right-3 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm mb-2">{artist.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-3">{artist.description}</p>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-8 italic">These are just the ones I had space to feature. My Spotify profile has the unabridged version.</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Spotify;