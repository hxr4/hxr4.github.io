import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import SubtleAnimations from "@/components/SubtleAnimations";
import { motion } from "framer-motion";
import { ExternalLink, Music, Guitar, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const songs = [
  {
    title: "Chahun Main Ya Naa",
    artist: "Arijit Singh",
    album: "Aashiqui 2",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102403/Aashiqui-2-Hindi-2013-500x500_oxo3xp.webp",
    link: "https://open.spotify.com/track/6UgcN95w7vQxkR8sEFmwHG?si=b429f2bd09244394",
    description: "The song that defines heartbreak and longing. Arijit's voice cuts through like a knife - every note is pain, every word is poetry. This isn't just a love song; it's an emotional journey."
  },
  {
    title: "Arz Kiya Hai",
    artist: "Anuv Jain",
    album: "Coke Studio Bharat",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102528/Arz-Kiya-Hai-Coke-Studio-Bharat-Hindi-2025-20250818054005-500x500_tyhulq.webp",
    link: "https://open.spotify.com/track/1bMkimTb47umgNP6xCi4A1?si=36f0bf9fbfe847c5",
    description: "Anuv Jain's soulful poetry meets Coke Studio's magic. The way he weaves emotions into metaphors is unmatched. This track feels like a warm hug on a cold night."
  },
  {
    title: "The Night We Met",
    artist: "Lord Huron",
    album: "Strange Trails",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102630/The-Night-We-Met-English-2018-20190120201512-500x500_zaooiw.webp",
    link: "https://open.spotify.com/track/3hRV0jL3vUpRrcy398teAU?si=8de706a04ad64150",
    description: "Nostalgia bottled in 3 minutes and 28 seconds. If time travel exists, it sounds like this. Lord Huron captures the ache of missing moments that can never return."
  },
  {
    title: "PILLOWTALK",
    artist: "ZAYN",
    album: "Mind of Mine",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102735/wp7452465_cl5qvy.webp",
    link: "https://open.spotify.com/track/0PDUDa38GO8lMxLCRc4lL1?si=a4424d06cba04351",
    description: "Raw. Sensual. Unapologetic. Zayn's post-1D era started with a bang, and this track proves he was meant for solo stardom. The production is chef's kiss."
  },
  {
    title: "Nenjukkul Peidhidum",
    artist: "Harris Jayaraj",
    album: "Vaaranam Aayiram",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102816/Vaaranam-Aayiram-2008-500x500_s6xk9t.webp",
    link: "https://open.spotify.com/track/4vlMdXsRpAIXYggwbNHZSv?si=35310f5b25b34861",
    description: "Harris Jayaraj's genius in full display. The melody sneaks into your heart like the title suggests. A Tamil classic that transcends language barriers with pure emotion."
  },
  {
    title: "Malare",
    artist: "Vijay Yesudas",
    album: "Premam",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102904/Premam-Malayalam-2015-500x500_gfgk0x.webp",
    link: "https://open.spotify.com/track/4Hvf9xIeJWp5p9FkJerQhN?si=ccc37d155d53421c",
    description: "The sound of first love, captured perfectly. Premam's iconic track that makes you believe in romance all over again. Vijay Yesudas delivers magic here."
  },
  {
    title: "Nishani",
    artist: "Rishi Roy & Dabzee",
    album: "Single",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763102991/NISHANI-Hindi-2024-20240619115500-500x500_qijjsf.webp",
    link: "https://open.spotify.com/track/7ku3rPm8SXmRRaI6x3GGBa?si=8f182678ad2f43d5",
    description: "Modern indie meets desi vibes. Rishi Roy and Dabzee created something special here - the kind of track that plays on repeat for days. Raw, real, relatable."
  },
  {
    title: "Insaanile",
    artist: "Hanan Shah",
    album: "Single",
    cover: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103077/Insaanile-Malayalam-2025-20250325091554-500x500_t8wo1i.webp",
    link: "https://open.spotify.com/track/1kl8HxZrfUluGnW5rorqzC?si=165f12ab627d4e51",
    description: "Hanan Shah's voice is like silk wrapped around thorns. Insaanile explores the chaos of being human with poetic vulnerability. A hidden gem."
  }
];

const artists = [
  {
    rank: 1,
    name: "Arijit Singh",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103212/wp8923347_nndudj.webp",
    link: "https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw?si=bfe32c2a4ba847af",
    description: "The voice that redefined Bollywood romance. Arijit isn't just a singer; he's an emotion. His ability to pour soul into every syllable is unmatched. From heartbreak to hope, he's my #1 for a reason."
  },
  {
    rank: 2,
    name: "Shreya Ghoshal",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103425/137b99913eb39395821f6857da1a089a_gmj7vw.webp",
    link: "https://open.spotify.com/artist/0oOet2f43PA68X5RxKobEy?si=c2e48927248644f3",
    description: "The queen of melody. Shreya's voice is crystal clear perfection - every note hits exactly where it should. She brings grace and power in equal measure. A living legend."
  },
  {
    rank: 3,
    name: "Haricharan",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103570/Haricharan_500x500_kmmerh.webp",
    link: "https://open.spotify.com/artist/1QvyquqkuuwUzdszyoKIy4?si=NyHutkzBR7KpybafTdcZrg",
    description: "Underrated genius of South Indian music. Haricharan's versatility is mind-blowing - he can do classical, contemporary, and everything in between. His voice has this warmth that's addictive."
  },
  {
    rank: 4,
    name: "Shankar Mahadevan",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103681/shankar-mahadevan-vashi-navi-mumbai-playback-singers-bjdm5_nhzm6c.webp",
    link: "https://open.spotify.com/artist/1SJOL9HJ08YOn92lFcYf8a?si=283d4e65e88c43ff",
    description: "The man who made 'Breathless' a reality. Shankar Mahadevan is a powerhouse - technically brilliant and emotionally resonant. His classical training shines through in every performance."
  },
  {
    rank: 5,
    name: "KS Harisankar",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103781/400x400bb_temv95.webp",
    link: "https://open.spotify.com/artist/4JXqxFqi9dxlsiXKZhKvzB?si=0241cc0785544926",
    description: "The soulful voice of Malayalam cinema. KS Harisankar brings depth and emotion to every track. His songs feel like conversations with an old friend."
  },
  {
    rank: 6,
    name: "Anuv Jain",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103886/9287775_idva3n.webp",
    link: "https://open.spotify.com/artist/4gdMJYnopf2nEUcanAwstx?si=33316520b8e14c1d",
    description: "The voice of modern indie India. Anuv writes poetry, then sings it like he's reading from his diary. Authentic, vulnerable, and incredibly talented."
  },
  {
    rank: 7,
    name: "ZAYN",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763103988/bf7bd374ea32805789e5cfb855d48301_l3babf.webp",
    link: "https://open.spotify.com/artist/5ZsFI1h6hIdQRw2ti0hz81?si=02cadb6b159c4ae9",
    description: "The rebel who chose artistry over fame. Zayn's R&B-influenced sound is smooth, mature, and unapologetically him. His vocal range is insane."
  },
  {
    rank: 8,
    name: "The Weeknd",
    photo: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763104080/ab67616100005174c5649add07ed3720be9d5526_bz0qrn.webp",
    link: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=64b17abfc3e54fd0",
    description: "The king of dark pop. The Weeknd creates sonic landscapes that are haunting and beautiful. His voice is a drug you can't quit. Cinematic excellence."
  }
];

const Spotify = () => {
  const [logoVisible, setLogoVisible] = useState(true);

  useState(() => {
    const timer = setTimeout(() => setLogoVisible(false), 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="min-h-screen bg-gradient-mesh relative">
      <AnimatedBackground />
      <SubtleAnimations />
      <Navigation />

      {/* Spotify Logo Animation */}
      {logoVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <Music className="h-32 w-32 text-primary" />
          </motion.div>
        </motion.div>
      )}

      <main className="pt-24 pb-20 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight flex items-center justify-center gap-4">
              <Music className="h-16 w-16" />
              My Sonic Universe
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              Music isn't just what I listen to - it's who I am. As a guitarist and audiophile, I live for those moments when a chord progression hits just right, when the bassline makes your chest vibrate, when lyrics speak your unsaid thoughts. Here's a glimpse into my musical soul.
            </p>
            <Button
              size="lg"
              onClick={() => window.open('https://open.spotify.com/user/hari456', '_blank')}
              className="group"
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Open My Spotify Profile
            </Button>
          </motion.div>

          {/* Guitar & Audiophile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <Guitar className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Guitar Enthusiast</h3>
                    <p className="text-muted-foreground">
                      There's something magical about feeling strings vibrate under your fingertips. Whether it's nailing that tricky solo or just strumming on lazy evenings, my guitar is an extension of my thoughts. Music theory meets emotion when you create your own melodies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Headphones className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Audiophile at Heart</h3>
                    <p className="text-muted-foreground">
                      I don't just hear music; I experience it. From lossless formats to studio-grade headphones, I chase that perfect sound signature. Every instrument, every vocal layer, every subtle reverb - I hear it all. Music deserves to be heard the way it was meant to be.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Favorite Songs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Top 8 Tracks</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              My music library has thousands of songs, but at the end of the day, I'm only human. These are the 8 tracks that defined my recent playlists. Want more? Check my public playlists - trust me, it's a rabbit hole worth falling into.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {songs.map((song, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-square">
                      <motion.img
                        src={song.cover}
                        alt={song.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.a
                        href={song.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Music className="h-16 w-16 text-white" />
                      </motion.a>
                    </div>
                    
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
                        {song.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{song.artist}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                        {song.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Favorite Artists */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Top 8 Artists</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              These artists shaped my musical identity. Rankings mean nothing when everyone's great, but here's my current top 8. My full artist collection? Visit my profile - I promise you'll discover something new.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {artists.map((artist, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-square">
                      <motion.img
                        src={artist.photo}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg shadow-lg">
                        #{artist.rank}
                      </div>
                      <motion.a
                        href={artist.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <ExternalLink className="h-12 w-12 text-white" />
                      </motion.a>
                    </div>
                    
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                        {artist.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 border border-border rounded-lg"
          >
            <p className="text-muted-foreground italic">
              "This is just the tip of the iceberg. My musical taste isn't confined to 8 songs and 8 artists - I'm a genre-fluid listener who finds beauty everywhere. Want the full experience? Hit up my Spotify profile and dive into my playlists. Trust me, you'll either love my taste or question my sanity. Either way, it's a journey." 🎵
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Spotify;
